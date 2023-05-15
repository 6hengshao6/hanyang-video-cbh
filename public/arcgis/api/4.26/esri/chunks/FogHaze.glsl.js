// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ./_rollupPluginBabelHelpers ./mat4 ./mat4f64 ./vec3f64 ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/Gamma.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(h,k,v,l,n,p,w,x,y,q,m,e,r,z,A,B){function t(f){const c=new z.ShaderBuilder;c.attributes.add(B.VertexAttribute.POSITION,"vec2");c.include(p.TextureCoordinateAttribute,{textureCoordinateType:p.TextureCoordinateAttributeType.Default});c.varyings.add("worldRay","vec3");c.varyings.add("eyeDir","vec3");const {vertex:g,fragment:a}=c;g.uniforms.add([new r.Matrix4PassUniform("inverseProjectionMatrix",(b,d)=>d.camera.inverseProjectionMatrix),new r.Matrix4PassUniform("inverseViewMatrix",(b,d)=>v.invertOrIdentity(C,
d.camera.viewMatrix))]);g.code.add(e.glsl`void main(void) {
vec3 posViewNear = (inverseProjectionMatrix * vec4(position, -1, 1)).xyz;
eyeDir = posViewNear;
worldRay = (inverseViewMatrix * vec4(posViewNear, 0)).xyz;
forwardTextureCoordinates();
gl_Position = vec4(position, 1, 1);
}`);a.uniforms.add(new m.FloatPassUniform("atmosphereC",b=>b.atmosphereC));a.uniforms.add(new q.Float3PassUniform("cameraPosition",(b,d)=>d.camera.eye));a.uniforms.add(new y.Float2PassUniform("nearFar",(b,d)=>d.camera.nearFar));a.uniforms.add(new A.Texture2DPassUniform("depthTex",b=>b.depthTexture));a.uniforms.add(new m.FloatPassUniform("fogStrength",b=>f.haze?b.hazeStrength:b.fogStrength));a.uniforms.add(new m.FloatPassUniform("fogAmount",b=>f.haze?b.hazeAmount:b.fogAmount));a.uniforms.add(new q.Float3PassUniform("fogColor",
b=>f.haze?b.hazeColor:b.fogColor));c.include(x.Gamma);a.include(w.ReadLinearDepth);a.code.add(e.glsl`vec2 sphereIntersect(vec3 start, vec3 dir) {
float a = dot(dir, dir);
float b = 2.0 * dot(dir, start);
float d = (b * b) - 4.0 * a * atmosphereC;
if (d < 0.0) {
return vec2(1e5, -1e5);
}
return vec2((-b - sqrt(d)) / (2.0 * a), (-b + sqrt(d)) / (2.0 * a));
}`);a.code.add(e.glsl`vec4 applyFog(float dist, vec3 rayDir){
if(dist == -1.0){
vec2 rayAtmosphereIntersect = sphereIntersect(cameraPosition, rayDir);
dist = 0.055 * rayAtmosphereIntersect.y;
}
float fogAmount = fogAmount * (1.0 - exp(-dist * fogStrength));
return vec4(fogAmount * fogColor, fogAmount);
}`);a.code.add(e.glsl`
    vec3 tonemapACES(vec3 x) {
      return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
    }

    void main() {
      vec3 rayDir = normalize(worldRay);
      float terrainDepth = -1.0;

      float depthSample = texture(depthTex, vuv0).r;
      float zNorm = 2.0 * depthSample - 1.0;
      float linDepth = 2.0 * nearFar[0] * nearFar[1] / (nearFar[1] + nearFar[0] - zNorm * (nearFar[1] - nearFar[0]));
      if(depthSample < 1.0 && depthSample > 0.0){
        vec3 cameraSpaceRay = normalize(eyeDir);
        cameraSpaceRay /= cameraSpaceRay.z;
        cameraSpaceRay *= linDepth;
        terrainDepth = max(0.0, length(cameraSpaceRay));
      }

      ${f.haze?e.glsl`
          if(terrainDepth == -1.0){
            fragColor = vec4(0);
            return;
          }`:""}

      vec4 fog = applyFog(terrainDepth, rayDir);

      fragColor = delinearizeGamma(vec4(tonemapACES(fog.rgb), fog.a));
    }
  `);return c}let u=function(f){function c(){var a=g.apply(this,arguments);a.fogColor=n.create();a.hazeColor=n.create();a.fogStrength=4E-6;a.hazeStrength=4E-6;a.atmosphereC=1;a.fogAmount=0;a.hazeAmount=0;return a}k._inherits(c,f);var g=k._createSuper(c);return k._createClass(c)}(e.NoParameters);const C=l.create();l=Object.freeze(Object.defineProperty({__proto__:null,FogHazePassParameters:u,build:t},Symbol.toStringTag,{value:"Module"}));h.FogHazePassParameters=u;h.Haze=l;h.build=t});