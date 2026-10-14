import { defineHastPlugin, htmlToHast } from "satteri";
import type { Root } from "hast";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
import { ExternalLink } from "lucide-react";

const { children: [icon] } = htmlToHast(
  renderToStaticMarkup(
    createElement(ExternalLink, {
      size: "0.85em",
      className: "external-link-icon",
      "aria-hidden": "true",
      xmlns: undefined,
    }),
  ),
  { fragment: true },
) as Root;

/**
 * Opens external links in a new tab and appends an icon to indicate that
 * following the link leaves the site.
 * 
 * Based on this example from the Astro docs:
 * https://docs.astro.build/en/recipes/external-links/
 */
export const hastExternalLinks = defineHastPlugin({
  name: "hast-external-links",
  element: {
    filter: ["a"],
    visit(node, context) {
      if (node.properties.href?.startsWith("http")) {
        context.setProperty(node, "target", "_blank");
        context.setProperty(node, "rel", ["noopener", "noreferrer"]);
        context.appendChild(node, icon);
      }
    },
  },
});
