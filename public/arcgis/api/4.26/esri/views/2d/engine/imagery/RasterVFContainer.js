// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","./BrushVectorField","../webgl/enums","../webgl/WGLContainer"],function(g,b,k,h,e){e=function(d){function c(){var a=l.apply(this,arguments);a.symbolTypes=["triangle"];return a}b._inherits(c,d);var l=b._createSuper(c);d=c.prototype;d.prepareRenderPasses=function(a){const f=a.registerRenderPass({name:"imagery (vf)",brushes:[k],target:()=>this.children,drawPhase:h.WGLDrawPhase.MAP});return[...b._get(b._getPrototypeOf(c.prototype),"prepareRenderPasses",
this).call(this,a),f]};d.doRender=function(a){this.visible&&a.drawPhase===h.WGLDrawPhase.MAP&&this.symbolTypes.forEach(f=>{a.renderPass=f;b._get(b._getPrototypeOf(c.prototype),"doRender",this).call(this,a)})};b._createClass(c,[{key:"requiresDedicatedFBO",get:function(){return!1}}]);return c}(e);g.RasterVFContainer=e;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});