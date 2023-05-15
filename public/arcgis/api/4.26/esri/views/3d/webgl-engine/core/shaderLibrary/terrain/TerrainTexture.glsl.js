// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../terrain/interfaces ./BackgroundGrid.glsl ./Overlay.glsl ./TileBlendInput ../../shaderModules/FloatPassUniform ../../shaderModules/interfaces ../../shaderModules/Texture2DPassUniform ../../shaderModules/Uniform".split(" "),function(g,e,r,t,u,p,v,f,w,h){let x=function(c){function a(){var b=d.apply(this,arguments);b.overlayOpacity=1;return b}e._inherits(a,c);var d=e._createSuper(a);return e._createClass(a)}(f.NoParameters),
y=function(c){function a(b){return d.call(this,b,"float")}e._inherits(a,c);var d=e._createSuper(a);return e._createClass(a)}(h.Uniform),k=function(c){function a(b){return d.call(this,b,"vec3")}e._inherits(a,c);var d=e._createSuper(a);return e._createClass(a)}(h.Uniform),l=function(c){function a(b){return d.call(this,b,"vec4")}e._inherits(a,c);var d=e._createSuper(a);return e._createClass(a)}(h.Uniform),m=function(c){function a(b){return d.call(this,b,"sampler2D")}e._inherits(a,c);var d=e._createSuper(a);
return e._createClass(a)}(h.Uniform);g.Float3Uniform=k;g.OverlayTerrain=function(c,a){c.vertex.uniforms.add([new l("overlayTexOffset"),new l("overlayTexScale")]);c.fragment.uniforms.add([new v.FloatPassUniform("overlayOpacity",d=>d.overlayOpacity),new w.Texture2DPassUniform("ovColorTex",(d,b)=>0===b.overlays.length?null:b.overlays[r.OverlayIndex.INNER].getColorTexture(d.overlaySource))]);u.overlay(c,a)};g.OverlayTerrainPassParameters=x;g.TerrainTexture=function(c,a){const {vertex:d,fragment:b,varyings:q}=
c;q.add("vtc","vec2");d.uniforms.add(new l("texOffsetAndScale"));b.uniforms.add(new m("tex"));b.uniforms.add(new k("textureOpacities"));if(c=a.textureFadingEnabled&&!a.renderOccluded)d.uniforms.add(new l("nextTexOffsetAndScale")),q.add("nvtc","vec2"),b.uniforms.add(new m("texNext")),b.uniforms.add(new k("nextTexOpacities")),b.uniforms.add(new y("fadeFactor"));const n=a.tileBlendInput===p.TileBlendInput.ColorComposite;(a=a.tileBlendInput===p.TileBlendInput.GridComposite)&&b.include(t.BackgroundGrid);
n&&b.uniforms.add(new k("backgroundColor"));d.code.add(f.glsl`
  void forwardTextureCoordinatesWithTransform(in vec2 uv) {
    vtc = uv * texOffsetAndScale.zw + texOffsetAndScale.xy;
    ${c?f.glsl`nvtc = uv * nextTexOffsetAndScale.zw + nextTexOffsetAndScale.xy;`:f.glsl``}
  }`);b.code.add(f.glsl`
    vec4 getColor(vec4 color, vec2 uv, vec3 opacities) {
      ${a||n?f.glsl`
              if (opacities.y <= 0.0) {
                return color * opacities.z * opacities.x;
              }
              vec4 bg = vec4(${n?f.glsl`backgroundColor`:f.glsl`gridColor(uv)`} * opacities.y, opacities.y);
              vec4 layer = color * opacities.z;
              return (bg * (1.0 - layer.a) + layer) * opacities.x;`:f.glsl`return color;`}
    }`);c?b.code.add(f.glsl`vec4 getTileColor() {
vec4 color = getColor(texture(tex, vtc), vtc, textureOpacities);
if (fadeFactor >= 1.0) {
return color;
}
vec4 nextColor = getColor(texture(texNext, nvtc), nvtc, nextTexOpacities);
return mix(nextColor, color, fadeFactor);
}`):b.code.add(f.glsl`vec4 getTileColor() {
return getColor(texture(tex, vtc), vtc, textureOpacities);
}`)};g.Texture2DUniform=m;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});