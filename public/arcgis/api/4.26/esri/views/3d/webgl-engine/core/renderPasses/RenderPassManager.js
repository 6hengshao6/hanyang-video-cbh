// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../../../../../chunks/mat3 ../../../../../chunks/mat3f64 ../../../../../chunks/mat4 ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ./AllRenderPasses ./RenderPass ../shaderLibrary/ShaderOutput ../util/TwoVectorPosition ../../lib/depthRange ../../lib/RenderSlot".split(" "),function(r,u,v,m,w,x,k,y,l,f,c,z,A,g){let B=function(){function n(b,a){this.rctx=b;this.shaderTechniqueRepository=a;this.canRender=
!0;this._materialPassParameters=new l.MaterialPassParameters;this._shadowPassParameters=new l.ShadowMapPassParameters;this._highlightPassParameters=new l.HighlightPassParameters;this._systems=new Set;this._passes={materialOpaque:new f.RenderPass(b,a),materialTransparent:new f.RenderPass(b,a,f.RenderPassSorting.BackToFront),materialIntegratedMesh:new f.RenderPass(b,a),shadowMap:new f.RenderPass(b,a),highlight:new f.RenderPass(b,a),highlightIntegratedMesh:new f.RenderPass(b,a),highlightShadowMap:new f.RenderPass(b,
a),defaultShadowMap:new f.RenderPass(b,a)}}var d=n.prototype;d.register=function(b){this._systems.add(b)};d.prepareRender=function(b){if(0!==this._systems.size){for(const a of Object.values(this._passes))a.prepareSubmit();this._systems.forEach(a=>a.submit(this._passes,b.bindParameters));for(const a of Object.values(this._passes))a.finishSubmit();this.shaderTechniqueRepository.frameUpdate()}};d.prepareTechniques=function(b){if(0===this._systems.size)return null;this._configure(b);this._materialPassParameters.output=
b.output;return this._invoke(b,(a,e)=>a.prepare(e,b.bindParameters))};d.render=function(b,a){this._invoke(b,(e,h)=>e.dispatch(h,b.bindParameters,a))};d._invoke=function(b,a){switch(b.bindParameters.slot){case g.RenderSlot.OPAQUE_MATERIAL:switch(b.output){case c.ShaderOutput.Color:case c.ShaderOutput.Depth:case c.ShaderOutput.Normal:case c.ShaderOutput.ObjectAndLayerIdColor:return a(this._passes.materialOpaque,this._materialPassParameters);case c.ShaderOutput.Highlight:return a(this._passes.highlight,
this._highlightPassParameters);case c.ShaderOutput.Shadow:return a(this._passes.shadowMap,this._shadowPassParameters);case c.ShaderOutput.ShadowHighlight:return a(this._passes.highlightShadowMap,this._shadowPassParameters);case c.ShaderOutput.ShadowExcludeHighlight:return a(this._passes.defaultShadowMap,this._shadowPassParameters)}break;case g.RenderSlot.TRANSPARENT_MATERIAL:switch(b.output){case c.ShaderOutput.Color:case c.ShaderOutput.Alpha:case c.ShaderOutput.Depth:case c.ShaderOutput.Normal:case c.ShaderOutput.ObjectAndLayerIdColor:return a(this._passes.materialTransparent,
this._materialPassParameters)}break;case g.RenderSlot.INTEGRATED_MESH:switch(b.output){case c.ShaderOutput.Color:case c.ShaderOutput.Depth:case c.ShaderOutput.Normal:case c.ShaderOutput.ObjectAndLayerIdColor:return a(this._passes.materialIntegratedMesh,this._materialPassParameters);case c.ShaderOutput.Highlight:return a(this._passes.highlightIntegratedMesh,this._highlightPassParameters)}}return null};d.notifyDirty=function(){this._context.requestRender()};d.slots=function(){return[g.RenderSlot.OPAQUE_MATERIAL,
g.RenderSlot.TRANSPARENT_MATERIAL,g.RenderSlot.INTEGRATED_MESH]};d.initializeRenderContext=function(b){this._context=b};d.uninitializeRenderContext=function(){};d.queryDepthRange=function(b){const a={near:Infinity,far:-Infinity};this._systems.forEach(e=>{e=e.queryShadowCasterDepthRange(b);v.isSome(e)&&A.union(a,e,a)});return a};d._configure=function(b){this._updateParameters(b,b.output===c.ShaderOutput.Shadow||b.output===c.ShaderOutput.ShadowHighlight||b.output===c.ShaderOutput.ShadowExcludeHighlight?
this._shadowPassParameters:b.output===c.ShaderOutput.Highlight?this._highlightPassParameters:this._materialPassParameters)};d._updateParameters=function(b,a){const e=b.bindParameters.camera,h=e.viewInverseTransposeMatrix;k.set(p,h[3],h[7],h[11]);q.set(p);k.copy(a.transformWorldFromViewTH,q.high);k.copy(a.transformWorldFromViewTL,q.low);k.copy(a.slicePlaneLocalOrigin,p);m.fromMat4(a.transformViewFromCameraRelativeRS,e.viewMatrix);x.copy(a.transformProjFromView,e.projectionMatrix);a.identifier===l.RenderPassIdentifier.Material&&
(this._materialPassParameters.transparent=b.bindParameters.slot===g.RenderSlot.TRANSPARENT_MATERIAL,this._materialPassParameters.integratedMesh=b.bindParameters.slot===g.RenderSlot.INTEGRATED_MESH,m.transpose(t,a.transformViewFromCameraRelativeRS),m.invert(a.transformNormalViewFromGlobal,t))};u._createClass(n,[{key:"needsHighlight",get:function(){return 0<this._passes.highlight.count||0<this._passes.highlightIntegratedMesh.count}},{key:"needsTransparentPass",get:function(){return 0<this._passes.materialTransparent.count}}]);
return n}();const p=y.create(),t=w.create(),q=new z.TwoVectorPosition;r.RenderPassManager=B;Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});