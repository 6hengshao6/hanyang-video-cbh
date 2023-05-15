// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../chunks/vec2f64 ../../shaderModules/Float2PassUniform ../../shaderModules/FloatPassUniform ../../shaderModules/interfaces ../../../lib/VertexAttribute".split(" "),function(c,d,h,k,l,f,g){let n=function(a){function b(){var e=m.apply(this,arguments);e.scale=1;e.offset=h.ZEROS;return e}d._inherits(b,a);var m=d._createSuper(b);return d._createClass(b)}(f.NoParameters);c.TileComposite=function(a){a.attributes.add(g.VertexAttribute.POSITION,
"vec2");a.attributes.add(g.VertexAttribute.UV0,"vec2");a.vertex.uniforms.add(new l.FloatPassUniform("scale",b=>b.scale));a.vertex.uniforms.add(new k.Float2PassUniform("offset",b=>b.offset));a.varyings.add("uv","vec2");a.varyings.add("vuv","vec2");a.vertex.code.add(f.glsl`void main(void) {
gl_Position = vec4(position, 0.0, 1.0);
uv = uv0 * scale + offset;
vuv = uv0;
}`)};c.TileCompositePassParameters=n;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});