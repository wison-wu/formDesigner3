<template>
  <div >
    <el-card class="box-card">
      <el-tabs v-model="tabName">
        <el-tab-pane
          :key="item.name"
          v-for="item in tableTabs"
          :label="item.title"
          :name="item.name"
          class="tab-pane"
        >
          <div v-if="item.name ==='form'">
            <form-builder ref="formBuilder" v-model="formVal" :buildData="formCode" v-if="itemList.length>0"/>
            <div style="margin-bottom:15px;text-align:center">
                <el-button type="primary" class="button" @click="handlerSubForm">提交</el-button>
            </div>
          </div>
          <codemirror v-model:value="code" :options="options" :height="600" v-show="item.name ==='config'||item.name ==='value'"/>
          <div v-if="item.name==='view'">
            <form-viewer ref="formViewer" v-model="formVal" :buildData="formCode"></form-viewer>
          </div>
          <div v-if="item.name==='edit'">
            <form-builder ref="formBuilder" v-model="formEditVal" :buildData="formEditCode" />
            <div style="margin-bottom:15px;text-align:center">
              <el-button type="primary" class="button" @click="editFormData()">回显数据</el-button>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>

    </el-card>
  </div>
</template>

<script>
import formBuilder from '../components/formBuilder.vue'
import formViewer from '../components/formViewer.vue'
import codeMirror from "codemirror-editor-vue3";
// language
import "codemirror/mode/javascript/javascript.js";
// theme
import "codemirror/theme/dracula.css";
export default {
  components:{
    formBuilder,
    codeMirror,
    formViewer
  },
  data(){
    return{
      formCode:'',
      formVal:'',
      formEditVal:'',
      formEditCode:'',
      tabName:'form',
      tableTabs: [{
          title: '编辑表单',
          name: 'form'
        }, {
          title: '配置',
          name: 'config'
        }, {
          title: '数据',
          name: 'value'
        }],
        options: {
          mode: "text/javascript",
          tabSize: 2, // 缩进格式
          theme: 'dracula', // 主题，对应主题库 JS 需要提前引入
          lineNumbers: true, // 显示行号
          line: true,
          styleActiveLine: true, // 高亮选中行
          hintOptions: {
            completeSingle: true // 当匹配只有一项的时候是否自动补全
          }
        }
    } 
  },
  mounted(){
    this.$nextTick(()=> {
      const formValue = localStorage.getItem("formValue");
      this.formCode = formValue;
    })
    
  },
  methods:{
    handlerchangeopen(){
    },
    editFormData(){
      this.formEditCode = this.formCode;
      this.formEditVal = this.formVal;
      console.log(this.formEditCode)
      console.log(this.formEditVal)
    },
    async handlerSubForm(){
      await this.$refs['formBuilder'][0].validate();
      if(this.formVal!==''){
        this.addNewTab();
        this.addEditTab();
      }
    },
    addNewTab(){
      if(this.tableTabs.length<4){
        this.tableTabs.push({
          title: '查看表单',
          name: 'view'
        });
      }
    },
    addEditTab(){
      if(this.tableTabs.length<5){
        this.tableTabs.push({
          title: '表单数据回显',
          name: 'edit'
        });
      }

    }
  },
  computed:{
    itemList(){
      if(this.formCode!==''){
        const form = JSON.parse(this.formCode);
        return form.list;
      }else{
        return [];
      }
    },
    code:{
      get() {
        if(this.tabName ==='form'){
          return ''
        }else if(this.tabName === 'config'){
          return this.formCode
        }else{
          return this.formVal
        }
      },
      set(){}
    }
  },
  watch:{
    formVal(newVal,oldVal){
      // if(this.formVal!==''){
      //   this.addNewTab();
      // }
    }
  }
}
</script>

<style scoped>

.box-card{
  width:60%;
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  margin:auto;
  overflow: auto;
  display: block;
}
#app{
  position: relative;
}
</style>