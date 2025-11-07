const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/main.BI6Pmfiy.js","assets/chunks/addCommonStyleSheet.DgtOC_XX.js","assets/chunks/when.BR7zwNJC.js","assets/chunks/repeat.Chcv0M0m.js","assets/chunks/directive.CvdRHFdJ.js","assets/chunks/directive-helpers.CVJt9zC1.js","assets/chunks/unsafe-html.DHZgg1Fs.js","assets/chunks/map.DiiNQ3pp.js","assets/chunks/commonjsHelpers.BosuxZz1.js","assets/chunks/index.BUIxO2d3.js","assets/chunks/getElement.CdRlZPdn.js","assets/chunks/main.DDATH51I.js","assets/chunks/browser.CQpScIU-.js","assets/chunks/toolcool-range-slider.min.BBXDELo7.js","assets/chunks/utils.DZj92Qv1.js","assets/chunks/index.BSpBAx16.js","assets/chunks/index.DCVKSTf4.js"])))=>i.map(i=>d[i]);
var ot=Object.defineProperty;var lt=(n,t,e)=>t in n?ot(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var S=(n,t,e)=>lt(n,typeof t!="symbol"?t+"":t,e);import{ao as R,h as ht,p as ct,c as L,o as F,e as z,K as dt,k as j,r as ut,j as U,t as pt,a5 as N}from"./framework.DcHDDd1r.js";import{f as ft,u as mt,T as gt,x as g,c as b,i as yt,b as D,a as bt,e as xt,E}from"./addCommonStyleSheet.DgtOC_XX.js";import{s as vt,l as M,i as X,q as wt,t as kt,o as _t,p as St,f as Tt}from"./sequential.Bu6O1RMr.js";import{e as Ct,i as Et,t as At}from"./directive.CvdRHFdJ.js";import{L as q}from"./Group.ovD7bfEG.js";import{g as W}from"./getElement.CdRlZPdn.js";import"./toolcool-range-slider.min.BBXDELo7.js";import{d as w}from"./dayjs.min.Ba62AOpW.js";import{d as $t,i as Lt,u as Ft}from"./isoWeek.BWmVrYzx.js";import{_ as jt,s as It,a as Mt,b1 as H,o as G,h as Ot,g as Dt,b3 as Vt,b2 as Bt,bp as Pt}from"./eo-dash.rBo9RIzu.js";import"./extent.B6zYA2nd.js";import"./commonjsHelpers.BosuxZz1.js";import"./item.Bx-rtsOD.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rt=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zt={attribute:!0,type:String,converter:mt,reflect:!1,hasChanged:ft},Ut=(n=zt,t,e)=>{const{kind:s,metadata:r}=e;let i=globalThis.litPropertyMetadata.get(r);if(i===void 0&&globalThis.litPropertyMetadata.set(r,i=new Map),s==="setter"&&((n=Object.create(n)).wrapped=!0),i.set(e.name,n),s==="accessor"){const{name:a}=e;return{set(o){const l=t.get.call(this);t.set.call(this,o),this.requestUpdate(a,l,n)},init(o){return o!==void 0&&this.C(a,void 0,n,o),o}}}if(s==="setter"){const{name:a}=e;return function(o){const l=this[a];t.call(this,o),this.requestUpdate(a,l,n)}}throw Error("Unsupported decorator location: "+s)};function m(n){return(t,e)=>typeof e=="object"?Ut(n,t,e):((s,r,i)=>{const a=r.hasOwnProperty(i);return r.constructor.createProperty(i,s),a?Object.getOwnPropertyDescriptor(r,i):void 0})(n,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=(n,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(n,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function qt(n,t){return(e,s,r)=>{const i=a=>{var o;return((o=a.renderRoot)==null?void 0:o.querySelector(n))??null};return Nt(e,s,{get(){return i(this)}})}}class Wt{constructor(t){this.cle=t}setColorScale(){switch(this.cle.scaleType){case"continuous":this.setContinousColorScale();break;case"discrete":this.setDiscreteColorScale();break;case"threshold":this.setThresholdColorScale();break;case"categorical":this.setCategoricalColorScale();break;default:this.invalidScaleType(this.cle.scaleType)}}setContinousColorScale(){const{interpolator:t,domain:e,range:s}=this.cle;this.colorScale=t?vt(t).domain(e):M().range(s).domain(e).interpolate(X)}setDiscreteColorScale(){this.colorScale=wt().domain(this.cle.domain).range(this.cle.range)}setThresholdColorScale(){const t=this.cle.domain;this.colorScale=kt().domain(t.slice(1,t.length-1)).range(this.cle.range)}setCategoricalColorScale(){this.colorScale=_t().domain(this.cle.domain).range(this.cle.range)}invalidScaleType(t){throw new Error(`invalid property scaletype: ${t}.
      Must be one of "categorical", "continuous", "discrete", "threshold".`)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=Ct(class extends Et{constructor(n){var t;if(super(n),n.type!==At.ATTRIBUTE||n.name!=="class"||((t=n.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(t=>n[t]).join(" ")+" "}update(n,[t]){var s,r;if(this.st===void 0){this.st=new Set,n.strings!==void 0&&(this.nt=new Set(n.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((s=this.nt)!=null&&s.has(i))&&this.st.add(i);return this.render(t)}const e=n.element.classList;for(const i of this.st)i in t||(e.remove(i),this.st.delete(i));for(const i in t){const a=!!t[i];a===this.st.has(i)||(r=this.nt)!=null&&r.has(i)||(a?(e.add(i),this.st.add(i)):(e.remove(i),this.st.delete(i)))}return gt}});class Ht{constructor(t){this.cle=t}render(){const t=this.cle.titleText?g`<p class="legend-title">${this.cle.titleText}</p>`:"",e={hidden:this.cle.scaleType==="categorical"},s={hidden:this.cle.scaleType!=="categorical","categorical-container":!0};return g`<div
      class="cle-container"
      style="width:${this.cle.width}px; height:auto;"
    >
      ${t}
      <slot name="subtitle"></slot>
      <svg
        class=${I(e)}
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
      <ul class=${I(s)}>
        ${this.renderCategorical()}
      </ul>
      <slot name="footer"></slot>
    </div>`}renderCategorical(){if(this.cle.scaleType!=="categorical")return"";const{markType:t,colorScale:e,domain:s}=this.cle,r={"legend-item":!0,line:t==="line",circle:t==="circle"};return g`${s.map(i=>g`<li
          class=${I(r)}
          style="--color:${e(i)}"
        >
          ${i}
        </li>`)}`}renderContinuous(){var d;if(this.cle.scaleType!=="continuous"||this.cle.colorScale===null)return"";const{colorScale:t,marginTop:e,marginLeft:s,marginRight:r,tickSize:i,width:a,range:o}=this.cle,l=this.cle.marginBottom+i,h=this.cle.height+i,c=((d=t.interpolator)==null?void 0:d.call(t))||St(X,o);return b`<image
      x=${s}
      y=${e}
      width=${a-r-s}
      height=${h-e-l}
      preserveAspectRatio="none"
      href=${this.getColorRamp(c).toDataURL()}
    ></image>`}renderDiscreteThreshold(){if(this.cle.scaleType!=="discrete"&&this.cle.scaleType!=="threshold")return"";const{tickSize:t,marginTop:e,marginLeft:s,colorScale:r,xScale:i}=this.cle,a=this.cle.height+t,o=this.cle.marginBottom+t,l=r.range(),h=d=>r.invertExtent(d).map(i)[0]||s,c=d=>{let[f,y]=r.invertExtent(d).map(i);return f=f||0,y=y||i.range()[1],y-f};return b`${l.map(d=>b`<rect x=${h(d)} y=${e} width=${c(d)} height=${a-e-o} fill=${d}></rect>`)}`}renderAxis(){if(!this.cle.xScale||this.cle.scaleType==="categorical")return"";const{ticks:t,tickSize:e,tickFormat:s,tickFormatter:r,tickValues:i,xScale:a,marginTop:o}=this.cle,l=this.cle.height+e,h=this.cle.marginBottom+e,c=i!=null&&i.length?i:a.ticks.apply(a,[t,s]),d=Math.max(e,0)+3,f=()=>c.map(y=>b`<g class="tick" transform='translate(${a(y)},0)'>
      <line stroke="currentColor" y2="${e}" y1="${o+h-l}"></line>
      <text fill="currentColor" y="${d}" dy="0.71em">${r(y)}</text>
      </g>`);return b`<g
      class="x-axis"
      transform="translate(0, ${l-h})"
      text-anchor="middle"
    >${f()}</g>`}getColorRamp(t,e=256){const s=document.createElement("canvas");s.setAttribute("height","1"),s.setAttribute("width",`${e}`);const r=s.getContext("2d");for(let i=0;i<e;i++)r.fillStyle=t(i/(e-1)),r.fillRect(i,0,1,1);return s}}const Gt=325,Yt=32,Xt=6,Jt=12,Kt=16,Zt=12,J=5,Qt=6,K=".1f",te=[0,1],ee=["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],se="Color Legend Element",ie="circle",ne="continuous",re=["domain","range","interpolator","scaleType"],ae=["scaleType","ticks","tickSize","tickValues","tickFormat","tickFormatter","domain","range","marginLeft","marginRight","marginBottom","marginTop","width","height"];class oe{constructor(t){this.cle=t}setXScale(){const{scaleType:t,marginLeft:e,width:s,marginRight:r}=this.cle;switch(t){case"continuous":this.xScale=M().domain(this.cle.domain).range([e,s-r]);break;case"discrete":case"threshold":this.xScale=M().domain([this.cle.domain[0],this.cle.domain[this.cle.domain.length-1]]).rangeRound([e,s-r]);break;case"categorical":this.xScale=null;break;default:throw new Error(`Unrecognized scaleType: ${t}`)}}handleAxisTicks(){var t,e,s;if((this.cle.scaleType==="discrete"||this.cle.scaleType==="threshold")&&!this.cle.tickValues){const[r,i]=this.xScale.domain();this.cle.tickValues=[r,...((e=(t=this.cle.colorScale)==null?void 0:t.thresholds)==null?void 0:e.call(t))||this.cle.colorScale.domain(),i]}typeof this.cle.tickFormatter!="function"&&((s=this.cle.tickFormat)!=null&&s.length?this.cle.tickFormatter=Tt(this.cle.tickFormat):this.cle.tickFormatter=this.xScale.tickFormat(this.cle.ticks||J,this.cle.tickFormat||K))}}const le=yt`
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
`;var p=function(n,t,e,s){var r=arguments.length,i=r<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,s);else for(var o=n.length-1;o>=0;o--)(a=n[o])&&(i=(r<3?a(i):r>3?a(t,e,i):a(t,e))||i);return r>3&&i&&Object.defineProperty(t,e,i),i};let u=class extends D{constructor(){super(...arguments),this.titleText=se,this.width=Gt,this.height=Yt,this.marginTop=Xt,this.marginRight=Jt,this.marginBottom=Kt,this.marginLeft=Zt,this.scaleType=ne,this.domain=te,this.range=ee,this.markType=ie,this.ticks=J,this.tickFormat=K,this.tickSize=Qt,this.colorScaleSetter=new Wt(this),this.axisTickSetter=new oe(this),this.renderer=new Ht(this)}get interpolator(){return this._interpolator}set interpolator(t){if(typeof t=="function"){const e=this.interpolator;this._interpolator=t,this.requestUpdate("interpolator",e)}else throw new Error("interpolator must be a function.")}get tickFormatter(){return this._tickFormatter}set tickFormatter(t){if(typeof t=="function"){const e=this.tickFormatter;this._tickFormatter=t,this.requestUpdate("tickFormatter",e)}else throw new Error("tickFormatter must be a function.")}get colorScale(){return this.colorScaleSetter.colorScale}get xScale(){return this.axisTickSetter.xScale}render(){return this.renderer.render()}willUpdate(t){re.some(e=>t.has(e))&&this.colorScaleSetter.setColorScale(),ae.some(e=>t.has(e))&&(this.axisTickSetter.setXScale(),this.axisTickSetter.handleAxisTicks())}};u.styles=[le];p([m({type:String})],u.prototype,"titleText",void 0);p([m({type:Number})],u.prototype,"width",void 0);p([m({type:Number})],u.prototype,"height",void 0);p([m({type:Number})],u.prototype,"marginTop",void 0);p([m({type:Number})],u.prototype,"marginRight",void 0);p([m({type:Number})],u.prototype,"marginBottom",void 0);p([m({type:Number})],u.prototype,"marginLeft",void 0);p([m({type:String})],u.prototype,"scaleType",void 0);p([m({type:Array})],u.prototype,"domain",void 0);p([m({type:Array})],u.prototype,"range",void 0);p([m({type:String})],u.prototype,"markType",void 0);p([m({type:Number})],u.prototype,"ticks",void 0);p([m({type:String})],u.prototype,"tickFormat",void 0);p([m({type:Number})],u.prototype,"tickSize",void 0);p([m({type:Array})],u.prototype,"tickValues",void 0);p([qt("svg")],u.prototype,"svg",void 0);p([m({attribute:!1})],u.prototype,"interpolator",null);p([m({attribute:!1})],u.prototype,"tickFormatter",null);u=p([Rt("color-legend")],u);const he=`
:host {
  display: block;
}
`;bt();const ce=`
${xt}

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
`;class de extends D{static get properties(){return{width:{type:Number},steps:{type:Array}}}constructor(){super(),this.width=0,this.steps=[],this.height=6,this.svgWidth=0,this._yearMarks=[],this._years=[],this._sliderTicks=[]}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.handleResize.bind(this))}disconnectedCallback(){window.removeEventListener("resize",this.handleResize.bind(this)),super.disconnectedCallback()}firstUpdated(){this.yearMarks=this.calculateYearMarks(),this.sliderTicks=this.calculateSliderTicks(),this.handleResize()}updated(t){t.has("steps")&&(this.yearMarks=this.calculateYearMarks(),this.sliderTicks=this.calculateSliderTicks(),this.handleResize())}handleResize(){this.svgWidth=this.shadowRoot.querySelector("svg").clientWidth,this.height=this.shadowRoot.querySelector("svg").clientHeight}groupDatesByYear(){const t=[];return this.steps.forEach(e=>{const r=w(e).year();let i=t.find(a=>a.year===r);i||(i={year:r,dates:[]},t.push(i)),i.dates.push(e)}),t}preprocessDates(){const t=[];this.steps.forEach(e=>{const r=w(e).year();let i=t.find(a=>a.year===r);i||(i={year:r,ratio:0,dates:[]},t.push(i)),i.dates.push({date:e,isYearMarker:i.dates.length===0})});for(let e of t)e.ratio=e.dates.length/this.steps.length;return t}get sliderTicks(){return this._sliderTicks}set sliderTicks(t){this._sliderTicks=t,this.requestUpdate()}calculateYearBars(){return this._years.flatMap((s,r)=>{const i=this.steps.indexOf(s.dates[0].date)/(this.steps.length-1)*this.width,a=this.steps.indexOf(s.dates[s.dates.length-1].date)/(this.steps.length-1)*this.width,o=Math.max(0,a-i-2),l=[];return l.push(b`
            <rect
              key=${r}
              x=${i+2/2} // Add half the spacing to the start position
              y="0"
              width=${o}
              height="6"
              fill="#7596A2"
            ></rect>
        `),o>=30&&l.push(b`
                <text
                  key=${`label-${r}`}
                  x=${i+16}
                  y="26"
                  fill="#555"
                  font-size="14"
                  text-anchor="middle"
                >
                  ${s.year}
                </text>
            `),l})}calculateIndividualTicks(){return this._years.flatMap((t,e)=>{const s=this.steps.length,r=Math.max(1,Math.floor(s/this.width));return t.dates.filter((i,a)=>a%r===0).map((i,a)=>{const l=this.steps.indexOf(i.date)/(this.steps.length-1)*this.width,h=[];return h.push(b`
                <line
                  key=${e}-${a}
                  x1=${l}
                  y1="0"
                  x2=${l}
                  y2=${i.isYearMarker?12:6}
                  stroke=${i.isYearMarker?"#222":"#7596A2"}
                  stroke-width="1"
                ></line>
              `),i.isYearMarker&&this.density>.03&&this.density<.5&&e%2==0&&h.push(b`
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
                `),h})})}get density(){return this.steps.length/this.width}calculateSliderTicks(){if(this.density<=.5)return this.calculateIndividualTicks();if(this.density>.5&&this.density<10)return this.calculateYearBars();if(this.density>=10)return this.calculateDecadeBars()}calculateDecadeBars(){const s=this._years.reduce((i,a)=>{const o=Math.floor(a.year/10)*10;return i[o]||(i[o]=[]),i[o].push(...a.dates),i},{});return Object.keys(s).flatMap((i,a)=>{const o=this.steps.indexOf(s[i][0].date)/(this.steps.length-1)*this.width,l=this.steps.indexOf(s[i][s[i].length-1].date)/(this.steps.length-1)*this.width,h=Math.max(0,l-o-2),c=[];return c.push(b`
            <rect
              key=${`decade-${a}`}
              x=${o+2/2}
              y="0"
              width=${h}
              height="6"
              fill="#555"
            ></rect>
        `),h>=30&&c.push(b`
                <text
                  key=${`decade-label-${a}`}
                  x=${o+18}
                  y="26"
                  fill="#333"
                  font-size="14"
                  text-anchor="middle"
                >
                  ${i}
                </text>
            `),c})}get lines(){const t=this.numLines>this.width/2?this.width/2:this.numLines,e=this.width/(t-1);return Array.from({length:this.numLines},(s,r)=>r*e)}get numLines(){return this.steps?this.steps.length:0}get yearMarks(){return this._yearMarks}set yearMarks(t){this._yearMarks=t,this.requestUpdate()}get years(){return this._years}set years(t){this._years=t,this.requestUpdate()}calculateYearMarks(){this._years=this.preprocessDates();const t=[];let e=null;return this.lines.forEach((s,r)=>{const a=w(this.steps[r]).year();(r===0||a!==e)&&t.push({label:a,position:s}),e=a}),t}isYearLine(t){return this._yearMarks.some(s=>Math.abs(s.position-t)<1)}render(){return g`
      <div class="fill-width" style="margin-top: 3px;">
        <svg
          style="width: ${this.width}px; max-width: 100%; height: 30px;"
          viewBox="-1 0 ${this.width+2} ${this.height}"
        >
          ${this.sliderTicks}
        </svg>
      </div>
    `}}customElements.define("eox-sliderticks",de);w.extend($t);w.extend(Lt);w.extend(Ft);class ue extends D{static get properties(){return{controlProperty:{type:String,attribute:"control-property"},controlValues:{type:Array,attribute:"control-values"},for:{type:String},layer:{type:String},slider:{type:Boolean},navigation:{type:Boolean},_originalParams:{type:Object},play:{type:Boolean,attribute:"play"},displayFormat:{type:String,attribute:"display-format"},currentStep:{type:String,attribute:"current-step"},_animationInterval:{state:!0},_controlSource:{state:!0},_isAnimationPlaying:{state:!0},_newStepIndex:{state:!0},_eoxMap:{state:!0},_width:{state:!0},unstyled:{type:Boolean}}}constructor(){super(),this.controlValues=[],this._newStepIndex=0,this.unstyled=!1,this.play=!1,this.navigation=!0,this.slider=!1,this.for="eox-map",this.layer="",this.controlProperty=void 0,this._eoxMap=void 0,this._width=300,window.addEventListener("resize",()=>{this._width=this.clientWidth}),this.displayFormat=void 0}next(){this._updateStep(1)}previous(){this._updateStep(-1)}playAnimation(t){t?this._animationInterval=setInterval(()=>this._updateStep(1),500):clearInterval(this._animationInterval),this._isAnimationPlaying=t,this.requestUpdate()}setConfig(t){this.layer=t.layer??this.layer,this.controlProperty=t.controlProperty??this.controlProperty,this.controlValues=t.controlValues??this.controlValues,this.requestUpdate(),this._updateStep(0)}get currentStep(){return this.controlValues[this._newStepIndex]}set currentStep(t){const e=this.controlValues.findIndex(s=>s===t);e>-1?this._newStepIndex=e:console.error(`Unable to find step "${t}" in available times!`)}firstUpdated(){this.updateMap()}updated(t){t.has("for")&&this.updateMap()}updateMap(){const t=W(this.for);if(t){const e=t;this.eoxMap=e}}get eoxMap(){return this._eoxMap}set eoxMap(t){const e=this._eoxMap;this._eoxMap=t,this.requestUpdate("eoxMap",e)}_updateStep(t=1){var e;t&&(this._newStepIndex=this._newStepIndex+t,this._newStepIndex>this.controlValues.length-1&&(this._newStepIndex=0),this._newStepIndex<0&&(this._newStepIndex=this.controlValues.length-1),this.layer&&this.for&&((e=this._controlSource)==null||e.updateParams({[this.controlProperty]:this.controlValues[this._newStepIndex]})),this.requestUpdate(),this.dispatchEvent(new CustomEvent("stepchange",{detail:{currentStep:this.currentStep}})))}getFlatLayersArray(t){const e=[];e.push(...t);let s=e.filter(r=>r instanceof q);for(;s.length;){const r=[];for(let i=0,a=s.length;i<a;i++){const o=s[i].getLayers().getArray();e.push(...o);const l=o.filter(h=>h instanceof q);r.push(...l)}s=r}return e}render(){if(this.layer&&this.for){const e=W(this.for).map;e.once("loadend",()=>{if(!this._originalParams){const r=this.getFlatLayersArray(e.getLayers().getArray()).find(i=>i.get("id")===this.layer);this._controlSource=r.getSource(),this._originalParams=this._controlSource.getParams()}})}return g`
      <style>
        ${he}
        ${!this.unstyled&&ce}
      </style>
      <main>
        <div id="controls" part="controls">
          ${this.navigation?g`
                <button
                  part="previous"
                  class="icon previous small circle transparent no-margin"
                  @click="${()=>this.previous()}"
                >
                  ${this.unstyled?"<":g`
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
              `:E}
          <small part="current">
            ${this.displayFormat?w(this.controlValues[this._newStepIndex]).utc().format(this.displayFormat):this.controlValues[this._newStepIndex]}
          </small>
          ${this.navigation?g`
                <button
                  part="next"
                  class="icon next small circle transparent no-margin"
                  @click="${()=>this.next()}"
                >
                  ${this.unstyled?"<":g`
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
              `:E}
          ${this.play?g`
                <button
                  part="play"
                  class="icon-text small ${this._isAnimationPlaying?"pause":"play"}"
                  @click="${()=>this.playAnimation(!this._isAnimationPlaying)}"
                >
                  ${this.unstyled?E:g`
                        <i class="small">
                          ${this._isAnimationPlaying?g`<svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <title>pause</title>
                                <path d="M14,19H18V5H14M6,19H10V5H6V19Z" />
                              </svg>`:g`<svg
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
              `:E}
        </div>
        <div class="small-padding">
          ${this.slider?g`
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
    `}}customElements.define("eox-timecontrol",ue);function Z(n){return!(n===null||typeof n!="object"||n.nodeType||n===n.window||n.constructor&&!C(n.constructor.prototype,"isPrototypeOf"))}function Q(n){return Z(n)?A({},n):Array.isArray(n)?n.map(Q):n}function A(n,...t){return t.forEach(e=>{e&&Object.keys(e).forEach(s=>{e[s]&&Z(e[s])?(C(n,s)||(n[s]={}),A(n[s],e[s])):Array.isArray(e[s])?n[s]=Q(e[s]):n[s]=e[s]})}),n}function C(n,t){return n&&Object.prototype.hasOwnProperty.call(n,t)}class pe{constructor(t,e){this.defaults=e,this.jsoneditor=t.jsoneditor,this.theme=this.jsoneditor.theme,this.template_engine=this.jsoneditor.template,this.iconlib=this.jsoneditor.iconlib,this.translate=this.jsoneditor.translate||this.defaults.translate,this.translateProperty=this.jsoneditor.translateProperty||this.defaults.translateProperty,this.original_schema=t.schema,this.schema=this.jsoneditor.expandSchema(this.original_schema),this.active=!0,this.isUiOnly=!1,this.options=A({},this.options||{},this.schema.options||{},t.schema.options||{},t),this.enforceConstEnabled=this.options.enforce_const??this.jsoneditor.options.enforce_const,this.formname=this.jsoneditor.options.form_name_root||"root",!t.path&&!this.schema.id&&(this.schema.id=this.formname),this.path=t.path||this.formname,this.formname=t.formname||this.path.replace(/\.([^.]+)/g,"[$1]"),this.parent=t.parent,this.key=this.parent!==void 0?this.path.split(".").slice(this.parent.path.split(".").length).join("."):this.path,this.link_watchers=[],this.watchLoop=!1,this.optInWidget=this.options.opt_in_widget??this.jsoneditor.options.opt_in_widget,t.container&&this.setContainer(t.container),this.registerDependencies()}onChildEditorChange(t,e){this.onChange(!0,!1,e)}notify(){this.path&&this.jsoneditor.notifyWatchers(this.path)}change(t){this.parent?this.parent.onChildEditorChange(this,t):this.jsoneditor&&this.jsoneditor.onChange(t)}onChange(t,e,s){this.notify(),e||this.watch_listener&&this.watch_listener(),t&&this.change(s)}register(){if(this.jsoneditor.registerEditor(this),this.input&&!this.label){const t=this.getTitle()||this.formname;this.input.setAttribute("aria-label",t)}this.onChange()}unregister(){this.jsoneditor&&this.jsoneditor.unregisterEditor(this)}getNumColumns(){return 12}isActive(){return this.active}activate(){this.active=!0,this.optInCheckbox.checked=!0,this.enable(),this.change()}deactivate(){this.isRequired()||(this.active=!1,this.optInCheckbox.checked=!1,this.disable(),this.change())}registerDependencies(){this.dependenciesFulfilled=!0;const t=this.options.dependencies;t&&Object.keys(t).forEach(e=>{let s;e.startsWith(this.jsoneditor.root.path)?s=e:(s=this.path.split("."),s[s.length-1]=e,s=s.join(".")),this.jsoneditor.watch(s,()=>{this.evaluateDependencies()})})}evaluateDependencies(){const t=this.container||this.control;if(!t||this.jsoneditor===null)return;const e=this.options.dependencies;if(!e)return;const s=this.dependenciesFulfilled;this.dependenciesFulfilled=!0,Object.keys(e).forEach(i=>{let a;i.startsWith(this.jsoneditor.root.path)?a=i:(a=this.path.split("."),a[a.length-1]=i,a=a.join("."));const l=e[i];this.checkDependency(a,l)}),this.dependenciesFulfilled!==s&&this.notify();let r=this.dependenciesFulfilled?"block":"none";this.options.hidden&&(r="none"),t.tagName==="TD"?Object.keys(t.childNodes).forEach(i=>t.childNodes[i].style.display=r):t.style.display=r}checkDependency(t,e){if(this.path===t||this.jsoneditor===null)return;const s=this.jsoneditor.getEditor(t),r=s?s.getValue():void 0;!s||!s.dependenciesFulfilled||!r?this.dependenciesFulfilled=!1:Array.isArray(e)?this.dependenciesFulfilled=e.some(i=>{if(JSON.stringify(r)===JSON.stringify(i))return!0}):typeof e=="object"?typeof r!="object"?this.dependenciesFulfilled=e===r:Object.keys(e).some(i=>{if(!C(e,i))return!1;if(!C(r,i)||e[i]!==r[i])return this.dependenciesFulfilled=!1,!0}):typeof e=="string"||typeof e=="number"?this.dependenciesFulfilled=this.dependenciesFulfilled&&r===e:typeof e=="boolean"&&(e?this.dependenciesFulfilled=this.dependenciesFulfilled&&(r||r.length>0):this.dependenciesFulfilled=this.dependenciesFulfilled&&(!r||r.length===0))}setContainer(t){this.container=t,this.setContainerAttributes(),this.schema.id&&this.container.setAttribute("data-schemaid",this.schema.id),this.schema.type&&typeof this.schema.type=="string"&&this.container.setAttribute("data-schematype",this.schema.type),this.container.setAttribute("data-schemapath",this.path)}setOptInCheckbox(){let t;this.optInWidget==="switch"?t=this.theme.getOptInSwitch(this.formname):t=this.theme.getOptInCheckbox(this.formname),this.optInCheckbox=t.checkbox,this.optInContainer=t.container,this.optInCheckbox.addEventListener("click",()=>{this.isActive()?this.deactivate():this.activate()});const e=this.jsoneditor.options.show_opt_in,s=typeof this.parent.options.show_opt_in<"u",r=s&&this.parent.options.show_opt_in===!0,i=s&&this.parent.options.show_opt_in===!1;(r||!i&&e||!s&&e)&&this.parent&&this.parent.schema.type==="object"&&!this.isRequired()&&this.header&&(this.header.insertBefore(this.optInContainer,this.header.firstChild),this.optInAppended=!0)}preBuild(){}build(){}postBuild(){this.setupWatchListeners(),this.addLinks(),this.register(),this.setValue(this.getDefault(),!0),this.updateHeaderText(),this.onWatchedFieldChange(),this.options.titleHidden&&(this.theme.visuallyHidden(this.label),this.theme.visuallyHidden(this.header)),this.enforceConstEnabled&&this.schema.const&&this.disable()}setupWatchListeners(){if(this.watched={},this.schema.vars&&(this.schema.watch=this.schema.vars),this.watched_values={},this.watch_listener=()=>{this.refreshWatchedFieldValues()&&this.onWatchedFieldChange()},C(this.schema,"watch")){let t,e,s,r,i;const a=this.container.getAttribute("data-schemapath");Object.keys(this.schema.watch).forEach(o=>{if(t=this.schema.watch[o],Array.isArray(t)){if(t.length<2)return;e=[t[0]].concat(t[1].split("."))}else e=t.split("."),this.theme.closest(this.container,`[data-schemaid="${e[0]}"]`)||e.unshift("#");if(s=e.shift(),s==="#"&&(s=this.jsoneditor.schema.id||this.jsoneditor.root.formname),r=this.theme.closest(this.container,`[data-schemaid="${s}"]`),!r)throw new Error(`Could not find ancestor node with id ${s}`);i=`${r.getAttribute("data-schemapath")}.${e.join(".")}`,a.startsWith(i)&&(this.watchLoop=!0),this.jsoneditor.watch(i,this.watch_listener),this.watched[o]=i})}this.schema.headerTemplate&&(this.header_template=this.jsoneditor.compileTemplate(this.schema.headerTemplate,this.template_engine))}addLinks(){if(!this.no_link_holder&&(this.link_holder=this.theme.getLinksHolder(),typeof this.description<"u"?this.description.parentNode.insertBefore(this.link_holder,this.description):this.container.appendChild(this.link_holder),this.schema.links))for(let t=0;t<this.schema.links.length;t++)this.addLink(this.getLink(this.schema.links[t]))}onMove(){}getButton(t,e,s,r=[]){const i=`json-editor-btn-${e}`;this.iconlib?e=this.iconlib.getIcon(e):e=null,t=this.translate(t,r),s=this.translate(s,r),!e&&s&&(t=s,s=null);const a=this.theme.getButton(t,e,s);return a.classList.add(i),a}setButtonText(t,e,s,r,i=[]){return this.iconlib?s=this.iconlib.getIcon(s):s=null,e=this.translate(e,i),r=this.translate(r,i),!s&&r&&(e=r,r=null),this.theme.setButtonText(t,e,s,r)}addLink(t){this.link_holder&&this.link_holder.appendChild(t)}getLink(t){let e,s;const i=(t.mediaType||"application/javascript").split("/")[0],a=this.jsoneditor.compileTemplate(t.href,this.template_engine),o=this.jsoneditor.compileTemplate(t.rel?t.rel:t.href,this.template_engine);let l=null;if(t.download&&(l=t.download),l&&l!==!0&&(l=this.jsoneditor.compileTemplate(l,this.template_engine)),i==="image"){e=this.theme.getBlockLinkHolder(),s=document.createElement("a"),s.setAttribute("target","_blank");const h=document.createElement("img");this.theme.createImageLink(e,s,h),this.link_watchers.push(c=>{const d=a(c),f=o(c);s.setAttribute("href",d),s.setAttribute("title",f||d),h.setAttribute("src",d)})}else if(["audio","video"].includes(i)){e=this.theme.getBlockLinkHolder(),s=this.theme.getBlockLink(),s.setAttribute("target","_blank");const h=document.createElement(i);h.setAttribute("controls","controls"),this.theme.createMediaLink(e,s,h),this.link_watchers.push(c=>{const d=a(c),f=o(c);s.setAttribute("href",d),s.textContent=f||d,h.setAttribute("src",d)})}else s=e=this.theme.getBlockLink(),e.setAttribute("target","_blank"),e.textContent=t.rel,e.style.display="none",this.link_watchers.push(h=>{const c=a(h),d=o(h);c&&(e.style.display=""),e.setAttribute("href",c),e.textContent=d||c});return l&&s&&(l===!0?s.setAttribute("download",""):this.link_watchers.push(h=>{s.setAttribute("download",l(h))})),t.class&&t.class.split(" ").forEach(c=>{s.classList.add(c)}),e}refreshWatchedFieldValues(){if(!this.watched_values)return;const t={};let e=!1;return this.watched&&Object.keys(this.watched).forEach(s=>{const r=this.jsoneditor.getEditor(this.watched[s]),i=r?r.getValue():null;this.watched_values[s]!==i&&(e=!0),t[s]=i}),t.self=this.getValue(),this.watched_values.self!==t.self&&(e=!0),this.watched_values=t,e}getWatchedFieldValues(){return this.watched_values}updateHeaderText(){if(this.header){const t=this.getHeaderText();if(this.header.children.length){for(let e=0;e<this.header.childNodes.length;e++)if(this.header.childNodes[e].nodeType===3){this.header.childNodes[e].nodeValue=this.cleanText(t);break}}else window.DOMPurify?this.header.innerHTML=window.DOMPurify.sanitize(t):this.header.textContent=this.cleanText(t)}}getHeaderText(t){return this.header_text?this.header_text:t?this.translateProperty(this.schema.title):this.getTitle()}getPathDepth(){return this.path.split(".").length}cleanText(t){const e=document.createElement("div");return e.innerHTML=t,e.textContent||e.innerText}onWatchedFieldChange(){let t;if(this.header_template){t=A(this.getWatchedFieldValues(),{key:this.key,i:this.key,i0:this.key*1,i1:this.key*1+1,title:this.getTitle()}),this.editors&&Object.keys(this.editors).length&&(t.properties={},Object.keys(this.editors).forEach(s=>{const r=this.editors[s];if(r.schema&&r.schema.enum&&r.schema.options&&r.schema.options.enum_titles){const i=r.schema.enum.indexOf(r.value),a=r.options.enum_titles[i];t.properties[s]={enumTitle:a}}}));const e=this.header_template(t);e!==this.header_text&&(this.header_text=e,this.updateHeaderText(),this.notify())}if(this.link_watchers.length){t=this.getWatchedFieldValues();for(let e=0;e<this.link_watchers.length;e++)this.link_watchers[e](t)}}setValue(t){t=this.applyConstFilter(t),this.value=t}applyConstFilter(t){return this.enforceConstEnabled&&typeof this.schema.const<"u"&&(t=this.schema.const),t}getValue(){if(this.dependenciesFulfilled)return this.value}refreshValue(){}getChildEditors(){return!1}destroy(){this.unregister(this),this.watched&&Object.values(this.watched).forEach(t=>this.jsoneditor.unwatch(t,this.watch_listener)),this.watched=null,this.watched_values=null,this.watch_listener=null,this.header_text=null,this.header_template=null,this.value=null,this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container),this.container=null,this.jsoneditor=null,this.schema=null,this.path=null,this.key=null,this.parent=null}isDefaultRequired(){return this.isRequired()||!!this.jsoneditor.options.use_default_values}getDefault(){if(this.enforceConstEnabled&&this.schema.const)return this.schema.const;if(typeof this.schema.default<"u")return this.schema.default;if(typeof this.schema.enum<"u")return this.schema.enum[0];let t=this.schema.type||this.schema.oneOf;if(t&&Array.isArray(t)&&(t=t[0]),t&&typeof t=="object"&&(t=t.type),t&&Array.isArray(t)&&(t=t[0]),typeof t=="string"){if(t==="number")return this.isDefaultRequired()?0:void 0;if(t==="boolean")return this.isDefaultRequired()?!1:void 0;if(t==="integer")return this.isDefaultRequired()?0:void 0;if(t==="string")return this.isDefaultRequired()?"":void 0;if(t==="null")return null;if(t==="object")return{};if(t==="array")return[]}}getTitle(){return this.translateProperty(this.schema.title||this.key||this.formname)}enable(){this.disabled=!1}disable(){this.disabled=!0}isEnabled(){return!this.disabled}isRequired(){return typeof this.schema.required=="boolean"?this.schema.required:this.parent&&this.parent.schema&&Array.isArray(this.parent.schema.required)?this.parent.schema.required.includes(this.key):!!this.jsoneditor.options.required_by_default}getDisplayText(t){const e=[],s={};t.forEach(i=>{i.title&&(s[i.title]=s[i.title]||0,s[i.title]++),i.description&&(s[i.description]=s[i.description]||0,s[i.description]++),i.format&&(s[i.format]=s[i.format]||0,s[i.format]++),i.type&&(s[i.type]=s[i.type]||0,s[i.type]++)}),t.forEach(i=>{let a;typeof i=="string"?a=i:i.title&&s[i.title]<=1?a=i.title:i.format&&s[i.format]<=1?a=i.format:i.type&&s[i.type]<=1?a=i.type:i.description&&s[i.description]<=1?a=i.description:i.title?a=i.title:i.format?a=i.format:i.type?a=i.type:i.description?a=i.description:JSON.stringify(i).length<500?a=JSON.stringify(i):a="type",e.push(a)});const r={};return e.forEach((i,a)=>{r[i]=r[i]||0,r[i]++,s[i]>1&&(e[a]=`${i} ${r[i]}`)}),e}getValidId(t){return t=t===void 0?"":t.toString(),t.replace(/\s+/g,"-")}setInputAttributes(t,e){if(this.schema.options&&this.schema.options.inputAttributes){const s=this.schema.options.inputAttributes,r=["name","type"].concat(t),i=e||this.input;Object.keys(s).forEach(a=>{r.includes(a.toLowerCase())||i.setAttribute(a,s[a])})}}setContainerAttributes(){if(this.schema.options&&this.schema.options.containerAttributes){const t=this.schema.options.containerAttributes,e=["data-schemapath","data-schematype","data-schemaid"];Object.keys(t).forEach(s=>{e.includes(s.toLowerCase())||this.container.setAttribute(s,t[s])})}}expandCallbacks(t,e){const s=this.defaults.callbacks[t];return Object.entries(e).forEach(([r,i])=>{i===Object(i)?e[r]=this.expandCallbacks(t,i):typeof i=="string"&&typeof s=="object"&&typeof s[i]=="function"&&(e[r]=s[i].bind(null,this))}),e}showValidationErrors(t){}}function fe(n,t){var r,i,a,o;const e=t==="bands"?(r=n.items)==null?void 0:r.enum:n.enum||[],s=t==="bands"?(a=(i=n.items)==null?void 0:i.options)==null?void 0:a.colors:((o=n.options)==null?void 0:o.colors)||[];return s&&s.length===e.length?s:e.map(()=>"#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0"))}function me(n,t,e){const s=t.indexOf(n);return s!==-1?e[s]:"#000000"}function tt(n,t){const e=document.createElement("div");return e.dataset.band=n,e.textContent=t,e.draggable=!0,e.ondragstart=s=>{var r;(r=s.dataTransfer)==null||r.setData("band",n)},e}function et(n,t,e){t.forEach((s,r)=>{var o;const i=e[r],a=tt(s,i);(o=n.control)==null||o.appendChild(a)})}function st(n,t){const e=document.createElement("style");return e.innerHTML=`
    /* Base styles for all band elements */
    [data-band] {
      display: inline-flex;
      border: 1px solid darkgrey;
      border-radius: 50%;
      height: 40px;
      aspect-ratio: 1/1;
      padding: 4px;
      margin: 2px;
      align-items: center;
      justify-content: center;
      cursor: move;
      font-size: 10px;
    }

    /* Band color styles */
    ${n.map(s=>`[data-band="${s}"] { background: ${me(s,n,t)}; color: black; }`).join(`
`)}

    /* RGB slot styles */
    [data-slot] {
      display: inline-flex;
      width: 50px;
      height: 50px;
      aspect-ratio: 1/1;
      padding: 1px;
      border: 2px solid #666;
      background: #f0f0f0;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin: 2px;
      position: relative;
      box-sizing: border-box;
    }
    [data-slot]:hover {
      border-color: #333;
      background: #f9f9f9;
    }
    [data-slot]::before {
      content: attr(data-slot);
      position: absolute;
      font-size: 12px;
      font-weight: bold;
      color: #666;
      z-index: 0;
    }

    /* container */
    .slots-container {
      font-family: monospace;
      font-size: 18px;
      padding: 16px;
      background: #f0f0f0;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin: 8px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 4px;
    }

    .formula-text {
      font-size: 18px;
      margin: 0 2px;
    }
  `,e}function it(n,t){const e=document.createElement("div");return e.dataset.slot=n,e.ondrop=t,e.ondragover=s=>s.preventDefault(),e}function O(n,t,e){const s=n.querySelector("[data-band]");s&&s.remove();const r=tt(t,e);n.appendChild(r)}function ge(n,t,e,s){var i,a;const r=st(e,t);(i=n.control)==null||i.appendChild(r),et(n,e,s),(a=n.control)==null||a.appendChild(document.createElement("hr")),ye(n,e,s)}function ye(n,t,e){var r;const s=document.createElement("div");s.classList.add("slots-container"),["R","G","B"].forEach((i,a)=>{const l=it(i,h=>{var v;h.preventDefault();const c=(v=h.dataTransfer)==null?void 0:v.getData("band");if(!c)return;const d=t.indexOf(c),f=e[d]||c;O(l,c,f);const y=n.getValue()||[];y[a]=c,n.setValue(y),n.onChange(!0)});be(l),s.appendChild(l),setTimeout(()=>{const h=n.getValue();if(h!=null&&h[a]){const c=h[a],d=t.indexOf(c),f=e[d]||c;c&&O(l,c,f)}})}),(r=n.control)==null||r.appendChild(s)}function be(n){switch(n.style.border="2px dashed",n.dataset.slot){case"R":{n.style.borderColor="#F88",n.style.background="#FEE";break}case"G":{n.style.borderColor="#8F8",n.style.background="#EFE";break}case"B":{n.style.borderColor="#88F",n.style.background="#EEF";break}}}const nt=/\{\{([^}]+)\}\}/g;function xe(n,t,e,s){var a,o;const r=n.schema.formulaTemplate||"{{A}}",i=st(e,t);(a=n.control)==null||a.appendChild(i),et(n,e,s),(o=n.control)==null||o.appendChild(document.createElement("hr")),we(n,r,e,s)}function ve(n){const t=n.schema.formulaTemplate||"{{A}}",e=n.variableValues||{};return t.replace(nt,(s,r)=>e[r.trim()]||s)}function we(n,t,e,s){var a;const r=document.createElement("div");r.classList.add("slots-container"),n.variableSlots={},t.split(/(\{\{[^}]+\}\})/).forEach(o=>{if(!o)return;if(!o.match(nt)){if(o=o.trim(),o){const c=document.createElement("span");c.classList.add("formula-text"),c.textContent=o,r.appendChild(c)}return}const l=o.replace(/[{}]/g,"").trim(),h=it(l,c=>{var v;c.preventDefault();const d=(v=c.dataTransfer)==null?void 0:v.getData("band");if(!d)return;const f=e.indexOf(d),y=s[f]||d;n.variableValues[l]=d,rt(n,l,d,y),n.value=ve(n),n.onChange(!0)});r.appendChild(h),n.variableSlots[l]||(n.variableSlots[l]=[]),n.variableSlots[l].push(h)}),(a=n.control)==null||a.appendChild(r),setTimeout(()=>{ke(n)})}function ke(n){n.variableValues&&n.variableSlots&&Object.keys(n.variableValues).forEach(t=>{var o;const e=n.variableValues[t],s=n.bands||n.schema.enum||[],r=n.bandTitles||((o=n.schema.options)==null?void 0:o.enum_titles)||s,i=s.indexOf(e),a=r[i]||e;rt(n,t,e,a)})}function rt(n,t,e,s){n.variableSlots&&n.variableSlots[t]&&n.variableSlots[t].forEach(r=>{O(r,e,s)})}class Y extends pe{constructor(){super(...arguments);S(this,"variableSlots",{});S(this,"variableValues",{});S(this,"bands",[]);S(this,"bandTitles",[]);S(this,"colors",[])}build(){var s,r,i,a,o;super.build();const e=this.schema.format||"bands";this.bands=e==="bands"?(s=this.schema.items)==null?void 0:s.enum:this.schema.enum||[],this.bandTitles=e==="bands"?(i=(r=this.schema.items)==null?void 0:r.options)==null?void 0:i.enum_titles:this.schema.options.enum_titles||this.bands,this.colors=fe(this.schema,e),this.control=document.createElement("div"),this.control.classList.add("form-control"),e==="bands"?ge(this,this.colors,this.bands,this.bandTitles):e==="bands-arithmetic"&&xe(this,this.colors,this.bands,this.bandTitles),this.label=document.createElement("span"),this.label.classList.add("je-header"),this.label.textContent=this.schema.title??"",(a=this.container)==null||a.appendChild(this.label),(o=this.container)==null||o.appendChild(this.control)}}const _e=[{type:"array",format:"bands",func:Y},{type:"string",format:"bands-arithmetic",func:Y}],Se="eox-layercontrol[data-v-219e33f9]{overflow:auto}",Te={class:"d-flex flex-column"},Ce=["for",".customEditorInterfaces"],Ee={key:0,class:"mt-2 mb-2"},Ae={__name:"EodashLayerControl",props:{map:{type:String,default:"first"},tools:{type:Array,default:()=>["datetime","info","config","legend","opacity"]},title:{type:String||Boolean,default:"Layers"},cssVars:{type:Object}},async setup(n){let t,e;customElements.get("eox-layercontrol")||([t,e]=R(()=>N(()=>import("./main.BI6Pmfiy.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))),await t,e()),customElements.get("eox-jsonform")||([t,e]=R(()=>N(()=>import("./main.DDATH51I.js"),__vite__mapDeps([11,1,2,12,8,13,14,15,16]))),await t,e());const s=n,r={tools:s.tools,style:s.cssVars},{selectedCompareStac:i,selectedStac:a}=It(Mt()),o=ht(()=>s.map==="second"?H.value!==null&&i.value!==null:G.value!==null&&a.value!==null),l=s.map==="second"?Ot:Dt,h=s.map==="second"?H:G,c=ct(null),d=async x=>{var B;const{layer:$,datetime:at}=x.detail,V=await Pt(l,$);let T=[];V&&(T=await V.updateLayerJson(at,$.get("id"),s.map));const k=(B=T==null?void 0:T.find(_=>{var P;return((P=_==null?void 0:_.properties)==null?void 0:P.id)==="AnalysisGroup"}))==null?void 0:B.layers;k!=null&&k.length&&(k==null||k.forEach(_=>{_.properties.layerControlExpand=!0,_.properties.layerControlToolsExpand=!0}),h.value.layers=T)};let f;const y=x=>{clearTimeout(f),f=setTimeout(()=>{d(x)},500)},v=x=>{s.map==="second"?Vt.value=x.detail.jsonformValue:Bt.value=x.detail.jsonformValue};return(x,$)=>(F(),L("span",Te,[o.value?(F(),L("eox-layercontrol",dt({key:j(h)},r,{for:j(h),".customEditorInterfaces":j(_e),"onDatetime:updated":y,toolsAsList:"true",ref_key:"eoxLayercontrol",ref:c,"on:layerConfig:change":v}),[ut(x.$slots,"layerstitle",{},()=>[U("div",null,[n.title?(F(),L("p",Ee,[U("strong",null,pt(n.title),1)])):z("v-if",!0)])],!0)],48,Ce)):z("v-if",!0)]))}},qe=jt(Ae,[["styles",[Se]],["__scopeId","data-v-219e33f9"]]);export{qe as default};
