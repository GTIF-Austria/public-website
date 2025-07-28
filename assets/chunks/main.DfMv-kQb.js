var st=Object.defineProperty;var Z=t=>{throw TypeError(t)};var at=(t,e,o)=>e in t?st(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var G=(t,e,o)=>at(t,typeof e!="symbol"?e+"":e,o),S=(t,e,o)=>e.has(t)||Z("Cannot "+o);var g=(t,e,o)=>(S(t,e,"read from private field"),o?o.call(t):e.get(t)),_=(t,e,o)=>e.has(t)?Z("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),T=(t,e,o,i)=>(S(t,e,"write to private field"),i?i.call(t,o):e.set(t,o),o),L=(t,e,o)=>(S(t,e,"access private method"),o);import{e as Q,i as nt,x as lt}from"./style.CcGKRj1a.js";import{J as w,S as dt,E as ct,A as pt,i as J}from"./index.FL_cjAQh.js";import{A as tt}from"./browser.CQpScIU-.js";import"./toolcool-range-slider.min.BBXDELo7.js";import{b as ht}from"./index.Bs0cRbYk.js";import"./commonjsHelpers.BosuxZz1.js";import"./index.KH_2m63C.js";function mt(t,e){Object.keys(e).forEach(o=>{t.setAttribute(o,e[o])})}class ut extends tt{register(){super.register()}unregister(){super.unregister()}build(){const e=this.schema.properties,o=this.options,i=this.schema.description,r=this.theme,s=this.defaults.startVals[this.key];o.compact||(this.header=this.label=r.getFormInputLabel(this.getTitle(),this.isRequired())),i&&(this.description=r.getFormInputDescription(this.translateProperty(i))),o.infoText&&(this.infoButton=r.getInfoButton(this.translateProperty(o.infoText)));const a=document.createElement("tc-range-slider"),c=Object.keys(e).find(p=>p.includes("min")),n=Object.keys(e).find(p=>p.includes("max")),h={min:e[c].minimum,max:e[n].maximum,step:e[c].step||e[n].step,value1:(s==null?void 0:s[c])||e[c].default,value2:(s==null?void 0:s[n])||e[n].default,"generate-labels":"true","generate-labels-text-color":"currentColor","slider-width":"100%","range-dragging":"false"};mt(a,h),this.input=a,this.input.id=this.formname,this.control=r.getFormControl(this.label,this.input,this.description,this.infoButton),(this.schema.readOnly||this.schema.readonly)&&(this.disable(!0),this.input.disabled=!0),this.input.addEventListener("change",p=>{p.preventDefault(),p.stopPropagation(),this.value={[c]:p.detail.value1,[n]:p.detail.value2},this.onChange(!0)}),this.container.appendChild(this.control)}destroy(){this.label&&this.label.parentNode&&this.label.parentNode.removeChild(this.label),this.description&&this.description.parentNode&&this.description.parentNode.removeChild(this.description),this.input&&this.input.parentNode&&this.input.parentNode.removeChild(this.input),super.destroy()}}const H=t=>["feature","features"].some(e=>(t==null?void 0:t.format)===e),V=t=>["polygon","polygons"].includes(t==null?void 0:t.format),C=t=>["point","points"].includes(t==null?void 0:t.format),A=t=>["bounding-boxes","bounding-box"].includes(t==null?void 0:t.format),$=t=>["lines","line"].includes(t==null?void 0:t.format),O=t=>(t==null?void 0:t.type)==="wkt",B=t=>(t==null?void 0:t.type)==="geojson",v=t=>["bounding-boxes","polygons","features","points","lines"].includes(t==null?void 0:t.format),ft=t=>H(t)||V(t)||A(t)||C(t)||$(t);function U(t,e){Object.keys(e).forEach(o=>{o.includes("-")?t.setAttribute(o,e[o]):t[o]=e[o]})}const gt=(t,e)=>{if(!t||!e)return!1;switch(e){case"string":return typeof t=="string";case"number":return!isNaN(t);case"boolean":return typeof t=="boolean";case"array":return Array.isArray(t);case"object":return typeof t=="object"&&!!Object.keys(t).length}return!1},bt=t=>t.length<1?[]:t.map(e=>ht(e));class l extends tt{register(){super.register()}unregister(){super.unregister()}build(){var R,P,q,I,F,z;const e=this.options,o=this.schema.description,i=this.theme,r=((P=(R=this.schema)==null?void 0:R.options)==null?void 0:P.drawtools)??{},s=((I=(q=this.schema)==null?void 0:q.options)==null?void 0:I.map)??{};e.compact||(this.header=this.label=i.getFormInputLabel(this.getTitle(),this.isRequired())),o&&(this.description=i.getFormInputDescription(this.translateProperty(o))),e.infoText&&(this.infoButton=i.getInfoButton(this.translateProperty(e.infoText)));const a=document.createElement("eox-drawtools");a.innerHTML='<div slot="drawtitle"></div>';let c;switch(!0){case V(this.schema):c="Polygon";break;case A(this.schema):c="Box";break;case C(this.schema):c="Point";break;case $(this.schema):c="LineString";break;default:c="Box";break}let n;switch(!0){case O(this.schema):n="wkt";break;case B(this.schema):n="geojson";break;default:n="feature";break}const h={type:c,format:n};if(H(this.schema)||(delete r.layerId,delete r["layer-id"]),v(this.schema)&&(h["multiple-features"]=!0,h.showList=r["show-list"]??r.showList??!0),!("for"in r)||!r.for){const d=document.createElement("eox-map"),x="map-"+this.formname.replace(/[^\w\s]/gi,"");let m=!1;d.addEventListener("loadend",()=>{const b=this.path.split(".").slice(1),D=this.defaults.startVals[this.key]||b.reduce((E,it)=>E==null?void 0:E[it],this.defaults.startVals);if(!m&&D&&A(this.schema)){m=!0;const E=bt(D);a.handleFeatureChange(JSON.stringify({type:"FeatureCollection",features:E}),!0,!1)}}),d.layers=[{type:"Tile",source:{type:"OSM"}}],U(d,{id:x,style:"width: 100%; height: 300px;",projection:"EPSG:4326",...s}),this.container.appendChild(d),a.for=d}U(a,{...r,...h}),e.autoStartSelection!==!1&&a.updateComplete.then(()=>{a.startDrawing()}),this.input=a,this.input.id=this.formname,this.control=i.getFormControl(this.label,this.input,this.description,this.infoButton),(this.schema.readOnly||this.schema.readonly)&&(this.disable(!0),this.input.disabled=!0);const f=(z=(F=this.schema)==null?void 0:F.options)==null?void 0:z.featureProperty,j=(d,x)=>Array.isArray(d)?!v(this.schema)&&d.length===1?x(d[0]):d.map(x):x(d);this.input.addEventListener("drawupdate",d=>{var x;switch(d.preventDefault(),d.stopPropagation(),!0){case!d.detail:{this.value=null;break}case O(this.schema):{this.value=d.detail;break}case B(this.schema):{const m=d.detail;if(v(this.schema)){this.value=m;break}this.value=((x=m.features)==null?void 0:x[0])??null;break}case $(this.schema):{this.value=j(d.detail,m=>m.getGeometry().getCoordinates());break}case H(this.schema):{if(!Array.isArray(d.detail)){this.value=null;break}const m=b=>f?b.get(f)??b:b;this.value=j(d.detail,m);break}case A(this.schema):{if(!Array.isArray(d.detail)){this.value=null;break}const m=b=>b.getGeometry().getExtent();this.value=j(d.detail,m);break}case V(this.schema):{if(!Array.isArray(d.detail)){this.value=null;break}this.value=j(d.detail,m=>m);break}case C(this.schema):{if(!Array.isArray(d.detail)){this.value=null;break}this.value=j(d.detail,m=>{var b;return(b=m.getGeometry())==null?void 0:b.getCoordinates()});break}}this.onChange(!0)}),this.container.appendChild(this.control)}destroy(){this.label&&this.label.parentNode&&this.label.parentNode.removeChild(this.label),this.description&&this.description.parentNode&&this.description.parentNode.removeChild(this.description),this.input&&this.input.parentNode&&(this.input.parentNode.removeChild(this.input),this.input.discardDrawing(),this.input.remove()),super.destroy()}}function yt(t){return function(e,o,i){let r=[];return e.properties&&Object.keys(e.properties).forEach(s=>{const a=e.properties[s];if(!(ft(a)&&(a.format==="feature"||t.some(h=>h.format===a.format&&h.type===a.type))))return;const n=Lt(s,o[s],i);if(n.length){r.push(...n);return}switch(!0){case O(a):{r.push(...kt(s,o[s],i));break}case B(a):{r.push(...At(s,o[s],i,a));break}case H(a):{r.push(...k({key:s,subValue:o[s],subSchema:a,path:i,validationFn:wt}));break}case A(a):{r.push(...k({key:s,subValue:o[s],subSchema:a,path:i,validationFn:xt}));break}case V(a):{r.push(...k({key:s,subValue:o[s],subSchema:a,path:i,validationFn:vt}));break}case C(a):{r.push(...k({key:s,subValue:o[s],subSchema:a,path:i,validationFn:jt}));break}case $(a):{r.push(...k({key:s,subValue:o[s],subSchema:a,path:i,validationFn:Et}));break}}}),r}}function k({key:t,subValue:e,path:o,subSchema:i,validationFn:r}){if(v(i)){if(Array.isArray(e)){if(!e.length)return[{path:`${o}.${t}`,message:"Value is expected to have at least one value",property:"format"}]}else return[{path:`${o}.${t}`,message:`Value is expected to be an array but got typeof ${typeof e}`,property:"format"}];return e==null?void 0:e.flatMap((s,a)=>r(`${t}.${a}`,s,o,i))}else return r(t,e,o,i)}function xt(t,e,o){const i=[];return e.length!==4?[{path:`${o}.${t}`,message:`Value is expected to have 4 items but got ${e.length}`,property:"format"}]:(e.forEach((r,s)=>{typeof r!="number"&&i.push({path:`${o}.${t}.${s}`,message:`extent is expected to be of type number but got ${r}`,property:"format"})}),i)}function wt(t,e,o,i){var s;let r;return v(i)?r=(s=i==null?void 0:i.items)==null?void 0:s.type:r=i.type,r?gt(e,r)?[]:[{path:`${o}.${t}`,message:`Value is expected to be a valid ${r}`,property:"format"}]:[]}function vt(t,e,o){return typeof e!="object"||!Object.keys(e).length?[{path:`${o}.${t}`,message:"Value was expected to be a feature object ",property:"format"}]:[]}function jt(t,e,o){const i=[];return e.length!==2?[{path:`${o}.${t}`,message:`Value is expected to have 2 items but got ${e.length}`,property:"format"}]:(e.forEach((r,s)=>{typeof r!="number"&&i.push({path:`${o}.${t}.${s}`,message:`coordinates is expected to be of type number but got ${r}`,property:"format"})}),i)}function Et(t,e,o){const i=[];return e.length<2?[{path:`${o}.${t}`,message:`Value is expected to have at least 2 points but got ${e.length}`,property:"format"}]:(e.forEach((r,s)=>{r.forEach((a,c)=>{typeof a!="number"&&i.push({path:`${o}.${t}.${s}.${c}`,message:`coordinates is expected to be of type number but got ${a}`,property:"format"})})}),i)}function Lt(t,e,o){return e?[]:[{path:`${o}.${t}`,message:`invalid value ${JSON.stringify(e)}`,property:"type"}]}function kt(t,e,o){return typeof e!="string"?[{path:`${o}.${t}`,message:"Value is expected to be a valid wkt string",property:"type"}]:e==="GEOMETRYCOLLECTION EMPTY"?[{path:`${o}.${t}`,message:"Should have at least 1 Geometry",property:"type"}]:[]}function At(t,e,o,i){var r;if(typeof e!="object"||!Object.keys(e).length)return[{path:`${o}.${t}`,message:"Value is expected to be a valid geojson object",property:"type"}];if(v(i)){if(e.type!=="FeatureCollection")return[{path:`${o}.${t}`,message:"Value is expected to be a valid FeaturesCollection geojson",property:"type"}];if(!((r=e==null?void 0:e.features)!=null&&r.length))return[{path:`${o}.${t}`,message:"Value is expected to have at least one feature",property:"type"}]}else if(!(e!=null&&e.geometry.type))return[{path:`${o}.${t}`,message:"Value is expected to have a valid geometry",property:"type"}];return[]}const Mt=[{type:"object",format:"minmax",func:ut},{type:"array",format:"bounding-boxes",func:l},{type:"wkt",format:"bounding-boxes",func:l},{type:"geojson",format:"bounding-boxes",func:l},{type:"array",format:"bounding-box",func:l},{type:"wkt",format:"bounding-box",func:l},{type:"geojson",format:"bounding-box",func:l},{type:"array",format:"polygons",func:l},{type:"wkt",format:"polygons",func:l},{type:"geojson",format:"polygons",func:l},{type:"object",format:"polygon",func:l},{type:"wkt",format:"polygon",func:l},{type:"geojson",format:"polygon",func:l},{type:"array",format:"points",func:l},{type:"wkt",format:"points",func:l},{type:"geojson",format:"points",func:l},{type:"array",format:"point",func:l},{type:"wkt",format:"point",func:l},{type:"geojson",format:"point",func:l},{format:"feature",func:l},{type:"array",format:"features",func:l},{type:"wkt",format:"features",func:l},{type:"geojson",format:"features",func:l},{type:"array",format:"line",func:l},{type:"wkt",format:"line",func:l},{type:"geojson",format:"line",func:l},{type:"array",format:"lines",func:l},{type:"wkt",format:"lines",func:l},{type:"geojson",format:"lines",func:l}],Ht=(t,e)=>{const o=[...Mt,...e];w.defaults.custom_validators.push(yt(o)),o.map(({type:i,format:r,func:s})=>{w.defaults.startVals=t,w.defaults.editors[r]=s,w.defaults.resolvers.unshift(a=>{if(a.type===i&&a.format===r||a.format==="feature")return r})})},Vt={type:"object",properties:{fallback:{format:"info",title:"No schema provided",description:"Pass a schema to <code>eox-jsonform</code> via the <code>schema</code> property"}}},K=new WeakMap;let M=null;document.body.addEventListener("focusout",()=>{M&&(M(),M=null)});window.SimpleMDE=ct;window.ace=pt;window.ace.config.set("useWorker",!1);window.ace.config.set("basePath","https://cdn.jsdelivr.net/npm/ace-builds/src-min-noconflict/");const W=t=>{Ht(t.value||{},t.customEditorInterfaces||[]);const e=t.renderRoot.querySelector("form");for(;e.firstChild;)e.removeChild(e.firstChild);w.defaults.callbacks={button:{onSubmit:function(){t.dispatchEvent(new CustomEvent("submit",{detail:t.value,bubbles:!0,composed:!0}))}}},w.defaults.resolvers.unshift(r=>{var s;return((s=r.options)==null?void 0:s.resolver)&&r.options.resolver});let i=new w(e,{schema:t.schema||Vt,...t.value?{startval:t.value}:{},theme:"html",iconlib:"fontawesome5",ajax:!0,disable_collapse:!0,disable_edit_json:!0,disable_properties:!0,disable_array_delete_all_rows:!0,disable_array_delete_last_row:!0,array_controls_top:!0,...t.options});return i.on("ready",()=>{t.renderRoot.querySelector("form").dataset.themeCustom="eox";const r=Array.from(t.renderRoot.querySelectorAll(".tabs.je-tabholder--top > .je-tab--top > span")),s=n=>{Object.entries(n).filter(([h,p])=>{var f;return(f=p.options)==null?void 0:f.hidden}).map(([h,p])=>p.title||h).forEach(h=>{const p=r.find(f=>f.textContent===h);p&&(p.parentElement.dataset.hidden="")}),Object.values(n).forEach(h=>{h.properties&&s(h.properties)})};if(s(i.expandSchema(i.schema).properties),t.renderRoot.querySelectorAll("[data-schematype=string] input").forEach(n=>{n.addEventListener("input",()=>{n.dispatchEvent(new CustomEvent("change",{detail:n.value}))})}),Ct(i)){const n=document.createElement("style");n.innerHTML=`
          @import url("https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css");
          @import url("https://unpkg.com/easymde/dist/easymde.min.css");
        `,t.renderRoot.insertBefore(n,t.renderRoot.firstChild)}const c=Object.values(i.editors).find(n=>n==null?void 0:n.ace_container);c&&!t.noShadow&&(c.ace_editor_instance.setOptions({showPrintMargin:!1,useSoftTabs:!0,wrap:!0}),c.ace_editor_instance.renderer.attachToShadowRoot(),c.ace_editor_instance.resize())}),i.on("change",()=>{t.renderRoot.querySelectorAll("input[type='checkbox']:not(.je-modal input)").forEach(r=>{const s=r.parentElement;if(s.tagName==="LABEL"&&!s.classList.contains("checkbox")){r.parentElement.classList.add("checkbox"),r.parentElement.classList.add("small");const a=document.createElement("span");r.nextSibling&&r.nextSibling.nodeType===Node.TEXT_NODE&&a.appendChild(r.nextSibling),r.parentElement.appendChild(a)}}),t.renderRoot.querySelectorAll("a").forEach(r=>{r.classList.add("link")}),t.renderRoot.querySelectorAll("button").forEach(r=>{var s;if(r.classList.contains("json-editor-btn-"))(s=r.querySelector("i"))==null||s.remove();else{if(["circle","small","transparent","primary-text","no-margin"].forEach(a=>r.classList.add(a)),r.classList.contains("json-editor-btntype-add")&&(r.innerHTML=`
          <i class="small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
          </i>`),r.classList.contains("json-editor-btntype-delete")&&(r.innerHTML=`
          <i class="small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-outline</title><path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" /></svg>
          </i>`,r.classList.add("red-text")),r.classList.contains("json-editor-btntype-toggle")){const a=c=>{r.innerHTML=c==="Collapse"?`
            <i class="small">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-down</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </i>`:`
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-right</title><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
            </i>
            `};r.addEventListener("click",()=>{a(r.title)}),a(r.title)}r.classList.contains("json-editor-btn-moveup")&&(r.innerHTML=`
          <i class="small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>triangle-small-up</title><path d="M8 15H16L12 8" /></svg>
          </i>`),r.classList.contains("json-editor-btn-movedown")&&(r.innerHTML=`
          <i class="small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>triangle-small-down</title><path d="M8 9H16L12 16" /></svg>
          </i>`),r.classList.contains("json-editor-btn-moveleft")&&(r.innerHTML=`
          <i class="small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu-left</title><path d="M14,7L9,12L14,17V7Z" /></svg>
          </i>`),r.classList.contains("json-editor-btn-moveright")&&(r.innerHTML=`
          <i class="small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu-right</title><path d="M10,17L15,12L10,7V17Z" /></svg>
          </i>`),r.classList.contains("json-editor-btn-edit")&&(r.innerHTML=`
          <i class="small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>square-edit-outline</title><path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" /></svg>
          </i>`),r.classList.contains("json-editor-btn-edit_properties")&&(r.innerHTML=`
          <i class="small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>format-list-bulleted</title><path d="M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z" /></svg>
          </i>`),r.classList.contains("json-editor-btn-save")&&(r.innerHTML=`
          <i class="small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>content-save</title><path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" /></svg>
          </i>`),r.classList.contains("json-editor-btn-copy")&&(r.innerHTML=`
          <i class="small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>content-copy</title><path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" /></svg>
          </i>`),r.classList.contains("json-editor-btn-cancel")&&(r.innerHTML=`
          <i class="small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cancel</title><path d="M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z" /></svg>
          </i>`)}})}),i};async function X(t){if(t&&typeof t!="object")try{const e=await fetch(t);if(e.ok)return await e.json();console.error("Failed to fetch schema from URL: ",e.status)}catch(e){console.error("Error fetching schema: ",e)}return t}function Ct(t){if(Object.values(t.editors).some(o=>o instanceof dt))return!0;function e(o){if(!o)return!1;if(o.format==="markdown")return!0;if(o.properties)return Object.values(o.properties).some(e);if(o.items)return e(o.items);for(const i of["anyOf","oneOf","allOf"])if(o[i]&&Array.isArray(o[i])&&o[i].some(e))return!0;return!1}return e(t.schema)}const $t=t=>{setTimeout(()=>{t.renderRoot.querySelectorAll("a").forEach(e=>{e.getAttribute("href")!==null&&e.getAttribute("href").startsWith("http")&&(e.setAttribute("target","_blank"),e.setAttribute("rel","noopener noreferrer"))})})};function Y(t){return t.closest(".row").querySelectorAll(".form-control input[name^='root']:not(.json-editor-opt-in), .form-control select[name^='root']:not(.json-editor-opt-in)")}const St=t=>{t.renderRoot.querySelectorAll(".je-indented-panel .row button.json-editor-btn-add:disabled").forEach(i=>{i.disabled=!1,i.addEventListener("click",()=>{setTimeout(()=>{const r=i.closest(".row").querySelectorAll(".form-control select[name^='root']:not(.json-editor-opt-in)"),s=i.closest(".row").querySelector(".json-editor-opt-in");r.length&&s&&!s.checked&&s.click()})})}),t.renderRoot.querySelectorAll(".json-editor-opt-in").forEach(i=>{const r=Y(i);r.forEach(s=>{const a=K.get(s);a&&s.removeEventListener("change",a);const c=h=>{let p=!0;r.forEach(f=>{f.value&&(p=!1)}),p&&i.checked?(i.click(),r.forEach(f=>f.disabled=!1)):!p&&!i.checked&&i.click(),h.target.focus()},n=s.closest(".form-control").parentElement.querySelector(".json-editor-btn-delete:not([style*='display: none'])");if(n){const h=()=>{M=()=>{!Y(i).length&&i.checked&&i.click()}};n.addEventListener("click",h)}K.set(s,c),s.addEventListener("change",c),s.disabled=!1})})},_t="",Tt=()=>{const t="eox-elements";if(!document.head.querySelector(`style#${t}`)){const e=new CSSStyleSheet;e.replaceSync(Q);const o=Array.from(e.cssRules).filter(r=>r.cssText.includes(":root")).map(r=>r.cssText).join(" "),i=document.createElement("style");i.setAttribute("id",t),i.innerHTML=`
    @import url("https://eox.at/fonts/inter/inter.css");

    @font-face {
      font-family: "Material Symbols Subset";
      font-style: normal;
      font-weight: 400;
      font-display: block;
      src: url(https://cdn.jsdelivr.net/npm/@eox/ui@0.3.4/dist/material-symbols-subset.woff2) format("woff2");
    }
  
    eox-chart,
    eox-drawtools,
    eox-feedback,
    eox-geosearch,
    eox-itemfilter,
    eox-jsonform,
    eox-layercontrol,
    eox-map,
    eox-stacinfo,
    eox-storytelling,
    eox-timecontrol {
      font-family: var(--font);
      font-size: .875rem;
      line-height: 1.5rem;
      letter-spacing: .0313rem;
    }
    ${o}
  `,document.head.appendChild(i)}};Tt();const Ot=`
  ${Q}

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
    border-color: var(--outline-variant) !important;
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
    align-items: center;
  }
  form[data-theme="html"][data-theme-custom="eox"] table.je-table tr {
    display: flex;
  }
  form[data-theme="html"][data-theme-custom="eox"] .je-tabholder.tabs {
    width: 130px;
    flex-direction: column;
  }
  form[data-theme="html"][data-theme-custom="eox"] .je-tabholder.tabs+div {
    margin-left: 130px;
  }
  form[data-theme="html"][data-theme-custom="eox"] .tabs.je-tabholder--top {
    margin-left: 0;
    justify-content: start;
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
    border: var(--eox-panel-border, 1px solid var(--outline-variant));
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
    border-color: var(--outline-variant);
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
  .form-control select {
    min-height: 4rem;  
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
  .form-control label {
    align-items: center;
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
  .je-edit-json--textarea {
    font-family: monospace;
    font-size: small;
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
`;var u,y,ot,rt,N;class et extends nt{constructor(){super();_(this,y);_(this,u,null);this.schema=null,this.value=null,this.options={},this.noShadow=!1,this.unstyled=!1,this.customEditorInterfaces=[]}get editor(){return g(this,u)}get schema(){return this._schema}set schema(o){g(this,u)&&!J(this._schema,o)&&g(this,u).destroy(),this._schema=o}get value(){return this._value}set value(o){g(this,u)&&g(this,u).ready&&!J(this._value,o)&&g(this,u).setValue(o),this._value=o}async updated(o){this._value=await X(this.value),o.has("schema")?(this._schema=await X(this.schema),(!g(this,u)||g(this,u).destroyed)&&(T(this,u,await W(this)),L(this,y,N).call(this))):o.has("customEditorInterfaces")&&this.customEditorInterfaces&&(T(this,u,await W(this)),L(this,y,N).call(this)),$t(this)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var o;return lt`
      <style>
        ${_t}
          ${!this.unstyled&&Ot}
          ${((o=this.options)==null?void 0:o.disable_properties)===!1?"":`
          form[data-theme="html"][data-theme-custom="eox"] > [data-schemaid="root"] > .je-header,
          form[data-theme="html"][data-theme-custom="eox"] > [data-schemaid="root"] > .je-object__controls {
            display: none;
          }
        `}
          input[type="checkbox"].json-editor-opt-in {
          display: none !important;
        }
      </style>
      <form></form>
    `}}u=new WeakMap,y=new WeakSet,ot=function(){this.dispatchEvent(new Event("ready"))},rt=function(){var o;(o=this.options)!=null&&o.show_opt_in&&setTimeout(()=>St(this)),this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0,composed:!0}))},N=function(){["ready","change"].map(i=>{g(this,u).on(i,()=>{i==="ready"&&L(this,y,ot).call(this),this._value=g(this,u).getValue(),L(this,y,rt).call(this)})})},G(et,"properties",{schema:{attribute:!1,type:Object},value:{attribute:!1,type:Object},options:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array},noShadow:{attribute:"no-shadow",type:Boolean},unstyled:{type:Boolean}});customElements.define("eox-jsonform",et);export{et as EOxJSONForm};
