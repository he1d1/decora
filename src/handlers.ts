import { colors } from "./utils.ts";
import { render } from "./render.ts";
import * as esbuild from "https://deno.land/x/esbuild@v0.15.2/mod.js";
import { islands, layouts, router } from "./server.ts";
import RequestEvent = Deno.RequestEvent;

export async function staticHandler(requestEvent: RequestEvent) {
  if (new URL(requestEvent.request.url).pathname === "/static/client.js") {
    const ts = await Deno.readTextFile("./src/client.ts");
    const result = await esbuild.transform(ts, {
      loader: "ts",
      sourcemap: true,
    });
    esbuild.stop();
    return result.code;
  }
  const island: { new (): any } = islands.get(
    new URL(requestEvent.request.url).pathname
  ) as { new (): any };
  return (
    "import htm from 'https://unpkg.com/htm@3.1.1/mini/index.module.js';" +
    "function h(type, props, ...children) {\n" +
    "  return { type, props, children };\n" +
    "}" +
    "const html = htm.bind(h);" +
    island.toString() +
    `window.hydrate(${island.name}, import.meta);`
  );
}

export async function pageHandler(
  requestEvent: any,
  conn: Deno.Conn,
  renderer: AsyncGenerator
) {
  const pageConstructor = router.get(
    new URL(requestEvent.request.url).pathname
  );

  const layoutConstructor = layouts.get(
    new URL(requestEvent.request.url).pathname
  );

  if (!pageConstructor) {
    requestEvent.respondWith(
      new Response("Not Found", {
        status: 404,
        headers: new Headers({
          "content-type": "text/html",
        }),
      })
    );
    console.log(
      `%c404%c: %c${conn.remoteAddr.hostname} %c·%c ${
        new URL(requestEvent.request.url).pathname
      }`,
      `color: ${colors.error}; font-weight: bold`,
      "color: gray",
      "",
      "color: gray",
      ""
    );
    return;
  }

  console.log(
    `%c200%c: %c${conn.remoteAddr.hostname} %c·%c ${
      new URL(requestEvent.request.url).pathname
    } %c·%c ${pageConstructor.name}`,
    `color: ${colors.success}; font-weight: bold`,
    "color: gray",
    "",
    "color: gray",
    "",
    "color: gray",
    ""
  );

  const component = new pageConstructor();

  renderer ??= render(component, requestEvent.request);

  const body = (await renderer.next(component)).value as string;
  requestEvent.respondWith(
    new Response(body, {
      status: 200,
      headers: new Headers({
        "content-type": "text/html",
      }),
    })
  );
}
