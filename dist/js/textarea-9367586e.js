import{_ as V,c as b}from"./index-2692407d.js";import{ah as u,V as f,_,o as g,c as h,Z as l,U as t}from"./@vue-2c38b89f.js";import"./vue-router-5b379ac5.js";import"./vuedraggable-12249d4d.js";import"./china-area-data-0ad06977.js";import"./vue-1456b303.js";import"./sortablejs-e21e85b7.js";import"./@element-plus-f67dcf5e.js";import"./element-plus-96f1886d.js";import"./lodash-es-4fab617d.js";import"./@vueuse-affaa559.js";import"./@popperjs-535f1f87.js";import"./@ctrl-87605a51.js";import"./dayjs-ffd9adaf.js";import"./async-validator-604317c1.js";import"./memoize-one-dd606afd.js";import"./escape-html-7294f491.js";import"./normalize-wheel-es-5e9aec41.js";import"./@floating-ui-df7928b7.js";import"./codemirror-editor-vue3-0e4b7194.js";import"./codemirror-6916b40f.js";import"./diff-match-patch-d7a24afa.js";import"./@vueup-6032bafe.js";import"./quill-18d969b3.js";import"./quill-delta-8c678afe.js";import"./lodash.clonedeep-70c946a8.js";import"./lodash.isequal-6b0f0247.js";import"./vue3-barcode-465a442e.js";import"./axios-f92d4123.js";import"./form-data-e4548ec6.js";const C={name:"inputConfig",props:["props","getFormId"],components:{},mixins:[b],data(){return{}},methods:{handlerChangeLabel(n){this.props.labelWidth=n?80:1},handlerChangeDisStatus(n){this.props.readOnly=!n},handlerChangeReadStatus(n){this.props.disabled=!n}},mounted(){}};function U(n,o,e,w,x,i){const p=u("el-input"),s=u("el-tooltip"),d=u("el-form-item"),r=u("el-input-number"),m=u("el-switch");return f((g(),h("div",null,[l(d,{label:"ID"},{default:t(()=>[l(s,{class:"item",effect:"dark",content:"\u8BF7\u6CE8\u610F,ID\u7684\u4FEE\u6539\u53EF\u80FD\u4F1A\u5BFC\u81F4\u8BE5\u7EC4\u4EF6\u76F8\u5173\u4E8B\u4EF6\u5931\u6548\uFF01",placement:"left"},{default:t(()=>[l(p,{class:"input",modelValue:e.props.id,"onUpdate:modelValue":o[0]||(o[0]=a=>e.props.id=a),onChange:n.handlerChangeId},null,8,["modelValue","onChange"])]),_:1})]),_:1}),l(d,{label:"\u6807\u9898"},{default:t(()=>[l(p,{class:"input",modelValue:e.props.label,"onUpdate:modelValue":o[1]||(o[1]=a=>e.props.label=a)},null,8,["modelValue"])]),_:1}),l(d,{label:"\u63D0\u793A\u7B26"},{default:t(()=>[l(p,{class:"input",modelValue:e.props.placeholder,"onUpdate:modelValue":o[2]||(o[2]=a=>e.props.placeholder=a),placeholder:"\u8BF7\u8F93\u5165\u63D0\u793A\u7B26"},null,8,["modelValue"])]),_:1}),l(d,{label:"\u6805\u683C\u95F4\u9694"},{default:t(()=>[l(r,{modelValue:e.props.gutter,"onUpdate:modelValue":o[3]||(o[3]=a=>e.props.gutter=a),min:0},null,8,["modelValue"])]),_:1}),l(d,{label:"\u6807\u7B7E\u5BBD\u5EA6"},{default:t(()=>[l(r,{modelValue:e.props.labelWidth,"onUpdate:modelValue":o[4]||(o[4]=a=>e.props.labelWidth=a),min:1,max:200},null,8,["modelValue"])]),_:1}),l(d,{label:"\u663E\u793A\u6807\u7B7E"},{default:t(()=>[l(m,{modelValue:e.props.showLabel,"onUpdate:modelValue":o[5]||(o[5]=a=>e.props.showLabel=a),onChange:i.handlerChangeLabel},null,8,["modelValue","onChange"])]),_:1}),l(d,{label:"\u5FC5\u586B"},{default:t(()=>[l(m,{modelValue:e.props.required,"onUpdate:modelValue":o[6]||(o[6]=a=>e.props.required=a)},null,8,["modelValue"])]),_:1}),l(d,{label:"\u8F93\u5165\u6846\u884C\u6570"},{default:t(()=>[l(r,{modelValue:e.props.rows,"onUpdate:modelValue":o[7]||(o[7]=a=>e.props.rows=a),min:0},null,8,["modelValue"])]),_:1}),l(d,{label:"\u957F\u5EA6\u9650\u5236"},{default:t(()=>[l(r,{modelValue:e.props.maxlength,"onUpdate:modelValue":o[8]||(o[8]=a=>e.props.maxlength=a),placeholder:"\u5B57\u7B26\u957F\u5EA6"},null,8,["modelValue"])]),_:1}),l(d,{label:"\u8F93\u5165\u7EDF\u8BA1"},{default:t(()=>[l(m,{modelValue:e.props["show-word-limit"],"onUpdate:modelValue":o[9]||(o[9]=a=>e.props["show-word-limit"]=a)},null,8,["modelValue"])]),_:1}),l(d,{label:"\u7981\u7528"},{default:t(()=>[l(m,{modelValue:e.props.disabled,"onUpdate:modelValue":o[10]||(o[10]=a=>e.props.disabled=a),onChange:i.handlerChangeDisStatus},null,8,["modelValue","onChange"])]),_:1}),l(d,{label:"\u53EA\u8BFB"},{default:t(()=>[l(m,{modelValue:e.props.readonly,"onUpdate:modelValue":o[11]||(o[11]=a=>e.props.readonly=a),onChange:i.handlerChangeReadStatus},null,8,["modelValue","onChange"])]),_:1}),l(d,{label:"\u9ED8\u8BA4\u503C"},{default:t(()=>[l(p,{class:"input",type:"textarea",autosize:"",modelValue:e.props.modelValue,"onUpdate:modelValue":o[12]||(o[12]=a=>e.props.modelValue=a)},null,8,["modelValue"])]),_:1})],512)),[[_,e.props.compType==="textarea"]])}const $=V(C,[["render",U],["__scopeId","data-v-a85bc26a"]]);export{$ as default};
