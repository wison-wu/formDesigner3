<template>
  <!--中间面板-->
  <div class="center-board">
    <div class="action-bar">
      <el-button link @click="preview">
        <el-icon>
          <View />
        </el-icon>
        预览
      </el-button>
      <el-button link @click="viewJSON">
        <el-icon>
          <Tickets />
        </el-icon>
        JSON
      </el-button>
      <el-button link @click="setting">
        <el-icon>
          <Tools />
        </el-icon>
        设置
      </el-button>
      <el-button class="delete-btn" link @click="clear">
        <el-icon>
          <Delete />
        </el-icon>
        清空
      </el-button>
      <el-button link @click="help">
        <el-icon>
          <Help />
        </el-icon>
        帮助
      </el-button>
    </div>
    <el-scrollbar class="center-scrollbar">
      <el-row class="center-board-row" :gutter="formConf.gutter">
        <el-form
          :size="formConf.size"
          :label-position="formConf.labelPosition"
          :disabled="formConf.disabled"
          :label-width="formConf.labelWidth + 'px'"
        >
          <draggable
            class="drawing-board"
            :list="list"
            :animation="400"
            group="componentsGroup"
            draggable=".drawing-item"
            item-key="index"
          >
            <template #item="{ element }">
              <design-item
                :model="element"
                :activeItem="activeItem"
                @rowItemRollBack="handlerRollBack"
                @activeItemChange="handlerActiveItemChange"
                @copyItem="handlerItemCopy"
                @deleteItem="handlerItemDelete"
              />
            </template>
          </draggable>

          <div v-show="infoShow" class="empty-info">
            <el-empty description="从左侧拖拽添加控件"></el-empty>
          </div>
        </el-form>
      </el-row>
    </el-scrollbar>
    <config-panel :activeItem="activeItem" :itemList="list" />
    <!-- 设计器配置弹出框 -->
    <el-dialog v-model="formConfVisible" width="50%" top="30px" :center="true">
      <el-tabs v-model="activeName">
        <el-tab-pane label="表单配置" name="formConf">
          <el-form ref="formConf" :model="formConf" label-width="100px">
            <el-form-item label="表单名">
              <el-input class="input" v-model="formConf.formRef"></el-input>
            </el-form-item>
            <el-form-item label="表单模型">
              <el-input class="input" v-model="formConf.formModel"></el-input>
            </el-form-item>
            <el-form-item label="校验模型">
              <el-input class="input" v-model="formConf.formRules"></el-input>
            </el-form-item>
            <el-form-item label="表单尺寸">
              <el-radio-group v-model="formConf.size">
                <el-radio-button label="large">大</el-radio-button>
                <el-radio-button label="default">中</el-radio-button>
                <el-radio-button label="small">小</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="标签对齐">
              <el-radio-group v-model="formConf.labelPosition">
                <el-radio-button label="right">右对齐</el-radio-button>
                <el-radio-button label="left">左对齐</el-radio-button>
                <el-radio-button label="top">顶部对齐</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="标签宽度">
              <el-input-number v-model="formConf.labelWidth" :min="60" :max="140"></el-input-number>
            </el-form-item>
            <el-form-item label="栅格间隔">
              <el-input-number v-model="formConf.gutter" :min="0" :max="30"></el-input-number>
            </el-form-item>
            <el-form-item label="动态表格支持组件高亮显示">
              <el-switch v-model="formConfig.dynamicTableAllowed"></el-switch>
            </el-form-item>
            <el-form-item label="禁用表单">
              <el-switch v-model="formConf.disabled"></el-switch>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <!-- <el-tab-pane label="提交前" name="fourth">开发中...</el-tab-pane> -->
      </el-tabs>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handlerSaveFormConf">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog v-model="previewVisible" width="70%" title="预览">
      <preview :itemList="itemList" :formConf="formConf" v-if="previewVisible" />
    </el-dialog>
    <el-dialog v-model="JSONVisible" width="70%" title="JSON" center :close-on-click-modal="false">
      <codemirror v-model:value="viewCode" :options="options" :height="400" />
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handlerSetJson()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
import configPanel from './configPanel.vue'
import designItem from './designItem.jsx'
import { getSimpleId } from './utils/IdGenerate'
import globalConstants from './utils/globalConstants'
import { isLayout, isTable, inTable, jsonClone } from './utils/index'
import formConf from './custom/formConf'
import codeMirror from 'codemirror-editor-vue3'
// // 核心样式
// language
import 'codemirror/mode/javascript/javascript.js'
// theme
import 'codemirror/theme/dracula.css'
import preview from './preview.vue'

