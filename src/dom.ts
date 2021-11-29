// 添加 class

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

// const setStyle = (el, styles: { [key: string]: string }) => {

// }

export const getComputedStyle = (el: Element, pseudoEl?: string | null | undefined) => (
  window?.getComputedStyle(el, pseudoEl) as unknown as { [key: string]: string }
)

const styleMap = (stylesString: string | null) => {
  if (!stylesString) return

  const maps: string[] = stylesString?.split(/; /)
  maps[maps?.length - 1] = maps[maps?.length - 1].replace(';', '')

  const styles: { [key: string]: string } = {}
  for (const item of maps) {
    const map = item.split(': ')
    styles[map[0]] = map[1]
  }

  return styles
}

export const getStyle = (el: HTMLElement, propertyNames?: string[] | string) => {
  const styles = styleMap(el.getAttribute('style'))
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
