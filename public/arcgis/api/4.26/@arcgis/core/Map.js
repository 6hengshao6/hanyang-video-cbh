/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as r}from"./chunks/tslib.es6.js";import s from"./Basemap.js";import t from"./Ground.js";import o from"./core/Accessor.js";import{C as e}from"./chunks/CollectionFlattener.js";import i from"./core/Evented.js";import{a}from"./chunks/maybe.js";import{property as p}from"./core/accessorSupport/decorators/property.js";import{cast as l}from"./core/accessorSupport/decorators/cast.js";import"./chunks/typedArrayUtil.js";import{subclass as n}from"./core/accessorSupport/decorators/subclass.js";import{i as m}from"./chunks/editableLayers.js";import{c,d as u,e as j}from"./chunks/basemapUtils.js";import{c as h}from"./chunks/collectionUtils2.js";import{L as y}from"./chunks/Logger.js";import{e as d}from"./chunks/ensureType.js";import{LayersMixin as k}from"./support/LayersMixin.js";import{TablesMixin as g}from"./support/TablesMixin.js";import"./core/Collection.js";import"./chunks/ArrayPool.js";import"./core/lang.js";import"./core/scheduling.js";import"./chunks/nextTick.js";import"./core/promiseUtils.js";import"./core/Error.js";import"./chunks/object.js";import"./config.js";import"./chunks/string.js";import"./chunks/tracking.js";import"./chunks/utils.js";import"./chunks/handleUtils.js";import"./chunks/shared.js";import"./chunks/SimpleObservable.js";import"./core/Handles.js";import"./chunks/get.js";import"./chunks/metadata.js";import"./chunks/watch.js";import"./chunks/collectionUtils.js";import"./core/JSONSupport.js";import"./core/Loadable.js";import"./core/Promise.js";import"./chunks/loadAll.js";import"./chunks/asyncUtils.js";import"./core/urlUtils.js";import"./chunks/writer.js";import"./geometry/SpatialReference.js";import"./chunks/unitUtils.js";import"./chunks/jsonMap.js";import"./chunks/Ellipsoid.js";import"./portal/Portal.js";import"./kernel.js";import"./request.js";import"./chunks/reader.js";import"./geometry/Extent.js";import"./geometry/Geometry.js";import"./geometry/Point.js";import"./geometry/support/webMercatorUtils.js";import"./chunks/locale.js";import"./portal/PortalQueryParams.js";import"./portal/PortalQueryResult.js";import"./portal/PortalUser.js";import"./portal/PortalFolder.js";import"./portal/PortalGroup.js";import"./portal/PortalItem.js";import"./chunks/assets.js";import"./portal/PortalItemResource.js";import"./portal/PortalRating.js";import"./chunks/messages.js";import"./chunks/writeUtils.js";import"./chunks/layerUtils.js";import"./Color.js";import"./chunks/colorUtils.js";import"./chunks/mathUtils.js";import"./chunks/vec3.js";import"./chunks/common.js";import"./chunks/vec4.js";import"./chunks/compilerUtils.js";import"./chunks/enumeration.js";import"./chunks/opacityUtils.js";import"./layers/Layer.js";import"./geometry.js";import"./geometry/Multipoint.js";import"./chunks/zmUtils.js";import"./geometry/Polygon.js";import"./chunks/extentUtils.js";import"./chunks/aaBoundingRect.js";import"./geometry/Polyline.js";import"./chunks/typeUtils.js";import"./geometry/support/jsonUtils.js";import"./core/Identifiable.js";const b={"world-elevation":{id:"worldElevation",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"},"world-topobathymetry":{id:"worldTopoBathymetry",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/TopoBathy3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"}};let f=class extends(g(k(i.EventedMixin(o)))){constructor(r){super(r),this.allLayers=new e({getCollections:()=>[this.basemap?.baseLayers,this.ground?.layers,this.layers,this.basemap?.referenceLayers],getChildrenFunction:r=>"layers"in r?r.layers:null}),this.allTables=h(this),this.basemap=null,this.editableLayers=new e({getCollections:()=>[this.allLayers],itemFilterFunction:m}),this.ground=new t,this._basemapCache=c()}destroy(){this.allLayers.destroy(),this.allTables.destroy(),this.editableLayers.destroy(),this.ground?.destroy(),this.basemap?.destroy(),u(this._basemapCache),this._basemapCache=null}castBasemap(r){return j(r,this._basemapCache)}castGround(r){const s=function(r){let s=null;return"string"==typeof r?r in b?s=new t({resourceInfo:{data:{layers:[b[r]]}}}):y.getLogger("esri.support.groundUtils").warn(`Unable to find ground definition for: ${r}. Try "world-elevation"`):s=d(t,r),s}(r);return a(s)?this._get("ground"):s}findLayerById(r){return this.allLayers.find((s=>s.id===r))}findTableById(r){return this.allTables.find((s=>s.id===r))}};r([p({readOnly:!0,dependsOn:[]})],f.prototype,"allLayers",void 0),r([p({readOnly:!0})],f.prototype,"allTables",void 0),r([p({type:s})],f.prototype,"basemap",void 0),r([l("basemap")],f.prototype,"castBasemap",null),r([p({readOnly:!0})],f.prototype,"editableLayers",void 0),r([p({type:t,nonNullable:!0})],f.prototype,"ground",void 0),r([l("ground")],f.prototype,"castGround",null),f=r([n("esri.Map")],f);const v=f;export{v as default};
