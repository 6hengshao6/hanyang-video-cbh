// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","./brushes","./webgl/enums","./webgl/WGLContainer"],function(g,b,h,k,e){e=function(d){function c(){var a=l.apply(this,arguments);a._hasCrossfade=!1;return a}b._inherits(c,d);var l=b._createSuper(c);d=c.prototype;d.beforeRender=function(a){b._get(b._getPrototypeOf(c.prototype),"beforeRender",this).call(this,a);this._manageFade()};d.prepareRenderPasses=function(a){const f=a.registerRenderPass({name:"bitmap",brushes:[h.brushes.bitmap],target:()=>
this.children,drawPhase:k.WGLDrawPhase.MAP});return[...b._get(b._getPrototypeOf(c.prototype),"prepareRenderPasses",this).call(this,a),f]};d._manageFade=function(){2<=this.children.reduce((a,f)=>a+(f.inFadeTransition?1:0),0)?(this.children.forEach(a=>a.blendFunction="additive"),this._hasCrossfade=!0):(this.children.forEach(a=>a.blendFunction="standard"),this._hasCrossfade=!1)};b._createClass(c,[{key:"requiresDedicatedFBO",get:function(){return this._hasCrossfade}}]);return c}(e);g.BitmapContainer=
e;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});