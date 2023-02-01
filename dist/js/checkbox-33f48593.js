import{_ as k,r as p,w as m,v as V,o as T,a as w,b as l,d,e as t,h as b,i as S,c as $,j as y}from"./index-b13409ad.js";let O={name:"checkboxConfig",props:["props","getFormId"],components:{draggable:S},mixins:[$],data(){return{defaultValue:""}},methods:{handlerChangeLabel(e){this.props.labelWidth=e?80:1},handlerChangeDisStatus(e){this.props.readOnly=!e},handlerChangeReadStatus(e){this.props.disabled=!e},setDefaultValue(e){return Array.isArray(e)?e.join(","):["string","number"].indexOf(e)>-1?e:typeof e=="boolean"?`${e}`:e},onDefaultValueInput(e){Array.isArray(this.props.modelValue)&&(this.props.modelValue=e.split(",").map(o=>y(o)?+o:o))},setOptionValue(e,o){e.value=y(o)?+o:o},addSelectItem(){this.props.options.push({label:"",value:""})},handlerChangeDataType(e){e==="static"?(this.props.options=[],this.props.options=this.tempOptions):(this.tempOptions=this.props.options,this.props.options=[])}},mounted(){},watch:{"props.modelValue"(e){this.defaultValue=e.join(",")}}};const z=O,A={class:"select-item option-drag"},L={style:{"margin-left":"20px"}};function N(e,o,j,B,R,W){const u=p("el-input"),C=p("el-tooltip"),n=p("el-form-item"),i=p("el-input-number"),r=p("el-switch"),s=p("el-radio-button"),f=p("el-radio-group"),U=p("el-divider"),v=p("DCaret"),h=p("el-icon"),_=p("Remove"),D=p("draggable"),I=p("el-button");return m((T(),w("div",null,[l(n,{label:"ID"},{default:d(()=>[l(C,{class:"item",effect:"dark",content:"\u8BF7\u6CE8\u610F,ID\u7684\u4FEE\u6539\u53EF\u80FD\u4F1A\u5BFC\u81F4\u8BE5\u7EC4\u4EF6\u76F8\u5173\u4E8B\u4EF6\u5931\u6548\uFF01",placement:"left"},{default:d(()=>[l(u,{class:"input",modelValue:e.props.id,"onUpdate:modelValue":o[0]||(o[0]=a=>e.props.id=a),onChange:e.handlerChangeId},null,8,["modelValue","onChange"])]),_:1})]),_:1}),l(n,{label:"\u6807\u9898"},{default:d(()=>[l(u,{class:"input",modelValue:e.props.label,"onUpdate:modelValue":o[1]||(o[1]=a=>e.props.label=a)},null,8,["modelValue"])]),_:1}),l(n,{label:"\u63D0\u793A\u7B26"},{default:d(()=>[l(u,{class:"input",modelValue:e.props.placeholder,"onUpdate:modelValue":o[2]||(o[2]=a=>e.props.placeholder=a),placeholder:"\u8BF7\u8F93\u5165\u63D0\u793A\u7B26"},null,8,["modelValue"])]),_:1}),l(n,{label:"\u6805\u683C\u95F4\u9694"},{default:d(()=>[l(i,{modelValue:e.props.gutter,"onUpdate:modelValue":o[3]||(o[3]=a=>e.props.gutter=a),min:0},null,8,["modelValue"])]),_:1}),l(n,{label:"\u6807\u7B7E\u5BBD\u5EA6"},{default:d(()=>[l(i,{modelValue:e.props.labelWidth,"onUpdate:modelValue":o[4]||(o[4]=a=>e.props.labelWidth=a),min:1,max:200},null,8,["modelValue"])]),_:1}),l(n,{label:"\u663E\u793A\u6807\u7B7E"},{default:d(()=>[l(r,{modelValue:e.props.showLabel,"onUpdate:modelValue":o[5]||(o[5]=a=>e.props.showLabel=a),onChange:e.handlerChangeLabel},null,8,["modelValue","onChange"])]),_:1}),l(n,{label:"\u5FC5\u586B"},{default:d(()=>[l(r,{modelValue:e.props.required,"onUpdate:modelValue":o[6]||(o[6]=a=>e.props.required=a)},null,8,["modelValue"])]),_:1}),l(n,{label:"\u5782\u76F4"},{default:d(()=>[l(r,{modelValue:e.props.vertical,"onUpdate:modelValue":o[7]||(o[7]=a=>e.props.vertical=a)},null,8,["modelValue"])]),_:1}),l(n,{label:"\u6700\u5C0F\u6570\u91CF"},{default:d(()=>[l(i,{modelValue:e.props.min,"onUpdate:modelValue":o[8]||(o[8]=a=>e.props.min=a),min:1},null,8,["modelValue"])]),_:1}),l(n,{label:"\u6700\u5927\u6570\u91CF"},{default:d(()=>[l(i,{modelValue:e.props.max,"onUpdate:modelValue":o[9]||(o[9]=a=>e.props.max=a),min:1},null,8,["modelValue"])]),_:1}),l(n,{label:"\u9009\u9879\u6837\u5F0F"},{default:d(()=>[l(f,{modelValue:e.props.optionType,"onUpdate:modelValue":o[10]||(o[10]=a=>e.props.optionType=a)},{default:d(()=>[l(s,{label:"default"},{default:d(()=>[t("\u9ED8\u8BA4")]),_:1}),l(s,{label:"button"},{default:d(()=>[t("\u6309\u94AE")]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(n,{label:"\u663E\u793A\u8FB9\u6846"},{default:d(()=>[l(r,{modelValue:e.props.border,"onUpdate:modelValue":o[11]||(o[11]=a=>e.props.border=a)},null,8,["modelValue"])]),_:1}),m(l(n,{label:"\u9009\u9879\u5C3A\u5BF8"},{default:d(()=>[l(f,{modelValue:e.props.size,"onUpdate:modelValue":o[12]||(o[12]=a=>e.props.size=a)},{default:d(()=>[l(s,{label:"large"},{default:d(()=>[t("\u5927")]),_:1}),l(s,{label:"default"},{default:d(()=>[t("\u4E2D")]),_:1}),l(s,{label:"small"},{default:d(()=>[t("\u5C0F")]),_:1})]),_:1},8,["modelValue"])]),_:1},512),[[V,e.props.border||e.props.optionType==="button"]]),l(n,{label:"\u7981\u7528"},{default:d(()=>[l(r,{modelValue:e.props.disabled,"onUpdate:modelValue":o[13]||(o[13]=a=>e.props.disabled=a),onChange:o[14]||(o[14]=a=>e.handlerChangeDisStatus("disabled"))},null,8,["modelValue"])]),_:1}),l(n,{label:"\u9ED8\u8BA4\u503C"},{default:d(()=>[l(u,{class:"input",modelValue:e.defaultValue,"onUpdate:modelValue":o[15]||(o[15]=a=>e.defaultValue=a),placeholder:"\u8BF7\u8F93\u5165\u9ED8\u8BA4\u503C",onInput:e.onDefaultValueInput},null,8,["modelValue","onInput"])]),_:1}),l(n,{label:"\u6570\u636E\u7C7B\u578B"},{default:d(()=>[l(f,{modelValue:e.props.dataType,"onUpdate:modelValue":o[16]||(o[16]=a=>e.props.dataType=a),onChange:e.handlerChangeDataType},{default:d(()=>[l(s,{label:"static"},{default:d(()=>[t("\u9759\u6001\u6570\u636E")]),_:1}),l(s,{label:"dynamic"},{default:d(()=>[t("\u52A8\u6001\u6570\u636E")]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1}),m(b("div",null,[l(U,null,{default:d(()=>[t("\u9009\u9879")]),_:1}),l(D,{list:e.props.options,handle:".option-drag","item-key":"id"},{item:d(({element:a})=>[b("div",A,[l(h,null,{default:d(()=>[l(v)]),_:1}),l(u,{modelValue:a.label,"onUpdate:modelValue":g=>a.label=g,placeholder:"\u9009\u9879\u540D",size:"small"},null,8,["modelValue","onUpdate:modelValue"]),l(u,{modelValue:a.value,"onUpdate:modelValue":g=>a.value=g,placeholder:"\u9009\u9879\u503C",size:"small"},null,8,["modelValue","onUpdate:modelValue"]),l(h,{class:"remove-icon"},{default:d(()=>[l(_)]),_:1})])]),_:1},8,["list"]),b("div",L,[l(I,{style:{"padding-bottom":"0"},icon:"el-icon-circle-plus-outline",type:"primary",link:"",onClick:e.addSelectItem},{default:d(()=>[t(" \u6DFB\u52A0\u9009\u9879 ")]),_:1},8,["onClick"])])],512),[[V,e.props.dataType==="static"]]),m(b("div",null,[l(n,{label:"\u5730\u5740"},{default:d(()=>[l(u,{modelValue:e.props.action,"onUpdate:modelValue":o[17]||(o[17]=a=>e.props.action=a)},null,8,["modelValue"])]),_:1})],512),[[V,e.props.dataType==="dynamic"]])],512)),[[V,e.props.compType==="checkbox"]])}const E=k(z,[["render",N],["__scopeId","data-v-c6d6ce2e"]]);export{E as default};
