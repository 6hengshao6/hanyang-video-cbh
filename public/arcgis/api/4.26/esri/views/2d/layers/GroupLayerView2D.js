// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/Error ../../../core/accessorSupport/decorators/subclass ../engine/webgl/GroupContainer ./LayerView2D ../../layers/GroupLayerView".split(" "),function(d,f,e,p,q,r,t,g,h,k,l){e=function(a){function c(){var b=m.apply(this,arguments);b.container=new h.GroupContainer;return b}d._inherits(c,a);var m=d._createSuper(c);
a=c.prototype;a.attach=function(){this._updateStageChildren();this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))};a.detach=function(){this.container.removeAllChildren()};a.update=function(b){};a.moveStart=function(){};a.viewChange=function(){};a.moveEnd=function(){};a._updateStageChildren=function(){this.container.removeAllChildren();this.layerViews.forEach((b,n)=>this.container.addChildAt(b.container,n))};return d._createClass(c)}(k.LayerView2DMixin(l));return e=
f.__decorate([g.subclass("esri.views.2d.layers.GroupLayerView2D")],e)});