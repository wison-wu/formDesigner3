import {h} from "vue";
import {jsonClone} from '../utils/index';
import {remoteData,renderComp} from './mixin';
function vModel(self, dataObject) {
  dataObject.onInput = val => {
    self.$emit('input', val)
  }
}

export default {
   render() {
    const map = this.getRenderComps();
    const confClone = jsonClone(this.conf);
    vModel(this, confClone);
    const ele = map.get(confClone.ele);
    return h(ele, confClone)
  },
  props: ['conf'],
  mixins:[remoteData,renderComp]
}
