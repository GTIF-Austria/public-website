var cn=Object.defineProperty;var Ii=i=>{throw TypeError(i)};var dn=(i,t,e)=>t in i?cn(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var O=(i,t,e)=>dn(i,typeof t!="symbol"?t+"":t,e),ri=(i,t,e)=>t.has(i)||Ii("Cannot "+e);var S=(i,t,e)=>(ri(i,t,"read from private field"),e?e.call(i):t.get(i)),T=(i,t,e)=>t.has(i)?Ii("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),bt=(i,t,e,r)=>(ri(i,t,"write to private field"),r?r.call(i,e):t.set(i,e),e),R=(i,t,e)=>(ri(i,t,"access private method"),e);import{E as tt,x as m,T as Qt,r as ot,i as $i,b as pt,f as un,u as hn}from"./lit-element.Deg-YTNa.js";import{e as ir,i as rr,t as Ot,n as F}from"./directive.qnhzJN6s.js";import{s as pn,a as nr,_ as fn,c as gn,d as qt}from"./radio.style.BrcTE7t6.js";import{f as mn,m as yn}from"./toolcool-range-slider.min.Ch_Z5G3w.js";import{o as we,a as bn}from"./map.ZocK5lBO.js";import{c as Ut,g as Ti}from"./commonjsHelpers.BosuxZz1.js";import{s as or,a as vn,l as yi,i as ar,q as wn,t as xn,o as Sn,p as En,f as Cn}from"./sequential.CgWxMpkl.js";import{g as bi}from"./getElement.BTPto6G5.js";import{L as Vi}from"./Group.DOXtryoE.js";import{s as $n,a as Tn,h as Bi,j as Ni,k as _n,f as An,n as Dn,o as kn}from"./eo-dash.CCBfNjz6.js";import{h as Ln,p as Rn,c as Hi,o as Fi,e as Pn,K as Mn,k as On}from"./framework.Ckmccr7c.js";/**
 * wms-capabilities @0.6.0
 * @description WMS service Capabilities > JSON, based on openlayers 
 * @license BSD-2-Clause
 * @preserve
 */var E=i=>i!==void 0,sr=(i,t,e)=>t in i?i[t]:i[t]=e;const le={ELEMENT:1,TEXT:3,CDATA_SECTION:4};class In{constructor(t){this._parser=new t}toDocument(t){return this._parser.parseFromString(t,"application/xml")}getAllTextContent(t,e){return ei(t,e).join("")}}function ei(i,t){return lr(i,t,[]).join("")}function lr(i,t,e){if(i.nodeType===le.CDATA_SECTION||i.nodeType===le.TEXT)t?e.push(String(i.nodeValue).replace(/(\r\n|\r|\n)/g,"")):e.push(i.nodeValue);else{var r;for(r=i.firstChild;r;r=r.nextSibling)lr(r,t,e)}return e}function Vn(i,t,e,r){for(var n=Bn(t);n;n=Nn(n)){var o=n.namespaceURI||null,a=i[o];if(E(a)){var s=a[n.localName];E(s)&&s.call(r,n,e)}}}function Bn(i){let t=i.firstElementChild||i.firstChild;for(;t&&t.nodeType!==le.ELEMENT;)t=t.nextSibling;return t}function Nn(i){let t=i.nextElementSibling||i.nextSibling;for(;t&&t.nodeType!==le.ELEMENT;)t=t.nextSibling;return t}function Y(i,t,e){return Hn(i,t,e)}function Hn(i,t,e){var r=E(e)?e:{},n,o;for(n=0,o=i.length;n<o;++n)r[i[n]]=t;return r}function cr(i,t){return function(e,r){var n=i.call(E(t)?t:this,e,r);if(E(n)){var o=r[r.length-1];o.push(n)}}}function z(i,t,e,r,n){return r.push(i),Vn(t,e,r,n),r.pop()}function g(i,t,e){return function(r,n){let o=i.call(E(e)?e:this,r,n);if(E(o)){var a=n[n.length-1],s=E(t)?t:r.localName;a[s]=o}}}function rt(i,t,e){return function(r,n){var o=i.call(E(e)?e:this,r,n);if(E(o)){var a=n[n.length-1],s=E(t)?t:r.localName,l=sr(a,s,[]);l.push(o)}}}const Fn=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function Un(i){return i.replace(Fn,"")}function Vt(i){const t=/^\s*(true|1)|(false|0)\s*$/.exec(i);if(t)return E(t[1])||!1}function zt(i){return wt(ei(i,!1))}function wt(i){const t=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(i);if(t)return parseFloat(t[1])}function ni(i){return _e(ei(i,!1))}function _e(i){const t=/^\s*(\d+)\s*$/.exec(i);if(t)return parseInt(t[1],10)}function _(i){return Un(ei(i,!1))}const zn="http://www.w3.org/1999/xlink";function _i(i){return i.getAttributeNS(zn,"href")}function jn(i,t){return z({},bo,i,t)}function dr(i){return[wt(i.getAttribute("minx")),wt(i.getAttribute("miny")),wt(i.getAttribute("maxx")),wt(i.getAttribute("maxy"))]}function qn(i,t){const e=dr(i),r=[wt(i.getAttribute("resx")),wt(i.getAttribute("resy"))];return{crs:i.getAttribute("CRS")||i.getAttribute("SRS"),extent:e,res:r}}function Yn(i,t){const e=dr(i);if(!(!E(e[0])||!E(e[1])||!E(e[2])||!E(e[3])))return e}function Zn(i,t){const e=parseFloat(i.getAttribute("min")),r=parseFloat(i.getAttribute("max"));return{min:e,max:r}}function Xn(i,t){const e=z({},vo,i,t);if(!E(e))return;const r=e.westBoundLongitude,n=e.southBoundLatitude,o=e.eastBoundLongitude,a=e.northBoundLatitude;if(!(!E(r)||!E(n)||!E(o)||!E(a)))return[r,n,o,a]}function Wn(i,t){return z({},ho,i,t)}function Gn(i,t){return z({},po,i,t)}function Jn(i,t){return z({},fo,i,t)}function Kn(i,t){return z({},go,i,t)}function Qn(i,t){return z({},mo,i,t)}function to(i,t){return z([],yo,i,t)}function eo(i,t){const e=Vt(i.getAttribute("queryable"));return z({queryable:E(e)?e:!1},pr,i,t)}function io(i,t){var e=t[t.length-1];const r=z({},pr,i,t);if(!E(r))return;let n=Vt(i.getAttribute("queryable"));E(n)||(n=e.queryable),r.queryable=E(n)?n:!1;let o=_e(i.getAttribute("cascaded"));E(o)||(o=e.cascaded),r.cascaded=o;let a=Vt(i.getAttribute("opaque"));E(a)||(a=e.opaque),r.opaque=E(a)?a:!1;let s=Vt(i.getAttribute("noSubsets"));E(s)||(s=e.noSubsets),r.noSubsets=E(s)?s:!1;let l=wt(i.getAttribute("fixedWidth"));E(l)||(l=e.fixedWidth),r.fixedWidth=l;let c=wt(i.getAttribute("fixedHeight"));E(c)||(c=e.fixedHeight),r.fixedHeight=c;const u=["Style","CRS","AuthorityURL"];for(let p=0,f=u.length;p<f;p++){const y=u[p],w=e[y];if(E(w)){let k=sr(r,y,[]);k=k.concat(w),r[y]=k}}const d=["EX_GeographicBoundingBox","BoundingBox","Dimension","Attribution","MinScaleDenominator","MaxScaleDenominator"];for(let p=0,f=d.length;p<f;p++){const y=d[p],w=r[y];if(!E(w)){const k=e[y];r[y]=k}}return r}function ro(i,t){return{name:i.getAttribute("name"),units:i.getAttribute("units"),unitSymbol:i.getAttribute("unitSymbol"),default:i.getAttribute("default"),multipleValues:Vt(i.getAttribute("multipleValues")),nearestValue:Vt(i.getAttribute("nearestValue")),current:Vt(i.getAttribute("current")),values:_(i)}}function St(i,t){return z({},$o,i,t)}function no(i,t){return z({},wo,i,t)}function oo(i,t){return z({},So,i,t)}function ao(i,t){return z({},Eo,i,t)}function oi(i,t){return z({},xo,i,t)}function ur(i,t){var e=St(i,t);if(E(e)){const r=[_e(i.getAttribute("width")),_e(i.getAttribute("height"))];return e.size=r,e}}function so(i,t){var e=St(i,t);if(E(e))return e.name=i.getAttribute("name"),e}function lo(i,t){var e=St(i,t);if(E(e))return e.type=i.getAttribute("type"),e}function co(i,t){return z({},Co,i,t)}function hr(i,t){return z([],To,i,t)}const Z=[null,"http://www.opengis.net/wms"],uo=Y(Z,{Service:g(Gn),Capability:g(Wn)}),ho=Y(Z,{Request:g(no),Exception:g(to),Layer:g(eo)}),po=Y(Z,{Name:g(_),Title:g(_),Abstract:g(_),KeywordList:g(hr),OnlineResource:g(_i),ContactInformation:g(Jn),Fees:g(_),AccessConstraints:g(_),LayerLimit:g(ni),MaxWidth:g(ni),MaxHeight:g(ni)}),fo=Y(Z,{ContactPersonPrimary:g(Kn),ContactPosition:g(_),ContactAddress:g(Qn),ContactVoiceTelephone:g(_),ContactFacsimileTelephone:g(_),ContactElectronicMailAddress:g(_)}),go=Y(Z,{ContactPerson:g(_),ContactOrganization:g(_)}),mo=Y(Z,{AddressType:g(_),Address:g(_),City:g(_),StateOrProvince:g(_),PostCode:g(_),Country:g(_)}),yo=Y(Z,{Format:cr(_)}),pr=Y(Z,{Name:g(_),Title:g(_),Abstract:g(_),KeywordList:g(hr),CRS:rt(_),SRS:rt(_),EX_GeographicBoundingBox:g(Xn),LatLonBoundingBox:g(Yn),BoundingBox:rt(qn),Dimension:rt(ro),Attribution:g(jn),AuthorityURL:rt(so),Identifier:rt(_),MetadataURL:rt(lo),DataURL:rt(St),FeatureListURL:rt(St),Style:rt(co),MinScaleDenominator:g(zt),MaxScaleDenominator:g(zt),ScaleHint:g(Zn),Layer:rt(io)}),bo=Y(Z,{Title:g(_),OnlineResource:g(_i),LogoURL:g(ur)}),vo=Y(Z,{westBoundLongitude:g(zt),eastBoundLongitude:g(zt),southBoundLatitude:g(zt),northBoundLatitude:g(zt)}),wo=Y(Z,{GetCapabilities:g(oi),GetMap:g(oi),GetFeatureInfo:g(oi)}),xo=Y(Z,{Format:rt(_),DCPType:rt(oo)}),So=Y(Z,{HTTP:g(ao)}),Eo=Y(Z,{Get:g(St),Post:g(St)}),Co=Y(Z,{Name:g(_),Title:g(_),Abstract:g(_),LegendURL:rt(ur),StyleSheetURL:g(St),StyleURL:g(St)}),$o=Y(Z,{Format:g(_),OnlineResource:g(_i)}),To=Y(Z,{Keyword:cr(_)});class _o{constructor(t,e){!e&&typeof window<"u"&&(e=window.DOMParser),this.version=void 0,this._parser=new In(e),this._data=t}data(t){return this._data=t,this}toJSON(t){return t=t||this._data,this.parse(t)}parse(t){return this.readFromDocument(this._parser.toDocument(t))}readFromDocument(t){for(let e=t.firstChild;e;e=e.nextSibling)if(e.nodeType==le.ELEMENT)return this.readFromNode(e);return null}readFromNode(t){return this.version=t.getAttribute("version"),z({version:this.version},uo,t,[])||null}}async function Ao(i){let t=new URL(i),e=t.searchParams;e.set("SERVICE","WMS"),e.set("REQUEST","GetCapabilities");let r=t.toString();const n=await fetch(r);if(n.ok){const o=await n.text();return new _o(o).toJSON()}else throw new Error(`Error: ${n.status}`)}function Ai(i){const t=/\b(?:wms|ows)\b/i,e=/{(?:z|x|y-?)}\/{(?:z|x|y-?)}\/{(?:z|x|y-?)}/i;return t.test(i)?"TileWMS":e.test(i)?"XYZ":!1}function Do(i){const e=/^(?:(?:https?|ftp):\/\/|\/\/)?(?:localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:\w+[\w-]*\.)+\w+)(?::\d+)?(?:\/\S*)?$/.test(i),r=Ai(i);return!!(i&&e&&r)}function fr(i){return i.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,'"$2": ').replace(/,\s*}/g,"}").replace(/,\s*]/g,"]").replace(/\s*(\{|}|\[|\]|,)\s*/g,"$1").replaceAll('": //',"://")}function ko(i){try{return JSON.parse(fr(i)),!!i}catch{return!1}}function Lo(i,t){const e=new URL(i).searchParams;Object.entries(t).forEach(([a,s])=>{typeof s=="object"&&!Array.isArray(s)&&s!==null?Object.keys(s).forEach(l=>{e.set(l,s[l])}):e.set(a,s)});const r=i.split("?")[0],n=e.toString();return`${r}?${n}`}/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function Ui(i,t){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(i,n).enumerable})),e.push.apply(e,r)}return e}function mt(i){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Ui(Object(e),!0).forEach(function(r){Ro(i,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):Ui(Object(e)).forEach(function(r){Object.defineProperty(i,r,Object.getOwnPropertyDescriptor(e,r))})}return i}function xe(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?xe=function(t){return typeof t}:xe=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xe(i)}function Ro(i,t,e){return t in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e,i}function Et(){return Et=Object.assign||function(i){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=e[r])}return i},Et.apply(this,arguments)}function Po(i,t){if(i==null)return{};var e={},r=Object.keys(i),n,o;for(o=0;o<r.length;o++)n=r[o],!(t.indexOf(n)>=0)&&(e[n]=i[n]);return e}function Mo(i,t){if(i==null)return{};var e=Po(i,t),r,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(i);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(i,r)&&(e[r]=i[r])}return e}var Oo="1.15.6";function xt(i){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(i)}var Ct=xt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),he=xt(/Edge/i),zi=xt(/firefox/i),re=xt(/safari/i)&&!xt(/chrome/i)&&!xt(/android/i),Di=xt(/iP(ad|od|hone)/i),gr=xt(/chrome/i)&&xt(/android/i),mr={capture:!1,passive:!1};function $(i,t,e){i.addEventListener(t,e,!Ct&&mr)}function C(i,t,e){i.removeEventListener(t,e,!Ct&&mr)}function Ae(i,t){if(t){if(t[0]===">"&&(t=t.substring(1)),i)try{if(i.matches)return i.matches(t);if(i.msMatchesSelector)return i.msMatchesSelector(t);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(t)}catch{return!1}return!1}}function yr(i){return i.host&&i!==document&&i.host.nodeType?i.host:i.parentNode}function ht(i,t,e,r){if(i){e=e||document;do{if(t!=null&&(t[0]===">"?i.parentNode===e&&Ae(i,t):Ae(i,t))||r&&i===e)return i;if(i===e)break}while(i=yr(i))}return null}var ji=/\s+/g;function at(i,t,e){if(i&&t)if(i.classList)i.classList[e?"add":"remove"](t);else{var r=(" "+i.className+" ").replace(ji," ").replace(" "+t+" "," ");i.className=(r+(e?" "+t:"")).replace(ji," ")}}function b(i,t,e){var r=i&&i.style;if(r){if(e===void 0)return document.defaultView&&document.defaultView.getComputedStyle?e=document.defaultView.getComputedStyle(i,""):i.currentStyle&&(e=i.currentStyle),t===void 0?e:e[t];!(t in r)&&t.indexOf("webkit")===-1&&(t="-webkit-"+t),r[t]=e+(typeof e=="string"?"":"px")}}function Yt(i,t){var e="";if(typeof i=="string")e=i;else do{var r=b(i,"transform");r&&r!=="none"&&(e=r+" "+e)}while(!t&&(i=i.parentNode));var n=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return n&&new n(e)}function br(i,t,e){if(i){var r=i.getElementsByTagName(t),n=0,o=r.length;if(e)for(;n<o;n++)e(r[n],n);return r}return[]}function gt(){var i=document.scrollingElement;return i||document.documentElement}function H(i,t,e,r,n){if(!(!i.getBoundingClientRect&&i!==window)){var o,a,s,l,c,u,d;if(i!==window&&i.parentNode&&i!==gt()?(o=i.getBoundingClientRect(),a=o.top,s=o.left,l=o.bottom,c=o.right,u=o.height,d=o.width):(a=0,s=0,l=window.innerHeight,c=window.innerWidth,u=window.innerHeight,d=window.innerWidth),(t||e)&&i!==window&&(n=n||i.parentNode,!Ct))do if(n&&n.getBoundingClientRect&&(b(n,"transform")!=="none"||e&&b(n,"position")!=="static")){var p=n.getBoundingClientRect();a-=p.top+parseInt(b(n,"border-top-width")),s-=p.left+parseInt(b(n,"border-left-width")),l=a+o.height,c=s+o.width;break}while(n=n.parentNode);if(r&&i!==window){var f=Yt(n||i),y=f&&f.a,w=f&&f.d;f&&(a/=w,s/=y,d/=y,u/=w,l=a+u,c=s+d)}return{top:a,left:s,bottom:l,right:c,width:d,height:u}}}function qi(i,t,e){for(var r=kt(i,!0),n=H(i)[t];r;){var o=H(r)[e],a=void 0;if(a=n>=o,!a)return r;if(r===gt())break;r=kt(r,!1)}return!1}function Xt(i,t,e,r){for(var n=0,o=0,a=i.children;o<a.length;){if(a[o].style.display!=="none"&&a[o]!==v.ghost&&(r||a[o]!==v.dragged)&&ht(a[o],e.draggable,i,!1)){if(n===t)return a[o];n++}o++}return null}function ki(i,t){for(var e=i.lastElementChild;e&&(e===v.ghost||b(e,"display")==="none"||t&&!Ae(e,t));)e=e.previousElementSibling;return e||null}function lt(i,t){var e=0;if(!i||!i.parentNode)return-1;for(;i=i.previousElementSibling;)i.nodeName.toUpperCase()!=="TEMPLATE"&&i!==v.clone&&(!t||Ae(i,t))&&e++;return e}function Yi(i){var t=0,e=0,r=gt();if(i)do{var n=Yt(i),o=n.a,a=n.d;t+=i.scrollLeft*o,e+=i.scrollTop*a}while(i!==r&&(i=i.parentNode));return[t,e]}function Io(i,t){for(var e in i)if(i.hasOwnProperty(e)){for(var r in t)if(t.hasOwnProperty(r)&&t[r]===i[e][r])return Number(e)}return-1}function kt(i,t){if(!i||!i.getBoundingClientRect)return gt();var e=i,r=!1;do if(e.clientWidth<e.scrollWidth||e.clientHeight<e.scrollHeight){var n=b(e);if(e.clientWidth<e.scrollWidth&&(n.overflowX=="auto"||n.overflowX=="scroll")||e.clientHeight<e.scrollHeight&&(n.overflowY=="auto"||n.overflowY=="scroll")){if(!e.getBoundingClientRect||e===document.body)return gt();if(r||t)return e;r=!0}}while(e=e.parentNode);return gt()}function Vo(i,t){if(i&&t)for(var e in t)t.hasOwnProperty(e)&&(i[e]=t[e]);return i}function ai(i,t){return Math.round(i.top)===Math.round(t.top)&&Math.round(i.left)===Math.round(t.left)&&Math.round(i.height)===Math.round(t.height)&&Math.round(i.width)===Math.round(t.width)}var ne;function vr(i,t){return function(){if(!ne){var e=arguments,r=this;e.length===1?i.call(r,e[0]):i.apply(r,e),ne=setTimeout(function(){ne=void 0},t)}}}function Bo(){clearTimeout(ne),ne=void 0}function wr(i,t,e){i.scrollLeft+=t,i.scrollTop+=e}function xr(i){var t=window.Polymer,e=window.jQuery||window.Zepto;return t&&t.dom?t.dom(i).cloneNode(!0):e?e(i).clone(!0)[0]:i.cloneNode(!0)}function Sr(i,t,e){var r={};return Array.from(i.children).forEach(function(n){var o,a,s,l;if(!(!ht(n,t.draggable,i,!1)||n.animated||n===e)){var c=H(n);r.left=Math.min((o=r.left)!==null&&o!==void 0?o:1/0,c.left),r.top=Math.min((a=r.top)!==null&&a!==void 0?a:1/0,c.top),r.right=Math.max((s=r.right)!==null&&s!==void 0?s:-1/0,c.right),r.bottom=Math.max((l=r.bottom)!==null&&l!==void 0?l:-1/0,c.bottom)}}),r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}var nt="Sortable"+new Date().getTime();function No(){var i=[],t;return{captureAnimationState:function(){if(i=[],!!this.options.animation){var r=[].slice.call(this.el.children);r.forEach(function(n){if(!(b(n,"display")==="none"||n===v.ghost)){i.push({target:n,rect:H(n)});var o=mt({},i[i.length-1].rect);if(n.thisAnimationDuration){var a=Yt(n,!0);a&&(o.top-=a.f,o.left-=a.e)}n.fromRect=o}})}},addAnimationState:function(r){i.push(r)},removeAnimationState:function(r){i.splice(Io(i,{target:r}),1)},animateAll:function(r){var n=this;if(!this.options.animation){clearTimeout(t),typeof r=="function"&&r();return}var o=!1,a=0;i.forEach(function(s){var l=0,c=s.target,u=c.fromRect,d=H(c),p=c.prevFromRect,f=c.prevToRect,y=s.rect,w=Yt(c,!0);w&&(d.top-=w.f,d.left-=w.e),c.toRect=d,c.thisAnimationDuration&&ai(p,d)&&!ai(u,d)&&(y.top-d.top)/(y.left-d.left)===(u.top-d.top)/(u.left-d.left)&&(l=Fo(y,p,f,n.options)),ai(d,u)||(c.prevFromRect=u,c.prevToRect=d,l||(l=n.options.animation),n.animate(c,y,d,l)),l&&(o=!0,a=Math.max(a,l),clearTimeout(c.animationResetTimer),c.animationResetTimer=setTimeout(function(){c.animationTime=0,c.prevFromRect=null,c.fromRect=null,c.prevToRect=null,c.thisAnimationDuration=null},l),c.thisAnimationDuration=l)}),clearTimeout(t),o?t=setTimeout(function(){typeof r=="function"&&r()},a):typeof r=="function"&&r(),i=[]},animate:function(r,n,o,a){if(a){b(r,"transition",""),b(r,"transform","");var s=Yt(this.el),l=s&&s.a,c=s&&s.d,u=(n.left-o.left)/(l||1),d=(n.top-o.top)/(c||1);r.animatingX=!!u,r.animatingY=!!d,b(r,"transform","translate3d("+u+"px,"+d+"px,0)"),this.forRepaintDummy=Ho(r),b(r,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),b(r,"transform","translate3d(0,0,0)"),typeof r.animated=="number"&&clearTimeout(r.animated),r.animated=setTimeout(function(){b(r,"transition",""),b(r,"transform",""),r.animated=!1,r.animatingX=!1,r.animatingY=!1},a)}}}}function Ho(i){return i.offsetWidth}function Fo(i,t,e,r){return Math.sqrt(Math.pow(t.top-i.top,2)+Math.pow(t.left-i.left,2))/Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))*r.animation}var Bt=[],si={initializeByDefault:!0},pe={mount:function(t){for(var e in si)si.hasOwnProperty(e)&&!(e in t)&&(t[e]=si[e]);Bt.forEach(function(r){if(r.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),Bt.push(t)},pluginEvent:function(t,e,r){var n=this;this.eventCanceled=!1,r.cancel=function(){n.eventCanceled=!0};var o=t+"Global";Bt.forEach(function(a){e[a.pluginName]&&(e[a.pluginName][o]&&e[a.pluginName][o](mt({sortable:e},r)),e.options[a.pluginName]&&e[a.pluginName][t]&&e[a.pluginName][t](mt({sortable:e},r)))})},initializePlugins:function(t,e,r,n){Bt.forEach(function(s){var l=s.pluginName;if(!(!t.options[l]&&!s.initializeByDefault)){var c=new s(t,e,t.options);c.sortable=t,c.options=t.options,t[l]=c,Et(r,c.defaults)}});for(var o in t.options)if(t.options.hasOwnProperty(o)){var a=this.modifyOption(t,o,t.options[o]);typeof a<"u"&&(t.options[o]=a)}},getEventProperties:function(t,e){var r={};return Bt.forEach(function(n){typeof n.eventProperties=="function"&&Et(r,n.eventProperties.call(e[n.pluginName],t))}),r},modifyOption:function(t,e,r){var n;return Bt.forEach(function(o){t[o.pluginName]&&o.optionListeners&&typeof o.optionListeners[e]=="function"&&(n=o.optionListeners[e].call(t[o.pluginName],r))}),n}};function Uo(i){var t=i.sortable,e=i.rootEl,r=i.name,n=i.targetEl,o=i.cloneEl,a=i.toEl,s=i.fromEl,l=i.oldIndex,c=i.newIndex,u=i.oldDraggableIndex,d=i.newDraggableIndex,p=i.originalEvent,f=i.putSortable,y=i.extraEventProperties;if(t=t||e&&e[nt],!!t){var w,k=t.options,B="on"+r.charAt(0).toUpperCase()+r.substr(1);window.CustomEvent&&!Ct&&!he?w=new CustomEvent(r,{bubbles:!0,cancelable:!0}):(w=document.createEvent("Event"),w.initEvent(r,!0,!0)),w.to=a||e,w.from=s||e,w.item=n||e,w.clone=o,w.oldIndex=l,w.newIndex=c,w.oldDraggableIndex=u,w.newDraggableIndex=d,w.originalEvent=p,w.pullMode=f?f.lastPutMode:void 0;var D=mt(mt({},y),pe.getEventProperties(r,t));for(var W in D)w[W]=D[W];e&&e.dispatchEvent(w),k[B]&&k[B].call(t,w)}}var zo=["evt"],it=function(t,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=r.evt,o=Mo(r,zo);pe.pluginEvent.bind(v)(t,e,mt({dragEl:h,parentEl:I,ghostEl:x,rootEl:L,nextEl:It,lastDownEl:Se,cloneEl:P,cloneHidden:At,dragStarted:te,putSortable:j,activeSortable:v.active,originalEvent:n,oldIndex:jt,oldDraggableIndex:oe,newIndex:st,newDraggableIndex:_t,hideGhostForTarget:Tr,unhideGhostForTarget:_r,cloneNowHidden:function(){At=!0},cloneNowShown:function(){At=!1},dispatchSortableEvent:function(s){Q({sortable:e,name:s,originalEvent:n})}},o))};function Q(i){Uo(mt({putSortable:j,cloneEl:P,targetEl:h,rootEl:L,oldIndex:jt,oldDraggableIndex:oe,newIndex:st,newDraggableIndex:_t},i))}var h,I,x,L,It,Se,P,At,jt,st,oe,_t,ge,j,Ht=!1,De=!1,ke=[],Pt,ut,li,ci,Zi,Xi,te,Nt,ae,se=!1,me=!1,Ee,K,di=[],vi=!1,Le=[],ii=typeof document<"u",ye=Di,Wi=he||Ct?"cssFloat":"float",jo=ii&&!gr&&!Di&&"draggable"in document.createElement("div"),Er=function(){if(ii){if(Ct)return!1;var i=document.createElement("x");return i.style.cssText="pointer-events:auto",i.style.pointerEvents==="auto"}}(),Cr=function(t,e){var r=b(t),n=parseInt(r.width)-parseInt(r.paddingLeft)-parseInt(r.paddingRight)-parseInt(r.borderLeftWidth)-parseInt(r.borderRightWidth),o=Xt(t,0,e),a=Xt(t,1,e),s=o&&b(o),l=a&&b(a),c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+H(o).width,u=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+H(a).width;if(r.display==="flex")return r.flexDirection==="column"||r.flexDirection==="column-reverse"?"vertical":"horizontal";if(r.display==="grid")return r.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(o&&s.float&&s.float!=="none"){var d=s.float==="left"?"left":"right";return a&&(l.clear==="both"||l.clear===d)?"vertical":"horizontal"}return o&&(s.display==="block"||s.display==="flex"||s.display==="table"||s.display==="grid"||c>=n&&r[Wi]==="none"||a&&r[Wi]==="none"&&c+u>n)?"vertical":"horizontal"},qo=function(t,e,r){var n=r?t.left:t.top,o=r?t.right:t.bottom,a=r?t.width:t.height,s=r?e.left:e.top,l=r?e.right:e.bottom,c=r?e.width:e.height;return n===s||o===l||n+a/2===s+c/2},Yo=function(t,e){var r;return ke.some(function(n){var o=n[nt].options.emptyInsertThreshold;if(!(!o||ki(n))){var a=H(n),s=t>=a.left-o&&t<=a.right+o,l=e>=a.top-o&&e<=a.bottom+o;if(s&&l)return r=n}}),r},$r=function(t){function e(o,a){return function(s,l,c,u){var d=s.options.group.name&&l.options.group.name&&s.options.group.name===l.options.group.name;if(o==null&&(a||d))return!0;if(o==null||o===!1)return!1;if(a&&o==="clone")return o;if(typeof o=="function")return e(o(s,l,c,u),a)(s,l,c,u);var p=(a?s:l).options.group.name;return o===!0||typeof o=="string"&&o===p||o.join&&o.indexOf(p)>-1}}var r={},n=t.group;(!n||xe(n)!="object")&&(n={name:n}),r.name=n.name,r.checkPull=e(n.pull,!0),r.checkPut=e(n.put),r.revertClone=n.revertClone,t.group=r},Tr=function(){!Er&&x&&b(x,"display","none")},_r=function(){!Er&&x&&b(x,"display","")};ii&&!gr&&document.addEventListener("click",function(i){if(De)return i.preventDefault(),i.stopPropagation&&i.stopPropagation(),i.stopImmediatePropagation&&i.stopImmediatePropagation(),De=!1,!1},!0);var Mt=function(t){if(h){t=t.touches?t.touches[0]:t;var e=Yo(t.clientX,t.clientY);if(e){var r={};for(var n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);r.target=r.rootEl=e,r.preventDefault=void 0,r.stopPropagation=void 0,e[nt]._onDragOver(r)}}},Zo=function(t){h&&h.parentNode[nt]._isOutsideThisEl(t.target)};function v(i,t){if(!(i&&i.nodeType&&i.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(i));this.el=i,this.options=t=Et({},t),i[nt]=this;var e={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(i.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Cr(i,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,s){a.setData("Text",s.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:v.supportPointer!==!1&&"PointerEvent"in window&&(!re||Di),emptyInsertThreshold:5};pe.initializePlugins(this,i,e);for(var r in e)!(r in t)&&(t[r]=e[r]);$r(t);for(var n in this)n.charAt(0)==="_"&&typeof this[n]=="function"&&(this[n]=this[n].bind(this));this.nativeDraggable=t.forceFallback?!1:jo,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?$(i,"pointerdown",this._onTapStart):($(i,"mousedown",this._onTapStart),$(i,"touchstart",this._onTapStart)),this.nativeDraggable&&($(i,"dragover",this),$(i,"dragenter",this)),ke.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),Et(this,No())}v.prototype={constructor:v,_isOutsideThisEl:function(t){!this.el.contains(t)&&t!==this.el&&(Nt=null)},_getDirection:function(t,e){return typeof this.options.direction=="function"?this.options.direction.call(this,t,e,h):this.options.direction},_onTapStart:function(t){if(t.cancelable){var e=this,r=this.el,n=this.options,o=n.preventOnFilter,a=t.type,s=t.touches&&t.touches[0]||t.pointerType&&t.pointerType==="touch"&&t,l=(s||t).target,c=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||l,u=n.filter;if(ea(r),!h&&!(/mousedown|pointerdown/.test(a)&&t.button!==0||n.disabled)&&!c.isContentEditable&&!(!this.nativeDraggable&&re&&l&&l.tagName.toUpperCase()==="SELECT")&&(l=ht(l,n.draggable,r,!1),!(l&&l.animated)&&Se!==l)){if(jt=lt(l),oe=lt(l,n.draggable),typeof u=="function"){if(u.call(this,t,l,this)){Q({sortable:e,rootEl:c,name:"filter",targetEl:l,toEl:r,fromEl:r}),it("filter",e,{evt:t}),o&&t.preventDefault();return}}else if(u&&(u=u.split(",").some(function(d){if(d=ht(c,d.trim(),r,!1),d)return Q({sortable:e,rootEl:d,name:"filter",targetEl:l,fromEl:r,toEl:r}),it("filter",e,{evt:t}),!0}),u)){o&&t.preventDefault();return}n.handle&&!ht(c,n.handle,r,!1)||this._prepareDragStart(t,s,l)}}},_prepareDragStart:function(t,e,r){var n=this,o=n.el,a=n.options,s=o.ownerDocument,l;if(r&&!h&&r.parentNode===o){var c=H(r);if(L=o,h=r,I=h.parentNode,It=h.nextSibling,Se=r,ge=a.group,v.dragged=h,Pt={target:h,clientX:(e||t).clientX,clientY:(e||t).clientY},Zi=Pt.clientX-c.left,Xi=Pt.clientY-c.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,h.style["will-change"]="all",l=function(){if(it("delayEnded",n,{evt:t}),v.eventCanceled){n._onDrop();return}n._disableDelayedDragEvents(),!zi&&n.nativeDraggable&&(h.draggable=!0),n._triggerDragStart(t,e),Q({sortable:n,name:"choose",originalEvent:t}),at(h,a.chosenClass,!0)},a.ignore.split(",").forEach(function(u){br(h,u.trim(),ui)}),$(s,"dragover",Mt),$(s,"mousemove",Mt),$(s,"touchmove",Mt),a.supportPointer?($(s,"pointerup",n._onDrop),!this.nativeDraggable&&$(s,"pointercancel",n._onDrop)):($(s,"mouseup",n._onDrop),$(s,"touchend",n._onDrop),$(s,"touchcancel",n._onDrop)),zi&&this.nativeDraggable&&(this.options.touchStartThreshold=4,h.draggable=!0),it("delayStart",this,{evt:t}),a.delay&&(!a.delayOnTouchOnly||e)&&(!this.nativeDraggable||!(he||Ct))){if(v.eventCanceled){this._onDrop();return}a.supportPointer?($(s,"pointerup",n._disableDelayedDrag),$(s,"pointercancel",n._disableDelayedDrag)):($(s,"mouseup",n._disableDelayedDrag),$(s,"touchend",n._disableDelayedDrag),$(s,"touchcancel",n._disableDelayedDrag)),$(s,"mousemove",n._delayedDragTouchMoveHandler),$(s,"touchmove",n._delayedDragTouchMoveHandler),a.supportPointer&&$(s,"pointermove",n._delayedDragTouchMoveHandler),n._dragStartTimer=setTimeout(l,a.delay)}else l()}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){h&&ui(h),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;C(t,"mouseup",this._disableDelayedDrag),C(t,"touchend",this._disableDelayedDrag),C(t,"touchcancel",this._disableDelayedDrag),C(t,"pointerup",this._disableDelayedDrag),C(t,"pointercancel",this._disableDelayedDrag),C(t,"mousemove",this._delayedDragTouchMoveHandler),C(t,"touchmove",this._delayedDragTouchMoveHandler),C(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||t.pointerType=="touch"&&t,!this.nativeDraggable||e?this.options.supportPointer?$(document,"pointermove",this._onTouchMove):e?$(document,"touchmove",this._onTouchMove):$(document,"mousemove",this._onTouchMove):($(h,"dragend",this),$(L,"dragstart",this._onDragStart));try{document.selection?Ce(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(t,e){if(Ht=!1,L&&h){it("dragStarted",this,{evt:e}),this.nativeDraggable&&$(document,"dragover",Zo);var r=this.options;!t&&at(h,r.dragClass,!1),at(h,r.ghostClass,!0),v.active=this,t&&this._appendGhost(),Q({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(ut){this._lastX=ut.clientX,this._lastY=ut.clientY,Tr();for(var t=document.elementFromPoint(ut.clientX,ut.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(ut.clientX,ut.clientY),t!==e);)e=t;if(h.parentNode[nt]._isOutsideThisEl(t),e)do{if(e[nt]){var r=void 0;if(r=e[nt]._onDragOver({clientX:ut.clientX,clientY:ut.clientY,target:t,rootEl:e}),r&&!this.options.dragoverBubble)break}t=e}while(e=yr(e));_r()}},_onTouchMove:function(t){if(Pt){var e=this.options,r=e.fallbackTolerance,n=e.fallbackOffset,o=t.touches?t.touches[0]:t,a=x&&Yt(x,!0),s=x&&a&&a.a,l=x&&a&&a.d,c=ye&&K&&Yi(K),u=(o.clientX-Pt.clientX+n.x)/(s||1)+(c?c[0]-di[0]:0)/(s||1),d=(o.clientY-Pt.clientY+n.y)/(l||1)+(c?c[1]-di[1]:0)/(l||1);if(!v.active&&!Ht){if(r&&Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))<r)return;this._onDragStart(t,!0)}if(x){a?(a.e+=u-(li||0),a.f+=d-(ci||0)):a={a:1,b:0,c:0,d:1,e:u,f:d};var p="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");b(x,"webkitTransform",p),b(x,"mozTransform",p),b(x,"msTransform",p),b(x,"transform",p),li=u,ci=d,ut=o}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!x){var t=this.options.fallbackOnBody?document.body:L,e=H(h,!0,ye,!0,t),r=this.options;if(ye){for(K=t;b(K,"position")==="static"&&b(K,"transform")==="none"&&K!==document;)K=K.parentNode;K!==document.body&&K!==document.documentElement?(K===document&&(K=gt()),e.top+=K.scrollTop,e.left+=K.scrollLeft):K=gt(),di=Yi(K)}x=h.cloneNode(!0),at(x,r.ghostClass,!1),at(x,r.fallbackClass,!0),at(x,r.dragClass,!0),b(x,"transition",""),b(x,"transform",""),b(x,"box-sizing","border-box"),b(x,"margin",0),b(x,"top",e.top),b(x,"left",e.left),b(x,"width",e.width),b(x,"height",e.height),b(x,"opacity","0.8"),b(x,"position",ye?"absolute":"fixed"),b(x,"zIndex","100000"),b(x,"pointerEvents","none"),v.ghost=x,t.appendChild(x),b(x,"transform-origin",Zi/parseInt(x.style.width)*100+"% "+Xi/parseInt(x.style.height)*100+"%")}},_onDragStart:function(t,e){var r=this,n=t.dataTransfer,o=r.options;if(it("dragStart",this,{evt:t}),v.eventCanceled){this._onDrop();return}it("setupClone",this),v.eventCanceled||(P=xr(h),P.removeAttribute("id"),P.draggable=!1,P.style["will-change"]="",this._hideClone(),at(P,this.options.chosenClass,!1),v.clone=P),r.cloneId=Ce(function(){it("clone",r),!v.eventCanceled&&(r.options.removeCloneOnHide||L.insertBefore(P,h),r._hideClone(),Q({sortable:r,name:"clone"}))}),!e&&at(h,o.dragClass,!0),e?(De=!0,r._loopId=setInterval(r._emulateDragOver,50)):(C(document,"mouseup",r._onDrop),C(document,"touchend",r._onDrop),C(document,"touchcancel",r._onDrop),n&&(n.effectAllowed="move",o.setData&&o.setData.call(r,n,h)),$(document,"drop",r),b(h,"transform","translateZ(0)")),Ht=!0,r._dragStartId=Ce(r._dragStarted.bind(r,e,t)),$(document,"selectstart",r),te=!0,window.getSelection().removeAllRanges(),re&&b(document.body,"user-select","none")},_onDragOver:function(t){var e=this.el,r=t.target,n,o,a,s=this.options,l=s.group,c=v.active,u=ge===l,d=s.sort,p=j||c,f,y=this,w=!1;if(vi)return;function k(Kt,sn){it(Kt,y,mt({evt:t,isOwner:u,axis:f?"vertical":"horizontal",revert:a,dragRect:n,targetRect:o,canSort:d,fromSortable:p,target:r,completed:D,onMove:function(Oi,ln){return be(L,e,h,n,Oi,H(Oi),t,ln)},changed:W},sn))}function B(){k("dragOverAnimationCapture"),y.captureAnimationState(),y!==p&&p.captureAnimationState()}function D(Kt){return k("dragOverCompleted",{insertion:Kt}),Kt&&(u?c._hideClone():c._showClone(y),y!==p&&(at(h,j?j.options.ghostClass:c.options.ghostClass,!1),at(h,s.ghostClass,!0)),j!==y&&y!==v.active?j=y:y===v.active&&j&&(j=null),p===y&&(y._ignoreWhileAnimating=r),y.animateAll(function(){k("dragOverAnimationComplete"),y._ignoreWhileAnimating=null}),y!==p&&(p.animateAll(),p._ignoreWhileAnimating=null)),(r===h&&!h.animated||r===e&&!r.animated)&&(Nt=null),!s.dragoverBubble&&!t.rootEl&&r!==document&&(h.parentNode[nt]._isOutsideThisEl(t.target),!Kt&&Mt(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),w=!0}function W(){st=lt(h),_t=lt(h,s.draggable),Q({sortable:y,name:"change",toEl:e,newIndex:st,newDraggableIndex:_t,originalEvent:t})}if(t.preventDefault!==void 0&&t.cancelable&&t.preventDefault(),r=ht(r,s.draggable,e,!0),k("dragOver"),v.eventCanceled)return w;if(h.contains(t.target)||r.animated&&r.animatingX&&r.animatingY||y._ignoreWhileAnimating===r)return D(!1);if(De=!1,c&&!s.disabled&&(u?d||(a=I!==L):j===this||(this.lastPutMode=ge.checkPull(this,c,h,t))&&l.checkPut(this,c,h,t))){if(f=this._getDirection(t,r)==="vertical",n=H(h),k("dragOverValid"),v.eventCanceled)return w;if(a)return I=L,B(),this._hideClone(),k("revert"),v.eventCanceled||(It?L.insertBefore(h,It):L.appendChild(h)),D(!0);var M=ki(e,s.draggable);if(!M||Jo(t,f,this)&&!M.animated){if(M===h)return D(!1);if(M&&e===t.target&&(r=M),r&&(o=H(r)),be(L,e,h,n,r,o,t,!!r)!==!1)return B(),M&&M.nextSibling?e.insertBefore(h,M.nextSibling):e.appendChild(h),I=e,W(),D(!0)}else if(M&&Go(t,f,this)){var et=Xt(e,0,s,!0);if(et===h)return D(!1);if(r=et,o=H(r),be(L,e,h,n,r,o,t,!1)!==!1)return B(),e.insertBefore(h,et),I=e,W(),D(!0)}else if(r.parentNode===e){o=H(r);var A=0,G,dt=h.parentNode!==e,J=!qo(h.animated&&h.toRect||n,r.animated&&r.toRect||o,f),Wt=f?"top":"left",$t=qi(r,"top","top")||qi(h,"top","top"),Gt=$t?$t.scrollTop:void 0;Nt!==r&&(G=o[Wt],se=!1,me=!J&&s.invertSwap||dt),A=Ko(t,r,o,f,J?1:s.swapThreshold,s.invertedSwapThreshold==null?s.swapThreshold:s.invertedSwapThreshold,me,Nt===r);var yt;if(A!==0){var Rt=lt(h);do Rt-=A,yt=I.children[Rt];while(yt&&(b(yt,"display")==="none"||yt===x))}if(A===0||yt===r)return D(!1);Nt=r,ae=A;var Jt=r.nextElementSibling,Tt=!1;Tt=A===1;var fe=be(L,e,h,n,r,o,t,Tt);if(fe!==!1)return(fe===1||fe===-1)&&(Tt=fe===1),vi=!0,setTimeout(Wo,30),B(),Tt&&!Jt?e.appendChild(h):r.parentNode.insertBefore(h,Tt?Jt:r),$t&&wr($t,0,Gt-$t.scrollTop),I=h.parentNode,G!==void 0&&!me&&(Ee=Math.abs(G-H(r)[Wt])),W(),D(!0)}if(e.contains(h))return D(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){C(document,"mousemove",this._onTouchMove),C(document,"touchmove",this._onTouchMove),C(document,"pointermove",this._onTouchMove),C(document,"dragover",Mt),C(document,"mousemove",Mt),C(document,"touchmove",Mt)},_offUpEvents:function(){var t=this.el.ownerDocument;C(t,"mouseup",this._onDrop),C(t,"touchend",this._onDrop),C(t,"pointerup",this._onDrop),C(t,"pointercancel",this._onDrop),C(t,"touchcancel",this._onDrop),C(document,"selectstart",this)},_onDrop:function(t){var e=this.el,r=this.options;if(st=lt(h),_t=lt(h,r.draggable),it("drop",this,{evt:t}),I=h&&h.parentNode,st=lt(h),_t=lt(h,r.draggable),v.eventCanceled){this._nulling();return}Ht=!1,me=!1,se=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),wi(this.cloneId),wi(this._dragStartId),this.nativeDraggable&&(C(document,"drop",this),C(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),re&&b(document.body,"user-select",""),b(h,"transform",""),t&&(te&&(t.cancelable&&t.preventDefault(),!r.dropBubble&&t.stopPropagation()),x&&x.parentNode&&x.parentNode.removeChild(x),(L===I||j&&j.lastPutMode!=="clone")&&P&&P.parentNode&&P.parentNode.removeChild(P),h&&(this.nativeDraggable&&C(h,"dragend",this),ui(h),h.style["will-change"]="",te&&!Ht&&at(h,j?j.options.ghostClass:this.options.ghostClass,!1),at(h,this.options.chosenClass,!1),Q({sortable:this,name:"unchoose",toEl:I,newIndex:null,newDraggableIndex:null,originalEvent:t}),L!==I?(st>=0&&(Q({rootEl:I,name:"add",toEl:I,fromEl:L,originalEvent:t}),Q({sortable:this,name:"remove",toEl:I,originalEvent:t}),Q({rootEl:I,name:"sort",toEl:I,fromEl:L,originalEvent:t}),Q({sortable:this,name:"sort",toEl:I,originalEvent:t})),j&&j.save()):st!==jt&&st>=0&&(Q({sortable:this,name:"update",toEl:I,originalEvent:t}),Q({sortable:this,name:"sort",toEl:I,originalEvent:t})),v.active&&((st==null||st===-1)&&(st=jt,_t=oe),Q({sortable:this,name:"end",toEl:I,originalEvent:t}),this.save()))),this._nulling()},_nulling:function(){it("nulling",this),L=h=I=x=It=P=Se=At=Pt=ut=te=st=_t=jt=oe=Nt=ae=j=ge=v.dragged=v.ghost=v.clone=v.active=null,Le.forEach(function(t){t.checked=!0}),Le.length=li=ci=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":h&&(this._onDragOver(t),Xo(t));break;case"selectstart":t.preventDefault();break}},toArray:function(){for(var t=[],e,r=this.el.children,n=0,o=r.length,a=this.options;n<o;n++)e=r[n],ht(e,a.draggable,this.el,!1)&&t.push(e.getAttribute(a.dataIdAttr)||ta(e));return t},sort:function(t,e){var r={},n=this.el;this.toArray().forEach(function(o,a){var s=n.children[a];ht(s,this.options.draggable,n,!1)&&(r[o]=s)},this),e&&this.captureAnimationState(),t.forEach(function(o){r[o]&&(n.removeChild(r[o]),n.appendChild(r[o]))}),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return ht(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var r=this.options;if(e===void 0)return r[t];var n=pe.modifyOption(this,t,e);typeof n<"u"?r[t]=n:r[t]=e,t==="group"&&$r(r)},destroy:function(){it("destroy",this);var t=this.el;t[nt]=null,C(t,"mousedown",this._onTapStart),C(t,"touchstart",this._onTapStart),C(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(C(t,"dragover",this),C(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(e){e.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),ke.splice(ke.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!At){if(it("hideClone",this),v.eventCanceled)return;b(P,"display","none"),this.options.removeCloneOnHide&&P.parentNode&&P.parentNode.removeChild(P),At=!0}},_showClone:function(t){if(t.lastPutMode!=="clone"){this._hideClone();return}if(At){if(it("showClone",this),v.eventCanceled)return;h.parentNode==L&&!this.options.group.revertClone?L.insertBefore(P,h):It?L.insertBefore(P,It):L.appendChild(P),this.options.group.revertClone&&this.animate(h,P),b(P,"display",""),At=!1}}};function Xo(i){i.dataTransfer&&(i.dataTransfer.dropEffect="move"),i.cancelable&&i.preventDefault()}function be(i,t,e,r,n,o,a,s){var l,c=i[nt],u=c.options.onMove,d;return window.CustomEvent&&!Ct&&!he?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=document.createEvent("Event"),l.initEvent("move",!0,!0)),l.to=t,l.from=i,l.dragged=e,l.draggedRect=r,l.related=n||t,l.relatedRect=o||H(t),l.willInsertAfter=s,l.originalEvent=a,i.dispatchEvent(l),u&&(d=u.call(c,l,a)),d}function ui(i){i.draggable=!1}function Wo(){vi=!1}function Go(i,t,e){var r=H(Xt(e.el,0,e.options,!0)),n=Sr(e.el,e.options,x),o=10;return t?i.clientX<n.left-o||i.clientY<r.top&&i.clientX<r.right:i.clientY<n.top-o||i.clientY<r.bottom&&i.clientX<r.left}function Jo(i,t,e){var r=H(ki(e.el,e.options.draggable)),n=Sr(e.el,e.options,x),o=10;return t?i.clientX>n.right+o||i.clientY>r.bottom&&i.clientX>r.left:i.clientY>n.bottom+o||i.clientX>r.right&&i.clientY>r.top}function Ko(i,t,e,r,n,o,a,s){var l=r?i.clientY:i.clientX,c=r?e.height:e.width,u=r?e.top:e.left,d=r?e.bottom:e.right,p=!1;if(!a){if(s&&Ee<c*n){if(!se&&(ae===1?l>u+c*o/2:l<d-c*o/2)&&(se=!0),se)p=!0;else if(ae===1?l<u+Ee:l>d-Ee)return-ae}else if(l>u+c*(1-n)/2&&l<d-c*(1-n)/2)return Qo(t)}return p=p||a,p&&(l<u+c*o/2||l>d-c*o/2)?l>u+c/2?1:-1:0}function Qo(i){return lt(h)<lt(i)?1:-1}function ta(i){for(var t=i.tagName+i.className+i.src+i.href+i.textContent,e=t.length,r=0;e--;)r+=t.charCodeAt(e);return r.toString(36)}function ea(i){Le.length=0;for(var t=i.getElementsByTagName("input"),e=t.length;e--;){var r=t[e];r.checked&&Le.push(r)}}function Ce(i){return setTimeout(i,0)}function wi(i){return clearTimeout(i)}ii&&$(document,"touchmove",function(i){(v.active||Ht)&&i.cancelable&&i.preventDefault()});v.utils={on:$,off:C,css:b,find:br,is:function(t,e){return!!ht(t,e,t,!1)},extend:Vo,throttle:vr,closest:ht,toggleClass:at,clone:xr,index:lt,nextTick:Ce,cancelNextTick:wi,detectDirection:Cr,getChild:Xt,expando:nt};v.get=function(i){return i[nt]};v.mount=function(){for(var i=arguments.length,t=new Array(i),e=0;e<i;e++)t[e]=arguments[e];t[0].constructor===Array&&(t=t[0]),t.forEach(function(r){if(!r.prototype||!r.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));r.utils&&(v.utils=mt(mt({},v.utils),r.utils)),pe.mount(r)})};v.create=function(i,t){return new v(i,t)};v.version=Oo;var N=[],ee,xi,Si=!1,hi,pi,Re,ie;function ia(){function i(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var t in this)t.charAt(0)==="_"&&typeof this[t]=="function"&&(this[t]=this[t].bind(this))}return i.prototype={dragStarted:function(e){var r=e.originalEvent;this.sortable.nativeDraggable?$(document,"dragover",this._handleAutoScroll):this.options.supportPointer?$(document,"pointermove",this._handleFallbackAutoScroll):r.touches?$(document,"touchmove",this._handleFallbackAutoScroll):$(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(e){var r=e.originalEvent;!this.options.dragOverBubble&&!r.rootEl&&this._handleAutoScroll(r)},drop:function(){this.sortable.nativeDraggable?C(document,"dragover",this._handleAutoScroll):(C(document,"pointermove",this._handleFallbackAutoScroll),C(document,"touchmove",this._handleFallbackAutoScroll),C(document,"mousemove",this._handleFallbackAutoScroll)),Gi(),$e(),Bo()},nulling:function(){Re=xi=ee=Si=ie=hi=pi=null,N.length=0},_handleFallbackAutoScroll:function(e){this._handleAutoScroll(e,!0)},_handleAutoScroll:function(e,r){var n=this,o=(e.touches?e.touches[0]:e).clientX,a=(e.touches?e.touches[0]:e).clientY,s=document.elementFromPoint(o,a);if(Re=e,r||this.options.forceAutoScrollFallback||he||Ct||re){fi(e,this.options,s,r);var l=kt(s,!0);Si&&(!ie||o!==hi||a!==pi)&&(ie&&Gi(),ie=setInterval(function(){var c=kt(document.elementFromPoint(o,a),!0);c!==l&&(l=c,$e()),fi(e,n.options,c,r)},10),hi=o,pi=a)}else{if(!this.options.bubbleScroll||kt(s,!0)===gt()){$e();return}fi(e,this.options,kt(s,!1),!1)}}},Et(i,{pluginName:"scroll",initializeByDefault:!0})}function $e(){N.forEach(function(i){clearInterval(i.pid)}),N=[]}function Gi(){clearInterval(ie)}var fi=vr(function(i,t,e,r){if(t.scroll){var n=(i.touches?i.touches[0]:i).clientX,o=(i.touches?i.touches[0]:i).clientY,a=t.scrollSensitivity,s=t.scrollSpeed,l=gt(),c=!1,u;xi!==e&&(xi=e,$e(),ee=t.scroll,u=t.scrollFn,ee===!0&&(ee=kt(e,!0)));var d=0,p=ee;do{var f=p,y=H(f),w=y.top,k=y.bottom,B=y.left,D=y.right,W=y.width,M=y.height,et=void 0,A=void 0,G=f.scrollWidth,dt=f.scrollHeight,J=b(f),Wt=f.scrollLeft,$t=f.scrollTop;f===l?(et=W<G&&(J.overflowX==="auto"||J.overflowX==="scroll"||J.overflowX==="visible"),A=M<dt&&(J.overflowY==="auto"||J.overflowY==="scroll"||J.overflowY==="visible")):(et=W<G&&(J.overflowX==="auto"||J.overflowX==="scroll"),A=M<dt&&(J.overflowY==="auto"||J.overflowY==="scroll"));var Gt=et&&(Math.abs(D-n)<=a&&Wt+W<G)-(Math.abs(B-n)<=a&&!!Wt),yt=A&&(Math.abs(k-o)<=a&&$t+M<dt)-(Math.abs(w-o)<=a&&!!$t);if(!N[d])for(var Rt=0;Rt<=d;Rt++)N[Rt]||(N[Rt]={});(N[d].vx!=Gt||N[d].vy!=yt||N[d].el!==f)&&(N[d].el=f,N[d].vx=Gt,N[d].vy=yt,clearInterval(N[d].pid),(Gt!=0||yt!=0)&&(c=!0,N[d].pid=setInterval((function(){r&&this.layer===0&&v.active._onTouchMove(Re);var Jt=N[this.layer].vy?N[this.layer].vy*s:0,Tt=N[this.layer].vx?N[this.layer].vx*s:0;typeof u=="function"&&u.call(v.dragged.parentNode[nt],Tt,Jt,i,Re,N[this.layer].el)!=="continue"||wr(N[this.layer].el,Tt,Jt)}).bind({layer:d}),24))),d++}while(t.bubbleScroll&&p!==l&&(p=kt(p,!1)));Si=c}},30),Ar=function(t){var e=t.originalEvent,r=t.putSortable,n=t.dragEl,o=t.activeSortable,a=t.dispatchSortableEvent,s=t.hideGhostForTarget,l=t.unhideGhostForTarget;if(e){var c=r||o;s();var u=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,d=document.elementFromPoint(u.clientX,u.clientY);l(),c&&!c.el.contains(d)&&(a("spill"),this.onSpill({dragEl:n,putSortable:r}))}};function Li(){}Li.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e},onSpill:function(t){var e=t.dragEl,r=t.putSortable;this.sortable.captureAnimationState(),r&&r.captureAnimationState();var n=Xt(this.sortable.el,this.startIndex,this.options);n?this.sortable.el.insertBefore(e,n):this.sortable.el.appendChild(e),this.sortable.animateAll(),r&&r.animateAll()},drop:Ar};Et(Li,{pluginName:"revertOnSpill"});function Ri(){}Ri.prototype={onSpill:function(t){var e=t.dragEl,r=t.putSortable,n=r||this.sortable;n.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),n.animateAll()},drop:Ar};Et(Ri,{pluginName:"removeOnSpill"});v.mount(new ia);v.mount(Ri,Li);const ra=i=>{const t=i.item;let e=Array.prototype.slice.call(t.parentNode.childNodes);return e=e.filter(r=>r.nodeType!=Node.ELEMENT_NODE||!r.classList.contains("sortable-fallback")),e},na=(i,t,e,r,n,o)=>{const s=i.item.parentNode;for(const w of e)s.appendChild(w);if(i.oldIndex==i.newIndex)return;const l=r.getArray(),c=i.item.querySelector("eox-layercontrol-layer").layer.get(n),u=l.find(w=>w.get(n)===c),d=o.dataset.layer,p=l.find(w=>w.get(n)==d);let f,y;for(f=0;f<l.length;f++)if(l[f]==u){r.removeAt(f);break}for(y=0;y<l.length;y++)if(l[y]===p){f>y?r.insertAt(y,u):r.insertAt(y+1,u);break}t.requestUpdate()};function oa(i,t,e,r){let n=[],o=null;i._sortable=v.create(i,{handle:".drag-handle",filter:".drag-handle.disabled",swapThreshold:.5,animation:150,easing:"cubic-bezier(1, 0, 0, 1)",onStart:a=>n=ra(a),onMove:a=>{o=a.related},onEnd:a=>na(a,r,n,t,e,o)})}function aa(i,t,e,r){const n=i.getArray();let o=!1;n.forEach(a=>{const s=a.ol_uid;a.get(t)||(a.set(t,s),o=!0),a.get(e)||(a.set(e,`layer ${s}`),o=!0),o&&r.requestUpdate()})}function Pi(i,t,e){let r=[];const n=(o,a,s)=>{r=[...r,...o.filter(c=>c.get(a)===s)];const l=o.filter(c=>c.getLayers);return l.length>0&&l.forEach(c=>n(c.getLayers().getArray(),a,s)),r};return n(i,t,e),r}function sa(i,t,e){if(!i||!t)return!1;if(!Dr(i,e))return!0;const r=i.get("minZoom"),n=i.get("maxZoom"),o=t.getView().getZoom();return o>r&&o<n}function Dr(i,t){const e=i.get("minZoom"),r=i.get("maxZoom");return!!(t&&(e!==-1/0||r!==1/0))}function la(i,t){var n,o,a;return!i||!t?void 0:i.getLayers?"group":((a=(n=t.getInteractions().getArray().filter(s=>s.freehand_!==void 0).map(s=>s.source_))==null?void 0:n.ol_uid)==null?void 0:a.includes(i.getSource?(o=i.getSource())==null?void 0:o.ol_uid:void 0))?"draw":i.declutter_!==void 0?"vector":"raster"}const ca=(i,t,e)=>{let r=t;return e.layer.getSource().getTileUrlFunction()&&(r||(r=e.layer.getSource().getTileUrlFunction()),e.layer.getSource().setTileUrlFunction((...n)=>Lo(r(...n),i)),e.layer.getSource().setKey(new Date)),r};function da(i,t,e){const r="updateStyleVariables"in t,n="setStyle"in t,o=r?t.style_:e.style;let a=o==null?void 0:o.variables;if(a){const s=Mi(i);if(o.variables={...a,...s},r)t.updateStyleVariables(s);else if(n){const l=ua(o);t.setStyle(l)}}}const Mi=i=>{const t={};for(const e in i)if(typeof i[e]=="object"&&i[e]!==null){const r=Mi(i[e]);for(const n in r)t[n]=r==null?void 0:r[n]}else t[e]=i==null?void 0:i[e];return t};function ua(i){let t=i;if("variables"in i){let e=JSON.stringify(i);const{variables:r}=i;for(const n in r)typeof r[n]=="number"?e=e.replaceAll(`["var","${n}"]`,r[n]):e=e.replaceAll(`["var","${n}"]`,`"${r[n]}"`);t=JSON.parse(e)}return t}const ha=(i,t)=>{if(!i)return;const e=Mi(t);let r,n;return Array.isArray(i)?n=structuredClone(i):n=[structuredClone(i)],r=n.filter(o=>{if(!("boundTo"in o))return!0;const a=o.boundTo.key,s=o.boundTo.value;return!(a in e)||e[a]==s}),r.length||(r=n),r.map(o=>{var a;return delete o.boundTo,!("domainProperties"in o)||"domain"in o?o:(a=Object.keys(o))==null?void 0:a.reduce((s,l)=>(l==="domainProperties"?s.domain=o[l].map(c=>e[c]):s[l]=o[l],s),{})})};function kr(i,t){var r;let e={};for(const n in i){const o=i[n].type;if(o&&o!=="object")e[n]=o==="number"?Number(t[n]):t[n];else if(typeof i[n]=="object"&&((r=i[n])!=null&&r.properties)){const a=kr(i[n].properties,t);Object.keys(a).length>0&&(e[n]=a)}}return e}function pa(i,t){var o,a,s,l,c;if(!t)return null;let e={},r="updateStyleVariables"in i?(o=i.style_)==null?void 0:o.variables:(a=t.style)==null?void 0:a.variables;if((t.type==="style"||t.style)&&r)e=r;else if((l=(s=i.getSource())==null?void 0:s.getTileUrlFunction)!=null&&l.call(s)){const u=new URL(i.getSource().getTileUrlFunction()([0,0,0]));e=Object.fromEntries(u.searchParams.entries())}else return null;const n=kr(((c=t.schema)==null?void 0:c.properties)||t.schema,e);return Object.keys(n).length?n:null}const fa=(i,t)=>i==null?void 0:i.filter(e=>["remove","sort"].filter(r=>t!=null&&t.get("layerControlDisable")?r!=="sort":!0).includes(e)),ga=(i,t)=>i==null?void 0:i.filter(e=>{let r=!0;return["remove","sort"].includes(e)&&(r=!1),e==="info"&&(r=t.get("description")),e==="config"&&(r=t.get("layerConfig")),e==="datetime"&&(r=t.get("layerDatetime")),e==="legend"&&(r=t.get("layerLegend")),r}),ma=(i,t)=>m`
  <button slot="${i}-icon" class="icon">${t?i:tt}</button>
`,ya=i=>m`
  <button
    class="remove-icon icon"
    @click=${()=>{const{layer:t}=i;t==null||t.set("layerControlOptional",!0),t==null||t.setVisible(!1),i.dispatchEvent(new CustomEvent("changed",{detail:t,bubbles:!0}))}}
  >
    ${i.unstyled?"x":tt}
  </button>
`,ba=i=>m`
  <span class="button sort-icon icon drag-handle">
    ${i?"═":tt}
  </span>
`,Lr=i=>{var e;const t=["layerControlHide","layerControlOptional"];return(e=i==null?void 0:i.getArray())==null?void 0:e.filter(r=>t.every(n=>!r.get(n)))};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rr=ir(class extends rr{constructor(i){if(super(i),i.type!==Ot.PROPERTY&&i.type!==Ot.ATTRIBUTE&&i.type!==Ot.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!mn(i))throw Error("`live` bindings can only contain a single expression")}render(i){return i}update(i,[t]){if(t===Qt||t===tt)return t;const e=i.element,r=i.name;if(i.type===Ot.PROPERTY){if(t===e[r])return Qt}else if(i.type===Ot.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(r))return Qt}else if(i.type===Ot.ATTRIBUTE&&e.getAttribute(r)===t+"")return Qt;return yn(i),t}});var Pr="Expected a function",Ji=NaN,va="[object Symbol]",wa=/^\s+|\s+$/g,xa=/^[-+]0x[0-9a-f]+$/i,Sa=/^0b[01]+$/i,Ea=/^0o[0-7]+$/i,Ca=parseInt,$a=typeof Ut=="object"&&Ut&&Ut.Object===Object&&Ut,Ta=typeof self=="object"&&self&&self.Object===Object&&self,_a=$a||Ta||Function("return this")(),Aa=Object.prototype,Da=Aa.toString,ka=Math.max,La=Math.min,gi=function(){return _a.Date.now()};function Ra(i,t,e){var r,n,o,a,s,l,c=0,u=!1,d=!1,p=!0;if(typeof i!="function")throw new TypeError(Pr);t=Ki(t)||0,Pe(e)&&(u=!!e.leading,d="maxWait"in e,o=d?ka(Ki(e.maxWait)||0,t):o,p="trailing"in e?!!e.trailing:p);function f(A){var G=r,dt=n;return r=n=void 0,c=A,a=i.apply(dt,G),a}function y(A){return c=A,s=setTimeout(B,t),u?f(A):a}function w(A){var G=A-l,dt=A-c,J=t-G;return d?La(J,o-dt):J}function k(A){var G=A-l,dt=A-c;return l===void 0||G>=t||G<0||d&&dt>=o}function B(){var A=gi();if(k(A))return D(A);s=setTimeout(B,w(A))}function D(A){return s=void 0,p&&r?f(A):(r=n=void 0,a)}function W(){s!==void 0&&clearTimeout(s),c=0,r=l=n=s=void 0}function M(){return s===void 0?a:D(gi())}function et(){var A=gi(),G=k(A);if(r=arguments,n=this,l=A,G){if(s===void 0)return y(l);if(d)return s=setTimeout(B,t),f(l)}return s===void 0&&(s=setTimeout(B,t)),a}return et.cancel=W,et.flush=M,et}function Pa(i,t,e){var r=!0,n=!0;if(typeof i!="function")throw new TypeError(Pr);return Pe(e)&&(r="leading"in e?!!e.leading:r,n="trailing"in e?!!e.trailing:n),Ra(i,t,{leading:r,maxWait:t,trailing:n})}function Pe(i){var t=typeof i;return!!i&&(t=="object"||t=="function")}function Ma(i){return!!i&&typeof i=="object"}function Oa(i){return typeof i=="symbol"||Ma(i)&&Da.call(i)==va}function Ki(i){if(typeof i=="number")return i;if(Oa(i))return Ji;if(Pe(i)){var t=typeof i.valueOf=="function"?i.valueOf():i;i=Pe(t)?t+"":t}if(typeof i!="string")return i===0?i:+i;i=i.replace(wa,"");var e=Sa.test(i);return e||Ea.test(i)?Ca(i.slice(2),e?2:8):xa.test(i)?Ji:+i}var Ia=Pa;const Qi=Ti(Ia);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=i=>i??tt;var ct,Me,Oe;class Mr extends ot{constructor(){super();T(this,ct,[]);T(this,Me,$i`
    .separator {
      margin: 0 0 24px 0;
    }
    color-legend {
      --cle-background: transparent;
      --cle-font-family: inherit;
      --cle-font-size: inherit;
      --cle-font-weight: inherit --cle-letter-spacing: inherit;
      --cle-letter-spacing-title: inherit;
      --cle-padding: 0;
    }
  `);T(this,Oe,"");this.unstyled=!1,this.noShadow=!1,this.layer=null}get layerLegend(){return S(this,ct)?S(this,ct).length>1?S(this,ct):S(this,ct)[0]:null}set layerLegend(e){var r;Array.isArray(e)?bt(this,ct,e.map((n,o)=>{var a;return{id:(((a=this.layer)==null?void 0:a.get("id"))??"")+o,...n}})):bt(this,ct,[{id:(((r=this.layer)==null?void 0:r.get("id"))??"")+0,...e}])}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){this.layerLegend&&new ResizeObserver(()=>{var e;bt(this,ct,(e=S(this,ct))==null?void 0:e.map(r=>(this.offsetWidth!==r.width&&(r.width=this.offsetWidth),{...r}))),this.requestUpdate()}).observe(this.renderRoot.querySelector(".legend-container"))}render(){return customElements.get("color-legend")||console.error("Please import `color-legend-element` in order to use layerLegend"),m`
      <style>
        ${S(this,Me)}
        ${!this.unstyled&&S(this,Oe)}
      </style>
      ${F(this.layerLegend,()=>m`
          <div class="legend-container">
            <!-- Render color-legend-->
            ${S(this,ct).map((e,r,n)=>m`
                <color-legend
                  id="${e.id}"
                  width=${e.width??325}
                  scaleType="${ve(e.scaleType)}"
                  markType="${ve(e.markType)}"
                  titleText="${ve(e.title)}"
                  .range=${e.range}
                  .domain=${e.domain}
                  tickFormat="${ve(e.tickFormat)}"
                  .ticks=${e.ticks??5}
                  .tickValues=${e.tickValues}
                  .marginLeft=${0}
                  .marginRight=${0}
                >
                </color-legend>
                ${r!==n.length-1?m`<div class="separator"></div>`:tt}
              `)}
          </div>
        `)}
    `}}ct=new WeakMap,Me=new WeakMap,Oe=new WeakMap,O(Mr,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerLegend:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-legend",Mr);var vt,Zt,ce,de,Ei,Ie,Ve;class Or extends ot{constructor(){super();T(this,de);T(this,vt,{});T(this,Zt,null);T(this,ce);T(this,Ie,$i`
    color-legend {
      --cle-background: transparent;
      --cle-font-family: inherit;
      --cle-font-size: inherit;
      --cle-font-weight: inherit --cle-letter-spacing: inherit;
      --cle-letter-spacing-title: inherit;
    }
  `);T(this,Ve,"");this.layer=null,this.unstyled=!1,this.noShadow=!1,this.layerConfig=null,this.throttleDataChange=Qi(R(this,de,Ei),1e3)}updated(e){if(e.has("layerConfig")){const r=this.layerConfig.type==="style"||this.layerConfig.style?100:1e3;this.throttleDataChange=Qi(R(this,de,Ei),r),this.requestUpdate()}}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){bt(this,Zt,pa(this.layer,this.layerConfig)),Object.keys(S(this,vt)).length!==0&&bt(this,Zt,S(this,vt)),customElements.get("eox-jsonform")||console.error("Please import @eox/jsonform in order to use layerconfig");const e={disable_edit_json:!0,disable_collapse:!0,disable_properties:!0};return m`
      <style>
        ${S(this,Ie)}
        ${!this.unstyled&&S(this,Ve)}
      </style>
      ${F(this.layerConfig,()=>m`
          ${F(this.layerConfig.legend,()=>m`
              <eox-layercontrol-layer-legend
                .noShadow=${!0}
                .unstyled=${this.unstyled}
                .layer=${this.layer}
                .layerLegend=${ha(this.layerConfig.legend,S(this,vt))}
              ></eox-layercontrol-layer-legend>
            `)}
          <!-- Render a JSON form for layer configuration -->
          <eox-jsonform
            .schema=${this.layerConfig.schema}
            .value=${S(this,Zt)}
            .options=${e}
            @change=${this.throttleDataChange}
          ></eox-jsonform>
        `)}
    `}}vt=new WeakMap,Zt=new WeakMap,ce=new WeakMap,de=new WeakSet,Ei=function(e){bt(this,vt,e.detail),this.layerConfig.type==="style"||this.layerConfig.style?"setStyle"in this.layer||"updateStyleVariables"in this.layer?da(S(this,vt),this.layer,this.layerConfig):console.error(`Layer type ${this.layer.get("type")??""} does not support styles configuration`):bt(this,ce,ca(S(this,vt),S(this,ce),this)),this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:e.detail,layer:this.layer}})),this.requestUpdate()},Ie=new WeakMap,Ve=new WeakMap,O(Or,"properties",{layer:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},layerConfig:{attribute:!1}});customElements.define("eox-layercontrol-layerconfig",Or);var Be,Vr,Ne,He;class Ir extends ot{constructor(){super();T(this,Be);T(this,Ne,"");T(this,He,"");this.unstyled=!1,this.noShadow=!1,this.layerDatetime=null,this.layer=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return customElements.get("eox-timecontrol")||console.error("Please import @eox/timecontrol in order to use layerDatetime"),m`
      <style>
        ${S(this,Ne)}
        ${!this.unstyled&&S(this,He)}
      </style>
      ${F(this.layerDatetime,()=>m`
          <!-- Render a Timecontrol for layer date time -->
          <eox-timecontrol
            ?unstyled=${this.unstyled}
            .for=${void 0}
            .layer=${void 0}
            .navigation=${this.layerDatetime.navigation??!1}
            .slider=${this.layerDatetime.slider??!1}
            .play=${this.layerDatetime.play??!1}
            .controlValues=${this.layerDatetime.controlValues}
            .controlProperty=${void 0}
            current-step=${this.layerDatetime.currentStep}
            .displayFormat=${this.layerDatetime.displayFormat}
            @stepchange=${R(this,Be,Vr)}
          ></eox-timecontrol>
        `)}
    `}}Be=new WeakSet,Vr=function(e){this.dispatchEvent(new CustomEvent("datetime:updated",{bubbles:!0,detail:{datetime:e.detail.currentStep,layer:this.layer}})),this.layerDatetime.currentStep=e.detail.currentStep,this.requestUpdate()},Ne=new WeakMap,He=new WeakMap,O(Ir,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerDatetime:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-datetime",Ir);var ue,Fe,Ue;class Br extends ot{constructor(){super();T(this,ue,e=>(this.selectedTab===e||this.toolsAsList)&&"highlighted");T(this,Fe,`
    .tabbed figure,
    .listed figure {
      margin: 0;
    }
    .tabbed nav,
    .listed nav {
      display: flex;
      justify-content: space-between;
    }
    .tabbed nav div,
    .listed nav div {
      display: flex;
    }
    .tabbed .tab,
    .listed .tab {
      display: none;
    }
    .tabbed .tab.highlighted,
    .listed .tab.highlighted {
      display: block;
    }
  `);T(this,Ue,`
    .listed label {
      display: flex;
      justify-content: start;
      align-items: center;
      background: var(--background-color) !important;
    }
    .listed label:not(:first-of-type) {
      margin-top: 10px;
    }
    .listed label span {
      text-transform: capitalize;
      font-weight: 300;
    }
    .tabbed, .listed {
      font-size: small;
    }
    .tabbed label.highlighted {
      border: 1px solid #0041701a;
      border-radius: 2px;
      border-bottom: none;
      pointer-events: none;
    }
    nav div label,
    nav div span {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    figure {
      background: var(--background-color);
      border: 1px solid #0041701a;
      border-radius: 2px;
      padding: var(--padding-vertical) var(--padding);
    }
  `);this.actions=[],this.selectedTab=0,this.tabs=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const e=this.tabs,r=this.actions,n=r.length+e.length>1;return m`
      <style>
        ${S(this,Fe)}
        ${!this.unstyled&&S(this,Ue)}
      </style>
      <div class="${this.toolsAsList?"listed":"tabbed"}">
        <!-- Navigation for tabs and actions -->
        ${F(n,()=>m`
            <nav>
              ${F(!this.toolsAsList,()=>m`
                  <div>
                    <!-- Labels for tabs -->
                    ${we(e,(o,a)=>m`
                        <label
                          class=${S(this,ue).call(this,a)}
                          @click=${()=>this.selectedTab=a}
                        >
                          <!-- Customizable icon for each tab -->
                          <slot name=${`${o}-icon`}>${o}</slot>
                        </label>
                      `)}
                  </div>
                  <div>
                    <!-- Icons for actions -->
                    ${we(r,o=>m`
                        <span>
                          <!-- Customizable icon for each action -->
                          <slot name=${`${o}-icon`}>${o}</slot>
                        </span>
                      `)}
                  </div>
                `)}
            </nav>
          `)}
        <figure>
          <!-- Content for each tab -->
          ${we(e,(o,a)=>m`
              ${F(this.toolsAsList,()=>m`
                  <label>
                    <!-- Customizable icon for each tab -->
                    <slot name=${`${o}-icon`}>${o}</slot>
                    <span>${o}</span>
                  </label>
                `)}
              <div class="tab ${S(this,ue).call(this,a)}">
                <!-- Content slot for each tab -->
                <slot name=${`${o}-content`}>${o}</slot>
              </div>
            `)}
        </figure>
      </div>
    `}}ue=new WeakMap,Fe=new WeakMap,Ue=new WeakMap,O(Br,"properties",{actions:{attribute:!1},selectedTab:{state:!0},tabs:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-tools-items",Br);const Nr=':root,:host { --range-slider-height: 6px; --range-slider-thumb-size: 15px; --range-slider-thumb-border-radius: 50%; --range-slider-color: #004170; --range-slider-track-color: #d7dcdf; --range-slider-track-border-radius: 0;}input[type="range"] { -webkit-appearance: none; border: none; color: var(--range-slider-color); overflow: hidden; padding-left: 0; margin-left: 7px;}/*webkit*/input[type="range"]::-webkit-slider-thumb { -webkit-appearance: none; width: var(--range-slider-thumb-size); height: var(--range-slider-thumb-size); border-radius: var(--range-slider-thumb-border-radius); background: var(--range-slider-color); border: none; box-shadow: none; margin-top: calc( var(--range-slider-height) * 0.5 - var(--range-slider-thumb-size) * 0.5 );}input[type="range"]::-webkit-slider-runnable-track { height: var(--range-slider-height); border: none; border-radius: var(--range-slider-track-border-radius); background: var(--range-slider-track-color); box-shadow: none;}input[type="range"]::-webkit-slider-thumb { cursor: grab; --clip-edges: 4px; --clip-top: calc( (var(--range-slider-thumb-size) - var(--range-slider-height)) * 0.5 ); --clip-bottom: calc(var(--range-slider-thumb-size) - var(--clip-top)); --clip-further: calc(100% + 1px); --box-fill: calc( -100vmax - var(--range-slider-thumb-size, var(--range-slider-thumb-size)) + 1px ) 0 0 100vmax currentColor; background: linear-gradient(currentColor 0 0) scroll no-repeat left center / 50% calc(var(--range-slider-height) + 1px); background-color: currentColor; box-shadow: var(--box-fill); border-radius: var(--range-slider-thumb-size, var(--range-slider-thumb-size)); filter: brightness(100%); clip-path: polygon( 100% -1px, var(--clip-edges) -1px, 0 var(--clip-top), -100vmax var(--clip-top), -100vmax var(--clip-bottom), 0 var(--clip-bottom), var(--clip-edges) 100%, var(--clip-further) var(--clip-further) );}/*mozilla*/input[type="range"]::-moz-range-thumb { width: var(--range-slider-thumb-size); height: var(--range-slider-thumb-size); border-radius: var(--range-slider-thumb-border-radius); background: var(--range-slider-color); border: none; box-shadow: none; cursor: grab;}input[type="range"]::-moz-range-track { border: none; border-radius: var(--range-slider-track-border-radius); background: var(--range-slider-track-color); box-shadow: none;}input[type="range"]::-moz-range-progress { appearance: none; background: currentColor; transition-delay: 30ms;}input[type="range"]::-moz-range-track,input[type="range"]::-moz-range-progress { height: calc(var(--range-slider-height)); border-radius: var(--range-slider-track-border-radius);}/*toolcool slider*/tc-range-slider { --height: var(--range-slider-height); --panel-bg: var(--range-slider-track-color); --panel-bg-hover: var(--range-slider-track-color); --panel-bg-fill: var(--range-slider-color); --panel-bg-border-radius: var(--range-slider-track-border-radius); --pointer-bg: var(--range-slider-color); --pointer-bg-hover: var(--range-slider-color); --pointer-bg-focus: var(--range-slider-color); --pointer-width: var(--range-slider-thumb-size); --pointer-height: var(--range-slider-thumb-size); --pointer-shadow: none; --pointer-shadow-hover: none; --pointer-shadow-focus: none; --pointer-border: none; --pointer-border-hover: 0; --pointer-border-focus: 0; --pointer-border-radius: var(--range-slider-thumb-border-radius);}';var ze,je;class Hr extends ot{constructor(){super();O(this,"_removeButton",()=>ya(this));O(this,"_sortButton",()=>ba(this.unstyled));O(this,"_button",e=>ma(e,this.unstyled));O(this,"_getDefaultTools",()=>{var e;return m`
      <div slot="info-content">
        ${bn(this.layer.get("description"))}
      </div>
      <div slot="opacity-content">
        <!-- Input for opacity -->
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value=${Rr((e=this.layer)==null?void 0:e.getOpacity())}
          @input=${r=>this.layer.setOpacity(parseFloat(r.target.value))}
        />
      </div>
      <div slot="config-content">
        <!-- Layer configuration -->
        ${F(this.layer.get("layerConfig"),()=>m`
            <eox-layercontrol-layerconfig
              slot="config-content"
              .layer=${this.layer}
              .noShadow=${!0}
              .layerConfig=${this.layer.get("layerConfig")}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layerconfig>
          `)}
      </div>
      <div slot="datetime-content">
        <!-- Layer datetime -->
        ${F(this.layer.get("layerDatetime"),()=>m`
            <eox-layercontrol-layer-datetime
              slot="datetime-content"
              .noShadow=${!0}
              .layerDatetime=${this.layer.get("layerDatetime")}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-datetime>
          `)}
      </div>
      <div slot="legend-content">
        <!-- Layer legend -->
        ${F(this.layer.get("layerLegend"),()=>m`
            <eox-layercontrol-layer-legend
              slot="legend-content"
              .noShadow=${!0}
              .layerLegend=${this.layer.get("layerLegend")}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-legend>
          `)}
      </div>
      <div slot="remove-icon">${this._removeButton()}</div>
      <div slot="sort-icon">${this._sortButton()}</div>
    `});T(this,ze,"");T(this,je,`
    ${or}  
    ${pn}
    ${nr}
    ${Nr}
    .drag-handle {
      cursor: n-resize;
    }
    .single-action-container,
    details.tools {
      position: relative;
    }
    eox-layercontrol-layer details summary::before {
      content: "";
    }
    details.tools[open] {
      /*border-top: 1px solid #0041703a;*/
    }
    .single-action {
      position: relative;
    }
    details.tools summary .icon {
      pointer-events: none;
    }
    .single-action,
    details.tools summary {
      position: absolute;
      right: 0;
      top: -24px;
      height: 24px;
      cursor: pointer;
      display: var(--layer-tools-button-visibility);
    }
    .single-action .icon::before,
    details.tools summary .icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Edots-vertical%3C/title%3E%3Cpath d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' /%3E%3C/svg%3E");
    }
    .single-action,
    details.tools summary,
    eox-layercontrol-tools-items button.icon {
      transition: opacity .2s;
    }
    .single-action,
    details.tools summary {
      opacity: .5;
    }
    eox-layercontrol-tools-items button.icon {
      opacity: .7;
    }
    eox-layercontrol-tools-items.tools-list button.icon {
      cursor: auto;
    }
    .single-action:hover,
    details.tools summary:hover,
    eox-layercontrol-tools-items button.icon:hover {
      opacity: 1;
    }
    eox-layercontrol-tools-items.tools-list button.icon:hover {
      opacity: .7;
    }
    .tools-placeholder,
    .single-action .icon,
    .single-action .icon::before,
    details.tools summary .icon,
    details.tools summary .icon::before {
      height: 16px;
      width: 16px;
      margin-right: var(--padding);
    }
    eox-layercontrol-tools-items button.icon,
    eox-layercontrol-tools-items .button.icon {
      display: flex;
      justify-content: center;
    }
    eox-layercontrol-tools-items.tools-list button.icon,
    eox-layercontrol-tools-items.tools-list .button.icon {
      margin-left: -6px;
    }
    eox-layercontrol-tools-items button.icon::before,
    eox-layercontrol-tools-items .button.icon::before {
      width: 16px;
      height: 16px;
    }
    details.tools summary .info-icon,
    button.icon[slot=info-icon]::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Einformation-outline%3C/title%3E%3Cpath d='M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z' /%3E%3C/svg%3E");
    }
    details.tools summary .opacity-icon,
    button.icon[slot=opacity-icon]::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eopacity%3C/title%3E%3Cpath d='M17.66,8L12,2.35L6.34,8C4.78,9.56 4,11.64 4,13.64C4,15.64 4.78,17.75 6.34,19.31C7.9,20.87 9.95,21.66 12,21.66C14.05,21.66 16.1,20.87 17.66,19.31C19.22,17.75 20,15.64 20,13.64C20,11.64 19.22,9.56 17.66,8M6,14C6,12 6.62,10.73 7.76,9.6L12,5.27L16.24,9.65C17.38,10.77 18,12 18,14H6Z' /%3E%3C/svg%3E");
    }
    details.tools summary .config-icon,
    button.icon[slot=config-icon]::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Etune%3C/title%3E%3Cpath d='M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z' /%3E%3C/svg%3E");
    }
    details.tools summary .datetime-icon,
    button.icon[slot=datetime-icon]::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eclock-outline%3C/title%3E%3Cpath d='M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z' /%3E%3C/svg%3E");
    }
    details.tools summary .legend-icon,
    button.icon[slot=legend-icon]::before {
      content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ctitle%3Emap-legend%3C%2Ftitle%3E%3Cpath%20d%3D%22M9%2C3L3.36%2C4.9C3.15%2C4.97%203%2C5.15%203%2C5.38V20.5A0.5%2C0.5%200%200%2C0%203.5%2C21L3.66%2C20.97L9%2C18.9L15%2C21L20.64%2C19.1C20.85%2C19.03%2021%2C18.85%2021%2C18.62V3.5A0.5%2C0.5%200%200%2C0%2020.5%2C3L20.34%2C3.03L15%2C5.1L9%2C3M8%2C5.45V17.15L5%2C18.31V6.46L8%2C5.45M10%2C5.47L14%2C6.87V18.53L10%2C17.13V5.47M19%2C5.7V17.54L16%2C18.55V6.86L19%2C5.7M7.46%2C6.3L5.57%2C6.97V9.12L7.46%2C8.45V6.3M7.46%2C9.05L5.57%2C9.72V11.87L7.46%2C11.2V9.05M7.46%2C11.8L5.57%2C12.47V14.62L7.46%2C13.95V11.8M7.46%2C14.55L5.57%2C15.22V17.37L7.46%2C16.7V14.55Z%22%20%2F%3E%3C%2Fsvg%3E");
    }
    .single-action .remove-icon::before,
    [slot=remove-icon] button.icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ff0000' viewBox='0 0 24 24'%3E%3Ctitle%3Edelete-outline%3C/title%3E%3Cpath d='M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z' /%3E%3C/svg%3E");
    }
    .single-action .sort-icon::before,
    [slot=sort-icon] .button.icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Edrag-horizontal-variant%3C/title%3E%3Cpath d='M21 11H3V9H21V11M21 13H3V15H21V13Z' /%3E%3C/svg%3E");
    }
    [slot=info-content],
    [slot=opacity-content],
    [slot=config-content],
    [slot=datetime-content],
    [slot=legend-content] {
      padding: 6px 0;
    }
    [slot=info-content] * {
      max-width: 100%;
    }
  `);this.layer=null,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var l;const e=fa(this.tools,this.layer),r=ga(this.tools,this.layer),n=this[`_${e==null?void 0:e[0]}Button`]?this[`_${e==null?void 0:e[0]}Button`]():tt,o=((l=this.tools)==null?void 0:l.length)===1?`${this.tools[0]}-icon`:"",a=e==null?void 0:e.length,s=r==null?void 0:r.length;return m`
      <style>
        ${S(this,ze)}
        ${!this.unstyled&&S(this,je)}
      </style>
      ${F(a+s>0,()=>m`
          ${F(a===1&&s===0,()=>m`
              <div class="single-action-container">
                <div class="single-action">${n}</div>
              </div>
            `,()=>m`
              <details
                class="tools"
                open=${this.layer.get("layerControlToolsExpand")||tt}
              >
                <summary>
                  <button class="icon ${o}">Tools</button>
                </summary>
                <eox-layercontrol-tools-items
                  class="${this.toolsAsList?"tools-list":"tools-tab"}"
                  .noShadow=${!1}
                  .actions=${e}
                  .tabs=${r}
                  .unstyled=${this.unstyled}
                  .toolsAsList=${this.toolsAsList}
                >
                  <!-- Rendering tabs and content -->
                  ${we(r,c=>this._button(c))}
                  <!-- Including default tools -->
                  ${this._getDefaultTools()}
                </eox-layercontrol-tools-items>
              </details>
            `)}
        `)}
    `}}ze=new WeakMap,je=new WeakMap,O(Hr,"properties",{layer:{attribute:!1},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-layer-tools",Hr);const Va=i=>{const t=()=>{const e=sa(i.layer,i.map,i.showLayerZoomState);let r=!1;!e&&i.currLayerVisibilityBasedOnZoom?(i.currLayerVisibilityBasedOnZoom=!1,r=!0):e&&!i.currLayerVisibilityBasedOnZoom&&(i.currLayerVisibilityBasedOnZoom=!0,r=!0),r&&(i.requestUpdate(),i.dispatchEvent(new CustomEvent("change:resolution",{bubbles:!0})))};Dr(i.layer,i.showLayerZoomState)&&(t(),i.map.getView().on("change:resolution",()=>t()))},Ba=(i,t)=>{const e=t.layer;e.setVisible(i.target.checked),i.target.checked&&e.get("layerControlExclusive")&&t.closest(".layers > ul").querySelectorAll("eox-layercontrol-layer").forEach(n=>{var o;n.layer!==e&&((o=n.layer)!=null&&o.get("layerControlExclusive"))&&(n.layer.setVisible(!1),n.requestUpdate())}),t.dispatchEvent(new CustomEvent("changed",{bubbles:!0,detail:e})),t.requestUpdate()};var ft,Ft,Ur,qe,Ye;class Fr extends ot{constructor(){super();T(this,ft);O(this,"currLayerVisibilityBasedOnZoom",!0);T(this,qe,"");T(this,Ye,`
    ${nr}
    eox-layercontrol-layer {
      width: 100%;
      position: relative;
    }
    .layer input[type=checkbox],
    .layer input[type=radio] {
      display: var(--layer-input-visibility);
    }
    .layer.zoom-state-invisible {
      background: #d2e2ee;
      opacity: 0.3;
    }
    .layer {
      width: 100%;
      align-items: center;
      justify-content: space-between;
      padding: var(--padding-vertical) 0;
      display: var(--layer-visibility);
    }
    label, span {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    .title {
      display: var(--layer-title-visibility);
    }
    [data-type] .title::before {
      width: 20px;
      min-width: 20px;
      height: 20px;
      margin-right: 6px;
      display: var(--layer-type-visibility);
    }
    [data-type] .title.color-swatch::before {
      background: var(--layer-color);
      border-radius: 3px;
      content: "" !important;
      width: 16px;
      min-width: 16px;
      height: 16px;
    }
    [data-type=group] .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Efolder-outline%3C/title%3E%3Cpath d='M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z' /%3E%3C/svg%3E");
    }
    [data-type=group] > eox-layercontrol-layer-group > details[open] > summary > eox-layercontrol-layer > .layer > label > .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Efolder-open-outline%3C/title%3E%3Cpath d='M6.1,10L4,18V8H21A2,2 0 0,0 19,6H12L10,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H19C19.9,20 20.7,19.4 20.9,18.5L23.2,10H6.1M19,18H6L7.6,12H20.6L19,18Z' /%3E%3C/svg%3E");
    }
    [data-type=raster] .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckerboard%3C/title%3E%3Cpath d='M2 2V22H22V2H2M20 12H16V16H20V20H16V16H12V20H8V16H4V12H8V8H4V4H8V8H12V4H16V8H20V12M16 8V12H12V8H16M12 12V16H8V12H12Z' /%3E%3C/svg%3E");
    }
    [data-type=vector] .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Eshape-outline%3C/title%3E%3Cpath d='M11,13.5V21.5H3V13.5H11M9,15.5H5V19.5H9V15.5M12,2L17.5,11H6.5L12,2M12,5.86L10.08,9H13.92L12,5.86M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13M17.5,15A2.5,2.5 0 0,0 15,17.5A2.5,2.5 0 0,0 17.5,20A2.5,2.5 0 0,0 20,17.5A2.5,2.5 0 0,0 17.5,15Z' /%3E%3C/svg%3E");
    }
    [data-type=draw] .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Evector-square-edit%3C/title%3E%3Cpath d='M22.7 14.4L21.7 15.4L19.6 13.3L20.6 12.3C20.8 12.1 21.2 12.1 21.4 12.3L22.7 13.6C22.9 13.8 22.9 14.1 22.7 14.4M13 19.9L19.1 13.8L21.2 15.9L15.1 22H13V19.9M11 19.9V19.1L11.6 18.5L12.1 18H8V16H6V8H8V6H16V8H18V12.1L19.1 11L19.3 10.8C19.5 10.6 19.8 10.4 20.1 10.3V8H22.1V2H16.1V4H8V2H2V8H4V16H2V22H8V20L11 19.9M18 4H20V6H18V4M4 4H6V6H4V4M6 20H4V18H6V20Z' /%3E%3C/svg%3E");
    }
  `);this.layer=null,this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){Va(this)}render(){var l;const e=this.layer.getVisible(),r=e?"visible":"",n=this.currLayerVisibilityBasedOnZoom?"":"zoom-state-invisible",o=R(this,ft,Ft).call(this,"layerControlDisable")?"disabled":"",a=R(this,ft,Ft).call(this,"layerControlExclusive")?"radio":"checkbox",s=((l=this.tools)==null?void 0:l.length)>0;return m`
      <style>
        ${S(this,qe)}
        ${!this.unstyled&&S(this,Ye)}
      </style>
      ${F(this.layer,()=>m`
          <!-- Render the layer -->
          <div class="layer ${r} ${n}">
            <label class="drag-handle ${o}">
              <!-- Input element for layer visibility -->
              <input
                type=${a}
                .checked=${Rr(e)}
                @click=${R(this,ft,Ur)}
              />

              <!-- Layer title -->
              <span
                class="title ${R(this,ft,Ft).call(this,"color")?"color-swatch":""}"
                style="--layer-color: ${R(this,ft,Ft).call(this,"color")}"
              >
                ${R(this,ft,Ft).call(this,this.titleProperty)}
              </span>
              ${F(s,()=>m`<span class="tools-placeholder"></span>`)}
            </label>
          </div>

          <!-- Render layer tools -->
          <eox-layercontrol-layer-tools
            .noShadow=${!0}
            .layer=${this.layer}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
            .toolsAsList=${this.toolsAsList}
          ></eox-layercontrol-layer-tools>
        `)}
    `}}ft=new WeakSet,Ft=function(e){var r;return(r=this.layer)==null?void 0:r.get(e)},Ur=function(e){Ba(e,this)},qe=new WeakMap,Ye=new WeakMap,O(Fr,"properties",{layer:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-layer",Fr);var Ze,Xe;class zr extends ot{constructor(){super();T(this,Ze,"");T(this,Xe,`
    details summary {
      cursor: pointer;
      display: var(--layer-summary-visibility);
    }
    details summary { list-style-type: none; } /* Firefox */
    details summary::-webkit-details-marker { display: none; } /* Chrome */
    details summary::marker { display: none; }
    details summary::before {
      display: var(--layer-visibility);
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-right%3C/title%3E%3Cpath d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /%3E%3C/svg%3E");
      font-size: 13px;
      width: 24px;
      height: 24px;
      margin: 4px 0;
      transform-origin: center;
      transition: transform 0.1s ease-in-out;
    }
    details[open] > summary:before {
      transform: rotate(90deg);
    }
    details[data-children-length="0"] summary::before {
      display: none;
    }
  `);this.group=null,this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var n,o;const e=!!((n=this.group)!=null&&n.get("layerControlExpand")),r=(o=Lr(this.group.getLayers()))==null?void 0:o.length;return m`
      <style>
        ${S(this,Ze)}
        ${!this.unstyled&&S(this,Xe)}
      </style>
      ${F(this.group,()=>m`
          <!-- Render the details element with the layer control -->
          <details
            open=${e||tt}
            data-children-length=${r}
          >
            <summary>
              <!-- Render the layer control within the summary -->
              <eox-layercontrol-layer
                .noShadow=${!0}
                .layer=${this.group}
                .map=${this.map}
                .titleProperty=${this.titleProperty}
                .showLayerZoomState=${this.showLayerZoomState}
                .tools=${this.tools}
                .unstyled=${this.unstyled}
                .toolsAsList=${this.toolsAsList}
                @changed=${()=>this.requestUpdate()}
              ></eox-layercontrol-layer>
            </summary>

            <!-- Render the list of layers within the details -->
            <eox-layercontrol-layer-list
              .noShadow=${!0}
              .idProperty=${this.idProperty}
              .layers=${this.group.getLayers()}
              .map=${this.map}
              .titleProperty=${this.titleProperty}
              .showLayerZoomState=${this.showLayerZoomState}
              .tools=${this.tools}
              .unstyled=${this.unstyled}
              .toolsAsList=${this.toolsAsList}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-list>
          </details>
        `)}
    `}}Ze=new WeakMap,Xe=new WeakMap,O(zr,"properties",{group:{attribute:!1},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-layer-group",zr);const Na=i=>{const{layers:t,idProperty:e,titleProperty:r,renderRoot:n}=i,o=fn(()=>{i.requestUpdate(),i.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))},50),a=()=>o();if(t&&(t.hasListener("change:length")&&(t==null||t.un("change:length",a)),t.on("change:length",a),t)){const s=n.querySelector("ul");aa(t,e,r,i),oa(s,t,e,i)}};var We,Ge;class jr extends ot{constructor(){super();T(this,We,"");T(this,Ge,`
    ul {
      padding: 0;
      margin: 0;
    }
    ul ul {
      padding-left: var(--list-padding);
    }
    li:not(li li) {
      padding-left: var(--padding);
    }
    li {
      list-style: none;
      border-bottom: 1px solid #0041703a;
      border: var(--layer-visibility);
    }
    li:last-child {
      border: none;
    }
    li.sortable-chosen {
      background: #eeea;
    }
    li.sortable-drag {
      opacity: 0;
    }
    li.sortable-ghost {
    }
  `);this.idProperty="id",this.layers=null,this.map=null,this.tools=void 0,this.titleProperty="title",this.showLayerZoomState=!1,this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}firstUpdated(){Na(this)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const e=this.layers?Lr(this.layers).reverse():[];return m`
      <style>
        ${S(this,We)}
        ${!this.unstyled&&S(this,Ge)}
      </style>
      <ul>
        ${F(this.layers,()=>m`
            ${gn(e,r=>r,r=>m`
                <li
                  data-layer="${r.get(this.idProperty)}"
                  data-type="${la(r,this.map)}"
                >
                  ${r.getLayers?m`
                          <eox-layercontrol-layer-group
                            .noShadow=${!0}
                            .group=${r}
                            .idProperty=${this.idProperty}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            @changed=${()=>this.requestUpdate()}
                          >
                          </eox-layercontrol-layer-group>
                        `:m`
                          <eox-layercontrol-layer
                            .noShadow=${!0}
                            .layer=${r}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            @changed=${()=>this.requestUpdate()}
                          ></eox-layercontrol-layer>
                        `}
                </li>
              `)}
          `)}
      </ul>
    `}}We=new WeakMap,Ge=new WeakMap,O(jr,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-layer-list",jr);const Ha=i=>{const t=i.querySelector("select[name=optional]"),e=t?t.value:null,r=Pi(i.layers.getArray(),"layerControlOptional",!0).find(n=>(n.get(i.idProperty)||n.ol_uid)===e);r==null||r.set("layerControlOptional",!1),r==null||r.setVisible(!0),i.dispatchEvent(new CustomEvent("changed",{bubbles:!0})),i.renderRoot.parentNode.querySelectorAll("eox-layercontrol-layer-list").forEach(n=>n.requestUpdate()),i.requestUpdate()};var Je,Yr;class qr extends ot{constructor(){super();T(this,Je);this.idProperty="id",this.layers=null,this.titleProperty="title",this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const e=Pi(this.layers.getArray(),"layerControlOptional",!0);return m`
      <!-- Label for the dropdown -->
      <label for="optional">Optional layers</label>

      <!-- Dropdown select element -->
      <select name="optional" data-cy="optionalLayers">
        <!-- Default placeholder option -->
        <option disabled selected value>
          -- select an optional layer to add --
        </option>

        <!-- Mapping through filtered layers list to generate dropdown options -->
        ${e.map(r=>{const n=r.get(this.idProperty)||r.ol_uid,o=r.get(this.titleProperty),a=`layer ${r.get(this.idProperty)}`;return m` <option value="${n}">${o||a}</option> `})}
      </select>

      <!-- Button to handle adding layers -->
      <button @click="${R(this,Je,Yr)}">add</button>
    `}}Je=new WeakSet,Yr=function(){Ha(this)},O(qr,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},titleProperty:{attribute:"title-property",type:String},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-optional-list",qr);const Fa=(i,t)=>{t.jsonInput=i.target.value,t.requestUpdate()},tr=i=>{const t=JSON.parse(`{"data":${fr(i.jsonInput)}}`);Array.isArray(t.data)?t.data.forEach(e=>{i.eoxMap.addOrUpdateLayer(e)}):i.eoxMap.addOrUpdateLayer(t.data),i.jsonInput=null,i.requestUpdate()},Ua=(i,t)=>{t.urlInput=i.target.value,t.requestUpdate()};async function za(i){const t=i.urlInput;if(i.wmsCapabilities=null,i.searchLoad=!0,i.requestUpdate(),!t)return!1;if(Ai(t)==="XYZ")return{Name:t};try{const e=await Ao(t);i.wmsCapabilities=e}catch{}finally{i.searchLoad=!1,i.requestUpdate()}return!1}const ja=(i,t)=>{const{Name:e}=i,r=Ai(t.urlInput)||"XYZ",n={type:"Tile",properties:{id:e,title:e},source:{type:r,url:t.urlInput,params:{LAYERS:e}}};t.jsonInput=JSON.stringify(n)},qa=(i,t)=>{t.open=i||null,t.urlInput=null,t.jsonInput=null,t.wmsCapabilities=null,t.requestUpdate()};var q,Xr,Wr,Ci,Gr,Jr,Te,Ke,Qe;class Zr extends ot{constructor(){super();T(this,q);O(this,"urlInput",null);O(this,"jsonInput",null);O(this,"open",null);O(this,"searchLoad",!1);O(this,"wmsCapabilities",null);T(this,Ke,`
    .eox-add-layer-main .open {
      position: relative;
    }
    .eox-add-layer-main .close {
      display: none;
    }
  `);T(this,Qe,`
    .eox-add {
      background: #f0f2f5;
      border-top: 1px solid #0041701a;
      padding: 0.5rem;
      font-size: small;
    }
    .eox-add-layer-col, .eox-add-layer-tab {
      display: flex;
      width: 100%;
    }
    .eox-add-layer-main .close {
      display: none;
    }
    .eox-add-layer-main .open {
      position: relative;
    }
    button.icon.add-icon {
      flex-grow: 1;
    }
    .eox-add-layer-tab li {
      border: 0 !important;
      font-size: smaller;
      padding: 0.2rem 0.7rem;
      background: #f0f2f5;
      border-radius: 4px 4px 0px 0px;
      font-size: 0.8rem;
      font-weight: 500;
      cursor: pointer;
    }
    .eox-add-layer-tab li.active {
      background: #204270;
      color: white;
      font-weight: 700;
    }
    .relative {
      position: relative
    }
    .eox-add-layer-col.justify-end {
      justify-content: end;
    }
    .eox-add ul {
      max-height: 120px;
      overflow: scroll;
    }
    .eox-add ul li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.1rem 0.2rem;
    }
    button.icon {
      justify-content: end;
      transition: opacity .2s;
      opacity: .7;
    }
    button.icon:hover {
      opacity: 1;
    }
    button.icon.add-layer-icon::before {
      width: 16px;
      min-width: 16px;
      height: 16px;
    }
    button.icon.add-icon::before {
      width: 18px;
      min-width: 18px;
      height: 18px;
    }
    .add-icon.icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath xmlns='http://www.w3.org/2000/svg' d='M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z' fill='%23004270'/%3E%3C/svg%3E");
    }
    .add-layer-icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eplus-thick%3C/title%3E%3Cpath fill='%23004270' d='M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z' /%3E%3C/svg%3E");
    }
    .json-add-layer {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eplus-thick%3C/title%3E%3Cpath fill='white' d='M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z' /%3E%3C/svg%3E");
    }
    .search-icon::after {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Emagnify%3C/title%3E%3Cpath d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z' fill='white' /%3E%3C/svg%3E");
    }
    .search-icon::after, .json-add-layer::before {
      width: 14px;
      min-width: 14px;
      height: 14px;
      display:flex
      margin-right: 6px;
      color: white;
    }
    .search-icon, .json-add-layer {
      padding: 4px 6px;
      height: 28px;
      border-radius: 0px 4px 4px 0px;
      box-shadow: none;
    }
    .json-add-layer {
      position: absolute;
      bottom: 16px;
      right: 14px;
      border-radius: 4px;
      height: 24px;
      padding: 4px;
    }
    input.add-url, textarea.add-layer-input {
      box-sizing: border-box !important;
      width: 100%;
      height: 28px;
      padding: 5px 7px !important;
      border: 1px solid #0004 !important;
      font-size: smaller;
      border-radius: 4px 0px 0px 4px;
    }
    textarea.add-layer-input {
      height: 90px;
      resize: none;
      border-radius: 4px;
    }
    .divider {
      margin: 1rem 0px;
      height: 1px;
      border-top: 1.5px solid #00417059;
      text-align: center;
      position: relative;
    }
    .divider span {
      position: relative;
      top: -.6em;
      padding: 0px 0.5rem;
      background: #f0f2f5;
      color: #00417059;
      font-weight: bold;
      display: inline-block;
    }
  `);this.eoxMap=null,this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const e=this.open?"open":"close",r=this.open==="url",n=this.open==="json",o=!Do(this.urlInput)||this.searchLoad?!0:tt;return m`
      <style>
        ${S(this,Ke)}
        ${!this.unstyled&&S(this,Qe)}
      </style>
      <div class="eox-add-layer-main">
        <div class="eox-add-layer-col">
          <!-- Tabbed interface for URL and JSON -->
          <ul class="eox-add-layer-tab ${e}">
            <li
              @click=${()=>R(this,q,Te).call(this,"url")}
              class="${r?"active":""}"
            >
              URL
            </li>
            <li
              @click=${()=>R(this,q,Te).call(this,"json")}
              class="${n?"active":""}"
            >
              JSON
            </li>
          </ul>

          <!-- Button to toggle tabs -->
          <button
            class="add-icon icon"
            @click=${()=>R(this,q,Te).call(this,this.open?null:"url")}
          >
            ${this.unstyled?"Add Layer":""}
          </button>
        </div>
        <div class="eox-add ${e}">
          ${r?m`
              <!-- Input field for URL -->
              <div class="eox-add-layer-col">
                <input 
                  type="text" 
                  class="add-url" 
                  placeholder="Add URL (WMS/XYZ)" 
                  .value="${this.urlInput}" 
                  @input=${R(this,q,Xr)}
                >
                </input>
                <!-- Search button for URL -->
                <button 
                  class="search-icon" 
                  disabled=${o} 
                  @click=${R(this,q,Wr)}
                >
                  ${this.unstyled?"Search":""}
                </button>
              </div>

              <!-- Display layers for WMS capabilities -->
              ${this.wmsCapabilities?m`<ul class="search-lists">
                      ${this.wmsCapabilities.Capability.Layer.Layer.map(a=>{const s=a.Name;return m`
                            <li class="search-list">
                              ${s}
                              <!-- Button to add layer -->
                              <button
                                class="add-layer-icon icon"
                                @click=${()=>R(this,q,Ci).call(this,a)}
                              >
                                ${this.unstyled?"+":""}
                              </button>
                            </li>
                          `})}
                    </ul>`:tt}
            `:m`
                <!-- Textarea for JSON input -->
                <textarea
                  class="add-layer-input"
                  placeholder="Please put a valid eox-map layer JSON."
                  @input=${R(this,q,Jr)}
                  .value=${this.jsonInput}
                ></textarea>

                <!-- Button to add JSON layer -->
                <button
                  class="add-layer-icon json-add-layer"
                  disabled=${ko(this.jsonInput)?tt:!0}
                  @click=${R(this,q,Gr)}
                >
                  ${this.unstyled?"Add JSON":""}
                </button>
              `}
        </div>
      </div>
    `}}q=new WeakSet,Xr=function(e){Ua(e,this)},Wr=async function(){const e=await za(this);e&&R(this,q,Ci).call(this,e)},Ci=function(e){ja(e,this),tr(this)},Gr=function(){tr(this)},Jr=function(e){Fa(e,this)},Te=function(e){qa(e,this)},Ke=new WeakMap,Qe=new WeakMap,O(Zr,"properties",{eoxMap:{attribute:!1,state:!0},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-add-layers",Zr);const Ya=(i,t)=>{if(t.requestUpdate(),i.target.tagName==="EOX-LAYERCONTROL-LAYER-TOOLS"){const e=t.renderRoot.querySelector("eox-layercontrol-optional-list");e==null||e.requestUpdate()}},er=i=>{const t=bi(i.for);return t&&t.map!==i.map&&(i.map=t.map),t};var Dt,Lt,Qr,tn,en,ti;class Kr extends ot{constructor(){super();T(this,Lt);T(this,Dt);T(this,ti,`
    :host, :root {
      font-family: Roboto, sans-serif;
      --padding: 0.5rem;
      --padding-vertical: .2rem;
      --list-padding: 48px;
      --layer-input-visibility: flex;
      --layer-summary-visibility: flex;
      --layer-type-visibility: block;
      --layer-title-visibility: flex;
      --layer-visibility: block;
      --layer-tools-button-visibility: flex;

      display: block;
      padding: var(--padding) 0;
      --background-color: var(--eox-background-color, transparent);
      background-color: var(--background-color, transparent);
    }
    select {
      background-color: var(--background-color);
    }
  `);this.for="eox-map",this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=["info","opacity","datetime","config","remove","sort"],this.addExternalLayers=!1,this.unstyled=!1,this.styleOverride="",this.toolsAsList=!1}firstUpdated(){this.eoxMap=er(this)}updated(e){e.has("for")&&(this.eoxMap=er(this))}get eoxMap(){return S(this,Dt)}set eoxMap(e){const r=S(this,Dt);bt(this,Dt,e),this.requestUpdate("eoxMap",r)}render(){var n,o,a;const e=(n=this.map)==null?void 0:n.getLayers().getArray(),r=e&&((o=Pi(e,"layerControlOptional",!0))==null?void 0:o.length)>0;return m`
      <style>
        ${!this.unstyled&&S(this,ti)}
        ${this.styleOverride}
      </style>

      <!-- Conditional rendering of add layers component -->
      ${F(this.addExternalLayers&&((a=S(this,Dt))==null?void 0:a.addOrUpdateLayer),()=>m`
          <eox-layercontrol-add-layers
            .noShadow=${!0}
            .eoxMap=${S(this,Dt)}
            .unstyled=${this.unstyled}
          ></eox-layercontrol-add-layers>
        `)}

      <!-- Conditional rendering of layer list component -->
      ${F(this.map,()=>m`
          <eox-layercontrol-layer-list
            .noShadow=${!0}
            class="layers"
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .map=${this.map}
            .titleProperty=${this.titleProperty}
            .showLayerZoomState=${this.showLayerZoomState}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
            .toolsAsList=${this.toolsAsList}
            @changed=${R(this,Lt,Qr)}
            @datetime:updated=${R(this,Lt,tn)}
            @layerConfig:change=${R(this,Lt,en)}
          ></eox-layercontrol-layer-list>
        `)}

      <!-- Conditional rendering of optional list component -->
      ${F(r,()=>m`
          <eox-layercontrol-optional-list
            .noShadow=${!0}
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .titleProperty=${this.titleProperty}
            @changed=${()=>this.requestUpdate()}
          ></eox-layercontrol-optional-list>
        `)}
    `}}Dt=new WeakMap,Lt=new WeakSet,Qr=function(e){Ya(e,this),this.dispatchEvent(new CustomEvent("layerchange",{detail:e.detail}))},tn=function(e){this.dispatchEvent(new CustomEvent("datetime:updated",{detail:e.detail}))},en=function(e){this.dispatchEvent(new CustomEvent("layerConfig:change",{detail:e.detail}))},ti=new WeakMap,O(Kr,"properties",{for:{type:String},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},addExternalLayers:{attribute:!1},unstyled:{type:Boolean},styleOverride:{type:String},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol",Kr);const Za=`
:host {
  display: block;
}
`,Xa=`
:host, :root {
  --navigation-button-display: inline-flex;
}

* {
  font-family: Roboto, sans-serif;
}

${or}
${Nr}

[part=controls] {
  display: flex;
  align-items: center;
  gap: 8px;
}

button.icon-text.play:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eplay%3C/title%3E%3Cpath d='M8,5.14V19.14L19,12.14L8,5.14Z' fill='%23fff' /%3E%3C/svg%3E");
}

