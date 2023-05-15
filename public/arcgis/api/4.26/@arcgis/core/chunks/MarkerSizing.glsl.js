/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{V as e}from"./VisualVariables.glsl.js";import{F as t}from"./Float3PassUniform.js";import{F as a}from"./FloatPassUniform.js";import{F as i}from"./glUtil3D.js";import{g as o}from"./interfaces2.js";import{V as r}from"./VertexAttribute.js";import{a as s}from"./maybe.js";import{c as n}from"./sdfPrimitives.js";import{_ as c}from"./tslib.es6.js";import{S as p}from"./ShaderOutput.js";import{p as d}from"./ShaderTechniqueConfiguration.js";import{T as v}from"./TransparencyPassType.js";import{D as l}from"./DefaultTechniqueConfiguration.js";var u,m;!function(e){e[e.Draped=0]="Draped",e[e.Screen=1]="Screen",e[e.World=2]="World",e[e.COUNT=3]="COUNT"}(u||(u={})),function(e){e[e.Center=0]="Center",e[e.Tip=1]="Tip",e[e.COUNT=2]="COUNT"}(m||(m={}));class f extends l{constructor(){super(...arguments),this.output=p.Color,this.transparencyPassType=v.NONE,this.occluder=!1,this.hasSlicePlane=!1,this.writeDepth=!1,this.space=u.Screen,this.hideOnShortSegments=!1,this.hasCap=!1,this.anchor=m.Center,this.hasTip=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}c([d({count:p.COUNT})],f.prototype,"output",void 0),c([d({count:v.COUNT})],f.prototype,"transparencyPassType",void 0),c([d()],f.prototype,"occluder",void 0),c([d()],f.prototype,"hasSlicePlane",void 0),c([d()],f.prototype,"writeDepth",void 0),c([d({count:u.COUNT})],f.prototype,"space",void 0),c([d()],f.prototype,"hideOnShortSegments",void 0),c([d()],f.prototype,"hasCap",void 0),c([d({count:m.COUNT})],f.prototype,"anchor",void 0),c([d()],f.prototype,"hasTip",void 0),c([d()],f.prototype,"vvSize",void 0),c([d()],f.prototype,"vvColor",void 0),c([d()],f.prototype,"vvOpacity",void 0),c([d()],f.prototype,"hasOccludees",void 0),c([d()],f.prototype,"hasMultipassTerrain",void 0),c([d()],f.prototype,"cullAboveGround",void 0),c([d({constValue:!0})],f.prototype,"hasVvInstancing",void 0),c([d({constValue:!0})],f.prototype,"hasSliceTranslatedView",void 0);const y=8;function h(s,n){const c=s.vertex;c.uniforms.add(new a("intrinsicWidth",(e=>e.width))),n.vvSize?(s.attributes.add(r.SIZEFEATUREATTRIBUTE,"float"),c.uniforms.add(new t("vvSizeMinSize",(e=>e.vvSize.minSize))),c.uniforms.add(new t("vvSizeMaxSize",(e=>e.vvSize.maxSize))),c.uniforms.add(new t("vvSizeOffset",(e=>e.vvSize.offset))),c.uniforms.add(new t("vvSizeFactor",(e=>e.vvSize.factor))),c.code.add(o`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(s.attributes.add(r.SIZE,"float"),c.code.add(o`float getSize(){
return intrinsicWidth * size;
}`)),n.vvOpacity?(s.attributes.add(r.OPACITYFEATUREATTRIBUTE,"float"),c.constants.add("vvOpacityNumber","int",8),c.uniforms.add([new i("vvOpacityValues",(e=>e.vvOpacity.values),y),new i("vvOpacityOpacities",(e=>e.vvOpacity.opacityValues),y)]),c.code.add(o`float interpolateOpacity( float value ){
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
}`)):c.code.add(o`vec4 applyOpacity( vec4 color ){
return color;
}`),n.vvColor?(s.include(e,n),s.attributes.add(r.COLORFEATUREATTRIBUTE,"float"),c.code.add(o`vec4 getColor(){
return applyOpacity(interpolateVVColor(colorFeatureAttribute));
}`)):(s.attributes.add(r.COLOR,"vec4"),c.code.add(o`vec4 getColor(){
return applyOpacity(color);
}`))}const S=64,O=S/2,T=O/5,z=S/T,g=.25;function C(e,t){return e.fromData(`${t}-marker`,(()=>n(t,S,O,T)))}function x(e,t){const i=e.vertex;e.constants.add("markerSizePerLineWidth","float",z),i.uniforms.add(new a("pixelRatio",((e,t)=>t.camera.pixelRatio))),s(i.uniforms.get("markerScale"))&&i.constants.add("markerScale","float",1),i.code.add(o`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`),t.space===u.World&&(i.constants.add("maxSegmentLengthFraction","float",.45),i.uniforms.add(new a("perRenderPixelRatio",((e,t)=>t.camera.perRenderPixelRatio))),i.code.add(o`float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}
bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}`))}export{m as L,x as M,h as R,u as a,f as b,S as c,O as d,g as e,z as f,C as p};
