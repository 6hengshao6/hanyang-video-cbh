// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/JSONSupport ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer".split(" "),function(e,c,b,f,p,q,r,g,h){b=function(k){function d(a){a=l.call(this,a);a.enabled=!0;a.type=null;return a}e._inherits(d,k);var l=e._createSuper(d);d.prototype.writeEnabled=function(a,m,n){a||(m[n]=a)};return e._createClass(d)}(b.JSONSupport);
c.__decorate([f.property({type:Boolean,json:{read:{source:"enable"},write:{target:"enable"}}})],b.prototype,"enabled",void 0);c.__decorate([h.writer("enabled")],b.prototype,"writeEnabled",null);c.__decorate([f.property({type:"icon object line path fill water extrude text".split(" "),readOnly:!0})],b.prototype,"type",void 0);return b=c.__decorate([g.subclass("esri.symbols.Symbol3DLayer")],b)});