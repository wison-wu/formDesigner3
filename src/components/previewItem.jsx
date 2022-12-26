import render from './custom/previewRender'
import checkRules from './custom/rule';

const layouts = {
  colItem(element,modelValue) {
    let labelWidth = element.labelWidth ? `${element.labelWidth}px` : null
    const rules = checkRules(element);
    const {onValChange} = this.$attrs;
    return (
        <el-col  style="padding-left: 7.5px; padding-right: 7.5px;">
          <el-form-item label={element.showLabel ? element.label : ''}
                        label-width={labelWidth}
                        prop={element.id}
                        rules={rules}
                        >
            <render key={element.id} conf={element} modelValue={modelValue} onInput={event => {
              //debugger;
              //if (event.target)return;
              element.value = event;
              onValChange(element.id,event);
          }} onChange={ event => {
            //debugger;
            //if (event.target)return;
            element.value = event;
            onValChange(element.id,event);
        }}/>
          </el-form-item>
        </el-col>
    )
  }
}

export default {
  name:"previewItem",
  components: {
    render
  },
  props: ['model','modelValue'],
  data(){
    return {
      eleConfig:this.model
    }
  },
  render() {
    return layouts.colItem.call(this, this.eleConfig,this.modelValue)
  }
}