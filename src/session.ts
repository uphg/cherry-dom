import createStroageObject from './_createStroageObject'

const session = window.sessionStorage

const {
  has: hasSession,
  get: getSession,
  set: setSession,
  remove: removeSession,
  clear: clearSession
} = createStroageObject(session)

export { hasSession, getSession, setSession, removeSession, clearSession }
