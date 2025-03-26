var vo=Object.defineProperty;var lr=e=>{throw TypeError(e)};var xo=(e,t,n)=>t in e?vo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ye=(e,t,n)=>xo(e,typeof t!="symbol"?t+"":t,n),rn=(e,t,n)=>t.has(e)||lr("Cannot "+n);var G=(e,t,n)=>(rn(e,t,"read from private field"),n?n.call(e):t.get(e)),q=(e,t,n)=>t.has(e)?lr("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),wt=(e,t,n,r)=>(rn(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),E=(e,t,n)=>(rn(e,t,"access private method"),n);import{u as Ao,a as _o}from"./eo-dash.CCBfNjz6.js";import{r as ie,E as xe,x as C}from"./lit-element.Deg-YTNa.js";import{a as sn,o as jt}from"./map.ZocK5lBO.js";import{n as I,s as Co}from"./directive.qnhzJN6s.js";import{d as Xe,_ as Nt,c as Mo,a as So,s as Eo}from"./radio.style.BrcTE7t6.js";import"./toolcool-range-slider.min.Ch_Z5G3w.js";import{o as $o}from"./orient2d.DArCjZZA.js";import{c as be,g as $r}from"./commonjsHelpers.BosuxZz1.js";import{h as Lo,p as Ro,c as Po,o as Do,j as cr,t as ur,K as Bo,k as To}from"./framework.Ckmccr7c.js";const ko=`
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
.cards li span {
  display: block;
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
.cards .title {
  font-size: 16px;
  font-weight: 600;
  text-wrap: auto;
  line-height: 19px;
}
.subtitle {
  font-size: 11px;
  opacity: .7;
  margin-top: 6px;
}
.cards .subtitle {
  font-size: 14px;
  color: #757575;
  text-wrap: auto;
  line-height: 19px;
}
.image {
  width: 24px;
  height: 24px;
  object-fit: cover;
  overflow: hidden;
  margin-right: 8px;
}
.cards .image {
  width: 100%;
  height: 190px;
  margin-bottom: 8px;
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
}
ul#results ul.cards {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 40px;
  margin: 20px 0;
  cursor: initial;
}
ul#results ul.cards li {
  flex-basis: calc(33.3% - 77px);
  min-width: 0;
  align-self: flex-start;
}
@media screen and (max-width: 768px) {
  ul#results ul.cards li {
    flex-basis: calc(50% - 70px);
  }
}
@media screen and (max-width: 480px) {
  ul#results ul.cards li {
    flex-basis: 100%;
  }
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
`;var Bt,Lr;class Oo extends ie{constructor(){super();q(this,Bt);this.filterObject={},this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}render(){return C`
      <style>
        ${!this.unstyled&&tt}
      </style>

      ${I(this.filterObject.featured,()=>C`<slot name="filter"></slot>`,()=>C`<details
            @toggle="${E(this,Bt,Lr)}"
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
    `}}Bt=new WeakSet,Lr=function(n){this.dispatchEvent(new CustomEvent("details-toggled",{detail:n,bubbles:!0,composed:!0}))};customElements.define("eox-itemfilter-expandcontainer",Oo);function de(e){return Array.isArray?Array.isArray(e):Dr(e)==="[object Array]"}function jo(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function No(e){return e==null?"":jo(e)}function te(e){return typeof e=="string"}function Rr(e){return typeof e=="number"}function Io(e){return e===!0||e===!1||Fo(e)&&Dr(e)=="[object Boolean]"}function Pr(e){return typeof e=="object"}function Fo(e){return Pr(e)&&e!==null}function K(e){return e!=null}function on(e){return!e.trim().length}function Dr(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const Ho="Incorrect 'index' type",qo=e=>`Invalid value for key ${e}`,Uo=e=>`Pattern length exceeds max of ${e}.`,Wo=e=>`Missing ${e} property in key`,Go=e=>`Property 'weight' in key '${e}' must be a positive integer`,fr=Object.prototype.hasOwnProperty;class Ko{constructor(t){this._keys=[],this._keyMap={};let n=0;t.forEach(r=>{let i=Br(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Br(e){let t=null,n=null,r=null,i=1,o=null;if(te(e)||de(e))r=e,t=hr(e),n=un(e);else{if(!fr.call(e,"name"))throw new Error(Wo("name"));const a=e.name;if(r=a,fr.call(e,"weight")&&(i=e.weight,i<=0))throw new Error(Go(a));t=hr(a),n=un(a),o=e.getFn}return{path:t,id:n,weight:i,src:r,getFn:o}}function hr(e){return de(e)?e:e.split(".")}function un(e){return de(e)?e.join("."):e}function zo(e,t){let n=[],r=!1;const i=(o,a,l)=>{if(K(o))if(!a[l])n.push(o);else{let u=a[l];const f=o[u];if(!K(f))return;if(l===a.length-1&&(te(f)||Rr(f)||Io(f)))n.push(No(f));else if(de(f)){r=!0;for(let h=0,p=f.length;h<p;h+=1)i(f[h],a,l+1)}else a.length&&i(f,a,l+1)}};return i(e,te(t)?t.split("."):t,0),r?n:n[0]}const Vo={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Yo={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},Xo={location:0,threshold:.6,distance:100},Jo={useExtendedSearch:!1,getFn:zo,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var A={...Yo,...Vo,...Xo,...Jo};const Zo=/[^ ]+/g;function Qo(e=1,t=3){const n=new Map,r=Math.pow(10,t);return{get(i){const o=i.match(Zo).length;if(n.has(o))return n.get(o);const a=1/Math.pow(o,.5*e),l=parseFloat(Math.round(a*r)/r);return n.set(o,l),l},clear(){n.clear()}}}class Rn{constructor({getFn:t=A.getFn,fieldNormWeight:n=A.fieldNormWeight}={}){this.norm=Qo(n,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,te(this.docs[0])?this.docs.forEach((t,n)=>{this._addString(t,n)}):this.docs.forEach((t,n)=>{this._addObject(t,n)}),this.norm.clear())}add(t){const n=this.size();te(t)?this._addString(t,n):this._addObject(t,n)}removeAt(t){this.records.splice(t,1);for(let n=t,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(t,n){return t[this._keysMap[n]]}size(){return this.records.length}_addString(t,n){if(!K(t)||on(t))return;let r={v:t,i:n,n:this.norm.get(t)};this.records.push(r)}_addObject(t,n){let r={i:n,$:{}};this.keys.forEach((i,o)=>{let a=i.getFn?i.getFn(t):this.getFn(t,i.path);if(K(a)){if(de(a)){let l=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:f,value:h}=u.pop();if(K(h))if(te(h)&&!on(h)){let p={v:h,i:f,n:this.norm.get(h)};l.push(p)}else de(h)&&h.forEach((p,y)=>{u.push({nestedArrIndex:y,value:p})})}r.$[o]=l}else if(te(a)&&!on(a)){let l={v:a,n:this.norm.get(a)};r.$[o]=l}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Tr(e,t,{getFn:n=A.getFn,fieldNormWeight:r=A.fieldNormWeight}={}){const i=new Rn({getFn:n,fieldNormWeight:r});return i.setKeys(e.map(Br)),i.setSources(t),i.create(),i}function ea(e,{getFn:t=A.getFn,fieldNormWeight:n=A.fieldNormWeight}={}){const{keys:r,records:i}=e,o=new Rn({getFn:t,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(i),o}function vt(e,{errors:t=0,currentLocation:n=0,expectedLocation:r=0,distance:i=A.distance,ignoreLocation:o=A.ignoreLocation}={}){const a=t/e.length;if(o)return a;const l=Math.abs(r-n);return i?a+l/i:l?1:a}function ta(e=[],t=A.minMatchCharLength){let n=[],r=-1,i=-1,o=0;for(let a=e.length;o<a;o+=1){let l=e[o];l&&r===-1?r=o:!l&&r!==-1&&(i=o-1,i-r+1>=t&&n.push([r,i]),r=-1)}return e[o-1]&&o-r>=t&&n.push([r,o-1]),n}const Ee=32;function na(e,t,n,{location:r=A.location,distance:i=A.distance,threshold:o=A.threshold,findAllMatches:a=A.findAllMatches,minMatchCharLength:l=A.minMatchCharLength,includeMatches:u=A.includeMatches,ignoreLocation:f=A.ignoreLocation}={}){if(t.length>Ee)throw new Error(Uo(Ee));const h=t.length,p=e.length,y=Math.max(0,Math.min(r,p));let g=o,b=y;const v=l>1||u,S=v?Array(p):[];let M;for(;(M=e.indexOf(t,b))>-1;){let O=vt(t,{currentLocation:M,expectedLocation:y,distance:i,ignoreLocation:f});if(g=Math.min(O,g),b=M+h,v){let Z=0;for(;Z<h;)S[M+Z]=1,Z+=1}}b=-1;let L=[],$=1,R=h+p;const T=1<<h-1;for(let O=0;O<h;O+=1){let Z=0,U=R;for(;Z<U;)vt(t,{errors:O,currentLocation:y+U,expectedLocation:y,distance:i,ignoreLocation:f})<=g?Z=U:R=U,U=Math.floor((R-Z)/2+Z);R=U;let rt=Math.max(1,y-U+1),Ke=a?p:Math.min(y+U,p)+h,pe=Array(Ke+2);pe[Ke+1]=(1<<O)-1;for(let W=Ke;W>=rt;W-=1){let Te=W-1,it=n[e.charAt(Te)];if(v&&(S[Te]=+!!it),pe[W]=(pe[W+1]<<1|1)&it,O&&(pe[W]|=(L[W+1]|L[W])<<1|1|L[W+1]),pe[W]&T&&($=vt(t,{errors:O,currentLocation:Te,expectedLocation:y,distance:i,ignoreLocation:f}),$<=g)){if(g=$,b=Te,b<=y)break;rt=Math.max(1,2*y-b)}}if(vt(t,{errors:O+1,currentLocation:y,expectedLocation:y,distance:i,ignoreLocation:f})>g)break;L=pe}const oe={isMatch:b>=0,score:Math.max(.001,$)};if(v){const O=ta(S,l);O.length?u&&(oe.indices=O):oe.isMatch=!1}return oe}function ra(e){let t={};for(let n=0,r=e.length;n<r;n+=1){const i=e.charAt(n);t[i]=(t[i]||0)|1<<r-n-1}return t}const Mt=String.prototype.normalize?e=>e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,""):e=>e;class kr{constructor(t,{location:n=A.location,threshold:r=A.threshold,distance:i=A.distance,includeMatches:o=A.includeMatches,findAllMatches:a=A.findAllMatches,minMatchCharLength:l=A.minMatchCharLength,isCaseSensitive:u=A.isCaseSensitive,ignoreDiacritics:f=A.ignoreDiacritics,ignoreLocation:h=A.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreDiacritics:f,ignoreLocation:h},t=u?t:t.toLowerCase(),t=f?Mt(t):t,this.pattern=t,this.chunks=[],!this.pattern.length)return;const p=(g,b)=>{this.chunks.push({pattern:g,alphabet:ra(g),startIndex:b})},y=this.pattern.length;if(y>Ee){let g=0;const b=y%Ee,v=y-b;for(;g<v;)p(this.pattern.substr(g,Ee),g),g+=Ee;if(b){const S=y-Ee;p(this.pattern.substr(S),S)}}else p(this.pattern,0)}searchIn(t){const{isCaseSensitive:n,ignoreDiacritics:r,includeMatches:i}=this.options;if(t=n?t:t.toLowerCase(),t=r?Mt(t):t,this.pattern===t){let v={isMatch:!0,score:0};return i&&(v.indices=[[0,t.length-1]]),v}const{location:o,distance:a,threshold:l,findAllMatches:u,minMatchCharLength:f,ignoreLocation:h}=this.options;let p=[],y=0,g=!1;this.chunks.forEach(({pattern:v,alphabet:S,startIndex:M})=>{const{isMatch:L,score:$,indices:R}=na(t,v,S,{location:o+M,distance:a,threshold:l,findAllMatches:u,minMatchCharLength:f,includeMatches:i,ignoreLocation:h});L&&(g=!0),y+=$,L&&R&&(p=[...p,...R])});let b={isMatch:g,score:g?y/this.chunks.length:1};return g&&i&&(b.indices=p),b}}class Ae{constructor(t){this.pattern=t}static isMultiMatch(t){return dr(t,this.multiRegex)}static isSingleMatch(t){return dr(t,this.singleRegex)}search(){}}function dr(e,t){const n=e.match(t);return n?n[1]:null}class ia extends Ae{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const n=t===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class sa extends Ae{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const r=t.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,t.length-1]}}}class oa extends Ae{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const n=t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class aa extends Ae{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const n=!t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class la extends Ae{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const n=t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class ca extends Ae{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const n=!t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class Or extends Ae{constructor(t,{location:n=A.location,threshold:r=A.threshold,distance:i=A.distance,includeMatches:o=A.includeMatches,findAllMatches:a=A.findAllMatches,minMatchCharLength:l=A.minMatchCharLength,isCaseSensitive:u=A.isCaseSensitive,ignoreDiacritics:f=A.ignoreDiacritics,ignoreLocation:h=A.ignoreLocation}={}){super(t),this._bitapSearch=new kr(t,{location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreDiacritics:f,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class jr extends Ae{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let n=0,r;const i=[],o=this.pattern.length;for(;(r=t.indexOf(this.pattern,n))>-1;)n=r+o,i.push([r,n-1]);const a=!!i.length;return{isMatch:a,score:a?0:1,indices:i}}}const fn=[ia,jr,oa,aa,ca,la,sa,Or],pr=fn.length,ua=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,fa="|";function ha(e,t={}){return e.split(fa).map(n=>{let r=n.trim().split(ua).filter(o=>o&&!!o.trim()),i=[];for(let o=0,a=r.length;o<a;o+=1){const l=r[o];let u=!1,f=-1;for(;!u&&++f<pr;){const h=fn[f];let p=h.isMultiMatch(l);p&&(i.push(new h(p,t)),u=!0)}if(!u)for(f=-1;++f<pr;){const h=fn[f];let p=h.isSingleMatch(l);if(p){i.push(new h(p,t));break}}}return i})}const da=new Set([Or.type,jr.type]);class pa{constructor(t,{isCaseSensitive:n=A.isCaseSensitive,ignoreDiacritics:r=A.ignoreDiacritics,includeMatches:i=A.includeMatches,minMatchCharLength:o=A.minMatchCharLength,ignoreLocation:a=A.ignoreLocation,findAllMatches:l=A.findAllMatches,location:u=A.location,threshold:f=A.threshold,distance:h=A.distance}={}){this.query=null,this.options={isCaseSensitive:n,ignoreDiacritics:r,includeMatches:i,minMatchCharLength:o,findAllMatches:l,ignoreLocation:a,location:u,threshold:f,distance:h},t=n?t:t.toLowerCase(),t=r?Mt(t):t,this.pattern=t,this.query=ha(this.pattern,this.options)}static condition(t,n){return n.useExtendedSearch}searchIn(t){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i,ignoreDiacritics:o}=this.options;t=i?t:t.toLowerCase(),t=o?Mt(t):t;let a=0,l=[],u=0;for(let f=0,h=n.length;f<h;f+=1){const p=n[f];l.length=0,a=0;for(let y=0,g=p.length;y<g;y+=1){const b=p[y],{isMatch:v,indices:S,score:M}=b.search(t);if(v){if(a+=1,u+=M,r){const L=b.constructor.type;da.has(L)?l=[...l,...S]:l.push(S)}}else{u=0,a=0,l.length=0;break}}if(a){let y={isMatch:!0,score:u/a};return r&&(y.indices=l),y}}return{isMatch:!1,score:1}}}const hn=[];function ga(...e){hn.push(...e)}function dn(e,t){for(let n=0,r=hn.length;n<r;n+=1){let i=hn[n];if(i.condition(e,t))return new i(e,t)}return new kr(e,t)}const St={AND:"$and",OR:"$or"},pn={PATH:"$path",PATTERN:"$val"},gn=e=>!!(e[St.AND]||e[St.OR]),ya=e=>!!e[pn.PATH],ma=e=>!de(e)&&Pr(e)&&!gn(e),gr=e=>({[St.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function Nr(e,t,{auto:n=!0}={}){const r=i=>{let o=Object.keys(i);const a=ya(i);if(!a&&o.length>1&&!gn(i))return r(gr(i));if(ma(i)){const u=a?i[pn.PATH]:o[0],f=a?i[pn.PATTERN]:i[u];if(!te(f))throw new Error(qo(u));const h={keyId:un(u),pattern:f};return n&&(h.searcher=dn(f,t)),h}let l={children:[],operator:o[0]};return o.forEach(u=>{const f=i[u];de(f)&&f.forEach(h=>{l.children.push(r(h))})}),l};return gn(e)||(e=gr(e)),r(e)}function ba(e,{ignoreFieldNorm:t=A.ignoreFieldNorm}){e.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:o,score:a})=>{const l=i?i.weight:null;r*=Math.pow(a===0&&l?Number.EPSILON:a,(l||1)*(t?1:o))}),n.score=r})}function wa(e,t){const n=e.matches;t.matches=[],K(n)&&n.forEach(r=>{if(!K(r.indices)||!r.indices.length)return;const{indices:i,value:o}=r;let a={indices:i,value:o};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),t.matches.push(a)})}function va(e,t){t.score=e.score}function xa(e,t,{includeMatches:n=A.includeMatches,includeScore:r=A.includeScore}={}){const i=[];return n&&i.push(wa),r&&i.push(va),e.map(o=>{const{idx:a}=o,l={item:t[a],refIndex:a};return i.length&&i.forEach(u=>{u(o,l)}),l})}class _e{constructor(t,n={},r){this.options={...A,...n},this.options.useExtendedSearch,this._keyStore=new Ko(this.options.keys),this.setCollection(t,r)}setCollection(t,n){if(this._docs=t,n&&!(n instanceof Rn))throw new Error(Ho);this._myIndex=n||Tr(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){K(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const o=this._docs[r];t(o,r)&&(this.removeAt(r),r-=1,i-=1,n.push(o))}return n}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:o,sortFn:a,ignoreFieldNorm:l}=this.options;let u=te(t)?te(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return ba(u,{ignoreFieldNorm:l}),o&&u.sort(a),Rr(n)&&n>-1&&(u=u.slice(0,n)),xa(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(t){const n=dn(t,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:o,i:a,n:l})=>{if(!K(o))return;const{isMatch:u,score:f,indices:h}=n.searchIn(o);u&&i.push({item:o,idx:a,matches:[{score:f,value:o,norm:l,indices:h}]})}),i}_searchLogical(t){const n=Nr(t,this.options),r=(l,u,f)=>{if(!l.children){const{keyId:p,searcher:y}=l,g=this._findMatches({key:this._keyStore.get(p),value:this._myIndex.getValueForItemAtKeyId(u,p),searcher:y});return g&&g.length?[{idx:f,item:u,matches:g}]:[]}const h=[];for(let p=0,y=l.children.length;p<y;p+=1){const g=l.children[p],b=r(g,u,f);if(b.length)h.push(...b);else if(l.operator===St.AND)return[]}return h},i=this._myIndex.records,o={},a=[];return i.forEach(({$:l,i:u})=>{if(K(l)){let f=r(n,l,u);f.length&&(o[u]||(o[u]={idx:u,item:l,matches:[]},a.push(o[u])),f.forEach(({matches:h})=>{o[u].matches.push(...h)}))}}),a}_searchObjectList(t){const n=dn(t,this.options),{keys:r,records:i}=this._myIndex,o=[];return i.forEach(({$:a,i:l})=>{if(!K(a))return;let u=[];r.forEach((f,h)=>{u.push(...this._findMatches({key:f,value:a[h],searcher:n}))}),u.length&&o.push({idx:l,item:a,matches:u})}),o}_findMatches({key:t,value:n,searcher:r}){if(!K(n))return[];let i=[];if(de(n))n.forEach(({v:o,i:a,n:l})=>{if(!K(o))return;const{isMatch:u,score:f,indices:h}=r.searchIn(o);u&&i.push({score:f,key:t,value:o,idx:a,norm:l,indices:h})});else{const{v:o,n:a}=n,{isMatch:l,score:u,indices:f}=r.searchIn(o);l&&i.push({score:u,key:t,value:o,norm:a,indices:f})}return i}}_e.version="7.1.0";_e.createIndex=Tr;_e.parseIndex=ea;_e.config=A;_e.parseQuery=Nr;ga(pa);function Ir(e,t){const n=new _e(t.filterProperties,{keys:["title"]}),r=e.target.value,o=n.search(r).map(a=>a.item.key||a.item.keys.join("|"));Object.keys(t.filters).forEach(a=>{t.querySelector(`[data-details="${a}"]`).parentElement.style.display=o.includes(a)||!r?"":"none"})}function Aa(e,t){const n=e.target.getAttribute("data-close").replace("|","-");t.querySelector(`#filter-${n}`).reset(),t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}const yn=Math.min,je=Math.max,Et=Math.round,xt=Math.floor,ne=e=>({x:e,y:e});function Fr(e){return e.split("-")[0]}function _a(e){return e.split("-")[1]}function Ca(e){return e==="x"?"y":"x"}function Ma(e){return e==="y"?"height":"width"}function Hr(e){return["top","bottom"].includes(Fr(e))?"y":"x"}function Sa(e){return Ca(Hr(e))}function qr(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function yr(e,t,n){let{reference:r,floating:i}=e;const o=Hr(t),a=Sa(t),l=Ma(a),u=Fr(t),f=o==="y",h=r.x+r.width/2-i.width/2,p=r.y+r.height/2-i.height/2,y=r[l]/2-i[l]/2;let g;switch(u){case"top":g={x:h,y:r.y-i.height};break;case"bottom":g={x:h,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:p};break;case"left":g={x:r.x-i.width,y:p};break;default:g={x:r.x,y:r.y}}switch(_a(t)){case"start":g[a]-=y*(n&&f?-1:1);break;case"end":g[a]+=y*(n&&f?-1:1);break}return g}const Ea=async(e,t,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:a}=n,l=o.filter(Boolean),u=await(a.isRTL==null?void 0:a.isRTL(t));let f=await a.getElementRects({reference:e,floating:t,strategy:i}),{x:h,y:p}=yr(f,r,u),y=r,g={},b=0;for(let v=0;v<l.length;v++){const{name:S,fn:M}=l[v],{x:L,y:$,data:R,reset:T}=await M({x:h,y:p,initialPlacement:r,placement:y,strategy:i,middlewareData:g,rects:f,platform:a,elements:{reference:e,floating:t}});h=L??h,p=$??p,g={...g,[S]:{...g[S],...R}},T&&b<=50&&(b++,typeof T=="object"&&(T.placement&&(y=T.placement),T.rects&&(f=T.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:i}):T.rects),{x:h,y:p}=yr(f,y,u)),v=-1)}return{x:h,y:p,placement:y,strategy:i,middlewareData:g}};function It(){return typeof window<"u"}function Ue(e){return Ur(e)?(e.nodeName||"").toLowerCase():"#document"}function z(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function se(e){var t;return(t=(Ur(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Ur(e){return It()?e instanceof Node||e instanceof z(e).Node:!1}function Q(e){return It()?e instanceof Element||e instanceof z(e).Element:!1}function re(e){return It()?e instanceof HTMLElement||e instanceof z(e).HTMLElement:!1}function mr(e){return!It()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof z(e).ShadowRoot}function nt(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=ee(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function $a(e){return["table","td","th"].includes(Ue(e))}function Ft(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Pn(e){const t=Dn(),n=Q(e)?ee(e):e;return["transform","translate","scale","rotate","perspective"].some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function La(e){let t=we(e);for(;re(t)&&!Fe(t);){if(Pn(t))return t;if(Ft(t))return null;t=we(t)}return null}function Dn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Fe(e){return["html","body","#document"].includes(Ue(e))}function ee(e){return z(e).getComputedStyle(e)}function Ht(e){return Q(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function we(e){if(Ue(e)==="html")return e;const t=e.assignedSlot||e.parentNode||mr(e)&&e.host||se(e);return mr(t)?t.host:t}function Wr(e){const t=we(e);return Fe(t)?e.ownerDocument?e.ownerDocument.body:e.body:re(t)&&nt(t)?t:Wr(t)}function Je(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=Wr(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=z(i);if(o){const l=mn(a);return t.concat(a,a.visualViewport||[],nt(i)?i:[],l&&n?Je(l):[])}return t.concat(i,Je(i,[],n))}function mn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Gr(e){const t=ee(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=re(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=Et(n)!==o||Et(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function Bn(e){return Q(e)?e:e.contextElement}function Ne(e){const t=Bn(e);if(!re(t))return ne(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=Gr(t);let a=(o?Et(n.width):n.width)/r,l=(o?Et(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const Ra=ne(0);function Kr(e){const t=z(e);return!Dn()||!t.visualViewport?Ra:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Pa(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==z(e)?!1:t}function $e(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=Bn(e);let a=ne(1);t&&(r?Q(r)&&(a=Ne(r)):a=Ne(e));const l=Pa(o,n,r)?Kr(o):ne(0);let u=(i.left+l.x)/a.x,f=(i.top+l.y)/a.y,h=i.width/a.x,p=i.height/a.y;if(o){const y=z(o),g=r&&Q(r)?z(r):r;let b=y,v=mn(b);for(;v&&r&&g!==b;){const S=Ne(v),M=v.getBoundingClientRect(),L=ee(v),$=M.left+(v.clientLeft+parseFloat(L.paddingLeft))*S.x,R=M.top+(v.clientTop+parseFloat(L.paddingTop))*S.y;u*=S.x,f*=S.y,h*=S.x,p*=S.y,u+=$,f+=R,b=z(v),v=mn(b)}}return qr({width:h,height:p,x:u,y:f})}function Tn(e,t){const n=Ht(e).scrollLeft;return t?t.left+n:$e(se(e)).left+n}function zr(e,t,n){n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=r.left+t.scrollLeft-(n?0:Tn(e,r)),o=r.top+t.scrollTop;return{x:i,y:o}}function Da(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e;const o=i==="fixed",a=se(r),l=t?Ft(t.floating):!1;if(r===a||l&&o)return n;let u={scrollLeft:0,scrollTop:0},f=ne(1);const h=ne(0),p=re(r);if((p||!p&&!o)&&((Ue(r)!=="body"||nt(a))&&(u=Ht(r)),re(r))){const g=$e(r);f=Ne(r),h.x=g.x+r.clientLeft,h.y=g.y+r.clientTop}const y=a&&!p&&!o?zr(a,u,!0):ne(0);return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-u.scrollLeft*f.x+h.x+y.x,y:n.y*f.y-u.scrollTop*f.y+h.y+y.y}}function Ba(e){return Array.from(e.getClientRects())}function Ta(e){const t=se(e),n=Ht(e),r=e.ownerDocument.body,i=je(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=je(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+Tn(e);const l=-n.scrollTop;return ee(r).direction==="rtl"&&(a+=je(t.clientWidth,r.clientWidth)-i),{width:i,height:o,x:a,y:l}}function ka(e,t){const n=z(e),r=se(e),i=n.visualViewport;let o=r.clientWidth,a=r.clientHeight,l=0,u=0;if(i){o=i.width,a=i.height;const f=Dn();(!f||f&&t==="fixed")&&(l=i.offsetLeft,u=i.offsetTop)}return{width:o,height:a,x:l,y:u}}function Oa(e,t){const n=$e(e,!0,t==="fixed"),r=n.top+e.clientTop,i=n.left+e.clientLeft,o=re(e)?Ne(e):ne(1),a=e.clientWidth*o.x,l=e.clientHeight*o.y,u=i*o.x,f=r*o.y;return{width:a,height:l,x:u,y:f}}function br(e,t,n){let r;if(t==="viewport")r=ka(e,n);else if(t==="document")r=Ta(se(e));else if(Q(t))r=Oa(t,n);else{const i=Kr(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return qr(r)}function Vr(e,t){const n=we(e);return n===t||!Q(n)||Fe(n)?!1:ee(n).position==="fixed"||Vr(n,t)}function ja(e,t){const n=t.get(e);if(n)return n;let r=Je(e,[],!1).filter(l=>Q(l)&&Ue(l)!=="body"),i=null;const o=ee(e).position==="fixed";let a=o?we(e):e;for(;Q(a)&&!Fe(a);){const l=ee(a),u=Pn(a);!u&&l.position==="fixed"&&(i=null),(o?!u&&!i:!u&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||nt(a)&&!u&&Vr(e,a))?r=r.filter(h=>h!==a):i=l,a=we(a)}return t.set(e,r),r}function Na(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const a=[...n==="clippingAncestors"?Ft(t)?[]:ja(t,this._c):[].concat(n),r],l=a[0],u=a.reduce((f,h)=>{const p=br(t,h,i);return f.top=je(p.top,f.top),f.right=yn(p.right,f.right),f.bottom=yn(p.bottom,f.bottom),f.left=je(p.left,f.left),f},br(t,l,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function Ia(e){const{width:t,height:n}=Gr(e);return{width:t,height:n}}function Fa(e,t,n){const r=re(t),i=se(t),o=n==="fixed",a=$e(e,!0,o,t);let l={scrollLeft:0,scrollTop:0};const u=ne(0);if(r||!r&&!o)if((Ue(t)!=="body"||nt(i))&&(l=Ht(t)),r){const y=$e(t,!0,o,t);u.x=y.x+t.clientLeft,u.y=y.y+t.clientTop}else i&&(u.x=Tn(i));const f=i&&!r&&!o?zr(i,l):ne(0),h=a.left+l.scrollLeft-u.x-f.x,p=a.top+l.scrollTop-u.y-f.y;return{x:h,y:p,width:a.width,height:a.height}}function an(e){return ee(e).position==="static"}function wr(e,t){if(!re(e)||ee(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return se(e)===n&&(n=n.ownerDocument.body),n}function Yr(e,t){const n=z(e);if(Ft(e))return n;if(!re(e)){let i=we(e);for(;i&&!Fe(i);){if(Q(i)&&!an(i))return i;i=we(i)}return n}let r=wr(e,t);for(;r&&$a(r)&&an(r);)r=wr(r,t);return r&&Fe(r)&&an(r)&&!Pn(r)?n:r||La(e)||n}const Ha=async function(e){const t=this.getOffsetParent||Yr,n=this.getDimensions,r=await n(e.floating);return{reference:Fa(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function qa(e){return ee(e).direction==="rtl"}const Ua={convertOffsetParentRelativeRectToViewportRelativeRect:Da,getDocumentElement:se,getClippingRect:Na,getOffsetParent:Yr,getElementRects:Ha,getClientRects:Ba,getDimensions:Ia,getScale:Ne,isElement:Q,isRTL:qa};function Xr(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Wa(e,t){let n=null,r;const i=se(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,u){l===void 0&&(l=!1),u===void 0&&(u=1),o();const f=e.getBoundingClientRect(),{left:h,top:p,width:y,height:g}=f;if(l||t(),!y||!g)return;const b=xt(p),v=xt(i.clientWidth-(h+y)),S=xt(i.clientHeight-(p+g)),M=xt(h),$={rootMargin:-b+"px "+-v+"px "+-S+"px "+-M+"px",threshold:je(0,yn(1,u))||1};let R=!0;function T(oe){const O=oe[0].intersectionRatio;if(O!==u){if(!R)return a();O?a(!1,O):r=setTimeout(()=>{a(!1,1e-7)},1e3)}O===1&&!Xr(f,e.getBoundingClientRect())&&a(),R=!1}try{n=new IntersectionObserver(T,{...$,root:i.ownerDocument})}catch{n=new IntersectionObserver(T,$)}n.observe(e)}return a(!0),o}function Ga(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:u=!1}=r,f=Bn(e),h=i||o?[...f?Je(f):[],...Je(t)]:[];h.forEach(M=>{i&&M.addEventListener("scroll",n,{passive:!0}),o&&M.addEventListener("resize",n)});const p=f&&l?Wa(f,n):null;let y=-1,g=null;a&&(g=new ResizeObserver(M=>{let[L]=M;L&&L.target===f&&g&&(g.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var $;($=g)==null||$.observe(t)})),n()}),f&&!u&&g.observe(f),g.observe(t));let b,v=u?$e(e):null;u&&S();function S(){const M=$e(e);v&&!Xr(v,M)&&n(),v=M,b=requestAnimationFrame(S)}return n(),()=>{var M;h.forEach(L=>{i&&L.removeEventListener("scroll",n),o&&L.removeEventListener("resize",n)}),p==null||p(),(M=g)==null||M.disconnect(),g=null,u&&cancelAnimationFrame(b)}}const Ka=(e,t,n)=>{const r=new Map,i={platform:Ua,...n},o={...i.platform,_c:r};return Ea(e,t,{...i,platform:o})};function za(e){const t=e.renderRoot.querySelector(".inline-container-wrapper"),n=e.renderRoot.querySelector("[popover]");return Ga(t,n,()=>{n.matches(":popover-open")&&Ka(t,n,{strategy:"fixed"}).then(({x:i,y:o})=>{Object.assign(n.style,{left:`${i}px`,top:`${o}px`,width:`${t.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function Jr(e){e.renderRoot.querySelector("#eox-itemfilter-input-search").value="",Ir({target:{value:""}},e)}function Va(e,t){t.inlineMode&&e.stopPropagation()}function Ya(e){e.inlineMode&&(e.showDropdown=!0)}function Xa(e,t){t.inlineMode&&(e.stopPropagation(),t.showDropdown=!0)}function Ja(e,t){t.inlineMode&&e.key==="Escape"&&t.showDropdown&&(Jr(t),t.showDropdown=!1)}function Za(e,t){t.inlineMode&&e.target.tagName!=="DROPDOWN-FORM"&&e.target.tagName!=="EOX-ITEMFILTER"&&t.showDropdown&&(Jr(t),t.showDropdown=!1)}function Qa(e,t){var n,r,i=0,o,a,l,u,f,h,p,y=e[0],g=e[1],b=t.length;for(n=0;n<b;n++){r=0;var v=t[n],S=v.length-1;if(h=v[0],h[0]!==v[S][0]&&h[1]!==v[S][1])throw new Error("First and last coordinates in a ring must be the same");for(a=h[0]-y,l=h[1]-g,r;r<S;r++){if(p=v[r+1],u=p[0]-y,f=p[1]-g,l===0&&f===0){if(u<=0&&a>=0||a<=0&&u>=0)return 0}else if(f>=0&&l<=0||f<=0&&l>=0){if(o=$o(a,u,l,f,0,0),o===0)return 0;(o>0&&f>0&&l<=0||o<0&&f<=0&&l>0)&&i++}h=p,l=f,a=u}}return i%2!==0}function Le(e,t,n={}){const r={type:"Feature"};return(n.id===0||n.id)&&(r.id=n.id),n.bbox&&(r.bbox=n.bbox),r.properties=t||{},r.geometry=e,r}function el(e,t,n={}){if(!e)throw new Error("coordinates is required");if(!Array.isArray(e))throw new Error("coordinates must be an Array");if(e.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!vr(e[0])||!vr(e[1]))throw new Error("coordinates must contain numbers");return Le({type:"Point",coordinates:e},t,n)}function tl(e,t,n={}){if(e.length<2)throw new Error("coordinates must be an array of two or more positions");return Le({type:"LineString",coordinates:e},t,n)}function bn(e,t={}){const n={type:"FeatureCollection"};return t.id&&(n.id=t.id),t.bbox&&(n.bbox=t.bbox),n.features=e,n}function nl(e,t,n={}){return Le({type:"MultiLineString",coordinates:e},t,n)}function vr(e){return!isNaN(e)&&e!==null&&!Array.isArray(e)}function Zr(e){if(!e)throw new Error("coord is required");if(!Array.isArray(e)){if(e.type==="Feature"&&e.geometry!==null&&e.geometry.type==="Point")return[...e.geometry.coordinates];if(e.type==="Point")return[...e.coordinates]}if(Array.isArray(e)&&e.length>=2&&!Array.isArray(e[0])&&!Array.isArray(e[1]))return[...e];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function rl(e){if(Array.isArray(e))return e;if(e.type==="Feature"){if(e.geometry!==null)return e.geometry.coordinates}else if(e.coordinates)return e.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function He(e){return e.type==="Feature"?e.geometry:e}function J(e,t,n={}){if(!e)throw new Error("point is required");if(!t)throw new Error("polygon is required");const r=Zr(e),i=He(t),o=i.type,a=t.bbox;let l=i.coordinates;if(a&&il(r,a)===!1)return!1;o==="Polygon"&&(l=[l]);let u=!1;for(var f=0;f<l.length;++f){const h=Qa(r,l[f]);if(h===0)return!n.ignoreBoundary;h&&(u=!0)}return u}function il(e,t){return t[0]<=e[0]&&t[1]<=e[1]&&t[2]>=e[0]&&t[3]>=e[1]}class Qr{constructor(t=[],n=sl){if(this.data=t,this.length=this.data.length,this.compare=n,this.length>0)for(let r=(this.length>>1)-1;r>=0;r--)this._down(r)}push(t){this.data.push(t),this.length++,this._up(this.length-1)}pop(){if(this.length===0)return;const t=this.data[0],n=this.data.pop();return this.length--,this.length>0&&(this.data[0]=n,this._down(0)),t}peek(){return this.data[0]}_up(t){const{data:n,compare:r}=this,i=n[t];for(;t>0;){const o=t-1>>1,a=n[o];if(r(i,a)>=0)break;n[t]=a,t=o}n[t]=i}_down(t){const{data:n,compare:r}=this,i=this.length>>1,o=n[t];for(;t<i;){let a=(t<<1)+1,l=n[a];const u=a+1;if(u<this.length&&r(n[u],l)<0&&(a=u,l=n[u]),r(l,o)>=0)break;n[t]=l,t=a}n[t]=o}}function sl(e,t){return e<t?-1:e>t?1:0}function ei(e,t){return e.p.x>t.p.x?1:e.p.x<t.p.x?-1:e.p.y!==t.p.y?e.p.y>t.p.y?1:-1:1}function ol(e,t){return e.rightSweepEvent.p.x>t.rightSweepEvent.p.x?1:e.rightSweepEvent.p.x<t.rightSweepEvent.p.x?-1:e.rightSweepEvent.p.y!==t.rightSweepEvent.p.y?e.rightSweepEvent.p.y<t.rightSweepEvent.p.y?1:-1:1}class xr{constructor(t,n,r,i){this.p={x:t[0],y:t[1]},this.featureId=n,this.ringId=r,this.eventId=i,this.otherEvent=null,this.isLeftEndpoint=null}isSamePoint(t){return this.p.x===t.p.x&&this.p.y===t.p.y}}function al(e,t){if(e.type==="FeatureCollection"){const n=e.features;for(let r=0;r<n.length;r++)Ar(n[r],t)}else Ar(e,t)}let At=0,_t=0,Ct=0;function Ar(e,t){const n=e.type==="Feature"?e.geometry:e;let r=n.coordinates;(n.type==="Polygon"||n.type==="MultiLineString")&&(r=[r]),n.type==="LineString"&&(r=[[r]]);for(let i=0;i<r.length;i++)for(let o=0;o<r[i].length;o++){let a=r[i][o][0],l=null;_t=_t+1;for(let u=0;u<r[i][o].length-1;u++){l=r[i][o][u+1];const f=new xr(a,At,_t,Ct),h=new xr(l,At,_t,Ct+1);f.otherEvent=h,h.otherEvent=f,ei(f,h)>0?(h.isLeftEndpoint=!0,f.isLeftEndpoint=!1):(f.isLeftEndpoint=!0,h.isLeftEndpoint=!1),t.push(f),t.push(h),a=l,Ct=Ct+1}}At=At+1}class ll{constructor(t){this.leftSweepEvent=t,this.rightSweepEvent=t.otherEvent}}function cl(e,t){if(e===null||t===null||e.leftSweepEvent.ringId===t.leftSweepEvent.ringId&&(e.rightSweepEvent.isSamePoint(t.leftSweepEvent)||e.rightSweepEvent.isSamePoint(t.leftSweepEvent)||e.rightSweepEvent.isSamePoint(t.rightSweepEvent)||e.leftSweepEvent.isSamePoint(t.leftSweepEvent)||e.leftSweepEvent.isSamePoint(t.rightSweepEvent)))return!1;const n=e.leftSweepEvent.p.x,r=e.leftSweepEvent.p.y,i=e.rightSweepEvent.p.x,o=e.rightSweepEvent.p.y,a=t.leftSweepEvent.p.x,l=t.leftSweepEvent.p.y,u=t.rightSweepEvent.p.x,f=t.rightSweepEvent.p.y,h=(f-l)*(i-n)-(u-a)*(o-r),p=(u-a)*(r-l)-(f-l)*(n-a),y=(i-n)*(r-l)-(o-r)*(n-a);if(h===0)return!1;const g=p/h,b=y/h;if(g>=0&&g<=1&&b>=0&&b<=1){const v=n+g*(i-n),S=r+g*(o-r);return[v,S]}return!1}function ul(e,t){t=t||!1;const n=[],r=new Qr([],ol);for(;e.length;){const i=e.pop();if(i.isLeftEndpoint){const o=new ll(i);for(let a=0;a<r.data.length;a++){const l=r.data[a];if(t&&l.leftSweepEvent.featureId===i.featureId)continue;const u=cl(o,l);u!==!1&&n.push(u)}r.push(o)}else i.isLeftEndpoint===!1&&r.pop()}return n}function fl(e,t){const n=new Qr([],ei);return al(e,n),ul(n,t)}var hl=fl;function kn(e,t,n={}){const{removeDuplicates:r=!0,ignoreSelfIntersections:i=!0}=n;let o=[];e.type==="FeatureCollection"?o=o.concat(e.features):e.type==="Feature"?o.push(e):(e.type==="LineString"||e.type==="Polygon"||e.type==="MultiLineString"||e.type==="MultiPolygon")&&o.push(Le(e)),t.type==="FeatureCollection"?o=o.concat(t.features):t.type==="Feature"?o.push(t):(t.type==="LineString"||t.type==="Polygon"||t.type==="MultiLineString"||t.type==="MultiPolygon")&&o.push(Le(t));const a=hl(bn(o),i);let l=[];if(r){const u={};a.forEach(f=>{const h=f.join(",");u[h]||(u[h]=!0,l.push(f))})}else l=a;return bn(l.map(u=>el(u)))}function ti(e,t,n){if(e!==null)for(var r,i,o,a,l,u,f,h=0,p=0,y,g=e.type,b=g==="FeatureCollection",v=g==="Feature",S=b?e.features.length:1,M=0;M<S;M++){f=b?e.features[M].geometry:v?e.geometry:e,y=f?f.type==="GeometryCollection":!1,l=y?f.geometries.length:1;for(var L=0;L<l;L++){var $=0,R=0;if(a=y?f.geometries[L]:f,a!==null){u=a.coordinates;var T=a.type;switch(h=0,T){case null:break;case"Point":if(t(u,p,M,$,R)===!1)return!1;p++,$++;break;case"LineString":case"MultiPoint":for(r=0;r<u.length;r++){if(t(u[r],p,M,$,R)===!1)return!1;p++,T==="MultiPoint"&&$++}T==="LineString"&&$++;break;case"Polygon":case"MultiLineString":for(r=0;r<u.length;r++){for(i=0;i<u[r].length-h;i++){if(t(u[r][i],p,M,$,R)===!1)return!1;p++}T==="MultiLineString"&&$++,T==="Polygon"&&R++}T==="Polygon"&&$++;break;case"MultiPolygon":for(r=0;r<u.length;r++){for(R=0,i=0;i<u[r].length;i++){for(o=0;o<u[r][i].length-h;o++){if(t(u[r][i][o],p,M,$,R)===!1)return!1;p++}R++}$++}break;case"GeometryCollection":for(r=0;r<a.geometries.length;r++)if(ti(a.geometries[r],t)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function dl(e,t){var n,r,i,o,a,l,u,f,h,p,y=0,g=e.type==="FeatureCollection",b=e.type==="Feature",v=g?e.features.length:1;for(n=0;n<v;n++){for(l=g?e.features[n].geometry:b?e.geometry:e,f=g?e.features[n].properties:b?e.properties:{},h=g?e.features[n].bbox:b?e.bbox:void 0,p=g?e.features[n].id:b?e.id:void 0,u=l?l.type==="GeometryCollection":!1,a=u?l.geometries.length:1,i=0;i<a;i++){if(o=u?l.geometries[i]:l,o===null){if(t(null,y,f,h,p)===!1)return!1;continue}switch(o.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(t(o,y,f,h,p)===!1)return!1;break}case"GeometryCollection":{for(r=0;r<o.geometries.length;r++)if(t(o.geometries[r],y,f,h,p)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}y++}}function $t(e,t){dl(e,function(n,r,i,o,a){var l=n===null?null:n.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return t(Le(n,i,{bbox:o,id:a}),r,0)===!1?!1:void 0}var u;switch(l){case"MultiPoint":u="Point";break;case"MultiLineString":u="LineString";break;case"MultiPolygon":u="Polygon";break}for(var f=0;f<n.coordinates.length;f++){var h=n.coordinates[f],p={type:u,coordinates:h};if(t(Le(p,i),r,f)===!1)return!1}})}function wn(e,t={}){const n=He(e);switch(!t.properties&&e.type==="Feature"&&(t.properties=e.properties),n.type){case"Polygon":return pl(n,t);case"MultiPolygon":return gl(n,t);default:throw new Error("invalid poly")}}function pl(e,t={}){const r=He(e).coordinates,i=t.properties?t.properties:e.type==="Feature"?e.properties:{};return ni(r,i)}function gl(e,t={}){const r=He(e).coordinates,i=t.properties?t.properties:e.type==="Feature"?e.properties:{},o=[];return r.forEach(a=>{o.push(ni(a,i))}),bn(o)}function ni(e,t){return e.length>1?nl(e,t):tl(e[0],t)}function yl(e,t,{ignoreSelfIntersections:n=!0}={ignoreSelfIntersections:!0}){let r=!0;return $t(e,i=>{$t(t,o=>{if(r===!1)return!1;r=ml(i.geometry,o.geometry,n)})}),r}function ml(e,t,n){switch(e.type){case"Point":switch(t.type){case"Point":return!xl(e.coordinates,t.coordinates);case"LineString":return!_r(t,e);case"Polygon":return!J(e,t)}break;case"LineString":switch(t.type){case"Point":return!_r(e,t);case"LineString":return!bl(e,t,n);case"Polygon":return!Cr(t,e,n)}break;case"Polygon":switch(t.type){case"Point":return!J(t,e);case"LineString":return!Cr(e,t,n);case"Polygon":return!wl(t,e,n)}}return!1}function _r(e,t){for(let n=0;n<e.coordinates.length-1;n++)if(vl(e.coordinates[n],e.coordinates[n+1],t.coordinates))return!0;return!1}function bl(e,t,n){return kn(e,t,{ignoreSelfIntersections:n}).features.length>0}function Cr(e,t,n){for(const i of t.coordinates)if(J(i,e))return!0;return kn(t,wn(e),{ignoreSelfIntersections:n}).features.length>0}function wl(e,t,n){for(const i of e.coordinates[0])if(J(i,t))return!0;for(const i of t.coordinates[0])if(J(i,e))return!0;return kn(wn(e),wn(t),{ignoreSelfIntersections:n}).features.length>0}function vl(e,t,n){const r=n[0]-e[0],i=n[1]-e[1],o=t[0]-e[0],a=t[1]-e[1];return r*a-i*o!==0?!1:Math.abs(o)>=Math.abs(a)?o>0?e[0]<=n[0]&&n[0]<=t[0]:t[0]<=n[0]&&n[0]<=e[0]:a>0?e[1]<=n[1]&&n[1]<=t[1]:t[1]<=n[1]&&n[1]<=e[1]}function xl(e,t){return e[0]===t[0]&&e[1]===t[1]}function Al(e,t,{ignoreSelfIntersections:n=!0}={}){let r=!1;return $t(e,i=>{$t(t,o=>{if(r===!0)return!0;r=!yl(i.geometry,o.geometry,{ignoreSelfIntersections:n})})}),r}var _l=Al;function Lt(e,t={}){if(e.bbox!=null&&t.recompute!==!0)return e.bbox;const n=[1/0,1/0,-1/0,-1/0];return ti(e,r=>{n[0]>r[0]&&(n[0]=r[0]),n[1]>r[1]&&(n[1]=r[1]),n[2]<r[0]&&(n[2]=r[0]),n[3]<r[1]&&(n[3]=r[1])}),n}function Rt(e,t,n={}){const r=Zr(e),i=rl(t);for(let o=0;o<i.length-1;o++){let a=!1;if(n.ignoreEndVertices&&(o===0&&(a="start"),o===i.length-2&&(a="end"),o===0&&o+1===i.length-1&&(a="both")),Cl(i[o],i[o+1],r,a,typeof n.epsilon>"u"?null:n.epsilon))return!0}return!1}function Cl(e,t,n,r,i){const o=n[0],a=n[1],l=e[0],u=e[1],f=t[0],h=t[1],p=n[0]-l,y=n[1]-u,g=f-l,b=h-u,v=p*b-y*g;if(i!==null){if(Math.abs(v)>i)return!1}else if(v!==0)return!1;if(Math.abs(g)===Math.abs(b)&&Math.abs(g)===0)return r?!1:n[0]===e[0]&&n[1]===e[1];if(r){if(r==="start")return Math.abs(g)>=Math.abs(b)?g>0?l<o&&o<=f:f<=o&&o<l:b>0?u<a&&a<=h:h<=a&&a<u;if(r==="end")return Math.abs(g)>=Math.abs(b)?g>0?l<=o&&o<f:f<o&&o<=l:b>0?u<=a&&a<h:h<a&&a<=u;if(r==="both")return Math.abs(g)>=Math.abs(b)?g>0?l<o&&o<f:f<o&&o<l:b>0?u<a&&a<h:h<a&&a<u}else return Math.abs(g)>=Math.abs(b)?g>0?l<=o&&o<=f:f<=o&&o<=l:b>0?u<=a&&a<=h:h<=a&&a<=u;return!1}function Ml(e,t){var n=He(e),r=He(t),i=n.type,o=r.type;switch(i){case"Point":switch(o){case"MultiPoint":return Sl(n,r);case"LineString":return Rt(n,r,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return J(n,r,{ignoreBoundary:!0});default:throw new Error("feature2 "+o+" geometry not supported")}case"MultiPoint":switch(o){case"MultiPoint":return El(n,r);case"LineString":return $l(n,r);case"Polygon":case"MultiPolygon":return Ll(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"LineString":switch(o){case"LineString":return Rl(n,r);case"Polygon":case"MultiPolygon":return Pl(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"Polygon":switch(o){case"Polygon":case"MultiPolygon":return Dl(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}default:throw new Error("feature1 "+i+" geometry not supported")}}function Sl(e,t){var n,r=!1;for(n=0;n<t.coordinates.length;n++)if(ii(t.coordinates[n],e.coordinates)){r=!0;break}return r}function El(e,t){for(var n=0;n<e.coordinates.length;n++){for(var r=!1,i=0;i<t.coordinates.length;i++)ii(e.coordinates[n],t.coordinates[i])&&(r=!0);if(!r)return!1}return!0}function $l(e,t){for(var n=!1,r=0;r<e.coordinates.length;r++){if(!Rt(e.coordinates[r],t))return!1;n||(n=Rt(e.coordinates[r],t,{ignoreEndVertices:!0}))}return n}function Ll(e,t){for(var n=!0,r=!1,i=0;i<e.coordinates.length;i++){if(r=J(e.coordinates[i],t),!r){n=!1;break}r=J(e.coordinates[i],t,{ignoreBoundary:!0})}return n&&r}function Rl(e,t){for(var n=0;n<e.coordinates.length;n++)if(!Rt(e.coordinates[n],t))return!1;return!0}function Pl(e,t){var n=Lt(t),r=Lt(e);if(!ri(n,r))return!1;for(var i=!1,o=0;o<e.coordinates.length;o++){if(!J(e.coordinates[o],t))return!1;if(i||(i=J(e.coordinates[o],t,{ignoreBoundary:!0})),!i&&o<e.coordinates.length-1){var a=Bl(e.coordinates[o],e.coordinates[o+1]);i=J(a,t,{ignoreBoundary:!0})}}return i}function Dl(e,t){var n=Lt(e),r=Lt(t);if(!ri(r,n))return!1;for(var i=0;i<e.coordinates[0].length;i++)if(!J(e.coordinates[0][i],t))return!1;return!0}function ri(e,t){return!(e[0]>t[0]||e[2]<t[2]||e[1]>t[1]||e[3]<t[3])}function ii(e,t){return e[0]===t[0]&&e[1]===t[1]}function Bl(e,t){return[(e[0]+t[0])/2,(e[1]+t[1])/2]}var Tl=Ml;const kl=(e,t)=>t?_l(e,t):!0,Ol=(e,t)=>t?Tl(e,t):!0;function jl(e,t="highlight",n="title"){const r=(o,a,l)=>{const u=a.split(".");let f;for(f=0;f<u.length-1;f++)o=o[u[f]];o[u[f]]=l},i=(o,a=[])=>{let l="",u=0;return a.forEach(f=>{const h=f[1]+1;l+=[o.substring(u,f[0]),`<mark class="${t}">`,o.substring(f[0],h),"</mark>"].join(""),u=h}),l+=o.substring(u),l};return e.filter(({matches:o})=>o&&o.length).map(({item:o,matches:a})=>{const l={...o};return a.forEach(u=>{u.key===n&&r(l,u.key,i(u.value,u.indices))}),l})}let si;const Nl=(e,t)=>{si=new _e(e,{threshold:.4,distance:50,includeMatches:!0,useExtendedSearch:!0,...t})},Il=async(e,t,n)=>{const r=Object.entries(t).filter(([,l])=>l.type==="text"||l.type==="select"||l.type==="multiselect").reduce((l,[u,f])=>{const h="$or",p=[],y=(g,b)=>{const v={};f.type==="text"?v[g]=`${b}`:v[u]=`="${g}"`,p.push(v)};return Object.entries(f.state).filter(([,g])=>g).forEach(([g,b])=>y(g,b)),p.length>0&&l.push({[h]:p}),l},[]);let i;if(!(r.length>0)&&n.matchAllWhenEmpty!==!1)i=e;else{const l={$and:[...r]},u=si.search(l);i=n.enableHighlighting?jl(u,"highlight",n.titleProperty):u.map(f=>f.item)}const o=Object.entries(t).filter(([,l])=>l.type==="range").reduce((l,[u,f])=>(l[u]={min:f.state.min,max:f.state.max,format:f.format},l),{});if(Object.keys(o).length>0){const l=[];for(let u=0;u<i.length;u++){const f={};for(const[h,p]of Object.entries(o)){const y=b=>p.format==="date"?Xe(b).unix():b,g=Ze(h,i[u]);g?Array.isArray(g)?f[h]=o[h].min<=y(g[1])&&y(g[0])<=o[h].max:y(g)>=o[h].min&&y(g)<=o[h].max?f[h]=!0:f[h]=!1:f[h]=!0}Object.values(f).every(h=>!!h)&&l.push(i[u])}i=[...l]}const a=Object.entries(t).filter(([,l])=>l.type==="spatial").reduce((l,[u,f])=>(l[u]={geometry:f.state.geometry,mode:f.state.mode},l),{});if(Object.values(a).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let u=0;u<i.length;u++){const f={};for(const h of Object.keys(a)){const p=Ze(h,i[u]),y=a[h].mode||"within";p&&(y==="within"?Ol(p,a[h].geometry):kl(p,a[h].geometry))?f[h]=!0:f[h]=!1}Object.values(f).every(h=>!!h)&&l.push(i[u])}i=[...l]}return i};function Fl(e,t){return[{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...e&&{format:"GeoJSON"},...e&&{url:t}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]},{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}}]}function qt(e){if(!e.dirty)return null;switch(e.type){case"multiselect":for(const n in e.state)e.state.hasOwnProperty(n)&&(e.state[n]=!1);break;case"range":e.state.min=e.min,e.state.max=e.max;break;case"select":for(const n in e.state)e.state.hasOwnProperty(n)&&(e.state[n]=!1);break;case"spatial":e.state.geometry=void 0;break;case"text":e.keys.forEach(n=>{e.state[n]=void 0});break}return delete e.stringifiedState,delete e.dirty,e}function Mr(e,t){return e*2+t}function Hl(e){return Object.keys(e).map(t=>({title:C`${e[t].title||e[t].key}:
        <strong>${e[t].stringifiedState}</strong>`,key:t})).filter(t=>e[t.key].dirty)}function vn(e){return Object.values(e).map(t=>t.dirty).filter(t=>t).length>0}async function ql(e,t,n){return await(await fetch(`${n.externalFilter(e,t)}`)).json()}function oi(e,t,n){let r;if(e.detail?r=e.detail.target:r=e.target,r!=null&&r.classList.contains("details-filter")){if(!r.open||t!=null&&t.expandMultipleFilters)return;n.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(i=>{const o=i.shadowRoot.querySelector(".details-filter");o&&o!==r&&o.removeAttribute("open")})}else{if(!(r!=null&&r.open)||t!=null&&t.expandMultipleResults)return;n.querySelectorAll("details").forEach(i=>{i!==r&&i.removeAttribute("open")})}}function Ze(e,t){return e!=null&&e.includes(".")?e.split(".").reduce((n,r)=>n&&n[r],t):t[e]}var P,ai,xn,An,li,_n,Cn,ci,Mn,ui,fi;class Ul extends ie{constructor(){super();q(this,P);this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=E(this,P,li).bind(this),this._handleKeyDown=E(this,P,_n).bind(this)}static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}set showDropdown(n){this.renderRoot.querySelector("[popover]").togglePopover(n)}get showDropdown(){var n;return(n=this.renderRoot.querySelector("[popover]"))==null?void 0:n.matches(":popover-open")}connectedCallback(){super.connectedCallback(),this.inlineMode&&E(this,P,xn).call(this)}disconnectedCallback(){this.inlineMode&&E(this,P,An).call(this),super.disconnectedCallback()}_overlayCleanup(){}updateInline(){this.inlineMode&&this.requestUpdate()}updated(n){n.has("inlineMode")&&(this.inlineMode?E(this,P,xn).call(this):E(this,P,An).call(this))}render(){return C`
      <style>
        ${!this.unstyled&&tt}
      </style>
      ${this.inlineMode?C`
            <div
              class="inline-container-wrapper"
              @click="${E(this,P,Cn)}"
            >
              <div class="inline-container" part="container">
                <div class="chip-container">
                  <div class="chip-wrapper">
                    <eox-itemfilter-chips
                      .items=${Hl(this.filters)}
                      .controller=${{remove:n=>E(this,P,ui).call(this,n)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${I(vn(this.filters),()=>C`
                      <span
                        class="chip-close"
                        @click=${()=>this.dispatchEvent(new CustomEvent("reset"))}
                      ></span>
                    `)}
                </div>
                <div
                  class="input-container ${vn(this.filters)?"dirty-filter-input":""}"
                >
                  <input
                    autocomplete="off"
                    id="eox-itemfilter-input-search"
                    type="text"
                    @click="${E(this,P,Cn)}"
                    @focus="${E(this,P,ci)}"
                    @input="${E(this,P,fi)}"
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
                  @keydown="${E(this,P,_n)}"
                  @click="${E(this,P,Mn)}"
                  @focus="${E(this,P,Mn)}"
                >
                  <slot name="section"></slot>
                </div>
              </div>
            </div>
          `:C`<slot name="section"></slot>`}
    `}}P=new WeakSet,ai=function(){setTimeout(()=>this._overlayCleanup=za(this))},xn=function(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),E(this,P,ai).call(this)},An=function(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()},li=function(n){Za(n,this)},_n=function(n){Ja(n,this)},Cn=function(n){Xa(n,this)},ci=function(){Ya(this)},Mn=function(n){Va(n,this)},ui=function(n){Aa(n,this)},fi=function(n){Ir(n,this)};customElements.define("eox-itemfilter-container",Ul);function Wl(e){const t=e.renderRoot.querySelector("input[type='text']");t.value="",qt(e.filterObject),e.requestUpdate()}function Gl(e){const t=e.renderRoot.querySelector("input[type='text']");e.isValid=t.checkValidity(),e.filterObject.keys.forEach(n=>{e.filterObject.state[n]=t.value}),e.filterObject.dirty=!0,e.filterObject.stringifiedState=t.value,e.dispatchEvent(new CustomEvent("filter")),t.value===""&&e.reset()}const Sn="ddd, D MMM YYYY HH:mm:ss";function Kl(e){if(e.filterObject=qt(e.filterObject),e.filterObject){const t=e.querySelector("tc-range-slider"),n=e.filterObject.min,r=e.filterObject.max;t.value1!==n&&(t.value1=n),t.value2!==r&&(t.value2=r)}e.requestUpdate()}function zl(e,t){const[n,r]=e.detail.values;(n!==t.filterObject.state.min||r!==t.filterObject.state.max)&&([t.filterObject.state.min,t.filterObject.state.max]=[n,r],t.filterObject.dirty=!0),t.filterObject.dirty&&(t.filterObject.stringifiedState=t.filterObject.format==="date"?`${Xe.unix(n).format(Sn)} - ${Xe.unix(r).format(Sn)}`:`${n} - ${r}`),t.dispatchEvent(new CustomEvent("filter")),n===t.filterObject.min&&r===t.filterObject.max?t.reset():t.requestUpdate()}function Vl(e,t,n){const r=n.filterObject.format==="date",i=n.filterObject.state[e],o=r?Xe.unix(i).format(Sn):i;return C`<div class="range-${t}">${o}</div>`}function Yl(e){Xl(-1,e),qt(e.filterObject),e.requestUpdate()}function Xl(e,t){t.selectedItems=[],On(t),di(t)}function hi(e,t){const n=t.selectedItems.indexOf(e);n>=0?t.selectedItems=t.selectedItems.filter((r,i)=>i!==n):t.type==="multiselect"?t.selectedItems=[...t.selectedItems,e]:(t.selectedItems=[e],t.showSuggestions=!1),On(t),di(t)}function Jl(e,t){t.query=e.target.value,t.showSuggestions=!0}function Zl(e,t){switch(e.key){case"ArrowDown":t.highlightedIndex=Math.min(t.highlightedIndex+1,t.filteredSuggestions.length-1);break;case"ArrowUp":t.highlightedIndex=Math.max(t.highlightedIndex-1,0);break;case"Enter":t.highlightedIndex>=0&&hi(t.filteredSuggestions[t.highlightedIndex],t);break;case"Escape":t.showSuggestions=!1;break}}function Ql(e,t){(e.has("suggestions")||e.has("query"))&&On(t)}function ec(e,t){var r;const n=((r=e.filterObject)==null?void 0:r.sort)||((i,o)=>i.localeCompare(o));return t.sort(n).map(i=>i)}function On(e){var n,r,i;let t;e.query&&(t=new _e(e.suggestions,{threshold:.4}).search(e.query).map(a=>a.item)),e.filteredSuggestions=ec(e,t||e.suggestions),(n=e.filterObject)!=null&&n.filterKeys&&(e.filteredSuggestions=(r=e.filterObject)==null?void 0:r.filterKeys.map(o=>`${o}`),e.filterObject.state=(i=e.filterObject)==null?void 0:i.filterKeys.map(o=>`${o}`).reduce((o,a)=>(a in o||(o[a]=void 0),o),e.filterObject.state)),e.highlightedIndex=-1}function di(e){Object.keys(e.filterObject.state).forEach(t=>{e.filterObject.state[t]=e.selectedItems.includes(t)}),e.filterObject.stringifiedState=Object.keys(e.filterObject.state).filter(t=>e.filterObject.state[t]).join(", ")||"",e.filterObject.dirty=e.filterObject.stringifiedState.length>0,e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}function tc(e){qt(e.filterObject),e.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),e.requestUpdate()}function nc(e){e.renderRoot.querySelector("#eox-map").innerHTML="",pi(e)}function rc(e,t){t.filterObject.state.mode=e;const n=new CustomEvent("filter",{detail:{[t.filterObject.key]:{}}});t.dispatchEvent(n)}function pi(e){const t=e.renderRoot.querySelector("#eox-map");t.innerHTML===""&&(t.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const n=e.geometry&&ic(e.geometry),r=Fl(e.geometry,n);e.eoxMap=e.renderRoot.querySelector("eox-map"),setTimeout(()=>{e.eoxMap.layers=r;const i=o=>{const a=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:o.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});e.dispatchEvent(a)};e.eoxMap.interactions.drawInteraction.on("drawend",o=>{i(o.feature),e.eoxMap.removeInteraction("drawInteraction")}),e.eoxMap.interactions.drawInteraction_modify.on("modifyend",o=>{i(o.features.getArray()[0])})},1e3)}function ic(e){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:e}]}))}`}var Tt;class sc extends ie{constructor(){super();q(this,Tt,()=>{Gl(this)});Ye(this,"debouncedInputHandler",Nt(G(this,Tt),500,{leading:!0}));this.filterObject={},this.unstyled=!1,this.tabIndex=0,this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}reset(){Wl(this)}createRenderRoot(){return this}render(){return I(this.filterObject,()=>{var n;return C`
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
      `})}}Tt=new WeakMap;customElements.define("eox-itemfilter-text",sc);function oc(e,t,n){return e.filter(r=>{const i=r[n.config.aggregateResults];let o;return n.filters[n.config.aggregateResults]&&(o=Object.keys(n.filters[n.config.aggregateResults]).filter(l=>n.filters[n.config.aggregateResults].state[l])),(o!=null&&o.length?o.includes(t):!0)&&Array.isArray(i)?i.includes(t):i===t})}function ac(e,t){return C`
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
        ${gi(e,t)}
      </div>
    </details>
  `}function gi(e,t){const n=t.results,r=e?t.aggregateResults(n,e):n,i=t.config,o=a=>{var l;return((l=t.selectedResult)==null?void 0:l[i.idProperty])===a[i.idProperty]?"highlighted":xe};return C`
    <ul class=${t.resultType}>
      ${Mo(r,a=>a.id,a=>C`
          <li
            class=${o(a)}
            @click=${()=>{t.selectedResult===a?t.selectedResult=null:t.selectedResult=a,t.dispatchEvent(new CustomEvent("result",{detail:t.selectedResult}))}}
          >
            <span id="${a.id}">
              ${I(i.subTitleProperty||i.imageProperty,()=>C`
                  ${Ze(i.imageProperty,a)?C`
                        <img
                          class="image"
                          src="${Ze(i.imageProperty,a)}"
                        />
                      `:C`
                        <svg
                          class="image"
                          width="800"
                          height="600"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="800"
                            height="600"
                            fill="var(--primary-color)"
                          />
                        </svg>
                      `}
                  <div class="title-container">
                    <span class="title"
                      >${sn(a[i.titleProperty])}</span
                    >
                    <span class="subtitle"
                      >${sn(a[i.subTitleProperty])}</span
                    >
                  </div>
                `,()=>C`
                  <span class="title"
                    >${sn(a[i.titleProperty])}</span
                  >
                `)}
            </span>
          </li>
        `)}
    </ul>
  `}var Pe,En,yi;class lc extends ie{constructor(){super();q(this,Pe);this.config=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list"}static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Object},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String}}}aggregateResults(n,r){return oc(n,r,this)}createRenderRoot(){return this}handleAccordion(n){oi(n,this.config,this)}render(){return C`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${I(this.results.length<1,()=>C`<small class="no-results">No matching items</small>`,()=>xe)}
          <ul id="results" part="results">
            ${I(this.config.aggregateResults,()=>jt(this.resultAggregation.filter(n=>this.aggregateResults(this.results,n).length),n=>C`${I(this.aggregateResults(this.results,n).length===1&&this.config.autoSpreadSingle,()=>C`<div style="margin-left: -8px">
                          ${E(this,Pe,En).call(this,n)}
                        </div>`,()=>E(this,Pe,yi).call(this,n))}`),()=>E(this,Pe,En).call(this))}
          </ul>
        </div>
      </section>
    `}}Pe=new WeakSet,En=function(n){return gi(n,this)},yi=function(n){return ac(n,this)};customElements.define("eox-itemfilter-results",lc);var ve,bi,wi,vi;class mi extends ie{constructor(){super();q(this,ve);Ye(this,"debouncedInputHandler",Nt(E(this,ve,vi),500,{leading:!0}));this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(n){Ql(n,this)}reset(){Yl(this)}firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(n=>this.filterObject.state[n]?n:null).filter(n=>!!n),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}render(){const n=this.type.includes("multi")?"checkbox":"radio",r=this.filteredSuggestions.length>5?"select-overflow":xe;return C`
      <style>
        ${!this.unstyled&&tt}
        ${!this.unstyled&&So}
        ${!this.unstyled&&Eo}
      </style>
      ${I(this.suggestions.length>10,()=>C`<div class="autocomplete-container">
            <div class="autocomplete-container-wrapper">
              <input
                autocomplete="off"
                tabindex=${this.tabIndex}
                class="autocomplete-input"
                type="text"
                .value=${this.query}
                placeholder="${this.filterObject.placeholder||""}"
                @input=${E(this,ve,bi)}
                @keydown=${E(this,ve,wi)}
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
    `}}ve=new WeakSet,bi=function(n){Jl(n,this)},wi=function(n){Zl(n,this)},vi=function(n){hi(n,this)},Ye(mi,"properties",{filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}});customElements.define("eox-itemfilter-select",mi);var De,Ai,$n;class xi extends ie{constructor(){super();q(this,De);this.filterObject={},this.tabIndex=0,this.inputHandler=E(this,De,Ai).bind(this),this.debouncedInputHandler=Nt(this.inputHandler,500,{leading:!1})}reset(){Kl(this)}createRenderRoot(){return this}render(){return I(this.filterObject,()=>C`
        ${E(this,De,$n).call(this,"min","before")}
        <tc-range-slider
          min="${this.filterObject.min}"
          max="${this.filterObject.max}"
          value1="${this.filterObject.state.min||this.filterObject.min}"
          value2="${this.filterObject.state.max||this.filterObject.max}"
          step="${this.filterObject.step||1}"
          @change=${this.debouncedInputHandler}
        ></tc-range-slider>
        ${E(this,De,$n).call(this,"max","after")}
      `)}}De=new WeakSet,Ai=function(n){zl(n,this)},$n=function(n,r){return Vl(n,r,this)},Ye(xi,"properties",{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number}});customElements.define("eox-itemfilter-range",xi);var kt,_i;class cc extends ie{constructor(){super();q(this,kt);this.filterObject={},this.tabIndex=0}static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}reset(){tc(this)}createRenderRoot(){return this}render(){return I(this.filterObject,()=>{var n;return C`
        <form style="display: inline">
          ${jt(["intersects","within"],r=>C`
              <label>
                <input
                  tabindex=${this.tabIndex}
                  type="radio"
                  name="mode"
                  .checked="${(this.filterObject.state.mode||"")===r||xe}"
                  value="${r}"
                  @click=${()=>E(this,kt,_i).call(this,r)}
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
      `})}}kt=new WeakSet,_i=function(n){rc(n,this)};customElements.define("eox-itemfilter-spatial",cc);var Ot,Ci;class uc extends ie{constructor(){super();q(this,Ot);this.geometry=null,this.eoxMap=null}static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}firstUpdated(){E(this,Ot,Ci).call(this)}reset(){nc(this)}render(){return C`<div id="eox-map"></div>`}}Ot=new WeakSet,Ci=function(){pi(this)};customElements.define("eox-itemfilter-spatial-filter",uc);function fc(e,t){t.renderRoot.querySelectorAll(".chip").forEach(n=>{n.classList.remove("highlighted")}),e.target.classList.add("highlighted"),t.requestUpdate()}function hc(e,t){const{code:n,target:r}=e;r.id==="eox-itemfilter-input-search"&&(t.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(n)||(n==="Space"&&e.preventDefault(),["Escape","Space","Enter"].includes(n)||e.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(n)&&dc(n,e.target.value??"",t)))}function dc(e,t,n){const r=n.renderRoot.querySelector(".chip.highlighted");if((e==="Escape"||t)&&r&&r.classList.remove("highlighted"),e==="Backspace"&&!t){if(n.items.length){r&&(r.querySelector(".chip-item-close").click(),n.items.splice(Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(r),1));const i=n.renderRoot.querySelectorAll(".chip")[n.renderRoot.querySelectorAll(".chip").length-1];i.classList.contains("highlighted")||i.classList.add("highlighted"),n.requestUpdate()}n._dispatchEvent()}if((e==="ArrowLeft"||e==="ArrowRight")&&!t){if(n.renderRoot.querySelectorAll(".chip").length<1)return;let i=0;const o=n.renderRoot.querySelector(".chip.highlighted");o&&(i=Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(o),o.classList.remove("highlighted")),i=i+(e==="ArrowLeft"?-1:1),e==="ArrowLeft"&&i<0&&(i=n.renderRoot.querySelectorAll(".chip").length-1),e==="ArrowRight"&&i>n.renderRoot.querySelectorAll(".chip").length-1&&(i=0),Array.from(n.renderRoot.querySelectorAll(".chip"))[i].classList.add("highlighted")}}var Be,Ln,Mi;class pc extends ie{constructor(){super();q(this,Be);this.items={},this.controller={}}static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",E(this,Be,Ln).bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",E(this,Be,Ln).bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}render(){return C`
      <style>
        ${tt}
      </style>
      <span class="chip-container">
        ${jt(this.items,n=>C`
            <span class="chip" @click=${E(this,Be,Mi).bind(this)}>
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
    `}}Be=new WeakSet,Ln=function(n){hc(n,this)},Mi=function(n){fc(n,this)};customElements.define("eox-itemfilter-chips",pc);const gc=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),Sr=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","expandMultipleFilters","expandResults","expandMultipleResults","items"];var yc=200,jn="__lodash_hash_undefined__",mc=1/0,bc="[object Function]",wc="[object GeneratorFunction]",vc=/[\\^$.*+?()[\]{}|]/g,xc=/^\[object .+?Constructor\]$/,Ac=typeof be=="object"&&be&&be.Object===Object&&be,_c=typeof self=="object"&&self&&self.Object===Object&&self,Nn=Ac||_c||Function("return this")();function Cc(e,t){var n=e?e.length:0;return!!n&&Sc(e,t,0)>-1}function Mc(e,t,n,r){for(var i=e.length,o=n+-1;++o<i;)if(t(e[o],o,e))return o;return-1}function Sc(e,t,n){if(t!==t)return Mc(e,Ec,n);for(var r=n-1,i=e.length;++r<i;)if(e[r]===t)return r;return-1}function Ec(e){return e!==e}function $c(e,t){return e.has(t)}function Lc(e,t){return e==null?void 0:e[t]}function Rc(e){var t=!1;if(e!=null&&typeof e.toString!="function")try{t=!!(e+"")}catch{}return t}function Si(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var Pc=Array.prototype,Dc=Function.prototype,Ei=Object.prototype,ln=Nn["__core-js_shared__"],Er=function(){var e=/[^.]+$/.exec(ln&&ln.keys&&ln.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),$i=Dc.toString,In=Ei.hasOwnProperty,Bc=Ei.toString,Tc=RegExp("^"+$i.call(In).replace(vc,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),kc=Pc.splice,Oc=Fn(Nn,"Map"),cn=Fn(Nn,"Set"),Qe=Fn(Object,"create");function Re(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function jc(){this.__data__=Qe?Qe(null):{}}function Nc(e){return this.has(e)&&delete this.__data__[e]}function Ic(e){var t=this.__data__;if(Qe){var n=t[e];return n===jn?void 0:n}return In.call(t,e)?t[e]:void 0}function Fc(e){var t=this.__data__;return Qe?t[e]!==void 0:In.call(t,e)}function Hc(e,t){var n=this.__data__;return n[e]=Qe&&t===void 0?jn:t,this}Re.prototype.clear=jc;Re.prototype.delete=Nc;Re.prototype.get=Ic;Re.prototype.has=Fc;Re.prototype.set=Hc;function We(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function qc(){this.__data__=[]}function Uc(e){var t=this.__data__,n=Ut(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():kc.call(t,n,1),!0}function Wc(e){var t=this.__data__,n=Ut(t,e);return n<0?void 0:t[n][1]}function Gc(e){return Ut(this.__data__,e)>-1}function Kc(e,t){var n=this.__data__,r=Ut(n,e);return r<0?n.push([e,t]):n[r][1]=t,this}We.prototype.clear=qc;We.prototype.delete=Uc;We.prototype.get=Wc;We.prototype.has=Gc;We.prototype.set=Kc;function Ge(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function zc(){this.__data__={hash:new Re,map:new(Oc||We),string:new Re}}function Vc(e){return Wt(this,e).delete(e)}function Yc(e){return Wt(this,e).get(e)}function Xc(e){return Wt(this,e).has(e)}function Jc(e,t){return Wt(this,e).set(e,t),this}Ge.prototype.clear=zc;Ge.prototype.delete=Vc;Ge.prototype.get=Yc;Ge.prototype.has=Xc;Ge.prototype.set=Jc;function Pt(e){var t=-1,n=e?e.length:0;for(this.__data__=new Ge;++t<n;)this.add(e[t])}function Zc(e){return this.__data__.set(e,jn),this}function Qc(e){return this.__data__.has(e)}Pt.prototype.add=Pt.prototype.push=Zc;Pt.prototype.has=Qc;function Ut(e,t){for(var n=e.length;n--;)if(au(e[n][0],t))return n;return-1}function eu(e){if(!Li(e)||iu(e))return!1;var t=lu(e)||Rc(e)?Tc:xc;return t.test(su(e))}function tu(e,t,n){var r=-1,i=Cc,o=e.length,a=!0,l=[],u=l;if(o>=yc){var f=nu(e);if(f)return Si(f);a=!1,i=$c,u=new Pt}else u=l;e:for(;++r<o;){var h=e[r],p=h;if(h=h!==0?h:0,a&&p===p){for(var y=u.length;y--;)if(u[y]===p)continue e;l.push(h)}else i(u,p,n)||(u!==l&&u.push(p),l.push(h))}return l}var nu=cn&&1/Si(new cn([,-0]))[1]==mc?function(e){return new cn(e)}:cu;function Wt(e,t){var n=e.__data__;return ru(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Fn(e,t){var n=Lc(e,t);return eu(n)?n:void 0}function ru(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function iu(e){return!!Er&&Er in e}function su(e){if(e!=null){try{return $i.call(e)}catch{}try{return e+""}catch{}}return""}function ou(e){return e&&e.length?tu(e):[]}function au(e,t){return e===t||e!==e&&t!==t}function lu(e){var t=Li(e)?Bc.call(e):"";return t==bc||t==wc}function Li(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function cu(){}var uu=ou;const Ri=$r(uu);var Dt={exports:{}};Dt.exports;(function(e,t){var n=200,r="Expected a function",i="__lodash_hash_undefined__",o=1,a=2,l=9007199254740991,u="[object Arguments]",f="[object Array]",h="[object Boolean]",p="[object Date]",y="[object Error]",g="[object Function]",b="[object GeneratorFunction]",v="[object Map]",S="[object Number]",M="[object Object]",L="[object Promise]",$="[object RegExp]",R="[object Set]",T="[object String]",oe="[object Symbol]",O="[object WeakMap]",Z="[object ArrayBuffer]",U="[object DataView]",rt="[object Float32Array]",Ke="[object Float64Array]",pe="[object Int8Array]",Hn="[object Int16Array]",W="[object Int32Array]",Te="[object Uint8Array]",it="[object Uint8ClampedArray]",Ti="[object Uint16Array]",ki="[object Uint32Array]",Oi=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ji=/^\w*$/,Ni=/^\./,Ii=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Fi=/[\\^$.*+?()[\]{}|]/g,Hi=/\\(\\)?/g,qi=/^\[object .+?Constructor\]$/,Ui=/^(?:0|[1-9]\d*)$/,D={};D[rt]=D[Ke]=D[pe]=D[Hn]=D[W]=D[Te]=D[it]=D[Ti]=D[ki]=!0,D[u]=D[f]=D[Z]=D[h]=D[U]=D[p]=D[y]=D[g]=D[v]=D[S]=D[M]=D[$]=D[R]=D[T]=D[O]=!1;var qn=typeof be=="object"&&be&&be.Object===Object&&be,Wi=typeof self=="object"&&self&&self.Object===Object&&self,ge=qn||Wi||Function("return this")(),Un=t&&!t.nodeType&&t,Wn=Un&&!0&&e&&!e.nodeType&&e,Gi=Wn&&Wn.exports===Un,Gn=Gi&&qn.process,Kn=function(){try{return Gn&&Gn.binding("util")}catch{}}(),zn=Kn&&Kn.isTypedArray;function Ki(s,c){for(var d=-1,m=s?s.length:0,x=Array(m);++d<m;)x[d]=c(s[d],d,s);return x}function zi(s,c){for(var d=-1,m=c.length,x=s.length;++d<m;)s[x+d]=c[d];return s}function Vi(s,c){for(var d=-1,m=s?s.length:0;++d<m;)if(c(s[d],d,s))return!0;return!1}function Yi(s){return function(c){return c==null?void 0:c[s]}}function Xi(s,c){for(var d=-1,m=Array(s);++d<s;)m[d]=c(d);return m}function Ji(s){return function(c){return s(c)}}function Zi(s,c){return s==null?void 0:s[c]}function Gt(s){var c=!1;if(s!=null&&typeof s.toString!="function")try{c=!!(s+"")}catch{}return c}function Qi(s){var c=-1,d=Array(s.size);return s.forEach(function(m,x){d[++c]=[x,m]}),d}function es(s,c){return function(d){return s(c(d))}}function ts(s){var c=-1,d=Array(s.size);return s.forEach(function(m){d[++c]=m}),d}var ns=Array.prototype,rs=Function.prototype,st=Object.prototype,Kt=ge["__core-js_shared__"],Vn=function(){var s=/[^.]+$/.exec(Kt&&Kt.keys&&Kt.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),Yn=rs.toString,ae=st.hasOwnProperty,ke=st.toString,is=RegExp("^"+Yn.call(ae).replace(Fi,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ot=ge.Symbol,Xn=ge.Uint8Array,ss=st.propertyIsEnumerable,os=ns.splice,Jn=ot?ot.isConcatSpreadable:void 0,as=es(Object.keys,Object),zt=Oe(ge,"DataView"),ze=Oe(ge,"Map"),Vt=Oe(ge,"Promise"),Yt=Oe(ge,"Set"),Xt=Oe(ge,"WeakMap"),Ve=Oe(Object,"create"),ls=Me(zt),cs=Me(ze),us=Me(Vt),fs=Me(Yt),hs=Me(Xt),at=ot?ot.prototype:void 0,Jt=at?at.valueOf:void 0,Zn=at?at.toString:void 0;function Ce(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function ds(){this.__data__=Ve?Ve(null):{}}function ps(s){return this.has(s)&&delete this.__data__[s]}function gs(s){var c=this.__data__;if(Ve){var d=c[s];return d===i?void 0:d}return ae.call(c,s)?c[s]:void 0}function ys(s){var c=this.__data__;return Ve?c[s]!==void 0:ae.call(c,s)}function ms(s,c){var d=this.__data__;return d[s]=Ve&&c===void 0?i:c,this}Ce.prototype.clear=ds,Ce.prototype.delete=ps,Ce.prototype.get=gs,Ce.prototype.has=ys,Ce.prototype.set=ms;function le(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function bs(){this.__data__=[]}function ws(s){var c=this.__data__,d=ct(c,s);if(d<0)return!1;var m=c.length-1;return d==m?c.pop():os.call(c,d,1),!0}function vs(s){var c=this.__data__,d=ct(c,s);return d<0?void 0:c[d][1]}function xs(s){return ct(this.__data__,s)>-1}function As(s,c){var d=this.__data__,m=ct(d,s);return m<0?d.push([s,c]):d[m][1]=c,this}le.prototype.clear=bs,le.prototype.delete=ws,le.prototype.get=vs,le.prototype.has=xs,le.prototype.set=As;function ce(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function _s(){this.__data__={hash:new Ce,map:new(ze||le),string:new Ce}}function Cs(s){return ut(this,s).delete(s)}function Ms(s){return ut(this,s).get(s)}function Ss(s){return ut(this,s).has(s)}function Es(s,c){return ut(this,s).set(s,c),this}ce.prototype.clear=_s,ce.prototype.delete=Cs,ce.prototype.get=Ms,ce.prototype.has=Ss,ce.prototype.set=Es;function lt(s){var c=-1,d=s?s.length:0;for(this.__data__=new ce;++c<d;)this.add(s[c])}function $s(s){return this.__data__.set(s,i),this}function Ls(s){return this.__data__.has(s)}lt.prototype.add=lt.prototype.push=$s,lt.prototype.has=Ls;function ue(s){this.__data__=new le(s)}function Rs(){this.__data__=new le}function Ps(s){return this.__data__.delete(s)}function Ds(s){return this.__data__.get(s)}function Bs(s){return this.__data__.has(s)}function Ts(s,c){var d=this.__data__;if(d instanceof le){var m=d.__data__;if(!ze||m.length<n-1)return m.push([s,c]),this;d=this.__data__=new ce(m)}return d.set(s,c),this}ue.prototype.clear=Rs,ue.prototype.delete=Ps,ue.prototype.get=Ds,ue.prototype.has=Bs,ue.prototype.set=Ts;function ks(s,c){var d=fe(s)||en(s)?Xi(s.length,String):[],m=d.length,x=!!m;for(var w in s)ae.call(s,w)&&!(x&&(w=="length"||nr(w,m)))&&d.push(w);return d}function ct(s,c){for(var d=s.length;d--;)if(sr(s[d][0],c))return d;return-1}var Os=Qs(Is);function js(s,c,d,m,x){var w=-1,_=s.length;for(d||(d=so),x||(x=[]);++w<_;){var B=s[w];d(B)?zi(x,B):x[x.length]=B}return x}var Ns=eo();function Is(s,c){return s&&Ns(s,c,yt)}function Qn(s,c){c=ft(c,s)?[c]:er(c);for(var d=0,m=c.length;s!=null&&d<m;)s=s[ht(c[d++])];return d&&d==m?s:void 0}function Fs(s){return ke.call(s)}function Hs(s,c){return s!=null&&c in Object(s)}function Zt(s,c,d,m,x){return s===c?!0:s==null||c==null||!pt(s)&&!gt(c)?s!==s&&c!==c:qs(s,c,Zt,d,m,x)}function qs(s,c,d,m,x,w){var _=fe(s),B=fe(c),k=f,j=f;_||(k=ye(s),k=k==u?M:k),B||(j=ye(c),j=j==u?M:j);var F=k==M&&!Gt(s),H=j==M&&!Gt(c),N=k==j;if(N&&!F)return w||(w=new ue),_||po(s)?tr(s,c,d,m,x,w):to(s,c,k,d,m,x,w);if(!(x&a)){var V=F&&ae.call(s,"__wrapped__"),Y=H&&ae.call(c,"__wrapped__");if(V||Y){var me=V?s.value():s,he=Y?c.value():c;return w||(w=new ue),d(me,he,m,x,w)}}return N?(w||(w=new ue),no(s,c,d,m,x,w)):!1}function Us(s,c,d,m){var x=d.length,w=x;if(s==null)return!w;for(s=Object(s);x--;){var _=d[x];if(_[2]?_[1]!==s[_[0]]:!(_[0]in s))return!1}for(;++x<w;){_=d[x];var B=_[0],k=s[B],j=_[1];if(_[2]){if(k===void 0&&!(B in s))return!1}else{var F=new ue,H;if(!(H===void 0?Zt(j,k,m,o|a,F):H))return!1}}return!0}function Ws(s){if(!pt(s)||ao(s))return!1;var c=or(s)||Gt(s)?is:qi;return c.test(Me(s))}function Gs(s){return gt(s)&&tn(s.length)&&!!D[ke.call(s)]}function Ks(s){return typeof s=="function"?s:s==null?bo:typeof s=="object"?fe(s)?Xs(s[0],s[1]):Ys(s):wo(s)}function zs(s){if(!lo(s))return as(s);var c=[];for(var d in Object(s))ae.call(s,d)&&d!="constructor"&&c.push(d);return c}function Vs(s,c){var d=-1,m=dt(s)?Array(s.length):[];return Os(s,function(x,w,_){m[++d]=c(x,w,_)}),m}function Ys(s){var c=ro(s);return c.length==1&&c[0][2]?ir(c[0][0],c[0][1]):function(d){return d===s||Us(d,s,c)}}function Xs(s,c){return ft(s)&&rr(c)?ir(ht(s),c):function(d){var m=yo(d,s);return m===void 0&&m===c?mo(d,s):Zt(c,m,void 0,o|a)}}function Js(s){return function(c){return Qn(c,s)}}function Zs(s){if(typeof s=="string")return s;if(nn(s))return Zn?Zn.call(s):"";var c=s+"";return c=="0"&&1/s==-1/0?"-0":c}function er(s){return fe(s)?s:co(s)}function Qs(s,c){return function(d,m){if(d==null)return d;if(!dt(d))return s(d,m);for(var x=d.length,w=-1,_=Object(d);++w<x&&m(_[w],w,_)!==!1;);return d}}function eo(s){return function(c,d,m){for(var x=-1,w=Object(c),_=m(c),B=_.length;B--;){var k=_[++x];if(d(w[k],k,w)===!1)break}return c}}function tr(s,c,d,m,x,w){var _=x&a,B=s.length,k=c.length;if(B!=k&&!(_&&k>B))return!1;var j=w.get(s);if(j&&w.get(c))return j==c;var F=-1,H=!0,N=x&o?new lt:void 0;for(w.set(s,c),w.set(c,s);++F<B;){var V=s[F],Y=c[F];if(m)var me=_?m(Y,V,F,c,s,w):m(V,Y,F,s,c,w);if(me!==void 0){if(me)continue;H=!1;break}if(N){if(!Vi(c,function(he,Se){if(!N.has(Se)&&(V===he||d(V,he,m,x,w)))return N.add(Se)})){H=!1;break}}else if(!(V===Y||d(V,Y,m,x,w))){H=!1;break}}return w.delete(s),w.delete(c),H}function to(s,c,d,m,x,w,_){switch(d){case U:if(s.byteLength!=c.byteLength||s.byteOffset!=c.byteOffset)return!1;s=s.buffer,c=c.buffer;case Z:return!(s.byteLength!=c.byteLength||!m(new Xn(s),new Xn(c)));case h:case p:case S:return sr(+s,+c);case y:return s.name==c.name&&s.message==c.message;case $:case T:return s==c+"";case v:var B=Qi;case R:var k=w&a;if(B||(B=ts),s.size!=c.size&&!k)return!1;var j=_.get(s);if(j)return j==c;w|=o,_.set(s,c);var F=tr(B(s),B(c),m,x,w,_);return _.delete(s),F;case oe:if(Jt)return Jt.call(s)==Jt.call(c)}return!1}function no(s,c,d,m,x,w){var _=x&a,B=yt(s),k=B.length,j=yt(c),F=j.length;if(k!=F&&!_)return!1;for(var H=k;H--;){var N=B[H];if(!(_?N in c:ae.call(c,N)))return!1}var V=w.get(s);if(V&&w.get(c))return V==c;var Y=!0;w.set(s,c),w.set(c,s);for(var me=_;++H<k;){N=B[H];var he=s[N],Se=c[N];if(m)var ar=_?m(Se,he,N,c,s,w):m(he,Se,N,s,c,w);if(!(ar===void 0?he===Se||d(he,Se,m,x,w):ar)){Y=!1;break}me||(me=N=="constructor")}if(Y&&!me){var mt=s.constructor,bt=c.constructor;mt!=bt&&"constructor"in s&&"constructor"in c&&!(typeof mt=="function"&&mt instanceof mt&&typeof bt=="function"&&bt instanceof bt)&&(Y=!1)}return w.delete(s),w.delete(c),Y}function ut(s,c){var d=s.__data__;return oo(c)?d[typeof c=="string"?"string":"hash"]:d.map}function ro(s){for(var c=yt(s),d=c.length;d--;){var m=c[d],x=s[m];c[d]=[m,x,rr(x)]}return c}function Oe(s,c){var d=Zi(s,c);return Ws(d)?d:void 0}var ye=Fs;(zt&&ye(new zt(new ArrayBuffer(1)))!=U||ze&&ye(new ze)!=v||Vt&&ye(Vt.resolve())!=L||Yt&&ye(new Yt)!=R||Xt&&ye(new Xt)!=O)&&(ye=function(s){var c=ke.call(s),d=c==M?s.constructor:void 0,m=d?Me(d):void 0;if(m)switch(m){case ls:return U;case cs:return v;case us:return L;case fs:return R;case hs:return O}return c});function io(s,c,d){c=ft(c,s)?[c]:er(c);for(var m,x=-1,_=c.length;++x<_;){var w=ht(c[x]);if(!(m=s!=null&&d(s,w)))break;s=s[w]}if(m)return m;var _=s?s.length:0;return!!_&&tn(_)&&nr(w,_)&&(fe(s)||en(s))}function so(s){return fe(s)||en(s)||!!(Jn&&s&&s[Jn])}function nr(s,c){return c=c??l,!!c&&(typeof s=="number"||Ui.test(s))&&s>-1&&s%1==0&&s<c}function ft(s,c){if(fe(s))return!1;var d=typeof s;return d=="number"||d=="symbol"||d=="boolean"||s==null||nn(s)?!0:ji.test(s)||!Oi.test(s)||c!=null&&s in Object(c)}function oo(s){var c=typeof s;return c=="string"||c=="number"||c=="symbol"||c=="boolean"?s!=="__proto__":s===null}function ao(s){return!!Vn&&Vn in s}function lo(s){var c=s&&s.constructor,d=typeof c=="function"&&c.prototype||st;return s===d}function rr(s){return s===s&&!pt(s)}function ir(s,c){return function(d){return d==null?!1:d[s]===c&&(c!==void 0||s in Object(d))}}var co=Qt(function(s){s=go(s);var c=[];return Ni.test(s)&&c.push(""),s.replace(Ii,function(d,m,x,w){c.push(x?w.replace(Hi,"$1"):m||d)}),c});function ht(s){if(typeof s=="string"||nn(s))return s;var c=s+"";return c=="0"&&1/s==-1/0?"-0":c}function Me(s){if(s!=null){try{return Yn.call(s)}catch{}try{return s+""}catch{}}return""}function uo(s,c){return js(fo(s,c))}function fo(s,c){var d=fe(s)?Ki:Vs;return d(s,Ks(c))}function Qt(s,c){if(typeof s!="function"||c&&typeof c!="function")throw new TypeError(r);var d=function(){var m=arguments,x=c?c.apply(this,m):m[0],w=d.cache;if(w.has(x))return w.get(x);var _=s.apply(this,m);return d.cache=w.set(x,_),_};return d.cache=new(Qt.Cache||ce),d}Qt.Cache=ce;function sr(s,c){return s===c||s!==s&&c!==c}function en(s){return ho(s)&&ae.call(s,"callee")&&(!ss.call(s,"callee")||ke.call(s)==u)}var fe=Array.isArray;function dt(s){return s!=null&&tn(s.length)&&!or(s)}function ho(s){return gt(s)&&dt(s)}function or(s){var c=pt(s)?ke.call(s):"";return c==g||c==b}function tn(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=l}function pt(s){var c=typeof s;return!!s&&(c=="object"||c=="function")}function gt(s){return!!s&&typeof s=="object"}function nn(s){return typeof s=="symbol"||gt(s)&&ke.call(s)==oe}var po=zn?Ji(zn):Gs;function go(s){return s==null?"":Zs(s)}function yo(s,c,d){var m=s==null?void 0:Qn(s,c);return m===void 0?d:m}function mo(s,c){return s!=null&&io(s,c,Hs)}function yt(s){return dt(s)?ks(s):zs(s)}function bo(s){return s}function wo(s){return ft(s)?Yi(ht(s)):Js(s)}e.exports=uo})(Dt,Dt.exports);var fu=Dt.exports;const Pi=$r(fu);function hu(e,t,n){let r=[];e.filterProperties.length&&e.filterProperties.forEach(o=>{const a={},l=f=>o.format==="date"?Xe(f).unix():parseFloat(f);t.forEach(f=>{var h,p;if(o.type==="range"){const y=Ze(o.key,f);if(Array.isArray(y)){const g=[l(y[0]),l(y[1])];a.min=a.min!==void 0?Math.min(a.min,g[0]):g[0],a.max=a.max!==void 0?Math.max(a.max,g[1]):g[1]}else{const g=l(y);a.min=a.min!==void 0?Math.min(a.min,g):g,a.max=a.max!==void 0?Math.max(a.max,g):g}return}Array.isArray(f[o.key])?f[o.key].forEach(y=>{a[y]=void 0}):o.type==="spatial"?(a.geometry=((h=o==null?void 0:o.state)==null?void 0:h.geometry)||void 0,a.geometry&&(o.stringifiedState=a.geometry.type),a.mode=o.mode||"intersects"):(p=o.key)!=null&&p.includes(".")?Ri(Pi(n.items,o.key)).filter(y=>y).forEach(y=>{a[y]=void 0}):a[f[o.key]]=void 0});const u=o.key||o.keys.join("|");n.filters[u]=Object.assign({type:o.type||"multiselect",dirty:o.state?Object.values(o.state).some(f=>f):void 0,key:u},o.type==="range"?{min:a.min,max:a.max,format:o.format}:{},o),n.filters[u].state=Object.assign({},a,o.state)}),e.matchAllWhenEmpty!==!1&&(n.results=n.sortResults(t),n.requestUpdate()),e.aggregateResults&&(r=Array.from(new Set(t.reduce((o,a)=>o.concat(a[e.aggregateResults]),[]))).sort((o,a)=>o.localeCompare(a)));const i=[];return Object.values(n.filters).forEach(o=>{o.type==="text"?o.keys.forEach(a=>{i.includes(a)||i.push(a)}):(o.type==="select"||o.type==="multiselect")&&(i.includes(o.key)||i.push(o.key))}),Nl(t,Object.assign({keys:i},e.fuseConfig)),r}async function du(e,t,n){let r;n.externalFilter?r=await ql(t,n.filters,e):r=await Il(t,n.filters,e),n.results=n.sortResults(r)}function pu(e,t,n){const r=`filter-${e.key}`.replace("|","-");switch(e.type){case"text":return C`<eox-itemfilter-text
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
          .suggestions="${Ri(Pi(n.items,e.key)).filter(i=>i)}"
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
      `;default:return C``}}function gu(e,t){return[...e].sort((n,r)=>n[t.titleProperty].localeCompare(r[t.titleProperty]))}function yu(e,t,n){return C`
    ${I(e.dirty,()=>C`
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
  `}function mu(e){e.renderRoot.querySelectorAll("[data-type='filter']").forEach(t=>{typeof t.reset=="function"&&t.reset()}),e.search()}var et,Ie,X,qe,Di,Bi;class bu extends ie{constructor(){super();q(this,qe);q(this,et,[]);q(this,Ie,[]);q(this,X,gc);this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=Nt(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.unstyled=!1}static get properties(){return{items:{attribute:!1,type:Object},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{attribute:!1,type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{attribute:!1,type:Array},fuseConfig:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},unstyled:{type:Boolean}}}apply(){wt(this,et,hu(G(this,X),G(this,Ie),this)),this.search()}async searchHandler(){await du(G(this,X),G(this,Ie),this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(n){return gu(n,G(this,X))}resetFilters(){mu(this)}firstUpdated(n){var i;let r={};Sr.map(o=>{r={...r,[o]:this[o]}}),wt(this,X,r),wt(this,Ie,((i=this.items)==null?void 0:i.map((o,a)=>Object.assign({id:o[this.idProperty]||`item-${a}`},o)))||[]),this.apply()}updated(n){Sr.map(r=>{if(n.has(r))return this.firstUpdated(),!0})}updateResult(n){this.selectedResult=n.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}render(){var n;return C`
      <style>
        ${ko}
        ${!this.unstyled&&tt}
        ${!this.unstyled&&Co}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":xe}
        @submit="${r=>r.preventDefault()}"
      >
        ${I(this.filterProperties,()=>C`
            <eox-itemfilter-container
              .filters=${this.filters}
              .filterProperties=${this.filterProperties}
              .inlineMode=${this.inlineMode||!1}
              @reset=${()=>this.resetFilters()}
              @filter=${()=>this.search()}
            >
              <section slot="section">
                ${I(!this.inlineMode,()=>C`
                    <slot name="filterstitle"
                      ><h6 class="main-heading">Filters</h6></slot
                    >
                  `)}
                <ul id="filters">
                  ${jt(Object.values(this.filters),(r,i)=>C` <li>
                        <eox-itemfilter-expandcontainer
                          .filterObject=${r}
                          @details-toggled=${o=>oi(o,G(this,X),this)}
                          data-details="${r.key}"
                        >
                          ${E(this,qe,Bi).call(this,r,Mr(i,1))}
                          ${E(this,qe,Di).call(this,r,Mr(i,2))}
                        </eox-itemfilter-expandcontainer>
                      </li>`)}
                </ul>
                ${I(!this.inlineMode&&G(this,X).filterProperties&&!this.inlineMode&&G(this,X).filterProperties&&vn(this.filters),()=>C`
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
        ${I(((n=G(this,X))==null?void 0:n.showResults)&&this.results,()=>C`
            <eox-itemfilter-results
              .config=${G(this,X)}
              .results=${this.results}
              .filters=${this.filters}
              .resultAggregation=${G(this,et)}
              .selectedResult=${this.selectedResult}
              .resultType=${this.resultType}
              @result=${this.updateResult}
            >
              <slot name="resultstitle"
                ><h6 class="main-heading">Results</h6></slot
              >
            </eox-itemfilter-results>
          `)}
      </form>
    `}}et=new WeakMap,Ie=new WeakMap,X=new WeakMap,qe=new WeakSet,Di=function(n,r){return pu(n,r,this)},Bi=function(n,r){return yu(n,r,this)};customElements.define("eox-itemfilter",bu);const wu=[".items"],vu={slot:"filterstitle",style:{margin:"14px 8px"}},xu={slot:"resultstitle",style:{margin:"14px 8px"}},Du={__name:"EodashItemFilter",props:{enableCompare:{type:Boolean,default:!1},filtersTitle:{type:String,default:"Indicators"},resultsTitle:{type:String,default:"Results"},titleProperty:{type:String,default:"title"},aggregateResults:{type:String,default:void 0},imageProperty:{type:String,default:""},subTitleProperty:{type:String,default:""},resultType:{type:String,default:""},cssVars:{type:[String,Object],default:""},enableHighlighting:{type:Boolean,default:!0},expandMultipleFilters:{type:Boolean,default:!0},expandMultipleResults:{type:Boolean,default:!0},filterProperties:{type:Array,default:()=>[{keys:["title","themes","description"],title:"Search",type:"text"},{key:"themes",title:"Theme Filter",type:"multiselect"}]}},emits:["select"],setup(e,{emit:t}){const n=t,r=e,i=async p=>{p?(h.resetSelectedCompareSTAC(),await h.loadSelectedSTAC(p.href),n("select",p)):h.selectedStac=null},o=p=>{p&&(h.loadSelectedCompareSTAC(p.href),n("select",p))},a=async p=>{const y=p.detail;r.enableCompare?o(y):i(y)},{smAndDown:l}=Ao(),u=Lo(()=>({titleProperty:r.titleProperty,enableHighlighting:r.enableHighlighting,expandMultipleFilters:r.expandMultipleFilters,expandMultipleResults:r.expandMultipleResults,subTitleProperty:r.subTitleProperty,resultType:r.resultType,imageProperty:r.imageProperty,aggregateResults:r.aggregateResults,style:r.cssVars,filterProperties:l.value?"":r.filterProperties})),f=Ro(null),h=_o();return(p,y)=>{var g;return Do(),Po("eox-itemfilter",Bo({class:"fill-height"},u.value,{ref_key:"eoxItemFilter",ref:f,style:{overflow:"auto","--background-color":"none"},onSelect:a,".items":(g=To(h).stac)==null?void 0:g.filter(b=>b.rel==="child")}),[cr("h4",vu,ur(e.filtersTitle),1),cr("h4",xu,ur(e.resultsTitle),1)],48,wu)}}};export{Du as default};
