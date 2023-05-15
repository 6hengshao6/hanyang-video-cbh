// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/HandleOwner ../../../../../core/accessorSupport/decorators/property ../../../../../core/accessorSupport/ensureType ../../../../../core/arrayUtils ../../../../../core/has ../../../../../core/accessorSupport/decorators/subclass ../../../../../chunks/vec3f64 ../../../../../core/workers/WorkerHandle ../../../../../chunks/sphere ../../SnappingPoint ../../candidates/EdgeSnappingCandidate ../../candidates/VertexSnappingCandidate".split(" "),
function(e,k,m,u,p,D,E,F,v,r,w,x,y,z,A){e.SceneLayerSnappingSourceWorkerHandle=function(c){function f(a){a=q.call(this,a);a.availability=0;a._ids=new Set;return a}k._inherits(f,c);var q=k._createSuper(f);c=f.prototype;c.destroy=function(){this._workerHandle.destroy();this._workerHandle=null};c.initialize=function(){this._workerHandle=new B(this.schedule,{fetchAllEdgeLocations:(a,b)=>this._fetchAllEdgeLocations(a,b)})};c.fetchCandidates=async function(a,b){const g=a.coordinateHelper;var {point:h}=
a;const d=C;this.renderCoordsHelper.toRenderCoords(h,g.spatialReference,d);h=a.distance;a=await this._workerHandle.invoke({bounds:x.fromValues(d[0],d[1],d[2],"number"===typeof h?h:h.distance),types:a.types},b);a.candidates.sort((n,l)=>n.distance-l.distance);return a.candidates.map(n=>this._convertCandidate(g,n))};c.add=async function(a,b){this._ids.add(a.id);await this._workerHandle.invokeMethod("add",a,b)};c.remove=async function(a,b){this._ids.delete(a.id);await this._workerHandle.invokeMethod("remove",
a,b)};c._convertCandidate=function(a,b){switch(b.type){case "edge":return new z.EdgeSnappingCandidate({objectId:b.objectId,targetPoint:this._convertRenderCoordinate(a,b.target),edgeStart:this._convertRenderCoordinate(a,b.start),edgeEnd:this._convertRenderCoordinate(a,b.end),isDraped:!1});case "vertex":return new A.VertexSnappingCandidate({objectId:b.objectId,targetPoint:this._convertRenderCoordinate(a,b.target),isDraped:!1})}};c._convertRenderCoordinate=function({spatialReference:a},b){const g=r.create();
this.renderCoordsHelper.fromRenderCoords(b,g,a);return y.asSnappingPoint(g)};c._fetchAllEdgeLocations=async function(a,b){const g=[],h=[];for(const {id:d,uid:n}of a.components)this._ids.has(d)&&g.push((async()=>{const l=await this.fetchEdgeLocations(d,b.signal),t=l.locations.buffer;h.push(t);return{id:d,uid:n,objectIds:l.objectIds,locations:t,origin:l.origin,type:l.type}})());return{result:{components:(await Promise.all(g)).filter(({id:d})=>this._ids.has(d))},transferList:h}};return k._createClass(f)}(u.HandleOwner);
m.__decorate([p.property({constructOnly:!0})],e.SceneLayerSnappingSourceWorkerHandle.prototype,"renderCoordsHelper",void 0);m.__decorate([p.property({constructOnly:!0})],e.SceneLayerSnappingSourceWorkerHandle.prototype,"fetchEdgeLocations",void 0);m.__decorate([p.property({constructOnly:!0})],e.SceneLayerSnappingSourceWorkerHandle.prototype,"schedule",void 0);m.__decorate([p.property({readOnly:!0})],e.SceneLayerSnappingSourceWorkerHandle.prototype,"availability",void 0);e.SceneLayerSnappingSourceWorkerHandle=
m.__decorate([v.subclass("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],e.SceneLayerSnappingSourceWorkerHandle);let B=function(c){function f(a,b){return q.call(this,"SceneLayerSnappingSourceWorker","fetchCandidates",{},a,{strategy:"dedicated",client:b})}k._inherits(f,c);var q=k._createSuper(f);return k._createClass(f)}(w.WorkerHandle);const C=r.create();Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});