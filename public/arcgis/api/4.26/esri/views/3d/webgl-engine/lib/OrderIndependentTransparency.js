// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","./TransparencyPassType","../../../webgl/enums","../../../webgl/renderState"],function(a,d,b,e){const k=e.separateBlendingParams(b.BlendFactor.SRC_ALPHA,b.BlendFactor.ONE,b.BlendFactor.ONE_MINUS_SRC_ALPHA,b.BlendFactor.ONE_MINUS_SRC_ALPHA),f=e.simpleBlendingParams(b.BlendFactor.ONE,b.BlendFactor.ONE),g=e.simpleBlendingParams(b.BlendFactor.ZERO,b.BlendFactor.ONE_MINUS_SRC_ALPHA),h={factor:-1,units:-2};a.OITPolygonOffset=h;a.OITPolygonOffsetLimit=5E5;a.blendingAlpha=g;a.blendingColor=
f;a.blendingDefault=k;a.getOITPolygonOffset=function(c){return c?h:null};a.oitBlending=function(c){return c===d.TransparencyPassType.FrontFace?null:c===d.TransparencyPassType.Alpha?g:f};a.oitDepthTest=function(c,l=b.CompareFunction.LESS){return c===d.TransparencyPassType.NONE||c===d.TransparencyPassType.FrontFace?l:b.CompareFunction.LEQUAL};a.oitDepthWrite=function(c){return c===d.TransparencyPassType.FrontFace?e.defaultDepthWriteParams:null};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});