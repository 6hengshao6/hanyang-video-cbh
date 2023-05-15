// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/mathUtils ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ./BaseRasterFunction ./MaskFunctionArguments ./pixelUtils".split(" "),function(p,k,q,t,m,f,y,z,u,v,w,g){f=function(l){function n(){var a=x.apply(this,arguments);a.functionName="Mask";a.functionArguments=
null;a.rasterArgumentNames=["raster"];return a}p._inherits(n,l);var x=p._createSuper(n);l=n.prototype;l._bindSourceRasters=function(){var a=this.sourceRasterInfos[0].clone();const {pixelType:h}=a;this.outputPixelType=this._getOutputPixelType(h);a.pixelType=this.outputPixelType;this.rasterInfo=a;const {includedRanges:d,normalizedNoDataValues:b}=this.functionArguments;if(!d?.length&&!b?.length)return{success:!1,supportsGPU:!1,error:"missing includedRanges or noDataValues argument"};let c=[];for(let e=
0;e<a.bandCount;e++){const r=g.createMaskLUT(h,d?.slice(2*e,2*e+2),b?.[e]);if(null==r){c=null;break}c.push(r)}this.lookups=c;a=null!=b&&b.every(e=>e?.length===b[0]?.length);return{success:!0,supportsGPU:(!d||d.length<=2*g.MAX_MAP_SIZE_GPU)&&(!b||a&&b[0].length<=g.MAX_MAP_SIZE_GPU)}};l._processPixels=function(a){a=a.pixelBlocks?.[0];if(t.isNone(a))return null;const {outputPixelType:h,lookups:d}=this,{includedRanges:b,noDataInterpretation:c,normalizedNoDataValues:e}=this.functionArguments;return g.mask(a,
{includedRanges:b,noDataValues:e,outputPixelType:h,matchAll:c===g.NoDataInterpretation.matchAll,lookups:d})};l._getWebGLParameters=function(){const {includedRanges:a,normalizedNoDataValues:h}=this.functionArguments,d=new Float32Array(g.MAX_MAP_SIZE_GPU);d.fill(q.NUMBER_MAX_FLOAT32);h?.[0]?.length&&d.set(h[0]);const b=new Float32Array(g.MAX_MAP_SIZE_GPU);for(let c=0;c<b.length;c+=2)b[c]=a?.[c]??-q.NUMBER_MAX_FLOAT32,b[c+1]=a?.[c+1]??q.NUMBER_MAX_FLOAT32;a&&a.length&&b.set(a);return{bandCount:this.sourceRasterInfos[0].bandCount,
noDataValues:d,includedRanges:b}};return p._createClass(n)}(v);k.__decorate([m.property({json:{write:!0,name:"rasterFunction"}})],f.prototype,"functionName",void 0);k.__decorate([m.property({type:w,json:{write:!0,name:"rasterFunctionArguments"}})],f.prototype,"functionArguments",void 0);k.__decorate([m.property()],f.prototype,"rasterArgumentNames",void 0);k.__decorate([m.property({json:{write:!0}})],f.prototype,"lookups",void 0);return f=k.__decorate([u.subclass("esri.layers.support.rasterFunctions.MaskFunction")],
f)});