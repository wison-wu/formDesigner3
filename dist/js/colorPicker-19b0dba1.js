import{_ as I,c as U,r as s,w as p,v as m,o as _,a as c,b as e,d as n,e as b,F as x,k as L,h as r,n as S,p as y,l as P}from"./index-babf7def.js";const F={name:"buttonConfig",props:{props:{}},mixins:[U],data(){return{color:"#409EFF"}},methods:{handlerShowLabel(t){t?this.props.labelWidth=80:this.props.labelWidth=0},handlerAddPreColor(t){console.log(t),this.props.predefine.push(t),console.log(this.props.predefine)},handlerRemoveColor(t){this.props.predefine.splice(t,1)}},mounted(){}},W=t=>(y("data-v-eaa41a07"),t=t(),P(),t),z={class:"el-color-picker__color"},B={class:"close-btn select-line-icon"},D=["onClick"],N=W(()=>r("br",null,null,-1));function A(t,a,l,E,f,u){const h=s("el-input"),C=s("el-tooltip"),d=s("el-form-item"),V=s("el-switch"),k=s("el-input-number"),g=s("el-color-picker"),i=s("el-radio-button"),v=s("el-radio-group");return p((_(),c("div",null,[e(d,{label:"ID"},{default:n(()=>[e(C,{class:"item",effect:"dark",content:"\u8BF7\u6CE8\u610F,ID\u7684\u4FEE\u6539\u53EF\u80FD\u4F1A\u5BFC\u81F4\u8BE5\u7EC4\u4EF6\u76F8\u5173\u4E8B\u4EF6\u5931\u6548\uFF01",placement:"left"},{default:n(()=>[e(h,{class:"input",modelValue:l.props.id,"onUpdate:modelValue":a[0]||(a[0]=o=>l.props.id=o),onChange:t.handlerChangeId},null,8,["modelValue","onChange"])]),_:1})]),_:1}),e(d,{label:"\u663E\u793A\u6807\u7B7E"},{default:n(()=>[e(V,{modelValue:l.props.showLabel,"onUpdate:modelValue":a[1]||(a[1]=o=>l.props.showLabel=o),onChange:u.handlerShowLabel},null,8,["modelValue","onChange"])]),_:1}),p(e(d,{label:"\u6807\u7B7E\u6587\u5B57"},{default:n(()=>[e(h,{class:"input",modelValue:l.props.label,"onUpdate:modelValue":a[2]||(a[2]=o=>l.props.label=o)},null,8,["modelValue"])]),_:1},512),[[m,l.props.showLabel]]),p(e(d,{label:"\u6807\u7B7E\u957F\u5EA6"},{default:n(()=>[e(k,{modelValue:l.props.labelWidth,"onUpdate:modelValue":a[3]||(a[3]=o=>l.props.labelWidth=o),min:1,max:200},null,8,["modelValue"])]),_:1},512),[[m,l.props.showLabel]]),e(d,{label:"\u9ED8\u8BA4\u989C\u8272"},{default:n(()=>[e(g,{modelValue:l.props.modelValue,"onUpdate:modelValue":a[4]||(a[4]=o=>l.props.modelValue=o)},null,8,["modelValue"])]),_:1}),e(d,{label:"\u7981\u7528"},{default:n(()=>[e(V,{modelValue:l.props.disabled,"onUpdate:modelValue":a[5]||(a[5]=o=>l.props.disabled=o)},null,8,["modelValue"])]),_:1}),e(d,{label:"\u5927\u5C0F"},{default:n(()=>[e(v,{modelValue:l.props.size,"onUpdate:modelValue":a[6]||(a[6]=o=>l.props.size=o)},{default:n(()=>[e(i,{label:"large"},{default:n(()=>[b("\u5927")]),_:1}),e(i,{label:"default"},{default:n(()=>[b("\u4E2D")]),_:1}),e(i,{label:"small"},{default:n(()=>[b("\u5C0F")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"\u9884\u5B9A\u4E49\u989C\u8272"},{default:n(()=>[(_(!0),c(x,null,L(l.props.predefine,(o,w)=>(_(),c("div",{class:"select-item",key:o},[r("span",z,[r("span",{class:"el-color-picker__color-inner",style:S({"background-color":o})},null,4)]),r("div",B,[r("i",{class:"el-icon-remove-outline",onClick:R=>u.handlerRemoveColor(w)},null,8,D)])]))),128)),N,e(g,{modelValue:f.color,"onUpdate:modelValue":a[7]||(a[7]=o=>f.color=o),onChange:u.handlerAddPreColor},null,8,["modelValue","onChange"])]),_:1})],512)),[[m,l.props.compType==="colorPicker"]])}const j=I(F,[["render",A],["__scopeId","data-v-eaa41a07"]]);export{j as default};
