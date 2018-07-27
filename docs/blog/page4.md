---
title: 使用 VuePress 搭建个人网站
---

# 使用 VuePress 搭建个人网站

* 使用 VuePress 搭建个人网站很简单，你所看到的当前网站就是一个简单的案例。
* 你要会一点 html、css、javascript、vue 和 Markdown 语法。

## VuePress 是什么？

* [VuePress官网](https://vuepress.docschina.org/)

## 起步就像数 1, 2, 3 一样容易

```bash
# 在桌面创建目录 demo 并且进入
cd desktop && mkdir demo && cd demo

# 安装为本地依赖项
yarn add -D vuepress # 或 npm install -D vuepress

# 创建一个 docs 目录
mkdir docs

# 创建一个 markdown 文件
echo '# Hello VuePress' > docs/README.md
```

然后，给 package.json 添加一些 scripts 脚本：

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs", 
    "docs:build": "vuepress build docs"
  }
}
```

启动项目

```bash
yarn docs:dev # 或 npm run docs:dev
```

