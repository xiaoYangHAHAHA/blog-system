const sliderBar = [
  {
    title: 'css',
    collapsable: false,
    children: [
      {
        title: 'css权重',
        number: 1
      },
      {
        title: 'BFC',
        number: 15
      },
      {
        title: '如何实现水平垂直居中',
        number: 5
      },
      {
        title: '如何实现左侧固定300px,右侧自适应的布局',
        number: 7
      },
      {
        title: 'css variable解决了什么问题',
        number: 9
      },
      {
        title: '伪类和伪元素有什么区别',
        number: 11
      },
      {
        title: '单行、多行溢出省略号',
        number: 13
      },
      {
        title: '隐藏元素的方式及区别',
        number: 3
      }
    ]
  },
  {
    title: 'javascript',
    collapsable: false,
    children: [
      {
        title: 'es6',
        number: 2
      }
    ]
  }
  // {
  //   title: 'html',
  //   collapsable: false,
  //   children: [
  //     {
  //       title: '如何实现水平垂直居中',
  //       number: 5
  //     }
  //   ]
  // }
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
    '/basic/': [...sliderBar]
  }
}

module.exports = {
  _generateSidebar
}
