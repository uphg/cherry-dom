---
sidebar: auto
---

# API 文档

## CSS

### <synta text="addClass(el, className[, ...args])">addClass</synta>

给元素添加 class 类名

```js
addClass(el, 'blue')
addClass(el, 'a1 a2 a3')
addClass(el, 'b1', 'b2', 'b3')
addClass(el, ['c1', 'c2', 'c3'])

el.getAttribute('class')
// => blue a1 a2 a3 b1 b2 b3 c1 c2 c3
```

### <synta text="removeClass(el, className[, ...args])">removeClass</synta>

给元素删除 class 类名

```js
el.classList.add(el, 'red', 'blue', 'a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3')

removeClass(el, 'red')
removeClass(el, 'a1 a2')
removeClass(el, 'b2', 'b3')
removeClass(el, ['c1', 'c3'])
// => blue a3 b1 c2
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
el.style.color = 'red'
el.style.border = '1px solid red'

removeStyle(el, 'height', 'width')
removeStyle(el, ['color', 'border'])

el.getAttribute('style')
// => background-color: yellow;
```

## 本地存储

### localStorage

