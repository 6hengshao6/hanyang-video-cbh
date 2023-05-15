// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../input/DragEventSeparator","../../../input/InputHandler","../../../input/handlers/support"],function(k,d,l,h,m){h=function(e){function f(g,b,a){var c=n.call(this,!0);c.view=g;c.pointerAction=b;c.registerIncoming("drag",a,p=>c._handleDrag(p));c.registerIncoming("pointer-down",()=>c.stopMomentumNavigation());return c}d._inherits(f,e);var n=d._createSuper(f);e=f.prototype;e.onInstall=function(g){d._get(d._getPrototypeOf(f.prototype),
"onInstall",this).call(this,g);this._dragEventSeparator=new l.DragEventSeparator({start:(b,a)=>{this.view.mapViewNavigation.pan.begin(this.view,a.data);a.stopPropagation()},update:(b,a)=>{this.view.mapViewNavigation.pan.update(this.view,a.data);a.stopPropagation()},end:(b,a)=>{this.view.mapViewNavigation.pan.end(this.view,a.data);a.stopPropagation()},condition:(b,a)=>1===b&&m.eventMatchesPointerAction(a.data,this.pointerAction)})};e._handleDrag=function(g){const b=this.view.mapViewNavigation;b.pinch.zoomMomentum||
b.pinch.rotateMomentum?this.stopMomentumNavigation():this._dragEventSeparator.handle(g)};e.stopMomentumNavigation=function(){this.view.mapViewNavigation.pan.stopMomentumNavigation()};return d._createClass(f)}(h.InputHandler);k.DragPan=h;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});