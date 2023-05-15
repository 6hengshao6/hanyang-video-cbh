// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass".split(" "),function(e,c,a,d,l,m,n,g){a=function(h){function f(b){b=k.call(this,b);b.facilityIdField=null;b.layerId=null;b.nameField=null;b.siteIdField=null;b.sublayerId=null;return b}e._inherits(f,h);var k=e._createSuper(f);return e._createClass(f)}(a.JSONSupport);
c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"facilityIdField",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"layerId",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"nameField",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"siteIdField",void 0);c.__decorate([d.property({type:Number,json:{read:{source:"subLayerId"},write:{target:"subLayerId"},origins:{"web-scene":{read:!1,write:!1}}}})],
a.prototype,"sublayerId",void 0);return a=c.__decorate([g.subclass("esri.layers.support.FacilityLayerInfo")],a)});