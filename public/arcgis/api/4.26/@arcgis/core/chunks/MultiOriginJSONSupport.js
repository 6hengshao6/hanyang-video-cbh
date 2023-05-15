/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import r,{a as s,O as e,n as i,b as o}from"../core/Accessor.js";import{b as n}from"./maybe.js";import{s as a,r as u,w as c}from"../core/JSONSupport.js";import{clone as h}from"../core/lang.js";import{g as p}from"./utils.js";import{subclass as g}from"../core/accessorSupport/decorators/subclass.js";class l{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(s),this._values=new Map,this.multipleOriginsSupported=!0}clone(t){const r=new l,i=this._originStores[e.DEFAULTS];i&&i.forEach(((t,s)=>{r.set(s,h(t),e.DEFAULTS)}));for(let i=e.SERVICE;i<s;i++){const s=this._originStores[i];s&&s.forEach(((s,e)=>{t&&t.has(e)||r.set(e,h(s),i)}))}return r}get(t,r){const s=void 0===r?this._values:this._originStores[r];return s?s.get(t):void 0}keys(t){const r=null==t?this._values:this._originStores[t];return r?[...r.keys()]:[]}set(t,r,s=e.USER){let i=this._originStores[s];if(i||(i=new Map,this._originStores[s]=i),i.set(t,r),!this._values.has(t)||n(this._propertyOriginMap.get(t))<=s){const e=this._values.get(t);return this._values.set(t,r),this._propertyOriginMap.set(t,s),e!==r}return!1}delete(t,r=e.USER){const s=this._originStores[r];if(!s)return;const i=s.get(t);if(s.delete(t),this._values.has(t)&&this._propertyOriginMap.get(t)===r){this._values.delete(t);for(let s=r-1;s>=0;s--){const r=this._originStores[s];if(r&&r.has(t)){this._values.set(t,r.get(t)),this._propertyOriginMap.set(t,s);break}}}return i}has(t,r){const s=void 0===r?this._values:this._originStores[r];return!!s&&s.has(t)}revert(t,r){for(;r>0&&!this.has(t,r);)--r;const s=this._originStores[r],e=s&&s.get(t),i=this._values.get(t);return this._values.set(t,e),this._propertyOriginMap.set(t,r),i!==e}originOf(t){return this._propertyOriginMap.get(t)||e.DEFAULTS}forEach(t){this._values.forEach(t)}}const O=r=>{let s=class extends r{constructor(...t){super(...t);const r=n(p(this)),s=r.store,e=new l;r.store=e,a(r,s,e)}read(t,r){u(this,t,r)}getAtOrigin(t,r){const s=f(this),e=i(r);if("string"==typeof t)return s.get(t,e);const o={};return t.forEach((t=>{o[t]=s.get(t,e)})),o}originOf(t){return o(this.originIdOf(t))}originIdOf(t){return f(this).originOf(t)}revert(t,r){const s=f(this),e=i(r),o=p(this);let n;n="string"==typeof t?"*"===t?s.keys(e):[t]:t,n.forEach((t=>{o.invalidate(t),s.revert(t,e),o.commit(t)}))}};return s=t([g("esri.core.ReadOnlyMultiOriginJSONSupport")],s),s};function f(t){return p(t).store}let S=class extends(O(r)){};S=t([g("esri.core.ReadOnlyMultiOriginJSONSupport")],S);const _=r=>{let o=class extends r{constructor(...t){super(...t)}clear(t,r="user"){return d(this).delete(t,i(r))}write(t,r){return c(this,t=t||{},r),t}setAtOrigin(t,r,s){p(this).setAtOrigin(t,r,i(s))}removeOrigin(t){const r=d(this),s=i(t),o=r.keys(s);for(const t of o)r.originOf(t)===s&&r.set(t,r.get(t,s),e.USER)}updateOrigin(t,r){const e=d(this),o=i(r),n=this.get(t);for(let r=o+1;r<s;++r)e.delete(t,r);e.set(t,n,o)}toJSON(t){return this.write({},t)}};return o=t([g("esri.core.WriteableMultiOriginJSONSupport")],o),o.prototype.toJSON.isDefaultToJSON=!0,o};function d(t){return p(t).store}const v=r=>{let s=class extends(_(O(r))){constructor(...t){super(...t)}};return s=t([g("esri.core.MultiOriginJSONSupport")],s),s};let m=class extends(v(r)){};m=t([g("esri.core.MultiOriginJSONSupport")],m);export{v as M,m as a};
