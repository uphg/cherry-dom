import each from './_each'
import trims from './_trims'
import mergeClass from './_mergeClass'

function removeClass(el: Element, ...args: string[]) {
  const classNames = mergeClass(args)

  if (el.classList) {
    el.classList.remove(...classNames)
    return
  }

  let prev = el.getAttribute('class') || ''
  each(classNames, (item) => {
    prev = prev.replace(` ${item} `, '')
  })
  const mergings = trims(prev)
  mergings && el.setAttribute('class', mergings.join(' '))
}

export default removeClass