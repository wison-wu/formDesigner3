import{_ as u,r as t,w as f,v as h,o as x,a as b,b as e,d as o,h as V,e as v}from"./index-babf7def.js";const k={name:"htmlConfig",props:{props:{}},data(){return{editTextVisible:!1}},methods:{handlerEditMore(){this.editTextVisible=!0},handlerSave(){this.editTextVisible=!1}}},C={slot:"footer",class:"dialog-footer"};function w(T,n,l,y,c,s){const r=t("el-input"),p=t("el-tooltip"),i=t("el-form-item"),d=t("el-button"),m=t("fancy-editor"),_=t("el-dialog");return f((x(),b("div",null,[e(i,{label:"ID",labelWidth:"40px"},{default:o(()=>[e(p,{class:"item",effect:"dark",content:"\u8BF7\u6CE8\u610F,ID\u7684\u4FEE\u6539\u53EF\u80FD\u4F1A\u5BFC\u81F4\u8BE5\u7EC4\u4EF6\u76F8\u5173\u4E8B\u4EF6\u5931\u6548\uFF01",placement:"left"},{default:o(()=>[e(r,{class:"input",modelValue:l.props.id,"onUpdate:modelValue":n[0]||(n[0]=a=>l.props.id=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(i,{label:"\u6587\u672C",labelWidth:"40px"},{default:o(()=>[e(d,{icon:"el-icon-edit-outline",circle:"",onClick:s.handlerEditMore},null,8,["onClick"])]),_:1}),e(_,{visible:c.editTextVisible,width:"70%","close-on-press-escape":!1,"close-on-click-modal":!1,"show-close":!1,center:!0,top:"20px"},{default:o(()=>[e(m,{modelValue:l.props.text,"onUpdate:modelValue":n[1]||(n[1]=a=>l.props.text=a)},null,8,["modelValue"]),V("span",C,[e(d,{type:"primary",onClick:s.handlerSave},{default:o(()=>[v("\u786E \u5B9A")]),_:1},8,["onClick"])])]),_:1},8,["visible"])],512)),[[h,l.props.compType==="html"]])}const B=u(k,[["render",w]]);export{B as default};
