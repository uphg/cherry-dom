import trims from './_trims'
import flatMap from './_flatMap'

function mergeClass(args: string[]) {
  return flatMap(args, (value: string) => trims(value))
}

export default mergeClass