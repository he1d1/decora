console.info(
  "Made with %cDecora %c·%c 🌊",
  "color: #4059ad; font-weight: bold",
  "color: gray",
  ""
);

const metaType = import.meta;

declare global {
  interface Window {
    hydrate: (
      constructor: new () => { render(...args: any[]): any },
      meta: typeof metaType
    ) => void;
  }
}

window.hydrate = function (
  constructor: new () => { render(attributes: any): void },
  meta: typeof metaType
) {
  const currentScripts: NodeListOf<Element> = document.querySelectorAll(
    // @ts-ignore: slice does exist on string
    `script[src="${new URL(meta.url).pathname.slice(1)}"]`
  );

  currentScripts.forEach((currentScript) => {
    function* generator(currentScript: Element) {
      console.time();
      console.debug(
        "%cHydrating%c:",
        "color: green; font-weight: bold",
        "color: gray",
        currentScript?.parentNode
      );
      const element: Element = currentScript.parentNode as Element;
      const attributes = Array.from(element?.attributes).reduce(
        (a, { name, value }) => ({ ...a, [name]: value }),
        {}
      );

      const component = new constructor();

      function replace() {
        element.replaceChildren(
          ...[render(component.render(attributes), component)].flat(),
          currentScript
        );
      }

      replace();

      element.setAttribute("hydrated", "🌊");

      console.debug(
        "%cHydrated%c:",
        "color: green; font-weight: bold",
        "color: gray",
        element
      );

      console.timeEnd();
      yield;

      for (;;) {
        replace();
        console.debug(
          "%cRehydrated%c:",
          "color: green; font-weight: bold",
          "color: gray",
          element
        );
        yield;
      }
    }

    const renderer = generator(currentScript);
    renderer.next();

    function render(dom: any, component: any): any {
      if (typeof dom === "string" || typeof dom === "number") {
        return dom;
      }

      if (Array.isArray(dom)) {
        return dom.map((vdom) => render(vdom, component));
      }

      if (dom === undefined) return;
      const element = document.createElement(dom.type);

      for (const key in dom.props) {
        if (key.startsWith("on")) {
          element.addEventListener(
            key.slice(2),
            function (event: Event) {
              dom.props[key]();
              console.debug(
                "%cEvent%c:",
                "color: green; font-weight: bold",
                "color: gray",
                event
              );
              renderer.next();
            }.bind(component)
          );
          continue;
        }
        element.setAttribute(key, dom.props[key]);
      }

      element.append(...[render(dom.children, component)].flat());

      return element;
    }
  });
};
