import trims from './_trims'

function addClass(el: Element, name: string) {
  if (!el || !name) return
  const classes = trims(name)
  let className = el.getAttribute('class') || ''

  if (el.classList) {
    el.classList.add(...classes)
    return
  }

  className += ` ${classes.join(' ')}`
  el.setAttribute('class', className)
}

export default addClass
