/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import{a as o,e as s}from"./maybe.js";import{throwIfAborted as e}from"../core/promiseUtils.js";import"./Logger.js";import"./ensureType.js";import"./typedArrayUtil.js";import"../core/Error.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import{w as r,D as n,a as p,d as m,k as a}from"./vec3.js";import{c,f as d,i as j}from"./lineSegment.js";import{c as u,d as l,m as g}from"./sphere.js";import{S as h}from"./QueryEngineResult.js";import{O as f}from"./Octree.js";import{e as y}from"./edgeProcessing.js";import"../core/lang.js";import"./object.js";import"../config.js";import"./string.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./tracking.js";import"./common.js";import"./mathUtils.js";import"./vec4.js";import"./ray.js";import"./nextTick.js";import"./byteSizeEstimations.js";import"./mat3f64.js";import"./mat4f64.js";import"./quatf64.js";import"./vec2f64.js";import"./vec4f64.js";import"./mat4.js";import"./vector.js";import"../geometry/Polygon.js";import"../core/accessorSupport/decorators/property.js";import"./get.js";import"./writer.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./ArrayPool.js";import"./watch.js";import"../core/scheduling.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"./Ellipsoid.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"./zmUtils.js";import"./quantizationUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polyline.js";import"./ItemCache.js";import"./MemCache.js";import"../core/sql/WhereClause.js";import"./executionError.js";import"./datetime.js";import"./_commonjsHelpers.js";import"./utils10.js";import"./generateRendererUtils.js";import"./enumeration.js";import"./projectionSupport.js";import"../geometry/projection.js";import"./SimpleObservable.js";import"./pe.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./json.js";import"./SnappingCandidate.js";import"./utils9.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"../geometry.js";import"./typeUtils.js";import"./utils4.js";import"./utils5.js";import"./featureConversionUtils.js";import"./aaBoundingBox.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"../layers/support/fieldUtils.js";import"./arcadeOnDemand.js";import"./frustum.js";import"./plane.js";import"./mathUtils2.js";import"./Util2.js";import"./deduplicate.js";import"./Indices.js";import"./InterleavedLayout.js";import"./BufferView.js";import"./vec2.js";import"./types.js";import"./VertexAttribute.js";import"./glUtil.js";import"./enums3.js";import"./VertexElementDescriptor.js";function _(t,o,s){const e=u(),i=l(e);return r(i,i,t,.5),r(i,i,o,.5),e[3]=n(i,t),p(i,i,s),e}let b=class{constructor(){this._idToComponent=new Map,this._components=new f((t=>t.bounds)),this._edges=new f((t=>t.bounds)),this._tmpLineSegment=c(),this._tmpP1=m(),this._tmpP2=m(),this._tmpP3=m(),this.remoteClient=null}async fetchCandidates(t,o){await Promise.resolve(),e(o),await this._ensureEdgeLocations(t,o);const s=[];return this._edges.forEachNeighbor((o=>(this._addCandidates(t,o,s),s.length<1e3)),t.bounds),{result:{candidates:s}}}async _ensureEdgeLocations(t,e){const i=[];if(this._components.forEachNeighbor((t=>{if(o(t.info)){const{id:o,uid:s}=t;i.push({id:o,uid:s})}return!0}),t.bounds),!i.length)return;const r={components:i},n=await this.remoteClient.invoke("fetchAllEdgeLocations",r,s(e,{}));for(const t of n.components)this._setFetchEdgeLocations(t)}async add(t){const o=new E(t.id,t.bounds);return this._idToComponent.set(o.id,o),this._components.add([o]),{result:{}}}async remove(t){const o=this._idToComponent.get(t.id);if(o){const t=[];this._edges.forEachNeighbor((s=>(s.component===o&&t.push(s),!0)),o.bounds),this._edges.remove(t),this._components.remove([o]),this._idToComponent.delete(o.id)}return{result:{}}}_setFetchEdgeLocations(t){const s=this._idToComponent.get(t.id);if(o(s)||t.uid!==s.uid)return;const e=y.createView(t.locations),i=new Array(e.count),r=m(),n=m();for(let o=0;o<e.count;o++){e.position0.getVec(o,r),e.position1.getVec(o,n);const p=_(r,n,t.origin),m=new S(s,o,p);i[o]=m}this._edges.add(i);const{objectIds:p,origin:a}=t;s.info={locations:e,objectIds:p,origin:a}}_addCandidates(t,o,s){const{info:e}=o.component,{origin:i,objectIds:r}=e,n=e.locations,m=n.position0.getVec(o.index,this._tmpP1),a=n.position1.getVec(o.index,this._tmpP2);p(m,m,i),p(a,a,i);const c=r[n.componentIndex.get(o.index)];this._addEdgeCandidate(t,c,m,a,s),this._addVertexCandidate(t,c,m,s),this._addVertexCandidate(t,c,a,s)}_addEdgeCandidate(t,o,s,e,i){if(!(t.types&h.EDGE))return;const r=l(t.bounds),p=d(s,e,this._tmpLineSegment),m=j(p,r,this._tmpP3);g(t.bounds,m)&&i.push({type:"edge",objectId:o,target:a(m),distance:n(r,m),start:a(s),end:a(e)})}_addVertexCandidate(t,o,s,e){if(!(t.types&h.VERTEX))return;const i=l(t.bounds);g(t.bounds,s)&&e.push({type:"vertex",objectId:o,target:a(s),distance:n(i,s)})}};b=t([i("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],b);const C=b;class E{constructor(t,o){this.id=t,this.bounds=o,this.info=null,this.uid=++E.uid}}E.uid=0;class S{constructor(t,o,s){this.component=t,this.index=o,this.bounds=s}}export{C as default};
