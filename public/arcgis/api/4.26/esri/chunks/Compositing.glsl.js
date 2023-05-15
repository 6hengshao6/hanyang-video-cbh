// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ./_rollupPluginBabelHelpers ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform".split(" "),function(d,e,l,m,f,n,p){function g(c){const a=new n.ShaderBuilder;a.include(l.ScreenSpacePass);a.fragment.uniforms.add(new p.Texture2DPassUniform("tex",
b=>b.texture));c.hasOpacityFactor&&a.fragment.uniforms.add(new m.FloatPassUniform("opacity",b=>b.opacity));a.fragment.code.add(f.glsl`
    void main() {
      fragColor = texture(tex, uv) ${c.hasOpacityFactor?"* opacity":""};
    }`);return a}let k=function(c){function a(){var h=b.apply(this,arguments);h.opacity=1;return h}e._inherits(a,c);var b=e._createSuper(a);return e._createClass(a)}(f.NoParameters);const q=Object.freeze(Object.defineProperty({__proto__:null,CompositingPassParameters:k,build:g},Symbol.toStringTag,{value:"Module"}));d.Compositing=q;d.CompositingPassParameters=k;d.build=g});