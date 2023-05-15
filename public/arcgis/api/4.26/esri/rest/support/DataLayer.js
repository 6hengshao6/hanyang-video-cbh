// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../core/Clonable ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass ./networkEnums ../../geometry/support/jsonUtils".split(" "),function(e,c,k,a,l,d,r,t,u,g,m,h,n){a=function(p){function f(b){b=q.call(this,b);b.doNotLocateOnRestrictedElements=
null;b.geometry=null;b.geometryType=null;b.name=null;b.spatialRelationship=null;b.type="layer";b.where=null;return b}e._inherits(f,p);var q=e._createSuper(f);return e._createClass(f)}(a.ClonableMixin(l.JSONSupport));c.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"doNotLocateOnRestrictedElements",void 0);c.__decorate([d.property({types:k.geometryTypes,json:{read:n.fromJSON,write:!0}})],a.prototype,"geometry",void 0);c.__decorate([g.enumeration(h.geometryTypeJsonMap)],a.prototype,
"geometryType",void 0);c.__decorate([d.property({type:String,json:{name:"layerName",write:!0}})],a.prototype,"name",void 0);c.__decorate([g.enumeration(h.spatialRelationshipJsonMap,{name:"spatialRel"})],a.prototype,"spatialRelationship",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"type",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"where",void 0);return a=c.__decorate([m.subclass("esri.rest.support.DataLayer")],a)});