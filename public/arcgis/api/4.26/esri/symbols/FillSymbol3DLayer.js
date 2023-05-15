// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/maybe ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ./Symbol3DLayer ./edges/utils ./patterns/LineStylePattern3D ./patterns/StylePattern3D ./patterns/utils ./support/colors ./support/Symbol3DFillMaterial ./support/Symbol3DOutline".split(" "),function(h,c,f,d,b,A,B,p,q,r,t,u,
v,w,k,l,x){var g;b=g=function(y){function e(a){a=z.call(this,a);a.type="fill";a.material=null;a.pattern=null;a.castShadows=!0;a.outline=null;a.edges=null;return a}h._inherits(e,y);var z=h._createSuper(e);e.prototype.clone=function(){const a={edges:f.isSome(this.edges)?this.edges.clone():null,enabled:this.enabled,material:f.isSome(this.material)?this.material.clone():null,pattern:f.isSome(this.pattern)?this.pattern.clone():null,castShadows:this.castShadows,outline:f.isSome(this.outline)?this.outline.clone():
null};return new g(a)};e.fromSimpleFillSymbol=function(a){const m=a.outline&&a.outline.style&&"inside-frame"!==a.outline.style&&"solid"!==a.outline.style?new u({style:a.outline.style}):null,n={size:a.outline?.width??0,color:(a.outline?.color??k.white).clone(),pattern:m};m&&a.outline?.cap&&(n.patternCap=a.outline.cap);return new g({material:new l.Symbol3DFillMaterial({color:(a.color??k.transparentWhite).clone()}),pattern:a.style&&"solid"!==a.style?new v({style:a.style}):null,outline:n})};return h._createClass(e)}(r);
c.__decorate([p.enumeration({Fill:"fill"},{readOnly:!0})],b.prototype,"type",void 0);c.__decorate([d.property({type:l.Symbol3DFillMaterial,json:{write:!0}})],b.prototype,"material",void 0);c.__decorate([d.property(w.symbol3dPatternProperty)],b.prototype,"pattern",void 0);c.__decorate([d.property({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],b.prototype,"castShadows",void 0);c.__decorate([d.property({type:x.Symbol3DOutline,json:{write:!0}})],b.prototype,"outline",void 0);c.__decorate([d.property(t.symbol3dEdgesProperty)],
b.prototype,"edges",void 0);return b=g=c.__decorate([q.subclass("esri.symbols.FillSymbol3DLayer")],b)});