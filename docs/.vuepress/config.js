module.exports = {
  title: "Arif's Blog",
  description: 'The story about Arif.',
  // dest: './dist',
  repo: 'https://github.com/meidongwei/my-blog.git', // github 链接
  themeConfig: {
    // 添加导航栏
    nav: [
      {
        text: 'home',
        link: '/'
      },
      {
        text: 'blog',
        items: [
          { text: 'web', link: '/web/' },
          { text: 'life', link: '/life/' }
        ]
      },
      {
        text: 'github',
        link: 'https://github.com/meidongwei'
      }
    ],
    // 添加侧边栏
    sidebar: {
      '/web/': [ 'page1', 'page2', 'page3' ],
      '/life/': [ 'page1', 'page2' ]
    },
    lastUpdated: 'Last Updated',
    activeHeaderLinks: false, // 激活标题链接，默认为true
  }
}