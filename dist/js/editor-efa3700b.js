import{_ as b,c as _}from"./index-2692407d.js";import{ah as i,V as r,_ as d,o as h,c as w,Z as l,U as a}from"./@vue-2c38b89f.js";import"./vue-router-5b379ac5.js";import"./vuedraggable-12249d4d.js";import"./china-area-data-0ad06977.js";import"./vue-1456b303.js";import"./sortablejs-e21e85b7.js";import"./@element-plus-f67dcf5e.js";import"./element-plus-96f1886d.js";import"./lodash-es-4fab617d.js";import"./@vueuse-affaa559.js";import"./@popperjs-535f1f87.js";import"./@ctrl-87605a51.js";import"./dayjs-ffd9adaf.js";import"./async-validator-604317c1.js";import"./memoize-one-dd606afd.js";import"./escape-html-7294f491.js";import"./normalize-wheel-es-5e9aec41.js";import"./@floating-ui-df7928b7.js";import"./codemirror-editor-vue3-0e4b7194.js";import"./codemirror-6916b40f.js";import"./diff-match-patch-d7a24afa.js";import"./@vueup-6032bafe.js";import"./quill-18d969b3.js";import"./quill-delta-8c678afe.js";import"./lodash.clonedeep-70c946a8.js";import"./lodash.isequal-6b0f0247.js";import"./vue3-barcode-465a442e.js";import"./axios-f92d4123.js";import"./form-data-e4548ec6.js";const x={name:"editorConfig",props:{props:{}},mixins:[_],methods:{handlerShowLabel(n){n?this.props.labelWidth=80:this.props.labelWidth=0}}};function C(n,o,e,U,c,V){const u=i("el-input"),f=i("el-tooltip"),m=i("el-form-item"),p=i("el-switch"),s=i("el-input-number");return r((h(),w("div",null,[l(m,{label:"ID"},{default:a(()=>[l(f,{class:"item",effect:"dark",content:"\u8BF7\u6CE8\u610F,ID\u7684\u4FEE\u6539\u53EF\u80FD\u4F1A\u5BFC\u81F4\u8BE5\u7EC4\u4EF6\u76F8\u5173\u4E8B\u4EF6\u5931\u6548\uFF01",placement:"left"},{default:a(()=>[l(u,{class:"input",modelValue:e.props.id,"onUpdate:modelValue":o[0]||(o[0]=t=>e.props.id=t),onChange:n.handlerChangeId},null,8,["modelValue","onChange"])]),_:1})]),_:1}),l(m,{label:"\u663E\u793A\u6807\u7B7E"},{default:a(()=>[l(p,{modelValue:e.props.showLabel,"onUpdate:modelValue":o[1]||(o[1]=t=>e.props.showLabel=t),onChange:V.handlerShowLabel},null,8,["modelValue","onChange"])]),_:1}),r(l(m,{label:"\u6807\u7B7E\u6587\u5B57"},{default:a(()=>[l(u,{class:"input",modelValue:e.props.label,"onUpdate:modelValue":o[2]||(o[2]=t=>e.props.label=t)},null,8,["modelValue"])]),_:1},512),[[d,e.props.showLabel]]),r(l(m,{label:"\u6807\u7B7E\u957F\u5EA6"},{default:a(()=>[l(s,{modelValue:e.props.labelWidth,"onUpdate:modelValue":o[3]||(o[3]=t=>e.props.labelWidth=t),min:1,max:200},null,8,["modelValue"])]),_:1},512),[[d,e.props.showLabel]]),l(m,{label:"\u5FC5\u586B"},{default:a(()=>[l(p,{modelValue:e.props.required,"onUpdate:modelValue":o[4]||(o[4]=t=>e.props.required=t)},null,8,["modelValue"])]),_:1}),l(m,{label:"\u9A8C\u8BC1\u6700\u5927\u5B57\u6570"},{default:a(()=>[l(p,{modelValue:e.props.validateMaxText,"onUpdate:modelValue":o[5]||(o[5]=t=>e.props.validateMaxText=t)},null,8,["modelValue"])]),_:1}),l(m,{label:"\u6700\u5927\u5B57\u6570"},{default:a(()=>[l(s,{modelValue:e.props.max,"onUpdate:modelValue":o[6]||(o[6]=t=>e.props.max=t),min:100},null,8,["modelValue"])]),_:1})],512)),[[d,e.props.compType==="editor"]])}const $=b(x,[["render",C]]);export{$ as default};
