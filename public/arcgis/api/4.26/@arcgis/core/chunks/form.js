/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{b as e}from"./dom.js";import{h as t}from"./index.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */const n="hidden-form-input";function o(e){return"checked"in e}const a=new WeakMap,r=new WeakSet;function c(e){const{formEl:t}=e;return!!t&&("requestSubmit"in t?t.requestSubmit():t.submit(),!0)}function s(e){e.formEl?.reset()}function u(t){const{el:n,value:c}=t,s=e(n,"form");if(!s||function(e,t){const n="calciteInternalFormComponentRegister";let o=!1;return e.addEventListener(n,(e=>{o=e.composedPath().some((e=>r.has(e))),e.stopPropagation()}),{once:!0}),t.dispatchEvent(new CustomEvent(n,{bubbles:!0,composed:!0})),o}(s,n))return;t.formEl=s,t.defaultValue=c,o(t)&&(t.defaultChecked=t.checked);const u=(t.onFormReset||d).bind(t);s.addEventListener("reset",u),a.set(t.el,u),r.add(n)}function d(){o(this)?this.checked=this.defaultChecked:this.value=this.defaultValue}function l(e){const{el:t,formEl:n}=e;if(!n)return;const o=a.get(t);n.removeEventListener("reset",o),a.delete(t),e.formEl=null,r.delete(t)}function i(e,t){e.defaultValue=t}const f=e=>{e.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputChange",{bubbles:!0}))},m=e=>e.removeEventListener("change",f);function h(e,t,n){const{defaultValue:a,disabled:r,name:c,required:s}=e;t.defaultValue=a,t.disabled=r,t.name=c,t.required=s,t.tabIndex=-1,o(e)?(t.checked=e.checked,t.defaultChecked=e.defaultChecked,t.value=e.checked?n||"on":""):t.value=n||"",e.syncHiddenFormInput?.(t)}const p=({component:e})=>(function(e){const{el:t,formEl:o,name:a,value:r}=e,{ownerDocument:c}=t,s=t.querySelectorAll(`input[slot="${n}"]`);if(!o||!a)return void s.forEach((e=>{m(e),e.remove()}));const u=Array.isArray(r)?r:[r],d=[],l=new Set;let i;s.forEach((t=>{const n=u.find((e=>e==t.value));null!=n?(l.add(n),h(e,t,n)):d.push(t)})),u.forEach((t=>{if(l.has(t))return;let o=d.pop();o||(o=c.createElement("input"),o.slot=n),i||(i=c.createDocumentFragment()),i.append(o),o.addEventListener("change",f),h(e,o,t)})),i&&t.append(i),d.forEach((e=>{m(e),e.remove()}))}(e),t("slot",{name:n}));export{p as H,i as a,u as c,l as d,s as r,c as s};