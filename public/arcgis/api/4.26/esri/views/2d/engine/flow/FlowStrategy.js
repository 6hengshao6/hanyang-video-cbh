// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../geometry ../../../../core/Accessor ../../../../core/Logger ../../../../core/mathUtils ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../../../../geometry/Point ./FlowDisplayData ./FlowDisplayObject ../../../../geometry/Extent".split(" "),
function(m,g,f,t,u,p,h,v,n,D,E,F,w,x,y,z,A){function B(a,c){const e=new x({x:(a.xmax+a.xmin)/2,y:(a.ymax+a.ymin)/2,spatialReference:a.spatialReference});var b=a.xmax-a.xmin;const d=a.ymax-a.ymin,k=Math.abs(Math.cos(p.deg2rad(c))),l=Math.abs(Math.sin(p.deg2rad(c)));c=k*b+l*d;b=l*b+k*d;a=new A({xmin:e.x-c/2,ymin:e.y-b/2,xmax:e.x+c/2,ymax:e.y+b/2,spatialReference:a.spatialReference});a.centerAt(e);return a}f=function(a){function c(b){b=e.call(this,b);b._flowDisplayObject=new z.FlowDisplayObject;b._loading=
null;return b}m._inherits(c,a);var e=m._createSuper(c);a=c.prototype;a.initialize=function(){this.flowContainer.addChild(this._flowDisplayObject)};a.destroy=function(){this._clear();this.flowContainer.removeAllChildren()};a.update=function(b){var {flowStyle:d}=this.flowContainer;if(h.isNone(d))this._clear();else{var {extent:k,rotation:l,resolution:q,pixelRatio:C}=b.state;b=B(k,l);b.expand(1.15);d=new y(d,b,[Math.round((b.xmax-b.xmin)/q),Math.round((b.ymax-b.ymin)/q)],C);if(h.isSome(this._loading)){if(this._loading.update(d))return;
this._loading.detach();this._loading=null}if(h.isNone(this._flowDisplayObject.displayData)||!this._flowDisplayObject.displayData.update(d))d.load().then(()=>{this._flowDisplayObject.clear();this._flowDisplayObject.displayData=this._loading;this._loading=null},r=>{v.isAbortError(r)||(u.getLogger(this.declaredClass).error("A resource failed to load.",r),this._loading=null)}),this._loading=d}};a._clear=function(){this._flowDisplayObject.clear();h.isSome(this._loading)&&(this._loading.detach(),this._loading=
null)};m._createClass(c,[{key:"updating",get:function(){return null!=this._loading}}]);return c}(t);g.__decorate([n.property()],f.prototype,"_loading",void 0);g.__decorate([n.property()],f.prototype,"flowContainer",void 0);g.__decorate([n.property()],f.prototype,"updating",null);return f=g.__decorate([w.subclass("esri.views.2d.engine.flow.FlowStrategy")],f)});