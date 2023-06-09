// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/deprecate ../core/Logger ../core/reactiveUtils ../core/screenUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass ../intl/number ../properties/defaultUnit ./Widget ./ScaleBar/css ./ScaleBar/ScaleBarViewModel ./support/widgetUtils ./support/decorators/messageBundle ./support/jsxFactory".split(" "),function(q,h,u,e,v,w,l,G,
H,I,x,y,z,A,b,B,J,C,d){function t(g,m){return y.formatNumber(g,{style:"unit",unit:m,unitDisplay:"short"})}const D=e.getLogger("esri.widgets.ScaleBar");e=function(g){function m(a,c){a=E.call(this,a,c);a.messages=null;a.style="line";a.viewModel=new B;return a}q._inherits(m,g);var E=q._createSuper(m);g=m.prototype;g.initialize=function(){this.addHandles(v.watch(()=>{const {view:a}=this;return[a?.stationary,a?.center,a?.scale,a?.zoom]},([a])=>{a&&this.scheduleRender()}))};g.render=function(){var a="disabled"===
this.viewModel.state;const c={[b.CSS.disabled]:a};let n,p;if(!a){const {unit:f,style:F}=this;var k="metric"===f||"dual"===f;a="dual"===f?"line":F;if("imperial"===f||"non-metric"===f||"dual"===f){const r=this.viewModel.getScaleBarProperties(50,"imperial");r&&(p="ruler"===a?this._renderRuler(r):this._renderLine(r,"bottom"))}k&&(k=this.viewModel.getScaleBarProperties(50,"metric"))&&(n="ruler"===a?this._renderRuler(k):this._renderLine(k,"top"))}return d.tsx("div",{afterCreate:this._handleRootCreateOrUpdate,
afterUpdate:this._handleRootCreateOrUpdate,bind:this,class:this.classes(b.CSS.base,c)},n,p)};g._renderRuler=function(a){const {length:c,unit:n,value:p}=a;a=2*Math.round(c);const k=t(2*p,n);return d.tsx("div",{class:this.classes(b.CSS.barContainer,b.CSS.rulerBarContainer),key:b.CSS.rulerBarContainer},d.tsx("div",{class:b.CSS.ruler,styles:{width:`${a}px`}},d.tsx("div",{class:b.CSS.rulerBlock}),d.tsx("div",{class:b.CSS.rulerBlock}),d.tsx("div",{class:b.CSS.rulerBlock}),d.tsx("div",{class:b.CSS.rulerBlock})),
d.tsx("div",{class:this.classes(b.CSS.labelContainer,b.CSS.rulerLabelContainer)},d.tsx("div",{class:b.CSS.label},"0"),d.tsx("div",{class:b.CSS.label},k)))};g._renderLine=function(a,c){const {length:n,unit:p,value:k}=a;a=2*Math.round(n);var f=t(2*k,p);f=d.tsx("div",{class:this.classes(b.CSS.labelContainer,b.CSS.lineLabelContainer,{[b.CSS.topLabelContainer]:"top"===c,[b.CSS.bottomLabelContainer]:"bottom"===c}),key:b.CSS.labelContainer},d.tsx("div",{class:b.CSS.label},f));c=d.tsx("div",{class:this.classes(b.CSS.line,
{[b.CSS.topLine]:"top"===c,[b.CSS.bottomLine]:"bottom"===c}),key:b.CSS.line,styles:{width:`${a}px`}});return d.tsx("div",{class:this.classes(b.CSS.barContainer,b.CSS.lineBarContainer),key:b.CSS.lineBarContainer},[c,f])};g._handleRootCreateOrUpdate=function(a){if(this.viewModel){var {scaleComputedFrom:c}=this.viewModel;a=a.getBoundingClientRect();a=w.createScreenPoint(a.left+window.pageXOffset,a.top+window.pageYOffset);if(a.x!==c.x||a.y!==c.y)this.viewModel.scaleComputedFrom=a}};q._createClass(m,[{key:"label",
get:function(){return this.messages?.widgetLabel??""},set:function(a){this._overrideIfSome("label",a)}},{key:"unit",get:function(){return this._defaultUnit},set:function(a){"non-metric"===a&&u.deprecatedProperty(D,"unit",{replacement:"Please use 'imperial' instead of 'non-metric'.",see:"https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-ScaleBar.html#unit",version:"4.27",warnOnce:!0});this._overrideIfSome("unit",a)}},{key:"view",get:function(){return this.viewModel.view},set:function(a){this.viewModel.view=
a}}]);return m}(A);h.__decorate([l.property(z.defaultUnitPropertyMetadata)],e.prototype,"_defaultUnit",void 0);h.__decorate([l.property()],e.prototype,"label",null);h.__decorate([l.property(),C.messageBundle("esri/widgets/ScaleBar/t9n/ScaleBar")],e.prototype,"messages",void 0);h.__decorate([l.property({type:["ruler","line"]})],e.prototype,"style",void 0);h.__decorate([l.property({type:["metric","imperial","dual","non-metric"]})],e.prototype,"unit",null);h.__decorate([l.property()],e.prototype,"view",
null);h.__decorate([l.property()],e.prototype,"viewModel",void 0);return e=h.__decorate([x.subclass("esri.widgets.ScaleBar")],e)});