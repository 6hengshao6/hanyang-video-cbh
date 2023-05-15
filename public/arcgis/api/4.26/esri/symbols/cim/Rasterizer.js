// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../core/mathUtils ./CIMSymbolHelper ./rasterizingUtils ./Rect ./SDFHelper ./utils".split(" "),function(z,A,l,w,x,u,B){return function(){function y(b){this._resourceManager=b;this._rasterizationCanvas=null}var v=y.prototype;v.dispose=function(){this._rasterizationCanvas=null};v.rasterizeJSONResource=function(b,f,c){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas"));if("simple-fill"===b.type||"esriSFS"===b.type){const [g,
h,m]=w.rasterizeSimpleFill(this._rasterizationCanvas,b.style,f);return{size:[h,m],image:new Uint32Array(g.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0,rasterizationScale:A.nextPowerOfTwo(Math.ceil(f))}}if("simple-line"===b.type||"esriSLS"===b.type||"line"===b.type&&b.dashTemplate){if("simple-line"===b.type||"esriSLS"===b.type)switch(f=l.slsDashToTemplateArray(b.style,b.cap),b.cap){case "butt":b="Butt";break;case "square":b="Square";break;default:b="Round"}else f=b.dashTemplate,b=b.cim.capStyle;
const [g,h,m]=w.rasterizeDash(f,b);return{size:[h,m],image:new Uint32Array(g.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}let a,e=null,d=null,k=1;"simple-marker"===b.type||"esriSMS"===b.type||"line-marker"===b.type?(a=l.CIMSymbolHelper.fromSimpleMarker(b),d=u.getSDFInfo(a)):b.cim&&"CIMHatchFill"===b.cim.type?(a=l.CIMSymbolHelper.fromCIMHatchFill(b.cim,f),e=new x(a.frame.xmin,-a.frame.ymax,a.frame.xmax-a.frame.xmin,a.frame.ymax-a.frame.ymin),k=f):b.cim.markerPlacement&&"CIMMarkerPlacementInsidePolygon"===
b.cim.markerPlacement.type?(a=l.CIMSymbolHelper.fromCIMInsidePolygon(b.cim),e=new x(a.frame.xmin,-a.frame.ymax,a.frame.xmax-a.frame.xmin,a.frame.ymax-a.frame.ymin)):(a=b.cim,b.avoidSDFRasterization||(d=u.getSDFInfo(a)));if(d&&!c){const [g,h,m]=u.buildSDF(d);return g?{size:[h,m],image:new Uint32Array(g.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0,rasterizationScale:k}:null}const [n,p,q,r,t]=l.CIMSymbolHelper.rasterize(this._rasterizationCanvas,a,e,this._resourceManager,!c);return n?{size:[p,
q],image:new Uint32Array(n.buffer),sdf:!1,simplePattern:!1,anchorX:r,anchorY:t}:null};v.rasterizeImageResource=function(b,f,c,a){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas"));this._rasterizationCanvas.width=b;this._rasterizationCanvas.height=f;var e=this._rasterizationCanvas.getContext("2d");c instanceof ImageData?e.putImageData(c,0,0):(c.setAttribute("width",`${b}px`),c.setAttribute("height",`${f}px`),e.drawImage(c,0,0,b,f));c=e.getImageData(0,0,b,f);c=new Uint8Array(c.data);
if(a)for(var d of a)if(d&&d.oldColor&&4===d.oldColor.length&&d.newColor&&4===d.newColor.length){const [k,n,p,q]=d.oldColor,[r,t,g,h]=d.newColor;if(k!==r||n!==t||p!==g||q!==h)for(a=0;a<c.length;a+=4)k===c[a]&&n===c[a+1]&&p===c[a+2]&&q===c[a+3]&&(c[a]=r,c[a+1]=t,c[a+2]=g,c[a+3]=h)}for(a=0;a<c.length;a+=4)d=c[a+3]/255,c[a]*=d,c[a+1]*=d,c[a+2]*=d;e=c;d=b;a=f;if(512<=d||512<=a){e=d/a;1<e?(d=512,a=Math.round(512/e)):(a=512,d=Math.round(512*e));e=new Uint8Array(4*d*a);const k=new Uint8ClampedArray(e.buffer);
B.resampleHermite(c,b,f,k,d,a,!1)}return{size:[d,a],image:new Uint32Array(e.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}};return z._createClass(y)}()});