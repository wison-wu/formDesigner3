import{_ as f,c as _,r as d,w as s,v as i,o as h,a as w,b as l,d as t}from"./index-977c6f53.js";const x={name:"editorConfig",props:{props:{}},mixins:[_],methods:{handlerShowLabel(u){u?this.props.labelWidth=80:this.props.labelWidth=0}}};function C(u,o,e,g,v,b){const p=d("el-input"),V=d("el-tooltip"),n=d("el-form-item"),m=d("el-switch"),r=d("el-input-number");return s((h(),w("div",null,[l(n,{label:"ID"},{default:t(()=>[l(V,{class:"item",effect:"dark",content:"\u8BF7\u6CE8\u610F,ID\u7684\u4FEE\u6539\u53EF\u80FD\u4F1A\u5BFC\u81F4\u8BE5\u7EC4\u4EF6\u76F8\u5173\u4E8B\u4EF6\u5931\u6548\uFF01",placement:"left"},{default:t(()=>[l(p,{class:"input",modelValue:e.props.id,"onUpdate:modelValue":o[0]||(o[0]=a=>e.props.id=a),onChange:u.handlerChangeId},null,8,["modelValue","onChange"])]),_:1})]),_:1}),l(n,{label:"\u663E\u793A\u6807\u7B7E"},{default:t(()=>[l(m,{modelValue:e.props.showLabel,"onUpdate:modelValue":o[1]||(o[1]=a=>e.props.showLabel=a),onChange:b.handlerShowLabel},null,8,["modelValue","onChange"])]),_:1}),s(l(n,{label:"\u6807\u7B7E\u6587\u5B57"},{default:t(()=>[l(p,{class:"input",modelValue:e.props.label,"onUpdate:modelValue":o[2]||(o[2]=a=>e.props.label=a)},null,8,["modelValue"])]),_:1},512),[[i,e.props.showLabel]]),s(l(n,{label:"\u6807\u7B7E\u957F\u5EA6"},{default:t(()=>[l(r,{modelValue:e.props.labelWidth,"onUpdate:modelValue":o[3]||(o[3]=a=>e.props.labelWidth=a),min:1,max:200},null,8,["modelValue"])]),_:1},512),[[i,e.props.showLabel]]),l(n,{label:"\u5FC5\u586B"},{default:t(()=>[l(m,{modelValue:e.props.required,"onUpdate:modelValue":o[4]||(o[4]=a=>e.props.required=a)},null,8,["modelValue"])]),_:1}),l(n,{label:"\u9A8C\u8BC1\u6700\u5927\u5B57\u6570"},{default:t(()=>[l(m,{modelValue:e.props.validateMaxText,"onUpdate:modelValue":o[5]||(o[5]=a=>e.props.validateMaxText=a)},null,8,["modelValue"])]),_:1}),l(n,{label:"\u6700\u5927\u5B57\u6570"},{default:t(()=>[l(r,{modelValue:e.props.max,"onUpdate:modelValue":o[6]||(o[6]=a=>e.props.max=a),min:100},null,8,["modelValue"])]),_:1})],512)),[[i,e.props.compType==="editor"]])}const c=f(x,[["render",C]]);export{c as default};