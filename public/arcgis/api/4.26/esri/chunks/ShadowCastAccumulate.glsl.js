// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ./_rollupPluginBabelHelpers ./mat4 ./mat4f64 ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform".split(" "),
function(c,e,k,f,q,r,l,t,u,v,w,x,y,z){function m(g){const a=new y.ShaderBuilder,b=a.fragment;b.include(u.RgbaFloatEncoding);b.include(r.ReadLinearDepth);a.include(t.CameraSpace);a.include(q.ScreenSpacePass);a.include(l.ReadShadowMapPass,g);b.uniforms.add([new z.Texture2DPassUniform("depthMap",h=>h.linearDepthTexture),new x.Matrix4PassUniform("inverseViewMatrix",(h,d)=>k.invert(n,k.translate(n,d.camera.viewMatrix,d.camera.center))),new v.Float2PassUniform("nearFar",(h,d)=>d.camera.nearFar)]);b.constants.add("sampleValue",
"float",A);b.code.add(w.glsl`void main(void) {
float depth = rgba2float(texture(depthMap, uv));
if (depth == 0.0) {
discard;
}
float currentPixelDepth = linearDepthFromFloat(depth, nearFar);
if (-currentPixelDepth > nearFar.y || -currentPixelDepth < nearFar.x) {
discard;
}
vec4 currentPixelPos = vec4(reconstructPosition(gl_FragCoord.xy, currentPixelDepth), 1.0);
vec4 worldSpacePos = inverseViewMatrix * currentPixelPos;
mat4 shadowMatrix;
float linearDepth = -currentPixelDepth;
int i = chooseCascade(linearDepth, shadowMatrix);
if (i >= numCascades) {
discard;
}
vec3 lvpos = lightSpacePosition(worldSpacePos.xyz, shadowMatrix);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
discard;
}
vec2 uvShadow = cascadeCoordinates(i, lvpos);
float depthShadow = readShadowMapDepth(uvShadow, shadowMapTex);
bool shadow = depthShadow < lvpos.z;
if (!shadow) {
discard;
}
fragColor = vec4(sampleValue);
}`);return a}let p=function(g){function a(){return b.apply(this,arguments)}e._inherits(a,g);var b=e._createSuper(a);return e._createClass(a)}(l.ReadShadowMapBindParameters);const A=1/255,n=f.create();f=Object.freeze(Object.defineProperty({__proto__:null,ShadowCastAccumulatePassParameters:p,ShadowCastMaxSamples:255,build:m},Symbol.toStringTag,{value:"Module"}));c.ShadowCastAccumulate=f;c.ShadowCastAccumulatePassParameters=p;c.ShadowCastMaxSamples=255;c.build=m});