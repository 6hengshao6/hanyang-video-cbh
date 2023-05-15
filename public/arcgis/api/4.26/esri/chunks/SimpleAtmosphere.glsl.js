// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ./_rollupPluginBabelHelpers ./vec2f64 ./vec3f64 ../views/3d/environment/SimpleAtmosphereTechniqueConfiguration ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(h,k,w,m,q,x,y,z,l,n,d,r,A,B,t){function u(f){const b=new A.ShaderBuilder,{vertex:c,fragment:e}=b;y.addMainLightDirection(c);f.geometry===q.SimpleAtmosphereGeometry.Underground?(b.attributes.add(t.VertexAttribute.POSITION,"vec2"),b.varyings.add("color","vec4"),c.uniforms.add([new l.Float3PassUniform("cameraPosition",(a,g)=>g.camera.eye),new n.FloatPassUniform("undergroundFadeAlpha",a=>a.undergroundFadeAlpha)]),c.code.add(d.glsl`void main(void) {
float ndotl = dot(normalize(cameraPosition), mainLightDirection);
float lighting = max(0.0, smoothstep(-1.0, 0.8, 2.0 * ndotl));
color = vec4(vec3(lighting), undergroundFadeAlpha);
gl_Position = vec4(position.xy, 1.0, 1.0);
}`),e.code.add(d.glsl`void main() {
fragColor = color;
}`)):(b.include(x.Transform,f),b.attributes.add(t.VertexAttribute.POSITION,"vec3"),b.varyings.add("vtc","vec2"),b.varyings.add("falloff","float"),f=f.geometry===q.SimpleAtmosphereGeometry.Cylinder,c.uniforms.add([new r.Matrix4PassUniform("proj",(a,g)=>g.camera.projectionMatrix),new r.Matrix4PassUniform("view",(a,g)=>g.camera.viewMatrix)]),f||(b.varyings.add("innerFactor","float"),c.uniforms.add(new l.Float3PassUniform("silCircleCenter",a=>a.silhouette.center)),c.uniforms.add(new l.Float3PassUniform("silCircleV1",
a=>a.silhouette.v1)),c.uniforms.add(new l.Float3PassUniform("silCircleV2",a=>a.silhouette.v2)),c.uniforms.add(new z.Float2PassUniform("texV",a=>a.texV)),c.uniforms.add(new n.FloatPassUniform("innerScale",a=>a.innerScale))),c.code.add(d.glsl`
		void main(void) {
      ${f?d.glsl`
      vec3 pos = position;
      float ndotl = mainLightDirection.z;
      vtc = vec2(0.0, position.z + 0.05);`:d.glsl`
      innerFactor = clamp(-position.z, 0.0, 1.0);
      float scale = position.y * (1.0 + innerFactor * innerScale);
      float phi = position.x * ${d.glsl.float(.04908738515625)} + 1.0;
      vec3 pos =  (silCircleCenter + sin(phi) * silCircleV1 + cos(phi) * silCircleV2) * scale;
      float ndotl = dot(normalize(position.y > 0.0 ? pos: silCircleCenter), mainLightDirection);
      vtc.x = position.x  * ${d.glsl.float(.0078125)};
      vtc.y = texV.x * (1.0 - position.z) + texV.y * position.z;
      `}
      falloff = max(0.0, smoothstep(-1.0, 0.8, 2.0 * ndotl));

		  gl_Position = transformPosition(proj, view, pos);
		  gl_Position.z = gl_Position.w; // project atmosphere onto the far plane
    }
	  `),e.uniforms.add(new B.Texture2DPassUniform("tex",a=>a.texture)),f||e.uniforms.add(new n.FloatPassUniform("altitudeFade",a=>a.altitudeFade)),e.code.add(d.glsl`
		void main() {
			vec4 atmosphereColor = texture(tex, vtc) * falloff;
      ${f?d.glsl`fragColor = atmosphereColor;`:d.glsl`
			vec4 innerColor = vec4(atmosphereColor.rgb, 1.0 - altitudeFade);
			fragColor = mix(atmosphereColor, innerColor, smoothstep(0.0, 1.0, innerFactor));
      `}
    }`));return b}let v=function(f){function b(){var e=c.apply(this,arguments);e.texV=w.create();e.altitudeFade=0;e.innerScale=0;e.undergroundFadeAlpha=0;e.silhouette=new p;return e}k._inherits(b,f);var c=k._createSuper(b);return k._createClass(b)}(d.NoParameters),p=k._createClass(function(){this.center=m.create();this.v1=m.create();this.v2=m.create()});const C=Object.freeze(Object.defineProperty({__proto__:null,SilhouetteCircle:p,SimpleAtmospherePassParameters:v,build:u},Symbol.toStringTag,{value:"Module"}));
h.SilhouetteCircle=p;h.SimpleAtmosphere=C;h.SimpleAtmospherePassParameters=v;h.build=u});