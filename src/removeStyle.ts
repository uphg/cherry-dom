import setStyle from "./setStyle"
import isObject from "./_isObject"

function removeStyle(el: HTMLElement, style: { [key: string]: string } | string,) {
  if(!el || !style) return

  if (isObject(style)) {
    const props = Object.keys(style)
    props.forEach((item) => {
      setStyle(el, item, '')
    })
    return
  }

  setStyle(el, style, '')
}

export default removeStyle
