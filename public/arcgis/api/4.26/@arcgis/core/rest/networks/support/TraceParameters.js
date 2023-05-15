/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"../../../chunks/tslib.es6.js";import{JSONSupport as o}from"../../../core/JSONSupport.js";import{property as r}from"../../../core/accessorSupport/decorators/property.js";import"../../../chunks/ensureType.js";import"../../../chunks/typedArrayUtil.js";import{subclass as e}from"../../../core/accessorSupport/decorators/subclass.js";import s from"../../../geometry/SpatialReference.js";import i from"../../../networks/support/TraceConfiguration.js";import{t as p}from"../../../chunks/typeUtils2.js";import n from"./TraceLocation.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/maybe.js";import"../../../chunks/get.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../core/lang.js";import"../../../chunks/metadata.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/object.js";import"../../../chunks/string.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/tracking.js";import"../../../chunks/watch.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../chunks/unitUtils.js";import"../../../chunks/jsonMap.js";import"../../../chunks/Ellipsoid.js";import"../../../chunks/writer.js";let c=class extends o{constructor(t){super(t),this.namedTraceConfigurationGlobalId=null,this.gdbVersion=null,this.traceLocations=[],this.moment=null,this.outSpatialReference=null,this.traceConfiguration=null,this.resultTypes=null,this.traceType=null}};t([r({type:String,json:{read:{source:"traceConfigurationGlobalId"},write:{target:"traceConfigurationGlobalId"}}})],c.prototype,"namedTraceConfigurationGlobalId",void 0),t([r({type:String,json:{write:!0}})],c.prototype,"gdbVersion",void 0),t([r({type:[n],json:{write:!0}})],c.prototype,"traceLocations",void 0),t([r({type:Date,json:{type:Number,write:{writer:(t,o)=>{o.moment=t?t.getTime():null}}}})],c.prototype,"moment",void 0),t([r({type:s,json:{read:!1}})],c.prototype,"outSpatialReference",void 0),t([r({type:i,json:{write:!0}})],c.prototype,"traceConfiguration",void 0),t([r({type:[Object],json:{write:!0}})],c.prototype,"resultTypes",void 0),t([r({type:p.apiValues,json:{type:p.jsonValues,read:p.read,write:p.write}})],c.prototype,"traceType",void 0),c=t([e("esri.rest.networks.support.TraceParameters")],c);const a=c;export{a as default};
