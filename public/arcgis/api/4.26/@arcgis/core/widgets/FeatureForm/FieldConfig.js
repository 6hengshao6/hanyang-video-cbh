/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import t from"../../core/Accessor.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";import{F as r}from"../../chunks/Format.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../core/lang.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/date.js";import"../../chunks/jsonMap.js";import"../../core/JSONSupport.js";let e=class extends t{constructor(o){super(o),this.description=null,this.domain=null,this.editable=!0,this.format=null,this.hint=null,this.includeTime=!0,this.label=null,this.maxLength=-1,this.minLength=-1,this.name=null,this.noValueOptionLabel=null,this.offValue=null,this.onValue=null,this.required=!1,this.requiredExpression=null,this.showNoValueOption=!1,this.visibilityExpression=null}};o([i()],e.prototype,"description",void 0),o([i()],e.prototype,"domain",void 0),o([i()],e.prototype,"editable",void 0),o([i({type:r})],e.prototype,"format",void 0),o([i()],e.prototype,"hint",void 0),o([i()],e.prototype,"includeTime",void 0),o([i()],e.prototype,"label",void 0),o([i()],e.prototype,"maxLength",void 0),o([i()],e.prototype,"minLength",void 0),o([i()],e.prototype,"name",void 0),o([i()],e.prototype,"noValueOptionLabel",void 0),o([i()],e.prototype,"offValue",void 0),o([i()],e.prototype,"onValue",void 0),o([i()],e.prototype,"required",void 0),o([i()],e.prototype,"requiredExpression",void 0),o([i()],e.prototype,"showNoValueOption",void 0),o([i()],e.prototype,"visibilityExpression",void 0),e=o([s("esri.widgets.FeatureForm.FieldConfig")],e);const p=e;export{p as default};