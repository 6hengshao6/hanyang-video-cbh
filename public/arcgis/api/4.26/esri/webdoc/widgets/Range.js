// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass".split(" "),function(g,d,b,a,h,n,p,q,l){var k;b=new b.JSONMap({slider:"slider",picker:"picker"});a=k=function(e){function f(c){c=m.call(this,c);c.interactionMode=null;c.numStops=null;c.stopInterval=null;return c}g._inherits(f,
e);var m=g._createSuper(f);f.prototype.clone=function(){return new k({interactionMode:this.interactionMode,numStops:this.numStops,stopInterval:this.stopInterval})};return g._createClass(f)}(a.JSONSupport);d.__decorate([h.property({type:b.apiValues,nonNullable:!0,json:{type:b.jsonValues,default:null,read:{reader:b.read},write:{isRequired:!0,writer:b.write}}})],a.prototype,"interactionMode",void 0);d.__decorate([h.property({type:Number,json:{read:{source:"numberOfStops"},write:{target:"numberOfStops",
overridePolicy(){const e=null!=this.stopInterval;return{enabled:!e,isRequired:!e}}}}})],a.prototype,"numStops",void 0);d.__decorate([h.property({type:Number,json:{write:{overridePolicy(){return{isRequired:null==this.numStops}}}}})],a.prototype,"stopInterval",void 0);return a=k=d.__decorate([l.subclass("esri.webdoc.widgets.Range")],a)});