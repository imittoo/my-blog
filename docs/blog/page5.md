---
title: 使用 Electron 构建桌面应用
---

# 使用 Electron 构建桌面应用

Electron 让我们可以用 HTML，CSS 和 JavaScript 来构建跨平台桌面应用程序。

## 第一个 Electron 应用

应用结构

```
ele-app/
  ├── package.json
  ├── main.js
  └── index.html
```

创建项目并初始化

```bash
cd desktop && mkdir ele-app
cd ele-app && yarn init # entry point (index.js): main.js
touch main.js index.html
```

安装 Electron

```bash
yarn add electron -D
```

修改 package.json

```js
// package.json
{
  "name": "ele-app",
  "main": "main.js",
  // 添加如下代码
  "scripts": {
    "start": "electron .",
  }
}
```

编写 main.js

```js
const {app, BrowserWindow} = require('electron')
  
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // 创建浏览器窗口。
  win = new BrowserWindow({width: 800, height: 600})

  // 然后加载应用的 index.html。
  win.loadFile('index.html')

  // 打开开发者工具
  win.webContents.openDevTools()

  // 当 window 被关闭，这个事件会被触发。
  win.on('closed', () => {
    // 取消引用 window 对象，如果你的应用支持多窗口的话，
    // 通常会把多个 window 对象存放在一个数组里面，
    // 与此同时，你应该删除相应的元素。
    win = null
  })
}

// Electron 会在初始化后并准备
// 创建浏览器窗口时，调用这个函数。
// 部分 API 在 ready 事件触发后才能使用。
app.on('ready', createWindow)

// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (win === null) {
    createWindow()
  }
})

// 在这个文件中，你可以续写应用剩下主进程代码。
// 也可以拆分成几个文件，然后用 require 导入。
```

编写 index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    We are using node <script>document.write(process.versions.node)</script>,
    Chrome <script>document.write(process.versions.chrome)</script>,
    and Electron <script>document.write(process.versions.electron)</script>.
  </body>
</html>
```

启动应用

```bash
yarn start
```

## 已有的 vue 项目 + Electron

修改 vue 项目配置

```js
// config/index.js
build: {
  // assetsPublicPath: '/',
  assetsPublicPath: './'
}
```

```js
// build/utils.js
return ExtractTextPlugin.extract({
  use: loaders,
  fallback: 'vue-style-loader',
  // 添加下面一行
  publicPath: '../../'
})
```

打包 vue 项目

```bash
yarn build # npm run build
```

安装 electron-packager

```bash
yarn add electron-packager -D
```

修改 package.json

```js
// package.json
{
  "name": "ele-app",
  "main": "main.js",
  "scripts": {
    "start": "electron .",
    // 添加如下代码
    "package": "electron-packager ./ myapp --out ./OutApp",
  }
}
```

将 vue 项目 dist 中的 index.html 和 static 复制到 Electron 项目根目录，然后执行 `yarn start` 查看一下效果，没问题的话就使用 `yarn package` 打包。
