/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{S as t}from"./ShaderOutput.js";import{R as a}from"./RgbaFloatEncoding.glsl.js";import{g as e}from"./interfaces2.js";function o(o,l){switch(o.fragment.include(a),l.output){case t.Shadow:case t.ShadowHighlight:case t.ShadowExcludeHighlight:o.fragment.code.add(e`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
fragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);break;case t.Depth:o.fragment.code.add(e`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`)}}export{o as O};
