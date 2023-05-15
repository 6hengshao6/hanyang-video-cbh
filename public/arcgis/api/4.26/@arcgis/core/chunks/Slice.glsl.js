/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{u as s,a as e,i as a}from"./maybe.js";import{n as i}from"./mat4.js";import{c}from"./mat4f64.js";import{Z as o,e as l,a as r,b as t,d as n,s as f}from"./vec3.js";import{F as d}from"./View.glsl.js";import{F as _}from"./Float3PassUniform.js";import{N as P,g as p}from"./interfaces2.js";class m extends P{constructor(s){super(),this.slicePlaneLocalOrigin=s}}function H(e,a){h(e,a,[new _("slicePlaneOrigin",((s,e)=>B(a,s,e))),new _("slicePlaneBasis1",((e,i)=>S(a,e,i,s(i.slicePlane)?.basis1))),new _("slicePlaneBasis2",((e,i)=>S(a,e,i,s(i.slicePlane)?.basis2)))])}function g(e,a){h(e,a,[new d("slicePlaneOrigin",((s,e)=>B(a,s,e))),new d("slicePlaneBasis1",((e,i)=>S(a,e,i,s(i.slicePlane)?.basis1))),new d("slicePlaneBasis2",((e,i)=>S(a,e,i,s(i.slicePlane)?.basis2)))])}function h(s,e,a){if(!e.hasSlicePlane){const a=p`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return e.hasSliceInVertexProgram&&s.vertex.code.add(a),void s.fragment.code.add(a)}e.hasSliceInVertexProgram&&s.vertex.uniforms.add(a),s.fragment.uniforms.add(a);const i=p`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,c=p`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,o=e.hasSliceHighlight?p`
        ${c}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:p`#define highlightSlice(_color_, _pos_) (_color_)`;e.hasSliceInVertexProgram&&s.vertex.code.add(i),s.fragment.code.add(i),s.fragment.code.add(o)}function u(s,e,a){return s.instancedDoublePrecision?f(v,a.camera.viewInverseTransposeMatrix[3],a.camera.viewInverseTransposeMatrix[7],a.camera.viewInverseTransposeMatrix[11]):e.slicePlaneLocalOrigin}function I(s,e){return a(s)?t(L,e.origin,s):e.origin}function b(s,e,c){return s.hasSliceTranslatedView?a(e)?i(w,c.camera.viewMatrix,e):c.camera.viewMatrix:null}function B(s,i,c){if(e(c.slicePlane))return o;const r=u(s,i,c),t=I(r,c.slicePlane),n=b(s,r,c);return a(n)?l(L,t,n):t}function S(s,i,c,n){if(e(n)||e(c.slicePlane))return o;const f=u(s,i,c),d=I(f,c.slicePlane),_=b(s,f,c);return a(_)?(r(T,n,d),l(L,d,_),l(T,T,_),t(T,T,L)):n}const v=n(),L=n(),T=n(),w=c();export{g as S,H as a,m as b};
