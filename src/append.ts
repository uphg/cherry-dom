import each from "./internal/each"
import flat from "./internal/flat"
import { MaybeArrayLike } from "./internal/types"

function append(parent: Element, ...nodes: Array<MaybeArrayLike<Node | Element | null>>) {
  const children = flat(nodes)
  each(children, (el) => {
    el && parent.appendChild(el as Node)
  })
  return parent
}

export default append
