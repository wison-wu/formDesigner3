/**
 * 单行&多行输入框
 */
export let colorPicker = {
  id: '',
  _id: '',
  compType: 'colorPicker',
  ele: 'el-color-picker',
  //控件名称(左侧显示)
  compName: '颜色选择器',
  //图标
  compIcon: 'colorpicker',
  //展示表单的模式
  viewType: 'component',

  //暂时默认为true，无法更改，后期考虑某些时候无法配置
  config: true,
  // 控件左侧label内容
  showLabel: true,
  label: '颜色',
  labelWidth: 80,
  //是否可以禁用
  disabled: false,
  //大小，large / default / small
  size: 'default',
  //primary / success / warning / danger / info / text
  type: 'primary',
  span: 24,
  //预定义颜色
  predefine: [],
  modelValue: '#409EFF'
};
