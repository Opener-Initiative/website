# Opener Initiative Website

This repository contains the source code for the [Opener Initiative's website](https://opener-initiative.org).

## Getting Started

The easiest way to get a working environment is the included dev container (VS Code &rarr; "Reopen in Container"), which provides Bun and all dependencies.

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
imageCredit: "(c) Opener Initiative"
draft: true
pinned: true
---

Post text. Start headings at `##`, and reference images like this:

![The Opener booth at DECT World 2049](./booth.png)
```

Good to know:

- Only `title`, `description`, and `pubDate` are required. All other fields are optional.
- `pubDate` is a plain date (`YYYY-MM-DD`) and orders the posts, newest first. It must match the post's year and month folders.
- `image` is the post's cover picture and `imageAlt` its description for screen readers. Make it 1200 × 630 pixels, or post cards and link previews will crop it. Leave both out for a text-only post, but never one of them.
- `imageCredit` adds an attribution below the cover picture.
- `draft: true` can be used for news items that are not yet to be published. If set, the post is kept out of the build and the corresponding HTML page is not generated.
- `pinned: true` keeps a post at the front of the landing page and the newsroom, ahead of newer entries, and puts a golden star on its card. If multiple entries are pinned, they are ordered by `pubDate`. The RSS feed ignores pins and stays strictly newest to oldest.
- A post appears on the landing page, in the newsroom, and in the RSS feed automatically.

If something is wrong or missing, the build stops with a corresponding error message.
