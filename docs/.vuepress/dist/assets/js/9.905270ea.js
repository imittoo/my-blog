(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{160:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("使用 VuePress 搭建个人网站很简单，你要会一点 vue 和 Markdown 语法。")]),t._m(1),t._m(2),a("p",[t._v("然后，给 package.json 添加一些 scripts 脚本：")]),t._m(3),a("p",[t._v("启动项目")]),t._m(4),t._m(5),t._m(6),a("p",[t._v("\b目录结构")]),t._m(7),t._m(8),a("p",[t._v("config.js 用于配置网站及主题")]),t._m(9),t._m(10),a("p",[t._v("关于部署，"),a("a",{attrs:{href:"https://vuepress.docschina.org/guide/deploy.html#github-%E9%A1%B5%E9%9D%A2",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress 官网"),a("OutboundLink")],1),t._v(" 介绍的很详细，我主要介绍一下 "),a("a",{attrs:{href:"https://www.netlify.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Netlify"),a("OutboundLink")],1),t._v(" ，Netlify 是国外一家提供静态网络托管服务的综合平台，使用起来非常简单：")]),a("ol",[a("li",[t._v("打开 "),a("a",{attrs:{href:"https://www.netlify.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Netlify"),a("OutboundLink")],1),t._v("，点击 “Get started for free” 按钮，选择 GitHub 登录，点击 “New site from Git” 创建新站点，在 “Create a new site” 页面，选择 “Continuous Deployment” 为 GitHub，然后选择 GitHub 中的仓库")]),t._m(11),a("li",[t._v("点击 “Deploy site” 部署")])]),a("p",[t._v("以后我们修改网站或写文章后，直接推送到 GitHub 即可，剩下的工作 Netlify 会帮我们完成，如打包生成静态文件、部署等。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"使用-vuepress-搭建个人网站"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-vuepress-搭建个人网站","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用 VuePress 搭建个人网站")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"起步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#起步","aria-hidden":"true"}},[this._v("#")]),this._v(" 起步")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# 在桌面创建目录 demo 并且进入")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" desktop "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" demo "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" demo\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 安装为本地依赖项")]),t._v("\nyarn add -D vuepress "),a("span",{attrs:{class:"token comment"}},[t._v("# 或 npm install -D vuepress")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 创建一个 docs 目录")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" docs\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 创建一个 markdown 文件")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'# Hello VuePress'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" docs/README.md\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"docs:dev"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"vuepress dev docs"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),a("span",{attrs:{class:"token property"}},[t._v('"docs:build"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("yarn docs:dev "),s("span",{attrs:{class:"token comment"}},[this._v("# 或 npm run docs:dev")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"构建目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建目录","aria-hidden":"true"}},[this._v("#")]),this._v(" 构建目录")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" docs "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" .vuepress\n"),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" .vuepress "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("touch")]),t._v(" config.js "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" public\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("├── docs\n│   ├── "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vuepress "),a("span",{attrs:{class:"token comment"}},[t._v("// vuepress 相关")]),t._v("\n│   │   ├── components "),a("span",{attrs:{class:"token comment"}},[t._v("// 自定义的组件")]),t._v("\n│   │   ├── dist "),a("span",{attrs:{class:"token comment"}},[t._v("// 打包生成的文件")]),t._v("\n│   │   ├── "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 静态资源")]),t._v("\n│   │   └── config"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js "),a("span",{attrs:{class:"token comment"}},[t._v("// 配置文件")]),t._v("\n│   ├── blog "),a("span",{attrs:{class:"token comment"}},[t._v("// 自定义目录")]),t._v("\n│   │   ├── page1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("md "),a("span",{attrs:{class:"token comment"}},[t._v("// blog目录中的文章")]),t._v("\n│   │   └── "),a("span",{attrs:{class:"token constant"}},[t._v("README")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("md "),a("span",{attrs:{class:"token comment"}},[t._v("// blog主页配置")]),t._v("\n│   └── "),a("span",{attrs:{class:"token constant"}},[t._v("README")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("md "),a("span",{attrs:{class:"token comment"}},[t._v("// 主页配置")]),t._v("\n├── node_modules\n├── "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gitattributes\n├── "),a("span",{attrs:{class:"token keyword"}},[t._v("package")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json\n├── "),a("span",{attrs:{class:"token constant"}},[t._v("README")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("md\n└── yarn"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lock\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"配置-config-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-config-js","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置 config.js")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Maldives"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 网站标题")]),t._v("\n  description"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Maldves is very beautiful.'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 网站描述")]),t._v("\n  repo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'https://github.com/yourname/demo.git'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// github 仓库链接")]),t._v("\n  themeConfig"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 主题配置")]),t._v("\n    nav"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 导航栏")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'主页'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'博客'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/blog/'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    sidebar"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 侧边栏")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v("'/blog/'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'page1'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    lastUpdated"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'lastUpdated'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 最后更新")]),t._v("\n    "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  head"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 网站 head 配置")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'link'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      rel"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'icon'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      href"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/logo.png'")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 图片位于 public 目录")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署","aria-hidden":"true"}},[this._v("#")]),this._v(" 部署")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("设置构建选项：\n"),s("ul",[s("li",[this._v("构建命令："),s("code",[this._v("npm run docs:build")]),this._v(" or "),s("code",[this._v("yarn docs:build")])]),s("li",[this._v("发布目录："),s("code",[this._v("docs/.vuepress/dist")])])])])}],!1,null,null,null);s.default=e.exports}}]);