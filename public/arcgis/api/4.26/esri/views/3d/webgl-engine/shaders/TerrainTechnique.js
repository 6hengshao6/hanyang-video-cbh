// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../../../ViewingMode ../../../../chunks/Terrain.glsl ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../lib/basicInterfaces ../lib/Program ../lib/StencilUtils ../lib/VertexAttribute ../../../webgl/enums ../../../webgl/renderState".split(" "),function(n,h,e,p,q,r,g,t,u,v,k,l,f){g=function(b){function d(){var a=w.apply(this,arguments);a.useStencil=!1;return a}e._inherits(d,b);var w=e._createSuper(d);
b=d.prototype;b.initializeConfiguration=function(a,c){c.spherical=a.viewingMode===p.ViewingMode.Global};b.initializeProgram=function(a){return new u.Program(a.rctx,d.shader.get().build(this.configuration),m)};b.initializePipeline=function(){this._stencilPipelineState=this._createPipeline(!0);return this._createPipeline(!1)};b._createPipeline=function(a){const c=this.configuration,x=c.backfaceCullingEnabled&&!c.renderOccluded;return f.makePipelineState({blending:c.renderOccluded?f.simpleBlendingParams(l.BlendFactor.ONE,
l.BlendFactor.ONE_MINUS_SRC_ALPHA):null,culling:x?f.backFaceCullingParams:null,depthTest:c.renderOccluded?null:{func:l.CompareFunction.LESS},depthWrite:c.renderOccluded?null:f.defaultDepthWriteParams,colorWrite:f.defaultColorWriteParams,stencilTest:a?v.renderWhenBitIsNotSet(t.StencilBits.IntegratedMeshMaskExcluded):null})};b.getPipelineState=function(a,c){return this.useStencil?this._stencilPipelineState:e._get(e._getPrototypeOf(d.prototype),"getPipelineState",this).call(this,a,c)};return e._createClass(d)}(g.ShaderTechnique);
g.shader=new r.ReloadableShaderModule(q.Terrain,()=>new Promise((b,d)=>n(["../core/shaderLibrary/terrain/Terrain.glsl"],b,d)));const m=new Map([[k.VertexAttribute.POSITION,0],[k.VertexAttribute.UV0,1],[k.VertexAttribute.NORMALCOMPRESSED,2]]);h.TerrainTechnique=g;h.terrainVertexAttributeLocations=m;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});