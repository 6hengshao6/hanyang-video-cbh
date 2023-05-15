// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ../../../properties/defaultUnit ./AnalysisView3D ./interfaces ./DirectLineMeasurement/DirectLineMeasurementController ./DirectLineMeasurement/DirectLineMeasurementVisualization".split(" "),function(g,
b,a,h,c,u,v,w,l,m,n,p,q,r){a=function(f){function e(d){d=t.call(this,d);d.type="direct-line-measurement-view-3d";d.analysis=null;d.result=null;d.measurementMode=p.MeasurementMode.Auto;d.elevationAlignedStartPoint=null;d.elevationAlignedEndPoint=null;return d}g._inherits(e,f);var t=g._createSuper(e);f=e.prototype;f.initialize=function(){const d=this.view,k=this.analysis;this._analysisVisualization=new r.DirectLineMeasurementVisualization({view:d,analysis:k,analysisView:this});this._analysisController=
new q.DirectLineMeasurementController({view:d,analysis:k,viewData:this})};f.destroy=function(){this._analysisController=h.destroyMaybe(this._analysisController);this._analysisVisualization=h.destroyMaybe(this._analysisVisualization)};g._createClass(e,[{key:"updating",get:function(){return!!this._analysisVisualization?.loadingMessages}},{key:"viewMode",get:function(){return this._analysisVisualization.viewMode}},{key:"actualVisualizedMeasurement",get:function(){return this._analysisVisualization.actualVisualizedMeasurement}},
{key:"visualElementOrientation",get:function(){return this._analysisVisualization.visualElementOrientation},set:function(d){this._analysisVisualization.visualElementOrientation=d}},{key:"allowVisualElementsOrientationChange",get:function(){return this._analysisVisualization.allowVisualElementsOrientationChange},set:function(d){this._analysisVisualization.allowVisualElementsOrientationChange=d}},{key:"triangleCollapseRatioThreshold",get:function(){return this._analysisVisualization.triangleCollapseRatioThreshold},
set:function(d){this._analysisVisualization.triangleCollapseRatioThreshold=d}},{key:"directLabelText",get:function(){return this._analysisVisualization.labels.direct?.text??""}},{key:"horizontalLabelText",get:function(){return this._analysisVisualization.labels.horizontal?.text??""}},{key:"verticalLabelText",get:function(){return this._analysisVisualization.labels.vertical?.text??""}},{key:"unit",get:function(){return h.unwrapOr(this.analysis.unit,this._defaultUnit)}},{key:"testData",get:function(){return this.destroyed?
{labels:null,stripeLength:null,visualization:null,controller:null}:{...this._analysisVisualization?.testData,visualization:this._analysisVisualization,controller:this._analysisController}}}]);return e}(n.AnalysisView3D(a));b.__decorate([c.property()],a.prototype,"updating",null);b.__decorate([c.property({readOnly:!0})],a.prototype,"type",void 0);b.__decorate([c.property({constructOnly:!0,nonNullable:!0})],a.prototype,"analysis",void 0);b.__decorate([c.property()],a.prototype,"result",void 0);b.__decorate([c.property()],
a.prototype,"measurementMode",void 0);b.__decorate([c.property()],a.prototype,"elevationAlignedStartPoint",void 0);b.__decorate([c.property()],a.prototype,"elevationAlignedEndPoint",void 0);b.__decorate([c.property({readOnly:!0})],a.prototype,"viewMode",null);b.__decorate([c.property({readOnly:!0})],a.prototype,"actualVisualizedMeasurement",null);b.__decorate([c.property()],a.prototype,"visualElementOrientation",null);b.__decorate([c.property()],a.prototype,"allowVisualElementsOrientationChange",
null);b.__decorate([c.property()],a.prototype,"triangleCollapseRatioThreshold",null);b.__decorate([c.property({readOnly:!0})],a.prototype,"directLabelText",null);b.__decorate([c.property({readOnly:!0})],a.prototype,"horizontalLabelText",null);b.__decorate([c.property({readOnly:!0})],a.prototype,"verticalLabelText",null);b.__decorate([c.property()],a.prototype,"_analysisVisualization",void 0);b.__decorate([c.property()],a.prototype,"_analysisController",void 0);b.__decorate([c.property()],a.prototype,
"unit",null);b.__decorate([c.property(m.defaultUnitPropertyMetadata)],a.prototype,"_defaultUnit",void 0);return a=b.__decorate([l.subclass("esri.views.3d.analysis.DirectLineMeasurementAnalysisView3D")],a)});