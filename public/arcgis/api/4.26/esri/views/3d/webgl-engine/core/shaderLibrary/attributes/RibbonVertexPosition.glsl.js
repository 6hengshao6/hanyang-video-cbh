// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../shading/VisualVariables.glsl ../../shaderModules/Float3PassUniform ../../shaderModules/FloatPassUniform ../../shaderModules/FloatsPassUniform ../../shaderModules/interfaces ../../../lib/VertexAttribute".split(" "),function(h,l,f,m,k,d,e){h.RibbonVertexPosition=function(c,g){const a=c.vertex;a.uniforms.add(new m.FloatPassUniform("intrinsicWidth",b=>b.width));g.vvSize?(c.attributes.add(e.VertexAttribute.SIZEFEATUREATTRIBUTE,"float"),a.uniforms.add(new f.Float3PassUniform("vvSizeMinSize",
b=>b.vvSize.minSize)),a.uniforms.add(new f.Float3PassUniform("vvSizeMaxSize",b=>b.vvSize.maxSize)),a.uniforms.add(new f.Float3PassUniform("vvSizeOffset",b=>b.vvSize.offset)),a.uniforms.add(new f.Float3PassUniform("vvSizeFactor",b=>b.vvSize.factor)),a.code.add(d.glsl`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(c.attributes.add(e.VertexAttribute.SIZE,"float"),a.code.add(d.glsl`float getSize(){
return intrinsicWidth * size;
}`));g.vvOpacity?(c.attributes.add(e.VertexAttribute.OPACITYFEATUREATTRIBUTE,"float"),a.constants.add("vvOpacityNumber","int",8),a.uniforms.add([new k.FloatsPassUniform("vvOpacityValues",b=>b.vvOpacity.values,8),new k.FloatsPassUniform("vvOpacityOpacities",b=>b.vvOpacity.opacityValues,8)]),a.code.add(d.glsl`float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):a.code.add(d.glsl`vec4 applyOpacity( vec4 color ){
return color;
}`);g.vvColor?(c.include(l.VisualVariables,g),c.attributes.add(e.VertexAttribute.COLORFEATUREATTRIBUTE,"float"),a.code.add(d.glsl`vec4 getColor(){
return applyOpacity(interpolateVVColor(colorFeatureAttribute));
}`)):(c.attributes.add(e.VertexAttribute.COLOR,"vec4"),a.code.add(d.glsl`vec4 getColor(){
return applyOpacity(color);
}`))};Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});