/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{d as s,a as e,i as o,u as i}from"../../chunks/maybe.js";import{watch as r,initial as n,whenOnce as p}from"../../core/reactiveUtils.js";import{w as m,z as a}from"../../chunks/unitUtils.js";import{property as l}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as c}from"../../core/accessorSupport/decorators/subclass.js";import{project as u,load as h}from"../../geometry/projection.js";import{d as j}from"../../chunks/defaultUnit.js";import"../../geometry.js";import d from"../../Graphic.js";import"../../intl.js";import"../../symbols.js";import{a as y,g as k,c as g,b}from"../../chunks/analysisThemeUtils.js";import{f,c as v,a as w}from"../../chunks/unitFormatUtils.js";import{geodesicLength as S,geodesicDensify as _,planarLength as D}from"../../geometry/geometryEngine.js";import{isSupported as L,geodesicLengths as U,geodesicDensify as M}from"../../geometry/support/geodesicUtils.js";import C from"../../layers/GraphicsLayer.js";import{V as I}from"../../chunks/ViewingMode.js";import P from"../../views/draw/Draw.js";import{I as T,c as A,a as x,d as O}from"../../chunks/dragEventPipeline.js";import{G as E}from"../../chunks/GraphicManipulator.js";import{f as R}from"../../chunks/messages.js";import{o as F}from"../../chunks/locale.js";import G from"../../geometry/Point.js";import V from"../../symbols/CIMSymbol.js";import z from"../../symbols/TextSymbol.js";import B from"../../symbols/Font.js";import H from"../../symbols/SimpleMarkerSymbol.js";import W from"../../geometry/Polyline.js";import N from"../../geometry/SpatialReference.js";import{I as q}from"../../chunks/InteractiveToolViewModel.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../core/lang.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/handleUtils.js";import"../../chunks/watch.js";import"../../chunks/ArrayPool.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/tracking.js";import"../../chunks/jsonMap.js";import"../../chunks/Ellipsoid.js";import"../../chunks/metadata.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/vec4.js";import"../../chunks/SimpleObservable.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/mat4.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../geometry/support/webMercatorUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../chunks/pe.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../chunks/getDefaultUnitForView.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../PopupTemplate.js";import"../../core/Clonable.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/number.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols/Symbol.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils2.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils3.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../chunks/Symbol3DAnchorPosition2D.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../views/support/colorUtils.js";import"../../chunks/byteSizeEstimations.js";import"../../chunks/Cyclical.js";import"../../chunks/geometryEngineBase.js";import"../../chunks/hydrated.js";import"../../chunks/GraphicsCollection.js";import"../../core/HandleOwner.js";import"../../chunks/WatchUpdatingTracking.js";import"../../layers/Layer.js";import"../../layers/mixins/BlendLayer.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../../chunks/mat4f32.js";import"../../chunks/_commonjsHelpers.js";import"../../layers/mixins/ScaleRangeLayer.js";import"../../chunks/ElevationInfo.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/lengthUtils.js";import"../../views/draw/MultipointDrawAction.js";import"../../views/draw/DrawAction.js";import"../../chunks/dehydratedFeatures.js";import"../../chunks/quantizationUtils.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/fieldType.js";import"../../chunks/SnappingVisualizer2D.js";import"../../chunks/vec2.js";import"../../chunks/vec2f64.js";import"../../chunks/enums.js";import"../../chunks/settings.js";import"../../chunks/Settings2.js";import"../../chunks/SnappingContext.js";import"../../chunks/RightAngleSnappingHint.js";import"../../chunks/LineSnappingHint.js";import"../../chunks/PointSnappingHint.js";import"../../chunks/EditGeometryOperations.js";import"../../chunks/vec4f64.js";import"../../chunks/plane.js";import"../../chunks/vector.js";import"../../chunks/ray.js";import"../../chunks/mat3f64.js";import"../../chunks/mat4f64.js";import"../../chunks/quatf64.js";import"../../chunks/mathUtils2.js";import"../../chunks/geometry2dUtils.js";import"../../chunks/SnappingOperation.js";import"../../chunks/Scheduler.js";import"../../chunks/ObservableValue.js";import"../../chunks/debugFlags.js";import"../../chunks/DrawEvents.js";import"../../chunks/InputManager.js";import"../../chunks/Queue.js";import"../../chunks/PropertiesPool.js";import"../../chunks/keybindings.js";import"../../chunks/screenUtils2.js";import"../../views/draw/PointDrawAction.js";import"../../chunks/DrawTool.js";import"../../chunks/elevationInfoUtils.js";import"../../chunks/drawSurfaces.js";import"../../chunks/dehydratedFeatureComparison.js";import"../../views/interactive/sketch/SketchLabelOptions.js";import"../../views/interactive/sketch/SketchTooltipOptions.js";import"../../chunks/SnappingDragPipelineStep.js";import"../../chunks/hydratedFeatures.js";import"../../chunks/snappingUtils.js";import"../../chunks/interfaces5.js";import"../../chunks/drawUtils.js";import"../../views/draw/PolygonDrawAction.js";import"../../views/draw/PolylineDrawAction.js";import"../../views/draw/SegmentDrawAction.js";import"../../chunks/surfaceCoordinateSystems.js";import"../../chunks/mat2d.js";import"../../chunks/mat2df64.js";import"../../chunks/quat.js";import"../../chunks/defaults.js";import"../../chunks/defaultsJSON.js";import"../../chunks/drapedUtils.js";const Q=1e5;let J=class extends T{constructor(t){super(t),this._drawActive=!1,this._measurementLayer=new C({internal:!0,listMode:"hide",visible:!1}),this._manipulatorLayer=new C({internal:!0,listMode:"hide",visible:!1}),this._vertices=[],this.geodesicDistanceThreshold=1e5,this.measurement=null,this.measurementLabel=null}initialize(){R("esri/core/t9n/Units").then((t=>{this.messages=t})),this.addHandles(F((async()=>{this.messages=await R("esri/core/t9n/Units")})));const t=this.view;this._draw=new P({view:t}),t.map.addMany([this._measurementLayer,this._manipulatorLayer]),t.focus(),this.addHandles(r((()=>[this.unit,this.geodesicDistanceThreshold,this.messages]),(()=>{this._updatePolylines()}),n))}destroy(){const{map:t}=this.view;this._draw.view=null,this._draw=s(this._draw),t.removeMany([this._measurementLayer,this._manipulatorLayer]),this._measurementLayer.removeAll(),this._manipulatorLayer.removeAll(),this._set("measurement",null),this._set("measurementLabel",null),this._measurementLayer=s(this._measurementLayer),this._manipulatorLayer=s(this._manipulatorLayer),this._resetVertices()}get cursor(){return this._drawActive?"crosshair":null}set editable(t){this._set("editable",t),t||this._draw.reset()}onActivate(){this._drawActive||0!==this._vertices.length||this._startSketch()}onShow(){this._measurementLayer.visible=!0,this._manipulatorLayer.visible=!0}onHide(){this._measurementLayer.visible=!1,this._manipulatorLayer.visible=!1}reset(){this._resetVertices(),this._measurementLayer.removeAll(),this._set("measurement",null),this._set("measurementLabel",null),this._draw.reset(),this._drawActive=!1,this._updateSketch([])}_resetVertices(){for(const{handle:t}of this._vertices)t.remove();this._vertices=[]}_startSketch(){this._drawActive=!0;const t=this._draw.create("polyline",{mode:"click"});t.on(["vertex-add","vertex-update","vertex-remove","cursor-update","undo","redo"],(t=>this._updateSketch(t.vertices))),t.on("draw-complete",(()=>{this._stopSketch()}))}_stopSketch(){this.manipulators.forEach((({manipulator:t})=>{t.interactive=!0})),this._drawActive=!1,this.finishToolCreation()}_updateSketch(t){const{spatialReference:s}=this.view;for(;this._vertices.length>t.length;){const{handle:t,manipulator:s}=this._vertices.pop();t.remove(),this.manipulators.remove(s)}for(let e=this._vertices.length;e<t.length;e++){const[o,i]=t[e],r=K(new G({x:o,y:i,spatialReference:s}),this.view,this._manipulatorLayer);this.manipulators.add(r);const n=A(r,((t,s)=>{s.next(x(this.view)).next(O(t.graphic,I.Local)).next((()=>{const s=t.graphic.geometry;this._vertices[e].coord=[s.x,s.y],this._updatePolylines()}))}));this._vertices.push({manipulator:r,coord:[o,i],handle:n})}const o=this._vertices.length-1,i=this._vertices[o],[r,n]=t[o];i.coord[0]===r&&i.coord[1]===n||(i.coord=[r,n],i.manipulator.graphic.geometry=new G({x:r,y:n,spatialReference:s}));const p=this._drawActive?this._vertices[o].manipulator:null;this.manipulators.forEach((({manipulator:t})=>{t.interactive=e(p)||t!==p})),this._updatePolylines()}_updatePolylines(){if(this._vertices.length<2)return void this._measurementLayer.removeAll();const t=this._vertices.map((({coord:t})=>t)),{measurement:s,drawing:e,original:o}=function(t,s,e){const o=new W({paths:[t],spatialReference:s});let i,r;if(s.isGeographic)if(L(s))i=U([o],"meters")[0],r=M(o,Q);else{const t=u(o,N.WGS84),e=M(t,Q);i=U([t],"meters")[0],r=u(e,s)}else if(s.isWebMercator)i=S(o,"meters"),r=_(o,Q,"meters");else{const t=D(o,"meters");if(t>=e){const t=u(o,N.WGS84),e=M(t,Q);i=U([t],"meters")[0],r=u(e,s)}else i=t,r=o}return{measurement:{geometry:r,length:i},original:o,drawing:r}}(t,this.view.spatialReference,this.geodesicDistanceThreshold);this._set("measurement",s);const i=function(t,s,e){if(!s||!t)return"";switch(e){case"metric":return w(t,s.length,"meters");case"imperial":return v(t,s.length,"meters");default:return f(t,m(s.length,"meters",e),e)}}(this.messages,s,this.unit);let r,n;this._set("measurementLabel",i);const{graphics:p}=this._measurementLayer;2===p.length?(r=p.at(0),n=p.at(1)):(r=new d({symbol:new V({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",effects:[{type:"CIMGeometricEffectDashes",dashTemplate:[14,12],lineDashEnding:"FullGap",controlPointEnding:"NoConstraint"}],enable:!0,capStyle:"Butt",joinStyle:"Round",width:3.5,color:y().toArray()},{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",width:5,color:k().toArray()}]}}})}),n=new d({symbol:new z({color:g(),haloColor:b(.5),haloSize:2,font:new B({size:14,family:"sans-serif"})})}),p.removeAll(),p.addMany([r,n])),r.geometry=e,n.geometry=o.extent?.center,n.symbol.text=i}};function K(t,s,e){const o=k(.5),i={type:"simple-line",width:0},r=new H({style:"circle",color:o,size:8,outline:i}),n=new H({style:"circle",color:o,size:12,outline:i}),p=new d({geometry:t,symbol:r});return new E({view:s,layer:e,graphic:p,focusedSymbol:n})}t([l()],J.prototype,"_drawActive",void 0),t([l({readOnly:!0})],J.prototype,"cursor",null),t([l({value:!0})],J.prototype,"editable",null),t([l({type:Number})],J.prototype,"geodesicDistanceThreshold",void 0),t([l({readOnly:!0})],J.prototype,"measurement",void 0),t([l({readOnly:!0})],J.prototype,"measurementLabel",void 0),t([l()],J.prototype,"messages",void 0),t([l()],J.prototype,"unit",void 0),t([l({constructOnly:!0})],J.prototype,"view",void 0),J=t([c("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DTool")],J);let X=class extends q{constructor(t){super(t),this.supportedViewType="2d",this.unsupportedErrorMessage="DistanceMeasurement2DViewModel is only supported in 2D views.",this.geodesicDistanceThreshold=1e5}initialize(){this.addHandles([r((()=>i(this.view)?.spatialReference),(()=>this.clear())),r((()=>this.unit),(t=>{o(this.tool)&&(this.tool.unit=t)}),n),r((()=>this.geodesicDistanceThreshold),(t=>{o(this.tool)&&(this.tool.geodesicDistanceThreshold=t)}),n)])}get measurement(){return o(this.tool)?this.tool.measurement:null}get measurementLabel(){return o(this.tool)?this.tool.measurementLabel:null}get state(){return this.disabled||e(this.view)||(t=this.view?.spatialReference,null==t)?"disabled":o(this.tool)&&this.measurement?this.tool.active?"measuring":"measured":"ready";var t}get unit(){return this._validateUnit(this.defaultUnit)}set unit(t){this._overrideIfSome("unit",this._validateUnit(t))}get unitOptions(){return a}set unitOptions(t){this._overrideIfSome("unitOptions",this._validateUnits(t))}async start(){const t=this.view;o(t)&&(await p((()=>t.ready)),function(t){if(!t)return!1;const{isGeographic:s,isWebMercator:e,isWGS84:o}=t;return s&&!o&&!L(t)||!s&&!e}(t.spatialReference)&&await h()),this.createTool({interactive:!0})}clear(){this.removeTool()}constructTool(){return new J({view:i(this.view),visible:this.visible,geodesicDistanceThreshold:this.geodesicDistanceThreshold,unit:this.unit})}_validateUnit(t){const{unitOptions:s,defaultUnit:e}=this;return null!=t&&s.includes(t)?t:s.includes(e)?e:s.length>0?s[0]:e}_validateUnits(t){if(null==t)return[];const s=t.filter((t=>a.includes(t)));return 0===s.length?a.slice():s}};t([l(j)],X.prototype,"defaultUnit",void 0),t([l({type:Number})],X.prototype,"geodesicDistanceThreshold",void 0),t([l({readOnly:!0})],X.prototype,"measurement",null),t([l({readOnly:!0})],X.prototype,"measurementLabel",null),t([l({readOnly:!0})],X.prototype,"state",null),t([l({type:String})],X.prototype,"unit",null),t([l({type:[String]})],X.prototype,"unitOptions",null),X=t([c("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DViewModel")],X);const Y=X;export{Y as default};