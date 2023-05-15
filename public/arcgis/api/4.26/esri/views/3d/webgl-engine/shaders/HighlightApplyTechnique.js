// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../lib/DefaultVertexAttributeLocations ../lib/Program ../../../../chunks/HighlightApply.glsl ../../../webgl/enums ../../../webgl/renderState".split(" "),function(h,g,e,k,c,l,m,n,d,f){c=function(b){function a(){return p.apply(this,arguments)}e._inherits(a,b);var p=e._createSuper(a);b=a.prototype;b.initializeProgram=function(q){return new m.Program(q.rctx,
a.shader.get().build(),l.Default3D)};b.initializePipeline=function(){return f.makePipelineState({blending:f.separateBlendingParams(d.BlendFactor.SRC_ALPHA,d.BlendFactor.ONE,d.BlendFactor.ONE_MINUS_SRC_ALPHA,d.BlendFactor.ONE_MINUS_SRC_ALPHA),colorWrite:f.defaultColorWriteParams})};return e._createClass(a)}(c.ShaderTechnique);c.shader=new k.ReloadableShaderModule(n.HighlightApply,()=>new Promise((b,a)=>h(["./HighlightApply.glsl"],b,a)));g.HighlightApplyTechnique=c;Object.defineProperty(g,Symbol.toStringTag,
{value:"Module"})});