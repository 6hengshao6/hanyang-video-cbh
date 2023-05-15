// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../PopupTemplate ../../renderers/ClassBreaksRenderer ../../renderers/DictionaryRenderer ../../renderers/DotDensityRenderer ../../renderers/HeatmapRenderer ../../renderers/PieChartRenderer ../../renderers/Renderer ../../renderers/SimpleRenderer ../../renderers/UniqueValueRenderer ../../renderers/support/jsonUtils ../../renderers/support/types ../../core/maybe ../../core/workers/workers ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../../geometry/projection ../../geometry/support/spatialReferenceUtils ../Layer ../graphics/data/FeatureStore ../graphics/data/QueryEngine ../graphics/sources/support/clientSideDefaults ./KnowledgeGraphLayerDataManager ./KnowledgeGraphSubLayerBase ../mixins/BlendLayer ../mixins/FeatureReductionLayer ../mixins/RefreshableLayer ../mixins/ScaleRangeLayer ../support/Field ../support/fieldUtils ../../rest/support/FeatureSet ../../rest/support/Query ../../support/popupUtils ../../geometry/Extent ../../geometry/Polygon ../../geometry/Polyline ../../core/workers/RemoteClient ../../geometry/support/typeUtils".split(" "),
function(r,e,d,y,R,S,T,U,V,W,X,Y,t,z,A,Z,f,aa,ba,ca,B,n,p,C,D,E,q,u,F,G,H,I,J,w,K,L,l,M,x,N,O,P,k){d=function(h){function m(a){var b=Q.call(this,a);b.capabilities=q.createCapabilities(!1,!1);b.displayField="";b.geometryFieldName=null;b.hasM=!1;b.hasZ=!1;b.objectIdField=u.MOCK_OID_FIELD_NAME;b.popupTemplate=null;b.source={openPorts:()=>b.load().then(()=>{const c=new MessageChannel;new P(c.port1,{channel:c,client:{queryFeatures:(g,v={})=>{g=l.fromJSON(g);return b.queryFeaturesJSON(g,v)}}},()=>null);
return[c.port2]})};b.type="knowledge-graph-sublayer";if("link-chart"===a.parentCompositeLayer.type)b.geometryType="relationship"===a.graphType?"polyline":"point",b.geometryFieldName=u.MOCK_LAYOUT_GEOMETRY_FIELD_NAME;else if(a.parentCompositeLayer.dataManager.geographicLookup.get(a.objectType.name)?.geometryType&&"esriGeometryNull"!==a.parentCompositeLayer.dataManager.geographicLookup.get(a.objectType.name)?.geometryType){const c=a.parentCompositeLayer.dataManager.geographicLookup.get(a.objectType.name);
b.geometryFieldName=c?.name??null;b.geometryType=c?.geometryType?k.featureGeometryTypeKebabDictionary.fromJSON(c.geometryType):null;c?.name&&a.objectType.properties&&a.objectType.properties[c.name]?(b.hasM=a.objectType.properties[c.name].hasM,b.hasZ=a.objectType.properties[c.name].hasZ):(b.hasM=!1,b.hasZ=!1)}else b.geometryType=null;a.objectType.properties?.forEach(c=>{let g=c.fieldType;"esriFieldTypeOID"===g&&(g="esriFieldTypeInteger");b.fields.push(w.fromJSON({name:c.name,type:g,alias:c.alias,defaultValue:null,
editable:c.editable,nullable:c.nullable}))});b.fields.push(w.fromJSON({name:b.objectIdField,type:"esriFieldTypeString",alias:b.objectIdField,editable:!1}));a.parentCompositeLayer.dataManager.knowledgeGraph.dataModel?.spatialReference&&(b.spatialReference=a.parentCompositeLayer.dataManager.knowledgeGraph.dataModel.spatialReference);b.renderer="link-chart"===a.parentCompositeLayer.type?"relationship"===a.graphType?t.fromJSON(q.createDrawingInfo(k.featureGeometryTypeKebabDictionary.toJSON("polyline")).renderer):
t.fromJSON(q.createDrawingInfo(k.featureGeometryTypeKebabDictionary.toJSON("point")).renderer):t.fromJSON(q.createDrawingInfo(k.featureGeometryTypeKebabDictionary.toJSON(b.geometryType)).renderer);return b}r._inherits(m,h);var Q=r._createSuper(m);h=m.prototype;h.createPopupTemplate=function(a){return M.createPopupTemplate(this,a)};h.createQuery=function(){return new l({where:"1\x3d1",outFields:["*"]})};h.getField=function(a){for(let b=0;b<this.fields.length;b++)if(this.fields[b].name===a)return this.fields[b];
throw Error("Field not found");};h.getFieldDomain=function(a,b){return null};h.queryFeatures=async function(a,b){const {resolvedQuery:c,queryEngine:g}=await this._setupQueryObjects(a);a=L.fromJSON(await g.executeQuery(c.toJSON(),b?.signal));a.features.forEach(v=>{v.sourceLayer=this});return a};h.queryFeaturesJSON=async function(a,b){const {resolvedQuery:c,queryEngine:g}=await this._setupQueryObjects(a);return await g.executeQuery(c.toJSON(),b?.signal)};h.queryFeatureCount=async function(a,b){const {resolvedQuery:c,
queryEngine:g}=await this._setupQueryObjects(a);return g.executeQueryForCount(c.toJSON(),b?.signal)};h.queryExtent=async function(a={},b){const {resolvedQuery:c,queryEngine:g}=await this._setupQueryObjects({...a,returnGeometry:!0});a=await g.executeQueryForExtent(c.toJSON(),b?.signal);b=null!=a.extent?.xmin&&null!=a.extent?.xmax&&null!=a.extent?.ymin&&null!=a.extent?.ymax?new x(a.extent):new x;return{count:a.count,extent:b}};h.queryObjectIds=async function(a,b){a=l.from(a);if("link-chart"===this.parentCompositeLayer.type&&
this._cachedQueryEngine)var c=this._cachedQueryEngine;else c=await this.parentCompositeLayer.dataManager.getData(a,this,b),c=this.loadQueryEngine(c);return c.executeQueryForIds(a.toJSON(),b?.signal)};h.loadQueryEngine=function(a){var b=new D({geometryType:k.featureGeometryTypeKebabDictionary.toJSON(this.geometryType),hasM:this.hasM,hasZ:this.hasZ});b=new E.QueryEngine({fields:this.fields.map(c=>c.toJSON()),geometryType:k.featureGeometryTypeKebabDictionary.toJSON(this.geometryType),hasM:this.hasM,
hasZ:this.hasZ,objectIdField:this.objectIdField,spatialReference:this.spatialReference.toJSON(),timeInfo:null,featureStore:b});b.featureStore.addMany(a);return b};h.refreshCachedQueryEngine=async function(){const a=await this.parentCompositeLayer.dataManager.getData(new l({where:"1\x3d1",outFields:[u.MOCK_OID_FIELD_NAME]}),this);this._cachedQueryEngine=this.loadQueryEngine(a)};h._setupQueryObjects=async function(a,b){a=l.from(a);const c=A.unwrap(a.geometry);c&&!c.spatialReference?.isWGS84&&(await n.initializeProjection(c.spatialReference,
p.WGS84),a.geometry=c instanceof N?n.project(c,p.WGS84):c instanceof O?n.project(c,p.WGS84):n.project(c.extent,p.WGS84));"link-chart"===this.parentCompositeLayer.type&&this._cachedQueryEngine?b=this._cachedQueryEngine:(b=await this.parentCompositeLayer.dataManager.getData(a,this,b),b=this.loadQueryEngine(b));return{resolvedQuery:a,queryEngine:b}};r._createClass(m,[{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"renderer",set:function(a){K.fixRendererFields(a,this.fieldsIndex);
this._set("renderer",a)}}]);return m}(H.FeatureReductionLayer(F.KnowledgeGraphSubLayerBase(G.BlendLayer(J.ScaleRangeLayer(I.RefreshableLayer(C))))));e.__decorate([f.property()],d.prototype,"capabilities",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"defaultPopupTemplate",null);e.__decorate([f.property()],d.prototype,"definitionExpression",void 0);e.__decorate([f.property()],d.prototype,"displayField",void 0);e.__decorate([f.property()],d.prototype,"elevationInfo",void 0);e.__decorate([f.property()],
d.prototype,"geometryType",void 0);e.__decorate([f.property()],d.prototype,"geometryFieldName",void 0);e.__decorate([f.property()],d.prototype,"graphType",void 0);e.__decorate([f.property()],d.prototype,"hasM",void 0);e.__decorate([f.property()],d.prototype,"hasZ",void 0);e.__decorate([f.property()],d.prototype,"labelsVisible",void 0);e.__decorate([f.property()],d.prototype,"labelingInfo",void 0);e.__decorate([f.property()],d.prototype,"objectIdField",void 0);e.__decorate([f.property()],d.prototype,
"objectType",void 0);e.__decorate([f.property()],d.prototype,"parentCompositeLayer",void 0);e.__decorate([f.property({type:y,json:{name:"popupInfo",write:!0}})],d.prototype,"popupTemplate",void 0);e.__decorate([f.property({types:z.rendererTypes,json:{write:{target:"layerDefinition.drawingInfo.renderer"}}})],d.prototype,"renderer",null);e.__decorate([f.property()],d.prototype,"source",void 0);e.__decorate([f.property({json:{read:!1}})],d.prototype,"type",void 0);return d=e.__decorate([B.subclass("esri.layers.knowledgeGraph.KnowledgeGraphSubLayer")],
d)});