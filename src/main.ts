import './style.css'
import { getLocal, removeLocal, setLocal } from './Local'

setLocal('Jack', 'hi')

setTimeout(() => {
  const jack = getLocal('Jack')
  console.log('jack')
  console.log(jack)
  removeLocal('Jack')
})

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
