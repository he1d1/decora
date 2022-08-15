import { XML } from "./utils.ts";

export async function* render(component, req) {
  // render
  for (;;) {
    component = yield XML.stringify(component.render(req));
  }
}
