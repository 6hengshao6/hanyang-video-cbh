// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/Handles ../../../../core/maybe ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/mat4 ../../../../chunks/vec3 ../../../../chunks/vec4f64 ../../../../geometry/support/vectorStacks ./sliceToolConfig ./sliceToolUtils ../../webgl-engine/materials/lineStippleUtils".split(" "),
function(c,m,d,t,u,f,k,g,B,C,D,v,r,n,w,p,h,q,x){c.SliceVisualization=function(e){function l(a){a=y.call(this,a);a._handles=new u;a._gridVisualElement=null;a._outlineVisualElement=null;a.showGrid=!1;a.preview=!0;return a}m._inherits(l,e);var y=m._createSuper(l);e=l.prototype;e.initialize=function(){const a=this.analysisViewData;if(f.isNone(a))throw Error("expected internal object to be valid");this._gridVisualElement=q.createGridVisualElement(this.view);this._outlineVisualElement=q.createOutlineVisualElement(this.view);
this._handles.add([k.watch(()=>({visible:f.isSome(a.plane)&&this.analysisViewData.visible,active:this.analysisViewData.active,preview:this.preview,showGrid:this.showGrid}),b=>this._updateMaterials(b),k.syncAndInitial),k.watch(()=>a.plane,b=>this._updatePlane(b),k.syncAndInitial)],"internal")};e.destroy=function(){this._handles.destroy();this._gridVisualElement=f.destroyMaybe(this._gridVisualElement);this._outlineVisualElement=f.destroyMaybe(this._outlineVisualElement);this.set("view",null)};e._updatePlane=
function(a){if(!f.isNone(a)){this._gridVisualElement.attached=!0;this._outlineVisualElement.attached=!0;var b=n.set(p.sv3d.get(),n.length(a.basis1),n.length(a.basis2),1);b=r.fromScaling(p.sm4d.get(),b);a=q.calculateBoundedPlaneTranslateRotate(a,p.sm4d.get());a=r.multiply(b,a,b);this._outlineVisualElement.transform=a;this._gridVisualElement.transform=a}};e._updateMaterials=function({visible:a,active:b,preview:z,showGrid:A}){this._outlineVisualElement.color=h.PLANE_OUTLINE_COLOR;this._outlineVisualElement.width=
z?h.PLANE_PREVIEW_OUTLINE_WIDTH:h.PLANE_OUTLINE_WIDTH;this._outlineVisualElement.stipplePattern=b?null:x.createStipplePatternSimple(5);this._gridVisualElement.backgroundColor=h.PLANE_BACKGROUND_COLOR;this._gridVisualElement.gridColor=A?h.GRID_COLOR:w.ZEROS;this._gridVisualElement.visible=a;this._outlineVisualElement.visible=a};return m._createClass(l)}(t);d.__decorate([g.property()],c.SliceVisualization.prototype,"view",void 0);d.__decorate([g.property()],c.SliceVisualization.prototype,"analysis",
void 0);d.__decorate([g.property()],c.SliceVisualization.prototype,"analysisViewData",void 0);d.__decorate([g.property()],c.SliceVisualization.prototype,"showGrid",void 0);d.__decorate([g.property()],c.SliceVisualization.prototype,"preview",void 0);c.SliceVisualization=d.__decorate([v.subclass("esri.views.3d.analysis.Slice.SliceVisualization")],c.SliceVisualization);Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});