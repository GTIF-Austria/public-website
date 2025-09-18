var V=e=>{throw TypeError(e)};var E=(e,i,t)=>i.has(e)||V("Cannot "+t);var k=(e,i,t)=>(E(e,i,"read from private field"),t?t.call(e):i.get(e)),T=(e,i,t)=>i.has(e)?V("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(e):i.set(e,t),L=(e,i,t,a)=>(E(e,i,"write to private field"),a?a.call(e,t):i.set(e,t),t);import{_ as H,s as F,a as P,u as K,bi as W,bj as Y,Y as B,b as X,bk as J,V as f,bl as Q,bm as ee,ax as q,bn as te,bo as oe,aG as se,aE as ie,bp as ae,aU as S,bq as _}from"./eo-dash.B7T-qZ2i.js";import ne from"./ExportState-f1EVEGRZ.AxK2iqIX.js";import re from"./PopUp-BlURZIXs.Dk2B7Ut9.js";import le from"./EodashItemFilter-DJU8ZGKn.CLFPSgM_.js";import{l as ce}from"./handling-DUj09yow.nowiScFx.js";import{i as ue,a as pe,e as me,b as de,x as l}from"./addCommonStyleSheet.CH1Fdn6y.js";import{e as he}from"./directive.CvdRHFdJ.js";import{e as fe}from"./unsafe-html.CFs6Hq_O.js";import{p as j}from"./index.Rf_EwgyP.js";import{_ as ge}from"./index.BUIxO2d3.js";import{g as be}from"./getElement.CdRlZPdn.js";import{T as g}from"./index-v-0N_Dar.CLGZBr_x.js";import{h as C,p as $,c as O,o as u,a0 as b,e as m,b as h,G as Z,k as r,w as ye,aF as ve}from"./framework.CV862zv4.js";import"./item.koN_VtZd.js";import"./commonjsHelpers.BosuxZz1.js";import"./index-BDy9Xju0.CvqKBkDH.js";import"./VImg-DTEQzWdl.CEfKpAlo.js";import"./transition-D9Hb22fW.yE8EZp48.js";import"./VOverlay-Dwdkmj_R.DS3kDt6H.js";import"./forwardRefs-MndIQ8yn.CTiud4Ej.js";import"./main.Bq8ByCWv.js";import"./when.BR7zwNJC.js";import"./repeat.mFBt84rW.js";import"./directive-helpers.BxH_FWrE.js";import"./static.DK6N5LQU.js";import"./toolcool-range-slider.min.BBXDELo7.js";import"./orient2d.DArCjZZA.js";import"./index.BSpBAx16.js";import"./async-ChALWMDu.KtWqmhGM.js";import"./utils.DZj92Qv1.js";import"./VTooltip-C5sAKIJu.B2VbNG6t.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class I extends fe{}I.directiveName="unsafeSVG",I.resultType=2;const xe=he(I),we=ue`
  .hidden {
    display: none;
  }
  .search-container.hidden {
    opacity: 0;
  }
`;pe();const ke=`
  ${me}
`,Se=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    width="50"
    height="50"
    style="shape-rendering: auto; display: block; background: transparent;"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <g>
      <circle
        stroke-dasharray="164.93361431346415 56.97787143782138"
        r="35"
        stroke-width="12"
        stroke="#1a467c"
        fill="none"
        cy="50"
        cx="50"
      >
        <animateTransform
          keyTimes="0;1"
          values="0 50 50;360 50 50"
          dur="1.2222222222222223s"
          repeatCount="indefinite"
          type="rotate"
          attributeName="transform"
        ></animateTransform>
      </circle>
      <g></g>
    </g>
  </svg>
`;var y;class Ce extends de{constructor(){super();T(this,y);this._data=[],this._isListVisible=!1,this._isInputVisible=!1,this._query="",this._isLoading=!1,this.endpoint=void 0,this.for="eox-map",this.queryParameter="q",this.button=!1,this.label=void 0,this.direction="right",this.resultsDirection="down",this.interval=800,this.small=!1,this.unstyled=!1,this.loaderSvg=Se,this.fetchDebounced=ge(async()=>{if(!(this._query.length<2)){this._isLoading=!0;try{const t=`${this.endpoint}${this.endpoint.includes("?")?"&":"?"}${this.queryParameter??"q"}=${this._query}`,c=await(await fetch(encodeURI(t))).json();this._data=c.results,this._isLoading=!1}catch{console.log("Error setting up or requesting from geosearch endpoint")}}},this.interval)}static get properties(){return{_data:{attribute:!1},_isListVisible:{attribute:!1},_isInputVisible:{attribute:!1},_query:{attribute:!1},_isLoading:{attribute:!1},endpoint:{type:String},for:{type:String},queryParameter:{type:String,default:"q"},button:{type:Boolean},interval:{type:Number,default:800},small:{type:Boolean},label:{type:String},direction:{type:String,attribute:"list-direction"},resultsDirection:{type:String,attribute:"results-direction"},unstyled:{type:Boolean},loaderSvg:{type:String,attribute:"loader-svg"}}}async onInput(t){if(this._query=t.target.value,this._query.length==0){this._isListVisible=!1;return}else this._query.length>=2&&(this._isLoading=!0),this._isListVisible=!0;this.fetchDebounced()}onInputBlur(){this._isInputVisible=!1,this._isListVisible=!1,this._query=""}handleSelect(t){this._isInputVisible=!1,this._isListVisible=!1,this._query="";const a=this.eoxMap.map.getView().getProjection().getCode();let c=j("EPSG:4326",a,[t.bounds.southwest.lng,t.bounds.southwest.lat]),p=j("EPSG:4326",a,[t.bounds.northeast.lng,t.bounds.northeast.lat]);const x=[c[0],c[1],p[0],p[1]];this.eoxMap.zoomExtent=x,this.dispatchEvent(new CustomEvent("geosearchSelect",t))}updateMap(){const t=be(this.for);if(t){const a=t;this.eoxMap=a}}firstUpdated(){this.updateMap()}updated(t){t.has("for")&&this.updateMap()}get eoxMap(){return k(this,y)}set eoxMap(t){const a=k(this,y);L(this,y,t),this.requestUpdate("eoxMap",a)}render(){const t=l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>magnify</title>
      <path
        d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
      />
    </svg>`,a=l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>arrow-left</title>
      <path
        d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
      />
    </svg>`,c=l`
      <li>
        <div class="field small prefix surface border">
          ${this.unstyled?"":this._isLoading?this.loaderSvg?l`<i>${xe(this.loaderSvg)}</i>`:l`<progress class="circle"></progress>`:l`<i class="front">${a}</i>`}
          <input
            placeholder="Type to search"
            @input="${this.onInput}"
            @blur="${this.onInputBlur}"
          />
        </div>
      </li>
    `;return l`
      <style>
        ${we}
        ${!this.unstyled&&ke}
      </style>
      <div
        class="geosearch"
      >
      
        <div class="${this.button?this.small?"button small circle small-elevate":"button extra circle":"field small prefix round surface border active"}" data-ui="#search"
        @click=${()=>{this._isListVisible=!0,setTimeout(()=>{this.renderRoot.querySelector("menu#search input").focus()},500)}}
        >
        ${this.unstyled?"":l`<i class="front small">${t}</i>`}

  ${this.button||this.unstyled?"":l`<input placeholder="Type to search" />`}
  <menu id="search" class="surface ${this.button?`no-wrap ${this.direction} ${this.resultsDirection==="up"?"top":"bottom"}`:""} min${this._isListVisible?" active":""}">
${this.resultsDirection==="up"?"":c}
    ${this._query&&this._query.length<2?l`<li class="surface"><small>Enter at least two characters to search</small></li>`:""}
${this._data.map(p=>l`
    <li
      data-ui="#search"
      class="surface"
      @click="${()=>{this.handleSelect(p)}}"
    >
      ${p.formatted}
    </li>
  `)}
          ${this.resultsDirection==="up"?c:""}
</div>
      </div>
    `}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}}y=new WeakMap;customElements.define("eox-geosearch",Ce);function $e(e){return Math.pow(e,3)}function z(e){return 1-$e(1-e)}function ct(e){return 3*e*e-2*e*e*e}const Ie=".map-btn{width:36px;height:36px;border-radius:25%;margin:4px}eox-geosearch{position:relative!important;overflow:visible!important;z-index:10}",Me=["for"],Ve={__name:"EodashMapBtns",props:{exportMap:{type:Boolean,default:!0},changeProjection:{type:Boolean,default:!0},compareIndicators:{type:[Boolean,Object],default:!0},backToPOIs:{type:Boolean,default:!0},enableSearch:{type:Boolean,default:!0},enableZoom:{type:Boolean,default:!0}},setup(e){const{selectedStac:i,selectedCompareStac:t}=F(P()),{resetSelectedCompareSTAC:a}=P(),{smAndDown:c}=K(),p=C(()=>c.value?"80%":"70%"),x=C(()=>c.value?"90%":"70%"),w=$(!1),v=$(!1),A=C(()=>{var o;return B.value===(typeof e.compareIndicators=="object"&&((o=e.compareIndicators)==null?void 0:o.compareTemplate)||"compare")?W:Y}),D=()=>{v.value=B.value!==(typeof e.compareIndicators=="object"&&e.compareIndicators.compareTemplate||"compare");const o=typeof e.compareIndicators=="object"&&e.compareIndicators.fallbackTemplate||"expert";t.value=null,a(),_(o),ve(i)},M=$(null),R=()=>{const o=typeof e.compareIndicators=="object"&&e.compareIndicators.compareTemplate||"compare";_(o),v.value=!v.value};X(M);const U=()=>{var n;const o=(n=S.value)==null?void 0:n.map,s=o==null?void 0:o.getView().getZoom();if(s!=null){const d=o==null?void 0:o.getView();d!==void 0&&d.getZoom()&&d.animate({zoom:s-1,duration:250,easing:z})}},N=()=>{var n;const o=(n=S.value)==null?void 0:n.map,s=o==null?void 0:o.getView().getZoom();if(s!=null){const d=o==null?void 0:o.getView();d!==void 0&&d.getZoom()&&d.animate({zoom:s+1,duration:250,easing:z})}},G="https://api.opencagedata.com/geocode/v1/json?key=NO_KEY_FOUND";return(o,s)=>(u(),O("div",{ref_key:"rootRef",ref:M,class:"d-flex flex-column align-end"},[e.enableZoom?b((u(),h(f,{key:0,class:"map-btn",icon:[r(J)],size:"small",onClick:N},null,8,["icon"])),[[g,"Zoom in","bottom"]]):m("v-if",!0),e.enableZoom?b((u(),h(f,{key:1,class:"map-btn",icon:[r(Q)],size:"small",onClick:U},null,8,["icon"])),[[g,"Zoom out","bottom"]]):m("v-if",!0),e.exportMap?b((u(),h(f,{key:2,class:"map-btn",icon:[r(ee)],size:"small",onClick:s[0]||(s[0]=n=>w.value=!w.value)},null,8,["icon"])),[[g,"Extract Storytelling configuration","bottom"]]):m("v-if",!0),e.exportMap?(u(),h(ne,{key:3,modelValue:w.value,"onUpdate:modelValue":s[1]||(s[1]=n=>w.value=n)},null,8,["modelValue"])):m("v-if",!0),e.changeProjection&&r(q)?b((u(),h(f,{key:4,class:"map-btn",icon:[r(oe)],size:"small",onClick:s[2]||(s[2]=n=>r(te)(r(q)))},null,8,["icon"])),[[g,"Change map projection","bottom"]]):m("v-if",!0),e.compareIndicators?b((u(),h(f,{key:5,class:"map-btn",icon:[A.value],size:"small",onClick:D},null,8,["icon"])),[[g,"Compare mode","bottom"]]):m("v-if",!0),e.backToPOIs&&(r(se)||r(ie))?b((u(),h(f,{key:6,class:"map-btn",icon:[r(ae)],size:"small",onClick:s[3]||(s[3]=n=>r(ce)())},null,8,["icon"])),[[g,"back to POIs","bottom"]]):m("v-if",!0),e.enableSearch?(u(),O("eox-geosearch",{key:7,for:r(S),endpoint:G,class:"geosearch-detached",label:"Search",small:"",button:"","list-direction":"left","results-direction":"down"},null,8,Me)):m("v-if",!0),Z(re,{modelValue:v.value,"onUpdate:modelValue":s[4]||(s[4]=n=>v.value=n),maxWidth:p.value,width:p.value,"max-height":x.value,height:x.value},{default:ye(()=>[Z(le,{enableCompare:!0,enableHighlighting:!1,resultType:"cards",style:{"--select-filter-max-items":"8"},"filters-title":"Select an indicator to compare",subTitleProperty:"subtitle",imageProperty:"thumbnail",aggregateResults:"collection_group","results-title":"",onSelect:R})]),_:1},8,["modelValue","maxWidth","width","max-height","height"])],512))}},Ee=H(Ve,[["styles",[Ie]]]),ut=Object.freeze(Object.defineProperty({__proto__:null,default:Ee},Symbol.toStringTag,{value:"Module"}));export{Ee as E,ut as a,ct as i};
