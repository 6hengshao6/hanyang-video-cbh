/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{J as r}from"../../chunks/jsonMap.js";import{JSONSupport as o}from"../../core/JSONSupport.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/object.js";import"../../core/lang.js";import"../../chunks/maybe.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";const i=new r({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let p=class extends o{constructor(s){super(s),this.description=null,this.type=null}};s([e({type:String,json:{write:!0}})],p.prototype,"description",void 0),s([e({type:String,json:{read:i.read,write:i.write}})],p.prototype,"type",void 0),p=s([t("esri.rest.support.GPMessage")],p);const c=p;export{c as default};