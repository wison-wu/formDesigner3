import{_ as w,c as g}from"./index-2692407d.js";import{ah as u,V as s,_ as V,o as x,c as C,Z as l,U as a,X as f}from"./@vue-2c38b89f.js";import"./vue-router-5b379ac5.js";import"./vuedraggable-12249d4d.js";import"./china-area-data-0ad06977.js";import"./vue-1456b303.js";import"./sortablejs-e21e85b7.js";import"./@element-plus-f67dcf5e.js";import"./element-plus-96f1886d.js";import"./lodash-es-4fab617d.js";import"./@vueuse-affaa559.js";import"./@popperjs-535f1f87.js";import"./@ctrl-87605a51.js";import"./dayjs-ffd9adaf.js";import"./async-validator-604317c1.js";import"./memoize-one-dd606afd.js";import"./escape-html-7294f491.js";import"./normalize-wheel-es-5e9aec41.js";import"./@floating-ui-df7928b7.js";import"./codemirror-editor-vue3-0e4b7194.js";import"./codemirror-6916b40f.js";import"./diff-match-patch-d7a24afa.js";import"./@vueup-6032bafe.js";import"./quill-18d969b3.js";import"./quill-delta-8c678afe.js";import"./lodash.clonedeep-70c946a8.js";import"./lodash.isequal-6b0f0247.js";import"./vue3-barcode-465a442e.js";import"./axios-f92d4123.js";import"./form-data-e4548ec6.js";const v={name:"uploadConfig",props:["props"],components:{},mixins:[g],data(){return{}},methods:{handlerChangeLabel(i){this.props.labelWidth=i?80:1}},mounted(){},watch:{}};function T(i,o,e,y,I,b){const m=u("el-input"),_=u("el-tooltip"),d=u("el-form-item"),n=u("el-input-number"),p=u("el-switch"),r=u("el-radio-button"),U=u("el-radio-group");return s((x(),C("div",null,[l(d,{label:"ID"},{default:a(()=>[l(_,{class:"item",effect:"dark",content:"\u8BF7\u6CE8\u610F,ID\u7684\u4FEE\u6539\u53EF\u80FD\u4F1A\u5BFC\u81F4\u8BE5\u7EC4\u4EF6\u76F8\u5173\u4E8B\u4EF6\u5931\u6548\uFF01",placement:"left"},{default:a(()=>[l(m,{class:"input",modelValue:e.props.id,"onUpdate:modelValue":o[0]||(o[0]=t=>e.props.id=t),onChange:i.handlerChangeId},null,8,["modelValue","onChange"])]),_:1})]),_:1}),l(d,{label:"\u6807\u9898"},{default:a(()=>[l(m,{class:"input",modelValue:e.props.label,"onUpdate:modelValue":o[1]||(o[1]=t=>e.props.label=t)},null,8,["modelValue"])]),_:1}),l(d,{label:"\u6805\u683C"},{default:a(()=>[l(n,{modelValue:e.props.span,"onUpdate:modelValue":o[2]||(o[2]=t=>e.props.span=t),min:1,max:24},null,8,["modelValue"])]),_:1}),l(d,{label:"\u5BBD\u5EA6%"},{default:a(()=>[l(n,{modelValue:e.props.width,"onUpdate:modelValue":o[3]||(o[3]=t=>e.props.width=t),min:1,max:100},null,8,["modelValue"])]),_:1}),l(d,{label:"\u6805\u683C\u95F4\u9694"},{default:a(()=>[l(n,{modelValue:e.props.gutter,"onUpdate:modelValue":o[4]||(o[4]=t=>e.props.gutter=t),min:0},null,8,["modelValue"])]),_:1}),l(d,{label:"\u6807\u7B7E\u5BBD\u5EA6"},{default:a(()=>[l(n,{modelValue:e.props.labelWidth,"onUpdate:modelValue":o[5]||(o[5]=t=>e.props.labelWidth=t),min:1,max:200},null,8,["modelValue"])]),_:1}),l(d,{label:"\u663E\u793A\u6807\u7B7E"},{default:a(()=>[l(p,{modelValue:e.props.showLabel,"onUpdate:modelValue":o[6]||(o[6]=t=>e.props.showLabel=t),onChange:b.handlerChangeLabel},null,8,["modelValue","onChange"])]),_:1}),l(d,{label:"\u8BF7\u6C42\u5730\u5740"},{default:a(()=>[l(m,{modelValue:e.props.action,"onUpdate:modelValue":o[7]||(o[7]=t=>e.props.action=t)},null,8,["modelValue"])]),_:1}),l(d,{label:"\u5927\u5C0F(MB)"},{default:a(()=>[l(n,{modelValue:e.props.fileSize,"onUpdate:modelValue":o[8]||(o[8]=t=>e.props.fileSize=t),min:1,max:1e4,step:10},null,8,["modelValue"])]),_:1}),l(d,{label:"\u5141\u8BB8\u6587\u4EF6\u7C7B\u578B"},{default:a(()=>[l(m,{modelValue:e.props.accept,"onUpdate:modelValue":o[9]||(o[9]=t=>e.props.accept=t)},null,8,["modelValue"])]),_:1}),l(d,{label:"\u5FC5\u586B"},{default:a(()=>[l(p,{modelValue:e.props.required,"onUpdate:modelValue":o[10]||(o[10]=t=>e.props.required=t)},null,8,["modelValue"])]),_:1}),l(d,{label:"\u591A\u6587\u4EF6\u4E0A\u4F20"},{default:a(()=>[l(p,{modelValue:e.props.multiple,"onUpdate:modelValue":o[11]||(o[11]=t=>e.props.multiple=t)},null,8,["modelValue"])]),_:1}),l(d,{label:"\u663E\u793A\u6587\u4EF6\u5217\u8868"},{default:a(()=>[l(p,{modelValue:e.props["show-file-list"],"onUpdate:modelValue":o[12]||(o[12]=t=>e.props["show-file-list"]=t)},null,8,["modelValue"])]),_:1}),l(d,{label:"\u663E\u793A\u7C7B\u578B"},{default:a(()=>[l(U,{modelValue:e.props["list-type"],"onUpdate:modelValue":o[13]||(o[13]=t=>e.props["list-type"]=t)},{default:a(()=>[l(r,{label:"text"},{default:a(()=>[f("\u666E\u901A")]),_:1}),l(r,{label:"picture-card"},{default:a(()=>[f("\u7167\u7247")]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(d,{label:"\u6309\u94AE\u6587\u5B57"},{default:a(()=>[l(m,{modelValue:e.props.buttonText,"onUpdate:modelValue":o[14]||(o[14]=t=>e.props.buttonText=t)},null,8,["modelValue"])]),_:1}),l(d,{label:"\u663E\u793A\u63D0\u793A"},{default:a(()=>[l(p,{modelValue:e.props.showTip,"onUpdate:modelValue":o[15]||(o[15]=t=>e.props.showTip=t)},null,8,["modelValue"])]),_:1}),s(l(d,{label:"\u63D0\u793A\u5185\u5BB9"},{default:a(()=>[l(m,{modelValue:e.props.tips,"onUpdate:modelValue":o[16]||(o[16]=t=>e.props.tips=t)},null,8,["modelValue"])]),_:1},512),[[V,e.props.showTip]])],512)),[[V,e.props.compType==="upload"]])}const ol=w(v,[["render",T],["__scopeId","data-v-9e006ccf"]]);export{ol as default};
