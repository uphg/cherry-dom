import each from "./internal/each"
import flat from "./internal/flat"
import { MaybeArrayLike } from "./internal/types"

function prepend(parent: Node, ...nodes: Array<MaybeArrayLike<Node | null>>) {
  const children = flat(nodes)

  each(children, (el) => {
    if (!el) return
    const { firstChild } = parent
    if (firstChild) {
      parent.insertBefore(el as Node, firstChild)
    } else {
      parent.appendChild(el as Node)
    }
  })

  return parent
}

export default prepend
