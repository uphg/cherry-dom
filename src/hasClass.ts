import trims from "./_trims"

function hasClass(el: HTMLElement, className: string) {
  if (!el || !className) return false

  if (el.classList) {
    return el.classList.contains(className)
  }

  return trims(el.getAttribute('class') || '').includes(className)
}

export default hasClass
