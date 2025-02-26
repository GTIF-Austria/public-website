import{aP as F,aH as H,c as k,o as E,G as y,w as S,b as O,e as C,H as q,k as w,K as p,r as M,aq as R,p as I,Y as N,q as B,T as D,P as U}from"./framework.Bxp61lw_.js";import{az as Y,F as V,H as b,a7 as j,aA as z,a8 as K,J as X,ak as G,am as J,an as Q,ab as Z,K as $,W as _,aB as ee,a1 as te,M as ae,a3 as oe,af as ne,ag as se,ai as ie,N as re,O as le,a5 as ce,aC as ue,ad as de}from"./eo-dash.BVvDuGgb.js";import{V as A,m as me}from"./VOverlay-BS-E4Z6g.4An8Kdtb.js";import{u as fe,f as ge,a as x,b as he,s as T,d as ve,g as ye,n as pe}from"./forwardRefs-lhDuXD-N.BGHGwNvf.js";import"./commonjsHelpers.BosuxZz1.js";import"./transition-DHEuQX4I.CudD78UZ.js";const xe=b({target:[Object,Array]},"v-dialog-transition"),Pe=V()({name:"VDialogTransition",props:xe(),setup(e,l){let{slots:a}=l;const i={onBeforeEnter(t){t.style.pointerEvents="none",t.style.visibility="hidden"},async onEnter(t,d){var u;await new Promise(s=>requestAnimationFrame(s)),await new Promise(s=>requestAnimationFrame(s)),t.style.visibility="";const{x:o,y:r,sx:f,sy:g,speed:n}=W(e.target,t),c=x(t,[{transform:`translate(${o}px, ${r}px) scale(${f}, ${g})`,opacity:0},{}],{duration:225*n,easing:ve});(u=L(t))==null||u.forEach(s=>{x(s,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*n,easing:T})}),c.finished.then(()=>d())},onAfterEnter(t){t.style.removeProperty("pointer-events")},onBeforeLeave(t){t.style.pointerEvents="none"},async onLeave(t,d){var u;await new Promise(s=>requestAnimationFrame(s));const{x:o,y:r,sx:f,sy:g,speed:n}=W(e.target,t);x(t,[{},{transform:`translate(${o}px, ${r}px) scale(${f}, ${g})`,opacity:0}],{duration:125*n,easing:he}).finished.then(()=>d()),(u=L(t))==null||u.forEach(s=>{x(s,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*n,easing:T})})},onAfterLeave(t){t.style.removeProperty("pointer-events")}};return()=>e.target?y(D,p({name:"dialog-transition"},i,{css:!1}),a):y(D,{name:"dialog-transition"},a)}});function L(e){var a;const l=(a=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:a.children;return l&&[...l]}function W(e,l){const a=ye(e),i=pe(l),[t,d]=getComputedStyle(l).transformOrigin.split(" ").map(P=>parseFloat(P)),[o,r]=getComputedStyle(l).getPropertyValue("--v-overlay-anchor-origin").split(" ");let f=a.left+a.width/2;o==="left"||r==="left"?f-=a.width/2:(o==="right"||r==="right")&&(f+=a.width/2);let g=a.top+a.height/2;o==="top"||r==="top"?g-=a.height/2:(o==="bottom"||r==="bottom")&&(g+=a.height/2);const n=a.width/i.width,c=a.height/i.height,u=Math.max(1,n,c),s=n/u||0,h=c/u||0,m=i.width*i.height/(window.innerWidth*window.innerHeight),v=m>.12?Math.min(1.5,(m-.12)*10+1):1;return{x:f-(t+i.left),y:g-(d+i.top),sx:s,sy:h,speed:v}}const Ee=b({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...me({origin:"center center",scrollStrategy:"block",transition:{component:Pe},zIndex:2400})},"VDialog"),we=V()({name:"VDialog",props:Ee(),emits:{"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,l){let{emit:a,slots:i}=l;const t=_(e,"modelValue"),{scopeId:d}=fe(),o=I();function r(n){var s,h;const c=n.relatedTarget,u=n.target;if(c!==u&&((s=o.value)!=null&&s.contentEl)&&((h=o.value)!=null&&h.globalTop)&&![document,o.value.contentEl].includes(u)&&!o.value.contentEl.contains(u)){const m=ue(o.value.contentEl);if(!m.length)return;const v=m[0],P=m[m.length-1];c===v?P.focus():v.focus()}}N(()=>{document.removeEventListener("focusin",r)}),ee&&B(()=>t.value&&e.retainFocus,n=>{n?document.addEventListener("focusin",r):document.removeEventListener("focusin",r)},{immediate:!0});function f(){var n;a("afterEnter"),(n=o.value)!=null&&n.contentEl&&!o.value.contentEl.contains(document.activeElement)&&o.value.contentEl.focus({preventScroll:!0})}function g(){a("afterLeave")}return B(t,async n=>{var c;n||(await U(),(c=o.value.activatorEl)==null||c.focus({preventScroll:!0}))}),$(()=>{const n=A.filterProps(e),c=p({"aria-haspopup":"dialog"},e.activatorProps),u=p({tabindex:-1},e.contentProps);return y(A,p({ref:o,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},n,{modelValue:t.value,"onUpdate:modelValue":s=>t.value=s,"aria-modal":"true",activatorProps:c,contentProps:u,height:e.fullscreen?void 0:e.height,width:e.fullscreen?void 0:e.width,maxHeight:e.fullscreen?void 0:e.maxHeight,maxWidth:e.fullscreen?void 0:e.maxWidth,role:"dialog",onAfterEnter:f,onAfterLeave:g},d),{activator:i.activator,default:function(){for(var s=arguments.length,h=new Array(s),m=0;m<s;m++)h[m]=arguments[m];return y(de,{root:"VDialog"},{default:()=>{var v;return[(v=i.default)==null?void 0:v.call(i,...h)]}})}})}),ge({},o)}}),Ve=b({color:String,...ce(),...le(),...re(),...ie(),...se(),...ne(),...oe(),...ae(),...te()},"VSheet"),be=V()({name:"VSheet",props:Ve(),setup(e,l){let{slots:a}=l;const{themeClasses:i}=j(e),{backgroundColorClasses:t,backgroundColorStyles:d}=z(R(e,"color")),{borderClasses:o}=K(e),{dimensionStyles:r}=X(e),{elevationClasses:f}=G(e),{locationStyles:g}=J(e),{positionClasses:n}=Q(e),{roundedClasses:c}=Z(e);return $(()=>y(e.tag,{class:["v-sheet",i.value,t.value,o.value,f.value,n.value,c.value,e.class],style:[d.value,r.value,g.value,e.style]},a)),{}}}),ke={key:1},Le={__name:"PopUp",props:F({widget:{type:Object,default:void 0},maxWidth:{type:String,default:"500px"},maxHeight:{type:String,default:"500px"},width:{type:String,default:"500px"},height:{type:String,default:"500px"}},{modelValue:{type:Boolean,required:!0,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const l=H(e,"modelValue"),a=e,i={maxWidth:a.maxWidth,maxHeight:a.maxHeight,width:a.width,height:a.height},[t]=Y([a==null?void 0:a.widget]);return(d,o)=>(E(),k("span",null,[y(we,p(i,{absolute:"",scrollable:"","scroll-strategy":"block","close-on-back":"",modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=r=>l.value=r)}),{default:S(()=>[y(be,null,{default:S(()=>[e.widget?(E(),O(q(w(t).component),p({key:w(t).id},w(t).props),null,16)):C("v-if",!0),d.$slots.default?(E(),k("span",ke,[M(d.$slots,"default")])):C("v-if",!0)]),_:3})]),_:3},16,["modelValue"])]))}};export{Le as default};
