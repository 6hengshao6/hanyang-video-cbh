// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../output/ReadLinearDepth.glsl ../shading/MultipassGeometryTest.glsl ../util/RgbaFloatEncoding.glsl ../../shaderModules/Float2PassUniform ../../shaderModules/interfaces ../../shaderModules/Texture2DPassUniform".split(" "),function(e,h,k,l,m,b,n){e.HUDOcclusionPass=function(f,a){const {vertex:g,fragment:c}=f;a.hasMultipassGeometry&&g.include(k.multipassGeometryTest);a.hasMultipassTerrain&&f.varyings.add("depth","float");g.code.add(b.glsl`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel
      // filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${a.hasMultipassGeometry?b.glsl`
        // Don't draw vertices behind geometry
        if(geometryDepthTest(.5 + .5 * posProjCenter.xy / posProjCenter.w, projectAux.posView.z)){
          posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
        }`:""}

      ${a.hasMultipassTerrain?"depth \x3d projectAux.posView.z;":""}
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
  `);a.hasMultipassTerrain&&c.include(h.ReadLinearDepth);a.hasMultipassTerrain&&c.uniforms.add([new n.Texture2DPassUniform("terrainDepthTexture",(p,d)=>d.multipassTerrain.linearDepthTexture),new m.Float2PassUniform("nearFar",(p,d)=>d.camera.nearFar)]);c.include(l.RgbaFloatEncoding);c.code.add(b.glsl`
  void main() {
    fragColor = vec4(1);
    ${a.hasMultipassTerrain?b.glsl`
          // Read the rgba data from the texture linear depth
          vec4 terrainDepthData = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0);

          float terrainDepth = linearDepthFromFloat(rgba2float(terrainDepthData), nearFar);

          // If HUD vertex is behind terrain and the terrain depth is not the initialize value (e.g. we are not looking at the sky)
          // Mark the HUD vertex as occluded by transparent terrain
          if(depth < terrainDepth && terrainDepthData != vec4(0,0,0,1)){
            fragColor.g = 0.5;
          }`:""}
  }
  `)};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});