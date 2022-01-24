import setStyle from "./setStyle"
import each from './_each'

function removeStyle(el: HTMLElement, style: string | string[], ...args: string[]) {
  if (!el || !style) return

  if (args?.length > 0) {
    removeStyle(el, [style as string, ...args])
    return
  }

  if (Array.isArray(style)) {
    each(style, (item) => {
      setStyle(el, item as string, '')
    })
    return
  }

  setStyle(el, style as string, '')
}

export default removeStyle
