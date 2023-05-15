// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../core/colorUtils ../../../core/Error ../../../core/lang ./AspectFunction ./BandArithmeticFunction ./ColormapFunction ./CompositeBandFunction ./ConvolutionFunction ./ExtractBandFunction ./LocalFunction ./MaskFunction ./NDVIFunction ./RemapFunction ./SlopeFunction ./StatisticsHistogramFunction ./StretchFunction".split(" "),function(m,t,u,D,E,F,G,H,I,J,K,L,M,N,O,P,Q){function v(a,b){({rasterFunctionArguments:a}=a);a&&(a.rasters||[a.raster]).forEach(c=>{c&&"number"!==typeof c&&
("string"===typeof c?c.startsWith("http")&&(b.includes(c)||b.push(c)):"rasterFunctionArguments"in c&&v(c,b))})}function w(a,b){return"rasters"===b[0]&&Array.isArray(a.rasters)?a.rasters:b.map(c=>a[c])}function x(a){return!!(a&&"object"===typeof a&&a.rasterFunction&&a.rasterFunctionArguments)}function q(a){const {rasterFunction:b,rasterFunctionArguments:c}=a,d={};for(const e in c){let g=c[e];var f=e.toLowerCase();if("rasters"===f&&Array.isArray(g))d.rasters=g.map(l=>x(l)?q(l):l);else switch(x(g)&&
(g=q(g)),f){case "dra":d.dra=g;break;case "pspower":d.psPower=g;break;case "pszfactor":d.psZFactor=g;break;case "bandids":d.bandIds=g;break;default:f=e[0].toLowerCase()+e.slice(1),d[f]=g}}"Local"!==b||d.rasters?.length||(d.rasters=["$$"]);return{...a,rasterFunctionArguments:d}}function y(a,b){const {rasterFunction:c,rasterFunctionArguments:d}=a;var f=a.outputPixelType?.toLowerCase();if(null==c||!h.has(c))throw new u("raster-function-helper",`unsupported raster function: ${c}`);var e=h.get(c);a=("function"===
typeof e.ctor?e.ctor:e.ctor["default"]).fromJSON({...a,outputPixelType:f});({rasterArgumentNames:f}=a);e=[];const g=w(d,f),l="rasters"===f[0],z=[];for(let n=0;n<g.length;n++){const k=g[n];let p;null==k||"string"===typeof k&&k.startsWith("$")?e.push(b?.raster):"string"===typeof k?b[k]&&e.push(b[k]):"number"!==typeof k&&"rasterFunction"in k&&(p=y(k,b),l||(a.functionArguments[f[n]]=p),e.push(p));l&&z.push(p??k)}l&&(a.functionArguments.rasters=z);b&&(a.sourceRasters=e,b=b.raster?.url)&&(a.mainPrimaryRasterId=
b);return a}function A(a,b){if(a&&b)for(const c in a){const d=a[c];d&&"object"===typeof d&&(d.function&&d.arguments?A(d.arguments,b):"RasterFunctionVariable"===d.type&&null!=b[d.name]&&(d.value=b[d.name]))}}function r(a){if(!a||"object"!==typeof a)return a;if(Array.isArray(a)&&0===a.length)return 0===a.length?null:["number","string"].includes(typeof a[0])?a:a.map(b=>r(b));if("value"in a&&["number","string","boolean"].includes(typeof a.value))return a.value;if(!("type"in a))return a;switch(a.type){case "Scalar":return a.value;
case "AlgorithmicColorRamp":return B(a);case "MultiPartColorRamp":return{type:"multipart",colorRamps:a.ArrayOfColorRamp.map(B)};case "ArgumentArray":return a.elements?.length&&"RasterStatistics"!==a.elements[0].type?"RasterFunctionVariable"===a.elements[0].type?a.elements.map(b=>null!=b.value?r(b.value):b.name.toLowerCase().includes("raster")?"$$":null):a:a.elements;default:return a}}function B(a){const b=a.algorithm??"esriHSVAlgorithm";let {FromColor:c,ToColor:d}=a;if(!Array.isArray(c)){const {r:f,
g:e,b:g}=t.toRGB({h:c.Hue,s:c.Saturation,v:c.Value});c=[f,e,g,c.AlphaValue]}if(!Array.isArray(d)){const {r:f,g:e,b:g}=t.toRGB({h:d.Hue,s:d.Saturation,v:d.Value});d=[f,e,g,d.AlphaValue]}return{type:"algorithmic",algorithm:b,fromColor:c,toColor:d}}function C(a,b){if(a&&b){var {function:c,arguments:d}=a;if(c&&d){b.rasterFunction=c.type.replace("Function","");b.outputPixelType=c.pixelType;a={};b.rasterFunctionArguments=a;for(const f in d){const e=d[f];"object"===typeof e&&("function"in e&&e.function&&
e.arguments?(b.rasterFunctionArguments[f]={},C(e,b.rasterFunctionArguments[f])):"value"in e&&(a[f]=r(e.value)))}a.DEM&&!a.Raster&&(a.Raster=a.DEM,delete a.DEM);switch(b.rasterFunction){case "Stretch":R(a);break;case "Colormap":"randomcolorramp"===a.ColorRamp?.type?.toLowerCase()&&(delete a.ColorRamp,a.ColormapName="Random");0===a.ColorSchemeType&&delete a.ColorRamp;break;case "Convolution":null!=a.ConvolutionType&&(a.Type=a.ConvolutionType,delete a.ConvolutionType);break;case "Mask":S(a)}}}}function R(a){a.Statistics?.length&&
"object"===typeof a.Statistics&&(a.Statistics=a.Statistics.map(b=>[b.min,b.max,b.mean,b.standardDeviation]));null!=a.NumberOfStandardDeviation&&(a.NumberOfStandardDeviations=a.NumberOfStandardDeviation,delete a.NumberOfStandardDeviation)}function S(a){a.NoDataValues?.length&&"string"===typeof a.NoDataValues[0]&&(a.NoDataValues=a.NoDataValues.filter(b=>""!==b).map(b=>Number(b)))}const h=new Map;h.set("Aspect",{desc:"Aspect Function",ctor:E,rasterArgumentNames:["raster"]});h.set("BandArithmetic",{desc:"Band Arithmetic Function",
ctor:F,rasterArgumentNames:["raster"]});h.set("Colormap",{desc:"Colormap Function",ctor:G,rasterArgumentNames:["raster"]});h.set("CompositeBand",{desc:"CompositeBand Function",ctor:H,rasterArgumentNames:["rasters"]});h.set("Convolution",{desc:"Convolution Function",ctor:I,rasterArgumentNames:["raster"]});h.set("ExtractBand",{desc:"ExtractBand Function",ctor:J,rasterArgumentNames:["raster"]});h.set("Local",{desc:"Local Function",ctor:K,rasterArgumentNames:["rasters"]});h.set("Mask",{desc:"Mask Function",
ctor:L,rasterArgumentNames:["raster"]});h.set("NDVI",{desc:"NDVI Function",ctor:M,rasterArgumentNames:["raster"]});h.set("Remap",{desc:"Remap Function",ctor:N,rasterArgumentNames:["raster"]});h.set("Slope",{desc:"Slope Function",ctor:O,rasterArgumentNames:["raster"]});h.set("StatisticsHistogram",{desc:"Statistics Histogram Function",ctor:P,rasterArgumentNames:["raster"]});h.set("Stretch",{desc:"Stretch Function",ctor:Q,rasterArgumentNames:["raster"]});m.create=function(a,b){b=b??{};a=D.clone(a);if("function"in
a&&"arguments"in a&&a.arguments){b&&A(a,b);const c={};C(a,c);a=c}if("rasterFunction"in a)return a=q(a),y(a,b);throw new u("raster-function-helper","unsupported raster function json.");};m.getPrimaryRasterUrls=v;m.getRasterValues=w;m.getSupportedFunctions=function(){const a=new Set;h.forEach((b,c)=>a.add(c));return a};m.register=function(a,b,c=["raster"],d=""){h.set(a,{desc:d,ctor:b,rasterArgumentNames:c})};Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});