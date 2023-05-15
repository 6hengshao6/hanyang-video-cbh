// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../core/shaderLibrary/ShaderOutput ../core/shaderLibrary/attributes/NormalAttribute.glsl ../core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl ../core/shaderLibrary/shading/Normals.glsl ../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/basicInterfaces ../lib/TransparencyPassType ../materials/DefaultTechniqueConfiguration".split(" "),
function(h,f,b,k,l,m,n,p,c,e,q,a){a=function(r){function g(){var d=t.apply(this,arguments);d.output=k.ShaderOutput.Color;d.alphaDiscardMode=e.AlphaDiscardMode.Opaque;d.doubleSidedMode=n.NormalsDoubleSidedMode.None;d.pbrMode=p.PBRMode.Disabled;d.cullFace=e.CullFaceOptions.None;d.transparencyPassType=q.TransparencyPassType.NONE;d.normalType=l.NormalAttributeType.Attribute;d.textureCoordinateType=m.TextureCoordinateAttributeType.None;d.customDepthTest=e.DepthTestFunction.Less;d.spherical=!1;d.hasVertexColors=
!1;d.hasSymbolColors=!1;d.hasVerticalOffset=!1;d.hasSlicePlane=!1;d.hasSliceHighlight=!0;d.hasColorTexture=!1;d.hasMetallicRoughnessTexture=!1;d.hasEmissionTexture=!1;d.hasOcclusionTexture=!1;d.hasNormalTexture=!1;d.hasScreenSizePerspective=!1;d.hasVertexTangents=!1;d.hasOccludees=!1;d.hasMultipassTerrain=!1;d.hasModelTransformation=!1;d.offsetBackfaces=!1;d.vvSize=!1;d.vvColor=!1;d.receiveShadows=!1;d.receiveAmbientOcclusion=!1;d.textureAlphaPremultiplied=!1;d.instanced=!1;d.instancedColor=!1;d.objectAndLayerIdColorInstanced=
!1;d.instancedDoublePrecision=!1;d.doublePrecisionRequiresObfuscation=!1;d.writeDepth=!0;d.transparent=!1;d.enableOffset=!0;d.cullAboveGround=!1;d.snowCover=!1;d.hasColorTextureTransform=!1;d.hasEmissionTextureTransform=!1;d.hasNormalTextureTransform=!1;d.hasOcclusionTextureTransform=!1;d.hasMetallicRoughnessTextureTransform=!1;return d}f._inherits(g,r);var t=f._createSuper(g);return f._createClass(g)}(a.DefaultTechniqueConfiguration);b.__decorate([c.parameter({count:k.ShaderOutput.COUNT})],a.prototype,
"output",void 0);b.__decorate([c.parameter({count:e.AlphaDiscardMode.COUNT})],a.prototype,"alphaDiscardMode",void 0);b.__decorate([c.parameter({count:n.NormalsDoubleSidedMode.COUNT})],a.prototype,"doubleSidedMode",void 0);b.__decorate([c.parameter({count:p.PBRMode.COUNT})],a.prototype,"pbrMode",void 0);b.__decorate([c.parameter({count:e.CullFaceOptions.COUNT})],a.prototype,"cullFace",void 0);b.__decorate([c.parameter({count:q.TransparencyPassType.COUNT})],a.prototype,"transparencyPassType",void 0);
b.__decorate([c.parameter({count:l.NormalAttributeType.COUNT})],a.prototype,"normalType",void 0);b.__decorate([c.parameter({count:m.TextureCoordinateAttributeType.COUNT})],a.prototype,"textureCoordinateType",void 0);b.__decorate([c.parameter({count:e.DepthTestFunction.COUNT})],a.prototype,"customDepthTest",void 0);b.__decorate([c.parameter()],a.prototype,"spherical",void 0);b.__decorate([c.parameter()],a.prototype,"hasVertexColors",void 0);b.__decorate([c.parameter()],a.prototype,"hasSymbolColors",
void 0);b.__decorate([c.parameter()],a.prototype,"hasVerticalOffset",void 0);b.__decorate([c.parameter()],a.prototype,"hasSlicePlane",void 0);b.__decorate([c.parameter()],a.prototype,"hasSliceHighlight",void 0);b.__decorate([c.parameter()],a.prototype,"hasColorTexture",void 0);b.__decorate([c.parameter()],a.prototype,"hasMetallicRoughnessTexture",void 0);b.__decorate([c.parameter()],a.prototype,"hasEmissionTexture",void 0);b.__decorate([c.parameter()],a.prototype,"hasOcclusionTexture",void 0);b.__decorate([c.parameter()],
a.prototype,"hasNormalTexture",void 0);b.__decorate([c.parameter()],a.prototype,"hasScreenSizePerspective",void 0);b.__decorate([c.parameter()],a.prototype,"hasVertexTangents",void 0);b.__decorate([c.parameter()],a.prototype,"hasOccludees",void 0);b.__decorate([c.parameter()],a.prototype,"hasMultipassTerrain",void 0);b.__decorate([c.parameter()],a.prototype,"hasModelTransformation",void 0);b.__decorate([c.parameter()],a.prototype,"offsetBackfaces",void 0);b.__decorate([c.parameter()],a.prototype,
"vvSize",void 0);b.__decorate([c.parameter()],a.prototype,"vvColor",void 0);b.__decorate([c.parameter()],a.prototype,"receiveShadows",void 0);b.__decorate([c.parameter()],a.prototype,"receiveAmbientOcclusion",void 0);b.__decorate([c.parameter()],a.prototype,"textureAlphaPremultiplied",void 0);b.__decorate([c.parameter()],a.prototype,"instanced",void 0);b.__decorate([c.parameter()],a.prototype,"instancedColor",void 0);b.__decorate([c.parameter()],a.prototype,"objectAndLayerIdColorInstanced",void 0);
b.__decorate([c.parameter()],a.prototype,"instancedDoublePrecision",void 0);b.__decorate([c.parameter()],a.prototype,"doublePrecisionRequiresObfuscation",void 0);b.__decorate([c.parameter()],a.prototype,"writeDepth",void 0);b.__decorate([c.parameter()],a.prototype,"transparent",void 0);b.__decorate([c.parameter()],a.prototype,"enableOffset",void 0);b.__decorate([c.parameter()],a.prototype,"cullAboveGround",void 0);b.__decorate([c.parameter()],a.prototype,"snowCover",void 0);b.__decorate([c.parameter()],
a.prototype,"hasColorTextureTransform",void 0);b.__decorate([c.parameter()],a.prototype,"hasEmissionTextureTransform",void 0);b.__decorate([c.parameter()],a.prototype,"hasNormalTextureTransform",void 0);b.__decorate([c.parameter()],a.prototype,"hasOcclusionTextureTransform",void 0);b.__decorate([c.parameter()],a.prototype,"hasMetallicRoughnessTextureTransform",void 0);b.__decorate([c.parameter({constValue:!0})],a.prototype,"hasVvInstancing",void 0);b.__decorate([c.parameter({constValue:!1})],a.prototype,
"useCustomDTRExponentForWater",void 0);b.__decorate([c.parameter({constValue:!1})],a.prototype,"supportsTextureAtlas",void 0);b.__decorate([c.parameter({constValue:!0})],a.prototype,"useFillLights",void 0);h.DefaultMaterialTechniqueConfiguration=a;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});