import {h} from "vue";
import {jsonClone} from '../utils/index';
import childrenItem from './slot/index';
import {renderComp} from './mixin';
export default {
   render() {
    const map = this.getRenderComps();
    let confClone = jsonClone(this.conf);
    const children = childrenItem(h,confClone);
    const ele = map.get(confClone.ele);
    return children.length==0?h(ele,confClone):h(ele,confClone,{default:()=>children})
  },
  props: ['conf'],
  mixins:[renderComp]
}