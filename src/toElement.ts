import append from "./append"
import trim from "./internal/trim"

// See: https://stackoverflow.com/a/35385518
function toElement(innerHTML: string, children?: ArrayLike<Element>) {
  const template = document.createElement('template')
  template.innerHTML = trim(innerHTML)
  const node = template.content.firstChild! as Element

  if (children?.length) {
    append(node, children)
  }

  return node
}

export default toElement
