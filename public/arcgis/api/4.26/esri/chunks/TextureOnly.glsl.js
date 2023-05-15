// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ./_rollupPluginBabelHelpers ./vec4f64 ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform".split(" "),function(c,d,k,l,m,e,n,p){function f(){const b=new n.ShaderBuilder;b.include(l.ScreenSpacePass);b.fragment.uniforms.add([new p.Texture2DPassUniform("tex",
a=>a.texture),new m.Float4PassUniform("uColor",a=>a.color)]);b.fragment.code.add(e.glsl`void main() {
vec4 texColor = texture(tex, uv);
fragColor = texColor * uColor;
}`);return b}let h=function(b){function a(){var g=q.apply(this,arguments);g.color=k.fromValues(1,1,1,1);return g}d._inherits(a,b);var q=d._createSuper(a);return d._createClass(a)}(e.NoParameters);const r=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:h,build:f},Symbol.toStringTag,{value:"Module"}));c.TextureOnly=r;c.TextureOnlyPassParameters=h;c.build=f});