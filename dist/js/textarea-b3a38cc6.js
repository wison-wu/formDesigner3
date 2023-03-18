import{_ as V,c as b,r as m,w as f,v as _,o as g,a as h,b as l,d as t}from"./index-babf7def.js";const C={name:"inputConfig",props:["props","getFormId"],components:{},mixins:[b],data(){return{}},methods:{handlerChangeLabel(n){this.props.labelWidth=n?80:1},handlerChangeDisStatus(n){this.props.readOnly=!n},handlerChangeReadStatus(n){this.props.disabled=!n}},mounted(){}};function w(n,a,e,U,x,r){const s=m("el-input"),i=m("el-tooltip"),d=m("el-form-item"),p=m("el-input-number"),u=m("el-switch");return f((g(),h("div",null,[l(d,{label:"ID"},{default:t(()=>[l(i,{class:"item",effect:"dark",content:"\u8BF7\u6CE8\u610F,ID\u7684\u4FEE\u6539\u53EF\u80FD\u4F1A\u5BFC\u81F4\u8BE5\u7EC4\u4EF6\u76F8\u5173\u4E8B\u4EF6\u5931\u6548\uFF01",placement:"left"},{default:t(()=>[l(s,{class:"input",modelValue:e.props.id,"onUpdate:modelValue":a[0]||(a[0]=o=>e.props.id=o),onChange:n.handlerChangeId},null,8,["modelValue","onChange"])]),_:1})]),_:1}),l(d,{label:"\u6807\u9898"},{default:t(()=>[l(s,{class:"input",modelValue:e.props.label,"onUpdate:modelValue":a[1]||(a[1]=o=>e.props.label=o)},null,8,["modelValue"])]),_:1}),l(d,{label:"\u63D0\u793A\u7B26"},{default:t(()=>[l(s,{class:"input",modelValue:e.props.placeholder,"onUpdate:modelValue":a[2]||(a[2]=o=>e.props.placeholder=o),placeholder:"\u8BF7\u8F93\u5165\u63D0\u793A\u7B26"},null,8,["modelValue"])]),_:1}),l(d,{label:"\u6805\u683C\u95F4\u9694"},{default:t(()=>[l(p,{modelValue:e.props.gutter,"onUpdate:modelValue":a[3]||(a[3]=o=>e.props.gutter=o),min:0},null,8,["modelValue"])]),_:1}),l(d,{label:"\u6807\u7B7E\u5BBD\u5EA6"},{default:t(()=>[l(p,{modelValue:e.props.labelWidth,"onUpdate:modelValue":a[4]||(a[4]=o=>e.props.labelWidth=o),min:1,max:200},null,8,["modelValue"])]),_:1}),l(d,{label:"\u663E\u793A\u6807\u7B7E"},{default:t(()=>[l(u,{modelValue:e.props.showLabel,"onUpdate:modelValue":a[5]||(a[5]=o=>e.props.showLabel=o),onChange:r.handlerChangeLabel},null,8,["modelValue","onChange"])]),_:1}),l(d,{label:"\u5FC5\u586B"},{default:t(()=>[l(u,{modelValue:e.props.required,"onUpdate:modelValue":a[6]||(a[6]=o=>e.props.required=o)},null,8,["modelValue"])]),_:1}),l(d,{label:"\u8F93\u5165\u6846\u884C\u6570"},{default:t(()=>[l(p,{modelValue:e.props.rows,"onUpdate:modelValue":a[7]||(a[7]=o=>e.props.rows=o),min:0},null,8,["modelValue"])]),_:1}),l(d,{label:"\u957F\u5EA6\u9650\u5236"},{default:t(()=>[l(p,{modelValue:e.props.maxlength,"onUpdate:modelValue":a[8]||(a[8]=o=>e.props.maxlength=o),placeholder:"\u5B57\u7B26\u957F\u5EA6"},null,8,["modelValue"])]),_:1}),l(d,{label:"\u8F93\u5165\u7EDF\u8BA1"},{default:t(()=>[l(u,{modelValue:e.props["show-word-limit"],"onUpdate:modelValue":a[9]||(a[9]=o=>e.props["show-word-limit"]=o)},null,8,["modelValue"])]),_:1}),l(d,{label:"\u7981\u7528"},{default:t(()=>[l(u,{modelValue:e.props.disabled,"onUpdate:modelValue":a[10]||(a[10]=o=>e.props.disabled=o),onChange:r.handlerChangeDisStatus},null,8,["modelValue","onChange"])]),_:1}),l(d,{label:"\u53EA\u8BFB"},{default:t(()=>[l(u,{modelValue:e.props.readonly,"onUpdate:modelValue":a[11]||(a[11]=o=>e.props.readonly=o),onChange:r.handlerChangeReadStatus},null,8,["modelValue","onChange"])]),_:1}),l(d,{label:"\u9ED8\u8BA4\u503C"},{default:t(()=>[l(s,{class:"input",type:"textarea",autosize:"",modelValue:e.props.modelValue,"onUpdate:modelValue":a[12]||(a[12]=o=>e.props.modelValue=o)},null,8,["modelValue"])]),_:1})],512)),[[_,e.props.compType==="textarea"]])}const y=V(C,[["render",w],["__scopeId","data-v-a85bc26a"]]);export{y as default};
