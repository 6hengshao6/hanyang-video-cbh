/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import r from"../../core/Accessor.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../core/lang.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";let e=class extends r{constructor(t){super(t),this.extent=null,this.extraParameters=null,this.outSpatialReference=null,this.template=null,this.updateDelay=1e3,this.view=null}};t([s()],e.prototype,"extent",void 0),t([s()],e.prototype,"extraParameters",void 0),t([s()],e.prototype,"outSpatialReference",void 0),t([s()],e.prototype,"template",void 0),t([s()],e.prototype,"updateDelay",void 0),t([s()],e.prototype,"view",void 0),e=t([o("esri.rest.support.PrintParameters")],e);const p=e;export{p as default};
