// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/lang ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ./PointCloudRenderer".split(" "),function(d,e,g,h,a,k,l,m){var f;a=f=function(n){function c(b){b=p.call(this,b);b.type="point-cloud-rgb";b.field=null;return b}d._inherits(c,n);var p=d._createSuper(c);c.prototype.clone=function(){return new f({...this.cloneProperties(),
field:g.clone(this.field)})};return d._createClass(c)}(m);e.__decorate([k.enumeration({pointCloudRGBRenderer:"point-cloud-rgb"})],a.prototype,"type",void 0);e.__decorate([h.property({type:String,json:{write:!0}})],a.prototype,"field",void 0);return a=f=e.__decorate([l.subclass("esri.renderers.PointCloudRGBRenderer")],a)});