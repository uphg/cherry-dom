import camelize from "./internal/camelize";

function getStyle(el: HTMLElement, styleName: string) {
  if (!el || !styleName) return null
  styleName = camelize(styleName)
  return (el['style'] as Record<string, any>)[styleName] as string
}

export default getStyle
