// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../Color ../core/lang ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ./Symbol3DLayer".split(" "),function(g,c,h,n,f,p,q,r,a){var k;a=k=function(e){function d(b){b=l.call(this,b);b.color=m.clone();b.type="water";b.waterbodySize="medium";b.waveDirection=null;b.waveStrength="moderate";return b}g._inherits(d,e);var l=
g._createSuper(d);d.prototype.clone=function(){return new k({color:n.clone(this.color),waterbodySize:this.waterbodySize,waveDirection:this.waveDirection,waveStrength:this.waveStrength})};return g._createClass(d)}(a);c.__decorate([f.property({type:h,nonNullable:!0,json:{type:[p.Integer],write:(e,d,l)=>d[l]=e.toArray(h.AlphaMode.UNLESS_OPAQUE),default:()=>m.clone(),defaultEquals:e=>e.toCss(!0)===m.toCss(!0)}})],a.prototype,"color",void 0);c.__decorate([q.enumeration({Water:"water"},{readOnly:!0})],
a.prototype,"type",void 0);c.__decorate([f.property({type:["small","medium","large"],json:{write:!0,default:"medium"}})],a.prototype,"waterbodySize",void 0);c.__decorate([f.property({type:Number,json:{write:!0,default:null}})],a.prototype,"waveDirection",void 0);c.__decorate([f.property({type:["calm","rippled","slight","moderate"],json:{write:!0,default:"moderate"}})],a.prototype,"waveStrength",void 0);a=k=c.__decorate([r.subclass("esri.symbols.WaterSymbol3DLayer")],a);const m=new h([0,119,190]);
return a});