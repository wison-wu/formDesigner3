const slots = import.meta.glob('./*.jsx', { eager: true })
const componentChild = {}
Object.keys(slots).forEach((key) => {
  const obj = slots[key]
  const tag = key.replace('./', '').replace('.jsx', '')
  componentChild[tag] = obj.default
})

export default function childrenItem(confClone) {
  let children = {}
  const childObjs = componentChild[confClone.ele]
  if (childObjs) {
    children = () => {
      let result = {}
      Object.keys(childObjs).forEach((key) => {
        const childFunc = childObjs[key]
        const slots = childFunc(confClone)
        if (slots !== null && slots !== '') {
          result[key] = () => slots
        }
      })
      return result
    }
  }
  return children
}
