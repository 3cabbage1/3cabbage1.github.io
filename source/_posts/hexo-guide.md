---
title: 用 Hexo 搭建个人博客的完整流程
date: 2026-08-05 15:20:00
categories: [Tech]
tags: [Hexo, Setup, Tutorial]
description: 从零开始：安装 Hexo、初始化站点、安装主题、写作与部署。
---

本文记录从零搭建这个博客的完整流程，也作为长文章的目录（TOC）演示样例。

## 环境准备

安装 [Node.js](https://nodejs.org)（20 以上版本）之后，通过 npm 全局安装 Hexo：

```bash
npm install -g hexo-cli
```

## 初始化站点

```bash
hexo init my-blog
cd my-blog
npm install
```

## 安装主题

将主题放入 `themes/` 目录，并在站点 `_config.yml` 中启用：

```yaml
theme: cosmos-chic
```

## 写作

```bash
hexo new "我的新文章"
```

文章保存在 `source/_posts/` 目录，使用 Markdown 书写。

## 本地预览与部署

```bash
hexo server   # 本地预览 http://localhost:4000
hexo generate # 生成静态文件到 public/
```

## 总结

静态博客的核心是「写作本身」，工具越简单越好。
