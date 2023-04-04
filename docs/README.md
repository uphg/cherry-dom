---
sidebar: auto
---

# Carob 文档

## 元素

### <synta text="append(el, nodes[, ...args])">append</synta>

在当前元素的子元素后追加元素

```js
append(document.body, [el1, el2])
append(document.body, el1, el2, ...elN)
```

### <synta text="prepend(el, nodes[, ...args])">prepend</synta>

在当前元素的子元素前追加元素

```js
prepend(document.body, [el1, el2])
prepend(document.body, el1, el2, ...elN)
```

### <synta text="removeChildren(el)">removeChildren</synta>

删除当前元素下所有子节点

```js
removeChildren(el)
```

### <synta text="toElement(innerHTML, [children])">toElement</synta>

将字符串的 HTML 内容转为 DOM 元素

```js
const app = toElement(`
  <div class="app">
    <button id="button">Hi</button>
  </div>
`)

append(document.body, app)
```

### <synta text="getScrollbarWidth()">getScrollbarWidth</synta>

获取当前页面滚动条宽度

```js
getScrollbarWidth() // => 17px
```

### <synta text="getScrollParent(el)">getScrollParent</synta>

获取当前元素上层的第一个滚动父节点

```js
getScrollParent(el) // document.body
```

### <synta text="on(el, eventName, selectorOrHandler, [handlerOrOptions], [options])">on</synta>

对元素进行事件监听/事件委托

```js
const app = toElement(`
  <div class="app">
    <button id="button">我是按钮</button>
  </div>
`)

const button = app.querySelector('#button')

const onClick = (e) => {
  console.log(e)
}

on(app, 'click', '#button', onClick)
on(button, 'click', onClick)
```

### <synta text="off(el, eventName, handler, [options])">off</synta>

取消事件监听/事件委托

```js
off(el, 'click', onClick)
```

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

### <synta text="getIndex(el)">getIndex</synta>

获取当前元素在父元素 children 中的索引，如果元素为空或不存在父元素，会返回 -1

```js
getIndex(document.body) // 1
getIndex(null) // -1
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

### isClient

获取当前环境是否为浏览器

```js
// Node.js
isClient
// => false

// 浏览器
isClient
// => true
```