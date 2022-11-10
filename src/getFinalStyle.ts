import camelize from "./internal/camelize"

function getFinalStyle(el: HTMLElement, styleName: string) {
  if (!el || !styleName) return null
  styleName = camelize(styleName)
  // see: https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getComputedStyle#defaultview
  const computed = window?.getComputedStyle(el, '')
  return (computed ? (computed as Record<string, any>)[styleName] : (el['style'] as Record<string, any>)[styleName]) || ''
}

export default getFinalStyle