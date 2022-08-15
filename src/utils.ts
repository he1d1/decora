import htm from "https://cdn.pika.dev/htm";

export const colors = {
  brand: "#4059ad",
  info: "#5bc0eb",
  error: "#ed254e",
  success: "#c2eabd",
  warning: "#f9dc5c",
};

export type XMLInput = Node | Node[];
type Node = {
  tag: string;
  props?: { [key: string]: string };
  children?: Node[];
};
/**
 * @see https://github.com/developit/htm
 */
export const html = htm.bind(h);

/**
 * @see https://github.com/hyperhype/hyperscript
 * @param tag - The tag name of the element.
 * @param props - The properties of the element.
 * @param children - The children of the element.
 */
export function h(tag: string, props: Object, ...children: any[]) {
  return { tag, props, children };
}

export const XML = {
  /**
   * A function that converts an object to an XML string.
   * @param obj - The object to convert to XML.
   */
  stringify(obj: XMLInput): string {
    if (Array.isArray(obj)) {
      return obj.map((child) => XML.stringify(child)).join("");
    }

    if (typeof obj?.tag === "function") {
      obj = h(
        obj.tag.name,
        {
          ...obj.props,
          hydrate: "onload",
          children: XML.stringify(obj.children),
        },
        [
          new obj.tag().render(obj.props),
          h("script", {
            src: `static/${obj.tag.name}.js`,
            defer: true,
            type: "module",
          }),
        ]
      );
    }

    if (!(typeof obj === "object")) {
      return obj;
    }

    const { tag, props, children } = obj;

    const attrs = Object.entries(props ?? {}).map(
      ([key, value]) => `${key}="${value}"`
    );

    const childrenString = XML.stringify(children ?? []);

    return `<${tag} ${attrs.join(" ")}>${childrenString}</${tag}>`;
  },
};
