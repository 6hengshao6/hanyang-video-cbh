// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ./DirectionsFeatureSet ./FeatureSet ./NAMessage".split(" "),function(f,c,a,d,p,q,r,h,k,e,l){a=function(m){function g(b){b=n.call(this,b);b.directionLines=null;b.directionPoints=null;b.directions=null;b.facilities=null;b.incidents=null;b.messages=
null;b.pointBarriers=null;b.polylineBarriers=null;b.polygonBarriers=null;b.routes=null;b.traversedEdges=null;b.traversedJunctions=null;b.traversedTurns=null;return b}f._inherits(g,m);var n=f._createSuper(g);return f._createClass(g)}(a.JSONSupport);c.__decorate([d.property({type:e})],a.prototype,"directionLines",void 0);c.__decorate([d.property({type:e})],a.prototype,"directionPoints",void 0);c.__decorate([d.property({type:[k]})],a.prototype,"directions",void 0);c.__decorate([d.property({type:e})],
a.prototype,"facilities",void 0);c.__decorate([d.property({type:e})],a.prototype,"incidents",void 0);c.__decorate([d.property({type:[l]})],a.prototype,"messages",void 0);c.__decorate([d.property({type:e,json:{read:{source:"barriers"}}})],a.prototype,"pointBarriers",void 0);c.__decorate([d.property({type:e})],a.prototype,"polylineBarriers",void 0);c.__decorate([d.property({type:e})],a.prototype,"polygonBarriers",void 0);c.__decorate([d.property({type:e})],a.prototype,"routes",void 0);c.__decorate([d.property({type:e})],
a.prototype,"traversedEdges",void 0);c.__decorate([d.property({type:e})],a.prototype,"traversedJunctions",void 0);c.__decorate([d.property({type:e})],a.prototype,"traversedTurns",void 0);return a=c.__decorate([h.subclass("esri.rest.support.ClosestFacilitySolveResult")],a)});