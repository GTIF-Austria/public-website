var ye=Object.defineProperty;var T=e=>{throw TypeError(e)};var ge=(e,s,t)=>s in e?ye(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var L=(e,s,t)=>ge(e,typeof s!="symbol"?s+"":s,t),ee=(e,s,t)=>s.has(e)||T("Cannot "+t);var v=(e,s,t)=>(ee(e,s,"read from private field"),t?t.call(e):s.get(e)),S=(e,s,t)=>s.has(e)?T("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(e):s.set(e,t),H=(e,s,t,a)=>(ee(e,s,"write to private field"),a?a.call(e,t):s.set(e,t),t);import{_ as ve,aG as we,X as be,a$ as Fe,b0 as Se,$ as He,W as Ve,L as Le,cf as ke,aK as te,cg as Ie,b7 as Me,a2 as Ce,a3 as $e,bl as xe,O as Be,P as Oe}from"./eo-dash.D7KbyiIn.js";import{m as Ne,g as Ae,u as Je}from"./async-lFefjGhd.D8gMtXfK.js";import{i as se,u as _e,h as Ge}from"./handling-4VLG1lBe.jCVAl7M-.js";import Ue from"./EodashChart-C-8eEILQ.SDRmm1Gc.js";import Re,{t as Pe,n as je}from"./ProcessList-DssjFt3a.DIlFfYwj.js";import"./main.CumEpZUB.js";import{E as G,a as D,x as u}from"./lit-element.CIht5NN8.js";import{e as qe,i as Ke}from"./directive.CvdRHFdJ.js";import{m as Ze}from"./directive-helpers.BMu_cjfm.js";import{n as z}from"./when.BR7zwNJC.js";import{a as ze,e as We}from"./addCommonStyleSheet.B0XXRREc.js";import{n as Qe,o as Xe,q as Ye,s as Ee}from"./WMTS.-QsPU6PI.js";import{g as De}from"./main.oSsEWtQE.js";import{W as Te}from"./WKT.CDZ31xJV.js";import"./main.BI47acVm.js";import{a4 as et,q as Y,o as M,c as W,j as tt,E as st,k as Z,e as _,b as Q,w as ae,a as re,p as C,h as X,v as at,P as ce,x as rt}from"./framework.fPNBP_58.js";import"./commonjsHelpers.BosuxZz1.js";import"./utils.DMAht7nH.js";import"./index.DEU_HeW8.js";import"./tooltip-DBjY-jYD.CD1-Vtnu.js";import"./VTooltip-Cn7LfsfM.BCaoRSdg.js";import"./forwardRefs-DrtFAEmY.CVHgr0HH.js";import"./transition-9tAAZCZh.xDYFiP3x.js";import"./sequential.BdGG0OD6.js";import"./browser.RO3fRsyy.js";import"./toolcool-range-slider.min.BBXDELo7.js";import"./index.BIJR-IiI.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const it=qe(class extends Ke{constructor(){super(...arguments),this.key=G}render(e,s){return this.key=e,s}update(e,[s,t]){return s!==this.key&&(Ze(e),this.key=s),t}}),nt=e=>{e.hoverInteraction=e.eoxMap.selectInteractions.SelectLayerHoverInteraction,e.clickInteraction=e.eoxMap.selectInteractions.SelectLayerClickInteraction;const s=()=>{e.requestUpdate()};e.hoverInteraction.selectStyleLayer.on("change",s),e.clickInteraction.selectStyleLayer.on("change",s)},ot=(e,s,t)=>{if(e.clickId===s)return;const a=t?[]:[s];e.hoverInteraction.highlightById(a)},lt=(e,s,t)=>{e.stopPropagation();const a=Number(e.target.getAttribute("index")),r=s.drawLayer.getSource().getFeatures()[a];s.drawLayer.getSource().removeFeature(r),s.drawnFeatures.splice(a,1),t.emitDrawnFeatures(),s.requestUpdate()},ie={duration:750,padding:[20,20,20,20]},ne={type:"FeatureCollection",features:[]},ct=(e,s)=>{const{clickId:t,drawLayer:a,olMap:r,clickInteraction:i}=s,c=i.getId(e);if(t===c){const o=a.getSource().getExtent();r.getView().fit(o,ie),i.highlightById([])}else{const o=s.eoxMap.projection||"EPSG:3857",d=s.eoxDrawTools.projection,m=e.clone().getGeometry().transform(d,o).getExtent();i.highlightById([c]),r.getView().fit(m,ie)}s.requestUpdate()};class de extends D{constructor(){super();L(this,"hoverInteraction");L(this,"clickInteraction");L(this,"hoverId");L(this,"clickId");this.eoxDrawTools=null,this.eoxMap=null,this.olMap=null,this.draw=null,this.drawLayer=null,this.drawnFeatures=[],this.featureName="Feature",this.featureNameKey=null,this.modify=null,this.unstyled=!1}_handleDelete(t){lt(t,this,this.eoxDrawTools),this.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))}_handleFeatureSelectAndDeselect(t){ct(t,this)}_handleHoverFeature(t,a=!1){ot(this,t,a)}firstUpdated(){nt(this)}createRenderRoot(){return this}render(){var a,r;this.hoverId=(a=this.hoverInteraction)==null?void 0:a.selectedFids[0],this.clickId=(r=this.clickInteraction)==null?void 0:r.selectedFids[0];const t=u`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>trash-can-outline</title>
      <path
        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
      />
    </svg>`;return u`
      <ul class="list no-space">
        ${this.drawnFeatures.map((i,c)=>{var f;const n=c+1,o=Object.values(this.eoxMap.selectInteractions)[0].getId(i),d=this.hoverId===o,m=this.clickId===o,y=d?"surface-container-low":m?"fill":G,w=(f=this.featureNameKey)==null?void 0:f.split("."),b=i.get(this.featureNameKey)||(w==null?void 0:w.reduce((V,A)=>V==null?void 0:V[A],{...i.getProperties()})),h=b||`${this.featureName} ${n}`;return it(n,u`
              <li
                class="${y} no-round"
                @mouseover=${()=>this._handleHoverFeature(o)}
                @mouseout=${()=>this._handleHoverFeature(o,!0)}
                @click="${()=>this._handleFeatureSelectAndDeselect(i)}"
              >
                <div class="max">
                  <span class="title">${h}</span>
                </div>
                <button
                  index=${c}
                  data-cy="deleteFeatureBtn"
                  class="transparent square small error-text front"
                  @click="${this._handleDelete}"
                >
                  ${this.unstyled?"x":u`<i class="small">${t}</i>`}
                </button>
              </li>
            `)})}
      </ul>
    `}}L(de,"properties",{eoxDrawTools:{attribute:!1,state:!0},eoxMap:{attribute:!1,state:!0},olMap:{attribute:!1,state:!0},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},featureName:{attribute:!1,state:!0,type:String},featureNameKey:{attribute:!1,state:!0,type:String},modify:{attribute:!1,state:!0},unstyled:{type:Boolean}});customElements.define("eox-drawtools-list",de);const dt=e=>{const{multipleFeatures:s,drawnFeatures:t,currentlyDrawing:a}=e,r=!s&&(t==null?void 0:t.length)>0||a,i=!(t!=null&&t.length)&&!a;return{drawDisabled:r,discardDisabled:i}};function ut(e){navigator.clipboard.writeText(e).then(function(){},function(s){console.error("Could not copy text: ",s)})}const pt=(e,s)=>new Qe().writeFeaturesObject(e,s),ht=(e,s)=>new Te().writeFeatures(e,s);var U,R;class ue extends D{constructor(){super();S(this,U,!0);S(this,R,!0);this.multipleFeatures=!1,this.drawnFeatures=[],this.importFeatures=!1,this.showEditor=!1,this.currentlyDrawing=!1,this.drawFunc=null,this.geoJSON="",this.type="Polygon",this.unstyled=!1,this.select=!1}updateButtonStates(){const{drawDisabled:t,discardDisabled:a}=dt(this);H(this,U,t),H(this,R,a)}createRenderRoot(){return this}render(){this.updateButtonStates();const t=this.currentlyDrawing?"drawing":"draw",a={Polygon:u`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>shape-polygon-plus</title>
        <path
          d="M17,15.7V13H19V17L10,21L3,14L7,5H11V7H8.3L5.4,13.6L10.4,18.6L17,15.7M22,5V7H19V10H17V7H14V5H17V2H19V5H22Z"
        />
      </svg>`,Point:u`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>vector-point-plus</title>
          <path
            d="M9 9V15H15V9H9M11 11H13V13H11V11M18 15V18H15V20H18V23H20V20H23V18H20V15H18Z"
          />
        </svg>
      `,Circle:u`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>shape-circle-plus</title>
          <path
            d="M11,19A6,6 0 0,0 17,13H19A8,8 0 0,1 11,21A8,8 0 0,1 3,13A8,8 0 0,1 11,5V7A6,6 0 0,0 5,13A6,6 0 0,0 11,19M19,5H22V7H19V10H17V7H14V5H17V2H19V5Z"
          />
        </svg>
      `,LineString:u`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>vector-polyline-plus</title>
          <path
            d="M2 3V9H4.95L6.95 15H6V21H12V16.41L17.41 11H22V5H16V9.57L10.59 15H9.06L7.06 9H8V3H2M4 5H6V7H4V5M18 7H20V9H18V7M18 15V18H15V20H18V23H20V20H23V18H20V15H18M8 17H10V19H8V17Z"
          />
        </svg>
      `,Box:u`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>shape-rectangle-plus</title>
          <path
            d="M19,6H22V8H19V11H17V8H14V6H17V3H19V6M17,17V14H19V19H3V6H11V8H5V17H17Z"
          />
        </svg>
      `},r=u`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>cursor-default-click</title>
      <path
        d="M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10"
      />
    </svg>`,i=u`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>trash-can-outline</title>
      <path
        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
      />
    </svg>`,c=u`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>pencil-outline</title>
      <path
        d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
      />
    </svg>`,n=u`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>import</title>
      <path
        d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z"
      />
    </svg>`,o=u`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>content-copy</title>
      <path
        d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
      />
    </svg>`;return u`
      <nav>
        <slot></slot>
        <div class="max">
          <!-- Draw Button -->
          <button
            data-cy="drawBtn"
            class="transparent square primary-text no-margin small"
            title="${this.unstyled?this.select?"Select":"Draw":""}"
            ?disabled="${v(this,U)||G}"
            @click="${()=>this.drawFunc.start()}"
          >
            ${this.unstyled?t:u`
                  <i class="small"
                    >${this.select?r:a[this.type]}</i
                  >
                  <span class="tooltip bottom">
                    ${this.select?"Select":"Draw"}
                  </span>
                `}
          </button>

          <!-- Discard Button -->
          <button
            data-cy="discardBtn"
            class="transparent square error-text no-margin small"
            title="${this.unstyled?"Discard":""}"
            ?disabled="${v(this,R)||G}"
            @click="${()=>this.drawFunc.discard()}"
          >
            ${this.unstyled?"discard":u`
                  <i class="small">${i}</i>
                  <span class="tooltip bottom">Discard</span>
                `}
          </button>
        </div>

        <!-- Editor Button -->
        ${z(this.showEditor,()=>u`
            <button
              data-cy="editorBtn"
              class="transparent circle primary-text no-margin small"
              title="${this.unstyled?"Edit features":""}"
              @click=${()=>this.renderRoot.querySelector("#editor").classList.toggle("hidden")}
            >
              ${this.unstyled?"import":u`
                    <i class="small">${c}</i>
                    <span class="tooltip bottom">Edit features</span>
                  `}
            </button>
          `)}

        <!-- Import Button -->
        ${z(this.importFeatures,()=>u`
            <!-- Import Input Field : Hidden -->
            <input
              type="file"
              id="import-file"
              style="display: none;"
              @change=${this.drawFunc.import}
            />

            <!-- Main Import Button -->
            <button
              data-cy="importBtn"
              class="transparent circle primary-text no-margin small"
              title="${this.unstyled?"Import features":""}"
              @click=${()=>this.querySelector("#import-file").click()}
            >
              ${this.unstyled?"import":u`
                    <i class="small">${n}</i>
                    <span class="tooltip bottom">Import features</span>
                  `}
            </button>
          `)}
      </nav>

      <!-- Geo JSON Wrapper -->
      ${z(this.showEditor,()=>u`
          <div id="editor" class="field border extra hidden">
            <!-- Geo JSON Editor -->
            <textarea
              style="font-family: monospace; font-size: small; line-height: 1.4; padding: 0.4rem;"
              @drop=${this.drawFunc.import}
              @input=${this.drawFunc.editor}
              .value=${this.geoJSON}
            ></textarea>

            <!-- Geo JSON Copy Button -->
            <button
              data-cy="copyBtn"
              class="circle absolute bottom right medium-margin aloha"
              style="z-index: 1"
              @click=${()=>ut(this.geoJSON)}
            >
              ${this.unstyled?"copy":u`
                    <i class="tiny">${o}</i>
                    <span class="tooltip top">Copy</span>
                  `}
            </button>
          </div>
        `)}
    `}}U=new WeakMap,R=new WeakMap,L(ue,"properties",{multipleFeatures:{attribute:!1,type:Boolean},drawnFeatures:{attribute:!1,state:!0,type:Array},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},drawFunc:{attribute:!1,type:Object},select:{type:Boolean},importFeatures:{attribute:"import-features",type:Boolean},showEditor:{attribute:"show-editor",type:Boolean},geoJSON:{attribute:"geo-json",type:String},type:{attribute:"type",type:String},unstyled:{type:Boolean}});customElements.define("eox-drawtools-controller",ue);ze();const ft=`
  ${We}
  :host {
    --padding: 0.5rem;
  }
  .drawtitle {
    padding-left: var(--padding);
    padding-right: var(--padding);
  }
  .hidden {
    display: none;
  }
`,mt=e=>{(()=>{var t;if(e.emitDrawnFeatures(),!e.multipleFeatures)(t=e.draw)==null||t.setActive(!1),e.selectionEvents.removeSelectionEvent(),e.currentlyDrawing=!1;else if(e.continuous)if(!e.layerId)e.drawLayer.getSource().clear(),e.drawnFeatures=[];else{const r=e.drawLayer.getSource().getFeatures().at(-1);if(e.drawLayer.getSource().clear(),!r)return;e.drawLayer.getSource().addFeature(r),e.drawnFeatures=[r]}})(),e.requestUpdate()},yt=e=>{const s=()=>{var a;e.drawLayer.set("isDrawingEnabled",!0),(a=e.draw)==null||a.setActive(!0),e.selectionEvents.addSelectionEvent()},t=()=>{e.currentlyDrawing=!0,e.requestUpdate()};s(),t()},E=(e,s,t)=>{var o,d,m,y;if(!t||!s)return;const a=s.getLayerById(t),r=a?JSON.parse(JSON.stringify(a.get("_jsonDefinition"))):null;if(!r){console.error(`Layer with id ${t} not found`);return}const i={type:"select",active:!1,options:{id:"SelectLayerHoverInteraction",condition:"pointermove",active:!1,style:((o=e.featureStyles)==null?void 0:o.hover)||{"fill-color":"rgba(0, 0, 0,0.0)","stroke-color":"#3399CC","stroke-width":2.5}}},c={type:"select",options:{id:"SelectLayerClickInteraction",condition:"click",multi:e.multipleFeatures,modify:e.allowModify,active:!1,style:((d=e.featureStyles)==null?void 0:d.click)||{"fill-color":"rgba(0, 0, 0,0.0)","stroke-color":"rgba(0, 0, 0,0.0)"}}};r.interactions=[i,c],s.addOrUpdateLayer(r),pe(s.layers,t,[r]);const n=e.draw;e.draw=s.selectInteractions.SelectLayerClickInteraction,n==null||n.setActive(!1),(m=s.selectInteractions.SelectLayerClickInteraction)==null||m.setActive(!1),(y=s.selectInteractions.SelectLayerHoverInteraction)==null||y.setActive(!1)};function pe(e,s,t){const a=e.findIndex(r=>r.properties.id===s);if(a!==-1)return e.splice(a,1,...t),e;for(const r of e)if(r.type==="Group"){const i=pe(r.layers,s,t);i!=null&&i.length&&(r.layers=i)}return e}const $=e=>{const s=e.getGeometry();if(!s)return;let t="";if(s.getType()==="Polygon"||s.getType()==="MultiPolygon"){const a=Xe(s);a>1e6?t=(a/1e6).toFixed(2)+" km²":t=a.toFixed(2)+" m²"}else if(s.getType()==="LineString"||s.getType()==="MultiLineString"){const a=Ye(s);a>1e3?t=(a/1e3).toFixed(2)+" km":t=a.toFixed(2)+" m"}else if(s.getType()==="Circle"){const a=s.getRadius(),r=Math.PI*Math.pow(a,2);r>1e6?t=(r/1e6).toFixed(2)+" km²":t=r.toFixed(2)+" m²"}t&&e.get("measure")!==t&&e.set("measure",t)},gt=e=>{const s=e.drawLayer.getSource(),t=a=>{const r=a.feature;r&&($(r),r.getGeometry().on("change",()=>$(r)))};s.on("addfeature",t),s.getFeatures().forEach(a=>{$(a),a.getGeometry().on("change",()=>$(a))})},oe=(e,s)=>{var d,m,y,w,b;const a=De(e.for),r=a.map,i="0, 65, 112";e.drawLayer=a.addOrUpdateLayer({zIndex:100,type:"Vector",properties:{id:"drawLayer",layerControlHide:!0,isDrawingEnabled:!1,multipleFeatures:s},source:{type:"Vector"},style:((d=e.featureStyles)==null?void 0:d.layer)||{"fill-color":`rgba(${i}, 0.1)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":2,"circle-radius":5,"circle-fill-color":`rgba(${i}, 1)`,...e.measure&&{"text-value":["coalesce",["get","measure"],""],"text-fill-color":`rgba(${i}, 1)`,"text-stroke-color":"white","text-stroke-width":3,"text-font":"bold 14px sans-serif","text-overflow":!0}},interactions:[{type:"draw",options:{active:!1,id:"drawInteraction",type:e.type,modify:e.allowModify,stopClick:!0,style:((m=e.featureStyles)==null?void 0:m.layer)||{"fill-color":`rgba(${i}, 0.1)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":1,"stroke-line-dash":[7,3],"circle-radius":5,"circle-fill-color":`rgba(${i}, 1)`,...e.measure&&{"text-value":["coalesce",["get","measure"],""],"text-fill-color":`rgba(${i}, 1)`,"text-stroke-color":"white","text-stroke-width":3,"text-font":"bold 14px sans-serif","text-overflow":!0}}}},...e.layerId?[]:[{type:"select",options:{id:"SelectLayerHoverInteraction",condition:"pointermove",style:((y=e.featureStyles)==null?void 0:y.hover)||{"fill-color":`rgba(${i}, 0.2)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":2},tooltip:!1}},{type:"select",options:{id:"SelectLayerClickInteraction",condition:"click",panIn:!0,style:((w=e.featureStyles)==null?void 0:w.click)||{"fill-color":`rgba(${i}, 0.2)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":2}}}]]}),e.draw=a.interactions.drawInteraction,e.modify=a.interactions.drawInteraction_modify,E(e,a,e.layerId),e.measure&&gt(e);const c=()=>e.onModifyEnd(),n=()=>mt(e);return(b=e.modify)==null||b.on("modifyend",c),e.measure&&e.draw&&typeof e.draw.on=="function"&&e.draw.on("drawstart",h=>{const f=h.feature;$(f),f.getGeometry().on("change",()=>$(f))}),a.addEventListener("addfeatures",n),{EoxMap:a,OlMap:r,reset:h=>{var f;!h.eoxMap||!h.drawLayer||(h.drawLayer.getSource().clear(),h.eoxMap.map.removeLayer(h.drawLayer),(f=h.modify)==null||f.un("modifyend",c),h.eoxMap.removeEventListener("addfeatures",n),h.layerId||(h.draw=null),h.modify=null)}}},vt=e=>{const s=()=>{var r;e.drawnFeatures=[],(r=e.draw)==null||r.setActive(!1),!!e.layerId&&e.selectionEvents.removeSelectionEvent(),e.drawLayer.getSource().clear(),e.geoJSON=null},t=()=>{e.emitDrawnFeatures(),e.currentlyDrawing=!1,e.requestUpdate()};s(),t()},wt=(e,s)=>{setTimeout(()=>{const a=e.drawLayer.getSource().getFeatures(),r=e.eoxMap.projection||"EPSG:3857",i=e.projection,c=i?a.map(o=>{o=o.clone();const d=o.getGeometry().transform(r,i);return o.setGeometry(d),o}):a;e.setDrawnFeaturesInternal?e.setDrawnFeaturesInternal(c):e.drawnFeatures=c;let n;switch(e.format){case"geojson":n=pt(e.drawnFeatures);break;case"wkt":n=ht(e.drawnFeatures);break;case"feature":n=e.drawnFeatures;break;default:n=e.drawnFeatures;break}e.updateGeoJSON(),e.requestUpdate(),s(n)},0)},bt=e=>{const s=r=>{(r==null?void 0:r.detail.id)!=="SelectLayerClickInteraction"||!r.detail.feature||(typeof r.detail.feature.getGeometry().getCoordinates!="function"&&(r.detail.feature=Ee(r.detail.feature)),e.drawLayer.getSource().addFeature(r.detail.feature),e.eoxMap.dispatchEvent(new CustomEvent("addfeatures",{detail:r.detail})))};return{addSelectionEvent:()=>{if(e.layerId){const r=e.eoxMap.selectInteractions.SelectLayerHoverInteraction;r==null||r.setActive(!0),e.eoxMap.addEventListener("select",s)}},removeSelectionEvent:()=>{var i;const r=(i=e.eoxMap.selectInteractions)==null?void 0:i.SelectLayerHoverInteraction;r&&(r.selectedFids=[],r==null||r.setActive(!1)),e.eoxMap.removeEventListener("select",s)}}},Ft=(e,s,t,a)=>{if(s){if(t){a&&t!==a&&le(e,s),E(e,s,t);return}if(!t&&a){le(e,s);return}}};function le(e,s){s&&(e.discardDrawing(),e.selectionEvents.removeSelectionEvent(),e.draw=s.interactions.drawInteraction,s.selectInteractions.SelectLayerClickInteraction.remove(),s.selectInteractions.SelectLayerHoverInteraction.remove())}const he=e=>{var s;e.currentlyDrawing&&((s=e.draw)==null||s.setActive(!1),e.currentlyDrawing=!1,e.requestUpdate())},St=(e,s)=>{e.key==="Escape"&&he(s)};function Ht(e,s){const t=e.drawnFeatures.indexOf(s);t>-1&&fe(e,t)}function fe(e,s){if(s>-1&&s<e.drawnFeatures.length){const t=[...e.drawnFeatures];t.splice(s,1),e.drawnFeatures=t,e.emitDrawnFeatures()}}function Vt(e,s){function t(i){i.preventDefault(),i.stopPropagation()}function a(i){i.srcElement.style.opacity="0.4"}function r(i){i.srcElement.style.opacity="1"}["dragenter","dragover","dragleave","drop"].forEach(i=>{s.addEventListener(i,t,!1),["dragenter","dragover"].includes(i)?s.addEventListener(i,a,!1):s.addEventListener(i,r,!1)}),s.addEventListener("drop",i=>me(i,e),!1)}function Lt(e){e.preventDefault(),e.stopPropagation()}function me(e,s){Lt(e);let t;"dataTransfer"in e&&e.dataTransfer?t=e.dataTransfer.files:e.target&&"files"in e.target?t=e.target.files:t=[],Array.from(t).forEach(a=>kt(a,s)),e.target&&"value"in e.target&&(e.target.value="")}function kt(e,s){const t=new FileReader;t.readAsText(e),t.onloadend=function(){typeof t.result=="string"&&s.handleFeatureChange(t.result)}}var x,P,j,B,O,q,N,K;class It extends D{constructor(){super();S(this,x);S(this,P);S(this,j);S(this,B);S(this,O,!1);S(this,q);S(this,N,[]);S(this,K,t=>St(t,this));this.allowModify=!1,this.for="eox-map",this.currentlyDrawing=!1,this.draw=null,this.drawLayer=null,this.layerId="",this.featureName="Feature",this.featureNameKey=null,this.featureStyles=null,this.modify=null,this.multipleFeatures=!1,this.measure=!1,this.importFeatures=!1,this.showEditor=!1,this.showList=!1,this.projection="EPSG:4326",this.type="Polygon",this.selectionEvents=null,this.format="feature",this.unstyled=!1,this.noShadow=!1}static get properties(){return{allowModify:{attribute:"allow-modify",type:Boolean},for:{type:String},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},continuous:{type:Boolean},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},featureName:{attribute:"feature-name",type:String},featureNameKey:{attribute:"feature-name-key",type:String},layerId:{attribute:"layer-id",type:String},featureStyles:{type:Object},modify:{attribute:!1,state:!0},multipleFeatures:{attribute:"multiple-features",type:Boolean},measure:{type:Boolean},importFeatures:{attribute:"import-features",type:Boolean},showEditor:{attribute:"show-editor",type:Boolean},showList:{attribute:"show-list",type:Boolean},projection:{type:String},noShadow:{attribute:"no-shadow",type:Boolean},format:{type:String},type:{type:String},unstyled:{type:Boolean}}}set continuous(t){H(this,q,t),t&&(this.multipleFeatures=!0)}get continuous(){return v(this,q)}setDrawnFeaturesInternal(t){H(this,O,!0),this.drawnFeatures=t,H(this,O,!1)}set drawnFeatures(t){var r;const a=v(this,N);if(H(this,N,t),this.drawLayer&&!v(this,O)){if(this.drawLayer.getSource().clear(),t!=null&&t.length){const i=((r=this.eoxMap)==null?void 0:r.projection)||"EPSG:3857",c=this.projection||"EPSG:4326";let n=t;i!==c&&(n=t.map(o=>{o=o.clone();const d=o.getGeometry().transform(c,i);return o.setGeometry(d),o})),this.drawLayer.getSource().addFeatures(n)}this.updateGeoJSON()}this.requestUpdate("drawnFeatures",a)}get drawnFeatures(){return v(this,N)}set layerId(t){Ft(this,this.eoxMap,t,v(this,B)),H(this,B,t)}get layerId(){return v(this,B)}startDrawing(){yt(this)}stopDrawing(){he(this)}discardDrawing(){vt(this)}removeFeature(t){Ht(this,t)}removeFeatureByIndex(t){fe(this,t)}handleFeatureChange(t,a=!1,r=!0){this.eoxMap.parseTextToFeature(t||JSON.stringify(ne),this.drawLayer,this.eoxMap,a,r)}handleFilesChange(t){me(t,this)}onModifyEnd(){this.emitDrawnFeatures()}updateGeoJSON(){H(this,j,JSON.stringify(this.eoxMap.parseFeature(this.drawnFeatures)||ne,void 0,2))}emitDrawnFeatures(){wt(this,a=>{this.dispatchEvent(new CustomEvent("drawupdate",{detail:a}))})}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}updateLayer(){this.resetLayer&&this.resetLayer(this);const{EoxMap:t,OlMap:a,reset:r}=oe(this,this.multipleFeatures);this.resetLayer=r,this.eoxMap=t,H(this,P,a)}firstUpdated(){var t;this.updateLayer(),this.selectionEvents=bt(this),this.importFeatures&&Vt(this,this.eoxMap),((t=this.drawnFeatures)==null?void 0:t.length)>0?this.drawnFeatures=[...this.drawnFeatures]:this.updateGeoJSON(),this.requestUpdate()}updated(t){((r=>t.has(r)&&t.get(r)!==void 0)("for")||t.has("type")&&t.get("type")!==this.type||t.has("measure")&&t.get("measure")!==this.measure)&&(this.updateLayer(),this.currentlyDrawing=!1)}get eoxMap(){return v(this,x)}set eoxMap(t){const a=v(this,x);H(this,x,t),this.requestUpdate("eoxMap",a)}connectedCallback(){if(super.connectedCallback(),document.addEventListener("keydown",v(this,K)),this.drawLayer&&this.eoxMap){const{reset:t}=oe(this,this.multipleFeatures);this.resetLayer=t}}disconnectedCallback(){var t;super.disconnectedCallback(),document.removeEventListener("keydown",v(this,K)),(t=this.resetLayer)==null||t.call(this,this)}render(){var t;return u`
      <style>
        :host { display: block; }
        ${!this.unstyled&&ft}
      </style>

      <div class="drawtitle">
        <slot name="drawtitle"
          ><p><strong>Draw</strong></p></slot
        >
      </div>

      <!-- Controller Component -->
      <eox-drawtools-controller
        .drawFunc=${{start:()=>this.startDrawing(),discard:()=>this.discardDrawing(),editor:a=>this.handleFeatureChange(a.target.value,!0),import:a=>this.handleFilesChange(a)}}
        ?select=${!!this.layerId}
        .unstyled=${this.unstyled}
        .drawnFeatures=${this.drawnFeatures}
        .currentlyDrawing=${this.currentlyDrawing}
        .multipleFeatures=${this.multipleFeatures}
        .importFeatures=${this.importFeatures}
        .showEditor=${this.showEditor}
        .geoJSON=${v(this,j)}
        .type=${this.type}
      ></eox-drawtools-controller>

      <!-- List Component -->
      ${this.showList&&((t=this.drawnFeatures)!=null&&t.length)?u`<eox-drawtools-list
            .eoxDrawTools=${this}
            .eoxMap=${this.eoxMap}
            .olMap=${v(this,P)}
            .draw=${this.draw}
            .drawLayer=${this.drawLayer}
            .drawnFeatures=${this.drawnFeatures}
            .featureName=${this.featureName}
            .featureNameKey=${this.featureNameKey}
            .modify=${this.modify}
            .unstyled=${this.unstyled}
            @changed=${()=>{this.updateGeoJSON(),this.requestUpdate()}}
          ></eox-drawtools-list>`:G}
    `}}x=new WeakMap,P=new WeakMap,j=new WeakMap,B=new WeakMap,O=new WeakMap,q=new WeakMap,N=new WeakMap,K=new WeakMap;customElements.define("eox-drawtools",It);var Mt=({selectedStac:e,jsonformSchema:s,jsonformEl:t,isProcessed:a,processResults:r,loading:i,isPolling:c,mapElement:n})=>{at(async()=>{var o;await se({enableCompare:((o=n.value)==null?void 0:o.id)==="compare",selectedStac:e,jsonformSchema:s,isProcessed:a,processResults:r,loading:i,isPolling:c,mapElement:n.value})}),Me(async o=>{var y,w,b,h;const d=((y=n.value)==null?void 0:y.id)==="compare",m=d?"compareLayers:updated":"layers:updated";if((d?["compareLayertime:updated","compareTime:updated"]:["layertime:updated","time:updated"]).includes(o)){const f=await _e({jsonformSchema:s.value,newLayers:d?Ce():$e(),enableCompare:d,mapElement:n.value});if(f){const V=Object.values(f.properties??{}).some(l=>{var p,F;return(F=(p=l==null?void 0:l.options)==null?void 0:p.drawtools)==null?void 0:F.layerId})&&!((b=(w=n.value)==null?void 0:w.selectInteractions)!=null&&b.SelectLayerClickInteraction),A=V||JSON.stringify(f)!==JSON.stringify(s.value),k=(h=t.value)==null?void 0:h.value;A&&k&&typeof k=="object"&&(f.default=JSON.parse(JSON.stringify(k))),V&&(s.value=null,await ce()),s.value=f}}o===m&&await se({enableCompare:d,selectedStac:e,jsonformSchema:s,isProcessed:a,processResults:r,loading:i,isPolling:c,mapElement:n.value})})};function Ct(e,s,t,a){const r=xe(()=>a(),200);Y(t,c=>{var n;e.value=((n=c==null?void 0:c.options)==null?void 0:n.execute)||!1});const i=Y([e,s],async([c,n],[o,d])=>{var m,y;d&&d.removeEventListener("change",r),c&&n&&(n.removeEventListener("change",r),n.addEventListener("change",r),(m=n.editor)!=null&&m.ready?r():(await ce(),(y=n.editor)!=null&&y.ready&&r()))},{immediate:!0});rt(()=>{s.value&&s.value.removeEventListener("change",r),i()})}var $t="eox-jsonform{flex-shrink:0;min-height:0;padding:0 12px}.bg-surface:has(.eodash-process-container){height:calc(100% - 30px);overflow:hidden}.eodash-process-container{flex-direction:column;height:100%;display:flex;overflow:hidden}.eodash-process-content{scrollbar-gutter:stable;flex-direction:column;flex-grow:1;display:flex;overflow-y:auto}.eodash-process-content>.eodash-chart-wrapper:not(.fit-x-layout){flex:1 1 0;height:auto;min-height:180px}.eodash-process-content>.eodash-chart-wrapper.fit-x-layout{flex:none;height:auto!important}.eodash-process-actions{text-align:right;background:inherit;border-top:1px solid #0000001a;flex-shrink:0;padding:4px 12px}",xt={ref:"container",class:"eodash-process-container"},Bt={class:"eodash-process-content"},Ot=[".schema"],Nt={key:0,class:"eodash-process-actions"},cs=ve({__name:"index",props:{enableCompare:{type:Boolean,default:!1},vegaEmbedOptions:{type:Object,default(){return{actions:!0}}}},setup(e){const s=C(!1),t=C(null),a=et("jsonformEl");Y(a,l=>{if(l&&l.shadowRoot){const p="eodash-drawtools-inline-style";if(!l.shadowRoot.getElementById(p)){const g=document.createElement("style");g.id=p,g.textContent=`
        /* Compact standard form elements */
        .form-control, .form-group {
          margin-bottom: 8px !important;
        }
        .form-control > label, .form-group > label {
          margin-bottom: 2px !important;
          font-size: 0.9em;
        }
        
        /* Specific layout for drawtools */
        .form-control:has(eox-drawtools) {
          position: relative;
          padding: 8px 12px !important;
          border: none !important;
          background: transparent !important;
          margin-bottom: 8px !important;
        }
        .form-control:has(eox-drawtools) > label {
          position: absolute;
          left: 12px;
          top: 8px;
          margin: 0 !important;
          width: calc(100% - 180px); /* Give label maximum available width */
          line-height: 1.2;
          display: flex;
          align-items: flex-start;
          padding-top: 8px;
          pointer-events: none; /* Let clicks pass through to buttons if they overlap slightly */
        }
        .form-control:has(eox-drawtools) > eox-drawtools {
          display: block;
          width: 100%;
        }
      `,l.shadowRoot.appendChild(g)}const F=()=>{var J;const g=(J=l==null?void 0:l.shadowRoot)==null?void 0:J.querySelector("eox-drawtools");if(g&&g.shadowRoot&&!g.shadowRoot.getElementById("eodash-drawtools-indent-style")){const I=document.createElement("style");return I.id="eodash-drawtools-indent-style",I.textContent=`
            eox-drawtools-controller {
              display: flex;
              justify-content: flex-end; /* Push buttons to the right */
              min-height: 40px;
              width: 100%;
            }
            eox-drawtools-list {
              display: block;
              margin-top: 10px;
              width: 100%;
            }
          `,g.shadowRoot.appendChild(I),!0}return!1};if(!F()){const g=new MutationObserver(()=>{F()&&g.disconnect()});g.observe(l.shadowRoot,{childList:!0,subtree:!0})}}});const r=X(()=>{var l;return(l=m.value)==null?void 0:l.links.filter(p=>p.endpoint==="eoxhub_workspaces").length}),i=C(!1),c=C(!1),n=C(!1),o=C([]),d=X(()=>!c.value&&!!t.value&&!!a.value),{selectedStac:m,selectedCompareStac:y}=we(be()),w=e.enableCompare?y:m,b=e.enableCompare?Fe:Se,h=e.enableCompare?He:Ve,f=e.enableCompare?Pe:je,V=X(()=>{var l;return h.value+((l=b.value)==null?void 0:l.id)+JSON.stringify(t.value)});Mt({selectedStac:w,mapElement:b,jsonformSchema:t,jsonformEl:a,isProcessed:s,processResults:o,loading:i,isPolling:n});const A=()=>{o.value.forEach(l=>{var F;if(!l)return;let p="";typeof l=="string"?(p=l.includes("/")?l.split("/").pop()??"":l,p=p.includes("?")?p.split("?")[0]:p):p=((F=w.value)==null?void 0:F.id)+"_process_results.json",Ne(p,l)})},k=async()=>{var p;if(Ae(t.value).some(F=>{var J,I;const g=(I=(J=a.value)==null?void 0:J.value)==null?void 0:I[F];return!g||Array.isArray(g)&&!g.length})){s.value=!1;const F=e.enableCompare?Be:Oe;F.value=null;return}const l=(p=a.value)==null?void 0:p.editor.validate();if(l!=null&&l.length){console.warn("[eodash] Form validation failed",l);return}o.value=[],await Ge({jobs:f,selectedStac:w,jsonformEl:a,jsonformSchema:t,loading:i,isPolling:n,processResults:o,mapElement:b.value}),s.value=!0,r.value&&Je(f,h.value)};return Ct(c,a,t,k),(l,p)=>(M(),W("div",xt,[tt("div",Bt,[st(Re,{"map-element":Z(b),"enable-compare":e.enableCompare},null,8,["map-element","enable-compare"]),t.value?(M(),W("eox-jsonform",{key:V.value,ref_key:"jsonformEl",ref:a,".schema":t.value},null,40,Ot)):_("v-if",!0),Z(Le)?_("v-if",!0):(M(),Q(Ue,{key:1,"vega-embed-options":e.vegaEmbedOptions,"enable-compare":e.enableCompare},null,8,["vega-embed-options","enable-compare"]))]),d.value||o.value.length&&s.value&&!r.value?(M(),W("div",Nt,[d.value?(M(),Q(te,{key:0,loading:i.value,style:{"margin-right":"8px"},"append-icon":[Z(ke)],density:"comfortable",size:"small",onClick:k},{default:ae(()=>[...p[0]||(p[0]=[re(" Execute ",-1)])]),_:1},8,["loading","append-icon"])):_("v-if",!0),o.value.length&&s.value&&!r.value?(M(),Q(te,{key:1,color:"primary",style:{"margin-right":"8px"},"append-icon":[Z(Ie)],size:"small",density:"comfortable",onClick:A},{default:ae(()=>[...p[1]||(p[1]=[re(" Download ",-1)])]),_:1},8,["append-icon"])):_("v-if",!0)])):_("v-if",!0)],512))}},[["styles",[$t]]]);export{cs as default};
