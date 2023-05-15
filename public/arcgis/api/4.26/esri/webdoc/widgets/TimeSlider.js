// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../TimeExtent ../../TimeInterval ../../core/JSONSupport ../../core/lang ../../core/maybe ../../core/object ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer".split(" "),function(p,d,h,u,b,v,k,q,g,y,l,w,m){var r;b=r=function(c){function n(a){a=x.call(this,a);
a.currentTimeExtent=null;a.fullTimeExtent=null;a.loop=!1;a.numStops=null;a.numThumbs=null;a.stopDelay=null;a.stopInterval=null;a.stops=null;return a}p._inherits(n,c);var x=p._createSuper(n);c=n.prototype;c.readCurrentTimeExtent=function(a){if(a)return new h({start:null!=a[0]?new Date(a[0]):null,end:null!=a[1]?new Date(a[1]):null})};c.writeCurrentTimeExtent=function(a,e,f){a&&q.setDeepValue(f,[k.isSome(a.start)?a.start.getTime():null,k.isSome(a.end)?a.end.getTime():null],e)};c.readFullTimeExtent=function(a,
e){if(a=e.properties)return new h({start:null!=a.startTime?new Date(a.startTime):null,end:null!=a.endTime?new Date(a.endTime):null})};c.writeFullTimeExtent=function(a,e){if(a){e=e.properties=e.properties||{};var f=a.end;a=a.start;f&&(e.endTime=k.isSome(f)?f.getTime():null);a&&(e.startTime=k.isSome(a)?a.getTime():null)}};c.readStopInterval=function(a,e,f){return a?u.fromJSON({value:a.interval,unit:a.units},f):null};c.writeStopInterval=function(a,e,f,t){a&&(a=a.toJSON(t),q.setDeepValue(f,{interval:a.value,
units:a.unit},e))};c.readStops=function(a){return a&&a.length?a.map(e=>new Date(e)):null};c.writeStops=function(a,e,f){a&&a.length&&q.setDeepValue(f,a.map(t=>t.getTime()),e)};c.clone=function(){return new r(v.clone({currentTimeExtent:this.currentTimeExtent,fullTimeExtent:this.fullTimeExtent,loop:this.loop,numStops:this.numStops,numThumbs:this.numThumbs,stopDelay:this.stopDelay,stopInterval:this.stopInterval,stops:this.stops}))};return p._createClass(n)}(b.JSONSupport);d.__decorate([g.property({type:h,
json:{read:{source:"properties.currentTimeExtent"},write:{target:"properties.currentTimeExtent"}}})],b.prototype,"currentTimeExtent",void 0);d.__decorate([l.reader("currentTimeExtent")],b.prototype,"readCurrentTimeExtent",null);d.__decorate([m.writer("currentTimeExtent")],b.prototype,"writeCurrentTimeExtent",null);d.__decorate([g.property({type:h,json:{read:{source:["properties.endTime","properties.startTime"]},write:{target:{"properties.endTime":{type:Number},"properties.startTime":{type:Number}}}}})],
b.prototype,"fullTimeExtent",void 0);d.__decorate([l.reader("fullTimeExtent")],b.prototype,"readFullTimeExtent",null);d.__decorate([m.writer("fullTimeExtent")],b.prototype,"writeFullTimeExtent",null);d.__decorate([g.property({type:Boolean,nonNullable:!0,json:{default:!1,read:{source:"properties.loop"},write:{target:"properties.loop"}}})],b.prototype,"loop",void 0);d.__decorate([g.property({type:Number,json:{read:{source:"properties.numberOfStops"},write:{target:"properties.numberOfStops",overridePolicy(){var c=
!!this.stops?.length;c=!(this.stopInterval||c);return{enabled:c,isRequired:c}}}}})],b.prototype,"numStops",void 0);d.__decorate([g.property({type:[1,2],nonNullable:!0,json:{read:{source:"properties.thumbCount"},write:{target:"properties.thumbCount",isRequired:!0}}})],b.prototype,"numThumbs",void 0);d.__decorate([g.property({type:Number,nonNullable:!0,json:{read:{source:"properties.thumbMovingRate"},write:{target:"properties.thumbMovingRate",isRequired:!0}}})],b.prototype,"stopDelay",void 0);d.__decorate([g.property({type:u,
json:{read:{source:"properties.timeStopInterval"},write:{target:"properties.timeStopInterval",overridePolicy(){const c=!!this.stops?.length;return{enabled:!c,isRequired:!(null!=this.numStops||c)}}}}})],b.prototype,"stopInterval",void 0);d.__decorate([l.reader("stopInterval")],b.prototype,"readStopInterval",null);d.__decorate([m.writer("stopInterval")],b.prototype,"writeStopInterval",null);d.__decorate([g.property({type:[Date],json:{read:{source:"properties.stops"},write:{target:"properties.stops",
overridePolicy(){return{isRequired:null==this.numStops&&!this.stopInterval}}}}})],b.prototype,"stops",void 0);d.__decorate([l.reader("stops")],b.prototype,"readStops",null);d.__decorate([m.writer("stops")],b.prototype,"writeStops",null);return b=r=d.__decorate([w.subclass("esri.webdoc.widgets.TimeSlider")],b)});