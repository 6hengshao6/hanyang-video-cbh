// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../lib/DefaultVertexAttributeLocations ../lib/Program ../lib/StencilUtils ../../../../chunks/PointRenderer.glsl ../../../webgl/enums ../../../webgl/renderState".split(" "),function(k,g,d,l,c,m,n,h,p,q,e){c=function(b){function a(f,r,t){return u.call(this,f,r,t)}d._inherits(a,b);var u=d._createSuper(a);b=a.prototype;b.initializeProgram=function(f){return new n.Program(f.rctx,
a.shader.get().build(this.configuration),m.Default3D)};b.initializePipeline=function(){return e.makePipelineState({depthTest:{func:q.CompareFunction.LESS},depthWrite:e.defaultDepthWriteParams,colorWrite:e.defaultColorWriteParams,stencilWrite:this.configuration.hasOccludees?h.stencilWriteMaskOn:null,stencilTest:this.configuration.hasOccludees?h.stencilBaseAllZerosParams:null})};return d._createClass(a)}(c.ShaderTechnique);c.shader=new l.ReloadableShaderModule(p.PointRendererShader,()=>new Promise((b,
a)=>k(["./PointRenderer.glsl"],b,a)));g.PointRendererTechnique=c;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});