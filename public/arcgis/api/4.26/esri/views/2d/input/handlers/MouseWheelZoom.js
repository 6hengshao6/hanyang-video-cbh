// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../input/InputHandler"],function(h,e,f){f=function(k){function c(a,d){var b=l.call(this,!0);b._view=a;b._canZoom=!0;b.registerIncoming("mouse-wheel",d,g=>b._handleMouseWheel(g));return b}e._inherits(c,k);var l=e._createSuper(c);c.prototype._handleMouseWheel=function(a){if(this._view.navigation.mouseWheelZoomEnabled&&(a.preventDefault(),a.stopPropagation(),this._canZoom)){var d=this._view.mapViewNavigation,{x:b,y:g,deltaY:m}=a.data;
if(a=d.zoom(1/.6**(1/60*m),[b,g]))this._canZoom=!1,a.catch(()=>{}).then(()=>{this._canZoom=!0;d.end()})}};return e._createClass(c)}(f.InputHandler);h.MouseWheelZoom=f;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});