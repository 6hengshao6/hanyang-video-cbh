// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../core/mathUtils ../../../core/maybe ../../../core/reactiveUtils ../../../chunks/mat4 ../../../chunks/mat4f64 ../../../chunks/vec2 ../../../chunks/vec3 ../../../chunks/vec3f64 ../../../geometry/ellipsoidUtils ../../../geometry/support/FloatArray ../../../geometry/support/spatialReferenceUtils ./AtmosphereType ./atmosphereUtils ../../../chunks/SimpleAtmosphere.glsl ./SimpleAtmosphereTechnique ./SimpleAtmosphereTechniqueConfiguration ./resources/MarsAtmosphereTexture ./resources/SimpleAtmosphereTexture ../support/mathUtils ../support/buffer/glUtil ../support/buffer/InterleavedLayout ../webgl-engine/lib/DefaultVertexAttributeLocations ../webgl-engine/lib/glUtil3D ../webgl-engine/lib/Util ../webgl-engine/lib/VertexArrayObject ../webgl-engine/lib/VertexAttribute ../../webgl/BufferObject ../../webgl/enums ../../webgl/Texture ../../webgl/Util".split(" "),
function(E,v,F,w,G,H,I,h,q,J,K,L,M,x,N,y,r,O,P,t,Q,R,S,T,z,U,V,W,m,X,A){function B(k,l,a,b,d){const g=h.length(k),c=b*Math.sqrt(g*g-b*b)/g,f=d.v1,e=d.v2;h.scale(d.center,k,Math.sqrt(b*b-c*c)/g);h.cross(f,k,l);1>h.squaredLength(f)&&h.cross(f,k,a);h.scale(f,f,c/h.length(f));h.cross(e,f,k);h.scale(e,e,c/h.length(e));return c}const C=-x.innerAtmosphereDepth,Y=t.makePiecewiseLinearFunction([[50,.1015625],[500,.21875],[5E3,.51171875],[5E4,.4140625]]);t=function(){function k(a,b){this.view=a;this.type=M.AtmosphereType.Simple;
this._passParameters=new N.SimpleAtmospherePassParameters;this._vaoCount=0;this._texV1=1;this._isMars=L.isMars(a.spatialReference);a=J.getReferenceEllipsoid(a.spatialReference);this._planetRadius=a.radius;this._outerRimWidth=a.outerAtmosphereRimWidth;this._innerRimFactor=(this._planetRadius+C)/this._planetRadius;this._middleRimFactor=(this._planetRadius+0)/this._planetRadius;this._outerRimFactor=(this._planetRadius+this._outerRimWidth)/this._planetRadius;this._texV0=0/this._outerRimWidth;this._texVScale=
this._texV1-this._texV0;this._techniqueRepository=b.techniqueRepository;a=b.renderContext.rctx;this._cameraChangeHandle=w.watch(()=>this.view.state?.camera,()=>b.requestRender(),w.syncAndInitial);this._vao=this._createRibbon(a);this._vaoCount=A.vertexCount(this._vao,"geometry");this._fadeVao=T.createQuadVAO(a);this._fadeVaoCount=A.vertexCount(this._fadeVao,"geometry");this._passParameters.texture=new X.Texture(a,{pixelFormat:m.PixelFormat.RGBA,dataType:m.PixelType.UNSIGNED_BYTE,wrapMode:m.TextureWrapMode.CLAMP_TO_EDGE,
samplingMode:m.TextureSamplingMode.LINEAR,flipped:!0,width:1,height:512},this._isMars?O.marsAtmosphereTextureSimple:P.earthAtmosphereTextureSimple);a=new r.SimpleAtmosphereTechniqueConfiguration;a.geometry=r.SimpleAtmosphereGeometry.Cone;this._coneTechnique=this._techniqueRepository.acquire(y.SimpleAtmosphereTechnique,a);a.geometry=r.SimpleAtmosphereGeometry.Underground;this._undergroundTechnique=this._techniqueRepository.acquire(y.SimpleAtmosphereTechnique,a)}var l=k.prototype;l.destroy=function(){this._coneTechnique.release();
this._undergroundTechnique.release();this._cameraChangeHandle.remove();this._passParameters.texture=F.disposeMaybe(this._passParameters.texture);this._fadeVao.dispose();this._vao.dispose()};l.render=function(a){this._update(a.bindParameters.camera);const b=a.rctx;1>this._passParameters.undergroundFadeAlpha&&(b.bindTechnique(this._coneTechnique,this._passParameters,a.bindParameters),b.bindVAO(this._vao),b.drawArrays(m.PrimitiveType.TRIANGLES,0,this._vaoCount));0<this._passParameters.undergroundFadeAlpha&&
(b.bindTechnique(this._undergroundTechnique,this._passParameters,a.bindParameters),b.bindVAO(this._fadeVao),b.drawArrays(m.PrimitiveType.TRIANGLE_STRIP,0,this._fadeVaoCount))};l.renderHaze=function(){};l._update=function(a){var b=q.create();const d=this._planetRadius;var g=h.length(a.eye);const c=g-d;this._passParameters.undergroundFadeAlpha=0>c?Math.min(-c/5E3,1):0;var f=d+C,e=d+Math.max(50,c);this._passParameters.innerScale=e*e/(Math.sqrt(e*e-d*d)*Math.sqrt(e*e-f*f)+d*f)-1;this._passParameters.altitudeFade=
x.computeInnerAltitudeFade(c);h.scale(b,a.eye,(d+50)/g);B(b,a.center,a.up,d,this._passParameters.silhouette);b=this._computeScreenRimWidth(a,b,a.up,this._passParameters.silhouette);g=Y(c);f=this._texV0+.001953125*this._texVScale;e=this._texV0+b*g*this._texVScale;50<c&&(B(a.eye,a.center,a.up,d,this._passParameters.silhouette),a=this._computeScreenRimWidth(a,a.eye,a.up,this._passParameters.silhouette),a=v.clamp((a-1.5)/(b-1.5),0,1),f=this._texV0+.001953125*a*this._texVScale,e=this._texV0+v.lerp(this._texV1,
b*g,a)*this._texVScale);I.set(this._passParameters.texV,f,e)};l._createRibbon=function(a){const b=K.newFloatArray(1155),d=new Uint32Array(1920);b[0]=0;b[1]=0;b[2]=-1;for(var g=0;128>g;g++){var c=9*g+3;b[c]=g;b[c+1]=this._innerRimFactor;b[c+2]=-1;b[c+3]=g;b[c+4]=this._middleRimFactor;b[c+5]=0;b[c+6]=g;b[c+7]=this._outerRimFactor;b[c+8]=1;c=3*g+1;var f=127===g?1:c+3,e=15*g;d[e]=c;d[e+1]=c+1;d[e+2]=f+1;d[e+3]=f+1;d[e+4]=f;d[e+5]=c;d[e+6]=c+1;d[e+7]=c+2;d[e+8]=f+2;d[e+9]=f+2;d[e+10]=f+1;d[e+11]=c+1;d[e+
12]=c;d[e+13]=f;d[e+14]=0}g=D.createBuffer(d.length);c=g.position;for(f=0;f<d.length;++f)e=3*d[f],c.set(f,0,b[e]),c.set(f,1,b[e+1]),c.set(f,2,b[e+2]);return new U.VertexArrayObject(a,S.Default3D,{geometry:Q.glLayout(D)},{geometry:W.BufferObject.createVertex(a,m.Usage.STATIC_DRAW,g.buffer)})};l._computeScreenRimWidth=function(a,b,d,g){h.add(n,g.center,g.v2);h.scale(p,n,this._outerRimFactor);G.lookAt(u,b,n,d);z.project(n,u,a.projectionMatrix,a.viewport,n);z.project(p,u,a.projectionMatrix,a.viewport,
p);return h.distance(n,p)/a.height};return E._createClass(k)}();const u=H.create(),n=q.create(),p=q.create(),D=R.newLayout().vec3f(V.VertexAttribute.POSITION);return t});