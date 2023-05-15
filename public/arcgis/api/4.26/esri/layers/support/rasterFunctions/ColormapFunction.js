// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ./BaseRasterFunction ./ColormapFunctionArguments ./colormaps ../../../renderers/support/colorRampUtils".split(" "),function(h,c,e,b,w,x,q,r,t,u,k){b=function(f){function g(){var a=v.apply(this,arguments);a.functionName="Colormap";a.functionArguments=
null;a.rasterArgumentNames=["raster"];a.isNoopProcess=!0;return a}h._inherits(g,f);var v=h._createSuper(g);f=g.prototype;f._bindSourceRasters=function(){var a=this.sourceRasterInfos[0];if(1<a.bandCount)return{success:!1,supportsGPU:!1,error:"colormap-function: source data must be single band"};let {colormap:d,colormapName:l,colorRamp:m,colorRampName:n}=this.functionArguments;if(!d?.length)if(m)d=k.convertColorRampToColormap(m,{interpolateAlpha:!0});else if(n){const p=k.getColorRampJSON(n);p&&(d=k.convertColorRampToColormap(p))}else l&&
(d=u.getColormapByName(l));if(!d?.length)return{success:!1,supportsGPU:!1,error:"colormap-function: missing colormap argument"};this.outputPixelType=this._getOutputPixelType("u8");a=a.clone();a.pixelType=this.outputPixelType;a.colormap=d;a.bandCount=1;this.rasterInfo=a;return{success:!0,supportsGPU:!0}};f._processPixels=function(a){return a.pixelBlocks?.[0]};return h._createClass(g)}(r);c.__decorate([e.property({json:{write:!0,name:"rasterFunction"}})],b.prototype,"functionName",void 0);c.__decorate([e.property({type:t,
json:{write:!0,name:"rasterFunctionArguments"}})],b.prototype,"functionArguments",void 0);c.__decorate([e.property()],b.prototype,"rasterArgumentNames",void 0);c.__decorate([e.property()],b.prototype,"isNoopProcess",void 0);c.__decorate([e.property({json:{write:!0}})],b.prototype,"indexedColormap",void 0);return b=c.__decorate([q.subclass("esri.layers.support.rasterFunctions.ColormapFunction")],b)});