button.icon-text.pause:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Epause%3C/title%3E%3Cpath d='M14,19H18V5H14M6,19H10V5H6V19Z' fill='%23fff' /%3E%3C/svg%3E");
}

button.icon.previous,
button.icon.next {
  display: var(--navigation-button-display);
}

button.icon.previous:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-left-circle%3C/title%3E%3Cpath fill='%23004170' d='M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M15.4,16.6L10.8,12L15.4,7.4L14,6L8,12L14,18L15.4,16.6Z' /%3E%3C/svg%3E");
}

button.icon.next:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-right-circle%3C/title%3E%3Cpath fill='%23004170' d='M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,18L16,12L10,6L8.6,7.4L13.2,12L8.6,16.6L10,18Z' /%3E%3C/svg%3E");
}
`;class Wa extends ot{static get properties(){return{width:{type:Number},steps:{type:Array}}}constructor(){super(),this.width=0,this.steps=[],this.height=6,this.svgWidth=0,this._yearMarks=[],this._years=[],this._sliderTicks=[]}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.handleResize.bind(this))}disconnectedCallback(){window.removeEventListener("resize",this.handleResize.bind(this)),super.disconnectedCallback()}firstUpdated(){this.yearMarks=this.calculateYearMarks(),this.sliderTicks=this.calculateSliderTicks(),this.handleResize()}updated(t){t.has("steps")&&(this.yearMarks=this.calculateYearMarks(),this.sliderTicks=this.calculateSliderTicks(),this.handleResize())}handleResize(){this.svgWidth=this.shadowRoot.querySelector("svg").clientWidth,this.height=this.shadowRoot.querySelector("svg").clientHeight}groupDatesByYear(){const t=[];return this.steps.forEach(e=>{const n=qt(e).year();let o=t.find(a=>a.year===n);o||(o={year:n,dates:[]},t.push(o)),o.dates.push(e)}),t}preprocessDates(){const t=[];this.steps.forEach(e=>{const n=qt(e).year();let o=t.find(a=>a.year===n);o||(o={year:n,ratio:0,dates:[]},t.push(o)),o.dates.push({date:e,isYearMarker:o.dates.length===0})});for(let e of t)e.ratio=e.dates.length/this.steps.length;return t}get sliderTicks(){return this._sliderTicks}set sliderTicks(t){this._sliderTicks=t,this.requestUpdate()}calculateYearBars(){return this._years.flatMap((r,n)=>{const o=this.steps.indexOf(r.dates[0].date)/(this.steps.length-1)*this.width,a=this.steps.indexOf(r.dates[r.dates.length-1].date)/(this.steps.length-1)*this.width,s=Math.max(0,a-o-2),l=[];return l.push(pt`
            <rect
              key=${n}
              x=${o+2/2} // Add half the spacing to the start position
              y="0"
              width=${s}
              height="6"
              fill="#7596A2"
            ></rect>
        `),s>=30&&l.push(pt`
                <text
                  key=${`label-${n}`}
                  x=${o+16}
                  y="26"
                  fill="#555"
                  font-size="14"
                  text-anchor="middle"
                >
                  ${r.year}
                </text>
            `),l})}calculateIndividualTicks(){return this._years.flatMap((t,e)=>{const r=this.steps.length,n=Math.max(1,Math.floor(r/this.width));return t.dates.filter((o,a)=>a%n===0).map((o,a)=>{const l=this.steps.indexOf(o.date)/(this.steps.length-1)*this.width,c=[];return c.push(pt`
                <line
                  key=${e}-${a}
                  x1=${l}
                  y1="0"
                  x2=${l}
                  y2=${o.isYearMarker?12:6}
                  stroke=${o.isYearMarker?"#222":"#7596A2"}
                  stroke-width="1"
                ></line>
              `),o.isYearMarker&&this.density>.03&&this.density<.5&&e%2==0&&c.push(pt`
                  <text
                    key=${`label-${e}`}
                    x=${l+16}
                    y="30"
                    fill="#555"
                    font-size="14"
                    text-anchor="middle"
                  >
                    ${t.year}
                  </text>
                `),c})})}get density(){return this.steps.length/this.width}calculateSliderTicks(){if(this.density<=.5)return this.calculateIndividualTicks();if(this.density>.5&&this.density<10)return this.calculateYearBars();if(this.density>=10)return this.calculateDecadeBars()}calculateDecadeBars(){const r=this._years.reduce((o,a)=>{const s=Math.floor(a.year/10)*10;return o[s]||(o[s]=[]),o[s].push(...a.dates),o},{});return Object.keys(r).flatMap((o,a)=>{const s=this.steps.indexOf(r[o][0].date)/(this.steps.length-1)*this.width,l=this.steps.indexOf(r[o][r[o].length-1].date)/(this.steps.length-1)*this.width,c=Math.max(0,l-s-2),u=[];return u.push(pt`
            <rect
              key=${`decade-${a}`}
              x=${s+2/2}
              y="0"
              width=${c}
              height="6"
              fill="#555"
            ></rect>
        `),c>=30&&u.push(pt`
                <text
                  key=${`decade-label-${a}`}
                  x=${s+18}
                  y="26"
                  fill="#333"
                  font-size="14"
                  text-anchor="middle"
                >
                  ${o}
                </text>
            `),u})}get lines(){const t=this.numLines>this.width/2?this.width/2:this.numLines,e=this.width/(t-1);return Array.from({length:this.numLines},(r,n)=>n*e)}get numLines(){return this.steps?this.steps.length:0}get yearMarks(){return this._yearMarks}set yearMarks(t){this._yearMarks=t,this.requestUpdate()}get years(){return this._years}set years(t){this._years=t,this.requestUpdate()}calculateYearMarks(){this._years=this.preprocessDates();const t=[];let e=null;return this.lines.forEach((r,n)=>{const a=qt(this.steps[n]).year();(n===0||a!==e)&&t.push({label:a,position:r}),e=a}),t}isYearLine(t){return this._yearMarks.some(r=>Math.abs(r.position-t)<1)}render(){return m`
      <div class="fill-width" style="margin-top: 3px;">
        <svg
          style="width: ${this.width}px; height: 30px;"
          viewBox="-1 0 ${this.width+2} ${this.height}"
        >
          ${this.sliderTicks}
        </svg>
      </div>
    `}}customElements.define("eox-sliderticks",Wa);var rn={exports:{}};(function(i,t){(function(e,r){i.exports=r()})(Ut,function(){return function(e,r,n){r.prototype.dayOfYear=function(o){var a=Math.round((n(this).startOf("day")-n(this).startOf("year"))/864e5)+1;return o==null?a:this.add(o-a,"day")}}})})(rn);var Ga=rn.exports;const Ja=Ti(Ga);var nn={exports:{}};(function(i,t){(function(e,r){i.exports=r()})(Ut,function(){var e="day";return function(r,n,o){var a=function(c){return c.add(4-c.isoWeekday(),e)},s=n.prototype;s.isoWeekYear=function(){return a(this).year()},s.isoWeek=function(c){if(!this.$utils().u(c))return this.add(7*(c-this.isoWeek()),e);var u,d,p,f,y=a(this),w=(u=this.isoWeekYear(),d=this.$u,p=(d?o.utc:o)().year(u).startOf("year"),f=4-p.isoWeekday(),p.isoWeekday()>4&&(f+=7),p.add(f,e));return y.diff(w,"week")+1},s.isoWeekday=function(c){return this.$utils().u(c)?this.day()||7:this.day(this.day()%7?c:c-7)};var l=s.startOf;s.startOf=function(c,u){var d=this.$utils(),p=!!d.u(u)||u;return d.p(c)==="isoweek"?p?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(c,u)}}})})(nn);var Ka=nn.exports;const Qa=Ti(Ka);qt.extend(Ja);qt.extend(Qa);class ts extends ot{static get properties(){return{controlProperty:{type:String,attribute:"control-property"},controlValues:{type:Array,attribute:"control-values"},for:{type:String},layer:{type:String},slider:{type:Boolean},navigation:{type:Boolean},_originalParams:{type:Object},play:{type:Boolean,attribute:"play"},displayFormat:{type:String,attribute:"display-format"},currentStep:{type:String,attribute:"current-step"},_animationInterval:{state:!0},_controlSource:{state:!0},_isAnimationPlaying:{state:!0},_newStepIndex:{state:!0},_eoxMap:{state:!0},_width:{state:!0},unstyled:{type:Boolean}}}constructor(){super(),this.controlValues=[],this._newStepIndex=0,this.unstyled=!1,this.play=!1,this.navigation=!0,this.slider=!1,this.for="eox-map",this.layer="",this.controlProperty=void 0,this._eoxMap=void 0,this._width=300,window.addEventListener("resize",()=>{this._width=this.clientWidth}),this.displayFormat=void 0}next(){this._updateStep(1)}previous(){this._updateStep(-1)}playAnimation(t){t?this._animationInterval=setInterval(()=>this._updateStep(1),500):clearInterval(this._animationInterval),this._isAnimationPlaying=t,this.requestUpdate()}setConfig(t){this.layer=t.layer??this.layer,this.controlProperty=t.controlProperty??this.controlProperty,this.controlValues=t.controlValues??this.controlValues,this.requestUpdate(),this._updateStep(0)}get currentStep(){return this.controlValues[this._newStepIndex]}set currentStep(t){const e=this.controlValues.findIndex(r=>r===t);e>-1?this._newStepIndex=e:console.error(`Unable to find step "${t}" in available times!`)}firstUpdated(){this.updateMap()}updated(t){t.has("for")&&this.updateMap()}updateMap(){const t=bi(this.for);if(t){const e=t;this.eoxMap=e}}get eoxMap(){return this._eoxMap}set eoxMap(t){const e=this._eoxMap;this._eoxMap=t,this.requestUpdate("eoxMap",e)}_updateStep(t=1){var e;t&&(this._newStepIndex=this._newStepIndex+t,this._newStepIndex>this.controlValues.length-1&&(this._newStepIndex=0),this._newStepIndex<0&&(this._newStepIndex=this.controlValues.length-1),this.layer&&this.for&&((e=this._controlSource)==null||e.updateParams({[this.controlProperty]:this.controlValues[this._newStepIndex]})),this.requestUpdate(),this.dispatchEvent(new CustomEvent("stepchange",{detail:{currentStep:this.currentStep}})))}getFlatLayersArray(t){const e=[];e.push(...t);let r=e.filter(n=>n instanceof Vi);for(;r.length;){const n=[];for(let o=0,a=r.length;o<a;o++){const s=r[o].getLayers().getArray();e.push(...s);const l=s.filter(c=>c instanceof Vi);n.push(...l)}r=n}return e}render(){if(this.layer&&this.for){const e=bi(this.for).map;e.once("loadend",()=>{if(!this._originalParams){const n=this.getFlatLayersArray(e.getLayers().getArray()).find(o=>o.get("id")===this.layer);this._controlSource=n.getSource(),this._originalParams=this._controlSource.getParams()}})}return m`
      <style>
        ${Za}
        ${!this.unstyled&&Xa}
      </style>
      <main>
        <div id="controls" part="controls">
          ${this.navigation?m`
                <button
                  part="previous"
                  class="icon previous"
                  @click="${()=>this.previous()}"
                >
                  <
                </button>
              `:tt}
          <span part="current">
            ${this.displayFormat?qt(this.controlValues[this._newStepIndex]).format(this.displayFormat):this.controlValues[this._newStepIndex]}
          </span>
          ${this.navigation?m`
                <button
                  part="next"
                  class="icon next"
                  @click="${()=>this.next()}"
                >
                  >
                </button>
              `:tt}
          ${this.play?m`
                <button
                  part="play"
                  class="small icon-text ${this._isAnimationPlaying?"pause":"play"}"
                  @click="${()=>this.playAnimation(!this._isAnimationPlaying)}"
                >
                  ${this._isAnimationPlaying?"Pause":"Play"}
                </button>
              `:tt}
        </div>
        <div>
          ${this.slider?m`
                <div class="slider-col">
                  <tc-range-slider
                    data="${this.controlValues}"
                    part="slider"
                    value="${this.controlValues[this._newStepIndex]}"
                    style="display: inline-block;"
                    @change="${t=>this._updateStep(this.controlValues.findIndex(e=>e===t.detail.value)-this._newStepIndex)}"
                  ></tc-range-slider>

                  <eox-sliderticks
                    .width="${this._width}"
                    .steps="${this.controlValues}"
                  ></eox-sliderticks>
                </div>
              `:""}
        </div>
      </main>
    `}}customElements.define("eox-timecontrol",ts);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const es=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const is={attribute:!0,type:String,converter:hn,reflect:!1,hasChanged:un},rs=(i=is,t,e)=>{const{kind:r,metadata:n}=e;let o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),o.set(e.name,i),r==="accessor"){const{name:a}=e;return{set(s){const l=t.get.call(this);t.set.call(this,s),this.requestUpdate(a,l,i)},init(s){return s!==void 0&&this.P(a,void 0,i),s}}}if(r==="setter"){const{name:a}=e;return function(s){const l=this[a];t.call(this,s),this.requestUpdate(a,l,i)}}throw Error("Unsupported decorator location: "+r)};function X(i){return(t,e)=>typeof e=="object"?rs(i,t,e):((r,n,o)=>{const a=n.hasOwnProperty(o);return n.constructor.createProperty(o,a?{...r,wrapped:!0}:r),a?Object.getOwnPropertyDescriptor(n,o):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ns=(i,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(i,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function os(i,t){return(e,r,n)=>{const o=a=>{var s;return((s=a.renderRoot)==null?void 0:s.querySelector(i))??null};return ns(e,r,{get(){return o(this)}})}}class as{constructor(t){this.cle=t}setColorScale(){switch(this.cle.scaleType){case"continuous":this.setContinousColorScale();break;case"discrete":this.setDiscreteColorScale();break;case"threshold":this.setThresholdColorScale();break;case"categorical":this.setCategoricalColorScale();break;default:this.invalidScaleType(this.cle.scaleType)}}setContinousColorScale(){const{interpolator:t,domain:e,range:r}=this.cle;this.colorScale=t?vn(t).domain(e):yi().range(r).domain(e).interpolate(ar)}setDiscreteColorScale(){this.colorScale=wn().domain(this.cle.domain).range(this.cle.range)}setThresholdColorScale(){const t=this.cle.domain;this.colorScale=xn().domain(t.slice(1,t.length-1)).range(this.cle.range)}setCategoricalColorScale(){this.colorScale=Sn().domain(this.cle.domain).range(this.cle.range)}invalidScaleType(t){throw new Error(`invalid property scaletype: ${t}.
      Must be one of "categorical", "continuous", "discrete", "threshold".`)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mi=ir(class extends rr{constructor(i){var t;if(super(i),i.type!==Ot.ATTRIBUTE||i.name!=="class"||((t=i.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var r,n;if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((r=this.nt)!=null&&r.has(o))&&this.st.add(o);return this.render(t)}const e=i.element.classList;for(const o of this.st)o in t||(e.remove(o),this.st.delete(o));for(const o in t){const a=!!t[o];a===this.st.has(o)||(n=this.nt)!=null&&n.has(o)||(a?(e.add(o),this.st.add(o)):(e.remove(o),this.st.delete(o)))}return Qt}});class ss{constructor(t){this.cle=t}render(){const t=this.cle.titleText?m`<p class="legend-title">${this.cle.titleText}</p>`:"",e={hidden:this.cle.scaleType==="categorical"},r={hidden:this.cle.scaleType!=="categorical","categorical-container":!0};return m`<div
      class="cle-container"
      style="width:${this.cle.width}px; height:auto;"
    >
      ${t}
      <slot name="subtitle"></slot>
      <svg
        class=${mi(e)}
        width=${this.cle.width}
        height=${this.cle.height}
      >
        <!-- discrete and threshold -->
        <g class="rects">${this.renderDiscreteThreshold()}</g>
        <!-- continuous -->
        ${this.renderContinuous()}
        <!-- axis ticks -->
        ${this.renderAxis()}
      </svg>
      <ul class=${mi(r)}>
        ${this.renderCategorical()}
      </ul>
      <slot name="footer"></slot>
    </div>`}renderCategorical(){if(this.cle.scaleType!=="categorical")return"";const{markType:t,colorScale:e,domain:r}=this.cle,n={"legend-item":!0,line:t==="line",circle:t==="circle"};return m`${r.map(o=>m`<li
          class=${mi(n)}
          style="--color:${e(o)}"
        >
          ${o}
        </li>`)}`}renderContinuous(){var d;if(this.cle.scaleType!=="continuous"||this.cle.colorScale===null)return"";const{colorScale:t,marginTop:e,marginLeft:r,marginRight:n,tickSize:o,width:a,range:s}=this.cle,l=this.cle.marginBottom+o,c=this.cle.height+o,u=((d=t.interpolator)==null?void 0:d.call(t))||En(ar,s);return pt`<image
      x=${r}
      y=${e}
      width=${a-n-r}
      height=${c-e-l}
      preserveAspectRatio="none"
      href=${this.getColorRamp(u).toDataURL()}
    ></image>`}renderDiscreteThreshold(){if(this.cle.scaleType!=="discrete"&&this.cle.scaleType!=="threshold")return"";const{tickSize:t,marginTop:e,marginLeft:r,colorScale:n,xScale:o}=this.cle,a=this.cle.height+t,s=this.cle.marginBottom+t,l=n.range(),c=d=>n.invertExtent(d).map(o)[0]||r,u=d=>{let[p,f]=n.invertExtent(d).map(o);return p=p||0,f=f||o.range()[1],f-p};return pt`${l.map(d=>pt`<rect x=${c(d)} y=${e} width=${u(d)} height=${a-e-s} fill=${d}></rect>`)}`}renderAxis(){if(!this.cle.xScale||this.cle.scaleType==="categorical")return"";const{ticks:t,tickSize:e,tickFormat:r,tickFormatter:n,tickValues:o,xScale:a,marginTop:s}=this.cle,l=this.cle.height+e,c=this.cle.marginBottom+e,u=o!=null&&o.length?o:a.ticks.apply(a,[t,r]),d=Math.max(e,0)+3,p=()=>u.map(f=>pt`<g class="tick" transform='translate(${a(f)},0)'>
      <line stroke="currentColor" y2="${e}" y1="${s+c-l}"></line>
      <text fill="currentColor" y="${d}" dy="0.71em">${n(f)}</text>
      </g>`);return pt`<g
      class="x-axis"
      transform="translate(0, ${l-c})"
      text-anchor="middle"
    >${p()}</g>`}getColorRamp(t,e=256){const r=document.createElement("canvas");r.setAttribute("height","1"),r.setAttribute("width",`${e}`);const n=r.getContext("2d");for(let o=0;o<e;o++)n.fillStyle=t(o/(e-1)),n.fillRect(o,0,1,1);return r}}const ls=325,cs=32,ds=6,us=12,hs=16,ps=12,on=5,fs=6,an=".1f",gs=[0,1],ms=["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],ys="Color Legend Element",bs="circle",vs="continuous",ws=["domain","range","interpolator","scaleType"],xs=["scaleType","ticks","tickSize","tickValues","tickFormat","tickFormatter","domain","range","marginLeft","marginRight","marginBottom","marginTop","width","height"];class Ss{constructor(t){this.cle=t}setXScale(){const{scaleType:t,marginLeft:e,width:r,marginRight:n}=this.cle;switch(t){case"continuous":this.xScale=yi().domain(this.cle.domain).range([e,r-n]);break;case"discrete":case"threshold":this.xScale=yi().domain([this.cle.domain[0],this.cle.domain[this.cle.domain.length-1]]).rangeRound([e,r-n]);break;case"categorical":this.xScale=null;break;default:throw new Error(`Unrecognized scaleType: ${t}`)}}handleAxisTicks(){var t,e,r;if((this.cle.scaleType==="discrete"||this.cle.scaleType==="threshold")&&!this.cle.tickValues){const[n,o]=this.xScale.domain();this.cle.tickValues=[n,...((e=(t=this.cle.colorScale)==null?void 0:t.thresholds)==null?void 0:e.call(t))||this.cle.colorScale.domain(),o]}typeof this.cle.tickFormatter!="function"&&((r=this.cle.tickFormat)!=null&&r.length?this.cle.tickFormatter=Cn(this.cle.tickFormat):this.cle.tickFormatter=this.xScale.tickFormat(this.cle.ticks||on,this.cle.tickFormat||an))}}const Es=$i`
  :host {
    --cle-font-family: sans-serif;
    --cle-font-family-title: var(--cle-font-family);
    --cle-font-size: 0.75rem;
    --cle-font-size-title: 0.875rem;
    --cle-letter-spacing: 0.3px;
    --cle-letter-spacing-title: 0.25px;
    --cle-font-weight: 400;
    --cle-font-weight-title: 500;
    --cle-color: currentColor;
    --cle-background: #fff;
    --cle-padding: 0.375rem;
    --cle-border: none;
    --cle-border-radius: 0;
    --cle-box-sizing: content-box;
    --cle-columns: 2;
    --cle-column-width: auto;
    --cle-item-margin: 0.375rem 0.75rem 0 0;
    --cle-line-width: 24px;
    --cle-line-height: 2px;
    --cle-swatch-size: 10px;
    --cle-swatch-width: var(--cle-swatch-size);
    --cle-swatch-height: var(--cle-swatch-size);
    --cle-swatch-margin: 0 0.5rem 0 0;
  }

  :host([hidden]),
  .hidden {
    display: none !important;
  }

  div.cle-container {
    font-family: var(--cle-font-family);
    font-size: var(--cle-font-size);
    font-weight: var(--cle-font-weight);
    letter-spacing: var(--cle-letter-spacing);
    color: var(--cle-color);
    background: var(--cle-background);
    display: inline-block;
    padding: var(--cle-padding);
    border: var(--cle-border);
    border-radius: var(--cle-border-radius);
    box-sizing: var(--cle-box-sizing);
  }

  svg {
    display: block;
    overflow: visible;
  }

  svg text {
    font-family: var(--cle-font-family);
    font-size: var(--cle-font-size);
    fill: var(--cle-color);
  }

  p.legend-title {
    margin: 0;
    font-family: var(--cle-font-family-title);
    font-size: var(--cle-font-size-title);
    font-weight: var(--cle-font-weight-title);
    letter-spacing: var(--cle-letter-spacing-title);
  }

  ul.categorical-container {
    padding: 0;
    margin: 0;
    column-count: var(--cle-columns);
    column-width: var(--cle-column-width);
  }

  .legend-item {
    display: inline-flex;
    align-items: center;
    margin: var(--cle-item-margin);
  }

  .legend-item::before {
    content: "";
    width: var(--cle-swatch-width);
    height: var(--cle-swatch-height);
    margin: var(--cle-swatch-margin);
    background: var(--color);
  }

  .legend-item.line::before {
    width: var(--cle-line-width);
    height: var(--cle-line-height);
  }

  .legend-item.circle::before {
    border-radius: 50%;
  }
