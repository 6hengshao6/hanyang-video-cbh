// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Graphic ../../core/Accessor ../../core/Handles ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../../geometry/Extent ../../geometry/Point ../../geometry/Polyline ../../geometry/projection ../../layers/GraphicsLayer ../../rest/networks/synthesizeAssociationGeometries ../../rest/networks/support/SynthesizeAssociationGeometriesParameters ../../symbols/CIMSymbol ../../symbols/SimpleLineSymbol ../../views/draw/support/layerUtils".split(" "),
function(q,d,l,c,w,x,e,F,G,H,y,z,t,m,n,A,B,C,D,u,p){c=function(f){function h(a){a=E.call(this,a);a._handles=new w;a._internalArrowsLayerConnectivity=a._createInternalGraphicsLayer("Connectivity Associations - Arrows (Internal)");a._internalArrowsLayerStructuralAttachment=a._createInternalGraphicsLayer("Structural Attachment Associations - Arrows (Internal)");a._internalGraphicsLayerConnectivity=a._createInternalGraphicsLayer("Connectivity Associations (Internal)");a._internalGraphicsLayerStructuralAttachment=
a._createInternalGraphicsLayer("Structural Attachment Associations (Internal)");a.connectivityAssociationsLineSymbol=new u({style:"short-dash",width:2,color:[190,159,159,1]});a.gdbVersion="sde.DEFAULT";a.maxAllowableAssociations=250;a.maxAllowableAssociationsExceeded=!1;a.moment=null;a.noAssociationsFound=!1;a.showArrowsConnectivity=!1;a.showArrowsStructuralAttachment=!1;a.structuralAttachmentAssociationsLineSymbol=new u({style:"short-dash",width:2,color:[159,190,159,1]});return a}q._inherits(h,f);
var E=q._createSuper(h);f=h.prototype;f.initialize=function(){this._handles.add([x.watch(()=>this.view,a=>{a&&(p.addUniqueLayer(a,this._internalGraphicsLayerConnectivity),p.addUniqueLayer(a,this._internalArrowsLayerConnectivity),p.addUniqueLayer(a,this._internalGraphicsLayerStructuralAttachment),p.addUniqueLayer(a,this._internalArrowsLayerStructuralAttachment));this._internalGraphicsLayerConnectivity.visible=this.includeConnectivityAssociations;this._internalGraphicsLayerStructuralAttachment.visible=
this.includeStructuralAttachmentAssociations})])};f.destroy=function(){this.utilityNetwork=this.view=null;this._removeInternalGraphicsLayers()};f.removeAssociations=function(){this._internalGraphicsLayerConnectivity.removeAll();this._internalGraphicsLayerStructuralAttachment.removeAll();this._internalArrowsLayerConnectivity.removeAll();this._internalArrowsLayerStructuralAttachment.removeAll()};f.showAssociations=async function(){if(this.includeConnectivityAssociations||this.includeStructuralAttachmentAssociations){this._internalGraphicsLayerConnectivity.visible=
this.includeConnectivityAssociations;this._internalGraphicsLayerStructuralAttachment.visible=this.includeStructuralAttachmentAssociations;this._internalArrowsLayerConnectivity.visible=this.showArrowsConnectivity&&this.includeConnectivityAssociations;this._internalArrowsLayerStructuralAttachment.visible=this.showArrowsStructuralAttachment&&this.includeStructuralAttachmentAssociations;this.maxAllowableAssociationsExceeded=!1;this.removeAssociations();n.isLoaded()||await n.load();var a=this.utilityNetwork.spatialReference,
g=n.project(new t({x:this.view?.extent.xmin,y:this.view?.extent.ymin,spatialReference:this.view?.spatialReference}),a),k=n.project(new t({x:this.view?.extent.xmax,y:this.view?.extent.ymax,spatialReference:this.view?.spatialReference}),a);a=new z({xmin:g.x,ymin:g.y,xmax:k.x,ymax:k.y,spatialReference:a});a=new C({returnConnectivityAssociations:this.includeConnectivityAssociations,returnAttachmentAssociations:this.includeStructuralAttachmentAssociations,extent:a,outSpatialReference:this.utilityNetwork.spatialReference,
maxGeometryCount:this.maxAllowableAssociations,gdbVersion:this.gdbVersion,moment:this.moment});a=await B.synthesizeAssociationGeometries(this.utilityNetwork.networkServiceUrl,a);g=[];k=[];var r=[],v=[];if(a){if(!0===a.maxGeometryCountExceeded){this.maxAllowableAssociationsExceeded=!0;return}if(0===a.associations.length){this.noAssociationsFound=!0;return}this.noAssociationsFound=this.maxAllowableAssociationsExceeded=!1;g=a.associations.filter(b=>"connectivity"===b.associationType).map(b=>{b=new m({paths:b.geometry.paths,
spatialReference:b.geometry.spatialReference});return new l({geometry:b,symbol:this.connectivityAssociationsLineSymbol})});k=a.associations.filter(b=>"connectivity"===b.associationType).map(b=>{b=new m({paths:b.geometry.paths,spatialReference:b.geometry.spatialReference});return new l({geometry:b,symbol:this._getCIMSymbolArrows(this.connectivityAssociationsLineSymbol.color)})});r=a.associations.filter(b=>"attachment"===b.associationType).map(b=>{b=new m({paths:b.geometry.paths,spatialReference:b.geometry.spatialReference});
return new l({geometry:b,symbol:this.structuralAttachmentAssociationsLineSymbol})});v=a.associations.filter(b=>"attachment"===b.associationType).map(b=>{b=new m({paths:b.geometry.paths,spatialReference:b.geometry.spatialReference});return new l({geometry:b,symbol:this._getCIMSymbolArrows(this.structuralAttachmentAssociationsLineSymbol.color)})})}0<g.length&&(this._internalGraphicsLayerConnectivity.addMany(g),this._internalArrowsLayerConnectivity.addMany(k));0<r.length&&(this._internalGraphicsLayerStructuralAttachment.addMany(r),
this._internalArrowsLayerStructuralAttachment.addMany(v))}else this.removeAssociations()};f._createInternalGraphicsLayer=function(a){return new A({listMode:"hide",internal:!0,title:a})};f._getCIMSymbolArrows=function(a){return new D({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,size:6,markerPlacement:{type:"CIMMarkerPlacementAtExtremities",extremityPlacement:"JustEnd",angleToLine:!0},frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",
geometry:{rings:[[[-18,-5.47],[-18,5.6],[1.96,-.03],[-18,-5.47]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:a}]}}]}]}}})};f._removeInternalGraphicsLayers=function(){this._internalGraphicsLayerConnectivity&&this._internalGraphicsLayerStructuralAttachment&&this.view&&this.view.map&&(this.view.map.remove(this._internalGraphicsLayerConnectivity),this.view.map.remove(this._internalGraphicsLayerStructuralAttachment),this.view.map.remove(this._internalArrowsLayerConnectivity),
this.view.map.remove(this._internalArrowsLayerStructuralAttachment))};q._createClass(h,[{key:"includeConnectivityAssociations",set:function(a){this._set("includeConnectivityAssociations",a);this._internalGraphicsLayerConnectivity.visible=a;this._internalArrowsLayerConnectivity.visible=a}},{key:"includeStructuralAttachmentAssociations",set:function(a){this._set("includeStructuralAttachmentAssociations",a);this._internalGraphicsLayerStructuralAttachment.visible=a;this._internalArrowsLayerStructuralAttachment.visible=
a}},{key:"state",get:function(){return this.view?.ready?"ready":"loading"}},{key:"view",get:function(){return this._get("view")},set:function(a){this._set("view",a)}}]);return h}(c);d.__decorate([e.property()],c.prototype,"connectivityAssociationsLineSymbol",void 0);d.__decorate([e.property()],c.prototype,"gdbVersion",void 0);d.__decorate([e.property({type:Boolean,value:!0})],c.prototype,"includeConnectivityAssociations",null);d.__decorate([e.property({type:Boolean,value:!0})],c.prototype,"includeStructuralAttachmentAssociations",
null);d.__decorate([e.property()],c.prototype,"maxAllowableAssociations",void 0);d.__decorate([e.property()],c.prototype,"maxAllowableAssociationsExceeded",void 0);d.__decorate([e.property()],c.prototype,"moment",void 0);d.__decorate([e.property()],c.prototype,"noAssociationsFound",void 0);d.__decorate([e.property()],c.prototype,"showArrowsConnectivity",void 0);d.__decorate([e.property()],c.prototype,"showArrowsStructuralAttachment",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"state",
null);d.__decorate([e.property()],c.prototype,"structuralAttachmentAssociationsLineSymbol",void 0);d.__decorate([e.property()],c.prototype,"utilityNetwork",void 0);d.__decorate([e.property({value:null})],c.prototype,"view",null);return c=d.__decorate([y.subclass("esri.widgets.UtilityNetworkAssociations.UtilityNetworkAssociationsViewModel")],c)});