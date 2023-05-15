// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ../rasterFunctionConstants ../rasterFormats/pixelRangeUtils ./BaseRasterFunction ./LocalFunctionArguments ./localUtils".split(" "),function(p,k,r,q,f,z,A,u,t,v,w,x,l){f=function(g){function m(){var a=y.apply(this,arguments);
a.functionName="Local";a.functionArguments=null;a.rasterArgumentNames=["rasters"];return a}p._inherits(m,g);var y=p._createSuper(m);g=m.prototype;g._bindSourceRasters=function(){var {sourceRasterInfos:a}=this,b=a[0];const {bandCount:n}=b;var {processAsMultiband:c}=this.functionArguments;if(a.some(d=>d.bandCount!==n))return{success:!1,supportsGPU:!1,error:"local-function: input rasters do not have same band count"};const {operation:e,rasters:h}=this.functionArguments;a=l.operandsCount[e];if(!(999===
a||h.length===a||1>=h.length&&1===a))return{success:!1,supportsGPU:!1,error:`local-function: the length of functionArguments.rasters does not match operation's requirement: ${a}`};this.outputPixelType=this._getOutputPixelType("f32");b=b.clone();b.pixelType=this.outputPixelType;b.statistics=null;b.histograms=null;b.colormap=null;b.attributeTable=null;b.bandCount=999!==a||c?n:1;if(c=l.getOutputDomain(e)){b.statistics=[];for(let d=0;d<b.bandCount;d++)b.statistics[d]={min:c[0],max:c[1],avg:(c[0]+c[1])/
2,stddev:(c[0]+c[1])/10}}this.rasterInfo=b;return{success:!0,supportsGPU:1===b.bandCount&&3>=a&&(11>e||16<e)}};g._processPixels=function(a){({pixelBlocks:a}=a);return r.isNone(a)||a.some(b=>r.isNone(b))?null:l.local(a,this.functionArguments.operation,{processAsMultiband:this.functionArguments.processAsMultiband,outputPixelType:this.outputPixelType??void 0})};g._getWebGLParameters=function(){const {operation:a}=this.functionArguments,b=l.operandsCount[a],n=Object.keys(t.localOperators).find(d=>t.localOperators[d]===
a)?.toLowerCase()??"undefined";var c=this.outputPixelType??"f32";let [e,h]=v.getPixelValueRange(c);if(c=c.startsWith("u")||c.startsWith("s"))e-=1E-4,h+=1E-4;return{imageCount:b,operationName:n,domainRange:[e,h],isOutputRounded:c}};return p._createClass(m)}(w);k.__decorate([q.property({json:{write:!0,name:"rasterFunction"}})],f.prototype,"functionName",void 0);k.__decorate([q.property({type:x,json:{write:!0,name:"rasterFunctionArguments"}})],f.prototype,"functionArguments",void 0);k.__decorate([q.property()],
f.prototype,"rasterArgumentNames",void 0);return f=k.__decorate([u.subclass("esri.layers.support.rasterFunctions.LocalFunction")],f)});