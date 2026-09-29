import { defineHastPlugin } from "satteri";

/**
 * Turns an image with a title into a figure with a caption. The image must
 * stand in its own paragraph. The title becomes the caption text.
 *
 * Example: ![Alt text](./photo.jpg "Caption text")
 */
export const hastFigureCaptions = defineHastPlugin({
  name: "hast-figure-captions",
  element: {
    filter: ["img"],
    visit(node, context) {
      const { title, ...properties } = node.properties;
      if (typeof title !== "string") return;

      const parent = context.parent(node);
      if (parent.type !== "element" || parent.tagName !== "p" ||
        parent.children.length !== 1) return;

      context.replaceNode(parent, {
        type: "element",
        tagName: "figure",
        properties: {},
        children: [
          { ...node, properties },
          {
            type: "element",
            tagName: "figcaption",
            properties: {},
            children: [{ type: "text", value: title }],
          },
        ],
      });
    },
  },
});
