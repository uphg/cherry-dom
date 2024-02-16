import isNil from "./internal/isNil"
import trim from "./internal/trim"
import appendChild from "./appendChild"

// See: https://stackoverflow.com/a/35385518
function parseHTML(innerHTML: string, children?: ArrayLike<Element>) {
  if (isNil(innerHTML)) return document.createElement(innerHTML)
  const template = document.createElement('template')
  template.innerHTML = trim(innerHTML)
  const node = template.content.firstChild! as Element

  if (children?.length) {
    appendChild(node, children)
  }

  return node
}

export default parseHTML
