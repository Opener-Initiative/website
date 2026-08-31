import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        description: z.string(),
        // Date-only means UTC midnight, which renders as written in any
        // timezone at or ahead of UTC.
        pubDate: z.coerce
          .date()
          .refine((d) => d.toISOString().endsWith("T00:00:00.000Z"), {
            error: "pubDate must be date-only (YYYY-MM-DD), not a timestamp",
          }),
        image: image().optional(),
        imageAlt: z.string().optional(),
        imageCredit: z.string().optional(),
        draft: z.boolean().default(false),
      })
      .refine((d) => !!d.image === !!d.imageAlt, {
        error: "image and imageAlt must be set together",
        path: ["imageAlt"],
      })
      .refine((d) => !d.imageCredit || !!d.image, {
        error: "imageCredit requires image",
        path: ["imageCredit"],
      }),
});

export const collections = { news };
