import{v as d,C as p,c as m,o as u,G as v,j as h,k as f,g as x,q as s}from"./chunks/framework.DcHDDd1r.js";const _=[".config"],y=JSON.parse('{"title":"","description":"","frontmatter":{"layout":false},"headers":[],"relativePath":"explore.md","filePath":"explore.md"}'),b={name:"explore.md"},B=Object.assign(b,{setup(w){function i(t){const n=setInterval(()=>{if(window.eodashStore){clearInterval(n),t(window.eodashStore);const e=document.querySelector("eo-dash"),a=document.createElement("style");a.textContent=`
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
                `,e.shadowRoot.appendChild(a)}},100)}d(()=>{i(t=>{var a,o;const n=(a=t==null?void 0:t.states)==null?void 0:a.indicator;s(n,(c,l)=>{},{immediate:!0});const e=(o=t==null?void 0:t.states)==null?void 0:o.poi;s(e,(c,l)=>{},{immediate:!0})})});const r=`?t=${new Date().getTime()}`;return(t,n)=>{const e=p("NavBar");return u(),m("div",null,[v(e),h("eo-dash",{".config":f(x)(`/dashboard.js${r}`),style:{display:"block",height:"calc(100dvh - var(--vp-nav-height)) !important"}},null,40,_)])}}});export{y as __pageData,B as default};
