/**
 * 警告
 */
export let alert = {
  id: '',
  _id: '',
  compType: 'alert',
  ele: 'el-alert',
  compName: '提示',
  compIcon: 'alert',
  //展示表单的模式
  viewType: 'component',
  config: true,

  form: false, //是否表单组件
  // 控件左侧label内容
  showLabel: false,
  labelWidth: 0,
  span: 24,
  //标题
  title: 'alert',
  //主题
  type: 'success',
  //辅助文字
  description: 'formDesigner3,想做最好的表单设计器',
  //是否可关闭
  closable: true,
  //是否居中
  center: false,
  //关闭的按钮
  'close-text': '',
  //是否显示图标
  'show-icon': false,
  //主题  light/dark
  effect: 'light'
};
