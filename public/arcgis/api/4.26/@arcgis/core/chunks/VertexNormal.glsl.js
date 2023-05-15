/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{n as r}from"./compilerUtils.js";import{c as e}from"./mat3f64.js";import{c as o}from"./vec4f64.js";import{g as a}from"./interfaces2.js";import{V as t}from"./VertexAttribute.js";import{V as s,d,e as i,M as l}from"./ForwardLinearDepth.glsl.js";import{M as m}from"./Matrix3PassUniform.js";function n(r){const e=a`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;r.vertex.code.add(e)}function c(e,o){switch(o.normalType){case v.CompressedAttribute:e.include(n),e.attributes.add(t.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(a`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`);break;case v.Attribute:e.attributes.add(t.NORMAL,"vec3"),e.vertex.code.add(a`vec3 normalModel() {
return normal;
}`);break;case v.ScreenDerivative:e.fragment.code.add(a`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:r(o.normalType);case v.COUNT:case v.Ground:}}var v;function f(e,o){switch(o.normalType){case v.Attribute:case v.CompressedAttribute:e.include(c,o),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add([new l("transformNormalGlobalFromModel",(r=>r.transformNormalGlobalFromModel)),new m("transformNormalViewFromGlobal",(r=>r.transformNormalViewFromGlobal))]),e.vertex.code.add(a`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case v.Ground:e.include(i,o),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(a`
        void forwardNormal() {
          vNormalWorld = ${o.spherical?a`normalize(vPositionWorldCameraRelative);`:a`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case v.ScreenDerivative:e.vertex.code.add(a`void forwardNormal() {}`);break;default:r(o.normalType);case v.COUNT:}}!function(r){r[r.Attribute=0]="Attribute",r[r.CompressedAttribute=1]="CompressedAttribute",r[r.Ground=2]="Ground",r[r.ScreenDerivative=3]="ScreenDerivative",r[r.COUNT=4]="COUNT"}(v||(v={}));class u extends d{constructor(){super(...arguments),this.transformNormalViewFromGlobal=e()}}class b extends s{constructor(){super(...arguments),this.transformNormalGlobalFromModel=e(),this.toMapSpace=o()}}export{c as N,b as V,u as a,v as b,f as c};
