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
    this.getRemoteData();
    let confClone = jsonClone(this.conf);
    const children = childrenItem(confClone);
    Object.keys(confClone).forEach(key => {
      const val = confClone[key]
      if (dataObject[key]) {
        dataObject[key] = val
      } else if(key ==='width'){
        dataObject.style= 'width:'+val;
      } else if (!isAttr(key)) {
        dataObject.props[key] = val
      }else {
        if(key !== 'value'){
          dataObject.attrs[key] = val
        }
      }
    })
    const eleComponent = resolveComponent(confClone.ele);
    vModel(this, dataObject);
    return children.length==0?h(eleComponent,dataObject):h(eleComponent,dataObject,children)
  },
  props: ['conf','modelValue'],
  mixins:[remoteData]
}
function vModel(self, dataObject) {
  dataObject.modelValue=self.modelValue;
  dataObject.disabled=true;
  
}
