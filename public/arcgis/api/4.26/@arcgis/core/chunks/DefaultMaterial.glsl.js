/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{i as o}from"./maybe.js";import{I as e}from"./mat4f64.js";import{P as a,F as r}from"./ForwardLinearDepth.glsl.js";import{I as t,O as s,S as n,b as i,M as l,c}from"./MixExternalColor.glsl.js";import{S as d}from"./ShaderOutput.js";import{S as m}from"./Slice.glsl.js";import{T as u}from"./Transform.glsl.js";import{N as v,b as x,c as f}from"./VertexNormal.glsl.js";import{d as p,V as T,T as g,g as h,R as y,f as C,i as w,b as M,P as b}from"./BooleanPassUniform.js";import{V}from"./VertexColor.glsl.js";import{V as N}from"./VerticalOffset.glsl.js";import{N as j,a as S}from"./Normals.glsl.js";import{g as O}from"./interfaces2.js";import{T as $}from"./Texture2DDrawUniform.js";import{T as P}from"./Texture2DPassUniform.js";import{B as U,S as E}from"./ShaderBuilder.js";import{V as A}from"./VertexAttribute.js";import{E as F,a as _,b as B,c as D}from"./EvaluateSceneLighting.glsl.js";import{m as L}from"./MultipassTerrainTest.glsl.js";import{c as R}from"./mat3f32.js";import{M as z}from"./Matrix3PassUniform.js";import{V as I}from"./VisualVariables.glsl.js";import{s as W}from"./AlphaCutoff.js";import{a as G,b as k}from"./View.glsl.js";import{F as H}from"./Float3PassUniform.js";import{F as Q}from"./Float4PassUniform.js";import{F as q}from"./FloatPassUniform.js";import{M as J}from"./Matrix4PassUniform.js";import{T as K}from"./TransparencyPassType.js";function X(o,e){const a=o.fragment;e.hasVertexTangents?(o.attributes.add(A.TANGENT,"vec4"),o.varyings.add("vTangent","vec4"),e.doubleSidedMode===j.WindingOrder?a.code.add(O`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):a.code.add(O`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):a.code.add(O`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),e.textureCoordinateType!==p.None&&(o.include(T,e),a.uniforms.add(e.pbrTextureBindType===U.Pass?new P("normalTexture",(o=>o.textureNormal)):new $("normalTexture",(o=>o.textureNormal))),a.code.add(O`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;
return tangentSpace * rawNormal;
}`))}function Y(e){e.vertex.uniforms.add(new z("colorTextureTransformMatrix",(e=>o(e.colorTextureTransformMatrix)?e.colorTextureTransformMatrix:R()))),e.varyings.add("colorUV","vec2"),e.vertex.code.add(O`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Z(e){e.vertex.uniforms.add(new z("normalTextureTransformMatrix",(e=>o(e.normalTextureTransformMatrix)?e.normalTextureTransformMatrix:R()))),e.varyings.add("normalUV","vec2"),e.vertex.code.add(O`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function oo(e){e.vertex.uniforms.add(new z("emissiveTextureTransformMatrix",(e=>o(e.emissiveTextureTransformMatrix)?e.emissiveTextureTransformMatrix:R()))),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(O`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function eo(e){e.vertex.uniforms.add(new z("occlusionTextureTransformMatrix",(e=>o(e.occlusionTextureTransformMatrix)?e.occlusionTextureTransformMatrix:R()))),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(O`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function ao(e){e.vertex.uniforms.add(new z("metallicRoughnessTextureTransformMatrix",(e=>o(e.metallicRoughnessTextureTransformMatrix)?e.metallicRoughnessTextureTransformMatrix:R()))),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(O`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}const ro=Object.freeze(Object.defineProperty({__proto__:null,build:function(p){const T=new E,{vertex:j,fragment:$,varyings:U}=T;return G(j,p),T.include(a),U.add("vpos","vec3"),T.include(I,p),T.include(t,p),T.include(N,p),p.hasColorTextureTransform&&T.include(Y),p.output!==d.Color&&p.output!==d.Alpha||(p.hasNormalTextureTransform&&T.include(Z),p.hasEmissionTextureTransform&&T.include(oo),p.hasOcclusionTextureTransform&&T.include(eo),p.hasMetallicRoughnessTextureTransform&&T.include(ao),k(j,p),T.include(v,p),T.include(u,p),p.normalType===x.Attribute&&p.offsetBackfaces&&T.include(s),T.include(X,p),T.include(f,p),p.instancedColor&&T.attributes.add(A.INSTANCECOLOR,"vec4"),U.add("localvpos","vec3"),T.include(g,p),T.include(r,p),T.include(n,p),T.include(V,p),j.uniforms.add(new Q("externalColor",(o=>o.externalColor))),U.add("vcolorExt","vec4"),p.hasMultipassTerrain&&U.add("depth","float"),p.hasModelTransformation&&j.uniforms.add(new J("model",(a=>o(a.modelTransformation)?a.modelTransformation:e))),j.code.add(O`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${p.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${O.float(W)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${p.normalType===x.Attribute?O`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${p.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${p.hasModelTransformation?"model,":""} vpos);
          ${p.normalType===x.Attribute&&p.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${p.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${p.hasColorTextureTransform?O`forwardColorUV();`:""}
        ${p.hasNormalTextureTransform?O`forwardNormalUV();`:""}
        ${p.hasEmissionTextureTransform?O`forwardEmissiveUV();`:""}
        ${p.hasOcclusionTextureTransform?O`forwardOcclusionUV();`:""}
        ${p.hasMetallicRoughnessTextureTransform?O`forwardMetallicRoughnessUV();`:""}
      }
    `)),p.output===d.Alpha&&(T.include(m,p),T.include(i,p),T.include(L,p),$.uniforms.add([new q("opacity",(o=>o.opacity)),new q("layerOpacity",(o=>o.layerOpacity))]),p.hasColorTexture&&$.uniforms.add(new P("tex",(o=>o.texture))),$.include(l),$.code.add(O`
      void main() {
        discardBySlice(vpos);
        ${p.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${p.hasColorTexture?O`
                vec4 texColor = texture(tex, ${p.hasColorTextureTransform?O`colorUV`:O`vuv0`});
                ${p.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:O`vec4 texColor = vec4(1.0);`}
        ${p.hasVertexColors?O`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:O`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `)),p.output===d.Color&&(T.include(m,p),T.include(F,p),T.include(_,p),T.include(i,p),T.include(p.instancedDoublePrecision?h:y,p),T.include(L,p),k($,p),$.uniforms.add([j.uniforms.get("localOrigin"),new H("ambient",(o=>o.ambient)),new H("diffuse",(o=>o.diffuse)),new q("opacity",(o=>o.opacity)),new q("layerOpacity",(o=>o.layerOpacity))]),p.hasColorTexture&&$.uniforms.add(new P("tex",(o=>o.texture))),T.include(C,p),T.include(w,p),$.include(l),T.include(S,p),B($),D($),M($),$.code.add(O`
      void main() {
        discardBySlice(vpos);
        ${p.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${p.hasColorTexture?O`
                vec4 texColor = texture(tex, ${p.hasColorTextureTransform?O`colorUV`:O`vuv0`});
                ${p.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:O`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${p.normalType===x.ScreenDerivative?O`
                vec3 normal = screenDerivativeNormal(localvpos);`:O`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${p.pbrMode===b.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${p.receiveShadows?"readShadowMap(vpos, linearDepth)":p.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${p.hasVertexColors?O`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:O`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${p.hasNormalTexture?O`
                mat3 tangentSpace = ${p.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${p.hasNormalTextureTransform?O`normalUV`:"vuv0"});`:O`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${p.spherical?O`normalize(posWorld);`:O`vec3(0.0, 0.0, 1.0);`}

        ${p.snowCover?O`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${p.pbrMode===b.Normal||p.pbrMode===b.Schematic?O`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${p.snowCover?O`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:O`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${p.transparencyPassType===K.Color?O`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)),T.include(c,p),T}},Symbol.toStringTag,{value:"Module"}));export{X as C,ro as D};
