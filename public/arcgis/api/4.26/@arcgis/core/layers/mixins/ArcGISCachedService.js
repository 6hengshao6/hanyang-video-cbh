/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import"../../geometry.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{r as e}from"../../chunks/reader.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";import{s as o,T as i}from"../../chunks/TilemapCache.js";import p from"../../geometry/SpatialReference.js";import"../../geometry/Extent.js";import"../../chunks/maybe.js";import"../../chunks/string.js";import"../../chunks/object.js";import"../../core/lang.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/Ellipsoid.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/vec4.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../support/TileInfo.js";import"../support/LOD.js";import"../../chunks/TileKey.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/byteSizeEstimations.js";import"../../core/HandleOwner.js";import"../../chunks/WatchUpdatingTracking.js";import"../../core/reactiveUtils.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";const c=c=>{let m=class extends c{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}readMinScale(t,r){return null!=r.minLOD&&null!=r.maxLOD?t:0}readMaxScale(t,r){return null!=r.minLOD&&null!=r.maxLOD?t:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(t,r){return r.capabilities&&r.capabilities.includes("Tilemap")?new i({layer:this}):null}destroy(){this.tilemapCache?.destroy()}};return t([r({json:{read:{source:"copyrightText"}}})],m.prototype,"copyright",void 0),t([r()],m.prototype,"minScale",void 0),t([e("service","minScale")],m.prototype,"readMinScale",null),t([r()],m.prototype,"maxScale",void 0),t([e("service","maxScale")],m.prototype,"readMaxScale",null),t([r({type:p})],m.prototype,"spatialReference",void 0),t([r({readOnly:!0})],m.prototype,"supportsBlankTile",null),t([r(o)],m.prototype,"tileInfo",void 0),t([r()],m.prototype,"tilemapCache",void 0),t([e("service","tilemapCache",["capabilities"])],m.prototype,"readTilemapCache",null),t([r()],m.prototype,"version",void 0),m=t([s("esri.layers.mixins.ArcGISCachedService")],m),m};export{c as ArcGISCachedService};
