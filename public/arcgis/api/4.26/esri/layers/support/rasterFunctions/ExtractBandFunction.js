// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ./bandIndexUtils ./BaseRasterFunction ./ExtractBandFunctionArguments ./pixelUtils".split(" "),function(n,k,p,q,d,y,z,r,t,u,v,w){d=function(e){function l(){var a=x.apply(this,arguments);a.functionName="ExtractBand";a.functionArguments=
null;a.rasterArgumentNames=["raster"];return a}n._inherits(l,e);var x=n._createSuper(l);e=l.prototype;e._bindSourceRasters=function(){var {sourceRasterInfos:a}=this;a=a[0];const {bandCount:b}=a,{bandIds:c,missingBandAction:m}=this.functionArguments;if(m===w.MissingBandAction.fail&&c.some(f=>0>f||f>=b))return{success:!1,supportsGPU:!1,error:"extract-band-function: invalid bandIds"};this.outputPixelType=this._getOutputPixelType("f32");a=a.clone();a.pixelType=this.outputPixelType;a.bandCount=c.length;
const {statistics:g,histograms:h}=a;p.isSome(g)&&g.length&&(a.statistics=c.map(f=>g[f]||g[g.length-1]));p.isSome(h)&&h.length&&(a.histograms=c.map(f=>h[f]||h[h.length-1]));this.rasterInfo=a;return{success:!0,supportsGPU:3>=a.bandCount}};e._processPixels=function(a){a=a.pixelBlocks?.[0];if(p.isNone(a))return null;const b=a.pixels.length,c=this.functionArguments.bandIds.map(m=>m>=b?b-1:m);return a.extractBands(c)};e._getWebGLParameters=function(){let a;if(this.isInputBandIdsSwizzled)a=this.swizzledBandSelection.length?
this.swizzledBandSelection:[0,1,2];else{a=[...this.functionArguments.bandIds];0===a.length?a=[0,1,2]:3>a.length&&(a[1]=a[1]??a[0],a[2]=a[2]??a[1]);for(let b=0;3>b;b++)a[b]=Math.min(a[b],2)}return{bandIndexMat3:t.getBandMatrix3(a)}};e._getInputBandIds=function(a){const b=a.length;return this.functionArguments.bandIds.map(c=>c>=b?b-1:c).map(c=>a[c])};return n._createClass(l)}(u);k.__decorate([q.property({json:{write:!0,name:"rasterFunction"}})],d.prototype,"functionName",void 0);k.__decorate([q.property({type:v,
json:{write:!0,name:"rasterFunctionArguments"}})],d.prototype,"functionArguments",void 0);k.__decorate([q.property()],d.prototype,"rasterArgumentNames",void 0);return d=k.__decorate([r.subclass("esri.layers.support.rasterFunctions.ExtractBandFunction")],d)});