/**
 * 动态表单（设计器）
 */
import render from '../custom/render.vue';
import './dynamicTable.css';

const colItem = function (element) {
  const { onSelectItem, onCopyItem, onDeleteItem } = this.$attrs;
  return (
    <div
      class={{ 'dynamic-table__item': true, active: this.isHover || this.isActive }}
      style="min-width:200px;width: auto;position:relative"
      onClick={(e) => {
        onSelectItem(e, element);
      }}
      onMouseover={(e) => {
        this.isHover = true;
      }}
      onMouseleave={(e) => {
        this.isHover = false;
      }}
    >
      <div class="dynamic-table__item_title">{element.label}</div>
      <div class="dynamic-table__item_body">
        <render conf={element} />
        <span v-show={element.required} style="color:#F56C6C">
          *
        </span>
      </div>
      <span
        class="dynamic-table-item-copy"
        title="复制"
        v-show={this.showbutton}
        onClick={(e) => {
          onCopyItem(e, element);
        }}
      >
        <el-icon>
          <CopyDocument />
        </el-icon>
      </span>
      <span
        class="dynamic-table-item-delete"
        title="删除"
        v-show={this.showbutton}
        onClick={(e) => {
          onDeleteItem(e, element);
        }}
      >
        <el-icon>
          <Delete />
        </el-icon>
      </span>
    </div>
  );
};

export default {
  name: 'dynamicTableItem',
  props: ['item', 'activeItem'],
  data() {
    return {
      isActive: false,
      isHover: false
    };
  },
  components: {
    render
  },
  methods: {
    handlerCopy(evt) {
      this.$emit('copy', evt, this.item);
    },
    handlerDelete(evt) {
      this.$emit('delete', evt, this.item);
    }
  },
  watch: {
    activeItem(newvalue) {
      this.isActive = newvalue.id === this.item.id ? true : false;
    }
  },
  computed: {
    showbutton() {
      return this.isActive || this.isHover;
    }
  },
  render() {
    return colItem.call(this, this.item);
  }
};
