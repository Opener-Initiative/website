import { defineHastPlugin } from "satteri";

/**
 * Turns the last paragraph of a blockquote into an attribution if it starts
 * with an em dash, which can be typed as ---.
 *
 * Example:
 * > Quote text
 * >
 * > --- Name, Affiliation
 */
export const hastQuoteAttributions = defineHastPlugin({
  name: "hast-quote-attributions",
  element: {
    filter: ["blockquote"],
    visit(node, context) {
      const last = node.children.findLast((child) => child.type === "element");
      if (last?.type !== "element" || last.tagName !== "p") return;

      const first = last.children[0];
      if (first?.type !== "text" || !first.value.startsWith("\u2014")) return;

      context.replaceNode(node, {
        type: "element",
        tagName: "figure",
        properties: {},
        children: [
          { ...node, children: node.children.filter((child) => child !== last) },
          { ...last, tagName: "figcaption", properties: { className: ["pl-5"] } },
        ],
      });
    },
  },
});
