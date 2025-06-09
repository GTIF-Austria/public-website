var Ao=Object.defineProperty;var cr=e=>{throw TypeError(e)};var _o=(e,t,n)=>t in e?Ao(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ye=(e,t,n)=>_o(e,typeof t!="symbol"?t+"":t,n),on=(e,t,n)=>t.has(e)||cr("Cannot "+n);var G=(e,t,n)=>(on(e,t,"read from private field"),n?n.call(e):t.get(e)),q=(e,t,n)=>t.has(e)?cr("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),wt=(e,t,n,r)=>(on(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),L=(e,t,n)=>(on(e,t,"access private method"),n);import{a as Co,u as Mo,H as ur}from"./eo-dash.BtwWSFqU.js";import{r as ie,E as xe,x as C}from"./lit-element.Deg-YTNa.js";import{a as vt,o as It}from"./map.ZocK5lBO.js";import{n as N,s as So}from"./directive.qnhzJN6s.js";import{d as Xe,_ as Ht,c as Lo,a as Eo,s as $o}from"./radio.style.BrcTE7t6.js";import{s as Oe,u as fr}from"./static.3li6NsVA.js";import"./toolcool-range-slider.min.Ch_Z5G3w.js";import{o as Ro}from"./orient2d.DArCjZZA.js";import{f as St,a as fn,p as Po,m as Do,l as To}from"./index.KH_2m63C.js";import{c as be,g as Rr}from"./commonjsHelpers.BosuxZz1.js";import{h as Bo,p as ko,c as Oo,o as jo,j as hr,t as dr,K as No,k as Io}from"./framework.CKdxjOfV.js";const Ho=`
:host {
  display: flex;
  box-sizing: border-box;
  height: 100%;
  line-height: 1;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
form#itemfilter {
  height: 100%;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
}
form#itemfilter:not(.inline) {
  overflow-y: auto;
}
details {
  width: 100%;
}
`,tt=`
:host, :root {
  --item-color: color-mix(
    in srgb,
    var(--primary-color) 10%,
    transparent
  );
  --item-hover-color: color-mix(
    in srgb,
    var(--secondary-color) 30%,
    transparent
  );
  --item-select-color: var(--primary-color);
  --inline-bg-color: color-mix(
    in srgb,
    var(--secondary-color) 10%,
    transparent
  );
  --border-color: color-mix(
    in srgb,
    #000000 20%,
    transparent
  );
  --background-color: var(--eox-background-color, transparent);
  --padding: 0.5rem;
  --text-transform: capitalize;
  --form-flex-direction: column;
  --filter-display: block;
  background-color: var(--background-color);
}
* {
  font-family: Roboto, sans-serif;
}
form#itemfilter {
  flex-direction: var(--form-flex-direction);
}
eox-itemfilter-container {
  min-width: 200px;
  display: var(--filter-display);
}
eox-itemfilter-results {
  flex-grow: 1;
}
ul {
  padding-left: 0;
  margin-top: 0;
}
li {
  list-style: none;
}
li span {
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  align-items: center;
}
li label {
  display: flex;
  align-items: center;
}
details summary > * {
  display: inline;
}
details summary {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #0002;
  padding: .5rem var(--padding);
}

details > summary::-webkit-details-marker {
  display: none;
}

.title {
  font-size: 13px;
  align-items: center;
  text-transform: var(--text-transform);
}
.subtitle {
  font-size: 11px;
  opacity: .7;
  margin-top: 6px;
}
.image {
  width: 24px;
  height: 24px;
  object-fit: cover;
  overflow: hidden;
  margin-right: 8px;
}
.title-container {
  display: flex;
  flex-direction: column;
}
h6.main-heading {
  font-size: 1rem;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-top: var(--padding);
  padding: 0 var(--padding);
}
details summary .title {
  display: flex;
  font-weight: 500;
}
details.details-filter summary::after,
details.details-results summary::before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230009' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-right%3C/title%3E%3Cpath d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /%3E%3C/svg%3E");
  height: 24px;
  width: 24px;
}
details.details-filter summary::after {
  margin-left: auto;
  transform: rotate(90deg);
}
details[open] summary::before {
  transform: rotate(90deg);
}
details[open] summary::after {
  transform: rotate(270deg);
}
eox-itemfilter-expandcontainer {
  max-height: 200px;
}
eox-itemfilter-expandcontainer > [data-type=filter] {
  display: block;
  height: calc(100% - 32px);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 var(--padding);
}
[data-type=filter] .title,
details summary {
  text-transform: var(--text-transform);
}
li,
label,
details,
input[type="checkbox"],
input[type="radio"] {
  cursor: pointer;
}
input[type="checkbox"],
input[type="radio"] {
  margin: 0;
  padding: 0;
  border: none;
}
input[type="text"] {
  box-sizing: border-box;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 5px 7px;
  border-radius: 4px;
  border: 1px solid var(--border-color);
}
section:not(section:last-of-type) {
  margin-bottom: 1rem;
}
#section-results {
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
}
ul:not(#filters) > li {
  padding: 5px 0;
}
ul#results li {
  padding: 5px var(--padding);
  display: flex;
  justify-content: space-between;
}
ul#results .result-action {
  display: flex;
  align-items: center;
  height: fit-content;
  line-height: 1;
  opacity: .5;
  transition: opacity .3s ease-in-out;
}
ul#results .result-action:hover {
  opacity: 1;
}
ul#results .highlighted .result-action > * {
  filter: invert(1);
}
eox-layout {
  padding: .5rem var(--padding);
  gap: var(--card-gap, 16px);
  --column-width: var(--card-width, 300px);
  --row-height: var(--card-height, 200px);
}
eox-layout-item {
  position: relative;
  border-radius: var(--card-border-radius, 8px);
  cursor: pointer;
}
eox-layout-item .image {
  width: 100%;
  height: 100%;
  transition: filter .3s ease-in-out;
  margin: 0;
}
eox-layout-item:hover .image {
  filter: brightness(.5);
}
eox-layout-item .title-container {
  position: absolute;
  bottom: 0;
  color: white;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85),
    transparent
  );
  padding-top: 25px;
}
eox-layout-item .title {
  font-weight: bold;
}
eox-layout-item .result-action {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #ffffffbb;
  padding: 8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
}
ul#results eox-layout-item.highlighted .result-action > * {
  filter: none;
}
section {
  position: relative;
  background-color: var(--background-color);
}
button#filter-reset {
  position: absolute;
  top: 0;
  right: var(--padding);
  padding: 2px 10px;
}
.count {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--secondary-color);
  padding: 0 12px;
  height: 20px;
  border-radius: 10px;
  color: var(--primary-color);
  font-weight: 500;
  margin-left: 9px;
}
eox-itemfilter-range,
tc-range-slider {
  align-items: center;
  display: block;
}
tc-range-slider {
  width: calc(100% - 16px);
  margin-left: 8px;
  margin-right: 8px;
  --width: 100%;
}
.range-before,
.range-after {
  font-size: small;
}
.range-before,
.range-after {
  margin: 1rem 0px;
}

