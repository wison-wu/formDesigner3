import render from './custom/previewRender.vue'
import checkRules from './custom/rule'

const layouts = {
  colItem(element) {
    let labelWidth = element.labelWidth ? `${element.labelWidth}px` : null
    const rules = checkRules(element)
    const { onValChange } = this.$attrs
    return (
      <el-col style={'padding-left: 7.5px; padding-right: 7.5px;'}>
        <el-form-item
          label={element.showLabel ? element.label : ''}
          label-width={labelWidth}
          prop={element.id}
          rules={rules}
        >
          <render
            key={element.id}
            conf={element}
            modelValue={element.modelValue}
            onInput={(event) => {
              element.modelValue = event
              onValChange(element.id, event)
            }}
          />
        </el-form-item>
      </el-col>
    )
  }
}

export default {
  name: 'previewItem',
  components: {
    render
  },
  props: ['model', 'modelValue'],
  data() {
    return {
      eleConfig: this.model
    }
  },
  render() {
    this.eleConfig.modelValue = this.modelValue
    return layouts.colItem.call(this, this.eleConfig, this.modelValue)
  }
}
