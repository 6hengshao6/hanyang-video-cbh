// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../geometry ./dimensionUtils ../core/Clonable ../core/Cyclical ../core/JSONSupport ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/cast ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass ../core/accessorSupport/ensureType ../geometry/Point".split(" "),function(e,c,a,h,l,m,n,d,p,u,v,q,r,k){a=function(f){function g(b){b=t.call(this,b);b.type="length";b.startPoint=null;b.endPoint=null;
b.measureType=h.LengthDimensionMeasureType.Direct;b.offset=0;b.orientation=0;return b}e._inherits(g,f);var t=e._createSuper(g);return e._createClass(g)}(n.JSONSupportMixin(l.Clonable));c.__decorate([d.property({type:["length"],json:{write:{isRequired:!0}}})],a.prototype,"type",void 0);c.__decorate([d.property({type:k,json:{write:!0}})],a.prototype,"startPoint",void 0);c.__decorate([d.property({type:k,json:{write:!0}})],a.prototype,"endPoint",void 0);c.__decorate([d.property({type:h.lengthDimensionMeasureType,
nonNullable:!0,json:{write:{isRequired:!0}}})],a.prototype,"measureType",void 0);c.__decorate([d.property({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],a.prototype,"offset",void 0);c.__decorate([d.property({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),p.cast(f=>m.cyclicalDegrees.normalize(r.ensureNumber(f),0,!0))],a.prototype,"orientation",void 0);return a=c.__decorate([q.subclass("esri.analysis.LengthDimension")],a)});