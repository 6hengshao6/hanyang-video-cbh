// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../Color ../core/Clonable ../core/JSONSupport ../core/screenUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass".split(" "),function(f,c,d,a,l,g,e,h,q,r,m){a=function(n){function k(b){b=p.call(this,b);b.type="simple";b.color=new d("black");b.lineSize=2;b.fontSize=10;b.textColor=new d("black");b.textBackgroundColor=new d([255,255,
255,.6]);return b}f._inherits(k,n);var p=f._createSuper(k);return f._createClass(k)}(l.JSONSupportMixin(a.Clonable));c.__decorate([e.property({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],a.prototype,"type",void 0);c.__decorate([e.property({type:d,nonNullable:!0,json:{type:[h.Integer],write:{isRequired:!0}}})],a.prototype,"color",void 0);c.__decorate([e.property({type:Number,cast:g.toPt,nonNullable:!0,range:{min:g.px2pt(1)},json:{write:{isRequired:!0}}})],a.prototype,"lineSize",void 0);
c.__decorate([e.property({type:Number,cast:g.toPt,nonNullable:!0,json:{write:{isRequired:!0}}})],a.prototype,"fontSize",void 0);c.__decorate([e.property({type:d,nonNullable:!0,json:{type:[h.Integer],write:{isRequired:!0}}})],a.prototype,"textColor",void 0);c.__decorate([e.property({type:d,nonNullable:!0,json:{type:[h.Integer],write:{isRequired:!0}}})],a.prototype,"textBackgroundColor",void 0);return a=c.__decorate([m.subclass("esri.analysis.DimensionSimpleStyle")],a)});