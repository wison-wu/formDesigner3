import{_ as i,c as V,r as u,w as _,v as f,o as b,a as w,b as l,d as t}from"./index-977c6f53.js";const U={name:"rate",props:["props","getFormId"],components:{},mixins:[V],data(){return{}},methods:{},mounted(){}};function g(p,o,e,v,x,I){const m=u("el-input"),r=u("el-tooltip"),d=u("el-form-item"),s=u("el-input-number"),n=u("el-switch");return _((b(),w("div",null,[l(d,{label:"ID"},{default:t(()=>[l(r,{class:"item",effect:"dark",content:"\u8BF7\u6CE8\u610F,ID\u7684\u4FEE\u6539\u53EF\u80FD\u4F1A\u5BFC\u81F4\u8BE5\u7EC4\u4EF6\u76F8\u5173\u4E8B\u4EF6\u5931\u6548\uFF01",placement:"left"},{default:t(()=>[l(m,{class:"input",modelValue:e.props.id,"onUpdate:modelValue":o[0]||(o[0]=a=>e.props.id=a),onChange:p.handlerChangeId},null,8,["modelValue","onChange"])]),_:1})]),_:1}),l(d,{label:"\u6807\u9898"},{default:t(()=>[l(m,{class:"input",modelValue:e.props.label,"onUpdate:modelValue":o[1]||(o[1]=a=>e.props.label=a)},null,8,["modelValue"])]),_:1}),l(d,{label:"\u6805\u683C\u95F4\u9694"},{default:t(()=>[l(s,{modelValue:e.props.gutter,"onUpdate:modelValue":o[2]||(o[2]=a=>e.props.gutter=a),min:0},null,8,["modelValue"])]),_:1}),l(d,{label:"\u6807\u7B7E\u5BBD\u5EA6"},{default:t(()=>[l(s,{modelValue:e.props.labelWidth,"onUpdate:modelValue":o[3]||(o[3]=a=>e.props.labelWidth=a),min:1,max:200},null,8,["modelValue"])]),_:1}),l(d,{label:"\u663E\u793A\u6807\u7B7E"},{default:t(()=>[l(n,{modelValue:e.props.showLabel,"onUpdate:modelValue":o[4]||(o[4]=a=>e.props.showLabel=a)},null,8,["modelValue"])]),_:1}),l(d,{label:"\u5FC5\u586B"},{default:t(()=>[l(n,{modelValue:e.props.required,"onUpdate:modelValue":o[5]||(o[5]=a=>e.props.required=a)},null,8,["modelValue"])]),_:1}),l(d,{label:"\u5141\u8BB8\u534A\u9009"},{default:t(()=>[l(n,{modelValue:e.props["allow-half"],"onUpdate:modelValue":o[6]||(o[6]=a=>e.props["allow-half"]=a)},null,8,["modelValue"])]),_:1}),l(d,{label:"\u663E\u793A\u5206\u6570"},{default:t(()=>[l(n,{modelValue:e.props["show-score"],"onUpdate:modelValue":o[7]||(o[7]=a=>e.props["show-score"]=a)},null,8,["modelValue"])]),_:1}),l(d,{label:"\u6700\u5927\u503C"},{default:t(()=>[l(s,{modelValue:e.props.max,"onUpdate:modelValue":o[8]||(o[8]=a=>e.props.max=a)},null,8,["modelValue"])]),_:1}),l(d,{label:"\u7981\u7528"},{default:t(()=>[l(n,{modelValue:e.props.disabled,"onUpdate:modelValue":o[9]||(o[9]=a=>e.props.disabled=a)},null,8,["modelValue"])]),_:1}),l(d,{label:"\u9ED8\u8BA4\u503C"},{default:t(()=>[l(m,{class:"input",modelValue:e.props.modelValue,"onUpdate:modelValue":o[10]||(o[10]=a=>e.props.modelValue=a)},null,8,["modelValue"])]),_:1})],512)),[[f,e.props.compType==="rate"]])}const k=i(U,[["render",g],["__scopeId","data-v-000a9e5b"]]);export{k as default};