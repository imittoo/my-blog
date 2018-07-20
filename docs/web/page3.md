---
title: sass
---

# sass

## 下载 sass 及依赖
```bash
npm install sass --save-dev
npm install sass-loader --save-dev
npm install node-sass --save-dev
```

```scss
<style lang="scss">
</style>
```


## vue 中引入全局 sass 变量
如果你有一个全局的 sass 变量文件（all.scss），并且想要在所有的 vue 文件中使用这些变量，我们需要在每个使用到变量的地方都引入 all.scss

```css
@import 'path/fileName.scss'
```

## sass-resources-loader
sass-resources-loader 可以访问 sass 资源任何一个需要访问的 sass 模块。所以，可以使用共享变量和混合所有 SASS 样式，而不去每个文件都引用。

```bash
npm install sass-resources-loader --save-dev
```

```js
// 修改 build -> utils.js
scss: generateLoaders('sass')
// 修改为
scss: generateLoaders('sass').concat(
	{
		loader: 'sass-resources-loader',
		options: {
		resources: path.resolve(__dirname, '../src/assets/css/all.scss') // 全局变量文件路径
		}
	}
)
```

```js
// main.js
import './assets/css/all.scss' // 引用一次就好
```