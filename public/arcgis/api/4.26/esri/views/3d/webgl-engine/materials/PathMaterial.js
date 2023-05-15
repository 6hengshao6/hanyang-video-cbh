// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/mathUtils ../../../../core/maybe ../../../../geometry/support/aaBoundingBox ../../support/buffer/InterleavedLayout ../core/shaderLibrary/ShaderOutput ../core/shaderLibrary/shading/Normals.glsl ../lib/GLMaterial ../lib/Material ../lib/PathGeometry ../lib/RenderSlot ../lib/VertexAttribute ./DefaultBufferWriter ./PathTechnique ./internal/MaterialUtil".split(" "),function(q,g,x,y,F,G,d,r,H,t,I,u,m,J,p,K){t=function(c){function e(a){a=
n.call(this,a,new z);a.supportsEdges=!0;a._vertexAttributeLocations=p.vertexAttributeLocations;a._configuration=new p.PathTechniqueConfiguration;a._vertexBufferLayout=e.getVertexBufferLayout();return a}g._inherits(e,c);var n=g._createSuper(e);c=e.prototype;c.getConfiguration=function(a,f){this._configuration.output=a;this._configuration.vvSize=!!this.parameters.vvSize;this._configuration.vvColor=!!this.parameters.vvColor;this._configuration.vvOpacity=!!this.parameters.vvOpacity;this._configuration.hasSlicePlane=
this.parameters.hasSlicePlane;this._configuration.transparent=this.parameters.transparent;this._configuration.hasOccludees=this.parameters.hasOccludees;if(a===d.ShaderOutput.Color||a===d.ShaderOutput.Alpha)this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?r.NormalsDoubleSidedMode.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?r.NormalsDoubleSidedMode.WindingOrder:r.NormalsDoubleSidedMode.None,this._configuration.receiveShadows=
this.parameters.receiveShadows,this._configuration.receiveAmbientOcclusion=f.ssaoHelper.active?this.parameters.receiveSSAO:!1;this._configuration.transparencyPassType=f.transparencyPassType;this._configuration.hasMultipassTerrain=f.multipassTerrain.enabled;this._configuration.cullAboveGround=f.multipassTerrain.cullAboveGround;return this._configuration};c.isVisibleForOutput=function(a){return a===d.ShaderOutput.Shadow||a===d.ShaderOutput.ShadowExcludeHighlight||a===d.ShaderOutput.ShadowHighlight?
this.parameters.castShadows:!0};c.isVisible=function(){return g._get(g._getPrototypeOf(e.prototype),"isVisible",this).call(this)&&0<this.parameters.opacity};c.intersect=function(a,f,v,h,l,A){if(I.isPathGeometry(a)){f=a.path;var k=[this.parameters.size[0],this.parameters.size[1]];if(this.parameters.vvSize){const {offset:B,factor:C,minSize:D,maxSize:E}=this.parameters.vvSize;var b=f.sizeAttributeValue;k[0]*=x.clamp(B[0]+b*C[0],D[0],E[0]);k[1]*=x.clamp(B[2]+b*C[2],D[2],E[2])}b=Math.max(k[0],k[1]);a=
a.boundingInfo;if(y.isNone(a))this._intersectTriangles(f,k,h,l,A);else{a=F.fromValues(a.bbMin[0]-b,a.bbMin[1]-b,a.bbMin[2]-b,a.bbMax[0]+b,a.bbMax[1]+b,a.bbMax[2]+b);b=[l[0]-h[0],l[1]-h[1],l[2]-h[2]];var w=Math.sqrt(b[0]*b[0]+b[1]*b[1]+b[2]*b[2]);K.intersectAabbInvDir(a,h,[w/b[0],w/b[1],w/b[2]],v.tolerance)&&this._intersectTriangles(f,k,h,l,A)}}};c._intersectTriangles=function(a,f,v,h,l){a.baked.size&&a.baked.size[0]===f[0]&&a.baked.size[1]===f[1]||a.baked.bake(f);a.baked.intersect(v,h,l)};c.createBufferWriter=
function(){return new J.DefaultBufferWriter(this._vertexBufferLayout)};c.requiresSlot=function(a,f){switch(f){case d.ShaderOutput.Shadow:case d.ShaderOutput.ShadowHighlight:case d.ShaderOutput.ShadowExcludeHighlight:if(!this.parameters.castShadows)return!1;case d.ShaderOutput.Color:case d.ShaderOutput.Alpha:case d.ShaderOutput.Depth:case d.ShaderOutput.Normal:case d.ShaderOutput.Highlight:case d.ShaderOutput.ObjectAndLayerIdColor:return a===(this.parameters.transparent?u.RenderSlot.TRANSPARENT_MATERIAL:
u.RenderSlot.OPAQUE_MATERIAL)||a===u.RenderSlot.DRAPED_MATERIAL;default:return!1}};c.createGLMaterial=function(a){return new L(a)};e.getVertexBufferLayout=function(){return G.newLayout().vec3f(m.VertexAttribute.POSITION).vec4f(m.VertexAttribute.PROFILERIGHT).vec4f(m.VertexAttribute.PROFILEUP).vec4f(m.VertexAttribute.PROFILEVERTEXANDNORMAL).vec4f(m.VertexAttribute.FEATUREVALUE)};return g._createClass(e)}(t.Material);let L=function(c){function e(){return n.apply(this,arguments)}g._inherits(e,c);var n=
g._createSuper(e);c=e.prototype;c._updateOccludeeState=function(a){a.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:a.hasOccludees})};c._updateShadowState=function(a){(y.isNone(this.technique)||a.shadowMap.enabled!==this.technique.configuration.receiveShadows)&&this._material.setParameters({receiveShadows:a.shadowMap.enabled})};c.beginSlot=function(a){if(this._output===d.ShaderOutput.Color||this._output===d.ShaderOutput.Alpha)this._updateShadowState(a),
this._updateOccludeeState(a);return this.ensureTechnique(p.PathTechnique,a)};return g._createClass(e)}(H),z=function(c){function e(){var a=n.apply(this,arguments);a.doubleSided=!1;a.doubleSidedType="normal";a.receiveSSAO=!0;a.receiveShadows=!1;a.castShadows=!0;a.hasSlicePlane=!1;a.transparent=!1;a.hasOccludees=!1;return a}g._inherits(e,c);var n=g._createSuper(e);return g._createClass(e)}(p.PathPassParameters);q.PathMaterial=t;q.PathMaterialParameters=z;Object.defineProperty(q,Symbol.toStringTag,{value:"Module"})});