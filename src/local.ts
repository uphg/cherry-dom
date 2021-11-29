import createStroageObject from './_createStroageObject'

const local = window?.localStorage

const {
  has: hasLocal,
  get: getLocal,
  set: setLocal,
  remove: removeLocal,
  clear: clearLocal
} = createStroageObject(local) || {}

export { hasLocal, getLocal, setLocal, removeLocal, clearLocal }