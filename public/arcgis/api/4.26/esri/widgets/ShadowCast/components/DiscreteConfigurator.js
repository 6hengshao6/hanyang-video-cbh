// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/uuid ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ../../../intl/duration ../../Widget ../css ./Label ./LabeledColorPicker ../../support/componentsUtils ../../support/widgetUtils ../../support/decorators/messageBundle ../../support/jsxFactory".split(" "),function(k,
c,l,f,p,m,C,D,E,q,r,t,u,v,w,x,F,y,d){c.DiscreteConfigurator=function(e){function g(a){var b=z.call(this,a);b.colorPickerVisible=!0;b._selectId=`select-${p.generateUUID()}`;b._colorPickerId=`color-picker-${p.generateUUID()}`;b._onColorChange=n=>{b.options.color=n};return b}l._inherits(g,e);var z=l._createSuper(g);e=g.prototype;e.loadDependencies=function(){return x.loadCalciteComponents({label:()=>new Promise((a,b)=>k(["../../../chunks/calcite-label"],a,b)),option:()=>new Promise((a,b)=>k(["../../../chunks/calcite-option"],
a,b)),select:()=>new Promise((a,b)=>k(["../../../chunks/calcite-select"],a,b))})};e.render=function(){const a=this._messages.discrete,b=a.intervalLabel,{color:n,interval:A,intervalOptions:B}=this.options;return d.tsx("div",{class:u.DISCRETE_CONFIGURATOR_CSS.base},d.tsx(v.Label,{for:this._selectId,label:b},d.tsx("calcite-select",{id:this._selectId,label:b,bind:this,onCalciteSelectChange:this._onIntervalChange},B.toArray().map(h=>d.tsx("calcite-option",{key:h,selected:h===A,value:String(h)},r.formatDuration(h))))),
this.colorPickerVisible&&d.tsx(w.LabeledColorPicker,{id:this._colorPickerId,label:a.colorLabel,value:n,onChange:this._onColorChange}))};e._onIntervalChange=function(a){a=parseInt(a.target.selectedOption?.value,10);Number.isFinite(a)&&(this.options.interval=a)};return l._createClass(g)}(t);f.__decorate([m.property()],c.DiscreteConfigurator.prototype,"options",void 0);f.__decorate([m.property()],c.DiscreteConfigurator.prototype,"colorPickerVisible",void 0);f.__decorate([m.property(),y.messageBundle("esri/widgets/ShadowCast/t9n/ShadowCast")],
c.DiscreteConfigurator.prototype,"_messages",void 0);c.DiscreteConfigurator=f.__decorate([q.subclass("esri.widgets.ShadowCast.components.DiscreteConfigurator")],c.DiscreteConfigurator);Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});