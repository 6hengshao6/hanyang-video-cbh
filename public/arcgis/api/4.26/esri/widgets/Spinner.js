// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/maybe ../core/promiseUtils ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass ./Widget ./Spinner/SpinnerViewModel ./support/widgetUtils ./support/jsxFactory".split(" "),function(k,e,l,n,p,h,d,v,w,q,r,m,x,t){d=function(c){function f(a,b){a=u.call(this,a,b);a._animationDelay=500;a._animationPromise=null;a.viewModel=
new m;return a}k._inherits(f,c);var u=k._createSuper(f);c=f.prototype;c.initialize=function(){this.addHandles(p.watch(()=>this.visible,a=>this._visibleChange(a)))};c.destroy=function(){this._animationPromise=null};c.show=function(a){const {location:b,promise:g}=a??{};b&&(this.viewModel.location=b);this.visible=!0;a=()=>this.hide();g&&g.catch(()=>{}).then(a)};c.hide=function(){this.visible=!1};c.render=function(){var {visible:a}=this,{screenLocation:b}=this.viewModel;b=!!b;a={["esri-spinner--start"]:a&&
b,["esri-spinner--finish"]:!a&&b};b=this._getPositionStyles();return t.tsx("div",{class:this.classes("esri-spinner",a),styles:b})};c._visibleChange=function(a){if(a)this.viewModel.screenLocationEnabled=!0;else{var b=n.after(this._animationDelay);this._animationPromise=b;b.catch(()=>{}).then(()=>{this._animationPromise===b&&(this.viewModel.screenLocationEnabled=!1,this._animationPromise=null)})}};c._getPositionStyles=function(){const {screenLocation:a,view:b}=this.viewModel;if(l.isNone(b)||l.isNone(a))return{};
const {padding:g}=b;return{left:`${a.x-g.left}px`,top:`${a.y-g.top}px`}};k._createClass(f,[{key:"location",get:function(){return this.viewModel.location},set:function(a){this.viewModel.location=a}},{key:"view",get:function(){return this.viewModel.view},set:function(a){this.viewModel.view=a}},{key:"visible",get:function(){return this.viewModel.visible},set:function(a){this.viewModel.visible=a}}]);return f}(r);e.__decorate([h.property()],d.prototype,"location",null);e.__decorate([h.property()],d.prototype,
"view",null);e.__decorate([h.property({type:m})],d.prototype,"viewModel",void 0);e.__decorate([h.property()],d.prototype,"visible",null);return d=e.__decorate([q.subclass("esri.widgets.Spinner")],d)});