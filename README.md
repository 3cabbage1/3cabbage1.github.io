# Cosmos-Chic 博客

一个基于 [Hexo](https://hexo.io) 的个人博客：以 [hexo-theme-cosmos](https://github.com/cweiai/hexo-theme-cosmos) 的暖色纸张配色为主体风格，参照 [hexo-theme-Chic](https://github.com/Siricee/hexo-theme-Chic) 改造页面结构与交互，托管在 GitHub Pages。

**[English Documentation](README.en.md)** · **[在线预览](https://3cabbage1.github.io/)**

## 目录

- [特性](#特性)
- [快速开始](#快速开始)
- [日常写作](#日常写作)
- [个性化配置](#个性化配置)
- [深浅色模式](#深浅色模式)
- [字体方案](#字体方案)
- [部署到 GitHub Pages](#部署到-github-pages)
- [目录结构](#目录结构)
- [常见问题](#常见问题)
- [致谢](#致谢)

## 特性

### 整体风格

- **配色 / 视觉**：cosmos 暖色纸张系（纸色 `#f4eedf`、强调红 `#a6402c`、蜂蜜黄 `#eccc77`）
- **页脚**：全站统一 Chic 页脚 `© 作者 | Powered by Hexo & Cosmos-Chic`

### 页眉（两种排布）

| 页面 | 排布 | 说明 |
| --- | --- | --- |
| 首页 | Chic 导航栏 | 72px 高，logo 居左、菜单居右，移动端抽屉菜单 |
| 其余页面 | cosmos 页眉 | 110px 高，品牌 25px，导航链接下划线滑入动画，移动端汉堡下拉 |

- 明暗切换开关采用 Chic 原版 `<label for="switch_default" class="toggleBtn"></label>` 元素，紧跟 About 之后
- 点击页眉导航为 Chic 式直接切换（已关闭 cosmos 跨页过渡动画）

### 首页 Hero

- `<h1 id="hero-title"><span>Your</span> <em>Name</em></h1>`（姓名占位，可配置）
- cosmos 原版插图 `figure.hero-illustration`（`abstract-star-sea.png`）
- Chic 的 `<div class="description">`（标题下，Markdown 支持）
- cosmos 的 `nav.hero-links`（Blog Posts / About）
- Chic 的 `<div class="links">` 社交链接（iconfont 图标 + 邮箱信封图标）

### 文章列表（/blog/、/archives/、分类、标签）

- Chic archives 风格：仅展示「年份 + 标题 + 日期」
- cosmos 的 `index-tools` 筛选条：`All writing 6` + 全部标签（`# TagName 数量` 格式）
- 标签一行显示不完时横向滑动，保持单行

### 文章正文

- **排版完全 Chic**（颜色 cosmos 化）：11pt 正文、2em 行距、两端对齐、浏览器默认标题字号、`#` `|` `*` 标题前缀、13px Consolas 代码、表格 5px 15px 内边距
- `post-header`：Author / Date / Category（无阅读时长）
- 目录 `aside.post-toc`：位于 header 之下、页面右侧，滚动触顶后 `position: fixed` 吸顶，tocbot 滚动追踪 + 折叠动画 + Expand all 菜单
- `post-copyright` / `post-tags` / `post-nav` 均按 Chic

### 分类 / 标签页

- 页标题采用 cosmos About 页同款 `header.about-heading` 大标题（82px + 句点）
- 内容为 Chic 分类卡片（每类最多 5 篇 + More >>）与标签云（含计数）

### About 页

- 完整保留 cosmos 原设计：`About` 大标题 + 斜体副题 + 资料卡 + 教育时间线

## 快速开始

环境要求：[Node.js](https://nodejs.org) ≥ 20

```bash
npm install      # 安装依赖
npm run server   # 本地预览 http://localhost:4000
npm run build    # 生成静态文件到 public/
```

## 日常写作

```bash
npx hexo new "文章标题"
```

文章保存在 `source/_posts/`，Front-matter 示例：

```yaml
---
title: 文章标题
date: 2026-10-07 10:00:00
categories: [Tech]
tags: [Hexo]
description: 一句话摘要
---
```

正文支持常用 Markdown 元素；代码块、表格、引用等样式见《特性》一节。

## 个性化配置

### 1. 站点信息 — `_config.yml`

| 字段 | 说明 |
| --- | --- |
| `title` / `author` | 站点标题与作者（当前为 `Huang Yangyuxin`） |
| `subtitle` / `description` | 副标题与站点描述 |
| `url` | 部署域名（当前为 `https://3cabbage1.github.io`） |
| `language` | 界面语言（当前 `en`，界面文案为原项目英文原样） |

### 2. 主题配置 — `themes/cosmos-chic/_config.yml`

| 配置段 | 说明 |
| --- | --- |
| `home.title` + `home.aside` | 首页大标题 `<span>Your</span> <em>Name</em>` |
| `home.description` | 首页描述（Markdown） |
| `home.image.src` | 首页插图（cosmos 原版 `abstract-star-sea.png`） |
| `chic.navname` | 页眉 logo 文字 |
| `chic.nav` | 页眉菜单（label: path） |
| `chic.links` | 首页社交链接（key 小写匹配 iconfont 图标；`Email` 自动使用信封图标） |
| `chic.post_copyright_*` | 文章版权区（作者 / 链接 / 许可 / 标语） |
| `about.profile` | About 页资料卡（头像 / 事实 / 联系方式） |
| `post.*` | 文章页开关（目录 / 分类 / 进度条 / 标签 / 上下篇） |
| `style.colors` | 全站配色变量 |
| `motion` | 动效开关（`page_transitions` 已按 Chic 关闭） |

### 3. About 正文 — `source/_content/about.md`

cosmos 示例内容（Hello / Interests / Education 时间线），可直接修改。

## 深浅色模式

- 页眉右侧 Chic 开关切换，`sessionStorage` 记忆状态，刷新后保持
- 浅色：cosmos 暖纸配色
- 深色：Chic 暗色配色（背景 `#292a2d`、正文 `#a9a9b3`、代码 `#787575/#fffe28` 等），**所有红色强调改为页眉激活态亮白 `#fff`**

## 字体方案

| 文字 | 字体 |
| --- | --- |
| 英文 | cosmos：Hanken Grotesk（无衬线）/ Petrona（斜体强调） |
| 中文 | Chic：方正兰亭黑 `lanting` webfont（本地加载，约 970KB） |
| 代码 | Consolas, Monaco, Menlo, monospace |

CSS 字体栈英文在前、中文在后，浏览器按字形自动分流。

## 部署到 GitHub Pages

仓库：https://github.com/3cabbage1/3cabbage1.github.io

| 分支 | 内容 |
| --- | --- |
| `main` | 构建产物 `public/`（GitHub Pages 服务分支，含 `.nojekyll`） |
| `source` | 博客完整源码（本 README 所在分支） |

修改文章或配置后，一条命令部署：

```bash
npm run deploy
```

脚本自动完成：`hexo clean` → `hexo generate` → 补 `.nojekyll` → 推送产物到 `main`（触发 Pages 更新）→ 推送源码到 `source`。

## 目录结构

```
blog/
├── _config.yml                   # 站点配置
├── package.json                  # 依赖与脚本（deploy / server / build）
├── deploy.ps1                    # 一键部署脚本
├── README.md                     # 中文文档（本文件）
├── README.en.md                  # English documentation
├── source/
│   ├── _posts/                   # 文章（6 篇示例）
│   └── _content/about.md         # About 页正文
└── themes/cosmos-chic/           # 主题
    ├── _config.yml               # 主题配置
    ├── layout/                   # EJS 模板
    │   ├── layout.ejs            # 主框架（双页眉 / 页脚 / 资源加载）
    │   ├── home.ejs              # 首页 hero
    │   ├── index.ejs             # 列表页（年份+标题+日期 / index-tools）
    │   ├── post.ejs              # 文章页（Chic 结构）
    │   ├── categories.ejs        # 分类卡片页
    │   ├── tags.ejs              # 标签云页
    │   ├── about.ejs             # About 页（cosmos 原设计）
    │   └── _partial/
    │       ├── header.ejs        # 页眉（首页 Chic / 其余 cosmos）
    │       └── footer.ejs        # Chic 页脚
    ├── scripts/                  # Hexo 扩展（cosmos 原版）
    ├── lib/                      # cosmos 设置合并核心
    ├── languages/                # en / zh-CN 文案
    └── source/
        ├── css/style.css         # cosmos 基础样式
        ├── css/chic.css          # Chic 组件整合（cosmos 配色 + lanting 字体）
        ├── css/tocbot.css        # tocbot 基础样式
        ├── js/chic.js            # 明暗切换 / 首页菜单 / 目录 sticky + tocbot
        ├── js/main.js            # cosmos 交互（页眉菜单 / 代码复制 / 进度条）
        ├── image/abstract-star-sea.png   # cosmos 原版首页插图
        └── fonts/                # cosmos + Chic(lanting) + iconfont 字体
```

## 常见问题

**如何替换姓名占位？**
搜索 `Huang Yangyuxin`：`_config.yml`（title/author）与 `themes/cosmos-chic/_config.yml`（`home.title`/`home.aside`/`chic.navname`）。

**如何修改社交链接？**
`themes/cosmos-chic/_config.yml` 的 `chic.links`。key 小写后匹配 iconfont 图标（github / zhihu / weibo / rss 等）；`Email` 条目自动使用信封图标，值填 `mailto:你的邮箱`。

**部署后线上没变化？**
GitHub Pages CDN 缓存约 10 分钟（`max-age=600`），等待后强制刷新（Ctrl+F5）。

**修改配置后本地预览不生效？**
`_config.yml` 与主题配置在 `hexo server` 启动时加载，改动后需重启服务器。

**想恢复中文界面？**
`_config.yml` 中 `language: zh-CN`（界面文案来自 `themes/cosmos-chic/languages/zh-CN.json`）。

## 致谢

- [hexo-theme-cosmos](https://github.com/cweiai/hexo-theme-cosmos)（MIT）— 配色、About 页、页眉排布、插图
- [hexo-theme-Chic](https://github.com/Siricee/hexo-theme-Chic)（MIT）— 页眉页脚元素、文章结构、分类 / 标签页、深色配色、兰亭黑字体
- [tocbot](https://github.com/tscanlin/tocbot) — 文章目录
- [Hexo](https://hexo.io) — 静态站点生成
