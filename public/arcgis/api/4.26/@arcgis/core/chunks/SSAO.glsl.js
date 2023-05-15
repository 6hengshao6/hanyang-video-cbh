/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{u as e}from"./maybe.js";import{s as r}from"./vec2.js";import{a as t}from"./vec2f64.js";import{S as a}from"./ScreenSpacePass.glsl.js";import{R as o}from"./ReadLinearDepth.glsl.js";import{C as n,g as s}from"./CameraSpace.glsl.js";import{F as i}from"./RgbaFloatEncoding.glsl.js";import{F as c}from"./FloatPassUniform.js";import{g as l}from"./interfaces2.js";import{S as f}from"./ShaderBuilder.js";import{T as m}from"./Texture2DPassUniform.js";function u(e){return Math.max(10,20*e.computeRenderPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const p=t(),v=Object.freeze(Object.defineProperty({__proto__:null,build:function(){const t=new f,v=t.fragment;return t.include(a),v.include(o),t.include(n),v.uniforms.add(new c("radius",((e,r)=>u(r.camera)))),v.code.add(l`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn-bias, 0.0);
}`),v.code.add(l`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),v.uniforms.add([new i("nearFar",((e,r)=>r.camera.nearFar)),new m("normalMap",(e=>e.normalTexture)),new m("depthMap",(e=>e.depthTexture)),new i("zScale",((e,r)=>s(r))),new c("projScale",(e=>e.projScale)),new m("rnm",(e=>e.noiseTexture)),new i("rnmScale",((t,a)=>r(p,a.camera.fullWidth/e(t.noiseTexture).descriptor.width,a.camera.fullHeight/e(t.noiseTexture).descriptor.height))),new c("intensity",(e=>e.intensity)),new i("screenSize",((e,t)=>r(p,t.camera.fullWidth,t.camera.fullHeight)))]),v.code.add(l`
    void main(void) {
      fillSphere();
      vec3 fres = normalize((texture(rnm, uv * rnmScale).xyz * 2.0) - vec3(1.0));
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
        fragColor = vec4(0.0);
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w<0.5;

      float sum = .0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${l.int(16)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if ( abs(offset.x)<2.0 || abs(offset.y)<2.0) continue;

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          bool isTerrainTap = texture(normalMap, tcTap).w<0.5;
          if (isTerrainTap) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${l.int(16)}),0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4)/2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
      fragColor = vec4(A);
    }
  `),t},getRadius:u},Symbol.toStringTag,{value:"Module"}));export{v as S,u as g};
