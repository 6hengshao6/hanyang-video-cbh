// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../core/maybe ./vec2 ./vec2f64 ./vec4f64 ../views/3d/support/engineContent/sdfPrimitives ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/ObjectAndLayerIdColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/hud/AlignPixel.glsl ../views/3d/webgl-engine/core/shaderLibrary/hud/HUD.glsl ../views/3d/webgl-engine/core/shaderLibrary/hud/HUDOcclusionPass.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ScreenSizePerspective.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/TransparencyPassType ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(r,t,n,x,B,C,k,D,E,F,G,H,I,J,l,K,L,u,v,p,y,b,M,N,O,q){function z(a){const c=new M.ShaderBuilder;var e=a.signedDistanceFieldEnabled;c.include(F.AlignPixel);c.include(G.HUD,a);c.include(D.SliceDraw,a);if(a.occlusionPass)return c.include(H.HUDOcclusionPass,a),c;const {vertex:g,fragment:f}=c;c.include(u.ScreenSizePerspective);f.include(L.RgbaFloatEncoding);f.include(K.ColorConversion);c.include(J.VisualVariables,a);c.include(E.ObjectAndLayerIdColor,a);c.varyings.add("vcolor","vec4");c.varyings.add("vtc",
"vec2");c.varyings.add("vsize","vec2");a.binaryHighlightOcclusionEnabled&&c.varyings.add("voccluded","float");g.uniforms.add([new p.Float4PassUniform("viewport",(d,h)=>h.camera.fullViewport),new v.Float2PassUniform("screenOffset",(d,h)=>n.set(A,2*d.screenOffset[0]*h.camera.pixelRatio,2*d.screenOffset[1]*h.camera.pixelRatio)),new v.Float2PassUniform("anchorPosition",d=>w(d)),new p.Float4PassUniform("materialColor",d=>d.color),new y.FloatPassUniform("pixelRatio",(d,h)=>h.camera.pixelRatio)]);e&&(g.uniforms.add(new p.Float4PassUniform("outlineColor",
d=>d.outlineColor)),f.uniforms.add([new p.Float4PassUniform("outlineColor",d=>0<d.outlineColor[3]&&0<d.outlineSize?d.outlineColor:B.ZEROS),new y.FloatPassUniform("outlineSize",d=>0<d.outlineColor[3]&&0<d.outlineSize?d.outlineSize:0)]));a.hasScreenSizePerspective&&(u.addScreenSizePerspective(g),u.addScreenSizePerspectiveAlignment(g));(a.debugDrawLabelBorder||a.binaryHighlightOcclusionEnabled)&&c.varyings.add("debugBorderCoords","vec4");c.attributes.add(q.VertexAttribute.UV0,"vec2");c.attributes.add(q.VertexAttribute.COLOR,
"vec4");c.attributes.add(q.VertexAttribute.SIZE,"vec2");c.attributes.add(q.VertexAttribute.AUXPOS2,"vec4");g.code.add(b.glsl`
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
      ${a.hasScreenSizePerspective?b.glsl`
      inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
      vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:b.glsl`
      inputSize = size;
      vec2 screenOffsetScaled = screenOffset;`}

      ${a.vvSize?"inputSize *\x3d vvScale(auxpos2).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);

      ${a.occlusionTestEnabled||a.binaryHighlightOcclusionEnabled?"bool visible \x3d testVisibilityHUD(posProj);":""}

      ${a.binaryHighlightOcclusionEnabled?"voccluded \x3d visible ? 0.0 : 1.0;":""}
    `);var m=b.glsl`vec2 uv01 = floor(uv0);
vec2 uv = uv0 - uv01;
quadOffset.xy = ((uv01 - anchorPosition) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;`;const P=a.pixelSnappingEnabled?e?b.glsl`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:b.glsl`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:b.glsl`posProj += quadOffset;`;g.uniforms.add(new v.Float2PassUniform("textureCoordinateScaleFactor",d=>t.isSome(d.texture)&&t.isSome(d.texture.descriptor.textureCoordinateScaleFactor)?d.texture.descriptor.textureCoordinateScaleFactor:x.ONES));g.code.add(b.glsl`
    ${a.occlusionTestEnabled?"if (visible) {":""}
    ${m}
    ${a.vvColor?"vcolor \x3d interpolateVVColor(auxpos2.y) * materialColor;":"vcolor \x3d color / 255.0 * materialColor;"}

    ${a.output===k.ShaderOutput.ObjectAndLayerIdColor?b.glsl`vcolor.a = 1.0;`:""}

    bool alphaDiscard = vcolor.a < ${b.glsl.float(l.symbolAlphaCutoff)};
    ${e?`alphaDiscard = alphaDiscard && outlineColor.a < ${b.glsl.float(l.symbolAlphaCutoff)};`:""}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${P}
      gl_Position = posProj;
    }

    vtc = uv * textureCoordinateScaleFactor;

    ${a.debugDrawLabelBorder?"debugBorderCoords \x3d vec4(uv01, 1.5 / combinedSize);":""}
    vsize = inputSize;
    ${a.occlusionTestEnabled?b.glsl`} else { vtc = vec2(0.0);
      ${a.debugDrawLabelBorder?"debugBorderCoords \x3d vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
  }
  `);f.uniforms.add(new N.Texture2DPassUniform("tex",d=>d.texture));m=a.debugDrawLabelBorder?b.glsl`(isBorder > 0.0 ? 0.0 : ${b.glsl.float(l.defaultMaskAlphaCutoff)})`:b.glsl.float(l.defaultMaskAlphaCutoff);e=b.glsl`
    ${a.debugDrawLabelBorder?b.glsl`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${e?b.glsl`
      vec4 fillPixelColor = vcolor;

      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      const float txSize = ${b.glsl.float(C.DEFAULT_TEX_SIZE)};
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
          outlineAlphaFactor + fillAlphaFactor < ${m} ||
          fillPixelColor.a + outlinePixelColor.a < ${b.glsl.float(l.symbolAlphaCutoff)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        fragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${m}) {
          discard;
        }

        fragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:b.glsl`
          vec4 texColor = texture(tex, vtc, -0.5);
          if (texColor.a < ${m}) {
            discard;
          }
          fragColor = texColor * premultiplyAlpha(vcolor);
          `}

    // Draw debug border with transparency, so that original texels along border are still partially visible
    ${a.debugDrawLabelBorder?b.glsl`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`:""}
  `;a.output===k.ShaderOutput.Alpha&&f.code.add(b.glsl`
      void main() {
        ${e}
        fragColor = vec4(fragColor.a);
      }
      `);a.output===k.ShaderOutput.ObjectAndLayerIdColor&&f.code.add(b.glsl`
      void main() {
        ${e}
        outputObjectAndLayerIdColor();
      }
      `);a.output===k.ShaderOutput.Color&&f.code.add(b.glsl`
    void main() {
      ${e}
      ${a.transparencyPassType===O.TransparencyPassType.FrontFace?"fragColor.rgb /\x3d fragColor.a;":""}
    }
    `);a.output===k.ShaderOutput.Highlight&&(c.include(I.OutputHighlight,a),f.code.add(b.glsl`
    void main() {
      ${e}
      ${a.binaryHighlightOcclusionEnabled?b.glsl`
          if (voccluded == 1.0) {
            fragColor = vec4(1.0, 1.0, 0.0, 1.0);
          } else {
            fragColor = vec4(1.0, 0.0, 1.0, 1.0);
          }`:"outputHighlight();"}
    }
    `));return c}function w(a,c=A){if(a.textureIsSignedDistanceField){var e=a.anchorPosition;a=a.distanceFieldBoundingBox;t.isSome(a)?n.set(c,e[0]*(a[2]-a[0])+a[0],e[1]*(a[3]-a[1])+a[1]):n.set(c,0,0)}else n.copy(c,a.anchorPosition);return c}const A=x.create(),Q=Object.freeze(Object.defineProperty({__proto__:null,build:z,calculateAnchorPosForRendering:w},Symbol.toStringTag,{value:"Module"}));r.HUDMaterial=Q;r.build=z;r.calculateAnchorPosForRendering=w});