// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Identifiable ../../core/MultiOriginJSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../support/commonProperties".split(" "),function(h,c,a,m,d,n,r,t,k,p,l){a=function(e){function f(b){b=q.call(this,b);b.title="";b.id=-1;b.modelName=null;b.isEmpty=
null;b.visible=!0;b.opacity=1;return b}h._inherits(f,e);var q=h._createSuper(f);e=f.prototype;e.readTitle=function(b,g){return"string"===typeof g.alias?g.alias:"string"===typeof g.name?g.name:""};e.readIdOnlyOnce=function(b){return-1!==this.id?this.id:"number"===typeof b?b:-1};return h._createClass(f)}(a.IdentifiableMixin(m.MultiOriginJSONSupport));c.__decorate([d.property({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],a.prototype,"title",void 0);c.__decorate([k.reader("service",
"title",["alias","name"])],a.prototype,"readTitle",null);c.__decorate([d.property()],a.prototype,"layer",void 0);c.__decorate([d.property({type:n.Integer,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],a.prototype,"id",void 0);c.__decorate([k.reader("service","id")],a.prototype,"readIdOnlyOnce",null);c.__decorate([d.property(l.readOnlyService(String))],a.prototype,"modelName",void 0);c.__decorate([d.property(l.readOnlyService(Boolean))],a.prototype,"isEmpty",void 0);c.__decorate([d.property({type:Boolean,
json:{name:"visibility",write:!0}})],a.prototype,"visible",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"opacity",void 0);return a=c.__decorate([p.subclass("esri.layers.buildingSublayers.BuildingSublayer")],a)});