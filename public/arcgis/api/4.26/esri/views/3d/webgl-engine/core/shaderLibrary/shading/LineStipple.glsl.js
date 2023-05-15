// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../core/maybe ../util/RgbaFloatEncoding.glsl ../util/View.glsl ../../shaderModules/Float4PassUniform ../../shaderModules/FloatPassUniform ../../shaderModules/interfaces ../../shaderModules/Texture2DPassUniform ../../../materials/StippleTextureRepository ../../../shaders/ensureColor4".split(" "),function(h,m,p,q,r,g,a,t,k,u){function v(d,b){const w=!(b.draped&&b.stipplePreferContinuous),{vertex:f,fragment:e}=d;e.include(p.RgbaFloatEncoding);b.draped||(q.addCameraPosition(f,
b),f.uniforms.add(new g.FloatPassUniform("worldToScreenPerDistanceRatio",(c,l)=>1/l.camera.perScreenPixelRatio)),f.code.add(a.glsl`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`));d.varyings.add("vStippleDistance","float");b.stippleRequiresClamp&&d.varyings.add("vStippleDistanceLimits","vec2");b.stippleRequiresStretchMeasure&&d.varyings.add("vStipplePatternStretch","float");f.code.add(a.glsl`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${x};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `);f.code.add(a.glsl`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`);f.code.add(a.glsl`
    if (segmentLengthPseudoScreen >= ${w?"patternLength":"1e4"}) {
  `);f.uniforms.add(new g.FloatPassUniform("pixelRatio",(c,l)=>l.camera.pixelRatio));f.code.add(a.glsl`
        // Round the screen length to get an integer number of pattern repetitions (minimum 1).
        float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
        float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
        float segmentLengthScreenRounded = flooredRepetitions * patternLength;

        ${b.stippleRequiresStretchMeasure?a.glsl`
              float stretch = repetitions / flooredRepetitions;

              // We need to impose a lower bound on the stretch factor to prevent the dots from merging together when there is only 1 repetition.
              // 0.75 is the lowest possible stretch value for flooredRepetitions > 1, so it makes sense as lower bound.
              vStipplePatternStretch = max(0.75, stretch);`:""}

        return vec2(0.0, segmentLengthScreenRounded);
      }
      return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
    }
  `);e.constants.add("stippleTexturePadding","float",k.STIPPLE_TEXTURE_PADDING);e.uniforms.add(new t.Texture2DPassUniform("stipplePatternTexture",c=>c.stippleTexture));e.uniforms.add([new g.FloatPassUniform("stipplePatternSDFNormalizer",c=>{c=c.stipplePattern;return m.isSome(c)?(Math.floor(.5*(k.computeLongestPattern(c)-1))+.5)/c.pixelRatio:1}),new g.FloatPassUniform("stipplePatternPixelSizeInv",c=>1/n(c))]);e.code.add(a.glsl`float padStippleTexture(float u) {
float paddedTextureSize = float(textureSize(stipplePatternTexture, 0).x);
float unpaddedTextureSize = paddedTextureSize - stippleTexturePadding;
return (u * unpaddedTextureSize + stippleTexturePadding * 0.5) / paddedTextureSize;
}`);e.code.add(a.glsl`
    float getStippleSDF(out bool isClamped) {
      ${b.stippleRequiresClamp?a.glsl`
          float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
          vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
          isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;`:a.glsl`
          float stippleDistanceClamped = vStippleDistance;
          isClamped = false;`}

      float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv;
      ${b.stippleScaleWithLineWidth?a.glsl`u *= vLineSizeInv;`:""}
      u = padStippleTexture(fract(u));

      float encodedSDF = rgba2float(texture(stipplePatternTexture, vec2(u, 0.5)));
      float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;

      ${b.stippleRequiresStretchMeasure?a.glsl`return (sdf - 0.5) * vStipplePatternStretch + 0.5;`:a.glsl`return sdf;`}
    }

    float getStippleSDF() {
      bool ignored;
      return getStippleSDF(ignored);
    }

    float getStippleAlpha() {
      bool isClamped;
      float stippleSDF = getStippleSDF(isClamped);

      float antiAliasedResult = ${b.stippleScaleWithLineWidth?a.glsl`clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);`:a.glsl`clamp(stippleSDF + 0.5, 0.0, 1.0);`}

      return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
    }
  `);b.stippleOffColorEnabled?(e.uniforms.add(new r.Float4PassUniform("stippleOffColor",c=>u.ensureColor4(c.stippleOffColor))),e.code.add(a.glsl`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`)):e.code.add(a.glsl`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}function n(d){const b=d.stipplePattern;return m.isSome(b)?k.computeTextureSize(d.stipplePattern)/b.pixelRatio:1}const x=a.glsl.float(.4);h.LineStipple=function(d,b){d.constants.add("stippleAlphaColorDiscard","float",.001);d.constants.add("stippleAlphaHighlightDiscard","float",.5);b.stippleEnabled?v(d,b):d.fragment.code.add(a.glsl`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)};h.computePixelSize=n;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});