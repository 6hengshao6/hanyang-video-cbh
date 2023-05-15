// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/Precipitation.glsl ../webgl-engine/core/shaderModules/interfaces ../webgl-engine/core/shaderTechnique/ReloadableShaderModule ../webgl-engine/core/shaderTechnique/ShaderTechnique ../webgl-engine/lib/Program ../webgl-engine/lib/VertexAttribute ../../webgl/enums ../../webgl/renderState".split(" "),function(p,f,d,q,h,r,g,t,m,e,k){h=function(b){function a(){var c=l.apply(this,arguments);c.time=0;c.radius=1;c.width=500;c.opacity=
1;return c}d._inherits(a,b);var l=d._createSuper(a);return d._createClass(a)}(h.NoParameters);g=function(b){function a(){return l.apply(this,arguments)}d._inherits(a,b);var l=d._createSuper(a);b=a.prototype;b.initializeProgram=function(c){return new t.Program(c.rctx,a.shader.get().build(this.configuration),n)};b.initializePipeline=function(){return k.makePipelineState({blending:k.separateBlendingParams(e.BlendFactor.ONE,e.BlendFactor.ONE,e.BlendFactor.ONE_MINUS_SRC_ALPHA,e.BlendFactor.ONE_MINUS_SRC_ALPHA),
depthTest:{func:e.CompareFunction.LEQUAL},colorWrite:k.defaultColorWriteParams})};return d._createClass(a)}(g.ShaderTechnique);g.shader=new r.ReloadableShaderModule(q.Precipitation,()=>new Promise((b,a)=>p(["./Precipitation.glsl"],b,a)));const n=new Map([[m.VertexAttribute.POSITION,0],[m.VertexAttribute.INSTANCEFEATUREATTRIBUTE,1]]);f.PrecipitationPassParameters=h;f.PrecipitationTechnique=g;f.attributeLocations=n;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});