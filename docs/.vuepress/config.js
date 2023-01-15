const sidebar = require('./sidebar');
module.exports = {
  title: '小杨的进阶之路',
  description: ' ',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    search: false,
    searchMaxSuggestions: 10,
    nav: [{ text: '前端基础', link: '/basics/css/1.md' }],
    sidebarDepth: 4,
    sidebar
  }
};
