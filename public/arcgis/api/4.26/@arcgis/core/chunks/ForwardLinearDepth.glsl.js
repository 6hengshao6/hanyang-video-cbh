/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{S as r}from"./ShaderOutput.js";import{c as o}from"./mat3f64.js";import{c as e}from"./mat4f64.js";import{b as a}from"./vec3f32.js";import{d as t}from"./vec3.js";import{g as i,N as s}from"./interfaces2.js";import{V as d}from"./VertexAttribute.js";import{F as n}from"./View.glsl.js";import{F as m}from"./Float3PassUniform.js";import{U as l,B as c}from"./ShaderBuilder.js";import{M as f}from"./Matrix3PassUniform.js";import{M as v}from"./Matrix4PassUniform.js";import{F}from"./RgbaFloatEncoding.glsl.js";function u(r){r.attributes.add(d.POSITION,"vec3"),r.vertex.code.add(i`vec3 positionModel() { return position; }`)}function p({code:r},o){o.doublePrecisionRequiresObfuscation?r.add(i`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):r.add(i`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}class w extends l{constructor(r,o){super(r,"mat3",c.Draw,((e,a,t)=>e.setUniformMatrix3fv(r,o(a,t))))}}function h(r,o){r.include(u);const e=r.vertex;e.include(p,o),r.varyings.add("vPositionWorldCameraRelative","vec3"),r.varyings.add("vPosition_view","vec3"),e.uniforms.add([new m("transformWorldFromViewTH",(r=>r.transformWorldFromViewTH)),new m("transformWorldFromViewTL",(r=>r.transformWorldFromViewTL)),new f("transformViewFromCameraRelativeRS",(r=>r.transformViewFromCameraRelativeRS)),new v("transformProjFromView",(r=>r.transformProjFromView)),new w("transformWorldFromModelRS",(r=>r.transformWorldFromModelRS)),new n("transformWorldFromModelTH",(r=>r.transformWorldFromModelTH)),new n("transformWorldFromModelTL",(r=>r.transformWorldFromModelTL))]),e.code.add(i`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),e.code.add(i`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${o.spherical?i`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:i`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),r.fragment.uniforms.add(new m("transformWorldFromViewTL",(r=>r.transformWorldFromViewTL))),e.code.add(i`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),r.fragment.code.add(i`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class W extends s{constructor(){super(...arguments),this.transformWorldFromViewTH=t(),this.transformWorldFromViewTL=t(),this.transformViewFromCameraRelativeRS=o(),this.transformProjFromView=e()}}class M extends s{constructor(){super(...arguments),this.transformWorldFromModelRS=o(),this.transformWorldFromModelTH=a(),this.transformWorldFromModelTL=a()}}function P(r){r.varyings.add("linearDepth","float")}function R(r){r.vertex.uniforms.add(new F("nearFar",((r,o)=>o.camera.nearFar)))}function V(r){r.vertex.code.add(i`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function T(o,e){const{vertex:a}=o;switch(e.output){case r.Color:if(e.receiveShadows)return P(o),void a.code.add(i`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case r.Depth:case r.Shadow:case r.ShadowHighlight:case r.ShadowExcludeHighlight:return o.include(h,e),P(o),R(o),V(o),void a.code.add(i`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}a.code.add(i`void forwardLinearDepth() {}`)}export{p as D,T as F,w as M,u as P,M as V,P as a,V as b,R as c,W as d,h as e};
