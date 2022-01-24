const storage = window?.localStorage

export default {
  has(name: string) {
    return !!storage?.getItem(name)
  },
  
  get(name: string) {
    return JSON.parse(storage?.getItem(name) as string)
  },
  
  set(name: string, value: string | number | boolean | Object) {
    return storage?.setItem(name, JSON.stringify(value))
  },
  
  remove(name: string) {
    return storage?.removeItem(name)
  },
  
  clear() {
    return storage?.clear()
  }
}
