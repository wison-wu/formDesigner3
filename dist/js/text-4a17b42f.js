import{_ as c,c as V,r as n,w as h,v as x,o as g,a as C,b as e,d as a,e as r}from"./index-b13409ad.js";const U={name:"textConfig",props:["props"],data(){return{}},mixins:[V],methods:{handlerChangeSize(u){this.props.size=u},handlerChangeBold(u){this.props.bold=u}}};function W(u,o,l,k,v,i){const m=n("el-input"),_=n("el-tooltip"),d=n("el-form-item"),f=n("el-color-picker"),p=n("el-radio-button"),b=n("el-radio-group"),s=n("el-input-number");return h((g(),C("div",null,[e(d,{label:"ID",labelWidth:"40px"},{default:a(()=>[e(_,{class:"item",effect:"dark",content:"\u8BF7\u6CE8\u610F,ID\u7684\u4FEE\u6539\u53EF\u80FD\u4F1A\u5BFC\u81F4\u8BE5\u7EC4\u4EF6\u76F8\u5173\u4E8B\u4EF6\u5931\u6548\uFF01",placement:"left"},{default:a(()=>[e(m,{class:"input",modelValue:l.props.id,"onUpdate:modelValue":o[0]||(o[0]=t=>l.props.id=t),onChange:u.handlerChangeId},null,8,["modelValue","onChange"])]),_:1})]),_:1}),e(d,{label:"\u6587\u672C",labelWidth:"40px"},{default:a(()=>[e(m,{type:"textarea",class:"input",modelValue:l.props.text,"onUpdate:modelValue":o[1]||(o[1]=t=>l.props.text=t),rows:"12"},null,8,["modelValue"])]),_:1}),e(d,{label:"\u989C\u8272",labelWidth:"40px"},{default:a(()=>[e(f,{modelValue:l.props.color,"onUpdate:modelValue":o[2]||(o[2]=t=>l.props.color=t)},null,8,["modelValue"])]),_:1}),e(d,{label:"\u5E03\u5C40",labelWidth:"40px"},{default:a(()=>[e(b,{modelValue:l.props.align,"onUpdate:modelValue":o[3]||(o[3]=t=>l.props.align=t)},{default:a(()=>[e(p,{label:"left"},{default:a(()=>[r("\u5DE6")]),_:1}),e(p,{label:"center"},{default:a(()=>[r("\u4E2D")]),_:1}),e(p,{label:"right"},{default:a(()=>[r("\u53F3")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"\u5927\u5C0F",labelWidth:"40px"},{default:a(()=>[e(s,{modelValue:l.props.size,"onUpdate:modelValue":o[4]||(o[4]=t=>l.props.size=t),min:10,max:100,onChange:i.handlerChangeSize},null,8,["modelValue","onChange"])]),_:1}),e(d,{label:"\u52A0\u7C97",labelWidth:"40px"},{default:a(()=>[e(s,{modelValue:l.props.bold,"onUpdate:modelValue":o[5]||(o[5]=t=>l.props.bold=t),min:0,max:900,step:100,onChange:i.handlerChangeBold},null,8,["modelValue","onChange"])]),_:1})],512)),[[x,l.props.compType==="text"]])}const z=c(U,[["render",W]]);export{z as default};
