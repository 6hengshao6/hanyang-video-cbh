// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Color ../../core/lang ../../core/maybe ../../core/screenUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass ./Callout3D ../../chunks/LineCallout3DBorder ../support/materialUtils".split(" "),function(f,c,l,h,m,n,e,a,p,q,r,t,k){var g;a=g=function(u){function d(b){b=v.call(this,b);b.type="line";
b.color=new l([0,0,0,1]);b.size=n.px2pt(1);b.border=null;return b}f._inherits(d,u);var v=f._createSuper(d);d.prototype.clone=function(){return new g({color:h.clone(this.color),size:this.size,border:h.clone(this.border)})};f._createClass(d,[{key:"visible",get:function(){return 0<this.size&&m.isSome(this.color)&&0<this.color.a}}]);return d}(r);c.__decorate([p.enumeration({line:"line"},{readOnly:!0})],a.prototype,"type",void 0);c.__decorate([e.property(k.colorAndTransparencyProperty)],a.prototype,"color",
void 0);c.__decorate([e.property(k.screenSizeProperty)],a.prototype,"size",void 0);c.__decorate([e.property({type:t.LineCallout3DBorder$1,json:{write:!0}})],a.prototype,"border",void 0);c.__decorate([e.property({readOnly:!0})],a.prototype,"visible",null);return a=g=c.__decorate([q.subclass("esri.symbols.callouts.LineCallout3D")],a)});