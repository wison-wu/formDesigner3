import{_,c as f,r as n,w as V,v as h,o as g,a as x,h as b,b as e,d as a,e as v}from"./index-e8ca8f94.js";const I={name:"inputConfig",props:["props","getFormId"],components:{},mixins:[f],data(){return{}},methods:{}},w={style:{"font-size":"14px","margin-top":"10px",height:"20px","text-align":"center"}};function C(p,l,t,N,y,U){const m=n("InfoFilled"),u=n("el-icon"),r=n("el-divider"),s=n("el-input"),c=n("el-tooltip"),d=n("el-form-item"),i=n("el-inputNumber");return V((g(),x("div",null,[b("div",w,[e(u,null,{default:a(()=>[e(m)]),_:1}),v("\u8BF7\u70B9\u51FB\u53F3\u952E\u589E\u52A0\u884C\u5217\uFF0C\u6216\u8005\u5408\u5E76\u5355\u5143\u683C ")]),e(r),e(d,{label:"ID"},{default:a(()=>[e(c,{class:"item",effect:"dark",content:"\u8BF7\u6CE8\u610F,ID\u7684\u4FEE\u6539\u53EF\u80FD\u4F1A\u5BFC\u81F4\u8BE5\u7EC4\u4EF6\u76F8\u5173\u4E8B\u4EF6\u5931\u6548\uFF01",placement:"left"},{default:a(()=>[e(s,{class:"input",modelValue:t.props.id,"onUpdate:modelValue":l[0]||(l[0]=o=>t.props.id=o),onChange:p.handlerChangeId},null,8,["modelValue","onChange"])]),_:1})]),_:1}),e(d,{label:"\u5355\u5143\u683C\u6837\u5F0F"},{default:a(()=>[e(s,{class:"input",modelValue:t.props.tdStyle,"onUpdate:modelValue":l[1]||(l[1]=o=>t.props.tdStyle=o)},null,8,["modelValue"])]),_:1}),e(d,{label:"\u8868\u683C\u5BBD\u5EA6"},{default:a(()=>[e(i,{class:"input",min:0,max:500,modelValue:t.props.width,"onUpdate:modelValue":l[2]||(l[2]=o=>t.props.width=o)},null,8,["modelValue"])]),_:1}),e(d,{label:"\u884C\u9AD8"},{default:a(()=>[e(i,{class:"input",min:0,max:1500,step:5,modelValue:t.props.height,"onUpdate:modelValue":l[3]||(l[3]=o=>t.props.height=o)},null,8,["modelValue"])]),_:1})],512)),[[h,t.props.compType==="table"]])}const B=_(I,[["render",C]]);export{B as default};
