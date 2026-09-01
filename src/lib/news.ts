import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

/**
 * All news entries that are not drafts, newest first.
 * 
 * "pinned-first" lists pinned entries first, all other entries follow.
 * Within each group the entries are sorted from newest to oldest.
 * 
 * "date" ignores pins entirely and sorts strictly from newest to oldest.
 */
export async function getPublishedNews(
  order: "pinned-first" | "date" = "pinned-first"
): Promise<CollectionEntry<"news">[]> {
  const entries = await getCollection("news");
  // The <year>/<month> folders duplicate pubDate's year and month; fail the
  // build on drift so the URL can never contradict the displayed date.
  for (const { id, data } of entries) {
    const expected = data.pubDate.toISOString().slice(0, 7).replace("-", "/");
    if (!id.startsWith(`${expected}/`)) {
      throw new Error(
        `news/${id}: folder does not match pubDate (expected ${expected}/<slug>)`,
      );
    }
  }

  const published = entries
    .filter(({ data }) => !data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  if (order === "date") {
    return published;
  }

  return published.sort((a, b) => Number(b.data.pinned) - Number(a.data.pinned));
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
