// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../lib/DefaultVertexAttributeLocations ../lib/Program ../../../../chunks/HUDCompositing.glsl ../../../webgl/renderState".split(" "),function(f,e,d,g,c,h,k,l,m){c=function(b){function a(){return n.apply(this,arguments)}d._inherits(a,b);var n=d._createSuper(a);b=a.prototype;b.initializeProgram=function(p){return new k.Program(p.rctx,a.shader.get().build(),
h.Default3D)};b.initializePipeline=function(){return m.makePipelineState({colorWrite:{r:!1,g:!0,b:!1,a:!1}})};return d._createClass(a)}(c.ShaderTechnique);c.shader=new g.ReloadableShaderModule(l.HUDCompositing,()=>new Promise((b,a)=>f(["./HUDCompositing.glsl"],b,a)));e.HUDCompositingTechnique=c;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});