export default {
  name: 'designer',
  components: {
    configPanel,
    designItem,
    draggable,
    codeMirror,
    preview
  },
  props: {
    list: {
      type: Array,
      default: []
    },
    formConfig: {
      type: Object,
      default: formConf
    }
  },
  provide() {
    return {
      getContext: this
    }
  },
  data() {
    return {
      formConf: formConf,
      activeItem: {},
      lastActiveItem: {},
      formConfVisible: false,
      previewVisible: false,
      JSONVisible: false,
      itemList: [],
      activeName: 'formConf',
      editorCode: '',
      viewCode: '',
      // 默认配置
      options: {
        mode: 'text/javascript',
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
  mounted() {},
  methods: {
    //修改表单的基础配置
    changeFormConfig(formConfig) {
      this.formConf = formConfig
    },
    preview() {
      const clone = JSON.parse(JSON.stringify(this.list))
      this.itemList = clone
      this.previewVisible = true
    },
    viewJSON() {
      this.viewCode = this.code
      this.JSONVisible = true
    },
    setting() {
      this.formConfVisible = true
    },
    clear() {
      this.$confirm('此操作将清空整个表单,是否继续?').then(() => {
        this.$emit('clear')
      })
    },
    help() {
      window.open(globalConstants.githubLink)
    },
    handlerActiveItemChange(obj) {
      this.lastActiveItem = this.activeItem
      this.activeItem = obj
    },
    handlerItemCopy(origin, parent) {
      if (isLayout(origin)) {
        //row
        const clone = jsonClone(origin)
        const uId = 'row_' + getSimpleId()
        clone.id = uId
        clone._id = uId
        clone.columns.map((column) => {
          let itemList = []
          column.list.map((item) => {
            const cloneitem = jsonClone(item)
            const uId = 'fd_' + getSimpleId()
            cloneitem.id = uId
            cloneitem._id = uId
            itemList.push(cloneitem)
          })
          column.list = []
          column.list = itemList
        })
        this.list.push(clone)
        this.handlerActiveItemChange(clone)
      } else if (isTable(origin)) {
        //表格布局
        const clone = jsonClone(origin)
        const uId = 'table_' + getSimpleId()
        clone.id = uId
        clone._id = uId
        clone.layoutArray.map((tr) => {
          tr.map((td) => {
            let itemList = []
            td.id = getSimpleId()
            td.columns.map((item, i) => {
              const cloneitem = jsonClone(item)
              const uId = 'fd_' + getSimpleId()
              cloneitem.id = uId
              cloneitem._id = uId
              itemList.push(cloneitem)
            })
            td.columns = []
            td.columns = itemList
          })
        })
        this.list.push(clone)
        this.handlerActiveItemChange(clone)
      } else {
        //如果是普通组件，需要判断他是否再布局组件下。
        if (parent) {
          if (inTable(parent)) {
            //增加表格组件的支持
            if (parent.columns.some((item) => item.id === origin.id)) {
              const clone = jsonClone(origin)
              const uId = 'fd_' + getSimpleId()
              clone.id = uId
              clone._id = uId
              parent.columns.push(clone)
              this.handlerActiveItemChange(clone)
            }
          } else {
            parent.columns.map((column) => {
              if (column.list.some((item) => item.id === origin.id)) {
                const clone = jsonClone(origin)
                const uId = 'fd_' + getSimpleId()
                clone.id = uId
                clone._id = uId
                column.list.push(clone)
                this.handlerActiveItemChange(clone)
              }
            })
          }
        } else {
          const clone = jsonClone(origin)
          const uId = 'fd_' + getSimpleId()
          clone.id = uId
          clone._id = uId
          this.list.push(clone)
          this.handlerActiveItemChange(clone)
        }
      }
    },
    handlerItemDelete(origin, parent) {
      if (isLayout(origin) || isTable(origin)) {
        //如果是布局组件,则直接删除
        const index = this.list.findIndex((item) => item.id === origin.id)
        this.list.splice(index, 1)
      } else {
        //如果不是布局组件，则先判断是不是再布局内部，如果不是，则直接删除就可以，如果是，则要在布局内部删除
        if (parent) {
          if (inTable(parent)) {
            //增加表格组件的支持
            const colIndex = parent.columns.findIndex((item) => item.id === origin.id)
            if (colIndex > -1) {
              parent.columns.splice(colIndex, 1)
            }
          } else {
            parent.columns.map((column) => {
              const colIndex = column.list.findIndex((item) => item.id === origin.id)
              if (colIndex > -1) {
                column.list.splice(colIndex, 1)
              }
            })
          }
        } else {
          const index = this.list.findIndex((item) => item.id === origin.id)
          this.list.splice(index, 1)
        }
      }
    },
    handlerSaveFormConf() {
      this.formConfVisible = false
    },
    handlerRollBack(rowItem, oldIndex) {
      //还原
      this.list.splice(oldIndex, 0, rowItem)
    },
    handlerSetJson() {
      this.$emit('updateJSON', this.viewCode)
      this.JSONVisible = false
    }
  },
  computed: {
    infoShow() {
      return this.list.length < 1
    },
    code() {
      let json = {}
      json.config = this.formConf
      json.list = this.list
      return JSON.stringify(json, null, 4)
    }
  },
  watch: {
    activeItem(newValue, oldValue) {
      this.lastActiveItem = oldValue
    }
  }
}
</script>
<style scoped>
.action-bar .el-button {
  padding-top: 10px;
  padding-left: 10px;
}
.el-rate {
  display: inline-block;
}

.el-form {
  width: 100%;
}

.center-scrollbar :deep(.el-scrollbar__bar.is-horizontal) {
  display: none;
}

.center-scrollbar :deep(.el-scrollbar__wrap) {
  overflow-x: hidden;
}

.empty-info :deep(.el-empty__description p) {
  color: #ccb1ea;
  font-size: 16px;
}

.empty-info :deep(.el-empty__description p) {
  color: #ccb1ea;
  font-size: 16px;
}

.drawing-board :deep(.el-radio.is-bordered + .el-radio.is-bordered) {
  margin-left: 0px;
}

.drawing-board :deep(.el-checkbox.is-bordered + .el-checkbox.is-bordered) {
  margin-left: 0px;
}
.el-button + .el-button {
  margin-left: 0px;
}
</style>
