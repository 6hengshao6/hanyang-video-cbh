/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{a}from"./View.glsl.js";import{F as t}from"./FloatPassUniform.js";import{g as e}from"./interfaces2.js";import{S as o}from"./ShaderBuilder.js";import{V as i}from"./VertexAttribute.js";const r=Object.freeze(Object.defineProperty({__proto__:null,build:function(r){const s=new o,{vertex:d,fragment:u}=s;a(d,r);const{isAttributeDriven:n,usesHalfFloat:l}=r;return s.attributes.add(i.POSITION,"vec3"),s.attributes.add(i.UV0,"vec2"),n&&(s.attributes.add(i.FEATUREATTRIBUTE,"float"),s.varyings.add("attributeValue","float")),l&&s.constants.add("compressionFactor","float",.25),s.varyings.add("unitCirclePos","vec2"),d.uniforms.add(new t("radius",(({resolutionForScale:a,searchRadius:t},{camera:e,screenToWorldRatio:o})=>2*t*(0===a?1:a/o)*e.pixelRatio/e.fullViewport[2]))),d.code.add(e`
    void main() {
      unitCirclePos = uv0;

      vec4 posProj = proj * (view * vec4(${i.POSITION}, 1.0));
      vec4 quadOffset = vec4(unitCirclePos * radius, 0.0, 0.0);

      ${n?e`attributeValue = ${i.FEATUREATTRIBUTE};`:""}
      gl_Position = posProj + quadOffset;
    }
  `),u.code.add(e`
    void main() {
      float radiusRatioSquared = dot(unitCirclePos, unitCirclePos);
      if (radiusRatioSquared > 1.0) {
        discard;
      }

      float oneMinusRadiusRatioSquared = 1.0 - radiusRatioSquared;
      float density = oneMinusRadiusRatioSquared * oneMinusRadiusRatioSquared ${n?e` * attributeValue`:""} ${l?e` * compressionFactor`:""};
      fragColor = vec4(density);
    }
  `),s}},Symbol.toStringTag,{value:"Module"}));export{r as H};
