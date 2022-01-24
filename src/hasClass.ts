import trims from "./_trims"

function hasClass(el: HTMLElement, name: string) {
  if (!el || !name) return false

  if (el.classList) {
    return el.classList.contains(name)
  }

  return trims(el.getAttribute('class') || '').includes(name)
}

export default hasClass
