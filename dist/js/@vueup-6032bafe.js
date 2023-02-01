import{Q as c}from"./quill-18d969b3.js";import"./quill-delta-8c678afe.js";import{d as B,e as R,f as z,r as j,w as f,h as F,n as k}from"./@vue-2c38b89f.js";/*!
 * VueQuill @vueup/vue-quill v1.0.1
 * https://vueup.github.io/vue-quill/
 * 
 * Includes quill v1.3.7
 * https://quilljs.com/
 * 
 * Copyright (c) 2022 Ahmad Luthfi Masruri
 * Released under the MIT license
 * Date: 2022-12-20T16:01:54.428Z
 */const M={essential:[[{header:[1,2,3,4,5,6,!1]}],["bold","italic","underline"],[{list:"ordered"},{list:"bullet"},{align:[]}],["blockquote","code-block","link"],[{color:[]},"clean"]],minimal:[[{header:1},{header:2}],["bold","italic","underline"],[{list:"ordered"},{list:"bullet"},{align:[]}]],full:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["link","video","image"],["clean"]]},G=B({name:"QuillEditor",inheritAttrs:!1,props:{content:{type:[String,Object],default:()=>{}},contentType:{type:String,default:"delta",validator:t=>["delta","html","text"].includes(t)},enable:{type:Boolean,default:!0},readOnly:{type:Boolean,default:!1},placeholder:{type:String,required:!1},theme:{type:String,default:"snow",validator:t=>["snow","bubble",""].includes(t)},toolbar:{type:[String,Array,Object],required:!1,validator:t=>typeof t=="string"&&t!==""?t.charAt(0)==="#"?!0:Object.keys(M).indexOf(t)!==-1:!0},modules:{type:Object,required:!1},options:{type:Object,required:!1},globalOptions:{type:Object,required:!1}},emits:["textChange","selectionChange","editorChange","update:content","focus","blur","ready"],setup:(t,i)=>{R(()=>{b()}),z(()=>{o=null});let o,m;const r=j(),b=()=>{var e;if(!!r.value){if(m=_(),t.modules)if(Array.isArray(t.modules))for(const l of t.modules)c.register(`modules/${l.name}`,l.module);else c.register(`modules/${t.modules.name}`,t.modules.module);o=new c(r.value,m),d(t.content),o.on("text-change",A),o.on("selection-change",L),o.on("editor-change",S),t.theme!=="bubble"&&r.value.classList.remove("ql-bubble"),t.theme!=="snow"&&r.value.classList.remove("ql-snow"),(e=o.getModule("toolbar"))===null||e===void 0||e.container.addEventListener("mousedown",l=>{l.preventDefault()}),i.emit("ready",o)}},_=()=>{const e={};if(t.theme!==""&&(e.theme=t.theme),t.readOnly&&(e.readOnly=t.readOnly),t.placeholder&&(e.placeholder=t.placeholder),t.toolbar&&t.toolbar!==""&&(e.modules={toolbar:(()=>{if(typeof t.toolbar=="object")return t.toolbar;if(typeof t.toolbar=="string")return t.toolbar.charAt(0)==="#"?t.toolbar:M[t.toolbar]})()}),t.modules){const l=(()=>{var n,u;const s={};if(Array.isArray(t.modules))for(const q of t.modules)s[q.name]=(n=q.options)!==null&&n!==void 0?n:{};else s[t.modules.name]=(u=t.modules.options)!==null&&u!==void 0?u:{};return s})();e.modules=Object.assign({},e.modules,l)}return Object.assign({},t.globalOptions,t.options,e)},w=e=>Object.values(e).some(l=>!l.retain);let a=t.content;const v=e=>{if(typeof a==typeof e){if(e===a)return!0;if(typeof e=="object"&&typeof a=="object")return!w(a.diff(e))}return!1},A=(e,l,n)=>{a=y(),v(t.content)||i.emit("update:content",a),i.emit("textChange",{delta:e,oldContents:l,source:n})},h=j(),L=(e,l,n)=>{h.value=!!(o!=null&&o.hasFocus()),i.emit("selectionChange",{range:e,oldRange:l,source:n})};f(h,e=>{e?i.emit("focus",r):i.emit("blur",r)});const S=(...e)=>{e[0]==="text-change"&&i.emit("editorChange",{name:e[0],delta:e[1],oldContents:e[2],source:e[3]}),e[0]==="selection-change"&&i.emit("editorChange",{name:e[0],range:e[1],oldRange:e[2],source:e[3]})},E=()=>r.value,Q=()=>{var e;return(e=o==null?void 0:o.getModule("toolbar"))===null||e===void 0?void 0:e.container},x=()=>{if(o)return o;throw`The quill editor hasn't been instantiated yet, 
                  make sure to call this method when the editor ready
                  or use v-on:ready="onReady(quill)" event instead.`},y=(e,l)=>t.contentType==="html"?T():t.contentType==="text"?g(e,l):o==null?void 0:o.getContents(e,l),d=(e,l="api")=>{t.contentType==="html"?C(e):t.contentType==="text"?O(e,l):o==null||o.setContents(e,l)},g=(e,l)=>{var n;return(n=o==null?void 0:o.getText(e,l))!==null&&n!==void 0?n:""},O=(e,l="api")=>{o==null||o.setText(e,l)},T=()=>{var e;return(e=o==null?void 0:o.root.innerHTML)!==null&&e!==void 0?e:""},C=e=>{o&&(o.root.innerHTML=e)},H=(e,l="api")=>{const n=o==null?void 0:o.clipboard.convert(e);n&&(o==null||o.setContents(n,l))},$=()=>{k(()=>{var e;!i.slots.toolbar&&o&&((e=o.getModule("toolbar"))===null||e===void 0||e.container.remove()),b()})};return f(()=>t.content,e=>{if(!o||!e||v(e))return;a=e;const l=o.getSelection();l&&k(()=>o==null?void 0:o.setSelection(l)),d(e)}),f(()=>t.enable,e=>{o&&o.enable(e)}),{editor:r,getEditor:E,getToolbar:Q,getQuill:x,getContents:y,setContents:d,getHTML:T,setHTML:C,pasteHTML:H,getText:g,setText:O,reinit:$}},render(){var t,i;return[(i=(t=this.$slots).toolbar)===null||i===void 0?void 0:i.call(t),F("div",{ref:"editor",...this.$attrs})]}});export{G as Q};
