// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/CloudsComposition.glsl ../webgl-engine/core/shaderTechnique/ReloadableShaderModule ../webgl-engine/core/shaderTechnique/ShaderTechnique ../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration ../webgl-engine/lib/DefaultVertexAttributeLocations ../webgl-engine/lib/Program ../../webgl/enums ../../webgl/renderState".split(" "),function(l,h,e,m,n,d,p,q,r,c,f){d=function(b){function a(g){var k;return k=t.call(this,
g,new p.ShaderTechniqueConfiguration,()=>k.destroy())}e._inherits(a,b);var t=e._createSuper(a);b=a.prototype;b.initializeProgram=function(g){return new r.Program(g.rctx,a.shader.get().build(),q.Default3D)};b.initializePipeline=function(){return f.makePipelineState({blending:f.separateBlendingParams(c.BlendFactor.ONE,c.BlendFactor.ZERO,c.BlendFactor.SRC_ALPHA,c.BlendFactor.ONE),depthTest:{func:c.CompareFunction.LEQUAL},colorWrite:f.defaultColorWriteParams})};return e._createClass(a)}(d.ShaderTechnique);
d.shader=new n.ReloadableShaderModule(m.CloudsCompositionShader,()=>new Promise((b,a)=>l(["./CloudsComposition.glsl"],b,a)));h.CloudsCompositionTechnique=d;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});