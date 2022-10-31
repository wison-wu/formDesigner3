<template>
  <el-col>
    <el-row  :gutter="model.gutter">
        <slot></slot>
    </el-row>
  </el-col>
</template>
<script>



export default {
  name:"previewRowItem",
  components: {
  },
  props: ['model','value'],
  data(){
    return {
      
    }
  },
  computed:{
  }
}
</script>