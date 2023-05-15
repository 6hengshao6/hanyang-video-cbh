/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{clone as s}from"../../core/lang.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import{e as o}from"../../chunks/enumeration.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import i from"./PointCloudFilter.js";import"../../chunks/typedArrayUtil.js";import"../../chunks/maybe.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/jsonMap.js";import"../../chunks/tracking.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";var n;let p=n=class extends i{constructor(r){super(r),this.includedReturns=[],this.type="return"}clone(){return new n({field:this.field,includedReturns:s(this.includedReturns)})}};r([t({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"includedReturns",void 0),r([o({pointCloudReturnFilter:"return"})],p.prototype,"type",void 0),p=n=r([e("esri.layers.pointCloudFilters.PointCloudReturnFilter")],p);const c=p;export{c as default};
