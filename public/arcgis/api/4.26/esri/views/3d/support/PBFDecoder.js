// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../Graphic ../../../core/maybe ../../../core/typedArrayUtil ../../../core/workers/WorkerHandle ../../../geometry/SpatialReference ../../../layers/support/Field".split(" "),function(n,g,r,t,p,u,q,v){function w(b){switch(b.type){case "polyline":b.paths.reduce((c,a)=>c+a.length,0)<p.NATIVE_ARRAY_MAX_SIZE&&(b.paths=b.hasZ||b.hasM?b.paths.map(c=>c.map(a=>[a[0],a[1],a[2]])):b.paths.map(c=>c.map(a=>[a[0],a[1]])));break;case "polygon":b.rings.reduce((c,
a)=>c+a.length,0)<p.NATIVE_ARRAY_MAX_SIZE&&(b.rings=b.hasZ||b.hasM?b.rings.map(c=>c.map(a=>[a[0],a[1],a[2]])):b.rings.map(c=>c.map(a=>[a[0],a[1]])))}}let A=function(){function b(a){this._controller=a;this._handle=new x(f=>a.schedule(f))}var c=b.prototype;c.destroy=function(){this._handle.destroy()};c.invoke=function(a,f){if(!a.buffer||0===a.buffer.byteLength)return Promise.resolve(null);a.options.sourceSpatialReference&&a.options.sourceSpatialReference instanceof q&&(a.options={...a.options,sourceSpatialReference:a.options.sourceSpatialReference.toJSON()});
return this._handle.invoke(a,f).then(d=>{let h=0,l=0;const m=async k=>{d.spatialReference=q.fromJSON(d.spatialReference);if(d.fields)for(;h<d.fields.length;)if(d.fields[h]=v.fromJSON(d.fields[h]),h++,k.madeProgress())return this._controller.reschedule(e=>m(e));const y=d.spatialReference;for(;l<d.features.length;){const e=d.features[l];++l;e.uid=r.generateUID();if(t.isSome(e.geometry)&&(e.geometry.spatialReference=y,w(e.geometry),k.madeProgress()))return this._controller.reschedule(z=>m(z))}return d};
return this._controller.schedule(k=>m(k))})};return g._createClass(b)}(),x=function(b){function c(f){return a.call(this,"PBFDecoderWorker","_parseFeatureQuery",{_parseFeatureQuery:d=>[d.buffer]},f)}g._inherits(c,b);var a=g._createSuper(c);return g._createClass(c)}(u.WorkerHandle);n.PBFDecoder=A;Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});