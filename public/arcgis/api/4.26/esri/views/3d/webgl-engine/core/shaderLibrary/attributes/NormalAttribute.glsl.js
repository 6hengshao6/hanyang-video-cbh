// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../core/compilerUtils","../util/DecodeNormal.glsl","../../shaderModules/interfaces","../../../lib/VertexAttribute"],function(b,f,g,c,d){b.NormalAttributeType=void 0;(function(a){a[a.Attribute=0]="Attribute";a[a.CompressedAttribute=1]="CompressedAttribute";a[a.Ground=2]="Ground";a[a.ScreenDerivative=3]="ScreenDerivative";a[a.COUNT=4]="COUNT"})(b.NormalAttributeType||(b.NormalAttributeType={}));b.NormalAttribute=function(a,e){switch(e.normalType){case b.NormalAttributeType.CompressedAttribute:a.include(g.DecodeNormal);
a.attributes.add(d.VertexAttribute.NORMALCOMPRESSED,"vec2");a.vertex.code.add(c.glsl`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`);break;case b.NormalAttributeType.Attribute:a.attributes.add(d.VertexAttribute.NORMAL,"vec3");a.vertex.code.add(c.glsl`vec3 normalModel() {
return normal;
}`);break;case b.NormalAttributeType.ScreenDerivative:a.fragment.code.add(c.glsl`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:f.neverReached(e.normalType);case b.NormalAttributeType.COUNT:case b.NormalAttributeType.Ground:}};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});