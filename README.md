# My Blog (Cosmos-Chic)

A personal Hexo blog: [hexo-theme-cosmos](https://github.com/cweiai/hexo-theme-cosmos) warm-paper palette
as the base style, restructured with [hexo-theme-Chic](https://github.com/Siricee/hexo-theme-Chic)
components. UI copy follows the original projects' English wording.

## Theme features

- **Palette / overall look**: cosmos (`#f4eedf` paper, `#a6402c` accent, serif italic titles)
- **Typography**: English glyphs render with cosmos fonts (Hanken Grotesk / Petrona);
  Chinese glyphs fall through to Chic's FZLanTingHei (`lanting`) webfont
- **Header**: Chic navbar on every page (Posts / Categories / Tags / About),
  Chic's `<label for="switch_default" class="toggleBtn"></label>` light/dark switch right after About,
  drawer menu on mobile
- **Footer**: unified Chic footer `© author | Powered by Hexo & Cosmos-Chic`
- **Home hero**:
  - `<h1 id="hero-title"><span>Your</span> <em>Name</em></h1>` (replace with your own name)
  - Chic's `<div class="description">` under the title (Markdown supported)
  - Chic's `<div class="links">` directly under `<nav class="hero-links">` (iconfont icons)
- **Post list** (`/blog/`, `/archives/`, category & tag pages): Chic archives style —
  year + title + date only
- **Post detail**: Chic structure — post-header (Author / Date / Category, no reading time),
  `post-content`, fixed right `post-toc` (tocbot), `post-copyright`, `post-tags`, `post-nav`
- **Category page** (`/category/`): Chic category cards, up to 5 posts per card + More >>
- **Tag page** (`/tag/`): Chic tag cloud with counts
- **About page**: original cosmos design, English labels
- **Mobile**: responsive gutters, drawer navigation, date hidden on narrow archive lists,
  stacked post-nav / copyright rows

## Quick start

```bash
npm install
npm run server   # preview at http://localhost:4000 (or npx hexo server -p 4321)
npm run build    # generate static files into public/
```

## Personalize

1. Site info: `blog/_config.yml` (title / author / description / url) — replace `Your Name`
2. Theme config: `blog/themes/cosmos-chic/_config.yml`
   - `home.title` + `home.aside`: hero title `<span>Your</span> <em>Name</em>`
   - `home.description`: home description (Markdown)
   - `chic.navname`: header logo text
   - `chic.nav`: header menu
   - `chic.links`: home social links (key lowercased matches iconfont: github / zhihu / weibo / rss …)
   - `about.profile`: About page profile card
3. Posts: `blog/source/_posts/*.md`

## Write a post

```bash
npx hexo new "Post title"
```

Front-matter example:

```yaml
---
title: Post title
date: 2026-10-07 10:00:00
categories: [Tech]
tags: [Hexo]
description: One-line excerpt
---
```

## Project structure

```
blog/
├── _config.yml               # site config
├── source/_posts/            # posts
└── themes/cosmos-chic/       # theme (cosmos base + Chic restructure)
    ├── _config.yml           # theme config
    ├── layout/               # EJS templates
    └── source/
        ├── css/style.css     # cosmos base styles
        ├── css/chic.css      # Chic components in cosmos palette (+ lanting @font-face)
        ├── css/tocbot.css    # tocbot base styles
        ├── fonts/lanting/    # Chic Chinese webfont
        └── js/chic.js        # menu / theme switch / toc scripts
```

## Credits

- [hexo-theme-cosmos](https://github.com/cweiai/hexo-theme-cosmos) (MIT)
- [hexo-theme-Chic](https://github.com/Siricee/hexo-theme-Chic) (MIT)
- [tocbot](https://github.com/tscanlin/tocbot)
