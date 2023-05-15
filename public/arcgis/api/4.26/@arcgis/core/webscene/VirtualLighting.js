/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import{JSONSupport as s}from"../core/JSONSupport.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/typedArrayUtil.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../core/lang.js";import"../chunks/metadata.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../core/Error.js";var e;let i=e=class extends s{constructor(r){super(r),this.type="virtual",this.directShadowsEnabled=!1}clone(){return new e(this.cloneConstructProperties())}cloneConstructProperties(){return{directShadowsEnabled:this.directShadowsEnabled}}};r([t({readOnly:!0,type:["virtual"],json:{write:!0}})],i.prototype,"type",void 0),r([t({type:Boolean,json:{default:!1,name:"directShadows",write:!0}})],i.prototype,"directShadowsEnabled",void 0),i=e=r([o("esri.webscene.VirtualLighting")],i);const c=i;export{c as default};
