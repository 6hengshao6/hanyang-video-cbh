/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import e from"./Accessor.js";import{h as s}from"../chunks/handleUtils.js";import{subclass as r}from"./accessorSupport/decorators/subclass.js";import"./Handles.js";import"../chunks/maybe.js";import"../chunks/get.js";import"../chunks/utils.js";import"./lang.js";import"../chunks/typedArrayUtil.js";import"../chunks/metadata.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"./accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"./Error.js";import"../chunks/watch.js";import"./scheduling.js";import"../chunks/nextTick.js";import"./promiseUtils.js";class i{constructor(){this._emitter=new i.EventEmitter(this)}emit(t,e){return this._emitter.emit(t,e)}on(t,e){return this._emitter.on(t,e)}once(t,e){return this._emitter.once(t,e)}hasEventListener(t){return this._emitter.hasEventListener(t)}}!function(n){class o{constructor(t=null){this._target=t,this._listenersMap=null}clear(){this._listenersMap&&this._listenersMap.clear(),this._listenersMap=null}emit(t,e){const s=this._listenersMap&&this._listenersMap.get(t);if(!s)return!1;const r=this._target||this;return[...s].forEach((t=>{t.call(r,e)})),s.length>0}on(t,e){if(Array.isArray(t)){const r=t.map((t=>this.on(t,e)));return s(r)}if(t.includes(","))throw new TypeError("Evented.on() with a comma delimited string of event types is not supported");this._listenersMap||(this._listenersMap=new Map);const r=this._listenersMap.get(t)||[];return r.push(e),this._listenersMap.set(t,r),{remove:()=>{const s=this._listenersMap&&this._listenersMap.get(t)||[],r=s.indexOf(e);r>=0&&s.splice(r,1)}}}once(t,e){const s=this.on(t,(t=>{s.remove(),e.call(null,t)}));return s}hasEventListener(t){const e=this._listenersMap&&this._listenersMap.get(t);return null!=e&&e.length>0}}n.EventEmitter=o,n.EventedMixin=e=>{let s=class extends e{constructor(){super(...arguments),this._emitter=new o}destroy(){this._emitter.clear()}emit(t,e){return this._emitter.emit(t,e)}on(t,e){return this._emitter.on(t,e)}once(t,e){return this._emitter.once(t,e)}hasEventListener(t){return this._emitter.hasEventListener(t)}};return s=t([r("esri.core.Evented")],s),s};let c=class extends e{constructor(){super(...arguments),this._emitter=new i.EventEmitter(this)}destroy(){this._emitter.clear()}emit(t,e){return this._emitter.emit(t,e)}on(t,e){return this._emitter.on(t,e)}once(t,e){return this._emitter.once(t,e)}hasEventListener(t){return this._emitter.hasEventListener(t)}};c=t([r("esri.core.Evented")],c),n.EventedAccessor=c}(i||(i={}));const n=i;export{n as default};