//此文件已经废弃，仅作为之前文件的参考。
import {h,resolveComponent} from "vue";
import {jsonClone,isAttr} from '../utils/index';
import childrenItem from './slot/index';
import {remoteData} from './mixin';

export default {
  render() {
    let dataObject = {
      attrs: {},
      props: {},
      style: ''
    }
    this.getRemoteData();
    let confClone = jsonClone(this.conf);
    const children = childrenItem(confClone);
    Object.keys(confClone).forEach(key => {
      const val = confClone[key]
      if (dataObject[key]) {
        dataObject[key] = val
      } else if(key ==='width'){
        dataObject.style+= `width:${val};`;
      }else if(key ==='vertical'&&val){
        dataObject.style+= `display:block;`;
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
    return typeof children==='function'? h(eleComponent,dataObject,children()):h(eleComponent,dataObject)
  },
  props: ['conf','modelValue'],
  mixins:[remoteData]
}
function vModel(self, dataObject) {
  dataObject.modelValue=self.modelValue;
  dataObject.disabled=true;
  
}
