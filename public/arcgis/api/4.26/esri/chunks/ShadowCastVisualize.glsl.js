// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ./_rollupPluginBabelHelpers ./vec4f64 ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ./ShadowCastAccumulate.glsl ../views/3d/webgl-engine/shaders/ShadowCastVisualizeTechniqueConfiguration".split(" "),
function(k,l,m,t,u,v,w,x,g,f,y,z,A,n){function p(e){const d=new y.ShaderBuilder,c=d.fragment;c.include(w.RgbaFloatEncoding);c.include(u.ReadLinearDepth);d.include(v.CameraSpace);d.include(t.ScreenSpacePass);const {visualization:h,bandsEnabled:b}=e;c.constants.add("inverseSampleValue","float",A.ShadowCastMaxSamples);c.uniforms.add([new z.Texture2DPassUniform("shadowCastMap",a=>a.shadowCastMap),new g.FloatPassUniform("sampleScale",a=>a.sampleScale),new g.FloatPassUniform("opacityFromElevation",a=>a.opacityFromElevation),
new x.Float4PassUniform("uColor",a=>a.color)]);e=h===n.ShadowCastVisualization.Gradient;const q=h===n.ShadowCastVisualization.Threshold;e&&b?c.uniforms.add(new g.FloatPassUniform("bandSize",a=>a.bandSize)):q&&c.uniforms.add(new g.FloatPassUniform("threshold",a=>a.threshold));c.code.add(f.glsl`
      void main(void) {
        vec4 record = texture(shadowCastMap, uv);
        float pixelSamples = record.r * inverseSampleValue;
        if (pixelSamples < 1.0) {
          discard;
        }

        float strength = pixelSamples * sampleScale;

        ${q?f.glsl`
            if (strength <= threshold) {
              discard;
            }`:""}

        ${e&&b?f.glsl`strength = ceil(strength / bandSize) * bandSize;`:""}

        fragColor = vec4(uColor.xyz, uColor.a * opacityFromElevation ${e?f.glsl`* strength`:""});
      }
    `);return d}let r=function(e){function d(h){var b=c.call(this);b.shadowCastMap=h;b.sampleScale=0;b.opacityFromElevation=1;b.color=m.clone(B);b.bandSize=.1;b.threshold=.5;return b}l._inherits(d,e);var c=l._createSuper(d);return l._createClass(d)}(f.NoParameters);const B=m.fromValues(.01,0,.25,1),C=Object.freeze(Object.defineProperty({__proto__:null,ShadowCastVisualizePassParameters:r,build:p},Symbol.toStringTag,{value:"Module"}));k.ShadowCastVisualize=C;k.ShadowCastVisualizePassParameters=r;k.build=
p});