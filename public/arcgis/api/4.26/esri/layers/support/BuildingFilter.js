// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Collection ../../core/JSONSupport ../../core/lang ../../core/uuid ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./BuildingFilterAuthoringInfo ./BuildingFilterAuthoringInfoCheckbox ./BuildingFilterBlock".split(" "),function(g,b,h,a,l,n,c,u,p,q,m,r){var k;h=h.ofType(r);a=k=function(d){function f(){var e=t.apply(this,arguments);e.description=
null;e.filterBlocks=null;e.id=n.generateUUID();e.name=null;return e}g._inherits(f,d);var t=g._createSuper(f);f.prototype.clone=function(){return new k({description:this.description,filterBlocks:l.clone(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:l.clone(this.filterAuthoringInfo)})};return g._createClass(f)}(a.JSONSupport);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"description",void 0);b.__decorate([c.property({type:h,json:{write:{enabled:!0,isRequired:!0}}})],
a.prototype,"filterBlocks",void 0);b.__decorate([c.property({types:{key:"type",base:q,typeMap:{checkbox:m}},json:{read:d=>{switch(d&&d.type){case "checkbox":return m.fromJSON(d);default:return null}},write:!0}})],a.prototype,"filterAuthoringInfo",void 0);b.__decorate([c.property({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"id",void 0);b.__decorate([c.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"name",void 0);return a=k=b.__decorate([p.subclass("esri.layers.support.BuildingFilter")],
a)});