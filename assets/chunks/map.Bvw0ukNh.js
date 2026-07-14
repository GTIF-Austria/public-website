import{Z as M,T as b,E as m}from"./lit-element.CIht5NN8.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},E=t=>(...e)=>({_$litDirective$:t,values:e});class I{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,n){this._$Ct=e,this._$AM=s,this._$Ci=n}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:C}=M,P=t=>t.strings===void 0,x=()=>document.createComment(""),h=(t,e,s)=>{var c;const n=t._$AA.parentNode,i=e===void 0?t._$AB:e._$AA;if(s===void 0){const r=n.insertBefore(x(),i),u=n.insertBefore(x(),i);s=new C(r,u,t,t.options)}else{const r=s._$AB.nextSibling,u=s._$AM,$=u!==t;if($){let d;(c=s._$AQ)==null||c.call(s,t),s._$AM=t,s._$AP!==void 0&&(d=t._$AU)!==u._$AU&&s._$AP(d)}if(r!==i||$){let d=s._$AA;for(;d!==r;){const v=d.nextSibling;n.insertBefore(d,i),d=v}}}return s},_=(t,e,s=t)=>(t._$AI(e,s),t),H={},U=(t,e=H)=>t._$AH=e,L=t=>t._$AH,y=t=>{var n;(n=t._$AP)==null||n.call(t,!1,!0);let e=t._$AA;const s=t._$AB.nextSibling;for(;e!==s;){const i=e.nextSibling;e.remove(),e=i}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=(t,e,s)=>{const n=new Map;for(let i=e;i<=s;i++)n.set(t[i],i);return n},S=E(class extends I{constructor(t){if(super(t),t.type!==w.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let n;s===void 0?s=e:e!==void 0&&(n=e);const i=[],c=[];let r=0;for(const u of t)i[r]=n?n(u,r):r,c[r]=s(u,r),r++;return{values:c,keys:i}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,n]){const i=L(t),{values:c,keys:r}=this.dt(e,s,n);if(!Array.isArray(i))return this.ut=r,c;const u=this.ut??(this.ut=[]),$=[];let d,v,o=0,f=i.length-1,l=0,a=c.length-1;for(;o<=f&&l<=a;)if(i[o]===null)o++;else if(i[f]===null)f--;else if(u[o]===r[l])$[l]=_(i[o],c[l]),o++,l++;else if(u[f]===r[a])$[a]=_(i[f],c[a]),f--,a--;else if(u[o]===r[a])$[a]=_(i[o],c[a]),h(t,$[a+1],i[o]),o++,a--;else if(u[f]===r[l])$[l]=_(i[f],c[l]),h(t,i[o],i[f]),f--,l++;else if(d===void 0&&(d=B(r,l,a),v=B(u,o,f)),d.has(u[o]))if(d.has(u[f])){const A=v.get(r[l]),p=A!==void 0?i[A]:null;if(p===null){const T=h(t,i[o]);_(T,c[l]),$[l]=T}else $[l]=_(p,c[l]),h(t,i[o],p),i[A]=null;l++}else y(i[f]),f--;else y(i[o]),o++;for(;l<=a;){const A=h(t,$[a+1]);_(A,c[l]),$[l++]=A}for(;o<=f;){const A=i[o++];A!==null&&y(A)}return this.ut=r,U(t,$),b}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class g extends I{constructor(e){if(super(e),this.it=m,e.type!==w.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===m||e==null)return this._t=void 0,this.it=e;if(e===b)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const s=[e];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}g.directiveName="unsafeHTML",g.resultType=1;const D=E(g);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*R(t,e){if(t!==void 0){let s=0;for(const n of t)yield e(n,s++)}}export{E as a,R as b,S as c,g as e,P as f,I as i,U as m,D as o,w as t};
