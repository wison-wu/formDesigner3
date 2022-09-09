<template>
  <div class="right-board">
    <el-tabs v-model="currentTab" class="center-tabs">
      <el-tab-pane label="属性配置" name="field" />
    </el-tabs>
    <div class="field-box">
      <el-scrollbar class="right-scrollbar">
        <el-form size="small" label-width="100px" >
          <component  :getFormId="getFormId" :props="activeItem" :is="components.get(activeItem.compType)"></component>
        </el-form>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import reg from "./custom/register";
import { defineAsyncComponent, ref } from 'vue'

export default {
  name:'configPanel',
  setup(){
    const currentTab =ref('field');
    const formIdArray =ref([]);
    const components = ref(new Map());
    return {
      currentTab,formIdArray,components
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
  created() {
    this.registComp();
    
  },
  methods:{
    registComp(){
      reg.forEach(c => {
        const componentName = c.name;
        this.components.set(componentName,defineAsyncComponent(() => import(`./custom/configs/${componentName}.vue`)));
      });
    },
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