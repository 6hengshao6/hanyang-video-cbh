/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{JSONSupport as s}from"../core/JSONSupport.js";import{t as o}from"../chunks/screenUtils.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import{cast as e}from"../core/accessorSupport/decorators/cast.js";import"../chunks/typedArrayUtil.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import{c as n}from"../chunks/mathUtils.js";import{l as c}from"../chunks/ensureType.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../core/lang.js";import"../chunks/metadata.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/vec3.js";import"../chunks/common.js";import"../chunks/vec4.js";const p={type:Number,cast:t=>{const s=c(t);return 0===s?1:n(s,.1,4)},nonNullable:!0},l={type:["left","right","center"],nonNullable:!0},m={type:["baseline","top","middle","bottom"],nonNullable:!0};var a;let h=a=class extends s{constructor(t){super(t),this.decoration="none",this.family="sans-serif",this.size=9,this.style="normal",this.weight="normal"}castSize(t){return o(t)}clone(){return new a({decoration:this.decoration,family:this.family,size:this.size,style:this.style,weight:this.weight})}hash(){return`${this.decoration}.${this.family}.${this.size}.${this.style}.${this.weight}`}};t([r({type:["none","underline","line-through"],json:{default:"none",write:!0}})],h.prototype,"decoration",void 0),t([r({type:String,json:{write:!0}})],h.prototype,"family",void 0),t([r({type:Number,json:{write:{overridePolicy:(t,s,o)=>({enabled:!o||!o.textSymbol3D})}}})],h.prototype,"size",void 0),t([e("size")],h.prototype,"castSize",null),t([r({type:["normal","italic","oblique"],json:{default:"normal",write:!0}})],h.prototype,"style",void 0),t([r({type:["normal","lighter","bold","bolder"],json:{default:"normal",write:!0}})],h.prototype,"weight",void 0),h=a=t([i("esri.symbols.Font")],h);const u=h;export{u as default,l as h,p as l,m as v};