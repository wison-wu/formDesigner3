/**
 * 动态表单（设计器）
 */

import {h} from "vue";
import draggable from "vuedraggable";
import render from '../custom/render'

const colItem = function(element){
  const { selectItem,copyItem,deleteItem} = this.$attrs;
  return <div>11</div>
}


export default {
  name:'dynamicTableItem',
  props:['item','activeItem'],
  data(){
    return {
      isActive:false,
      isHover:false,
    }
  },
  components:{
    draggable,
    render
  },
  methods:{
    handlerCopy(evt){
      this.$emit('copy',evt,this.item);
    },
    handlerDelete(evt){
      this.$emit('delete',evt,this.item);
    }
  },
  watch: {
    activeItem(newvalue){
      this.isActive = newvalue.id === this.item.id?true:false;
    }
  },
  computed:{
    showbutton(){
      return this.isActive||this.isHover;
    }
  },
  render(){
      return h('div');
  }
}

