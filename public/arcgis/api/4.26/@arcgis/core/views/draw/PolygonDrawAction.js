/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import"../../geometry.js";import{i as s,d as o}from"../../chunks/maybe.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import r from"./DrawAction.js";import{d as n,a as p}from"../../chunks/drawSurfaces.js";import{D as a}from"../../chunks/DrawTool.js";import{V as m,a as l,C as h,D as c}from"../../chunks/DrawEvents.js";import{V as d}from"../../chunks/InputManager.js";import{S as u}from"../../chunks/keybindings.js";import{c as j}from"../../chunks/screenUtils2.js";import y from"../../geometry/Point.js";import"../../geometry/Extent.js";import"../../chunks/string.js";import"../../chunks/object.js";import"../../core/lang.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/Ellipsoid.js";import"../../chunks/writer.js";import"../../geometry/support/webMercatorUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/vec4.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../core/Evented.js";import"../../chunks/screenUtils.js";import"../../layers/GraphicsLayer.js";import"../../chunks/GraphicsCollection.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../core/Clonable.js";import"../../core/Collection.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/number.js";import"../../chunks/locale.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils2.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils3.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../core/urlUtils.js";import"../../chunks/persistableUrlUtils.js";import"../../chunks/Symbol3DAnchorPosition2D.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../core/HandleOwner.js";import"../../chunks/WatchUpdatingTracking.js";import"../../core/reactiveUtils.js";import"../../layers/Layer.js";import"../../layers/mixins/BlendLayer.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../../chunks/mat4f32.js";import"../../chunks/mat4.js";import"../../chunks/_commonjsHelpers.js";import"../../layers/mixins/ScaleRangeLayer.js";import"../../chunks/ElevationInfo.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/dehydratedFeatures.js";import"../../chunks/byteSizeEstimations.js";import"../../chunks/quantizationUtils.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/fieldType.js";import"../../chunks/ViewingMode.js";import"../../chunks/SnappingVisualizer2D.js";import"../../chunks/vec2.js";import"../../chunks/vec2f64.js";import"../../chunks/enums.js";import"../../chunks/settings.js";import"../../chunks/Settings2.js";import"../../chunks/SnappingContext.js";import"../../chunks/RightAngleSnappingHint.js";import"../../chunks/LineSnappingHint.js";import"../../chunks/PointSnappingHint.js";import"../../chunks/EditGeometryOperations.js";import"../../chunks/vec4f64.js";import"../../chunks/plane.js";import"../../chunks/vector.js";import"../../chunks/ray.js";import"../../chunks/mat3f64.js";import"../../chunks/mat4f64.js";import"../../chunks/quatf64.js";import"../../chunks/mathUtils2.js";import"../../chunks/geometry2dUtils.js";import"../../chunks/SnappingOperation.js";import"../../chunks/Scheduler.js";import"../../chunks/ObservableValue.js";import"../../chunks/debugFlags.js";import"../../chunks/dehydratedFeatureComparison.js";import"../../chunks/elevationInfoUtils.js";import"../../chunks/dragEventPipeline.js";import"../../chunks/interfaces5.js";import"../../geometry/projection.js";import"../../chunks/pe.js";import"../../chunks/assets.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../chunks/hydratedFeatures.js";import"../../chunks/drawUtils.js";import"../interactive/sketch/SketchLabelOptions.js";import"../interactive/sketch/SketchTooltipOptions.js";import"../../chunks/SnappingDragPipelineStep.js";import"../../chunks/snappingUtils.js";import"../../chunks/Queue.js";import"../../chunks/PropertiesPool.js";let k=class extends r{constructor(t){super(t),this._panEnabled=!1,this._popVertexOnPointerMove=!1,this._addVertexOnPointerUp=!1,this.mode=n}initialize(){"2d"===this.view.type?(this._addViewHandles(),this._addUndoRedoHandles()):this._addDrawTool()}destroy(){"2d"===this.view.type?(this._removeViewHandles(),this._removeUndoRedoHandles()):this._removeDrawTool(),this.emit("destroy")}get _dragEnabled(){return"freehand"===this.mode||"hybrid"===this.mode}get _clickEnabled(){return"click"===this.mode||"hybrid"===this.mode}undo(){super.undo(),this.notifyChange("vertices")}redo(){super.redo(),this.notifyChange("vertices")}complete(){"2d"===this.view.type?this._completeDrawing():this._drawTool.completeCreateOperation()}_getGeometryZValue(){return this.hasZ&&this.vertices.length>0?this.vertices[0][2]:this.defaultZ}_addViewHandles(){this._removeViewHandles(),this._handles.add([this.view.on("click",(t=>{t.stopPropagation()}),d.TOOL),this.view.on("pointer-down",(t=>{this._shouldHandlePointerEvent(t)&&(this._abortSnapping(),this._activePointerId=t.pointerId,this._addVertexOnPointerUp=!0,this._cursorScreenPoint=j(t),"touch"===t.pointerType&&this._updateCursor(t.native))}),d.TOOL),this.view.on("pointer-move",(t=>{this._abortSnapping(),this._popVertexOnPointerMove&&(this.undo(),this._popVertexOnPointerMove=!1),this._cursorScreenPoint=j(t),"touch"!==t.pointerType&&this._updateCursor(t.native)}),d.TOOL),this.view.on("pointer-drag",(t=>{this._shouldHandlePointerEvent(t)&&(this._abortSnapping(),this._cursorScreenPoint=j(t),this._dragEnabled&&!this._panEnabled?this._vertexAddHandler(t):this._addVertexOnPointerUp=!1)}),d.TOOL),this.view.on("pointer-up",(t=>{if(this._shouldHandlePointerEvent(t))if(this._abortSnapping(),this._activePointerId=null,this._addVertexOnPointerUp){if(!this._clickEnabled)return 1===this.vertices.length&&this.vertices.pop(),void this._drawCompleteHandler(t);this._vertexAddHandler(t)}else{const s="touch"===t.pointerType;this._updateCursor(t.native,s)}}),d.TOOL),this.view.on("drag",(t=>{this._dragEnabled&&s(this._activePointerId)&&!this._panEnabled&&t.stopPropagation()}),d.TOOL),this.view.on("drag",["Shift"],(t=>{t.stopPropagation()}),d.TOOL),this.view.on("double-click",(t=>{t.stopPropagation(),this._drawCompleteHandler(t)}),d.TOOL),this.view.on("double-click",["Control"],(t=>{t.stopPropagation(),this._drawCompleteHandler(t)}),d.TOOL),this.view.on("key-down",(t=>{const{key:s,repeat:o}=t;s===u.vertexAdd&&!o&&this._cursorScreenPoint?(t.stopPropagation(),this._abortSnapping(),this._vertexAddHandler(t)):s!==u.complete||o?s!==u.undo||this.interactiveUndoDisabled||o?s!==u.redo||this.interactiveUndoDisabled||o?s!==u.pan||o||(t.stopPropagation(),this._panEnabled=!0):(t.stopPropagation(),this.redo()):(t.stopPropagation(),this.undo()):(t.stopPropagation(),this._drawCompleteHandler(t))}),d.TOOL),this.view.on("key-up",(t=>{t.key===u.pan&&(t.stopPropagation(),this._panEnabled=!1)}),d.TOOL)],this._viewHandlesKey)}_addUndoRedoHandles(){this._removeUndoRedoHandles(),this._handles.add([this._editGeometryOperations.on("vertex-remove",(t=>{if(this.notifyChange("vertices"),"undo"===t.operation){const o=this._nativeEventHistory.undoStack.pop();this._nativeEventHistory.redoStack.push(o);const e=[...this._committedVertices];s(this._stagedVertex)&&e.push(this._coordinateHelper.pointToArray(this._stagedVertex)),this.emit("undo",new m(this.view,o,t.vertices[0].index,e))}})),this._editGeometryOperations.on("vertex-add",(t=>{if(this.notifyChange("vertices"),"apply"===t.operation){const t=this._nativeEventHistory.undoStack[this._nativeEventHistory.undoStack.length],s=this._committedVertices.length-1,o=new l(this.view,t,s,this.vertices);this.emit("vertex-add",o),o.defaultPrevented&&(this._popVertexOnPointerMove=!0)}else if("redo"===t.operation){const o=this._nativeEventHistory.redoStack.pop();this._nativeEventHistory.undoStack.push(o);const e=[...this._committedVertices];s(this._stagedVertex)&&e.push(this._coordinateHelper.pointToArray(this._stagedVertex)),this.emit("redo",new l(this.view,o,t.vertices[0].index,e))}}))],this._undoRedoHandlesKey)}_removeViewHandles(){this._handles.remove(this._viewHandlesKey)}_removeUndoRedoHandles(){this._handles.remove(this._undoRedoHandlesKey)}_addDrawTool(){this._drawTool=new a({view:this.view,elevationInfo:this.elevationInfo,hasZ:this.hasZ,geometryType:"polygon",mode:this.mode}),this.view.addAndActivateTool(this._drawTool),this._drawTool.on("vertex-add",(t=>{1===t.vertices.length&&this.emit("vertex-add",new l(this.view,null,t.vertices[0].vertexIndex,this._drawTool.getVertexCoords()))})),this._drawTool.on("cursor-update",(t=>{1===t.vertices.length&&this.emit("cursor-update",new h(this.view,null,t.vertices[0].vertexIndex,this._drawTool.getVertexCoords()))})),this._drawTool.on("complete",(t=>{this.emit("draw-complete",new c(null,this._drawTool.getVertexCoords())),this._removeDrawTool()}))}_removeDrawTool(){this._handles.remove(this._drawToolHandlesKey),this.view.tools.remove(this._drawTool),this._drawTool=o(this._drawTool)}_addVertex(t,s){const o=this._coordinateHelper.arrayToVector(t);if(this._isDuplicateOfLastVertex(o))return;this._lastVertexUnsnapped=this._stagedVertexUnsnapped,this._popCursorVertex(),this._editGeometryOperations.appendVertex(o);const e=s||new Event("placeholder");this._nativeEventHistory.undoStack.push(e)}_updateCursor(t,o=!1){if(this._popCursorVertex(),!this._cursorScreenPoint)return;const e=this.getCoordsAndPointFromScreenPoint(this._cursorScreenPoint);s(e)&&!o&&this._pushCursorVertex(e.vertex,(()=>this.emit("cursor-update",new h(this.view,t,this._activeComponent.vertices.length,this.vertices,s(this._stagedVertex)?new y(this._stagedVertex):null))))}_completeDrawing(t){if(this._activePointerId=null,this._popCursorVertex(),this._committedVertices.length<3)return;this._abortSnapping(),s(this._snappingManager)&&this._snappingManager.doneSnapping();const o=new c(t,this.vertices);this.emit("draw-complete",o),o.defaultPrevented||this._removeViewHandles()}};t([e()],k.prototype,"_dragEnabled",null),t([e()],k.prototype,"_clickEnabled",null),t([e({type:p})],k.prototype,"mode",void 0),k=t([i("esri.views.draw.PolygonDrawAction")],k);export{k as PolygonDrawAction};
