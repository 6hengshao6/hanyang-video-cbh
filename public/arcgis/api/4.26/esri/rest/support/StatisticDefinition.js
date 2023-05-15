// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/jsonMap ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer".split(" "),function(h,c,e,a,l,d,r,m,n){var k;e=new e.JSONMap({count:"count",sum:"sum",min:"min",max:"max",avg:"avg",stddev:"stddev",var:"var",exceedslimit:"exceedslimit",percentile_cont:"percentile-continuous",
percentile_disc:"percentile-discrete",EnvelopeAggregate:"envelope-aggregate",CentroidAggregate:"centroid-aggregate",ConvexHullAggregate:"convex-hull-aggregate"});a=k=function(f){function g(b){b=p.call(this,b);b.maxPointCount=void 0;b.maxRecordCount=void 0;b.maxVertexCount=void 0;b.onStatisticField=null;b.outStatisticFieldName=null;b.statisticType=null;b.statisticParameters=null;return b}h._inherits(g,f);var p=h._createSuper(g);f=g.prototype;f.writeStatisticParameters=function(b,q){if("percentile-continuous"===
this.statisticType||"percentile-discrete"===this.statisticType)q.statisticParameters=l.clone(b)};f.clone=function(){return new k({maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,statisticType:this.statisticType,statisticParameters:l.clone(this.statisticParameters)})};return h._createClass(g)}(a.JSONSupport);c.__decorate([d.property({type:Number,json:{write:!0}})],
a.prototype,"maxPointCount",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"maxRecordCount",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"maxVertexCount",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"onStatisticField",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"outStatisticFieldName",void 0);c.__decorate([d.property({type:String,json:{read:{source:"statisticType",reader:e.read},
write:{target:"statisticType",writer:e.write}}})],a.prototype,"statisticType",void 0);c.__decorate([d.property({type:Object})],a.prototype,"statisticParameters",void 0);c.__decorate([n.writer("statisticParameters")],a.prototype,"writeStatisticParameters",null);return a=k=c.__decorate([m.subclass("esri.rest.support.StatisticDefinition")],a)});