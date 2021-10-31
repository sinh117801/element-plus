import{_ as c,r as n,o as _,f as d,g as x,ak as v,w as a,b as e,a as t,j as f,d as b,c as k,i as j,F as S}from"./app.f71a985e.js";const D={};function M(o,i){const l=n("el-skeleton");return _(),d(l,{rows:5,animated:""})}var Y=c(D,[["render",M]]),we=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Y});const T=x({data(){return{loading:!1,currentDate:v().format("YYYY-MM-DD")}}}),O=e("label",{style:{"margin-right":"16px"}},"Switch Loading",-1),V={style:{padding:"14px"}},z={style:{display:"flex","align-items":"center","justify-items":"space-between","margin-top":"16px",height:"16px"}},B=e("img",{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",class:"image"},null,-1),U={style:{padding:"14px"}},C=e("span",null,"Delicious hamburger",-1),L={class:"bottom card-header"},N={class:"time"},F=b("operation button");function R(o,i,l,h,$,w){const p=n("el-switch"),s=n("el-skeleton-item"),m=n("el-button"),g=n("el-card"),u=n("el-skeleton"),r=n("el-space");return _(),d(r,{direction:"vertical",alignment:"flex-start"},{default:a(()=>[e("div",null,[O,t(p,{modelValue:o.loading,"onUpdate:modelValue":i[0]||(i[0]=y=>o.loading=y)},null,8,["modelValue"])]),t(u,{style:{width:"240px"},loading:o.loading,animated:"",throttle:500},{template:a(()=>[t(s,{variant:"image",style:{width:"240px",height:"240px"}}),e("div",V,[t(s,{variant:"h3",style:{width:"50%"}}),e("div",z,[t(s,{variant:"text",style:{"margin-right":"16px"}}),t(s,{variant:"text",style:{width:"30%"}})])])]),default:a(()=>[t(g,{"body-style":{padding:"0px",marginBottom:"1px"}},{default:a(()=>[B,e("div",U,[C,e("div",L,[e("span",N,f(o.currentDate),1),t(m,{type:"text",class:"button"},{default:a(()=>[F]),_:1})])])]),_:1})]),_:1},8,["loading"])]),_:1})}var E=c(T,[["render",R]]),ke=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:E});const H={};function W(o,i){const l=n("el-skeleton");return _(),d(l)}var q=c(H,[["render",W]]),je=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:q});const A={};function G(o,i){const l=n("el-skeleton");return _(),d(l,{rows:5})}var I=c(A,[["render",G]]),Se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:I});const J={},K={style:{padding:"14px"}},P={style:{display:"flex","align-items":"center","justify-items":"space-between"}};function Q(o,i){const l=n("el-skeleton-item"),h=n("el-skeleton");return _(),d(h,{style:{width:"240px"}},{template:a(()=>[t(l,{variant:"image",style:{width:"240px",height:"240px"}}),e("div",K,[t(l,{variant:"p",style:{width:"50%"}}),e("div",P,[t(l,{variant:"text",style:{"margin-right":"16px"}}),t(l,{variant:"text",style:{width:"30%"}})])])]),_:1})}var X=c(J,[["render",Q]]),De=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:X});const Z=x({data(){return{loading:!0,currentDate:v().format("YYYY-MM-DD")}}}),ee=e("label",{style:{"margin-right":"16px"}},"Switch Loading",-1),te={style:{padding:"14px"}},ne={style:{display:"flex","align-items":"center","justify-items":"space-between","margin-top":"16px",height:"16px"}},oe=e("img",{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",class:"image"},null,-1),ae={style:{padding:"14px"}},se=e("span",null,"Delicious hamburger",-1),le={class:"bottom card-header"},ie={class:"time"},_e=b("Operation button");function de(o,i,l,h,$,w){const p=n("el-switch"),s=n("el-skeleton-item"),m=n("el-button"),g=n("el-card"),u=n("el-skeleton"),r=n("el-space");return _(),d(r,{direction:"vertical",alignment:"flex-start"},{default:a(()=>[e("div",null,[ee,t(p,{modelValue:o.loading,"onUpdate:modelValue":i[0]||(i[0]=y=>o.loading=y)},null,8,["modelValue"])]),t(u,{style:{width:"240px"},loading:o.loading,animated:""},{template:a(()=>[t(s,{variant:"image",style:{width:"240px",height:"240px"}}),e("div",te,[t(s,{variant:"h3",style:{width:"50%"}}),e("div",ne,[t(s,{variant:"text",style:{"margin-right":"16px"}}),t(s,{variant:"text",style:{width:"30%"}})])])]),default:a(()=>[t(g,{"body-style":{padding:"0px",marginBottom:"1px"}},{default:a(()=>[oe,e("div",ae,[se,e("div",le,[e("span",ie,f(o.currentDate),1),t(m,{type:"text",class:"button"},{default:a(()=>[_e]),_:1})])])]),_:1})]),_:1},8,["loading"])]),_:1})}var re=c(Z,[["render",de]]),Me=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:re});const ce=x({data(){return{loading:!0,currentDate:v().format("YYYY-MM-DD"),lists:[]}},mounted(){this.loading=!1,this.lists=[{imgUrl:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",name:"Deer"},{imgUrl:"https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",name:"Horse"},{imgUrl:"https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",name:"Mountain Lion"}]},methods:{setLoading(){this.loading=!0,setTimeout(()=>this.loading=!1,2e3)}}}),pe=b("Click me to reload"),me={style:{padding:"14px"}},ge={style:{display:"flex","align-items":"center","justify-items":"space-between","margin-top":"16px",height:"16px"}},ue=["src"],he={style:{padding:"14px"}},fe={class:"bottom card-header"},be={class:"time"},ye=b("Operation button");function xe(o,i,l,h,$,w){const p=n("el-button"),s=n("el-skeleton-item"),m=n("el-card"),g=n("el-skeleton"),u=n("el-space");return _(),d(u,{direction:"vertical",alignment:"flex-start"},{default:a(()=>[t(p,{onClick:o.setLoading},{default:a(()=>[pe]),_:1},8,["onClick"]),t(g,{style:{width:"240px"},loading:o.loading,animated:"",count:3},{template:a(()=>[t(s,{variant:"image",style:{width:"400px",height:"267px"}}),e("div",me,[t(s,{variant:"h3",style:{width:"50%"}}),e("div",ge,[t(s,{variant:"text",style:{"margin-right":"16px"}}),t(s,{variant:"text",style:{width:"30%"}})])])]),default:a(()=>[(_(!0),k(S,null,j(o.lists,r=>(_(),d(m,{key:r.name,"body-style":{padding:"0px",marginBottom:"1px"}},{default:a(()=>[e("img",{src:r.imgUrl,class:"image multi-content"},null,8,ue),e("div",he,[e("span",null,f(r.name),1),e("div",fe,[e("span",be,f(o.currentDate),1),t(p,{type:"text",class:"button"},{default:a(()=>[ye]),_:1})])])]),_:2},1024))),128))]),_:1},8,["loading"])]),_:1})}var ve=c(ce,[["render",xe]]),Ye=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ve});export{we as _,ke as a,je as b,Se as c,De as d,Me as e,Ye as f};