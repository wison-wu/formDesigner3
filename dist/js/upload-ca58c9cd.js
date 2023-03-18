import{_ as w,c as g,r as u,w as V,v as r,o as x,a as C,b as l,d as t,e as f}from"./index-babf7def.js";const v={name:"uploadConfig",props:["props"],components:{},mixins:[g],data(){return{}},methods:{handlerChangeLabel(i){this.props.labelWidth=i?80:1}},mounted(){},watch:{}};function T(i,o,e,y,I,b){const n=u("el-input"),_=u("el-tooltip"),d=u("el-form-item"),m=u("el-input-number"),p=u("el-switch"),s=u("el-radio-button"),U=u("el-radio-group");return V((x(),C("div",null,[l(d,{label:"ID"},{default:t(()=>[l(_,{class:"item",effect:"dark",content:"\u8BF7\u6CE8\u610F,ID\u7684\u4FEE\u6539\u53EF\u80FD\u4F1A\u5BFC\u81F4\u8BE5\u7EC4\u4EF6\u76F8\u5173\u4E8B\u4EF6\u5931\u6548\uFF01",placement:"left"},{default:t(()=>[l(n,{class:"input",modelValue:e.props.id,"onUpdate:modelValue":o[0]||(o[0]=a=>e.props.id=a),onChange:i.handlerChangeId},null,8,["modelValue","onChange"])]),_:1})]),_:1}),l(d,{label:"\u6807\u9898"},{default:t(()=>[l(n,{class:"input",modelValue:e.props.label,"onUpdate:modelValue":o[1]||(o[1]=a=>e.props.label=a)},null,8,["modelValue"])]),_:1}),l(d,{label:"\u6805\u683C"},{default:t(()=>[l(m,{modelValue:e.props.span,"onUpdate:modelValue":o[2]||(o[2]=a=>e.props.span=a),min:1,max:24},null,8,["modelValue"])]),_:1}),l(d,{label:"\u5BBD\u5EA6%"},{default:t(()=>[l(m,{modelValue:e.props.width,"onUpdate:modelValue":o[3]||(o[3]=a=>e.props.width=a),min:1,max:100},null,8,["modelValue"])]),_:1}),l(d,{label:"\u6805\u683C\u95F4\u9694"},{default:t(()=>[l(m,{modelValue:e.props.gutter,"onUpdate:modelValue":o[4]||(o[4]=a=>e.props.gutter=a),min:0},null,8,["modelValue"])]),_:1}),l(d,{label:"\u6807\u7B7E\u5BBD\u5EA6"},{default:t(()=>[l(m,{modelValue:e.props.labelWidth,"onUpdate:modelValue":o[5]||(o[5]=a=>e.props.labelWidth=a),min:1,max:200},null,8,["modelValue"])]),_:1}),l(d,{label:"\u663E\u793A\u6807\u7B7E"},{default:t(()=>[l(p,{modelValue:e.props.showLabel,"onUpdate:modelValue":o[6]||(o[6]=a=>e.props.showLabel=a),onChange:b.handlerChangeLabel},null,8,["modelValue","onChange"])]),_:1}),l(d,{label:"\u8BF7\u6C42\u5730\u5740"},{default:t(()=>[l(n,{modelValue:e.props.action,"onUpdate:modelValue":o[7]||(o[7]=a=>e.props.action=a)},null,8,["modelValue"])]),_:1}),l(d,{label:"\u5927\u5C0F(MB)"},{default:t(()=>[l(m,{modelValue:e.props.fileSize,"onUpdate:modelValue":o[8]||(o[8]=a=>e.props.fileSize=a),min:1,max:1e4,step:10},null,8,["modelValue"])]),_:1}),l(d,{label:"\u5141\u8BB8\u6587\u4EF6\u7C7B\u578B"},{default:t(()=>[l(n,{modelValue:e.props.accept,"onUpdate:modelValue":o[9]||(o[9]=a=>e.props.accept=a)},null,8,["modelValue"])]),_:1}),l(d,{label:"\u5FC5\u586B"},{default:t(()=>[l(p,{modelValue:e.props.required,"onUpdate:modelValue":o[10]||(o[10]=a=>e.props.required=a)},null,8,["modelValue"])]),_:1}),l(d,{label:"\u591A\u6587\u4EF6\u4E0A\u4F20"},{default:t(()=>[l(p,{modelValue:e.props.multiple,"onUpdate:modelValue":o[11]||(o[11]=a=>e.props.multiple=a)},null,8,["modelValue"])]),_:1}),l(d,{label:"\u663E\u793A\u6587\u4EF6\u5217\u8868"},{default:t(()=>[l(p,{modelValue:e.props["show-file-list"],"onUpdate:modelValue":o[12]||(o[12]=a=>e.props["show-file-list"]=a)},null,8,["modelValue"])]),_:1}),l(d,{label:"\u663E\u793A\u7C7B\u578B"},{default:t(()=>[l(U,{modelValue:e.props["list-type"],"onUpdate:modelValue":o[13]||(o[13]=a=>e.props["list-type"]=a)},{default:t(()=>[l(s,{label:"text"},{default:t(()=>[f("\u666E\u901A")]),_:1}),l(s,{label:"picture-card"},{default:t(()=>[f("\u7167\u7247")]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(d,{label:"\u6309\u94AE\u6587\u5B57"},{default:t(()=>[l(n,{modelValue:e.props.buttonText,"onUpdate:modelValue":o[14]||(o[14]=a=>e.props.buttonText=a)},null,8,["modelValue"])]),_:1}),l(d,{label:"\u663E\u793A\u63D0\u793A"},{default:t(()=>[l(p,{modelValue:e.props.showTip,"onUpdate:modelValue":o[15]||(o[15]=a=>e.props.showTip=a)},null,8,["modelValue"])]),_:1}),V(l(d,{label:"\u63D0\u793A\u5185\u5BB9"},{default:t(()=>[l(n,{modelValue:e.props.tips,"onUpdate:modelValue":o[16]||(o[16]=a=>e.props.tips=a)},null,8,["modelValue"])]),_:1},512),[[r,e.props.showTip]])],512)),[[r,e.props.compType==="upload"]])}const k=w(v,[["render",T],["__scopeId","data-v-9e006ccf"]]);export{k as default};
