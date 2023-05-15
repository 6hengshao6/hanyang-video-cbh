// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","./BufferRange"],function(e,c,f,d){d=function(g){function a(h,b,k){b=l.call(this,b,k);b.geometry=h;return b}c._inherits(a,g);var l=c._createSuper(a);c._createClass(a,[{key:"isVisible",get:function(){return this.geometry.visible}},{key:"hasHighlights",get:function(){return f.isSome(this.geometry.highlights)&&this.isVisible}},{key:"hasOccludees",get:function(){return f.isSome(this.geometry.occludees)}}]);
return a}(d.BufferRange);e.Instance=d;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});