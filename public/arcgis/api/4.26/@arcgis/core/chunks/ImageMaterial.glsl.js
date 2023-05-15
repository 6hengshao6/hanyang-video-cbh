/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{i as r}from"./maybe.js";import{O as o}from"./vec2f64.js";import{S as a}from"./ShaderOutput.js";import{S as e}from"./Slice.glsl.js";import{T as t}from"./Transform.glsl.js";import{m as s}from"./MultipassTerrainTest.glsl.js";import{d as i}from"./AlphaCutoff.js";import{C as d}from"./ColorConversion.glsl.js";import{a as l}from"./View.glsl.js";import{F as p}from"./RgbaFloatEncoding.glsl.js";import{F as n}from"./FloatPassUniform.js";import{g as m}from"./interfaces2.js";import{S as c}from"./ShaderBuilder.js";import{T as f}from"./Texture2DPassUniform.js";import{T as u}from"./TransparencyPassType.js";import{V as v}from"./VertexAttribute.js";const g=Object.freeze(Object.defineProperty({__proto__:null,build:function(g){const C=new c,{vertex:T,fragment:h}=C;return l(T,g),C.include(t,g),C.attributes.add(v.POSITION,"vec3"),C.attributes.add(v.UV0,"vec2"),C.varyings.add("vpos","vec3"),g.hasMultipassTerrain&&C.varyings.add("depth","float"),T.uniforms.add(new p("textureCoordinateScaleFactor",(a=>r(a.texture)&&r(a.texture.descriptor.textureCoordinateScaleFactor)?a.texture.descriptor.textureCoordinateScaleFactor:o))),T.code.add(m`
    void main(void) {
      vpos = position;
      ${g.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),C.include(e,g),C.include(s,g),h.uniforms.add([new f("tex",(r=>r.texture)),new n("opacity",(r=>r.opacity))]),C.varyings.add("vTexCoord","vec2"),g.output===a.Alpha?h.code.add(m`
    void main() {
      discardBySlice(vpos);
      ${g.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture(tex, vTexCoord).a * opacity;
      if (alpha  < ${m.float(i)}) {
        discard;
      }

      fragColor = vec4(alpha);
    }
    `):(h.include(d),h.code.add(m`
    void main() {
      discardBySlice(vpos);
      ${g.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${m.float(i)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${g.transparencyPassType===u.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    }
    `)),C}},Symbol.toStringTag,{value:"Module"}));export{g as I};
