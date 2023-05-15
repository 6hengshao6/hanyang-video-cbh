/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"../../../chunks/tslib.es6.js";import{JSONSupport as o}from"../../../core/JSONSupport.js";import{property as r}from"../../../core/accessorSupport/decorators/property.js";import"../../../chunks/ensureType.js";import"../../../chunks/typedArrayUtil.js";import{subclass as s}from"../../../core/accessorSupport/decorators/subclass.js";import e from"./AggregatedGeometry.js";import i from"./FunctionResult.js";import n from"./NetworkElement.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/maybe.js";import"../../../chunks/get.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../core/lang.js";import"../../../chunks/metadata.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/object.js";import"../../../chunks/string.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/tracking.js";import"../../../chunks/watch.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../geometry/Multipoint.js";import"../../../chunks/writer.js";import"../../../geometry/Extent.js";import"../../../geometry/Geometry.js";import"../../../chunks/reader.js";import"../../../geometry/SpatialReference.js";import"../../../chunks/unitUtils.js";import"../../../chunks/jsonMap.js";import"../../../chunks/Ellipsoid.js";import"../../../geometry/Point.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../chunks/zmUtils.js";import"../../../geometry/Polygon.js";import"../../../chunks/extentUtils.js";import"../../../chunks/aaBoundingRect.js";import"../../../chunks/mathUtils.js";import"../../../chunks/vec3.js";import"../../../chunks/common.js";import"../../../chunks/vec4.js";import"../../../geometry/Polyline.js";let p=class extends o{constructor(t){super(t),this.aggregatedGeometry=null,this.elements=null,this.globalFunctionResults=null,this.kFeaturesForKNNFound=!1,this.startingPointsIgnored=!1,this.warnings=null}};t([r({type:e,json:{write:!0},readOnly:!0})],p.prototype,"aggregatedGeometry",void 0),t([r({type:[n],json:{write:!0},readOnly:!0})],p.prototype,"elements",void 0),t([r({type:[i],json:{write:!0},readOnly:!0})],p.prototype,"globalFunctionResults",void 0),t([r({type:Boolean,json:{write:!0},readOnly:!0})],p.prototype,"kFeaturesForKNNFound",void 0),t([r({type:Boolean,json:{write:!0},readOnly:!0})],p.prototype,"startingPointsIgnored",void 0),t([r({type:[String],json:{write:!0},readOnly:!0})],p.prototype,"warnings",void 0),p=t([s("esri.rest.networks.support.TraceResult")],p);const m=p;export{m as default};
