// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../lib/DefaultVertexAttributeLocations ../lib/Program ../../../../chunks/OverlayCompositing.glsl ../../../webgl/enums ../../../webgl/renderState".split(" "),function(h,f,d,k,c,l,m,n,g,e){c=function(b){function a(){return p.apply(this,arguments)}d._inherits(a,b);var p=d._createSuper(a);b=a.prototype;b.initializeProgram=function(q){return new m.Program(q.rctx,
a.shader.get().build(),l.Default3D)};b.initializePipeline=function(){return e.makePipelineState({blending:e.simpleBlendingParams(g.BlendFactor.ONE,g.BlendFactor.ONE_MINUS_SRC_ALPHA),colorWrite:e.defaultColorWriteParams})};return d._createClass(a)}(c.ShaderTechnique);c.shader=new k.ReloadableShaderModule(n.OverlayCompositing,()=>new Promise((b,a)=>h(["./OverlayCompositing.glsl"],b,a)));f.OverlayCompositingTechnique=c;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});