// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/Handles ../../../core/maybe ../../../core/reactiveUtils ./constants ./HoveredPoints ./InputRepresentation2D".split(" "),function(f,k,l,e,b,m,n,p){let t=function(){function g(c,d){this._handles=new l;this._inputRepresentation=new p.InputRepresentation2D({view:c});this._hoveredPoints=new n.HoveredPoints({view:c});this._handles.add([b.watch(()=>d.viewModel.hoveredPoints,a=>this._hoveredPoints.update(a),b.syncAndInitial),b.watch(()=>
{const {state:a,highlightEnabled:q,viewModel:r}=d;return{input:r.input,state:a,highlightEnabled:q}},a=>this._updateInputRepresentation(a),b.syncAndInitial)])}var h=g.prototype;h.destroy=function(){this._handles=e.destroyMaybe(this._handles);this._inputRepresentation=e.destroyMaybe(this._inputRepresentation);this._hoveredPoints=e.destroyMaybe(this._hoveredPoints)};h._updateInputRepresentation=function({input:c,state:d,highlightEnabled:a}){d===m.ElevationProfileState.Selected&&a?this._inputRepresentation.update(c):
this._inputRepresentation.remove()};return k._createClass(g)}();f.ElevationProfileView2D=t;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});