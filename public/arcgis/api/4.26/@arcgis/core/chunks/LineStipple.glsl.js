/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{p as e,a as t,i}from"./maybe.js";import{R as r}from"./RgbaFloatEncoding.glsl.js";import{b as a}from"./View.glsl.js";import{F as o}from"./Float4PassUniform.js";import{F as s}from"./FloatPassUniform.js";import{N as n,g as p}from"./interfaces2.js";import{T as l}from"./Texture2DPassUniform.js";import{p as d}from"./floatRGBA.js";import{P as c,a as f,b as u}from"./enums3.js";import{T as h}from"./Texture.js";import{s as m}from"./vec4.js";import{Z as S,c as g}from"./vec4f64.js";class x{constructor(e){this._rctx=e,this._cache=new Map}destroy(){this._cache.forEach((t=>e(t.stippleTexture))),this._cache.clear()}_acquire(e){if(t(e))return null;const i=this._patternId(e),r=this._cache.get(i);if(r)return r.refCount++,r;const{encodedData:a,paddedPixels:o}=function(e){const t=T(e),i=1/e.pixelRatio,r=v(e),a=P(e),o=(Math.floor(.5*(a-1))+.5)*i,s=[];let n=1;for(const e of t){for(let t=0;t<e;t++){const r=n*(Math.min(t,e-1-t)+.5)*i/o*.5+.5;s.push(r)}n=-n}const p=Math.round(t[0]/2),l=[...s.slice(p),...s.slice(0,p)],c=r+D,f=new Uint8Array(4*c);let u=4;for(const e of l)d(e,f,u),u+=4;return f.copyWithin(0,u-4,u),f.copyWithin(u,4,8),{encodedData:f,paddedPixels:c}}(e),s=new R(new h(this._rctx,{width:o,height:1,internalFormat:c.RGBA,pixelFormat:c.RGBA,dataType:f.UNSIGNED_BYTE,wrapMode:u.CLAMP_TO_EDGE},a));return this._cache.set(i,s),s}release(e){if(t(e))return;const r=this._patternId(e),a=this._cache.get(r);a&&(a.refCount--,0===a.refCount&&(i(a.stippleTexture)&&a.stippleTexture.dispose(),this._cache.delete(r)))}swap(e,t){const i=this._acquire(t);return this.release(e),i}_patternId(e){return`${e.pattern.join(",")}-r${e.pixelRatio}`}}class R extends n{constructor(e){super(),this.stippleTexture=e,this.refCount=1}}function T(e){return e.pattern.map((t=>Math.round(t*e.pixelRatio)))}function v(e){if(t(e))return 1;const i=T(e);return Math.floor(i.reduce(((e,t)=>e+t)))}function P(e){return T(e).reduce(((e,t)=>Math.max(e,t)))}const D=2,C=g();function L(e,n){e.constants.add("stippleAlphaColorDiscard","float",.001),e.constants.add("stippleAlphaHighlightDiscard","float",.5),n.stippleEnabled?function(e,n){const d=!(n.draped&&n.stipplePreferContinuous),{vertex:c,fragment:f}=e;f.include(r),n.draped||(a(c,n),c.uniforms.add(new s("worldToScreenPerDistanceRatio",((e,t)=>1/t.camera.perScreenPixelRatio))),c.code.add(p`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),e.varyings.add("vStippleDistance","float"),n.stippleRequiresClamp&&e.varyings.add("vStippleDistanceLimits","vec2"),n.stippleRequiresStretchMeasure&&e.varyings.add("vStipplePatternStretch","float"),c.code.add(p`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${w};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),c.code.add(p`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),c.code.add(p`
    if (segmentLengthPseudoScreen >= ${d?"patternLength":"1e4"}) {
  `),c.uniforms.add(new s("pixelRatio",((e,t)=>t.camera.pixelRatio))),c.code.add(p`
        // Round the screen length to get an integer number of pattern repetitions (minimum 1).
        float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
        float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
        float segmentLengthScreenRounded = flooredRepetitions * patternLength;

        ${n.stippleRequiresStretchMeasure?p`
              float stretch = repetitions / flooredRepetitions;

              // We need to impose a lower bound on the stretch factor to prevent the dots from merging together when there is only 1 repetition.
              // 0.75 is the lowest possible stretch value for flooredRepetitions > 1, so it makes sense as lower bound.
              vStipplePatternStretch = max(0.75, stretch);`:""}

        return vec2(0.0, segmentLengthScreenRounded);
      }
      return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
    }
  `),f.constants.add("stippleTexturePadding","float",D),f.uniforms.add(new l("stipplePatternTexture",(e=>e.stippleTexture))),f.uniforms.add([new s("stipplePatternSDFNormalizer",(e=>{return t=e.stipplePattern,i(t)?(Math.floor(.5*(P(t)-1))+.5)/t.pixelRatio:1;var t})),new s("stipplePatternPixelSizeInv",(e=>1/_(e)))]),f.code.add(p`float padStippleTexture(float u) {
float paddedTextureSize = float(textureSize(stipplePatternTexture, 0).x);
float unpaddedTextureSize = paddedTextureSize - stippleTexturePadding;
return (u * unpaddedTextureSize + stippleTexturePadding * 0.5) / paddedTextureSize;
}`),f.code.add(p`
    float getStippleSDF(out bool isClamped) {
      ${n.stippleRequiresClamp?p`
          float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
          vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
          isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;`:p`
          float stippleDistanceClamped = vStippleDistance;
          isClamped = false;`}

      float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv;
      ${n.stippleScaleWithLineWidth?p`u *= vLineSizeInv;`:""}
      u = padStippleTexture(fract(u));

      float encodedSDF = rgba2float(texture(stipplePatternTexture, vec2(u, 0.5)));
      float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;

      ${n.stippleRequiresStretchMeasure?p`return (sdf - 0.5) * vStipplePatternStretch + 0.5;`:p`return sdf;`}
    }

    float getStippleSDF() {
      bool ignored;
      return getStippleSDF(ignored);
    }

    float getStippleAlpha() {
      bool isClamped;
      float stippleSDF = getStippleSDF(isClamped);

      float antiAliasedResult = ${n.stippleScaleWithLineWidth?p`clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);`:p`clamp(stippleSDF + 0.5, 0.0, 1.0);`}

      return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
    }
  `),n.stippleOffColorEnabled?(f.uniforms.add(new o("stippleOffColor",(e=>{return i=e.stippleOffColor,t(i)?S:4===i.length?i:m(C,i[0],i[1],i[2],1);var i}))),f.code.add(p`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`)):f.code.add(p`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}(e,n):function(e){e.fragment.code.add(p`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)}(e)}function _(e){const t=e.stipplePattern;return i(t)?v(e.stipplePattern)/t.pixelRatio:1}const w=p.float(.4);export{L,x as S,_ as c};
