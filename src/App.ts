import { start } from "./server.ts";
import { html, XMLInput } from "./utils.ts";
import { Page, Island, Model } from "./decorators.ts";

@Model
class Post {
  title?: string;
  createdAt = new Date();
  body?: string;
}

@Page("/")
export class HomePage {
  render(req: Request, models) {
    return html`
      <body>
        <script type="module" src="/static/client.js" defer></script>
        <p>${req.url}</p>
        <${Counter} count=${10}><//>
      </body>
    `;
  }
}

@Island
class Counter {
  count = 0;

  render({ children }: { children: XMLInput }) {
    return html` <button onclick=${() => this.count++}>${this.count}</button>`;
  }
}

await start();
