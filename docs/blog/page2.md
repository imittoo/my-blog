---
title: webStorage
---

# webStorage

webStorage 包括：localStorage、sessionStorage

```js
let list = ['a', 'b', 'c']
// 存
localStorage.setItem('aaa', JSON.stringify(list))

// 取
let arr = JSON.parse(localStorage.getItem('aaa'))

// 清空
localStorage.clear()
```