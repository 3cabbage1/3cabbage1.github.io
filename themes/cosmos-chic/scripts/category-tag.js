'use strict';

/* Generates combined category+tag listing pages at
   <category>/<name>/tag/<tag>/ so tag filters keep the category scope
   (All writing stays on the category, tags stay scoped to its posts). */
hexo.extend.generator.register('cosmos-category-tag', locals => {
  const routes = [];
  locals.categories.forEach(category => {
    const basePath = String(category.path || '').replace(/\/+$/, '');
    if (!basePath) return;
    const tags = new Map();
    category.posts.forEach(post => (post.tags || []).forEach(tag => {
      if (!tags.has(tag.name)) tags.set(tag.name, tag);
    }));
    tags.forEach((tag, name) => {
      const posts = category.posts.filter(post => post.tags.some(item => item.name === name))
        .sort((a, b) => b.date - a.date);
      routes.push({
        path: `${basePath}/tag/${tag.slug}/index.html`,
        layout: ['index'],
        data: {
          posts,
          total: 1,
          tag: name,
          scope_category: category.name
        }
      });
    });
  });
  return routes;
});
