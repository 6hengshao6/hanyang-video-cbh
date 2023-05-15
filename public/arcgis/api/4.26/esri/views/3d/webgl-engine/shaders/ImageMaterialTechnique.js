// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../core/shaderLibrary/ShaderOutput ../core/shaderModules/interfaces ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/basicInterfaces ../lib/DefaultVertexAttributeLocations ../lib/OrderIndependentTransparency ../lib/Program ../lib/StencilUtils ../lib/TransparencyPassType ../materials/DefaultTechniqueConfiguration ../../../../chunks/ImageMaterial.glsl ../../../webgl/enums ../../../webgl/renderState".split(" "),
function(z,m,e,f,n,u,c,p,g,x,A,q,B,v,r,C,D,y,k){u=function(d){function b(){return l.apply(this,arguments)}e._inherits(b,d);var l=e._createSuper(b);return e._createClass(b)}(u.NoParameters);p=function(d){function b(){return l.apply(this,arguments)}e._inherits(b,d);var l=e._createSuper(b);d=b.prototype;d.initializeProgram=function(a){return new B.Program(a.rctx,b.shader.get().build(this.configuration),A.Default3D)};d._setPipelineState=function(a,t){const h=this.configuration,w=a===r.TransparencyPassType.NONE,
E=a===r.TransparencyPassType.FrontFace;return k.makePipelineState({blending:h.output!==n.ShaderOutput.Color&&h.output!==n.ShaderOutput.Alpha||!h.transparent?null:w?F:q.oitBlending(a),culling:k.cullingParams(h.cullFace),depthTest:{func:q.oitDepthTest(a)},depthWrite:w?h.writeDepth?k.defaultDepthWriteParams:null:q.oitDepthWrite(a),colorWrite:k.defaultColorWriteParams,stencilWrite:h.hasOccludees?v.stencilWriteMaskOn:null,stencilTest:h.hasOccludees?t?v.stencilToolMaskBaseParams:v.stencilBaseAllZerosParams:
null,polygonOffset:w||E?null:q.getOITPolygonOffset(h.enableOffset)})};d.initializePipeline=function(){this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0);return this._setPipelineState(this.configuration.transparencyPassType,!1)};d.getPipelineState=function(a,t){return t?this._occludeePipelineState:e._get(e._getPrototypeOf(b.prototype),"getPipelineState",this).call(this,a,t)};return e._createClass(b)}(p.ShaderTechnique);p.shader=new c.ReloadableShaderModule(D.ImageMaterial,
()=>new Promise((d,b)=>z(["./ImageMaterial.glsl"],d,b)));const F=k.simpleBlendingParams(y.BlendFactor.ONE,y.BlendFactor.ONE_MINUS_SRC_ALPHA);c=function(d){function b(){var a=l.apply(this,arguments);a.output=n.ShaderOutput.Color;a.cullFace=x.CullFaceOptions.None;a.hasSlicePlane=!1;a.transparent=!1;a.enableOffset=!0;a.writeDepth=!0;a.hasOccludees=!1;a.transparencyPassType=r.TransparencyPassType.NONE;a.hasMultipassTerrain=!1;a.cullAboveGround=!1;return a}e._inherits(b,d);var l=e._createSuper(b);return e._createClass(b)}(C.DefaultTechniqueConfiguration);
f.__decorate([g.parameter({count:n.ShaderOutput.COUNT})],c.prototype,"output",void 0);f.__decorate([g.parameter({count:x.CullFaceOptions.COUNT})],c.prototype,"cullFace",void 0);f.__decorate([g.parameter()],c.prototype,"hasSlicePlane",void 0);f.__decorate([g.parameter()],c.prototype,"transparent",void 0);f.__decorate([g.parameter()],c.prototype,"enableOffset",void 0);f.__decorate([g.parameter()],c.prototype,"writeDepth",void 0);f.__decorate([g.parameter()],c.prototype,"hasOccludees",void 0);f.__decorate([g.parameter({count:r.TransparencyPassType.COUNT})],
c.prototype,"transparencyPassType",void 0);f.__decorate([g.parameter()],c.prototype,"hasMultipassTerrain",void 0);f.__decorate([g.parameter()],c.prototype,"cullAboveGround",void 0);m.ImageMaterialPassParameters=u;m.ImageMaterialTechnique=p;m.ImageMaterialTechniqueConfiguration=c;Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});