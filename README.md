# Carob

[文档](https://uphgs.com/carob/)

封装一些浏览器端常用的 API。

安装

```sh
pnpm install carob
```

使用

```js
import { prepend, toElement, getScrollbarWidth } from 'carob'

const app = toElement(`
  <div class="app">
    <button id="button">Hi</button>
  </div>
`)

prepend(document.body, app)

getScrollbarWidth() // => 17px
```