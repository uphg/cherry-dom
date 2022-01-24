import './style.css'
import test from './_test'
import camelize from './_camelize'
import getStyle from './getStyle'
import setStyle from './setStyle'
import removeStyle from './removeStyle'
import hasClass from './hasClass'
import addClass from './addClass'
import removeClass from './removeClass'
import session from './session'
import local from './session'

const app = document.querySelector<HTMLDivElement>('#app')!
const h1 = document.createElement('h1')
h1.textContent = 'Hello Vite!'
app.appendChild(h1)

test('驼峰命名函数', ()=> {
  const string = 'margin-left'
  console.assert(camelize(string) === 'marginLeft')
})

test('getStyle', ()=> {
  const div = document.createElement('div')
  app.appendChild(div)

  div.style.width = '180px'
  div.style.height = '100px'
  div.style.backgroundColor = 'rgb(0, 128, 0)'
  console.assert(getStyle(div, 'width') === '180px')
  console.assert(getStyle(div, 'height') === '100px')
  console.assert(getStyle(div, 'background-color') === 'rgb(0, 128, 0)')
})

test('setStyle', ()=> {
  const div = document.createElement('div')
  app.appendChild(div)

  setStyle(div, {
    width: '180px',
    height: '100px',
    backgroundColor: 'yellow',
    marginBottom: '20px',
    'line-height': '1.5'
  })
  setStyle(div, 'paddingTop', '10px')
  setStyle(div, 'margin-top', '20px')
  setStyle(div, 'border', '1px solid red')

  console.assert(div.style.width === '180px')
  console.assert(div.style.height === '100px')
  console.assert(div.style.backgroundColor === 'yellow')
  console.assert(div.style.marginBottom === '20px')
  console.assert(div.style.lineHeight === '1.5')
  console.assert(div.style.paddingTop === '10px')
  console.assert(div.style.marginTop === '20px')
  console.assert(div.style.border === '1px solid red')
})

test('addClass', ()=> {
  const div = document.createElement('div')
  div.textContent = 'addClass'
  app.appendChild(div)
  setStyle(div, {
    width: '100px',
    height: '100px'
  })
  div.classList.add('border-grey')
  addClass(div, 'red')
  addClass(div, 'blue')
  addClass(div, 'a1 a2 a3')
  addClass(div, 'b1', 'b2', 'b3')
  addClass(div, ['c1', 'c2', 'c3'])
  console.assert(div.getAttribute('class'), 'border-grey red blue a1 a2 a3 b1 b2 b3 c1 c2 c3')
})

test('removeClass', ()=> {
  const div = document.createElement('div')
  app.appendChild(div)
  setStyle(div, {
    width: '100px',
    height: '100px'
  })
  div.classList.add('border-grey')
  addClass(div, 'red', 'blue', 'a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3')

  removeClass(div, 'red')
  removeClass(div, 'a1 a2')
  removeClass(div, 'b2', 'b3')
  removeClass(div, ['c1', 'c3'])
  console.assert(div.getAttribute('class') === 'border-grey blue a3 b1 c2')
})

test('hasClass', ()=> {
  const div = document.createElement('div')
  div.textContent = 'hasClass'
  app.appendChild(div)
  div.classList.add('border-grey')
  div.classList.add('red')
  div.classList.add('blue')
  console.assert(hasClass(div, 'border-grey') === true)
  console.assert(hasClass(div, 'blue') === true)
  console.assert(hasClass(div, 'red') === true)
})

test('removeStyle', () => {
  const div = document.createElement('div')
  div.textContent = 'removeStyle'
  app.appendChild(div)

  setStyle(div, {
    width: '180px',
    height: '100px',
    marginTop: '20px',
    marginBottom: '20px',
    marginLeft: '20px',
    marginRight: '20px',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '10px',
    paddingRight: '10px'
  })

  removeStyle(div, 'height')
  removeStyle(div, 'marginTop', 'margin-left')
  removeStyle(div, ['paddingBottom', 'padding-right'])

  console.assert(div.style.height === '')
  console.assert(div.style.marginTop === '')
  console.assert(div.style.marginLeft === '')
  console.assert(div.style.paddingBottom === '')
  console.assert(div.style.paddingRight === '')
  console.assert(div.style.width === '180px')
  console.assert(div.style.marginBottom === '20px')
  console.assert(div.style.marginRight === '20px')
  console.assert(div.style.paddingTop === '10px')
  console.assert(div.style.paddingLeft === '10px')
})

test('session', ()=> {
  session.set('p1', { a: 1, b: 2 })
  session.set('p2', { c: 3, d: 4 })
  session.set('p3', 'hi')
  const p1 = session.get('p1')
  const p2 = session.get('p2')
  const p3 = session.get('p3')
  console.assert(p1.a === 1)
  console.assert(p1.b === 2)
  console.assert(p2.c === 3)
  console.assert(p2.d === 4)
  console.assert(p3 === 'hi')

  console.assert(session.has('p1'))
  console.assert(session.has('p2'))

  session.remove('p1')

  console.assert(session.has('p1') === false)
  console.assert(session.has('p2'))
  console.assert(session.has('p3'))
  
  session.clear()
  console.assert(session.has('p2') === false)
  console.assert(session.has('p3') === false)
})

test('local', ()=> {
  local.set('p1', { a: 1, b: 2 })
  local.set('p2', { c: 3, d: 4 })
  local.set('p3', 'hi')
  const p1 = local.get('p1')
  const p2 = local.get('p2')
  const p3 = local.get('p3')
  console.assert(p1.a === 1)
  console.assert(p1.b === 2)
  console.assert(p2.c === 3)
  console.assert(p2.d === 4)
  console.assert(p3 === 'hi')

  console.assert(local.has('p1'))
  console.assert(local.has('p2'))

  local.remove('p1')

  console.assert(local.has('p1') === false)
  console.assert(local.has('p2'))
  console.assert(local.has('p3'))
  
  local.clear()
  console.assert(local.has('p2') === false)
  console.assert(local.has('p3') === false)
})

// app.innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `
