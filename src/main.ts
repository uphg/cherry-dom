import { getLocal, removeLocal, setLocal } from './Local'
import { getStyle } from './dom'

// setLocal('Jack', 'hi')

// setTimeout(() => {
//   const jack = getLocal('Jack')
//   console.log('jack')
//   console.log(jack)
//   removeLocal('Jack')
// })

const app = document.querySelector<HTMLDivElement>('#app')!

const div = document.createElement('div')

div.style.height = '80px'
div.style.width = '100px'
div.style.paddingTop = '20px'
div.style.marginTop = '5px'

app.appendChild(div)

console.log(getStyle(div, ['height', 'width']))

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
