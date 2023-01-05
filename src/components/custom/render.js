import {h,resolveComponent} from "vue";
import {jsonClone,isAttr} from '../utils/index';
import childrenItem from './slot/index';
import {remoteData} from './mixin';
export default {
   render() {
    let dataObject = {
      attrs: {},
      props: {},
      style: {}
    }
    
    let confClone = jsonClone(this.conf);
    const children = childrenItem(confClone);
    Object.keys(confClone).forEach(key => {
      const val = confClone[key]
      if(key ==='width'){
        dataObject.style= 'width:'+val;
      }else{
        dataObject[key] = val
      }
    })
    const eleComponent = resolveComponent(confClone.ele);
    vModel(this, dataObject);
    return h(eleComponent,dataObject,children())
  },
  props: ['conf','modelValue'],
  mixins:[remoteData]
}
function vModel(self, dataObject) {
  dataObject.modelValue=self.modelValue;
}