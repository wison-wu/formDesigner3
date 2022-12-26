import {h} from "vue";
import {jsonClone,isAttr} from '../utils/index';
import childrenItem from './slot/index';
import {renderComp} from './mixin';
export default {
   render() {
    let dataObject = {
      attrs: {},
      props: {},
      style: {}
    }
    const map = this.getRenderComps();
    let confClone = jsonClone(this.conf);
    const children = childrenItem(h,confClone);
    Object.keys(confClone).forEach(key => {
      const val = confClone[key]
      if(key ==='width'){
        dataObject.style= 'width:'+val;
      }else{
        dataObject[key] = val
      }
    })


    const ele = map.get(confClone.ele);
    vModel(this, dataObject);
    return children.length==0?h(ele,dataObject):h(ele,dataObject,{default:()=>children})
  },
  props: ['conf','modelValue'],
  mixins:[renderComp]
}
function vModel(self, dataObject) {
  dataObject.modelValue=self.modelValue;
  
}