---
sidebar: auto
---

# API 文档

## CSS

### <synta text="addClass(el, className[, ...args])">addClass</synta>

给元素添加 class 类名

```js
addClass(el, 'blue')
addClass(el, 'a1 a2')
addClass(el, 'b1', 'b2')

el.getAttribute('class')
// => blue a1 a2 b1 b2
```

### <synta text="removeClass(el, className[, ...args])">removeClass</synta>

给元素删除 class 类名

```js
el.classList.add('red', 'blue', 'a1', 'a2', 'b1', 'b2')

removeClass(el, 'red')
removeClass(el, 'a1 a2')
removeClass(el, 'b2', 'b3')

el.getAttribute('class')
// => blue
```

### <synta text="hasClass(el, className)">hasClass</synta>

判断元素是否存在 class 类名

```js
el.classList.add('red', 'blue', 'green')

hasClass(el, 'red')
// => true
```

### <synta text="getStyle(el, styleName)">getStyle</synta>

获取元素 style 样式

```js
el.style.height = '60px'

getStyle(el, 'height')
// => 60px
```

### <synta text="setStyle(el, styles)">setStyle</synta>

给元素设置 style 样式

```js
setStyle(el, {
  marginTop: '20px',
  'margin-bottom': '20px'
})
setStyle(el, 'paddingTop', '10px')
setStyle(el, 'line-height', '1.5')

el.getAttribute('style')
// => margin-top: 20px; margin-bottom: 20px; padding-top: 10px; line-height: 1.5;
```

### <synta text="removeStyle(el, styleName[, ...args])">removeStyle</synta>

给元素清除 style 样式

```js
el.style.backgroundColor = 'yellow'
el.style.height = '50px'
el.style.width = '100px'

removeStyle(el, 'height', 'width')

el.getAttribute('style')
// => background-color: yellow;
```

## 工具

### isServer

获取当前环境是否为服务端（Node.js）

```js
// Node.js
isServer
// => true

// 浏览器
isServer
// => false
```