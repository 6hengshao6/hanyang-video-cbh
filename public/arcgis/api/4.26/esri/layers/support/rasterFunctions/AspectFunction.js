// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ./AspectFunctionArguments ./BaseRasterFunction ./surfaceUtils".split(" "),function(h,c,l,d,b,u,v,m,n,p,q){b=function(e){function f(){var a=r.apply(this,arguments);a.functionName="Aspect";a.functionArguments=null;a.rasterArgumentNames=
["raster"];a.isGCS=!1;return a}h._inherits(f,e);var r=h._createSuper(f);e=f.prototype;e._bindSourceRasters=function(){var a=this.sourceRasterInfos[0];this.isGCS=a.spatialReference?.isGeographic??!1;this.outputPixelType=this._getOutputPixelType("f32");a=a.clone();a.pixelType=this.outputPixelType;a.statistics=[{min:-1,max:360,avg:180,stddev:30}];a.histograms=null;a.colormap=null;a.attributeTable=null;a.bandCount=1;this.rasterInfo=a;return{success:!0,supportsGPU:!0}};e._processPixels=function(a){const g=
a.pixelBlocks?.[0];if(l.isNone(g))return null;const {extent:k,primaryPixelSizes:t}=a;a=t?.[0];a=l.isNone(a)?k?{x:k.width/g.width,y:k.height/g.height}:{x:1,y:1}:a;return q.aspect(g,{resolution:a})};return h._createClass(f)}(p);c.__decorate([d.property({json:{write:!0,name:"rasterFunction"}})],b.prototype,"functionName",void 0);c.__decorate([d.property({type:n,json:{write:!0,name:"rasterFunctionArguments"}})],b.prototype,"functionArguments",void 0);c.__decorate([d.property()],b.prototype,"rasterArgumentNames",
void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"isGCS",void 0);return b=c.__decorate([m.subclass("esri.layers.support.rasterFunctions.AspectFunction")],b)});