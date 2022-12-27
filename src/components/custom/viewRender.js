import {h} from 'vue';
import {jsonClone,isAttr} from '../utils/index';
import childrenItem from './slot/index';
import {renderComp,remoteData} from './mixin';

export default {
  render() {
    let dataObject = {
      attrs: {},
      props: {},
      style: {}
    }
    this.getRemoteData();
    const map = this.getRenderComps();
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
    const ele = map.get(confClone.ele);
    vModel(this, dataObject);
    console.log(dataObject);
    return children.length==0?h(ele,dataObject):h(ele,dataObject,children)
  },
  props: ['conf','modelValue'],
  mixins:[renderComp,remoteData]
}
function vModel(self, dataObject) {
  dataObject.modelValue=self.modelValue;
  dataObject.disabled=true;
  
}
