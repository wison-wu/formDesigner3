import{_ as c,r as d,w as b,v as w,o as v,a as U,b as e,d as a,e as r}from"./index-977c6f53.js";const g={name:"buttonConfig",props:{props:{}},components:{},data(){return{}},methods:{handlerShowLabel(m){m?this.props.labelWidth=80:this.props.labelWidth=0}},mounted(){}};function x(m,o,l,k,y,C){const u=d("el-input"),f=d("el-tooltip"),n=d("el-form-item"),s=d("el-option"),_=d("el-select"),p=d("el-switch"),i=d("el-radio-button"),V=d("el-radio-group");return b((v(),U("div",null,[e(n,{label:"ID"},{default:a(()=>[e(f,{class:"item",effect:"dark",content:"\u8BF7\u6CE8\u610F,ID\u7684\u4FEE\u6539\u53EF\u80FD\u4F1A\u5BFC\u81F4\u8BE5\u7EC4\u4EF6\u76F8\u5173\u4E8B\u4EF6\u5931\u6548\uFF01",placement:"left"},{default:a(()=>[e(u,{class:"input",modelValue:l.props.id,"onUpdate:modelValue":o[0]||(o[0]=t=>l.props.id=t)},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{label:"\u6807\u9898"},{default:a(()=>[e(u,{class:"input",modelValue:l.props.title,"onUpdate:modelValue":o[1]||(o[1]=t=>l.props.title=t)},null,8,["modelValue"])]),_:1}),e(n,{label:"\u7C7B\u578B"},{default:a(()=>[e(_,{modelValue:l.props.type,"onUpdate:modelValue":o[2]||(o[2]=t=>l.props.type=t),placeholder:"\u8BF7\u9009\u62E9"},{default:a(()=>[e(s,{label:"success",value:"success"}),e(s,{label:"warning",value:"warning"}),e(s,{label:"error",value:"error"}),e(s,{label:"info",value:"info"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"\u8F85\u52A9\u6587\u5B57"},{default:a(()=>[e(u,{class:"input",modelValue:l.props.description,"onUpdate:modelValue":o[3]||(o[3]=t=>l.props.description=t)},null,8,["modelValue"])]),_:1}),e(n,{label:"\u5173\u95ED"},{default:a(()=>[e(p,{modelValue:l.props.closable,"onUpdate:modelValue":o[4]||(o[4]=t=>l.props.closable=t)},null,8,["modelValue"])]),_:1}),e(n,{label:"\u5C45\u4E2D"},{default:a(()=>[e(p,{modelValue:l.props.center,"onUpdate:modelValue":o[5]||(o[5]=t=>l.props.center=t)},null,8,["modelValue"])]),_:1}),e(n,{label:"\u5173\u95ED\u6587\u672C"},{default:a(()=>[e(u,{class:"input",modelValue:l.props["close-text"],"onUpdate:modelValue":o[6]||(o[6]=t=>l.props["close-text"]=t)},null,8,["modelValue"])]),_:1}),e(n,{label:"\u663E\u793A\u56FE\u6807"},{default:a(()=>[e(p,{modelValue:l.props["show-icon"],"onUpdate:modelValue":o[7]||(o[7]=t=>l.props["show-icon"]=t)},null,8,["modelValue"])]),_:1}),e(n,{label:"\u4E3B\u9898"},{default:a(()=>[e(V,{modelValue:l.props.effect,"onUpdate:modelValue":o[8]||(o[8]=t=>l.props.effect=t)},{default:a(()=>[e(i,{label:"light"},{default:a(()=>[r("light")]),_:1}),e(i,{label:"dark"},{default:a(()=>[r("dark")]),_:1})]),_:1},8,["modelValue"])]),_:1})],512)),[[w,l.props.compType==="alert"]])}const B=c(g,[["render",x]]);export{B as default};