// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../geometry ../../../../Viewpoint ../../../../core/Accessor ../../../../core/reactiveUtils ../../../../core/screenUtils ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../viewpointUtils ../../../navigation/PanPlanarMomentumEstimator ../../../../geometry/Point".split(" "),
function(l,h,g,t,u,v,w,m,C,D,E,x,y,p,q,z,A){g=function(e){function k(b){var a=B.call(this,b);a.animationTime=0;a.momentumEstimator=new z.PanPlanarMomentumEstimator(500,6,.92);a.momentum=null;a.tmpMomentum=p.create();a.momentumFinished=!1;a.viewpoint=new t({targetGeometry:new A,scale:0,rotation:0});a._previousDrag=null;v.when(()=>a.momentumFinished,()=>a.navigation.stop());return a}l._inherits(k,e);var B=l._createSuper(k);e=k.prototype;e.begin=function(b,a){this.navigation.begin();this.momentumEstimator.reset();
this.addToEstimator(a);this._previousDrag=a};e.update=function(b,a){this.addToEstimator(a);let c=a.center.x,d=a.center.y;const f=this._previousDrag;c=f?f.center.x-c:-c;d=f?d-f.center.y:d;b.viewpoint=q.translateBy(this.viewpoint,b.viewpoint,[c||0,d||0]);this._previousDrag=a};e.end=function(b,a){this.addToEstimator(a);this.momentum=b.navigation.momentumEnabled?this.momentumEstimator.evaluateMomentum():null;this.animationTime=0;if(this.momentum)this.onAnimationUpdate(b);this._previousDrag=null;this.navigation.end()};
e.addToEstimator=function(b){var a=b.center.x;const c=b.center.y,d=w.createScreenPointArray(-a,c);a=p.fromValues(-a,c,0);this.momentumEstimator.add(d,a,.001*b.timestamp)};e.onAnimationUpdate=function(b){this.navigation.animationManager?.animateContinous(b.viewpoint,(a,c)=>{const {momentum:d,animationTime:f,tmpMomentum:r}=this;var n=this.momentumFinished=!d||d.isFinished(f);c*=.001;n||(n=d.valueDelta(f,c),y.scale(r,d.direction,n),q.translateBy(a,a,r),b.constraints.constrainByGeometry(a));this.animationTime+=
c})};e.stopMomentumNavigation=function(){this.momentum&&(this.momentumEstimator.reset(),this.momentum=null,this.navigation.stop())};return l._createClass(k)}(u);h.__decorate([m.property()],g.prototype,"momentumFinished",void 0);h.__decorate([m.property()],g.prototype,"viewpoint",void 0);h.__decorate([m.property()],g.prototype,"navigation",void 0);return g=h.__decorate([x.subclass("esri.views.2d.navigation.actions.Pan")],g)});