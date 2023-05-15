// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../chunks/mat3f64 ../../../../../../chunks/mat4f64 ../../../../../../chunks/vec3f32 ../../../../../../chunks/vec3f64 ./PositionAttribute.glsl ../util/DoublePrecision.glsl ../../shaderModules/Float3DrawUniform ../../shaderModules/Float3PassUniform ../../shaderModules/interfaces ../../shaderModules/Matrix3DrawUniform ../../shaderModules/Matrix3PassUniform ../../shaderModules/Matrix4PassUniform".split(" "),function(g,f,
k,p,l,m,q,r,n,h,e,t,u,v){let w=function(b){function c(){var a=d.apply(this,arguments);a.transformWorldFromViewTH=m.create();a.transformWorldFromViewTL=m.create();a.transformViewFromCameraRelativeRS=k.create();a.transformProjFromView=p.create();return a}f._inherits(c,b);var d=f._createSuper(c);return f._createClass(c)}(e.NoParameters),x=function(b){function c(){var a=d.apply(this,arguments);a.transformWorldFromModelRS=k.create();a.transformWorldFromModelTH=l.create();a.transformWorldFromModelTL=l.create();
return a}f._inherits(c,b);var d=f._createSuper(c);return f._createClass(c)}(e.NoParameters);g.VertexPosition=function(b,c){b.include(q.PositionAttribute);const d=b.vertex;d.include(r.DoublePrecision,c);b.varyings.add("vPositionWorldCameraRelative","vec3");b.varyings.add("vPosition_view","vec3");d.uniforms.add([new h.Float3PassUniform("transformWorldFromViewTH",a=>a.transformWorldFromViewTH),new h.Float3PassUniform("transformWorldFromViewTL",a=>a.transformWorldFromViewTL),new u.Matrix3PassUniform("transformViewFromCameraRelativeRS",
a=>a.transformViewFromCameraRelativeRS),new v.Matrix4PassUniform("transformProjFromView",a=>a.transformProjFromView),new t.Matrix3DrawUniform("transformWorldFromModelRS",a=>a.transformWorldFromModelRS),new n.Float3DrawUniform("transformWorldFromModelTH",a=>a.transformWorldFromModelTH),new n.Float3DrawUniform("transformWorldFromModelTL",a=>a.transformWorldFromModelTL)]);d.code.add(e.glsl`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`);d.code.add(e.glsl`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${c.spherical?e.glsl`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:e.glsl`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `);b.fragment.uniforms.add(new h.Float3PassUniform("transformWorldFromViewTL",a=>a.transformWorldFromViewTL));d.code.add(e.glsl`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`);b.fragment.code.add(e.glsl`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)};g.VertexPositionDrawParameters=x;g.VertexPositionPassParameters=w;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});