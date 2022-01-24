import type { StyleElement } from './_interface'
import isObject from './_isObject'
import camelize from "./_camelize";

function setStyle(
  el: StyleElement,
  styles: { [key: string]: string } | string,
  value?: string
) {
  if (isObject(styles)) {
    const props = Object.keys(styles)
    props.forEach((item: string) => {
      // @ts-ignore
      setStyle(el, item, styles[item])
    })
    return
  }

  const styleName = camelize(styles as string)
  el.style[styleName] = value
}

export default setStyle
