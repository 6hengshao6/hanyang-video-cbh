// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ./Terminal".split(" "),function(f,c,d,a,e,n,p,q,h,k){d=new d.JSONMap({esriUNTMBidirectional:"bidirectional",esriUNTMDirectional:"directional"});a=function(l){function g(b){b=m.call(this,b);b.defaultConfiguration=null;b.id=
null;b.name=null;b.terminals=[];b.traversabilityModel=null;return b}f._inherits(g,l);var m=f._createSuper(g);return f._createClass(g)}(a.JSONSupport);c.__decorate([e.property({type:String,json:{write:!0}})],a.prototype,"defaultConfiguration",void 0);c.__decorate([e.property({type:Number,json:{read:{source:"terminalConfigurationId"},write:{target:"terminalConfigurationId"}}})],a.prototype,"id",void 0);c.__decorate([e.property({type:String,json:{read:{source:"terminalConfigurationName"},write:{target:"terminalConfigurationName"}}})],
a.prototype,"name",void 0);c.__decorate([e.property({type:[k],json:{write:!0}})],a.prototype,"terminals",void 0);c.__decorate([e.property({type:d.apiValues,json:{type:d.jsonValues,read:d.read,write:d.write}})],a.prototype,"traversabilityModel",void 0);return a=c.__decorate([h.subclass("esri.networks.support.TerminalConfiguration")],a)});