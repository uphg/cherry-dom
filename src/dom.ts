import toFirstCaps from './_toFirstCaps'

export const trim = (string: string) => {
  return string.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
}

export const addClass = (el: Element, name: string) => {
  if (!el || !name) return
  let oldClass = el.className
  const classes = name.split(' ')
  for (const item of classes) {
    if (el.classList) {
      el.classList.add(item)
    } else {
      oldClass += ` ${item}`
    }
  }
  if (!el.classList) {
    el.className = oldClass
  }
}

export const removeClass = (el: Element, name: string) => {
  if (!el || !name) return
  let oldClass = ` ${el.className} `
  const classes = name.split(' ')
  for (const item of classes) {
    if (el.className) {
      el.classList.remove(item)
    } else {
      oldClass = oldClass.replace(` ${item} `, ' ')
    }
  }
  if (!el.classList) {
    el.className = trim(oldClass)
  }
}

interface SetStyleElement extends HTMLElement {
  style: any
}

export const setStyle = (el: SetStyleElement, styles: { [key: string]: string }) => {
  const styleKeys = Object.keys(styles)

  for(const key of styleKeys) {
    if (!key) continue
    el.style[toFirstCaps(key)] = styles[key]
  }
}

export const getComputedStyle = (el: Element, pseudoEl?: string | null | undefined) => (
  window?.getComputedStyle(el, pseudoEl) as unknown as { [key: string]: string }
)

const toStyleMap = (stylesString: string | null) => {
  if (!stylesString) return

  const styleMaps: string[] = stylesString?.split(/; /)
  const lastIndex = styleMaps?.length - 1
  styleMaps[lastIndex] = styleMaps[lastIndex].replace(';', '')

  const styles: { [key: string]: string } = {}
  for (const item of styleMaps) {
    const map = item.split(': ')
    styles[toFirstCaps(map[0])] = map[1]
  }

  return styles
}

export const getStyle = (el: HTMLElement, propertyNames?: string[] | string) => {
  const styles = toStyleMap(el.getAttribute('style'))
  if (!styles) return
  if (!propertyNames) return styles
  if (typeof propertyNames === 'string') {
    return styles?.[propertyNames]
  }

  const newStyles: { [key: string]: string } = {}
  for (const item of Object.keys(styles)) {
    if(propertyNames?.indexOf(item) === -1) {
      continue
    }
    newStyles[item] = styles[item]
  }
  return newStyles
}
