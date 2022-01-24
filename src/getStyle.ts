import isServer from "./isServer";
import camelize from "./_camelize";

function getStyle(el: HTMLElement, styleName: string) {
  if (isServer) return
  if (!el || !styleName) return null

  styleName = camelize(styleName)
  const computed = document.defaultView?.getComputedStyle(el, '')

  // @ts-ignore
  return (computed ? computed?.[styleName] : el['style'][styleName]) || ''
}


export default getStyle