`;var U=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let V=class extends ot{constructor(){super(...arguments),this.titleText=ys,this.width=ls,this.height=cs,this.marginTop=ds,this.marginRight=us,this.marginBottom=hs,this.marginLeft=ps,this.scaleType=vs,this.domain=gs,this.range=ms,this.markType=bs,this.ticks=on,this.tickFormat=an,this.tickSize=fs,this.colorScaleSetter=new as(this),this.axisTickSetter=new Ss(this),this.renderer=new ss(this)}get interpolator(){return this._interpolator}set interpolator(t){if(typeof t=="function"){const e=this.interpolator;this._interpolator=t,this.requestUpdate("interpolator",e)}else throw new Error("interpolator must be a function.")}get tickFormatter(){return this._tickFormatter}set tickFormatter(t){if(typeof t=="function"){const e=this.tickFormatter;this._tickFormatter=t,this.requestUpdate("tickFormatter",e)}else throw new Error("tickFormatter must be a function.")}get colorScale(){return this.colorScaleSetter.colorScale}get xScale(){return this.axisTickSetter.xScale}render(){return this.renderer.render()}willUpdate(t){ws.some(e=>t.has(e))&&this.colorScaleSetter.setColorScale(),xs.some(e=>t.has(e))&&(this.axisTickSetter.setXScale(),this.axisTickSetter.handleAxisTicks())}};V.styles=[Es];U([X({type:String})],V.prototype,"titleText",void 0);U([X({type:Number})],V.prototype,"width",void 0);U([X({type:Number})],V.prototype,"height",void 0);U([X({type:Number})],V.prototype,"marginTop",void 0);U([X({type:Number})],V.prototype,"marginRight",void 0);U([X({type:Number})],V.prototype,"marginBottom",void 0);U([X({type:Number})],V.prototype,"marginLeft",void 0);U([X({type:String})],V.prototype,"scaleType",void 0);U([X({type:Array})],V.prototype,"domain",void 0);U([X({type:Array})],V.prototype,"range",void 0);U([X({type:String})],V.prototype,"markType",void 0);U([X({type:Number})],V.prototype,"ticks",void 0);U([X({type:String})],V.prototype,"tickFormat",void 0);U([X({type:Number})],V.prototype,"tickSize",void 0);U([X({type:Array})],V.prototype,"tickValues",void 0);U([os("svg")],V.prototype,"svg",void 0);U([X({attribute:!1})],V.prototype,"interpolator",null);U([X({attribute:!1})],V.prototype,"tickFormatter",null);V=U([es("color-legend")],V);const Cs={class:"d-flex flex-column fill-height overflow-auto"},$s=["for"],Ts=`
input[type="range"] {
  background:transparent !important;
}
`,Fs={__name:"EodashLayerControl",props:{map:{type:String,default:"first"},tools:{type:Array,default:()=>["datetime","info","config","legend","opacity"]},cssVars:{type:Object}},setup(i){const t=i,e={tools:t.tools,style:t.cssVars},{selectedCompareStac:r,selectedStac:n}=$n(Tn()),o=Ln(()=>t.map==="second"?Bi.value!==null&&r.value!==null:Ni.value!==null&&n.value!==null),a=t.map==="second"?_n:An,s=t.map==="second"?Bi:Ni,l=Rn(null),c=async f=>{var W;const{layer:y,datetime:w}=f.detail,k=await kn(a,y);let B=[];k&&(await k.fetchCollection(),B=await k.updateLayerJson(w,y.get("id"),t.map));const D=(W=B==null?void 0:B.find(M=>{var et;return((et=M==null?void 0:M.properties)==null?void 0:et.id)==="AnalysisGroup"}))==null?void 0:W.layers;D!=null&&D.length&&(D==null||D.forEach(M=>{M.properties.layerControlExpand=!0,M.properties.layerControlToolsExpand=!0}),s.value.layers=B)};let u;const d=f=>{clearTimeout(u),u=setTimeout(()=>{c(f)},500)},p=f=>{Dn.value=f.detail.jsonformValue};return(f,y)=>(Fi(),Hi("span",Cs,[o.value?(Fi(),Hi("eox-layercontrol",Mn({key:0},e,{for:On(s),"onDatetime:updated":d,class:"fill-height",toolsAsList:"true",style:{"--eox-background-color":"transparent"},ref_key:"eoxLayercontrol",ref:l,"on:layerConfig:change":p,".styleOverride":Ts}),null,48,$s)):Pn("v-if",!0)]))}};export{Fs as default};
