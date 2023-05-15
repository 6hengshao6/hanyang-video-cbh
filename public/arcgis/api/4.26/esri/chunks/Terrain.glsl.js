// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ./_rollupPluginBabelHelpers ./mat4 ./mat4f64 ./vec3 ./vec3f64 ../views/3d/terrain/interfaces ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexTangent.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl ../views/3d/webgl-engine/core/shaderLibrary/terrain/Overlay.glsl ../views/3d/webgl-engine/core/shaderLibrary/terrain/TerrainTexture.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4DrawUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform".split(" "),
function(v,w,F,x,y,G,H,n,g,I,J,K,L,M,N,z,O,P,p,A,Q,m,R,B,k,q,S,b,T,U,V){function C(a){const c=new U.ShaderBuilder,{vertex:e,fragment:d,varyings:l}=c;c.include(L.PositionAttribute);c.include(K.NormalAttribute,a);c.include(M.TextureCoordinateAttribute,a);var r=()=>{c.include(Q.NormalUtils,a);e.code.add(b.glsl`vec3 getNormal() {
float z = 1.0 - abs(normalCompressed.x) - abs(normalCompressed.y);
vec3 n = vec3(normalCompressed + vec2(normalCompressed.x >= 0.0 ? 1.0 : -1.0,
normalCompressed.y >= 0.0 ? 1.0 : -1.0) * min(z, 0.0), z);
return normalize(n);
}`)};q.addProjViewLocalOrigin(e,a);c.include(J.Transform,a);const f=a.overlayMode!==B.OverlayMode.Disabled;switch(a.output){case g.ShaderOutput.Color:c.include(k.TerrainTexture,a);c.include(p.EvaluateSceneLighting,a);f&&c.include(k.OverlayTerrain,{...a,pbrMode:a.pbrMode===m.PBRMode.Terrain?m.PBRMode.TerrainWithWater:m.PBRMode.Water});const t=a.overlayMode===B.OverlayMode.EnabledWithWater;t&&c.include(N.VertexTangent,a);l.add("vnormal","vec3");l.add("vpos","vec3");l.add("vup","vec3");r();(a.atmosphere||
a.screenSizePerspective)&&q.addViewNormal(e);(r=a.receiveShadows&&!a.renderOccluded)&&c.include(n.ForwardLinearDepth,a);a.atmosphere&&l.add("wnormal","vec3");a.screenSizePerspective&&(l.add("screenSizeDistanceToCamera","float"),l.add("screenSizeCosAngle","float"));e.code.add(b.glsl`
        void main(void) {
          //Position
          vpos = position;
          vec3 positionWorld = position + localOrigin;
          gl_Position = transformPosition(proj, view, vpos);

          //Normal
          vnormal = getNormal();

          //Up
          vup = getLocalUp(position, localOrigin);

          ${t?b.glsl`forwardVertexTangent(vnormal);`:b.glsl``}

          ${a.atmosphere?b.glsl`wnormal = normalize((viewNormal * vec4(normalize(positionWorld), 1.0)).xyz);`:""}

          //Texture UV
          vec2 uv = getUV0();
          forwardTextureCoordinatesWithTransform(uv);
          ${f?b.glsl`setOverlayVTC(uv);`:""}
          ${a.tileBorders?b.glsl`forwardTextureCoordinates();`:""}

          ${a.screenSizePerspective?b.glsl`
          vec3 viewPos = (view * vec4(vpos, 1.0)).xyz;
          screenSizeDistanceToCamera = length(viewPos);
          vec3 viewSpaceNormal = (viewNormal * vec4(normalize(positionWorld), 1.0)).xyz;
          screenSizeCosAngle = abs(viewSpaceNormal.z);`:""}

          ${r?b.glsl`forwardLinearDepth();`:""}

        }
      `);c.include(I.SliceDraw,a);c.include(p.EvaluateSceneLighting,a);c.include(P.EvaluateAmbientOcclusion,a);c.include(R.ReadShadowMapDraw,a);q.addCameraPosition(d,a);p.addAmbientBoostFactor(d);p.addLightingGlobalFactor(d);d.uniforms.add([e.uniforms.get("localOrigin"),new S.Float3PassUniform("viewDirection",(u,h)=>y.normalize(D,y.set(D,h.camera.viewMatrix[12],h.camera.viewMatrix[13],h.camera.viewMatrix[14])))]);t&&d.uniforms.add([new V.Texture2DPassUniform("ovWaterTex",(u,h)=>0===h.overlays.length?
null:h.overlays[H.OverlayIndex.INNER].getNormalTexture(u.overlaySource)),new T.Matrix4DrawUniform("view",(u,h)=>F.translate(W,h.camera.viewMatrix,u.origin))]);d.code.add(b.glsl`const float sliceOpacity = 0.2;
float lum(vec3 c) {
return (min(min(c.r, c.g), c.b) + max(max(c.r, c.g), c.b)) * 0.5;
}`);A.addMainLightDirection(d);A.addMainLightIntensity(d);d.code.add(b.glsl`
        void main() {
          vec3 normal = normalize(vnormal);
          float vndl = dot(normal, mainLightDirection);

          float additionalAmbientScale = smoothstep(0.0, 1.0, clamp(vndl*2.5, 0.0, 1.0));
          float shadow = ${a.receiveShadows&&!a.renderOccluded?"readShadowMap(vpos, linearDepth)":a.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

          float ssao = evaluateAmbientOcclusionInverse();
          vec4 tileColor = getTileColor();

          ${f?b.glsl`
              vec4 overlayColorOpaque = getOverlayColor(ovColorTex, vtcOverlay);
              vec4 overlayColor = overlayOpacity * overlayColorOpaque;
              ${a.invisible?b.glsl`if (overlayColor.a == 0.0) { discard; }`:""}
              vec4 groundColor = tileColor;
              tileColor = tileColor * (1.0 - overlayColor.a) + overlayColor;`:""}

          // If combined alpha is 0 we can discard pixel. The performance impact by having a discard here
          // is neglectable because terrain typically renders first into the framebuffer.
          if(tileColor.a <= 0.0) {
            discard;
          }

          bool sliced = rejectBySlice(vpos);
          if (sliced) {
            tileColor *= sliceOpacity;
          }
          ${a.atmosphere?b.glsl`
              float ndotl = clamp(vndl, 0.0, 1.0);
              vec3 atm = vec3(clamp(1.0 - dot(-viewDirection, wnormal), 0.0, 1.0));
              atm *= clamp(1.0 - lum(tileColor.rgb) * 1.5, 0.0, 1.0); // avoid atmosphere on bright base maps
              atm *= clamp(ndotl * 2.0, 0.0, 1.0); // avoid atmosphere on dark side of the globe
              atm *= tileColor.a; // premultiply with tile alpha`:""}

          vec3 albedo = ${a.atmosphere?b.glsl`atm + tileColor.rgb;`:b.glsl`tileColor.rgb;`}

          // heuristic shading function used in the old terrain, now used to add ambient lighting

          vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

          ${a.pbrMode===m.PBRMode.Terrain||a.pbrMode===m.PBRMode.TerrainWithWater?b.glsl`fragColor = vec4(evaluateTerrainLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight, normalize(vpos - cameraPosition), vup), tileColor.a);`:b.glsl`fragColor = vec4(evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight), tileColor.a);`}
          ${t?b.glsl`
              vec4 overlayWaterMask = getOverlayColor(ovWaterTex, vtcOverlay);
              float waterNormalLength = length(overlayWaterMask);
              if (waterNormalLength > 0.95) {
                mat3 tbnMatrix = mat3(tbnTangent, tbnBiTangent, vnormal);
                vec4 waterOverlayColor = vec4(overlayColor.w > 0.0 ? overlayColorOpaque.xyz/overlayColor.w : vec3(1.0), overlayColor.w);
                vec4 viewPosition = view*vec4(vpos, 1.0);
                vec4 waterColorLinear = getOverlayWaterColor(overlayWaterMask, waterOverlayColor, -normalize(vpos - cameraPosition), shadow, vnormal, tbnMatrix, viewPosition.xyz,  vpos + localOrigin);
                vec4 waterColorNonLinear = delinearizeGamma(vec4(waterColorLinear.xyz, 1.0));
                float opacity = sliced ? sliceOpacity : 1.0;
                // un-gamma the ground color to mix in linear space
                fragColor = mix(groundColor, waterColorNonLinear, waterColorLinear.w) * opacity;
              }`:""}
          ${a.screenSizePerspective?b.glsl`
            float perspectiveScale = screenSizePerspectiveScaleFloat(1.0, screenSizeCosAngle, screenSizeDistanceToCamera, vec4(0.0, 0.0, 0.0, 0.0));
            if (perspectiveScale <= 0.25) {
              fragColor = mix(fragColor, vec4(1.0, 0.0, 0.0, 1.0), perspectiveScale * 4.0);
            }
            else if (perspectiveScale <= 0.5) {
              fragColor = mix(fragColor, vec4(0.0, 0.0, 1.0, 1.0), (perspectiveScale - 0.25) * 4.0);
            }
            else if (perspectiveScale >= 0.99) {
              fragColor = mix(fragColor, vec4(0.0, 1.0, 0.0, 1.0), 0.2);
            }
            else {
              fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), (perspectiveScale - 0.5) * 2.0);
            }`:""}
          ${a.visualizeNormals?a.spherical?b.glsl`
                  vec3 localUp = normalize(vpos + localOrigin);
                  vec3 right = normalize(cross(vec3(0.0, 0.0, 1.0), localUp));
                  vec3 forward = normalize(cross(localUp, right));
                  mat3 tbn = mat3(right, forward, localUp);
                  vec3 tNormal = normalize(normal * tbn);
                  fragColor = vec4(vec3(0.5) + 0.5 * tNormal, 0.0);
              `:b.glsl`
                  vec3 tNormal = normalize(normal);
                  fragColor = vec4(vec3(0.5) + 0.5 * tNormal, 0.0);
              `:""}
          ${a.tileBorders?b.glsl`
              vec2 dVuv = fwidth(vuv0);
              vec2 edgeFactors = smoothstep(vec2(0.0), 1.5 * dVuv, min(vuv0, 1.0 - vuv0));
              float edgeFactor = 1.0 - min(edgeFactors.x, edgeFactors.y);
              fragColor = mix(fragColor, vec4(1.0, 0.0, 0.0, 1.0), edgeFactor);`:""}
          fragColor = highlightSlice(fragColor, vpos);
        }
      `);break;case g.ShaderOutput.Depth:f&&c.include(k.OverlayTerrain,a);c.include(z.OutputDepth,a);n.addLinearDepth(c);n.addNearFar(c);e.code.add(b.glsl`
              void main(void) {
                ${f?b.glsl`setOverlayVTC(getUV0());`:""}
                gl_Position = transformPositionWithDepth(proj, view, position, nearFar, linearDepth);
              }
          `);d.code.add(b.glsl`
              void main() {
                ${f&&a.invisible?b.glsl`if (getCombinedOverlayColor().a == 0.0) { discard; }`:""}
                outputDepth(linearDepth);
              }
          `);break;case g.ShaderOutput.Shadow:case g.ShaderOutput.ShadowHighlight:case g.ShaderOutput.ShadowExcludeHighlight:c.include(z.OutputDepth,a);n.addLinearDepth(c);n.addNearFar(c);e.code.add(b.glsl`void main(void) {
gl_Position = transformPositionWithDepth(proj, view, position, nearFar, linearDepth);
}`);d.code.add(b.glsl`void main() {
outputDepth(linearDepth);
}`);break;case g.ShaderOutput.Normal:f&&c.include(k.OverlayTerrain,a);l.add("vnormal","vec3");q.addViewNormal(e);r();e.code.add(b.glsl`
            void main(void) {
              ${f?b.glsl`setOverlayVTC(getUV0());`:""}
              gl_Position = transformPosition(proj, view, position);
              vnormal = normalize((viewNormal * vec4(getNormal(), 1.0)).xyz);
            }
        `);d.code.add(b.glsl`
            void main() {
              ${f&&a.invisible?b.glsl`if (getCombinedOverlayColor().a == 0.0) { discard; }`:""}
              vec3 normal = normalize(vnormal);
              if (gl_FrontFacing == false) {
                normal = -normal;
              }
              fragColor = vec4(vec3(0.5) + 0.5 * normal, 0.0);
            }
        `);break;case g.ShaderOutput.Highlight:f&&c.include(k.OverlayTerrain,a),e.code.add(b.glsl`
          void main() {
            ${f?b.glsl`setOverlayVTC(getUV0());`:""}
            gl_Position = transformPosition(proj, view, position);
          }
        `),c.include(O.OutputHighlight,a),d.code.add(b.glsl`
          void main() {
            ${f?b.glsl`if (getCombinedOverlayColor().a == 0.0) { discard; }`:""}
            outputHighlight();
          }
        `)}a.output===g.ShaderOutput.ObjectAndLayerIdColor&&(c.include(k.OverlayTerrain,{...a,pbrMode:m.PBRMode.Disabled}),e.code.add(b.glsl`void main(void) {
gl_Position = transformPosition(proj, view, position);
setOverlayVTC(getUV0());
}`),d.code.add(b.glsl`void main() {
fragColor = getOverlayColorTexel(vtcOverlay);
}`));return c}let E=function(a){function c(){return e.apply(this,arguments)}w._inherits(c,a);var e=w._createSuper(c);return w._createClass(c)}(k.OverlayTerrainPassParameters);const W=x.create(),D=G.create();x=Object.freeze(Object.defineProperty({__proto__:null,TerrainPassParameters:E,build:C},Symbol.toStringTag,{value:"Module"}));v.Terrain=x;v.TerrainPassParameters=E;v.build=C});