/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as s}from"../../../chunks/tslib.es6.js";import{property as r}from"../../../core/accessorSupport/decorators/property.js";import"../../../chunks/ensureType.js";import"../../../chunks/typedArrayUtil.js";import{subclass as t}from"../../../core/accessorSupport/decorators/subclass.js";import o from"./Input.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/object.js";import"../../../core/lang.js";import"../../../chunks/maybe.js";import"../../../chunks/string.js";import"../../../chunks/get.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/metadata.js";import"../../../core/Error.js";import"../../../chunks/tracking.js";import"../../../core/JSONSupport.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/watch.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../core/promiseUtils.js";let e=class extends o{constructor(s){super(s),this.maxLength=null,this.minLength=0}};s([r({type:Number,json:{write:!0}})],e.prototype,"maxLength",void 0),s([r({type:Number,json:{write:!0}})],e.prototype,"minLength",void 0),e=s([t("esri.form.elements.inputs.TextInput")],e);const p=e;export{p as default};
