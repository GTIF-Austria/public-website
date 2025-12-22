import{v as c,C as d,c as p,o as m,G as u,j as v,k as f,g as h,q as s}from"./chunks/framework.4kzZWZn6.js";const x=[".config"],y=JSON.parse('{"title":"","description":"","frontmatter":{"layout":false},"headers":[],"relativePath":"explore.md","filePath":"explore.md"}'),_={name:"explore.md"},g=Object.assign(_,{setup(b){function i(t){const n=setInterval(()=>{if(window.eodashStore){clearInterval(n),t(window.eodashStore);const e=document.querySelector("eo-dash"),a=document.createElement("style");a.textContent=`
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
                    .v-btn.v-theme--dashboardTheme.text-primary.v-btn--density-default.rounded-xl.v-btn--size-default.v-btn--variant-text.text-none.text-body-2 {
                    color: #000 !important;
                    }
                `,e.shadowRoot.appendChild(a)}},100)}return c(()=>{i(t=>{var a,o;const n=(a=t==null?void 0:t.states)==null?void 0:a.indicator;s(n,(r,l)=>{},{immediate:!0});const e=(o=t==null?void 0:t.states)==null?void 0:o.poi;s(e,(r,l)=>{},{immediate:!0})})}),(t,n)=>{const e=d("NavBar");return m(),p("div",null,[u(e),v("eo-dash",{".config":f(h)("/dashboard.js"),style:{display:"block",height:"calc(100dvh - var(--vp-nav-height)) !important"}},null,40,x)])}}});export{y as __pageData,g as default};
