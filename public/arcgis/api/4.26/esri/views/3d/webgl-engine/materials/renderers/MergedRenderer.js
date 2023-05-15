// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/arrayUtils ../../../../../core/MapUtils ../../../../../core/maybe ../../../../../core/NestedMap ../../../../../core/PooledArray ../../../../../chunks/mat4 ../../../../../chunks/mat4f64 ../../../support/buffer/glUtil ../../core/shaderLibrary/ShaderOutput ../../lib/AppleAmdDriverHelper ../../lib/GLMaterials ../../lib/Material ../../lib/ModelDirtyTypes ../../lib/Util ../DrawParameters ../WaterMaterial ./BufferRange ./Instance ./PerBufferData ./PerOriginData ./VaoCache".split(" "),
function(M,N,H,T,u,U,V,I,J,W,A,X,Y,Z,B,C,aa,ba,K,O,P,ca,da){function ea(p,r){let a;if(!p.some(d=>{if(d.numElements<r)return!1;a=d;return!0}))return null;const b=a.from;a.from+=r;a.from>=a.to&&p.removeUnordered(a);return b}function D(p){E.length<p&&(E=new Float32Array(p));return E}function Q(p){p*=4;return 262144>p?262144:Math.max(Math.min(262144*Math.ceil(1.5*p/262144),16777216),p)}function F(){E=new Float32Array(2)}let ha=function(){function p(a,b,d){this._rctx=a;this._materialRepository=b;this.material=
d;this._dataByOrigin=new Map;this._appleAmdDriverHelper=null;this._hasOccludees=this._hasHighlights=!1;this._glMaterials=new Y.GLMaterials(this.material,this._materialRepository);this._bufferWriter=d.createBufferWriter();this._vaoCache=new da.VaoCache(a,d.vertexAttributeLocations,W.glLayout(this._bufferWriter.vertexBufferLayout));this._rctx.driverTest.drawArraysRequiresIndicesTypeReset.result&&(this._appleAmdDriverHelper=new X.AppleAmdDriverHelper(this._rctx))}var r=p.prototype;r.dispose=function(){this._glMaterials.destroy();
this._dataByOrigin.forEach(a=>a.dispose());this._dataByOrigin.clear();this._vaoCache.dispose();this._appleAmdDriverHelper?.dispose()};r.forEachGeometry=function(a){this._dataByOrigin.forEach(b=>b.buffers.forEach(d=>d.instances.forEach(c=>a(c.geometry))))};r.modify=function(a){this._updateGeometries(a.updates);this._addAndRemoveGeometries(a.adds,a.removes);this._updateDrawCommands()};r._updateGeometries=function(a){const b=this._bufferWriter,d=b.vertexBufferLayout.stride/4;for(const e of a){a=e.renderGeometry;
const g=this._dataByOrigin.get(a.localOrigin.id)?.findBuffer(a.id);if(u.isNone(g))break;const f=g.instances.get(a.id);if(e.updateType&(B.DirtyState.GEOMETRY|B.DirtyState.TRANSFORMATION)){var c=b.elementCount(f.geometry.geometry)*d;c=D(c);const h=b.vertexBufferLayout.createView(c.buffer);this._writeGeometry(a,h,0);g.vao.vertexBuffers.geometry.setSubData(c,f.from*d,0,f.numElements*d);F()}e.updateType&(B.DirtyState.HIGHLIGHT|B.DirtyState.OCCLUDEE|B.DirtyState.VISIBILITY)&&(g.drawCommandsDirty=!0)}};
r._computeDeltas=function(a,b){const d=new U.NestedMap;for(var c of a){a=c.localOrigin;if(u.isNone(a))continue;let e=d.get(a.id,null);u.isNone(e)&&(e=new R(a.vec3),d.set(a.id,null,e));e.changes.push(c)}for(const e of b)b=e.localOrigin,u.isNone(b)||(c=this._dataByOrigin.get(b.id)?.findBuffer(e.id),u.isNone(c)||(a=d.get(b.id,c),u.isNone(a)&&(a=new R(b.vec3),d.set(b.id,c,a)),a.changes.push(e)));return d};r._addAndRemoveGeometries=function(a,b){const {_bufferWriter:d,_dataByOrigin:c}=this,e=d.vertexBufferLayout.stride/
4,g=this._computeDeltas(a,b);g.forEach((f,h)=>{const k=f.get(null),m=u.isSome(k)?k.changes:[];g.delete(h,null);let l=c.get(h);f.forEach((n,q)=>{g.delete(h,q);if(u.isNone(q))C.assert(!1,"No VAO for removed geometries");else if(q.instances.size===n.changes.length)this._vaoCache.deleteVao(q.vao),H.removeUnordered(l.buffers,q),0===l.buffers.length&&0===m.length&&c.delete(h);else{var y=q.numElements,v=q.vao.size/4,t=m.reduce((z,L)=>z+d.elementCount(L.geometry),0),x=n.changes.reduce((z,L)=>z+d.elementCount(L.geometry),
0);y=Math.min((y+t-x)*e,4194304);t=y>v;65536<y&&y<v/2?(n.changes.forEach(({id:z})=>q.deleteInstance(z)),q.instances.forEach(({geometry:z})=>m.push(z)),this._vaoCache.deleteVao(q.vao),H.removeUnordered(l.buffers,q)):t?this._applyAndRebuild(q,m,n):this._applyRemoves(q,n)}});if(0<m.length)for(u.isNone(l)&&(l=new ca.PerOriginData(k.origin),c.set(h,l)),l.buffers.forEach(n=>this._applyAdds(n,m));0<m.length;)l.buffers.push(this._applyAndRebuild(new P.PerBufferData,m,null))})};r._updateDrawCommands=function(){this._hasOccludees=
this._hasHighlights=!1;this._dataByOrigin.forEach(a=>{a.buffers.forEach(b=>{b.drawCommandsDirty&&(b.hasHiddenInstances=!1,b.hasHighlights=!1,b.hasOccludees=!1,T.someMap(b.instances,d=>{b.updateDrawState(d);return b.hasHiddenInstances&&b.hasHighlights&&b.hasOccludees}),b.updateDrawCommands(this._bufferWriter.vertexBufferLayout.stride));this._hasHighlights=this._hasHighlights||b.hasHighlights;this._hasOccludees=this._hasOccludees||b.hasOccludees})})};r._applyAndRebuild=function(a,b,d){if(u.isSome(d))for(var c of d.changes)a.deleteInstance(c.id);
const e=this._bufferWriter;d=e.vertexBufferLayout.stride;c=d/4;var g=Math.floor(4194304/c);let f=a.numElements;for(;0<b.length;){const l=b.pop();var h=e.elementCount(l.geometry);if(f+h>g&&0<f){b.push(l);break}f+=h;h=new O.Instance(l,0,0);C.assert(null==a.instances.get(l.id));a.addInstance(l.id,h)}b=f*c;g=D(b);const k=e.vertexBufferLayout.createView(g.buffer);let m=0;a.hasHiddenInstances=!1;a.hasHighlights=!1;a.hasOccludees=!1;a.instances.forEach((l,n)=>{this._writeGeometry(l.geometry,k,m);const q=
m;m+=e.elementCount(l.geometry.geometry);a.updateInstance(n,q,m);a.updateDrawState(l)});this._vaoCache.deleteVao(a.vao);a.vao=this._vaoCache.newVao(Q(b));a.vao.vertexBuffers.geometry.setSubData(g,0,0,m*c);F();a.holes.clear();b=a.holes.pushNew();b.from=m;b.to=Math.floor(a.vao.size/d);a.updateDrawCommands(d);return a};r._applyRemoves=function(a,b){if(0!==b.changes.length){for(var d of b.changes){var c=d.id;if(b=a.instances.get(c)){a.deleteInstance(c);if(c=w.back()){if(c.to===b.from){c.to=b.to;continue}if(c.from===
b.to){c.from=b.from;continue}}c=w.pushNew();c.from=b.from;c.to=b.to}}K.mergeAdjacentRanges(w);var e=this._bufferWriter.vertexBufferLayout.stride/4;d=w.reduce((h,k)=>Math.max(h,k.numElements),0)*e;var g=D(d);g.fill(0,0,d);var f=a.vao.vertexBuffers.geometry;w.forAll(h=>f.setSubData(g,h.from*e,0,h.numElements*e));F();a.holes.pushArray(w.data,w.length);w.forAll((h,k)=>w.data[k]=null);w.clear();a.drawCommandsDirty=!0}};r._applyAdds=function(a,b){if(0!==b.length)if(P.hasVao(a)){var d=this._bufferWriter,
c=d.vertexBufferLayout.stride/4,e=a.numElements,g=b.reduce((v,t)=>v+d.elementCount(t.geometry),0);e=Math.min((e+g)*c,4194304);g=4*e;if(a.vao.size<Q(4128768)&&g>a.vao.size)this._applyAndRebuild(a,b,null);else{K.mergeAdjacentRanges(a.holes);var f=[];for(var h of b)g=d.elementCount(h.geometry),g=ea(a.holes,g),f.push(g);var k=a.vao.vertexBuffers.geometry,m=0,l=0,n=0,q=D(e),y=d.vertexBufferLayout.createView(q.buffer);b.forEach((v,t)=>{t=f[t];if(!u.isNone(t)){if(n!==t){var x=n-l;0<x&&k.setSubData(q,l*c,
0,x*c);l=t;m=0}x=d.elementCount(v.geometry);this._writeGeometry(v,y,m);m+=x;n=t+x;t=new O.Instance(v,t,t+x);C.assert(null==a.instances.get(v.id));a.addInstance(v.id,t);a.drawCommandsDirty=!0}});h=n-l;0<h&&k.setSubData(q,l*c,0,h*c);H.filterInPlace(b,(v,t)=>u.isNone(f[t]));F()}}else this._applyAndRebuild(a,b,null)};r._writeGeometry=function(a,b,d){var c=a.localOrigin.vec3;C.setMatrixTranslation3(S,-c[0],-c[1],-c[2]);c=I.multiply(fa,S,a.transformation);I.invert(G,c);I.transpose(G,G);this._bufferWriter.write(c,
G,a.geometry,b,d)};r.updateAnimation=function(a){return this.material.update(a)};r.requiresSlot=function(a,b){return this.material.requiresSlot(a,b)};r.prepareTechnique=function(a){const {output:b,bindParameters:d}=a;if(!this.requiresSlot(d.slot,b))return null;const c=b===A.ShaderOutput.Highlight||b===A.ShaderOutput.ShadowHighlight;if(c&&!this._hasHighlights)return null;const e=b===A.ShaderOutput.ShadowExcludeHighlight,g=!(c||e);this._appleAmdDriverHelper?.resetIndicesType();for(const h of this._dataByOrigin.values())for(const k of h.buffers){if(c&&
!k.hasHighlights)continue;var f=(c?k.drawCommandsHighlight:e&&k.needsMultipleCommands()?k.drawCommandsShadowHighlightRest:k.drawCommandsDefault)||null;const m=g&&k.drawCommandsOccludees||null;if(f?.length||m?.length)if(f=this._glMaterials.load(a.rctx,d.slot,b),f=u.isSome(f)?f.beginSlot(d):null,u.isSome(f))return f}return null};r.render=function(a,b){const {output:d,bindParameters:c}=a;a=d===A.ShaderOutput.Highlight||d===A.ShaderOutput.ShadowHighlight;const e=d===A.ShaderOutput.ShadowExcludeHighlight,
g=!(a||e),f=this._rctx;this._appleAmdDriverHelper?.resetIndicesType();f.bindTechnique(b,this.material.parameters,c);for(const h of this._dataByOrigin.values())for(const k of h.buffers){if(a&&!k.hasHighlights)continue;const m=(a?k.drawCommandsHighlight:e&&k.needsMultipleCommands()?k.drawCommandsShadowHighlightRest:k.drawCommandsDefault)||null,l=g&&k.drawCommandsOccludees||null;if(m?.length||l?.length)b.program.bindDraw(new aa.DrawParameters(h.origin),c,this.material.parameters),b.ensureAttributeLocations(k.vao),
f.bindVAO(k.vao),m?.length&&(b.bindPipelineState(f,c.slot,!1),m.forAll(n=>f.drawArrays(b.primitiveType,n.first,n.count))),l?.length&&(b.bindPipelineState(f,c.slot,!0),l.forAll(n=>f.drawArrays(b.primitiveType,n.first,n.count)))}};N._createClass(p,[{key:"isEmpty",get:function(){return 0===this._dataByOrigin.size}},{key:"hasHighlights",get:function(){return this._hasHighlights}},{key:"hasOccludees",get:function(){return this._hasOccludees}},{key:"hasWater",get:function(){return!this.isEmpty&&this.material instanceof
ba.WaterMaterial}},{key:"rendersOccluded",get:function(){return!this.isEmpty&&this.material.renderOccluded!==Z.RenderOccludedFlag.Occlude}},{key:"numGeometries",get:function(){let a=0;this._dataByOrigin.forEach(b=>a+=b.buffers.reduce((d,c)=>d+=c.instances.size,0));return a}},{key:"test",get:function(){return{material:this.material,glMaterials:this._glMaterials,dataByOrigin:this._dataByOrigin}}}]);return p}(),R=N._createClass(function(p){this.origin=p;this.changes=[]});const S=J.create(),fa=J.create(),
G=J.create(),w=new V({allocator:p=>p||new K.BufferRange,deallocator:null});let E=new Float32Array(65536);M.MergedRenderer=ha;Object.defineProperty(M,Symbol.toStringTag,{value:"Module"})});