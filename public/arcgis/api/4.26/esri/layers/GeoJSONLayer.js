// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
require({cache:{"esri/layers/graphics/sources/GeoJSONSource":function(){define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../core/Error ../../../core/has ../../../core/Loadable ../../../core/Logger ../../../core/maybe ../../../core/promiseUtils ../../../core/workers/workers ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ./support/clientSideDefaults ../../../rest/support/FeatureSet ../../../geometry/Extent ../../../geometry/Polygon ../../../geometry/support/typeUtils".split(" "),
function(r,t,c,I,E,R,S,T,J,U,V,A,X,Y,F,K,d,L,G,e){const M=T.getLogger("esri.layers.graphics.sources.GeoJSONSource");r.GeoJSONSource=function(h){function B(){var a=N.apply(this,arguments);a.type="geojson";a.refresh=U.debounce(async f=>{await a.load();const {extent:n,timeExtent:p}=await a._connection.invoke("refresh",f);a.sourceJSON.extent=n;p&&(a.sourceJSON.timeInfo.timeExtent=[p.start,p.end]);return{dataChanged:!0,updates:{extent:a.sourceJSON.extent,timeInfo:a.sourceJSON.timeInfo}}});return a}t._inherits(B,
h);var N=t._createSuper(B);h=B.prototype;h.load=function(a){a=J.isSome(a)?a.signal:null;this.addResolvingPromise(this._startWorker(a));return Promise.resolve(this)};h.destroy=function(){this._connection?.close();this._connection=null};h.applyEdits=function(a){return this.load().then(()=>this._applyEdits(a))};h.openPorts=function(){return this.load().then(()=>this._connection.openPorts())};h.queryFeatures=function(a,f={}){return this.load(f).then(()=>this._connection.invoke("queryFeatures",a?a.toJSON():
null,f)).then(n=>d.fromJSON(n))};h.queryFeaturesJSON=function(a,f={}){return this.load(f).then(()=>this._connection.invoke("queryFeatures",a?a.toJSON():null,f))};h.queryFeatureCount=function(a,f={}){return this.load(f).then(()=>this._connection.invoke("queryFeatureCount",a?a.toJSON():null,f))};h.queryObjectIds=function(a,f={}){return this.load(f).then(()=>this._connection.invoke("queryObjectIds",a?a.toJSON():null,f))};h.queryExtent=function(a,f={}){return this.load(f).then(()=>this._connection.invoke("queryExtent",
a?a.toJSON():null,f)).then(n=>({count:n.count,extent:L.fromJSON(n.extent)}))};h.querySnapping=function(a,f={}){return this.load(f).then(()=>this._connection.invoke("querySnapping",a,f))};h._applyEdits=function(a){if(!this._connection)throw new E("geojson-layer-source:edit-failure","Memory source not loaded");const f=this.layer.objectIdField,n=[],p=[],w=[];if(a.addFeatures)for(const l of a.addFeatures)n.push(this._serializeFeature(l));if(a.deleteFeatures)for(const l of a.deleteFeatures)"objectId"in
l&&null!=l.objectId?p.push(l.objectId):"attributes"in l&&null!=l.attributes[f]&&p.push(l.attributes[f]);if(a.updateFeatures)for(const l of a.updateFeatures)w.push(this._serializeFeature(l));return this._connection.invoke("applyEdits",{adds:n,updates:w,deletes:p}).then(({extent:l,timeExtent:v,featureEditResults:x})=>{this.sourceJSON.extent=l;v&&(this.sourceJSON.timeInfo.timeExtent=[v.start,v.end]);return this._createEditsResult(x)})};h._createEditsResult=function(a){return{addFeatureResults:a.addResults?
a.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:a.updateResults?a.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:a.deleteResults?a.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}};h._createFeatureEditResult=function(a){const f=!0===a.success?null:a.error||{code:void 0,description:void 0};return{objectId:a.objectId,globalId:a.globalId,error:f?new E("geojson-layer-source:edit-failure",
f.description,{code:f.code}):null}};h._serializeFeature=function(a){const {attributes:f}=a;return(a=this._geometryForSerialization(a))?{geometry:a.toJSON(),attributes:f}:{attributes:f}};h._geometryForSerialization=function(a){({geometry:a}=a);return J.isNone(a)?null:"mesh"===a.type||"extent"===a.type?G.fromExtent(a.extent):a};h._startWorker=async function(a){this._connection=await V.open("GeoJSONSourceWorker",{strategy:R("feature-layers-workers")?"dedicated":"local",signal:a});const {fields:f,spatialReference:n,
hasZ:p,geometryType:w,objectIdField:l,url:v,timeInfo:x,customParameters:O}=this.layer;var C="defaults"===this.layer.originOf("spatialReference");C={url:v,customParameters:O,fields:f&&f.map(y=>y.toJSON()),geometryType:e.featureGeometryTypeKebabDictionary.toJSON(w),hasZ:p,objectIdField:l,timeInfo:x?x.toJSON():null,spatialReference:C?null:n&&n.toJSON()};a=await this._connection.invoke("load",C,{signal:a});for(const y of a.warnings)M.warn(y.message,{layer:this.layer,warning:y});a.featureErrors.length&&
M.warn(`Encountered ${a.featureErrors.length} validation errors while loading features`,a.featureErrors);this.sourceJSON=a.layerDefinition;this.capabilities=K.createCapabilities(this.sourceJSON.hasZ,!0)};return t._createClass(B)}(S);c.__decorate([A.property()],r.GeoJSONSource.prototype,"capabilities",void 0);c.__decorate([A.property()],r.GeoJSONSource.prototype,"type",void 0);c.__decorate([A.property({constructOnly:!0})],r.GeoJSONSource.prototype,"layer",void 0);c.__decorate([A.property()],r.GeoJSONSource.prototype,
"sourceJSON",void 0);r.GeoJSONSource=c.__decorate([F.subclass("esri.layers.graphics.sources.GeoJSONSource")],r.GeoJSONSource);Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})})},"*noref":1}});
define("require ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../geometry ../PopupTemplate ../renderers/ClassBreaksRenderer ../renderers/DictionaryRenderer ../renderers/DotDensityRenderer ../renderers/HeatmapRenderer ../renderers/PieChartRenderer ../renderers/Renderer ../renderers/SimpleRenderer ../renderers/UniqueValueRenderer ../renderers/support/jsonUtils ../renderers/support/types ../core/maybe ../core/MultiOriginJSONSupport ../core/promiseUtils ../core/urlUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass ../geometry/support/typeUtils ./Layer ./graphics/sources/GeoJSONSource ./mixins/BlendLayer ./mixins/CustomParametersMixin ./mixins/FeatureEffectLayer ./mixins/FeatureReductionLayer ./mixins/OperationalLayer ./mixins/OrderedLayer ./mixins/PortalLayer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer ./mixins/TemporalLayer ./support/commonProperties ./support/FeatureTemplate ./support/FeatureType ./support/Field ./support/fieldProperties ./support/fieldUtils ./support/LabelClass ./support/labelingInfo ../rest/support/Query ../support/popupUtils ../geometry/SpatialReference ../geometry/Extent".split(" "),function(r,
t,c,I,E,R,S,T,J,U,V,A,X,Y,F,K,d,L,G,e,M,h,B,N,a,f,n,p,w,l,v,x,O,C,y,Z,aa,u,ba,ca,da,ea,P,fa,ha,D,ia,W,ja){I=ea.defineFieldProperties();d=function(m){function z(b){b=ka.call(this,b);b.copyright=null;b.definitionExpression=null;b.displayField=null;b.editingEnabled=!1;b.elevationInfo=null;b.fields=null;b.fieldsIndex=null;b.fullExtent=null;b.geometryType=null;b.hasZ=void 0;b.labelsVisible=!0;b.labelingInfo=null;b.legendEnabled=!0;b.objectIdField=null;b.operationalLayerType="GeoJSON";b.popupEnabled=!0;
b.popupTemplate=null;b.screenSizePerspectiveEnabled=!0;b.source=new n.GeoJSONSource({layer:t._assertThisInitialized(b)});b.spatialReference=W.WGS84;b.templates=null;b.title="GeoJSON";b.type="geojson";b.typeIdField=null;b.types=null;return b}t._inherits(z,m);var ka=t._createSuper(z);m=z.prototype;m.destroy=function(){this.source?.destroy()};m.load=function(b){const g=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},b).catch(L.throwIfAbortError).then(()=>this.source.load(b)).then(()=>
{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl});this.revert(["objectIdField","fields","timeInfo"],"service");P.fixRendererFields(this.renderer,this.fieldsIndex);P.fixTimeInfoFields(this.timeInfo,this.fieldsIndex)});this.addResolvingPromise(g);return Promise.resolve(this)};m.applyEdits=async function(b,g){const k=await new Promise((q,H)=>r(["./graphics/editingSupport"],q,H));await this.load();b=await k.applyEdits(this,this.source,b,g);this.read({extent:this.source.sourceJSON.extent,
timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0});return b};m.on=function(b,g){return t._get(t._getPrototypeOf(z.prototype),"on",this).call(this,b,g)};m.createPopupTemplate=function(b){return ia.createPopupTemplate(this,b)};m.createQuery=function(){const b=new D,g=this.get("capabilities.data");b.returnGeometry=!0;g&&g.supportsZ&&(b.returnZ=!0);b.outFields=["*"];b.where=this.definitionExpression||"1\x3d1";const {timeOffset:k,timeExtent:q}=this;b.timeExtent=null!=k&&null!=
q?q.offset(-k.value,k.unit):q||null;return b};m.getFieldDomain=function(b,g){let k,q=!1;g=(g=g&&g.feature)&&g.attributes;const H=this.typeIdField&&g&&g[this.typeIdField];null!=H&&this.types&&(q=this.types.some(Q=>Q.id==H?((k=Q.domains&&Q.domains[b])&&"inherited"===k.type&&(k=this._getLayerDomain(b)),!0):!1));q||k||(k=this._getLayerDomain(b));return k};m.getField=function(b){return this.fieldsIndex.get(b)};m.queryFeatures=function(b,g){return this.load().then(()=>this.source.queryFeatures(D.from(b)||
this.createQuery(),g)).then(k=>{if(k?.features)for(const q of k.features)q.layer=q.sourceLayer=this;return k})};m.queryObjectIds=function(b,g){return this.load().then(()=>this.source.queryObjectIds(D.from(b)||this.createQuery(),g))};m.queryFeatureCount=function(b,g){return this.load().then(()=>this.source.queryFeatureCount(D.from(b)||this.createQuery(),g))};m.queryExtent=function(b,g){return this.load().then(()=>this.source.queryExtent(D.from(b)||this.createQuery(),g))};m.hasDataChanged=async function(){try{const {dataChanged:b,
updates:g}=await this.source.refresh(this.customParameters);K.isSome(g)&&this.read(g,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0});return b}catch{}return!1};m._getLayerDomain=function(b){if(!this.fields)return null;let g=null;this.fields.some(k=>{k.name===b&&(g=k.domain);return!!g});return g};t._createClass(z,[{key:"capabilities",get:function(){return this.source?this.source.capabilities:null}},{key:"createQueryVersion",get:function(){this.commitProperty("definitionExpression");this.commitProperty("timeExtent");
this.commitProperty("timeOffset");this.commitProperty("geometryType");this.commitProperty("capabilities");return(this._get("createQueryVersion")||0)+1}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"isTable",get:function(){return this.loaded&&null==this.geometryType}},{key:"parsedUrl",get:function(){return this.url?G.urlToObject(this.url):null}},{key:"renderer",set:function(b){P.fixRendererFields(b,this.fieldsIndex);this._set("renderer",b)}},{key:"url",set:function(b){b?
(b=G.urlToObject(b),this._set("url",b.path),b.query&&(this.customParameters={...this.customParameters,...b.query})):this._set("url",b)}}]);return z}(O.OrderedLayer(w.CustomParametersMixin(v.FeatureReductionLayer(l.FeatureEffectLayer(p.BlendLayer(aa.TemporalLayer(Z.ScaleRangeLayer(y.RefreshableLayer(x.OperationalLayer(C.PortalLayer(d.MultiOriginJSONMixin(f))))))))))));c.__decorate([e.property({readOnly:!0,json:{read:!1,write:!1}})],d.prototype,"capabilities",null);c.__decorate([e.property({type:String})],
d.prototype,"copyright",void 0);c.__decorate([e.property({readOnly:!0})],d.prototype,"createQueryVersion",null);c.__decorate([e.property({readOnly:!0})],d.prototype,"defaultPopupTemplate",null);c.__decorate([e.property({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],d.prototype,"definitionExpression",void 0);c.__decorate([e.property({type:String})],d.prototype,"displayField",void 0);c.__decorate([e.property({type:Boolean})],d.prototype,"editingEnabled",
void 0);c.__decorate([e.property(u.elevationInfo)],d.prototype,"elevationInfo",void 0);c.__decorate([e.property({type:[da],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],d.prototype,"fields",void 0);c.__decorate([e.property(I.fieldsIndex)],d.prototype,"fieldsIndex",void 0);c.__decorate([e.property({type:ja,json:{name:"extent"}})],d.prototype,"fullExtent",void 0);c.__decorate([e.property({type:["point","polygon","polyline","multipoint"],
json:{read:{reader:a.featureGeometryTypeKebabDictionary.read}}})],d.prototype,"geometryType",void 0);c.__decorate([e.property({type:Boolean})],d.prototype,"hasZ",void 0);c.__decorate([e.property(u.id)],d.prototype,"id",void 0);c.__decorate([e.property({type:Boolean,readOnly:!0})],d.prototype,"isTable",null);c.__decorate([e.property(u.labelsVisible)],d.prototype,"labelsVisible",void 0);c.__decorate([e.property({type:[fa],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ha.reader},
write:!0}})],d.prototype,"labelingInfo",void 0);c.__decorate([e.property(u.legendEnabled)],d.prototype,"legendEnabled",void 0);c.__decorate([e.property({type:["show","hide"]})],d.prototype,"listMode",void 0);c.__decorate([e.property({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],d.prototype,"objectIdField",void 0);c.__decorate([e.property(u.opacity)],d.prototype,"opacity",void 0);c.__decorate([e.property({type:["GeoJSON"]})],
d.prototype,"operationalLayerType",void 0);c.__decorate([e.property({readOnly:!0})],d.prototype,"parsedUrl",null);c.__decorate([e.property(u.popupEnabled)],d.prototype,"popupEnabled",void 0);c.__decorate([e.property({type:E,json:{name:"popupInfo",write:!0}})],d.prototype,"popupTemplate",void 0);c.__decorate([e.property({types:F.rendererTypes,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:F.webSceneRendererTypes}}}})],d.prototype,
"renderer",null);c.__decorate([e.property(u.screenSizePerspectiveEnabled)],d.prototype,"screenSizePerspectiveEnabled",void 0);c.__decorate([e.property({readOnly:!0})],d.prototype,"source",void 0);c.__decorate([e.property({type:W})],d.prototype,"spatialReference",void 0);c.__decorate([e.property({type:[ba]})],d.prototype,"templates",void 0);c.__decorate([e.property()],d.prototype,"title",void 0);c.__decorate([e.property({json:{read:!1},readOnly:!0})],d.prototype,"type",void 0);c.__decorate([e.property({type:String,
readOnly:!0})],d.prototype,"typeIdField",void 0);c.__decorate([e.property({type:[ca]})],d.prototype,"types",void 0);c.__decorate([e.property(u.url)],d.prototype,"url",null);return d=c.__decorate([N.subclass("esri.layers.GeoJSONLayer")],d)});