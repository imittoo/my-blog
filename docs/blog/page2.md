---
title: 移动端项目注意点
---

# 移动端项目注意点

## 移动端点击按钮时有阴影

添加如下样式即可去掉：

```css
-webkit-tap-highlight-color: rgba(0,0,0,0);
```

## 移动端 :active 无效

```html
<body ontouchstart>
```

## 移动端长按选中文本

css实现：

```css
* {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
```

js实现：

```js
document.onselectstart=new Function("event.returnValue=false")
```

## 移动端长按禁止弹出右键框

```js
document.oncontextmenu=new Function("event.returnValue=false")
```

## 移动端禁止缩放

```html
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
```

## 移动端滚动流畅

```css
-webkit-overflow-scrolling: touch;
```

* [深入研究-webkit-overflow-scrolling:touch及ios滚动](https://www.cnblogs.com/xiahj/p/8036419.html)
* [BetterScroll：可能是目前最好用的移动端滚动插件](https://juejin.im/post/59b777015188257e764c716f)
* [iOS safari 如何阻止“橡皮筋效果”？](https://www.zhihu.com/question/22256539)

## CSS3 做 0.5px 的细线

下面是 weui 实现方式：

```css
.weui-cell:before{
   content: " ";
   position: absolute;
   left: 0;
   top: 0;
   right: 0;
   height: 1px;
   border-top: 1px solid #D9D9D9;
   color: #D9D9D9;
   -webkit-transform-origin: 0 0;
   transform-origin: 0 0;
   -webkit-transform: scaleY(0.5);
   transform: scaleY(0.5);
}
```

* [其他实现 0.5px 细线方式](https://blog.csdn.net/tyro_java/article/details/52013531)

## 文本大小根据设备尺寸进行调整

auto: 会 | none: 不会

```css
text-size-adjust: none;
```