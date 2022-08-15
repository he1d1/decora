import { colors } from "./utils.ts";
import { pageHandler, staticHandler } from "./handlers.ts";

// TODO add slugs to routes
export const router = new Map<string, any>();
export const islands = new Map<string, { new (): any }>();
export const layouts = new Map<string, any>();

async function handle(conn: Deno.Conn) {
  console.log(
    `%cNew connection%c: %c${conn.remoteAddr.hostname}`,
    `color: ${colors.info}; font-weight: bold`,
    "color: gray",
    ""
  );
  const httpConn = Deno.serveHttp(conn);
  let renderer;
  for await (const requestEvent of httpConn) {
    if (new URL(requestEvent.request.url).pathname.startsWith("/static")) {
      const body = await staticHandler(requestEvent);
      requestEvent.respondWith(
        new Response(body, {
          status: 200,
          headers: new Headers({
            "content-type": "text/javascript",
          }),
        })
      );
    } else {
      await pageHandler(requestEvent, conn, renderer);
    }
  }
}

export async function start(port = 8080) {
  const server = Deno.listen({ port });

  console.log(
    "%cServer started%c: " + `%chttp://localhost:${port} %c·%c Decora`,
    `color: ${colors.info}; font-weight: bold`,
    "color: gray",
    "",
    "color: gray",
    `color: ${colors.brand}; font-weight: bold`
  );

  for await (const conn of server) {
    handle(conn);
  }
}
