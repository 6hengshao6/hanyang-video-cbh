/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{g as o}from"./interfaces2.js";import{_ as e}from"./tslib.es6.js";import{s as r,d as a}from"./vec3.js";import{S as i}from"./ShaderOutput.js";import{D as t,c as l}from"./ForwardLinearDepth.glsl.js";import{F as s,c as n,a as d}from"./View.glsl.js";import{p as c,S as m}from"./ShaderTechniqueConfiguration.js";import{V as u}from"./VertexAttribute.js";import{a as p,b as v}from"./doublePrecisionUtils.js";import{C as f}from"./symbolColorUtils.js";import{I as x,T as h}from"./BooleanPassUniform.js";import{n as g}from"./Material.js";import{i as b}from"./maybe.js";import{I as M}from"./mat4f64.js";import{S as C}from"./Slice.glsl.js";import{T as y}from"./Transform.glsl.js";import{N as O,c as w,b as j}from"./VertexNormal.glsl.js";import{O as A}from"./ObjectAndLayerIdColor.glsl.js";import{O as T}from"./OutputDepth.glsl.js";import{O as P}from"./OutputHighlight.glsl.js";import{V as D}from"./VisualVariables.glsl.js";import{D as I}from"./DiscardOrAdjustAlphaBlend.glsl.js";import{U as $,B as S}from"./ShaderBuilder.js";import{F as V}from"./FloatPassUniform.js";import{A as N}from"./basicInterfaces.js";import{M as L}from"./Matrix4PassUniform.js";import{T as _}from"./Texture2DPassUniform.js";import{C as z}from"./ColorConversion.glsl.js";function B(e){e.vertex.code.add(o`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function k(e,a){a.instanced&&a.instancedDoublePrecision&&(e.attributes.add(u.MODELORIGINHI,"vec3"),e.attributes.add(u.MODELORIGINLO,"vec3"),e.attributes.add(u.MODEL,"mat3"),e.attributes.add(u.MODELNORMAL,"mat3"));const l=e.vertex;a.instancedDoublePrecision&&(l.include(t,a),l.uniforms.add(new s("viewOriginHi",((o,e)=>p(r(U,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),U)))),l.uniforms.add(new s("viewOriginLo",((o,e)=>v(r(U,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),U))))),l.code.add(o`
    vec3 calculateVPos() {
      ${a.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),l.code.add(o`
    vec3 subtractOrigin(vec3 _pos) {
      ${a.instancedDoublePrecision?o`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),l.code.add(o`
    vec3 dpNormal(vec4 _normal) {
      ${a.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),a.output===i.Normal&&(n(l),l.code.add(o`
    vec3 dpNormalView(vec4 _normal) {
      ${a.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),a.hasVertexTangents&&l.code.add(o`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${a.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}e([c()],class extends m{constructor(){super(...arguments),this.instancedDoublePrecision=!1}}.prototype,"instancedDoublePrecision",void 0);const U=a();function W(e){e.vertex.code.add(o`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${o.int(f.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${o.int(f.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${o.int(f.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${o.int(f.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function R(e,r){r.hasSymbolColors?(e.include(W),e.attributes.add(u.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(o`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new x("colorMixMode",(o=>g[o.colorMixMode]))),e.vertex.code.add(o`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}class H extends ${constructor(o,e){super(o,"float",S.Draw,((r,a,i)=>r.setUniform1f(o,e(a,i))))}}function F(o,e){G(o,e,new V("textureAlphaCutoff",(o=>o.textureAlphaCutoff)))}function E(o,e){G(o,e,new H("textureAlphaCutoff",(o=>o.textureAlphaCutoff)))}function G(e,r,a){const i=e.fragment;switch(r.alphaDiscardMode!==N.Mask&&r.alphaDiscardMode!==N.MaskBlend||i.uniforms.add(a),r.alphaDiscardMode){case N.Blend:return e.include(I);case N.Opaque:i.code.add(o`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case N.Mask:i.code.add(o`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case N.MaskBlend:e.fragment.code.add(o`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function q(e,r){const{vertex:a,fragment:t}=e,s=r.hasModelTransformation;s&&a.uniforms.add(new L("model",(o=>b(o.modelTransformation)?o.modelTransformation:M)));const n=r.hasColorTexture&&r.alphaDiscardMode!==N.Opaque;switch(r.output){case i.Depth:case i.Shadow:case i.ShadowHighlight:case i.ShadowExcludeHighlight:case i.ObjectAndLayerIdColor:d(a,r),e.include(y,r),e.include(h,r),e.include(D,r),e.include(T,r),e.include(C,r),e.include(A,r),l(e),e.varyings.add("depth","float"),n&&t.uniforms.add(new _("tex",(o=>o.texture))),a.code.add(o`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, ${s?"model,":""} vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),e.include(F,r),t.code.add(o`
          void main(void) {
            discardBySlice(vpos);
            ${n?o`
                    vec4 texColor = texture(tex, ${r.hasColorTextureTransform?o`colorUV`:o`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${r.output===i.ObjectAndLayerIdColor?o`outputObjectAndLayerIdColor();`:o`outputDepth(depth);`}
          }
        `);break;case i.Normal:d(a,r),e.include(y,r),e.include(O,r),e.include(w,r),e.include(h,r),e.include(D,r),n&&t.uniforms.add(new _("tex",(o=>o.texture))),e.varyings.add("vPositionView","vec3"),a.code.add(o`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            ${r.normalType===j.Attribute?o`
            vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${s?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),e.include(C,r),e.include(F,r),t.code.add(o`
          void main() {
            discardBySlice(vpos);
            ${n?o`
                    vec4 texColor = texture(tex, ${r.hasColorTextureTransform?o`colorUV`:o`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${r.normalType===j.ScreenDerivative?o`
                vec3 normal = screenDerivativeNormal(vPositionView);`:o`
                vec3 normal = normalize(vNormalWorld);
                if (gl_FrontFacing == false) normal = -normal;`}
            fragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
          }
        `);break;case i.Highlight:d(a,r),e.include(y,r),e.include(h,r),e.include(D,r),n&&t.uniforms.add(new _("tex",(o=>o.texture))),a.code.add(o`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${s?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),e.include(C,r),e.include(F,r),e.include(P,r),t.code.add(o`
          void main() {
            discardBySlice(vpos);
            ${n?o`
                    vec4 texColor = texture(tex, ${r.hasColorTextureTransform?o`colorUV`:o`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function X(e){e.include(z),e.code.add(o`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${o.int(f.Multiply)}) {
        return allMixed;
      }
      if (mode == ${o.int(f.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${o.int(f.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${o.int(f.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${o.int(f.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}export{W as D,H as F,k as I,X as M,B as O,R as S,E as a,F as b,q as c};
