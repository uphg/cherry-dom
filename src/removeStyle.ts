import setStyle from "./setStyle"
import each from './internal/each'

function removeStyle(el: HTMLElement, ...args: string[]) {
  if (!el || !args) return
  each(args, (item) => {
    setStyle(el, item as string, '')
  })
}

export default removeStyle
