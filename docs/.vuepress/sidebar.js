const cssBar = require('./sidebarConfig/cssconfig');

module.exports = {
  '/basics/': [
    {
      title: '目录',
      collapsable: true,
      children: [
        {
          title: 'css',
          children: cssBar
        },
        {
          title: 'html',
          path: '/basics/html/'
        },
        {
          title: 'js',
          path: '/basics/js/'
        }
      ]
    }
  ]
};
