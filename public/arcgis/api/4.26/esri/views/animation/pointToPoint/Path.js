// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/time"],function(k,p,l){let q=function(){function h(){this.segments=[]}var m=h.prototype;m.interpolateComponentsAt=function(b,a){b=Math.min(Math.max(b,0),1);b*=this.time;let f=0,n=0;const d=this.definition;for(let g=0;g<this.segments.length;g++){const e=this.segments[g],c=e.definition;if(b<=e.time||g===this.segments.length-1)return a=this.segmentInterpolateComponentsAt(e,0===e.time?0:b/e.time,a),d.hasPan&&!isNaN(a.pan)&&isFinite(d.compared.pan)?
a.pan=(f+c.compared.pan*a.pan)/d.compared.pan:a.pan=1,d.hasRotate&&!isNaN(a.rotate)&&isFinite(d.compared.rotate)?a.rotate=(n+c.compared.rotate*a.rotate)/d.compared.rotate:a.rotate=1,d.hasZoom&&!isNaN(a.zoom)&&isFinite(c.compared.targetZoom)?(b=this.segments[0].definition.compared.sourceZoom,a.zoom=(a.zoom*(c.compared.targetZoom-c.compared.sourceZoom)+c.compared.sourceZoom-b)/(this.segments[this.segments.length-1].definition.compared.targetZoom-b)):a.zoom=1,a;b-=e.time;f+=c.compared.pan;n+=c.compared.rotate}};
m.segmentInterpolateComponentsAt=function(b,a,f){return b.interpolateComponentsAt(a,f)};p._createClass(h,[{key:"time",get:function(){return this.segments.reduce((b,a)=>l.Seconds(b+a.time),l.Seconds(0))}}]);return h}();k.Path=q;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});