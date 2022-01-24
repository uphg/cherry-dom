import trims from './_trims'

function removeClass(el: Element, name: string) {
  if (!el || !name) return
  const classes = trims(name)
  let prevClass = el.getAttribute('class') || ''

  if (el.classList) {
    el.classList.remove(...classes)
    return
  }

  classes.forEach((item) => {
    prevClass = prevClass.replace(` ${item} `, '')
  })
  const className = trims(prevClass).join(' ')
  el.setAttribute('class', className)
}

export default removeClass
