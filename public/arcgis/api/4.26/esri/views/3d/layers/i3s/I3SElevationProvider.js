// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/Evented ../../../../core/Logger ../../../../core/maybe ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/projection ../../../../geometry/support/aaBoundingRect ../../../../chunks/sphere ../../webgl-engine/lib/Intersector ../../webgl-engine/lib/IntersectorInterfaces".split(" "),
function(q,h,d,y,w,r,m,I,J,K,z,A,B,C,t,D,n,E,F,G){const f=n.empty(),k=B.create(),x=E.fromValues(0,0,0,0),b=t.create(),u=t.create(),v=t.create();d=function(c){function l(a){a=H.call(this,a);a._tmpEvent={spatialReference:null,extent:f,context:"scene"};return a}q._inherits(l,c);var H=q._createSuper(l);c=l.prototype;c.initialize=function(){this.view=this.layerView.view;this._renderCoordsHelper=this.view.renderCoordsHelper;this._intersector=F.newIntersector(this.view.state.viewingMode);this._intersector.options.store=
G.StoreResults.MIN;const a=this.layerView.i3slayer.fullExtent;r.isNone(a)?w.getLogger(this.declaredClass).error("I3SElevationProvider expected fullExtent on I3SLayer."):(this._zmin=a.zmin,this._zmax=a.zmax);this._tmpEvent.context=this.intersectionHandler.isGround?"ground":"scene"};c.getElevation=function(a,e,p,g){b[0]=a;b[1]=e;b[2]=p;if(!this._renderCoordsHelper.toRenderCoords(b,g,b))return w.getLogger(this.declaredClass).error("could not project point to compute elevation"),null;a=this.layerView.elevationOffset;
e=this._zmin+a;this._renderCoordsHelper.setAltitude(u,this._zmax+a,b);this._renderCoordsHelper.setAltitude(v,e,b);this._intersector.reset(u,v,null);this.intersectionHandler.intersect(this._intersector,null,u,v);return this._intersector.results.min.getIntersectionPoint(b)?this._renderCoordsHelper.getAltitude(b):null};c.getSphereElevationBounds=function(a,e){D.projectBoundingSphere(a,e,x,this._renderCoordsHelper.spatialReference);return this.layerView.getElevationRange(x)};c.layerChanged=function(){this.spatialReference&&
(this._tmpEvent.extent=this._computeLayerExtent(),this._tmpEvent.spatialReference=this.spatialReference,this.emit("elevation-change",this._tmpEvent))};c.objectChanged=function(a){this.spatialReference&&(this._tmpEvent.extent=this._computeObjectExtent(a),this._tmpEvent.spatialReference=this.spatialReference,this.emit("elevation-change",this._tmpEvent))};c._computeObjectExtent=function(a){n.empty(f);this._expandExtent(a,f);return f};c._computeLayerExtent=function(){n.empty(f);for(const a of this.layerView.getVisibleNodes())this._expandExtent(a,
f);return f};c._expandExtent=function(a,e){const p=this.spatialReference;if(!r.isNone(p)&&(a=this.layerView.getNodeComponentObb(a),!r.isNone(a))){A.fromQuat(k,a.quaternion);k[12]=a.center[0];k[13]=a.center[1];k[14]=a.center[2];for(let g=0;8>g;++g)b[0]=g&1?a.halfSize[0]:-a.halfSize[0],b[1]=g&2?a.halfSize[1]:-a.halfSize[1],b[2]=g&4?a.halfSize[2]:-a.halfSize[2],C.transformMat4(b,b,k),this._renderCoordsHelper.fromRenderCoords(b,b,p),n.expand(e,b,e)}};q._createClass(l,[{key:"spatialReference",get:function(){return this.view?.elevationProvider?.spatialReference}}]);
return l}(y.EventedMixin(d));h.__decorate([m.property({constructOnly:!0})],d.prototype,"layerView",void 0);h.__decorate([m.property({constructOnly:!0})],d.prototype,"intersectionHandler",void 0);h.__decorate([m.property()],d.prototype,"view",void 0);h.__decorate([m.property()],d.prototype,"spatialReference",null);return d=h.__decorate([z.subclass("esri.views.3d.layers.i3s.I3SElevationProvider")],d)});