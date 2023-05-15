// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/accessorSupport/decorators/property ../../../../../core/accessorSupport/ensureType ../../../../../core/arrayUtils ../../../../../core/has ../../../../../core/accessorSupport/decorators/subclass ../../../../../chunks/vec3f64 ../../../../../geometry/support/axisAngle ../../../camera/constraintUtils/InteractionType ./MomentumController ../../utils/navigationUtils".split(" "),function(b,
e,d,f,t,u,v,h,g,k,l,m,n){b.RotationMomentumController=function(p){function c(a){a=q.call(this,a);a.interactionType=l.InteractionType.TUMBLE;return a}e._inherits(c,p);var q=e._createSuper(c);c.prototype.momentumStep=function(a,r){a=this.momentum.value(a);n.applyRotation(r,this.center,k.wrapAxisAngle(this.axis,a))};e._createClass(c,[{key:"center",set:function(a){this._set("center",g.clone(a))}},{key:"axis",set:function(a){this._set("axis",g.clone(a))}}]);return c}(m.MomentumController);d.__decorate([f.property({constructOnly:!0})],
b.RotationMomentumController.prototype,"momentum",void 0);d.__decorate([f.property({constructOnly:!0})],b.RotationMomentumController.prototype,"center",null);d.__decorate([f.property({constructOnly:!0})],b.RotationMomentumController.prototype,"axis",null);b.RotationMomentumController=d.__decorate([h.subclass("esri.views.3d.state.controllers.momentum.MomentumController")],b.RotationMomentumController);Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});