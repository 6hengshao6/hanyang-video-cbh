/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import e from"../core/Accessor.js";import{i,t as o,u as r}from"./maybe.js";import{throwIfAborted as s,whenOrAbort as p}from"../core/promiseUtils.js";import{watch as n,initial as a,on as l}from"../core/reactiveUtils.js";import{property as m}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./typedArrayUtil.js";import{subclass as y}from"../core/accessorSupport/decorators/subclass.js";import{k as g}from"./elevationInfoUtils.js";import{m as c,k as u}from"./snappingUtils.js";import{c as j,m as d}from"./queryEngineUtils.js";import{g as h,a as S,b as v}from"./symbologySnappingCandidates.js";import"../core/Handles.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"../core/lang.js";import"./metadata.js";import"./Logger.js";import"../config.js";import"./object.js";import"./string.js";import"./ArrayPool.js";import"./tracking.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"../core/Error.js";import"./unitConversionUtils.js";import"./lengthUtils.js";import"./unitUtils.js";import"./jsonMap.js";import"./Ellipsoid.js";import"./vec3.js";import"./common.js";import"./dehydratedFeatures.js";import"./byteSizeEstimations.js";import"../geometry/SpatialReference.js";import"../core/JSONSupport.js";import"./writer.js";import"./aaBoundingBox.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"./reader.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec4.js";import"./quantizationUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../layers/support/Field.js";import"./enumeration.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"./InputManager.js";import"./Queue.js";import"./PropertiesPool.js";import"./ObservableValue.js";import"./SimpleObservable.js";import"./keybindings.js";import"./DrapedEdgeSnappingCandidate.js";import"./EdgeSnappingCandidate.js";import"./vec2.js";import"./vec2f64.js";import"./geometry2dUtils.js";import"./LineSnappingHint.js";import"./VertexSnappingCandidate.js";import"./PointSnappingHint.js";import"./LRUCache.js";import"./MemCache.js";let f=class extends e{get availability(){return 1}get updating(){return this.layerSource.updating}get _snappingElevationAligner(){const{view:t}=this,{layer:e}=this.layerSource,o=i(t)&&"3d"===t.type;return o&&"subtype-group"!==e.type?h(o,{elevationInfo:e.elevationInfo,alignPointsInFeatures:async(i,o)=>(await p(t.whenLayerView(e),o)).elevationAlignPointsInFeatures(i,o),spatialReference:t.spatialReference}):h()}get _snappingElevationFilter(){const{view:t}=this,e=i(t)&&"3d"===t.type&&"subtype-group"!==this.layerSource.layer.type;return S(e)}get _symbologySnappingFetcher(){const{view:t}=this,{layer:e}=this.layerSource;return i(t)&&"3d"===t.type&&"subtype-group"!==e.type?v(this._symbologySnappingSupported,(async(i,o)=>{const r=await t.whenLayerView(e);return s(o),r.queryForSymbologySnapping({candidates:i,spatialReference:t.spatialReference},o)})):v()}get _symbologySnappingSupported(){return i(this._layerView3D)&&this._layerView3D.symbologySnappingSupported}initialize(){const{view:t}=this,{layer:e}=this.layerSource;i(t)&&"3d"===t.type&&"subtype-group"!==e.type&&(t.whenLayerView(e).then((t=>this._layerView3D=t)),this.addHandles([t.elevationProvider.on("elevation-change",(({context:t})=>{const{elevationInfo:i}=e;g(t,i)&&this._snappingElevationAligner.notifyElevationSourceChange()})),n((()=>e.elevationInfo),(()=>this._snappingElevationAligner.notifyElevationSourceChange()),a),n((()=>i(this._layerView3D)?this._layerView3D.processor?.renderer:null),(()=>this._symbologySnappingFetcher.notifySymbologyChange()),a),l((()=>o(this._layerView3D)?.layer),["edits","apply-edits","graphic-update"],(()=>this._symbologySnappingFetcher.notifySymbologyChange()))]))}constructor(t){super(t),this.view=null,this._layerView3D=null}refresh(){}async fetchCandidates(t,e){const{layer:i}=this.layerSource,o=i.source;if(!o?.querySnapping)return[];const p=c(i),n=u(t,r(this.view)?.type??"2d",p),a=await o.querySnapping(n,{signal:e});s(e);const l=await this._snappingElevationAligner.alignCandidates(a.candidates,e);s(e);const m=await this._symbologySnappingFetcher.fetch(l,e);s(e);const y=0===m.length?l:[...l,...m],g=this._snappingElevationFilter.filter(n,y),d=this._getGroundElevation;return g.map((t=>j(t,d)))}get _getGroundElevation(){return d(this.view)}};t([m({constructOnly:!0})],f.prototype,"layerSource",void 0),t([m({constructOnly:!0})],f.prototype,"view",void 0),t([m()],f.prototype,"_snappingElevationAligner",null),t([m()],f.prototype,"_snappingElevationFilter",null),t([m()],f.prototype,"_symbologySnappingFetcher",null),t([m()],f.prototype,"_layerView3D",void 0),t([m()],f.prototype,"_symbologySnappingSupported",null),t([m()],f.prototype,"_getGroundElevation",null),f=t([y("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],f);export{f as FeatureCollectionSnappingSource};