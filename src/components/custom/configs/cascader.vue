<template>
  <div v-show="props.compType === 'cascader'">
    <!-- <el-form-item label="字段名">
      <el-input class="input" v-model="props"></el-input>
    </el-form-item> -->
    <el-form-item label="ID">
      <el-tooltip class="item" effect="dark" content="请注意,ID的修改可能会导致该组件相关事件失效！" placement="left">
        <el-input class="input" v-model="props.id" @change="handlerChangeId" ></el-input>
      </el-tooltip>
    </el-form-item>
    <el-form-item label="标题">
      <el-input class="input" v-model="props.label"></el-input>
    </el-form-item>
    <el-form-item label="栅格">
      <el-input-number v-model="props.span"  :min="1" :max="24"/>
    </el-form-item>
    <el-form-item label="宽度">
      <el-input-number v-model="props.width"  :min="0" :max="100"/>%
    </el-form-item>
    <el-form-item label="提示符">
      <el-input class="input" v-model="props.placeholder" placeholder="请输入提示符"/>
    </el-form-item>
    <!-- <el-form-item label="表单栅格">
      <el-slider class="input" v-model="props.span" :max="24" :min="1" :marks="{12:''}"></el-slider>
    </el-form-item> -->
    <el-form-item label="栅格间隔">
      <el-input-number v-model="props.gutter"  :min="0"></el-input-number>
    </el-form-item>
    <el-form-item label="标签宽度">
      <el-input-number v-model="props.labelWidth"  :min="0" :max="200"></el-input-number>
    </el-form-item>
    <el-form-item label="显示标签">
      <el-switch v-model="props.showLabel"  @change="handlerChangeLabel"></el-switch>
    </el-form-item>
    <el-form-item label="大小">
      <el-radio-group v-model="props.size">
        <el-radio-button label="large">大</el-radio-button>
        <el-radio-button label="default">中</el-radio-button>
        <el-radio-button label="small">小</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="清除">
      <el-switch v-model="props.clearable"></el-switch>
    </el-form-item>
    <el-form-item label="禁用">
      <el-switch v-model="props.disabled" ></el-switch>
    </el-form-item>
    <el-form-item label="完整路径">
      <el-switch v-model="props.props['show-all-levels']" ></el-switch>
    </el-form-item>
    <el-form-item label="分隔符">
      <el-input v-model="props.props.separator" ></el-input>
    </el-form-item>
    <el-form-item label="搜索">
      <el-switch v-model="props.props.filterable" ></el-switch>
    </el-form-item>
    <el-form-item label="展开方式">
      <el-radio-group v-model="props.props.expandTrigger">
      <el-radio-button label="click">点击</el-radio-button>
      <el-radio-button label="hover">悬停</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="多选">
      <el-switch v-model="props.props.multiple"></el-switch>
    </el-form-item>
    <el-form-item label="任一级可选">
      <el-switch v-model="props.props.checkStrictly"></el-switch>
    </el-form-item>
    <el-form-item label="数据类型">
      <el-radio-group v-model="props.dataType" @change="handlerChangeDataType">
        <el-radio-button label="static">静态数据</el-radio-button>
        <el-radio-button label="dynamic">动态数据</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <div v-show="props.dataType ==='dynamic'">
      <el-form-item label="地址">
        <el-input v-model="props.action"></el-input>
      </el-form-item>
      <el-form-item label="显示标识">
        <el-input v-model="props.props.label"></el-input>
      </el-form-item>
      <el-form-item label="值标识">
        <el-input v-model="props.props.value"></el-input>
      </el-form-item>
      <el-form-item label="下级标识">
        <el-input v-model="props.props.children"></el-input>
      </el-form-item>
    </div>
    <div v-show="props.dataType ==='static'">
        <el-form-item label="静态数据">
          <el-button circle @click="handlerStaticData"/>
        </el-form-item>
    </div>
    <!-- <el-form-item label="URL">
      <el-input v-model="props.action"></el-input>
    </el-form-item> -->
    
    <el-dialog class="dialog_content" v-model="staticDataVisible" width="70%"
                :close-on-press-escape="false"
                :close-on-click-modal="false"
                :show-close="false"
                :center="true"
                :draggable="true"
    >

      <codemirror v-model:value="staticOptions" :options="codeMirror" :height="400"/>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handlerSave">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import {changeId} from '../mixin'
//引入 省市区 数据
import {areaData} from '../../utils/chinaAreaData';
import Codemirror from "codemirror-editor-vue3";
// // 核心样式
// language
import "codemirror/mode/javascript/javascript.js";
// theme
import "codemirror/theme/dracula.css";
const options = {
  mode: "text/javascript", // Language mode
  theme: "dracula", // Theme
  lineNumbers: true, // Show line number
  smartIndent: true, // Smart indent
  indentUnit: 2, // The smart indent unit is 2 spaces in length
  foldGutter: true, // Code folding
  styleActiveLine: true, // Display the style of the selected row
}
/**
 * input的配置项
 */
export default {
  name:"cascaderConfig",
  props:['props'],
  components:{
    Codemirror
  },
  mixins:[changeId],
  data(){
    return {
      staticDataVisible:false,
      codeMirror:options,
      staticOptions:'',
      tempOptions:[]
    }
  },
  methods:{
    handlerChangeLabel(val){
      this.props.labelWidth = val?80:1;
    },
    handlerStaticData(){
      this.staticOptions = JSON.stringify(this.props.options,null,4);
      this.staticDataVisible = true;
      console.log(this.staticOptions);
    },
    handlerSave(){
      this.props.options = JSON.parse(this.staticOptions);
      this.staticDataVisible = false;
    },
    handlerChangeDataType(value){
      if(value === 'static'){
        this.props.options = [];
        this.props.options = this.tempOptions;
      }else{
        this.tempOptions = this.props.options;
        this.props.options = [];
      }
    },
    handlerSetAreaData(val){
      if(val){
        const areaoptions = areaData();
        this.tempOptions = this.props.options;
        this.props.options = areaoptions;
      }else{
        this.props.options = this.tempOptions;
      }
    }
  },
  mounted(){
  },
  watch:{
  }
}
</script>
<style scoped>
</style>