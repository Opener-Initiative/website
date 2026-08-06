import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPublishedNews } from "@/lib/news";

export async function GET(context: APIContext) {
  const entries = (await getPublishedNews()).slice(0, 20);
  return rss({
    title: "Opener Initiative",
    description: "News and updates from the Opener Initiative.",
    site: context.site!,
    customData: "<language>en</language>",
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.pubDate,
      link: `/news/${entry.id}/`,
    })),
  });
}
