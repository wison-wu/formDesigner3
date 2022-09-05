<template>
  <div class="container">
    <div class="left-board">
      <div class="d-logo-wrapper">
        <div class="d-logo">
          formDesigner3
        </div>
      </div>
      <el-scrollbar class="left-scrollbar">
        <!--左侧组件列表-->
        <div class="components-list">
          <div class="components-title">
            常用组件
          </div>
        </div>
      </el-scrollbar>
    </div>
    <designer ref="designer" />
  </div>
</template>
<script>
import designer from "./designer.vue";
export default {
  name:"formDesigner",
  components:{
    designer
  },
}
</script>