// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/maybe ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ./ControlPointsTransformTool ./TransformTool".split(" "),function(d,n,f,u,l,p,g,C,D,E,v,r,w){const k={redo:"r",undo:"z"};d.MediaTransformToolsWrapper=
function(c){function m(a){a=x.call(this,a);a._transformTool=null;a._controlPointsTransformTool=null;a._advancedModeTransformTool=null;a._activeTool=null;a._sharedUndoStack=[];a._sharedRedoStack=[];a._originalOpacity=null;a.activeHandle=0;return a}n._inherits(m,c);var x=n._createSuper(m);c=m.prototype;c.initialize=function(){const {view:a,mediaElement:e,preserveAspectRatio:y,snapRotation:z,advancedMode:h}=this;this._originalOpacity=e.opacity;this._transformTool=new w.TransformTool({target:e,view:a,
preserveAspectRatio:y,snapRotation:z});this._controlPointsTransformTool=new r.ControlPointsTransformTool({mediaElement:e,view:a});this._advancedModeTransformTool=new r.ControlPointsTransformTool({mediaElement:h.mediaElement,view:h.view});this._transformTool.setSharedUndoStack(this._sharedUndoStack);this._transformTool.setSharedRedoStack(this._sharedRedoStack);this._controlPointsTransformTool.setSharedUndoStack(this._sharedUndoStack);this._controlPointsTransformTool.setSharedRedoStack(this._sharedRedoStack);
this._advancedModeTransformTool.setSharedUndoStack(this._sharedUndoStack);this._advancedModeTransformTool.setSharedRedoStack(this._sharedRedoStack);const q=l.unwrap(e.georeference),t=l.unwrap(h.mediaElement.georeference);h.view.tools.addMany([this._advancedModeTransformTool]);"controlPoints"in t&&"controlPoints"in q&&this.addHandles([h.view.on("key-down",b=>{b.key===k.undo&&this.canUndo()&&(this.undo(),b.stopPropagation());b.key===k.redo&&this.canRedo()&&(this.redo(),b.stopPropagation())}),h.view.on("focus",
async b=>{this._controlPointsTransformTool.removeHighlightActiveHandle();this._advancedModeTransformTool.highlightActiveHandle()}),p.watch(()=>t.controlPoints,b=>{q.controlPoints=l.unwrap(b).map(({sourcePoint:A},B)=>({sourcePoint:A,mapPoint:l.unwrap(q.controlPoints)[B].mapPoint}));this._activeTool?.refresh()}),p.watch(()=>this._controlPointsTransformTool.activeHandle,b=>{this._advancedModeTransformTool.updateActiveHandle(b);this.activeHandle=b}),p.watch(()=>this._advancedModeTransformTool.activeHandle,
b=>{this._controlPointsTransformTool.updateActiveHandle(b);this.activeHandle=b})]);this.addHandles([a.on("key-down",b=>{b.key===k.undo&&this.canUndo()&&(this.undo(),b.stopPropagation());b.key===k.redo&&this.canRedo()&&(this.redo(),b.stopPropagation())}),a.on("focus",async b=>{this._advancedModeTransformTool.removeHighlightActiveHandle();this._controlPointsTransformTool.highlightActiveHandle()})]);a.tools.addMany([this._transformTool,this._controlPointsTransformTool]);this._activeTool=a.activeTool=
this._transformTool;a.focus()};c.destroy=function(){this._transformTool?.destroy();this._controlPointsTransformTool?.destroy();this._sharedRedoStack=this._sharedUndoStack=this._activeTool=this._advancedModeTransformTool=this._controlPointsTransformTool=this._transformTool=null};c.canUndo=function(){return 0<this._sharedUndoStack.length};c.canRedo=function(){return 0<this._sharedRedoStack.length};c.undo=function(){if(0<this._sharedUndoStack.length){const {tool:a,operation:e}=this._sharedUndoStack.pop();
a!==this._activeTool&&a.refresh();e.undo();a.updateGraphics();this._sharedRedoStack.push({tool:a,operation:e});this._activeTool!==a&&this._activeTool?.refresh()}};c.redo=function(){if(0<this._sharedRedoStack.length){const {tool:a,operation:e}=this._sharedRedoStack.pop();a!==this._activeTool&&a.refresh();e.apply();a.updateGraphics();this._sharedUndoStack.push({tool:a,operation:e});this._activeTool!==a&&this._activeTool?.refresh()}};c.refresh=function(){this._activeTool.refresh()};c.reset=function(){this._activeTool.reset();
this._advancedModeTransformTool.reset()};c.enableAdvancedMode=async function(){this._activeTool=this.view.activeTool=this._controlPointsTransformTool;this._activeTool.refresh();await this.advancedMode.view.when();this.advancedMode.view.activeTool=this._advancedModeTransformTool;this._originalOpacity=this._controlPointsTransformTool.mediaElement.opacity;this._controlPointsTransformTool.mediaElement.opacity=.25*this._originalOpacity};c.disableAdvancedMode=function(){this._activeTool=this.view.activeTool=
this._transformTool;this._activeTool.refresh();this.advancedMode.view.activeTool=null;this._controlPointsTransformTool.mediaElement.opacity=this._originalOpacity};return n._createClass(m)}(u);f.__decorate([g.property()],d.MediaTransformToolsWrapper.prototype,"activeHandle",void 0);f.__decorate([g.property({constructOnly:!0})],d.MediaTransformToolsWrapper.prototype,"advancedMode",void 0);f.__decorate([g.property()],d.MediaTransformToolsWrapper.prototype,"preserveAspectRatio",void 0);f.__decorate([g.property()],
d.MediaTransformToolsWrapper.prototype,"snapRotation",void 0);f.__decorate([g.property({constructOnly:!0,nonNullable:!0})],d.MediaTransformToolsWrapper.prototype,"mediaElement",void 0);f.__decorate([g.property({constructOnly:!0})],d.MediaTransformToolsWrapper.prototype,"view",void 0);d.MediaTransformToolsWrapper=f.__decorate([v.subclass("esri.views.2d.interactive.editingTools.MediaTransformToolsWrapper")],d.MediaTransformToolsWrapper);d.KEYS=k;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});