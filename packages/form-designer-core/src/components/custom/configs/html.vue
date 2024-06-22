<!--废弃-->
<template>
  <div v-show="props.compType === 'html'">
    <!-- <el-form-item label="字段名">
      <el-input class="input" v-model="props"></el-input>
    </el-form-item> -->
    <el-form-item label="ID" labelWidth="40px">
      <el-tooltip
          class="item"
          effect="dark"
          content="请注意,ID的修改可能会导致该组件相关事件失效！"
          placement="left"
      >
        <el-input class="input" v-model="props.id"></el-input>
      </el-tooltip>
    </el-form-item>
    <el-form-item label="文本" labelWidth="40px">
      <!-- <el-input type="textarea" class="input" v-model="props.text" rows="12"></el-input> -->
      <el-button icon="el-icon-edit-outline" circle @click="editTextVisible = true"></el-button>
    </el-form-item>
    <el-dialog
        :visible.sync="editTextVisible"
        width="70%"
        :close-on-press-escape="false"
        :close-on-click-modal="false"
        :show-close="false"
        :center="true"
        top="20px"
    >
      <fancy-editor v-model="props.text"/>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="editTextVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script lang="ts">
/**
 * text的配置项
 * @author Chen Yu
 * @version 1.0.0
 */
import {Component, Prop} from 'web-decorator-vue';

@Component({
  name: 'fd-html',
})
export default class FDHtml {
  //TODO 补齐相关类型
  /**
   *
   */
  @Prop() props: any;
  //TODO 补齐作用
  /**
   *
   */
  editTextVisible: boolean = false;
}
</script>
