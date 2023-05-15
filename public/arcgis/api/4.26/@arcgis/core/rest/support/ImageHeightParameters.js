/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import"../../geometry.js";import{clone as t}from"../../core/lang.js";import{m as o}from"../../chunks/unitUtils.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";import{w as i}from"../../chunks/writer.js";import{getJsonType as p}from"../../geometry/support/jsonUtils.js";import{m,B as n}from"../../chunks/BaseImageMeasureParameters.js";import a from"../../geometry/Point.js";import"../../geometry/Extent.js";import"../../chunks/maybe.js";import"../../chunks/string.js";import"../../chunks/object.js";import"../../chunks/typedArrayUtil.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/jsonMap.js";import"../../chunks/Ellipsoid.js";import"../../geometry/support/webMercatorUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/vec4.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../layers/support/MosaicRule.js";import"../../layers/support/DimensionalDefinition.js";import"../../layers/support/RasterFunction.js";import"../../chunks/enumeration.js";var c;let u=c=class extends n{constructor(){super(...arguments),this.type="height",this.fromGeometry=null,this.toGeometry=null,this.operationType="base-and-top",this.linearUnit="meters"}writeFromGeometry(r,t,o){null!=r&&(t.geometryType=p(r),t[o]=r.toJSON())}get measureOperation(){return this.operationType}clone(){return new c(t({fromGeometry:this.fromGeometry,toGeometry:this.toGeometry,operationType:this.operationType,linearUnit:this.linearUnit,mosaicRule:this.mosaicRule,renderingRule:this.renderingRule,pixelSize:this.pixelSize,raster:this.raster}))}};r([e({type:a,json:{read:!0}})],u.prototype,"fromGeometry",void 0),r([i("fromGeometry")],u.prototype,"writeFromGeometry",null),r([e({type:a,json:{read:!0,write:!0}})],u.prototype,"toGeometry",void 0),r([e({type:m.apiValues,json:{write:m.write}})],u.prototype,"measureOperation",null),r([e({json:{read:!0}})],u.prototype,"operationType",void 0),r([e({type:String,json:{read:o.read,write:o.write}})],u.prototype,"linearUnit",void 0),u=c=r([s("esri.rest.support.ImageHeightParameters")],u);const j=u;export{j as default};
