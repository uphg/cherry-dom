import isNil from './_isNil'

const storage = window?.localStorage

export default {
  has(name: string) {
    if (isNil(name)) return false
    return !!storage?.getItem(name)
  },

  get(name: string) {
    if (isNil(name)) return null
    const result = storage?.getItem(name)
    return result && JSON.parse(result)
  },

  set(name: string, value: string | number | boolean | Object) {
    if (isNil(name) || isNil(value)) return
    return storage?.setItem(name, JSON.stringify(value))
  },

  remove(name: string) {
    if (isNil(name)) return
    return storage?.removeItem(name)
  },

  clear() {
    return storage?.clear()
  }
}