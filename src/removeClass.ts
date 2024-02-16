import each from './internal/each'
import splitClass from './internal/splitClass'
import mergeClass from './internal/mergeClass'

function removeClass<T extends Element>(el: T, ...args: string[]) {
  const names = mergeClass(args)
  el.classList ? el.classList.remove(...names) : compatRemoveClass(el, names)
}

function compatRemoveClass<T extends Element>(el: T, names: string[]) {
  let prev = el.getAttribute('class') || ''
  each(names, (item) => {
    prev = prev.replace(` ${item} `, '')
  })
  const mergings = splitClass(prev)
  mergings && el.setAttribute('class', mergings.join(' '))
}

export default removeClass
