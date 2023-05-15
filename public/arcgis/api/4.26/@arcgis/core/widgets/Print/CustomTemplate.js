/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import{JSONSupport as s}from"../../core/JSONSupport.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import{b as i,f as p}from"../../chunks/layoutTemplate.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../core/lang.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/jsonMap.js";let e=class extends s{constructor(o){super(o),this.description=null,this.format=null,this.label=null,this.layout=null,this.layoutOptions=null}};o([t()],e.prototype,"description",void 0),o([t({json:{read:i}})],e.prototype,"format",void 0),o([t()],e.prototype,"label",void 0),o([t({json:{read:p}})],e.prototype,"layout",void 0),o([t()],e.prototype,"layoutOptions",void 0),e=o([r("esri.widgets.Print.CustomTemplate")],e);const c=e;export{c as default};