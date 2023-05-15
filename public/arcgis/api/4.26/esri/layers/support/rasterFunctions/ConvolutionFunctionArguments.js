// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/lang ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../rasterFunctionConstants ./BaseFunctionArguments ./convolutionUtils".split(" "),function(f,c,l,e,b,m,k,n,p){var g;b=g=function(q){function d(){var a=r.apply(this,arguments);a.rows=3;a.cols=3;a.kernel=[0,0,0,0,1,0,0,0,0];return a}f._inherits(d,q);var r=f._createSuper(d);
d.prototype.clone=function(){return new g({cols:this.cols,rows:this.rows,kernel:[...this.kernel],convolutionType:this.convolutionType,raster:l.clone(this.raster)})};f._createClass(d,[{key:"convolutionType",set:function(a){this._set("convolutionType",a);const h=p.convolutionKernels.get(a);h&&a!==k.convolutionKernel.userDefined&&a!==k.convolutionKernel.none&&(a=Math.sqrt(h.length),this._set("kernel",h),this._set("cols",a),this._set("rows",a))}}]);return d}(n);c.__decorate([e.property({json:{type:Number,
write:!0}})],b.prototype,"rows",void 0);c.__decorate([e.property({json:{type:Number,write:!0}})],b.prototype,"cols",void 0);c.__decorate([e.property({json:{name:"type",type:Number,write:!0}})],b.prototype,"convolutionType",null);c.__decorate([e.property({json:{type:[Number],write:!0}})],b.prototype,"kernel",void 0);return b=g=c.__decorate([m.subclass("esri.layers.support.rasterFunctions.ConvolutionFunctionArguments")],b)});