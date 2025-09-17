var mn=Object.defineProperty;var Bi=i=>{throw TypeError(i)};var vn=(i,t,e)=>t in i?mn(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var I=(i,t,e)=>vn(i,typeof t!="symbol"?t+"":t,e),ai=(i,t,e)=>t.has(i)||Bi("Cannot "+e);var x=(i,t,e)=>(ai(i,t,"read from private field"),e?e.call(i):t.get(i)),D=(i,t,e)=>t.has(i)?Bi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),vt=(i,t,e,r)=>(ai(i,t,"write to private field"),r?r.call(i,e):t.set(i,e),e),H=(i,t,e)=>(ai(i,t,"access private method"),e);import{x as p,T as Qt,E as lt,b as nt,i as Ae,e as ii,a as sr,c as pt,f as bn,u as wn}from"./addCommonStyleSheet.1KzE_Bhf.js";import{n as R}from"./when.BR7zwNJC.js";import{c as Sn,d as It}from"./repeat.DVUTREkw.js";import{e as lr,i as cr,t as Ot}from"./directive.CvdRHFdJ.js";import{f as xn,m as $n}from"./directive-helpers.DSrqcGdr.js";import{a as Se,o as En}from"./unsafe-html.BZ5OabsJ.js";import{c as Pt,g as ri}from"./commonjsHelpers.BosuxZz1.js";import{_ as Tn}from"./index.BUIxO2d3.js";import{g as xi}from"./getElement.CdRlZPdn.js";import"./main.BQD5xcLq.js";import{L as Ni}from"./Group.TOLTOuRh.js";import"./toolcool-range-slider.min.BBXDELo7.js";import{s as _n,l as $i,i as ur,q as Cn,t as An,o as Ln,p as Dn,f as Vn}from"./sequential.Bu6O1RMr.js";import{_ as Mn,s as kn,a as On,aV as Ui,aU as Fi,i as Rn,h as Pn,aY as In,aX as Hn,br as Bn}from"./eo-dash.DsB8qsta.js";import{h as Nn,p as Un,c as si,o as li,e as qi,K as Fn,k as zi,r as qn,j as Yi,t as zn}from"./framework.Dh_GYjBE.js";import"./browser.CQpScIU-.js";import"./utils.DZj92Qv1.js";import"./index.BSpBAx16.js";import"./extent.Dy7YBqBe.js";import"./item.koN_VtZd.js";/**
 * wms-capabilities @0.6.0
 * @description WMS service Capabilities > JSON, based on openlayers 
 * @license BSD-2-Clause
 * @preserve
 */var $=i=>i!==void 0,dr=(i,t,e)=>t in i?i[t]:i[t]=e;const ce={ELEMENT:1,TEXT:3,CDATA_SECTION:4};class Yn{constructor(t){this._parser=new t}toDocument(t){return this._parser.parseFromString(t,"application/xml")}getAllTextContent(t,e){return ni(t,e).join("")}}function ni(i,t){return hr(i,t,[]).join("")}function hr(i,t,e){if(i.nodeType===ce.CDATA_SECTION||i.nodeType===ce.TEXT)t?e.push(String(i.nodeValue).replace(/(\r\n|\r|\n)/g,"")):e.push(i.nodeValue);else{var r;for(r=i.firstChild;r;r=r.nextSibling)hr(r,t,e)}return e}function jn(i,t,e,r){for(var n=Zn(t);n;n=Xn(n)){var o=n.namespaceURI||null,a=i[o];if($(a)){var s=a[n.localName];$(s)&&s.call(r,n,e)}}}function Zn(i){let t=i.firstElementChild||i.firstChild;for(;t&&t.nodeType!==ce.ELEMENT;)t=t.nextSibling;return t}function Xn(i){let t=i.nextElementSibling||i.nextSibling;for(;t&&t.nodeType!==ce.ELEMENT;)t=t.nextSibling;return t}function G(i,t,e){return Wn(i,t,e)}function Wn(i,t,e){var r=$(e)?e:{},n,o;for(n=0,o=i.length;n<o;++n)r[i[n]]=t;return r}function pr(i,t){return function(e,r){var n=i.call($(t)?t:this,e,r);if($(n)){var o=r[r.length-1];o.push(n)}}}function Z(i,t,e,r,n){return r.push(i),jn(t,e,r,n),r.pop()}function v(i,t,e){return function(r,n){let o=i.call($(e)?e:this,r,n);if($(o)){var a=n[n.length-1],s=$(t)?t:r.localName;a[s]=o}}}function it(i,t,e){return function(r,n){var o=i.call($(e)?e:this,r,n);if($(o)){var a=n[n.length-1],s=$(t)?t:r.localName,l=dr(a,s,[]);l.push(o)}}}const Gn=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function Jn(i){return i.replace(Gn,"")}function Ht(i){const t=/^\s*(true|1)|(false|0)\s*$/.exec(i);if(t)return $(t[1])||!1}function qt(i){return wt(ni(i,!1))}function wt(i){const t=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(i);if(t)return parseFloat(t[1])}function ci(i){return Le(ni(i,!1))}function Le(i){const t=/^\s*(\d+)\s*$/.exec(i);if(t)return parseInt(t[1],10)}function A(i){return Jn(ni(i,!1))}const Kn="http://www.w3.org/1999/xlink";function Di(i){return i.getAttributeNS(Kn,"href")}function Qn(i,t){return Z({},Co,i,t)}function fr(i){return[wt(i.getAttribute("minx")),wt(i.getAttribute("miny")),wt(i.getAttribute("maxx")),wt(i.getAttribute("maxy"))]}function to(i,t){const e=fr(i),r=[wt(i.getAttribute("resx")),wt(i.getAttribute("resy"))];return{crs:i.getAttribute("CRS")||i.getAttribute("SRS"),extent:e,res:r}}function eo(i,t){const e=fr(i);if(!(!$(e[0])||!$(e[1])||!$(e[2])||!$(e[3])))return e}function io(i,t){const e=parseFloat(i.getAttribute("min")),r=parseFloat(i.getAttribute("max"));return{min:e,max:r}}function ro(i,t){const e=Z({},Ao,i,t);if(!$(e))return;const r=e.westBoundLongitude,n=e.southBoundLatitude,o=e.eastBoundLongitude,a=e.northBoundLatitude;if(!(!$(r)||!$(n)||!$(o)||!$(a)))return[r,n,o,a]}function no(i,t){return Z({},So,i,t)}function oo(i,t){return Z({},xo,i,t)}function ao(i,t){return Z({},$o,i,t)}function so(i,t){return Z({},Eo,i,t)}function lo(i,t){return Z({},To,i,t)}function co(i,t){return Z([],_o,i,t)}function uo(i,t){const e=Ht(i.getAttribute("queryable"));return Z({queryable:$(e)?e:!1},mr,i,t)}function ho(i,t){var e=t[t.length-1];const r=Z({},mr,i,t);if(!$(r))return;let n=Ht(i.getAttribute("queryable"));$(n)||(n=e.queryable),r.queryable=$(n)?n:!1;let o=Le(i.getAttribute("cascaded"));$(o)||(o=e.cascaded),r.cascaded=o;let a=Ht(i.getAttribute("opaque"));$(a)||(a=e.opaque),r.opaque=$(a)?a:!1;let s=Ht(i.getAttribute("noSubsets"));$(s)||(s=e.noSubsets),r.noSubsets=$(s)?s:!1;let l=wt(i.getAttribute("fixedWidth"));$(l)||(l=e.fixedWidth),r.fixedWidth=l;let c=wt(i.getAttribute("fixedHeight"));$(c)||(c=e.fixedHeight),r.fixedHeight=c;const d=["Style","CRS","AuthorityURL"];for(let g=0,y=d.length;g<y;g++){const m=d[g],h=e[m];if($(h)){let T=dr(r,m,[]);T=T.concat(h),r[m]=T}}const u=["EX_GeographicBoundingBox","BoundingBox","Dimension","Attribution","MinScaleDenominator","MaxScaleDenominator"];for(let g=0,y=u.length;g<y;g++){const m=u[g],h=r[m];if(!$(h)){const T=e[m];r[m]=T}}return r}function po(i,t){return{name:i.getAttribute("name"),units:i.getAttribute("units"),unitSymbol:i.getAttribute("unitSymbol"),default:i.getAttribute("default"),multipleValues:Ht(i.getAttribute("multipleValues")),nearestValue:Ht(i.getAttribute("nearestValue")),current:Ht(i.getAttribute("current")),values:A(i)}}function xt(i,t){return Z({},Oo,i,t)}function fo(i,t){return Z({},Lo,i,t)}function go(i,t){return Z({},Vo,i,t)}function yo(i,t){return Z({},Mo,i,t)}function ui(i,t){return Z({},Do,i,t)}function gr(i,t){var e=xt(i,t);if($(e)){const r=[Le(i.getAttribute("width")),Le(i.getAttribute("height"))];return e.size=r,e}}function mo(i,t){var e=xt(i,t);if($(e))return e.name=i.getAttribute("name"),e}function vo(i,t){var e=xt(i,t);if($(e))return e.type=i.getAttribute("type"),e}function bo(i,t){return Z({},ko,i,t)}function yr(i,t){return Z([],Ro,i,t)}const J=[null,"http://www.opengis.net/wms"],wo=G(J,{Service:v(oo),Capability:v(no)}),So=G(J,{Request:v(fo),Exception:v(co),Layer:v(uo)}),xo=G(J,{Name:v(A),Title:v(A),Abstract:v(A),KeywordList:v(yr),OnlineResource:v(Di),ContactInformation:v(ao),Fees:v(A),AccessConstraints:v(A),LayerLimit:v(ci),MaxWidth:v(ci),MaxHeight:v(ci)}),$o=G(J,{ContactPersonPrimary:v(so),ContactPosition:v(A),ContactAddress:v(lo),ContactVoiceTelephone:v(A),ContactFacsimileTelephone:v(A),ContactElectronicMailAddress:v(A)}),Eo=G(J,{ContactPerson:v(A),ContactOrganization:v(A)}),To=G(J,{AddressType:v(A),Address:v(A),City:v(A),StateOrProvince:v(A),PostCode:v(A),Country:v(A)}),_o=G(J,{Format:pr(A)}),mr=G(J,{Name:v(A),Title:v(A),Abstract:v(A),KeywordList:v(yr),CRS:it(A),SRS:it(A),EX_GeographicBoundingBox:v(ro),LatLonBoundingBox:v(eo),BoundingBox:it(to),Dimension:it(po),Attribution:v(Qn),AuthorityURL:it(mo),Identifier:it(A),MetadataURL:it(vo),DataURL:it(xt),FeatureListURL:it(xt),Style:it(bo),MinScaleDenominator:v(qt),MaxScaleDenominator:v(qt),ScaleHint:v(io),Layer:it(ho)}),Co=G(J,{Title:v(A),OnlineResource:v(Di),LogoURL:v(gr)}),Ao=G(J,{westBoundLongitude:v(qt),eastBoundLongitude:v(qt),southBoundLatitude:v(qt),northBoundLatitude:v(qt)}),Lo=G(J,{GetCapabilities:v(ui),GetMap:v(ui),GetFeatureInfo:v(ui)}),Do=G(J,{Format:it(A),DCPType:it(go)}),Vo=G(J,{HTTP:v(yo)}),Mo=G(J,{Get:v(xt),Post:v(xt)}),ko=G(J,{Name:v(A),Title:v(A),Abstract:v(A),LegendURL:it(gr),StyleSheetURL:v(xt),StyleURL:v(xt)}),Oo=G(J,{Format:v(A),OnlineResource:v(Di)}),Ro=G(J,{Keyword:pr(A)});class Po{constructor(t,e){!e&&typeof window<"u"&&(e=window.DOMParser),this.version=void 0,this._parser=new Yn(e),this._data=t}data(t){return this._data=t,this}toJSON(t){return t=t||this._data,this.parse(t)}parse(t){return this.readFromDocument(this._parser.toDocument(t))}readFromDocument(t){for(let e=t.firstChild;e;e=e.nextSibling)if(e.nodeType==ce.ELEMENT)return this.readFromNode(e);return null}readFromNode(t){return this.version=t.getAttribute("version"),Z({version:this.version},wo,t,[])||null}}async function Io(i){let t=new URL(i),e=t.searchParams;e.set("SERVICE","WMS"),e.set("REQUEST","GetCapabilities");let r=t.toString();const n=await fetch(r);if(n.ok){const o=await n.text();return new Po(o).toJSON()}else throw new Error(`Error: ${n.status}`)}function Vi(i){const t=/\b(?:wms|ows)\b/i,e=/{(?:z|x|y-?)}\/{(?:z|x|y-?)}\/{(?:z|x|y-?)}/i;return t.test(i)?"TileWMS":e.test(i)?"XYZ":!1}function Ho(i){const e=/^(?:(?:https?|ftp):\/\/|\/\/)?(?:localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:\w+[\w-]*\.)+\w+)(?::\d+)?(?:\/\S*)?$/.test(i),r=Vi(i);return!!(i&&e&&r)}function vr(i){return i.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,'"$2": ').replace(/,\s*}/g,"}").replace(/,\s*]/g,"]").replace(/\s*(\{|}|\[|\]|,)\s*/g,"$1").replaceAll('": //',"://")}function Bo(i){try{return JSON.parse(vr(i)),!!i}catch{return!1}}function No(i,t){const e=new URL(i).searchParams;Object.entries(t).forEach(([a,s])=>{typeof s=="object"&&!Array.isArray(s)&&s!==null?Object.keys(s).forEach(l=>{e.set(l,s[l])}):e.set(a,s)});const r=i.split("?")[0],n=e.toString();return`${r}?${n}`}/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function ji(i,t){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(i,n).enumerable})),e.push.apply(e,r)}return e}function yt(i){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?ji(Object(e),!0).forEach(function(r){Uo(i,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):ji(Object(e)).forEach(function(r){Object.defineProperty(i,r,Object.getOwnPropertyDescriptor(e,r))})}return i}function xe(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?xe=function(t){return typeof t}:xe=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xe(i)}function Uo(i,t,e){return t in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e,i}function $t(){return $t=Object.assign||function(i){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=e[r])}return i},$t.apply(this,arguments)}function Fo(i,t){if(i==null)return{};var e={},r=Object.keys(i),n,o;for(o=0;o<r.length;o++)n=r[o],!(t.indexOf(n)>=0)&&(e[n]=i[n]);return e}function qo(i,t){if(i==null)return{};var e=Fo(i,t),r,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(i);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(i,r)&&(e[r]=i[r])}return e}var zo="1.15.6";function St(i){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(i)}var Et=St(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),pe=St(/Edge/i),Zi=St(/firefox/i),re=St(/safari/i)&&!St(/chrome/i)&&!St(/android/i),Mi=St(/iP(ad|od|hone)/i),br=St(/chrome/i)&&St(/android/i),wr={capture:!1,passive:!1};function _(i,t,e){i.addEventListener(t,e,!Et&&wr)}function E(i,t,e){i.removeEventListener(t,e,!Et&&wr)}function De(i,t){if(t){if(t[0]===">"&&(t=t.substring(1)),i)try{if(i.matches)return i.matches(t);if(i.msMatchesSelector)return i.msMatchesSelector(t);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(t)}catch{return!1}return!1}}function Sr(i){return i.host&&i!==document&&i.host.nodeType?i.host:i.parentNode}function ht(i,t,e,r){if(i){e=e||document;do{if(t!=null&&(t[0]===">"?i.parentNode===e&&De(i,t):De(i,t))||r&&i===e)return i;if(i===e)break}while(i=Sr(i))}return null}var Xi=/\s+/g;function at(i,t,e){if(i&&t)if(i.classList)i.classList[e?"add":"remove"](t);else{var r=(" "+i.className+" ").replace(Xi," ").replace(" "+t+" "," ");i.className=(r+(e?" "+t:"")).replace(Xi," ")}}function b(i,t,e){var r=i&&i.style;if(r){if(e===void 0)return document.defaultView&&document.defaultView.getComputedStyle?e=document.defaultView.getComputedStyle(i,""):i.currentStyle&&(e=i.currentStyle),t===void 0?e:e[t];!(t in r)&&t.indexOf("webkit")===-1&&(t="-webkit-"+t),r[t]=e+(typeof e=="string"?"":"px")}}function Yt(i,t){var e="";if(typeof i=="string")e=i;else do{var r=b(i,"transform");r&&r!=="none"&&(e=r+" "+e)}while(!t&&(i=i.parentNode));var n=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return n&&new n(e)}function xr(i,t,e){if(i){var r=i.getElementsByTagName(t),n=0,o=r.length;if(e)for(;n<o;n++)e(r[n],n);return r}return[]}function gt(){var i=document.scrollingElement;return i||document.documentElement}function z(i,t,e,r,n){if(!(!i.getBoundingClientRect&&i!==window)){var o,a,s,l,c,d,u;if(i!==window&&i.parentNode&&i!==gt()?(o=i.getBoundingClientRect(),a=o.top,s=o.left,l=o.bottom,c=o.right,d=o.height,u=o.width):(a=0,s=0,l=window.innerHeight,c=window.innerWidth,d=window.innerHeight,u=window.innerWidth),(t||e)&&i!==window&&(n=n||i.parentNode,!Et))do if(n&&n.getBoundingClientRect&&(b(n,"transform")!=="none"||e&&b(n,"position")!=="static")){var g=n.getBoundingClientRect();a-=g.top+parseInt(b(n,"border-top-width")),s-=g.left+parseInt(b(n,"border-left-width")),l=a+o.height,c=s+o.width;break}while(n=n.parentNode);if(r&&i!==window){var y=Yt(n||i),m=y&&y.a,h=y&&y.d;y&&(a/=h,s/=m,u/=m,d/=h,l=a+d,c=s+u)}return{top:a,left:s,bottom:l,right:c,width:u,height:d}}}function Wi(i,t,e){for(var r=Dt(i,!0),n=z(i)[t];r;){var o=z(r)[e],a=void 0;if(a=n>=o,!a)return r;if(r===gt())break;r=Dt(r,!1)}return!1}function Zt(i,t,e,r){for(var n=0,o=0,a=i.children;o<a.length;){if(a[o].style.display!=="none"&&a[o]!==w.ghost&&(r||a[o]!==w.dragged)&&ht(a[o],e.draggable,i,!1)){if(n===t)return a[o];n++}o++}return null}function ki(i,t){for(var e=i.lastElementChild;e&&(e===w.ghost||b(e,"display")==="none"||t&&!De(e,t));)e=e.previousElementSibling;return e||null}function ct(i,t){var e=0;if(!i||!i.parentNode)return-1;for(;i=i.previousElementSibling;)i.nodeName.toUpperCase()!=="TEMPLATE"&&i!==w.clone&&(!t||De(i,t))&&e++;return e}function Gi(i){var t=0,e=0,r=gt();if(i)do{var n=Yt(i),o=n.a,a=n.d;t+=i.scrollLeft*o,e+=i.scrollTop*a}while(i!==r&&(i=i.parentNode));return[t,e]}function Yo(i,t){for(var e in i)if(i.hasOwnProperty(e)){for(var r in t)if(t.hasOwnProperty(r)&&t[r]===i[e][r])return Number(e)}return-1}function Dt(i,t){if(!i||!i.getBoundingClientRect)return gt();var e=i,r=!1;do if(e.clientWidth<e.scrollWidth||e.clientHeight<e.scrollHeight){var n=b(e);if(e.clientWidth<e.scrollWidth&&(n.overflowX=="auto"||n.overflowX=="scroll")||e.clientHeight<e.scrollHeight&&(n.overflowY=="auto"||n.overflowY=="scroll")){if(!e.getBoundingClientRect||e===document.body)return gt();if(r||t)return e;r=!0}}while(e=e.parentNode);return gt()}function jo(i,t){if(i&&t)for(var e in t)t.hasOwnProperty(e)&&(i[e]=t[e]);return i}function di(i,t){return Math.round(i.top)===Math.round(t.top)&&Math.round(i.left)===Math.round(t.left)&&Math.round(i.height)===Math.round(t.height)&&Math.round(i.width)===Math.round(t.width)}var ne;function $r(i,t){return function(){if(!ne){var e=arguments,r=this;e.length===1?i.call(r,e[0]):i.apply(r,e),ne=setTimeout(function(){ne=void 0},t)}}}function Zo(){clearTimeout(ne),ne=void 0}function Er(i,t,e){i.scrollLeft+=t,i.scrollTop+=e}function Tr(i){var t=window.Polymer,e=window.jQuery||window.Zepto;return t&&t.dom?t.dom(i).cloneNode(!0):e?e(i).clone(!0)[0]:i.cloneNode(!0)}function _r(i,t,e){var r={};return Array.from(i.children).forEach(function(n){var o,a,s,l;if(!(!ht(n,t.draggable,i,!1)||n.animated||n===e)){var c=z(n);r.left=Math.min((o=r.left)!==null&&o!==void 0?o:1/0,c.left),r.top=Math.min((a=r.top)!==null&&a!==void 0?a:1/0,c.top),r.right=Math.max((s=r.right)!==null&&s!==void 0?s:-1/0,c.right),r.bottom=Math.max((l=r.bottom)!==null&&l!==void 0?l:-1/0,c.bottom)}}),r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}var rt="Sortable"+new Date().getTime();function Xo(){var i=[],t;return{captureAnimationState:function(){if(i=[],!!this.options.animation){var r=[].slice.call(this.el.children);r.forEach(function(n){if(!(b(n,"display")==="none"||n===w.ghost)){i.push({target:n,rect:z(n)});var o=yt({},i[i.length-1].rect);if(n.thisAnimationDuration){var a=Yt(n,!0);a&&(o.top-=a.f,o.left-=a.e)}n.fromRect=o}})}},addAnimationState:function(r){i.push(r)},removeAnimationState:function(r){i.splice(Yo(i,{target:r}),1)},animateAll:function(r){var n=this;if(!this.options.animation){clearTimeout(t),typeof r=="function"&&r();return}var o=!1,a=0;i.forEach(function(s){var l=0,c=s.target,d=c.fromRect,u=z(c),g=c.prevFromRect,y=c.prevToRect,m=s.rect,h=Yt(c,!0);h&&(u.top-=h.f,u.left-=h.e),c.toRect=u,c.thisAnimationDuration&&di(g,u)&&!di(d,u)&&(m.top-u.top)/(m.left-u.left)===(d.top-u.top)/(d.left-u.left)&&(l=Go(m,g,y,n.options)),di(u,d)||(c.prevFromRect=d,c.prevToRect=u,l||(l=n.options.animation),n.animate(c,m,u,l)),l&&(o=!0,a=Math.max(a,l),clearTimeout(c.animationResetTimer),c.animationResetTimer=setTimeout(function(){c.animationTime=0,c.prevFromRect=null,c.fromRect=null,c.prevToRect=null,c.thisAnimationDuration=null},l),c.thisAnimationDuration=l)}),clearTimeout(t),o?t=setTimeout(function(){typeof r=="function"&&r()},a):typeof r=="function"&&r(),i=[]},animate:function(r,n,o,a){if(a){b(r,"transition",""),b(r,"transform","");var s=Yt(this.el),l=s&&s.a,c=s&&s.d,d=(n.left-o.left)/(l||1),u=(n.top-o.top)/(c||1);r.animatingX=!!d,r.animatingY=!!u,b(r,"transform","translate3d("+d+"px,"+u+"px,0)"),this.forRepaintDummy=Wo(r),b(r,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),b(r,"transform","translate3d(0,0,0)"),typeof r.animated=="number"&&clearTimeout(r.animated),r.animated=setTimeout(function(){b(r,"transition",""),b(r,"transform",""),r.animated=!1,r.animatingX=!1,r.animatingY=!1},a)}}}}function Wo(i){return i.offsetWidth}function Go(i,t,e,r){return Math.sqrt(Math.pow(t.top-i.top,2)+Math.pow(t.left-i.left,2))/Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))*r.animation}var Bt=[],hi={initializeByDefault:!0},fe={mount:function(t){for(var e in hi)hi.hasOwnProperty(e)&&!(e in t)&&(t[e]=hi[e]);Bt.forEach(function(r){if(r.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),Bt.push(t)},pluginEvent:function(t,e,r){var n=this;this.eventCanceled=!1,r.cancel=function(){n.eventCanceled=!0};var o=t+"Global";Bt.forEach(function(a){e[a.pluginName]&&(e[a.pluginName][o]&&e[a.pluginName][o](yt({sortable:e},r)),e.options[a.pluginName]&&e[a.pluginName][t]&&e[a.pluginName][t](yt({sortable:e},r)))})},initializePlugins:function(t,e,r,n){Bt.forEach(function(s){var l=s.pluginName;if(!(!t.options[l]&&!s.initializeByDefault)){var c=new s(t,e,t.options);c.sortable=t,c.options=t.options,t[l]=c,$t(r,c.defaults)}});for(var o in t.options)if(t.options.hasOwnProperty(o)){var a=this.modifyOption(t,o,t.options[o]);typeof a<"u"&&(t.options[o]=a)}},getEventProperties:function(t,e){var r={};return Bt.forEach(function(n){typeof n.eventProperties=="function"&&$t(r,n.eventProperties.call(e[n.pluginName],t))}),r},modifyOption:function(t,e,r){var n;return Bt.forEach(function(o){t[o.pluginName]&&o.optionListeners&&typeof o.optionListeners[e]=="function"&&(n=o.optionListeners[e].call(t[o.pluginName],r))}),n}};function Jo(i){var t=i.sortable,e=i.rootEl,r=i.name,n=i.targetEl,o=i.cloneEl,a=i.toEl,s=i.fromEl,l=i.oldIndex,c=i.newIndex,d=i.oldDraggableIndex,u=i.newDraggableIndex,g=i.originalEvent,y=i.putSortable,m=i.extraEventProperties;if(t=t||e&&e[rt],!!t){var h,T=t.options,V="on"+r.charAt(0).toUpperCase()+r.substr(1);window.CustomEvent&&!Et&&!pe?h=new CustomEvent(r,{bubbles:!0,cancelable:!0}):(h=document.createEvent("Event"),h.initEvent(r,!0,!0)),h.to=a||e,h.from=s||e,h.item=n||e,h.clone=o,h.oldIndex=l,h.newIndex=c,h.oldDraggableIndex=d,h.newDraggableIndex=u,h.originalEvent=g,h.pullMode=y?y.lastPutMode:void 0;var L=yt(yt({},m),fe.getEventProperties(r,t));for(var M in L)h[M]=L[M];e&&e.dispatchEvent(h),T[V]&&T[V].call(t,h)}}var Ko=["evt"],et=function(t,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=r.evt,o=qo(r,Ko);fe.pluginEvent.bind(w)(t,e,yt({dragEl:f,parentEl:B,ghostEl:S,rootEl:O,nextEl:Rt,lastDownEl:$e,cloneEl:P,cloneHidden:At,dragStarted:te,putSortable:X,activeSortable:w.active,originalEvent:n,oldIndex:zt,oldDraggableIndex:oe,newIndex:st,newDraggableIndex:Ct,hideGhostForTarget:Dr,unhideGhostForTarget:Vr,cloneNowHidden:function(){At=!0},cloneNowShown:function(){At=!1},dispatchSortableEvent:function(s){tt({sortable:e,name:s,originalEvent:n})}},o))};function tt(i){Jo(yt({putSortable:X,cloneEl:P,targetEl:f,rootEl:O,oldIndex:zt,oldDraggableIndex:oe,newIndex:st,newDraggableIndex:Ct},i))}var f,B,S,O,Rt,$e,P,At,zt,st,oe,Ct,ye,X,Ut=!1,Ve=!1,Me=[],Mt,dt,pi,fi,Ji,Ki,te,Nt,ae,se=!1,me=!1,Ee,Q,gi=[],Ei=!1,ke=[],oi=typeof document<"u",ve=Mi,Qi=pe||Et?"cssFloat":"float",Qo=oi&&!br&&!Mi&&"draggable"in document.createElement("div"),Cr=function(){if(oi){if(Et)return!1;var i=document.createElement("x");return i.style.cssText="pointer-events:auto",i.style.pointerEvents==="auto"}}(),Ar=function(t,e){var r=b(t),n=parseInt(r.width)-parseInt(r.paddingLeft)-parseInt(r.paddingRight)-parseInt(r.borderLeftWidth)-parseInt(r.borderRightWidth),o=Zt(t,0,e),a=Zt(t,1,e),s=o&&b(o),l=a&&b(a),c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+z(o).width,d=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+z(a).width;if(r.display==="flex")return r.flexDirection==="column"||r.flexDirection==="column-reverse"?"vertical":"horizontal";if(r.display==="grid")return r.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(o&&s.float&&s.float!=="none"){var u=s.float==="left"?"left":"right";return a&&(l.clear==="both"||l.clear===u)?"vertical":"horizontal"}return o&&(s.display==="block"||s.display==="flex"||s.display==="table"||s.display==="grid"||c>=n&&r[Qi]==="none"||a&&r[Qi]==="none"&&c+d>n)?"vertical":"horizontal"},ta=function(t,e,r){var n=r?t.left:t.top,o=r?t.right:t.bottom,a=r?t.width:t.height,s=r?e.left:e.top,l=r?e.right:e.bottom,c=r?e.width:e.height;return n===s||o===l||n+a/2===s+c/2},ea=function(t,e){var r;return Me.some(function(n){var o=n[rt].options.emptyInsertThreshold;if(!(!o||ki(n))){var a=z(n),s=t>=a.left-o&&t<=a.right+o,l=e>=a.top-o&&e<=a.bottom+o;if(s&&l)return r=n}}),r},Lr=function(t){function e(o,a){return function(s,l,c,d){var u=s.options.group.name&&l.options.group.name&&s.options.group.name===l.options.group.name;if(o==null&&(a||u))return!0;if(o==null||o===!1)return!1;if(a&&o==="clone")return o;if(typeof o=="function")return e(o(s,l,c,d),a)(s,l,c,d);var g=(a?s:l).options.group.name;return o===!0||typeof o=="string"&&o===g||o.join&&o.indexOf(g)>-1}}var r={},n=t.group;(!n||xe(n)!="object")&&(n={name:n}),r.name=n.name,r.checkPull=e(n.pull,!0),r.checkPut=e(n.put),r.revertClone=n.revertClone,t.group=r},Dr=function(){!Cr&&S&&b(S,"display","none")},Vr=function(){!Cr&&S&&b(S,"display","")};oi&&!br&&document.addEventListener("click",function(i){if(Ve)return i.preventDefault(),i.stopPropagation&&i.stopPropagation(),i.stopImmediatePropagation&&i.stopImmediatePropagation(),Ve=!1,!1},!0);var kt=function(t){if(f){t=t.touches?t.touches[0]:t;var e=ea(t.clientX,t.clientY);if(e){var r={};for(var n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);r.target=r.rootEl=e,r.preventDefault=void 0,r.stopPropagation=void 0,e[rt]._onDragOver(r)}}},ia=function(t){f&&f.parentNode[rt]._isOutsideThisEl(t.target)};function w(i,t){if(!(i&&i.nodeType&&i.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(i));this.el=i,this.options=t=$t({},t),i[rt]=this;var e={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(i.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Ar(i,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,s){a.setData("Text",s.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:w.supportPointer!==!1&&"PointerEvent"in window&&(!re||Mi),emptyInsertThreshold:5};fe.initializePlugins(this,i,e);for(var r in e)!(r in t)&&(t[r]=e[r]);Lr(t);for(var n in this)n.charAt(0)==="_"&&typeof this[n]=="function"&&(this[n]=this[n].bind(this));this.nativeDraggable=t.forceFallback?!1:Qo,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?_(i,"pointerdown",this._onTapStart):(_(i,"mousedown",this._onTapStart),_(i,"touchstart",this._onTapStart)),this.nativeDraggable&&(_(i,"dragover",this),_(i,"dragenter",this)),Me.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),$t(this,Xo())}w.prototype={constructor:w,_isOutsideThisEl:function(t){!this.el.contains(t)&&t!==this.el&&(Nt=null)},_getDirection:function(t,e){return typeof this.options.direction=="function"?this.options.direction.call(this,t,e,f):this.options.direction},_onTapStart:function(t){if(t.cancelable){var e=this,r=this.el,n=this.options,o=n.preventOnFilter,a=t.type,s=t.touches&&t.touches[0]||t.pointerType&&t.pointerType==="touch"&&t,l=(s||t).target,c=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||l,d=n.filter;if(ua(r),!f&&!(/mousedown|pointerdown/.test(a)&&t.button!==0||n.disabled)&&!c.isContentEditable&&!(!this.nativeDraggable&&re&&l&&l.tagName.toUpperCase()==="SELECT")&&(l=ht(l,n.draggable,r,!1),!(l&&l.animated)&&$e!==l)){if(zt=ct(l),oe=ct(l,n.draggable),typeof d=="function"){if(d.call(this,t,l,this)){tt({sortable:e,rootEl:c,name:"filter",targetEl:l,toEl:r,fromEl:r}),et("filter",e,{evt:t}),o&&t.preventDefault();return}}else if(d&&(d=d.split(",").some(function(u){if(u=ht(c,u.trim(),r,!1),u)return tt({sortable:e,rootEl:u,name:"filter",targetEl:l,fromEl:r,toEl:r}),et("filter",e,{evt:t}),!0}),d)){o&&t.preventDefault();return}n.handle&&!ht(c,n.handle,r,!1)||this._prepareDragStart(t,s,l)}}},_prepareDragStart:function(t,e,r){var n=this,o=n.el,a=n.options,s=o.ownerDocument,l;if(r&&!f&&r.parentNode===o){var c=z(r);if(O=o,f=r,B=f.parentNode,Rt=f.nextSibling,$e=r,ye=a.group,w.dragged=f,Mt={target:f,clientX:(e||t).clientX,clientY:(e||t).clientY},Ji=Mt.clientX-c.left,Ki=Mt.clientY-c.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,f.style["will-change"]="all",l=function(){if(et("delayEnded",n,{evt:t}),w.eventCanceled){n._onDrop();return}n._disableDelayedDragEvents(),!Zi&&n.nativeDraggable&&(f.draggable=!0),n._triggerDragStart(t,e),tt({sortable:n,name:"choose",originalEvent:t}),at(f,a.chosenClass,!0)},a.ignore.split(",").forEach(function(d){xr(f,d.trim(),yi)}),_(s,"dragover",kt),_(s,"mousemove",kt),_(s,"touchmove",kt),a.supportPointer?(_(s,"pointerup",n._onDrop),!this.nativeDraggable&&_(s,"pointercancel",n._onDrop)):(_(s,"mouseup",n._onDrop),_(s,"touchend",n._onDrop),_(s,"touchcancel",n._onDrop)),Zi&&this.nativeDraggable&&(this.options.touchStartThreshold=4,f.draggable=!0),et("delayStart",this,{evt:t}),a.delay&&(!a.delayOnTouchOnly||e)&&(!this.nativeDraggable||!(pe||Et))){if(w.eventCanceled){this._onDrop();return}a.supportPointer?(_(s,"pointerup",n._disableDelayedDrag),_(s,"pointercancel",n._disableDelayedDrag)):(_(s,"mouseup",n._disableDelayedDrag),_(s,"touchend",n._disableDelayedDrag),_(s,"touchcancel",n._disableDelayedDrag)),_(s,"mousemove",n._delayedDragTouchMoveHandler),_(s,"touchmove",n._delayedDragTouchMoveHandler),a.supportPointer&&_(s,"pointermove",n._delayedDragTouchMoveHandler),n._dragStartTimer=setTimeout(l,a.delay)}else l()}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){f&&yi(f),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;E(t,"mouseup",this._disableDelayedDrag),E(t,"touchend",this._disableDelayedDrag),E(t,"touchcancel",this._disableDelayedDrag),E(t,"pointerup",this._disableDelayedDrag),E(t,"pointercancel",this._disableDelayedDrag),E(t,"mousemove",this._delayedDragTouchMoveHandler),E(t,"touchmove",this._delayedDragTouchMoveHandler),E(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||t.pointerType=="touch"&&t,!this.nativeDraggable||e?this.options.supportPointer?_(document,"pointermove",this._onTouchMove):e?_(document,"touchmove",this._onTouchMove):_(document,"mousemove",this._onTouchMove):(_(f,"dragend",this),_(O,"dragstart",this._onDragStart));try{document.selection?Te(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(t,e){if(Ut=!1,O&&f){et("dragStarted",this,{evt:e}),this.nativeDraggable&&_(document,"dragover",ia);var r=this.options;!t&&at(f,r.dragClass,!1),at(f,r.ghostClass,!0),w.active=this,t&&this._appendGhost(),tt({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(dt){this._lastX=dt.clientX,this._lastY=dt.clientY,Dr();for(var t=document.elementFromPoint(dt.clientX,dt.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(dt.clientX,dt.clientY),t!==e);)e=t;if(f.parentNode[rt]._isOutsideThisEl(t),e)do{if(e[rt]){var r=void 0;if(r=e[rt]._onDragOver({clientX:dt.clientX,clientY:dt.clientY,target:t,rootEl:e}),r&&!this.options.dragoverBubble)break}t=e}while(e=Sr(e));Vr()}},_onTouchMove:function(t){if(Mt){var e=this.options,r=e.fallbackTolerance,n=e.fallbackOffset,o=t.touches?t.touches[0]:t,a=S&&Yt(S,!0),s=S&&a&&a.a,l=S&&a&&a.d,c=ve&&Q&&Gi(Q),d=(o.clientX-Mt.clientX+n.x)/(s||1)+(c?c[0]-gi[0]:0)/(s||1),u=(o.clientY-Mt.clientY+n.y)/(l||1)+(c?c[1]-gi[1]:0)/(l||1);if(!w.active&&!Ut){if(r&&Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))<r)return;this._onDragStart(t,!0)}if(S){a?(a.e+=d-(pi||0),a.f+=u-(fi||0)):a={a:1,b:0,c:0,d:1,e:d,f:u};var g="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");b(S,"webkitTransform",g),b(S,"mozTransform",g),b(S,"msTransform",g),b(S,"transform",g),pi=d,fi=u,dt=o}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!S){var t=this.options.fallbackOnBody?document.body:O,e=z(f,!0,ve,!0,t),r=this.options;if(ve){for(Q=t;b(Q,"position")==="static"&&b(Q,"transform")==="none"&&Q!==document;)Q=Q.parentNode;Q!==document.body&&Q!==document.documentElement?(Q===document&&(Q=gt()),e.top+=Q.scrollTop,e.left+=Q.scrollLeft):Q=gt(),gi=Gi(Q)}S=f.cloneNode(!0),at(S,r.ghostClass,!1),at(S,r.fallbackClass,!0),at(S,r.dragClass,!0),b(S,"transition",""),b(S,"transform",""),b(S,"box-sizing","border-box"),b(S,"margin",0),b(S,"top",e.top),b(S,"left",e.left),b(S,"width",e.width),b(S,"height",e.height),b(S,"opacity","0.8"),b(S,"position",ve?"absolute":"fixed"),b(S,"zIndex","100000"),b(S,"pointerEvents","none"),w.ghost=S,t.appendChild(S),b(S,"transform-origin",Ji/parseInt(S.style.width)*100+"% "+Ki/parseInt(S.style.height)*100+"%")}},_onDragStart:function(t,e){var r=this,n=t.dataTransfer,o=r.options;if(et("dragStart",this,{evt:t}),w.eventCanceled){this._onDrop();return}et("setupClone",this),w.eventCanceled||(P=Tr(f),P.removeAttribute("id"),P.draggable=!1,P.style["will-change"]="",this._hideClone(),at(P,this.options.chosenClass,!1),w.clone=P),r.cloneId=Te(function(){et("clone",r),!w.eventCanceled&&(r.options.removeCloneOnHide||O.insertBefore(P,f),r._hideClone(),tt({sortable:r,name:"clone"}))}),!e&&at(f,o.dragClass,!0),e?(Ve=!0,r._loopId=setInterval(r._emulateDragOver,50)):(E(document,"mouseup",r._onDrop),E(document,"touchend",r._onDrop),E(document,"touchcancel",r._onDrop),n&&(n.effectAllowed="move",o.setData&&o.setData.call(r,n,f)),_(document,"drop",r),b(f,"transform","translateZ(0)")),Ut=!0,r._dragStartId=Te(r._dragStarted.bind(r,e,t)),_(document,"selectstart",r),te=!0,window.getSelection().removeAllRanges(),re&&b(document.body,"user-select","none")},_onDragOver:function(t){var e=this.el,r=t.target,n,o,a,s=this.options,l=s.group,c=w.active,d=ye===l,u=s.sort,g=X||c,y,m=this,h=!1;if(Ei)return;function T(Kt,gn){et(Kt,m,yt({evt:t,isOwner:d,axis:y?"vertical":"horizontal",revert:a,dragRect:n,targetRect:o,canSort:u,fromSortable:g,target:r,completed:L,onMove:function(Hi,yn){return be(O,e,f,n,Hi,z(Hi),t,yn)},changed:M},gn))}function V(){T("dragOverAnimationCapture"),m.captureAnimationState(),m!==g&&g.captureAnimationState()}function L(Kt){return T("dragOverCompleted",{insertion:Kt}),Kt&&(d?c._hideClone():c._showClone(m),m!==g&&(at(f,X?X.options.ghostClass:c.options.ghostClass,!1),at(f,s.ghostClass,!0)),X!==m&&m!==w.active?X=m:m===w.active&&X&&(X=null),g===m&&(m._ignoreWhileAnimating=r),m.animateAll(function(){T("dragOverAnimationComplete"),m._ignoreWhileAnimating=null}),m!==g&&(g.animateAll(),g._ignoreWhileAnimating=null)),(r===f&&!f.animated||r===e&&!r.animated)&&(Nt=null),!s.dragoverBubble&&!t.rootEl&&r!==document&&(f.parentNode[rt]._isOutsideThisEl(t.target),!Kt&&kt(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),h=!0}function M(){st=ct(f),Ct=ct(f,s.draggable),tt({sortable:m,name:"change",toEl:e,newIndex:st,newDraggableIndex:Ct,originalEvent:t})}if(t.preventDefault!==void 0&&t.cancelable&&t.preventDefault(),r=ht(r,s.draggable,e,!0),T("dragOver"),w.eventCanceled)return h;if(f.contains(t.target)||r.animated&&r.animatingX&&r.animatingY||m._ignoreWhileAnimating===r)return L(!1);if(Ve=!1,c&&!s.disabled&&(d?u||(a=B!==O):X===this||(this.lastPutMode=ye.checkPull(this,c,f,t))&&l.checkPut(this,c,f,t))){if(y=this._getDirection(t,r)==="vertical",n=z(f),T("dragOverValid"),w.eventCanceled)return h;if(a)return B=O,V(),this._hideClone(),T("revert"),w.eventCanceled||(Rt?O.insertBefore(f,Rt):O.appendChild(f)),L(!0);var k=ki(e,s.draggable);if(!k||aa(t,y,this)&&!k.animated){if(k===f)return L(!1);if(k&&e===t.target&&(r=k),r&&(o=z(r)),be(O,e,f,n,r,o,t,!!r)!==!1)return V(),k&&k.nextSibling?e.insertBefore(f,k.nextSibling):e.appendChild(f),B=e,M(),L(!0)}else if(k&&oa(t,y,this)){var j=Zt(e,0,s,!0);if(j===f)return L(!1);if(r=j,o=z(r),be(O,e,f,n,r,o,t,!1)!==!1)return V(),e.insertBefore(f,j),B=e,M(),L(!0)}else if(r.parentNode===e){o=z(r);var C=0,U,ot=f.parentNode!==e,F=!ta(f.animated&&f.toRect||n,r.animated&&r.toRect||o,y),Wt=y?"top":"left",Tt=Wi(r,"top","top")||Wi(f,"top","top"),Gt=Tt?Tt.scrollTop:void 0;Nt!==r&&(U=o[Wt],se=!1,me=!F&&s.invertSwap||ot),C=sa(t,r,o,y,F?1:s.swapThreshold,s.invertedSwapThreshold==null?s.swapThreshold:s.invertedSwapThreshold,me,Nt===r);var mt;if(C!==0){var Vt=ct(f);do Vt-=C,mt=B.children[Vt];while(mt&&(b(mt,"display")==="none"||mt===S))}if(C===0||mt===r)return L(!1);Nt=r,ae=C;var Jt=r.nextElementSibling,_t=!1;_t=C===1;var ge=be(O,e,f,n,r,o,t,_t);if(ge!==!1)return(ge===1||ge===-1)&&(_t=ge===1),Ei=!0,setTimeout(na,30),V(),_t&&!Jt?e.appendChild(f):r.parentNode.insertBefore(f,_t?Jt:r),Tt&&Er(Tt,0,Gt-Tt.scrollTop),B=f.parentNode,U!==void 0&&!me&&(Ee=Math.abs(U-z(r)[Wt])),M(),L(!0)}if(e.contains(f))return L(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){E(document,"mousemove",this._onTouchMove),E(document,"touchmove",this._onTouchMove),E(document,"pointermove",this._onTouchMove),E(document,"dragover",kt),E(document,"mousemove",kt),E(document,"touchmove",kt)},_offUpEvents:function(){var t=this.el.ownerDocument;E(t,"mouseup",this._onDrop),E(t,"touchend",this._onDrop),E(t,"pointerup",this._onDrop),E(t,"pointercancel",this._onDrop),E(t,"touchcancel",this._onDrop),E(document,"selectstart",this)},_onDrop:function(t){var e=this.el,r=this.options;if(st=ct(f),Ct=ct(f,r.draggable),et("drop",this,{evt:t}),B=f&&f.parentNode,st=ct(f),Ct=ct(f,r.draggable),w.eventCanceled){this._nulling();return}Ut=!1,me=!1,se=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Ti(this.cloneId),Ti(this._dragStartId),this.nativeDraggable&&(E(document,"drop",this),E(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),re&&b(document.body,"user-select",""),b(f,"transform",""),t&&(te&&(t.cancelable&&t.preventDefault(),!r.dropBubble&&t.stopPropagation()),S&&S.parentNode&&S.parentNode.removeChild(S),(O===B||X&&X.lastPutMode!=="clone")&&P&&P.parentNode&&P.parentNode.removeChild(P),f&&(this.nativeDraggable&&E(f,"dragend",this),yi(f),f.style["will-change"]="",te&&!Ut&&at(f,X?X.options.ghostClass:this.options.ghostClass,!1),at(f,this.options.chosenClass,!1),tt({sortable:this,name:"unchoose",toEl:B,newIndex:null,newDraggableIndex:null,originalEvent:t}),O!==B?(st>=0&&(tt({rootEl:B,name:"add",toEl:B,fromEl:O,originalEvent:t}),tt({sortable:this,name:"remove",toEl:B,originalEvent:t}),tt({rootEl:B,name:"sort",toEl:B,fromEl:O,originalEvent:t}),tt({sortable:this,name:"sort",toEl:B,originalEvent:t})),X&&X.save()):st!==zt&&st>=0&&(tt({sortable:this,name:"update",toEl:B,originalEvent:t}),tt({sortable:this,name:"sort",toEl:B,originalEvent:t})),w.active&&((st==null||st===-1)&&(st=zt,Ct=oe),tt({sortable:this,name:"end",toEl:B,originalEvent:t}),this.save()))),this._nulling()},_nulling:function(){et("nulling",this),O=f=B=S=Rt=P=$e=At=Mt=dt=te=st=Ct=zt=oe=Nt=ae=X=ye=w.dragged=w.ghost=w.clone=w.active=null,ke.forEach(function(t){t.checked=!0}),ke.length=pi=fi=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":f&&(this._onDragOver(t),ra(t));break;case"selectstart":t.preventDefault();break}},toArray:function(){for(var t=[],e,r=this.el.children,n=0,o=r.length,a=this.options;n<o;n++)e=r[n],ht(e,a.draggable,this.el,!1)&&t.push(e.getAttribute(a.dataIdAttr)||ca(e));return t},sort:function(t,e){var r={},n=this.el;this.toArray().forEach(function(o,a){var s=n.children[a];ht(s,this.options.draggable,n,!1)&&(r[o]=s)},this),e&&this.captureAnimationState(),t.forEach(function(o){r[o]&&(n.removeChild(r[o]),n.appendChild(r[o]))}),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return ht(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var r=this.options;if(e===void 0)return r[t];var n=fe.modifyOption(this,t,e);typeof n<"u"?r[t]=n:r[t]=e,t==="group"&&Lr(r)},destroy:function(){et("destroy",this);var t=this.el;t[rt]=null,E(t,"mousedown",this._onTapStart),E(t,"touchstart",this._onTapStart),E(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(E(t,"dragover",this),E(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(e){e.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Me.splice(Me.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!At){if(et("hideClone",this),w.eventCanceled)return;b(P,"display","none"),this.options.removeCloneOnHide&&P.parentNode&&P.parentNode.removeChild(P),At=!0}},_showClone:function(t){if(t.lastPutMode!=="clone"){this._hideClone();return}if(At){if(et("showClone",this),w.eventCanceled)return;f.parentNode==O&&!this.options.group.revertClone?O.insertBefore(P,f):Rt?O.insertBefore(P,Rt):O.appendChild(P),this.options.group.revertClone&&this.animate(f,P),b(P,"display",""),At=!1}}};function ra(i){i.dataTransfer&&(i.dataTransfer.dropEffect="move"),i.cancelable&&i.preventDefault()}function be(i,t,e,r,n,o,a,s){var l,c=i[rt],d=c.options.onMove,u;return window.CustomEvent&&!Et&&!pe?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=document.createEvent("Event"),l.initEvent("move",!0,!0)),l.to=t,l.from=i,l.dragged=e,l.draggedRect=r,l.related=n||t,l.relatedRect=o||z(t),l.willInsertAfter=s,l.originalEvent=a,i.dispatchEvent(l),d&&(u=d.call(c,l,a)),u}function yi(i){i.draggable=!1}function na(){Ei=!1}function oa(i,t,e){var r=z(Zt(e.el,0,e.options,!0)),n=_r(e.el,e.options,S),o=10;return t?i.clientX<n.left-o||i.clientY<r.top&&i.clientX<r.right:i.clientY<n.top-o||i.clientY<r.bottom&&i.clientX<r.left}function aa(i,t,e){var r=z(ki(e.el,e.options.draggable)),n=_r(e.el,e.options,S),o=10;return t?i.clientX>n.right+o||i.clientY>r.bottom&&i.clientX>r.left:i.clientY>n.bottom+o||i.clientX>r.right&&i.clientY>r.top}function sa(i,t,e,r,n,o,a,s){var l=r?i.clientY:i.clientX,c=r?e.height:e.width,d=r?e.top:e.left,u=r?e.bottom:e.right,g=!1;if(!a){if(s&&Ee<c*n){if(!se&&(ae===1?l>d+c*o/2:l<u-c*o/2)&&(se=!0),se)g=!0;else if(ae===1?l<d+Ee:l>u-Ee)return-ae}else if(l>d+c*(1-n)/2&&l<u-c*(1-n)/2)return la(t)}return g=g||a,g&&(l<d+c*o/2||l>u-c*o/2)?l>d+c/2?1:-1:0}function la(i){return ct(f)<ct(i)?1:-1}function ca(i){for(var t=i.tagName+i.className+i.src+i.href+i.textContent,e=t.length,r=0;e--;)r+=t.charCodeAt(e);return r.toString(36)}function ua(i){ke.length=0;for(var t=i.getElementsByTagName("input"),e=t.length;e--;){var r=t[e];r.checked&&ke.push(r)}}function Te(i){return setTimeout(i,0)}function Ti(i){return clearTimeout(i)}oi&&_(document,"touchmove",function(i){(w.active||Ut)&&i.cancelable&&i.preventDefault()});w.utils={on:_,off:E,css:b,find:xr,is:function(t,e){return!!ht(t,e,t,!1)},extend:jo,throttle:$r,closest:ht,toggleClass:at,clone:Tr,index:ct,nextTick:Te,cancelNextTick:Ti,detectDirection:Ar,getChild:Zt,expando:rt};w.get=function(i){return i[rt]};w.mount=function(){for(var i=arguments.length,t=new Array(i),e=0;e<i;e++)t[e]=arguments[e];t[0].constructor===Array&&(t=t[0]),t.forEach(function(r){if(!r.prototype||!r.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));r.utils&&(w.utils=yt(yt({},w.utils),r.utils)),fe.mount(r)})};w.create=function(i,t){return new w(i,t)};w.version=zo;var q=[],ee,_i,Ci=!1,mi,vi,Oe,ie;function da(){function i(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var t in this)t.charAt(0)==="_"&&typeof this[t]=="function"&&(this[t]=this[t].bind(this))}return i.prototype={dragStarted:function(e){var r=e.originalEvent;this.sortable.nativeDraggable?_(document,"dragover",this._handleAutoScroll):this.options.supportPointer?_(document,"pointermove",this._handleFallbackAutoScroll):r.touches?_(document,"touchmove",this._handleFallbackAutoScroll):_(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(e){var r=e.originalEvent;!this.options.dragOverBubble&&!r.rootEl&&this._handleAutoScroll(r)},drop:function(){this.sortable.nativeDraggable?E(document,"dragover",this._handleAutoScroll):(E(document,"pointermove",this._handleFallbackAutoScroll),E(document,"touchmove",this._handleFallbackAutoScroll),E(document,"mousemove",this._handleFallbackAutoScroll)),tr(),_e(),Zo()},nulling:function(){Oe=_i=ee=Ci=ie=mi=vi=null,q.length=0},_handleFallbackAutoScroll:function(e){this._handleAutoScroll(e,!0)},_handleAutoScroll:function(e,r){var n=this,o=(e.touches?e.touches[0]:e).clientX,a=(e.touches?e.touches[0]:e).clientY,s=document.elementFromPoint(o,a);if(Oe=e,r||this.options.forceAutoScrollFallback||pe||Et||re){bi(e,this.options,s,r);var l=Dt(s,!0);Ci&&(!ie||o!==mi||a!==vi)&&(ie&&tr(),ie=setInterval(function(){var c=Dt(document.elementFromPoint(o,a),!0);c!==l&&(l=c,_e()),bi(e,n.options,c,r)},10),mi=o,vi=a)}else{if(!this.options.bubbleScroll||Dt(s,!0)===gt()){_e();return}bi(e,this.options,Dt(s,!1),!1)}}},$t(i,{pluginName:"scroll",initializeByDefault:!0})}function _e(){q.forEach(function(i){clearInterval(i.pid)}),q=[]}function tr(){clearInterval(ie)}var bi=$r(function(i,t,e,r){if(t.scroll){var n=(i.touches?i.touches[0]:i).clientX,o=(i.touches?i.touches[0]:i).clientY,a=t.scrollSensitivity,s=t.scrollSpeed,l=gt(),c=!1,d;_i!==e&&(_i=e,_e(),ee=t.scroll,d=t.scrollFn,ee===!0&&(ee=Dt(e,!0)));var u=0,g=ee;do{var y=g,m=z(y),h=m.top,T=m.bottom,V=m.left,L=m.right,M=m.width,k=m.height,j=void 0,C=void 0,U=y.scrollWidth,ot=y.scrollHeight,F=b(y),Wt=y.scrollLeft,Tt=y.scrollTop;y===l?(j=M<U&&(F.overflowX==="auto"||F.overflowX==="scroll"||F.overflowX==="visible"),C=k<ot&&(F.overflowY==="auto"||F.overflowY==="scroll"||F.overflowY==="visible")):(j=M<U&&(F.overflowX==="auto"||F.overflowX==="scroll"),C=k<ot&&(F.overflowY==="auto"||F.overflowY==="scroll"));var Gt=j&&(Math.abs(L-n)<=a&&Wt+M<U)-(Math.abs(V-n)<=a&&!!Wt),mt=C&&(Math.abs(T-o)<=a&&Tt+k<ot)-(Math.abs(h-o)<=a&&!!Tt);if(!q[u])for(var Vt=0;Vt<=u;Vt++)q[Vt]||(q[Vt]={});(q[u].vx!=Gt||q[u].vy!=mt||q[u].el!==y)&&(q[u].el=y,q[u].vx=Gt,q[u].vy=mt,clearInterval(q[u].pid),(Gt!=0||mt!=0)&&(c=!0,q[u].pid=setInterval((function(){r&&this.layer===0&&w.active._onTouchMove(Oe);var Jt=q[this.layer].vy?q[this.layer].vy*s:0,_t=q[this.layer].vx?q[this.layer].vx*s:0;typeof d=="function"&&d.call(w.dragged.parentNode[rt],_t,Jt,i,Oe,q[this.layer].el)!=="continue"||Er(q[this.layer].el,_t,Jt)}).bind({layer:u}),24))),u++}while(t.bubbleScroll&&g!==l&&(g=Dt(g,!1)));Ci=c}},30),Mr=function(t){var e=t.originalEvent,r=t.putSortable,n=t.dragEl,o=t.activeSortable,a=t.dispatchSortableEvent,s=t.hideGhostForTarget,l=t.unhideGhostForTarget;if(e){var c=r||o;s();var d=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,u=document.elementFromPoint(d.clientX,d.clientY);l(),c&&!c.el.contains(u)&&(a("spill"),this.onSpill({dragEl:n,putSortable:r}))}};function Oi(){}Oi.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e},onSpill:function(t){var e=t.dragEl,r=t.putSortable;this.sortable.captureAnimationState(),r&&r.captureAnimationState();var n=Zt(this.sortable.el,this.startIndex,this.options);n?this.sortable.el.insertBefore(e,n):this.sortable.el.appendChild(e),this.sortable.animateAll(),r&&r.animateAll()},drop:Mr};$t(Oi,{pluginName:"revertOnSpill"});function Ri(){}Ri.prototype={onSpill:function(t){var e=t.dragEl,r=t.putSortable,n=r||this.sortable;n.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),n.animateAll()},drop:Mr};$t(Ri,{pluginName:"removeOnSpill"});w.mount(new da);w.mount(Ri,Oi);const ha=i=>{const t=i.item;let e=Array.prototype.slice.call(t.parentNode.childNodes);return e=e.filter(r=>r.nodeType!=Node.ELEMENT_NODE||!r.classList.contains("sortable-fallback")),e},pa=(i,t,e,r,n,o)=>{const s=i.item.parentNode;for(const h of e)s.appendChild(h);if(i.oldIndex==i.newIndex)return;const l=r.getArray(),c=i.item.querySelector("eox-layercontrol-layer").layer.get(n),d=l.find(h=>h.get(n)===c),u=o.dataset.layer,g=l.find(h=>h.get(n)==u);let y,m;for(y=0;y<l.length;y++)if(l[y]==d){r.removeAt(y);break}for(m=0;m<l.length;m++)if(l[m]===g){y>m?r.insertAt(m,d):r.insertAt(m+1,d);break}t.requestUpdate()};function fa(i,t,e,r){let n=[],o=null;i._sortable=w.create(i,{handle:".drag-handle",filter:".drag-handle.disabled",swapThreshold:.5,animation:150,easing:"cubic-bezier(1, 0, 0, 1)",onStart:a=>{console.log(a),n=ha(a)},onMove:a=>{o=a.related},onEnd:a=>pa(a,r,n,t,e,o)})}function ga(i,t,e,r){const n=i.getArray();let o=!1;n.forEach(a=>{const s=a.ol_uid;a.get(t)||(a.set(t,s),o=!0),a.get(e)||(a.set(e,`layer ${s}`),o=!0),o&&r.requestUpdate()})}function Pi(i,t,e){let r=[];const n=(o,a,s)=>{r=[...r,...o.filter(c=>c.get(a)===s)];const l=o.filter(c=>c.getLayers);return l.length>0&&l.forEach(c=>n(c.getLayers().getArray(),a,s)),r};return n(i,t,e),r}function ya(i,t,e){if(!i||!t)return!1;if(!kr(i,e))return!0;const r=i.get("minZoom"),n=i.get("maxZoom"),o=t.getView().getZoom();return o>r&&o<n}function kr(i,t){const e=i.get("minZoom"),r=i.get("maxZoom");return!!(t&&(e!==-1/0||r!==1/0))}function er(i,t){var n,o,a;return!i||!t?void 0:i.getLayers?"group":((a=(n=t.getInteractions().getArray().filter(s=>s.freehand_!==void 0).map(s=>s.source_))==null?void 0:n.ol_uid)==null?void 0:a.includes(i.getSource?(o=i.getSource())==null?void 0:o.ol_uid:void 0))?"draw":i.declutter_!==void 0||i.get("type")==="Vector"?"vector":"raster"}const ma=(i,t,e)=>{let r=t;return e.layer.getSource().getTileUrlFunction()&&(r||(r=e.layer.getSource().getTileUrlFunction()),e.layer.getSource().setTileUrlFunction((...n)=>No(r(...n),i)),e.layer.getSource().setKey(new Date)),r};function va(i,t,e){const r="updateStyleVariables"in t,n="setStyle"in t,o=r?t.style_:e.style;let a=o==null?void 0:o.variables;if(a){const s=Ii(i);if(o.variables={...a,...s},r)t.updateStyleVariables(s);else if(n){const l=ba(o);t.setStyle(l)}}}const Ii=i=>{const t={};for(const e in i)if(typeof i[e]=="object"&&i[e]!==null){const r=Ii(i[e]);for(const n in r)t[n]=r==null?void 0:r[n]}else t[e]=i==null?void 0:i[e];return t};function ba(i){let t=i;if("variables"in i){let e=JSON.stringify(i);const{variables:r}=i;for(const n in r)typeof r[n]=="number"?e=e.replaceAll(`["var","${n}"]`,r[n]):e=e.replaceAll(`["var","${n}"]`,`"${r[n]}"`);t=JSON.parse(e)}return t}const wa=(i,t)=>{if(!i)return;const e=Ii(t);let r,n;return Array.isArray(i)?n=structuredClone(i):n=[structuredClone(i)],r=n.filter(o=>{if(!("boundTo"in o))return!0;const a=o.boundTo.key,s=o.boundTo.value;return!(a in e)||e[a]==s}),r.length||(r=n),r.map(o=>{var a;return delete o.boundTo,!("domainProperties"in o)||"domain"in o?o:(a=Object.keys(o))==null?void 0:a.reduce((s,l)=>(l==="domainProperties"?s.domain=o[l].map(c=>e[c]):s[l]=o[l],s),{})})};function Or(i,t){var r;let e={};for(const n in i){const o=i[n].type;if(o&&o!=="object")e[n]=o==="number"?Number(t[n]):t[n];else if(typeof i[n]=="object"&&((r=i[n])!=null&&r.properties)){const a=Or(i[n].properties,t);Object.keys(a).length>0&&(e[n]=a)}}return e}function Sa(i,t){var o,a,s,l,c;if(!t)return null;let e={},r="updateStyleVariables"in i?(o=i.style_)==null?void 0:o.variables:(a=t.style)==null?void 0:a.variables;if((t.type==="style"||t.style)&&r)e=r;else if((l=(s=i.getSource())==null?void 0:s.getTileUrlFunction)!=null&&l.call(s)){const d=new URL(i.getSource().getTileUrlFunction()([0,0,0]));e=Object.fromEntries(d.searchParams.entries())}else return null;const n=Or(((c=t.schema)==null?void 0:c.properties)||t.schema,e);return Object.keys(n).length?n:null}const Rr=(i,t)=>i==null?void 0:i.filter(e=>["remove","sort"].filter(r=>t!=null&&t.get("layerControlDisable")?r!=="sort":!0).includes(e)),Pr=(i,t)=>i==null?void 0:i.filter(e=>{let r=!0;return["remove","sort"].includes(e)&&(r=!1),e==="info"&&(r=t.get("description")),e==="config"&&(r=t.get("layerConfig")),e==="datetime"&&(r=t.get("layerDatetime")),e==="legend"&&(r=t.get("layerLegend")),r}),xa=(i,t,e)=>p`
  <button
    slot="${i}-icon"
    class="no-margin transparent square primary-text small"
  >
    ${e?i:p`<i class="small primary-text">${t}</i>`}
  </button>
`,Ir=(i,t)=>p`
  <button
    class="remove-icon no-margin transparent square small action"
    @click=${()=>{const{layer:e}=i;e==null||e.set("layerControlOptional",!0),e==null||e.setVisible(!1),i.dispatchEvent(new CustomEvent("changed",{detail:e,bubbles:!0}))}}
  >
    ${i.unstyled?"x":p`<i class="small red-text">${t}</i>`}
  </button>
`,Hr=(i,t,e)=>p`
  <button
    class="sort-icon no-margin transparent square primary-text drag-handle small action ${i.layer.get("layerControlDisable")?"disabled":""}"
    style="cursor: ns-resize;"
  >
    ${e?"═":p`<i class="small primary-text">${t}</i>`}
  </button>
`;function le(){return{dots:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>menu-down</title>
      <path d="M7,10L12,15L17,10H7Z" />
    </svg>`,info:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>information-outline</title>
      <path
        d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
      />
    </svg>`,opacity:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>circle-opacity</title>
      <path
        d="M18 10V8H20V10H18M18 12V10H16V12H18M18 8V6H16V8H18M16 2.84V4H18C17.37 3.54 16.71 3.15 16 2.84M18 4V6H20C19.42 5.25 18.75 4.58 18 4M20 6V8H21.16C20.85 7.29 20.46 6.63 20 6M22 12C22 11.32 21.93 10.65 21.8 10H20V12H22M16 6V4H14V6H16M16 16H18V14H16V16M18 18H20L20 18V16H18V18M16 20H18L18 20V18H16V20M14 21.8C14.7 21.66 15.36 21.44 16 21.16V20H14V21.8M18 14H20V12H18V14M16 8H14V10H16V8M20 16H21.16C21.44 15.36 21.66 14.7 21.8 14H20V16M16 12H14V14H16V12M12 18V16H14V14H12V12H14V10H12V8H14V6H12V4H14V2.2C13.35 2.07 12.69 2 12 2C6.5 2 2 6.5 2 12S6.5 22 12 22V20H14V18H12M14 18H16V16H14V18Z"
      />
    </svg>`,config:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>tune</title>
      <path
        d="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z"
      />
    </svg>`,datetime:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>calendar-clock-outline</title>
      <path
        d="M6 1V3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H11.1C12.36 22.24 14.09 23 16 23C19.87 23 23 19.87 23 16C23 14.09 22.24 12.36 21 11.1V5C21 3.9 20.11 3 19 3H18V1H16V3H8V1M5 5H19V7H5M5 9H19V9.67C18.09 9.24 17.07 9 16 9C12.13 9 9 12.13 9 16C9 17.07 9.24 18.09 9.67 19H5M16 11.15C18.68 11.15 20.85 13.32 20.85 16C20.85 18.68 18.68 20.85 16 20.85C13.32 20.85 11.15 18.68 11.15 16C11.15 13.32 13.32 11.15 16 11.15M15 13V16.69L18.19 18.53L18.94 17.23L16.5 15.82V13Z"
      />
    </svg>`,legend:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>map-legend</title>
      <path
        d="M9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3L20.34,3.03L15,5.1L9,3M8,5.45V17.15L5,18.31V6.46L8,5.45M10,5.47L14,6.87V18.53L10,17.13V5.47M19,5.7V17.54L16,18.55V6.86L19,5.7M7.46,6.3L5.57,6.97V9.12L7.46,8.45V6.3M7.46,9.05L5.57,9.72V11.87L7.46,11.2V9.05M7.46,11.8L5.57,12.47V14.62L7.46,13.95V11.8M7.46,14.55L5.57,15.22V17.37L7.46,16.7V14.55Z"
      />
    </svg>`,remove:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>delete-outline</title>
      <path
        d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"
      />
    </svg>`,sort:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>drag-horizontal-variant</title>
      <path d="M21 11H3V9H21V11M21 13H3V15H21V13Z" />
    </svg>`}}const Br=i=>{var e;const t=["layerControlHide","layerControlOptional"];return(e=i==null?void 0:i.getArray())==null?void 0:e.filter(r=>t.every(n=>!r.get(n)))};function Nr(i,t){t.dispatchEvent(new CustomEvent("datetime:updated",{detail:i.detail,bubbles:!0}))}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ur=lr(class extends cr{constructor(i){if(super(i),i.type!==Ot.PROPERTY&&i.type!==Ot.ATTRIBUTE&&i.type!==Ot.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!xn(i))throw Error("`live` bindings can only contain a single expression")}render(i){return i}update(i,[t]){if(t===Qt||t===lt)return t;const e=i.element,r=i.name;if(i.type===Ot.PROPERTY){if(t===e[r])return Qt}else if(i.type===Ot.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(r))return Qt}else if(i.type===Ot.ATTRIBUTE&&e.getAttribute(r)===t+"")return Qt;return $n(i),t}});var Fr="Expected a function",ir=NaN,$a="[object Symbol]",Ea=/^\s+|\s+$/g,Ta=/^[-+]0x[0-9a-f]+$/i,_a=/^0b[01]+$/i,Ca=/^0o[0-7]+$/i,Aa=parseInt,La=typeof Pt=="object"&&Pt&&Pt.Object===Object&&Pt,Da=typeof self=="object"&&self&&self.Object===Object&&self,Va=La||Da||Function("return this")(),Ma=Object.prototype,ka=Ma.toString,Oa=Math.max,Ra=Math.min,wi=function(){return Va.Date.now()};function Pa(i,t,e){var r,n,o,a,s,l,c=0,d=!1,u=!1,g=!0;if(typeof i!="function")throw new TypeError(Fr);t=rr(t)||0,Re(e)&&(d=!!e.leading,u="maxWait"in e,o=u?Oa(rr(e.maxWait)||0,t):o,g="trailing"in e?!!e.trailing:g);function y(C){var U=r,ot=n;return r=n=void 0,c=C,a=i.apply(ot,U),a}function m(C){return c=C,s=setTimeout(V,t),d?y(C):a}function h(C){var U=C-l,ot=C-c,F=t-U;return u?Ra(F,o-ot):F}function T(C){var U=C-l,ot=C-c;return l===void 0||U>=t||U<0||u&&ot>=o}function V(){var C=wi();if(T(C))return L(C);s=setTimeout(V,h(C))}function L(C){return s=void 0,g&&r?y(C):(r=n=void 0,a)}function M(){s!==void 0&&clearTimeout(s),c=0,r=l=n=s=void 0}function k(){return s===void 0?a:L(wi())}function j(){var C=wi(),U=T(C);if(r=arguments,n=this,l=C,U){if(s===void 0)return m(l);if(u)return s=setTimeout(V,t),y(l)}return s===void 0&&(s=setTimeout(V,t)),a}return j.cancel=M,j.flush=k,j}function Ia(i,t,e){var r=!0,n=!0;if(typeof i!="function")throw new TypeError(Fr);return Re(e)&&(r="leading"in e?!!e.leading:r,n="trailing"in e?!!e.trailing:n),Pa(i,t,{leading:r,maxWait:t,trailing:n})}function Re(i){var t=typeof i;return!!i&&(t=="object"||t=="function")}function Ha(i){return!!i&&typeof i=="object"}function Ba(i){return typeof i=="symbol"||Ha(i)&&ka.call(i)==$a}function rr(i){if(typeof i=="number")return i;if(Ba(i))return ir;if(Re(i)){var t=typeof i.valueOf=="function"?i.valueOf():i;i=Re(t)?t+"":t}if(typeof i!="string")return i===0?i:+i;i=i.replace(Ea,"");var e=_a.test(i);return e||Ca.test(i)?Aa(i.slice(2),e?2:8):Ta.test(i)?ir:+i}var Na=Ia;const nr=ri(Na);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=i=>i??lt;var ut,Pe,Ie;class qr extends nt{constructor(){super();D(this,ut,[]);D(this,Pe,Ae`
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
  `);D(this,Ie,"");this.unstyled=!1,this.noShadow=!1,this.layer=null}get layerLegend(){return x(this,ut)?x(this,ut).length>1?x(this,ut):x(this,ut)[0]:null}set layerLegend(e){var r;Array.isArray(e)?vt(this,ut,e.map((n,o)=>{var a;return{id:(((a=this.layer)==null?void 0:a.get("id"))??"")+o,...n}})):vt(this,ut,[{id:(((r=this.layer)==null?void 0:r.get("id"))??"")+0,...e}])}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){this.layerLegend&&new ResizeObserver(()=>{var e;vt(this,ut,(e=x(this,ut))==null?void 0:e.map(r=>(this.offsetWidth!==r.width&&(r.width=this.offsetWidth),{...r}))),this.requestUpdate()}).observe(this.renderRoot.querySelector(".legend-container"))}render(){return customElements.get("color-legend")||console.error("Please import `color-legend-element` in order to use layerLegend"),p`
      <style>
        ${x(this,Pe)}
        ${!this.unstyled&&x(this,Ie)}
      </style>
      ${R(this.layerLegend,()=>p`
          <div class="legend-container">
            <!-- Render color-legend-->
            ${x(this,ut).map((e,r,n)=>p`
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
                ${r!==n.length-1?p`<div class="separator"></div>`:lt}
              `)}
          </div>
        `)}
    `}}ut=new WeakMap,Pe=new WeakMap,Ie=new WeakMap,I(qr,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerLegend:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-legend",qr);var bt,jt,ue,de,Ai,He,Be;class zr extends nt{constructor(){super();D(this,de);D(this,bt,{});D(this,jt,null);D(this,ue);D(this,He,Ae`
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
  `);D(this,Be,Ae`
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
  `);this.layer=null,this.unstyled=!1,this.noShadow=!1,this.layerConfig=null,this.throttleDataChange=nr(H(this,de,Ai),1e3)}updated(e){if(e.has("layerConfig")){const r=this.layerConfig.type==="style"||this.layerConfig.style?100:1e3;this.throttleDataChange=nr(H(this,de,Ai),r),this.requestUpdate()}}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){vt(this,jt,Sa(this.layer,this.layerConfig)),Object.keys(x(this,bt)).length!==0&&vt(this,jt,x(this,bt)),customElements.get("eox-jsonform")||console.error("Please import @eox/jsonform in order to use layerconfig");const e={disable_edit_json:!0,disable_collapse:!0,disable_properties:!0};return p`
      <style>
        ${x(this,He)}
        ${!this.unstyled&&x(this,Be)}
      </style>
      ${R(this.layerConfig,()=>p`
          ${R(this.layerConfig.legend,()=>p`
              <eox-layercontrol-layer-legend
                .noShadow=${!0}
                .unstyled=${this.unstyled}
                .layer=${this.layer}
                .layerLegend=${wa(this.layerConfig.legend,x(this,bt))}
              ></eox-layercontrol-layer-legend>
            `)}
          <!-- Render a JSON form for layer configuration -->
          <eox-jsonform
            .schema=${this.layerConfig.schema}
            .value=${x(this,jt)}
            .options=${e}
            .noShadow=${!0}
            @change=${this.throttleDataChange}
          ></eox-jsonform>
        `)}
    `}}bt=new WeakMap,jt=new WeakMap,ue=new WeakMap,de=new WeakSet,Ai=function(e){vt(this,bt,e.detail),this.layerConfig.type==="style"||this.layerConfig.style?"setStyle"in this.layer||"updateStyleVariables"in this.layer?va(x(this,bt),this.layer,this.layerConfig):console.error(`Layer type ${this.layer.get("type")??""} does not support styles configuration`):vt(this,ue,ma(x(this,bt),x(this,ue),this)),this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:e.detail,layer:this.layer}})),this.requestUpdate()},He=new WeakMap,Be=new WeakMap,I(zr,"properties",{layer:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},layerConfig:{attribute:!1}});customElements.define("eox-layercontrol-layerconfig",zr);var Ne,jr,Ue,Fe;class Yr extends nt{constructor(){super();D(this,Ne);D(this,Ue,"");D(this,Fe,"");this.unstyled=!1,this.noShadow=!1,this.layerDatetime=null,this.layer=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return customElements.get("eox-timecontrol")||console.error("Please import @eox/timecontrol in order to use layerDatetime"),p`
      <style>
        ${x(this,Ue)}
        ${!this.unstyled&&x(this,Fe)}
      </style>
      ${R(this.layerDatetime,()=>p`
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
            @stepchange=${H(this,Ne,jr)}
          ></eox-timecontrol>
        `)}
    `}}Ne=new WeakSet,jr=function(e){this.dispatchEvent(new CustomEvent("datetime:updated",{bubbles:!0,detail:{datetime:e.detail.currentStep,layer:this.layer}})),this.layerDatetime.currentStep=e.detail.currentStep,this.requestUpdate()},Ue=new WeakMap,Fe=new WeakMap,I(Yr,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerDatetime:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-datetime",Yr);var he,qe,ze;class Zr extends nt{constructor(){super();D(this,he,e=>(this.selectedTab===e||this.toolsAsList)&&"highlighted");D(this,qe,`
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
  `);D(this,ze,`
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
  `);this.actions=[],this.selectedTab=0,this.tabs=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const e=this.tabs,r=this.actions,n=r.length+e.length>1;return p`
      <style>
        ${x(this,qe)}
        ${!this.unstyled&&x(this,ze)}
      </style>
      <div class="${this.toolsAsList?"listed":"tabbed"}">
        <!-- Navigation for tabs and actions -->
        ${R(n,()=>p`
            <nav>
              ${R(!this.toolsAsList,()=>p`
                  <div>
                    <!-- Labels for tabs -->
                    ${Se(e,(o,a)=>p`
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
                    ${Se(r,o=>p`
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
          ${Se(e,(o,a)=>p`
              ${R(this.toolsAsList,()=>p`
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
              ${R(this.toolsAsList&&a<e.length-1,()=>p`<hr class="small" />`)}
            `)}
        </figure>
      </div>
    `}}he=new WeakMap,qe=new WeakMap,ze=new WeakMap,I(Zr,"properties",{actions:{attribute:!1},selectedTab:{state:!0},tabs:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-tools-items",Zr);var Ye,je;class Xr extends nt{constructor(){super();I(this,"_removeButton",e=>Ir(this,e));I(this,"_sortButton",e=>Hr(this,e,this.unstyled));I(this,"_button",(e,r)=>xa(e,r,this.unstyled));I(this,"_getDefaultTools",e=>{var r,n;return p`
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
            value=${Ur((r=this.layer)==null?void 0:r.getOpacity())}
            class="tiny max"
            @input=${o=>{this.layer.setOpacity(parseFloat(o.target.value)),this.requestUpdate()}}
          />
          <span class="small-text" style="width: 30px; text-align: right">${Math.round(((n=this.layer)==null?void 0:n.getOpacity())*100)}%</span>
        </div class="row">
      </div>
      <div slot="config-content">
        <!-- Layer configuration -->
        ${R(this.layer.get("layerConfig"),()=>p`
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
        ${R(this.layer.get("layerDatetime"),()=>p`
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
        ${R(this.layer.get("layerLegend"),()=>p`
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
    `});D(this,Ye,"");D(this,je,`
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
  `);this.layer=null,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,setTimeout(()=>{var e;this.embedded=((e=this.parentElement)==null?void 0:e.tagName)==="EOX-LAYERCONTROL-LAYER"})}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const e=Rr(this.tools,this.layer),r=Pr(this.tools,this.layer),n=e==null?void 0:e.length,o=r==null?void 0:r.length;return p`
      <style>
        ${x(this,Ye)}
        ${!this.unstyled&&x(this,je)}
      </style>
      ${R(n+o>0,()=>p`
          ${R(!(n===1&&o===0),()=>p`
              <details
                class="tools"
                open=${this.embedded===!1?!0:this.layer.get("layerControlToolsExpand")||lt}
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
    `}}Ye=new WeakMap,je=new WeakMap,I(Xr,"properties",{layer:{attribute:!1},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},embedded:{state:!0}});customElements.define("eox-layercontrol-layer-tools",Xr);const Ua=i=>{const t=()=>{const e=ya(i.layer,i.map,i.showLayerZoomState);let r=!1;!e&&i.currLayerVisibilityBasedOnZoom?(i.currLayerVisibilityBasedOnZoom=!1,r=!0):e&&!i.currLayerVisibilityBasedOnZoom&&(i.currLayerVisibilityBasedOnZoom=!0,r=!0),r&&(i.requestUpdate(),i.dispatchEvent(new CustomEvent("change:resolution",{bubbles:!0})))};kr(i.layer,i.showLayerZoomState)&&(t(),i.map.getView().on("change:resolution",()=>t()))},Fa=(i,t)=>{const e=t.layer;e.setVisible(i.target.checked),i.target.checked&&e.get("layerControlExclusive")&&t.closest(`${t.globallyExclusiveLayers?".layers":"eox-layercontrol-layer-list"} > ul`).querySelectorAll("eox-layercontrol-layer").forEach(n=>{var o;n.layer!==e&&((o=n.layer)!=null&&o.get("layerControlExclusive"))&&(n.layer.setVisible(!1),n.requestUpdate())}),t.dispatchEvent(new CustomEvent("changed",{bubbles:!0,detail:e})),t.requestUpdate()};var ft,Ft,Gr,Ze,Xe;class Wr extends nt{constructor(){super();D(this,ft);I(this,"currLayerVisibilityBasedOnZoom",!0);D(this,Ze,"");D(this,Xe,`
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
  `);this.layer=null,this.layerType=void 0,this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.globallyExclusiveLayers=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){Ua(this)}render(){var d,u;const e=this.layer.getVisible(),r=e?"visible":"",n=this.currLayerVisibilityBasedOnZoom?"":"zoom-state-invisible",o=H(this,ft,Ft).call(this,"layerControlDisable")?"disabled":"",a=H(this,ft,Ft).call(this,"layerControlExclusive")?"radio":"checkbox",s=((d=Rr(this.tools,this.layer))==null?void 0:d.length)>0,l=((u=Pr(this.tools,this.layer))==null?void 0:u.length)>0,c=document.querySelector("eox-layercontrol-layer-tools");return c&&Object.assign(c,{layer:this.layer,tools:this.tools,toolsAsList:this.toolsAsList}),p`
      <style>
        ${x(this,Ze)}
        ${!this.unstyled&&x(this,Xe)}
      </style>
      ${R(this.layer,()=>p`
          <!-- Render the layer -->
          <nav
            class="layer ${o} ${r} ${n} responsive tiny-space"
          >
            ${R(!this.unstyled,()=>{if(H(this,ft,Ft).call(this,"color"))return p`
                  <i class="small" style="color: ${H(this,ft,Ft).call(this,"color")}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>square-rounded</title>
                      <path
                        d="M8 3H16C18.76 3 21 5.24 21 8V16C21 18.76 18.76 21 16 21H8C5.24 21 3 18.76 3 16V8C3 5.24 5.24 3 8 3Z"
                      />
                    </svg>
                  </i>
                `;switch(this.layerType){case"group":return p` <i class="small"> </i> `;case"draw":return p`
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
                  `;case"vector":return p`
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
                  `;case"raster":return p`
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
                  `;default:return p` <i class="small grey-text"> </i> `}})}

            <!-- Layer title -->
            <div class="max truncate drag-handle ${o}">
              <span class="layertitle truncate"
                >${H(this,ft,Ft).call(this,this.titleProperty)}</span
              >
            </div>

            ${R(l,()=>p`
                <button
                  class="transparent square primary-text small action tools ${this.tools.length===1?this.tools[0]:"dots"}"
                  @click=${()=>{var y,m,h;const g=((m=(y=this.renderRoot.querySelector("eox-layercontrol-layer-tools"))==null?void 0:y.shadowRoot)==null?void 0:m.querySelector("details"))||((h=this.renderRoot.querySelector("eox-layercontrol-layer-tools"))==null?void 0:h.querySelector("details"));g.open=!g.open}}
                >
                  <i class="small">
                    ${le()[this.tools.length>1?"dots":this.tools[0]]}
                  </i>
                  <!--<div class="tooltip top" style="pointer-events: none">Tools</div>-->
                </button>
              `)}
            ${R(!l&&s,()=>this.tools[0]==="remove"?Ir(this,le()[this.tools[0]]):Hr(this,le()[this.tools[0]],!1))}

            <!-- Input element for layer visibility -->
            <label
              class="${o} ${a} icon square primary-text action visibility small"
            >
              <input
                type=${a}
                .checked=${Ur(e)}
                @click=${H(this,ft,Gr)}
                disabled=${o||lt}
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
      ${R(l&&!c,()=>p`
          <eox-layercontrol-layer-tools
            .noShadow=${!1}
            .layer=${this.layer}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
            .toolsAsList=${this.toolsAsList}
          ></eox-layercontrol-layer-tools>
        `)}
    `}}ft=new WeakSet,Ft=function(e){var r;return(r=this.layer)==null?void 0:r.get(e)},Gr=function(e){Fa(e,this)},Ze=new WeakMap,Xe=new WeakMap,I(Wr,"properties",{layer:{attribute:!1},layerType:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean}});customElements.define("eox-layercontrol-layer",Wr);var We,Ge;class Jr extends nt{constructor(){super();D(this,We,"");D(this,Ge,`
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
  `);this.group=null,this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.globallyExclusiveLayers=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var n,o;const e=!!((n=this.group)!=null&&n.get("layerControlExpand")),r=(o=Br(this.group.getLayers()))==null?void 0:o.length;return p`
      <style>
        ${x(this,We)}
        ${!this.unstyled&&x(this,Ge)}
      </style>
      ${R(this.group,()=>p`
          <!-- Render the details element with the layer control -->
          <details
            class="max-width"
            open=${e||lt}
            data-children-length=${r}
          >
            <summary class="square">
              ${R(r>0,()=>p`
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
    `}}We=new WeakMap,Ge=new WeakMap,I(Jr,"properties",{group:{attribute:!1},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean}});customElements.define("eox-layercontrol-layer-group",Jr);const qa=i=>{const{layers:t,idProperty:e,titleProperty:r,renderRoot:n}=i,o=Tn(()=>{i.requestUpdate(),i.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))},50),a=()=>o();if(t&&(t.hasListener("change:length")&&(t==null||t.un("change:length",a)),t.on("change:length",a),t)){const s=n.querySelector("ul");ga(t,e,r,i),fa(s,t,e,i)}};var Je,Ke;class Kr extends nt{constructor(){super();D(this,Je,"");D(this,Ke,`
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
  `);this.idProperty="id",this.layers=null,this.map=null,this.tools=void 0,this.titleProperty="title",this.showLayerZoomState=!1,this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.globallyExclusiveLayers=!1}firstUpdated(){qa(this)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const e=this.layers?Br(this.layers).reverse():[];return p`
      <style>
        ${x(this,Je)}
        ${!this.unstyled&&x(this,Ke)}
      </style>
      <ul class="list no-space">
        ${R(this.layers,()=>p`
            ${Sn(e,r=>r,r=>p`
                <li
                  data-layer="${r.get(this.idProperty)}"
                  data-type="${er(r,this.map)}"
                  class="square"
                >
                  ${r.getLayers?p`
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
                        `:p`
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
    `}}Je=new WeakMap,Ke=new WeakMap,I(Kr,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean}});customElements.define("eox-layercontrol-layer-list",Kr);const za=i=>{const t=i.querySelector("select[name=optional]"),e=t?t.value:null,r=Pi(i.layers.getArray(),"layerControlOptional",!0).find(n=>(n.get(i.idProperty)||n.ol_uid)===e);r==null||r.set("layerControlOptional",!1),r==null||r.setVisible(!0),i.dispatchEvent(new CustomEvent("changed",{bubbles:!0})),i.renderRoot.parentNode.querySelectorAll("eox-layercontrol-layer-list").forEach(n=>n.requestUpdate()),i.requestUpdate()};var Qe,tn;class Qr extends nt{constructor(){super();D(this,Qe);this.idProperty="id",this.layers=null,this.titleProperty="title",this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const e=Pi(this.layers.getArray(),"layerControlOptional",!0);return p`
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
            ${e.map(r=>{const n=r.get(this.idProperty)||r.ol_uid,o=r.get(this.titleProperty),a=`layer ${r.get(this.idProperty)}`;return p` <option value="${n}">${o||a}</option> `})}
          </select>

          <!-- Label for the dropdown -->
          <label for="optional">Optional layers</label>
        </div>

        <!-- Button to handle adding layers -->
        <button class="small" @click="${H(this,Qe,tn)}">Add</button>
      </nav>
    `}}Qe=new WeakSet,tn=function(){za(this)},I(Qr,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},titleProperty:{attribute:"title-property",type:String},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-optional-list",Qr);const Ya=(i,t)=>{t.jsonInput=i.target.value,t.requestUpdate()},or=i=>{const t=JSON.parse(`{"data":${vr(i.jsonInput)}}`);Array.isArray(t.data)?t.data.forEach(e=>{i.eoxMap.addOrUpdateLayer(e)}):i.eoxMap.addOrUpdateLayer(t.data),i.jsonInput=null,i.requestUpdate()},ja=(i,t)=>{t.urlInput=i.target.value,t.requestUpdate()};async function Za(i){const t=i.urlInput;if(i.wmsCapabilities=null,i.searchLoad=!0,i.requestUpdate(),!t)return!1;if(Vi(t)==="XYZ")return{Name:t};try{const e=await Io(t);i.wmsCapabilities=e}catch{}finally{i.searchLoad=!1,i.requestUpdate()}return!1}const Xa=(i,t)=>{const{Name:e}=i,r=Vi(t.urlInput)||"XYZ",n={type:"Tile",properties:{id:e,title:e},source:{type:r,url:t.urlInput,params:{LAYERS:e}}};t.jsonInput=JSON.stringify(n)},Wa=(i,t)=>{t.open=i||null,t.urlInput=null,t.jsonInput=null,t.wmsCapabilities=null,t.requestUpdate()};var W,rn,nn,Li,on,an,Ce,ti;class en extends nt{constructor(){super();D(this,W);I(this,"urlInput",null);I(this,"jsonInput",null);I(this,"open",null);I(this,"searchLoad",!1);I(this,"wmsCapabilities",null);D(this,ti,`
    .eox-add-layer-main .open {
      position: relative;
    }
    .eox-add-layer-main .close {
      display: none;
    }
    .field.small > :is(input, textarea, select) {
      font-size: 0.75rem;
    }
  `);this.eoxMap=null,this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const e={add:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>layers-plus</title>
        <path
          d="M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z"
        />
      </svg>`,plus:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>plus</title>
        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
      </svg>`,search:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>magnify</title>
        <path
          d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
        />
      </svg>`},r=this.open?"open":"close",n=this.open==="url",o=this.open==="json",a=!Ho(this.urlInput)||this.searchLoad?!0:lt;return p`
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
              @click=${()=>H(this,W,Ce).call(this,"url")}
              class="${n?"active":""}"
            >
              URL
            </a>
            <a
              @click=${()=>H(this,W,Ce).call(this,"json")}
              class="${o?"active":""}"
            >
              JSON
            </a>
          </div>

          <div class="max"></div>

          <!-- Button to toggle tabs -->
          <button
            class="add-icon transparent square primary-text small"
            @click=${()=>H(this,W,Ce).call(this,this.open?null:"url")}
          >
            ${this.unstyled?"Add Layer":p`<i class="small primary-text">${e.add}</i>`}
          </button>
        </nav>
        <div class="eox-add ${r}" style="padding: 15px 0">
          ${n?p`
                <nav>
                  <!-- Input field for URL -->
                  <div class="eox-add-layer-col field border small responsive">
                    <input
                      type="text"
                      class="add-url"
                      placeholder="Add URL (WMS/XYZ)"
                      .value="${this.urlInput}"
                      @input=${H(this,W,rn)}
                    />
                  </div>
                  <!-- Search button for URL -->
                  <button
                    class="search-icon"
                    disabled=${a}
                    @click=${H(this,W,nn)}
                  >
                    ${this.unstyled?"Search":p`<i class="small">${e.search}</i>`}
                  </button>
                </nav>

                <!-- Display layers for WMS capabilities -->
                ${this.wmsCapabilities?p`<ul class="search-lists">
                      ${this.wmsCapabilities.Capability.Layer.Layer.map(s=>{const l=s.Name;return p`
                            <li class="search-list">
                              ${l}
                              <!-- Button to add layer -->
                              <button
                                class="add-layer-icon icon"
                                @click=${()=>H(this,W,Li).call(this,s)}
                              >
                                ${this.unstyled?"+":""}
                              </button>
                            </li>
                          `})}
                    </ul>`:lt}
              `:p`
                <!-- Textarea for JSON input -->
                <div class="field textarea small border no-margin">
                  <textarea
                    class="add-layer-input small"
                    style="overflow-wrap: break-word; font-family: monospace;"
                    placeholder="Please input a valid eox-map layer JSON."
                    @input=${H(this,W,an)}
                    .value=${this.jsonInput}
                  ></textarea>
                </div>

                <!-- Button to add JSON layer -->
                <button
                  class="add-layer-icon json-add-layer small square small-margin"
                  style="position: absolute; bottom: 15px; right: 0;"
                  disabled=${Bo(this.jsonInput)?lt:!0}
                  @click=${H(this,W,on)}
                >
                  ${this.unstyled?"Add JSON":p`<i class="small">${e.plus}</i>`}
                </button>
              `}
        </div>
      </div>
    `}}W=new WeakSet,rn=function(e){ja(e,this)},nn=async function(){const e=await Za(this);e&&H(this,W,Li).call(this,e)},Li=function(e){Xa(e,this),or(this)},on=function(){or(this)},an=function(e){Ya(e,this)},Ce=function(e){Wa(e,this)},ti=new WeakMap,I(en,"properties",{eoxMap:{attribute:!1,state:!0},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-add-layers",en);const Ga=(i,t)=>{if(t.requestUpdate(),i.target.tagName==="EOX-LAYERCONTROL-LAYER-TOOLS"){const e=t.renderRoot.querySelector("eox-layercontrol-optional-list");e==null||e.requestUpdate()}},ar=i=>{const t=xi(i.for);return t&&t.map!==i.map&&(i.map=t.map),t};sr();var Lt,Xt,ln,cn,ei;class sn extends nt{constructor(){super();D(this,Xt);D(this,Lt);D(this,ei,`
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
  `);this.for="eox-map",this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=["info","opacity","datetime","config","remove","sort"],this.addExternalLayers=!1,this.unstyled=!1,this.styleOverride="",this.toolsAsList=!1,this.globallyExclusiveLayers=!1}firstUpdated(){this.eoxMap=ar(this)}updated(e){e.has("for")&&(this.eoxMap=ar(this))}get eoxMap(){return x(this,Lt)}set eoxMap(e){const r=x(this,Lt);vt(this,Lt,e),this.requestUpdate("eoxMap",r)}render(){var n,o,a;const e=(n=this.map)==null?void 0:n.getLayers().getArray(),r=e&&((o=Pi(e,"layerControlOptional",!0))==null?void 0:o.length)>0;return p`
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
      ${R(this.addExternalLayers&&((a=x(this,Lt))==null?void 0:a.addOrUpdateLayer),()=>p`
          <eox-layercontrol-add-layers
            .noShadow=${!0}
            .eoxMap=${x(this,Lt)}
            .unstyled=${this.unstyled}
          ></eox-layercontrol-add-layers>
        `)}

      <!-- Conditional rendering of layer list component -->
      ${R(this.map,()=>p`
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
            @changed=${H(this,Xt,ln)}
            @datetime:updated=${s=>Nr(s,this)}
            @layerConfig:change=${H(this,Xt,cn)}
          ></eox-layercontrol-layer-list>
        `)}

      <!-- Conditional rendering of optional list component -->
      ${R(r,()=>p`
          <eox-layercontrol-optional-list
            .noShadow=${!0}
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .titleProperty=${this.titleProperty}
            @changed=${()=>this.requestUpdate()}
          ></eox-layercontrol-optional-list>
        `)}
    `}}Lt=new WeakMap,Xt=new WeakSet,ln=function(e){Ga(e,this),this.dispatchEvent(new CustomEvent("layerchange",{detail:e.detail}))},cn=function(e){this.dispatchEvent(new CustomEvent("layerConfig:change",{detail:e.detail}))},ei=new WeakMap,I(sn,"properties",{for:{type:String},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},addExternalLayers:{attribute:!1},unstyled:{type:Boolean},styleOverride:{type:String},toolsAsList:{type:Boolean},globallyExclusiveLayers:{attribute:"globally-exclusive-layers",type:Boolean}});customElements.define("eox-layercontrol",sn);const Ja=`
:host {
  display: block;
}
`;sr();const Ka=`
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
`;class Qa extends nt{static get properties(){return{width:{type:Number},steps:{type:Array}}}constructor(){super(),this.width=0,this.steps=[],this.height=6,this.svgWidth=0,this._yearMarks=[],this._years=[],this._sliderTicks=[]}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.handleResize.bind(this))}disconnectedCallback(){window.removeEventListener("resize",this.handleResize.bind(this)),super.disconnectedCallback()}firstUpdated(){this.yearMarks=this.calculateYearMarks(),this.sliderTicks=this.calculateSliderTicks(),this.handleResize()}updated(t){t.has("steps")&&(this.yearMarks=this.calculateYearMarks(),this.sliderTicks=this.calculateSliderTicks(),this.handleResize())}handleResize(){this.svgWidth=this.shadowRoot.querySelector("svg").clientWidth,this.height=this.shadowRoot.querySelector("svg").clientHeight}groupDatesByYear(){const t=[];return this.steps.forEach(e=>{const n=It(e).year();let o=t.find(a=>a.year===n);o||(o={year:n,dates:[]},t.push(o)),o.dates.push(e)}),t}preprocessDates(){const t=[];this.steps.forEach(e=>{const n=It(e).year();let o=t.find(a=>a.year===n);o||(o={year:n,ratio:0,dates:[]},t.push(o)),o.dates.push({date:e,isYearMarker:o.dates.length===0})});for(let e of t)e.ratio=e.dates.length/this.steps.length;return t}get sliderTicks(){return this._sliderTicks}set sliderTicks(t){this._sliderTicks=t,this.requestUpdate()}calculateYearBars(){return this._years.flatMap((r,n)=>{const o=this.steps.indexOf(r.dates[0].date)/(this.steps.length-1)*this.width,a=this.steps.indexOf(r.dates[r.dates.length-1].date)/(this.steps.length-1)*this.width,s=Math.max(0,a-o-2),l=[];return l.push(pt`
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
                `),c})})}get density(){return this.steps.length/this.width}calculateSliderTicks(){if(this.density<=.5)return this.calculateIndividualTicks();if(this.density>.5&&this.density<10)return this.calculateYearBars();if(this.density>=10)return this.calculateDecadeBars()}calculateDecadeBars(){const r=this._years.reduce((o,a)=>{const s=Math.floor(a.year/10)*10;return o[s]||(o[s]=[]),o[s].push(...a.dates),o},{});return Object.keys(r).flatMap((o,a)=>{const s=this.steps.indexOf(r[o][0].date)/(this.steps.length-1)*this.width,l=this.steps.indexOf(r[o][r[o].length-1].date)/(this.steps.length-1)*this.width,c=Math.max(0,l-s-2),d=[];return d.push(pt`
            <rect
              key=${`decade-${a}`}
              x=${s+2/2}
              y="0"
              width=${c}
              height="6"
              fill="#555"
            ></rect>
        `),c>=30&&d.push(pt`
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
            `),d})}get lines(){const t=this.numLines>this.width/2?this.width/2:this.numLines,e=this.width/(t-1);return Array.from({length:this.numLines},(r,n)=>n*e)}get numLines(){return this.steps?this.steps.length:0}get yearMarks(){return this._yearMarks}set yearMarks(t){this._yearMarks=t,this.requestUpdate()}get years(){return this._years}set years(t){this._years=t,this.requestUpdate()}calculateYearMarks(){this._years=this.preprocessDates();const t=[];let e=null;return this.lines.forEach((r,n)=>{const a=It(this.steps[n]).year();(n===0||a!==e)&&t.push({label:a,position:r}),e=a}),t}isYearLine(t){return this._yearMarks.some(r=>Math.abs(r.position-t)<1)}render(){return p`
      <div class="fill-width" style="margin-top: 3px;">
        <svg
          style="width: ${this.width}px; max-width: 100%; height: 30px;"
          viewBox="-1 0 ${this.width+2} ${this.height}"
        >
          ${this.sliderTicks}
        </svg>
      </div>
    `}}customElements.define("eox-sliderticks",Qa);var un={exports:{}};(function(i,t){(function(e,r){i.exports=r()})(Pt,function(){var e="minute",r=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(o,a,s){var l=a.prototype;s.utc=function(h){var T={date:h,utc:!0,args:arguments};return new a(T)},l.utc=function(h){var T=s(this.toDate(),{locale:this.$L,utc:!0});return h?T.add(this.utcOffset(),e):T},l.local=function(){return s(this.toDate(),{locale:this.$L,utc:!1})};var c=l.parse;l.parse=function(h){h.utc&&(this.$u=!0),this.$utils().u(h.$offset)||(this.$offset=h.$offset),c.call(this,h)};var d=l.init;l.init=function(){if(this.$u){var h=this.$d;this.$y=h.getUTCFullYear(),this.$M=h.getUTCMonth(),this.$D=h.getUTCDate(),this.$W=h.getUTCDay(),this.$H=h.getUTCHours(),this.$m=h.getUTCMinutes(),this.$s=h.getUTCSeconds(),this.$ms=h.getUTCMilliseconds()}else d.call(this)};var u=l.utcOffset;l.utcOffset=function(h,T){var V=this.$utils().u;if(V(h))return this.$u?0:V(this.$offset)?u.call(this):this.$offset;if(typeof h=="string"&&(h=function(j){j===void 0&&(j="");var C=j.match(r);if(!C)return null;var U=(""+C[0]).match(n)||["-",0,0],ot=U[0],F=60*+U[1]+ +U[2];return F===0?0:ot==="+"?F:-F}(h),h===null))return this;var L=Math.abs(h)<=16?60*h:h,M=this;if(T)return M.$offset=L,M.$u=h===0,M;if(h!==0){var k=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(M=this.local().add(L+k,e)).$offset=L,M.$x.$localOffset=k}else M=this.utc();return M};var g=l.format;l.format=function(h){var T=h||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return g.call(this,T)},l.valueOf=function(){var h=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*h},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var y=l.toDate;l.toDate=function(h){return h==="s"&&this.$offset?s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():y.call(this)};var m=l.diff;l.diff=function(h,T,V){if(h&&this.$u===h.$u)return m.call(this,h,T,V);var L=this.local(),M=s(h).local();return m.call(L,M,T,V)}}})})(un);var ts=un.exports;const es=ri(ts);var dn={exports:{}};(function(i,t){(function(e,r){i.exports=r()})(Pt,function(){return function(e,r,n){r.prototype.dayOfYear=function(o){var a=Math.round((n(this).startOf("day")-n(this).startOf("year"))/864e5)+1;return o==null?a:this.add(o-a,"day")}}})})(dn);var is=dn.exports;const rs=ri(is);var hn={exports:{}};(function(i,t){(function(e,r){i.exports=r()})(Pt,function(){var e="day";return function(r,n,o){var a=function(c){return c.add(4-c.isoWeekday(),e)},s=n.prototype;s.isoWeekYear=function(){return a(this).year()},s.isoWeek=function(c){if(!this.$utils().u(c))return this.add(7*(c-this.isoWeek()),e);var d,u,g,y,m=a(this),h=(d=this.isoWeekYear(),u=this.$u,g=(u?o.utc:o)().year(d).startOf("year"),y=4-g.isoWeekday(),g.isoWeekday()>4&&(y+=7),g.add(y,e));return m.diff(h,"week")+1},s.isoWeekday=function(c){return this.$utils().u(c)?this.day()||7:this.day(this.day()%7?c:c-7)};var l=s.startOf;s.startOf=function(c,d){var u=this.$utils(),g=!!u.u(d)||d;return u.p(c)==="isoweek"?g?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(c,d)}}})})(hn);var ns=hn.exports;const os=ri(ns);It.extend(rs);It.extend(os);It.extend(es);class as extends nt{static get properties(){return{controlProperty:{type:String,attribute:"control-property"},controlValues:{type:Array,attribute:"control-values"},for:{type:String},layer:{type:String},slider:{type:Boolean},navigation:{type:Boolean},_originalParams:{type:Object},play:{type:Boolean,attribute:"play"},displayFormat:{type:String,attribute:"display-format"},currentStep:{type:String,attribute:"current-step"},_animationInterval:{state:!0},_controlSource:{state:!0},_isAnimationPlaying:{state:!0},_newStepIndex:{state:!0},_eoxMap:{state:!0},_width:{state:!0},unstyled:{type:Boolean}}}constructor(){super(),this.controlValues=[],this._newStepIndex=0,this.unstyled=!1,this.play=!1,this.navigation=!0,this.slider=!1,this.for="eox-map",this.layer="",this.controlProperty=void 0,this._eoxMap=void 0,this._width=300,window.addEventListener("resize",()=>{this._width=this.clientWidth}),this.displayFormat=void 0}next(){this._updateStep(1)}previous(){this._updateStep(-1)}playAnimation(t){t?this._animationInterval=setInterval(()=>this._updateStep(1),500):clearInterval(this._animationInterval),this._isAnimationPlaying=t,this.requestUpdate()}setConfig(t){this.layer=t.layer??this.layer,this.controlProperty=t.controlProperty??this.controlProperty,this.controlValues=t.controlValues??this.controlValues,this.requestUpdate(),this._updateStep(0)}get currentStep(){return this.controlValues[this._newStepIndex]}set currentStep(t){const e=this.controlValues.findIndex(r=>r===t);e>-1?this._newStepIndex=e:console.error(`Unable to find step "${t}" in available times!`)}firstUpdated(){this.updateMap()}updated(t){t.has("for")&&this.updateMap()}updateMap(){const t=xi(this.for);if(t){const e=t;this.eoxMap=e}}get eoxMap(){return this._eoxMap}set eoxMap(t){const e=this._eoxMap;this._eoxMap=t,this.requestUpdate("eoxMap",e)}_updateStep(t=1){var e;t&&(this._newStepIndex=this._newStepIndex+t,this._newStepIndex>this.controlValues.length-1&&(this._newStepIndex=0),this._newStepIndex<0&&(this._newStepIndex=this.controlValues.length-1),this.layer&&this.for&&((e=this._controlSource)==null||e.updateParams({[this.controlProperty]:this.controlValues[this._newStepIndex]})),this.requestUpdate(),this.dispatchEvent(new CustomEvent("stepchange",{detail:{currentStep:this.currentStep}})))}getFlatLayersArray(t){const e=[];e.push(...t);let r=e.filter(n=>n instanceof Ni);for(;r.length;){const n=[];for(let o=0,a=r.length;o<a;o++){const s=r[o].getLayers().getArray();e.push(...s);const l=s.filter(c=>c instanceof Ni);n.push(...l)}r=n}return e}render(){if(this.layer&&this.for){const e=xi(this.for).map;e.once("loadend",()=>{if(!this._originalParams){const n=this.getFlatLayersArray(e.getLayers().getArray()).find(o=>o.get("id")===this.layer);this._controlSource=n.getSource(),this._originalParams=this._controlSource.getParams()}})}return p`
      <style>
        ${Ja}
        ${!this.unstyled&&Ka}
      </style>
      <main>
        <div id="controls" part="controls">
          ${this.navigation?p`
                <button
                  part="previous"
                  class="icon previous small circle transparent no-margin"
                  @click="${()=>this.previous()}"
                >
                  ${this.unstyled?"<":p`
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
              `:lt}
          <small part="current">
            ${this.displayFormat?It(this.controlValues[this._newStepIndex]).utc().format(this.displayFormat):this.controlValues[this._newStepIndex]}
          </small>
          ${this.navigation?p`
                <button
                  part="next"
                  class="icon next small circle transparent no-margin"
                  @click="${()=>this.next()}"
                >
                  ${this.unstyled?"<":p`
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
              `:lt}
          ${this.play?p`
                <button
                  part="play"
                  class="icon-text small ${this._isAnimationPlaying?"pause":"play"}"
                  @click="${()=>this.playAnimation(!this._isAnimationPlaying)}"
                >
                  ${this.unstyled?lt:p`
                        <i class="small">
                          ${this._isAnimationPlaying?p`<svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <title>pause</title>
                                <path d="M14,19H18V5H14M6,19H10V5H6V19Z" />
                              </svg>`:p`<svg
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
              `:lt}
        </div>
        <div class="small-padding">
          ${this.slider?p`
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
    `}}customElements.define("eox-timecontrol",as);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ss=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ls={attribute:!0,type:String,converter:wn,reflect:!1,hasChanged:bn},cs=(i=ls,t,e)=>{const{kind:r,metadata:n}=e;let o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),r==="setter"&&((i=Object.create(i)).wrapped=!0),o.set(e.name,i),r==="accessor"){const{name:a}=e;return{set(s){const l=t.get.call(this);t.set.call(this,s),this.requestUpdate(a,l,i)},init(s){return s!==void 0&&this.C(a,void 0,i,s),s}}}if(r==="setter"){const{name:a}=e;return function(s){const l=this[a];t.call(this,s),this.requestUpdate(a,l,i)}}throw Error("Unsupported decorator location: "+r)};function K(i){return(t,e)=>typeof e=="object"?cs(i,t,e):((r,n,o)=>{const a=n.hasOwnProperty(o);return n.constructor.createProperty(o,r),a?Object.getOwnPropertyDescriptor(n,o):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const us=(i,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(i,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ds(i,t){return(e,r,n)=>{const o=a=>{var s;return((s=a.renderRoot)==null?void 0:s.querySelector(i))??null};return us(e,r,{get(){return o(this)}})}}class hs{constructor(t){this.cle=t}setColorScale(){switch(this.cle.scaleType){case"continuous":this.setContinousColorScale();break;case"discrete":this.setDiscreteColorScale();break;case"threshold":this.setThresholdColorScale();break;case"categorical":this.setCategoricalColorScale();break;default:this.invalidScaleType(this.cle.scaleType)}}setContinousColorScale(){const{interpolator:t,domain:e,range:r}=this.cle;this.colorScale=t?_n(t).domain(e):$i().range(r).domain(e).interpolate(ur)}setDiscreteColorScale(){this.colorScale=Cn().domain(this.cle.domain).range(this.cle.range)}setThresholdColorScale(){const t=this.cle.domain;this.colorScale=An().domain(t.slice(1,t.length-1)).range(this.cle.range)}setCategoricalColorScale(){this.colorScale=Ln().domain(this.cle.domain).range(this.cle.range)}invalidScaleType(t){throw new Error(`invalid property scaletype: ${t}.
      Must be one of "categorical", "continuous", "discrete", "threshold".`)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Si=lr(class extends cr{constructor(i){var t;if(super(i),i.type!==Ot.ATTRIBUTE||i.name!=="class"||((t=i.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var r,n;if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((r=this.nt)!=null&&r.has(o))&&this.st.add(o);return this.render(t)}const e=i.element.classList;for(const o of this.st)o in t||(e.remove(o),this.st.delete(o));for(const o in t){const a=!!t[o];a===this.st.has(o)||(n=this.nt)!=null&&n.has(o)||(a?(e.add(o),this.st.add(o)):(e.remove(o),this.st.delete(o)))}return Qt}});class ps{constructor(t){this.cle=t}render(){const t=this.cle.titleText?p`<p class="legend-title">${this.cle.titleText}</p>`:"",e={hidden:this.cle.scaleType==="categorical"},r={hidden:this.cle.scaleType!=="categorical","categorical-container":!0};return p`<div
      class="cle-container"
      style="width:${this.cle.width}px; height:auto;"
    >
      ${t}
      <slot name="subtitle"></slot>
      <svg
        class=${Si(e)}
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
      <ul class=${Si(r)}>
        ${this.renderCategorical()}
      </ul>
      <slot name="footer"></slot>
    </div>`}renderCategorical(){if(this.cle.scaleType!=="categorical")return"";const{markType:t,colorScale:e,domain:r}=this.cle,n={"legend-item":!0,line:t==="line",circle:t==="circle"};return p`${r.map(o=>p`<li
          class=${Si(n)}
          style="--color:${e(o)}"
        >
          ${o}
        </li>`)}`}renderContinuous(){var u;if(this.cle.scaleType!=="continuous"||this.cle.colorScale===null)return"";const{colorScale:t,marginTop:e,marginLeft:r,marginRight:n,tickSize:o,width:a,range:s}=this.cle,l=this.cle.marginBottom+o,c=this.cle.height+o,d=((u=t.interpolator)==null?void 0:u.call(t))||Dn(ur,s);return pt`<image
      x=${r}
      y=${e}
      width=${a-n-r}
      height=${c-e-l}
      preserveAspectRatio="none"
      href=${this.getColorRamp(d).toDataURL()}
    ></image>`}renderDiscreteThreshold(){if(this.cle.scaleType!=="discrete"&&this.cle.scaleType!=="threshold")return"";const{tickSize:t,marginTop:e,marginLeft:r,colorScale:n,xScale:o}=this.cle,a=this.cle.height+t,s=this.cle.marginBottom+t,l=n.range(),c=u=>n.invertExtent(u).map(o)[0]||r,d=u=>{let[g,y]=n.invertExtent(u).map(o);return g=g||0,y=y||o.range()[1],y-g};return pt`${l.map(u=>pt`<rect x=${c(u)} y=${e} width=${d(u)} height=${a-e-s} fill=${u}></rect>`)}`}renderAxis(){if(!this.cle.xScale||this.cle.scaleType==="categorical")return"";const{ticks:t,tickSize:e,tickFormat:r,tickFormatter:n,tickValues:o,xScale:a,marginTop:s}=this.cle,l=this.cle.height+e,c=this.cle.marginBottom+e,d=o!=null&&o.length?o:a.ticks.apply(a,[t,r]),u=Math.max(e,0)+3,g=()=>d.map(y=>pt`<g class="tick" transform='translate(${a(y)},0)'>
      <line stroke="currentColor" y2="${e}" y1="${s+c-l}"></line>
      <text fill="currentColor" y="${u}" dy="0.71em">${n(y)}</text>
      </g>`);return pt`<g
      class="x-axis"
      transform="translate(0, ${l-c})"
      text-anchor="middle"
    >${g()}</g>`}getColorRamp(t,e=256){const r=document.createElement("canvas");r.setAttribute("height","1"),r.setAttribute("width",`${e}`);const n=r.getContext("2d");for(let o=0;o<e;o++)n.fillStyle=t(o/(e-1)),n.fillRect(o,0,1,1);return r}}const fs=325,gs=32,ys=6,ms=12,vs=16,bs=12,pn=5,ws=6,fn=".1f",Ss=[0,1],xs=["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],$s="Color Legend Element",Es="circle",Ts="continuous",_s=["domain","range","interpolator","scaleType"],Cs=["scaleType","ticks","tickSize","tickValues","tickFormat","tickFormatter","domain","range","marginLeft","marginRight","marginBottom","marginTop","width","height"];class As{constructor(t){this.cle=t}setXScale(){const{scaleType:t,marginLeft:e,width:r,marginRight:n}=this.cle;switch(t){case"continuous":this.xScale=$i().domain(this.cle.domain).range([e,r-n]);break;case"discrete":case"threshold":this.xScale=$i().domain([this.cle.domain[0],this.cle.domain[this.cle.domain.length-1]]).rangeRound([e,r-n]);break;case"categorical":this.xScale=null;break;default:throw new Error(`Unrecognized scaleType: ${t}`)}}handleAxisTicks(){var t,e,r;if((this.cle.scaleType==="discrete"||this.cle.scaleType==="threshold")&&!this.cle.tickValues){const[n,o]=this.xScale.domain();this.cle.tickValues=[n,...((e=(t=this.cle.colorScale)==null?void 0:t.thresholds)==null?void 0:e.call(t))||this.cle.colorScale.domain(),o]}typeof this.cle.tickFormatter!="function"&&((r=this.cle.tickFormat)!=null&&r.length?this.cle.tickFormatter=Vn(this.cle.tickFormat):this.cle.tickFormatter=this.xScale.tickFormat(this.cle.ticks||pn,this.cle.tickFormat||fn))}}const Ls=Ae`
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
`;var Y=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let N=class extends nt{constructor(){super(...arguments),this.titleText=$s,this.width=fs,this.height=gs,this.marginTop=ys,this.marginRight=ms,this.marginBottom=vs,this.marginLeft=bs,this.scaleType=Ts,this.domain=Ss,this.range=xs,this.markType=Es,this.ticks=pn,this.tickFormat=fn,this.tickSize=ws,this.colorScaleSetter=new hs(this),this.axisTickSetter=new As(this),this.renderer=new ps(this)}get interpolator(){return this._interpolator}set interpolator(t){if(typeof t=="function"){const e=this.interpolator;this._interpolator=t,this.requestUpdate("interpolator",e)}else throw new Error("interpolator must be a function.")}get tickFormatter(){return this._tickFormatter}set tickFormatter(t){if(typeof t=="function"){const e=this.tickFormatter;this._tickFormatter=t,this.requestUpdate("tickFormatter",e)}else throw new Error("tickFormatter must be a function.")}get colorScale(){return this.colorScaleSetter.colorScale}get xScale(){return this.axisTickSetter.xScale}render(){return this.renderer.render()}willUpdate(t){_s.some(e=>t.has(e))&&this.colorScaleSetter.setColorScale(),Cs.some(e=>t.has(e))&&(this.axisTickSetter.setXScale(),this.axisTickSetter.handleAxisTicks())}};N.styles=[Ls];Y([K({type:String})],N.prototype,"titleText",void 0);Y([K({type:Number})],N.prototype,"width",void 0);Y([K({type:Number})],N.prototype,"height",void 0);Y([K({type:Number})],N.prototype,"marginTop",void 0);Y([K({type:Number})],N.prototype,"marginRight",void 0);Y([K({type:Number})],N.prototype,"marginBottom",void 0);Y([K({type:Number})],N.prototype,"marginLeft",void 0);Y([K({type:String})],N.prototype,"scaleType",void 0);Y([K({type:Array})],N.prototype,"domain",void 0);Y([K({type:Array})],N.prototype,"range",void 0);Y([K({type:String})],N.prototype,"markType",void 0);Y([K({type:Number})],N.prototype,"ticks",void 0);Y([K({type:String})],N.prototype,"tickFormat",void 0);Y([K({type:Number})],N.prototype,"tickSize",void 0);Y([K({type:Array})],N.prototype,"tickValues",void 0);Y([ds("svg")],N.prototype,"svg",void 0);Y([K({attribute:!1})],N.prototype,"interpolator",null);Y([K({attribute:!1})],N.prototype,"tickFormatter",null);N=Y([ss("color-legend")],N);const Ds="eox-layercontrol[data-v-88d02d9c]{overflow:auto}",Vs={class:"d-flex flex-column"},Ms=["for"],ks={key:0,class:"mt-2 mb-2"},Os={__name:"EodashLayerControl",props:{map:{type:String,default:"first"},tools:{type:Array,default:()=>["datetime","info","config","legend","opacity"]},title:{type:String||Boolean,default:"Layers"},cssVars:{type:Object}},setup(i){const t=i,e={tools:t.tools,style:t.cssVars},{selectedCompareStac:r,selectedStac:n}=kn(On()),o=Nn(()=>t.map==="second"?Ui.value!==null&&r.value!==null:Fi.value!==null&&n.value!==null),a=t.map==="second"?Rn:Pn,s=t.map==="second"?Ui:Fi,l=Un(null),c=async y=>{var M;const{layer:m,datetime:h}=y.detail,T=await Bn(a,m);let V=[];T&&(V=await T.updateLayerJson(h,m.get("id"),t.map));const L=(M=V==null?void 0:V.find(k=>{var j;return((j=k==null?void 0:k.properties)==null?void 0:j.id)==="AnalysisGroup"}))==null?void 0:M.layers;L!=null&&L.length&&(L==null||L.forEach(k=>{k.properties.layerControlExpand=!0,k.properties.layerControlToolsExpand=!0}),s.value.layers=V)};let d;const u=y=>{clearTimeout(d),d=setTimeout(()=>{c(y)},500)},g=y=>{t.map==="second"?In.value=y.detail.jsonformValue:Hn.value=y.detail.jsonformValue};return(y,m)=>(li(),si("span",Vs,[o.value?(li(),si("eox-layercontrol",Fn({key:zi(s)},e,{for:zi(s),"onDatetime:updated":u,toolsAsList:"true",style:{"--eox-background-color":"transparent"},ref_key:"eoxLayercontrol",ref:l,"on:layerConfig:change":g}),[qn(y.$slots,"layerstitle",{},()=>[Yi("div",null,[i.title?(li(),si("p",ks,[Yi("strong",null,zn(i.title),1)])):qi("v-if",!0)])],!0)],16,Ms)):qi("v-if",!0)]))}},nl=Mn(Os,[["styles",[Ds]],["__scopeId","data-v-88d02d9c"]]);export{nl as default};
