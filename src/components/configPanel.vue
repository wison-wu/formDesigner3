<template>
  <div class="right-board">
    <el-tabs v-model="currentTab" class="center-tabs">
      <el-tab-pane label="属性配置" name="field" />
    </el-tabs>
    <div class="field-box">
      <el-scrollbar class="right-scrollbar">
        <el-form size="small" label-width="100px" >
          <component  :getFormId="getFormId" :props="activeItem" :is="comp.value"></component>
        </el-form>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import reg from "./custom/register";
import { defineAsyncComponent, ref,shallowRef,toRefs,computed } from 'vue'

export default {
  name:'configPanel',
  setup(props){
    const currentTab =ref('field');
    const formIdArray =ref([]);
    const components = new Map();
    
    const registComp = () => {
      reg.forEach(c => {
        const componentName = c.name;
        components.set(componentName,defineAsyncComponent(() => import(`./custom/configs/${componentName}.vue`)));
      });
    }
    registComp();
    const comp = computed(() => {
      let c = null;
      if(props.activeItem){
        c = components.get(props.activeItem.compType);
      }
      return shallowRef(c);
    });
    return {
      currentTab,formIdArray,comp
    }
  },
  props:{
    activeItem: { 
      type: Object,
      default:function(){
        return {}
      }
    },
    itemList: { 
      type: Array,
      default:function(){
        return []
      }
    }
  },
  methods:{
    getFormId(itemId){
      this.formIdArray = [];
      Array.from(this.itemList,(item)=>{
        if(item.compType === 'row'){
          Array.from(item.columns,(column)=>{
            Array.from(column.list,(col)=>{
              if(col._id !== itemId){
                this.formIdArray.push(col.id);
              }
            })
          })
        }else{
          if(item._id !== itemId){
            this.formIdArray.push(item.id);
          }
        }
      })
      return this.formIdArray;
    }
  }
}
</script>
<style scoped>
.field-box  :deep(.el-scrollbar__wrap) {
  margin-left:0px;
}
</style>