// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/lang ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ./PointCloudRenderer ./support/LegendOptions ./visualVariables/support/ColorStop".split(" "),function(h,c,e,f,a,l,m,d,n,p){var k;a=k=function(q){function g(b){b=r.call(this,b);b.type="point-cloud-stretch";b.field=null;b.legendOptions=null;b.fieldTransformType=
null;b.stops=null;return b}h._inherits(g,q);var r=h._createSuper(g);g.prototype.clone=function(){return new k({...this.cloneProperties(),field:e.clone(this.field),fieldTransformType:e.clone(this.fieldTransformType),stops:e.clone(this.stops),legendOptions:e.clone(this.legendOptions)})};return h._createClass(g)}(d);c.__decorate([l.enumeration({pointCloudStretchRenderer:"point-cloud-stretch"})],a.prototype,"type",void 0);c.__decorate([f.property({json:{write:!0},type:String})],a.prototype,"field",void 0);
c.__decorate([f.property({type:n.LegendOptions,json:{write:!0}})],a.prototype,"legendOptions",void 0);c.__decorate([f.property({type:d.fieldTransformTypeKebabDict.apiValues,json:{type:d.fieldTransformTypeKebabDict.jsonValues,read:d.fieldTransformTypeKebabDict.read,write:d.fieldTransformTypeKebabDict.write}})],a.prototype,"fieldTransformType",void 0);c.__decorate([f.property({type:[p],json:{write:!0}})],a.prototype,"stops",void 0);return a=k=c.__decorate([m.subclass("esri.renderers.PointCloudStretchRenderer")],
a)});