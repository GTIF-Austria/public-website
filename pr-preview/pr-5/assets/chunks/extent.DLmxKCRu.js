const ts=s=>{let i;return typeof s=="string"?i=document.querySelector(s):i=s,i};class C{constructor(i){this.propagationStopped,this.defaultPrevented,this.type=i,this.target=null}preventDefault(){this.defaultPrevented=!0}stopPropagation(){this.propagationStopped=!0}}function os(s){s.stopPropagation()}const W={PROPERTYCHANGE:"propertychange"};class G{constructor(){this.disposed=!1}dispose(){this.disposed||(this.disposed=!0,this.disposeInternal())}disposeInternal(){}}function as(s,i,r){let n,t;r=r||N;let o=0,u=s.length,e=!1;for(;o<u;)n=o+(u-o>>1),t=+r(s[n],i),t<0?o=n+1:(u=n,e=!t);return e?o:~o}function N(s,i){return s>i?1:s<i?-1:0}function es(s,i){return s<i?1:s>i?-1:0}function us(s,i,r){if(s[0]<=i)return 0;const n=s.length;if(i<=s[n-1])return n-1;if(typeof r=="function"){for(let t=1;t<n;++t){const o=s[t];if(o===i)return t;if(o<i)return r(i,s[t-1],o)>0?t-1:t}return n-1}if(r>0){for(let t=1;t<n;++t)if(s[t]<i)return t-1;return n-1}if(r<0){for(let t=1;t<n;++t)if(s[t]<=i)return t;return n-1}for(let t=1;t<n;++t){if(s[t]==i)return t;if(s[t]<i)return s[t-1]-i<i-s[t]?t-1:t}return n-1}function ls(s,i,r){for(;i<r;){const n=s[i];s[i]=s[r],s[r]=n,++i,--r}}function fs(s,i){const r=Array.isArray(i)?i:[i],n=r.length;for(let t=0;t<n;t++)s[s.length]=r[t]}function U(s,i){const r=s.length;if(r!==i.length)return!1;for(let n=0;n<r;n++)if(s[n]!==i[n])return!1;return!0}function cs(s,i,r){const n=i||N;return s.every(function(t,o){if(o===0)return!0;const u=n(s[o-1],t);return!(u>0||u===0)})}function hs(){return!0}function ps(){return!1}function L(){}function ds(s){let i,r,n;return function(){const t=Array.prototype.slice.call(arguments);return(!r||this!==n||!U(t,r))&&(n=this,r=t,i=s.apply(this,arguments)),i}}function gs(s){function i(){let r;try{r=s()}catch(n){return Promise.reject(n)}return r instanceof Promise?r:Promise.resolve(r)}return i()}function S(s){for(const i in s)delete s[i]}function H(s){let i;for(i in s)return!1;return!i}class K extends G{constructor(i){super(),this.eventTarget_=i,this.pendingRemovals_=null,this.dispatching_=null,this.listeners_=null}addEventListener(i,r){if(!i||!r)return;const n=this.listeners_||(this.listeners_={}),t=n[i]||(n[i]=[]);t.includes(r)||t.push(r)}dispatchEvent(i){const r=typeof i=="string",n=r?i:i.type,t=this.listeners_&&this.listeners_[n];if(!t)return;const o=r?new C(i):i;o.target||(o.target=this.eventTarget_||this);const u=this.dispatching_||(this.dispatching_={}),e=this.pendingRemovals_||(this.pendingRemovals_={});n in u||(u[n]=0,e[n]=0),++u[n];let a;for(let l=0,h=t.length;l<h;++l)if("handleEvent"in t[l]?a=t[l].handleEvent(o):a=t[l].call(this,o),a===!1||o.propagationStopped){a=!1;break}if(--u[n]===0){let l=e[n];for(delete e[n];l--;)this.removeEventListener(n,L);delete u[n]}return a}disposeInternal(){this.listeners_&&S(this.listeners_)}getListeners(i){return this.listeners_&&this.listeners_[i]||void 0}hasListener(i){return this.listeners_?i?i in this.listeners_:Object.keys(this.listeners_).length>0:!1}removeEventListener(i,r){if(!this.listeners_)return;const n=this.listeners_[i];if(!n)return;const t=n.indexOf(r);t!==-1&&(this.pendingRemovals_&&i in this.pendingRemovals_?(n[t]=L,++this.pendingRemovals_[i]):(n.splice(t,1),n.length===0&&delete this.listeners_[i]))}}const V={CHANGE:"change",ERROR:"error",CONTEXTMENU:"contextmenu",CLICK:"click",DBLCLICK:"dblclick",KEYDOWN:"keydown",KEYPRESS:"keypress",LOAD:"load",TOUCHMOVE:"touchmove",WHEEL:"wheel"};function I(s,i,r,n,t){if(t){const u=r;r=function(){s.removeEventListener(i,r),u.apply(n??this,arguments)}}else n&&n!==s&&(r=r.bind(n));const o={target:s,type:i,listener:r};return s.addEventListener(i,r),o}function T(s,i,r,n){return I(s,i,r,n,!0)}function w(s){s&&s.target&&(s.target.removeEventListener(s.type,s.listener),S(s))}class _ extends K{constructor(){super(),this.on=this.onInternal,this.once=this.onceInternal,this.un=this.unInternal,this.revision_=0}changed(){++this.revision_,this.dispatchEvent(V.CHANGE)}getRevision(){return this.revision_}onInternal(i,r){if(Array.isArray(i)){const n=i.length,t=new Array(n);for(let o=0;o<n;++o)t[o]=I(this,i[o],r);return t}return I(this,i,r)}onceInternal(i,r){let n;if(Array.isArray(i)){const t=i.length;n=new Array(t);for(let o=0;o<t;++o)n[o]=T(this,i[o],r)}else n=T(this,i,r);return r.ol_key=n,n}unInternal(i,r){const n=r.ol_key;if(n)D(n);else if(Array.isArray(i))for(let t=0,o=i.length;t<o;++t)this.removeEventListener(i[t],r);else this.removeEventListener(i,r)}}_.prototype.on;_.prototype.once;_.prototype.un;function D(s){if(Array.isArray(s))for(let i=0,r=s.length;i<r;++i)w(s[i]);else w(s)}function Es(){throw new Error("Unimplemented abstract method.")}let q=0;function j(s){return s.ol_uid||(s.ol_uid=String(++q))}class M extends C{constructor(i,r,n){super(i),this.key=r,this.oldValue=n}}class ms extends _{constructor(i){super(),this.on,this.once,this.un,j(this),this.values_=null,i!==void 0&&this.setProperties(i)}get(i){let r;return this.values_&&this.values_.hasOwnProperty(i)&&(r=this.values_[i]),r}getKeys(){return this.values_&&Object.keys(this.values_)||[]}getProperties(){return this.values_&&Object.assign({},this.values_)||{}}getPropertiesInternal(){return this.values_}hasProperties(){return!!this.values_}notify(i,r){let n;n=`change:${i}`,this.hasListener(n)&&this.dispatchEvent(new M(n,i,r)),n=W.PROPERTYCHANGE,this.hasListener(n)&&this.dispatchEvent(new M(n,i,r))}addChangeListener(i,r){this.addEventListener(`change:${i}`,r)}removeChangeListener(i,r){this.removeEventListener(`change:${i}`,r)}set(i,r,n){const t=this.values_||(this.values_={});if(n)t[i]=r;else{const o=t[i];t[i]=r,o!==r&&this.notify(i,o)}}setProperties(i,r){for(const n in i)this.set(n,i[n],r)}applyProperties(i){i.values_&&Object.assign(this.values_||(this.values_={}),i.values_)}unset(i,r){if(this.values_&&i in this.values_){const n=this.values_[i];delete this.values_[i],H(this.values_)&&(this.values_=null),r||this.notify(i,n)}}}function vs(s,i){if(!s)throw new Error(i)}function _s(s,i,r){return Math.min(Math.max(s,i),r)}function ys(s,i,r,n,t,o){const u=t-r,e=o-n;if(u!==0||e!==0){const a=((s-r)*u+(i-n)*e)/(u*u+e*e);a>1?(r=t,n=o):a>0&&(r+=u*a,n+=e*a)}return $(s,i,r,n)}function $(s,i,r,n){const t=r-s,o=n-i;return t*t+o*o}function Is(s){const i=s.length;for(let n=0;n<i;n++){let t=n,o=Math.abs(s[n][n]);for(let e=n+1;e<i;e++){const a=Math.abs(s[e][n]);a>o&&(o=a,t=e)}if(o===0)return null;const u=s[t];s[t]=s[n],s[n]=u;for(let e=n+1;e<i;e++){const a=-s[e][n]/s[n][n];for(let l=n;l<i+1;l++)n==l?s[e][l]=0:s[e][l]+=a*s[n][l]}}const r=new Array(i);for(let n=i-1;n>=0;n--){r[n]=s[n][i]/s[n][n];for(let t=n-1;t>=0;t--)s[t][i]-=s[t][n]*r[n]}return r}function Rs(s){return s*180/Math.PI}function Os(s){return s*Math.PI/180}function Ls(s,i){const r=s%i;return r*i<0?r+i:r}function Ts(s,i,r){return s+r*(i-s)}function R(s,i){const r=Math.pow(10,i);return Math.round(s*r)/r}function ws(s,i){return Math.round(R(s,i))}function Ms(s,i){return Math.floor(R(s,i))}function As(s,i){return Math.ceil(R(s,i))}const f={UNKNOWN:0,INTERSECTING:1,ABOVE:2,RIGHT:4,BELOW:8,LEFT:16};function Cs(s){const i=P();for(let r=0,n=s.length;r<n;++r)Q(i,s[r]);return i}function z(s,i,r){const n=Math.min.apply(null,s),t=Math.min.apply(null,i),o=Math.max.apply(null,s),u=Math.max.apply(null,i);return y(n,t,o,u,r)}function Ns(s,i,r){return r?(r[0]=s[0]-i,r[1]=s[1]-i,r[2]=s[2]+i,r[3]=s[3]+i,r):[s[0]-i,s[1]-i,s[2]+i,s[3]+i]}function Ss(s,i){return i?(i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i):s.slice()}function Ps(s,i,r){let n,t;return i<s[0]?n=s[0]-i:s[2]<i?n=i-s[2]:n=0,r<s[1]?t=s[1]-r:s[3]<r?t=r-s[3]:t=0,n*n+t*t}function bs(s,i){return J(s,i[0],i[1])}function Fs(s,i){return s[0]<=i[0]&&i[2]<=s[2]&&s[1]<=i[1]&&i[3]<=s[3]}function J(s,i,r){return s[0]<=i&&i<=s[2]&&s[1]<=r&&r<=s[3]}function A(s,i){const r=s[0],n=s[1],t=s[2],o=s[3],u=i[0],e=i[1];let a=f.UNKNOWN;return u<r?a=a|f.LEFT:u>t&&(a=a|f.RIGHT),e<n?a=a|f.BELOW:e>o&&(a=a|f.ABOVE),a===f.UNKNOWN&&(a=f.INTERSECTING),a}function P(){return[1/0,1/0,-1/0,-1/0]}function y(s,i,r,n,t){return t?(t[0]=s,t[1]=i,t[2]=r,t[3]=n,t):[s,i,r,n]}function O(s){return y(1/0,1/0,-1/0,-1/0,s)}function Xs(s,i){const r=s[0],n=s[1];return y(r,n,r,n,i)}function Bs(s,i,r,n,t){const o=O(t);return Z(o,s,i,r,n)}function Ys(s,i){return s[0]==i[0]&&s[2]==i[2]&&s[1]==i[1]&&s[3]==i[3]}function Ws(s,i,r){return Math.abs(s[0]-i[0])<r&&Math.abs(s[2]-i[2])<r&&Math.abs(s[1]-i[1])<r&&Math.abs(s[3]-i[3])<r}function Gs(s,i){return i[0]<s[0]&&(s[0]=i[0]),i[2]>s[2]&&(s[2]=i[2]),i[1]<s[1]&&(s[1]=i[1]),i[3]>s[3]&&(s[3]=i[3]),s}function Q(s,i){i[0]<s[0]&&(s[0]=i[0]),i[0]>s[2]&&(s[2]=i[0]),i[1]<s[1]&&(s[1]=i[1]),i[1]>s[3]&&(s[3]=i[1])}function Z(s,i,r,n,t){for(;r<n;r+=t)k(s,i[r],i[r+1]);return s}function k(s,i,r){s[0]=Math.min(s[0],i),s[1]=Math.min(s[1],r),s[2]=Math.max(s[2],i),s[3]=Math.max(s[3],r)}function Us(s,i){let r;return r=i(b(s)),r||(r=i(F(s)),r)||(r=i(B(s)),r)||(r=i(X(s)),r)?r:!1}function Hs(s){let i=0;return Y(s)||(i=v(s)*is(s)),i}function b(s){return[s[0],s[1]]}function F(s){return[s[2],s[1]]}function x(s){return[(s[0]+s[2])/2,(s[1]+s[3])/2]}function Ks(s,i){let r;if(i==="bottom-left")r=b(s);else if(i==="bottom-right")r=F(s);else if(i==="top-left")r=X(s);else if(i==="top-right")r=B(s);else throw new Error("Invalid corner");return r}function Vs(s,i,r,n,t){const[o,u,e,a,l,h,d,c]=ss(s,i,r,n);return y(Math.min(o,e,l,d),Math.min(u,a,h,c),Math.max(o,e,l,d),Math.max(u,a,h,c),t)}function ss(s,i,r,n){const t=i*n[0]/2,o=i*n[1]/2,u=Math.cos(r),e=Math.sin(r),a=t*u,l=t*e,h=o*u,d=o*e,c=s[0],p=s[1];return[c-a+d,p-l-h,c-a-d,p-l+h,c+a-d,p+l+h,c+a+d,p+l-h,c-a+d,p-l-h]}function is(s){return s[3]-s[1]}function Ds(s,i,r){const n=r||P();return ns(s,i)?(s[0]>i[0]?n[0]=s[0]:n[0]=i[0],s[1]>i[1]?n[1]=s[1]:n[1]=i[1],s[2]<i[2]?n[2]=s[2]:n[2]=i[2],s[3]<i[3]?n[3]=s[3]:n[3]=i[3]):O(n),n}function X(s){return[s[0],s[3]]}function B(s){return[s[2],s[3]]}function v(s){return s[2]-s[0]}function ns(s,i){return s[0]<=i[2]&&s[2]>=i[0]&&s[1]<=i[3]&&s[3]>=i[1]}function Y(s){return s[2]<s[0]||s[3]<s[1]}function qs(s,i){return i?(i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i):s}function js(s,i){const r=(s[2]-s[0])/2*(i-1),n=(s[3]-s[1])/2*(i-1);s[0]-=r,s[2]+=r,s[1]-=n,s[3]+=n}function $s(s,i,r){let n=!1;const t=A(s,i),o=A(s,r);if(t===f.INTERSECTING||o===f.INTERSECTING)n=!0;else{const u=s[0],e=s[1],a=s[2],l=s[3],h=i[0],d=i[1],c=r[0],p=r[1],m=(p-d)/(c-h);let g,E;o&f.ABOVE&&!(t&f.ABOVE)&&(g=c-(p-l)/m,n=g>=u&&g<=a),!n&&o&f.RIGHT&&!(t&f.RIGHT)&&(E=p-(c-a)*m,n=E>=e&&E<=l),!n&&o&f.BELOW&&!(t&f.BELOW)&&(g=c-(p-e)/m,n=g>=u&&g<=a),!n&&o&f.LEFT&&!(t&f.LEFT)&&(E=p-(c-u)*m,n=E>=e&&E<=l)}return n}function zs(s,i,r,n){if(Y(s))return O(r);let t=[];if(n>1){const e=s[2]-s[0],a=s[3]-s[1];for(let l=0;l<n;++l)t.push(s[0]+e*l/n,s[1],s[2],s[1]+a*l/n,s[2]-e*l/n,s[3],s[0],s[3]-a*l/n)}else t=[s[0],s[1],s[2],s[1],s[2],s[3],s[0],s[3]];i(t,t,2);const o=[],u=[];for(let e=0,a=t.length;e<a;e+=2)o.push(t[e]),u.push(t[e+1]);return z(o,u,r)}function rs(s,i){const r=i.getExtent(),n=x(s);if(i.canWrapX()&&(n[0]<r[0]||n[0]>=r[2])){const t=v(r),u=Math.floor((n[0]-r[0])/t)*t;s[0]-=u,s[2]-=u}return s}function Js(s,i,r){if(i.canWrapX()){const n=i.getExtent();if(!isFinite(s[0])||!isFinite(s[2]))return[[n[0],s[1],n[2],s[3]]];rs(s,i);const t=v(n);if(v(s)>t&&!r)return[[n[0],s[1],n[2],s[3]]];if(s[0]<n[0])return[[s[0]+t,s[1],n[2],s[3]],[n[0],s[1],s[2],s[3]]];if(s[2]>n[2])return[[s[0],s[1],n[2],s[3]],[n[0],s[1],s[2]-t,s[3]]]}return[s]}export{Js as $,Ss as A,ms as B,y as C,G as D,V as E,ps as F,Us as G,bs as H,A as I,ls as J,Ns as K,Ts as L,_ as M,X as N,W as O,B as P,F as Q,f as R,b as S,K as T,P as U,L as V,Q as W,R as X,Fs as Y,rs as Z,fs as _,v as a,ys as a0,Ws as a1,Ds as a2,zs as a3,Cs as a4,$ as a5,Xs as a6,Hs as a7,Gs as a8,Is as a9,es as aa,js as ab,cs as ac,As as ad,Ms as ae,Ks as af,ws as ag,os as ah,Rs as ai,ds as aj,qs as ak,Bs as al,Ps as am,J as an,Z as ao,$s as ap,as as aq,is as b,_s as c,vs as d,Vs as e,x as f,ts as g,I as h,Y as i,ns as j,Es as k,us as l,Ls as m,gs as n,T as o,S as p,j as q,N as r,H as s,Os as t,w as u,hs as v,C as w,U as x,Ys as y,O as z};
