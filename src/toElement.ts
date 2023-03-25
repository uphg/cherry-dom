import append from "./append"
import trim from "./internal/trim"

// See: https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro/35385518#35385518
function toElement(innerHTML: string, children: ArrayLike<Element>) {
  const template = document.createElement('template')
  template.innerHTML = trim(innerHTML)
  const node = template.content.firstChild! as Element

  if (children?.length) {
    append(node, children)
  }

  return node
}

export default toElement
