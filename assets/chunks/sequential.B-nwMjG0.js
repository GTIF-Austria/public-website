var cn=Object.defineProperty;var ee=t=>{throw TypeError(t)};var fn=(t,e,n)=>e in t?cn(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ne=(t,e,n)=>fn(t,typeof e!="symbol"?e+"":e,n),At=(t,e,n)=>e.has(t)||ee("Cannot "+n);var A=(t,e,n)=>(At(t,e,"read from private field"),n?n.call(t):e.get(t)),Lt=(t,e,n)=>e.has(t)?ee("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),St=(t,e,n,r)=>(At(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),U=(t,e,n)=>(At(t,e,"access private method"),n);import{e as hn,i as dn,x as pn}from"./style.CcGKRj1a.js";import{J as q,E as mn,A as gn,S as bn,i as re}from"./index.FL_cjAQh.js";import{A as Se}from"./browser.CQpScIU-.js";import"./toolcool-range-slider.min.BBXDELo7.js";import{i as qt,a as Vt,b as ft,c as It,d as Tt,e as zt,f as Bt,g as D,h as xn,s as ie,j as yn,k as wn}from"./utils.BQF9b9oa.js";import{a as vn}from"./addCommonStyleSheet.Czyt9ZDC.js";function Mn(t,e){Object.keys(e).forEach(n=>{t.setAttribute(n,e[n])})}class kn extends Se{register(){super.register()}unregister(){super.unregister()}build(){const e=this.schema.properties,n=this.options,r=this.schema.description,i=this.theme,a=this.defaults.startVals[this.key];n.compact||(this.header=this.label=i.getFormInputLabel(this.getTitle(),this.isRequired())),r&&(this.description=i.getFormInputDescription(this.translateProperty(r))),n.infoText&&(this.infoButton=i.getInfoButton(this.translateProperty(n.infoText)));const o=document.createElement("tc-range-slider"),s=Object.keys(e).find(f=>f.includes("min")),u=Object.keys(e).find(f=>f.includes("max")),l={min:e[s].minimum,max:e[u].maximum,step:e[s].step||e[u].step,value1:(a==null?void 0:a[s])||e[s].default,value2:(a==null?void 0:a[u])||e[u].default,"generate-labels":"true","generate-labels-text-color":"currentColor","slider-width":"100%","range-dragging":"false"};Mn(o,l),this.input=o,this.input.id=this.formname,this.control=i.getFormControl(this.label,this.input,this.description,this.infoButton),(this.schema.readOnly||this.schema.readonly)&&(this.disable(!0),this.input.disabled=!0),this.input.addEventListener("change",f=>{f.preventDefault(),f.stopPropagation(),this.value={[s]:f.detail.value1,[u]:f.detail.value2},this.onChange(!0)}),this.container.appendChild(this.control)}destroy(){this.label&&this.label.parentNode&&this.label.parentNode.removeChild(this.label),this.description&&this.description.parentNode&&this.description.parentNode.removeChild(this.description),this.input&&this.input.parentNode&&this.input.parentNode.removeChild(this.input),super.destroy()}}class g extends Se{register(){super.register()}unregister(){super.unregister()}build(){var x,b,y,k,w,B;const e=this.options,n=this.schema.description,r=this.theme,i=((b=(x=this.schema)==null?void 0:x.options)==null?void 0:b.drawtools)??{},a=((k=(y=this.schema)==null?void 0:y.options)==null?void 0:k.map)??{};e.compact||(this.header=this.label=r.getFormInputLabel(this.getTitle(),this.isRequired())),n&&(this.description=r.getFormInputDescription(this.translateProperty(n))),e.infoText&&(this.infoButton=r.getInfoButton(this.translateProperty(e.infoText)));const o=document.createElement("eox-drawtools");o.innerHTML='<div slot="drawtitle"></div>';let s;switch(!0){case It(this.schema):s="Polygon";break;case ft(this.schema):s="Box";break;case Vt(this.schema):s="Point";break;case qt(this.schema):s="LineString";break;default:s="Box";break}let u;switch(!0){case zt(this.schema):u="wkt";break;case Tt(this.schema):u="geojson";break;default:u="feature";break}const l={type:s,format:u};if(Bt(this.schema)||(delete i.layerId,delete i["layer-id"]),D(this.schema)&&(l["multiple-features"]=!0,l.showList=i["show-list"]??i.showList??!0),!("for"in i)||!i.for){const d=document.createElement("eox-map"),j="map-"+this.formname.replace(/[^\w\s]/gi,"");let m=!1;d.addEventListener("loadend",()=>{const $=this.path.split(".").slice(1),it=this.defaults.startVals[this.key]||$.reduce((P,jt)=>P==null?void 0:P[jt],this.defaults.startVals);if(!m&&it&&ft(this.schema)){m=!0;const P=xn(it);o.handleFeatureChange(JSON.stringify({type:"FeatureCollection",features:P}),!0,!1)}}),d.layers=[{type:"Tile",source:{type:"OSM"}}],ie(d,{id:j,style:"width: 100%; height: 300px;",projection:"EPSG:4326",...a}),this.container.appendChild(d),o.for=d}ie(o,{...i,...l}),e.autoStartSelection!==!1&&o.updateComplete.then(()=>{o.startDrawing()}),this.input=o,this.input.id=this.formname,this.control=r.getFormControl(this.label,this.input,this.description,this.infoButton),(this.schema.readOnly||this.schema.readonly)&&(this.disable(!0),this.input.disabled=!0);const c=(B=(w=this.schema)==null?void 0:w.options)==null?void 0:B.featureProperty,h=(d,j)=>Array.isArray(d)?!D(this.schema)&&d.length===1?j(d[0]):d.map(j):j(d);this.input.addEventListener("drawupdate",d=>{var j;switch(d.preventDefault(),d.stopPropagation(),!0){case!d.detail:{this.value=null;break}case zt(this.schema):{this.value=d.detail;break}case Tt(this.schema):{const m=d.detail;if(D(this.schema)){this.value=m;break}this.value=((j=m.features)==null?void 0:j[0])??null;break}case qt(this.schema):{this.value=h(d.detail,m=>m.getGeometry().getCoordinates());break}case Bt(this.schema):{if(!Array.isArray(d.detail)){this.value=null;break}const m=$=>c?$.get(c)??$:$;this.value=h(d.detail,m);break}case ft(this.schema):{if(!Array.isArray(d.detail)){this.value=null;break}const m=$=>$.getGeometry().getExtent();this.value=h(d.detail,m);break}case It(this.schema):{if(!Array.isArray(d.detail)){this.value=null;break}this.value=h(d.detail,m=>m);break}case Vt(this.schema):{if(!Array.isArray(d.detail)){this.value=null;break}this.value=h(d.detail,m=>{var $;return($=m.getGeometry())==null?void 0:$.getCoordinates()});break}}this.onChange(!0)}),this.container.appendChild(this.control)}destroy(){this.label&&this.label.parentNode&&this.label.parentNode.removeChild(this.label),this.description&&this.description.parentNode&&this.description.parentNode.removeChild(this.description),this.input&&this.input.parentNode&&(this.input.parentNode.removeChild(this.input),this.input.discardDrawing(),this.input.remove()),super.destroy()}}function $n(t){return function(e,n,r){let i=[];return e.properties&&Object.keys(e.properties).forEach(a=>{const o=e.properties[a];if(!(yn(o)&&(o.format==="feature"||t.some(l=>l.format===o.format&&l.type===o.type))))return;const u=Sn(a,n[a],r);if(u.length){i.push(...u);return}switch(!0){case zt(o):{i.push(...Cn(a,n[a],r));break}case Tt(o):{i.push(..._n(a,n[a],r,o));break}case Bt(o):{i.push(...X({key:a,subValue:n[a],subSchema:o,path:r,validationFn:Nn}));break}case ft(o):{i.push(...X({key:a,subValue:n[a],subSchema:o,path:r,validationFn:En}));break}case It(o):{i.push(...X({key:a,subValue:n[a],subSchema:o,path:r,validationFn:jn}));break}case Vt(o):{i.push(...X({key:a,subValue:n[a],subSchema:o,path:r,validationFn:An}));break}case qt(o):{i.push(...X({key:a,subValue:n[a],subSchema:o,path:r,validationFn:Ln}));break}}}),i}}function X({key:t,subValue:e,path:n,subSchema:r,validationFn:i}){if(D(r)){if(Array.isArray(e)){if(!e.length)return[{path:`${n}.${t}`,message:"Value is expected to have at least one value",property:"format"}]}else return[{path:`${n}.${t}`,message:`Value is expected to be an array but got typeof ${typeof e}`,property:"format"}];return e==null?void 0:e.flatMap((a,o)=>i(`${t}.${o}`,a,n,r))}else return i(t,e,n,r)}function En(t,e,n){const r=[];return e.length!==4?[{path:`${n}.${t}`,message:`Value is expected to have 4 items but got ${e.length}`,property:"format"}]:(e.forEach((i,a)=>{typeof i!="number"&&r.push({path:`${n}.${t}.${a}`,message:`extent is expected to be of type number but got ${i}`,property:"format"})}),r)}function Nn(t,e,n,r){var a;let i;return D(r)?i=(a=r==null?void 0:r.items)==null?void 0:a.type:i=r.type,i?wn(e,i)?[]:[{path:`${n}.${t}`,message:`Value is expected to be a valid ${i}`,property:"format"}]:[]}function jn(t,e,n){return typeof e!="object"||!Object.keys(e).length?[{path:`${n}.${t}`,message:"Value was expected to be a feature object ",property:"format"}]:[]}function An(t,e,n){const r=[];return e.length!==2?[{path:`${n}.${t}`,message:`Value is expected to have 2 items but got ${e.length}`,property:"format"}]:(e.forEach((i,a)=>{typeof i!="number"&&r.push({path:`${n}.${t}.${a}`,message:`coordinates is expected to be of type number but got ${i}`,property:"format"})}),r)}function Ln(t,e,n){const r=[];return e.length<2?[{path:`${n}.${t}`,message:`Value is expected to have at least 2 points but got ${e.length}`,property:"format"}]:(e.forEach((i,a)=>{i.forEach((o,s)=>{typeof o!="number"&&r.push({path:`${n}.${t}.${a}.${s}`,message:`coordinates is expected to be of type number but got ${o}`,property:"format"})})}),r)}function Sn(t,e,n){return e?[]:[{path:`${n}.${t}`,message:`invalid value ${JSON.stringify(e)}`,property:"type"}]}function Cn(t,e,n){return typeof e!="string"?[{path:`${n}.${t}`,message:"Value is expected to be a valid wkt string",property:"type"}]:e==="GEOMETRYCOLLECTION EMPTY"?[{path:`${n}.${t}`,message:"Should have at least 1 Geometry",property:"type"}]:[]}function _n(t,e,n,r){var i;if(typeof e!="object"||!Object.keys(e).length)return[{path:`${n}.${t}`,message:"Value is expected to be a valid geojson object",property:"type"}];if(D(r)){if(e.type!=="FeatureCollection")return[{path:`${n}.${t}`,message:"Value is expected to be a valid FeaturesCollection geojson",property:"type"}];if(!((i=e==null?void 0:e.features)!=null&&i.length))return[{path:`${n}.${t}`,message:"Value is expected to have at least one feature",property:"type"}]}else if(!(e!=null&&e.geometry.type))return[{path:`${n}.${t}`,message:"Value is expected to have a valid geometry",property:"type"}];return[]}const Hn=[{type:"object",format:"minmax",func:kn},{type:"array",format:"bounding-boxes",func:g},{type:"wkt",format:"bounding-boxes",func:g},{type:"geojson",format:"bounding-boxes",func:g},{type:"array",format:"bounding-box",func:g},{type:"wkt",format:"bounding-box",func:g},{type:"geojson",format:"bounding-box",func:g},{type:"array",format:"polygons",func:g},{type:"wkt",format:"polygons",func:g},{type:"geojson",format:"polygons",func:g},{type:"object",format:"polygon",func:g},{type:"wkt",format:"polygon",func:g},{type:"geojson",format:"polygon",func:g},{type:"array",format:"points",func:g},{type:"wkt",format:"points",func:g},{type:"geojson",format:"points",func:g},{type:"array",format:"point",func:g},{type:"wkt",format:"point",func:g},{type:"geojson",format:"point",func:g},{format:"feature",func:g},{type:"array",format:"features",func:g},{type:"wkt",format:"features",func:g},{type:"geojson",format:"features",func:g},{type:"array",format:"line",func:g},{type:"wkt",format:"line",func:g},{type:"geojson",format:"line",func:g},{type:"array",format:"lines",func:g},{type:"wkt",format:"lines",func:g},{type:"geojson",format:"lines",func:g}],On=(t,e)=>{const n=[...Hn,...e];q.defaults.custom_validators.push($n(n)),n.map(({type:r,format:i,func:a})=>{q.defaults.startVals=t,q.defaults.editors[i]=a,q.defaults.resolvers.unshift(o=>{if(o.type===r&&o.format===i||o.format==="feature")return i})})},Pn={type:"object",properties:{fallback:{format:"info",title:"No schema provided",description:"Pass a schema to <code>eox-jsonform</code> via the <code>schema</code> property"}}};window.SimpleMDE=mn;window.ace=gn;window.ace.config.set("useWorker",!1);window.ace.config.set("basePath","https://cdn.jsdelivr.net/npm/ace-builds/src-min-noconflict/");const ae=t=>{On(t.value||{},t.customEditorInterfaces||[]);const e=t.renderRoot.querySelector("form");for(;e.firstChild;)e.removeChild(e.firstChild);q.defaults.callbacks={button:{onSubmit:function(){t.dispatchEvent(new CustomEvent("submit",{detail:t.value,bubbles:!0,composed:!0}))}}},q.defaults.resolvers.unshift(i=>{var a;return((a=i.options)==null?void 0:a.resolver)&&i.options.resolver});let r=new q(e,{schema:t.schema||Pn,...t.value?{startval:t.value}:{},theme:"html",iconlib:"fontawesome5",ajax:!0,disable_collapse:!0,disable_edit_json:!0,disable_properties:!0,disable_array_delete_all_rows:!0,disable_array_delete_last_row:!0,array_controls_top:!0,...t.options});return r.on("ready",()=>{t.renderRoot.querySelector("form").dataset.themeCustom="eox";const i=Array.from(t.renderRoot.querySelectorAll(".tabs.je-tabholder--top > .je-tab--top > span")),a=u=>{Object.entries(u).filter(([l,f])=>{var c;return(c=f.options)==null?void 0:c.hidden}).map(([l,f])=>f.title||l).forEach(l=>{const f=i.find(c=>c.textContent===l);f&&(f.parentElement.dataset.hidden="")}),Object.values(u).forEach(l=>{l.properties&&a(l.properties)})};if(a(r.expandSchema(r.schema).properties),t.renderRoot.querySelectorAll("[data-schematype=string] input").forEach(u=>{u.addEventListener("input",()=>{u.dispatchEvent(new CustomEvent("change",{detail:u.value}))})}),Rn(r)){const u=document.createElement("style");u.innerHTML=`
          @import url("https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css");
          @import url("https://unpkg.com/easymde/dist/easymde.min.css");
        `,t.renderRoot.insertBefore(u,t.renderRoot.firstChild)}const s=Object.values(r.editors).find(u=>u==null?void 0:u.ace_container);s&&!t.noShadow&&(s.ace_editor_instance.setOptions({showPrintMargin:!1,useSoftTabs:!0,wrap:!0}),s.ace_editor_instance.renderer.attachToShadowRoot(),s.ace_editor_instance.resize())}),r.on("change",()=>{t.renderRoot.querySelectorAll("input[type='checkbox']").forEach(i=>{const a=i.parentElement;if(a.tagName==="LABEL"&&!a.classList.contains("checkbox")){i.parentElement.classList.add("checkbox");const o=document.createElement("span");i.nextSibling&&i.nextSibling.nodeType===Node.TEXT_NODE&&o.appendChild(i.nextSibling),i.parentElement.appendChild(o)}}),t.renderRoot.querySelectorAll("a").forEach(i=>{i.classList.add("link")}),t.renderRoot.querySelectorAll("button").forEach(i=>{var a;if(i.classList.contains("json-editor-btn-"))(a=i.querySelector("i"))==null||a.remove();else{if(["circle","small","transparent","primary-text","no-margin"].forEach(o=>i.classList.add(o)),i.classList.contains("json-editor-btntype-add")&&(i.innerHTML=`
          <i class="small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
          </i>`),i.classList.contains("json-editor-btntype-delete")&&(i.innerHTML=`
          <i class="small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-outline</title><path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" /></svg>
          </i>`,i.classList.add("red-text")),i.classList.contains("json-editor-btntype-toggle")){const o=s=>{i.innerHTML=s==="Collapse"?`
            <i class="small">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-down</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </i>`:`
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-right</title><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
            </i>
            `};i.addEventListener("click",()=>{o(i.title)}),o(i.title)}i.classList.contains("json-editor-btn-moveup")&&(i.innerHTML=`
          <i class="small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>triangle-small-up</title><path d="M8 15H16L12 8" /></svg>
          </i>`),i.classList.contains("json-editor-btn-movedown")&&(i.innerHTML=`
          <i class="small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>triangle-small-down</title><path d="M8 9H16L12 16" /></svg>
          </i>`)}})}),r};async function oe(t){if(t&&typeof t!="object")try{const e=await fetch(t);if(e.ok)return await e.json();console.error("Failed to fetch schema from URL: ",e.status)}catch(e){console.error("Error fetching schema: ",e)}return t}function Rn(t){if(Object.values(t.editors).some(n=>n instanceof bn))return!0;function e(n){if(!n)return!1;if(n.format==="markdown")return!0;if(n.properties)return Object.values(n.properties).some(e);if(n.items)return e(n.items);for(const r of["anyOf","oneOf","allOf"])if(n[r]&&Array.isArray(n[r])&&n[r].some(e))return!0;return!1}return e(t.schema)}const qn=t=>{setTimeout(()=>{t.renderRoot.querySelectorAll("a").forEach(e=>{e.getAttribute("href")!==null&&e.getAttribute("href").startsWith("http")&&(e.setAttribute("target","_blank"),e.setAttribute("rel","noopener noreferrer"))})})},Vn="";vn();const In=`
  ${hn}

  /*EOxUI Overrides*/
  .row {
    display: inline;
  }

  :host, :root {
    display: block;
    overflow: hidden;
    min-height: 0;
  }
  :host, :root, form, .CodeMirror {
    --background-color: var(--eox-background-color, transparent);
    background-color: var(--background-color, transparent);
  }
  .editor-toolbar, .CodeMirror {
    border-color: var(--outline) !important;
  }
  form[data-theme="html"][data-theme-custom="eox"] {
    margin-block-start: 0;
  }
  form[data-theme="html"][data-theme-custom="eox"] .je-modal {
    z-index: 30;
    border-radius: 4px;
    border: none;
    box-shadow: 0 5px 10px #0005;
    padding: 8px;
  }
  form[data-theme="html"][data-theme-custom="eox"] table.je-table {
    width: 100%;
  }
  form[data-theme="html"][data-theme-custom="eox"] table.je-table td {
    display: grid;
  }
  form[data-theme="html"][data-theme-custom="eox"] .je-tabholder.tabs {
    width: 130px;
  }
  form[data-theme="html"][data-theme-custom="eox"] .je-tabholder.tabs+div {
    margin-left: 130px;
  }
  form[data-theme="html"][data-theme-custom="eox"] .tabs.je-tabholder--top {
    margin-left: 0;
  }
  form[data-theme="html"][data-theme-custom="eox"] .je-tabholder--clear > .je-indented-panel {
    border-top-left-radius: 0;
  }
  form[data-theme="html"][data-theme-custom="eox"] .tabs.je-tabholder--top > .je-tab--top {
    border-radius: 3px 3px 0 0;
    padding-left: 10px;
    padding-right: 10px;
  }
  form[data-theme="html"][data-theme-custom="eox"] .tabs.je-tabholder--top > .je-tab--top[data-hidden] {
    display: none;
  }
  form[data-theme="html"][data-theme-custom="eox"] .je-indented-panel {
    min-height: 20px;
    padding: var(--eox-panel-spacing, 10px);
    margin: var(--eox-panel-spacing, 10px);
    margin-left: 0;
    margin-right: 0;
    padding-top: 0;
    padding-bottom: 0;
    background-color: var(--eox-background-color, transparent);
    border: var(--eox-panel-border, 1px solid var(--outline));
    border-radius: 3px;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  form[data-theme="html"][data-theme-custom="eox"] .je-child-editor-holder {
    margin-bottom: 0;
  }
  .je-object__container {
    position: relative;
  }
  form[data-theme="html"][data-theme-custom="eox"] .je-header .je-object__title {
    display: flex;
    align-items: center;
  }
  .je-object__controls {
    margin: 0px 0px 0px 10px;
  }
  .je-header {
    margin-top: var(--eox-panel-spacing, 10px);
  }
  .row:not(.row .row):not(.row:last-child) {
    margin-bottom: 8px;
  }
  form[data-theme="html"][data-theme-custom="eox"] label.je-form-input-label:not([data-schematype="boolean"]),
  form[data-theme="html"][data-theme-custom="eox"] p.je-form-input-label:not([data-schematype="boolean"]) {
    display: inline-flex;
    align-items: center;
    max-width: 100%;
    margin-bottom: 5px;
    margin-top: var(--eox-panel-spacing, 10px);
    font-weight: 400;
  }
  form[data-theme="html"][data-theme-custom="eox"] p.je-form-input-label:not([data-schematype="boolean"]) {
    display: inline-block;
  }
  form[data-theme="html"][data-theme-custom="eox"] label {
    display: flex;
  }
  [data-schematype="boolean"] {
    padding-top: var(--eox-panel-spacing, 10px);
    padding-bottom: var(--eox-panel-spacing, 10px);
  }
  .form-control input:not([data-schematype="boolean"] input):not([type="range"]),
  .form-control select {
    display: block;
    opacity: 1;
    position: relative;
    width: 100%;
    padding: 6px 12px;
    font-size: 0.75rem;
    line-height: 1.42857143;
    color: inherit;
    background-color: var(--eox-background-color, transparent);
    background-image: none;
    border: .0625rem solid transparent;
    border-color: var(--outline);
    border-radius: 4px;
    block-size: 40px;
    outline: none;
    font-family: Inter, sans-serif;
    -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
  }
  .form-control input:not([data-schematype="boolean"] input):not([type="range"]):focus,
  .form-control input:not([data-schematype="boolean"] input):not([type="range"]):focus-visible {
    border: .125rem solid transparent;
    border-color: var(--primary);
  }
  input[type="checkbox"] {
    border: none !important;
    padding: 0 !important;
    display: flex !important;
    width: auto !important;
  }
  .form-control input[disabled] {
    opacity: .5;
  }
  [data-schematype=boolean] label {
    display: flex;
    font-size: 1rem !important;
    align-items: center;
    gap: 4px;
  }
  [data-schematype=boolean] label input {
    border: none;
    padding: 0;
  }
  .je-range-control {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .je-range-control > input {
    order: 1;
  }
  .je-range-control > output {
    order: 2;
    width: 34px;
    text-align: right;
  }
  /* description */
  [data-schematype] p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-style: italic;
  }
  .errmsg {
    font-size: x-small;
    color: #ba1a1a !important;
  }
  @media (prefers-color-scheme: dark) {
    .errmsg {
      color: #ffb4ab !important;
    }
  }


  /* MD Editor */
  [data-theme-custom="eox"] .editor-toolbar button {
    background: none;
    box-shadow: none;
    color: #555;
  }
  [data-theme-custom="eox"] .editor-toolbar button:hover:not([disabled]):not(.icon),
  [data-theme-custom="eox"] .editor-toolbar button:hover:not([disabled]):not(.icon) {
    box-shadow: none;
    background: #fcfcfc;
    border-color: #95a5a6;
    color: #2c3e50;
  }
  [data-theme-custom="eox"] .editor-toolbar button i {
    font-size: 17px;
  }
  [data-theme-custom="eox"] .editor-toolbar i.separator {
    block-size: 25px;
    inline-size: 0;
    min-block-size: 24px;
    min-inline-size: 0;
  }
  [data-theme-custom="eox"] .editor-statusbar {
    padding-bottom: 0;
  }
  .cm-header-1 {
    font-size: 200% !important;
  }
  .cm-header-1 {
    font-size: 200% !important;
    line-height: 200% !important;
  }
  .cm-header-2 {
    font-size: 160% !important;
    line-height: 160% !important;
  }
  .cm-header-3 {
    font-size: 125% !important;
    line-height: 125% !important;
  }
  .cm-header-4 {
    font-size: 110% !important;
    line-height: 110% !important;
  }
  .cm-comment {
    background: rgba(0, 0, 0, 0.05) !important;
    border-radius: 2px !important;
  }

  /* Ace Editor */
  .ace_editor,
  .ace_editor * {
    font-family: "Monaco", "Menlo", "Ubuntu Mono", "Droid Sans Mono", "Consolas", monospace !important;
  }

  /* Hide stuff on the root level */
  form[data-theme="html"][data-theme-custom="eox"] > [data-schemaid="root"] > .je-indented-panel {
    margin: 0;
    padding: 0;
    border: none;
  }
`;var M,O,_e,He,Ft;class Ce extends dn{constructor(){super();Lt(this,O);Lt(this,M,null);this.schema=null,this.value=null,this.options={},this.noShadow=!1,this.unstyled=!1,this.customEditorInterfaces=[]}get editor(){return A(this,M)}get schema(){return this._schema}set schema(n){A(this,M)&&!re(this._schema,n)&&A(this,M).destroy(),this._schema=n}get value(){return this._value}set value(n){A(this,M)&&A(this,M).ready&&!re(this._value,n)&&A(this,M).setValue(n),this._value=n}async updated(n){this._value=await oe(this.value),n.has("schema")?(this._schema=await oe(this.schema),(!A(this,M)||A(this,M).destroyed)&&(St(this,M,await ae(this)),U(this,O,Ft).call(this))):n.has("customEditorInterfaces")&&this.customEditorInterfaces&&(St(this,M,await ae(this)),U(this,O,Ft).call(this)),qn(this)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var n;return pn`
      <style>
        ${Vn}
        ${!this.unstyled&&In}
        ${((n=this.options)==null?void 0:n.disable_properties)===!1?"":`
          form[data-theme="html"][data-theme-custom="eox"] > [data-schemaid="root"] > .je-header,
          form[data-theme="html"][data-theme-custom="eox"] > [data-schemaid="root"] > .je-object__controls {
            display: none;
          }
        `}
      </style>
      <form></form>
    `}}M=new WeakMap,O=new WeakSet,_e=function(){this.dispatchEvent(new Event("ready"))},He=function(){this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0,composed:!0}))},Ft=function(){["ready","change"].map(r=>{A(this,M).on(r,()=>{r==="ready"&&U(this,O,_e).call(this),this._value=A(this,M).getValue(),U(this,O,He).call(this)})})},ne(Ce,"properties",{schema:{attribute:!1,type:Object},value:{attribute:!1,type:Object},options:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array},noShadow:{attribute:"no-shadow",type:Boolean},unstyled:{type:Boolean}});customElements.define("eox-jsonform",Ce);function ht(t,e){return t==null||e==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function Tn(t,e){return t==null||e==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function Oe(t){let e,n,r;t.length!==2?(e=ht,n=(s,u)=>ht(t(s),u),r=(s,u)=>t(s)-u):(e=t===ht||t===Tn?t:zn,n=t,r=t);function i(s,u,l=0,f=s.length){if(l<f){if(e(u,u)!==0)return f;do{const c=l+f>>>1;n(s[c],u)<0?l=c+1:f=c}while(l<f)}return l}function a(s,u,l=0,f=s.length){if(l<f){if(e(u,u)!==0)return f;do{const c=l+f>>>1;n(s[c],u)<=0?l=c+1:f=c}while(l<f)}return l}function o(s,u,l=0,f=s.length){const c=i(s,u,l,f-1);return c>l&&r(s[c-1],u)>-r(s[c],u)?c-1:c}return{left:i,center:o,right:a}}function zn(){return 0}function Bn(t){return t===null?NaN:+t}function*si(t,e){if(e===void 0)for(let n of t)n!=null&&(n=+n)>=n&&(yield n);else{let n=-1;for(let r of t)(r=e(r,++n,t))!=null&&(r=+r)>=r&&(yield r)}}const Pe=Oe(ht),Xt=Pe.right,ui=Pe.left;Oe(Bn).center;class se extends Map{constructor(e,n=Ve){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),e!=null)for(const[r,i]of e)this.set(r,i)}get(e){return super.get(Dt(this,e))}has(e){return super.has(Dt(this,e))}set(e,n){return super.set(Re(this,e),n)}delete(e){return super.delete(qe(this,e))}}class li extends Set{constructor(e,n=Ve){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),e!=null)for(const r of e)this.add(r)}has(e){return super.has(Dt(this,e))}add(e){return super.add(Re(this,e))}delete(e){return super.delete(qe(this,e))}}function Dt({_intern:t,_key:e},n){const r=e(n);return t.has(r)?t.get(r):n}function Re({_intern:t,_key:e},n){const r=e(n);return t.has(r)?t.get(r):(t.set(r,n),n)}function qe({_intern:t,_key:e},n){const r=e(n);return t.has(r)&&(n=t.get(r),t.delete(r)),n}function Ve(t){return t!==null&&typeof t=="object"?t.valueOf():t}const Fn=Math.sqrt(50),Dn=Math.sqrt(10),Gn=Math.sqrt(2);function dt(t,e,n){const r=(e-t)/Math.max(0,n),i=Math.floor(Math.log10(r)),a=r/Math.pow(10,i),o=a>=Fn?10:a>=Dn?5:a>=Gn?2:1;let s,u,l;return i<0?(l=Math.pow(10,-i)/o,s=Math.round(t*l),u=Math.round(e*l),s/l<t&&++s,u/l>e&&--u,l=-l):(l=Math.pow(10,i)*o,s=Math.round(t/l),u=Math.round(e/l),s*l<t&&++s,u*l>e&&--u),u<s&&.5<=n&&n<2?dt(t,e,n*2):[s,u,l]}function Gt(t,e,n){if(e=+e,t=+t,n=+n,!(n>0))return[];if(t===e)return[t];const r=e<t,[i,a,o]=r?dt(e,t,n):dt(t,e,n);if(!(a>=i))return[];const s=a-i+1,u=new Array(s);if(r)if(o<0)for(let l=0;l<s;++l)u[l]=(a-l)/-o;else for(let l=0;l<s;++l)u[l]=(a-l)*o;else if(o<0)for(let l=0;l<s;++l)u[l]=(i+l)/-o;else for(let l=0;l<s;++l)u[l]=(i+l)*o;return u}function Jt(t,e,n){return e=+e,t=+t,n=+n,dt(t,e,n)[2]}function Jn(t,e,n){e=+e,t=+t,n=+n;const r=e<t,i=r?Jt(e,t,n):Jt(t,e,n);return(r?-1:1)*(i<0?1/-i:i)}function T(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t);break}return this}function wt(t,e){switch(arguments.length){case 0:break;case 1:{typeof t=="function"?this.interpolator(t):this.range(t);break}default:{this.domain(t),typeof e=="function"?this.interpolator(e):this.range(e);break}}return this}const ue=Symbol("implicit");function Zn(){var t=new se,e=[],n=[],r=ue;function i(a){let o=t.get(a);if(o===void 0){if(r!==ue)return r;t.set(a,o=e.push(a)-1)}return n[o%n.length]}return i.domain=function(a){if(!arguments.length)return e.slice();e=[],t=new se;for(const o of a)t.has(o)||t.set(o,e.push(o)-1);return i},i.range=function(a){return arguments.length?(n=Array.from(a),i):n.slice()},i.unknown=function(a){return arguments.length?(r=a,i):r},i.copy=function(){return Zn(e,n).unknown(r)},T.apply(i,arguments),i}function et(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function vt(t,e){var n=Object.create(t.prototype);for(var r in e)n[r]=e[r];return n}function z(){}var Y=.7,pt=1/Y,G="\\s*([+-]?\\d+)\\s*",W="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",S="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Kn=/^#([0-9a-f]{3,8})$/,Un=new RegExp(`^rgb\\(${G},${G},${G}\\)$`),Xn=new RegExp(`^rgb\\(${S},${S},${S}\\)$`),Yn=new RegExp(`^rgba\\(${G},${G},${G},${W}\\)$`),Wn=new RegExp(`^rgba\\(${S},${S},${S},${W}\\)$`),Qn=new RegExp(`^hsl\\(${W},${S},${S}\\)$`),tr=new RegExp(`^hsla\\(${W},${S},${S},${W}\\)$`),le={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};et(z,Q,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:ce,formatHex:ce,formatHex8:er,formatHsl:nr,formatRgb:fe,toString:fe});function ce(){return this.rgb().formatHex()}function er(){return this.rgb().formatHex8()}function nr(){return Te(this).formatHsl()}function fe(){return this.rgb().formatRgb()}function Q(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=Kn.exec(t))?(n=e[1].length,e=parseInt(e[1],16),n===6?he(e):n===3?new v(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):n===8?ut(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):n===4?ut(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=Un.exec(t))?new v(e[1],e[2],e[3],1):(e=Xn.exec(t))?new v(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=Yn.exec(t))?ut(e[1],e[2],e[3],e[4]):(e=Wn.exec(t))?ut(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=Qn.exec(t))?me(e[1],e[2]/100,e[3]/100,1):(e=tr.exec(t))?me(e[1],e[2]/100,e[3]/100,e[4]):le.hasOwnProperty(t)?he(le[t]):t==="transparent"?new v(NaN,NaN,NaN,0):null}function he(t){return new v(t>>16&255,t>>8&255,t&255,1)}function ut(t,e,n,r){return r<=0&&(t=e=n=NaN),new v(t,e,n,r)}function Ie(t){return t instanceof z||(t=Q(t)),t?(t=t.rgb(),new v(t.r,t.g,t.b,t.opacity)):new v}function mt(t,e,n,r){return arguments.length===1?Ie(t):new v(t,e,n,r??1)}function v(t,e,n,r){this.r=+t,this.g=+e,this.b=+n,this.opacity=+r}et(v,mt,vt(z,{brighter(t){return t=t==null?pt:Math.pow(pt,t),new v(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?Y:Math.pow(Y,t),new v(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new v(I(this.r),I(this.g),I(this.b),gt(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:de,formatHex:de,formatHex8:rr,formatRgb:pe,toString:pe}));function de(){return`#${V(this.r)}${V(this.g)}${V(this.b)}`}function rr(){return`#${V(this.r)}${V(this.g)}${V(this.b)}${V((isNaN(this.opacity)?1:this.opacity)*255)}`}function pe(){const t=gt(this.opacity);return`${t===1?"rgb(":"rgba("}${I(this.r)}, ${I(this.g)}, ${I(this.b)}${t===1?")":`, ${t})`}`}function gt(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function I(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function V(t){return t=I(t),(t<16?"0":"")+t.toString(16)}function me(t,e,n,r){return r<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new L(t,e,n,r)}function Te(t){if(t instanceof L)return new L(t.h,t.s,t.l,t.opacity);if(t instanceof z||(t=Q(t)),!t)return new L;if(t instanceof L)return t;t=t.rgb();var e=t.r/255,n=t.g/255,r=t.b/255,i=Math.min(e,n,r),a=Math.max(e,n,r),o=NaN,s=a-i,u=(a+i)/2;return s?(e===a?o=(n-r)/s+(n<r)*6:n===a?o=(r-e)/s+2:o=(e-n)/s+4,s/=u<.5?a+i:2-a-i,o*=60):s=u>0&&u<1?0:o,new L(o,s,u,t.opacity)}function ir(t,e,n,r){return arguments.length===1?Te(t):new L(t,e,n,r??1)}function L(t,e,n,r){this.h=+t,this.s=+e,this.l=+n,this.opacity=+r}et(L,ir,vt(z,{brighter(t){return t=t==null?pt:Math.pow(pt,t),new L(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?Y:Math.pow(Y,t),new L(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*e,i=2*n-r;return new v(Ct(t>=240?t-240:t+120,i,r),Ct(t,i,r),Ct(t<120?t+240:t-120,i,r),this.opacity)},clamp(){return new L(ge(this.h),lt(this.s),lt(this.l),gt(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=gt(this.opacity);return`${t===1?"hsl(":"hsla("}${ge(this.h)}, ${lt(this.s)*100}%, ${lt(this.l)*100}%${t===1?")":`, ${t})`}`}}));function ge(t){return t=(t||0)%360,t<0?t+360:t}function lt(t){return Math.max(0,Math.min(1,t||0))}function Ct(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}const ar=Math.PI/180,or=180/Math.PI,bt=18,ze=.96422,Be=1,Fe=.82521,De=4/29,J=6/29,Ge=3*J*J,sr=J*J*J;function Je(t){if(t instanceof C)return new C(t.l,t.a,t.b,t.opacity);if(t instanceof H)return Ze(t);t instanceof v||(t=Ie(t));var e=Pt(t.r),n=Pt(t.g),r=Pt(t.b),i=_t((.2225045*e+.7168786*n+.0606169*r)/Be),a,o;return e===n&&n===r?a=o=i:(a=_t((.4360747*e+.3850649*n+.1430804*r)/ze),o=_t((.0139322*e+.0971045*n+.7141733*r)/Fe)),new C(116*i-16,500*(a-i),200*(i-o),t.opacity)}function ur(t,e,n,r){return arguments.length===1?Je(t):new C(t,e,n,r??1)}function C(t,e,n,r){this.l=+t,this.a=+e,this.b=+n,this.opacity=+r}et(C,ur,vt(z,{brighter(t){return new C(this.l+bt*(t??1),this.a,this.b,this.opacity)},darker(t){return new C(this.l-bt*(t??1),this.a,this.b,this.opacity)},rgb(){var t=(this.l+16)/116,e=isNaN(this.a)?t:t+this.a/500,n=isNaN(this.b)?t:t-this.b/200;return e=ze*Ht(e),t=Be*Ht(t),n=Fe*Ht(n),new v(Ot(3.1338561*e-1.6168667*t-.4906146*n),Ot(-.9787684*e+1.9161415*t+.033454*n),Ot(.0719453*e-.2289914*t+1.4052427*n),this.opacity)}}));function _t(t){return t>sr?Math.pow(t,1/3):t/Ge+De}function Ht(t){return t>J?t*t*t:Ge*(t-De)}function Ot(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function Pt(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function lr(t){if(t instanceof H)return new H(t.h,t.c,t.l,t.opacity);if(t instanceof C||(t=Je(t)),t.a===0&&t.b===0)return new H(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity);var e=Math.atan2(t.b,t.a)*or;return new H(e<0?e+360:e,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function Zt(t,e,n,r){return arguments.length===1?lr(t):new H(t,e,n,r??1)}function H(t,e,n,r){this.h=+t,this.c=+e,this.l=+n,this.opacity=+r}function Ze(t){if(isNaN(t.h))return new C(t.l,0,0,t.opacity);var e=t.h*ar;return new C(t.l,Math.cos(e)*t.c,Math.sin(e)*t.c,t.opacity)}et(H,Zt,vt(z,{brighter(t){return new H(this.h,this.c,this.l+bt*(t??1),this.opacity)},darker(t){return new H(this.h,this.c,this.l-bt*(t??1),this.opacity)},rgb(){return Ze(this).rgb()}}));function Ke(t,e,n,r,i){var a=t*t,o=a*t;return((1-3*t+3*a-o)*e+(4-6*a+3*o)*n+(1+3*t+3*a-3*o)*r+o*i)/6}function cr(t){var e=t.length-1;return function(n){var r=n<=0?n=0:n>=1?(n=1,e-1):Math.floor(n*e),i=t[r],a=t[r+1],o=r>0?t[r-1]:2*i-a,s=r<e-1?t[r+2]:2*a-i;return Ke((n-r/e)*e,o,i,a,s)}}function fr(t){var e=t.length;return function(n){var r=Math.floor(((n%=1)<0?++n:n)*e),i=t[(r+e-1)%e],a=t[r%e],o=t[(r+1)%e],s=t[(r+2)%e];return Ke((n-r/e)*e,i,a,o,s)}}const Mt=t=>()=>t;function Ue(t,e){return function(n){return t+n*e}}function hr(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(r){return Math.pow(t+r*e,n)}}function dr(t,e){var n=e-t;return n?Ue(t,n>180||n<-180?n-360*Math.round(n/360):n):Mt(isNaN(t)?e:t)}function pr(t){return(t=+t)==1?Z:function(e,n){return n-e?hr(e,n,t):Mt(isNaN(e)?n:e)}}function Z(t,e){var n=e-t;return n?Ue(t,n):Mt(isNaN(t)?e:t)}const be=function t(e){var n=pr(e);function r(i,a){var o=n((i=mt(i)).r,(a=mt(a)).r),s=n(i.g,a.g),u=n(i.b,a.b),l=Z(i.opacity,a.opacity);return function(f){return i.r=o(f),i.g=s(f),i.b=u(f),i.opacity=l(f),i+""}}return r.gamma=t,r}(1);function Xe(t){return function(e){var n=e.length,r=new Array(n),i=new Array(n),a=new Array(n),o,s;for(o=0;o<n;++o)s=mt(e[o]),r[o]=s.r||0,i[o]=s.g||0,a[o]=s.b||0;return r=t(r),i=t(i),a=t(a),s.opacity=1,function(u){return s.r=r(u),s.g=i(u),s.b=a(u),s+""}}}var ci=Xe(cr),fi=Xe(fr);function Ye(t,e){e||(e=[]);var n=t?Math.min(e.length,t.length):0,r=e.slice(),i;return function(a){for(i=0;i<n;++i)r[i]=t[i]*(1-a)+e[i]*a;return r}}function We(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function hi(t,e){return(We(e)?Ye:Qe)(t,e)}function Qe(t,e){var n=e?e.length:0,r=t?Math.min(n,t.length):0,i=new Array(r),a=new Array(n),o;for(o=0;o<r;++o)i[o]=nt(t[o],e[o]);for(;o<n;++o)a[o]=e[o];return function(s){for(o=0;o<r;++o)a[o]=i[o](s);return a}}function mr(t,e){var n=new Date;return t=+t,e=+e,function(r){return n.setTime(t*(1-r)+e*r),n}}function xt(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}function gr(t,e){var n={},r={},i;(t===null||typeof t!="object")&&(t={}),(e===null||typeof e!="object")&&(e={});for(i in e)i in t?n[i]=nt(t[i],e[i]):r[i]=e[i];return function(a){for(i in n)r[i]=n[i](a);return r}}var Kt=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Rt=new RegExp(Kt.source,"g");function br(t){return function(){return t}}function xr(t){return function(e){return t(e)+""}}function yr(t,e){var n=Kt.lastIndex=Rt.lastIndex=0,r,i,a,o=-1,s=[],u=[];for(t=t+"",e=e+"";(r=Kt.exec(t))&&(i=Rt.exec(e));)(a=i.index)>n&&(a=e.slice(n,a),s[o]?s[o]+=a:s[++o]=a),(r=r[0])===(i=i[0])?s[o]?s[o]+=i:s[++o]=i:(s[++o]=null,u.push({i:o,x:xt(r,i)})),n=Rt.lastIndex;return n<e.length&&(a=e.slice(n),s[o]?s[o]+=a:s[++o]=a),s.length<2?u[0]?xr(u[0].x):br(e):(e=u.length,function(l){for(var f=0,c;f<e;++f)s[(c=u[f]).i]=c.x(l);return s.join("")})}function nt(t,e){var n=typeof e,r;return e==null||n==="boolean"?Mt(e):(n==="number"?xt:n==="string"?(r=Q(e))?(e=r,be):yr:e instanceof Q?be:e instanceof Date?mr:We(e)?Ye:Array.isArray(e)?Qe:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?gr:xt)(t,e)}function tn(t,e){return t=+t,e=+e,function(n){return Math.round(t*(1-n)+e*n)}}function en(t){return function(e,n){var r=t((e=Zt(e)).h,(n=Zt(n)).h),i=Z(e.c,n.c),a=Z(e.l,n.l),o=Z(e.opacity,n.opacity);return function(s){return e.h=r(s),e.c=i(s),e.l=a(s),e.opacity=o(s),e+""}}}const di=en(dr);var pi=en(Z);function mi(t,e){e===void 0&&(e=t,t=nt);for(var n=0,r=e.length-1,i=e[0],a=new Array(r<0?0:r);n<r;)a[n]=t(i,i=e[++n]);return function(o){var s=Math.max(0,Math.min(r-1,Math.floor(o*=r)));return a[s](o-s)}}function wr(t){return function(){return t}}function vr(t){return+t}var xe=[0,1];function N(t){return t}function Ut(t,e){return(e-=t=+t)?function(n){return(n-t)/e}:wr(isNaN(e)?NaN:.5)}function Mr(t,e){var n;return t>e&&(n=t,t=e,e=n),function(r){return Math.max(t,Math.min(e,r))}}function kr(t,e,n){var r=t[0],i=t[1],a=e[0],o=e[1];return i<r?(r=Ut(i,r),a=n(o,a)):(r=Ut(r,i),a=n(a,o)),function(s){return a(r(s))}}function $r(t,e,n){var r=Math.min(t.length,e.length)-1,i=new Array(r),a=new Array(r),o=-1;for(t[r]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++o<r;)i[o]=Ut(t[o],t[o+1]),a[o]=n(e[o],e[o+1]);return function(s){var u=Xt(t,s,1,r)-1;return a[u](i[u](s))}}function kt(t,e){return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function $t(){var t=xe,e=xe,n=nt,r,i,a,o=N,s,u,l;function f(){var h=Math.min(t.length,e.length);return o!==N&&(o=Mr(t[0],t[h-1])),s=h>2?$r:kr,u=l=null,c}function c(h){return h==null||isNaN(h=+h)?a:(u||(u=s(t.map(r),e,n)))(r(o(h)))}return c.invert=function(h){return o(i((l||(l=s(e,t.map(r),xt)))(h)))},c.domain=function(h){return arguments.length?(t=Array.from(h,vr),f()):t.slice()},c.range=function(h){return arguments.length?(e=Array.from(h),f()):e.slice()},c.rangeRound=function(h){return e=Array.from(h),n=tn,f()},c.clamp=function(h){return arguments.length?(o=h?!0:N,f()):o!==N},c.interpolate=function(h){return arguments.length?(n=h,f()):n},c.unknown=function(h){return arguments.length?(a=h,c):a},function(h,x){return r=h,i=x,f()}}function Er(){return $t()(N,N)}function Nr(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)}function yt(t,e){if((n=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var n,r=t.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+t.slice(n+1)]}function K(t){return t=yt(Math.abs(t)),t?t[1]:NaN}function jr(t,e){return function(n,r){for(var i=n.length,a=[],o=0,s=t[0],u=0;i>0&&s>0&&(u+s+1>r&&(s=Math.max(1,r-u)),a.push(n.substring(i-=s,i+s)),!((u+=s+1)>r));)s=t[o=(o+1)%t.length];return a.reverse().join(e)}}function Ar(t){return function(e){return e.replace(/[0-9]/g,function(n){return t[+n]})}}var Lr=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function tt(t){if(!(e=Lr.exec(t)))throw new Error("invalid format: "+t);var e;return new Yt({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}tt.prototype=Yt.prototype;function Yt(t){this.fill=t.fill===void 0?" ":t.fill+"",this.align=t.align===void 0?">":t.align+"",this.sign=t.sign===void 0?"-":t.sign+"",this.symbol=t.symbol===void 0?"":t.symbol+"",this.zero=!!t.zero,this.width=t.width===void 0?void 0:+t.width,this.comma=!!t.comma,this.precision=t.precision===void 0?void 0:+t.precision,this.trim=!!t.trim,this.type=t.type===void 0?"":t.type+""}Yt.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Sr(t){t:for(var e=t.length,n=1,r=-1,i;n<e;++n)switch(t[n]){case".":r=i=n;break;case"0":r===0&&(r=n),i=n;break;default:if(!+t[n])break t;r>0&&(r=0);break}return r>0?t.slice(0,r)+t.slice(i+1):t}var nn;function Cr(t,e){var n=yt(t,e);if(!n)return t+"";var r=n[0],i=n[1],a=i-(nn=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,o=r.length;return a===o?r:a>o?r+new Array(a-o+1).join("0"):a>0?r.slice(0,a)+"."+r.slice(a):"0."+new Array(1-a).join("0")+yt(t,Math.max(0,e+a-1))[0]}function ye(t,e){var n=yt(t,e);if(!n)return t+"";var r=n[0],i=n[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}const we={"%":(t,e)=>(t*100).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:Nr,e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>ye(t*100,e),r:ye,s:Cr,X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function ve(t){return t}var Me=Array.prototype.map,ke=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function _r(t){var e=t.grouping===void 0||t.thousands===void 0?ve:jr(Me.call(t.grouping,Number),t.thousands+""),n=t.currency===void 0?"":t.currency[0]+"",r=t.currency===void 0?"":t.currency[1]+"",i=t.decimal===void 0?".":t.decimal+"",a=t.numerals===void 0?ve:Ar(Me.call(t.numerals,String)),o=t.percent===void 0?"%":t.percent+"",s=t.minus===void 0?"−":t.minus+"",u=t.nan===void 0?"NaN":t.nan+"";function l(c){c=tt(c);var h=c.fill,x=c.align,b=c.sign,y=c.symbol,k=c.zero,w=c.width,B=c.comma,d=c.precision,j=c.trim,m=c.type;m==="n"?(B=!0,m="g"):we[m]||(d===void 0&&(d=12),j=!0,m="g"),(k||h==="0"&&x==="=")&&(k=!0,h="0",x="=");var $=y==="$"?n:y==="#"&&/[boxX]/.test(m)?"0"+m.toLowerCase():"",it=y==="$"?r:/[%p]/.test(m)?o:"",P=we[m],jt=/[defgprs%]/.test(m);d=d===void 0?6:/[gprs]/.test(m)?Math.max(1,Math.min(21,d)):Math.max(0,Math.min(20,d));function Qt(p){var R=$,E=it,F,te,at;if(m==="c")E=P(p)+E,p="";else{p=+p;var ot=p<0||1/p<0;if(p=isNaN(p)?u:P(Math.abs(p),d),j&&(p=Sr(p)),ot&&+p==0&&b!=="+"&&(ot=!1),R=(ot?b==="("?b:s:b==="-"||b==="("?"":b)+R,E=(m==="s"?ke[8+nn/3]:"")+E+(ot&&b==="("?")":""),jt){for(F=-1,te=p.length;++F<te;)if(at=p.charCodeAt(F),48>at||at>57){E=(at===46?i+p.slice(F+1):p.slice(F))+E,p=p.slice(0,F);break}}}B&&!k&&(p=e(p,1/0));var st=R.length+p.length+E.length,_=st<w?new Array(w-st+1).join(h):"";switch(B&&k&&(p=e(_+p,_.length?w-E.length:1/0),_=""),x){case"<":p=R+p+E+_;break;case"=":p=R+_+p+E;break;case"^":p=_.slice(0,st=_.length>>1)+R+p+E+_.slice(st);break;default:p=_+R+p+E;break}return a(p)}return Qt.toString=function(){return c+""},Qt}function f(c,h){var x=l((c=tt(c),c.type="f",c)),b=Math.max(-8,Math.min(8,Math.floor(K(h)/3)))*3,y=Math.pow(10,-b),k=ke[8+b/3];return function(w){return x(y*w)+k}}return{format:l,formatPrefix:f}}var ct,Wt,rn;Hr({thousands:",",grouping:[3],currency:["$",""]});function Hr(t){return ct=_r(t),Wt=ct.format,rn=ct.formatPrefix,ct}function Or(t){return Math.max(0,-K(Math.abs(t)))}function Pr(t,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(K(e)/3)))*3-K(Math.abs(t)))}function Rr(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,K(e)-K(t))+1}function qr(t,e,n,r){var i=Jn(t,e,n),a;switch(r=tt(r??",f"),r.type){case"s":{var o=Math.max(Math.abs(t),Math.abs(e));return r.precision==null&&!isNaN(a=Pr(i,o))&&(r.precision=a),rn(r,o)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(a=Rr(i,Math.max(Math.abs(t),Math.abs(e))))&&(r.precision=a-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(a=Or(i))&&(r.precision=a-(r.type==="%")*2);break}}return Wt(r)}function rt(t){var e=t.domain;return t.ticks=function(n){var r=e();return Gt(r[0],r[r.length-1],n??10)},t.tickFormat=function(n,r){var i=e();return qr(i[0],i[i.length-1],n??10,r)},t.nice=function(n){n==null&&(n=10);var r=e(),i=0,a=r.length-1,o=r[i],s=r[a],u,l,f=10;for(s<o&&(l=o,o=s,s=l,l=i,i=a,a=l);f-- >0;){if(l=Jt(o,s,n),l===u)return r[i]=o,r[a]=s,e(r);if(l>0)o=Math.floor(o/l)*l,s=Math.ceil(s/l)*l;else if(l<0)o=Math.ceil(o*l)/l,s=Math.floor(s*l)/l;else break;u=l}return t},t}function Vr(){var t=Er();return t.copy=function(){return kt(t,Vr())},T.apply(t,arguments),rt(t)}function Ir(t,e){t=t.slice();var n=0,r=t.length-1,i=t[n],a=t[r],o;return a<i&&(o=n,n=r,r=o,o=i,i=a,a=o),t[n]=e.floor(i),t[r]=e.ceil(a),t}function $e(t){return Math.log(t)}function Ee(t){return Math.exp(t)}function Tr(t){return-Math.log(-t)}function zr(t){return-Math.exp(-t)}function Br(t){return isFinite(t)?+("1e"+t):t<0?0:t}function Fr(t){return t===10?Br:t===Math.E?Math.exp:e=>Math.pow(t,e)}function Dr(t){return t===Math.E?Math.log:t===10&&Math.log10||t===2&&Math.log2||(t=Math.log(t),e=>Math.log(e)/t)}function Ne(t){return(e,n)=>-t(-e,n)}function an(t){const e=t($e,Ee),n=e.domain;let r=10,i,a;function o(){return i=Dr(r),a=Fr(r),n()[0]<0?(i=Ne(i),a=Ne(a),t(Tr,zr)):t($e,Ee),e}return e.base=function(s){return arguments.length?(r=+s,o()):r},e.domain=function(s){return arguments.length?(n(s),o()):n()},e.ticks=s=>{const u=n();let l=u[0],f=u[u.length-1];const c=f<l;c&&([l,f]=[f,l]);let h=i(l),x=i(f),b,y;const k=s==null?10:+s;let w=[];if(!(r%1)&&x-h<k){if(h=Math.floor(h),x=Math.ceil(x),l>0){for(;h<=x;++h)for(b=1;b<r;++b)if(y=h<0?b/a(-h):b*a(h),!(y<l)){if(y>f)break;w.push(y)}}else for(;h<=x;++h)for(b=r-1;b>=1;--b)if(y=h>0?b/a(-h):b*a(h),!(y<l)){if(y>f)break;w.push(y)}w.length*2<k&&(w=Gt(l,f,k))}else w=Gt(h,x,Math.min(x-h,k)).map(a);return c?w.reverse():w},e.tickFormat=(s,u)=>{if(s==null&&(s=10),u==null&&(u=r===10?"s":","),typeof u!="function"&&(!(r%1)&&(u=tt(u)).precision==null&&(u.trim=!0),u=Wt(u)),s===1/0)return u;const l=Math.max(1,r*s/e.ticks().length);return f=>{let c=f/a(Math.round(i(f)));return c*r<r-.5&&(c*=r),c<=l?u(f):""}},e.nice=()=>n(Ir(n(),{floor:s=>a(Math.floor(i(s))),ceil:s=>a(Math.ceil(i(s)))})),e}function Gr(){const t=an($t()).domain([1,10]);return t.copy=()=>kt(t,Gr()).base(t.base()),T.apply(t,arguments),t}function je(t){return function(e){return Math.sign(e)*Math.log1p(Math.abs(e/t))}}function Ae(t){return function(e){return Math.sign(e)*Math.expm1(Math.abs(e))*t}}function on(t){var e=1,n=t(je(e),Ae(e));return n.constant=function(r){return arguments.length?t(je(e=+r),Ae(e)):e},rt(n)}function Jr(){var t=on($t());return t.copy=function(){return kt(t,Jr()).constant(t.constant())},T.apply(t,arguments)}function Le(t){return function(e){return e<0?-Math.pow(-e,t):Math.pow(e,t)}}function Zr(t){return t<0?-Math.sqrt(-t):Math.sqrt(t)}function Kr(t){return t<0?-t*t:t*t}function sn(t){var e=t(N,N),n=1;function r(){return n===1?t(N,N):n===.5?t(Zr,Kr):t(Le(n),Le(1/n))}return e.exponent=function(i){return arguments.length?(n=+i,r()):n},rt(e)}function un(){var t=sn($t());return t.copy=function(){return kt(t,un()).exponent(t.exponent())},T.apply(t,arguments),t}function gi(){return un.apply(null,arguments).exponent(.5)}function Ur(){var t=0,e=1,n=1,r=[.5],i=[0,1],a;function o(u){return u!=null&&u<=u?i[Xt(r,u,0,n)]:a}function s(){var u=-1;for(r=new Array(n);++u<n;)r[u]=((u+1)*e-(u-n)*t)/(n+1);return o}return o.domain=function(u){return arguments.length?([t,e]=u,t=+t,e=+e,s()):[t,e]},o.range=function(u){return arguments.length?(n=(i=Array.from(u)).length-1,s()):i.slice()},o.invertExtent=function(u){var l=i.indexOf(u);return l<0?[NaN,NaN]:l<1?[t,r[0]]:l>=n?[r[n-1],e]:[r[l-1],r[l]]},o.unknown=function(u){return arguments.length&&(a=u),o},o.thresholds=function(){return r.slice()},o.copy=function(){return Ur().domain([t,e]).range(i).unknown(a)},T.apply(rt(o),arguments)}function Xr(){var t=[.5],e=[0,1],n,r=1;function i(a){return a!=null&&a<=a?e[Xt(t,a,0,r)]:n}return i.domain=function(a){return arguments.length?(t=Array.from(a),r=Math.min(t.length,e.length-1),i):t.slice()},i.range=function(a){return arguments.length?(e=Array.from(a),r=Math.min(t.length,e.length-1),i):e.slice()},i.invertExtent=function(a){var o=e.indexOf(a);return[t[o-1],t[o]]},i.unknown=function(a){return arguments.length?(n=a,i):n},i.copy=function(){return Xr().domain(t).range(e).unknown(n)},T.apply(i,arguments)}function Et(){var t=0,e=1,n,r,i,a,o=N,s=!1,u;function l(c){return c==null||isNaN(c=+c)?u:o(i===0?.5:(c=(a(c)-n)*i,s?Math.max(0,Math.min(1,c)):c))}l.domain=function(c){return arguments.length?([t,e]=c,n=a(t=+t),r=a(e=+e),i=n===r?0:1/(r-n),l):[t,e]},l.clamp=function(c){return arguments.length?(s=!!c,l):s},l.interpolator=function(c){return arguments.length?(o=c,l):o};function f(c){return function(h){var x,b;return arguments.length?([x,b]=h,o=c(x,b),l):[o(0),o(1)]}}return l.range=f(nt),l.rangeRound=f(tn),l.unknown=function(c){return arguments.length?(u=c,l):u},function(c){return a=c,n=c(t),r=c(e),i=n===r?0:1/(r-n),l}}function Nt(t,e){return e.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown())}function Yr(){var t=rt(Et()(N));return t.copy=function(){return Nt(t,Yr())},wt.apply(t,arguments)}function Wr(){var t=an(Et()).domain([1,10]);return t.copy=function(){return Nt(t,Wr()).base(t.base())},wt.apply(t,arguments)}function Qr(){var t=on(Et());return t.copy=function(){return Nt(t,Qr()).constant(t.constant())},wt.apply(t,arguments)}function ln(){var t=sn(Et());return t.copy=function(){return Nt(t,ln()).exponent(t.exponent())},wt.apply(t,arguments)}function bi(){return ln.apply(null,arguments).exponent(.5)}export{on as $,fr as A,mr as B,z as C,pi as D,Ye as E,gr as F,be as G,ci as H,li as I,fi as J,tn as K,yr as L,vr as M,rt as N,T as O,Xt as P,Oe as Q,v as R,Jn as S,Er as T,Ir as U,kt as V,N as W,Nt as X,wt as Y,an as Z,sn as _,ht as a,_r as a0,tt as a1,Or as a2,Rr as a3,Pr as a4,rn as a5,Gr as a6,un as a7,gi as a8,Jr as a9,Wr as aa,ln as ab,bi as ac,Qr as ad,qr as ae,ue as af,mt as ag,ui as ah,Zt as ai,Bn as b,et as c,or as d,vt as e,Wt as f,ar as g,Y as h,di as i,pt as j,dr as k,Vr as l,xt as m,si as n,Zn as o,mi as p,Ur as q,Ie as r,Yr as s,Xr as t,ir as u,Z as v,ur as w,nt as x,hi as y,cr as z};
