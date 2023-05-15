// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Collection ../../core/lang ../../core/Logger ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../geometry/Extent ../../geometry/HeightModelInfo ../../geometry/SpatialReference ../support/arcgisLayerUrl ../support/commonProperties ../support/EditFieldsInfo ../support/FeatureIndex ../support/featureLayerUtils ../support/GeometryFieldsInfo ../support/LayerFloorInfo ../support/Relationship ../support/serviceCapabilitiesUtils ../../time/TimeReference".split(" "),
function(p,n,c,q,r,x,d,J,g,y,z,A,B,t,u,l,C,v,m,D,E,F,G,w){p.FeatureLayerBase=b=>{b=function(f){function h(){var a=H.apply(this,arguments);a.capabilities=null;a.copyright=null;a.dateFieldsTimeReference=null;a.datesInUnknownTimezone=!1;a.displayField=null;a.definitionExpression=null;a.editFieldsInfo=null;a.editingInfo=null;a.elevationInfo=null;a.floorInfo=null;a.fullExtent=null;a.gdbVersion=null;a.geometryFieldsInfo=null;a.geometryType=null;a.hasM=void 0;a.hasZ=void 0;a.heightModelInfo=null;a.historicMoment=
null;a.isTable=!1;a.layerId=void 0;a.minScale=0;a.maxScale=0;a.globalIdField=null;a.objectIdField=null;a.preferredTimeReference=null;a.relationships=null;a.sourceJSON=null;a.returnM=void 0;a.returnZ=void 0;a.serviceDefinitionExpression=null;a.serviceItemId=null;a.spatialReference=t.WGS84;a.subtypeField=null;a.trackIdField=null;a.indexes=new (q.ofType(v.FeatureIndex));a.version=void 0;return a}n._inherits(h,f);var H=n._createSuper(h);f=h.prototype;f.readCapabilitiesFromService=function(a,e){return G.getFeatureLayerCapabilities(e,
this.url)};f.readEditingInfo=function(a,e){({editingInfo:a}=e);return a?{lastEditDate:null!=a.lastEditDate?new Date(a.lastEditDate):null}:null};f.readIsTableFromService=function(a,e){return"Table"===e.type};f.readMinScale=function(a,e){return e.effectiveMinScale||a||0};f.readMaxScale=function(a,e){return e.effectiveMaxScale||a||0};f.readGlobalIdFieldFromService=function(a,e){return m.readGlobalIdField(e)};f.readObjectIdFieldFromService=function(a,e){return m.readObjectIdField(e)};f.readServiceDefinitionExpression=
function(a,e){return e.definitionQuery||e.definitionExpression};f.writeUrl=function(a,e,k,I){u.writeUrlWithLayerId(this,a,null,e,I)};f.readVersion=function(a,e){return m.readVersion(e)};n._createClass(h,[{key:"effectiveCapabilities",get:function(){var a=this.capabilities;if(!a)return null;a=r.clone(a);const {operations:e,editing:k}=a;if(this.sourceJSON?.isMultiServicesView)return this.userHasUpdateItemPrivileges&&(e.supportsQuery=!0),a;if(this.userHasUpdateItemPrivileges)return e.supportsAdd=e.supportsDelete=
e.supportsEditing=e.supportsQuery=e.supportsUpdate=k.supportsDeleteByOthers=k.supportsGeometryUpdate=k.supportsUpdateByOthers=!0,a;this.userHasFullEditingPrivileges&&e.supportsEditing&&(e.supportsAdd=e.supportsDelete=e.supportsUpdate=k.supportsGeometryUpdate=!0);return a}},{key:"url",set:function(a){a=u.sanitizeUrlWithLayerId({layer:this,url:a,nonStandardUrlAllowed:!0,logger:x.getLogger(this.declaredClass)});this._set("url",a.url);null!=a.layerId&&this._set("layerId",a.layerId)}}]);return h}(b);c.__decorate([d.property({readOnly:!0,
json:{read:!1,origins:{service:{read:{source:"advancedQueryCapabilities allowGeometryUpdates allowUpdateWithoutMValues archivingInfo capabilities datesInUnknownTimezone hasAttachments hasM hasZ maxRecordCount maxRecordCountFactor ownershipBasedAccessControlForFeatures standardMaxRecordCount supportedQueryFormats supportsAdvancedQueries supportsApplyEditsWithGlobalIds supportsAttachmentsByUploadId supportsAttachmentsResizing supportsCalculate supportsCoordinatesQuantization supportsExceedsLimitStatistics supportsFieldDescriptionProperty supportsQuantizationEditMode supportsRollbackOnFailureParameter supportsStatistics supportsTruncate supportsValidateSql tileMaxRecordCount useStandardizedQueries".split(" ")}}}}})],
b.prototype,"capabilities",void 0);c.__decorate([g.reader("service","capabilities")],b.prototype,"readCapabilitiesFromService",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"effectiveCapabilities",null);c.__decorate([d.property({type:String,json:{origins:{service:{read:{source:"copyrightText"}}}}})],b.prototype,"copyright",void 0);c.__decorate([d.property({type:w})],b.prototype,"dateFieldsTimeReference",void 0);c.__decorate([d.property({type:Boolean})],b.prototype,"datesInUnknownTimezone",
void 0);c.__decorate([d.property({type:String,json:{origins:{service:{read:{source:"displayField"}}}}})],b.prototype,"displayField",void 0);c.__decorate([d.property({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],b.prototype,"definitionExpression",void 0);c.__decorate([d.property({readOnly:!0,type:C})],b.prototype,"editFieldsInfo",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"editingInfo",void 0);
c.__decorate([g.reader("editingInfo")],b.prototype,"readEditingInfo",null);c.__decorate([d.property((()=>{const f=r.clone(l.elevationInfo),h=f.json.origins;h["web-map"]={read:!1,write:!1};h["portal-item"]={read:!1,write:!1};return f})())],b.prototype,"elevationInfo",void 0);c.__decorate([d.property({type:E,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],b.prototype,"floorInfo",void 0);c.__decorate([d.property({type:A,json:{origins:{service:{read:{source:"extent"}}}}})],
b.prototype,"fullExtent",void 0);c.__decorate([d.property()],b.prototype,"gdbVersion",void 0);c.__decorate([d.property({readOnly:!0,type:D,json:{read:{source:"geometryProperties"}}})],b.prototype,"geometryFieldsInfo",void 0);c.__decorate([d.property({type:"point polygon polyline multipoint multipatch mesh".split(" "),json:{origins:{service:{read:m.geometryTypeKebabDict.read}}}})],b.prototype,"geometryType",void 0);c.__decorate([d.property({type:Boolean,json:{origins:{service:{read:!0}}}})],b.prototype,
"hasM",void 0);c.__decorate([d.property({type:Boolean,json:{origins:{service:{read:!0}}}})],b.prototype,"hasZ",void 0);c.__decorate([d.property({readOnly:!0,type:B})],b.prototype,"heightModelInfo",void 0);c.__decorate([d.property({type:Date})],b.prototype,"historicMoment",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"isTable",void 0);c.__decorate([g.reader("service","isTable",["type"])],b.prototype,"readIsTableFromService",null);c.__decorate([d.property({type:Number,json:{origins:{service:{read:{source:"id"}},
"portal-item":{read:!1,write:{target:"id"}}},read:!1}})],b.prototype,"layerId",void 0);c.__decorate([d.property(l.minScale)],b.prototype,"minScale",void 0);c.__decorate([g.reader("service","minScale",["minScale","effectiveMinScale"])],b.prototype,"readMinScale",null);c.__decorate([d.property(l.maxScale)],b.prototype,"maxScale",void 0);c.__decorate([g.reader("service","maxScale",["maxScale","effectiveMaxScale"])],b.prototype,"readMaxScale",null);c.__decorate([d.property({type:String})],b.prototype,
"globalIdField",void 0);c.__decorate([g.reader("service","globalIdField",["globalIdField","fields"])],b.prototype,"readGlobalIdFieldFromService",null);c.__decorate([d.property({type:String})],b.prototype,"objectIdField",void 0);c.__decorate([g.reader("service","objectIdField",["objectIdField","fields"])],b.prototype,"readObjectIdFieldFromService",null);c.__decorate([d.property({type:w})],b.prototype,"preferredTimeReference",void 0);c.__decorate([d.property({type:[F],readOnly:!0})],b.prototype,"relationships",
void 0);c.__decorate([d.property()],b.prototype,"sourceJSON",void 0);c.__decorate([d.property({type:Boolean})],b.prototype,"returnM",void 0);c.__decorate([d.property({type:Boolean})],b.prototype,"returnZ",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"serviceDefinitionExpression",void 0);c.__decorate([g.reader("service","serviceDefinitionExpression",["definitionQuery","definitionExpression"])],b.prototype,"readServiceDefinitionExpression",null);c.__decorate([d.property({type:String,
readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],b.prototype,"serviceItemId",void 0);c.__decorate([d.property({type:t,json:{origins:{service:{read:{source:"extent.spatialReference"}}}}})],b.prototype,"spatialReference",void 0);c.__decorate([d.property({type:String,readOnly:!0,json:{origins:{service:{read:!0}}}})],b.prototype,"subtypeField",void 0);c.__decorate([d.property({type:String,json:{read:{source:"timeInfo.trackIdField"}}})],b.prototype,"trackIdField",void 0);c.__decorate([d.property({readOnly:!0,
json:{write:!1}})],b.prototype,"serverGens",void 0);c.__decorate([d.property({type:q.ofType(v.FeatureIndex),readOnly:!0})],b.prototype,"indexes",void 0);c.__decorate([d.property(l.url)],b.prototype,"url",null);c.__decorate([z.writer("url")],b.prototype,"writeUrl",null);c.__decorate([d.property({json:{origins:{service:{read:!0}},read:!1}})],b.prototype,"version",void 0);c.__decorate([g.reader("service","version","currentVersion capabilities drawingInfo hasAttachments htmlPopupType relationships timeInfo typeIdField types".split(" "))],
b.prototype,"readVersion",null);return b=c.__decorate([y.subclass("esri.layers.mixins.FeatureLayerBase")],b)};Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});