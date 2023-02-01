import render from './custom/viewRender.vue'
const layouts = {
  colItem(element,value) {
    let labelWidth = element.labelWidth ? `${element.labelWidth}px` : null
    if(element.viewType === 'component'){
      return (
          <el-form-item label={element.showLabel ? element.label : ''}
            label-width={labelWidth} 
            prop={element.id}
            >
            <render key={element.id} conf={element} modelValue={value}/>
          </el-form-item>
      )
    }else if(element.viewType === 'html'){
      return (
        <el-form-item label={element.showLabel ? element.label : ''}
          label-width={labelWidth} 
          prop={element.id}
        >
          <fancy-html text={value}/>
        </el-form-item>
      )
    }else{
      if(typeof value === 'object'){
        value = value[0] + ' ' + element['range-separator'] + ' ' + value[1];
      }
      return (
        <el-form-item label={element.showLabel ? element.label : ''}
          label-width={labelWidth} 
          prop={element.id}
        >
          {value}
        </el-form-item>
      )
    }
    
  }
}

export default {
  name:"formViewItem",
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