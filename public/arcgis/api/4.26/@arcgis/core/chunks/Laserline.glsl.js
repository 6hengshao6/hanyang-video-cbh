/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{i as o}from"./maybe.js";import{R as e}from"./ReadLinearDepth.glsl.js";import{C as r}from"./CameraSpace.glsl.js";import{F as a}from"./RgbaFloatEncoding.glsl.js";import{F as l}from"./Float3PassUniform.js";import{F as t}from"./FloatPassUniform.js";import{g as n}from"./interfaces2.js";import{T as i}from"./Texture2DPassUniform.js";function s(s,d){const p=s.fragment;p.include(e),s.include(r),p.uniforms.add([new t("globalAlpha",(o=>o.globalAlpha)),new l("glowColor",(o=>o.glowColor)),new t("glowWidth",((o,e)=>o.glowWidth*e.camera.pixelRatio)),new t("glowFalloff",(o=>o.glowFalloff)),new l("innerColor",(o=>o.innerColor)),new t("innerWidth",((o,e)=>o.innerWidth*e.camera.pixelRatio)),new i("depthMap",((o,e)=>e.linearDepthTexture)),new a("nearFar",((o,e)=>e.camera.nearFar)),new i("frameColor",((o,e)=>e.mainColorTexture))]),p.code.add(n`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`),p.code.add(n`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),p.code.add(n`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),p.code.add(n`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float depthDiscontinuityAlpha) {
float depth = linearDepthFromTexture(depthMap, uv, nearFar);
if (-depth == nearFar[0]) {
return false;
}
pos = reconstructPosition(gl_FragCoord.xy, depth);
normal = normalize(cross(dFdx(pos), dFdy(pos)));
float ddepth = fwidth(depth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / depth);
return true;
}`),d.contrastControlEnabled?(p.uniforms.add(new t("globalAlphaContrastBoost",(e=>o(e.globalAlphaContrastBoost)?e.globalAlphaContrastBoost:1))),p.code.add(n`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`)):p.code.add(n`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}export{s as L};
