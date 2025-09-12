var yn=Object.defineProperty;var Bi=i=>{throw TypeError(i)};var mn=(i,t,e)=>t in i?yn(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var O=(i,t,e)=>mn(i,typeof t!="symbol"?t+"":t,e),oi=(i,t,e)=>t.has(i)||Bi("Cannot "+e);var x=(i,t,e)=>(oi(i,t,"read from private field"),e?e.call(i):t.get(i)),C=(i,t,e)=>t.has(i)?Bi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),vt=(i,t,e,r)=>(oi(i,t,"write to private field"),r?r.call(i,e):t.set(i,e),e),P=(i,t,e)=>(oi(i,t,"access private method"),e);import{x as h,T as Qt,E as st,i as nt,b as Ae,e as ii,a as sr,c as pt,f as vn,u as bn}from"./addCommonStyleSheet.mvVW20o2.js";import{n as V}from"./when.BR7zwNJC.js";import{c as wn,d as zt}from"./repeat.B3BzbpQ4.js";import{e as lr,i as cr,t as Rt}from"./directive.CvdRHFdJ.js";import{f as Sn,m as xn}from"./directive-helpers.IWk1ol-N.js";import{a as Se,o as En}from"./unsafe-html.CVr0qmJM.js";import{c as Ft,g as Li}from"./commonjsHelpers.BosuxZz1.js";import{_ as $n}from"./index.BUIxO2d3.js";import{g as Si}from"./getElement.CdRlZPdn.js";import"./main.DLl5AATu.js";import{L as Ni}from"./Group.TOLTOuRh.js";import"./toolcool-range-slider.min.BBXDELo7.js";import{s as Tn,l as xi,i as dr,q as _n,t as Cn,o as An,p as Ln,f as Dn}from"./sequential.Bu6O1RMr.js";import{_ as Vn,s as kn,a as Mn,a0 as Fi,$ as Ui,i as Rn,h as On,a4 as Pn,a3 as In,bo as Hn}from"./eo-dash.55s4DsQL.js";import{h as Bn,p as Nn,c as ai,o as si,e as qi,K as Fn,k as zi,r as Un,j as ji,t as qn}from"./framework.BDpniWK7.js";import"./browser.CQpScIU-.js";import"./utils.DZj92Qv1.js";import"./index.BSpBAx16.js";import"./extent.Dy7YBqBe.js";import"./item.koN_VtZd.js";/**
 * wms-capabilities @0.6.0
 * @description WMS service Capabilities > JSON, based on openlayers 
 * @license BSD-2-Clause
 * @preserve
 */var E=i=>i!==void 0,ur=(i,t,e)=>t in i?i[t]:i[t]=e;const ce={ELEMENT:1,TEXT:3,CDATA_SECTION:4};class zn{constructor(t){this._parser=new t}toDocument(t){return this._parser.parseFromString(t,"application/xml")}getAllTextContent(t,e){return ri(t,e).join("")}}function ri(i,t){return hr(i,t,[]).join("")}function hr(i,t,e){if(i.nodeType===ce.CDATA_SECTION||i.nodeType===ce.TEXT)t?e.push(String(i.nodeValue).replace(/(\r\n|\r|\n)/g,"")):e.push(i.nodeValue);else{var r;for(r=i.firstChild;r;r=r.nextSibling)hr(r,t,e)}return e}function jn(i,t,e,r){for(var n=Yn(t);n;n=Zn(n)){var o=n.namespaceURI||null,a=i[o];if(E(a)){var s=a[n.localName];E(s)&&s.call(r,n,e)}}}function Yn(i){let t=i.firstElementChild||i.firstChild;for(;t&&t.nodeType!==ce.ELEMENT;)t=t.nextSibling;return t}function Zn(i){let t=i.nextElementSibling||i.nextSibling;for(;t&&t.nodeType!==ce.ELEMENT;)t=t.nextSibling;return t}function Y(i,t,e){return Xn(i,t,e)}function Xn(i,t,e){var r=E(e)?e:{},n,o;for(n=0,o=i.length;n<o;++n)r[i[n]]=t;return r}function pr(i,t){return function(e,r){var n=i.call(E(t)?t:this,e,r);if(E(n)){var o=r[r.length-1];o.push(n)}}}function q(i,t,e,r,n){return r.push(i),jn(t,e,r,n),r.pop()}function m(i,t,e){return function(r,n){let o=i.call(E(e)?e:this,r,n);if(E(o)){var a=n[n.length-1],s=E(t)?t:r.localName;a[s]=o}}}function it(i,t,e){return function(r,n){var o=i.call(E(e)?e:this,r,n);if(E(o)){var a=n[n.length-1],s=E(t)?t:r.localName,l=ur(a,s,[]);l.push(o)}}}const Wn=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function Gn(i){return i.replace(Wn,"")}function Pt(i){const t=/^\s*(true|1)|(false|0)\s*$/.exec(i);if(t)return E(t[1])||!1}function Ut(i){return wt(ri(i,!1))}function wt(i){const t=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(i);if(t)return parseFloat(t[1])}function li(i){return Le(ri(i,!1))}function Le(i){const t=/^\s*(\d+)\s*$/.exec(i);if(t)return parseInt(t[1],10)}function _(i){return Gn(ri(i,!1))}const Jn="http://www.w3.org/1999/xlink";function Di(i){return i.getAttributeNS(Jn,"href")}function Kn(i,t){return q({},_o,i,t)}function fr(i){return[wt(i.getAttribute("minx")),wt(i.getAttribute("miny")),wt(i.getAttribute("maxx")),wt(i.getAttribute("maxy"))]}function Qn(i,t){const e=fr(i),r=[wt(i.getAttribute("resx")),wt(i.getAttribute("resy"))];return{crs:i.getAttribute("CRS")||i.getAttribute("SRS"),extent:e,res:r}}function to(i,t){const e=fr(i);if(!(!E(e[0])||!E(e[1])||!E(e[2])||!E(e[3])))return e}function eo(i,t){const e=parseFloat(i.getAttribute("min")),r=parseFloat(i.getAttribute("max"));return{min:e,max:r}}function io(i,t){const e=q({},Co,i,t);if(!E(e))return;const r=e.westBoundLongitude,n=e.southBoundLatitude,o=e.eastBoundLongitude,a=e.northBoundLatitude;if(!(!E(r)||!E(n)||!E(o)||!E(a)))return[r,n,o,a]}function ro(i,t){return q({},wo,i,t)}function no(i,t){return q({},So,i,t)}function oo(i,t){return q({},xo,i,t)}function ao(i,t){return q({},Eo,i,t)}function so(i,t){return q({},$o,i,t)}function lo(i,t){return q([],To,i,t)}function co(i,t){const e=Pt(i.getAttribute("queryable"));return q({queryable:E(e)?e:!1},mr,i,t)}function uo(i,t){var e=t[t.length-1];const r=q({},mr,i,t);if(!E(r))return;let n=Pt(i.getAttribute("queryable"));E(n)||(n=e.queryable),r.queryable=E(n)?n:!1;let o=Le(i.getAttribute("cascaded"));E(o)||(o=e.cascaded),r.cascaded=o;let a=Pt(i.getAttribute("opaque"));E(a)||(a=e.opaque),r.opaque=E(a)?a:!1;let s=Pt(i.getAttribute("noSubsets"));E(s)||(s=e.noSubsets),r.noSubsets=E(s)?s:!1;let l=wt(i.getAttribute("fixedWidth"));E(l)||(l=e.fixedWidth),r.fixedWidth=l;let c=wt(i.getAttribute("fixedHeight"));E(c)||(c=e.fixedHeight),r.fixedHeight=c;const u=["Style","CRS","AuthorityURL"];for(let f=0,g=u.length;f<g;f++){const y=u[f],v=e[y];if(E(v)){let k=ur(r,y,[]);k=k.concat(v),r[y]=k}}const d=["EX_GeographicBoundingBox","BoundingBox","Dimension","Attribution","MinScaleDenominator","MaxScaleDenominator"];for(let f=0,g=d.length;f<g;f++){const y=d[f],v=r[y];if(!E(v)){const k=e[y];r[y]=k}}return r}function ho(i,t){return{name:i.getAttribute("name"),units:i.getAttribute("units"),unitSymbol:i.getAttribute("unitSymbol"),default:i.getAttribute("default"),multipleValues:Pt(i.getAttribute("multipleValues")),nearestValue:Pt(i.getAttribute("nearestValue")),current:Pt(i.getAttribute("current")),values:_(i)}}function xt(i,t){return q({},Mo,i,t)}function po(i,t){return q({},Ao,i,t)}function fo(i,t){return q({},Do,i,t)}function go(i,t){return q({},Vo,i,t)}function ci(i,t){return q({},Lo,i,t)}function gr(i,t){var e=xt(i,t);if(E(e)){const r=[Le(i.getAttribute("width")),Le(i.getAttribute("height"))];return e.size=r,e}}function yo(i,t){var e=xt(i,t);if(E(e))return e.name=i.getAttribute("name"),e}function mo(i,t){var e=xt(i,t);if(E(e))return e.type=i.getAttribute("type"),e}function vo(i,t){return q({},ko,i,t)}function yr(i,t){return q([],Ro,i,t)}const Z=[null,"http://www.opengis.net/wms"],bo=Y(Z,{Service:m(no),Capability:m(ro)}),wo=Y(Z,{Request:m(po),Exception:m(lo),Layer:m(co)}),So=Y(Z,{Name:m(_),Title:m(_),Abstract:m(_),KeywordList:m(yr),OnlineResource:m(Di),ContactInformation:m(oo),Fees:m(_),AccessConstraints:m(_),LayerLimit:m(li),MaxWidth:m(li),MaxHeight:m(li)}),xo=Y(Z,{ContactPersonPrimary:m(ao),ContactPosition:m(_),ContactAddress:m(so),ContactVoiceTelephone:m(_),ContactFacsimileTelephone:m(_),ContactElectronicMailAddress:m(_)}),Eo=Y(Z,{ContactPerson:m(_),ContactOrganization:m(_)}),$o=Y(Z,{AddressType:m(_),Address:m(_),City:m(_),StateOrProvince:m(_),PostCode:m(_),Country:m(_)}),To=Y(Z,{Format:pr(_)}),mr=Y(Z,{Name:m(_),Title:m(_),Abstract:m(_),KeywordList:m(yr),CRS:it(_),SRS:it(_),EX_GeographicBoundingBox:m(io),LatLonBoundingBox:m(to),BoundingBox:it(Qn),Dimension:it(ho),Attribution:m(Kn),AuthorityURL:it(yo),Identifier:it(_),MetadataURL:it(mo),DataURL:it(xt),FeatureListURL:it(xt),Style:it(vo),MinScaleDenominator:m(Ut),MaxScaleDenominator:m(Ut),ScaleHint:m(eo),Layer:it(uo)}),_o=Y(Z,{Title:m(_),OnlineResource:m(Di),LogoURL:m(gr)}),Co=Y(Z,{westBoundLongitude:m(Ut),eastBoundLongitude:m(Ut),southBoundLatitude:m(Ut),northBoundLatitude:m(Ut)}),Ao=Y(Z,{GetCapabilities:m(ci),GetMap:m(ci),GetFeatureInfo:m(ci)}),Lo=Y(Z,{Format:it(_),DCPType:it(fo)}),Do=Y(Z,{HTTP:m(go)}),Vo=Y(Z,{Get:m(xt),Post:m(xt)}),ko=Y(Z,{Name:m(_),Title:m(_),Abstract:m(_),LegendURL:it(gr),StyleSheetURL:m(xt),StyleURL:m(xt)}),Mo=Y(Z,{Format:m(_),OnlineResource:m(Di)}),Ro=Y(Z,{Keyword:pr(_)});class Oo{constructor(t,e){!e&&typeof window<"u"&&(e=window.DOMParser),this.version=void 0,this._parser=new zn(e),this._data=t}data(t){return this._data=t,this}toJSON(t){return t=t||this._data,this.parse(t)}parse(t){return this.readFromDocument(this._parser.toDocument(t))}readFromDocument(t){for(let e=t.firstChild;e;e=e.nextSibling)if(e.nodeType==ce.ELEMENT)return this.readFromNode(e);return null}readFromNode(t){return this.version=t.getAttribute("version"),q({version:this.version},bo,t,[])||null}}async function Po(i){let t=new URL(i),e=t.searchParams;e.set("SERVICE","WMS"),e.set("REQUEST","GetCapabilities");let r=t.toString();const n=await fetch(r);if(n.ok){const o=await n.text();return new Oo(o).toJSON()}else throw new Error(`Error: ${n.status}`)}function Vi(i){const t=/\b(?:wms|ows)\b/i,e=/{(?:z|x|y-?)}\/{(?:z|x|y-?)}\/{(?:z|x|y-?)}/i;return t.test(i)?"TileWMS":e.test(i)?"XYZ":!1}function Io(i){const e=/^(?:(?:https?|ftp):\/\/|\/\/)?(?:localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:\w+[\w-]*\.)+\w+)(?::\d+)?(?:\/\S*)?$/.test(i),r=Vi(i);return!!(i&&e&&r)}function vr(i){return i.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,'"$2": ').replace(/,\s*}/g,"}").replace(/,\s*]/g,"]").replace(/\s*(\{|}|\[|\]|,)\s*/g,"$1").replaceAll('": //',"://")}function Ho(i){try{return JSON.parse(vr(i)),!!i}catch{return!1}}function Bo(i,t){const e=new URL(i).searchParams;Object.entries(t).forEach(([a,s])=>{typeof s=="object"&&!Array.isArray(s)&&s!==null?Object.keys(s).forEach(l=>{e.set(l,s[l])}):e.set(a,s)});const r=i.split("?")[0],n=e.toString();return`${r}?${n}`}/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function Yi(i,t){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(i,n).enumerable})),e.push.apply(e,r)}return e}function yt(i){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Yi(Object(e),!0).forEach(function(r){No(i,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):Yi(Object(e)).forEach(function(r){Object.defineProperty(i,r,Object.getOwnPropertyDescriptor(e,r))})}return i}function xe(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?xe=function(t){return typeof t}:xe=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xe(i)}function No(i,t,e){return t in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e,i}function Et(){return Et=Object.assign||function(i){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=e[r])}return i},Et.apply(this,arguments)}function Fo(i,t){if(i==null)return{};var e={},r=Object.keys(i),n,o;for(o=0;o<r.length;o++)n=r[o],!(t.indexOf(n)>=0)&&(e[n]=i[n]);return e}function Uo(i,t){if(i==null)return{};var e=Fo(i,t),r,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(i);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(i,r)&&(e[r]=i[r])}return e}var qo="1.15.6";function St(i){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(i)}var $t=St(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),pe=St(/Edge/i),Zi=St(/firefox/i),re=St(/safari/i)&&!St(/chrome/i)&&!St(/android/i),ki=St(/iP(ad|od|hone)/i),br=St(/chrome/i)&&St(/android/i),wr={capture:!1,passive:!1};function T(i,t,e){i.addEventListener(t,e,!$t&&wr)}function $(i,t,e){i.removeEventListener(t,e,!$t&&wr)}function De(i,t){if(t){if(t[0]===">"&&(t=t.substring(1)),i)try{if(i.matches)return i.matches(t);if(i.msMatchesSelector)return i.msMatchesSelector(t);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(t)}catch{return!1}return!1}}function Sr(i){return i.host&&i!==document&&i.host.nodeType?i.host:i.parentNode}function ht(i,t,e,r){if(i){e=e||document;do{if(t!=null&&(t[0]===">"?i.parentNode===e&&De(i,t):De(i,t))||r&&i===e)return i;if(i===e)break}while(i=Sr(i))}return null}var Xi=/\s+/g;function ot(i,t,e){if(i&&t)if(i.classList)i.classList[e?"add":"remove"](t);else{var r=(" "+i.className+" ").replace(Xi," ").replace(" "+t+" "," ");i.className=(r+(e?" "+t:"")).replace(Xi," ")}}function b(i,t,e){var r=i&&i.style;if(r){if(e===void 0)return document.defaultView&&document.defaultView.getComputedStyle?e=document.defaultView.getComputedStyle(i,""):i.currentStyle&&(e=i.currentStyle),t===void 0?e:e[t];!(t in r)&&t.indexOf("webkit")===-1&&(t="-webkit-"+t),r[t]=e+(typeof e=="string"?"":"px")}}function jt(i,t){var e="";if(typeof i=="string")e=i;else do{var r=b(i,"transform");r&&r!=="none"&&(e=r+" "+e)}while(!t&&(i=i.parentNode));var n=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return n&&new n(e)}function xr(i,t,e){if(i){var r=i.getElementsByTagName(t),n=0,o=r.length;if(e)for(;n<o;n++)e(r[n],n);return r}return[]}function gt(){var i=document.scrollingElement;return i||document.documentElement}function F(i,t,e,r,n){if(!(!i.getBoundingClientRect&&i!==window)){var o,a,s,l,c,u,d;if(i!==window&&i.parentNode&&i!==gt()?(o=i.getBoundingClientRect(),a=o.top,s=o.left,l=o.bottom,c=o.right,u=o.height,d=o.width):(a=0,s=0,l=window.innerHeight,c=window.innerWidth,u=window.innerHeight,d=window.innerWidth),(t||e)&&i!==window&&(n=n||i.parentNode,!$t))do if(n&&n.getBoundingClientRect&&(b(n,"transform")!=="none"||e&&b(n,"position")!=="static")){var f=n.getBoundingClientRect();a-=f.top+parseInt(b(n,"border-top-width")),s-=f.left+parseInt(b(n,"border-left-width")),l=a+o.height,c=s+o.width;break}while(n=n.parentNode);if(r&&i!==window){var g=jt(n||i),y=g&&g.a,v=g&&g.d;g&&(a/=v,s/=y,d/=y,u/=v,l=a+u,c=s+d)}return{top:a,left:s,bottom:l,right:c,width:d,height:u}}}function Wi(i,t,e){for(var r=Dt(i,!0),n=F(i)[t];r;){var o=F(r)[e],a=void 0;if(a=n>=o,!a)return r;if(r===gt())break;r=Dt(r,!1)}return!1}function Zt(i,t,e,r){for(var n=0,o=0,a=i.children;o<a.length;){if(a[o].style.display!=="none"&&a[o]!==w.ghost&&(r||a[o]!==w.dragged)&&ht(a[o],e.draggable,i,!1)){if(n===t)return a[o];n++}o++}return null}function Mi(i,t){for(var e=i.lastElementChild;e&&(e===w.ghost||b(e,"display")==="none"||t&&!De(e,t));)e=e.previousElementSibling;return e||null}function lt(i,t){var e=0;if(!i||!i.parentNode)return-1;for(;i=i.previousElementSibling;)i.nodeName.toUpperCase()!=="TEMPLATE"&&i!==w.clone&&(!t||De(i,t))&&e++;return e}function Gi(i){var t=0,e=0,r=gt();if(i)do{var n=jt(i),o=n.a,a=n.d;t+=i.scrollLeft*o,e+=i.scrollTop*a}while(i!==r&&(i=i.parentNode));return[t,e]}function zo(i,t){for(var e in i)if(i.hasOwnProperty(e)){for(var r in t)if(t.hasOwnProperty(r)&&t[r]===i[e][r])return Number(e)}return-1}function Dt(i,t){if(!i||!i.getBoundingClientRect)return gt();var e=i,r=!1;do if(e.clientWidth<e.scrollWidth||e.clientHeight<e.scrollHeight){var n=b(e);if(e.clientWidth<e.scrollWidth&&(n.overflowX=="auto"||n.overflowX=="scroll")||e.clientHeight<e.scrollHeight&&(n.overflowY=="auto"||n.overflowY=="scroll")){if(!e.getBoundingClientRect||e===document.body)return gt();if(r||t)return e;r=!0}}while(e=e.parentNode);return gt()}function jo(i,t){if(i&&t)for(var e in t)t.hasOwnProperty(e)&&(i[e]=t[e]);return i}function di(i,t){return Math.round(i.top)===Math.round(t.top)&&Math.round(i.left)===Math.round(t.left)&&Math.round(i.height)===Math.round(t.height)&&Math.round(i.width)===Math.round(t.width)}var ne;function Er(i,t){return function(){if(!ne){var e=arguments,r=this;e.length===1?i.call(r,e[0]):i.apply(r,e),ne=setTimeout(function(){ne=void 0},t)}}}function Yo(){clearTimeout(ne),ne=void 0}function $r(i,t,e){i.scrollLeft+=t,i.scrollTop+=e}function Tr(i){var t=window.Polymer,e=window.jQuery||window.Zepto;return t&&t.dom?t.dom(i).cloneNode(!0):e?e(i).clone(!0)[0]:i.cloneNode(!0)}function _r(i,t,e){var r={};return Array.from(i.children).forEach(function(n){var o,a,s,l;if(!(!ht(n,t.draggable,i,!1)||n.animated||n===e)){var c=F(n);r.left=Math.min((o=r.left)!==null&&o!==void 0?o:1/0,c.left),r.top=Math.min((a=r.top)!==null&&a!==void 0?a:1/0,c.top),r.right=Math.max((s=r.right)!==null&&s!==void 0?s:-1/0,c.right),r.bottom=Math.max((l=r.bottom)!==null&&l!==void 0?l:-1/0,c.bottom)}}),r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}var rt="Sortable"+new Date().getTime();function Zo(){var i=[],t;return{captureAnimationState:function(){if(i=[],!!this.options.animation){var r=[].slice.call(this.el.children);r.forEach(function(n){if(!(b(n,"display")==="none"||n===w.ghost)){i.push({target:n,rect:F(n)});var o=yt({},i[i.length-1].rect);if(n.thisAnimationDuration){var a=jt(n,!0);a&&(o.top-=a.f,o.left-=a.e)}n.fromRect=o}})}},addAnimationState:function(r){i.push(r)},removeAnimationState:function(r){i.splice(zo(i,{target:r}),1)},animateAll:function(r){var n=this;if(!this.options.animation){clearTimeout(t),typeof r=="function"&&r();return}var o=!1,a=0;i.forEach(function(s){var l=0,c=s.target,u=c.fromRect,d=F(c),f=c.prevFromRect,g=c.prevToRect,y=s.rect,v=jt(c,!0);v&&(d.top-=v.f,d.left-=v.e),c.toRect=d,c.thisAnimationDuration&&di(f,d)&&!di(u,d)&&(y.top-d.top)/(y.left-d.left)===(u.top-d.top)/(u.left-d.left)&&(l=Wo(y,f,g,n.options)),di(d,u)||(c.prevFromRect=u,c.prevToRect=d,l||(l=n.options.animation),n.animate(c,y,d,l)),l&&(o=!0,a=Math.max(a,l),clearTimeout(c.animationResetTimer),c.animationResetTimer=setTimeout(function(){c.animationTime=0,c.prevFromRect=null,c.fromRect=null,c.prevToRect=null,c.thisAnimationDuration=null},l),c.thisAnimationDuration=l)}),clearTimeout(t),o?t=setTimeout(function(){typeof r=="function"&&r()},a):typeof r=="function"&&r(),i=[]},animate:function(r,n,o,a){if(a){b(r,"transition",""),b(r,"transform","");var s=jt(this.el),l=s&&s.a,c=s&&s.d,u=(n.left-o.left)/(l||1),d=(n.top-o.top)/(c||1);r.animatingX=!!u,r.animatingY=!!d,b(r,"transform","translate3d("+u+"px,"+d+"px,0)"),this.forRepaintDummy=Xo(r),b(r,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),b(r,"transform","translate3d(0,0,0)"),typeof r.animated=="number"&&clearTimeout(r.animated),r.animated=setTimeout(function(){b(r,"transition",""),b(r,"transform",""),r.animated=!1,r.animatingX=!1,r.animatingY=!1},a)}}}}function Xo(i){return i.offsetWidth}function Wo(i,t,e,r){return Math.sqrt(Math.pow(t.top-i.top,2)+Math.pow(t.left-i.left,2))/Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))*r.animation}var It=[],ui={initializeByDefault:!0},fe={mount:function(t){for(var e in ui)ui.hasOwnProperty(e)&&!(e in t)&&(t[e]=ui[e]);It.forEach(function(r){if(r.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),It.push(t)},pluginEvent:function(t,e,r){var n=this;this.eventCanceled=!1,r.cancel=function(){n.eventCanceled=!0};var o=t+"Global";It.forEach(function(a){e[a.pluginName]&&(e[a.pluginName][o]&&e[a.pluginName][o](yt({sortable:e},r)),e.options[a.pluginName]&&e[a.pluginName][t]&&e[a.pluginName][t](yt({sortable:e},r)))})},initializePlugins:function(t,e,r,n){It.forEach(function(s){var l=s.pluginName;if(!(!t.options[l]&&!s.initializeByDefault)){var c=new s(t,e,t.options);c.sortable=t,c.options=t.options,t[l]=c,Et(r,c.defaults)}});for(var o in t.options)if(t.options.hasOwnProperty(o)){var a=this.modifyOption(t,o,t.options[o]);typeof a<"u"&&(t.options[o]=a)}},getEventProperties:function(t,e){var r={};return It.forEach(function(n){typeof n.eventProperties=="function"&&Et(r,n.eventProperties.call(e[n.pluginName],t))}),r},modifyOption:function(t,e,r){var n;return It.forEach(function(o){t[o.pluginName]&&o.optionListeners&&typeof o.optionListeners[e]=="function"&&(n=o.optionListeners[e].call(t[o.pluginName],r))}),n}};function Go(i){var t=i.sortable,e=i.rootEl,r=i.name,n=i.targetEl,o=i.cloneEl,a=i.toEl,s=i.fromEl,l=i.oldIndex,c=i.newIndex,u=i.oldDraggableIndex,d=i.newDraggableIndex,f=i.originalEvent,g=i.putSortable,y=i.extraEventProperties;if(t=t||e&&e[rt],!!t){var v,k=t.options,B="on"+r.charAt(0).toUpperCase()+r.substr(1);window.CustomEvent&&!$t&&!pe?v=new CustomEvent(r,{bubbles:!0,cancelable:!0}):(v=document.createEvent("Event"),v.initEvent(r,!0,!0)),v.to=a||e,v.from=s||e,v.item=n||e,v.clone=o,v.oldIndex=l,v.newIndex=c,v.oldDraggableIndex=u,v.newDraggableIndex=d,v.originalEvent=f,v.pullMode=g?g.lastPutMode:void 0;var L=yt(yt({},y),fe.getEventProperties(r,t));for(var W in L)v[W]=L[W];e&&e.dispatchEvent(v),k[B]&&k[B].call(t,v)}}var Jo=["evt"],et=function(t,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=r.evt,o=Uo(r,Jo);fe.pluginEvent.bind(w)(t,e,yt({dragEl:p,parentEl:I,ghostEl:S,rootEl:D,nextEl:Ot,lastDownEl:Ee,cloneEl:M,cloneHidden:At,dragStarted:te,putSortable:z,activeSortable:w.active,originalEvent:n,oldIndex:qt,oldDraggableIndex:oe,newIndex:at,newDraggableIndex:Ct,hideGhostForTarget:Dr,unhideGhostForTarget:Vr,cloneNowHidden:function(){At=!0},cloneNowShown:function(){At=!1},dispatchSortableEvent:function(s){Q({sortable:e,name:s,originalEvent:n})}},o))};function Q(i){Go(yt({putSortable:z,cloneEl:M,targetEl:p,rootEl:D,oldIndex:qt,oldDraggableIndex:oe,newIndex:at,newDraggableIndex:Ct},i))}var p,I,S,D,Ot,Ee,M,At,qt,at,oe,Ct,ye,z,Bt=!1,Ve=!1,ke=[],kt,ut,hi,pi,Ji,Ki,te,Ht,ae,se=!1,me=!1,$e,K,fi=[],Ei=!1,Me=[],ni=typeof document<"u",ve=ki,Qi=pe||$t?"cssFloat":"float",Ko=ni&&!br&&!ki&&"draggable"in document.createElement("div"),Cr=function(){if(ni){if($t)return!1;var i=document.createElement("x");return i.style.cssText="pointer-events:auto",i.style.pointerEvents==="auto"}}(),Ar=function(t,e){var r=b(t),n=parseInt(r.width)-parseInt(r.paddingLeft)-parseInt(r.paddingRight)-parseInt(r.borderLeftWidth)-parseInt(r.borderRightWidth),o=Zt(t,0,e),a=Zt(t,1,e),s=o&&b(o),l=a&&b(a),c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+F(o).width,u=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+F(a).width;if(r.display==="flex")return r.flexDirection==="column"||r.flexDirection==="column-reverse"?"vertical":"horizontal";if(r.display==="grid")return r.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(o&&s.float&&s.float!=="none"){var d=s.float==="left"?"left":"right";return a&&(l.clear==="both"||l.clear===d)?"vertical":"horizontal"}return o&&(s.display==="block"||s.display==="flex"||s.display==="table"||s.display==="grid"||c>=n&&r[Qi]==="none"||a&&r[Qi]==="none"&&c+u>n)?"vertical":"horizontal"},Qo=function(t,e,r){var n=r?t.left:t.top,o=r?t.right:t.bottom,a=r?t.width:t.height,s=r?e.left:e.top,l=r?e.right:e.bottom,c=r?e.width:e.height;return n===s||o===l||n+a/2===s+c/2},ta=function(t,e){var r;return ke.some(function(n){var o=n[rt].options.emptyInsertThreshold;if(!(!o||Mi(n))){var a=F(n),s=t>=a.left-o&&t<=a.right+o,l=e>=a.top-o&&e<=a.bottom+o;if(s&&l)return r=n}}),r},Lr=function(t){function e(o,a){return function(s,l,c,u){var d=s.options.group.name&&l.options.group.name&&s.options.group.name===l.options.group.name;if(o==null&&(a||d))return!0;if(o==null||o===!1)return!1;if(a&&o==="clone")return o;if(typeof o=="function")return e(o(s,l,c,u),a)(s,l,c,u);var f=(a?s:l).options.group.name;return o===!0||typeof o=="string"&&o===f||o.join&&o.indexOf(f)>-1}}var r={},n=t.group;(!n||xe(n)!="object")&&(n={name:n}),r.name=n.name,r.checkPull=e(n.pull,!0),r.checkPut=e(n.put),r.revertClone=n.revertClone,t.group=r},Dr=function(){!Cr&&S&&b(S,"display","none")},Vr=function(){!Cr&&S&&b(S,"display","")};ni&&!br&&document.addEventListener("click",function(i){if(Ve)return i.preventDefault(),i.stopPropagation&&i.stopPropagation(),i.stopImmediatePropagation&&i.stopImmediatePropagation(),Ve=!1,!1},!0);var Mt=function(t){if(p){t=t.touches?t.touches[0]:t;var e=ta(t.clientX,t.clientY);if(e){var r={};for(var n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);r.target=r.rootEl=e,r.preventDefault=void 0,r.stopPropagation=void 0,e[rt]._onDragOver(r)}}},ea=function(t){p&&p.parentNode[rt]._isOutsideThisEl(t.target)};function w(i,t){if(!(i&&i.nodeType&&i.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(i));this.el=i,this.options=t=Et({},t),i[rt]=this;var e={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(i.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Ar(i,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,s){a.setData("Text",s.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:w.supportPointer!==!1&&"PointerEvent"in window&&(!re||ki),emptyInsertThreshold:5};fe.initializePlugins(this,i,e);for(var r in e)!(r in t)&&(t[r]=e[r]);Lr(t);for(var n in this)n.charAt(0)==="_"&&typeof this[n]=="function"&&(this[n]=this[n].bind(this));this.nativeDraggable=t.forceFallback?!1:Ko,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?T(i,"pointerdown",this._onTapStart):(T(i,"mousedown",this._onTapStart),T(i,"touchstart",this._onTapStart)),this.nativeDraggable&&(T(i,"dragover",this),T(i,"dragenter",this)),ke.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),Et(this,Zo())}w.prototype={constructor:w,_isOutsideThisEl:function(t){!this.el.contains(t)&&t!==this.el&&(Ht=null)},_getDirection:function(t,e){return typeof this.options.direction=="function"?this.options.direction.call(this,t,e,p):this.options.direction},_onTapStart:function(t){if(t.cancelable){var e=this,r=this.el,n=this.options,o=n.preventOnFilter,a=t.type,s=t.touches&&t.touches[0]||t.pointerType&&t.pointerType==="touch"&&t,l=(s||t).target,c=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||l,u=n.filter;if(ca(r),!p&&!(/mousedown|pointerdown/.test(a)&&t.button!==0||n.disabled)&&!c.isContentEditable&&!(!this.nativeDraggable&&re&&l&&l.tagName.toUpperCase()==="SELECT")&&(l=ht(l,n.draggable,r,!1),!(l&&l.animated)&&Ee!==l)){if(qt=lt(l),oe=lt(l,n.draggable),typeof u=="function"){if(u.call(this,t,l,this)){Q({sortable:e,rootEl:c,name:"filter",targetEl:l,toEl:r,fromEl:r}),et("filter",e,{evt:t}),o&&t.preventDefault();return}}else if(u&&(u=u.split(",").some(function(d){if(d=ht(c,d.trim(),r,!1),d)return Q({sortable:e,rootEl:d,name:"filter",targetEl:l,fromEl:r,toEl:r}),et("filter",e,{evt:t}),!0}),u)){o&&t.preventDefault();return}n.handle&&!ht(c,n.handle,r,!1)||this._prepareDragStart(t,s,l)}}},_prepareDragStart:function(t,e,r){var n=this,o=n.el,a=n.options,s=o.ownerDocument,l;if(r&&!p&&r.parentNode===o){var c=F(r);if(D=o,p=r,I=p.parentNode,Ot=p.nextSibling,Ee=r,ye=a.group,w.dragged=p,kt={target:p,clientX:(e||t).clientX,clientY:(e||t).clientY},Ji=kt.clientX-c.left,Ki=kt.clientY-c.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,p.style["will-change"]="all",l=function(){if(et("delayEnded",n,{evt:t}),w.eventCanceled){n._onDrop();return}n._disableDelayedDragEvents(),!Zi&&n.nativeDraggable&&(p.draggable=!0),n._triggerDragStart(t,e),Q({sortable:n,name:"choose",originalEvent:t}),ot(p,a.chosenClass,!0)},a.ignore.split(",").forEach(function(u){xr(p,u.trim(),gi)}),T(s,"dragover",Mt),T(s,"mousemove",Mt),T(s,"touchmove",Mt),a.supportPointer?(T(s,"pointerup",n._onDrop),!this.nativeDraggable&&T(s,"pointercancel",n._onDrop)):(T(s,"mouseup",n._onDrop),T(s,"touchend",n._onDrop),T(s,"touchcancel",n._onDrop)),Zi&&this.nativeDraggable&&(this.options.touchStartThreshold=4,p.draggable=!0),et("delayStart",this,{evt:t}),a.delay&&(!a.delayOnTouchOnly||e)&&(!this.nativeDraggable||!(pe||$t))){if(w.eventCanceled){this._onDrop();return}a.supportPointer?(T(s,"pointerup",n._disableDelayedDrag),T(s,"pointercancel",n._disableDelayedDrag)):(T(s,"mouseup",n._disableDelayedDrag),T(s,"touchend",n._disableDelayedDrag),T(s,"touchcancel",n._disableDelayedDrag)),T(s,"mousemove",n._delayedDragTouchMoveHandler),T(s,"touchmove",n._delayedDragTouchMoveHandler),a.supportPointer&&T(s,"pointermove",n._delayedDragTouchMoveHandler),n._dragStartTimer=setTimeout(l,a.delay)}else l()}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){p&&gi(p),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;$(t,"mouseup",this._disableDelayedDrag),$(t,"touchend",this._disableDelayedDrag),$(t,"touchcancel",this._disableDelayedDrag),$(t,"pointerup",this._disableDelayedDrag),$(t,"pointercancel",this._disableDelayedDrag),$(t,"mousemove",this._delayedDragTouchMoveHandler),$(t,"touchmove",this._delayedDragTouchMoveHandler),$(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||t.pointerType=="touch"&&t,!this.nativeDraggable||e?this.options.supportPointer?T(document,"pointermove",this._onTouchMove):e?T(document,"touchmove",this._onTouchMove):T(document,"mousemove",this._onTouchMove):(T(p,"dragend",this),T(D,"dragstart",this._onDragStart));try{document.selection?Te(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(t,e){if(Bt=!1,D&&p){et("dragStarted",this,{evt:e}),this.nativeDraggable&&T(document,"dragover",ea);var r=this.options;!t&&ot(p,r.dragClass,!1),ot(p,r.ghostClass,!0),w.active=this,t&&this._appendGhost(),Q({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(ut){this._lastX=ut.clientX,this._lastY=ut.clientY,Dr();for(var t=document.elementFromPoint(ut.clientX,ut.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(ut.clientX,ut.clientY),t!==e);)e=t;if(p.parentNode[rt]._isOutsideThisEl(t),e)do{if(e[rt]){var r=void 0;if(r=e[rt]._onDragOver({clientX:ut.clientX,clientY:ut.clientY,target:t,rootEl:e}),r&&!this.options.dragoverBubble)break}t=e}while(e=Sr(e));Vr()}},_onTouchMove:function(t){if(kt){var e=this.options,r=e.fallbackTolerance,n=e.fallbackOffset,o=t.touches?t.touches[0]:t,a=S&&jt(S,!0),s=S&&a&&a.a,l=S&&a&&a.d,c=ve&&K&&Gi(K),u=(o.clientX-kt.clientX+n.x)/(s||1)+(c?c[0]-fi[0]:0)/(s||1),d=(o.clientY-kt.clientY+n.y)/(l||1)+(c?c[1]-fi[1]:0)/(l||1);if(!w.active&&!Bt){if(r&&Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))<r)return;this._onDragStart(t,!0)}if(S){a?(a.e+=u-(hi||0),a.f+=d-(pi||0)):a={a:1,b:0,c:0,d:1,e:u,f:d};var f="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");b(S,"webkitTransform",f),b(S,"mozTransform",f),b(S,"msTransform",f),b(S,"transform",f),hi=u,pi=d,ut=o}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!S){var t=this.options.fallbackOnBody?document.body:D,e=F(p,!0,ve,!0,t),r=this.options;if(ve){for(K=t;b(K,"position")==="static"&&b(K,"transform")==="none"&&K!==document;)K=K.parentNode;K!==document.body&&K!==document.documentElement?(K===document&&(K=gt()),e.top+=K.scrollTop,e.left+=K.scrollLeft):K=gt(),fi=Gi(K)}S=p.cloneNode(!0),ot(S,r.ghostClass,!1),ot(S,r.fallbackClass,!0),ot(S,r.dragClass,!0),b(S,"transition",""),b(S,"transform",""),b(S,"box-sizing","border-box"),b(S,"margin",0),b(S,"top",e.top),b(S,"left",e.left),b(S,"width",e.width),b(S,"height",e.height),b(S,"opacity","0.8"),b(S,"position",ve?"absolute":"fixed"),b(S,"zIndex","100000"),b(S,"pointerEvents","none"),w.ghost=S,t.appendChild(S),b(S,"transform-origin",Ji/parseInt(S.style.width)*100+"% "+Ki/parseInt(S.style.height)*100+"%")}},_onDragStart:function(t,e){var r=this,n=t.dataTransfer,o=r.options;if(et("dragStart",this,{evt:t}),w.eventCanceled){this._onDrop();return}et("setupClone",this),w.eventCanceled||(M=Tr(p),M.removeAttribute("id"),M.draggable=!1,M.style["will-change"]="",this._hideClone(),ot(M,this.options.chosenClass,!1),w.clone=M),r.cloneId=Te(function(){et("clone",r),!w.eventCanceled&&(r.options.removeCloneOnHide||D.insertBefore(M,p),r._hideClone(),Q({sortable:r,name:"clone"}))}),!e&&ot(p,o.dragClass,!0),e?(Ve=!0,r._loopId=setInterval(r._emulateDragOver,50)):($(document,"mouseup",r._onDrop),$(document,"touchend",r._onDrop),$(document,"touchcancel",r._onDrop),n&&(n.effectAllowed="move",o.setData&&o.setData.call(r,n,p)),T(document,"drop",r),b(p,"transform","translateZ(0)")),Bt=!0,r._dragStartId=Te(r._dragStarted.bind(r,e,t)),T(document,"selectstart",r),te=!0,window.getSelection().removeAllRanges(),re&&b(document.body,"user-select","none")},_onDragOver:function(t){var e=this.el,r=t.target,n,o,a,s=this.options,l=s.group,c=w.active,u=ye===l,d=s.sort,f=z||c,g,y=this,v=!1;if(Ei)return;function k(Kt,fn){et(Kt,y,yt({evt:t,isOwner:u,axis:g?"vertical":"horizontal",revert:a,dragRect:n,targetRect:o,canSort:d,fromSortable:f,target:r,completed:L,onMove:function(Hi,gn){return be(D,e,p,n,Hi,F(Hi),t,gn)},changed:W},fn))}function B(){k("dragOverAnimationCapture"),y.captureAnimationState(),y!==f&&f.captureAnimationState()}function L(Kt){return k("dragOverCompleted",{insertion:Kt}),Kt&&(u?c._hideClone():c._showClone(y),y!==f&&(ot(p,z?z.options.ghostClass:c.options.ghostClass,!1),ot(p,s.ghostClass,!0)),z!==y&&y!==w.active?z=y:y===w.active&&z&&(z=null),f===y&&(y._ignoreWhileAnimating=r),y.animateAll(function(){k("dragOverAnimationComplete"),y._ignoreWhileAnimating=null}),y!==f&&(f.animateAll(),f._ignoreWhileAnimating=null)),(r===p&&!p.animated||r===e&&!r.animated)&&(Ht=null),!s.dragoverBubble&&!t.rootEl&&r!==document&&(p.parentNode[rt]._isOutsideThisEl(t.target),!Kt&&Mt(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),v=!0}function W(){at=lt(p),Ct=lt(p,s.draggable),Q({sortable:y,name:"change",toEl:e,newIndex:at,newDraggableIndex:Ct,originalEvent:t})}if(t.preventDefault!==void 0&&t.cancelable&&t.preventDefault(),r=ht(r,s.draggable,e,!0),k("dragOver"),w.eventCanceled)return v;if(p.contains(t.target)||r.animated&&r.animatingX&&r.animatingY||y._ignoreWhileAnimating===r)return L(!1);if(Ve=!1,c&&!s.disabled&&(u?d||(a=I!==D):z===this||(this.lastPutMode=ye.checkPull(this,c,p,t))&&l.checkPut(this,c,p,t))){if(g=this._getDirection(t,r)==="vertical",n=F(p),k("dragOverValid"),w.eventCanceled)return v;if(a)return I=D,B(),this._hideClone(),k("revert"),w.eventCanceled||(Ot?D.insertBefore(p,Ot):D.appendChild(p)),L(!0);var R=Mi(e,s.draggable);if(!R||oa(t,g,this)&&!R.animated){if(R===p)return L(!1);if(R&&e===t.target&&(r=R),r&&(o=F(r)),be(D,e,p,n,r,o,t,!!r)!==!1)return B(),R&&R.nextSibling?e.insertBefore(p,R.nextSibling):e.appendChild(p),I=e,W(),L(!0)}else if(R&&na(t,g,this)){var tt=Zt(e,0,s,!0);if(tt===p)return L(!1);if(r=tt,o=F(r),be(D,e,p,n,r,o,t,!1)!==!1)return B(),e.insertBefore(p,tt),I=e,W(),L(!0)}else if(r.parentNode===e){o=F(r);var A=0,G,dt=p.parentNode!==e,J=!Qo(p.animated&&p.toRect||n,r.animated&&r.toRect||o,g),Wt=g?"top":"left",Tt=Wi(r,"top","top")||Wi(p,"top","top"),Gt=Tt?Tt.scrollTop:void 0;Ht!==r&&(G=o[Wt],se=!1,me=!J&&s.invertSwap||dt),A=aa(t,r,o,g,J?1:s.swapThreshold,s.invertedSwapThreshold==null?s.swapThreshold:s.invertedSwapThreshold,me,Ht===r);var mt;if(A!==0){var Vt=lt(p);do Vt-=A,mt=I.children[Vt];while(mt&&(b(mt,"display")==="none"||mt===S))}if(A===0||mt===r)return L(!1);Ht=r,ae=A;var Jt=r.nextElementSibling,_t=!1;_t=A===1;var ge=be(D,e,p,n,r,o,t,_t);if(ge!==!1)return(ge===1||ge===-1)&&(_t=ge===1),Ei=!0,setTimeout(ra,30),B(),_t&&!Jt?e.appendChild(p):r.parentNode.insertBefore(p,_t?Jt:r),Tt&&$r(Tt,0,Gt-Tt.scrollTop),I=p.parentNode,G!==void 0&&!me&&($e=Math.abs(G-F(r)[Wt])),W(),L(!0)}if(e.contains(p))return L(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){$(document,"mousemove",this._onTouchMove),$(document,"touchmove",this._onTouchMove),$(document,"pointermove",this._onTouchMove),$(document,"dragover",Mt),$(document,"mousemove",Mt),$(document,"touchmove",Mt)},_offUpEvents:function(){var t=this.el.ownerDocument;$(t,"mouseup",this._onDrop),$(t,"touchend",this._onDrop),$(t,"pointerup",this._onDrop),$(t,"pointercancel",this._onDrop),$(t,"touchcancel",this._onDrop),$(document,"selectstart",this)},_onDrop:function(t){var e=this.el,r=this.options;if(at=lt(p),Ct=lt(p,r.draggable),et("drop",this,{evt:t}),I=p&&p.parentNode,at=lt(p),Ct=lt(p,r.draggable),w.eventCanceled){this._nulling();return}Bt=!1,me=!1,se=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),$i(this.cloneId),$i(this._dragStartId),this.nativeDraggable&&($(document,"drop",this),$(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),re&&b(document.body,"user-select",""),b(p,"transform",""),t&&(te&&(t.cancelable&&t.preventDefault(),!r.dropBubble&&t.stopPropagation()),S&&S.parentNode&&S.parentNode.removeChild(S),(D===I||z&&z.lastPutMode!=="clone")&&M&&M.parentNode&&M.parentNode.removeChild(M),p&&(this.nativeDraggable&&$(p,"dragend",this),gi(p),p.style["will-change"]="",te&&!Bt&&ot(p,z?z.options.ghostClass:this.options.ghostClass,!1),ot(p,this.options.chosenClass,!1),Q({sortable:this,name:"unchoose",toEl:I,newIndex:null,newDraggableIndex:null,originalEvent:t}),D!==I?(at>=0&&(Q({rootEl:I,name:"add",toEl:I,fromEl:D,originalEvent:t}),Q({sortable:this,name:"remove",toEl:I,originalEvent:t}),Q({rootEl:I,name:"sort",toEl:I,fromEl:D,originalEvent:t}),Q({sortable:this,name:"sort",toEl:I,originalEvent:t})),z&&z.save()):at!==qt&&at>=0&&(Q({sortable:this,name:"update",toEl:I,originalEvent:t}),Q({sortable:this,name:"sort",toEl:I,originalEvent:t})),w.active&&((at==null||at===-1)&&(at=qt,Ct=oe),Q({sortable:this,name:"end",toEl:I,originalEvent:t}),this.save()))),this._nulling()},_nulling:function(){et("nulling",this),D=p=I=S=Ot=M=Ee=At=kt=ut=te=at=Ct=qt=oe=Ht=ae=z=ye=w.dragged=w.ghost=w.clone=w.active=null,Me.forEach(function(t){t.checked=!0}),Me.length=hi=pi=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":p&&(this._onDragOver(t),ia(t));break;case"selectstart":t.preventDefault();break}},toArray:function(){for(var t=[],e,r=this.el.children,n=0,o=r.length,a=this.options;n<o;n++)e=r[n],ht(e,a.draggable,this.el,!1)&&t.push(e.getAttribute(a.dataIdAttr)||la(e));return t},sort:function(t,e){var r={},n=this.el;this.toArray().forEach(function(o,a){var s=n.children[a];ht(s,this.options.draggable,n,!1)&&(r[o]=s)},this),e&&this.captureAnimationState(),t.forEach(function(o){r[o]&&(n.removeChild(r[o]),n.appendChild(r[o]))}),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return ht(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var r=this.options;if(e===void 0)return r[t];var n=fe.modifyOption(this,t,e);typeof n<"u"?r[t]=n:r[t]=e,t==="group"&&Lr(r)},destroy:function(){et("destroy",this);var t=this.el;t[rt]=null,$(t,"mousedown",this._onTapStart),$(t,"touchstart",this._onTapStart),$(t,"pointerdown",this._onTapStart),this.nativeDraggable&&($(t,"dragover",this),$(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(e){e.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),ke.splice(ke.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!At){if(et("hideClone",this),w.eventCanceled)return;b(M,"display","none"),this.options.removeCloneOnHide&&M.parentNode&&M.parentNode.removeChild(M),At=!0}},_showClone:function(t){if(t.lastPutMode!=="clone"){this._hideClone();return}if(At){if(et("showClone",this),w.eventCanceled)return;p.parentNode==D&&!this.options.group.revertClone?D.insertBefore(M,p):Ot?D.insertBefore(M,Ot):D.appendChild(M),this.options.group.revertClone&&this.animate(p,M),b(M,"display",""),At=!1}}};function ia(i){i.dataTransfer&&(i.dataTransfer.dropEffect="move"),i.cancelable&&i.preventDefault()}function be(i,t,e,r,n,o,a,s){var l,c=i[rt],u=c.options.onMove,d;return window.CustomEvent&&!$t&&!pe?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=document.createEvent("Event"),l.initEvent("move",!0,!0)),l.to=t,l.from=i,l.dragged=e,l.draggedRect=r,l.related=n||t,l.relatedRect=o||F(t),l.willInsertAfter=s,l.originalEvent=a,i.dispatchEvent(l),u&&(d=u.call(c,l,a)),d}function gi(i){i.draggable=!1}function ra(){Ei=!1}function na(i,t,e){var r=F(Zt(e.el,0,e.options,!0)),n=_r(e.el,e.options,S),o=10;return t?i.clientX<n.left-o||i.clientY<r.top&&i.clientX<r.right:i.clientY<n.top-o||i.clientY<r.bottom&&i.clientX<r.left}function oa(i,t,e){var r=F(Mi(e.el,e.options.draggable)),n=_r(e.el,e.options,S),o=10;return t?i.clientX>n.right+o||i.clientY>r.bottom&&i.clientX>r.left:i.clientY>n.bottom+o||i.clientX>r.right&&i.clientY>r.top}function aa(i,t,e,r,n,o,a,s){var l=r?i.clientY:i.clientX,c=r?e.height:e.width,u=r?e.top:e.left,d=r?e.bottom:e.right,f=!1;if(!a){if(s&&$e<c*n){if(!se&&(ae===1?l>u+c*o/2:l<d-c*o/2)&&(se=!0),se)f=!0;else if(ae===1?l<u+$e:l>d-$e)return-ae}else if(l>u+c*(1-n)/2&&l<d-c*(1-n)/2)return sa(t)}return f=f||a,f&&(l<u+c*o/2||l>d-c*o/2)?l>u+c/2?1:-1:0}function sa(i){return lt(p)<lt(i)?1:-1}function la(i){for(var t=i.tagName+i.className+i.src+i.href+i.textContent,e=t.length,r=0;e--;)r+=t.charCodeAt(e);return r.toString(36)}function ca(i){Me.length=0;for(var t=i.getElementsByTagName("input"),e=t.length;e--;){var r=t[e];r.checked&&Me.push(r)}}function Te(i){return setTimeout(i,0)}function $i(i){return clearTimeout(i)}ni&&T(document,"touchmove",function(i){(w.active||Bt)&&i.cancelable&&i.preventDefault()});w.utils={on:T,off:$,css:b,find:xr,is:function(t,e){return!!ht(t,e,t,!1)},extend:jo,throttle:Er,closest:ht,toggleClass:ot,clone:Tr,index:lt,nextTick:Te,cancelNextTick:$i,detectDirection:Ar,getChild:Zt,expando:rt};w.get=function(i){return i[rt]};w.mount=function(){for(var i=arguments.length,t=new Array(i),e=0;e<i;e++)t[e]=arguments[e];t[0].constructor===Array&&(t=t[0]),t.forEach(function(r){if(!r.prototype||!r.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));r.utils&&(w.utils=yt(yt({},w.utils),r.utils)),fe.mount(r)})};w.create=function(i,t){return new w(i,t)};w.version=qo;var N=[],ee,Ti,_i=!1,yi,mi,Re,ie;function da(){function i(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var t in this)t.charAt(0)==="_"&&typeof this[t]=="function"&&(this[t]=this[t].bind(this))}return i.prototype={dragStarted:function(e){var r=e.originalEvent;this.sortable.nativeDraggable?T(document,"dragover",this._handleAutoScroll):this.options.supportPointer?T(document,"pointermove",this._handleFallbackAutoScroll):r.touches?T(document,"touchmove",this._handleFallbackAutoScroll):T(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(e){var r=e.originalEvent;!this.options.dragOverBubble&&!r.rootEl&&this._handleAutoScroll(r)},drop:function(){this.sortable.nativeDraggable?$(document,"dragover",this._handleAutoScroll):($(document,"pointermove",this._handleFallbackAutoScroll),$(document,"touchmove",this._handleFallbackAutoScroll),$(document,"mousemove",this._handleFallbackAutoScroll)),tr(),_e(),Yo()},nulling:function(){Re=Ti=ee=_i=ie=yi=mi=null,N.length=0},_handleFallbackAutoScroll:function(e){this._handleAutoScroll(e,!0)},_handleAutoScroll:function(e,r){var n=this,o=(e.touches?e.touches[0]:e).clientX,a=(e.touches?e.touches[0]:e).clientY,s=document.elementFromPoint(o,a);if(Re=e,r||this.options.forceAutoScrollFallback||pe||$t||re){vi(e,this.options,s,r);var l=Dt(s,!0);_i&&(!ie||o!==yi||a!==mi)&&(ie&&tr(),ie=setInterval(function(){var c=Dt(document.elementFromPoint(o,a),!0);c!==l&&(l=c,_e()),vi(e,n.options,c,r)},10),yi=o,mi=a)}else{if(!this.options.bubbleScroll||Dt(s,!0)===gt()){_e();return}vi(e,this.options,Dt(s,!1),!1)}}},Et(i,{pluginName:"scroll",initializeByDefault:!0})}function _e(){N.forEach(function(i){clearInterval(i.pid)}),N=[]}function tr(){clearInterval(ie)}var vi=Er(function(i,t,e,r){if(t.scroll){var n=(i.touches?i.touches[0]:i).clientX,o=(i.touches?i.touches[0]:i).clientY,a=t.scrollSensitivity,s=t.scrollSpeed,l=gt(),c=!1,u;Ti!==e&&(Ti=e,_e(),ee=t.scroll,u=t.scrollFn,ee===!0&&(ee=Dt(e,!0)));var d=0,f=ee;do{var g=f,y=F(g),v=y.top,k=y.bottom,B=y.left,L=y.right,W=y.width,R=y.height,tt=void 0,A=void 0,G=g.scrollWidth,dt=g.scrollHeight,J=b(g),Wt=g.scrollLeft,Tt=g.scrollTop;g===l?(tt=W<G&&(J.overflowX==="auto"||J.overflowX==="scroll"||J.overflowX==="visible"),A=R<dt&&(J.overflowY==="auto"||J.overflowY==="scroll"||J.overflowY==="visible")):(tt=W<G&&(J.overflowX==="auto"||J.overflowX==="scroll"),A=R<dt&&(J.overflowY==="auto"||J.overflowY==="scroll"));var Gt=tt&&(Math.abs(L-n)<=a&&Wt+W<G)-(Math.abs(B-n)<=a&&!!Wt),mt=A&&(Math.abs(k-o)<=a&&Tt+R<dt)-(Math.abs(v-o)<=a&&!!Tt);if(!N[d])for(var Vt=0;Vt<=d;Vt++)N[Vt]||(N[Vt]={});(N[d].vx!=Gt||N[d].vy!=mt||N[d].el!==g)&&(N[d].el=g,N[d].vx=Gt,N[d].vy=mt,clearInterval(N[d].pid),(Gt!=0||mt!=0)&&(c=!0,N[d].pid=setInterval((function(){r&&this.layer===0&&w.active._onTouchMove(Re);var Jt=N[this.layer].vy?N[this.layer].vy*s:0,_t=N[this.layer].vx?N[this.layer].vx*s:0;typeof u=="function"&&u.call(w.dragged.parentNode[rt],_t,Jt,i,Re,N[this.layer].el)!=="continue"||$r(N[this.layer].el,_t,Jt)}).bind({layer:d}),24))),d++}while(t.bubbleScroll&&f!==l&&(f=Dt(f,!1)));_i=c}},30),kr=function(t){var e=t.originalEvent,r=t.putSortable,n=t.dragEl,o=t.activeSortable,a=t.dispatchSortableEvent,s=t.hideGhostForTarget,l=t.unhideGhostForTarget;if(e){var c=r||o;s();var u=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,d=document.elementFromPoint(u.clientX,u.clientY);l(),c&&!c.el.contains(d)&&(a("spill"),this.onSpill({dragEl:n,putSortable:r}))}};function Ri(){}Ri.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e},onSpill:function(t){var e=t.dragEl,r=t.putSortable;this.sortable.captureAnimationState(),r&&r.captureAnimationState();var n=Zt(this.sortable.el,this.startIndex,this.options);n?this.sortable.el.insertBefore(e,n):this.sortable.el.appendChild(e),this.sortable.animateAll(),r&&r.animateAll()},drop:kr};Et(Ri,{pluginName:"revertOnSpill"});function Oi(){}Oi.prototype={onSpill:function(t){var e=t.dragEl,r=t.putSortable,n=r||this.sortable;n.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),n.animateAll()},drop:kr};Et(Oi,{pluginName:"removeOnSpill"});w.mount(new da);w.mount(Oi,Ri);const ua=i=>{const t=i.item;let e=Array.prototype.slice.call(t.parentNode.childNodes);return e=e.filter(r=>r.nodeType!=Node.ELEMENT_NODE||!r.classList.contains("sortable-fallback")),e},ha=(i,t,e,r,n,o)=>{const s=i.item.parentNode;for(const v of e)s.appendChild(v);if(i.oldIndex==i.newIndex)return;const l=r.getArray(),c=i.item.querySelector("eox-layercontrol-layer").layer.get(n),u=l.find(v=>v.get(n)===c),d=o.dataset.layer,f=l.find(v=>v.get(n)==d);let g,y;for(g=0;g<l.length;g++)if(l[g]==u){r.removeAt(g);break}for(y=0;y<l.length;y++)if(l[y]===f){g>y?r.insertAt(y,u):r.insertAt(y+1,u);break}t.requestUpdate()};function pa(i,t,e,r){let n=[],o=null;i._sortable=w.create(i,{handle:".drag-handle",filter:".drag-handle.disabled",swapThreshold:.5,animation:150,easing:"cubic-bezier(1, 0, 0, 1)",onStart:a=>{console.log(a),n=ua(a)},onMove:a=>{o=a.related},onEnd:a=>ha(a,r,n,t,e,o)})}function fa(i,t,e,r){const n=i.getArray();let o=!1;n.forEach(a=>{const s=a.ol_uid;a.get(t)||(a.set(t,s),o=!0),a.get(e)||(a.set(e,`layer ${s}`),o=!0),o&&r.requestUpdate()})}function Pi(i,t,e){let r=[];const n=(o,a,s)=>{r=[...r,...o.filter(c=>c.get(a)===s)];const l=o.filter(c=>c.getLayers);return l.length>0&&l.forEach(c=>n(c.getLayers().getArray(),a,s)),r};return n(i,t,e),r}function ga(i,t,e){if(!i||!t)return!1;if(!Mr(i,e))return!0;const r=i.get("minZoom"),n=i.get("maxZoom"),o=t.getView().getZoom();return o>r&&o<n}function Mr(i,t){const e=i.get("minZoom"),r=i.get("maxZoom");return!!(t&&(e!==-1/0||r!==1/0))}function er(i,t){var n,o,a;return!i||!t?void 0:i.getLayers?"group":((a=(n=t.getInteractions().getArray().filter(s=>s.freehand_!==void 0).map(s=>s.source_))==null?void 0:n.ol_uid)==null?void 0:a.includes(i.getSource?(o=i.getSource())==null?void 0:o.ol_uid:void 0))?"draw":i.declutter_!==void 0||i.get("type")==="Vector"?"vector":"raster"}const ya=(i,t,e)=>{let r=t;return e.layer.getSource().getTileUrlFunction()&&(r||(r=e.layer.getSource().getTileUrlFunction()),e.layer.getSource().setTileUrlFunction((...n)=>Bo(r(...n),i)),e.layer.getSource().setKey(new Date)),r};function ma(i,t,e){const r="updateStyleVariables"in t,n="setStyle"in t,o=r?t.style_:e.style;let a=o==null?void 0:o.variables;if(a){const s=Ii(i);if(o.variables={...a,...s},r)t.updateStyleVariables(s);else if(n){const l=va(o);t.setStyle(l)}}}const Ii=i=>{const t={};for(const e in i)if(typeof i[e]=="object"&&i[e]!==null){const r=Ii(i[e]);for(const n in r)t[n]=r==null?void 0:r[n]}else t[e]=i==null?void 0:i[e];return t};function va(i){let t=i;if("variables"in i){let e=JSON.stringify(i);const{variables:r}=i;for(const n in r)typeof r[n]=="number"?e=e.replaceAll(`["var","${n}"]`,r[n]):e=e.replaceAll(`["var","${n}"]`,`"${r[n]}"`);t=JSON.parse(e)}return t}const ba=(i,t)=>{if(!i)return;const e=Ii(t);let r,n;return Array.isArray(i)?n=structuredClone(i):n=[structuredClone(i)],r=n.filter(o=>{if(!("boundTo"in o))return!0;const a=o.boundTo.key,s=o.boundTo.value;return!(a in e)||e[a]==s}),r.length||(r=n),r.map(o=>{var a;return delete o.boundTo,!("domainProperties"in o)||"domain"in o?o:(a=Object.keys(o))==null?void 0:a.reduce((s,l)=>(l==="domainProperties"?s.domain=o[l].map(c=>e[c]):s[l]=o[l],s),{})})};function Rr(i,t){var r;let e={};for(const n in i){const o=i[n].type;if(o&&o!=="object")e[n]=o==="number"?Number(t[n]):t[n];else if(typeof i[n]=="object"&&((r=i[n])!=null&&r.properties)){const a=Rr(i[n].properties,t);Object.keys(a).length>0&&(e[n]=a)}}return e}function wa(i,t){var o,a,s,l,c;if(!t)return null;let e={},r="updateStyleVariables"in i?(o=i.style_)==null?void 0:o.variables:(a=t.style)==null?void 0:a.variables;if((t.type==="style"||t.style)&&r)e=r;else if((l=(s=i.getSource())==null?void 0:s.getTileUrlFunction)!=null&&l.call(s)){const u=new URL(i.getSource().getTileUrlFunction()([0,0,0]));e=Object.fromEntries(u.searchParams.entries())}else return null;const n=Rr(((c=t.schema)==null?void 0:c.properties)||t.schema,e);return Object.keys(n).length?n:null}const Or=(i,t)=>i==null?void 0:i.filter(e=>["remove","sort"].filter(r=>t!=null&&t.get("layerControlDisable")?r!=="sort":!0).includes(e)),Pr=(i,t)=>i==null?void 0:i.filter(e=>{let r=!0;return["remove","sort"].includes(e)&&(r=!1),e==="info"&&(r=t.get("description")),e==="config"&&(r=t.get("layerConfig")),e==="datetime"&&(r=t.get("layerDatetime")),e==="legend"&&(r=t.get("layerLegend")),r}),Sa=(i,t,e)=>h`
  <button
    slot="${i}-icon"
    class="no-margin transparent square primary-text small"
  >
    ${e?i:h`<i class="small primary-text">${t}</i>`}
  </button>
`,Ir=(i,t)=>h`
  <button
    class="remove-icon no-margin transparent square small action"
    @click=${()=>{const{layer:e}=i;e==null||e.set("layerControlOptional",!0),e==null||e.setVisible(!1),i.dispatchEvent(new CustomEvent("changed",{detail:e,bubbles:!0}))}}
  >
    ${i.unstyled?"x":h`<i class="small red-text">${t}</i>`}
  </button>
`,Hr=(i,t,e)=>h`
  <button
    class="sort-icon no-margin transparent square primary-text drag-handle small action ${i.layer.get("layerControlDisable")?"disabled":""}"
    style="cursor: ns-resize;"
  >
    ${e?"═":h`<i class="small primary-text">${t}</i>`}
  </button>
`;function le(){return{dots:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>menu-down</title>
      <path d="M7,10L12,15L17,10H7Z" />
    </svg>`,info:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>information-outline</title>
      <path
        d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
      />
    </svg>`,opacity:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>circle-opacity</title>
      <path
        d="M18 10V8H20V10H18M18 12V10H16V12H18M18 8V6H16V8H18M16 2.84V4H18C17.37 3.54 16.71 3.15 16 2.84M18 4V6H20C19.42 5.25 18.75 4.58 18 4M20 6V8H21.16C20.85 7.29 20.46 6.63 20 6M22 12C22 11.32 21.93 10.65 21.8 10H20V12H22M16 6V4H14V6H16M16 16H18V14H16V16M18 18H20L20 18V16H18V18M16 20H18L18 20V18H16V20M14 21.8C14.7 21.66 15.36 21.44 16 21.16V20H14V21.8M18 14H20V12H18V14M16 8H14V10H16V8M20 16H21.16C21.44 15.36 21.66 14.7 21.8 14H20V16M16 12H14V14H16V12M12 18V16H14V14H12V12H14V10H12V8H14V6H12V4H14V2.2C13.35 2.07 12.69 2 12 2C6.5 2 2 6.5 2 12S6.5 22 12 22V20H14V18H12M14 18H16V16H14V18Z"
      />
    </svg>`,config:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>tune</title>
      <path
        d="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z"
      />
    </svg>`,datetime:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>calendar-clock-outline</title>
      <path
        d="M6 1V3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H11.1C12.36 22.24 14.09 23 16 23C19.87 23 23 19.87 23 16C23 14.09 22.24 12.36 21 11.1V5C21 3.9 20.11 3 19 3H18V1H16V3H8V1M5 5H19V7H5M5 9H19V9.67C18.09 9.24 17.07 9 16 9C12.13 9 9 12.13 9 16C9 17.07 9.24 18.09 9.67 19H5M16 11.15C18.68 11.15 20.85 13.32 20.85 16C20.85 18.68 18.68 20.85 16 20.85C13.32 20.85 11.15 18.68 11.15 16C11.15 13.32 13.32 11.15 16 11.15M15 13V16.69L18.19 18.53L18.94 17.23L16.5 15.82V13Z"
      />
    </svg>`,legend:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>map-legend</title>
      <path
        d="M9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3L20.34,3.03L15,5.1L9,3M8,5.45V17.15L5,18.31V6.46L8,5.45M10,5.47L14,6.87V18.53L10,17.13V5.47M19,5.7V17.54L16,18.55V6.86L19,5.7M7.46,6.3L5.57,6.97V9.12L7.46,8.45V6.3M7.46,9.05L5.57,9.72V11.87L7.46,11.2V9.05M7.46,11.8L5.57,12.47V14.62L7.46,13.95V11.8M7.46,14.55L5.57,15.22V17.37L7.46,16.7V14.55Z"
      />
    </svg>`,remove:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>delete-outline</title>
      <path
        d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"
      />
    </svg>`,sort:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>drag-horizontal-variant</title>
      <path d="M21 11H3V9H21V11M21 13H3V15H21V13Z" />
    </svg>`}}const Br=i=>{var e;const t=["layerControlHide","layerControlOptional"];return(e=i==null?void 0:i.getArray())==null?void 0:e.filter(r=>t.every(n=>!r.get(n)))};function Nr(i,t){t.dispatchEvent(new CustomEvent("datetime:updated",{detail:i.detail,bubbles:!0}))}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fr=lr(class extends cr{constructor(i){if(super(i),i.type!==Rt.PROPERTY&&i.type!==Rt.ATTRIBUTE&&i.type!==Rt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Sn(i))throw Error("`live` bindings can only contain a single expression")}render(i){return i}update(i,[t]){if(t===Qt||t===st)return t;const e=i.element,r=i.name;if(i.type===Rt.PROPERTY){if(t===e[r])return Qt}else if(i.type===Rt.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(r))return Qt}else if(i.type===Rt.ATTRIBUTE&&e.getAttribute(r)===t+"")return Qt;return xn(i),t}});var Ur="Expected a function",ir=NaN,xa="[object Symbol]",Ea=/^\s+|\s+$/g,$a=/^[-+]0x[0-9a-f]+$/i,Ta=/^0b[01]+$/i,_a=/^0o[0-7]+$/i,Ca=parseInt,Aa=typeof Ft=="object"&&Ft&&Ft.Object===Object&&Ft,La=typeof self=="object"&&self&&self.Object===Object&&self,Da=Aa||La||Function("return this")(),Va=Object.prototype,ka=Va.toString,Ma=Math.max,Ra=Math.min,bi=function(){return Da.Date.now()};function Oa(i,t,e){var r,n,o,a,s,l,c=0,u=!1,d=!1,f=!0;if(typeof i!="function")throw new TypeError(Ur);t=rr(t)||0,Oe(e)&&(u=!!e.leading,d="maxWait"in e,o=d?Ma(rr(e.maxWait)||0,t):o,f="trailing"in e?!!e.trailing:f);function g(A){var G=r,dt=n;return r=n=void 0,c=A,a=i.apply(dt,G),a}function y(A){return c=A,s=setTimeout(B,t),u?g(A):a}function v(A){var G=A-l,dt=A-c,J=t-G;return d?Ra(J,o-dt):J}function k(A){var G=A-l,dt=A-c;return l===void 0||G>=t||G<0||d&&dt>=o}function B(){var A=bi();if(k(A))return L(A);s=setTimeout(B,v(A))}function L(A){return s=void 0,f&&r?g(A):(r=n=void 0,a)}function W(){s!==void 0&&clearTimeout(s),c=0,r=l=n=s=void 0}function R(){return s===void 0?a:L(bi())}function tt(){var A=bi(),G=k(A);if(r=arguments,n=this,l=A,G){if(s===void 0)return y(l);if(d)return s=setTimeout(B,t),g(l)}return s===void 0&&(s=setTimeout(B,t)),a}return tt.cancel=W,tt.flush=R,tt}function Pa(i,t,e){var r=!0,n=!0;if(typeof i!="function")throw new TypeError(Ur);return Oe(e)&&(r="leading"in e?!!e.leading:r,n="trailing"in e?!!e.trailing:n),Oa(i,t,{leading:r,maxWait:t,trailing:n})}function Oe(i){var t=typeof i;return!!i&&(t=="object"||t=="function")}function Ia(i){return!!i&&typeof i=="object"}function Ha(i){return typeof i=="symbol"||Ia(i)&&ka.call(i)==xa}function rr(i){if(typeof i=="number")return i;if(Ha(i))return ir;if(Oe(i)){var t=typeof i.valueOf=="function"?i.valueOf():i;i=Oe(t)?t+"":t}if(typeof i!="string")return i===0?i:+i;i=i.replace(Ea,"");var e=Ta.test(i);return e||_a.test(i)?Ca(i.slice(2),e?2:8):$a.test(i)?ir:+i}var Ba=Pa;const nr=Li(Ba);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=i=>i??st;var ct,Pe,Ie;class qr extends nt{constructor(){super();C(this,ct,[]);C(this,Pe,Ae`
    .separator {
      margin: 0 0 24px 0;
    }
    color-legend {
      --cle-background: transparent;
      --cle-font-family: inherit;
      --cle-font-size: 12px;
      --cle-font-size-title: 12px;
      --cle-font-weight: 400;
      --cle-font-weight-title: 400;
      --cle-letter-spacing: inherit;
      --cle-letter-spacing-title: inherit;
      --cle-padding: 0;
    }
  `);C(this,Ie,"");this.unstyled=!1,this.noShadow=!1,this.layer=null}get layerLegend(){return x(this,ct)?x(this,ct).length>1?x(this,ct):x(this,ct)[0]:null}set layerLegend(e){var r;Array.isArray(e)?vt(this,ct,e.map((n,o)=>{var a;return{id:(((a=this.layer)==null?void 0:a.get("id"))??"")+o,...n}})):vt(this,ct,[{id:(((r=this.layer)==null?void 0:r.get("id"))??"")+0,...e}])}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){this.layerLegend&&new ResizeObserver(()=>{var e;vt(this,ct,(e=x(this,ct))==null?void 0:e.map(r=>(this.offsetWidth!==r.width&&(r.width=this.offsetWidth),{...r}))),this.requestUpdate()}).observe(this.renderRoot.querySelector(".legend-container"))}render(){return customElements.get("color-legend")||console.error("Please import `color-legend-element` in order to use layerLegend"),h`
      <style>
        ${x(this,Pe)}
        ${!this.unstyled&&x(this,Ie)}
      </style>
      ${V(this.layerLegend,()=>h`
          <div class="legend-container">
            <!-- Render color-legend-->
            ${x(this,ct).map((e,r,n)=>h`
                <color-legend
                  id="${e.id}"
                  width=${e.width??325}
                  scaleType="${we(e.scaleType)}"
                  markType="${we(e.markType)}"
                  titleText="${we(e.title)}"
                  .range=${e.range}
                  .domain=${e.domain}
                  tickFormat="${we(e.tickFormat)}"
                  .ticks=${e.ticks??5}
                  .tickValues=${e.tickValues}
                  .marginLeft=${8}
                  .marginRight=${8}
                >
                </color-legend>
                ${r!==n.length-1?h`<div class="separator"></div>`:st}
              `)}
          </div>
        `)}
    `}}ct=new WeakMap,Pe=new WeakMap,Ie=new WeakMap,O(qr,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerLegend:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-legend",qr);var bt,Yt,de,ue,Ci,He,Be;class zr extends nt{constructor(){super();C(this,ue);C(this,bt,{});C(this,Yt,null);C(this,de);C(this,He,Ae`
    color-legend {
      --cle-background: transparent;
      --cle-font-family: inherit;
      --cle-font-size: 12px;
      --cle-font-size-title: 12px;
      --cle-font-weight: 400;
      --cle-font-weight-title: 400;
      --cle-letter-spacing: inherit;
      --cle-letter-spacing-title: inherit;
      font-size: small;
    }
  `);C(this,Be,Ae`
    input[type="range"],
    eox-jsonform {
      --eox-slider-thumb-height: 10px !important;
      --eox-slider-thumb-width: 10px !important;
      --eox-slider-track-height: 4px !important;
      --eox-panel-spacing: 0 !important;
      --eox-slider-margin: 0 !important;
      font-size: small;
    }
    eox-layercontrol-layer-legend {
      display: block;
      margin-bottom: 1rem;
    }
  `);this.layer=null,this.unstyled=!1,this.noShadow=!1,this.layerConfig=null,this.throttleDataChange=nr(P(this,ue,Ci),1e3)}updated(e){if(e.has("layerConfig")){const r=this.layerConfig.type==="style"||this.layerConfig.style?100:1e3;this.throttleDataChange=nr(P(this,ue,Ci),r),this.requestUpdate()}}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){vt(this,Yt,wa(this.layer,this.layerConfig)),Object.keys(x(this,bt)).length!==0&&vt(this,Yt,x(this,bt)),customElements.get("eox-jsonform")||console.error("Please import @eox/jsonform in order to use layerconfig");const e={disable_edit_json:!0,disable_collapse:!0,disable_properties:!0};return h`
      <style>
        ${x(this,He)}
        ${!this.unstyled&&x(this,Be)}
      </style>
      ${V(this.layerConfig,()=>h`
          ${V(this.layerConfig.legend,()=>h`
              <eox-layercontrol-layer-legend
                .noShadow=${!0}
                .unstyled=${this.unstyled}
                .layer=${this.layer}
                .layerLegend=${ba(this.layerConfig.legend,x(this,bt))}
              ></eox-layercontrol-layer-legend>
            `)}
          <!-- Render a JSON form for layer configuration -->
          <eox-jsonform
            .schema=${this.layerConfig.schema}
            .value=${x(this,Yt)}
            .options=${e}
            .noShadow=${!0}
            @change=${this.throttleDataChange}
          ></eox-jsonform>
        `)}
    `}}bt=new WeakMap,Yt=new WeakMap,de=new WeakMap,ue=new WeakSet,Ci=function(e){vt(this,bt,e.detail),this.layerConfig.type==="style"||this.layerConfig.style?"setStyle"in this.layer||"updateStyleVariables"in this.layer?ma(x(this,bt),this.layer,this.layerConfig):console.error(`Layer type ${this.layer.get("type")??""} does not support styles configuration`):vt(this,de,ya(x(this,bt),x(this,de),this)),this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:e.detail,layer:this.layer}})),this.requestUpdate()},He=new WeakMap,Be=new WeakMap,O(zr,"properties",{layer:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},layerConfig:{attribute:!1}});customElements.define("eox-layercontrol-layerconfig",zr);var Ne,Yr,Fe,Ue;class jr extends nt{constructor(){super();C(this,Ne);C(this,Fe,"");C(this,Ue,"");this.unstyled=!1,this.noShadow=!1,this.layerDatetime=null,this.layer=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return customElements.get("eox-timecontrol")||console.error("Please import @eox/timecontrol in order to use layerDatetime"),h`
      <style>
        ${x(this,Fe)}
        ${!this.unstyled&&x(this,Ue)}
      </style>
      ${V(this.layerDatetime,()=>h`
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
            @stepchange=${P(this,Ne,Yr)}
          ></eox-timecontrol>
        `)}
    `}}Ne=new WeakSet,Yr=function(e){this.dispatchEvent(new CustomEvent("datetime:updated",{bubbles:!0,detail:{datetime:e.detail.currentStep,layer:this.layer}})),this.layerDatetime.currentStep=e.detail.currentStep,this.requestUpdate()},Fe=new WeakMap,Ue=new WeakMap,O(jr,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerDatetime:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-datetime",jr);var he,qe,ze;class Zr extends nt{constructor(){super();C(this,he,e=>(this.selectedTab===e||this.toolsAsList)&&"highlighted");C(this,qe,`
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
    .listed .tab {
      margin-bottom: .5rem;
    }
  `);C(this,ze,`
    ${ii}
    figure {
      padding: var(--padding-vertical) var(--padding);
      background-color: var(--surface); /* fallback */
      background-color: var(--item-hover-color);
    }
    .listed [name*=-icon] {
      display: none;
    }
    .listed [name*=-icon]+span {
      text-transform: capitalize;
      font-weight: bold;
    }
    .tabbed > nav > div > label,
    .tabbed > nav > div > span {
      border-bottom: 1px solid var(--surface);
    }
    .tabbed > nav > div > label.highlighted,
    .tabbed > nav > div > span.highlighted {
      border-bottom: 2px solid var(--outline-variant);
    }
    :host {
      --eox-slider-thumb-height: 10px !important;
      --eox-slider-thumb-width: 10px !important;
      --eox-slider-track-height: 4px !important;
      --eox-panel-spacing: 0 !important;
      --eox-slider-margin: 0 !important;
      font-size: small;
    }
  `);this.actions=[],this.selectedTab=0,this.tabs=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const e=this.tabs,r=this.actions,n=r.length+e.length>1;return h`
      <style>
        ${x(this,qe)}
        ${!this.unstyled&&x(this,ze)}
      </style>
      <div class="${this.toolsAsList?"listed":"tabbed"}">
        <!-- Navigation for tabs and actions -->
        ${V(n,()=>h`
            <nav>
              ${V(!this.toolsAsList,()=>h`
                  <div>
                    <!-- Labels for tabs -->
                    ${Se(e,(o,a)=>h`
                        <label
                          class=${x(this,he).call(this,a)}
                          @click=${()=>this.selectedTab=a}
                        >
                          <!-- Customizable icon for each tab -->
                          <slot name=${`${o}-icon`}>${o}</slot>
                        </label>
                      `)}
                  </div>
                  <div>
                    <!-- Icons for actions -->
                    ${Se(r,o=>h`
                        <span>
                          <!-- Customizable icon for each action -->
                          <slot name=${`${o}-icon`}>${o}</slot>
                        </span>
                      `)}
                  </div>
                `)}
            </nav>
          `)}
        <figure
          class="no-round small-padding vertical-padding"
          style="overflow: hidden; white-space: normal"
        >
          <!-- Content for each tab -->
          ${Se(e,(o,a)=>h`
              ${V(this.toolsAsList,()=>h`
                  <label>
                    <!-- Customizable icon for each tab -->
                    <slot name=${`${o}-icon`}>${o}</slot>
                    <span>${o}</span>
                  </label>
                `)}
              <div class="tab ${x(this,he).call(this,a)}">
                <!-- Content slot for each tab -->
                <slot name=${`${o}-content`}>${o}</slot>
              </div>
              ${V(this.toolsAsList&&a<e.length-1,()=>h`<hr class="small" />`)}
            `)}
        </figure>
      </div>
    `}}he=new WeakMap,qe=new WeakMap,ze=new WeakMap,O(Zr,"properties",{actions:{attribute:!1},selectedTab:{state:!0},tabs:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-tools-items",Zr);var je,Ye;class Xr extends nt{constructor(){super();O(this,"_removeButton",e=>Ir(this,e));O(this,"_sortButton",e=>Hr(this,e,this.unstyled));O(this,"_button",(e,r)=>Sa(e,r,this.unstyled));O(this,"_getDefaultTools",e=>{var r,n;return h`
      <div slot="info-content">
        ${En(this.layer.get("description"))}
      </div>
      <div slot="opacity-content">
        <div class="row">
          <!-- Input for opacity -->
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value=${Fr((r=this.layer)==null?void 0:r.getOpacity())}
            class="tiny max"
            @input=${o=>{this.layer.setOpacity(parseFloat(o.target.value)),this.requestUpdate()}}
          />
          <span class="small-text" style="width: 30px; text-align: right">${Math.round(((n=this.layer)==null?void 0:n.getOpacity())*100)}%</span>
        </div class="row">
      </div>
      <div slot="config-content">
        <!-- Layer configuration -->
        ${V(this.layer.get("layerConfig"),()=>h`
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
        ${V(this.layer.get("layerDatetime"),()=>h`
            <eox-layercontrol-layer-datetime
              slot="datetime-content"
              .noShadow=${!0}
              .layerDatetime=${this.layer.get("layerDatetime")}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
              @datetime:updated=${o=>Nr(o,this)}
            ></eox-layercontrol-layer-datetime>
          `)}
      </div>
      <div slot="legend-content">
        <!-- Layer legend -->
        ${V(this.layer.get("layerLegend"),()=>h`
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
      <div slot="remove-icon">${this._removeButton(e.remove)}</div>
      <div slot="sort-icon">${this._sortButton(e.sort)}</div>
    `});C(this,je,"");C(this,Ye,`
    ${this.embedded?"":ii}
    .drag-handle {
      -webkit-user-drag: element;
      user-select: none;
    }
    .single-action-container,
    details.tools {
      position: relative;
    }
    .single-action {
      position: relative;
    }
    details.tools summary button {
      pointer-events: none;
    }
    .single-action,
    details.tools summary {
      position: absolute;
      right: 1.5rem;
      top: -32px;
      height: 24px;
      cursor: pointer;
      display: var(--layer-tools-button-visibility);
    }
    .single-action,
    details.tools summary {
      transition: opacity .2s;
    }
    .single-action,
    details.tools summary {
      opacity: .5;
    }
    .single-action:hover,
    details.tools summary:hover {
      opacity: 1;
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
    /*eox-layercontrol-layerconfig {
      border: 1px solid var(--outline-variant);
      padding: .5rem !important;
      display: block;
    }*/
  `);this.layer=null,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,setTimeout(()=>{var e;this.embedded=((e=this.parentElement)==null?void 0:e.tagName)==="EOX-LAYERCONTROL-LAYER"})}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const e=Or(this.tools,this.layer),r=Pr(this.tools,this.layer),n=e==null?void 0:e.length,o=r==null?void 0:r.length;return h`
      <style>
        ${x(this,je)}
        ${!this.unstyled&&x(this,Ye)}
      </style>
      ${V(n+o>0,()=>h`
          ${V(!(n===1&&o===0),()=>h`
              <details
                class="tools"
                open=${this.embedded===!1?!0:this.layer.get("layerControlToolsExpand")||st}
              >
                <summary></summary>
                <eox-layercontrol-tools-items
                  class="${this.toolsAsList?"tools-list":"tools-tab"}"
                  .noShadow=${!1}
                  .actions=${e}
                  .tabs=${r}
                  .unstyled=${this.unstyled}
                  .toolsAsList=${this.toolsAsList}
                >
                  <!-- Rendering tabs and content -->
                  ${Se(r,a=>this._button(a,le()[a]))}
                  <!-- Including default tools -->
                  ${this._getDefaultTools(le())}
                </eox-layercontrol-tools-items>
              </details>
            `)}
        `)}
    `}}je=new WeakMap,Ye=new WeakMap,O(Xr,"properties",{layer:{attribute:!1},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},embedded:{state:!0}});customElements.define("eox-layercontrol-layer-tools",Xr);const Na=i=>{const t=()=>{const e=ga(i.layer,i.map,i.showLayerZoomState);let r=!1;!e&&i.currLayerVisibilityBasedOnZoom?(i.currLayerVisibilityBasedOnZoom=!1,r=!0):e&&!i.currLayerVisibilityBasedOnZoom&&(i.currLayerVisibilityBasedOnZoom=!0,r=!0),r&&(i.requestUpdate(),i.dispatchEvent(new CustomEvent("change:resolution",{bubbles:!0})))};Mr(i.layer,i.showLayerZoomState)&&(t(),i.map.getView().on("change:resolution",()=>t()))},Fa=(i,t)=>{const e=t.layer;e.setVisible(i.target.checked),i.target.checked&&e.get("layerControlExclusive")&&t.closest(`${t.globallyExclusiveLayers?".layers":"eox-layercontrol-layer-list"} > ul`).querySelectorAll("eox-layercontrol-layer").forEach(n=>{var o;n.layer!==e&&((o=n.layer)!=null&&o.get("layerControlExclusive"))&&(n.layer.setVisible(!1),n.requestUpdate())}),t.dispatchEvent(new CustomEvent("changed",{bubbles:!0,detail:e})),t.requestUpdate()};var ft,Nt,Gr,Ze,Xe;class Wr extends nt{constructor(){super();C(this,ft);O(this,"currLayerVisibilityBasedOnZoom",!0);C(this,Ze,"");C(this,Xe,`
    eox-layercontrol-layer {
      width: 100%;
      position: relative;
    }
    eox-layercontrol-layer nav {
      height: 32px;
      margin-block-start: 0 !important;
    }
    eox-layercontrol-layer > nav > .action.tools {
      display: var(--layer-tools-button-visibility);
    }
    eox-layercontrol-layer .action.tools.dots {
      transition: rotate 0s;
    }
    eox-layercontrol-layer:has(eox-layercontrol-layer-tools > details[open]) .action.tools.dots {
      transform: rotate(180deg);
    }
    eox-layercontrol-layer > nav > .action.visibility {
      padding: .3rem;  
      transform: translateX(.3rem);
    }
    @media (pointer:fine) {
      eox-layercontrol-layer:not(:hover) > nav > .action {
        display: var(--layer-toggle-button-visibility);
      }
    }
    eox-layercontrol-layer nav:has(.action input[type=checkbox]:not(:checked)),
    eox-layercontrol-layer nav:has(.action input[type=radio]:not(:checked)),
    eox-layercontrol-layer:has(.action input[type=checkbox]:not(:checked)) eox-layercontrol-layer-tools,
    eox-layercontrol-layer:has(.action input[type=radio]:not(:checked)) eox-layercontrol-layer-tools,
    eox-layercontrol-layer-group:has(summary .action input[type=checkbox]:not(:checked)) eox-layercontrol-layer-list,
    eox-layercontrol-layer-group:has(summary .action input[type=radio]:not(:checked)) eox-layercontrol-layer-list,
    eox-layercontrol-layer-group:has(summary .action input[type=checkbox]:not(:checked)) .arrow-container,
    eox-layercontrol-layer-group:has(summary .action input[type=radio]:not(:checked)) .arrow-container,
    eox-layercontrol-layer-group:has(summary .action input[type=checkbox]:not(:checked)) eox-layercontrol-layer-tools,
    eox-layercontrol-layer-group:has(summary .action input[type=radio]:not(:checked)) eox-layercontrol-layer-tools {
      opacity: .5;
    }
    .tooltip {
      opacity: 1;
    }
    .layer input[type=checkbox],
    .layer input[type=radio] {
      display: var(--layer-input-visibility);
    }
    .layer.zoom-state-invisible {
      opacity: 0.5;
    }
    .layer {
      padding: var(--padding-vertical) 0;
      display: var(--layer-visibility);
      user-select: none;
    }
    .layertitle {
      display: var(--layer-title-visibility);
    }
    .drag-handle {
      -webkit-user-drag: element;
      user-select: none;
    }
    :is(.checkbox,.radio)>span:after {
      transition: none !important;
    }
  `);this.layer=null,this.layerType=void 0,this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.globallyExclusiveLayers=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){Na(this)}render(){var u,d;const e=this.layer.getVisible(),r=e?"visible":"",n=this.currLayerVisibilityBasedOnZoom?"":"zoom-state-invisible",o=P(this,ft,Nt).call(this,"layerControlDisable")?"disabled":"",a=P(this,ft,Nt).call(this,"layerControlExclusive")?"radio":"checkbox",s=((u=Or(this.tools,this.layer))==null?void 0:u.length)>0,l=((d=Pr(this.tools,this.layer))==null?void 0:d.length)>0,c=document.querySelector("eox-layercontrol-layer-tools");return c&&Object.assign(c,{layer:this.layer,tools:this.tools,toolsAsList:this.toolsAsList}),h`
      <style>
        ${x(this,Ze)}
        ${!this.unstyled&&x(this,Xe)}
      </style>
      ${V(this.layer,()=>h`
          <!-- Render the layer -->
          <nav
            class="layer ${o} ${r} ${n} responsive tiny-space"
          >
            ${V(!this.unstyled,()=>{if(P(this,ft,Nt).call(this,"color"))return h`
                  <i class="small" style="color: ${P(this,ft,Nt).call(this,"color")}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>square-rounded</title>
                      <path
                        d="M8 3H16C18.76 3 21 5.24 21 8V16C21 18.76 18.76 21 16 21H8C5.24 21 3 18.76 3 16V8C3 5.24 5.24 3 8 3Z"
                      />
                    </svg>
                  </i>
                `;switch(this.layerType){case"group":return h` <i class="small"> </i> `;case"draw":return h`
                    <i class="small grey-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>vector-square-edit</title>
                        <path
                          d="M22.7 14.4L21.7 15.4L19.6 13.3L20.6 12.3C20.8 12.1 21.2 12.1 21.4 12.3L22.7 13.6C22.9 13.8 22.9 14.1 22.7 14.4M13 19.9L19.1 13.8L21.2 15.9L15.1 22H13V19.9M11 19.9V19.1L11.6 18.5L12.1 18H8V16H6V8H8V6H16V8H18V12.1L19.1 11L19.3 10.8C19.5 10.6 19.8 10.4 20.1 10.3V8H22.1V2H16.1V4H8V2H2V8H4V16H2V22H8V20L11 19.9M18 4H20V6H18V4M4 4H6V6H4V4M6 20H4V18H6V20Z"
                        />
                      </svg>
                    </i>
                  `;case"vector":return h`
                    <i class="small grey-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>vector-polygon</title>
                        <path
                          d="M2,2V8H4.28L5.57,16H4V22H10V20.06L15,20.05V22H21V16H19.17L20,9H22V3H16V6.53L14.8,8H9.59L8,5.82V2M4,4H6V6H4M18,5H20V7H18M6.31,8H7.11L9,10.59V14H15V10.91L16.57,9H18L17.16,16H15V18.06H10V16H7.6M11,10H13V12H11M6,18H8V20H6M17,18H19V20H17"
                        />
                      </svg>
                    </i>
                  `;case"raster":return h`
                    <i class="small grey-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>checkerboard</title>
                        <path
                          d="M2 2V22H22V2H2M20 12H16V16H20V20H16V16H12V20H8V16H4V12H8V8H4V4H8V8H12V4H16V8H20V12M16 8V12H12V8H16M12 12V16H8V12H12Z"
                        />
                      </svg>
                    </i>
                  `;default:return h` <i class="small grey-text"> </i> `}})}

            <!-- Layer title -->
            <div class="max truncate drag-handle ${o}">
              <span class="layertitle truncate"
                >${P(this,ft,Nt).call(this,this.titleProperty)}</span
              >
            </div>

            ${V(l,()=>h`
                <button
                  class="transparent square primary-text small action tools ${this.tools.length===1?this.tools[0]:"dots"}"
                  @click=${()=>{var g,y,v;const f=((y=(g=this.renderRoot.querySelector("eox-layercontrol-layer-tools"))==null?void 0:g.shadowRoot)==null?void 0:y.querySelector("details"))||((v=this.renderRoot.querySelector("eox-layercontrol-layer-tools"))==null?void 0:v.querySelector("details"));f.open=!f.open}}
                >
                  <i class="small">
                    ${le()[this.tools.length>1?"dots":this.tools[0]]}
                  </i>
                  <!--<div class="tooltip top" style="pointer-events: none">Tools</div>-->
                </button>
              `)}
            ${V(!l&&s,()=>this.tools[0]==="remove"?Ir(this,le()[this.tools[0]]):Hr(this,le()[this.tools[0]],!1))}

            <!-- Input element for layer visibility -->
            <label
              class="${o} ${a} icon square primary-text action visibility small"
            >
              <input
                type=${a}
                .checked=${Fr(e)}
                @click=${P(this,ft,Gr)}
                disabled=${o||st}
              />
              <span>
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>eye-off-outline</title>
                    <path
                      d="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z"
                    />
                  </svg>
                </i>
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>eye</title>
                    <path
                      d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                    />
                  </svg>
                </i>
              </span>
              <!--<div class="tooltip top" style="pointer-events: none">${e?"Hide":"Show"}</div>-->
            </label>
          </nav>
        `)}

      <!-- Render layer tools -->
      ${V(l&&!c,()=>h`
          <eox-layercontrol-layer-tools
            .noShadow=${!1}
            .layer=${this.layer}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
            .toolsAsList=${this.toolsAsList}
          ></eox-layercontrol-layer-tools>
        `)}
    `}}ft=new WeakSet,Nt=function(e){var r;return(r=this.layer)==null?void 0:r.get(e)},Gr=function(e){Fa(e,this)},Ze=new WeakMap,Xe=new WeakMap,O(Wr,"properties",{layer:{attribute:!1},layerType:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean}});customElements.define("eox-layercontrol-layer",Wr);var We,Ge;class Jr extends nt{constructor(){super();C(this,We,"");C(this,Ge,`
    details > summary {
      min-block-size: 0rem;
      display: var(--layer-summary-visibility);
      user-select: none;
    }
    details .arrow-container > i {
      transition: transform 0.1s ease-in-out;
    }
    details[open] > summary > .arrow-container > i {
      transform: rotate(90deg);
    }
    .arrow-container {
      position: absolute;
      height: 32px;
      display: flex;
      align-items: center;
      left: calc(var(--padding));
      z-index: 1;
    }
    .list li ul.list > li .arrow-container {
      left: calc(var(--padding) + var(--list-padding) - .5rem);
    }
  `);this.group=null,this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.globallyExclusiveLayers=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var n,o;const e=!!((n=this.group)!=null&&n.get("layerControlExpand")),r=(o=Br(this.group.getLayers()))==null?void 0:o.length;return h`
      <style>
        ${x(this,We)}
        ${!this.unstyled&&x(this,Ge)}
      </style>
      ${V(this.group,()=>h`
          <!-- Render the details element with the layer control -->
          <details
            class="max-width"
            open=${e||st}
            data-children-length=${r}
          >
            <summary class="square">
              ${V(r>0,()=>h`
                  <!-- Open/close arrow -->
                  <div class="arrow-container">
                    <i class="small">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>chevron-right</title>
                        <path
                          d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                        />
                      </svg>
                    </i>
                  </div>
                `)}

              <!-- Render the layer control within the summary -->
              <eox-layercontrol-layer
                .noShadow=${!0}
                .layer=${this.group}
                .map=${this.map}
                .titleProperty=${this.titleProperty}
                .showLayerZoomState=${this.showLayerZoomState}
                .layerType=${"group"}
                .tools=${this.tools}
                .unstyled=${this.unstyled}
                .toolsAsList=${this.toolsAsList}
                .globallyExclusiveLayers=${this.globallyExclusiveLayers}
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
              .globallyExclusiveLayers=${this.globallyExclusiveLayers}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-list>
          </details>
        `)}
    `}}We=new WeakMap,Ge=new WeakMap,O(Jr,"properties",{group:{attribute:!1},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean}});customElements.define("eox-layercontrol-layer-group",Jr);const Ua=i=>{const{layers:t,idProperty:e,titleProperty:r,renderRoot:n}=i,o=$n(()=>{i.requestUpdate(),i.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))},50),a=()=>o();if(t&&(t.hasListener("change:length")&&(t==null||t.un("change:length",a)),t.on("change:length",a),t)){const s=n.querySelector("ul");fa(t,e,r,i),pa(s,t,e,i)}};var Je,Ke;class Kr extends nt{constructor(){super();C(this,Je,"");C(this,Ke,`
    eox-layercontrol-layer-group {
      box-sizing: border-box;
      width: 100%;
    }
    eox-layercontrol-layer.sortable-chosen {
      background: #eeea !important;
    }
    eox-layercontrol-layer.sortable-drag {
      opacity: 0;
    }
    eox-layercontrol-layer.sortable-ghost {
    }
    eox-layercontrol-layer {
      padding: 0 var(--padding);
    }
    @media (pointer:fine) {
      eox-layercontrol-layer:not(:has(details[open])):hover {
        background-color: var(--item-hover-color);
      }
    }
    .list li ul.list > li eox-layercontrol-layer {
      padding-left: var(--list-padding);
    }
    .list li ul.list li ul.list > li eox-layercontrol-layer {
      padding-left: calc(var(--list-padding) * 2 - .5rem);
    }
    .list li ul.list > li:has(details[open]) eox-layercontrol-tools-items {
      display: block;
    }
    .list.no-space li.square {
      padding: 0;
    }
  `);this.idProperty="id",this.layers=null,this.map=null,this.tools=void 0,this.titleProperty="title",this.showLayerZoomState=!1,this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.globallyExclusiveLayers=!1}firstUpdated(){Ua(this)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const e=this.layers?Br(this.layers).reverse():[];return h`
      <style>
        ${x(this,Je)}
        ${!this.unstyled&&x(this,Ke)}
      </style>
      <ul class="list no-space">
        ${V(this.layers,()=>h`
            ${wn(e,r=>r,r=>h`
                <li
                  data-layer="${r.get(this.idProperty)}"
                  data-type="${er(r,this.map)}"
                  class="square"
                >
                  ${r.getLayers?h`
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
                            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
                            @changed=${()=>this.requestUpdate()}
                          >
                          </eox-layercontrol-layer-group>
                        `:h`
                          <eox-layercontrol-layer
                            .noShadow=${!0}
                            .layer=${r}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .layerType=${er(r,this.map)}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
                            @changed=${()=>this.requestUpdate()}
                          ></eox-layercontrol-layer>
                        `}
                </li>
              `)}
          `)}
      </ul>
    `}}Je=new WeakMap,Ke=new WeakMap,O(Kr,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean}});customElements.define("eox-layercontrol-layer-list",Kr);const qa=i=>{const t=i.querySelector("select[name=optional]"),e=t?t.value:null,r=Pi(i.layers.getArray(),"layerControlOptional",!0).find(n=>(n.get(i.idProperty)||n.ol_uid)===e);r==null||r.set("layerControlOptional",!1),r==null||r.setVisible(!0),i.dispatchEvent(new CustomEvent("changed",{bubbles:!0})),i.renderRoot.parentNode.querySelectorAll("eox-layercontrol-layer-list").forEach(n=>n.requestUpdate()),i.requestUpdate()};var Qe,tn;class Qr extends nt{constructor(){super();C(this,Qe);this.idProperty="id",this.layers=null,this.titleProperty="title",this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const e=Pi(this.layers.getArray(),"layerControlOptional",!0);return h`
      <nav class="bottom-padding large-padding">
        <div class="field suffix border small max">
          <!-- Dropdown select element -->
          <select
            name="optional"
            data-cy="optionalLayers"
            class="small-padding"
            style="font-size: small"
          >
            <!-- Default placeholder option -->
            <option disabled selected value>-- select --</option>

            <!-- Mapping through filtered layers list to generate dropdown options -->
            ${e.map(r=>{const n=r.get(this.idProperty)||r.ol_uid,o=r.get(this.titleProperty),a=`layer ${r.get(this.idProperty)}`;return h` <option value="${n}">${o||a}</option> `})}
          </select>

          <!-- Label for the dropdown -->
          <label for="optional">Optional layers</label>
        </div>

        <!-- Button to handle adding layers -->
        <button class="small" @click="${P(this,Qe,tn)}">Add</button>
      </nav>
    `}}Qe=new WeakSet,tn=function(){qa(this)},O(Qr,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},titleProperty:{attribute:"title-property",type:String},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-optional-list",Qr);const za=(i,t)=>{t.jsonInput=i.target.value,t.requestUpdate()},or=i=>{const t=JSON.parse(`{"data":${vr(i.jsonInput)}}`);Array.isArray(t.data)?t.data.forEach(e=>{i.eoxMap.addOrUpdateLayer(e)}):i.eoxMap.addOrUpdateLayer(t.data),i.jsonInput=null,i.requestUpdate()},ja=(i,t)=>{t.urlInput=i.target.value,t.requestUpdate()};async function Ya(i){const t=i.urlInput;if(i.wmsCapabilities=null,i.searchLoad=!0,i.requestUpdate(),!t)return!1;if(Vi(t)==="XYZ")return{Name:t};try{const e=await Po(t);i.wmsCapabilities=e}catch{}finally{i.searchLoad=!1,i.requestUpdate()}return!1}const Za=(i,t)=>{const{Name:e}=i,r=Vi(t.urlInput)||"XYZ",n={type:"Tile",properties:{id:e,title:e},source:{type:r,url:t.urlInput,params:{LAYERS:e}}};t.jsonInput=JSON.stringify(n)},Xa=(i,t)=>{t.open=i||null,t.urlInput=null,t.jsonInput=null,t.wmsCapabilities=null,t.requestUpdate()};var j,rn,nn,Ai,on,an,Ce,ti;class en extends nt{constructor(){super();C(this,j);O(this,"urlInput",null);O(this,"jsonInput",null);O(this,"open",null);O(this,"searchLoad",!1);O(this,"wmsCapabilities",null);C(this,ti,`
    .eox-add-layer-main .open {
      position: relative;
    }
    .eox-add-layer-main .close {
      display: none;
    }
    .field.small > :is(input, textarea, select) {
      font-size: 0.75rem;
    }
  `);this.eoxMap=null,this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const e={add:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>layers-plus</title>
        <path
          d="M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z"
        />
      </svg>`,plus:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>plus</title>
        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
      </svg>`,search:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>magnify</title>
        <path
          d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
        />
      </svg>`},r=this.open?"open":"close",n=this.open==="url",o=this.open==="json",a=!Io(this.urlInput)||this.searchLoad?!0:st;return h`
      <style>
        ${x(this,ti)}
      </style>
      <div class="eox-add-layer-main">
        <nav class="eox-add-layer-col">
          <!-- Tabbed interface for URL and JSON -->
          <div
            class="eox-add-layer-tab tabs min left-align ${r}"
          >
            <a
              @click=${()=>P(this,j,Ce).call(this,"url")}
              class="${n?"active":""}"
            >
              URL
            </a>
            <a
              @click=${()=>P(this,j,Ce).call(this,"json")}
              class="${o?"active":""}"
            >
              JSON
            </a>
          </div>

          <div class="max"></div>

          <!-- Button to toggle tabs -->
          <button
            class="add-icon transparent square primary-text small"
            @click=${()=>P(this,j,Ce).call(this,this.open?null:"url")}
          >
            ${this.unstyled?"Add Layer":h`<i class="small primary-text">${e.add}</i>`}
          </button>
        </nav>
        <div class="eox-add ${r}" style="padding: 15px 0">
          ${n?h`
                <nav>
                  <!-- Input field for URL -->
                  <div class="eox-add-layer-col field border small responsive">
                    <input
                      type="text"
                      class="add-url"
                      placeholder="Add URL (WMS/XYZ)"
                      .value="${this.urlInput}"
                      @input=${P(this,j,rn)}
                    />
                  </div>
                  <!-- Search button for URL -->
                  <button
                    class="search-icon"
                    disabled=${a}
                    @click=${P(this,j,nn)}
                  >
                    ${this.unstyled?"Search":h`<i class="small">${e.search}</i>`}
                  </button>
                </nav>

                <!-- Display layers for WMS capabilities -->
                ${this.wmsCapabilities?h`<ul class="search-lists">
                      ${this.wmsCapabilities.Capability.Layer.Layer.map(s=>{const l=s.Name;return h`
                            <li class="search-list">
                              ${l}
                              <!-- Button to add layer -->
                              <button
                                class="add-layer-icon icon"
                                @click=${()=>P(this,j,Ai).call(this,s)}
                              >
                                ${this.unstyled?"+":""}
                              </button>
                            </li>
                          `})}
                    </ul>`:st}
              `:h`
                <!-- Textarea for JSON input -->
                <div class="field textarea small border no-margin">
                  <textarea
                    class="add-layer-input small"
                    style="overflow-wrap: break-word; font-family: monospace;"
                    placeholder="Please input a valid eox-map layer JSON."
                    @input=${P(this,j,an)}
                    .value=${this.jsonInput}
                  ></textarea>
                </div>

                <!-- Button to add JSON layer -->
                <button
                  class="add-layer-icon json-add-layer small square small-margin"
                  style="position: absolute; bottom: 15px; right: 0;"
                  disabled=${Ho(this.jsonInput)?st:!0}
                  @click=${P(this,j,on)}
                >
                  ${this.unstyled?"Add JSON":h`<i class="small">${e.plus}</i>`}
                </button>
              `}
        </div>
      </div>
    `}}j=new WeakSet,rn=function(e){ja(e,this)},nn=async function(){const e=await Ya(this);e&&P(this,j,Ai).call(this,e)},Ai=function(e){Za(e,this),or(this)},on=function(){or(this)},an=function(e){za(e,this)},Ce=function(e){Xa(e,this)},ti=new WeakMap,O(en,"properties",{eoxMap:{attribute:!1,state:!0},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-add-layers",en);const Wa=(i,t)=>{if(t.requestUpdate(),i.target.tagName==="EOX-LAYERCONTROL-LAYER-TOOLS"){const e=t.renderRoot.querySelector("eox-layercontrol-optional-list");e==null||e.requestUpdate()}},ar=i=>{const t=Si(i.for);return t&&t.map!==i.map&&(i.map=t.map),t};sr();var Lt,Xt,ln,cn,ei;class sn extends nt{constructor(){super();C(this,Xt);C(this,Lt);C(this,ei,`
    ${ii}
    :host, :root {
      --padding: 0.5rem;
      --padding-vertical: .2rem;
      --list-padding: 2rem;
      --layer-input-visibility: flex;
      --layer-summary-visibility: flex;
      --layer-type-visibility: block;
      --layer-title-visibility: inline;
      --layer-visibility: flex;
      --layer-tools-button-visibility: flex;
      --layer-toggle-button-visibility: none;

      --primary-color: var(--primary);
      --secondary-color: var(--secondary);
      --item-color: color-mix(
        in srgb,
        var(--primary-color) 10%,
        transparent
      );
      --item-hover-color: color-mix(
        in srgb,
        var(--surface) 80%,
        transparent
      );

      display: flex;
      flex-direction: column;
      --background-color: var(--eox-background-color, transparent);
      background-color: var(--background-color, transparent);
    }
    
    .layerstitle {
      display: block;
      padding-left: var(--padding);
      padding-right: var(--padding);
    }
    select {
      background-color: var(--background-color);
    }
  `);this.for="eox-map",this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=["info","opacity","datetime","config","remove","sort"],this.addExternalLayers=!1,this.unstyled=!1,this.styleOverride="",this.toolsAsList=!1,this.globallyExclusiveLayers=!1}firstUpdated(){this.eoxMap=ar(this)}updated(e){e.has("for")&&(this.eoxMap=ar(this))}get eoxMap(){return x(this,Lt)}set eoxMap(e){const r=x(this,Lt);vt(this,Lt,e),this.requestUpdate("eoxMap",r)}render(){var n,o,a;const e=(n=this.map)==null?void 0:n.getLayers().getArray(),r=e&&((o=Pi(e,"layerControlOptional",!0))==null?void 0:o.length)>0;return h`
      <style>
        ${!this.unstyled&&x(this,ei)}
        ${this.styleOverride}
      </style>

      <span class="layerstitle">
        <slot name="layerstitle"
          ><p><strong>Layers</strong></p></slot
        >
      </span>

      <!-- Conditional rendering of add layers component -->
      ${V(this.addExternalLayers&&((a=x(this,Lt))==null?void 0:a.addOrUpdateLayer),()=>h`
          <eox-layercontrol-add-layers
            .noShadow=${!0}
            .eoxMap=${x(this,Lt)}
            .unstyled=${this.unstyled}
          ></eox-layercontrol-add-layers>
        `)}

      <!-- Conditional rendering of layer list component -->
      ${V(this.map,()=>h`
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
            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
            @changed=${P(this,Xt,ln)}
            @datetime:updated=${s=>Nr(s,this)}
            @layerConfig:change=${P(this,Xt,cn)}
          ></eox-layercontrol-layer-list>
        `)}

      <!-- Conditional rendering of optional list component -->
      ${V(r,()=>h`
          <eox-layercontrol-optional-list
            .noShadow=${!0}
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .titleProperty=${this.titleProperty}
            @changed=${()=>this.requestUpdate()}
          ></eox-layercontrol-optional-list>
        `)}
    `}}Lt=new WeakMap,Xt=new WeakSet,ln=function(e){Wa(e,this),this.dispatchEvent(new CustomEvent("layerchange",{detail:e.detail}))},cn=function(e){this.dispatchEvent(new CustomEvent("layerConfig:change",{detail:e.detail}))},ei=new WeakMap,O(sn,"properties",{for:{type:String},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},addExternalLayers:{attribute:!1},unstyled:{type:Boolean},styleOverride:{type:String},toolsAsList:{type:Boolean},globallyExclusiveLayers:{attribute:"globally-exclusive-layers",type:Boolean}});customElements.define("eox-layercontrol",sn);const Ga=`
:host {
  display: block;
}
`;sr();const Ja=`
${ii}

:host, :root {
  --navigation-button-display: inline-flex;
}

[part=controls] {
  display: flex;
  align-items: center;
  gap: 8px;
}

button.icon.previous,
button.icon.next {
  display: var(--navigation-button-display);
}

tc-range-slider {
  display: inline-block;
  width: 300px;
  margin: 0;
}
`;class Ka extends nt{static get properties(){return{width:{type:Number},steps:{type:Array}}}constructor(){super(),this.width=0,this.steps=[],this.height=6,this.svgWidth=0,this._yearMarks=[],this._years=[],this._sliderTicks=[]}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.handleResize.bind(this))}disconnectedCallback(){window.removeEventListener("resize",this.handleResize.bind(this)),super.disconnectedCallback()}firstUpdated(){this.yearMarks=this.calculateYearMarks(),this.sliderTicks=this.calculateSliderTicks(),this.handleResize()}updated(t){t.has("steps")&&(this.yearMarks=this.calculateYearMarks(),this.sliderTicks=this.calculateSliderTicks(),this.handleResize())}handleResize(){this.svgWidth=this.shadowRoot.querySelector("svg").clientWidth,this.height=this.shadowRoot.querySelector("svg").clientHeight}groupDatesByYear(){const t=[];return this.steps.forEach(e=>{const n=zt(e).year();let o=t.find(a=>a.year===n);o||(o={year:n,dates:[]},t.push(o)),o.dates.push(e)}),t}preprocessDates(){const t=[];this.steps.forEach(e=>{const n=zt(e).year();let o=t.find(a=>a.year===n);o||(o={year:n,ratio:0,dates:[]},t.push(o)),o.dates.push({date:e,isYearMarker:o.dates.length===0})});for(let e of t)e.ratio=e.dates.length/this.steps.length;return t}get sliderTicks(){return this._sliderTicks}set sliderTicks(t){this._sliderTicks=t,this.requestUpdate()}calculateYearBars(){return this._years.flatMap((r,n)=>{const o=this.steps.indexOf(r.dates[0].date)/(this.steps.length-1)*this.width,a=this.steps.indexOf(r.dates[r.dates.length-1].date)/(this.steps.length-1)*this.width,s=Math.max(0,a-o-2),l=[];return l.push(pt`
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
                    fill="currentColor"
                    font-size="smaller"
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
            `),u})}get lines(){const t=this.numLines>this.width/2?this.width/2:this.numLines,e=this.width/(t-1);return Array.from({length:this.numLines},(r,n)=>n*e)}get numLines(){return this.steps?this.steps.length:0}get yearMarks(){return this._yearMarks}set yearMarks(t){this._yearMarks=t,this.requestUpdate()}get years(){return this._years}set years(t){this._years=t,this.requestUpdate()}calculateYearMarks(){this._years=this.preprocessDates();const t=[];let e=null;return this.lines.forEach((r,n)=>{const a=zt(this.steps[n]).year();(n===0||a!==e)&&t.push({label:a,position:r}),e=a}),t}isYearLine(t){return this._yearMarks.some(r=>Math.abs(r.position-t)<1)}render(){return h`
      <div class="fill-width" style="margin-top: 3px;">
        <svg
          style="width: ${this.width}px; max-width: 100%; height: 30px;"
          viewBox="-1 0 ${this.width+2} ${this.height}"
        >
          ${this.sliderTicks}
        </svg>
      </div>
    `}}customElements.define("eox-sliderticks",Ka);var dn={exports:{}};(function(i,t){(function(e,r){i.exports=r()})(Ft,function(){return function(e,r,n){r.prototype.dayOfYear=function(o){var a=Math.round((n(this).startOf("day")-n(this).startOf("year"))/864e5)+1;return o==null?a:this.add(o-a,"day")}}})})(dn);var Qa=dn.exports;const ts=Li(Qa);var un={exports:{}};(function(i,t){(function(e,r){i.exports=r()})(Ft,function(){var e="day";return function(r,n,o){var a=function(c){return c.add(4-c.isoWeekday(),e)},s=n.prototype;s.isoWeekYear=function(){return a(this).year()},s.isoWeek=function(c){if(!this.$utils().u(c))return this.add(7*(c-this.isoWeek()),e);var u,d,f,g,y=a(this),v=(u=this.isoWeekYear(),d=this.$u,f=(d?o.utc:o)().year(u).startOf("year"),g=4-f.isoWeekday(),f.isoWeekday()>4&&(g+=7),f.add(g,e));return y.diff(v,"week")+1},s.isoWeekday=function(c){return this.$utils().u(c)?this.day()||7:this.day(this.day()%7?c:c-7)};var l=s.startOf;s.startOf=function(c,u){var d=this.$utils(),f=!!d.u(u)||u;return d.p(c)==="isoweek"?f?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(c,u)}}})})(un);var es=un.exports;const is=Li(es);zt.extend(ts);zt.extend(is);class rs extends nt{static get properties(){return{controlProperty:{type:String,attribute:"control-property"},controlValues:{type:Array,attribute:"control-values"},for:{type:String},layer:{type:String},slider:{type:Boolean},navigation:{type:Boolean},_originalParams:{type:Object},play:{type:Boolean,attribute:"play"},displayFormat:{type:String,attribute:"display-format"},currentStep:{type:String,attribute:"current-step"},_animationInterval:{state:!0},_controlSource:{state:!0},_isAnimationPlaying:{state:!0},_newStepIndex:{state:!0},_eoxMap:{state:!0},_width:{state:!0},unstyled:{type:Boolean}}}constructor(){super(),this.controlValues=[],this._newStepIndex=0,this.unstyled=!1,this.play=!1,this.navigation=!0,this.slider=!1,this.for="eox-map",this.layer="",this.controlProperty=void 0,this._eoxMap=void 0,this._width=300,window.addEventListener("resize",()=>{this._width=this.clientWidth}),this.displayFormat=void 0}next(){this._updateStep(1)}previous(){this._updateStep(-1)}playAnimation(t){t?this._animationInterval=setInterval(()=>this._updateStep(1),500):clearInterval(this._animationInterval),this._isAnimationPlaying=t,this.requestUpdate()}setConfig(t){this.layer=t.layer??this.layer,this.controlProperty=t.controlProperty??this.controlProperty,this.controlValues=t.controlValues??this.controlValues,this.requestUpdate(),this._updateStep(0)}get currentStep(){return this.controlValues[this._newStepIndex]}set currentStep(t){const e=this.controlValues.findIndex(r=>r===t);e>-1?this._newStepIndex=e:console.error(`Unable to find step "${t}" in available times!`)}firstUpdated(){this.updateMap()}updated(t){t.has("for")&&this.updateMap()}updateMap(){const t=Si(this.for);if(t){const e=t;this.eoxMap=e}}get eoxMap(){return this._eoxMap}set eoxMap(t){const e=this._eoxMap;this._eoxMap=t,this.requestUpdate("eoxMap",e)}_updateStep(t=1){var e;t&&(this._newStepIndex=this._newStepIndex+t,this._newStepIndex>this.controlValues.length-1&&(this._newStepIndex=0),this._newStepIndex<0&&(this._newStepIndex=this.controlValues.length-1),this.layer&&this.for&&((e=this._controlSource)==null||e.updateParams({[this.controlProperty]:this.controlValues[this._newStepIndex]})),this.requestUpdate(),this.dispatchEvent(new CustomEvent("stepchange",{detail:{currentStep:this.currentStep}})))}getFlatLayersArray(t){const e=[];e.push(...t);let r=e.filter(n=>n instanceof Ni);for(;r.length;){const n=[];for(let o=0,a=r.length;o<a;o++){const s=r[o].getLayers().getArray();e.push(...s);const l=s.filter(c=>c instanceof Ni);n.push(...l)}r=n}return e}render(){if(this.layer&&this.for){const e=Si(this.for).map;e.once("loadend",()=>{if(!this._originalParams){const n=this.getFlatLayersArray(e.getLayers().getArray()).find(o=>o.get("id")===this.layer);this._controlSource=n.getSource(),this._originalParams=this._controlSource.getParams()}})}return h`
      <style>
        ${Ga}
        ${!this.unstyled&&Ja}
      </style>
      <main>
        <div id="controls" part="controls">
          ${this.navigation?h`
                <button
                  part="previous"
                  class="icon previous small circle transparent no-margin"
                  @click="${()=>this.previous()}"
                >
                  ${this.unstyled?"<":h`
                        <i class="primary-text small">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>chevron-left-circle</title>
                            <path
                              d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M15.4,16.6L10.8,12L15.4,7.4L14,6L8,12L14,18L15.4,16.6Z"
                            />
                          </svg>
                        </i>
                      `}
                </button>
              `:st}
          <small part="current">
            ${this.displayFormat?zt(this.controlValues[this._newStepIndex]).format(this.displayFormat):this.controlValues[this._newStepIndex]}
          </small>
          ${this.navigation?h`
                <button
                  part="next"
                  class="icon next small circle transparent no-margin"
                  @click="${()=>this.next()}"
                >
                  ${this.unstyled?"<":h`
                        <i class="primary-text small">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>chevron-right-circle</title>
                            <path
                              d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,18L16,12L10,6L8.6,7.4L13.2,12L8.6,16.6L10,18Z"
                            />
                          </svg>
                        </i>
                      `}
                </button>
              `:st}
          ${this.play?h`
                <button
                  part="play"
                  class="icon-text small ${this._isAnimationPlaying?"pause":"play"}"
                  @click="${()=>this.playAnimation(!this._isAnimationPlaying)}"
                >
                  ${this.unstyled?st:h`
                        <i class="small">
                          ${this._isAnimationPlaying?h`<svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <title>pause</title>
                                <path d="M14,19H18V5H14M6,19H10V5H6V19Z" />
                              </svg>`:h`<svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <title>play</title>
                                <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                              </svg>`}
                        </i>
                      `}
                  <span>${this._isAnimationPlaying?"Pause":"Play"}</span>
                </button>
              `:st}
        </div>
        <div class="small-padding">
          ${this.slider?h`
                <div class="slider-col">
                  <tc-range-slider
                    data="${this.controlValues}"
                    part="slider"
                    value="${this.controlValues[this._newStepIndex]}"
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
    `}}customElements.define("eox-timecontrol",rs);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ns=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const os={attribute:!0,type:String,converter:bn,reflect:!1,hasChanged:vn},as=(i=os,t,e)=>{const{kind:r,metadata:n}=e;let o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),r==="setter"&&((i=Object.create(i)).wrapped=!0),o.set(e.name,i),r==="accessor"){const{name:a}=e;return{set(s){const l=t.get.call(this);t.set.call(this,s),this.requestUpdate(a,l,i)},init(s){return s!==void 0&&this.C(a,void 0,i,s),s}}}if(r==="setter"){const{name:a}=e;return function(s){const l=this[a];t.call(this,s),this.requestUpdate(a,l,i)}}throw Error("Unsupported decorator location: "+r)};function X(i){return(t,e)=>typeof e=="object"?as(i,t,e):((r,n,o)=>{const a=n.hasOwnProperty(o);return n.constructor.createProperty(o,r),a?Object.getOwnPropertyDescriptor(n,o):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ss=(i,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(i,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ls(i,t){return(e,r,n)=>{const o=a=>{var s;return((s=a.renderRoot)==null?void 0:s.querySelector(i))??null};return ss(e,r,{get(){return o(this)}})}}class cs{constructor(t){this.cle=t}setColorScale(){switch(this.cle.scaleType){case"continuous":this.setContinousColorScale();break;case"discrete":this.setDiscreteColorScale();break;case"threshold":this.setThresholdColorScale();break;case"categorical":this.setCategoricalColorScale();break;default:this.invalidScaleType(this.cle.scaleType)}}setContinousColorScale(){const{interpolator:t,domain:e,range:r}=this.cle;this.colorScale=t?Tn(t).domain(e):xi().range(r).domain(e).interpolate(dr)}setDiscreteColorScale(){this.colorScale=_n().domain(this.cle.domain).range(this.cle.range)}setThresholdColorScale(){const t=this.cle.domain;this.colorScale=Cn().domain(t.slice(1,t.length-1)).range(this.cle.range)}setCategoricalColorScale(){this.colorScale=An().domain(this.cle.domain).range(this.cle.range)}invalidScaleType(t){throw new Error(`invalid property scaletype: ${t}.
      Must be one of "categorical", "continuous", "discrete", "threshold".`)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wi=lr(class extends cr{constructor(i){var t;if(super(i),i.type!==Rt.ATTRIBUTE||i.name!=="class"||((t=i.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var r,n;if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((r=this.nt)!=null&&r.has(o))&&this.st.add(o);return this.render(t)}const e=i.element.classList;for(const o of this.st)o in t||(e.remove(o),this.st.delete(o));for(const o in t){const a=!!t[o];a===this.st.has(o)||(n=this.nt)!=null&&n.has(o)||(a?(e.add(o),this.st.add(o)):(e.remove(o),this.st.delete(o)))}return Qt}});class ds{constructor(t){this.cle=t}render(){const t=this.cle.titleText?h`<p class="legend-title">${this.cle.titleText}</p>`:"",e={hidden:this.cle.scaleType==="categorical"},r={hidden:this.cle.scaleType!=="categorical","categorical-container":!0};return h`<div
      class="cle-container"
      style="width:${this.cle.width}px; height:auto;"
    >
      ${t}
      <slot name="subtitle"></slot>
      <svg
        class=${wi(e)}
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
      <ul class=${wi(r)}>
        ${this.renderCategorical()}
      </ul>
      <slot name="footer"></slot>
    </div>`}renderCategorical(){if(this.cle.scaleType!=="categorical")return"";const{markType:t,colorScale:e,domain:r}=this.cle,n={"legend-item":!0,line:t==="line",circle:t==="circle"};return h`${r.map(o=>h`<li
          class=${wi(n)}
          style="--color:${e(o)}"
        >
          ${o}
        </li>`)}`}renderContinuous(){var d;if(this.cle.scaleType!=="continuous"||this.cle.colorScale===null)return"";const{colorScale:t,marginTop:e,marginLeft:r,marginRight:n,tickSize:o,width:a,range:s}=this.cle,l=this.cle.marginBottom+o,c=this.cle.height+o,u=((d=t.interpolator)==null?void 0:d.call(t))||Ln(dr,s);return pt`<image
      x=${r}
      y=${e}
      width=${a-n-r}
      height=${c-e-l}
      preserveAspectRatio="none"
      href=${this.getColorRamp(u).toDataURL()}
    ></image>`}renderDiscreteThreshold(){if(this.cle.scaleType!=="discrete"&&this.cle.scaleType!=="threshold")return"";const{tickSize:t,marginTop:e,marginLeft:r,colorScale:n,xScale:o}=this.cle,a=this.cle.height+t,s=this.cle.marginBottom+t,l=n.range(),c=d=>n.invertExtent(d).map(o)[0]||r,u=d=>{let[f,g]=n.invertExtent(d).map(o);return f=f||0,g=g||o.range()[1],g-f};return pt`${l.map(d=>pt`<rect x=${c(d)} y=${e} width=${u(d)} height=${a-e-s} fill=${d}></rect>`)}`}renderAxis(){if(!this.cle.xScale||this.cle.scaleType==="categorical")return"";const{ticks:t,tickSize:e,tickFormat:r,tickFormatter:n,tickValues:o,xScale:a,marginTop:s}=this.cle,l=this.cle.height+e,c=this.cle.marginBottom+e,u=o!=null&&o.length?o:a.ticks.apply(a,[t,r]),d=Math.max(e,0)+3,f=()=>u.map(g=>pt`<g class="tick" transform='translate(${a(g)},0)'>
      <line stroke="currentColor" y2="${e}" y1="${s+c-l}"></line>
      <text fill="currentColor" y="${d}" dy="0.71em">${n(g)}</text>
      </g>`);return pt`<g
      class="x-axis"
      transform="translate(0, ${l-c})"
      text-anchor="middle"
    >${f()}</g>`}getColorRamp(t,e=256){const r=document.createElement("canvas");r.setAttribute("height","1"),r.setAttribute("width",`${e}`);const n=r.getContext("2d");for(let o=0;o<e;o++)n.fillStyle=t(o/(e-1)),n.fillRect(o,0,1,1);return r}}const us=325,hs=32,ps=6,fs=12,gs=16,ys=12,hn=5,ms=6,pn=".1f",vs=[0,1],bs=["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],ws="Color Legend Element",Ss="circle",xs="continuous",Es=["domain","range","interpolator","scaleType"],$s=["scaleType","ticks","tickSize","tickValues","tickFormat","tickFormatter","domain","range","marginLeft","marginRight","marginBottom","marginTop","width","height"];class Ts{constructor(t){this.cle=t}setXScale(){const{scaleType:t,marginLeft:e,width:r,marginRight:n}=this.cle;switch(t){case"continuous":this.xScale=xi().domain(this.cle.domain).range([e,r-n]);break;case"discrete":case"threshold":this.xScale=xi().domain([this.cle.domain[0],this.cle.domain[this.cle.domain.length-1]]).rangeRound([e,r-n]);break;case"categorical":this.xScale=null;break;default:throw new Error(`Unrecognized scaleType: ${t}`)}}handleAxisTicks(){var t,e,r;if((this.cle.scaleType==="discrete"||this.cle.scaleType==="threshold")&&!this.cle.tickValues){const[n,o]=this.xScale.domain();this.cle.tickValues=[n,...((e=(t=this.cle.colorScale)==null?void 0:t.thresholds)==null?void 0:e.call(t))||this.cle.colorScale.domain(),o]}typeof this.cle.tickFormatter!="function"&&((r=this.cle.tickFormat)!=null&&r.length?this.cle.tickFormatter=Dn(this.cle.tickFormat):this.cle.tickFormatter=this.xScale.tickFormat(this.cle.ticks||hn,this.cle.tickFormat||pn))}}const _s=Ae`
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
`;var U=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let H=class extends nt{constructor(){super(...arguments),this.titleText=ws,this.width=us,this.height=hs,this.marginTop=ps,this.marginRight=fs,this.marginBottom=gs,this.marginLeft=ys,this.scaleType=xs,this.domain=vs,this.range=bs,this.markType=Ss,this.ticks=hn,this.tickFormat=pn,this.tickSize=ms,this.colorScaleSetter=new cs(this),this.axisTickSetter=new Ts(this),this.renderer=new ds(this)}get interpolator(){return this._interpolator}set interpolator(t){if(typeof t=="function"){const e=this.interpolator;this._interpolator=t,this.requestUpdate("interpolator",e)}else throw new Error("interpolator must be a function.")}get tickFormatter(){return this._tickFormatter}set tickFormatter(t){if(typeof t=="function"){const e=this.tickFormatter;this._tickFormatter=t,this.requestUpdate("tickFormatter",e)}else throw new Error("tickFormatter must be a function.")}get colorScale(){return this.colorScaleSetter.colorScale}get xScale(){return this.axisTickSetter.xScale}render(){return this.renderer.render()}willUpdate(t){Es.some(e=>t.has(e))&&this.colorScaleSetter.setColorScale(),$s.some(e=>t.has(e))&&(this.axisTickSetter.setXScale(),this.axisTickSetter.handleAxisTicks())}};H.styles=[_s];U([X({type:String})],H.prototype,"titleText",void 0);U([X({type:Number})],H.prototype,"width",void 0);U([X({type:Number})],H.prototype,"height",void 0);U([X({type:Number})],H.prototype,"marginTop",void 0);U([X({type:Number})],H.prototype,"marginRight",void 0);U([X({type:Number})],H.prototype,"marginBottom",void 0);U([X({type:Number})],H.prototype,"marginLeft",void 0);U([X({type:String})],H.prototype,"scaleType",void 0);U([X({type:Array})],H.prototype,"domain",void 0);U([X({type:Array})],H.prototype,"range",void 0);U([X({type:String})],H.prototype,"markType",void 0);U([X({type:Number})],H.prototype,"ticks",void 0);U([X({type:String})],H.prototype,"tickFormat",void 0);U([X({type:Number})],H.prototype,"tickSize",void 0);U([X({type:Array})],H.prototype,"tickValues",void 0);U([ls("svg")],H.prototype,"svg",void 0);U([X({attribute:!1})],H.prototype,"interpolator",null);U([X({attribute:!1})],H.prototype,"tickFormatter",null);H=U([ns("color-legend")],H);const Cs="eox-layercontrol[data-v-88d02d9c]{overflow:auto}",As={class:"d-flex flex-column"},Ls=["for"],Ds={key:0,class:"mt-2 mb-2"},Vs={__name:"EodashLayerControl",props:{map:{type:String,default:"first"},tools:{type:Array,default:()=>["datetime","info","config","legend","opacity"]},title:{type:String||Boolean,default:"Layers"},cssVars:{type:Object}},setup(i){const t=i,e={tools:t.tools,style:t.cssVars},{selectedCompareStac:r,selectedStac:n}=kn(Mn()),o=Bn(()=>t.map==="second"?Fi.value!==null&&r.value!==null:Ui.value!==null&&n.value!==null),a=t.map==="second"?Rn:On,s=t.map==="second"?Fi:Ui,l=Nn(null),c=async g=>{var W;const{layer:y,datetime:v}=g.detail,k=await Hn(a,y);let B=[];k&&(B=await k.updateLayerJson(v,y.get("id"),t.map));const L=(W=B==null?void 0:B.find(R=>{var tt;return((tt=R==null?void 0:R.properties)==null?void 0:tt.id)==="AnalysisGroup"}))==null?void 0:W.layers;L!=null&&L.length&&(L==null||L.forEach(R=>{R.properties.layerControlExpand=!0,R.properties.layerControlToolsExpand=!0}),s.value.layers=B)};let u;const d=g=>{clearTimeout(u),u=setTimeout(()=>{c(g)},500)},f=g=>{t.map==="second"?Pn.value=g.detail.jsonformValue:In.value=g.detail.jsonformValue};return(g,y)=>(si(),ai("span",As,[o.value?(si(),ai("eox-layercontrol",Fn({key:zi(s)},e,{for:zi(s),"onDatetime:updated":d,toolsAsList:"true",style:{"--eox-background-color":"transparent"},ref_key:"eoxLayercontrol",ref:l,"on:layerConfig:change":f}),[Un(g.$slots,"layerstitle",{},()=>[ji("div",null,[i.title?(si(),ai("p",Ds,[ji("strong",null,qn(i.title),1)])):qi("v-if",!0)])],!0)],16,Ls)):qi("v-if",!0)]))}},el=Vn(Vs,[["styles",[Cs]],["__scopeId","data-v-88d02d9c"]]);export{el as default};
