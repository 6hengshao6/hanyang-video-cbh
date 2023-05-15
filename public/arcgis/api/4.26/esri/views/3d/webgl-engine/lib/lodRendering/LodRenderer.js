// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/Accessor ../../../../../core/maybe ../../../../../core/promiseUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/accessorSupport/ensureType ../../../../../core/arrayUtils ../../../../../core/has ../../../../../core/accessorSupport/decorators/subclass ../../../../../chunks/mat4f64 ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../chunks/vec4f64 ../../../support/debugFlags ../../../support/buffer/glUtil ../../../support/buffer/InterleavedLayout ../../core/shaderLibrary/ShaderOutput ../Camera ../DefaultVertexAttributeLocations ../IntersectorInterfaces ../Octree ../RenderSlot ../Util ../VertexAttribute ./InstanceData ./InstanceOctree ./LevelSelector ./LodLevel ./RenderInstanceData ../../materials/internal/MaterialUtil ../../materials/renderers/utils ../../shaders/DefaultMaterialTechnique ../../../../support/Scheduler ../../../../webgl/Util".split(" "),
function(u,F,v,V,w,I,z,na,oa,pa,W,X,A,G,C,J,Y,Z,D,aa,K,ba,L,H,E,B,p,ca,da,ea,M,fa,ha,ia,N,O){function P(d,l,x){const a=d.allocateHead();d=d.view;ha.encodeDoubleVec3(l.modelOrigin,x,d.modelOriginHi,d.modelOriginLo,a);d.model.copyFrom(a,l.model,x);d.modelNormal.copyFrom(a,l.modelNormal,x);l.color&&d.color&&d.color.copyFrom(a,l.color,x);l.objectAndLayerIdColor&&d.objectAndLayerIdColor&&d.objectAndLayerIdColor.copyFrom(a,l.objectAndLayerIdColor,x);l.featureAttribute&&d.featureAttribute&&d.featureAttribute.copyFrom(a,
l.featureAttribute,x)}function ja(d){let l=Z.newLayout().vec3f(B.VertexAttribute.MODELORIGINHI).vec3f(B.VertexAttribute.MODELORIGINLO).mat3f(B.VertexAttribute.MODEL).mat3f(B.VertexAttribute.MODELNORMAL);w.isSome(d)&&d.includes("color")&&(l=l.vec4f(B.VertexAttribute.INSTANCECOLOR));w.isSome(d)&&d.includes("featureAttribute")&&(l=l.vec4f(B.VertexAttribute.INSTANCEFEATUREATTRIBUTE));w.isSome(d)&&d.includes("objectAndLayerIdColor")&&(l=l.vec4u8(B.VertexAttribute.OBJECTANDLAYERIDCOLOR_INSTANCED));return l}
const ka=d=>{const l=d.baseBoundingSphere.radius;d=d.levels.map(x=>x.minScreenSpaceRadius);return new da.LevelSelector(l,d)};u.LodRenderer=function(d){function l(a,c){var b=x.call(this,a);b.type=ba.IntersectorType.LOD;b.isGround=!1;b._levels=[];b._defaultRenderInstanceData=[[]];b._highlightRenderInstanceData=[[]];b._allRenderInstanceData=[b._defaultRenderInstanceData[0],b._highlightRenderInstanceData[0]];b._instanceIndex=0;b._cycleStartIndex=0;b._slicePlane=!1;b._camera=new aa.Camera;b._updateCyclesWithStaticCamera=
-1;b._needFullCycle=!1;b.slots=[H.RenderSlot.OPAQUE_MATERIAL,H.RenderSlot.TRANSPARENT_MATERIAL];b.canRender=!0;b._instanceData=new p.InstanceData({shaderTransformation:a.shaderTransformation},a.optionalFields);b._frameTask=c.registerTask(N.TaskPriority.LOD_RENDERER,F._assertThisInitialized(b));return b}F._inherits(l,d);var x=F._createSuper(l);d=l.prototype;d.initialize=function(){this._instanceBufferLayout=ja(this.optionalFields);this._glInstanceBufferLayout=Y.glLayout(this._instanceBufferLayout,
1);this._instanceData.events.on("instances-changed",()=>this._requestUpdateCycle());this._instanceData.events.on("instance-transform-changed",({index:a})=>{this._requestUpdateCycle();this.metadata.notifyGraphicGeometryChanged(a)});this._instanceData.events.on("instance-visibility-changed",({index:a})=>{this._requestUpdateCycle(!0);this.metadata.notifyGraphicVisibilityChanged(a)});this._instanceData.events.on("instance-highlight-changed",()=>this._requestUpdateCycle(!0))};d.destroy=function(){this._frameTask.remove()};
d.initializeRenderContext=async function(a,c){this._context=a;const b=a.renderContext.rctx,e=await Promise.allSettled(this.symbol.levels.map(g=>{this._defaultRenderInstanceData[0].push(new M.RenderInstanceData(b,this._instanceBufferLayout));this._highlightRenderInstanceData[0].push(new M.RenderInstanceData(b,this._instanceBufferLayout));return ea.LodLevel.create(a,g,c)})),f=e.map(g=>"fulfilled"===g.status?g.value:null).filter(w.isSome);if(I.isAborted(c)||f.length!==e.length){f.forEach(g=>g.destroy());
I.throwIfAborted(c);for(const g of e)if("rejected"===g.status)throw g.reason;}this._levels=f;this._levelSelector=ka(this)};d.uninitializeRenderContext=function(){this._invalidateOctree();this._levels.forEach(a=>a.destroy());this._defaultRenderInstanceData[0].forEach(a=>a.destroy());this._highlightRenderInstanceData[0].forEach(a=>a.destroy())};d.prepareRender=function(a){if(!J.LOD_INSTANCE_RENDERER_DISABLE_UPDATES){if(this._enableLevelSelection){const c=a.bindParameters.contentCamera.equals(this._camera);
this._camera.copyFrom(a.bindParameters.contentCamera);c||this._requestUpdateCycle()}this._needFullCycle&&(this.runTask(N.noBudget),this._needFullCycle=!1)}};d.prepareTechniques=function(a){if(!this.baseMaterial.isVisible()||!this.baseMaterial.isVisibleForOutput(a.output))return null;const c=this._getInstanceDatas(a.output);if(!c)return null;const b=[];c.forEach(e=>this.levels.forEach((f,g)=>{f.components.forEach(n=>b.push(this._beginComponent(a,e[g],n)))}));return b};d.render=function(a,c){const b=
this._getInstanceDatas(a.output);if(b){var e=0;a.rctx.bindVAO();b.forEach(f=>this.levels.forEach((g,n)=>{g.components.forEach(m=>this._renderComponent(a,c[e++],f[n],m,n))}))}};d._getInstanceDatas=function(a){const c=a!==D.ShaderOutput.Highlight&&a!==D.ShaderOutput.ShadowHighlight;a=a!==D.ShaderOutput.ShadowExcludeHighlight;return c&&a?this._allRenderInstanceData:c?this._defaultRenderInstanceData:a?this._highlightRenderInstanceData:null};d.intersect=function(a,c,b,e){if(this.baseMaterial.isVisible()&&
!w.isNone(this._octree)){var f=G.create();A.subtract(f,e,b);var g=n=>{this._instanceData.getCombinedModelTransform(n,Q);a.transform.set(Q);A.transformMat4(R,b,a.transform.inverse);A.transformMat4(S,e,a.transform.inverse);const m=this._instanceData.getState(n),k=this._instanceData.getLodLevel(n),h=this._levels.length;E.assert(0!==(m&p.StateFlags.ACTIVE),"invalid instance state");E.assert(0<=k&&k<h,"invaid lod level");this._levels[k].intersect(a,c,R,S,n,this.metadata,h)};this.baseMaterial.parameters.verticalOffset?
this._octree.forEach(g):this._octree.forEachAlongRay(b,f,g)}};d.queryDepthRange=function(a){return this._queryDepthRangeOctree(a)};d.notifyShaderTransformationChanged=function(){this._invalidateOctree();this._requestUpdateCycle()};d._invalidateOctree=function(){this._octreeCached=w.destroyMaybe(this._octreeCached)};d._queryDepthRangeOctree=function(a){if(w.isNone(this._octree))return{near:Infinity,far:-Infinity};var c=a.viewForward,b=this._octree.findClosest(c,L.DepthOrder.FRONT_TO_BACK,a.frustum);
const e=this._octree.findClosest(c,L.DepthOrder.BACK_TO_FRONT,a.frustum);if(null==b||null==e)return{near:Infinity,far:-Infinity};const f=a.eye,g=this._instanceData.view;g.boundingSphere.getVec(b,y);A.subtract(y,y,f);b=A.dot(y,c)-y[3];g.boundingSphere.getVec(e,y);A.subtract(y,y,f);c=A.dot(y,c)+y[3];return{near:Math.max(a.near,b),far:Math.min(a.far,c)}};d._requestUpdateCycle=function(a=!1){this._updateCyclesWithStaticCamera=-1;this._cycleStartIndex=this._instanceIndex;a&&(this._needFullCycle=!0,this._context.requestRender())};
d._startUpdateCycle=function(){this._updateCyclesWithStaticCamera++;this._allRenderInstanceData.forEach(a=>a.forEach(c=>c.startUpdateCycle()))};d.runTask=function(a){const {_enableLevelSelection:c,_camera:b,_levelSelector:e}=this;this._allRenderInstanceData.forEach(q=>q.forEach(r=>r.beginUpdate()));const f=this._instanceData,g=f.view;let n=f.size;const m=f.capacity;let k=this._instanceIndex;for(let q=0;q<n&&!a.done;++q){k===this._cycleStartIndex&&this._startUpdateCycle();const r=g.state.get(k);var h=
0;if(r&p.StateFlags.ALLOCATED){var t=g.lodLevel.get(k);r&p.StateFlags.DEFAULT_ACTIVE&&this._defaultRenderInstanceData[0][t].freeTail();r&p.StateFlags.HIGHLIGHT_ACTIVE&&this._highlightRenderInstanceData[0][t].freeTail();r&p.StateFlags.REMOVE?f.freeInstance(k):r&p.StateFlags.VISIBLE?(t=0,c&&(g.modelOrigin.getVec(k,T),t=e.selectLevel(T,f.getCombinedMedianScaleFactor(k),b)),h=r&~(p.StateFlags.ACTIVE|p.StateFlags.TRANSFORM_CHANGED),0<=t&&(r&p.StateFlags.HIGHLIGHT?(P(this._highlightRenderInstanceData[0][t],
g,k),h|=p.StateFlags.HIGHLIGHT_ACTIVE):(P(this._defaultRenderInstanceData[0][t],g,k),h|=p.StateFlags.DEFAULT_ACTIVE)),g.state.set(k,h),g.lodLevel.set(k,t)):(h=r&~(p.StateFlags.ACTIVE|p.StateFlags.TRANSFORM_CHANGED),g.state.set(k,h));w.isSome(this._octreeCached)&&(t=!!(r&p.StateFlags.ACTIVE),h=!!(h&p.StateFlags.ACTIVE),!t&&h?this._octreeCached.addInstance(k):t&&!h?this._octreeCached.removeInstance(k):t&&h&&r&p.StateFlags.TRANSFORM_CHANGED&&(this._octreeCached.removeInstance(k),this._octreeCached.addInstance(k)));
k=k+1===m?0:k+1;a.madeProgress()}else k=k+1===m?0:k+1,n++}this._instanceIndex=k;this._allRenderInstanceData.forEach(q=>q.forEach(r=>r.endUpdate()));this._context.requestRender()};d._beginComponent=function(a,c,b){const {bindParameters:e,rctx:f,output:g}=a;if(0===c.size||!b.material.requiresSlot(e.slot,a.output))return null;a=b.glMaterials.load(f,e.slot,g);return w.isSome(a)?a.beginSlot(e):null};d._renderComponent=function(a,c,b,e,f){if(c){var {bindParameters:g,rctx:n}=a,m=n.bindTechnique(c,e.material.parameters,
g);n.bindVAO(e.vao);c.ensureAttributeLocations(e.vao);m.bindDraw(la,g,e.material.parameters);J.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL&&a.output===D.ShaderOutput.Color&&(m.setUniform4fv("externalColor",U[Math.min(f,U.length-1)]),m.setUniform1i("colorMixMode",fa.colorMixModes.replace));var k=n.capabilities.instancing;a=b.capacity;f=b.headIndex;m=b.tailIndex;var h=b.firstIndex,t=this._glInstanceBufferLayout,q=(r,ma)=>{O.bindVertexBufferLayout(n,K.Default3D,b.buffer,t,r);k.drawArraysInstanced(c.primitiveType,
0,e.vertexCount,ma-r);O.unbindVertexBufferLayout(n,K.Default3D,b.buffer,t)};e.material.parameters.transparent&&null!=h?f>m?(E.assert(h>=m&&h<=f,"invalid firstIndex"),q(h,f),q(m,h)):f<m&&(h<=f?(E.assert(0<=h&&h<=f,"invalid firstIndex"),q(h,f),q(m,a),q(0,h)):(E.assert(h>=m&&h<=a,"invalid firstIndex"),q(h,a),q(0,f),q(m,h))):f>m?q(m,f):f<m&&(q(0,f),q(m,a));n.bindVAO(null)}};F._createClass(l,[{key:"_enableLevelSelection",get:function(){return 1<this.symbol.levels.length}},{key:"levels",get:function(){return this._levels}},
{key:"baseBoundingBox",get:function(){return this._levels[this._levels.length-1].boundingBox}},{key:"baseBoundingSphere",get:function(){return this._levels[this._levels.length-1].boundingSphere}},{key:"baseMaterial",get:function(){return this._levels[this._levels.length-1].components[0].material}},{key:"slicePlaneEnabled",get:function(){return this._slicePlane},set:function(a){this._slicePlane=a}},{key:"layerUid",get:function(){return this.metadata.layerUid}},{key:"instanceData",get:function(){return this._instanceData}},
{key:"memoryUsage",get:function(){const a={cpu:0,gpu:0};this._allRenderInstanceData.forEach(c=>c.forEach(b=>{a.cpu+=b.memoryUsage.cpu;a.gpu+=b.memoryUsage.gpu}));return a}},{key:"renderStats",get:function(){const a=this._instanceData.size,c=[];this._levels.forEach((b,e)=>{e=this._allRenderInstanceData[0][e].size+this._allRenderInstanceData[1][e].size;b=b.triangleCount;c.push({renderedInstances:e,renderedTriangles:e*b,trianglesPerInstance:b})});return{totalInstances:a,renderedInstances:c.reduce((b,
e)=>b+e.renderedInstances,0),renderedTriangles:c.reduce((b,e)=>b+e.renderedTriangles,0),levels:c}}},{key:"needsTransparentPass",get:function(){return this._levels.some(a=>a.components.some(c=>c.material.requiresSlot(H.RenderSlot.TRANSPARENT_MATERIAL,D.ShaderOutput.Color)))}},{key:"needsHighlight",get:function(){return this._highlightRenderInstanceData[0].some(a=>0<a.size)}},{key:"_octree",get:function(){if(w.isNone(this._octreeCached)){const a=this._instanceData,c=a.view?.state;if(!c)return null;
this._octreeCached=new ca.InstanceOctree(a,this.baseBoundingSphere);for(let b=0;b<a.capacity;++b)c.get(b)&p.StateFlags.ACTIVE&&this._octreeCached.addInstance(b)}return this._octreeCached}},{key:"running",get:function(){return 0<this._instanceData.size&&1>this._updateCyclesWithStaticCamera}}]);return l}(V);v.__decorate([z.property({constructOnly:!0})],u.LodRenderer.prototype,"symbol",void 0);v.__decorate([z.property({constructOnly:!0})],u.LodRenderer.prototype,"optionalFields",void 0);v.__decorate([z.property({constructOnly:!0})],
u.LodRenderer.prototype,"metadata",void 0);v.__decorate([z.property({constructOnly:!0})],u.LodRenderer.prototype,"shaderTransformation",void 0);v.__decorate([z.property()],u.LodRenderer.prototype,"_instanceData",void 0);v.__decorate([z.property()],u.LodRenderer.prototype,"_cycleStartIndex",void 0);v.__decorate([z.property({readOnly:!0})],u.LodRenderer.prototype,"_enableLevelSelection",null);v.__decorate([z.property()],u.LodRenderer.prototype,"_updateCyclesWithStaticCamera",void 0);v.__decorate([z.property({readOnly:!0})],
u.LodRenderer.prototype,"running",null);u.LodRenderer=v.__decorate([W.subclass("esri.views.3d.webgl-engine.lib.lodRendering.LodRenderer")],u.LodRenderer);const T=G.create(),y=C.create(),Q=X.create(),R=G.create(),S=G.create(),U=[C.fromValues(1,0,1,1),C.fromValues(0,0,1,1),C.fromValues(0,1,0,1),C.fromValues(1,1,0,1),C.fromValues(1,0,0,1)],la=new ia.DefaultMaterialDrawParameters;Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})});