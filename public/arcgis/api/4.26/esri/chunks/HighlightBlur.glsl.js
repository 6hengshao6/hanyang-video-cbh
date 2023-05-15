// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ./_rollupPluginBabelHelpers ./vec2f64 ../views/3d/webgl-engine/core/shaderModules/Float2DrawUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DDrawUniform ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),function(f,g,n,p,h,q,r,t,k){function l(){const a=new q.ShaderBuilder,{vertex:b,fragment:c}=
a,e=b.code,u=c.code;a.attributes.add(k.VertexAttribute.POSITION,"vec2");a.attributes.add(k.VertexAttribute.UV0,"vec2");a.varyings.add("blurCoordinate","vec3");b.uniforms.add(new t.Texture2DPassUniform("coverageTex",d=>d.coverageTexture));c.uniforms.add(new p.Float2DrawUniform("blurSize",d=>d.blurSize));e.add(h.glsl`void main() {
gl_Position = vec4(position, 0.0, 1.0);
vec4 cov = texture(coverageTex, uv0);
if (cov.r == 0.0) {
gl_Position = vec4(0.0);
}
blurCoordinate = vec3(gl_Position.xy * 0.5 + vec2(0.5), max(cov.g, cov.b));
}`);c.uniforms.add(new r.Texture2DDrawUniform("tex",d=>d.blurInputTexture));u.add(h.glsl`void main() {
vec2 uv = blurCoordinate.xy;
vec4 center = texture(tex, uv);
if (blurCoordinate.z == 1.0) {
fragColor = center;
} else {
vec4 sum = vec4(0.0);
sum += center * 0.204164;
sum += texture(tex, uv + blurSize * 1.407333) * 0.304005;
sum += texture(tex, uv - blurSize * 1.407333) * 0.304005;
sum += texture(tex, uv + blurSize * 3.294215) * 0.093913;
sum += texture(tex, uv - blurSize * 3.294215) * 0.093913;
fragColor = sum;
}
}`);return a}let m=function(a){function b(){var e=c.apply(this,arguments);e.blurSize=n.create();return e}g._inherits(b,a);var c=g._createSuper(b);return g._createClass(b)}(h.NoParameters);const v=Object.freeze(Object.defineProperty({__proto__:null,HighlightBlurDrawParameters:m,build:l},Symbol.toStringTag,{value:"Module"}));f.HighlightBlur=v;f.HighlightBlurDrawParameters=m;f.build=l});