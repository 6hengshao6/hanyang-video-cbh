/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{i as e}from"./maybe.js";import{s as o,k as r}from"./vec2.js";import{O as t,a as i}from"./vec2f64.js";import{Z as a}from"./vec4f64.js";import{a as l}from"./sdfPrimitives.js";import{S as s}from"./ShaderOutput.js";import{S as n}from"./Slice.glsl.js";import{O as c}from"./ObjectAndLayerIdColor.glsl.js";import{A as d,a as p}from"./AlignPixel.glsl.js";import{R as u}from"./ReadLinearDepth.glsl.js";import{m as f}from"./MultipassGeometryTest.glsl.js";import{F as v,R as m}from"./RgbaFloatEncoding.glsl.js";import{g}from"./interfaces2.js";import{T as x}from"./Texture2DPassUniform.js";import{O as h}from"./OutputHighlight.glsl.js";import{V as C}from"./VisualVariables.glsl.js";import{s as b,d as j}from"./AlphaCutoff.js";import{C as P}from"./ColorConversion.glsl.js";import{S,c as z,b as y}from"./VerticalOffset.glsl.js";import{F as w}from"./Float4PassUniform.js";import{F as A}from"./FloatPassUniform.js";import{S as D}from"./ShaderBuilder.js";import{T as O}from"./TransparencyPassType.js";import{V as F}from"./VertexAttribute.js";function $(e,o){const{vertex:r,fragment:t}=e;o.hasMultipassGeometry&&r.include(f),o.hasMultipassTerrain&&e.varyings.add("depth","float"),r.code.add(g`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel
      // filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${o.hasMultipassGeometry?g`
        // Don't draw vertices behind geometry
        if(geometryDepthTest(.5 + .5 * posProjCenter.xy / posProjCenter.w, projectAux.posView.z)){
          posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
        }`:""}

      ${o.hasMultipassTerrain?"depth = projectAux.posView.z;":""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `),o.hasMultipassTerrain&&t.include(u),o.hasMultipassTerrain&&t.uniforms.add([new x("terrainDepthTexture",((e,o)=>o.multipassTerrain.linearDepthTexture)),new v("nearFar",((e,o)=>o.camera.nearFar))]),t.include(m),t.code.add(g`
  void main() {
    fragColor = vec4(1);
    ${o.hasMultipassTerrain?g`
          // Read the rgba data from the texture linear depth
          vec4 terrainDepthData = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0);

          float terrainDepth = linearDepthFromFloat(rgba2float(terrainDepthData), nearFar);

          // If HUD vertex is behind terrain and the terrain depth is not the initialize value (e.g. we are not looking at the sky)
          // Mark the HUD vertex as occluded by transparent terrain
          if(depth < terrainDepth && terrainDepthData != vec4(0,0,0,1)){
            fragColor.g = 0.5;
          }`:""}
  }
  `)}function T(e){return e.outlineColor[3]>0&&e.outlineSize>0}function B(t,i=H){var a,l,s;return t.textureIsSignedDistanceField?(a=t.anchorPosition,l=t.distanceFieldBoundingBox,s=i,e(l)?o(s,a[0]*(l[2]-l[0])+l[0],a[1]*(l[3]-l[1])+l[1]):o(s,0,0)):r(i,t.anchorPosition),i}const H=i(),V=Object.freeze(Object.defineProperty({__proto__:null,build:function(r){const i=new D,u=r.signedDistanceFieldEnabled;if(i.include(d),i.include(p,r),i.include(n,r),r.occlusionPass)return i.include($,r),i;const{vertex:f,fragment:V}=i;i.include(S),V.include(m),V.include(P),i.include(C,r),i.include(c,r),i.varyings.add("vcolor","vec4"),i.varyings.add("vtc","vec2"),i.varyings.add("vsize","vec2"),r.binaryHighlightOcclusionEnabled&&i.varyings.add("voccluded","float"),f.uniforms.add([new w("viewport",((e,o)=>o.camera.fullViewport)),new v("screenOffset",((e,r)=>o(H,2*e.screenOffset[0]*r.camera.pixelRatio,2*e.screenOffset[1]*r.camera.pixelRatio))),new v("anchorPosition",(e=>B(e))),new w("materialColor",(e=>e.color)),new A("pixelRatio",((e,o)=>o.camera.pixelRatio))]),u&&(f.uniforms.add(new w("outlineColor",(e=>e.outlineColor))),V.uniforms.add([new w("outlineColor",(e=>T(e)?e.outlineColor:a)),new A("outlineSize",(e=>T(e)?e.outlineSize:0))])),r.hasScreenSizePerspective&&(z(f),y(f)),(r.debugDrawLabelBorder||r.binaryHighlightOcclusionEnabled)&&i.varyings.add("debugBorderCoords","vec4"),i.attributes.add(F.UV0,"vec2"),i.attributes.add(F.COLOR,"vec4"),i.attributes.add(F.SIZE,"vec2"),i.attributes.add(F.AUXPOS2,"vec4"),f.code.add(g`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      forwardObjectAndLayerIdColor();

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${r.hasScreenSizePerspective?g`
      inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
      vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:g`
      inputSize = size;
      vec2 screenOffsetScaled = screenOffset;`}

      ${r.vvSize?"inputSize *= vvScale(auxpos2).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);

      ${r.occlusionTestEnabled||r.binaryHighlightOcclusionEnabled?"bool visible = testVisibilityHUD(posProj);":""}

      ${r.binaryHighlightOcclusionEnabled?"voccluded = visible ? 0.0 : 1.0;":""}
    `);const L=g`vec2 uv01 = floor(uv0);
vec2 uv = uv0 - uv01;
quadOffset.xy = ((uv01 - anchorPosition) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;`,R=r.pixelSnappingEnabled?u?g`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:g`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:g`posProj += quadOffset;`;f.uniforms.add(new v("textureCoordinateScaleFactor",(o=>e(o.texture)&&e(o.texture.descriptor.textureCoordinateScaleFactor)?o.texture.descriptor.textureCoordinateScaleFactor:t))),f.code.add(g`
    ${r.occlusionTestEnabled?"if (visible) {":""}
    ${L}
    ${r.vvColor?"vcolor = interpolateVVColor(auxpos2.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${r.output===s.ObjectAndLayerIdColor?g`vcolor.a = 1.0;`:""}

    bool alphaDiscard = vcolor.a < ${g.float(b)};
    ${u?`alphaDiscard = alphaDiscard && outlineColor.a < ${g.float(b)};`:""}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${R}
      gl_Position = posProj;
    }

    vtc = uv * textureCoordinateScaleFactor;

    ${r.debugDrawLabelBorder?"debugBorderCoords = vec4(uv01, 1.5 / combinedSize);":""}
    vsize = inputSize;
    ${r.occlusionTestEnabled?g`} else { vtc = vec2(0.0);
      ${r.debugDrawLabelBorder?"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
  }
  `),V.uniforms.add(new x("tex",(e=>e.texture)));const E=r.debugDrawLabelBorder?g`(isBorder > 0.0 ? 0.0 : ${g.float(j)})`:g.float(j),M=g`
    ${r.debugDrawLabelBorder?g`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${u?g`
      vec4 fillPixelColor = vcolor;

      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      const float txSize = ${g.float(l)};
      const float texelSize = 1.0 / txSize;
      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${E} ||
          fillPixelColor.a + outlinePixelColor.a < ${g.float(b)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        fragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${E}) {
          discard;
        }

        fragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:g`
          vec4 texColor = texture(tex, vtc, -0.5);
          if (texColor.a < ${E}) {
            discard;
          }
          fragColor = texColor * premultiplyAlpha(vcolor);
          `}

    // Draw debug border with transparency, so that original texels along border are still partially visible
    ${r.debugDrawLabelBorder?g`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`:""}
  `;return r.output===s.Alpha&&V.code.add(g`
      void main() {
        ${M}
        fragColor = vec4(fragColor.a);
      }
      `),r.output===s.ObjectAndLayerIdColor&&V.code.add(g`
      void main() {
        ${M}
        outputObjectAndLayerIdColor();
      }
      `),r.output===s.Color&&V.code.add(g`
    void main() {
      ${M}
      ${r.transparencyPassType===O.FrontFace?"fragColor.rgb /= fragColor.a;":""}
    }
    `),r.output===s.Highlight&&(i.include(h,r),V.code.add(g`
    void main() {
      ${M}
      ${r.binaryHighlightOcclusionEnabled?g`
          if (voccluded == 1.0) {
            fragColor = vec4(1.0, 1.0, 0.0, 1.0);
          } else {
            fragColor = vec4(1.0, 0.0, 1.0, 1.0);
          }`:"outputHighlight();"}
    }
    `)),i},calculateAnchorPosForRendering:B},Symbol.toStringTag,{value:"Module"}));export{V as H,B as c};
