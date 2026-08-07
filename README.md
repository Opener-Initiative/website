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
