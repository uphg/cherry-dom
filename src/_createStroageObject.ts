const createStroageObject = (storage: Storage) => {

  return {
    has: (name: string) => {
      return !!storage?.getItem(name)
    },
    
    get: (name: string): JSON => {
      return JSON.parse(storage?.getItem(name) as string)
    },
    
    set: (name: string, value: string | number | boolean | Object) => {
      return storage?.setItem(name, JSON.stringify(value))
    },
    
    remove: (name: string) => storage?.removeItem(name),
    
    clear: () => storage?.clear()
  }
}

export default createStroageObject