module.exports = {
  title: "Arif's Blog",
  description: 'The story about Arif.',
  repo: 'https://github.com/meidongwei/my-blog.git', // github 链接
  themeConfig: {
    // 添加导航栏
    nav: [
      {
        text: '主页',
        link: '/'
      },
      {
        text: '博客',
        link: '/blog/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/meidongwei'
      }
    ],
    // 添加侧边栏
    sidebar: {
      '/blog/': [ 'page1', 'page2', 'page3' ]
    },
    lastUpdated: 'Last Updated',
    activeHeaderLinks: false, // 激活标题链接，默认为true
    serviceWorker: true, // PWA
  },
  head: [
    ['link', {
      rel: 'icon',
      href: `/logo.png`
    }]
  ],
  // head: [
  //   ['link', {
  //     rel: 'manifest',
  //     href: '/manifest.json'
  //   }],
  //   ['link', {
  //     rel: 'apple-touch-icon',
  //     href: '/logo.png'
  //   }],
  //   ['link', {
  //     rel: 'shortcut icon',
  //     type: "image/x-icon",
  //     href: `/favicon.ico`
  //   }]
  // ]
}