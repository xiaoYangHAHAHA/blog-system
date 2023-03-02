const { _generateSidebar: baseSlideBar } = require('../data/base')
module.exports = {
  base: '/blog/',
  title: '小杨的进阶之路',
  description: ' ',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    search: false,
    searchMaxSuggestions: 10,
    nav: [{ text: '前端基础', link: '/basic/' }],
    sidebarDepth: 2,
    sidebar: {
      ...baseSlideBar()
    }
  }
  // plugins: [
  //   (options, ctx) => {
  //     return {
  //       name: 'archive',
  //       async additionalPages() {
  //         return [
  //           {
  //             path: '/',
  //             frontmatter: {
  //               home: true,
  //               heroText: '你知道的越多，不知道的也就越多',
  //               actionText: '一起学习  →',
  //               actionLink: '/basic/',
  //               footer: '暮从碧山下，山月随人归。却顾所来径，苍苍横翠微。'
  //             }
  //           }
  //         ]
  //       }
  //     }
  //   }
  // ]
}
