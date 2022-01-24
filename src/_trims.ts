import trim from './_trim'

function trims(string: string) {
  return string.split(' ').filter(item => !!trim(item))
}

export default trims
