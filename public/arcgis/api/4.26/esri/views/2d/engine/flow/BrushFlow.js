// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../chunks/mat3f32","../webgl/brushes/WGLBrush","../../../webgl/enums"],function(f,g,h,m,n){return function(c){function d(){var a=p.apply(this,arguments);a._visualState={time:0,dvsMat3:h.create(),displayViewMat3:h.create()};return a}f._inherits(d,c);var p=f._createSuper(d);c=d.prototype;c.dispose=function(){};c.prepareState=function(a){({context:a}=a);a.setColorMask(!0,!0,!0,!0);a.setStencilFunction(n.CompareFunction.EQUAL,
0,255)};c.draw=function(a,k){const {requestRender:e,allowDelayedRender:q}=a,{displayData:b}=k;if(!g.isNone(b)&&("loaded"===b.state.name&&b.attach(a),"attached"===b.state.name)){var l=b.state.resources;q&&!l.ready&&g.isSome(e)?e():(this._visualState.time=a.time/1E3,this._visualState.dvsMat3=k.transforms.dvs,this._visualState.displayViewMat3=a.state.displayViewMat3,b.flowStyle.render(a,this._visualState,l),b.flowStyle.animated&&g.isSome(e)&&e())}};return f._createClass(d)}(m)});