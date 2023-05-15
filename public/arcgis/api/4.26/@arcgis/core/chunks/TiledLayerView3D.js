/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import t from"../core/Error.js";import{a as i,i as r}from"./maybe.js";import{whenOnce as a}from"../core/reactiveUtils.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./typedArrayUtil.js";import{subclass as l}from"../core/accessorSupport/decorators/subclass.js";import{u as n,a as o}from"../views/SceneView.js";import{L as p}from"./terrainUtils.js";const m=m=>{let c=class extends m{get imageFormatIsOpaque(){return!1}get fullExtent(){return this.layer.fullExtent}get isOpaque(){return this.fullOpacity>=1&&this.imageFormatIsOpaque}get dataLevelRange(){const e=this.tileInfo.lods,t=e[0].scale,i=e[e.length-1].scale;return this.levelRangeFromScaleRange(t,i)}get displayLevelRange(){const e=this.tileInfo.lods,t=this.layer.minScale||e[0].scale,i=this.layer.maxScale||e[e.length-1].scale,r=this.levelRangeFromScaleRange(t,i);return this.layer.maxScale&&r.maxLevel++,r}getTileUrl(e,t,i){return this.layer.getTileUrl(e,t,i)}_addTilingSchemeMatchPromise(){if(i(this.fullExtent))return this.addResolvingPromise(Promise.reject(new t("tilingscheme:extent-not-defined","This layer doesn't define a fullExtent.")));const e=this._getTileInfoSupportError(this.tileInfo,this.fullExtent);if(r(e))return this.addResolvingPromise(Promise.reject(e));const s=a((()=>this.view?.basemapTerrain?.tilingSchemeLocked)).then((()=>{const e=this.view.basemapTerrain.tilingScheme,t=this._getTileInfoCompatibilityError(this.tileInfo,e);if(t)throw t}));this.addResolvingPromise(s)}_getTileInfoSupportError(e,i){const r=p(e,i,this.view.spatialReference,this.view.state.viewingMode);if(r){const e={layer:this.layer,error:r};let i;switch(r.name){case"tilingscheme:spatial-reference-mismatch":case"tilingscheme:global-unsupported-spatial-reference":case"tilingscheme:local-unsupported-spatial-reference":i=new t("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",e);break;default:i=new t("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",e)}return i}return null}_getTileInfoCompatibilityError(e,r){return i(e)||!r.compatibleWith(e)?new t("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface"):null}levelRangeFromScaleRange(e,t){const i={minLevel:0,maxLevel:1/0},r=this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.tilingScheme;if(!r)return i;const a=r.levels[0],s=e=>{const t=Math.log(a.scale/e)/Math.LN2;return.5-Math.abs(.5-t%1)<1e-9?Math.round(t):Math.ceil(t)};return null!=e&&e>0&&(i.minLevel=Math.max(0,s(e))),null!=t&&t>0&&(i.maxLevel=Math.max(0,s(t))),i}isUpdating(){return!!(this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.updating)}};return e([s({readOnly:!0})],c.prototype,"imageFormatIsOpaque",null),e([s({readOnly:!0})],c.prototype,"updating",void 0),e([s(n)],c.prototype,"updatingProgress",void 0),e([s(o)],c.prototype,"updatingProgressValue",void 0),e([s()],c.prototype,"fullExtent",null),e([s({readOnly:!0})],c.prototype,"isOpaque",null),e([s({readOnly:!0})],c.prototype,"dataLevelRange",null),e([s({readOnly:!0})],c.prototype,"displayLevelRange",null),e([s()],c.prototype,"layer",void 0),e([s()],c.prototype,"tileInfo",void 0),c=e([l("esri.views.3d.layers.TiledLayerView3D")],c),c};export{m as T};
