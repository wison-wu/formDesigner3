import { defineComponent,toRefs,h } from "vue";
import draggable from 'vuedraggable'
import render from './custom/render'
import {getSimpleId} from "./utils/IdGenerate";
import {dynamicTableAllowedItems,tableAllowedItems} from "./custom/formConf";
import {CopyDocument,Delete} from '@element-plus/icons-vue';
import dynamicTable from './dynamic/dynamicTable.vue'
import dynamicTableItem from './dynamic/dynamicTableItem.jsx'
import fancyTable from './table/fancyTable.vue'
/**
 * 动态表单允许增加的组件列表
 */
const components = {
  itemBtns( element,parent) {
    const {onCopyItem,onDeleteItem} = this.$attrs;
    return [
      <span class="drawing-item-copy" title="复制" onClick={event => {
        onCopyItem(element,parent); event.stopPropagation();
      }}>
        <el-icon>
          <CopyDocument />
        </el-icon>
      </span>,
      <span class="drawing-item-delete" title="删除" onClick={event => {
        onDeleteItem(element,parent); event.stopPropagation();
      }}>
        <el-icon>
          <Delete />
        </el-icon>
      </span>
    ]
  }
}
const layouts = {
  colItem(element,parent) {
    let className = this.activeItem.id === element.id ? 'drawing-item active-from-item' : 'drawing-item'
    let labelWidth = element.labelWidth ? `${element.labelWidth}px` : `0px`
    const {onActiveItemChange} = this.$attrs;
    return (
        <el-col class={className} span={element.span} onClick={event=>{onActiveItemChange(element); event.stopPropagation()}}>
          <span class="component-name component-id">{element.id}</span>
          <el-form-item label={element.showLabel ? element.label : ''}
                        label-width={labelWidth}
                        required={element.required} >
            <render key={element.id} conf={element} modelValue={element.value} onInput={ event => {
              //兼容select 搜索
              if(event.data)return;
              //兼容select 搜索 end
              element.value = event;
              }}
            />
          </el-form-item>
          {components.itemBtns.apply(this, arguments)}
        </el-col>
    )
  },
  rowItem(element){
    const { onActiveItemChange } = this.$attrs;
    const className = this.activeItem.id === element.id ? 'drawing-item drawing-row-item active-from-item' : 'drawing-item drawing-row-item'    
    return (
        <el-col class={className} >
          <el-row  gutter={element.gutter}  onClick={event => { onActiveItemChange(element); event.stopPropagation()}}>
            <span class="component-name">{element.id}</span>
            <div class="drag-wrapper" style="padding-left: 7.5px; padding-right: 7.5px;width:100%">
              {
                element.columns.map((item) =>{
                  return (
                    <el-col class="drag-col-wrapper"  span={item.span}>
                      <draggable class="drag-wrapper row-drag" v-model={item.list} animation="100" group="componentsGroup"
                        itemKey="id"
                        onAdd={(e)=>{this.handlerAdd(e,item,element)}}
                      >
                        {{
                          item:(obj)=>{
                            return renderChildren.call(this,obj.element,element);
                          }
                        }}
                      </draggable>
                    </el-col>
                  )
                })
              }
            </div>
          </el-row>
          {components.itemBtns.call(this,element)}
        </el-col>
    )    
  },
  tableItem(element){
    let className = "";
    className = this.activeItem.id === element.id ? 'drawing-item drawing-row-item active-from-item' : 'drawing-item drawing-row-item'
    const {onActiveItemChange} = this.$attrs;
    return (
      <el-col class={className} onClick={event => { onActiveItemChange(element); event.stopPropagation()}}>
        <span class="component-name" style="margin-bottom:15px">{element.id}</span>
        <fancy-table  layoutArray={element.layoutArray} 
                      tdStyle={element.tdStyle} 
                      width={element.width}
                      height={element.height}
                      onSelectItem={(item)=>{onActiveItemChange(item);}}
        >
          {{
            default: (item) => {
              return (
                    <draggable tag="div" class="table__content row-drag"
                               v-model={item.td.columns} animation="100"
                               group="componentsGroup"
                               onAdd={(e) => {this.handlerTableAdd(e, item.td);e.stopPropagation()}}
                               itemKey="id"
                    >
                      {{
                        item:(obj)=>{
                          return renderChildren.call(this,obj.element,item.td);
                        }
                      }}
                    </draggable>
              );
            }
          }}
        </fancy-table>
        {components.itemBtns.call(this,element)}
      </el-col>
    )
  },
  dynamicItem(element){
    let className = "";
    className = this.activeItem.id === element.id ? className+'drawing-item active-from-item' : className+'drawing-item'
    const {onActiveItemChange} = this.$attrs;
    return (
        <el-col  class={className} >
          <dynamic-table conf={element} activeItem={this.activeItem} onClick={event => { onActiveItemChange(element); event.stopPropagation()}}>
            <draggable tag="div" class="dynamic-table__content row-drag" ghost-class="dynamicGhost" v-model={element.columns} animation="100"
                       group="componentsGroup"
                       itemKey="id"
                       onAdd={(e)=>{this.handlerDynamicAdd(e,element)}}
            >
              {{
                item:(obj)=>{
                  const item = obj.element;
                  return (
                    <dynamic-table-item item={item} activeItem={this.activeItem}
                                        onSelectItem={(evt,item)=>{onActiveItemChange(item);evt.stopPropagation()}}
                                        onCopyItem={(evt)=>{this.handlerCopyItem(evt,element,index);evt.stopPropagation()}}
                                        onDeleteItem={(evt)=>{this.handlerDeleteItem(evt,element,index);evt.stopPropagation()}}
                    />
                    )
                  }
                  //return renderChildren.call(this,obj.element,obj);
              }}
            </draggable>
          </dynamic-table>
          {components.itemBtns.call(this,element)}
        </el-col>
    )
  }
}
/**
 * 生成row的子选项
 */
