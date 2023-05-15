// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/Collection ../core/lang ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ./IconSymbol3DLayer ./ObjectSymbol3DLayer ./Symbol3D ./TextSymbol3DLayer ./callouts/calloutUtils ./support/Symbol3DVerticalOffset".split(" "),function(k,f,b,g,l,x,q,r,h,t,u,n,m,v){var c;const p=b.ofType({base:null,key:"type",typeMap:{icon:h,
object:t,text:n}});b=c=function(e){function d(a){a=w.call(this,a);a.verticalOffset=null;a.callout=null;a.symbolLayers=new p;a.type="point-3d";return a}k._inherits(d,e);var w=k._createSuper(d);e=d.prototype;e.supportsCallout=function(){if(1>(this.symbolLayers?this.symbolLayers.length:0))return!1;for(const a of this.symbolLayers.items)switch(a.type){case "icon":case "text":case "object":continue;default:return!1}return!0};e.hasVisibleCallout=function(){return m.hasVisibleCallout(this)};e.hasVisibleVerticalOffset=
function(){return m.hasVisibleVerticalOffset(this)};e.clone=function(){return new c({verticalOffset:g.clone(this.verticalOffset),callout:g.clone(this.callout),styleOrigin:g.clone(this.styleOrigin),symbolLayers:g.clone(this.symbolLayers),thumbnail:g.clone(this.thumbnail)})};d.fromSimpleMarkerSymbol=function(a){return new c({symbolLayers:[h.fromSimpleMarkerSymbol(a)]})};d.fromPictureMarkerSymbol=function(a){return new c({symbolLayers:[h.fromPictureMarkerSymbol(a)]})};d.fromCIMSymbol=function(a){return"CIMPointSymbol"!==
a.data?.symbol?.type?null:a.data.symbol?.callout?new c({symbolLayers:[h.fromCIMSymbol(a)],callout:{type:"line",size:.5,color:[0,0,0]},verticalOffset:{screenLength:40}}):new c({symbolLayers:[h.fromCIMSymbol(a)]})};d.fromTextSymbol=function(a){return new c({symbolLayers:[n.fromTextSymbol(a)]})};return k._createClass(d)}(u);f.__decorate([l.property({type:v,json:{write:!0}})],b.prototype,"verticalOffset",void 0);f.__decorate([l.property(m.calloutProperty)],b.prototype,"callout",void 0);f.__decorate([l.property({type:p,
json:{origins:{"web-scene":{write:!0}}}})],b.prototype,"symbolLayers",void 0);f.__decorate([q.enumeration({PointSymbol3D:"point-3d"},{readOnly:!0})],b.prototype,"type",void 0);return b=c=f.__decorate([r.subclass("esri.symbols.PointSymbol3D")],b)});