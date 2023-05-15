// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ./BarChartMediaInfo ./ColumnChartMediaInfo ./Content ./ImageMediaInfo ./LineChartMediaInfo ./PieChartMediaInfo ./support/mediaInfoTypes".split(" "),function(h,d,l,e,c,m,n,p,q,r,t,u,v,w,x){var k;
c=k=function(f){function g(a){a=y.call(this,a);a.activeMediaInfoIndex=null;a.attributes=null;a.description=null;a.mediaInfos=null;a.title=null;a.type="media";return a}h._inherits(g,f);var y=h._createSuper(g);f=g.prototype;f.readMediaInfos=function(a){return a&&a.map(b=>{if("image"===b.type)return u.fromJSON(b);if("barchart"===b.type)return q.fromJSON(b);if("columnchart"===b.type)return r.fromJSON(b);if("linechart"===b.type)return v.fromJSON(b);if("piechart"===b.type)return w.fromJSON(b)}).filter(Boolean)};
f.writeMediaInfos=function(a,b){b.mediaInfos=a&&a.map(z=>z.toJSON())};f.clone=function(){return new k(l.clone({activeMediaInfoIndex:this.activeMediaInfoIndex,attributes:this.attributes,description:this.description,mediaInfos:this.mediaInfos,title:this.title}))};return h._createClass(g)}(t);d.__decorate([e.property()],c.prototype,"activeMediaInfoIndex",void 0);d.__decorate([e.property({type:Object,json:{write:!0}})],c.prototype,"attributes",void 0);d.__decorate([e.property({type:String,json:{write:!0}})],
c.prototype,"description",void 0);d.__decorate([e.property({types:[x.types]})],c.prototype,"mediaInfos",void 0);d.__decorate([m.reader("mediaInfos")],c.prototype,"readMediaInfos",null);d.__decorate([p.writer("mediaInfos")],c.prototype,"writeMediaInfos",null);d.__decorate([e.property({type:String,json:{write:!0}})],c.prototype,"title",void 0);d.__decorate([e.property({type:["media"],readOnly:!0,json:{read:!1,write:!0}})],c.prototype,"type",void 0);return c=k=d.__decorate([n.subclass("esri.popup.content.MediaContent")],
c)});