// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Clonable ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass".split(" "),function(f,c,a,e,k,d,g,p,q,l){g=new e.JSONMap({esriRelCardinalityOneToOne:"one-to-one",esriRelCardinalityOneToMany:"one-to-many",esriRelCardinalityManyToMany:"many-to-many"});e=new e.JSONMap({esriRelRoleOrigin:"origin",
esriRelRoleDestination:"destination"});a=function(m){function h(b){b=n.call(this,b);b.cardinality=null;b.composite=null;b.id=null;b.keyField=null;b.keyFieldInRelationshipTable=null;b.name=null;b.relatedTableId=null;b.relationshipTableId=null;b.role=null;return b}f._inherits(h,m);var n=f._createSuper(h);return f._createClass(h)}(a.ClonableMixin(k.JSONSupport));c.__decorate([d.property({json:{read:g.read,write:g.write}})],a.prototype,"cardinality",void 0);c.__decorate([d.property({json:{read:!0,write:!0}})],
a.prototype,"composite",void 0);c.__decorate([d.property({json:{read:!0,write:!0}})],a.prototype,"id",void 0);c.__decorate([d.property({json:{read:!0,write:!0}})],a.prototype,"keyField",void 0);c.__decorate([d.property({json:{read:!0,write:!0}})],a.prototype,"keyFieldInRelationshipTable",void 0);c.__decorate([d.property({json:{read:!0,write:!0}})],a.prototype,"name",void 0);c.__decorate([d.property({json:{read:!0,write:!0}})],a.prototype,"relatedTableId",void 0);c.__decorate([d.property({json:{read:!0,
write:!0}})],a.prototype,"relationshipTableId",void 0);c.__decorate([d.property({json:{read:e.read,write:e.write}})],a.prototype,"role",void 0);return a=c.__decorate([l.subclass("esri.layers.support.Relationship")],a)});