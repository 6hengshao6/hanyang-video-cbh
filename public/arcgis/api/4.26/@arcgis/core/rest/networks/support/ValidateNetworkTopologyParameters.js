/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"../../../chunks/tslib.es6.js";import"../../../geometry.js";import{JSONSupport as o}from"../../../core/JSONSupport.js";import{property as s}from"../../../core/accessorSupport/decorators/property.js";import"../../../chunks/ensureType.js";import"../../../chunks/typedArrayUtil.js";import{subclass as r}from"../../../core/accessorSupport/decorators/subclass.js";import{v as e}from"../../../chunks/typeUtils2.js";import i from"../../../geometry/Extent.js";import"../../../geometry/Geometry.js";import"../../../chunks/reader.js";import"../../../geometry/SpatialReference.js";import"../../../core/lang.js";import"../../../chunks/maybe.js";import"../../../chunks/unitUtils.js";import"../../../chunks/jsonMap.js";import"../../../chunks/object.js";import"../../../chunks/Ellipsoid.js";import"../../../chunks/string.js";import"../../../chunks/writer.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/get.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/metadata.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/tracking.js";import"../../../chunks/watch.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../geometry/Multipoint.js";import"../../../geometry/Point.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../chunks/zmUtils.js";import"../../../geometry/Polygon.js";import"../../../chunks/extentUtils.js";import"../../../chunks/aaBoundingRect.js";import"../../../chunks/mathUtils.js";import"../../../chunks/vec3.js";import"../../../chunks/common.js";import"../../../chunks/vec4.js";import"../../../geometry/Polyline.js";import"../../../chunks/typeUtils.js";import"../../../geometry/support/jsonUtils.js";let p=class extends o{constructor(t){super(t),this.gdbVersion=null,this.sessionID=null,this.validationType=null,this.validateArea=null,this.validationSet=null}};t([s({type:String,json:{write:!0}})],p.prototype,"gdbVersion",void 0),t([s({type:String,json:{write:!0}})],p.prototype,"sessionID",void 0),t([s({type:e.apiValues,json:{type:e.jsonValues,read:e.read,write:e.write}})],p.prototype,"validationType",void 0),t([s({type:i,json:{write:!0}})],p.prototype,"validateArea",void 0),t([s({type:[Object],json:{write:!0}})],p.prototype,"validationSet",void 0),p=t([r("esri.rest.networks.support.ValidateNetworkTopologyParameters")],p);const n=p;export{n as default};
