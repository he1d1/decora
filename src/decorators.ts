import { XMLInput } from "./utils.ts";
import { islands, router } from "./server.ts";

/**
 * A decorator that adds a component to the router.
 * @param pathname - The pathname of the route.
 * @constructor
 */
export function Page<T extends { new (): { render(req: Request): XMLInput } }>(
  pathname: string
) {
  return function (target: T) {
    router.set(pathname, target);
    return target;
  };
}

/**
 * A decorator that partially hydrates a component.
 * @param target - The component to partially hydrate.
 * @constructor
 */
export function Island<T extends { new (): any }>(target: T) {
  // get state from the constructor
  // state is stored in properties of the constructor

  islands.set(`/static/${target.name}.js`, target);

  return target;
}

export function Model<T extends { new (): any }>(target: T) {
  console.log(target);
  return target;
}