button.reset-icon:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eclose%3C/title%3E%3Cpath d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /%3E%3C/svg%3E");
}
eox-itemfilter-expandcontainer button.reset-icon {
  margin-left: 4px;
  margin-top: -5px;
  height: 14px;
  width: 14px;
}
eox-itemfilter-expandcontainer button.reset-icon:before {
  height: 14px;
  width: 14px;
}
.inline-content {
  border: 1.5px solid var(--secondary-color);
  border-radius: 4px;
  max-height: 300px;
  overflow-y: auto;
  background: var(--inline-bg-color);
  margin-top: 4px;
  padding: 8px;
}
.inline-container {
  position: relative;
  align-items: center;
}
.inline-container-wrapper {
  width: 100%;
  position: relative;
}
.inline-container {
  position: relative;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  height: 24px;
  padding: 8px;
  flex: 1;
  justify-content: space-between;
  cursor: text;
  transition: all 0.2s ease-in-out;
  display: flex;
}
.inline-container:hover {
  border: 1px solid var(--primary-color);
}
[popover] {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  background-color: var(--background-color);
  border: none;
}
.input-container {
  display: flex;
  flex: 1;
  align-items: center;
}
.input-container input,
.input-container input:focus {
  height: 100%;
  border: none;
  outline: none;
  border: 0;
  min-width: 25%;
}
.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 1px;
  top: 5px;
  height: calc(100% - 10px);
  width: 34px;
  background: white;
}
button.icon {
  color: #004170;
  height: 24px;
  font-size: large;
  width: unset;
}
.inline-container::-webkit-scrollbar {
  height: 2px;
}
.inline-container::-webkit-scrollbar-thumb {
  background: lightgrey;
  border-radius: 2px;
}
.hidden {
  height: 0;
  padding: 0;
  border: none;
}
.hidden:hover {
  border: none;
}
.chip-title {
  pointer-events: none;
  text-transform: var(--text-transform);
}
.chip {
  display: flex;
  align-items: center;
  background: var(--item-color);
  border-radius: 30px;
  margin-right: 4px;
  padding: 5px 10px;
  font-size: small;
  cursor: default;
  white-space: nowrap;
}
.chip.highlighted {
  background: var(--primary-color);
  color: white;
}
.chip-close {
  cursor: pointer;
  font-weight: 600;
  position: absolute;
  right: -25px;
  background: white;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  height: 24px;
  width: 24px;
}
.chip-close:before {
  position: absolute;
  text-indent: 0;
  line-height: initial;
  height: 24px;
  width: 24px;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eclose%3C/title%3E%3Cpath d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /%3E%3C/svg%3E");
}
.chip-container {
  position: relative;
  max-width: 75%;
}
.autocomplete-container,
.text-container {
  position: relative;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  cursor: text;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  background: white;
}
.autocomplete-container-wrapper,
.text-container-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.autocomplete-container-wrapper::-webkit-scrollbar {
  display: none;
}
.chip-wrapper {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.chip-wrapper::-webkit-scrollbar {
  display: none;
  width: 0;
  background: transparent;
}
.autocomplete-input,
.text-input {
  flex: 1;
  border: 1px solid var(--border-color);
  outline: none;
  box-sizing: border-box;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  min-width: 150px;
}
input[type="text"].text-input,
input[type="text"].autocomplete-input {
  padding: 9px 6px !important;
  border-radius: 4px;
}
.text-input:hover,
.autocomplete-input:hover {
  border: 1px solid var(--primary-color);
}
.text-input:invalid {
  border: 1px solid red;
}
.selected-items {
  display: flex;
  flex-wrap: nowrap;
  gap: 4px;
}
.select li:hover,
.multiselect li:hover,
eox-itemfilter-results li:hover {
  background: var(--item-hover-color);
}
eox-itemfilter-results li.highlighted {
  color: var(--background-color);
  background: var(--item-select-color);
}
.selected-item span {
  margin-right: 8px;
}
.selected-item button {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
}
.multiselect-container,
.select-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.multiselect-container label,
.select-container label {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.multiselect-container input,
.select-container input {
  margin-right: 8px;
}
.select-overflow {
  max-height: 185px;
  overflow-y: auto;
}
.chip-title strong {
  font-weight: 500;
}
.chip-wrapper {
  max-width: 100%;
  overflow-x: scroll;
}
.chip-container {
  display: flex;
  flex: 0;
}
.input-container.dirty-filter-input {
  margin-left: 25px;
}
.error-validation {
  position: relative;
  color: red;
  font-size: x-small;
  top: -8px;
}
input {
  background-color: var(--background-color);
}
`;var kt,Pr;class Fo extends ie{constructor(){super();q(this,kt);this.filterObject={},this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}render(){return C`
      <style>
        ${!this.unstyled&&tt}
      </style>

      ${N(this.filterObject.featured,()=>C`<slot name="filter"></slot>`,()=>C`<details
            @toggle="${L(this,kt,Pr)}"
            class="details-filter"
            ?open=${this.filterObject.expanded||xe}
          >
            <summary>
              <span
                class="title"
                style="${!this.filterObject.title&&"text-transform: var(--text-transform)"}"
              >
                ${this.filterObject.title||this.filterObject.key||"Filter"}
                <slot name="reset-button"></slot>
              </span>
            </summary>
            <div>
              <slot name="filter"></slot>
            </div>
          </details>`)}
    `}}kt=new WeakSet,Pr=function(n){this.dispatchEvent(new CustomEvent("details-toggled",{detail:n,bubbles:!0,composed:!0}))};customElements.define("eox-itemfilter-expandcontainer",Fo);function de(e){return Array.isArray?Array.isArray(e):Br(e)==="[object Array]"}function qo(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function Uo(e){return e==null?"":qo(e)}function te(e){return typeof e=="string"}function Dr(e){return typeof e=="number"}function Wo(e){return e===!0||e===!1||Go(e)&&Br(e)=="[object Boolean]"}function Tr(e){return typeof e=="object"}function Go(e){return Tr(e)&&e!==null}function K(e){return e!=null}function an(e){return!e.trim().length}function Br(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const Ko="Incorrect 'index' type",Vo=e=>`Invalid value for key ${e}`,zo=e=>`Pattern length exceeds max of ${e}.`,Yo=e=>`Missing ${e} property in key`,Xo=e=>`Property 'weight' in key '${e}' must be a positive integer`,pr=Object.prototype.hasOwnProperty;class Jo{constructor(t){this._keys=[],this._keyMap={};let n=0;t.forEach(r=>{let i=kr(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function kr(e){let t=null,n=null,r=null,i=1,o=null;if(te(e)||de(e))r=e,t=gr(e),n=hn(e);else{if(!pr.call(e,"name"))throw new Error(Yo("name"));const a=e.name;if(r=a,pr.call(e,"weight")&&(i=e.weight,i<=0))throw new Error(Xo(a));t=gr(a),n=hn(a),o=e.getFn}return{path:t,id:n,weight:i,src:r,getFn:o}}function gr(e){return de(e)?e:e.split(".")}function hn(e){return de(e)?e.join("."):e}function Zo(e,t){let n=[],r=!1;const i=(o,a,l)=>{if(K(o))if(!a[l])n.push(o);else{let u=a[l];const f=o[u];if(!K(f))return;if(l===a.length-1&&(te(f)||Dr(f)||Wo(f)))n.push(Uo(f));else if(de(f)){r=!0;for(let h=0,p=f.length;h<p;h+=1)i(f[h],a,l+1)}else a.length&&i(f,a,l+1)}};return i(e,te(t)?t.split("."):t,0),r?n:n[0]}const Qo={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},ea={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},ta={location:0,threshold:.6,distance:100},na={useExtendedSearch:!1,getFn:Zo,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var A={...ea,...Qo,...ta,...na};const ra=/[^ ]+/g;function ia(e=1,t=3){const n=new Map,r=Math.pow(10,t);return{get(i){const o=i.match(ra).length;if(n.has(o))return n.get(o);const a=1/Math.pow(o,.5*e),l=parseFloat(Math.round(a*r)/r);return n.set(o,l),l},clear(){n.clear()}}}class Pn{constructor({getFn:t=A.getFn,fieldNormWeight:n=A.fieldNormWeight}={}){this.norm=ia(n,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,te(this.docs[0])?this.docs.forEach((t,n)=>{this._addString(t,n)}):this.docs.forEach((t,n)=>{this._addObject(t,n)}),this.norm.clear())}add(t){const n=this.size();te(t)?this._addString(t,n):this._addObject(t,n)}removeAt(t){this.records.splice(t,1);for(let n=t,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(t,n){return t[this._keysMap[n]]}size(){return this.records.length}_addString(t,n){if(!K(t)||an(t))return;let r={v:t,i:n,n:this.norm.get(t)};this.records.push(r)}_addObject(t,n){let r={i:n,$:{}};this.keys.forEach((i,o)=>{let a=i.getFn?i.getFn(t):this.getFn(t,i.path);if(K(a)){if(de(a)){let l=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:f,value:h}=u.pop();if(K(h))if(te(h)&&!an(h)){let p={v:h,i:f,n:this.norm.get(h)};l.push(p)}else de(h)&&h.forEach((p,y)=>{u.push({nestedArrIndex:y,value:p})})}r.$[o]=l}else if(te(a)&&!an(a)){let l={v:a,n:this.norm.get(a)};r.$[o]=l}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Or(e,t,{getFn:n=A.getFn,fieldNormWeight:r=A.fieldNormWeight}={}){const i=new Pn({getFn:n,fieldNormWeight:r});return i.setKeys(e.map(kr)),i.setSources(t),i.create(),i}function sa(e,{getFn:t=A.getFn,fieldNormWeight:n=A.fieldNormWeight}={}){const{keys:r,records:i}=e,o=new Pn({getFn:t,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(i),o}function xt(e,{errors:t=0,currentLocation:n=0,expectedLocation:r=0,distance:i=A.distance,ignoreLocation:o=A.ignoreLocation}={}){const a=t/e.length;if(o)return a;const l=Math.abs(r-n);return i?a+l/i:l?1:a}function oa(e=[],t=A.minMatchCharLength){let n=[],r=-1,i=-1,o=0;for(let a=e.length;o<a;o+=1){let l=e[o];l&&r===-1?r=o:!l&&r!==-1&&(i=o-1,i-r+1>=t&&n.push([r,i]),r=-1)}return e[o-1]&&o-r>=t&&n.push([r,o-1]),n}const Le=32;function aa(e,t,n,{location:r=A.location,distance:i=A.distance,threshold:o=A.threshold,findAllMatches:a=A.findAllMatches,minMatchCharLength:l=A.minMatchCharLength,includeMatches:u=A.includeMatches,ignoreLocation:f=A.ignoreLocation}={}){if(t.length>Le)throw new Error(zo(Le));const h=t.length,p=e.length,y=Math.max(0,Math.min(r,p));let g=o,b=y;const v=l>1||u,S=v?Array(p):[];let M;for(;(M=e.indexOf(t,b))>-1;){let O=xt(t,{currentLocation:M,expectedLocation:y,distance:i,ignoreLocation:f});if(g=Math.min(O,g),b=M+h,v){let Z=0;for(;Z<h;)S[M+Z]=1,Z+=1}}b=-1;let $=[],E=1,R=h+p;const B=1<<h-1;for(let O=0;O<h;O+=1){let Z=0,U=R;for(;Z<U;)xt(t,{errors:O,currentLocation:y+U,expectedLocation:y,distance:i,ignoreLocation:f})<=g?Z=U:R=U,U=Math.floor((R-Z)/2+Z);R=U;let rt=Math.max(1,y-U+1),Ke=a?p:Math.min(y+U,p)+h,pe=Array(Ke+2);pe[Ke+1]=(1<<O)-1;for(let W=Ke;W>=rt;W-=1){let Te=W-1,it=n[e.charAt(Te)];if(v&&(S[Te]=+!!it),pe[W]=(pe[W+1]<<1|1)&it,O&&(pe[W]|=($[W+1]|$[W])<<1|1|$[W+1]),pe[W]&B&&(E=xt(t,{errors:O,currentLocation:Te,expectedLocation:y,distance:i,ignoreLocation:f}),E<=g)){if(g=E,b=Te,b<=y)break;rt=Math.max(1,2*y-b)}}if(xt(t,{errors:O+1,currentLocation:y,expectedLocation:y,distance:i,ignoreLocation:f})>g)break;$=pe}const oe={isMatch:b>=0,score:Math.max(.001,E)};if(v){const O=oa(S,l);O.length?u&&(oe.indices=O):oe.isMatch=!1}return oe}function la(e){let t={};for(let n=0,r=e.length;n<r;n+=1){const i=e.charAt(n);t[i]=(t[i]||0)|1<<r-n-1}return t}const Lt=String.prototype.normalize?e=>e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,""):e=>e;class jr{constructor(t,{location:n=A.location,threshold:r=A.threshold,distance:i=A.distance,includeMatches:o=A.includeMatches,findAllMatches:a=A.findAllMatches,minMatchCharLength:l=A.minMatchCharLength,isCaseSensitive:u=A.isCaseSensitive,ignoreDiacritics:f=A.ignoreDiacritics,ignoreLocation:h=A.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreDiacritics:f,ignoreLocation:h},t=u?t:t.toLowerCase(),t=f?Lt(t):t,this.pattern=t,this.chunks=[],!this.pattern.length)return;const p=(g,b)=>{this.chunks.push({pattern:g,alphabet:la(g),startIndex:b})},y=this.pattern.length;if(y>Le){let g=0;const b=y%Le,v=y-b;for(;g<v;)p(this.pattern.substr(g,Le),g),g+=Le;if(b){const S=y-Le;p(this.pattern.substr(S),S)}}else p(this.pattern,0)}searchIn(t){const{isCaseSensitive:n,ignoreDiacritics:r,includeMatches:i}=this.options;if(t=n?t:t.toLowerCase(),t=r?Lt(t):t,this.pattern===t){let v={isMatch:!0,score:0};return i&&(v.indices=[[0,t.length-1]]),v}const{location:o,distance:a,threshold:l,findAllMatches:u,minMatchCharLength:f,ignoreLocation:h}=this.options;let p=[],y=0,g=!1;this.chunks.forEach(({pattern:v,alphabet:S,startIndex:M})=>{const{isMatch:$,score:E,indices:R}=aa(t,v,S,{location:o+M,distance:a,threshold:l,findAllMatches:u,minMatchCharLength:f,includeMatches:i,ignoreLocation:h});$&&(g=!0),y+=E,$&&R&&(p=[...p,...R])});let b={isMatch:g,score:g?y/this.chunks.length:1};return g&&i&&(b.indices=p),b}}class Ae{constructor(t){this.pattern=t}static isMultiMatch(t){return yr(t,this.multiRegex)}static isSingleMatch(t){return yr(t,this.singleRegex)}search(){}}function yr(e,t){const n=e.match(t);return n?n[1]:null}class ca extends Ae{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const n=t===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class ua extends Ae{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const r=t.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,t.length-1]}}}class fa extends Ae{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const n=t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class ha extends Ae{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const n=!t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class da extends Ae{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const n=t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class pa extends Ae{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const n=!t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class Nr extends Ae{constructor(t,{location:n=A.location,threshold:r=A.threshold,distance:i=A.distance,includeMatches:o=A.includeMatches,findAllMatches:a=A.findAllMatches,minMatchCharLength:l=A.minMatchCharLength,isCaseSensitive:u=A.isCaseSensitive,ignoreDiacritics:f=A.ignoreDiacritics,ignoreLocation:h=A.ignoreLocation}={}){super(t),this._bitapSearch=new jr(t,{location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreDiacritics:f,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class Ir extends Ae{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let n=0,r;const i=[],o=this.pattern.length;for(;(r=t.indexOf(this.pattern,n))>-1;)n=r+o,i.push([r,n-1]);const a=!!i.length;return{isMatch:a,score:a?0:1,indices:i}}}const dn=[ca,Ir,fa,ha,pa,da,ua,Nr],mr=dn.length,ga=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,ya="|";function ma(e,t={}){return e.split(ya).map(n=>{let r=n.trim().split(ga).filter(o=>o&&!!o.trim()),i=[];for(let o=0,a=r.length;o<a;o+=1){const l=r[o];let u=!1,f=-1;for(;!u&&++f<mr;){const h=dn[f];let p=h.isMultiMatch(l);p&&(i.push(new h(p,t)),u=!0)}if(!u)for(f=-1;++f<mr;){const h=dn[f];let p=h.isSingleMatch(l);if(p){i.push(new h(p,t));break}}}return i})}const ba=new Set([Nr.type,Ir.type]);class wa{constructor(t,{isCaseSensitive:n=A.isCaseSensitive,ignoreDiacritics:r=A.ignoreDiacritics,includeMatches:i=A.includeMatches,minMatchCharLength:o=A.minMatchCharLength,ignoreLocation:a=A.ignoreLocation,findAllMatches:l=A.findAllMatches,location:u=A.location,threshold:f=A.threshold,distance:h=A.distance}={}){this.query=null,this.options={isCaseSensitive:n,ignoreDiacritics:r,includeMatches:i,minMatchCharLength:o,findAllMatches:l,ignoreLocation:a,location:u,threshold:f,distance:h},t=n?t:t.toLowerCase(),t=r?Lt(t):t,this.pattern=t,this.query=ma(this.pattern,this.options)}static condition(t,n){return n.useExtendedSearch}searchIn(t){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i,ignoreDiacritics:o}=this.options;t=i?t:t.toLowerCase(),t=o?Lt(t):t;let a=0,l=[],u=0;for(let f=0,h=n.length;f<h;f+=1){const p=n[f];l.length=0,a=0;for(let y=0,g=p.length;y<g;y+=1){const b=p[y],{isMatch:v,indices:S,score:M}=b.search(t);if(v){if(a+=1,u+=M,r){const $=b.constructor.type;ba.has($)?l=[...l,...S]:l.push(S)}}else{u=0,a=0,l.length=0;break}}if(a){let y={isMatch:!0,score:u/a};return r&&(y.indices=l),y}}return{isMatch:!1,score:1}}}const pn=[];function va(...e){pn.push(...e)}function gn(e,t){for(let n=0,r=pn.length;n<r;n+=1){let i=pn[n];if(i.condition(e,t))return new i(e,t)}return new jr(e,t)}const Et={AND:"$and",OR:"$or"},yn={PATH:"$path",PATTERN:"$val"},mn=e=>!!(e[Et.AND]||e[Et.OR]),xa=e=>!!e[yn.PATH],Aa=e=>!de(e)&&Tr(e)&&!mn(e),br=e=>({[Et.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function Hr(e,t,{auto:n=!0}={}){const r=i=>{let o=Object.keys(i);const a=xa(i);if(!a&&o.length>1&&!mn(i))return r(br(i));if(Aa(i)){const u=a?i[yn.PATH]:o[0],f=a?i[yn.PATTERN]:i[u];if(!te(f))throw new Error(Vo(u));const h={keyId:hn(u),pattern:f};return n&&(h.searcher=gn(f,t)),h}let l={children:[],operator:o[0]};return o.forEach(u=>{const f=i[u];de(f)&&f.forEach(h=>{l.children.push(r(h))})}),l};return mn(e)||(e=br(e)),r(e)}function _a(e,{ignoreFieldNorm:t=A.ignoreFieldNorm}){e.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:o,score:a})=>{const l=i?i.weight:null;r*=Math.pow(a===0&&l?Number.EPSILON:a,(l||1)*(t?1:o))}),n.score=r})}function Ca(e,t){const n=e.matches;t.matches=[],K(n)&&n.forEach(r=>{if(!K(r.indices)||!r.indices.length)return;const{indices:i,value:o}=r;let a={indices:i,value:o};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),t.matches.push(a)})}function Ma(e,t){t.score=e.score}function Sa(e,t,{includeMatches:n=A.includeMatches,includeScore:r=A.includeScore}={}){const i=[];return n&&i.push(Ca),r&&i.push(Ma),e.map(o=>{const{idx:a}=o,l={item:t[a],refIndex:a};return i.length&&i.forEach(u=>{u(o,l)}),l})}class _e{constructor(t,n={},r){this.options={...A,...n},this.options.useExtendedSearch,this._keyStore=new Jo(this.options.keys),this.setCollection(t,r)}setCollection(t,n){if(this._docs=t,n&&!(n instanceof Pn))throw new Error(Ko);this._myIndex=n||Or(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){K(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const o=this._docs[r];t(o,r)&&(this.removeAt(r),r-=1,i-=1,n.push(o))}return n}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:o,sortFn:a,ignoreFieldNorm:l}=this.options;let u=te(t)?te(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return _a(u,{ignoreFieldNorm:l}),o&&u.sort(a),Dr(n)&&n>-1&&(u=u.slice(0,n)),Sa(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(t){const n=gn(t,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:o,i:a,n:l})=>{if(!K(o))return;const{isMatch:u,score:f,indices:h}=n.searchIn(o);u&&i.push({item:o,idx:a,matches:[{score:f,value:o,norm:l,indices:h}]})}),i}_searchLogical(t){const n=Hr(t,this.options),r=(l,u,f)=>{if(!l.children){const{keyId:p,searcher:y}=l,g=this._findMatches({key:this._keyStore.get(p),value:this._myIndex.getValueForItemAtKeyId(u,p),searcher:y});return g&&g.length?[{idx:f,item:u,matches:g}]:[]}const h=[];for(let p=0,y=l.children.length;p<y;p+=1){const g=l.children[p],b=r(g,u,f);if(b.length)h.push(...b);else if(l.operator===Et.AND)return[]}return h},i=this._myIndex.records,o={},a=[];return i.forEach(({$:l,i:u})=>{if(K(l)){let f=r(n,l,u);f.length&&(o[u]||(o[u]={idx:u,item:l,matches:[]},a.push(o[u])),f.forEach(({matches:h})=>{o[u].matches.push(...h)}))}}),a}_searchObjectList(t){const n=gn(t,this.options),{keys:r,records:i}=this._myIndex,o=[];return i.forEach(({$:a,i:l})=>{if(!K(a))return;let u=[];r.forEach((f,h)=>{u.push(...this._findMatches({key:f,value:a[h],searcher:n}))}),u.length&&o.push({idx:l,item:a,matches:u})}),o}_findMatches({key:t,value:n,searcher:r}){if(!K(n))return[];let i=[];if(de(n))n.forEach(({v:o,i:a,n:l})=>{if(!K(o))return;const{isMatch:u,score:f,indices:h}=r.searchIn(o);u&&i.push({score:f,key:t,value:o,idx:a,norm:l,indices:h})});else{const{v:o,n:a}=n,{isMatch:l,score:u,indices:f}=r.searchIn(o);l&&i.push({score:u,key:t,value:o,norm:a,indices:f})}return i}}_e.version="7.1.0";_e.createIndex=Or;_e.parseIndex=sa;_e.config=A;_e.parseQuery=Hr;va(wa);function Fr(e,t){const n=new _e(t.filterProperties,{keys:["title"]});if(!(e.target instanceof HTMLInputElement))return;const r=e.target.value,o=n.search(r).map(a=>a.item.key||a.item.keys.join("|"));Object.keys(t.filters).forEach(a=>{t.querySelector(`[data-details="${a}"]`).parentElement.style.display=o.includes(a)||!r?"":"none"})}function La(e,t){if(!(e.target instanceof HTMLElement))return;const n=e.target.getAttribute("data-close").replace("|","-");t.querySelector(`#filter-${n}`).reset(),t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}const bn=Math.min,je=Math.max,$t=Math.round,At=Math.floor,ne=e=>({x:e,y:e});function qr(e){return e.split("-")[0]}function Ea(e){return e.split("-")[1]}function $a(e){return e==="x"?"y":"x"}function Ra(e){return e==="y"?"height":"width"}function Ur(e){return["top","bottom"].includes(qr(e))?"y":"x"}function Pa(e){return $a(Ur(e))}function Wr(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function wr(e,t,n){let{reference:r,floating:i}=e;const o=Ur(t),a=Pa(t),l=Ra(a),u=qr(t),f=o==="y",h=r.x+r.width/2-i.width/2,p=r.y+r.height/2-i.height/2,y=r[l]/2-i[l]/2;let g;switch(u){case"top":g={x:h,y:r.y-i.height};break;case"bottom":g={x:h,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:p};break;case"left":g={x:r.x-i.width,y:p};break;default:g={x:r.x,y:r.y}}switch(Ea(t)){case"start":g[a]-=y*(n&&f?-1:1);break;case"end":g[a]+=y*(n&&f?-1:1);break}return g}const Da=async(e,t,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:a}=n,l=o.filter(Boolean),u=await(a.isRTL==null?void 0:a.isRTL(t));let f=await a.getElementRects({reference:e,floating:t,strategy:i}),{x:h,y:p}=wr(f,r,u),y=r,g={},b=0;for(let v=0;v<l.length;v++){const{name:S,fn:M}=l[v],{x:$,y:E,data:R,reset:B}=await M({x:h,y:p,initialPlacement:r,placement:y,strategy:i,middlewareData:g,rects:f,platform:a,elements:{reference:e,floating:t}});h=$??h,p=E??p,g={...g,[S]:{...g[S],...R}},B&&b<=50&&(b++,typeof B=="object"&&(B.placement&&(y=B.placement),B.rects&&(f=B.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:i}):B.rects),{x:h,y:p}=wr(f,y,u)),v=-1)}return{x:h,y:p,placement:y,strategy:i,middlewareData:g}};function Ft(){return typeof window<"u"}function Ue(e){return Gr(e)?(e.nodeName||"").toLowerCase():"#document"}function V(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function se(e){var t;return(t=(Gr(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Gr(e){return Ft()?e instanceof Node||e instanceof V(e).Node:!1}function Q(e){return Ft()?e instanceof Element||e instanceof V(e).Element:!1}function re(e){return Ft()?e instanceof HTMLElement||e instanceof V(e).HTMLElement:!1}function vr(e){return!Ft()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof V(e).ShadowRoot}function nt(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=ee(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function Ta(e){return["table","td","th"].includes(Ue(e))}function qt(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Dn(e){const t=Tn(),n=Q(e)?ee(e):e;return["transform","translate","scale","rotate","perspective"].some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function Ba(e){let t=we(e);for(;re(t)&&!He(t);){if(Dn(t))return t;if(qt(t))return null;t=we(t)}return null}function Tn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function He(e){return["html","body","#document"].includes(Ue(e))}function ee(e){return V(e).getComputedStyle(e)}function Ut(e){return Q(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function we(e){if(Ue(e)==="html")return e;const t=e.assignedSlot||e.parentNode||vr(e)&&e.host||se(e);return vr(t)?t.host:t}function Kr(e){const t=we(e);return He(t)?e.ownerDocument?e.ownerDocument.body:e.body:re(t)&&nt(t)?t:Kr(t)}function Je(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=Kr(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=V(i);if(o){const l=wn(a);return t.concat(a,a.visualViewport||[],nt(i)?i:[],l&&n?Je(l):[])}return t.concat(i,Je(i,[],n))}function wn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Vr(e){const t=ee(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=re(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=$t(n)!==o||$t(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function Bn(e){return Q(e)?e:e.contextElement}function Ne(e){const t=Bn(e);if(!re(t))return ne(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=Vr(t);let a=(o?$t(n.width):n.width)/r,l=(o?$t(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const ka=ne(0);function zr(e){const t=V(e);return!Tn()||!t.visualViewport?ka:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Oa(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==V(e)?!1:t}function Ee(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=Bn(e);let a=ne(1);t&&(r?Q(r)&&(a=Ne(r)):a=Ne(e));const l=Oa(o,n,r)?zr(o):ne(0);let u=(i.left+l.x)/a.x,f=(i.top+l.y)/a.y,h=i.width/a.x,p=i.height/a.y;if(o){const y=V(o),g=r&&Q(r)?V(r):r;let b=y,v=wn(b);for(;v&&r&&g!==b;){const S=Ne(v),M=v.getBoundingClientRect(),$=ee(v),E=M.left+(v.clientLeft+parseFloat($.paddingLeft))*S.x,R=M.top+(v.clientTop+parseFloat($.paddingTop))*S.y;u*=S.x,f*=S.y,h*=S.x,p*=S.y,u+=E,f+=R,b=V(v),v=wn(b)}}return Wr({width:h,height:p,x:u,y:f})}function kn(e,t){const n=Ut(e).scrollLeft;return t?t.left+n:Ee(se(e)).left+n}function Yr(e,t,n){n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=r.left+t.scrollLeft-(n?0:kn(e,r)),o=r.top+t.scrollTop;return{x:i,y:o}}function ja(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e;const o=i==="fixed",a=se(r),l=t?qt(t.floating):!1;if(r===a||l&&o)return n;let u={scrollLeft:0,scrollTop:0},f=ne(1);const h=ne(0),p=re(r);if((p||!p&&!o)&&((Ue(r)!=="body"||nt(a))&&(u=Ut(r)),re(r))){const g=Ee(r);f=Ne(r),h.x=g.x+r.clientLeft,h.y=g.y+r.clientTop}const y=a&&!p&&!o?Yr(a,u,!0):ne(0);return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-u.scrollLeft*f.x+h.x+y.x,y:n.y*f.y-u.scrollTop*f.y+h.y+y.y}}function Na(e){return Array.from(e.getClientRects())}function Ia(e){const t=se(e),n=Ut(e),r=e.ownerDocument.body,i=je(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=je(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+kn(e);const l=-n.scrollTop;return ee(r).direction==="rtl"&&(a+=je(t.clientWidth,r.clientWidth)-i),{width:i,height:o,x:a,y:l}}function Ha(e,t){const n=V(e),r=se(e),i=n.visualViewport;let o=r.clientWidth,a=r.clientHeight,l=0,u=0;if(i){o=i.width,a=i.height;const f=Tn();(!f||f&&t==="fixed")&&(l=i.offsetLeft,u=i.offsetTop)}return{width:o,height:a,x:l,y:u}}function Fa(e,t){const n=Ee(e,!0,t==="fixed"),r=n.top+e.clientTop,i=n.left+e.clientLeft,o=re(e)?Ne(e):ne(1),a=e.clientWidth*o.x,l=e.clientHeight*o.y,u=i*o.x,f=r*o.y;return{width:a,height:l,x:u,y:f}}function xr(e,t,n){let r;if(t==="viewport")r=Ha(e,n);else if(t==="document")r=Ia(se(e));else if(Q(t))r=Fa(t,n);else{const i=zr(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Wr(r)}function Xr(e,t){const n=we(e);return n===t||!Q(n)||He(n)?!1:ee(n).position==="fixed"||Xr(n,t)}function qa(e,t){const n=t.get(e);if(n)return n;let r=Je(e,[],!1).filter(l=>Q(l)&&Ue(l)!=="body"),i=null;const o=ee(e).position==="fixed";let a=o?we(e):e;for(;Q(a)&&!He(a);){const l=ee(a),u=Dn(a);!u&&l.position==="fixed"&&(i=null),(o?!u&&!i:!u&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||nt(a)&&!u&&Xr(e,a))?r=r.filter(h=>h!==a):i=l,a=we(a)}return t.set(e,r),r}function Ua(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const a=[...n==="clippingAncestors"?qt(t)?[]:qa(t,this._c):[].concat(n),r],l=a[0],u=a.reduce((f,h)=>{const p=xr(t,h,i);return f.top=je(p.top,f.top),f.right=bn(p.right,f.right),f.bottom=bn(p.bottom,f.bottom),f.left=je(p.left,f.left),f},xr(t,l,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function Wa(e){const{width:t,height:n}=Vr(e);return{width:t,height:n}}function Ga(e,t,n){const r=re(t),i=se(t),o=n==="fixed",a=Ee(e,!0,o,t);let l={scrollLeft:0,scrollTop:0};const u=ne(0);function f(){u.x=kn(i)}if(r||!r&&!o)if((Ue(t)!=="body"||nt(i))&&(l=Ut(t)),r){const g=Ee(t,!0,o,t);u.x=g.x+t.clientLeft,u.y=g.y+t.clientTop}else i&&f();o&&!r&&i&&f();const h=i&&!r&&!o?Yr(i,l):ne(0),p=a.left+l.scrollLeft-u.x-h.x,y=a.top+l.scrollTop-u.y-h.y;return{x:p,y,width:a.width,height:a.height}}function ln(e){return ee(e).position==="static"}function Ar(e,t){if(!re(e)||ee(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return se(e)===n&&(n=n.ownerDocument.body),n}function Jr(e,t){const n=V(e);if(qt(e))return n;if(!re(e)){let i=we(e);for(;i&&!He(i);){if(Q(i)&&!ln(i))return i;i=we(i)}return n}let r=Ar(e,t);for(;r&&Ta(r)&&ln(r);)r=Ar(r,t);return r&&He(r)&&ln(r)&&!Dn(r)?n:r||Ba(e)||n}const Ka=async function(e){const t=this.getOffsetParent||Jr,n=this.getDimensions,r=await n(e.floating);return{reference:Ga(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Va(e){return ee(e).direction==="rtl"}const za={convertOffsetParentRelativeRectToViewportRelativeRect:ja,getDocumentElement:se,getClippingRect:Ua,getOffsetParent:Jr,getElementRects:Ka,getClientRects:Na,getDimensions:Wa,getScale:Ne,isElement:Q,isRTL:Va};function Zr(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Ya(e,t){let n=null,r;const i=se(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,u){l===void 0&&(l=!1),u===void 0&&(u=1),o();const f=e.getBoundingClientRect(),{left:h,top:p,width:y,height:g}=f;if(l||t(),!y||!g)return;const b=At(p),v=At(i.clientWidth-(h+y)),S=At(i.clientHeight-(p+g)),M=At(h),E={rootMargin:-b+"px "+-v+"px "+-S+"px "+-M+"px",threshold:je(0,bn(1,u))||1};let R=!0;function B(oe){const O=oe[0].intersectionRatio;if(O!==u){if(!R)return a();O?a(!1,O):r=setTimeout(()=>{a(!1,1e-7)},1e3)}O===1&&!Zr(f,e.getBoundingClientRect())&&a(),R=!1}try{n=new IntersectionObserver(B,{...E,root:i.ownerDocument})}catch{n=new IntersectionObserver(B,E)}n.observe(e)}return a(!0),o}function Xa(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:u=!1}=r,f=Bn(e),h=i||o?[...f?Je(f):[],...Je(t)]:[];h.forEach(M=>{i&&M.addEventListener("scroll",n,{passive:!0}),o&&M.addEventListener("resize",n)});const p=f&&l?Ya(f,n):null;let y=-1,g=null;a&&(g=new ResizeObserver(M=>{let[$]=M;$&&$.target===f&&g&&(g.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var E;(E=g)==null||E.observe(t)})),n()}),f&&!u&&g.observe(f),g.observe(t));let b,v=u?Ee(e):null;u&&S();function S(){const M=Ee(e);v&&!Zr(v,M)&&n(),v=M,b=requestAnimationFrame(S)}return n(),()=>{var M;h.forEach($=>{i&&$.removeEventListener("scroll",n),o&&$.removeEventListener("resize",n)}),p==null||p(),(M=g)==null||M.disconnect(),g=null,u&&cancelAnimationFrame(b)}}const Ja=(e,t,n)=>{const r=new Map,i={platform:za,...n},o={...i.platform,_c:r};return Da(e,t,{...i,platform:o})};function Za(e){const t=e.renderRoot.querySelector(".inline-container-wrapper"),n=e.renderRoot.querySelector("[popover]");return Xa(t,n,()=>{n.matches(":popover-open")&&Ja(t,n,{strategy:"fixed"}).then(({x:i,y:o})=>{Object.assign(n.style,{left:`${i}px`,top:`${o}px`,width:`${t.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function Qr(e){e.renderRoot.querySelector("#eox-itemfilter-input-search").value="",Fr({target:{value:""}},e)}function Qa(e,t){t.inlineMode&&e.stopPropagation()}function el(e){e.inlineMode&&(e.showDropdown=!0)}function tl(e,t){t.inlineMode&&(e.stopPropagation(),t.showDropdown=!0)}function nl(e,t){t.inlineMode&&e.key==="Escape"&&t.showDropdown&&(Qr(t),t.showDropdown=!1)}function rl(e,t){t.inlineMode&&e.target instanceof HTMLElement&&e.target.tagName!=="DROPDOWN-FORM"&&e.target.tagName!=="EOX-ITEMFILTER"&&t.showDropdown&&(Qr(t),t.showDropdown=!1)}function il(e,t){var n,r,i=0,o,a,l,u,f,h,p,y=e[0],g=e[1],b=t.length;for(n=0;n<b;n++){r=0;var v=t[n],S=v.length-1;if(h=v[0],h[0]!==v[S][0]&&h[1]!==v[S][1])throw new Error("First and last coordinates in a ring must be the same");for(a=h[0]-y,l=h[1]-g,r;r<S;r++){if(p=v[r+1],u=p[0]-y,f=p[1]-g,l===0&&f===0){if(u<=0&&a>=0||a<=0&&u>=0)return 0}else if(f>=0&&l<=0||f<=0&&l>=0){if(o=Ro(a,u,l,f,0,0),o===0)return 0;(o>0&&f>0&&l<=0||o<0&&f<=0&&l>0)&&i++}h=p,l=f,a=u}}return i%2!==0}function ei(e){if(!e)throw new Error("coord is required");if(!Array.isArray(e)){if(e.type==="Feature"&&e.geometry!==null&&e.geometry.type==="Point")return[...e.geometry.coordinates];if(e.type==="Point")return[...e.coordinates]}if(Array.isArray(e)&&e.length>=2&&!Array.isArray(e[0])&&!Array.isArray(e[1]))return[...e];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function sl(e){if(Array.isArray(e))return e;if(e.type==="Feature"){if(e.geometry!==null)return e.geometry.coordinates}else if(e.coordinates)return e.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function Fe(e){return e.type==="Feature"?e.geometry:e}function J(e,t,n={}){if(!e)throw new Error("point is required");if(!t)throw new Error("polygon is required");const r=ei(e),i=Fe(t),o=i.type,a=t.bbox;let l=i.coordinates;if(a&&ol(r,a)===!1)return!1;o==="Polygon"&&(l=[l]);let u=!1;for(var f=0;f<l.length;++f){const h=il(r,l[f]);if(h===0)return!n.ignoreBoundary;h&&(u=!0)}return u}function ol(e,t){return t[0]<=e[0]&&t[1]<=e[1]&&t[2]>=e[0]&&t[3]>=e[1]}class ti{constructor(t=[],n=al){if(this.data=t,this.length=this.data.length,this.compare=n,this.length>0)for(let r=(this.length>>1)-1;r>=0;r--)this._down(r)}push(t){this.data.push(t),this.length++,this._up(this.length-1)}pop(){if(this.length===0)return;const t=this.data[0],n=this.data.pop();return this.length--,this.length>0&&(this.data[0]=n,this._down(0)),t}peek(){return this.data[0]}_up(t){const{data:n,compare:r}=this,i=n[t];for(;t>0;){const o=t-1>>1,a=n[o];if(r(i,a)>=0)break;n[t]=a,t=o}n[t]=i}_down(t){const{data:n,compare:r}=this,i=this.length>>1,o=n[t];for(;t<i;){let a=(t<<1)+1,l=n[a];const u=a+1;if(u<this.length&&r(n[u],l)<0&&(a=u,l=n[u]),r(l,o)>=0)break;n[t]=l,t=a}n[t]=o}}function al(e,t){return e<t?-1:e>t?1:0}function ni(e,t){return e.p.x>t.p.x?1:e.p.x<t.p.x?-1:e.p.y!==t.p.y?e.p.y>t.p.y?1:-1:1}function ll(e,t){return e.rightSweepEvent.p.x>t.rightSweepEvent.p.x?1:e.rightSweepEvent.p.x<t.rightSweepEvent.p.x?-1:e.rightSweepEvent.p.y!==t.rightSweepEvent.p.y?e.rightSweepEvent.p.y<t.rightSweepEvent.p.y?1:-1:1}class _r{constructor(t,n,r,i){this.p={x:t[0],y:t[1]},this.featureId=n,this.ringId=r,this.eventId=i,this.otherEvent=null,this.isLeftEndpoint=null}isSamePoint(t){return this.p.x===t.p.x&&this.p.y===t.p.y}}function cl(e,t){if(e.type==="FeatureCollection"){const n=e.features;for(let r=0;r<n.length;r++)Cr(n[r],t)}else Cr(e,t)}let _t=0,Ct=0,Mt=0;function Cr(e,t){const n=e.type==="Feature"?e.geometry:e;let r=n.coordinates;(n.type==="Polygon"||n.type==="MultiLineString")&&(r=[r]),n.type==="LineString"&&(r=[[r]]);for(let i=0;i<r.length;i++)for(let o=0;o<r[i].length;o++){let a=r[i][o][0],l=null;Ct=Ct+1;for(let u=0;u<r[i][o].length-1;u++){l=r[i][o][u+1];const f=new _r(a,_t,Ct,Mt),h=new _r(l,_t,Ct,Mt+1);f.otherEvent=h,h.otherEvent=f,ni(f,h)>0?(h.isLeftEndpoint=!0,f.isLeftEndpoint=!1):(f.isLeftEndpoint=!0,h.isLeftEndpoint=!1),t.push(f),t.push(h),a=l,Mt=Mt+1}}_t=_t+1}class ul{constructor(t){this.leftSweepEvent=t,this.rightSweepEvent=t.otherEvent}}function fl(e,t){if(e===null||t===null||e.leftSweepEvent.ringId===t.leftSweepEvent.ringId&&(e.rightSweepEvent.isSamePoint(t.leftSweepEvent)||e.rightSweepEvent.isSamePoint(t.leftSweepEvent)||e.rightSweepEvent.isSamePoint(t.rightSweepEvent)||e.leftSweepEvent.isSamePoint(t.leftSweepEvent)||e.leftSweepEvent.isSamePoint(t.rightSweepEvent)))return!1;const n=e.leftSweepEvent.p.x,r=e.leftSweepEvent.p.y,i=e.rightSweepEvent.p.x,o=e.rightSweepEvent.p.y,a=t.leftSweepEvent.p.x,l=t.leftSweepEvent.p.y,u=t.rightSweepEvent.p.x,f=t.rightSweepEvent.p.y,h=(f-l)*(i-n)-(u-a)*(o-r),p=(u-a)*(r-l)-(f-l)*(n-a),y=(i-n)*(r-l)-(o-r)*(n-a);if(h===0)return!1;const g=p/h,b=y/h;if(g>=0&&g<=1&&b>=0&&b<=1){const v=n+g*(i-n),S=r+g*(o-r);return[v,S]}return!1}function hl(e,t){t=t||!1;const n=[],r=new ti([],ll);for(;e.length;){const i=e.pop();if(i.isLeftEndpoint){const o=new ul(i);for(let a=0;a<r.data.length;a++){const l=r.data[a];if(t&&l.leftSweepEvent.featureId===i.featureId)continue;const u=fl(o,l);u!==!1&&n.push(u)}r.push(o)}else i.isLeftEndpoint===!1&&r.pop()}return n}function dl(e,t){const n=new ti([],ni);return cl(e,n),hl(n,t)}var pl=dl;function On(e,t,n={}){const{removeDuplicates:r=!0,ignoreSelfIntersections:i=!0}=n;let o=[];e.type==="FeatureCollection"?o=o.concat(e.features):e.type==="Feature"?o.push(e):(e.type==="LineString"||e.type==="Polygon"||e.type==="MultiLineString"||e.type==="MultiPolygon")&&o.push(St(e)),t.type==="FeatureCollection"?o=o.concat(t.features):t.type==="Feature"?o.push(t):(t.type==="LineString"||t.type==="Polygon"||t.type==="MultiLineString"||t.type==="MultiPolygon")&&o.push(St(t));const a=pl(fn(o),i);let l=[];if(r){const u={};a.forEach(f=>{const h=f.join(",");u[h]||(u[h]=!0,l.push(f))})}else l=a;return fn(l.map(u=>Po(u)))}function ri(e,t,n){if(e!==null)for(var r,i,o,a,l,u,f,h=0,p=0,y,g=e.type,b=g==="FeatureCollection",v=g==="Feature",S=b?e.features.length:1,M=0;M<S;M++){f=b?e.features[M].geometry:v?e.geometry:e,y=f?f.type==="GeometryCollection":!1,l=y?f.geometries.length:1;for(var $=0;$<l;$++){var E=0,R=0;if(a=y?f.geometries[$]:f,a!==null){u=a.coordinates;var B=a.type;switch(h=0,B){case null:break;case"Point":if(t(u,p,M,E,R)===!1)return!1;p++,E++;break;case"LineString":case"MultiPoint":for(r=0;r<u.length;r++){if(t(u[r],p,M,E,R)===!1)return!1;p++,B==="MultiPoint"&&E++}B==="LineString"&&E++;break;case"Polygon":case"MultiLineString":for(r=0;r<u.length;r++){for(i=0;i<u[r].length-h;i++){if(t(u[r][i],p,M,E,R)===!1)return!1;p++}B==="MultiLineString"&&E++,B==="Polygon"&&R++}B==="Polygon"&&E++;break;case"MultiPolygon":for(r=0;r<u.length;r++){for(R=0,i=0;i<u[r].length;i++){for(o=0;o<u[r][i].length-h;o++){if(t(u[r][i][o],p,M,E,R)===!1)return!1;p++}R++}E++}break;case"GeometryCollection":for(r=0;r<a.geometries.length;r++)if(ri(a.geometries[r],t)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function gl(e,t){var n,r,i,o,a,l,u,f,h,p,y=0,g=e.type==="FeatureCollection",b=e.type==="Feature",v=g?e.features.length:1;for(n=0;n<v;n++){for(l=g?e.features[n].geometry:b?e.geometry:e,f=g?e.features[n].properties:b?e.properties:{},h=g?e.features[n].bbox:b?e.bbox:void 0,p=g?e.features[n].id:b?e.id:void 0,u=l?l.type==="GeometryCollection":!1,a=u?l.geometries.length:1,i=0;i<a;i++){if(o=u?l.geometries[i]:l,o===null){if(t(null,y,f,h,p)===!1)return!1;continue}switch(o.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(t(o,y,f,h,p)===!1)return!1;break}case"GeometryCollection":{for(r=0;r<o.geometries.length;r++)if(t(o.geometries[r],y,f,h,p)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}y++}}function Rt(e,t){gl(e,function(n,r,i,o,a){var l=n===null?null:n.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return t(St(n,i,{bbox:o,id:a}),r,0)===!1?!1:void 0}var u;switch(l){case"MultiPoint":u="Point";break;case"MultiLineString":u="LineString";break;case"MultiPolygon":u="Polygon";break}for(var f=0;f<n.coordinates.length;f++){var h=n.coordinates[f],p={type:u,coordinates:h};if(t(St(p,i),r,f)===!1)return!1}})}function vn(e,t={}){const n=Fe(e);switch(!t.properties&&e.type==="Feature"&&(t.properties=e.properties),n.type){case"Polygon":return yl(n,t);case"MultiPolygon":return ml(n,t);default:throw new Error("invalid poly")}}function yl(e,t={}){const r=Fe(e).coordinates,i=t.properties?t.properties:e.type==="Feature"?e.properties:{};return ii(r,i)}function ml(e,t={}){const r=Fe(e).coordinates,i=t.properties?t.properties:e.type==="Feature"?e.properties:{},o=[];return r.forEach(a=>{o.push(ii(a,i))}),fn(o)}function ii(e,t){return e.length>1?Do(e,t):To(e[0],t)}function bl(e,t,{ignoreSelfIntersections:n=!0}={ignoreSelfIntersections:!0}){let r=!0;return Rt(e,i=>{Rt(t,o=>{if(r===!1)return!1;r=wl(i.geometry,o.geometry,n)})}),r}function wl(e,t,n){switch(e.type){case"Point":switch(t.type){case"Point":return!_l(e.coordinates,t.coordinates);case"LineString":return!Mr(t,e);case"Polygon":return!J(e,t)}break;case"LineString":switch(t.type){case"Point":return!Mr(e,t);case"LineString":return!vl(e,t,n);case"Polygon":return!Sr(t,e,n)}break;case"Polygon":switch(t.type){case"Point":return!J(t,e);case"LineString":return!Sr(e,t,n);case"Polygon":return!xl(t,e,n)}}return!1}function Mr(e,t){for(let n=0;n<e.coordinates.length-1;n++)if(Al(e.coordinates[n],e.coordinates[n+1],t.coordinates))return!0;return!1}function vl(e,t,n){return On(e,t,{ignoreSelfIntersections:n}).features.length>0}function Sr(e,t,n){for(const i of t.coordinates)if(J(i,e))return!0;return On(t,vn(e),{ignoreSelfIntersections:n}).features.length>0}function xl(e,t,n){for(const i of e.coordinates[0])if(J(i,t))return!0;for(const i of t.coordinates[0])if(J(i,e))return!0;return On(vn(e),vn(t),{ignoreSelfIntersections:n}).features.length>0}function Al(e,t,n){const r=n[0]-e[0],i=n[1]-e[1],o=t[0]-e[0],a=t[1]-e[1];return r*a-i*o!==0?!1:Math.abs(o)>=Math.abs(a)?o>0?e[0]<=n[0]&&n[0]<=t[0]:t[0]<=n[0]&&n[0]<=e[0]:a>0?e[1]<=n[1]&&n[1]<=t[1]:t[1]<=n[1]&&n[1]<=e[1]}function _l(e,t){return e[0]===t[0]&&e[1]===t[1]}function Cl(e,t,{ignoreSelfIntersections:n=!0}={}){let r=!1;return Rt(e,i=>{Rt(t,o=>{if(r===!0)return!0;r=!bl(i.geometry,o.geometry,{ignoreSelfIntersections:n})})}),r}var Ml=Cl;function Pt(e,t={}){if(e.bbox!=null&&t.recompute!==!0)return e.bbox;const n=[1/0,1/0,-1/0,-1/0];return ri(e,r=>{n[0]>r[0]&&(n[0]=r[0]),n[1]>r[1]&&(n[1]=r[1]),n[2]<r[0]&&(n[2]=r[0]),n[3]<r[1]&&(n[3]=r[1])}),n}function Dt(e,t,n={}){const r=ei(e),i=sl(t);for(let o=0;o<i.length-1;o++){let a=!1;if(n.ignoreEndVertices&&(o===0&&(a="start"),o===i.length-2&&(a="end"),o===0&&o+1===i.length-1&&(a="both")),Sl(i[o],i[o+1],r,a,typeof n.epsilon>"u"?null:n.epsilon))return!0}return!1}function Sl(e,t,n,r,i){const o=n[0],a=n[1],l=e[0],u=e[1],f=t[0],h=t[1],p=n[0]-l,y=n[1]-u,g=f-l,b=h-u,v=p*b-y*g;if(i!==null){if(Math.abs(v)>i)return!1}else if(v!==0)return!1;if(Math.abs(g)===Math.abs(b)&&Math.abs(g)===0)return r?!1:n[0]===e[0]&&n[1]===e[1];if(r){if(r==="start")return Math.abs(g)>=Math.abs(b)?g>0?l<o&&o<=f:f<=o&&o<l:b>0?u<a&&a<=h:h<=a&&a<u;if(r==="end")return Math.abs(g)>=Math.abs(b)?g>0?l<=o&&o<f:f<o&&o<=l:b>0?u<=a&&a<h:h<a&&a<=u;if(r==="both")return Math.abs(g)>=Math.abs(b)?g>0?l<o&&o<f:f<o&&o<l:b>0?u<a&&a<h:h<a&&a<u}else return Math.abs(g)>=Math.abs(b)?g>0?l<=o&&o<=f:f<=o&&o<=l:b>0?u<=a&&a<=h:h<=a&&a<=u;return!1}function Ll(e,t){var n=Fe(e),r=Fe(t),i=n.type,o=r.type;switch(i){case"Point":switch(o){case"MultiPoint":return El(n,r);case"LineString":return Dt(n,r,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return J(n,r,{ignoreBoundary:!0});default:throw new Error("feature2 "+o+" geometry not supported")}case"MultiPoint":switch(o){case"MultiPoint":return $l(n,r);case"LineString":return Rl(n,r);case"Polygon":case"MultiPolygon":return Pl(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"LineString":switch(o){case"LineString":return Dl(n,r);case"Polygon":case"MultiPolygon":return Tl(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"Polygon":switch(o){case"Polygon":case"MultiPolygon":return Bl(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}default:throw new Error("feature1 "+i+" geometry not supported")}}function El(e,t){var n,r=!1;for(n=0;n<t.coordinates.length;n++)if(oi(t.coordinates[n],e.coordinates)){r=!0;break}return r}function $l(e,t){for(var n=0;n<e.coordinates.length;n++){for(var r=!1,i=0;i<t.coordinates.length;i++)oi(e.coordinates[n],t.coordinates[i])&&(r=!0);if(!r)return!1}return!0}function Rl(e,t){for(var n=!1,r=0;r<e.coordinates.length;r++){if(!Dt(e.coordinates[r],t))return!1;n||(n=Dt(e.coordinates[r],t,{ignoreEndVertices:!0}))}return n}function Pl(e,t){for(var n=!0,r=!1,i=0;i<e.coordinates.length;i++){if(r=J(e.coordinates[i],t),!r){n=!1;break}r=J(e.coordinates[i],t,{ignoreBoundary:!0})}return n&&r}function Dl(e,t){for(var n=0;n<e.coordinates.length;n++)if(!Dt(e.coordinates[n],t))return!1;return!0}function Tl(e,t){var n=Pt(t),r=Pt(e);if(!si(n,r))return!1;for(var i=!1,o=0;o<e.coordinates.length;o++){if(!J(e.coordinates[o],t))return!1;if(i||(i=J(e.coordinates[o],t,{ignoreBoundary:!0})),!i&&o<e.coordinates.length-1){var a=kl(e.coordinates[o],e.coordinates[o+1]);i=J(a,t,{ignoreBoundary:!0})}}return i}function Bl(e,t){var n=Pt(e),r=Pt(t);if(!si(r,n))return!1;for(var i=0;i<e.coordinates[0].length;i++)if(!J(e.coordinates[0][i],t))return!1;return!0}function si(e,t){return!(e[0]>t[0]||e[2]<t[2]||e[1]>t[1]||e[3]<t[3])}function oi(e,t){return e[0]===t[0]&&e[1]===t[1]}function kl(e,t){return[(e[0]+t[0])/2,(e[1]+t[1])/2]}var Ol=Ll;const jl=(e,t)=>t?Ml(e,t):!0,Nl=(e,t)=>t?Ol(e,t):!0;function Il(e,t="highlight",n="title"){const r=(o,a,l)=>{const u=a.split(".");let f;for(f=0;f<u.length-1;f++)o=o[u[f]];o[u[f]]=l},i=(o,a=[])=>{let l="",u=0;return a.forEach(f=>{const h=f[1]+1;l+=[o.substring(u,f[0]),`<mark class="${t}">`,o.substring(f[0],h),"</mark>"].join(""),u=h}),l+=o.substring(u),l};return e.filter(({matches:o})=>o&&o.length).map(({item:o,matches:a})=>{const l={...o};return a.forEach(u=>{u.key===n&&r(l,u.key,i(u.value,u.indices))}),l})}let ai;const Hl=(e,t)=>{ai=new _e(e,{threshold:.4,distance:50,includeMatches:!0,useExtendedSearch:!0,...t})},Fl=async(e,t,n)=>{const r=Object.entries(t).filter(([,l])=>l.type==="text"||l.type==="select"||l.type==="multiselect").reduce((l,[u,f])=>{const h="$or",p=[],y=(g,b)=>{const v={};f.type==="text"?v[g]=`${b}`:v[u]=`="${g}"`,p.push(v)};return Object.entries(f.state).filter(([,g])=>g).forEach(([g,b])=>y(g,b)),p.length>0&&l.push({[h]:p}),l},[]);let i;if(!(r.length>0)&&n.matchAllWhenEmpty!==!1)i=e;else{const l={$and:[...r]},u=ai.search(l);i=n.enableHighlighting?Il(u,"highlight",n.titleProperty):u.map(f=>f.item)}const o=Object.entries(t).filter(([,l])=>l.type==="range").reduce((l,[u,f])=>(l[u]={min:f.state.min,max:f.state.max,format:f.format},l),{});if(Object.keys(o).length>0){const l=[];for(let u=0;u<i.length;u++){const f={};for(const[h,p]of Object.entries(o)){const y=b=>p.format==="date"?Xe(b).unix():b,g=Ze(h,i[u]);g?Array.isArray(g)?f[h]=o[h].min<=y(g[1])&&y(g[0])<=o[h].max:y(g)>=o[h].min&&y(g)<=o[h].max?f[h]=!0:f[h]=!1:f[h]=!0}Object.values(f).every(h=>!!h)&&l.push(i[u])}i=[...l]}const a=Object.entries(t).filter(([,l])=>l.type==="spatial").reduce((l,[u,f])=>(l[u]={geometry:f.state.geometry,mode:f.state.mode},l),{});if(Object.values(a).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let u=0;u<i.length;u++){const f={};for(const h of Object.keys(a)){const p=Ze(h,i[u]),y=a[h].mode||"within";p&&(y==="within"?Nl(p,a[h].geometry):jl(p,a[h].geometry))?f[h]=!0:f[h]=!1}Object.values(f).every(h=>!!h)&&l.push(i[u])}i=[...l]}return i};function ql(e,t){return[{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...e&&{format:"GeoJSON"},...e&&{url:t}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]},{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}}]}function Wt(e){if(!e.dirty)return null;switch(e.type){case"multiselect":for(const n in e.state)e.state.hasOwnProperty(n)&&(e.state[n]=!1);break;case"range":e.state.min=e.min,e.state.max=e.max;break;case"select":for(const n in e.state)e.state.hasOwnProperty(n)&&(e.state[n]=!1);break;case"spatial":e.state.geometry=void 0;break;case"text":e.keys.forEach(n=>{e.state[n]=void 0});break}return delete e.stringifiedState,delete e.dirty,e}function Lr(e,t){return e*2+t}function Ul(e){return Object.keys(e).map(t=>({title:C`${e[t].title||e[t].key}:
        <strong>${e[t].stringifiedState}</strong>`,key:t})).filter(t=>e[t.key].dirty)}function xn(e){return Object.values(e).map(t=>t.dirty).filter(t=>t).length>0}async function Wl(e,t,n){return await(await fetch(`${n.externalFilter(e,t)}`)).json()}function li(e,t,n){let r;if(e.detail?r=e.detail.target:r=e.target,r!=null&&r.classList.contains("details-filter")){if(!r.open||t!=null&&t.expandMultipleFilters)return;n.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(i=>{const o=i.shadowRoot.querySelector(".details-filter");o&&o!==r&&o.removeAttribute("open")})}else{if(!(r!=null&&r.open)||t!=null&&t.expandMultipleResults)return;n.querySelectorAll("details").forEach(i=>{i!==r&&i.removeAttribute("open")})}}function Ze(e,t){return e!=null&&e.includes(".")?e.split(".").reduce((n,r)=>n&&n[r],t):t[e]}var P,ci,An,_n,ui,Cn,Mn,fi,Sn,hi,di;class Gl extends ie{constructor(){super();q(this,P);this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=L(this,P,ui).bind(this),this._handleKeyDown=L(this,P,Cn).bind(this)}static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}set showDropdown(n){this.renderRoot.querySelector("[popover]").togglePopover(n)}get showDropdown(){var n;return(n=this.renderRoot.querySelector("[popover]"))==null?void 0:n.matches(":popover-open")}connectedCallback(){super.connectedCallback(),this.inlineMode&&L(this,P,An).call(this)}disconnectedCallback(){this.inlineMode&&L(this,P,_n).call(this),super.disconnectedCallback()}_overlayCleanup(){}updateInline(){this.inlineMode&&this.requestUpdate()}updated(n){n.has("inlineMode")&&(this.inlineMode?L(this,P,An).call(this):L(this,P,_n).call(this))}render(){return C`
      <style>
        ${!this.unstyled&&tt}
      </style>
      ${this.inlineMode?C`
            <div
              class="inline-container-wrapper"
              @click="${L(this,P,Mn)}"
            >
              <div class="inline-container" part="container">
                <div class="chip-container">
                  <div class="chip-wrapper">
                    <eox-itemfilter-chips
                      .items=${Ul(this.filters)}
                      .controller=${{remove:n=>L(this,P,hi).call(this,n)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${N(xn(this.filters),()=>C`
                      <span
                        class="chip-close"
                        @click=${()=>this.dispatchEvent(new CustomEvent("reset"))}
                      ></span>
                    `)}
                </div>
                <div
                  class="input-container ${xn(this.filters)?"dirty-filter-input":""}"
                >
                  <input
                    autocomplete="off"
                    id="eox-itemfilter-input-search"
                    type="text"
                    @click="${L(this,P,Mn)}"
                    @focus="${L(this,P,fi)}"
                    @input="${L(this,P,di)}"
                    placeholder="Search and add filter"
                    aria-haspopup="true"
                    aria-expanded="${this.showDropdown}"
                  />
                </div>
              </div>
              <div popover="manual">
                <div
                  class="inline-content"
                  slot="content"
                  @keydown="${L(this,P,Cn)}"
                  @click="${L(this,P,Sn)}"
                  @focus="${L(this,P,Sn)}"
                >
                  <slot name="section"></slot>
                </div>
              </div>
            </div>
          `:C`<slot name="section"></slot>`}
    `}}P=new WeakSet,ci=function(){setTimeout(()=>this._overlayCleanup=Za(this))},An=function(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),L(this,P,ci).call(this)},_n=function(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()},ui=function(n){rl(n,this)},Cn=function(n){nl(n,this)},Mn=function(n){tl(n,this)},fi=function(){el(this)},Sn=function(n){Qa(n,this)},hi=function(n){La(n,this)},di=function(n){Fr(n,this)};customElements.define("eox-itemfilter-container",Gl);function Kl(e){const t=e.renderRoot.querySelector("input[type='text']");t.value="",Wt(e.filterObject),e.requestUpdate()}function Vl(e){const t=e.renderRoot.querySelector("input[type='text']");e.isValid=t.checkValidity(),e.filterObject.keys.forEach(n=>{e.filterObject.state[n]=t.value}),e.filterObject.dirty=!0,e.filterObject.stringifiedState=t.value,e.dispatchEvent(new CustomEvent("filter")),t.value===""&&e.reset()}const Ln="ddd, D MMM YYYY HH:mm:ss";function zl(e){if(e.filterObject=Wt(e.filterObject),e.filterObject){const t=e.querySelector("tc-range-slider"),n=e.filterObject.min,r=e.filterObject.max;t.value1!==n&&(t.value1=n),t.value2!==r&&(t.value2=r)}e.requestUpdate()}function Yl(e,t){const[n,r]=e.detail.values;(n!==t.filterObject.state.min||r!==t.filterObject.state.max)&&([t.filterObject.state.min,t.filterObject.state.max]=[n,r],t.filterObject.dirty=!0),t.filterObject.dirty&&(t.filterObject.stringifiedState=t.filterObject.format==="date"?`${Xe.unix(n).format(Ln)} - ${Xe.unix(r).format(Ln)}`:`${n} - ${r}`),t.dispatchEvent(new CustomEvent("filter")),n===t.filterObject.min&&r===t.filterObject.max?t.reset():t.requestUpdate()}function Xl(e,t,n){const r=n.filterObject.format==="date",i=n.filterObject.state[e],o=r?Xe.unix(i).format(Ln):i;return C`<div class="range-${t}">${o}</div>`}function Jl(e){Zl(-1,e),Wt(e.filterObject),e.requestUpdate()}function Zl(e,t){t.selectedItems=[],jn(t),gi(t)}function pi(e,t){const n=t.selectedItems.indexOf(e);n>=0?t.selectedItems=t.selectedItems.filter((r,i)=>i!==n):t.type==="multiselect"?t.selectedItems=[...t.selectedItems,e]:(t.selectedItems=[e],t.showSuggestions=!1),jn(t),gi(t)}function Ql(e,t){e.target instanceof HTMLInputElement&&(t.query=e.target.value,t.showSuggestions=!0)}function ec(e,t){switch(e.key){case"ArrowDown":t.highlightedIndex=Math.min(t.highlightedIndex+1,t.filteredSuggestions.length-1);break;case"ArrowUp":t.highlightedIndex=Math.max(t.highlightedIndex-1,0);break;case"Enter":t.highlightedIndex>=0&&pi(t.filteredSuggestions[t.highlightedIndex],t);break;case"Escape":t.showSuggestions=!1;break}}function tc(e,t){(e.has("suggestions")||e.has("query"))&&jn(t)}function nc(e,t){var r;const n=((r=e.filterObject)==null?void 0:r.sort)||((i,o)=>i.localeCompare(o));return t.sort(n).map(i=>i)}function jn(e){var n,r,i;let t;e.query&&(t=new _e(e.suggestions,{threshold:.4}).search(e.query).map(a=>a.item)),e.filteredSuggestions=nc(e,t||e.suggestions),(n=e.filterObject)!=null&&n.filterKeys&&(e.filteredSuggestions=(r=e.filterObject)==null?void 0:r.filterKeys.map(o=>`${o}`),e.filterObject.state=(i=e.filterObject)==null?void 0:i.filterKeys.map(o=>`${o}`).reduce((o,a)=>(a in o||(o[a]=void 0),o),e.filterObject.state)),e.highlightedIndex=-1}function gi(e){Object.keys(e.filterObject.state).forEach(t=>{e.filterObject.state[t]=e.selectedItems.includes(t)}),e.filterObject.stringifiedState=Object.keys(e.filterObject.state).filter(t=>e.filterObject.state[t]).join(", ")||"",e.filterObject.dirty=e.filterObject.stringifiedState.length>0,e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}function rc(e){Wt(e.filterObject),e.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),e.requestUpdate()}function ic(e){e.renderRoot.querySelector("#eox-map").innerHTML="",yi(e)}function sc(e,t){t.filterObject.state.mode=e;const n=new CustomEvent("filter",{detail:{[t.filterObject.key]:{}}});t.dispatchEvent(n)}function yi(e){const t=e.renderRoot.querySelector("#eox-map");t.innerHTML===""&&(t.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const n=e.geometry&&oc(e.geometry),r=ql(e.geometry,n);e.eoxMap=e.renderRoot.querySelector("eox-map"),setTimeout(()=>{e.eoxMap.layers=r;const i=o=>{const a=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:o.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});e.dispatchEvent(a)};e.eoxMap.interactions.drawInteraction.on("drawend",o=>{i(o.feature),e.eoxMap.removeInteraction("drawInteraction")}),e.eoxMap.interactions.drawInteraction_modify.on("modifyend",o=>{i(o.features.getArray()[0])})},1e3)}function oc(e){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:e}]}))}`}var Ot;class ac extends ie{constructor(){super();q(this,Ot,()=>{Vl(this)});Ye(this,"debouncedInputHandler",Ht(G(this,Ot),500,{leading:!0}));this.filterObject={},this.unstyled=!1,this.tabIndex=0,this.isValid=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}reset(){Kl(this)}createRenderRoot(){return this}render(){return N(this.filterObject,()=>{var n;return C`
        <style></style>
        <div class="text-container">
          <div class="text-container-wrapper">
            <input
              type="text"
              placeholder=${this.filterObject.placeholder}
              data-cy="search"
              class="text-input"
              part="input-search"
              value="${Object.values(this.filterObject.state)[0]}"
              tabindex=${this.tabIndex}
              pattern="${((n=this.filterObject.validation)==null?void 0:n.pattern)||".*"}"
              @input="${this.debouncedInputHandler}"
              @click=${r=>r.stopPropagation()}
            />
          </div>
        </div>
        <small class="error-validation"
          >${this.filterObject.validation&&this.isValid===!1?this.filterObject.validation.message:""}</small
        >
      `})}}Ot=new WeakMap;customElements.define("eox-itemfilter-text",ac);function lc(e,t,n){return e.filter(r=>{const i=r[n.config.aggregateResults];let o;return n.filters[n.config.aggregateResults]&&(o=Object.keys(n.filters[n.config.aggregateResults]).filter(l=>n.filters[n.config.aggregateResults].state[l])),(o!=null&&o.length?o.includes(t):!0)&&Array.isArray(i)?i.includes(t):i===t})}function cc(e,t){return C`
    <details
      class="details-results"
      @toggle=${t.handleAccordion}
      ?open=${t.config.expandResults||xe}
    >
      <summary>
        <span class="title">
          ${e}
          <span class="count"
            >${t.aggregateResults(t.results,e).length}</span
          >
        </span>
      </summary>
      <div>
        ${mi(t,e)}
      </div>
    </details>
  `}function mi(e,t){const n=e.results,r=t?e.aggregateResults(n,t):n,i=e.config,o=a=>{var l;return((l=e.selectedResult)==null?void 0:l[i.idProperty])===a[i.idProperty]?"highlighted":xe};return fr`
    ${e.resultType==="cards"?Oe("<eox-layout fill-grid>"):Oe("<ul>")}
      ${Lo(r,a=>a.id,a=>fr`
        ${e.resultType==="cards"?Oe("<eox-layout-item"):Oe("<li")}
            class=${o(a)}
            @click=${()=>{e.selectedResult===a?e.selectedResult=null:e.selectedResult=a,e.dispatchEvent(new CustomEvent("result",{detail:e.selectedResult}))}}
          >
            <span id="${a.id}">
              ${N(i.subTitleProperty||i.imageProperty,()=>C`
                  ${Ze(i.imageProperty,a)?C`
                        <img
                          class="image"
                          src="${Ze(i.imageProperty,a)}"
                        />
                      `:C`
                        <svg
                          class="image"
                          width="100%"
                          height="100%"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="100%"
                            height="100%"
                            fill="var(--primary-color)"
                          />
                        </svg>
                      `}
                  <div class="title-container">
                    <span class="title"
                      >${vt(a[i.titleProperty])}</span
                    >
                    <span class="subtitle"
                      >${vt(a[i.subTitleProperty])}</span
                    >
                  </div>
                `,()=>C`
                  <span class="title"
                    >${vt(a[i.titleProperty])}</span
                  >
                `)}
            </span>
            ${N(e.enableResultAction,()=>C`
                <span
                  class="result-action"
                  @click=${l=>{l.stopPropagation(),e.dispatchEvent(new CustomEvent("click:result-action",{detail:a}))}}
                  >${vt(e.resultActionIcon)}</span
                >
              `)}
          </li>
        `)}
    ${e.resultType==="cards"?Oe("</eox-layout>"):Oe("</ul>")}
  `}var Re,En,bi;class uc extends ie{constructor(){super();q(this,Re);this.config=null,this.results=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list",this.resultActionIcon=void 0}static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Array},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String},resultActionIcon:{attribute:!1,type:String}}}aggregateResults(n,r){return lc(n,r,this)}createRenderRoot(){return this}handleAccordion(n){li(n,this.config,this)}render(){return C`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${N(this.results.length<1,()=>C`<small class="no-results">No matching items</small>`,()=>xe)}
          <ul id="results" part="results">
            ${N(this.config.aggregateResults,()=>It(this.resultAggregation.filter(n=>this.aggregateResults(this.results,n).length),n=>C`${N(this.aggregateResults(this.results,n).length===1&&this.config.autoSpreadSingle,()=>C`<div style="margin-left: -8px">
                          ${L(this,Re,En).call(this,n)}
                        </div>`,()=>L(this,Re,bi).call(this,n))}`),()=>L(this,Re,En).call(this))}
          </ul>
        </div>
      </section>
    `}}Re=new WeakSet,En=function(n){return mi(this,n)},bi=function(n){return cc(n,this)};customElements.define("eox-itemfilter-results",uc);var ve,vi,xi,Ai;class wi extends ie{constructor(){super();q(this,ve);Ye(this,"debouncedInputHandler",Ht(L(this,ve,Ai),500,{leading:!0}));this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(n){tc(n,this)}reset(){Jl(this)}firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(n=>this.filterObject.state[n]?n:null).filter(n=>!!n),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}render(){const n=this.type.includes("multi")?"checkbox":"radio",r=this.filteredSuggestions.length>5?"select-overflow":xe;return C`
      <style>
        ${!this.unstyled&&tt}
        ${!this.unstyled&&Eo}
        ${!this.unstyled&&$o}
      </style>
      ${N(this.suggestions.length>10,()=>C`<div class="autocomplete-container">
            <div class="autocomplete-container-wrapper">
              <input
                autocomplete="off"
                tabindex=${this.tabIndex}
                class="autocomplete-input"
                type="text"
                .value=${this.query}
                placeholder="${this.filterObject.placeholder||""}"
                @input=${L(this,ve,vi)}
                @keydown=${L(this,ve,xi)}
                @blur=${()=>this.showSuggestions=!1}
                @focus=${()=>this.showSuggestions=!0}
              />
            </div>
          </div>`)}
      <div class="select-container ${r}">
        <ul class="${this.type}">
          ${this.filteredSuggestions.map(i=>C`
              <li
                data-identifier="${i.toString().toLowerCase()}"
                data-title="${i}"
              >
                <label>
                  <input
                    type="${n}"
                    name=${i}
                    .checked=${this.selectedItems.includes(i)}
                    @change=${()=>this.debouncedInputHandler(i)}
                    @keydown=${o=>{o.key===" "&&this.inlineMode&&this.debouncedInputHandler(i)}}
                    tabindex=${this.tabIndex+1}
                  />
                  <span class="title">${i}</span>
                </label>
              </li>
            `)}
        </ul>
      </div>
    `}}ve=new WeakSet,vi=function(n){Ql(n,this)},xi=function(n){ec(n,this)},Ai=function(n){pi(n,this)},Ye(wi,"properties",{filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}});customElements.define("eox-itemfilter-select",wi);var Pe,Ci,$n;class _i extends ie{constructor(){super();q(this,Pe);this.filterObject={},this.tabIndex=0,this.inputHandler=L(this,Pe,Ci).bind(this),this.debouncedInputHandler=Ht(this.inputHandler,500,{leading:!1})}reset(){zl(this)}createRenderRoot(){return this}render(){return N(this.filterObject,()=>C`
        ${L(this,Pe,$n).call(this,"min","before")}
        <tc-range-slider
          min="${this.filterObject.min}"
          max="${this.filterObject.max}"
          value1="${this.filterObject.state.min||this.filterObject.min}"
          value2="${this.filterObject.state.max||this.filterObject.max}"
          step="${this.filterObject.step||1}"
          @change=${this.debouncedInputHandler}
        ></tc-range-slider>
        ${L(this,Pe,$n).call(this,"max","after")}
      `)}}Pe=new WeakSet,Ci=function(n){Yl(n,this)},$n=function(n,r){return Xl(n,r,this)},Ye(_i,"properties",{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number}});customElements.define("eox-itemfilter-range",_i);var jt,Mi;class fc extends ie{constructor(){super();q(this,jt);this.filterObject={},this.tabIndex=0}static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}reset(){rc(this)}createRenderRoot(){return this}render(){return N(this.filterObject,()=>{var n;return C`
        <form style="display: inline">
          ${It(["intersects","within"],r=>C`
              <label>
                <input
                  tabindex=${this.tabIndex}
                  type="radio"
                  name="mode"
                  .checked="${(this.filterObject.state.mode||"")===r||xe}"
                  value="${r}"
                  @click=${()=>L(this,jt,Mi).call(this,r)}
                />
                <small>${r} filter geometry</small>
              </label>
            `)}
        </form>
        <eox-itemfilter-spatial-filter
          exportparts="map: spatial-filter-map"
          .geometry="${(n=this.filterObject.state)==null?void 0:n.geometry}"
          @filter="${r=>{this.filterObject.state.geometry=r.detail.geometry,this.filterObject.dirty=!0,this.filterObject.stringifiedState="Polygon",this.dispatchEvent(new CustomEvent("filter"))}}"
        ></eox-itemfilter-spatial>
      `})}}jt=new WeakSet,Mi=function(n){sc(n,this)};customElements.define("eox-itemfilter-spatial",fc);var Nt,Si;class hc extends ie{constructor(){super();q(this,Nt);this.geometry=null,this.eoxMap=null}static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}firstUpdated(){L(this,Nt,Si).call(this)}reset(){ic(this)}render(){return C`<div id="eox-map"></div>`}}Nt=new WeakSet,Si=function(){yi(this)};customElements.define("eox-itemfilter-spatial-filter",hc);function dc(e,t){t.renderRoot.querySelectorAll(".chip").forEach(n=>{n.classList.remove("highlighted")}),e.target instanceof HTMLElement&&e.target.classList.add("highlighted"),t.requestUpdate()}function pc(e,t){const{code:n,target:r}=e;r instanceof HTMLElement&&r.id!=="eox-itemfilter-input-search"||t.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(n)||(n==="Space"&&e.preventDefault(),["Escape","Space","Enter"].includes(n)||e.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(n)&&gc(n,e.target.value??"",t))}function gc(e,t,n){const r=n.renderRoot.querySelector(".chip.highlighted");if((e==="Escape"||t)&&r&&r.classList.remove("highlighted"),e==="Backspace"&&!t){if(n.items.length){r&&(r.querySelector(".chip-item-close").click(),n.items.splice(Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(r),1));const i=n.renderRoot.querySelectorAll(".chip")[n.renderRoot.querySelectorAll(".chip").length-1];i.classList.contains("highlighted")||i.classList.add("highlighted"),n.requestUpdate()}n._dispatchEvent()}if((e==="ArrowLeft"||e==="ArrowRight")&&!t){if(n.renderRoot.querySelectorAll(".chip").length<1)return;let i=0;const o=n.renderRoot.querySelector(".chip.highlighted");o&&(i=Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(o),o.classList.remove("highlighted")),i=i+(e==="ArrowLeft"?-1:1),e==="ArrowLeft"&&i<0&&(i=n.renderRoot.querySelectorAll(".chip").length-1),e==="ArrowRight"&&i>n.renderRoot.querySelectorAll(".chip").length-1&&(i=0),Array.from(n.renderRoot.querySelectorAll(".chip"))[i].classList.add("highlighted")}}var De,Rn,Li;class yc extends ie{constructor(){super();q(this,De);this.items={},this.controller={}}static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",L(this,De,Rn).bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",L(this,De,Rn).bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}render(){return C`
      <style>
        ${tt}
      </style>
      <span class="chip-container">
        ${It(this.items,n=>C`
            <span class="chip" @click=${L(this,De,Li).bind(this)}>
              <span class="chip-title">${n.title}</span>
                <span
                  class="chip-item-close hidden"
                  data-close=${n.key}
                  @click=${r=>{r.stopPropagation(),this.controller.remove(r),this.requestUpdate()}}
                ></span>
            </span>
            </span>
          `)}
      </span>
    `}}De=new WeakSet,Rn=function(n){pc(n,this)},Li=function(n){dc(n,this)};customElements.define("eox-itemfilter-chips",yc);const mc=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),Er=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","expandMultipleFilters","expandResults","expandMultipleResults","items"];var bc=200,Nn="__lodash_hash_undefined__",wc=1/0,vc="[object Function]",xc="[object GeneratorFunction]",Ac=/[\\^$.*+?()[\]{}|]/g,_c=/^\[object .+?Constructor\]$/,Cc=typeof be=="object"&&be&&be.Object===Object&&be,Mc=typeof self=="object"&&self&&self.Object===Object&&self,In=Cc||Mc||Function("return this")();function Sc(e,t){var n=e?e.length:0;return!!n&&Ec(e,t,0)>-1}function Lc(e,t,n,r){for(var i=e.length,o=n+-1;++o<i;)if(t(e[o],o,e))return o;return-1}function Ec(e,t,n){if(t!==t)return Lc(e,$c,n);for(var r=n-1,i=e.length;++r<i;)if(e[r]===t)return r;return-1}function $c(e){return e!==e}function Rc(e,t){return e.has(t)}function Pc(e,t){return e==null?void 0:e[t]}function Dc(e){var t=!1;if(e!=null&&typeof e.toString!="function")try{t=!!(e+"")}catch{}return t}function Ei(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var Tc=Array.prototype,Bc=Function.prototype,$i=Object.prototype,cn=In["__core-js_shared__"],$r=function(){var e=/[^.]+$/.exec(cn&&cn.keys&&cn.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Ri=Bc.toString,Hn=$i.hasOwnProperty,kc=$i.toString,Oc=RegExp("^"+Ri.call(Hn).replace(Ac,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),jc=Tc.splice,Nc=Fn(In,"Map"),un=Fn(In,"Set"),Qe=Fn(Object,"create");function $e(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Ic(){this.__data__=Qe?Qe(null):{}}function Hc(e){return this.has(e)&&delete this.__data__[e]}function Fc(e){var t=this.__data__;if(Qe){var n=t[e];return n===Nn?void 0:n}return Hn.call(t,e)?t[e]:void 0}function qc(e){var t=this.__data__;return Qe?t[e]!==void 0:Hn.call(t,e)}function Uc(e,t){var n=this.__data__;return n[e]=Qe&&t===void 0?Nn:t,this}$e.prototype.clear=Ic;$e.prototype.delete=Hc;$e.prototype.get=Fc;$e.prototype.has=qc;$e.prototype.set=Uc;function We(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Wc(){this.__data__=[]}function Gc(e){var t=this.__data__,n=Gt(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():jc.call(t,n,1),!0}function Kc(e){var t=this.__data__,n=Gt(t,e);return n<0?void 0:t[n][1]}function Vc(e){return Gt(this.__data__,e)>-1}function zc(e,t){var n=this.__data__,r=Gt(n,e);return r<0?n.push([e,t]):n[r][1]=t,this}We.prototype.clear=Wc;We.prototype.delete=Gc;We.prototype.get=Kc;We.prototype.has=Vc;We.prototype.set=zc;function Ge(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Yc(){this.__data__={hash:new $e,map:new(Nc||We),string:new $e}}function Xc(e){return Kt(this,e).delete(e)}function Jc(e){return Kt(this,e).get(e)}function Zc(e){return Kt(this,e).has(e)}function Qc(e,t){return Kt(this,e).set(e,t),this}Ge.prototype.clear=Yc;Ge.prototype.delete=Xc;Ge.prototype.get=Jc;Ge.prototype.has=Zc;Ge.prototype.set=Qc;function Tt(e){var t=-1,n=e?e.length:0;for(this.__data__=new Ge;++t<n;)this.add(e[t])}function eu(e){return this.__data__.set(e,Nn),this}function tu(e){return this.__data__.has(e)}Tt.prototype.add=Tt.prototype.push=eu;Tt.prototype.has=tu;function Gt(e,t){for(var n=e.length;n--;)if(cu(e[n][0],t))return n;return-1}function nu(e){if(!Pi(e)||ou(e))return!1;var t=uu(e)||Dc(e)?Oc:_c;return t.test(au(e))}function ru(e,t,n){var r=-1,i=Sc,o=e.length,a=!0,l=[],u=l;if(o>=bc){var f=iu(e);if(f)return Ei(f);a=!1,i=Rc,u=new Tt}else u=l;e:for(;++r<o;){var h=e[r],p=h;if(h=h!==0?h:0,a&&p===p){for(var y=u.length;y--;)if(u[y]===p)continue e;l.push(h)}else i(u,p,n)||(u!==l&&u.push(p),l.push(h))}return l}var iu=un&&1/Ei(new un([,-0]))[1]==wc?function(e){return new un(e)}:fu;function Kt(e,t){var n=e.__data__;return su(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Fn(e,t){var n=Pc(e,t);return nu(n)?n:void 0}function su(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function ou(e){return!!$r&&$r in e}function au(e){if(e!=null){try{return Ri.call(e)}catch{}try{return e+""}catch{}}return""}function lu(e){return e&&e.length?ru(e):[]}function cu(e,t){return e===t||e!==e&&t!==t}function uu(e){var t=Pi(e)?kc.call(e):"";return t==vc||t==xc}function Pi(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function fu(){}var hu=lu;const Di=Rr(hu);var Bt={exports:{}};Bt.exports;(function(e,t){var n=200,r="Expected a function",i="__lodash_hash_undefined__",o=1,a=2,l=9007199254740991,u="[object Arguments]",f="[object Array]",h="[object Boolean]",p="[object Date]",y="[object Error]",g="[object Function]",b="[object GeneratorFunction]",v="[object Map]",S="[object Number]",M="[object Object]",$="[object Promise]",E="[object RegExp]",R="[object Set]",B="[object String]",oe="[object Symbol]",O="[object WeakMap]",Z="[object ArrayBuffer]",U="[object DataView]",rt="[object Float32Array]",Ke="[object Float64Array]",pe="[object Int8Array]",qn="[object Int16Array]",W="[object Int32Array]",Te="[object Uint8Array]",it="[object Uint8ClampedArray]",Oi="[object Uint16Array]",ji="[object Uint32Array]",Ni=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ii=/^\w*$/,Hi=/^\./,Fi=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,qi=/[\\^$.*+?()[\]{}|]/g,Ui=/\\(\\)?/g,Wi=/^\[object .+?Constructor\]$/,Gi=/^(?:0|[1-9]\d*)$/,D={};D[rt]=D[Ke]=D[pe]=D[qn]=D[W]=D[Te]=D[it]=D[Oi]=D[ji]=!0,D[u]=D[f]=D[Z]=D[h]=D[U]=D[p]=D[y]=D[g]=D[v]=D[S]=D[M]=D[E]=D[R]=D[B]=D[O]=!1;var Un=typeof be=="object"&&be&&be.Object===Object&&be,Ki=typeof self=="object"&&self&&self.Object===Object&&self,ge=Un||Ki||Function("return this")(),Wn=t&&!t.nodeType&&t,Gn=Wn&&!0&&e&&!e.nodeType&&e,Vi=Gn&&Gn.exports===Wn,Kn=Vi&&Un.process,Vn=function(){try{return Kn&&Kn.binding("util")}catch{}}(),zn=Vn&&Vn.isTypedArray;function zi(s,c){for(var d=-1,m=s?s.length:0,x=Array(m);++d<m;)x[d]=c(s[d],d,s);return x}function Yi(s,c){for(var d=-1,m=c.length,x=s.length;++d<m;)s[x+d]=c[d];return s}function Xi(s,c){for(var d=-1,m=s?s.length:0;++d<m;)if(c(s[d],d,s))return!0;return!1}function Ji(s){return function(c){return c==null?void 0:c[s]}}function Zi(s,c){for(var d=-1,m=Array(s);++d<s;)m[d]=c(d);return m}function Qi(s){return function(c){return s(c)}}function es(s,c){return s==null?void 0:s[c]}function Vt(s){var c=!1;if(s!=null&&typeof s.toString!="function")try{c=!!(s+"")}catch{}return c}function ts(s){var c=-1,d=Array(s.size);return s.forEach(function(m,x){d[++c]=[x,m]}),d}function ns(s,c){return function(d){return s(c(d))}}function rs(s){var c=-1,d=Array(s.size);return s.forEach(function(m){d[++c]=m}),d}var is=Array.prototype,ss=Function.prototype,st=Object.prototype,zt=ge["__core-js_shared__"],Yn=function(){var s=/[^.]+$/.exec(zt&&zt.keys&&zt.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),Xn=ss.toString,ae=st.hasOwnProperty,Be=st.toString,os=RegExp("^"+Xn.call(ae).replace(qi,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ot=ge.Symbol,Jn=ge.Uint8Array,as=st.propertyIsEnumerable,ls=is.splice,Zn=ot?ot.isConcatSpreadable:void 0,cs=ns(Object.keys,Object),Yt=ke(ge,"DataView"),Ve=ke(ge,"Map"),Xt=ke(ge,"Promise"),Jt=ke(ge,"Set"),Zt=ke(ge,"WeakMap"),ze=ke(Object,"create"),us=Me(Yt),fs=Me(Ve),hs=Me(Xt),ds=Me(Jt),ps=Me(Zt),at=ot?ot.prototype:void 0,Qt=at?at.valueOf:void 0,Qn=at?at.toString:void 0;function Ce(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function gs(){this.__data__=ze?ze(null):{}}function ys(s){return this.has(s)&&delete this.__data__[s]}function ms(s){var c=this.__data__;if(ze){var d=c[s];return d===i?void 0:d}return ae.call(c,s)?c[s]:void 0}function bs(s){var c=this.__data__;return ze?c[s]!==void 0:ae.call(c,s)}function ws(s,c){var d=this.__data__;return d[s]=ze&&c===void 0?i:c,this}Ce.prototype.clear=gs,Ce.prototype.delete=ys,Ce.prototype.get=ms,Ce.prototype.has=bs,Ce.prototype.set=ws;function le(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function vs(){this.__data__=[]}function xs(s){var c=this.__data__,d=ct(c,s);if(d<0)return!1;var m=c.length-1;return d==m?c.pop():ls.call(c,d,1),!0}function As(s){var c=this.__data__,d=ct(c,s);return d<0?void 0:c[d][1]}function _s(s){return ct(this.__data__,s)>-1}function Cs(s,c){var d=this.__data__,m=ct(d,s);return m<0?d.push([s,c]):d[m][1]=c,this}le.prototype.clear=vs,le.prototype.delete=xs,le.prototype.get=As,le.prototype.has=_s,le.prototype.set=Cs;function ce(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function Ms(){this.__data__={hash:new Ce,map:new(Ve||le),string:new Ce}}function Ss(s){return ut(this,s).delete(s)}function Ls(s){return ut(this,s).get(s)}function Es(s){return ut(this,s).has(s)}function $s(s,c){return ut(this,s).set(s,c),this}ce.prototype.clear=Ms,ce.prototype.delete=Ss,ce.prototype.get=Ls,ce.prototype.has=Es,ce.prototype.set=$s;function lt(s){var c=-1,d=s?s.length:0;for(this.__data__=new ce;++c<d;)this.add(s[c])}function Rs(s){return this.__data__.set(s,i),this}function Ps(s){return this.__data__.has(s)}lt.prototype.add=lt.prototype.push=Rs,lt.prototype.has=Ps;function ue(s){this.__data__=new le(s)}function Ds(){this.__data__=new le}function Ts(s){return this.__data__.delete(s)}function Bs(s){return this.__data__.get(s)}function ks(s){return this.__data__.has(s)}function Os(s,c){var d=this.__data__;if(d instanceof le){var m=d.__data__;if(!Ve||m.length<n-1)return m.push([s,c]),this;d=this.__data__=new ce(m)}return d.set(s,c),this}ue.prototype.clear=Ds,ue.prototype.delete=Ts,ue.prototype.get=Bs,ue.prototype.has=ks,ue.prototype.set=Os;function js(s,c){var d=fe(s)||nn(s)?Zi(s.length,String):[],m=d.length,x=!!m;for(var w in s)ae.call(s,w)&&!(x&&(w=="length"||rr(w,m)))&&d.push(w);return d}function ct(s,c){for(var d=s.length;d--;)if(or(s[d][0],c))return d;return-1}var Ns=to(Fs);function Is(s,c,d,m,x){var w=-1,_=s.length;for(d||(d=ao),x||(x=[]);++w<_;){var T=s[w];d(T)?Yi(x,T):x[x.length]=T}return x}var Hs=no();function Fs(s,c){return s&&Hs(s,c,yt)}function er(s,c){c=ft(c,s)?[c]:tr(c);for(var d=0,m=c.length;s!=null&&d<m;)s=s[ht(c[d++])];return d&&d==m?s:void 0}function qs(s){return Be.call(s)}function Us(s,c){return s!=null&&c in Object(s)}function en(s,c,d,m,x){return s===c?!0:s==null||c==null||!pt(s)&&!gt(c)?s!==s&&c!==c:Ws(s,c,en,d,m,x)}function Ws(s,c,d,m,x,w){var _=fe(s),T=fe(c),k=f,j=f;_||(k=ye(s),k=k==u?M:k),T||(j=ye(c),j=j==u?M:j);var H=k==M&&!Vt(s),F=j==M&&!Vt(c),I=k==j;if(I&&!H)return w||(w=new ue),_||yo(s)?nr(s,c,d,m,x,w):ro(s,c,k,d,m,x,w);if(!(x&a)){var z=H&&ae.call(s,"__wrapped__"),Y=F&&ae.call(c,"__wrapped__");if(z||Y){var me=z?s.value():s,he=Y?c.value():c;return w||(w=new ue),d(me,he,m,x,w)}}return I?(w||(w=new ue),io(s,c,d,m,x,w)):!1}function Gs(s,c,d,m){var x=d.length,w=x;if(s==null)return!w;for(s=Object(s);x--;){var _=d[x];if(_[2]?_[1]!==s[_[0]]:!(_[0]in s))return!1}for(;++x<w;){_=d[x];var T=_[0],k=s[T],j=_[1];if(_[2]){if(k===void 0&&!(T in s))return!1}else{var H=new ue,F;if(!(F===void 0?en(j,k,m,o|a,H):F))return!1}}return!0}function Ks(s){if(!pt(s)||co(s))return!1;var c=ar(s)||Vt(s)?os:Wi;return c.test(Me(s))}function Vs(s){return gt(s)&&rn(s.length)&&!!D[Be.call(s)]}function zs(s){return typeof s=="function"?s:s==null?vo:typeof s=="object"?fe(s)?Zs(s[0],s[1]):Js(s):xo(s)}function Ys(s){if(!uo(s))return cs(s);var c=[];for(var d in Object(s))ae.call(s,d)&&d!="constructor"&&c.push(d);return c}function Xs(s,c){var d=-1,m=dt(s)?Array(s.length):[];return Ns(s,function(x,w,_){m[++d]=c(x,w,_)}),m}function Js(s){var c=so(s);return c.length==1&&c[0][2]?sr(c[0][0],c[0][1]):function(d){return d===s||Gs(d,s,c)}}function Zs(s,c){return ft(s)&&ir(c)?sr(ht(s),c):function(d){var m=bo(d,s);return m===void 0&&m===c?wo(d,s):en(c,m,void 0,o|a)}}function Qs(s){return function(c){return er(c,s)}}function eo(s){if(typeof s=="string")return s;if(sn(s))return Qn?Qn.call(s):"";var c=s+"";return c=="0"&&1/s==-1/0?"-0":c}function tr(s){return fe(s)?s:fo(s)}function to(s,c){return function(d,m){if(d==null)return d;if(!dt(d))return s(d,m);for(var x=d.length,w=-1,_=Object(d);++w<x&&m(_[w],w,_)!==!1;);return d}}function no(s){return function(c,d,m){for(var x=-1,w=Object(c),_=m(c),T=_.length;T--;){var k=_[++x];if(d(w[k],k,w)===!1)break}return c}}function nr(s,c,d,m,x,w){var _=x&a,T=s.length,k=c.length;if(T!=k&&!(_&&k>T))return!1;var j=w.get(s);if(j&&w.get(c))return j==c;var H=-1,F=!0,I=x&o?new lt:void 0;for(w.set(s,c),w.set(c,s);++H<T;){var z=s[H],Y=c[H];if(m)var me=_?m(Y,z,H,c,s,w):m(z,Y,H,s,c,w);if(me!==void 0){if(me)continue;F=!1;break}if(I){if(!Xi(c,function(he,Se){if(!I.has(Se)&&(z===he||d(z,he,m,x,w)))return I.add(Se)})){F=!1;break}}else if(!(z===Y||d(z,Y,m,x,w))){F=!1;break}}return w.delete(s),w.delete(c),F}function ro(s,c,d,m,x,w,_){switch(d){case U:if(s.byteLength!=c.byteLength||s.byteOffset!=c.byteOffset)return!1;s=s.buffer,c=c.buffer;case Z:return!(s.byteLength!=c.byteLength||!m(new Jn(s),new Jn(c)));case h:case p:case S:return or(+s,+c);case y:return s.name==c.name&&s.message==c.message;case E:case B:return s==c+"";case v:var T=ts;case R:var k=w&a;if(T||(T=rs),s.size!=c.size&&!k)return!1;var j=_.get(s);if(j)return j==c;w|=o,_.set(s,c);var H=nr(T(s),T(c),m,x,w,_);return _.delete(s),H;case oe:if(Qt)return Qt.call(s)==Qt.call(c)}return!1}function io(s,c,d,m,x,w){var _=x&a,T=yt(s),k=T.length,j=yt(c),H=j.length;if(k!=H&&!_)return!1;for(var F=k;F--;){var I=T[F];if(!(_?I in c:ae.call(c,I)))return!1}var z=w.get(s);if(z&&w.get(c))return z==c;var Y=!0;w.set(s,c),w.set(c,s);for(var me=_;++F<k;){I=T[F];var he=s[I],Se=c[I];if(m)var lr=_?m(Se,he,I,c,s,w):m(he,Se,I,s,c,w);if(!(lr===void 0?he===Se||d(he,Se,m,x,w):lr)){Y=!1;break}me||(me=I=="constructor")}if(Y&&!me){var mt=s.constructor,bt=c.constructor;mt!=bt&&"constructor"in s&&"constructor"in c&&!(typeof mt=="function"&&mt instanceof mt&&typeof bt=="function"&&bt instanceof bt)&&(Y=!1)}return w.delete(s),w.delete(c),Y}function ut(s,c){var d=s.__data__;return lo(c)?d[typeof c=="string"?"string":"hash"]:d.map}function so(s){for(var c=yt(s),d=c.length;d--;){var m=c[d],x=s[m];c[d]=[m,x,ir(x)]}return c}function ke(s,c){var d=es(s,c);return Ks(d)?d:void 0}var ye=qs;(Yt&&ye(new Yt(new ArrayBuffer(1)))!=U||Ve&&ye(new Ve)!=v||Xt&&ye(Xt.resolve())!=$||Jt&&ye(new Jt)!=R||Zt&&ye(new Zt)!=O)&&(ye=function(s){var c=Be.call(s),d=c==M?s.constructor:void 0,m=d?Me(d):void 0;if(m)switch(m){case us:return U;case fs:return v;case hs:return $;case ds:return R;case ps:return O}return c});function oo(s,c,d){c=ft(c,s)?[c]:tr(c);for(var m,x=-1,_=c.length;++x<_;){var w=ht(c[x]);if(!(m=s!=null&&d(s,w)))break;s=s[w]}if(m)return m;var _=s?s.length:0;return!!_&&rn(_)&&rr(w,_)&&(fe(s)||nn(s))}function ao(s){return fe(s)||nn(s)||!!(Zn&&s&&s[Zn])}function rr(s,c){return c=c??l,!!c&&(typeof s=="number"||Gi.test(s))&&s>-1&&s%1==0&&s<c}function ft(s,c){if(fe(s))return!1;var d=typeof s;return d=="number"||d=="symbol"||d=="boolean"||s==null||sn(s)?!0:Ii.test(s)||!Ni.test(s)||c!=null&&s in Object(c)}function lo(s){var c=typeof s;return c=="string"||c=="number"||c=="symbol"||c=="boolean"?s!=="__proto__":s===null}function co(s){return!!Yn&&Yn in s}function uo(s){var c=s&&s.constructor,d=typeof c=="function"&&c.prototype||st;return s===d}function ir(s){return s===s&&!pt(s)}function sr(s,c){return function(d){return d==null?!1:d[s]===c&&(c!==void 0||s in Object(d))}}var fo=tn(function(s){s=mo(s);var c=[];return Hi.test(s)&&c.push(""),s.replace(Fi,function(d,m,x,w){c.push(x?w.replace(Ui,"$1"):m||d)}),c});function ht(s){if(typeof s=="string"||sn(s))return s;var c=s+"";return c=="0"&&1/s==-1/0?"-0":c}function Me(s){if(s!=null){try{return Xn.call(s)}catch{}try{return s+""}catch{}}return""}function ho(s,c){return Is(po(s,c))}function po(s,c){var d=fe(s)?zi:Xs;return d(s,zs(c))}function tn(s,c){if(typeof s!="function"||c&&typeof c!="function")throw new TypeError(r);var d=function(){var m=arguments,x=c?c.apply(this,m):m[0],w=d.cache;if(w.has(x))return w.get(x);var _=s.apply(this,m);return d.cache=w.set(x,_),_};return d.cache=new(tn.Cache||ce),d}tn.Cache=ce;function or(s,c){return s===c||s!==s&&c!==c}function nn(s){return go(s)&&ae.call(s,"callee")&&(!as.call(s,"callee")||Be.call(s)==u)}var fe=Array.isArray;function dt(s){return s!=null&&rn(s.length)&&!ar(s)}function go(s){return gt(s)&&dt(s)}function ar(s){var c=pt(s)?Be.call(s):"";return c==g||c==b}function rn(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=l}function pt(s){var c=typeof s;return!!s&&(c=="object"||c=="function")}function gt(s){return!!s&&typeof s=="object"}function sn(s){return typeof s=="symbol"||gt(s)&&Be.call(s)==oe}var yo=zn?Qi(zn):Vs;function mo(s){return s==null?"":eo(s)}function bo(s,c,d){var m=s==null?void 0:er(s,c);return m===void 0?d:m}function wo(s,c){return s!=null&&oo(s,c,Us)}function yt(s){return dt(s)?js(s):Ys(s)}function vo(s){return s}function xo(s){return ft(s)?Ji(ht(s)):Qs(s)}e.exports=ho})(Bt,Bt.exports);var du=Bt.exports;const Ti=Rr(du);function pu(e,t,n){let r=[];e.filterProperties.length&&e.filterProperties.forEach(o=>{const a={},l=f=>o.format==="date"?Xe(f).unix():parseFloat(f);t.forEach(f=>{var h,p;if(o.type==="range"){const y=Ze(o.key,f);if(Array.isArray(y)){const g=[l(y[0]),l(y[1])];a.min=a.min!==void 0?Math.min(a.min,g[0]):g[0],a.max=a.max!==void 0?Math.max(a.max,g[1]):g[1]}else{const g=l(y);a.min=a.min!==void 0?Math.min(a.min,g):g,a.max=a.max!==void 0?Math.max(a.max,g):g}return}Array.isArray(f[o.key])?f[o.key].forEach(y=>{a[y]=void 0}):o.type==="spatial"?(a.geometry=((h=o==null?void 0:o.state)==null?void 0:h.geometry)||void 0,a.geometry&&(o.stringifiedState=a.geometry.type),a.mode=o.mode||"intersects"):(p=o.key)!=null&&p.includes(".")?Di(Ti(n.items,o.key)).filter(y=>y).forEach(y=>{a[y]=void 0}):a[f[o.key]]=void 0});const u=o.key||o.keys.join("|");n.filters[u]=Object.assign({type:o.type||"multiselect",dirty:o.state?Object.values(o.state).some(f=>f):void 0,key:u},o.type==="range"?{min:a.min,max:a.max,format:o.format}:{},o),n.filters[u].state=Object.assign({},a,o.state)}),e.matchAllWhenEmpty!==!1&&(n.results=n.sortResults(t),n.requestUpdate()),e.aggregateResults&&(r=Array.from(new Set(t.reduce((o,a)=>o.concat(a[e.aggregateResults]),[]))).sort((o,a)=>o.localeCompare(a)));const i=[];return Object.values(n.filters).forEach(o=>{o.type==="text"?o.keys.forEach(a=>{i.includes(a)||i.push(a)}):(o.type==="select"||o.type==="multiselect")&&(i.includes(o.key)||i.push(o.key))}),Hl(t,Object.assign({keys:i},e.fuseConfig)),r}async function gu(e,t,n){let r;n.externalFilter?r=await Wl(t,n.filters,e):r=await Fl(t,n.filters,e),n.results=n.sortResults(r)}function yu(e,t,n){const r=`filter-${e.key}`.replace("|","-");switch(e.type){case"text":return C`<eox-itemfilter-text
        data-type="filter"
        data-cy="text-filter"
        slot="filter"
        id="${r}"
        .tabIndex=${t}
        .filterObject=${e}
        .unstyled=${n.unstyled}
        @filter=${()=>n.search()}
      ></eox-itemfilter-text>`;case"multiselect":case"select":return C`
        <eox-itemfilter-select
          .inlineMode=${n.inlineMode||!1}
          data-type="filter"
          id="${r}"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          .suggestions="${Di(Ti(n.items,e.key)).filter(i=>i)}"
          type="${e.type}"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-select>
      `;case"range":return C`
        <eox-itemfilter-range
          id="${r}"
          data-type="filter"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-range>
      `;case"spatial":return C`
        <eox-itemfilter-spatial
          id="${r}"
          data-type="filter"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          @filter=${()=>n.search()}
        ></eox-itemfilter-spatial>
      `;default:return C``}}function mu(e,t){return[...e].sort((n,r)=>n[t.titleProperty].localeCompare(r[t.titleProperty]))}function bu(e,t,n){return C`
    ${N(e.dirty,()=>C`
        <button
          type="button"
          tabindex=${t}
          slot="reset-button"
          class="reset-icon icon"
          @click=${r=>{const i=r.target.parentElement.querySelector("[slot=filter]");i&&typeof i.reset=="function"&&i.reset(),n.search(),n.requestUpdate()}}
        >
          ${n.unstyled?"Reset":xe}
        </button>
      `)}
  `}function wu(e){e.renderRoot.querySelectorAll("[data-type='filter']").forEach(t=>{typeof t.reset=="function"&&t.reset()}),e.search()}var et,Ie,X,qe,Bi,ki;class vu extends ie{constructor(){super();q(this,qe);q(this,et,[]);q(this,Ie,[]);q(this,X,mc);this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=Ht(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.enableResultAction=!1,this.resultActionIcon='<svg style="width: 24px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>click me!</title><path fill="#004170" d="M11.5,11L17.88,16.37L17,16.55L16.36,16.67C15.73,16.8 15.37,17.5 15.65,18.07L15.92,18.65L17.28,21.59L15.86,22.25L14.5,19.32L14.24,18.74C13.97,18.15 13.22,17.97 12.72,18.38L12.21,18.78L11.5,19.35V11M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10" /></svg>',this.styleOverride="",this.unstyled=!1}static get properties(){return{items:{attribute:!1,type:Object},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{attribute:!1,type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{attribute:!1,type:Array},fuseConfig:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},enableResultAction:{attribute:!1,type:Boolean},resultActionIcon:{attribute:!1,type:String},styleOverride:{type:String},unstyled:{type:Boolean}}}apply(){wt(this,et,pu(G(this,X),G(this,Ie),this)),this.search()}async searchHandler(){await gu(G(this,X),G(this,Ie),this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(n){return mu(n,G(this,X))}resetFilters(){wu(this)}firstUpdated(n){var i;let r={};Er.map(o=>{r={...r,[o]:this[o]}}),wt(this,X,r),wt(this,Ie,((i=this.items)==null?void 0:i.map((o,a)=>Object.assign({id:o[this.idProperty]||`item-${a}`},o)))||[]),this.apply()}updated(n){Er.map(r=>n.has(r)?(this.firstUpdated(void 0),!0):!1)}updateResult(n){this.selectedResult=n.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}emitResultAction(n){this.dispatchEvent(new CustomEvent("click:result-action",{detail:n.detail,bubbles:!0,composed:!0}))}render(){var n;return C`
      <style>
        ${Ho}
        ${!this.unstyled&&tt}
        ${!this.unstyled&&So}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":xe}
        @submit="${r=>r.preventDefault()}"
      >
        ${N(this.filterProperties,()=>C`
            <eox-itemfilter-container
              .filters=${this.filters}
              .filterProperties=${this.filterProperties}
              .inlineMode=${this.inlineMode||!1}
              @reset=${()=>this.resetFilters()}
              @filter=${()=>this.search()}
            >
              <section slot="section">
                ${N(!this.inlineMode,()=>C`
                    <slot name="filterstitle"
                      ><h6 class="main-heading">Filters</h6></slot
                    >
                  `)}
                <ul id="filters">
                  ${It(Object.values(this.filters),(r,i)=>C` <li>
                        <eox-itemfilter-expandcontainer
                          .filterObject=${r}
                          @details-toggled=${o=>li(o,G(this,X),this)}
                          data-details="${r.key}"
                        >
                          ${L(this,qe,ki).call(this,r,Lr(i,1))}
                          ${L(this,qe,Bi).call(this,r,Lr(i,2))}
                        </eox-itemfilter-expandcontainer>
                      </li>`)}
                </ul>
                ${N(!this.inlineMode&&G(this,X).filterProperties&&!this.inlineMode&&G(this,X).filterProperties&&xn(this.filters),()=>C`
                    <button
                      type="button"
                      id="filter-reset"
                      class="outline small icon-text reset-icon"
                      data-cy="filter-reset"
                      @click=${()=>this.resetFilters()}
                    >
                      Reset all
                    </a>
                  `)}
              </section>
            </eox-itemfilter-container>
          `)}
        ${N(((n=G(this,X))==null?void 0:n.showResults)&&this.results,()=>C`
            <eox-itemfilter-results
              .config=${G(this,X)}
              .results=${this.results}
              .filters=${this.filters}
              .resultAggregation=${G(this,et)}
              .selectedResult=${this.selectedResult}
              .resultType=${this.resultType}
              .enableResultAction=${this.enableResultAction}
              .resultActionIcon=${this.resultActionIcon}
              @result=${this.updateResult}
              @click:result-action=${this.emitResultAction}
            >
              <slot name="resultstitle"
                ><h6 class="main-heading">Results</h6></slot
              >
            </eox-itemfilter-results>
          `)}
      </form>
    `}}et=new WeakMap,Ie=new WeakMap,X=new WeakMap,qe=new WeakSet,Bi=function(n,r){return yu(n,r,this)},ki=function(n,r){return bu(n,r,this)};customElements.define("eox-itemfilter",vu);const xu=[".items"],Au={slot:"filterstitle",style:{margin:"14px 8px"}},_u={slot:"resultstitle",style:{margin:"14px 8px"}},Ou={__name:"EodashItemFilter",props:{enableCompare:{type:Boolean,default:!1},filtersTitle:{type:String,default:"Indicators"},resultsTitle:{type:String,default:"Results"},titleProperty:{type:String,default:"title"},aggregateResults:{type:String,default:void 0},imageProperty:{type:String,default:""},subTitleProperty:{type:String,default:""},resultType:{type:String,default:""},cssVars:{type:[String,Object],default:""},enableHighlighting:{type:Boolean,default:!0},expandMultipleFilters:{type:Boolean,default:!0},expandMultipleResults:{type:Boolean,default:!0},styleOverride:{type:String,default:""},filterProperties:{type:Array,default:()=>[{keys:["title","themes","description"],title:"Search",type:"text"},{key:"themes",title:"Theme Filter",type:"multiselect"}]}},emits:["select"],setup(e,{emit:t}){const n=Co(),r=t,i=e,o=async p=>{p?(ur.value&&(ur.value=!1),n.resetSelectedCompareSTAC(),await n.loadSelectedSTAC(p.href),r("select",p)):n.selectedStac=null},a=p=>{p&&(n.loadSelectedCompareSTAC(p.href),r("select",p))},l=async p=>{const y=p.detail;i.enableCompare?a(y):o(y)},{smAndDown:u}=Mo(),f=Bo(()=>({titleProperty:i.titleProperty,enableHighlighting:i.enableHighlighting,expandMultipleFilters:i.expandMultipleFilters,expandMultipleResults:i.expandMultipleResults,subTitleProperty:i.subTitleProperty,resultType:i.resultType,imageProperty:i.imageProperty,aggregateResults:i.aggregateResults,style:i.cssVars,filterProperties:u.value?"":i.filterProperties,styleOverride:i.styleOverride})),h=ko(null);return(p,y)=>{var g;return jo(),Oo("eox-itemfilter",No({class:"fill-height"},f.value,{ref_key:"eoxItemFilter",ref:h,style:{overflow:"auto","--background-color":"none"},onSelect:l,".items":(g=Io(n).stac)==null?void 0:g.filter(b=>b.rel==="child")}),[hr("h4",Au,dr(e.filtersTitle),1),hr("h4",_u,dr(e.resultsTitle),1)],48,xu)}}};export{Ou as default};
