// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass".split(" "),function(a,e,b,g,d,m,n,p,h){a.RangeInfo=function(k){function f(){var c=l.apply(this,arguments);c.name=null;c.field=null;c.currentRangeExtent=null;c.fullRangeExtent=null;c.type="rangeInfo";return c}e._inherits(f,k);var l=
e._createSuper(f);return e._createClass(f)}(g.JSONSupport);b.__decorate([d.property({type:String,json:{read:!0,write:!0}})],a.RangeInfo.prototype,"name",void 0);b.__decorate([d.property({type:String,json:{read:!0,write:!0}})],a.RangeInfo.prototype,"field",void 0);b.__decorate([d.property({type:[Number],json:{read:!0,write:!0}})],a.RangeInfo.prototype,"currentRangeExtent",void 0);b.__decorate([d.property({type:[Number],json:{read:!0,write:!0}})],a.RangeInfo.prototype,"fullRangeExtent",void 0);b.__decorate([d.property({type:["rangeInfo"],
readOnly:!0,json:{read:!1,write:!0}})],a.RangeInfo.prototype,"type",void 0);a.RangeInfo=b.__decorate([h.subclass("esri.layers.support.RangeInfo")],a.RangeInfo);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});