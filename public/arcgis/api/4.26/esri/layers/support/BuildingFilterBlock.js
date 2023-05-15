// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./BuildingFilterMode ./BuildingFilterModeSolid ./BuildingFilterModeWireFrame ./BuildingFilterModeXRay".split(" "),function(f,c,a,p,g,l,q,r,h,m,n){var k;l={nonNullable:!0,types:{key:"type",base:r,typeMap:{solid:h,"wire-frame":m,"x-ray":n}},json:{read:b=>{switch(b&&
b.type){case "solid":return h.fromJSON(b);case "wireFrame":return m.fromJSON(b);case "x-ray":return n.fromJSON(b)}},write:{enabled:!0,isRequired:!0}}};a=k=function(b){function d(){var e=t.apply(this,arguments);e.filterExpression=null;e.filterMode=new h;e.title="";return e}f._inherits(d,b);var t=f._createSuper(d);d.prototype.clone=function(){return new k({filterExpression:this.filterExpression,filterMode:p.clone(this.filterMode),title:this.title})};return f._createClass(d)}(a.JSONSupport);c.__decorate([g.property({type:String,
json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"filterExpression",void 0);c.__decorate([g.property(l)],a.prototype,"filterMode",void 0);c.__decorate([g.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"title",void 0);return a=k=c.__decorate([q.subclass("esri.layers.support.BuildingFilterBlock")],a)});