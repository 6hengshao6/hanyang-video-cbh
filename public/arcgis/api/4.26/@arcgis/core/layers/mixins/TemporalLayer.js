/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import s from"../../TimeExtent.js";import e,{t as r}from"../../TimeInterval.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{r as i}from"../../chunks/reader.js";import{subclass as m}from"../../core/accessorSupport/decorators/subclass.js";import{fixTimeInfoFields as p}from"../support/fieldUtils.js";import n from"../support/TimeInfo.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../core/lang.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/timeUtils.js";import"../../chunks/writer.js";import"../../core/Clonable.js";import"../../chunks/enumeration.js";import"../../chunks/jsonMap.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/vec4.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/TimeReference.js";import"../../chunks/datetime.js";const c=c=>{let u=class extends c{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0}readOffset(t,s){const o=s.timeInfo.exportOptions;if(!o)return null;const i=o.timeOffset,m=r.fromJSON(o.timeOffsetUnits);return i&&m?new e({value:i,unit:m}):null}set timeInfo(t){p(t,this.fieldsIndex),this._set("timeInfo",t)}};return t([o({type:s,json:{write:!1}})],u.prototype,"timeExtent",void 0),t([o({type:e})],u.prototype,"timeOffset",void 0),t([i("service","timeOffset",["timeInfo.exportOptions"])],u.prototype,"readOffset",null),t([o({value:null,type:n,json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],u.prototype,"timeInfo",null),t([o({type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation"},origins:{"web-scene":{read:!1,write:!1}}}})],u.prototype,"useViewTime",void 0),u=t([m("esri.layers.mixins.TemporalLayer")],u),u};export{c as TemporalLayer};