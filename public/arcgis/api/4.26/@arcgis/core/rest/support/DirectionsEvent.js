/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import"../../geometry.js";import{JSONSupport as t}from"../../core/JSONSupport.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{r as o}from"../../chunks/reader.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import{a as i}from"../../chunks/utils11.js";import{e as p}from"../../chunks/enumeration.js";import{x as m}from"../../chunks/networkEnums.js";import n from"../../geometry/Point.js";import"../../geometry/Extent.js";import"../../chunks/maybe.js";import"../../chunks/string.js";import"../../chunks/object.js";import"../../core/lang.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/Ellipsoid.js";import"../../chunks/writer.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../geometry/support/webMercatorUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/vec4.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";let c=class extends t{constructor(r){super(r)}};r([s({json:{read:{source:"string"}}})],c.prototype,"text",void 0),r([p(m,{name:"stringType"})],c.prototype,"type",void 0),c=r([e("esri.rest.support.DirectionsString")],c);const u=c;let j=class extends t{constructor(r){super(r),this.arriveTime=null,this.arriveTimeOffset=null,this.geometry=null,this.strings=null}readArriveTimeOffset(r,t){return i(t.ETA,t.arriveTimeUTC)}readGeometry(r,t){return n.fromJSON(t.point)}};r([s({type:Date,json:{read:{source:"arriveTimeUTC"}}})],j.prototype,"arriveTime",void 0),r([s()],j.prototype,"arriveTimeOffset",void 0),r([o("arriveTimeOffset",["arriveTimeUTC","ETA"])],j.prototype,"readArriveTimeOffset",null),r([s({type:n})],j.prototype,"geometry",void 0),r([o("geometry",["point"])],j.prototype,"readGeometry",null),r([s({type:[u]})],j.prototype,"strings",void 0),j=r([e("esri.rest.support.DirectionsEvent")],j);const a=j;export{u as D,a as default};
