import mergeClass from './internal/mergeClass'

function addClass(el: Element, ...args: string[] | string[][]) {
  const names = mergeClass(args)
  el.classList ? el.classList.add(...names) : compatAddClass(el, names)
}

function compatAddClass(el: Element, names: string[]) {
  const className = (el.getAttribute('class') ?? '') + ` ${names.join(' ')}`
  el.setAttribute('class', className)
}

export default addClass
