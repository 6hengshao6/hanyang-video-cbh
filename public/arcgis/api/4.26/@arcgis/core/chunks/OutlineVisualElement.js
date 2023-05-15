/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import e from"../core/Evented.js";import{i as t,t as r,a as s}from"./maybe.js";import{s as i,a,g as n,d as o}from"./vec3.js";import{e as l,c as h}from"./vec4.js";import{f as c,c as d}from"./vec4f32.js";import{projectBuffer as m}from"../geometry/projection.js";import{n as p}from"./aaBoundingBox.js";import{n as _}from"./DoubleArray.js";import{m as u}from"./dehydratedFeatures.js";import{g as f}from"./elevationInfoUtils.js";import{E as g}from"./ElevationInfo.js";import{E as y}from"./EngineVisualElement.js";import{L as O}from"./LaserlineVisualElement.js";import{E as R}from"./ElevationContext.js";import{c as v}from"./line.js";import{a as C,g as j}from"./line2.js";import{R as w}from"./Material.js";import{R as b}from"./RenderGeometry.js";import{V as E}from"./VertexAttribute.js";import{R as P}from"./TriangleMaterial.js";class D extends y{constructor(t){super(t),this._attachmentOrigin=u(0,0,0,null),this._attachmentOriginDirty=!0,this.events=new e,this._geometry=null,this._width=1,this._color=c(1,0,1,1),this._innerWidth=0,this._innerColor=c(1,1,1,1),this._stipplePattern=null,this._stippleOffColor=null,this._falloff=0,this._elevationInfo=null,this._laserlineStyle=null,this._laserlineEnabled=!1,this._renderOccluded=w.OccludeAndTransparentStencil,this._attachmentOrigin.spatialReference=t.view.spatialReference,this._laserline=new O({view:t.view}),this.applyProps(t),this.attached=t.attached??!0}destroy(){this._laserline.destroy(),super.destroy()}createObject3DResourceFactory(e){return{view:e,createResources:e=>this._createObject3DResources(e),destroyResources:e=>this._destroyExternalResources(e),recreateGeometry:(e,t)=>{e.geometries.length=0,this._recreateGeometry(t,e.material,e.geometries)}}}createDrapedResourceFactory(e){return{view:e,createResources:()=>this._createDrapedResources(),destroyResources:e=>this._destroyExternalResources(e),recreateGeometry:e=>{e.geometries=this._createRenderGeometriesDraped(e.material),this._attachmentOriginChanged()}}}get _laserlineAttached(){return this.attached&&this.visible&&t(this._laserlineStyle)&&!this.isDraped&&this.laserlineEnabled}onAttachedChange(e){this._laserline.attached=this._laserlineAttached,e&&this._attachmentOriginChanged()}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.recreateGeometry()}get width(){return this._width}set width(e){e!==this._width&&(this._width=e,this._updateMaterial())}get color(){return this._color}set color(e){l(e,this._color)||(h(this._color,e),this._updateMaterial())}get innerWidth(){return this._innerWidth}set innerWidth(e){e!==this._innerWidth&&(this._innerWidth=e,this._updateMaterial())}get innerColor(){return this._innerColor}set innerColor(e){l(e,this._innerColor)||(h(this._innerColor,e),this._updateMaterial())}get stipplePattern(){return this._stipplePattern}set stipplePattern(e){const r=t(e)!==t(this._stipplePattern);this._stipplePattern=e,r?this.recreate():this._updateMaterial()}get stippleOffColor(){return this._stippleOffColor}set stippleOffColor(e){e&&this._stippleOffColor&&l(e,this._stippleOffColor)||(this._stippleOffColor=e?d(e):null,this._updateMaterial())}get falloff(){return this._falloff}set falloff(e){e!==this._falloff&&(this._falloff=e,this._updateMaterial())}get elevationInfo(){return this._elevationInfo}set elevationInfo(e){this._elevationInfo=e,this.recreateGeometry()}get laserlineStyle(){return this._laserlineStyle}set laserlineStyle(e){this._laserlineStyle=e,this._laserline.attached=this._laserlineAttached,t(e)&&(this._laserline.style=e)}get laserlineEnabled(){return this._laserlineEnabled}set laserlineEnabled(e){this._laserlineEnabled!==e&&(this._laserlineEnabled=e,this._laserline.attached=this._laserlineAttached)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial())}get attachmentOrigin(){if(!this._attachmentOriginDirty)return this._attachmentOrigin;const e=r(this.object3dResources.resources)?.geometries;if(!e||0===e.length)return null;i(G,0,0,0);let t=0;for(const r of e)r.computeAttachmentOrigin(A)&&(a(G,G,A),t++);return 0===t?null:(n(G,G,1/t),this.view.renderCoordsHelper.fromRenderCoords(G,this._attachmentOrigin),this._attachmentOriginDirty=!1,this._attachmentOrigin)}_updateMaterial(){t(this.object3dResources.resources)&&this.object3dResources.resources.material.setParameters(this._materialParameters),t(this.drapedResources.resources)&&this.drapedResources.resources.material.setParameters(this._materialParameters)}get _isClosed(){return t(this.geometry)&&"polygon"===this.geometry.type}get _materialParameters(){return{width:this._width,color:this._color,stippleOffColor:this._stippleOffColor,stipplePattern:this._stipplePattern,stipplePreferContinuous:!1,isClosed:this._isClosed,falloff:this._falloff,innerColor:this._innerColor,innerWidth:this._innerWidth,join:"round",hasPolygonOffset:!0,renderOccluded:this._normalizedRenderOccluded}}get _normalizedRenderOccluded(){return this.isDraped&&this._renderOccluded===w.OccludeAndTransparentStencil?w.OccludeAndTransparent:this._renderOccluded}_recreateGeometry(e,t,r){this._createRenderGeometries(t,r);for(const t of r)e.addGeometry(t);this._attachmentOriginChanged()}_attachmentOriginChanged(){this._attachmentOriginDirty=!0,this.events.emit("attachment-origin-changed")}_destroyExternalResources(e){e.geometries=[],e.material.dispose()}_createObject3DResources(e){const t=new P(this._materialParameters),r=new Array;return this._recreateGeometry(e,t,r),{material:t,geometries:r,forEach:e=>{e(t),r.forEach(e)}}}_createDrapedResources(){const e=new P(this._materialParameters);return{material:e,geometries:this._createRenderGeometriesDraped(e)}}_createRenderGeometriesDraped(e){const t=this.geometry;if(s(t)||s(this.view.basemapTerrain.spatialReference))return[];const r=C(t,this.view.basemapTerrain.spatialReference),i=[];for(const{position:t}of r.lines){const r={overlayInfo:{spatialReference:this.view.basemapTerrain.spatialReference,renderCoordsHelper:this.view.renderCoordsHelper},attributeData:{position:t},removeDuplicateStartEnd:this._isClosed};i.push(new b(v(e,r)))}return i}calculateMapBounds(e){if(s(this.object3dResources.resources))return!1;const t=this.view.renderCoordsHelper;for(const r of this.object3dResources.resources.geometries){const s=r.vertexAttributes.get(E.POSITION),i=_(s.data.length);m(s.data,t.spatialReference,0,i,this.view.spatialReference,0,s.data.length/3),p(e,i)}return!0}_createRenderGeometries(e,t){const r=this.geometry;if(s(r))return;const i=j(r,this.view.elevationProvider,this.view.renderCoordsHelper,R.fromElevationInfo(this.elevationInfo??new g({mode:f(r,null)}))),a=new Array;for(const{position:r,mapPositions:s}of i.lines){const i={mapPositions:s,attributeData:{position:r},removeDuplicateStartEnd:this._isClosed};t.push(v(e,i)),a.push(r)}this._laserline.pathVerticalPlane=a}}const A=o(),G=o();export{D as O};