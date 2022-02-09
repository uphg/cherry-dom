import type { StyleElement } from './_interface'
import isObject from './_isObject'
import camelize from "./_camelize";
import each from './_each'

function setStyle(
  el: StyleElement,
  styles: { [key: string]: string } | string,
  value?: string
) {
  if (isObject(styles)) {
    each(styles, (item, key) => {
      setStyle(el, key as string, item)
    })
    return
  }

  const styleName = camelize(styles as string)
  el.style[styleName] = value
}

export default setStyle
