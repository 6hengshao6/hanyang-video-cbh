// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass ./Widget ./NavigationToggle/css ./NavigationToggle/NavigationToggleViewModel ./support/decorators/accessibleHandler ./support/decorators/messageBundle ./support/jsxFactory ./support/widgetUtils".split(" "),function(l,d,e,c,x,y,p,q,b,m,r,t,g,z){c=function(h){function k(a,f){a=u.call(this,
a,f);a.iconClass=b.CSS.widgetIcon;a.messages=null;a.viewModel=new m;return a}l._inherits(k,h);var u=l._createSuper(k);h=k.prototype;h.toggle=function(){return this.viewModel.toggle()};h.render=function(){const a="disabled"===this.get("viewModel.state");var f="pan"===this.get("viewModel.navigationMode");const v={[b.CSS.activeButton]:f};f={[b.CSS.activeButton]:!f};const w=a?-1:0,n=this.messages.toggle;return g.tsx("div",{bind:this,class:this.classes(b.CSS.base,{[b.CSS.disabled]:a,[b.CSS.isLayoutHorizontal]:"horizontal"===
this.layout}),onclick:this._toggle,onkeydown:this._toggle,tabIndex:w,"aria-label":n,title:n},g.tsx("div",{class:this.classes(b.CSS.button,b.CSS.panButton,v)},g.tsx("span",{class:b.CSS.panIcon})),g.tsx("div",{class:this.classes(b.CSS.button,b.CSS.rotateButton,f)},g.tsx("span",{class:b.CSS.rotationIcon})))};h._toggle=function(){this.toggle()};l._createClass(k,[{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(a){this._overrideIfSome("label",a)}},{key:"layout",set:function(a){"horizontal"!==
a&&(a="vertical");this._set("layout",a)}},{key:"view",get:function(){return this.viewModel.view},set:function(a){this.viewModel.view=a}}]);return k}(q);d.__decorate([e.property()],c.prototype,"iconClass",void 0);d.__decorate([e.property()],c.prototype,"label",null);d.__decorate([e.property({value:"vertical"})],c.prototype,"layout",null);d.__decorate([e.property(),t.messageBundle("esri/widgets/NavigationToggle/t9n/NavigationToggle")],c.prototype,"messages",void 0);d.__decorate([e.property()],c.prototype,
"view",null);d.__decorate([e.property({type:m})],c.prototype,"viewModel",void 0);d.__decorate([r.accessibleHandler()],c.prototype,"_toggle",null);return c=d.__decorate([p.subclass("esri.widgets.NavigationToggle")],c)});