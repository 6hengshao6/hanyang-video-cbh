// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ./commonProperties ../../geometry/Point ../../geometry/SpatialReference".split(" "),function(g,d,a,h,f,k,r,t,l,m,n,p){a=function(b){function e(c){c=q.call(this,c);c.apiKey=null;c.location=null;c.locationType=null;c.outSpatialReference=
null;return c}g._inherits(e,b);var q=g._createSuper(e);return g._createClass(e)}(h.JSONSupport);d.__decorate([f.property(m.apiKey)],a.prototype,"apiKey",void 0);d.__decorate([f.property({type:n,json:{write:{writer:(b,e)=>{b=b?b.clone().normalize():null;e.location="undefined"!==typeof b?b:null}}}})],a.prototype,"location",void 0);d.__decorate([f.property({type:String,json:{write:!0}})],a.prototype,"locationType",void 0);d.__decorate([f.property({type:p,json:{read:{source:"outSR"},write:{target:"outSR"}}})],
a.prototype,"outSpatialReference",void 0);a=d.__decorate([l.subclass("esri.rest.support.LocationToAddressParameters")],a);a.from=k.ensureType(a);return a});