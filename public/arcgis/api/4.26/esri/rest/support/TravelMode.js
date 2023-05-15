// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Clonable ../../core/JSONSupport ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ./networkEnums".split(" "),function(l,c,b,q,n,e,w,x,y,f,p,r,t,
d){b=function(h){function k(a){a=u.call(this,a);a.attributeParameterValues=null;a.description=null;a.distanceAttributeName=null;a.id=null;a.impedanceAttributeName=null;a.name=null;a.restrictionAttributeNames=null;a.simplificationTolerance=null;a.simplificationToleranceUnits=null;a.timeAttributeName=null;a.type=null;a.useHierarchy=null;a.uturnAtJunctions=null;return a}l._inherits(k,h);var u=l._createSuper(k);h=k.prototype;h.readId=function(a,g){return g.id??g.itemId??null};h.readRestrictionAttributes=
function(a,g){({restrictionAttributeNames:a}=g);return n.isNone(a)?null:a.map(m=>d.restrictionAttributeNameJsonMap.fromJSON(m))};h.writeRestrictionAttributes=function(a,g,m){n.isNone(a)||(g[m]=a.map(v=>d.restrictionAttributeNameJsonMap.toJSON(v)))};return l._createClass(k)}(b.ClonableMixin(q.JSONSupport));c.__decorate([e.property({type:[Object],json:{write:!0}})],b.prototype,"attributeParameterValues",void 0);c.__decorate([e.property({type:String,json:{write:!0}})],b.prototype,"description",void 0);
c.__decorate([f.enumeration(d.distanceImpedanceAttributeNameJsonMap,{ignoreUnknown:!1})],b.prototype,"distanceAttributeName",void 0);c.__decorate([e.property({type:String,json:{write:!0}})],b.prototype,"id",void 0);c.__decorate([p.reader("id",["id","itemId"])],b.prototype,"readId",null);c.__decorate([f.enumeration(d.impedanceAttributeNameJsonMap,{ignoreUnknown:!1})],b.prototype,"impedanceAttributeName",void 0);c.__decorate([e.property({type:String,json:{write:!0}})],b.prototype,"name",void 0);c.__decorate([e.property({type:[String],
json:{write:!0}})],b.prototype,"restrictionAttributeNames",void 0);c.__decorate([p.reader("restrictionAttributeNames")],b.prototype,"readRestrictionAttributes",null);c.__decorate([t.writer("restrictionAttributeNames")],b.prototype,"writeRestrictionAttributes",null);c.__decorate([e.property({type:Number,json:{write:{allowNull:!0}}})],b.prototype,"simplificationTolerance",void 0);c.__decorate([f.enumeration(d.lengthUnitJsonMap)],b.prototype,"simplificationToleranceUnits",void 0);c.__decorate([f.enumeration(d.durationImpedanceAttributeNameJsonMap,
{ignoreUnknown:!1})],b.prototype,"timeAttributeName",void 0);c.__decorate([f.enumeration(d.travelModeTypeJsonMap)],b.prototype,"type",void 0);c.__decorate([e.property({type:Boolean,json:{write:!0}})],b.prototype,"useHierarchy",void 0);c.__decorate([f.enumeration(d.restrictUTurnJsonMap)],b.prototype,"uturnAtJunctions",void 0);return b=c.__decorate([r.subclass("esri.rest.support.TravelMode")],b)});