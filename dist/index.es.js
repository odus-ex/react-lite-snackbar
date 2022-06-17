import e,{useEffect as r}from"react";function a(e,r){void 0===r&&(r={});var a=r.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css","top"===a&&o.firstChild?o.insertBefore(t,o.firstChild):o.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}}a(":root{--bg-color-success:#158d15;--bg-color-error:#e21b1b;--bg-color-default:#001732;--bg-color-info:#2340ff;--bg-color-warning:#f49426;--text-color-dark:#0a0a0a;--text-color-light:#f4f4f4;--snackbar-shadow-light:#bababa;--snackbar-shadow-dark:#6c6c6c}");a(".snackbar_container{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:10px}.snackbar_wrapper{background-color:var(--bg-color-default);border-radius:.25rem;box-shadow:.25rem .25rem .5rem var(--snackbar-shadow-light);color:var(--text-color-light);display:grid;grid-template-columns:auto 50px;grid-template-rows:auto 8px;justify-content:space-between;margin-top:1rem;max-width:50vw;min-width:300px;width:fit-content}.bg_success{background-color:var(--bg-color-success)}.bg_info{background-color:var(--bg-color-info)}.bg_error{background-color:var(--bg-color-error)}.bg_warning{background-color:var(--bg-color-warning)}.snack_message_wrapper{grid-column:1/2;text-align:left}.snack_close_wrapper,.snack_message_wrapper{align-items:center;display:flex;grid-row:1/2;padding:1rem}.snack_close_wrapper{cursor:pointer;grid-column:2/3;justify-content:center}");a('.snack_close_icon_wrapper{background:none;border:0;display:block;margin:0;padding:0;position:relative;width:1rem}.snack_close_icon_wrapper:after,.snack_close_icon_wrapper:before{background:#fff;border-radius:.25rem;content:"";height:.25rem;left:0;position:absolute;right:0}.snack_close_icon_wrapper:before{transform:rotate(45deg)}.snack_close_icon_wrapper:after{transform:rotate(-45deg)}');a(".snack_regress_wrapper{animation:regress 4s linear;background:linear-gradient(90deg,red,orange,green,#ff0,indigo,violet,#09f);border-bottom-left-radius:.25rem;border-bottom-right-radius:.25rem;display:flex;grid-column:1/3;grid-row:2/3;width:100%}@keyframes regress{to{width:1%}}");const o={success:"bg_success",error:"bg_error",info:"bg_info",warning:"bg_warning"},t=3e3,n=1e3,s=({configObject:a})=>{let{message:s,type:c,toggleOpenCloseHandler:l,onCloseCallback:i,onOpenCallback:d,autoHide:g=!0,autoHideTimeOut:p,disableCloseOnClick:m,customBgColorClass:b,customTextColorClass:f,showRegressBar:u=!0}=a,_=p>=n?p:t;r((()=>{d(),g&&setTimeout((()=>k()),_)}),[]);const k=()=>{i(),l()},w=()=>u&&g;return e.createElement("div",{className:`snackbar_wrapper ${o[c.toLowerCase()]}`},e.createElement("section",{className:"snack_message_wrapper"},s),m?null:(r=>e.createElement("section",{className:"snack_close_wrapper",onClick:r},e.createElement("span",{className:"snack_close_icon_wrapper"})))(k),w?(r=>e.createElement("div",{className:"snack_regress_wrapper",style:{animation:`regress ${r/1e3}s linear`}}))(_):null)},c=({instances:r={},closeAll:a=!1,openAll:o=!1})=>{const t={...r},n=Object.keys(r).filter((e=>t[e].open));return e.createElement("div",{className:"snackbar_container"},n.map((r=>{return a=r,e.createElement(s,{key:a,configObject:t[a]});var a})))};export{c as default};
