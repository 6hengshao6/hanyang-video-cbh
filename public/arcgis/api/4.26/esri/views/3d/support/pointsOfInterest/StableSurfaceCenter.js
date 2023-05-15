// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/Handles ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/vec3f64 ../../../../geometry/Point ../../../../geometry/support/aaBoundingRect".split(" "),
function(b,h,c,m,n,k,p,l,d,w,x,y,q,r,t,u){b.StableSurfaceCenter=function(f){function g(a){a=v.call(this,a);a.location=null;a._updateController=null;a._handles=new n;return a}h._inherits(g,f);var v=h._createSuper(g);f=g.prototype;f.initialize=function(){this.view.state.isLocal&&(this._handles.add([l.watch(()=>[this.surfaceView?.spatialReference,this.surfaceView?.extent],()=>this._update()),l.on(()=>this.surface?.layers,"change",()=>this._update())]),this._update())};f.destroy=function(){this._handles.destroy()};
f._update=function(){this._updateController&&(this._updateController.abort(),this._updateController=null);if(!this.surfaceView||k.isNone(this.surfaceView.extent)||k.isNone(this.surfaceView.spatialReference))this._set("location",null);else{var a=u.center(this.surfaceView.extent);a=new t({x:a[0],y:a[1],z:0,spatialReference:this.surfaceView.spatialReference});this.surface&&0<this.surface.layers.length?(this._set("location",null),this._updateController=new AbortController,this.surface.queryElevation(a,
{noDataValue:0,signal:this._updateController.signal,cache:this.cache}).then(e=>{this._updateController=null;this._set("location",e.geometry)}).catch(e=>{p.isAbortError(e)||e&&"elevation-query:invalid-layer"===e.name||console.error("StableSurfaceCenter failed to update: ",e)})):this._set("location",a)}};h._createClass(g,[{key:"surface",get:function(){return this.view.map?.ground}},{key:"surfaceView",get:function(){return this.view.basemapTerrain}},{key:"renderLocation",get:function(){if(!this.location)return null;
const a=r.create();this.view.renderCoordsHelper.toRenderCoords(this.location,a);return a}}]);return g}(m);c.__decorate([d.property({constructOnly:!0})],b.StableSurfaceCenter.prototype,"view",void 0);c.__decorate([d.property({constructOnly:!0})],b.StableSurfaceCenter.prototype,"cache",void 0);c.__decorate([d.property()],b.StableSurfaceCenter.prototype,"surface",null);c.__decorate([d.property()],b.StableSurfaceCenter.prototype,"surfaceView",null);c.__decorate([d.property({readOnly:!0})],b.StableSurfaceCenter.prototype,
"location",void 0);c.__decorate([d.property({readOnly:!0})],b.StableSurfaceCenter.prototype,"renderLocation",null);b.StableSurfaceCenter=c.__decorate([q.subclass("esri.views.3d.terrain.StableSurfaceCenter")],b.StableSurfaceCenter);Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});