function renderChildren(element,parent) {
  const layout = layouts[element.layout]
  if (layout) {
    return layout.call(this,element,parent)
  }
  return layoutIsNotFound.call(this);
}
function layoutIsNotFound() {
  throw new Error(`没有与${this.element.layout}匹配的layout`)
}
export default defineComponent({
  name: "designItem",
  components: {
    render,
    draggable,
    CopyDocument,
    Delete,
    dynamicTable,
    dynamicTableItem,
    fancyTable
  },
  props: {
    model: { 
      type: Object,
      default:{}
    },
    activeItem: {
      type: Object,
      default:{}
    }
  },
  setup(props){
    const { model: vModel } = toRefs(props)
    return { vModel }
  },
  render() {
    const layout = layouts[this.vModel.layout]
    if (layout) {
      return layout.call(this, this.vModel)
    }
    return layoutIsNotFound.call(this)
  },
  methods:{
    
    handlerAdd(evt,item,row){
      if(evt.pullMode === 'clone'){
        if(!(evt.to.className.indexOf('row-drag')>-1&&this.activeItem.compType==='row')){
          item.list.splice(evt.newIndex,0,this.activeItem);
        }
      }else{
        if(evt.item.className.indexOf('el-row')>-1){  //防止row嵌套
          const newIndex = evt.newIndex;
          const oldIndex = evt.oldIndex;
          const rowItem = item.list[newIndex];
          item.list.splice(newIndex,1);
          this.$message.error('布局组件不允许被嵌套！');
          this.$emit('rowItemRollBack',rowItem,oldIndex);  //还原到原先的列表中
          return false;
        }
      }
    },
    /**
     * 动态表单
     */
    handlerDynamicAdd(evt,item){
      if(evt.pullMode === 'clone'){
        if(dynamicTableAllowedItems.includes(this.activeItem.compType)){
          item.columns.splice(evt.newIndex,0,this.activeItem);
        }else{
          this.$message.error('该组件不允许被放入动态表格内！');
        }
      }else{
        if(evt.item.className.indexOf('el-row')>-1){  //防止row嵌套
          const newIndex = evt.newIndex;
          const oldIndex = evt.oldIndex;
          const rowItem = item.columns[newIndex];
          item.columns.splice(newIndex,1);
          this.$message.error('布局组件不允许放入动态表格！');
          this.$emit('rowItemRollBack',rowItem,oldIndex);  //还原到原先的列表中
          return false;
        }
      }
    },
    handlerTableAdd(evt,td){
      if(evt.pullMode === 'clone'){
        if(!tableAllowedItems.includes(this.activeItem.compType)){
          td.columns.splice(evt.newIndex,0,this.activeItem);
        }else{
          this.$message.error('该组件不允许被放入表格内！');
        }
      }
    },
    handlerCopyItem(evt,element,index){
      const item = element.columns[index];
      const clone = JSON.parse(JSON.stringify(item))
      let uId = "fd_"+getSimpleId();
      clone.id = uId;
      clone._id = uId;
      element.columns.push(clone);
    },
    handlerDeleteItem(evt,element,index){
      element.columns.splice(index,1);
    }
  }
});
