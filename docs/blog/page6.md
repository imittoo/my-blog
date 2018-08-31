---
title: 滚动总结
---

# 滚动总结

## 监听滚动事件
```js
window.addEventListener('scroll', () => {})
this.$refs.viewRef.addEventListener('scroll', () => {})
```

## 滚动的 3 个方法: scroll, scrollTo, scrollBy
```js
// scroll: 滚动到指定的像素数（同 scrollTo 一样）
window.scroll(x, y)
this.$refs.viewRef.scroll(x, y)

// scrollTo: 滚动到指定的像素数
window.scrollTo(x, y)
this.$refs.view.scrollTo(x, y)

// scrollBy: 滚动指定像素
window.scrollBy(x, y)
this.$refs.viewRef.scrollBy(x, y)
```

## y 轴、x 轴的偏移距离
```js
// 普通对象（可设置）
this.$refs.viewRef.scrollTop
this.$refs.viewRef.scrollLeft
this.$refs.viewRef.scrollTop = 12
document.body.scrollLeft = 0

// window 对象（只读属性）
window.scrollY
window.scrollX
```

## clientHeight, scrollHeight, offsetHeight
```js
// 实际高度
this.$refs.viewRef.clientHeight
// 可滚动的最大高度（相当于其内容的高度）
this.$refs.viewRef.scrollHeight
// 偏移量
this.$refs.viewRef.offsetHeight
```

## 设置移动端滚动流畅
```css
-webkit-overflow-scrolling: touch;
```

## Demo: 按钮置顶
```js
let timer = setInterval(() => {
	window.scrollBy(0, -30)
	if (window.scrollY === 0) {
		clearInterval(timer)
	}
}, 10)
```

## Demo: 实现滚动条位于最右端
```js
let view = this.$refs.viewRef
view.scrollBy(view.scrollWidth, 0)
```

## Demo: 实现水平和垂直滚动条均居中
```js
let view = this.$refs.viewRef
view.scrollBy(view.scrollWidth/2, view.scrollHeight/2)
```