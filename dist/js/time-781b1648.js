import{g as V}from"./dayjs-ffd9adaf.js";import{_ as f,c as _}from"./index-2692407d.js";import{ah as n,V as b,_ as g,o as U,c as C,Z as o,U as a}from"./@vue-2c38b89f.js";import"./china-area-data-0ad06977.js";import"./vue-router-5b379ac5.js";import"./vuedraggable-12249d4d.js";import"./vue-1456b303.js";import"./sortablejs-e21e85b7.js";import"./@element-plus-f67dcf5e.js";import"./element-plus-96f1886d.js";import"./lodash-es-4fab617d.js";import"./@vueuse-affaa559.js";import"./@popperjs-535f1f87.js";import"./@ctrl-87605a51.js";import"./async-validator-604317c1.js";import"./memoize-one-dd606afd.js";import"./escape-html-7294f491.js";import"./normalize-wheel-es-5e9aec41.js";import"./@floating-ui-df7928b7.js";import"./codemirror-editor-vue3-0e4b7194.js";import"./codemirror-6916b40f.js";import"./diff-match-patch-d7a24afa.js";import"./@vueup-6032bafe.js";import"./quill-18d969b3.js";import"./quill-delta-8c678afe.js";import"./lodash.clonedeep-70c946a8.js";import"./lodash.isequal-6b0f0247.js";import"./vue3-barcode-465a442e.js";import"./axios-f92d4123.js";import"./form-data-e4548ec6.js";const w={name:"timeConfig",mixins:[_],props:["props","getFormId"],data(){return{time:""}},methods:{handlerChangeTime(d){if(d!==null){const e=V(d).format("HH:mm:ss");this.props.modelValue=e}},handlerChangeRange(d){d?this.props.modelValue=[]:this.props.modelValue=""}}};function c(d,e,l,v,x,y){const u=n("el-input"),r=n("el-tooltip"),m=n("el-form-item"),i=n("el-input-number"),p=n("el-switch"),s=n("el-time-picker");return b((U(),C("div",null,[o(m,{label:"ID"},{default:a(()=>[o(r,{class:"item",effect:"dark",content:"\u8BF7\u6CE8\u610F,ID\u7684\u4FEE\u6539\u53EF\u80FD\u4F1A\u5BFC\u81F4\u8BE5\u7EC4\u4EF6\u76F8\u5173\u4E8B\u4EF6\u5931\u6548\uFF01",placement:"left"},{default:a(()=>[o(u,{class:"input",modelValue:l.props.id,"onUpdate:modelValue":e[0]||(e[0]=t=>l.props.id=t),onChange:d.handlerChangeId},null,8,["modelValue","onChange"])]),_:1})]),_:1}),o(m,{label:"\u6807\u9898"},{default:a(()=>[o(u,{class:"input",modelValue:l.props.label,"onUpdate:modelValue":e[1]||(e[1]=t=>l.props.label=t)},null,8,["modelValue"])]),_:1}),o(m,{label:"\u6805\u683C\u95F4\u9694"},{default:a(()=>[o(i,{modelValue:l.props.gutter,"onUpdate:modelValue":e[2]||(e[2]=t=>l.props.gutter=t),min:0},null,8,["modelValue"])]),_:1}),o(m,{label:"\u6807\u7B7E\u5BBD\u5EA6"},{default:a(()=>[o(i,{modelValue:l.props.labelWidth,"onUpdate:modelValue":e[3]||(e[3]=t=>l.props.labelWidth=t),min:1,max:200},null,8,["modelValue"])]),_:1}),o(m,{label:"\u663E\u793A\u6807\u7B7E"},{default:a(()=>[o(p,{modelValue:l.props.showLabel,"onUpdate:modelValue":e[4]||(e[4]=t=>l.props.showLabel=t)},null,8,["modelValue"])]),_:1}),o(m,{label:"\u663E\u793A\u6807\u7B7E"},{default:a(()=>[o(u,{class:"input",modelValue:l.props.placeholder,"onUpdate:modelValue":e[5]||(e[5]=t=>l.props.placeholder=t)},null,8,["modelValue"])]),_:1}),o(m,{label:"\u5FC5\u586B"},{default:a(()=>[o(p,{modelValue:l.props.required,"onUpdate:modelValue":e[6]||(e[6]=t=>l.props.required=t)},null,8,["modelValue"])]),_:1}),o(m,{label:"\u6E05\u7A7A"},{default:a(()=>[o(p,{modelValue:l.props.clearable,"onUpdate:modelValue":e[7]||(e[7]=t=>l.props.clearable=t)},null,8,["modelValue"])]),_:1}),o(m,{label:"\u53EA\u8BFB"},{default:a(()=>[o(p,{modelValue:l.props.readonly,"onUpdate:modelValue":e[8]||(e[8]=t=>l.props.readonly=t)},null,8,["modelValue"])]),_:1}),o(m,{label:"\u7981\u7528"},{default:a(()=>[o(p,{modelValue:l.props.disabled,"onUpdate:modelValue":e[9]||(e[9]=t=>l.props.disabled=t)},null,8,["modelValue"])]),_:1}),o(m,{label:"\u9ED8\u8BA4\u503C"},{default:a(()=>[o(s,{class:"input",modelValue:l.props.modelValue,"onUpdate:modelValue":e[10]||(e[10]=t=>l.props.modelValue=t),placeholder:"\u9009\u62E9\u9ED8\u8BA4\u65F6\u95F4"},null,8,["modelValue"])]),_:1})],512)),[[g,l.props.compType==="time"]])}const le=f(w,[["render",c],["__scopeId","data-v-f4949d6d"]]);export{le as default};
