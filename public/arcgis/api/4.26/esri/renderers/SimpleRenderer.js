// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/lang ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ./Renderer ./mixins/VisualVariablesMixin ./support/commonProperties".split(" "),function(g,e,l,h,d,m,n,p,q,r){var k;d=k=function(b){function f(a){a=t.call(this,a);a.description=null;a.label=null;a.symbol=null;a.type="simple";return a}g._inherits(f,b);var t=
g._createSuper(f);b=f.prototype;b.collectRequiredFields=async function(a,c){await Promise.all([this.collectSymbolFields(a,c),this.collectVVRequiredFields(a,c)])};b.collectSymbolFields=async function(a,c){await Promise.all(this.getSymbols().map(u=>u.collectRequiredFields(a,c)))};b.getSymbol=function(a,c){return this.symbol};b.getSymbolAsync=async function(a,c){return this.symbol};b.getSymbols=function(){return this.symbol?[this.symbol]:[]};b.getAttributeHash=function(){return this.visualVariables&&
this.visualVariables.reduce((a,c)=>a+c.getAttributeHash(),"")};b.getMeshHash=function(){return this.getSymbols().reduce((a,c)=>a+=JSON.stringify(c),"")};b.clone=function(){return new k({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:l.clone(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})};g._createClass(f,[{key:"arcadeRequired",get:function(){return this.arcadeRequiredForVisualVariables}}]);return f}(q.VisualVariablesMixin(p));
e.__decorate([h.property({type:String,json:{write:!0}})],d.prototype,"description",void 0);e.__decorate([h.property({type:String,json:{write:!0}})],d.prototype,"label",void 0);e.__decorate([h.property(r.rendererSymbolProperty)],d.prototype,"symbol",void 0);e.__decorate([m.enumeration({simple:"simple"})],d.prototype,"type",void 0);return d=k=e.__decorate([n.subclass("esri.renderers.SimpleRenderer")],d)});