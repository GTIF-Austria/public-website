import{V as u,m as b}from"./VOverlay-BS-E4Z6g.4An8Kdtb.js";import{u as h,f as S}from"./forwardRefs-lhDuXD-N.BGHGwNvf.js";import{F as O,H as x,W as T,X as k,K as w,Y as A}from"./eo-dash.BVvDuGgb.js";import{h as e,p as C,K as d,G as F}from"./framework.Bxp61lw_.js";const G=x({id:String,text:String,...A(b({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),U=O()({name:"VTooltip",props:G(),emits:{"update:modelValue":t=>!0},setup(t,m){let{slots:o}=m;const n=T(t,"modelValue"),{scopeId:v}=h(),f=k(),r=e(()=>t.id||`v-tooltip-${f}`),l=C(),g=e(()=>t.location.split(" ").length>1?t.location:t.location+" center"),V=e(()=>t.origin==="auto"||t.origin==="overlap"||t.origin.split(" ").length>1||t.location.split(" ").length>1?t.origin:t.origin+" center"),P=e(()=>t.transition?t.transition:n.value?"scale-transition":"fade-transition"),y=e(()=>d({"aria-describedby":r.value},t.activatorProps));return w(()=>{const p=u.filterProps(t);return F(u,d({ref:l,class:["v-tooltip",t.class],style:t.style,id:r.value},p,{modelValue:n.value,"onUpdate:modelValue":a=>n.value=a,transition:P.value,absolute:!0,location:g.value,origin:V.value,persistent:!0,role:"tooltip",activatorProps:y.value,_disableGlobalStack:!0},v),{activator:o.activator,default:function(){var c;for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return((c=o.default)==null?void 0:c.call(o,...s))??t.text}})}),S({},l)}});export{U as V};
