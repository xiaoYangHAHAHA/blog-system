const sliderBar = [
  {
    title: 'css',
    collapsable: false,
    children: [
      {
        title: '如何实现水平垂直居中',
        number: 5
      },
      {
        title: '如何实现左侧固定300px,右侧自适应的布局',
        number: 7
      },
      {
        title: 'cssvariable解决了什么问题',
        number: 9
      },
      {
        title: '伪类和伪元素有什么区别',
        number: 11
      }
    ]
  },
  {
    title: 'html',
    collapsable: false,
    children: [
      {
        title: '如何实现水平垂直居中',
        number: 5
      }
    ]
  }
]

function getItems() {
  return sliderBar.map((x) => x.children).flat(10)
}

function _generateSidebar() {
  const items = getItems()

  let i = 1
  for (const item of items) {
    item.path = item.number.toString()
    item.title = `${i++}. ${item.title}`
  }
  return {
    '/base/': [...sliderBar]
  }
}

module.exports = {
  _generateSidebar
}
