// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/has ../../../../core/Error ../../../../core/maybe ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/vec2 ../../../../chunks/vec2f64 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/projection ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/DoubleArray ./elevationAlignmentUtils ./ElevationContext ./Graphics3DObject3DGraphicLayer ./Graphics3DPathSymbolLayerConstants ./Graphics3DSymbolLayer ./graphicUtils ./interfaces ../support/FastSymbolUpdates ../../support/ElevationProvider ../../webgl-engine/lib/basicInterfaces ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/Path ../../webgl-engine/lib/PathBuilder ../../webgl-engine/lib/PathCapBuilder ../../webgl-engine/lib/PathExtruder ../../webgl-engine/lib/PathGeometry ../../webgl-engine/lib/PathGeometryData ../../webgl-engine/lib/pathGeometryUtils ../../webgl-engine/lib/PathProfile ../../webgl-engine/lib/PathVertex ../../webgl-engine/materials/DefaultMaterial ../../webgl-engine/materials/PathMaterial".split(" "),
function(T,C,U,oa,x,pa,V,W,X,Y,Z,aa,H,N,I,qa,ra,J,K,ba,O,P,sa,ca,ta,ua,va,v,L,w,da,wa,ea,xa,ya,za){function fa(h,t,z){const {origin:a,positions:b}=h;let c=h.offset;switch(t){default:case w.UpVectorAlignment.World:for(const k of h.vertices)e[0]=b[c++]+a[0],e[1]=b[c++]+a[1],e[2]=b[c++]+a[2],z.worldUpAtPosition(e,e),k.setFrameFromUpVector(e);break;case w.UpVectorAlignment.Path:e[0]=b[c]+a[0],e[1]=b[c+1]+a[1],e[2]=b[c+2]+a[2],z.worldUpAtPosition(e,e),wa.computeMinimumRotationTangentFrame(h,e)}}function ha(h,
t,z){switch(h){case "symbol-value":return z;case "proportional":return t;default:return h}}const Aa=["polyline"];U=function(h){function t(a,b,c,k){a=z.call(this,a,b,c,k);a._intrinsicSize=X.fromValues(1,1);a._upVectorAlignment=w.UpVectorAlignment.Path;a._stencilWidth=.1;a.ensureDrapedStatus(!1);return a}C._inherits(t,h);var z=C._createSuper(t);h=t.prototype;h.doLoad=async function(){var a=x.isSome(this.symbolLayer.width)?this.symbolLayer.width:this.symbolLayer.height;const b=x.isSome(this.symbolLayer.height)?
this.symbolLayer.height:a;this._vvConvertOptions=new P.ConvertOptions([1,1,1],[a,1,b],this._context.renderCoordsHelper.unitInMeters);this._vvConvertOptions.supportsOpacity=!0;this._vvConvertOptions.supportsRotation=!1;this._fastUpdates=0<this._context.renderer?.visualVariables?.length?P.initFastSymbolUpdatesState(this._context.renderer,this._vvConvertOptions):null;var c=this.symbolLayer.anchor||"center";this._upVectorAlignment="heading"===this.symbolLayer.profileRotation?w.UpVectorAlignment.World:
w.UpVectorAlignment.Path;var k=this.symbolLayer.profile||"circle";switch(k){default:case "circle":this._profile=ea.createCircleProfile(J.PATH_NUM_CIRCLE_PROFILE_SUBDIVISIONS);break;case "quad":this._profile=ea.creatQuadProfile()}var l=[0,0];"center"!==c&&(l={left:[.5,0],right:[-.5,0],top:[0,-.5],bottom:[0,.5]}[c],this._profile.translate(l[0],l[1]));switch(this.symbolLayer.join){case "round":this._extruder=new L.MiterExtruder(0,J.PATH_NUM_ROUND_JOIN_SUBDIVISIONS);break;case "bevel":this._extruder=
new L.MiterExtruder(0,1);break;case "miter":this._extruder=new L.MiterExtruder(.8*Math.PI,1);break;default:this._extruder=new L.SimpleExtruder}c=this.symbolLayer.cap||"butt";switch(c){case "none":this._startCap=new v.NoCapBuilder;this._endCap=new v.NoCapBuilder;break;default:this._startCap=new v.TriangulationCapBuilder(this._profile,0);this._endCap=new v.TriangulationCapBuilder(this._profile,0,!0);break;case "square":this._startCap=new v.TriangulationCapBuilder(this._profile,-.5);this._endCap=new v.TriangulationCapBuilder(this._profile,
.5,!0);break;case "round":k="quad"===k,this._startCap=new v.RoundCapBuilder({profile:this._profile,flip:!1,breakNormals:k,subdivisions:J.PATH_NUM_ROUND_CAP_EXTRUSION_SUBDIVISIONS}),this._endCap=new v.RoundCapBuilder({profile:this._profile,flip:!0,breakNormals:k,subdivisions:J.PATH_NUM_ROUND_CAP_EXTRUSION_SUBDIVISIONS})}k=x.get(this.symbolLayer,"material","color");l=this._getCombinedOpacityAndColor(k);k=Z.fromArray(l);l=l[3];const f=1>l||this.needsDrivenTransparentPass;c={diffuse:k,ambient:k,opacity:l,
transparent:f,hasVertexColors:!1,hasSlicePlane:this._context.slicePlaneEnabled,castShadows:this.symbolLayer.castShadows,cullFace:f||"none"===c?ca.CullFaceOptions.None:ca.CullFaceOptions.Back,offsetTransparentBackfaces:!0};if(!this._drivenProperties.size&&(W.set(this._intrinsicSize,a,b),!ba.isValidSize(this._intrinsicSize[0])||!ba.isValidSize(this._intrinsicSize[1])))throw new oa("graphics3dpathsymbollayer:invalid-size","Symbol sizes may not be negative values");this._fastUpdates&&this._fastUpdates.visualVariables.size||
W.scale(this._intrinsicSize,this._intrinsicSize,1/this._context.renderCoordsHelper.unitInMeters);this._fastUpdates?(a={...c,...this._fastUpdates.materialParameters,size:X.fromArray(this._intrinsicSize)},this._material=new za.PathMaterial(a)):(c.hasVertexColors=this._drivenProperties.color||this._drivenProperties.opacity,this._material=new ya.DefaultMaterial(c));this._material.setParameters({usePBR:this._context.physicalBasedRenderingEnabled,isSchematic:!0});this._context.stage.add(this._material)};
h.destroy=function(){C._get(C._getPrototypeOf(t.prototype),"destroy",this).call(this);this._context.stage.remove(this._material);this._material=null};h.createGraphics3DGraphic=function(a){const b=a.graphic;if(!this._validateGeometry(b.geometry,Aa,this.symbolLayer.type))return null;const c=this.setGraphicElevationContext(b,new qa.ElevationContext);return this._createAs3DShape(b,a.renderingInfo,c,b.uid)};h.layerOpacityChanged=function(){var a=x.get(this.symbolLayer,"material","color");a=this._getCombinedOpacity(a);
this._material.setParameters({opacity:a,transparent:1>a||this.needsDrivenTransparentPass})};h.layerElevationInfoChanged=function(a,b){return this.updateGraphics3DGraphicElevationInfo(a,b,I.needsElevationUpdates3D)};h.slicePlaneEnabledChanged=function(){this._material.setParameters({hasSlicePlane:this._context.slicePlaneEnabled});return!0};h.physicalBasedRenderingChanged=function(){this._material.setParameters({usePBR:this._context.physicalBasedRenderingEnabled,isSchematic:!0});return!0};h.applyRendererDiff=
function(a,b){for(const c in a.diff)switch(c){case "visualVariables":if(P.updateFastSymbolUpdatesState(this._fastUpdates,b,this._vvConvertOptions))this._material.setParameters(this._fastUpdates.materialParameters);else return O.ApplyRendererDiffResult.Recreate_Symbol;break;default:return O.ApplyRendererDiffResult.Recreate_Symbol}return O.ApplyRendererDiffResult.Fast_Update};h._getVertexData=function(a){let b=0;const c=a.paths,k=[],l=a.spatialReference,f=this._context.elevationProvider.spatialReference,
p=this._context.renderCoordsHelper.spatialReference;for(var n of c)b+=n.length;n=N.newDoubleArray(3*b);let y=0;for(const D of c){k.push({offset:y,numVertices:D.length});for(const d of D)n[y++]=d[0],n[y++]=d[1],n[y++]=a.hasZ?d[2]:0}if(x.isSome(f)&&!l.equals(f)&&!aa.projectBuffer(n,l,0,n,f,0,b))return null;x.isSome(f)&&!f.equals(p)?(a=N.newDoubleArray(3*b),aa.projectBuffer(n,f,0,a,p,0,b)):a=N.doubleArrayFrom(n);return{pathVertexDataInfos:k,vertexDataES:n,vertexDataRS:a}};h._createAs3DShape=function(a,
b,c,k){var l=a.geometry;const f=this._getVertexData(l);if(null==f)return this.logger.warn("PathSymbol3DLayer geometry failed to be created (failed to project geometry to view spatial reference)"),null;if(0===f.pathVertexDataInfos.length)return 0!==l.paths.length&&l.paths.some(u=>0<u.length)||this.logger.warn("PathSymbol3DLayer geometry failed to be created (no paths were defined)"),null;var p=[];l=l.spatialReference;const n=H.create(),y=this._context.renderCoordsHelper,D=new sa.SamplePosition(f.vertexDataES);
for(const u of f.pathVertexDataInfos){var d=u.numVertices;if(2>d)continue;var q=u.offset;if(x.isSome(this._context.clippingExtent)&&(H.empty(n),H.expandWithBuffer(n,f.vertexDataES,q,d),!H.intersectsClippingArea(n,this._context.clippingExtent)))continue;var m=[];d=q+3*d;for(var g=q;g<d;g+=3){D.offset=g;const Q=I.evaluateElevationAlignmentAtPoint(D,this._context.elevationProvider,c,y);Y.set(e,f.vertexDataRS[g],f.vertexDataRS[g+1],f.vertexDataRS[g+2]);y.setAltitude(e,Q);f.vertexDataRS[g]=e[0];f.vertexDataRS[g+
1]=e[1];f.vertexDataRS[g+2]=e[2];m.push(xa.newPathVertex(this._upVectorAlignment))}q=new ua.Path(m,f.vertexDataES,f.vertexDataRS,q);fa(q,this._upVectorAlignment,this._context.renderCoordsHelper);q=new va.PathBuilder(q,this._profile,this._extruder,this._startCap,this._endCap);m=null;this._fastUpdates?(g=this._fastUpdates.visualVariables,m=g.size?K.getAttributeValue(g.size.field,a):0,d=g.color?K.getAttributeValue(g.color.field,a):0,g=g.opacity?K.getAttributeValue(g.opacity.field,a):0,m=new da.FastUpdatePathGeometry(q,
m,d,g)):(m=[this._intrinsicSize[0],this._intrinsicSize[1]],this._drivenProperties.size&&(d=b.size,m[0]*=ha(d[0],"symbol-value"===d[2]?this.symbolLayer.height||0:d[2],this.symbolLayer.width||0),m[1]*=ha(d[2],"symbol-value"===d[0]?this.symbolLayer.width||0:d[0],this.symbolLayer.height||0)),d=void 0,this._drivenProperties.color&&(d=b.color),this._drivenProperties.opacity&&null!=b.opacity&&(d=d?[d[0],d[1],d[2],b.opacity]:[1,1,1,b.opacity]),g=new da.StaticPathGeometry(q),g.bake(m),d&&g.bakeVertexColors(d),
m=g);const {vertexAttributes:E,indices:F}=m.createGeometryData();d=this._context.stage.renderView.getObjectAndLayerIdColor({graphicUid:k,layerUid:this._context.layer.uid});m=new w.PathGeometry(this._material,E,F,m,l,this._stencilWidth,d);m.transformation=pa.translate(V.create(),V.IDENTITY,q.path.origin);p.push(m)}if(0===p.length)return null;a=new ta.Object3D({geometries:p,metadata:{layerUid:this._context.layer.uid,graphicUid:k}});p=new ra.Graphics3DObject3DGraphicLayer(this,a,p,null,null,(u,E,F,Q,
ia)=>{E=this._upVectorAlignment;u=u.stageObject;F=u.geometries;var ja=0;for(const G of F){if(!w.isPathGeometry(G))continue;const ka=G.path,la=ka.builder.path;var M=la,Ba=Q,Ca=ia;let ma=0;const {origin:A,vertices:na,positions:B,positionsES:R}=M,Da=M.offset+3*na.length;for(let r=M.offset;r<Da;r+=3)Y.set(e,R[r],R[r+1],R[r+2]),Ba(e,S),ma+=S.sampledElevation,e[0]=B[r]+A[0],e[1]=B[r+1]+A[1],e[2]=B[r+2]+A[2],Ca.setAltitude(e,S.z),B[r]=e[0]-A[0],B[r+1]=e[1]-A[1],B[r+2]=e[2]-A[2];M.updatePathVertexInformation();
ja+=ma/na.length;E!==w.UpVectorAlignment.World&&fa(la,E,ia);ka.onPathChanged(G);G.invalidateBoundingInfo();u.geometryVertexAttrsUpdated(G)}return ja/F.length},c);p.alignedSampledElevation=0;p.needsElevationUpdates=I.needsElevationUpdates3D(c.mode);return p};return C._createClass(t)}(K.Graphics3DSymbolLayer);const e=Z.create(),S=new I.SampleElevationInfo;T.Graphics3DPathSymbolLayer=U;Object.defineProperty(T,Symbol.toStringTag,{value:"Module"})});