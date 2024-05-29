import { h, resolveComponent } from 'vue';
import { jsonClone, isAttr } from '../utils/index';
import childrenItem from './slot/index';
import { remoteData } from './mixin';
export default {
  render() {
    let dataObject = {
      style: ''
    };
    this.getRemoteData();
    let confClone = jsonClone(this.conf);
    const children = childrenItem(confClone);
    Object.keys(confClone).forEach((key) => {
      const val = confClone[key];
      if (key === 'width') {
        dataObject.style += `width:${val};`;
      } else if (key === 'vertical' && val) {
        dataObject.style += `display:block;`;
      } else {
        dataObject[key] = val;
      }
    });
    const eleComponent = resolveComponent(confClone.ele);
    vModel(this, dataObject);
    return typeof children === 'function'
      ? h(eleComponent, dataObject, children())
      : h(eleComponent, dataObject);
  },
  props: ['conf', 'modelValue'],
  mixins: [remoteData]
};
function vModel(self, dataObject) {
  dataObject.modelValue = self.modelValue;
  dataObject['onUpdate:modelValue'] = ($event) => {
    self.$emit('change', $event);
  };
}
