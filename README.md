# Opener Initiative Website

This repository contains the Opener Initiative's website.

## Getting Started

The easiest way to get a working environment is the included dev container (VS Code -> "Reopen in Container"), which provides Bun and all dependencies.

Otherwise, with [Bun](https://bun.com) installed:

```sh
bun install      # install dependencies
bun run dev      # start Astro dev server at http://localhost:8080
```

Other useful commands include:

```sh
bun run build    # production build -> dist/
bun run preview  # serve the production build locally
bun run check    # type-check
bun run lint     # lint
```

## Tech Stack

This project is built with:

- Astro
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Project Structure

```
├── public/                static files (favicon, robots.txt)
└── src/
    ├── assets/            logos and images
    ├── components/        Astro and React components
    ├── content/           news posts
    ├── layouts/           page shell
    ├── lib/               shared helpers
    ├── pages/             routes
    ├── content.config.ts  news collection schema
    └── index.css          global styles and light/dark themes
```

## Posting News

Every post is a folder under `src/content/news/`, sorted into year and month (zero-padded):

```
src/content/news/2049/11/dect-world/
├── index.md         the post
├── hero.png         the cover picture
└── booth.png        any other images
```

The folder name becomes the address, here `/news/2049/11/dect-world/`.

`index.md` starts with a header block between `---` lines, followed by the post text in [Markdown](https://www.markdownguide.org/cheat-sheet/):

```markdown
---
title: "DECT World 2049: A resounding success"
description: "A one-sentence summary. Shown on post cards and in the RSS feed."
pubDate: 2049-11-05
image: "./hero.png"
imageAlt: "Opener team members demoing the stack at DECT World 2049"
---

Post text. Start headings at `##`, and reference images like this:

![The Opener booth at DECT World 2049](./booth.png)
```

Good to know:

- `pubDate` is a plain date (`YYYY-MM-DD`). Posts are ordered by it, newest first, and it must agree with the post's year and month folders.
- `image` is the post's cover picture and `imageAlt` its description for screen readers. Leave both out for a text-only post, but never one of them.
- Add `draft: true` to the header block to hide a post from the published site.
- A finished post appears on the home page, in the newsroom, and in the RSS feed automatically. Nothing else to edit.

If something is wrong or missing, the build stops and says what and where.
