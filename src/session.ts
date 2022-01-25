import isNil from './_isNil'

const storage = window?.sessionStorage

export function hasSession(name: string) {
  if (isNil(name)) return false
  return !!storage?.getItem(name)
}

export function getSession(name: string) {
  if (isNil(name)) return null
  const result = storage?.getItem(name)
  return result && JSON.parse(result)
}

export function setSession(name: string, value: string | number | boolean | Object) {
  if (isNil(name) || isNil(value)) return
  return storage?.setItem(name, JSON.stringify(value))
}

export function removeSession(name: string) {
  if (isNil(name)) return
  return storage?.removeItem(name)
}

export function clearSession() {
  return storage?.clear()
}
