import findIndex from "./internal/findIndex"

function getIndex<T extends Element>(el: T) {
  const children = el.parentNode?.children
  if (!children) return
  return findIndex(children, (item) => item === el)
}

export default getIndex
