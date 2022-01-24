import trims from './_trims'
import each from './_each'

function addClass(el: Element, className: string | string[], ...args: string[]) {
  if (!el || !className) return

  if (args?.length > 0) {
    addClass(el, [className as string, ...args])
    return
  }

  if (Array.isArray(className)) {
    each(className, (item) => {
      addClass(el, item)
    })
    return
  }

  const classes = trims(className)
  if (el.classList) {
    el.classList.add(...classes)
    return
  }

  const merging = (el.getAttribute('class') || '') + ` ${classes.join(' ')}`
  el.setAttribute('class', merging)
}

export default addClass
