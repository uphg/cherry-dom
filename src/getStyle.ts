import camelize from "./_camelize";

function getStyle(el: HTMLElement, styleName: string) {
  if (!el || !styleName) return null

  styleName = camelize(styleName)
  // see: https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getComputedStyle#defaultview
  const computed = document.defaultView?.getComputedStyle(el, '')

  // @ts-ignore
  return (computed ? computed?.[styleName] : el['style'][styleName]) || ''
}

export default getStyle
