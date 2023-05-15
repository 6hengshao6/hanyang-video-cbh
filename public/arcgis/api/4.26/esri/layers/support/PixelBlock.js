// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Error ../../core/JSONSupport ../../core/lang ../../core/Logger ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/accessorSupport/decorators/subclass ./SimpleBandStatistics ./rasterFormats/pixelRangeUtils".split(" "),function(y,p,A,m,B,w,t,r,C,D,z,E){var v;m=v=function(n){function x(a){a=F.call(this,a);a.width=null;a.height=null;a.pixelType="f32";a.validPixelCount=
null;a.mask=null;a.maskIsAlpha=!1;a.premultiplyAlpha=!1;a.statistics=null;a.depthCount=1;return a}y._inherits(x,n);var F=y._createSuper(x);x.createEmptyBand=function(a,b){return new (v.getPixelArrayConstructor(a))(b)};x.getPixelArrayConstructor=function(a){let b;switch(a){case "u1":case "u2":case "u4":case "u8":b=Uint8Array;break;case "u16":b=Uint16Array;break;case "u32":b=Uint32Array;break;case "s8":b=Int8Array;break;case "s16":b=Int16Array;break;case "s32":b=Int32Array;break;case "f32":b=Float32Array;
break;case "f64":b=Float64Array;break;case "c64":case "c128":case "unknown":b=Float32Array}return b};n=x.prototype;n.castPixelType=function(a){if(!a)return"f32";a=a.toLowerCase();["u1","u2","u4"].includes(a)?a="u8":"unknown u8 s8 u16 s16 u32 s32 f32 f64".split(" ").includes(a)||(a="f32");return a};n.getPlaneCount=function(){return this.pixels?.length};n.addData=function(a){if(!a.pixels||a.pixels.length!==this.width*this.height)throw new A("pixelblock:invalid-or-missing-pixels","add data requires valid pixels array that has same length defined by pixel block width * height");
this.pixels||(this.pixels=[]);this.statistics||(this.statistics=[]);this.pixels.push(a.pixels);this.statistics.push(a.statistics??new z.SimpleBandStatistics)};n.getAsRGBA=function(){const a=new ArrayBuffer(this.width*this.height*4);switch(this.pixelType){case "s8":case "s16":case "u16":case "s32":case "u32":case "f32":case "f64":this._fillFromNon8Bit(a);break;default:this._fillFrom8Bit(a)}return new Uint8ClampedArray(a)};n.getAsRGBAFloat=function(){const a=new Float32Array(this.width*this.height*
4);this._fillFrom32Bit(a);return a};n.updateStatistics=function(){if(this.pixels){this.statistics=this.pixels.map(g=>this._calculateBandStatistics(g,this.mask));var a=this.mask,b=0;if(t.isSome(a))for(let g=0;g<a.length;g++)a[g]&&b++;else b=this.width*this.height;this.validPixelCount=b}};n.clamp=function(a){if(a&&"f64"!==a&&"f32"!==a&&this.pixels){var [b,g]=E.getPixelValueRange(a),h=this.pixels,e=this.width*this.height,c=h.length,d=[];for(let f=0;f<c;f++){var l=v.createEmptyBand(a,e);var k=h[f];for(let u=
0;u<e;u++){var q=k[u];l[u]=q>g?g:q<b?b:q}d.push(l)}this.pixels=d;this.pixelType=a}};n.extractBands=function(a){const {pixels:b,statistics:g}=this;if(t.isNone(a)||0===a.length||!b||0===b.length)return this;var h=b.length;const e=a.some(c=>c>=b.length);h=h===a.length&&!a.some((c,d)=>c!==d);return e||h?this:new v({pixelType:this.pixelType,width:this.width,height:this.height,mask:this.mask,validPixelCount:this.validPixelCount,maskIsAlpha:this.maskIsAlpha,pixels:a.map(c=>b[c]),statistics:g&&a.map(c=>g[c])})};
n.clone=function(){const a=new v({width:this.width,height:this.height,pixelType:this.pixelType,maskIsAlpha:this.maskIsAlpha,validPixelCount:this.validPixelCount});t.isSome(this.mask)&&(a.mask=this.mask instanceof Uint8Array?new Uint8Array(this.mask):this.mask.slice(0));let b;const g=v.getPixelArrayConstructor(this.pixelType);if(this.pixels&&0<this.pixels.length){a.pixels=[];const h=!!this.pixels[0].slice;for(b=0;b<this.pixels.length;b++)a.pixels[b]=h?this.pixels[b].slice(0,this.pixels[b].length):
new g(this.pixels[b])}if(this.statistics)for(a.statistics=[],b=0;b<this.statistics.length;b++)a.statistics[b]=B.clone(this.statistics[b]);a.premultiplyAlpha=this.premultiplyAlpha;return a};n._fillFrom8Bit=function(a){const {mask:b,maskIsAlpha:g,premultiplyAlpha:h,pixels:e}=this;if(a&&e&&e.length){var c,d;var l=c=d=e[0];3<=e.length?(c=e[1],d=e[2]):2===e.length&&(c=e[1]);var k=new Uint32Array(a),q=this.width*this.height;if(l.length!==q)w.getLogger(this.declaredClass).error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");
else if(t.isSome(b)&&b.length===q)if(g)for(a=0;a<q;a++){const f=b[a];if(f){const u=f/255;k[a]=h?f<<24|d[a]*u<<16|c[a]*u<<8|l[a]*u:f<<24|d[a]<<16|c[a]<<8|l[a]}}else for(a=0;a<q;a++)b[a]&&(k[a]=-16777216|d[a]<<16|c[a]<<8|l[a]);else for(a=0;a<q;a++)k[a]=-16777216|d[a]<<16|c[a]<<8|l[a]}else w.getLogger(this.declaredClass).error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.")};n._fillFromNon8Bit=function(a){const {pixels:b,mask:g,statistics:h}=this;if(a&&b&&b.length){var e=
this.pixelType,c=1,d=0;c=1;if(h&&0<h.length){for(var l of h)null!=l.minValue&&(d=Math.min(d,l.minValue)),null!=l.maxValue&&null!=l.minValue&&(c=Math.max(c,l.maxValue-l.minValue));c=255/c}else c=255,"s8"===e?(d=-128,c=127):"u16"===e?c=65535:"s16"===e?(d=-32768,c=32767):"u32"===e?c=4294967295:"s32"===e?(d=-2147483648,c=2147483647):"f32"===e?(d=-3.4*1E39,c=3.4*1E39):"f64"===e&&(d=-Number.MAX_VALUE,c=Number.MAX_VALUE),c=255/(c-d);a=new Uint32Array(a);e=this.width*this.height;var k,q,f;l=k=q=b[0];if(l.length!==
e)return w.getLogger(this.declaredClass).error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");if(2<=b.length)if(k=b[1],3<=b.length&&(q=b[2]),t.isSome(g)&&g.length===e)for(f=0;f<e;f++)g[f]&&(a[f]=-16777216|(q[f]-d)*c<<16|(k[f]-d)*c<<8|(l[f]-d)*c);else for(f=0;f<e;f++)a[f]=-16777216|(q[f]-d)*c<<16|(k[f]-d)*c<<8|(l[f]-d)*c;else if(t.isSome(g)&&g.length===e)for(f=0;f<e;f++)k=(l[f]-d)*c,g[f]&&(a[f]=-16777216|k<<16|k<<8|k);else for(f=0;f<e;f++)k=(l[f]-d)*c,a[f]=-16777216|k<<16|k<<
8|k}else w.getLogger(this.declaredClass).error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.")};n._fillFrom32Bit=function(a){const {pixels:b,mask:g}=this;if(!a||!b||!b.length)return w.getLogger(this.declaredClass).error("getAsRGBAFloat()","Unable to convert to RGBA. The input pixel block is empty.");let h,e,c,d;h=e=c=b[0];3<=b.length?(e=b[1],c=b[2]):2===b.length&&(e=b[1]);const l=this.width*this.height;if(h.length!==l)return w.getLogger(this.declaredClass).error("getAsRGBAFloat()",
"Unable to convert to RGBA. The pixelblock is invalid.");let k=0;if(t.isSome(g)&&g.length===l)for(d=0;d<l;d++)a[k++]=h[d],a[k++]=e[d],a[k++]=c[d],a[k++]=g[d]&1;else for(d=0;d<l;d++)a[k++]=h[d],a[k++]=e[d],a[k++]=c[d],a[k++]=1};n._calculateBandStatistics=function(a,b){let g=Infinity,h=-Infinity;const e=a.length;let c,d=0;if(t.isSome(b))for(c=0;c<e;c++)b[c]&&(d=a[c],g=d<g?d:g,h=d>h?d:h);else for(c=0;c<e;c++)d=a[c],g=d<g?d:g,h=d>h?d:h;return new z.SimpleBandStatistics(g,h)};return y._createClass(x)}(m.JSONSupport);
p.__decorate([r.property({json:{write:!0}})],m.prototype,"width",void 0);p.__decorate([r.property({json:{write:!0}})],m.prototype,"height",void 0);p.__decorate([r.property({json:{write:!0}})],m.prototype,"pixelType",void 0);p.__decorate([C.cast("pixelType")],m.prototype,"castPixelType",null);p.__decorate([r.property({json:{write:!0}})],m.prototype,"validPixelCount",void 0);p.__decorate([r.property({json:{write:!0}})],m.prototype,"mask",void 0);p.__decorate([r.property({json:{write:!0}})],m.prototype,
"maskIsAlpha",void 0);p.__decorate([r.property({json:{write:!0}})],m.prototype,"pixels",void 0);p.__decorate([r.property()],m.prototype,"premultiplyAlpha",void 0);p.__decorate([r.property({json:{write:!0}})],m.prototype,"statistics",void 0);p.__decorate([r.property({json:{write:!0}})],m.prototype,"depthCount",void 0);p.__decorate([r.property({json:{write:!0}})],m.prototype,"noDataValues",void 0);p.__decorate([r.property({json:{write:!0}})],m.prototype,"bandMasks",void 0);return m=v=p.__decorate([D.subclass("esri.layers.support.PixelBlock")],
m)});