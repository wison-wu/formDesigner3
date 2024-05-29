/**
 * 单行&多行输入框
 */
export let date = {
  id: '',
  _id: '',
  compType: 'date',
  ele: 'el-date-picker',
  //控件名称(左侧显示)
  compName: '日期',
  //图标
  compIcon: 'date',
  //展示表单的模式
  viewType: 'text',
  // 是否可配置
  //暂时默认为true，无法更改，后期考虑某些时候无法配置
  config: true,
  // 控件左侧label内容
  showLabel: true,
  label: '日期',
  labelWidth: 80,
  placeholder: '请选择',
  // 是否必填
  required: false,
  //栅格间隔
  gutter: 15,
  //默认栅格
  span: 24,
  //是否可清空
  clearable: true,
  disabled: false,
  readonly: false,
  modelValue: '',
  //时间类型
  type: 'date',
  format: 'YYYY-MM-DD',
  'range-separator': '-',
  'start-placeholder': '请选择开始日期',
  'end-placeholder': '请选择结束日期'
};
