import isNil from './_isNil'

const storage = window?.localStorage

export function hasLocal(name: string) {
  if (isNil(name)) return false
  return !!storage?.getItem(name)
}

export function getLocal(name: string) {
  if (isNil(name)) return null
  const result = storage?.getItem(name)
  return result && JSON.parse(result)
}

export function setLocal(name: string, value: string | number | boolean | Object) {
  if (isNil(name) || isNil(value)) return
  return storage?.setItem(name, JSON.stringify(value))
}

export function removeLocal(name: string) {
  if (isNil(name)) return
  return storage?.removeItem(name)
}

export function clearLocal() {
  return storage?.clear()
}
