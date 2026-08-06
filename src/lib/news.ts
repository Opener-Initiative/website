import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

/**
 * All published (non-draft) news entries, newest first. Every consumer of the
 * collection (entry pages, index, RSS, home page) must go through this so
 * drafts can never leak into one of them.
 */
export async function getPublishedNews(): Promise<CollectionEntry<"news">[]> {
  const entries = await getCollection("news", ({ data }) => !data.draft);
  return entries.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

// Pin the formatting timezone so the rendered date is independent of the
// build machine. pubDate is date-only (schema-enforced), so UTC renders it
// exactly as written in the frontmatter.
const longDate = new Intl.DateTimeFormat("en", {
  dateStyle: "long",
  timeZone: "UTC",
});

export function formatDate(date: Date): string {
  return longDate.format(date);
}
