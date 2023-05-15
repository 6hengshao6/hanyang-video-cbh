// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/Logger ../../../core/maybe ../../../core/PooledArray ../../../core/workers/WorkerHandle ../../../geometry/projection ../../../libs/i3s/enums".split(" "),function(q,r,z,w,A,t,x,h){function y(c,e,p){a.clear();var b=Infinity;let d=Infinity,l=-Infinity,k=-Infinity,u=!1;for(const v of e){var f="clip"===v.type?h.ModificationType.Inside:"mask"===v.type?h.ModificationType.Outside:h.ModificationType.Replace;const m=w.unwrapOrThrow(v.geometry,
"modification.geometry");e=g=>g;if(m.spatialReference){if(!x.canProjectWithoutEngine(m.spatialReference,p)){z.getLogger("esri.views.3d.layers.I3SMeshWorkerHandle").warn("Can't project modification polygon into layer spatial reference, ignoring modification");continue}e=g=>{x.projectVectorToVector(g,m.spatialReference,n,p);return n}}else m.hasZ||(n[2]=0,e=g=>{n[0]=g[0];n[1]=g[1];return n});u=u||f===h.ModificationType.Outside;a.push(f);a.push(m.rings.length);for(const g of m.rings){a.push(g.length);
for(const B of g)f=e(B),a.push(f[0]),a.push(f[1]),a.push(f[2]),b=Math.min(b,f[0]),d=Math.min(d,f[1]),l=Math.max(l,f[0]),k=Math.max(k,f[1])}}w.isSome(c)&&(u?(a.push(h.ModificationType.Inside),a.push(2),a.push(4),a.push(b-1E-4),a.push(d-1E-4),a.push(0),a.push(l+1E-4),a.push(d-1E-4),a.push(0),a.push(l+1E-4),a.push(k+1E-4),a.push(0),a.push(b-1E-4),a.push(k+1E-4),a.push(0)):(a.push(h.ModificationType.Outside),a.push(1)),a.push(4),a.push(c[0]),a.push(c[1]),a.push(0),a.push(c[2]),a.push(c[1]),a.push(0),
a.push(c[2]),a.push(c[3]),a.push(0),a.push(c[0]),a.push(c[3]),a.push(0));a.push(h.ModificationType.Finished);c=new Float64Array(a.length);for(b=0;b<a.length;++b)c[b]=a.getItemAt(b);return c}t=function(c){function e(b){return p.call(this,"SceneLayerWorker","process",{process:d=>[d.geometryBuffer]},b,{hasInitialize:!0})}r._inherits(e,c);var p=r._createSuper(e);c=e.prototype;c.setModifications=function(b,d,l,k){b={context:b,modifications:y(d,l,k),isGeodetic:k.isGeographic};this.broadcast(b,"setModifications")};
c.setLegacySchema=function(b,d){d=JSON.stringify(d);this.broadcast({context:b,jsonSchema:d},"setLegacySchema")};c.destroyContext=function(b){return this.broadcast(b,"destroyContext")};return r._createClass(e)}(t.WorkerHandle);const a=new A({deallocator:null}),n=[0,0,0];q.I3SMeshWorkerHandle=t;q.toWasmModification=y;Object.defineProperty(q,Symbol.toStringTag,{value:"Module"})});