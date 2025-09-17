import{v as l,C as p,c as d,o as m,G as u,j as f,k as v,g as _,q as s}from"./chunks/framework.Dh_GYjBE.js";const h=[".config"],y=JSON.parse('{"title":"","description":"","frontmatter":{"layout":false},"headers":[],"relativePath":"explore.md","filePath":"explore.md"}'),x={name:"explore.md"},b=Object.assign(x,{setup(w){function i(t){const o=setInterval(()=>{if(window.eodashStore){clearInterval(o),t(window.eodashStore);const e=document.querySelector("eo-dash"),a=document.createElement("style");a.textContent=`
                    .map-buttons-container .v-btn {
                    --v-btn-height: 18px !important;
                    }
                    .ol-mouse-position {
                    font-size: 10px;
                    }
                    #cursor-coordinates {
                    padding: 0px 8px;
                    }
                    .eodash-overlay {
                    top: 8px!important;
                    left:-20px!important;
                    }
                `,e.shadowRoot.appendChild(a)}},100)}return l(()=>{i(t=>{var a,n;const o=(a=t==null?void 0:t.states)==null?void 0:a.indicator;s(o,(r,c)=>{},{immediate:!0});const e=(n=t==null?void 0:t.states)==null?void 0:n.poi;s(e,(r,c)=>{},{immediate:!0})})}),(t,o)=>{const e=p("NavBar");return m(),d("div",null,[u(e),f("eo-dash",{".config":v(_)("/dashboard.js"),style:{display:"block",height:"calc(100dvh - var(--vp-nav-height)) !important"}},null,40,h)])}}});export{y as __pageData,b as default};
