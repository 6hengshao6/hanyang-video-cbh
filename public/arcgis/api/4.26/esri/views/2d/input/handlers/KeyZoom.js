// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/has","../../../input/InputHandler"],function(l,k,m,n){var e;(function(c){c[c.IN=0]="IN";c[c.OUT=1]="OUT"})(e||(e={}));m=function(c){function h(d,b,f){var a=p.call(this,!0);a.view=d;a.keys=b;a._keysToZoomAction={};a.registerIncoming("key-down",f,g=>a._handleKeyDown(g));b.zoomIn.forEach(g=>a._keysToZoomAction[g]=e.IN);b.zoomOut.forEach(g=>a._keysToZoomAction[g]=e.OUT);return a}k._inherits(h,c);var p=k._createSuper(h);
c=h.prototype;c._handleKeyDown=function(d){this._handleKey(d)};c._handleKey=function(d){var b=d.modifiers;if(!(0<b.size)||b.has("Shift"))if({key:b}=d.data,b in this._keysToZoomAction){b=this._keysToZoomAction[b];var {mapViewNavigation:f}=this.view,a=null;switch(b){case e.IN:a=f.zoomIn();break;case e.OUT:a=f.zoomOut();break;default:return}f.begin();a.then(()=>f.end());d.stopPropagation()}};return k._createClass(h)}(n.InputHandler);l.KeyZoom=m;Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});