/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{c as o,a as r}from"./ForwardLinearDepth.glsl.js";import{S as t}from"./ShaderOutput.js";import{S as e}from"./Slice.glsl.js";import{T as s}from"./Transform.glsl.js";import{O as a}from"./ObjectAndLayerIdColor.glsl.js";import{V as l}from"./VertexColor.glsl.js";import{O as i}from"./OutputDepth.glsl.js";import{O as p}from"./OutputHighlight.glsl.js";import{m as d}from"./MultipassTerrainTest.glsl.js";import{s as n}from"./AlphaCutoff.js";import{C as u}from"./ColorConversion.glsl.js";import{a as m}from"./View.glsl.js";import{F as f}from"./Float4PassUniform.js";import{g as c}from"./interfaces2.js";import{S as g}from"./ShaderBuilder.js";import{T as h}from"./TransparencyPassType.js";import{V as C}from"./VertexAttribute.js";const j=Object.freeze(Object.defineProperty({__proto__:null,build:function(j){const v=new g,{vertex:O,fragment:y,varyings:T}=v;m(O,j),v.include(s,j),v.include(l,j),v.include(a,j),v.attributes.add(C.POSITION,"vec3"),T.add("vpos","vec3");const $=j.hasMultipassTerrain&&(j.output===t.Color||j.output===t.Alpha);$&&T.add("depth","float");const b=j.output===t.Depth;b&&(v.include(i,j),o(v),r(v)),O.code.add(c`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();
      ${$?"depth = (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = ${b?c`transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);`:c`transformPosition(proj, view, vpos);`}
    }
  `),v.include(e,j),$&&v.include(d,j),y.include(u),y.uniforms.add(new f("eColor",(o=>o.color)));const S=j.output===t.Highlight;return S&&v.include(p,j),y.code.add(c`
  void main() {
    discardBySlice(vpos);
    ${$?"terrainDepthTest(gl_FragCoord, depth);":""}
    vec4 fColor = ${j.hasVertexColors?"vColor * eColor;":"eColor;"}

    ${j.output===t.ObjectAndLayerIdColor?c`fColor.a = 1.0;`:""}

    if (fColor.a < ${c.float(n)}) {
      discard;
    }

    ${j.output===t.Alpha?c`fragColor = vec4(fColor.a);`:""}

    ${j.output===t.Color?c`fragColor = highlightSlice(fColor, vpos); ${j.transparencyPassType===h.Color?"fragColor = premultiplyAlpha(fragColor);":""}`:""}
    ${S?c`outputHighlight();`:""};
    ${j.output===t.Depth?c`outputDepth(linearDepth);`:""};
    ${j.output===t.ObjectAndLayerIdColor?c`outputObjectAndLayerIdColor();`:""}
  }
  `),v}},Symbol.toStringTag,{value:"Module"}));export{j as C};
