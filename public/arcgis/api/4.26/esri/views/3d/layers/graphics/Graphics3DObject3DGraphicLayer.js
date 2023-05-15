// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/support/aaBoundingBox ../../../../chunks/sphere ./elevationAlignmentUtils ./featureExpressionInfoUtils ./graphicUtils ../../webgl-engine/lib/basicInterfaces ../../webgl-engine/lib/edgeRendering/interfaces".split(" "),function(v,y,k,u,w,q,B,C,D,E,z,x){function A(n){return n.isVisible()?n.parameters.transparent?x.Transparency.TRANSPARENT:x.Transparency.OPAQUE:
x.Transparency.INVISIBLE}let F=y._createClass(function(n,e,a){this.baseMaterial=n;this.edgeMaterials=e;this.properties=a}),H=function(){function n(a,b,d,h,c,g,l,f=null){this.graphics3DSymbolLayer=a;this.stageObject=b;this._uniqueGeometries=d;this._uniqueMaterials=h;this._sharedResource=c;this.elevationAligner=g;this.elevationContext=l;this._edgeState=f;this.type="object3d";this._stage=this._stageLayer=null;this._addedToStage=this._visible=!1;this.alignedSampledElevation=0;this.useObjectOriginAsAttachmentOrigin=
this.needsElevationUpdates=!1}var e=n.prototype;e.initialize=function(a,b){this._stageLayer=b;this._stage=a;a.addMany(this._uniqueMaterials);a.addMany(this._uniqueGeometries);a.add(this.stageObject)};e.destroy=function(){var a=this._stage;this._stageLayer&&(a.removeMany(this._uniqueMaterials),a.removeMany(this._uniqueGeometries));a.remove(this.stageObject);this._addedToStage&&(this._stageLayer.remove(this.stageObject),this._addedToStage=!1);a=this._stage.renderer.ensureEdgeView();a.hasObject(this.stageObject)&&
a.removeObject(this.stageObject);this.stageObject.dispose();k.isSome(this._sharedResource)&&this._sharedResource.release();this._visible=!1;this._stage=this._stageLayer=null};e.layerOpacityChanged=function(a,b){if(!k.isNone(this._edgeState)){var d=A(this._edgeState.baseMaterial),h=!1;for(const c of this._edgeState.edgeMaterials)c.objectTransparency!==d&&(c.objectTransparency=d,h=!0);h&&this._resetEdgeObject(b);this._stage.renderer.ensureEdgeView().updateAllComponentOpacities(this.stageObject,[a])}};
e.slicePlaneEnabledChanged=function(a,b){k.isNone(this._edgeState)||(this._stage.renderer.ensureEdgeView().updateAllComponentMaterials(this.stageObject,this._edgeState.edgeMaterials,{hasSlicePlane:a},!b),this._edgeState.properties.hasSlicePlane=a)};e.setVisibility=function(a){if(null!=this._stage&&this._visible!==a&&(this._visible=a,this.stageObject.visible=a,this._visible&&!this._addedToStage&&(this._stageLayer.add(this.stageObject),this._addedToStage=!0),k.isSome(this._edgeState))){const b=this._stage.renderer.ensureEdgeView();
b.hasObject(this.stageObject)?b.updateObjectVisibility(this.stageObject,a):a&&this._addOrUpdateEdgeObject(b,!1)}};e.alignWithElevation=function(a,b,d,h){null!=this.elevationAligner&&(k.isSome(d)&&D.setContextFeature(this.elevationContext.featureExpressionInfoContext,d),this.alignedSampledElevation=this.elevationAligner(this,this.elevationContext,k.unwrap(a.spatialReference),(c,g)=>C.evaluateElevationInfoAtPoint(c,a,this.elevationContext,b,g),b),this._resetEdgeObject(h))};e.alignWithAbsoluteElevation=
function(a,b,d){this.alignedSampledElevation=this.elevationAligner(this,this.elevationContext,null,(h,c)=>{c.sampledElevation=a;c.verticalDistanceToGround=0;c.z=a},b);this._resetEdgeObject(d)};e.getCenterObjectSpace=function(a=w.create()){return u.copy(a,B.getCenter(this.stageObject.boundingVolumeObjectSpace.bounds))};e.getBoundingBoxObjectSpace=function(a=q.create()){const b=this.stageObject.boundingVolumeObjectSpace;q.setMin(a,b.min);q.setMax(a,b.max);return a};e.computeAttachmentOrigin=function(a){if(this.useObjectOriginAsAttachmentOrigin){var b=
this.stageObject.transformation;a.render.origin[0]+=b[12];a.render.origin[1]+=b[13];a.render.origin[2]+=b[14];a.render.num++}else for(b of this.stageObject.geometries)b.computeAttachmentOrigin(m)&&(u.transformMat4(m,m,this.stageObject.transformation),u.add(a.render.origin,a.render.origin,m),a.render.num++)};e.getProjectedBoundingBox=async function(a,b,d,h,c){c=this.getBoundingBoxObjectSpace(c);var g=G,l=q.isPoint(c)?1:g.length;for(var f=0;f<l;f++){const t=g[f];p[0]=c[t[0]];p[1]=c[t[1]];p[2]=c[t[2]];
u.transformMat4(p,p,this.stageObject.transformation);r[3*f]=p[0];r[3*f+1]=p[1];r[3*f+2]=p[2]}if(!a(r,0,l))return null;q.empty(c);a=null;this.calculateRelativeScreenBounds&&(a=this.calculateRelativeScreenBounds());for(g=0;g<3*l;g+=3){for(f=0;3>f;f++)c[f]=Math.min(c[f],r[g+f]),c[f+3]=Math.max(c[f+3],r[g+f]);a&&d.push({location:r.slice(g,g+3),screenSpaceBoundingRect:a})}if(b&&b.service&&"absolute-height"!==this.elevationContext.mode){q.center(c,m);d="relative-to-scene"===this.elevationContext.mode?"scene":
"ground";l=0;if(b.useViewElevation)l=k.unwrapOr(b.service.getElevation(m[0],m[1],d),0);else try{const t=E.demResolutionForBoundingBox(c,b.service.spatialReference,b);l=k.unwrapOr(await b.service.queryElevation(m[0],m[1],h,t,d),0)}catch(t){}q.offset(c,0,0,-this.alignedSampledElevation+l)}return c};e.addObjectState=function(a,b){a===z.Object3DState.Highlight&&b.addObject(this.stageObject,this.stageObject.highlight());a===z.Object3DState.MaskOccludee&&b.addObject(this.stageObject,this.stageObject.maskOccludee())};
e.removeObjectState=function(a){a.removeObject(this.stageObject)};e._resetEdgeObject=function(a){if(!k.isNone(this._edgeState)){var b=this._stage.renderer.ensureEdgeView();this._visible?this._addOrUpdateEdgeObject(b,a):b.removeObject(this.stageObject)}};e._addOrUpdateEdgeObject=function(a,b){const d=this._edgeState;if(!k.isNone(d)){var h=A(d.baseMaterial);for(const c of d.edgeMaterials)c.objectTransparency=h;a.addOrUpdateObject3D(this.stageObject,d.edgeMaterials,d.properties,!b).then(()=>this._stageLayer?.sync())}};
y._createClass(n,[{key:"isElevationSource",get:function(){return!(!this.stageObject.metadata||!this.stageObject.metadata.isElevationSource)}},{key:"visible",get:function(){return this._visible}}]);return n}();const r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],p=w.create(),m=w.create(),G=[[0,1,2],[3,1,2],[0,4,2],[3,4,2],[0,1,5],[3,1,5],[0,4,5],[3,4,5]];v.Graphics3DObject3DGraphicLayer=H;v.Object3DEdgeState=F;Object.defineProperty(v,Symbol.toStringTag,{value:"Module"})});