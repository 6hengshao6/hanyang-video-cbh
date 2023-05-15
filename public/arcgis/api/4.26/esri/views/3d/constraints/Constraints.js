// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ./AltitudeConstraint ./ClipDistanceConstraint ./TiltConstraint".split(" "),function(a,d,b,l,e,q,r,t,m,g,h,k){a.Constraints=function(n){function f(){var c=p.apply(this,arguments);c.tilt=new k.TiltConstraint;c.altitude=
new g.AltitudeConstraint;c.clipDistance=new h.ClipDistanceConstraint;return c}d._inherits(f,n);var p=d._createSuper(f);return d._createClass(f)}(l);b.__decorate([e.property({type:k.TiltConstraint})],a.Constraints.prototype,"tilt",void 0);b.__decorate([e.property({type:g.AltitudeConstraint})],a.Constraints.prototype,"altitude",void 0);b.__decorate([e.property({type:h.ClipDistanceConstraint})],a.Constraints.prototype,"clipDistance",void 0);a.Constraints=b.__decorate([m.subclass("esri.views.3d.constraints.Constraints")],
a.Constraints);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});