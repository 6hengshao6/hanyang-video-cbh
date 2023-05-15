// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../ViewingMode ../core/shaderLibrary/ShaderOutput ../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../core/shaderLibrary/shading/WaterDistortion.glsl ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/DefaultVertexAttributeLocations ../lib/OrderIndependentTransparency ../lib/Program ../lib/TransparencyPassType ./DefaultTechniqueConfiguration ../../../../chunks/WaterSurface.glsl ../../../webgl/renderState".split(" "),
function(v,m,g,c,w,n,x,r,b,p,d,y,k,z,q,A,B,t){r=function(f){function e(){return l.apply(this,arguments)}g._inherits(e,f);var l=g._createSuper(e);return g._createClass(e)}(r.WaterDistortionPassParameters);p=function(f){function e(){return l.apply(this,arguments)}g._inherits(e,f);var l=g._createSuper(e);f=e.prototype;f.initializeConfiguration=function(a,h){h.spherical=a.viewingMode===w.ViewingMode.Global;h.doublePrecisionRequiresObfuscation=a.rctx.driverTest.doublePrecisionRequiresObfuscation.result};
f.initializeProgram=function(a){return new z.Program(a.rctx,e.shader.get().build(this.configuration),y.Default3D)};f._setPipelineState=function(a){const h=this.configuration,u=a===q.TransparencyPassType.NONE,C=a===q.TransparencyPassType.FrontFace;return t.makePipelineState({blending:h.output!==n.ShaderOutput.Normal&&h.output!==n.ShaderOutput.Highlight&&h.transparent?u?k.blendingDefault:k.oitBlending(a):null,depthTest:{func:k.oitDepthTest(a)},depthWrite:u?h.writeDepth?t.defaultDepthWriteParams:null:
k.oitDepthWrite(a),colorWrite:t.defaultColorWriteParams,polygonOffset:u||C?null:k.getOITPolygonOffset(h.enableOffset)})};f.initializePipeline=function(){return this._setPipelineState(this.configuration.transparencyPassType)};return g._createClass(e)}(p.ShaderTechnique);p.shader=new b.ReloadableShaderModule(B.WaterSurface,()=>new Promise((f,e)=>v(["../shaders/WaterSurface.glsl"],f,e)));b=function(f){function e(){var a=l.apply(this,arguments);a.output=n.ShaderOutput.Color;a.transparencyPassType=q.TransparencyPassType.NONE;
a.spherical=!1;a.receiveShadows=!1;a.hasSlicePlane=!1;a.transparent=!1;a.enableOffset=!0;a.writeDepth=!1;a.hasScreenSpaceReflections=!1;a.doublePrecisionRequiresObfuscation=!1;a.hasCloudsReflections=!1;a.isDraped=!1;a.hasMultipassTerrain=!1;a.cullAboveGround=!1;return a}g._inherits(e,f);var l=g._createSuper(e);return g._createClass(e)}(A.DefaultTechniqueConfiguration);c.__decorate([d.parameter({count:n.ShaderOutput.COUNT})],b.prototype,"output",void 0);c.__decorate([d.parameter({count:q.TransparencyPassType.COUNT})],
b.prototype,"transparencyPassType",void 0);c.__decorate([d.parameter()],b.prototype,"spherical",void 0);c.__decorate([d.parameter()],b.prototype,"receiveShadows",void 0);c.__decorate([d.parameter()],b.prototype,"hasSlicePlane",void 0);c.__decorate([d.parameter()],b.prototype,"transparent",void 0);c.__decorate([d.parameter()],b.prototype,"enableOffset",void 0);c.__decorate([d.parameter()],b.prototype,"writeDepth",void 0);c.__decorate([d.parameter()],b.prototype,"hasScreenSpaceReflections",void 0);
c.__decorate([d.parameter()],b.prototype,"doublePrecisionRequiresObfuscation",void 0);c.__decorate([d.parameter()],b.prototype,"hasCloudsReflections",void 0);c.__decorate([d.parameter()],b.prototype,"isDraped",void 0);c.__decorate([d.parameter()],b.prototype,"hasMultipassTerrain",void 0);c.__decorate([d.parameter()],b.prototype,"cullAboveGround",void 0);c.__decorate([d.parameter({constValue:x.PBRMode.Water})],b.prototype,"pbrMode",void 0);c.__decorate([d.parameter({constValue:!0})],b.prototype,"useCustomDTRExponentForWater",
void 0);c.__decorate([d.parameter({constValue:!0})],b.prototype,"highStepCount",void 0);c.__decorate([d.parameter({constValue:!1})],b.prototype,"useFillLights",void 0);m.WaterMaterialPassParameters=r;m.WaterTechnique=p;m.WaterTechniqueConfiguration=b;Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});