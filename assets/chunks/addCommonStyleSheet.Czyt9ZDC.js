import{e as r}from"./style.CcGKRj1a.js";const i=()=>{const o="eox-elements";if(!document.head.querySelector(`style#${o}`)){const s=new CSSStyleSheet;s.replaceSync(r);const n=Array.from(s.cssRules).filter(t=>t.cssText.includes(":root")).map(t=>t.cssText).join(" "),e=document.createElement("style");e.setAttribute("id",o),e.innerHTML=`
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
    ${n}
  `,document.head.appendChild(e)}};export{i as a};
