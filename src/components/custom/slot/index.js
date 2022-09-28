const slots = import.meta.glob("./*.jsx",{ eager: true })
const componentChild = {};
console.log(slots);
Object.keys(slots).forEach(key=>{
  const obj = slots[key];
  const tag = key.replace('./','').replace('.jsx','');
  componentChild[tag] = obj.default;
})


export default function childrenItem(h,confClone) {
  let children = [];
  const childObjs = componentChild[confClone.ele]
  if (childObjs&&childObjs.slot) {
    Object.keys(childObjs).forEach(key => {
      const childFunc = childObjs[key]
      children.push(childFunc(h,confClone))
    })
  }
  return children;
};