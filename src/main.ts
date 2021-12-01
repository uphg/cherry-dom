// import { getLocal, removeLocal, setLocal } from './Local'
import { getStyle, setStyle } from './dom'

const app = document.querySelector<HTMLDivElement>('#app')!

const div = document.createElement('div')

setStyle(div, {
  ['padding-top']: '20px',
  ['margin-top']: '5px'
})

setStyle(div, {
  height: '80px',
  width: '100px',
  backgroundColor: '#ccc',
  paddingBottom: '10px',
  marginBottom: '15px'
})

console.log('getStyle(div)')
console.log(getStyle(div))

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
app.appendChild(div)
