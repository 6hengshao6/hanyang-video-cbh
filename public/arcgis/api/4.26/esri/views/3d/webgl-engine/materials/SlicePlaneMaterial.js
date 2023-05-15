// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../core/shaderLibrary/ShaderOutput ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/GLMaterial ../lib/Material ../lib/RenderSlot ./DefaultBufferWriter ./DefaultLayouts ./TriangleMaterial ../shaders/SlicePlaneMaterialTechnique".split(" "),function(f,d,l,m,n,p,q,r,t,u,g,h){g=function(c){function b(a){a=e.call(this,a,new k);a._configuration=new n.ShaderTechniqueConfiguration;return a}d._inherits(b,c);var e=
d._createSuper(b);c=b.prototype;c.createBufferWriter=function(){return new t.DefaultBufferWriter(u.PositionUVLayout)};c.requiresSlot=function(a,v){return v===m.ShaderOutput.Color&&a===r.RenderSlot.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL};c.createGLMaterial=function(a){return new w(a)};c.getConfiguration=function(){return this._configuration};return d._createClass(b)}(g.TriangleMaterial);let w=function(c){function b(a){a=e.call(this,a);a.ensureTechnique(h.SlicePlaneMaterialTechnique,null);return a}
d._inherits(b,c);var e=d._createSuper(b);b.prototype.beginSlot=function(){return l.unwrap(this.technique)};return d._createClass(b)}(p),k=function(c){function b(){var a=e.apply(this,arguments);a.renderOccluded=q.RenderOccludedFlag.Occlude;return a}d._inherits(b,c);var e=d._createSuper(b);return d._createClass(b)}(h.SlicePlaneMaterialPassParameters);f.Parameters=k;f.SlicePlaneMaterial=g;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});