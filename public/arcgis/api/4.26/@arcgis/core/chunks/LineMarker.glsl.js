/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{a as e,R as r,M as a,L as o,c as t,d as i,e as s}from"./MarkerSizing.glsl.js";import{a as n,b as c}from"./ForwardLinearDepth.glsl.js";import{S as l}from"./ShaderOutput.js";import{S as p}from"./Slice.glsl.js";import{O as d}from"./OutputDepth.glsl.js";import{m as v}from"./MultipassTerrainTest.glsl.js";import{s as m}from"./AlphaCutoff.js";import{C as f}from"./ColorConversion.glsl.js";import{R as h,F as u}from"./RgbaFloatEncoding.glsl.js";import{a as g,c as S}from"./View.glsl.js";import{F as y}from"./Float4PassUniform.js";import{F as x}from"./FloatPassUniform.js";import{g as z}from"./interfaces2.js";import{M as P}from"./Matrix4PassUniform.js";import{S as w}from"./ShaderBuilder.js";import{T as C}from"./Texture2DPassUniform.js";import{T as j}from"./TransparencyPassType.js";import{V as b}from"./VertexAttribute.js";const L=Object.freeze(Object.defineProperty({__proto__:null,build:function(L){const D=new w,N=L.hasMultipassTerrain&&(L.output===l.Color||L.output===l.Alpha),T=L.space===e.World;D.include(r,L),D.include(a,L),L.output===l.Depth&&D.include(d,L);const{vertex:k,fragment:M}=D;return M.include(h),g(k,L),D.attributes.add(b.POSITION,"vec3"),D.attributes.add(b.UV0,"vec2"),D.attributes.add(b.AUXPOS1,"vec3"),D.varyings.add("vColor","vec4"),D.varyings.add("vpos","vec3"),D.varyings.add("vUV","vec2"),D.varyings.add("vSize","float"),n(D),N&&D.varyings.add("depth","float"),L.hasTip&&D.varyings.add("vLineWidth","float"),k.uniforms.add([new u("nearFar",((e,r)=>r.camera.nearFar)),new y("viewport",((e,r)=>r.camera.fullViewport))]),k.code.add(z`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),k.code.add(z`void clip(vec4 pos, inout vec4 prev) {
float vnp = nearFar[0] * 0.99;
if (prev.z > -nearFar[0]) {
float interpolation = (-vnp - pos.z) / (prev.z - pos.z);
prev = mix(pos, prev, interpolation);
}
}`),T?(D.attributes.add(b.NORMAL,"vec3"),S(k),k.constants.add("tiltThreshold","float",.7),k.code.add(z`vec3 perpendicular(vec3 v) {
vec3 n = (viewNormal * vec4(normal.xyz, 1.0)).xyz;
vec3 n2 = cross(v, n);
vec3 forward = vec3(0.0, 0.0, 1.0);
float tiltDot = dot(forward, n);
return abs(tiltDot) < tiltThreshold ? n : n2;
}`)):k.code.add(z`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}`),k.code.add(z`
      #define vecN ${T?"vec3":"vec2"}

      vecN normalizedSegment(vecN pos, vecN prev) {
        vecN segment = pos - prev;
        float segmentLen = length(segment);

        // normalize or zero if too short
        return (segmentLen > 0.001) ? segment / segmentLen : ${T?"vec3(0.0, 0.0, 0.0)":"vec2(0.0, 0.0)"};
      }

      vecN displace(vecN pos, vecN prev, float displacementLen) {
        vecN segment = normalizedSegment(pos, prev);

        vecN displacementDirU = perpendicular(segment);
        vecN displacementDirV = segment;

        ${L.anchor===o.Tip?"pos -= 0.5 * displacementLen * displacementDirV;":""}

        return pos + displacementLen * (uv0.x * displacementDirU + uv0.y * displacementDirV);
      }
    `),L.space===e.Screen&&(k.uniforms.add(new P("inverseProjectionMatrix",((e,r)=>r.camera.inverseProjectionMatrix))),k.code.add(z`vec3 inverseProject(vec4 posScreen) {
posScreen.xy = (posScreen.xy / viewport.zw) * posScreen.w;
return (inverseProjectionMatrix * posScreen).xyz;
}`),k.code.add(z`bool rayIntersectPlane(vec3 rayDir, vec3 planeOrigin, vec3 planeNormal, out vec3 intersection) {
float cos = dot(rayDir, planeNormal);
float t = dot(planeOrigin, planeNormal) / cos;
intersection = t * rayDir;
return abs(cos) > 0.001 && t > 0.0;
}`),k.uniforms.add(new x("perScreenPixelRatio",((e,r)=>r.camera.perScreenPixelRatio))),k.code.add(z`
      vec4 toFront(vec4 displacedPosScreen, vec3 posLeft, vec3 posRight, vec3 prev, float lineWidth) {
        // Project displaced position back to camera space
        vec3 displacedPos = inverseProject(displacedPosScreen);

        // Calculate the plane that we want the marker to lie in. Note that this will always be an approximation since ribbon lines are generally
        // not planar and we do not know the actual position of the displaced prev vertices (they are offset in screen space, too).
        vec3 planeNormal = normalize(cross(posLeft - posRight, posLeft - prev));
        vec3 planeOrigin = posLeft;

        ${L.hasCap?"\n                if(prev.z > posLeft.z) {\n                  vec2 diff = posLeft.xy - posRight.xy;\n                  planeOrigin.xy += perpendicular(diff) / 2.0;\n                }\n              ":""};

        // Move the plane towards the camera by a margin dependent on the line width (approximated in world space). This tolerance corrects for the
        // non-planarity in most cases, but sharp joins can place the prev vertices at arbitrary positions so markers can still clip.
        float offset = lineWidth * perScreenPixelRatio;
        planeOrigin *= (1.0 - offset);

        // Intersect camera ray with the plane and make sure it is within clip space
        vec3 rayDir = normalize(displacedPos);
        vec3 intersection;
        if (rayIntersectPlane(rayDir, planeOrigin, planeNormal, intersection) && intersection.z < -nearFar[0] && intersection.z > -nearFar[1]) {
          return vec4(intersection.xyz, 1.0);
        }

        // Fallback: use depth of pos or prev, whichever is closer to the camera
        float minDepth = planeOrigin.z > prev.z ? length(planeOrigin) : length(prev);
        displacedPos *= minDepth / length(displacedPos);
        return vec4(displacedPos.xyz, 1.0);
      }
  `)),k.uniforms.add(new x("pixelRatio",((e,r)=>r.camera.pixelRatio))),c(D),k.code.add(z`void main(void) {
if (uv0.y == 0.0) {
gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
}
else {
float lineWidth = getLineWidth();
float screenMarkerSize = getScreenMarkerSize();
vec4 pos  = view * vec4(position.xyz, 1.0);
vec4 prev = view * vec4(auxpos1.xyz, 1.0);
clip(pos, prev);`),T?(L.hideOnShortSegments&&k.code.add(z`if (areWorldMarkersHidden(pos, prev)) {
gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
return;
}`),k.code.add(z`pos.xyz = displace(pos.xyz, prev.xyz, getWorldMarkerSize(pos));
vec4 displacedPosScreen = projectAndScale(pos);`)):(k.code.add(z`vec4 posScreen = projectAndScale(pos);
vec4 prevScreen = projectAndScale(prev);
vec4 displacedPosScreen = posScreen;
displacedPosScreen.xy = displace(posScreen.xy, prevScreen.xy, screenMarkerSize);`),L.space===e.Screen&&k.code.add(z`vec2 displacementDirU = perpendicular(normalizedSegment(posScreen.xy, prevScreen.xy));
vec3 lineRight = inverseProject(posScreen + lineWidth * vec4(displacementDirU.xy, 0.0, 0.0));
vec3 lineLeft = pos.xyz + (pos.xyz - lineRight);
pos = toFront(displacedPosScreen, lineLeft, lineRight, prev.xyz, lineWidth);
displacedPosScreen = projectAndScale(pos);`)),k.code.add(z`
        ${N?"depth = pos.z;":""}
        linearDepth = calculateLinearDepth(nearFar,pos.z);

        // Convert back into NDC
        displacedPosScreen.xy = (displacedPosScreen.xy / viewport.zw) * displacedPosScreen.w;

        // Convert texture coordinate into [0,1]
        vUV = (uv0 + 1.0) / 2.0;

        ${T?"":"vUV *= displacedPosScreen.w;"}

        ${L.hasTip?"vLineWidth = lineWidth;":""}

        vSize = screenMarkerSize;
        vColor = getColor();

        // Use camera space for slicing
        vpos = pos.xyz;

        gl_Position = displacedPosScreen;
      }
    }
  `),N&&D.include(v,L),D.include(p,L),M.uniforms.add([new y("intrinsicColor",(e=>e.color)),new C("tex",(e=>e.texture))]),M.include(f),D.constants.add("texelSize","float",1/t),M.code.add(z`float markerAlpha(vec2 samplePos) {
samplePos += vec2(0.5, -0.5) * texelSize;
float sdf = rgba2float(texture(tex, samplePos)) - 0.5;
float distance = sdf * vSize;
distance -= 0.5;
return clamp(0.5 - distance, 0.0, 1.0);
}`),L.hasTip&&(D.constants.add("relativeMarkerSize","float",i/t),D.constants.add("relativeTipLineWidth","float",s),M.code.add(z`
    float tipAlpha(vec2 samplePos) {
      // Convert coordinates s.t. they are in pixels and relative to the tip of an arrow marker
      samplePos -= vec2(0.5, 0.5 + 0.5 * relativeMarkerSize);
      samplePos *= vSize;

      float halfMarkerSize = 0.5 * relativeMarkerSize * vSize;
      float halfTipLineWidth = 0.5 * max(1.0, relativeTipLineWidth * vLineWidth);

      ${T?"halfTipLineWidth *= fwidth(samplePos.y);":""}

      float distance = max(abs(samplePos.x) - halfMarkerSize, abs(samplePos.y) - halfTipLineWidth);
      return clamp(0.5 - distance, 0.0, 1.0);
    }
  `)),D.constants.add("symbolAlphaCutoff","float",m),M.code.add(z`
  void main() {
    discardBySlice(vpos);
    ${N?"terrainDepthTest(gl_FragCoord, depth);":""}

    vec4 finalColor = intrinsicColor * vColor;

    ${T?"vec2 samplePos = vUV;":"vec2 samplePos = vUV * gl_FragCoord.w;"}

    ${L.hasTip?"finalColor.a *= max(markerAlpha(samplePos), tipAlpha(samplePos));":"finalColor.a *= markerAlpha(samplePos);"}

    ${L.output===l.ObjectAndLayerIdColor?z`finalColor.a = 1.0;`:""}

    if (finalColor.a < symbolAlphaCutoff) {
      discard;
    }

    ${L.output===l.Alpha?z`fragColor = vec4(finalColor.a);`:""}
    ${L.output===l.Color?z`fragColor = highlightSlice(finalColor, vpos);`:""}
    ${L.output===l.Color&&L.transparencyPassType===j.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    ${L.output===l.Highlight?z`fragColor = vec4(1.0);`:""}
    ${L.output===l.Depth?z`outputDepth(linearDepth);`:""}
  }
  `),D}},Symbol.toStringTag,{value:"Module"}));export{L};
