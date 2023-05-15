/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import"../../geometry.js";import{JSONSupport as o}from"../../core/JSONSupport.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import{e}from"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";import i from"../../geometry/SpatialReference.js";import"../../geometry/Extent.js";import"../../chunks/maybe.js";import"../../chunks/string.js";import"../../chunks/object.js";import"../../core/lang.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/Ellipsoid.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/vec4.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";let p=class extends o{constructor(t){super(t),this.contains=!0,this.dynamicLayerInfos=null,this.gdbVersion=null,this.geometryPrecision=null,this.layerDefinitions=null,this.layerIds=null,this.maxAllowableOffset=null,this.outSpatialReference=null,this.returnGeometry=!1,this.searchFields=null,this.searchText=null}};t([r({type:Boolean,json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"contains",void 0),t([r({type:[Object],json:{read:{source:"dynamicLayers"},write:{target:"dynamicLayers"}}})],p.prototype,"dynamicLayerInfos",void 0),t([r({type:String,json:{write:!0}})],p.prototype,"gdbVersion",void 0),t([r({type:Number,json:{write:!0}})],p.prototype,"geometryPrecision",void 0),t([r({type:[Object],json:{write:!0}})],p.prototype,"layerDefinitions",void 0),t([r({type:[Number],json:{write:!0}})],p.prototype,"layerIds",void 0),t([r({type:Number,json:{write:!0}})],p.prototype,"maxAllowableOffset",void 0),t([r({type:i,json:{read:{source:"outSR"},write:{target:"outSR"}}})],p.prototype,"outSpatialReference",void 0),t([r({type:Boolean,json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"returnGeometry",void 0),t([r({type:[String],json:{write:!0}})],p.prototype,"searchFields",void 0),t([r({type:String,json:{write:!0}})],p.prototype,"searchText",void 0),p=t([s("esri.rest.support.FindParameters")],p),p.from=e(p);const n=p;export{n as default};