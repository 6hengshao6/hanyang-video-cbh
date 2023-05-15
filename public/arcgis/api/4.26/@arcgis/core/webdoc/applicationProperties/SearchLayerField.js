/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{JSONSupport as t}from"../../core/JSONSupport.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{e as o}from"../../chunks/enumeration.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import{k as c}from"../../chunks/fieldType.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../core/lang.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/jsonMap.js";var i;let p=i=class extends t{constructor(s){super(s),this.exactMatch=!1,this.name=null,this.type=null}clone(){return new i({exactMatch:this.exactMatch,type:this.type,name:this.name})}};s([r({type:Boolean,json:{write:!0}})],p.prototype,"exactMatch",void 0),s([r({type:String,json:{write:!0}})],p.prototype,"name",void 0),s([o(c)],p.prototype,"type",void 0),p=i=s([e("esri.webdoc.applicationProperties.SearchLayerField")],p);const n=p;export{n as default};
