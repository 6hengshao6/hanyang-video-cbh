/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{c as e,a as o}from"./ForwardLinearDepth.glsl.js";import{S as t}from"./ShaderOutput.js";import{S as a}from"./Slice.glsl.js";import{T as r}from"./Transform.glsl.js";import{V as i}from"./VertexColor.glsl.js";import{O as l}from"./OutputDepth.glsl.js";import{O as n}from"./OutputHighlight.glsl.js";import{m as c}from"./MultipassTerrainTest.glsl.js";import{s}from"./AlphaCutoff.js";import{C as d}from"./ColorConversion.glsl.js";import{a as p,b as u}from"./View.glsl.js";import{F as m}from"./Float4PassUniform.js";import{F as f}from"./FloatPassUniform.js";import{g as v}from"./interfaces2.js";import{S as g}from"./ShaderBuilder.js";import{T as h}from"./TransparencyPassType.js";import{V as S}from"./VertexAttribute.js";var w;!function(e){e[e.Horizontal=0]="Horizontal",e[e.Vertical=1]="Vertical",e[e.Cross=2]="Cross",e[e.ForwardDiagonal=3]="ForwardDiagonal",e[e.BackwardDiagonal=4]="BackwardDiagonal",e[e.DiagonalCross=5]="DiagonalCross",e[e.COUNT=6]="COUNT"}(w||(w={}));const y=.70710678118,j=y,C=Object.freeze(Object.defineProperty({__proto__:null,build:function(C){const T=new g,x=C.hasMultipassTerrain&&(C.output===t.Color||C.output===t.Alpha),{vertex:D,fragment:P}=T;p(D,C),T.include(r,C),T.include(i,C),C.draped?D.uniforms.add(new f("worldToScreenRatio",((e,o)=>1/o.screenToPCSRatio))):T.attributes.add(S.BOUNDINGRECT,"mat3"),T.attributes.add(S.POSITION,"vec3"),T.attributes.add(S.UVMAPSPACE,"vec4"),T.varyings.add("vpos","vec3"),T.varyings.add("vuv","vec2"),x&&T.varyings.add("depth","float");const b=C.style===w.ForwardDiagonal||C.style===w.BackwardDiagonal||C.style===w.DiagonalCross;b&&D.code.add(v`
      const mat2 rotate45 = mat2(${v.float(y)}, ${v.float(-j)},
                                 ${v.float(j)}, ${v.float(y)});
    `),C.draped||(u(D,C),D.uniforms.add(new f("worldToScreenPerDistanceRatio",((e,o)=>1/o.camera.perScreenPixelRatio))),D.code.add(v`vec3 projectPointToLineSegment(vec3 center, vec3 halfVector, vec3 point) {
float projectedLength = dot(halfVector, point - center) / dot(halfVector, halfVector);
return center + halfVector * clamp(projectedLength, -1.0, 1.0);
}`),D.code.add(v`vec3 intersectRayPlane(vec3 rayDir, vec3 rayOrigin, vec3 planeNormal, vec3 planePoint) {
float d = dot(planeNormal, planePoint);
float t = (d - dot(planeNormal, rayOrigin)) / dot(planeNormal, rayDir);
return rayOrigin + t * rayDir;
}`),D.code.add(v`
      float boundingRectDistanceToCamera() {
        vec3 center = vec3(boundingRect[0][0], boundingRect[0][1], boundingRect[0][2]);
        vec3 halfU = vec3(boundingRect[1][0], boundingRect[1][1], boundingRect[1][2]);
        vec3 halfV = vec3(boundingRect[2][0], boundingRect[2][1], boundingRect[2][2]);
        vec3 n = normalize(cross(halfU, halfV));

        vec3 viewDir = - vec3(view[0][2], view[1][2], view[2][2]);

        float viewAngle = dot(viewDir, n);
        float minViewAngle = ${v.float(.08715574274)};

        if (abs(viewAngle) < minViewAngle) {
          // view direction is (almost) parallel to plane -> clamp it to min angle
          float normalComponent = sign(viewAngle) * minViewAngle - viewAngle;
          viewDir = normalize(viewDir + normalComponent * n);
        }

        // intersect view direction with infinite plane that contains bounding rect
        vec3 planeProjected = intersectRayPlane(viewDir, cameraPosition, n, center);

        // clip to bounds by projecting to u and v line segments individually
        vec3 uProjected = projectPointToLineSegment(center, halfU, planeProjected);
        vec3 vProjected = projectPointToLineSegment(center, halfV, planeProjected);

        // use to calculate the closest point to camera on bounding rect
        vec3 closestPoint = uProjected + vProjected - center;

        return length(closestPoint - cameraPosition);
      }
    `)),D.code.add(v`
    vec2 scaledUV() {
      vec2 uv = uvMapSpace.xy ${b?" * rotate45":""};
      vec2 uvCellOrigin = uvMapSpace.zw ${b?" * rotate45":""};

      ${C.draped?"":v`
            float distanceToCamera = boundingRectDistanceToCamera();
            float worldToScreenRatio = worldToScreenPerDistanceRatio / distanceToCamera;
          `}

      // Logarithmically discretize ratio to avoid jittering
      float step = 0.1;
      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);

      vec2 uvOffset = mod(uvCellOrigin * discreteWorldToScreenRatio, ${v.float(C.patternSpacing)});
      return uvOffset + (uv * discreteWorldToScreenRatio);
    }
  `);const R=C.output===t.Depth;return R&&(T.include(l,C),e(T),o(T)),D.code.add(v`
    void main(void) {
      vuv = scaledUV();
      vpos = position;
      ${x?"depth = (view * vec4(vpos, 1.0)).z;":""}
      forwardNormalizedVertexColor();
      gl_Position = ${R?v`transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);`:v`transformPosition(proj, view, vpos);`}
    }
  `),T.include(a,C),P.include(d),C.draped&&P.uniforms.add(new f("texelSize",((e,o)=>1/o.camera.pixelRatio))),C.output===t.Highlight&&T.include(n,C),x&&T.include(c,C),C.output!==t.Highlight&&(P.code.add(v`
      const float lineWidth = ${v.float(C.lineWidth)};
      const float spacing = ${v.float(C.patternSpacing)};
      const float spacingINV = ${v.float(1/C.patternSpacing)};

      float coverage(float p, float txlSize) {
        p = mod(p, spacing);

        float halfTxlSize = txlSize / 2.0;

        float start = p - halfTxlSize;
        float end = p + halfTxlSize;

        float coverage = (ceil(end * spacingINV) - floor(start * spacingINV)) * lineWidth;
        coverage -= min(lineWidth, mod(start, spacing));
        coverage -= max(lineWidth - mod(end, spacing), 0.0);

        return coverage / txlSize;
      }
    `),C.draped||P.code.add(v`const int maxSamples = 5;
float sampleAA(float p) {
vec2 dxdy = abs(vec2(dFdx(p), dFdy(p)));
float fwidth = dxdy.x + dxdy.y;
ivec2 samples = 1 + ivec2(clamp(dxdy, 0.0, float(maxSamples - 1)));
vec2 invSamples = 1.0 / vec2(samples);
float accumulator = 0.0;
for (int j = 0; j < maxSamples; j++) {
if(j >= samples.y) {
break;
}
for (int i = 0; i < maxSamples; i++) {
if(i >= samples.x) {
break;
}
vec2 step = vec2(i,j) * invSamples - 0.5;
accumulator += coverage(p + step.x * dxdy.x + step.y * dxdy.y, fwidth);
}
}
accumulator /= float(samples.x * samples.y);
return accumulator;
}`)),P.uniforms.add(new m("uColor",(e=>e.color))),P.code.add(v`
    void main() {
      discardBySlice(vpos);
      ${x?"terrainDepthTest(gl_FragCoord, depth);":""}
      vec4 color = ${C.hasVertexColors?"vColor * uColor;":"uColor;"}
      color = highlightSlice(color, vpos);

      ${C.output!==t.Highlight?v`color.a *= ${function(e){function o(o){return e.draped?v`coverage(vuv.${o}, texelSize)`:v`sampleAA(vuv.${o})`}switch(e.style){case w.ForwardDiagonal:case w.Horizontal:return o("y");case w.BackwardDiagonal:case w.Vertical:return o("x");case w.DiagonalCross:case w.Cross:return v`
        1.0 - (1.0 - ${o("x")}) * (1.0 - ${o("y")})
      `;default:return"0.0"}}(C)};`:""}

      ${C.output===t.ObjectAndLayerIdColor?v`color.a = 1.0;`:""}

      if (color.a < ${v.float(s)}) {
        discard;
      }

      ${C.output===t.Alpha?v`fragColor = vec4(color.a);`:""}

      ${C.output===t.Color?v`fragColor = color; ${C.transparencyPassType===h.Color?"fragColor = premultiplyAlpha(fragColor);":""}`:""}
      ${C.output===t.Highlight?v`outputHighlight();`:""}
      ${C.output===t.Depth?v`outputDepth(linearDepth);`:""};
    }
  `),T}},Symbol.toStringTag,{value:"Module"}));export{C as P,w as S};
