// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ./_rollupPluginBabelHelpers ./vec2f64 ../views/3d/webgl-engine/core/shaderModules/Float2DrawUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DDrawUniform ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),function(e,f,m,n,g,p,q,r){function k(){const a=new p.ShaderBuilder,{vertex:b,fragment:c}=a,d=b.code,t=c.code;a.attributes.add(r.VertexAttribute.POSITION,
"vec2");d.add(g.glsl`void main() {
gl_Position = vec4(vec2(1.0) - position * 2.0, 0.0, 1.0);
}`);c.uniforms.add(new q.Texture2DDrawUniform("tex",h=>h.inputTexture));c.uniforms.add(new n.Float2DrawUniform("invFramebufferDim",h=>h.invFramebufferDim));t.add(g.glsl`void main() {
vec2 coord = gl_FragCoord.xy * invFramebufferDim;
vec4 value = texture(tex, coord);
float mx = floor(max(value.g, value.b));
fragColor = vec4(ceil(value.r), mx, mx, 1.0);
}`);return a}let l=function(a){function b(){var d=c.apply(this,arguments);d.invFramebufferDim=m.create();return d}f._inherits(b,a);var c=f._createSuper(b);return f._createClass(b)}(g.NoParameters);const u=Object.freeze(Object.defineProperty({__proto__:null,HighlightDownsampleDrawParameters:l,build:k},Symbol.toStringTag,{value:"Module"}));e.HighlightDownsample=u;e.HighlightDownsampleDrawParameters=l;e.build=k});