// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/ObjectAndLayerIdColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/TransparencyPassType ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(h,k,d,p,q,r,t,u,v,w,x,y,z,A,c,B,C,D){function l(a){const b=new B.ShaderBuilder,{vertex:m,fragment:g,varyings:n}=b;z.addProjViewLocalOrigin(m,a);b.include(q.Transform,a);b.include(t.VertexColor,a);b.include(r.ObjectAndLayerIdColor,a);b.attributes.add(D.VertexAttribute.POSITION,"vec3");n.add("vpos","vec3");const e=a.hasMultipassTerrain&&(a.output===d.ShaderOutput.Color||a.output===d.ShaderOutput.Alpha);e&&n.add("depth","float");var f=a.output===d.ShaderOutput.Depth;f&&(b.include(u.OutputDepth,
a),k.addNearFar(b),k.addLinearDepth(b));m.code.add(c.glsl`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();
      ${e?"depth \x3d (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = ${f?c.glsl`transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);`:c.glsl`transformPosition(proj, view, vpos);`}
    }
  `);b.include(p.SliceDraw,a);e&&b.include(w.multipassTerrainTest,a);g.include(y.ColorConversion);g.uniforms.add(new A.Float4PassUniform("eColor",E=>E.color));(f=a.output===d.ShaderOutput.Highlight)&&b.include(v.OutputHighlight,a);g.code.add(c.glsl`
  void main() {
    discardBySlice(vpos);
    ${e?"terrainDepthTest(gl_FragCoord, depth);":""}
    vec4 fColor = ${a.hasVertexColors?"vColor * eColor;":"eColor;"}

    ${a.output===d.ShaderOutput.ObjectAndLayerIdColor?c.glsl`fColor.a = 1.0;`:""}

    if (fColor.a < ${c.glsl.float(x.symbolAlphaCutoff)}) {
      discard;
    }

    ${a.output===d.ShaderOutput.Alpha?c.glsl`fragColor = vec4(fColor.a);`:""}

    ${a.output===d.ShaderOutput.Color?c.glsl`fragColor = highlightSlice(fColor, vpos); ${a.transparencyPassType===C.TransparencyPassType.Color?"fragColor \x3d premultiplyAlpha(fragColor);":""}`:""}
    ${f?c.glsl`outputHighlight();`:""};
    ${a.output===d.ShaderOutput.Depth?c.glsl`outputDepth(linearDepth);`:""};
    ${a.output===d.ShaderOutput.ObjectAndLayerIdColor?c.glsl`outputObjectAndLayerIdColor();`:""}
  }
  `);return b}const F=Object.freeze(Object.defineProperty({__proto__:null,build:l},Symbol.toStringTag,{value:"Module"}));h.ColorMaterial=F;h.build=l});