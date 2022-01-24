export interface ArrayLike<T> {
  [index: number]: T;
  length: number;
}

export default function each<T>(
  obj: { [key: string]: T } | ArrayLike<T> | Array<T>,
  callback: (
    currentValue: T,
    index: number | string,
    obj?: { [key: string]: T } | ArrayLike<T> | Array<T>
  ) => unknown
) {
  if (Array.isArray(obj)) {
    const length = obj.length
    for (let i = 0; i < length; i++) {
      callback((obj as ArrayLike<T>)[i], i, obj)
    }
  } else {
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      callback((obj as { [key: string]: T })[key], key, obj)
    }
  }

  return obj
}
