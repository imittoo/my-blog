(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{156:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),e("p",[t._v("将 vuepress 部署到 GitHub 页面的时候，遇到了一个报错：")]),t._m(1),t._m(2),e("p",[t._v("查看本地是否有ssh文件")]),t._m(3),e("p",[t._v("没有的话添加一个")]),t._m(4),e("p",[t._v("有则把公钥加到github")]),t._m(5),e("p",[t._v("github => setting => SSH and GPG keys => New SSH key")]),e("p",[t._v("将刚才 id_rsa.pub 中的内容复制到 key 下面，并点击 Add SSH key")]),e("p",[t._v("最后执行")]),t._m(6),e("p",[t._v("重新部署一下就 OK")]),t._m(7),e("ul",[e("li",[e("a",{attrs:{href:"https://blog.csdn.net/samxx8/article/details/51497004",target:"_blank",rel:"noopener noreferrer"}},[t._v("解决方案 git@github.com出现Permission denied (publickey)"),e("OutboundLink")],1)]),e("li",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000015237352",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress从零开始搭建自己的博客"),e("OutboundLink")],1)])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"vuepress-部署报错"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-部署报错","aria-hidden":"true"}},[this._v("#")]),this._v(" VuePress 部署报错")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),s("p",[this._v("Permission denied (publickey).\nfatal: Could not read from remote repository.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案","aria-hidden":"true"}},[this._v("#")]),this._v(" 解决方案")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("cd")]),this._v(" ~/.ssh\n"),s("span",{attrs:{class:"token function"}},[this._v("ls")]),this._v(" "),s("span",{attrs:{class:"token comment"}},[this._v("# id_rsa   id_rsa.pub   known_hosts")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("ssh-keygen "),s("span",{attrs:{class:"token comment"}},[this._v("# 可以使用 id_rsa 这个名字")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("cat")]),this._v(" id_rsa.pub\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("ssh")]),this._v(" -T git@github.com\n"),s("span",{attrs:{class:"token comment"}},[this._v("# Hi arif! You've successfully authenticated, but GitHub does not provide shell access.")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考")])}],!1,null,null,null);s.default=r.exports}}]);