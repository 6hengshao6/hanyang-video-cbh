// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass".split(" "),function(e,c,a,d,l,m,n,g){a=function(h){function f(b){b=k.call(this,b);b.name=null;b.unique=null;b.ascending=null;b.description=null;b.fieldNames=null;return b}e._inherits(f,h);var k=e._createSuper(f);return e._createClass(f)}(a.JSONSupport);
c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"name",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"unique",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"ascending",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"description",void 0);c.__decorate([d.property({type:[String],json:{write:!0}})],a.prototype,"fieldNames",void 0);return a=c.__decorate([g.subclass("esri.rest.knowledgeGraph.FieldIndex")],
a)});