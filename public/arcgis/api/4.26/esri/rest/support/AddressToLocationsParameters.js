// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ./commonProperties ../../geometry/Point ../../geometry/SpatialReference ../../geometry/Extent".split(" "),function(g,d,a,h,e,k,t,u,l,m,n,p,q){a=function(b){function f(c){c=r.call(this,c);c.address=null;c.apiKey=null;c.categories=
null;c.countryCode=null;c.forStorage=null;c.location=null;c.locationType=null;c.magicKey=null;c.maxLocations=null;c.outFields=null;c.outSpatialReference=null;c.searchExtent=null;return c}g._inherits(f,b);var r=g._createSuper(f);return g._createClass(f)}(h.JSONSupport);d.__decorate([e.property({type:Object,json:{write:!0}})],a.prototype,"address",void 0);d.__decorate([e.property(m.apiKey)],a.prototype,"apiKey",void 0);d.__decorate([e.property({type:[String],json:{read:{source:"category",reader:b=>
b?b.split(","):null},write:{target:"category",writer:(b,f)=>{f.category=b?b.join(","):null}}}})],a.prototype,"categories",void 0);d.__decorate([e.property({type:String,json:{write:!0}})],a.prototype,"countryCode",void 0);d.__decorate([e.property({type:Boolean,json:{write:!0}})],a.prototype,"forStorage",void 0);d.__decorate([e.property({type:n,json:{write:{writer:(b,f)=>{f.location=b?b.clone().normalize():null}}}})],a.prototype,"location",void 0);d.__decorate([e.property({type:String,json:{write:!0}})],
a.prototype,"locationType",void 0);d.__decorate([e.property({type:String,json:{write:!0}})],a.prototype,"magicKey",void 0);d.__decorate([e.property({type:Number,json:{write:!0}})],a.prototype,"maxLocations",void 0);d.__decorate([e.property({type:[String],json:{write:{writer:(b,f)=>{f.outFields=b?b.join(","):null}}}})],a.prototype,"outFields",void 0);d.__decorate([e.property({type:p,json:{read:{source:"outSR"},write:{target:"outSR"}}})],a.prototype,"outSpatialReference",void 0);d.__decorate([e.property({type:q,
json:{write:{writer:(b,f)=>{b=b?b.shiftCentralMeridian():null;f.searchExtent=b}}}})],a.prototype,"searchExtent",void 0);a=d.__decorate([l.subclass("esri.rest.support.AddressToLocationsParameters")],a);a.from=k.ensureType(a);return a});