// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/compilerUtils ../../../../../../chunks/mat3f64 ../../../../../../chunks/vec4f64 ./NormalAttribute.glsl ./VertexPosition.glsl ../../shaderModules/interfaces ../../shaderModules/Matrix3DrawUniform ../../shaderModules/Matrix3PassUniform".split(" "),function(h,d,m,l,n,e,k,g,p,q){let r=function(a){function b(){var f=c.apply(this,arguments);f.transformNormalViewFromGlobal=l.create();return f}d._inherits(b,a);var c=
d._createSuper(b);return d._createClass(b)}(k.VertexPositionPassParameters),t=function(a){function b(){var f=c.apply(this,arguments);f.transformNormalGlobalFromModel=l.create();f.toMapSpace=n.create();return f}d._inherits(b,a);var c=d._createSuper(b);return d._createClass(b)}(k.VertexPositionDrawParameters);h.VertexNormal=function(a,b){switch(b.normalType){case e.NormalAttributeType.Attribute:case e.NormalAttributeType.CompressedAttribute:a.include(e.NormalAttribute,b);a.varyings.add("vNormalWorld",
"vec3");a.varyings.add("vNormalView","vec3");a.vertex.uniforms.add([new p.Matrix3DrawUniform("transformNormalGlobalFromModel",c=>c.transformNormalGlobalFromModel),new q.Matrix3PassUniform("transformNormalViewFromGlobal",c=>c.transformNormalViewFromGlobal)]);a.vertex.code.add(g.glsl`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case e.NormalAttributeType.Ground:a.include(k.VertexPosition,b);a.varyings.add("vNormalWorld","vec3");a.vertex.code.add(g.glsl`
        void forwardNormal() {
          vNormalWorld = ${b.spherical?g.glsl`normalize(vPositionWorldCameraRelative);`:g.glsl`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case e.NormalAttributeType.ScreenDerivative:a.vertex.code.add(g.glsl`void forwardNormal() {}`);break;default:m.neverReached(b.normalType);case e.NormalAttributeType.COUNT:}};h.VertexNormalDrawParameters=t;h.VertexNormalPassParameters=r;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});