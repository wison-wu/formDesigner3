<template>
  <div class="container">
    <div class="left-board">
      <div class="d-logo-wrapper">
        <div class="d-logo">formDesigner3</div>
      </div>
      <el-scrollbar class="left-scrollbar">
        <!--左侧组件列表-->
        <div class="components-list">
          <div class="components-title">常用组件</div>
          <draggable
            class="components-draggable"
            :list="formItems"
            :group="{ name: 'componentsGroup', pull: 'clone', put: false }"
            :clone="cloneComponent"
            draggable=".components-item"
            :sort="false"
            item-key="index"
            @start="onStart"
            @end="onEnd"
          >
            <template #item="{ element }">
              <div class="components-item" @click="addComponent(element)">
                <div class="components-body">
                  <icon :code="element.compIcon" :text="element.compName" />
                </div>
              </div>
            </template>
          </draggable>
          <div class="components-title">布局组件</div>
          <draggable
            class="components-draggable"
            :list="layoutFormItems"
            :group="{ name: 'componentsGroup', pull: 'clone', put: false }"
            :clone="cloneComponent"
            draggable=".components-item"
            :sort="false"
            item-key="index"
            @start="onStart"
            @end="onEnd"
          >
            <template #item="{ element }">
              <div class="components-item" @click="addComponent(element)">
                <div class="components-body">
                  <icon :code="element.compIcon" :text="element.compName" />
                </div>
              </div>
            </template>
          </draggable>
          <div class="components-title">辅助组件</div>
          <draggable
            class="components-draggable"
            :list="assistFormItems"
            :group="{ name: 'componentsGroup', pull: 'clone', put: false }"
            :clone="cloneComponent"
            draggable=".components-item"
            :sort="false"
            item-key="index"
            @start="onStart"
            @end="onEnd"
          >
            <template #item="{ element }">
              <div class="components-item" @click="addComponent(element)">
                <div class="components-body">
                  <icon :code="element.compIcon" :text="element.compName" />
                </div>
              </div>
            </template>
          </draggable>
        </div>
      </el-scrollbar>
    </div>
    <designer
      ref="designer"
      :list="designList"
      :formConfig="formConfig"
      @clear="designList = []"
      @updateJSON="handlerUpdateJSON"
      :activeData="activeData"
    />
  </div>
</template>
<script>
import draggable from 'vuedraggable';
import designer from './designer.vue';
import icon from './icon.vue';
import { getSimpleId, setTableId } from './utils/IdGenerate';
import { jsonClone } from './utils';
import { formItems, assistFormItems, layoutFormItems } from './custom/itemList';
import formConf from './custom/formConf';
let tempActiveData;
export default {
  name: 'formDesigner',
  components: {
    designer,
    icon,
    draggable
  },
  data() {
    return {
      formItems: formItems,
      assistFormItems: assistFormItems,
      layoutFormItems: layoutFormItems,
      designList: [],
      activeData: {},
      formConfig: formConf
    };
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  mounted() {},
  methods: {
    addComponent(element) {},
    cloneComponent(origin) {
      let clone = {};
      clone = jsonClone(origin);
      if (!clone.layout) clone.layout = 'colItem';
      if (clone.layout === 'colItem' || clone.layout === 'dynamicItem') {
        let uId = 'fd_' + getSimpleId();
        clone.id = uId;
        clone._id = uId;
        tempActiveData = clone;
      } else if (clone.layout === 'rowItem') {
        let uId = 'row_' + getSimpleId();
        clone.id = uId;
        clone._id = uId;
        tempActiveData = clone;
      } else if (clone.layout === 'tableItem') {
        let uId = 'table_' + getSimpleId();
        clone.id = uId;
        clone._id = uId;
        //增加td默认的id
        setTableId(clone);
        tempActiveData = clone;
      }
      this.$refs.designer.activeItem = tempActiveData;
    },
    onStart(evt) {},
    onEnd(obj) {
      if (obj.from !== obj.to) {
        this.activeData = tempActiveData;
        this.$refs.designer.activeItem = this.activeData;
        if (obj.to.className.indexOf('row-drag') < 0) {
          this.designList.splice(obj.newIndex, 0, this.activeData);
        }
      } else {
        this.$refs.designer.activeItem = {};
      }
    },
    getFormData() {
      return this.formData;
    },
    handlerUpdateJSON(json) {
      const jsonObject = JSON.parse(json);
      this.formConfig = jsonObject.config;
      this.designList = [];
      this.designList = this.designList.concat(jsonObject.list);
      this.$refs['designer'].changeFormConfig(this.formConfig);
    }
  },
  computed: {
    formData: function () {
      const list = this.designList;
      const config = this.formConfig;
      let formData = {};
      formData.list = list;
      formData.config = config;
      return JSON.stringify(formData);
      //this.$emit('input',JSON.stringify(formData));
    },
    dynamicTableExist() {
      return function (element) {
        return (
          this.formConfig.dynamicTableAllowed &&
          this.designList.filter((item) => item.compType === 'dynamicTable').length > 0 &&
          dynamicTableAllowedItems.includes(element.compType)
        );
      };
    }
  },
  watch: {
    value(newVal) {
      if (newVal !== '') {
        const formData = JSON.parse(newVal);
        this.designList = formData.list;
        this.formConfig = formData.config;
      }
    }
  }
};
</script>
<style scoped>
.container {
  padding: 0px;
}
.dynamicTable-tips {
  border: 1px solid#F08080;
}
</style>
