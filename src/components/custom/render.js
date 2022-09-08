import {h} from "vue";
import {isAttr,jsonClone,compMap} from '../utils/index';
import {remoteData} from './mixin';
function vModel(self, dataObject) {
  dataObject.on.input = val => {
    self.$emit('input', val)
  }
}

export default {
   render() {
    let dataObject = {
      attrs: {},
      props: {},
      on: {},
      style: {}
    }
    //远程获取数据
    this.getRemoteData();
    const confClone = jsonClone(this.conf);
    Object.keys(confClone).forEach(key => {
      const val = confClone[key]
      if (dataObject[key]) {
        dataObject[key] = val
      } else if (!isAttr(key)) {
        dataObject.props[key] = val
      } else if(key ==='width'){
        dataObject.style= 'width:'+val;
      }else {
        dataObject.attrs[key] = val
      }
    })
    /*调整赋值模式，规避cascader组件赋值props会出现覆盖预制参数的bug */
    vModel(this, dataObject);
    return h(compMap().get("el-input"), dataObject)
  },
  props: ['conf'],
  mixins:[remoteData]
}
