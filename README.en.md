# Cosmos-Chic Blog

A personal blog built with [Hexo](https://hexo.io): the warm paper palette of [hexo-theme-cosmos](https://github.com/cweiai/hexo-theme-cosmos) as the base style, restructured with components and interactions from [hexo-theme-Chic](https://github.com/Siricee/hexo-theme-Chic), hosted on GitHub Pages.

**[中文文档](README.md)** · **[Live Demo](https://3cabbage1.github.io/)**

## Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Writing](#writing)
- [Customization](#customization)
- [Light / Dark Mode](#light--dark-mode)
- [Typography](#typography)
- [Deploying to GitHub Pages](#deploying-to-github-pages)
- [Project Structure](#project-structure)
- [FAQ](#faq)
- [Credits](#credits)

## Features

### Overall Style

- **Palette / visuals**: cosmos warm paper tones (paper `#f4eedf`, accent red `#a6402c`, honey `#eccc77`)
- **Footer**: unified Chic footer on every page — `© Author | Powered by Hexo & Cosmos-Chic`

### Header (two layouts)

| Page | Layout | Details |
| --- | --- | --- |
| Home | Chic navbar | 72px tall, logo left / menu right, drawer menu on mobile |
| All others | cosmos site-header | 110px tall, 25px brand, underline slide-in nav links, hamburger dropdown on mobile |

- Light/dark switch uses Chic's original `<label for="switch_default" class="toggleBtn"></label>` element, right after About
- Header navigation switches pages Chic-style (cosmos cross-page view transitions disabled)

### Home Hero

- `<h1 id="hero-title"><span>Your</span> <em>Name</em></h1>` (name placeholder, configurable)
- cosmos original illustration `figure.hero-illustration` (`abstract-star-sea.png`)
- Chic's `<div class="description">` under the title (Markdown supported)
- cosmos `nav.hero-links` (Blog Posts / About)
- Chic's `<div class="links">` social links (iconfont icons + email envelope icon)

### Post List (/blog/, /archives/, category & tag pages)

- Chic archives style: year + title + date only
- cosmos `index-tools` filter bar: `All writing 6` plus all tags in `# TagName count` format
- Tags stay on one line, horizontally scrollable when overflowing

### Post Detail

- **Fully Chic typography** (cosmos colors): 11pt body, 2em line height, justified text, browser-default heading sizes, `#` `|` `*` heading prefixes, 13px Consolas code, 5px 15px table cells
- `post-header`: Author / Date / Category (no reading time)
- TOC `aside.post-toc`: under the header on the right side, becomes `position: fixed` when scrolling reaches the browser top; tocbot scroll-spy, collapse animation and Expand all menu
- `post-copyright` / `post-tags` / `post-nav` follow Chic

### Category / Tag Pages

- Page titles use cosmos About-style `header.about-heading` (82px with a period)
- Content: Chic category cards (up to 5 posts + More >>) and tag cloud with counts

### About Page

- Original cosmos design preserved: `About` heading + italic aside + profile card + education timeline

## Quick Start

Requires [Node.js](https://nodejs.org) ≥ 20

```bash
npm install      # install dependencies
npm run server   # local preview at http://localhost:4000
npm run build    # generate static files into public/
```

## Writing

```bash
npx hexo new "Post title"
```

Posts live in `source/_posts/`. Front-matter example:

```yaml
---
title: Post title
date: 2026-10-07 10:00:00
categories: [Tech]
tags: [Hexo]
description: One-line excerpt
---
```

## Customization

### 1. Site info — `_config.yml`

| Field | Description |
| --- | --- |
| `title` / `author` | Site title and author (currently `Huang Yangyuxin`) |
| `subtitle` / `description` | Subtitle and site description |
| `url` | Deployed domain (currently `https://3cabbage1.github.io`) |
| `language` | UI language (currently `en`; UI copy matches the original projects) |

### 2. Theme config — `themes/cosmos-chic/_config.yml`

| Section | Description |
| --- | --- |
| `home.title` + `home.aside` | Hero title `<span>Your</span> <em>Name</em>` |
| `home.description` | Home description (Markdown) |
| `home.image.src` | Hero illustration (cosmos original `abstract-star-sea.png`) |
| `chic.navname` | Header logo text |
| `chic.nav` | Header menu (label: path) |
| `chic.links` | Home social links (key lowercased matches iconfont icons; `Email` uses the envelope icon) |
| `chic.post_copyright_*` | Post copyright block (author / permalink / license / slogan) |
| `about.profile` | About profile card (avatar / facts / contacts) |
| `post.*` | Post page toggles (TOC / category / progress / tags / prev-next) |
| `style.colors` | Site-wide palette variables |
| `motion` | Motion toggles (`page_transitions` disabled per Chic) |

### 3. About content — `source/_content/about.md`

cosmos example content (Hello / Interests / Education timeline), edit freely.

## Light / Dark Mode

- Toggle via the Chic switch on the header right; state persists in `sessionStorage`
- Light: cosmos warm paper palette
- Dark: Chic dark palette (background `#292a2d`, text `#a9a9b3`, code `#787575/#fffe28`, …) with **all red accents switched to the header-active bright white `#fff`**

## Typography

| Script | Font |
| --- | --- |
| Latin | cosmos: Hanken Grotesk (sans) / Petrona (italic emphasis) |
| Chinese | Chic: FZLanTingHei `lanting` webfont (self-hosted, ~970KB) |
| Code | Consolas, Monaco, Menlo, monospace |

The CSS stacks list Latin fonts first and Chinese fonts after, so the browser resolves glyphs per script.

## Deploying to GitHub Pages

Repository: https://github.com/3cabbage1/3cabbage1.github.io

| Branch | Content |
| --- | --- |
| `main` | Built static site from `public/` (served by GitHub Pages, includes `.nojekyll`) |
| `source` | Full blog source (where this README lives) |

After changing posts or config, deploy with one command:

```bash
npm run deploy
```

The script runs `hexo clean` → `hexo generate` → adds `.nojekyll` → pushes the build to `main` (triggering a Pages rebuild) → pushes the source to `source`.

## Project Structure

```
blog/
├── _config.yml                   # site config
├── package.json                  # dependencies & scripts (deploy / server / build)
├── deploy.ps1                    # one-command deploy script
├── README.md                     # Chinese documentation
├── README.en.md                  # English documentation (this file)
├── source/
│   ├── _posts/                   # posts (6 samples)
│   └── _content/about.md         # About page content
└── themes/cosmos-chic/           # theme
    ├── _config.yml               # theme config
    ├── layout/                   # EJS templates
    │   ├── layout.ejs            # shell (dual headers / footer / assets)
    │   ├── home.ejs              # home hero
    │   ├── index.ejs             # list pages (year+title+date / index-tools)
    │   ├── post.ejs              # post page (Chic structure)
    │   ├── categories.ejs        # category cards page
    │   ├── tags.ejs              # tag cloud page
    │   ├── about.ejs             # About page (original cosmos)
    │   └── _partial/
    │       ├── header.ejs        # header (Chic on home / cosmos elsewhere)
    │       └── footer.ejs        # Chic footer
    ├── scripts/                  # Hexo extensions (from cosmos)
    ├── lib/                      # cosmos settings core
    ├── languages/                # en / zh-CN strings
    └── source/
        ├── css/style.css         # cosmos base styles
        ├── css/chic.css          # Chic components (cosmos palette + lanting font)
        ├── css/tocbot.css        # tocbot base styles
        ├── js/chic.js            # theme switch / home menu / sticky TOC + tocbot
        ├── js/main.js            # cosmos interactions (header menu / copy code / progress)
        ├── image/abstract-star-sea.png   # cosmos original hero illustration
        └── fonts/                # cosmos + Chic (lanting) + iconfont fonts
```

## FAQ

**How do I replace the name placeholder?**
Search for `Huang Yangyuxin` in `_config.yml` (title/author) and `themes/cosmos-chic/_config.yml` (`home.title` / `home.aside` / `chic.navname`).

**How do I change social links?**
Edit `chic.links` in `themes/cosmos-chic/_config.yml`. Keys are lowercased to match iconfont icons (github / zhihu / weibo / rss, …); an `Email` entry automatically uses the envelope icon with a `mailto:` value.

**Deployed changes not visible?**
GitHub Pages CDN caches for ~10 minutes (`max-age=600`); hard refresh afterwards.

**Config changes not reflected locally?**
`_config.yml` and theme config load at `hexo server` startup — restart the server after editing.

**Switch the UI back to Chinese?**
Set `language: zh-CN` in `_config.yml` (strings come from `themes/cosmos-chic/languages/zh-CN.json`).

## Credits

- [hexo-theme-cosmos](https://github.com/cweiai/hexo-theme-cosmos) (MIT) — palette, About page, header layout, illustration
- [hexo-theme-Chic](https://github.com/Siricee/hexo-theme-Chic) (MIT) — header/footer elements, post structure, category/tag pages, dark palette, Lantinghei font
- [tocbot](https://github.com/tscanlin/tocbot) — post table of contents
- [Hexo](https://hexo.io) — static site generation
