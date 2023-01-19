/**
 * 级联选择器
 */
export let cascader = {
    id:'',
    _id:'',
    compType: 'cascader',
    ele: 'el-cascader',
    //控件名称(左侧显示)
    compName:'级联选择器',
    //图标
    compIcon:'cascader',
    //展示表单的模式
    viewType:'component',
    // 是否可配置
    //暂时默认为true，无法更改，后期考虑某些时候无法配置
    config: true,
    // 控件左侧label内容
    showLabel:true,
    label: '级联选择',
    labelWidth: 80,
    placeholder: '请选择',
    //栅格间隔
    gutter:15,
    //默认栅格
    span:24,
    modelValue: [],
    //大小
    size:"default",
    //禁用
    disabled:false,
    //数据类型 static，dynamic
    dataType:'static',
    //请求地址
    action:'https://www.fastmock.site/mock/51715c0157535b99010bde55f2df33c8/formDesigner/api/cascaderOptions',
    //分隔符
    separator:"/",
    //显示完整路径
    'show-all-levels':false,
    //清空
    clearable:true,
    props:{
      filterable:false,
      expandTrigger:'hover',
      //多选
      multiple:false,
      label: 'label',
      value: 'value',
      children: 'children',
      //可选任一级
      checkStrictly:false
    },
    options:[
      {
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致'
          }]
        }]
      }
    ]
  }
  