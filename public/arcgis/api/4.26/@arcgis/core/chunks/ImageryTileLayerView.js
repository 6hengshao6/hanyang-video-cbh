/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import t from"../Graphic.js";import r from"../core/Error.js";import{u as i,a as s,i as a}from"./maybe.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./typedArrayUtil.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import{g as l}from"./commonProperties2.js";import{i as p,c as u}from"./rasterProjectionHelper.js";import{a as c}from"./popupUtils.js";const m=m=>{let f=class extends m{constructor(){super(...arguments),this._rasterFieldPrefix="Raster.",this.layer=null,this.view=null,this.tileInfo=null}get fullExtent(){return this._getfullExtent()}_getfullExtent(){return this.projectFullExtent(this.view.spatialReference)}get hasTilingEffects(){return this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment}get datumTransformation(){return p(i(this.layer.fullExtent),this.view.spatialReference,!0)}supportsSpatialReference(e){return!!this.projectFullExtent(e)}projectFullExtent(e){const t=i(this.layer.fullExtent),r=p(t,e,!1);return u(t,e,r)}async fetchPopupFeatures(e,i){const{layer:o}=this;if(!e)throw new r("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:o});const{popupEnabled:n}=o,l=c(o,i);if(!n||s(l))throw new r("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:n,popupTemplate:l});const p=[],{value:u,magdirValue:m}=await o.identify(e,{timeExtent:this.timeExtent});let f="";if(u&&u.length){f="imagery-tile"===o.type&&o.hasStandardTime()&&null!=u[0]?u.map((e=>o.getStandardTimeValue(e))).join(", "):u.join(", ");const e={ObjectId:0};e["Raster.ServicePixelValue"]=f;const r=o.rasterInfo.attributeTable;if(a(r)){const{fields:t,features:i}=r,s=t.find((({name:e})=>"value"===e.toLowerCase())),a=s?i.find((e=>String(e.attributes[s.name])===f)):null;if(a)for(const t in a.attributes)a.attributes.hasOwnProperty(t)&&(e[this._rasterFieldPrefix+t]=a.attributes[t])}const i=o.rasterInfo.dataType;"vector-magdir"!==i&&"vector-uv"!==i||(e["Raster.Magnitude"]=m?.[0],e["Raster.Direction"]=m?.[1]);const s=new t(this.fullExtent.clone(),null,e);s.layer=o,s.sourceLayer=s.layer,p.push(s)}return p}};return e([o()],f.prototype,"layer",void 0),e([o(l)],f.prototype,"timeExtent",void 0),e([o()],f.prototype,"view",void 0),e([o()],f.prototype,"fullExtent",null),e([o()],f.prototype,"tileInfo",void 0),e([o({readOnly:!0})],f.prototype,"hasTilingEffects",null),e([o()],f.prototype,"datumTransformation",null),f=e([n("esri.views.layers.ImageryTileLayerView")],f),f};export{m as I};
