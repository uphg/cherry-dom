export default function test(describe: string, func: Function) {
  let status = true
  try {
    func()
  } catch(e) {
    console.log('e')
    console.log(e)
    status = false
  }
  console.log(`%c${status ? '√' : '×'}`, status ? 'color: #67c23a;' : 'color: #f56c6c;', describe)
}
