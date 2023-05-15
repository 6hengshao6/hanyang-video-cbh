/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import e from"../core/Error.js";import t from"../core/Evented.js";import{L as s}from"./Logger.js";import{i as r,a as o}from"./maybe.js";import{c as i,g as a}from"./aaBoundingBox.js";import{c as d}from"./aaBoundingRect.js";import{g as n}from"./featureConversionUtils.js";import{B as h}from"./BoundsStore.js";import{o as u}from"./optimizedFeatureQueryEngineAdapter.js";import{c as m}from"./utils9.js";const f=i();class g{constructor(e){this.geometryInfo=e,this._boundsStore=new h,this._featuresById=new Map,this._markedIds=new Set,this.events=new t,this.featureAdapter=u}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{r(t.geometry)&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(e){if(o(this.fullBounds))return null;const[t,s,r,i]=this.fullBounds;return{xmin:t,ymin:s,xmax:r,ymax:i,spatialReference:m(e)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t){for(const s of e){const e=this._boundsStore.get(s.objectId);e&&t(a(f,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach((t=>e(t)))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach(((t,s)=>{this._markedIds.has(s)||(e=!0,this._remove(t))})),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(t){if(!t)return;const i=t.objectId;if(null==i)return void s.getLogger("esri.layers.graphics.data.FeatureStore").error(new e("featurestore:invalid-feature","feature id is missing",{feature:t}));const a=this._featuresById.get(i);let h;if(this._markedIds.add(i),a?(t.displayId=a.displayId,h=this._boundsStore.get(i),this._boundsStore.delete(i)):r(this.onFeatureAdd)&&this.onFeatureAdd(t),o(t.geometry)||!t.geometry.coords||!t.geometry.coords.length)return this._boundsStore.set(i,null),void this._featuresById.set(i,t);h=n(r(h)?h:d(),t.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),r(h)&&this._boundsStore.set(i,h),this._featuresById.set(i,t)}_remove(e){r(this.onFeatureRemove)&&this.onFeatureRemove(e);const t=e.objectId;return this._markedIds.delete(t),this._boundsStore.delete(t),this._featuresById.delete(t),e}}export{g as F};