import trims from './_trims'
import each from './_each'

function removeClass(el: Element, className: string | string[], ...args: string[]) {
  if (!el || !className) return

  if (args?.length > 0) {
    removeClass(el, [className as string, ...args])
    return
  }

  if (Array.isArray(className)) {
    each(className, (item) => {
      removeClass(el, item)
    })
    return
  }

  const classes = trims(className)
  if (el.classList) {
    el.classList.remove(...classes)
    return
  }

  let prevClass = el.getAttribute('class') || ''
  each(classes, (item) => {
    prevClass = prevClass.replace(` ${item} `, '')
  })
  const merging = trims(prevClass).join(' ')
  el.setAttribute('class', merging)
}

export default removeClass
