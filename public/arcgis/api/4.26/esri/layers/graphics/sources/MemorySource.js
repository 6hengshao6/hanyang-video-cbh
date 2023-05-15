// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../Graphic ../../../core/Collection ../../../core/Error ../../../core/HandleOwner ../../../core/has ../../../core/Loadable ../../../core/Logger ../../../core/maybe ../../../core/Promise ../../../core/workers/workers ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/shared ../../../core/accessorSupport/decorators/subclass ../../../rest/query/operations/editsZScale ../../../rest/query/operations/queryZScale ../../../rest/support/FeatureSet ../../../geometry/Extent ../../../geometry/Polygon ../../../geometry/support/typeUtils".split(" "),
function(m,u,p,R,y,B,v,C,D,E,F,q,G,H,t,I,S,J,K,L,z,M,N,O,A){let P=0;const w=F.getLogger("esri.layers.graphics.sources.MemorySource");m.MemorySource=function(e){function r(a){a=Q.call(this,a);a._idToClientGraphic=null;a.type="memory";return a}u._inherits(r,e);var Q=u._createSuper(r);e=r.prototype;e.load=function(a){a=q.isSome(a)?a.signal:null;this.addResolvingPromise(this._startWorker(a));return Promise.resolve(this)};e.destroy=function(){this._connection?.close();this._connection=null};e.applyEdits=
function(a){return this.load().then(()=>this._applyEdits(a))};e.openPorts=function(){return this.load().then(()=>this._connection.openPorts())};e.queryFeatures=async function(a,b={}){await this.load(b);b=await this._connection.invoke("queryFeatures",a?a.toJSON():null,b);z.applyFeatureSetZUnitScaling(a,this.layer.spatialReference,b);a=M.fromJSON(b);if(!this._requiresClientGraphicMapping())return a;b=this.layer.objectIdField;for(const c of a.features){const f=this._idToClientGraphic.get(c.attributes[b]);
f&&(c.geometry=f.geometry)}a.geometryType=this.layer.geometryType;return a};e.queryFeaturesJSON=async function(a,b={}){if(this._requiresClientGraphicMapping())throw new v("query-features-json:unsupported","Cannot query in JSON format for client only geometry types (mesh and extent)");await this.load(b);b=await this._connection.invoke("queryFeatures",a?a.toJSON():null,b);z.applyFeatureSetZUnitScaling(a,this.layer.spatialReference,b);return b};e.queryFeatureCount=function(a,b={}){return this.load(b).then(()=>
this._connection.invoke("queryFeatureCount",a?a.toJSON():null,b))};e.queryObjectIds=function(a,b={}){return this.load(b).then(()=>this._connection.invoke("queryObjectIds",a?a.toJSON():null,b))};e.queryExtent=function(a,b={}){return this.load(b).then(()=>this._connection.invoke("queryExtent",a?a.toJSON():null,b)).then(c=>({count:c.count,extent:N.fromJSON(c.extent)}))};e.querySnapping=function(a,b={}){return this.load(b).then(()=>this._connection.invoke("querySnapping",a,b))};e._applyEdits=async function(a){if(!this._connection)throw new v("feature-layer-source:edit-failure",
"Memory source not loaded");const b=this.layer.objectIdField;let c=null;const f=[],n=[];await Promise.all([this._prepareClientMapping(a.addFeatures,null),this._prepareClientMapping(a.updateFeatures,null)]);const h=d=>"objectId"in d&&null!=d.objectId?d.objectId:"attributes"in d&&null!=d.attributes[b]?d.attributes[b]:null;a.addFeatures&&(c=this._prepareAddFeatures(a.addFeatures));if(a.deleteFeatures)for(var g of a.deleteFeatures){const d=h(g);null!=d&&f.push(d)}g=a.updateFeatures&&this._idToClientGraphic?
new Map:null;if(a.updateFeatures)for(const d of a.updateFeatures)n.push(this._serializeFeature(d)),g&&(a=h(d),null!=a&&g.set(a,d));L.unapplyEditsZUnitScaling(c?c.features:null,n,this.layer.spatialReference);const {fullExtent:k,featureEditResults:l}=await this._connection.invoke("applyEdits",{adds:c?c.features:[],updates:n,deletes:f});this.fullExtent=k;c&&c.finish(l.uidToObjectId);this._updateClientGraphicIds(g,l);return this._createEditsResult(l)};e._prepareClientMapping=async function(a,b){if("mesh"===
this._layerOrSourceGeometryType&&!q.isNone(a)){var c=[];for(const {geometry:f}of a)!q.isSome(f)||"mesh"!==f.type||f.hasExtent||f.loaded||c.push(f.load({signal:b}));c.length&&await Promise.all(c)}};e._updateClientGraphicIds=function(a,b){if(this._idToClientGraphic){if(a)for(const c of b.updateResults){if(!c.success)continue;const f=a.get(c.objectId);null!=f&&this._addIdToClientGraphic(f)}for(const c of b.deleteResults)c.success&&this._idToClientGraphic.delete(c.objectId)}};e._createEditsResult=function(a){return{addFeatureResults:a.addResults?
a.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:a.updateResults?a.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:a.deleteResults?a.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}};e._createFeatureEditResult=function(a){const b=!0===a.success?null:a.error||{code:void 0,description:void 0};return{objectId:a.objectId,globalId:a.globalId,error:b?new v("feature-layer-source:edit-failure",
b.description,{code:b.code}):null}};e._prepareAddFeatures=function(a){const b=new Map,c=Array(a.length);let f=null;for(let h=0;h<a.length;h++){const g=a[h],k=this._serializeFeature(g);!f&&q.isSome(g.geometry)&&(f=g.geometry.type);c[h]=k;b.set(`${k.uid}`,g)}const n=this;return{features:c,inferredGeometryType:f,finish(h){const g=n.sourceJSON.objectIdField;for(const k in h){const l=h[k],d=b.get(k);d&&(d.attributes||(d.attributes={}),-1===l?delete d.attributes[g]:d.attributes[g]=l,n._addIdToClientGraphic(d))}}}};
e._addIdToClientGraphic=function(a){if(this._idToClientGraphic){var b=this.sourceJSON.objectIdField;b=a.attributes&&a.attributes[b];null!=b&&this._idToClientGraphic.set(b,a)}};e._requiresClientGraphicMapping=function(){return this._geometryTypeRequiresClientGraphicMapping(this._layerOrSourceGeometryType)};e._geometryRequiresClientGraphicMapping=function(a){return this._geometryTypeRequiresClientGraphicMapping(a.type)};e._geometryTypeRequiresClientGraphicMapping=function(a){return"mesh"===a||"multipatch"===
a||"extent"===a};e._serializeFeature=function(a){const {attributes:b}=a;a=this._geometryForSerialization(a);const c=(P++).toString();return a?{uid:c,geometry:a.toJSON(),attributes:b}:{uid:c,attributes:b}};e._geometryForSerialization=function(a){({geometry:a}=a);return q.isNone(a)?null:this._geometryRequiresClientGraphicMapping(a)?a.extent?O.fromExtent(a.extent):null:a};e._startWorker=async function(a){this._connection=await H.open("MemorySourceWorker",{strategy:D("feature-layers-workers")?"dedicated":
"local",signal:a});const {fields:b,spatialReference:c,objectIdField:f,hasM:n,hasZ:h,timeInfo:g}=this.layer;var k="defaults"===this.layer.originOf("spatialReference");await this._prepareClientMapping(this.items,a);const l=this._prepareAddFeatures(this.items);this.handles.add(this.on("before-changes",x=>{w.error("Source modifications will not propagate after layer has been loaded. Please use .applyEdits() instead");x.preventDefault()}));k={features:l.features,fields:b&&b.map(x=>x.toJSON()),geometryType:A.typeKebabDictionary.toJSON(this._workerGeometryType),
hasM:"mesh"!==this._layerOrSourceGeometryType&&n,hasZ:"mesh"===this._layerOrSourceGeometryType||h,objectIdField:f,spatialReference:k?null:c&&c.toJSON(),timeInfo:g?g.toJSON():null};a=await this._connection.invoke("load",k,{signal:a});for(var d of a.warnings)w.warn(d.message,{layer:this.layer,warning:d});a.featureErrors.length&&w.warn(`Encountered ${a.featureErrors.length} validation errors while loading features`,a.featureErrors);d=a.layerDefinition;this._geometryTypeRequiresClientGraphicMapping(l.inferredGeometryType)&&
(d.geometryType=A.typeKebabDictionary.toJSON(l.inferredGeometryType));this.sourceJSON=d;this._requiresClientGraphicMapping()&&(this._idToClientGraphic=new Map);l.finish(a.assignedObjectIds)};u._createClass(r,[{key:"_workerGeometryType",get:function(){const a=this.layer?.geometryType;return a?this._geometryTypeRequiresClientGraphicMapping(a)?"polygon":a:null}},{key:"_layerOrSourceGeometryType",get:function(){return this.layer?.geometryType??this.sourceJSON?.geometryType}}]);return r}(E.LoadableMixin(G.EsriPromiseMixin(C.HandleOwnerMixin(B))));
p.__decorate([J.shared({Type:y,ensureType:I.ensureType(y)})],m.MemorySource.prototype,"itemType",void 0);p.__decorate([t.property()],m.MemorySource.prototype,"type",void 0);p.__decorate([t.property({constructOnly:!0})],m.MemorySource.prototype,"layer",void 0);p.__decorate([t.property({readOnly:!0})],m.MemorySource.prototype,"_workerGeometryType",null);p.__decorate([t.property()],m.MemorySource.prototype,"sourceJSON",void 0);m.MemorySource=p.__decorate([K.subclass("esri.layers.graphics.sources.MemorySource")],
m.MemorySource);Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});