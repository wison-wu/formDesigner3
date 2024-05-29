<template>
  <div class="preview">
    <el-form
      :rules="rules"
      :ref="formConf.formModel"
      :size="formConf.size"
      :model="form"
      :label-position="formConf.labelPosition"
      :disabled="formConf.disabled"
      :validate-on-rule-change="false"
      label-width="formConf.labelWidth + 'px'"
    >
      <template v-for="(element, index) in list">
        <!-- <el-input v-model="element.id" placeholder=""></el-input> -->
        <preview-row-item v-if="element.compType === 'row'" :key="'row-' + index" :model="element">
          <el-col v-for="column in element.columns" :key="column.index" :span="column.span">
            <template v-for="col in column.list">
              <preview-item
                v-if="col.compType !== 'dynamicTable'"
                :key="col.id"
                :model="col"
                v-model="form[col.id]"
                @valChange="handlerValChange"
              />
              <fancy-dynamic-table
                v-else-if="col.compType === 'dynamicTable'"
                ref="dynamicTable"
                :key="'dynamic-' + index"
                :data="form[col.id]"
                :conf="col"
                @addRow="handlerAddRow"
                @deleteRow="handlerDeleteRow"
                @batchDeleteRow="handlerBatchDeleteRow"
              >
                <template v-slot:item="{ rowScope, item }">
                  <fancy-dynamic-table-item
                    :model="item"
                    :parent="col"
                    :key="'tableIndex-' + rowScope.$index"
                    :index="rowScope.$index"
                    v-model="rowScope.row[item.id]"
                    @valChange="handlerDynamicValChange"
                  />
                </template>
              </fancy-dynamic-table>
            </template>
          </el-col>
        </preview-row-item>
        <fancy-dynamic-table
          v-else-if="element.compType === 'dynamicTable'"
          :key="'dynamic-' + index"
          :data="form[element.id]"
          :ref="element.id"
          :conf="element"
          @addRow="handlerAddRow"
          @deleteRow="handlerDeleteRow"
          @batchDeleteRow="handlerBatchDeleteRow"
        >
          <template v-slot:item="{ rowScope, item }">
            <fancy-dynamic-table-item
              :model="item"
              :ref="item.id + rowScope.$index"
              :parent="element"
              :key="'tableIndex-' + rowScope.$index"
              :index="rowScope.$index"
              v-model="rowScope.row[item.id]"
              @valChange="handlerDynamicValChange"
            />
          </template>
        </fancy-dynamic-table>
        <fancy-edit-table
          v-else-if="element.compType === 'table'"
          :layoutArray="element.layoutArray"
          :tdStyle="element.tdStyle"
          :width="element.width"
          :height="element.height"
        >
          <template v-slot="{ td }">
            <template v-for="col in td.columns">
              <preview-item :model="col" v-model="form[col.id]" @valChange="handlerValChange" />
            </template>
          </template>
        </fancy-edit-table>
        <!--item-->
        <el-col class="drag-col-wrapper" :key="index" :span="element.span" v-else>
          <preview-item :model="element" v-model="form[element.id]" @valChange="handlerValChange" />
        </el-col>
      </template>
    </el-form>
    <el-divider></el-divider>
    <div style="text-align: center">
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handlerSubForm">提交</el-button>
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import previewItem from './previewItem';
import previewRowItem from './preview-row-item.vue';
import fancyDynamicTable from './dynamic/fancyDynamicTable.vue';
import fancyDynamicTableItem from './dynamic/fancyDynamicTableItem';
import fancyEditTable from './table/fancyEditTable.vue';
import { datas, addRow, batchDeleteRow, deleteRow } from './custom/formDraw';
import { Component, Prop, VueHook } from 'web-decorator-vue';

/**
 * 预览组件
 * @author chen yu
 * @version 1.0.0
 */
@Component({
  name: 'preview',
  components: {
    previewItem,
    previewRowItem,
    fancyDynamicTable,
    fancyDynamicTableItem,
    fancyEditTable
  }
})
export default class Preview {
  /**
   * 组件prop 传入的列表
   * @version 1.0.0
   */
  @Prop() itemList: any;
  /**
   * 表单配置
   * @version 1.0.0
   */
  @Prop() formConf: any;
  /**
   * 渲染列表
   * @version 1.0.0
   */
  list: any;
  /**
   * 表单
   * @version 1.0.0
   */
  form: any = {};
  /**
   * 规则
   * @version 1.0.0
   */
  rules: any = {};
  /**
   * 下标
   * @version 1.0.0
   */
  currentIndex: number = -1;

  /**
   * vue 生命周期钩子
   * @version 1.0.0
   */
  @VueHook()
  created() {
    // 调用初始化钩子
    this.handlerInitDatas();
    //初始化表单
    this.list = this.itemList;
  }

  // TODO 不太明白这是干啥的
  /**
   *
   * @param key
   * @param origin
   */
  handlerValChange(key: string, origin: any) {
    //@ts-ignore
    this.form[key] = origin;
  }

  // TODO 不太明白这是干啥的
  /**
   *
   * @param parentId
   * @param index
   * @param key
   * @param origin
   */
  handlerDynamicValChange(parentId: any, index: any, key: any, origin: any) {
    // @ts-ignore
    this.$set(this.form[parentId][index], key, origin);
    // 设置下标
    this.currentIndex = index;
  }

  /**
   * 表单提交
   * @version 1.0.0
   */
  handlerSubForm() {
    //@ts-ignore
    this.$refs[this.formConf.formModel].validate((valid) => {
      // @ts-ignore
      if (valid) return this.$message.success('success');
      // TODO 待优化为具体的异常
      throw new Error('表单规则未通过');
    });
  }

  /**
   * 添加行数的方法
   * @version 1.0.0
   */
  handlerAddRow: any = addRow;
  /**
   * 删除的row 触发的方法
   * @version 1.0.0
   */
  handlerDeleteRow: any = deleteRow;
  // TODO 不太明白这是干啥的
  handlerBatchDeleteRow: any = batchDeleteRow;
  // TODO 不太明白这是干啥的
  handlerInitDatas: any = datas;
}
</script>
<style scoped>
.preview-board {
  border: 1px dashed #ccc;
}

.preview :deep(.el-radio.is-bordered + .el-radio.is-bordered) {
  margin-left: 0;
}

.preview :deep(.el-checkbox.is-bordered + .el-checkbox.is-bordered) {
  margin-left: 0;
}
</style>
