# Opener Initiative Website

This repository contains the source code for the [Opener Initiative's website](https://opener-initiative.org).

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
    ├── content/           news posts and member profiles
    ├── layouts/           page shell
    ├── lib/               shared helpers
    ├── pages/             routes
    ├── content.config.ts  content collection schemas
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
- `image` is the post's cover picture and `imageAlt` its description for screen readers. Make it 1200 × 630 pixels, or post cards and link previews will crop it. Leave both out for a text-only post, but never one of them.
- Add `draft: true` to the header block to hide a post from the published site.
- A finished post appears on the home page, in the newsroom, and in the RSS feed automatically. Nothing else to edit.

If something is wrong or missing, the build stops and says what and where.

## Creating Member Profiles

Add your profile by creating a new folder under `src/content/members/`, for example:

```
src/content/members/wey-yu/
├── index.md         the profile
├── logo.svg         the logo
├── logo-dark.svg    the logo for dark mode
├── cover.png        the cover picture (optional)
└── team.png         any other images used in the profile text
```

The folder name becomes the address of the profile page, here `/members/wey-yu/`. Clicking the logo on the landing page opens the member's profile.

`index.md` starts with a header block between `---` lines, followed by the profile text in [Markdown](https://www.markdownguide.org/cheat-sheet/):

```markdown
---
name: "Weyland-Yutani Corporation"
logoLight: "./logo.svg"
logoDark: "./logo-dark.svg"
url: "https://en.wikipedia.org/wiki/Alien_(film)"
location: "Earth"
cover: "./cover.png"
coverAlt: "The commercial towing vehicle USCSS Nostromo in orbit above LV-426"
---

Profile text. Start headings at `##`, and reference images like this:

![The crew of the USCSS Nostromo](./team.png)
```

Good to know:

- `name` is the full name, as the member writes it. It is the page title, is announced by screen readers, and is used to sort logos alphabetically.
- `logoLight` is the logo shown on light backgrounds, whereas `logoDark` is the one used in dark mode. If one logo works on both light and dark backgrounds, point both fields at the same file. Please provide SVG files with a transparent background and no excessive padding. Logos are sized automatically and appear equally prominent.
- `url` points to the member's own website. It is shown on the profile page.
- `location` is optional free text, e.g. a city and country.
- `cover` is the optional picture that is shown across the top of the profile page and `coverAlt` is its description for screen readers. Leave both out for a page without a cover, but never one of them. The picture is shown in its own aspect ratio and is not cropped, unless it is taller than 2:1. Make it at least 1500 pixels wide. Banners from other social pages, such as LinkedIn, can be reused as they are.
- Writing a profile text is optional, but strongly encouraged. Without it, the page consists of the cover, logo, name, and details alone.
