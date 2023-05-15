// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../core/Error ../../../core/has ../../../core/maybe ../../../core/promiseUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ./BaseRaster ./InMemoryRaster ./pamParser ../rasterFormats/RasterCodec ../rasterFunctions/stretchUtils ../rasterTransforms/PolynomialTransform ../../../geometry/SpatialReference ../../../geometry/Extent".split(" "),
function(n,p,h,q,u,v,r,w,J,K,x,y,z,A,B,C,D,E,F){h=function(e){function k(){return G.apply(this,arguments)}n._inherits(k,e);var G=n._createSuper(k);e=k.prototype;e.open=async function(b){await this.init();var a=await this._fetchData(b);let {spatialReference:c,statistics:d,histograms:g,transform:f}=await this._fetchAuxiliaryData(b);(b=!c)&&(c=new E({wkid:3857}));g?.length&&null==d&&(d=C.estimateStatisticsFromHistograms(g));const {width:H,height:I}=a;let l=new F({xmin:-.5,ymin:.5-I,xmax:H-.5,ymax:.5,
spatialReference:c});const t=f?f.forwardTransform(l):l;var m=!0;f&&(m=(m=f.forwardCoefficients)&&0===m[1]&&0===m[2])&&(f=null,l=t);a=new z({data:{extent:t,nativeExtent:l,transform:f,pixelBlock:a,statistics:d,histograms:g,keyProperties:{DateType:"Processed"},isPseudoSpatialReference:b}});await a.open();a.data=null;this._set("rasterInfo",a.rasterInfo);this._inMemoryRaster=a};e.fetchRawTile=function(b,a,c,d={}){return this._inMemoryRaster.fetchRawTile(b,a,c,d)};e._fetchData=async function(b){({data:b}=
await this.request(this.url,{responseType:"array-buffer",signal:b?.signal}));var a=B.getFormat(b).toUpperCase();if("JPG"===a||"PNG"===a||"GIF"===a||"BMP"===a)this._set("datasetFormat",a);else throw new q("image-aux-raster:open","the data is not a supported format");a=a.toLowerCase();const c="gif"===a||"bmp"===a||!u("ios");b=await this.decodePixelBlock(b,{format:a,useCanvas:c,hasNoZlibMask:!0});if(null==b)throw new q("image-aux-raster:open","the data cannot be decoded");return b};e._fetchAuxiliaryData=
async function(b){b=v.unwrap(b?.signal);var a=this.ioConfig.skipExtensions??[],c=a.includes("aux.xml")?null:this.request(this.url+".aux.xml",{responseType:"xml",signal:b}),d=this.datasetFormat;a=(d="JPG"===d?"jgw":"PNG"===d?"pgw":"BMP"===d?"bpw":null)&&a.includes(d)?null:this.request(this.url.slice(0,this.url.lastIndexOf("."))+"."+d,{responseType:"text",signal:b});c=await r.eachAlways([c,a]);if(b?.aborted)throw r.createAbortError();b=A.parsePAMInfo(c[0].value?.data);b.transform||(c=c[1].value?c[1].value.data.split("\n").slice(0,
6).map(g=>Number(g)):null,b.transform=6===c?.length?new D({forwardCoefficients:[c[4],c[5],c[0],-c[1],c[2],-c[3]]}):null);return b};return n._createClass(k)}(y);p.__decorate([w.property({type:String,json:{write:!0}})],h.prototype,"datasetFormat",void 0);return h=p.__decorate([x.subclass("esri.layers.support.rasterDatasets.ImageAuxRaster")],h)});