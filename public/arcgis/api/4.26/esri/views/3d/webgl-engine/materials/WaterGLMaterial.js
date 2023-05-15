// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../core/shaderLibrary/ShaderOutput ../lib/GLMaterial ./WaterTechnique".split(" "),function(f,d,g,h,e,k){e=function(b){function c(){return l.apply(this,arguments)}d._inherits(c,b);var l=d._createSuper(c);b=c.prototype;b._updateShadowState=function(a){a.shadowMap.enabled!==this._material.parameters.receiveShadows&&this._material.setParameters({receiveShadows:a.shadowMap.enabled})};b._updateSSRState=function(a){a.ssr.enabled!==
this._material.parameters.hasScreenSpaceReflections&&this._material.setParameters({hasScreenSpaceReflections:a.ssr.enabled})};b._updateCloudsReflectionState=function(a){a=g.isSome(a.cloudsFade.data);a!==this._material.parameters.hasCloudsReflections&&this._material.setParameters({hasCloudsReflections:a})};b.ensureResources=function(a){return this._techniqueRepository.constructionContext.waterTextureRepository.ensureResources(a)};b.beginSlot=function(a){this._output===h.ShaderOutput.Color&&(this._updateShadowState(a),
this._updateSSRState(a),this._updateCloudsReflectionState(a));this._material.setParameters(this._techniqueRepository.constructionContext.waterTextureRepository.passParameters);return this.ensureTechnique(k.WaterTechnique,a)};return d._createClass(c)}(e);f.WaterGLMaterial=e;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});