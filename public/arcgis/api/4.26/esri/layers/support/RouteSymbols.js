// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../symbols ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ./RouteStopSymbols ../../symbols/SimpleLineSymbol ../../symbols/SimpleMarkerSymbol ../../symbols/SimpleFillSymbol".split(" "),function(f,c,e,a,d,r,t,u,m,k,g,l,n){a=function(p){function h(b){b=q.call(this,b);b.directionLines=new g({color:[0,
122,194],width:6});b.directionPoints=new l({color:[255,255,255],size:6,outline:{color:[0,122,194],width:2}});b.pointBarriers=new l({style:"x",size:10,outline:{color:[255,0,0],width:3}});b.polygonBarriers=new n({color:[255,170,0,.6],outline:{width:7.5,color:[255,0,0,.6]}});b.polylineBarriers=new g({width:7.5,color:[255,85,0,.7]});b.routeInfo=new g({width:8,color:[20,89,127]});b.stops=new k;return b}f._inherits(h,p);var q=f._createSuper(h);return f._createClass(h)}(a.JSONSupport);c.__decorate([d.property({types:e.symbolTypes})],
a.prototype,"directionLines",void 0);c.__decorate([d.property({types:e.symbolTypes})],a.prototype,"directionPoints",void 0);c.__decorate([d.property({types:e.symbolTypes})],a.prototype,"pointBarriers",void 0);c.__decorate([d.property({types:e.symbolTypes})],a.prototype,"polygonBarriers",void 0);c.__decorate([d.property({types:e.symbolTypes})],a.prototype,"polylineBarriers",void 0);c.__decorate([d.property({types:e.symbolTypes})],a.prototype,"routeInfo",void 0);c.__decorate([d.property({type:k})],
a.prototype,"stops",void 0);return a=c.__decorate([m.subclass("esri.layers.support.RouteSymbols")],a)});