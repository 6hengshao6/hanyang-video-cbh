// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ./_rollupPluginBabelHelpers ../core/mathUtils ./mat4 ./mat4f64 ./vec2 ./vec2f64 ./vec3 ./vec3f64 ../geometry/support/aaBoundingBox ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl ../views/3d/webgl-engine/core/shaderModules/Float2DrawUniform ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float3DrawUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4DrawUniform ../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(p,l,m,w,t,u,K,x,L,y,z,q,A,M,N,B,O,C,g,P,Q,R,D){function E(b){const a=new R.ShaderBuilder,n=b.output===q.ShaderOutput.Color,d=b.output===q.ShaderOutput.Depth,r=b.output===q.ShaderOutput.Highlight,{vertex:h,fragment:k}=a;a.include(A.SliceDraw,b);a.attributes.add(D.VertexAttribute.POSITION,"vec3");a.attributes.add(D.VertexAttribute.COLOR,"vec3");h.uniforms.add([new P.Matrix4DrawUniform("modelView",(c,e)=>w.multiply(F,e.camera.viewMatrix,w.fromTranslation(F,c.origin))),new Q.Matrix4PassUniform("proj",
(c,e)=>e.camera.projectionMatrix),new B.Float2DrawUniform("screenMinMaxSize",(c,e,f)=>u.set(v,f.useFixedSizes?0:f.minSizePx*e.camera.pixelRatio,(c.isLeaf?256:64)*e.camera.pixelRatio))]);h.uniforms.add(b.useFixedSizes?new O.Float2PassUniform("pointScale",(c,e)=>u.set(v,c.fixedSize*e.camera.pixelRatio,e.camera.fullHeight)):new B.Float2DrawUniform("pointScale",(c,e,f)=>u.set(v,c.splatSize*f.scaleFactor*e.camera.pixelRatio,e.camera.fullHeight/e.camera.pixelRatio)));b.clippingEnabled?h.uniforms.add([new C.Float3DrawUniform("clipMin",
(c,e,f)=>x.set(G,f.clipBox[0]-c.origin[0],f.clipBox[1]-c.origin[1],f.clipBox[2]-c.origin[2])),new C.Float3DrawUniform("clipMax",(c,e,f)=>x.set(G,f.clipBox[3]-c.origin[0],f.clipBox[4]-c.origin[1],f.clipBox[5]-c.origin[2]))]):(h.constants.add("clipMin","vec3",[-m.NUMBER_MAX_FLOAT32,-m.NUMBER_MAX_FLOAT32,-m.NUMBER_MAX_FLOAT32]),h.constants.add("clipMax","vec3",[m.NUMBER_MAX_FLOAT32,m.NUMBER_MAX_FLOAT32,m.NUMBER_MAX_FLOAT32]));d?(z.addNearFar(a),z.addCalculateLinearDepth(a),a.varyings.add("depth","float")):
b.output!==q.ShaderOutput.Highlight&&a.varyings.add("vColor","vec3");h.code.add(g.glsl`
    void main(void) {
      // Move clipped points outside of clipspace
      if (position.x < clipMin.x || position.y < clipMin.y || position.z < clipMin.z ||
        position.x > clipMax.x || position.y > clipMax.y || position.z > clipMax.z) {
        gl_Position = vec4(0.0,0.0,0.0,2.0);
        gl_PointSize = 0.0;
        return;
      }

      if (rejectBySlice(position)) {
        gl_Position = vec4(0.0,0.0,0.0,2.0);
        gl_PointSize = 0.0;
        return;
      }

      // Position in camera space
      vec4 camera = modelView * vec4(position, 1.0);

      float pointSize = pointScale.x;
      vec4 position = proj * camera;
     ${b.drawScreenSize?g.glsl`
      float clampedScreenSize = pointSize;`:g.glsl`
      float pointRadius = 0.5 * pointSize;
      vec4 cameraOffset = camera + vec4(0.0, pointRadius, 0.0, 0.0);
      vec4 positionOffset = proj * cameraOffset;
      float radius = abs(positionOffset.y - position.y);
      float viewHeight = pointScale.y;
      // screen diameter = (2 * r / w) * (h / 2)
      float screenPointSize = (radius / position.w) * viewHeight;
      float clampedScreenSize = clamp(screenPointSize, screenMinMaxSize.x, screenMinMaxSize.y);
      // Shift towards camera, to move rendered point out of terrain i.e. to
      // the camera-facing end of the virtual point when considering it as a
      // 3D sphere.
      camera.xyz -= normalize(camera.xyz) * pointRadius * clampedScreenSize / screenPointSize;
      position = proj * camera;`}

     gl_PointSize = clampedScreenSize;
     gl_Position = position;

     ${d?g.glsl`depth = calculateLinearDepth(nearFar, camera.z);`:""}
     ${n?g.glsl`vColor = color;`:""}
    }
  `);k.include(N.RgbaFloatEncoding,b);r&&a.include(M.OutputHighlight,b);k.code.add(g.glsl`
    void main(void) {
      vec2 vOffset = gl_PointCoord - vec2(0.5, 0.5);
      float r2 = dot(vOffset, vOffset);

      if (r2 > 0.25) {
        discard;
      }
      ${d?g.glsl`fragColor = float2rgba(depth);`:""}
      ${r?g.glsl`outputHighlight();`:""}
      ${n?g.glsl`fragColor = vec4(vColor, 1.0);`:""}
    }
  `);return a}function H(b){return b?256:64}let I=function(b){function a(){var d=n.apply(this,arguments);d.clipBox=y.create(y.POSITIVE_INFINITY);d.useFixedSizes=!1;d.useRealWorldSymbolSizes=!1;d.scaleFactor=1;d.minSizePx=0;d.size=0;d.sizePx=0;return d}l._inherits(a,b);var n=l._createSuper(a);l._createClass(a,[{key:"fixedSize",get:function(){return this.drawScreenSpace?this.sizePx:this.size}},{key:"screenMinSize",get:function(){return this.useFixedSizes?0:this.minSizePx}},{key:"drawScreenSpace",get:function(){return this.useFixedSizes&&
!this.useRealWorldSymbolSizes}}]);return a}(g.NoParameters),J=function(b){function a(d,r,h){var k=n.call(this,d);k.origin=d;k.isLeaf=r;k.splatSize=h;return k}l._inherits(a,b);var n=l._createSuper(a);return l._createClass(a)}(A.SlicePlaneParameters);const F=t.create(),G=L.create(),v=K.create();t=Object.freeze(Object.defineProperty({__proto__:null,PointRendererDrawParameters:J,PointRendererPassParameters:I,build:E,getMaxPointSizeScreenspace:H},Symbol.toStringTag,{value:"Module"}));p.PointRendererDrawParameters=
J;p.PointRendererPassParameters=I;p.PointRendererShader=t;p.build=E;p.getMaxPointSizeScreenspace=H});