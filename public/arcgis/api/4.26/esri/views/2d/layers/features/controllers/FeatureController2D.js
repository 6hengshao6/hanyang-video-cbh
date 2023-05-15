// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/HandleOwner ../../../../../core/has ../../../../../core/maybe ../../../../../core/promiseUtils ../../../../../core/reactiveUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/accessorSupport/ensureType ../../../../../core/arrayUtils ../../../../../core/accessorSupport/decorators/subclass ../../../../../layers/graphics/featureConversionUtils ../../../../../layers/graphics/data/QueryEngine ../../../../../layers/support/FieldsIndex ../FeatureStore2D ../sources/createSource ../support/AttributeStore ../support/BinStore ../support/ClusterStore ../support/ComputedAttributeStorage ../support/FeatureSetReaderJSON ../support/UpdateToken ../../../../support/QueueProcessor".split(" "),
function(v,m,h,k,f,l,q,p,L,M,z,A,w,B,C,D,E,F,G,H,I,x,J){function n(c){if(!l.isAbortError(c)&&"worker:port-closed"!==c.name)throw c;}function y(c){return"feature"===c.type&&"snapshot"===c.mode}h=function(c){function t(){var a=K.apply(this,arguments);a._storage=new H.ComputedAttributeStorage;a._markedIdsBufId=a._storage.createBitset();a._lastCleanup=performance.now();a._cleanupNeeded=!1;a._invalidated=!1;a._tileToResolver=new Map;a._didEdit=!1;a._updateVersion=1;a.tileStore=null;a.config=null;a.processor=
null;a.remoteClient=null;a.service=null;return a}v._inherits(t,c);var K=v._createSuper(t);c=t.prototype;c.initialize=function(){this._initStores();this._initSource();this._updateQueue=new J.QueueProcessor({concurrency:"stream"===this._source.type?1:4,process:(a,b)=>this._onTileMessage(a,{signal:b})});this.addHandles([this.tileStore.on("update",this.onTileUpdate.bind(this)),q.when(()=>!this.updating,()=>this.onIdle())])};c._initSource=function(){this._source=D.createSource(this.service,this.spatialReference,
this.tileStore.tileScheme,(a,b)=>{this._invalidated=!0;return this._patchTile(a,b)},()=>this._updateQueue&&50>this._updateQueue.length,this.featureStore);this._proxyEvents()};c._proxyEvents=function(){if("stream"===this._source.type){const a=this._source.events,b=this._source;this.addHandles([q.watch(()=>b.connectionStatus,d=>this.remoteClient.invoke("setProperty",{propertyName:"connectionStatus",value:d}).catch(n),{initial:!0}),q.watch(()=>b.errorString,d=>this.remoteClient.invoke("setProperty",
{propertyName:"errorString",value:d}).catch(n),{initial:!0}),a.on("data-received",d=>this.remoteClient.invoke("emitEvent",{name:"data-received",event:{attributes:d.attributes,centroid:d.centroid,geometry:d.geometry}}).catch(n)),a.on("message-received",d=>this.remoteClient.invoke("emitEvent",{name:"message-received",event:d}).catch(n)),a.on("updateRate",d=>this.remoteClient.invoke("emitEvent",{name:"update-rate",event:{...d}}).catch(n))])}};c._initAttributeStore=function(a){this.attributeStore||(this.attributeStore=
new E({type:"remote",initialize:(b,d)=>l.ignoreAbortErrors(this.remoteClient.invoke("tileRenderer.featuresView.attributeView.initialize",b,{signal:d}).catch(n)),update:(b,d)=>l.ignoreAbortErrors(this.remoteClient.invoke("tileRenderer.featuresView.attributeView.requestUpdate",b,{signal:d}).catch(n)),render:b=>l.ignoreAbortErrors(this.remoteClient.invoke("tileRenderer.featuresView.requestRender",void 0,{signal:b}).catch(n))},a))};c._initStores=function(){this.featureStore=new C.FeatureStore2D({geometryInfo:{geometryType:this.service.geometryType,
hasM:!1,hasZ:!1},spatialReference:this.spatialReference,fieldsIndex:this.fieldsIndex,fields:this.service.fields},this._storage,"snapshot"===this.service.type?"snapshot":"on-demand")};c._initQueryEngine=function(a){const b=this;this.featureQueryEngine?.destroy();this.featureQueryEngine=new w.QueryEngine({definitionExpression:a.schema.source.definitionExpression??void 0,fields:this.service.fields,geometryType:this.service.geometryType,objectIdField:this.service.objectIdField,hasM:!1,hasZ:!1,spatialReference:this.spatialReference.toJSON(),
cacheSpatialQueries:!0,featureStore:this.featureStore,aggregateAdapter:{getFeatureObjectIds(d){return f.isNone(b.aggregateStore)?[]:b.aggregateStore.getFeatureDisplayIdsForAggregate(d).map(e=>b.getObjectId(e))}},timeInfo:this.service.timeInfo})};c._initAggregateQueryEngine=function(a,b){this.aggregateQueryEngine?.destroy();f.isNone(a)||(b=b.targets.aggregate.params.fields.slice(),this.aggregateQueryEngine=new w.QueryEngine({definitionExpression:void 0,fields:b,geometryType:a.geometryInfo.geometryType,
objectIdField:a.objectIdField,hasM:a.geometryInfo.hasM,hasZ:a.geometryInfo.hasZ,spatialReference:this.spatialReference.toJSON(),cacheSpatialQueries:!1,featureStore:a,aggregateAdapter:{getFeatureObjectIds(d){return[]}}}))};c.destroy=function(){this._updateQueue.destroy();this._source.destroy();this.featureQueryEngine?.destroy();this.aggregateQueryEngine?.destroy();this.attributeStore?.destroy();for(const a of this.tileStore.tiles)this._source.unsubscribe(a);clearInterval(this._checkUpdating)};c.isUpdating=
function(){const a=this._source.updatingHandles.updating,b=!this.attributeStore||this.attributeStore.updatingHandles.updating,d=a||b||this.updatingHandles.updating;k("esri-2d-log-updating")&&console.log(`Updating FeatureController2D: ${d}\n  -> updatingSource ${a}\n  -> updatingAttributeStore ${b}\n  -> updatingHandles ${this.updatingHandles.updating} (queue: ${this._updateQueue.length})\n`);return d};c.updateCustomParameters=function(a){"stream"===this._source.type&&this._source.updateCustomParameters(a)};
c.enableEvent=function(a){this._source.enableEvent(a.name,a.value)};c.pause=function(){this._updateQueue.pause();this._updateQueue.clear()};c.resume=function(){this._updateQueue.resume()};c.pauseStream=function(){"stream"===this._source.type&&this._source.pauseStream()};c.resumeStream=function(){"stream"===this._source.type&&this._source.resumeStream()};c.sendMessageToSocket=function(a){"stream"===this._source.type&&this._source.sendMessageToSocket(a)};c.sendMessageToClient=function(a){"stream"===
this._source.type&&this._source.sendMessageToClient(a)};c._initAggregateStore=function(a){a=a.schema.targets?.aggregate?.type;if(f.applySome(this.config,b=>b.schema.targets?.aggregate?.type)!==a&&(f.isSome(this.aggregateStore)&&(this.removeHandles("valueRangesChanged"),this.aggregateStore.destroy(),this.aggregateStore=null),a)){switch(a){case "cluster":this.aggregateStore=new G.ClusterStore({geometryInfo:{geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1},spatialReference:this.spatialReference,fieldsIndex:this.fieldsIndex,
fields:this.service.fields},this.spatialReference,this._storage,this.service);this.addHandles(this.aggregateStore.events.on("valueRangesChanged",b=>{this.remoteClient.invoke("emitEvent",{name:"valueRangesChanged",event:{valueRanges:b.valueRanges}}).catch(n)}),"valueRangesChanged");break;case "bin":this.aggregateStore=new F.BinStore({geometryInfo:{geometryType:"esriGeometryPolygon",hasM:!1,hasZ:!1},spatialReference:this.spatialReference,fieldsIndex:this.fieldsIndex,fields:this.service.fields},this.spatialReference,
this._storage,this.service)}this.aggregateStore.onTileUpdate({added:this.tileStore.tiles,removed:[]})}};c.update=async function(a,b){this._updateVersion++;k("esri-2d-update-debug")&&console.debug(`FeatureController2D::update: Token version ${this._updateVersion}`);this._initQueryEngine(b);this._initAttributeStore(b);this.pause();await Promise.all([this._source.update(a,b.schema.source),this.featureStore.updateSchema(a,b.schema.targets.feature),this.attributeStore.update(a,b),this.attributeStore.updateFilters(a,
b,this)]);this._initAggregateStore(b);f.isSome(this.aggregateStore)&&await this.aggregateStore.updateSchema(a,b.schema.targets.aggregate);this._initAggregateQueryEngine(this.aggregateStore,b.schema);k("esri-2d-update-debug")&&a.describe();this._set("config",b)};c.applyUpdate=async function(a){a.version=this._updateVersion;k("esri-2d-update-debug")&&console.debug(`FeatureController2D::applyUpdate: Token version ${a.version}`);a.mesh&&this.clearTiles();this._updateQueue.resume();await this._source.applyUpdate(a);
k("esri-2d-update-debug")&&console.debug("FeatureController2D::applyUpdate Waiting for source update to finish");this.notifyChange("updating");await q.whenOnce(()=>!this.updating);k("esri-2d-update-debug")&&console.debug("FeatureController2D::applyUpdate Source update finsihed");f.isSome(this.aggregateStore)&&(await l.after(10),k("esri-2d-update-debug")&&console.debug("FeatureController2D::applyUpdate Waiting for aggregate idle call"),await q.whenOnce(()=>!this.updating),k("esri-2d-update-debug")&&
console.debug("FeatureController2D::applyUpdate Aggregate idle called"));k("esri-2d-update-debug")&&console.debug("FeatureController2D::applyUpdate Update finished")};c.onEdits=async function({edits:a}){k("esri-2d-update-debug")&&console.debug("Applying Edit:",a);this._didEdit=!0;try{const b=a.removed.map(e=>e.objectId&&-1!==e.objectId?e.objectId:this._lookupObjectIdByGlobalId(e.globalId)),d=a.addOrModified.map(({objectId:e})=>e);this.featureStore.invalidate();await this._source.edit(d,b);this.clearTiles();
this.notifyChange("updating");f.isSome(this.aggregateStore)&&this.aggregateStore.clear();await this._source.resend();await q.whenOnce(()=>!this.updating)}catch(b){}};c.refresh=async function(a){if(!a.dataChanged)return a=x.UpdateToken.empty(),a.storage.filters=!0,this.applyUpdate(a);this.featureStore.invalidate();this.clearTiles();this._source.refresh(this._updateVersion,a);this._cleanupNeeded=!0;this.notifyChange("updating");await q.whenOnce(()=>!this.updating)};c.clearTiles=function(){for(const a of this.tileStore.tiles)this.processor.onTileClear(a)};
c.onTileUpdate=function(a){if(f.isSome(this.aggregateStore))this.aggregateStore.onTileUpdate(a);for(const b of a.added)this._source.subscribe(b,this._updateVersion),this._level=b.level;for(const b of a.removed)this._source.unsubscribe(b),this._cleanupNeeded=!0,this._tileToResolver.has(b.id)&&(this._tileToResolver.get(b.id).resolve(),this._tileToResolver.delete(b.id));this.notifyChange("updating")};c.onIdle=async function(){this._invalidated&&(this._invalidated=!1,(f.isSome(this.aggregateStore)||"heatmap"===
this.processor.type)&&await this._repushCurrentLevelTiles());this._markAndSweep()};c.querySummaryStatistics=async function({query:a,params:b}){return this.featureQueryEngine.executeQueryForSummaryStatistics(a,b)};c.queryAggregateSummaryStatistics=async function({query:a,params:b}){return this.aggregateQueryEngine.executeQueryForSummaryStatistics(a,b)};c.queryUniqueValues=async function({query:a,params:b}){return this.featureQueryEngine.executeQueryForUniqueValues(a,b)};c.queryAggregateUniqueValues=
async function({query:a,params:b}){return this.aggregateQueryEngine.executeQueryForUniqueValues(a,b)};c.queryClassBreaks=async function({query:a,params:b}){return this.featureQueryEngine.executeQueryForClassBreaks(a,b)};c.queryAggregateClassBreaks=async function({query:a,params:b}){return this.aggregateQueryEngine.executeQueryForClassBreaks(a,b)};c.queryHistogram=async function({query:a,params:b}){return this.featureQueryEngine.executeQueryForHistogram(a,b)};c.queryAggregateHistogram=async function({query:a,
params:b}){return this.aggregateQueryEngine.executeQueryForHistogram(a,b)};c.queryExtent=function(a){return this.featureQueryEngine.executeQueryForExtent(a)};c.queryAggregates=function(a){return this.aggregateQueryEngine.executeQuery(a)};c.queryAggregateCount=function(a){return this.aggregateQueryEngine.executeQueryForCount(a)};c.queryAggregateIds=function(a){return this.aggregateQueryEngine.executeQueryForIds(a)};c.queryFeatures=function(a){return this.featureQueryEngine.executeQuery(a)};c.queryVisibleFeatures=
async function(a){a=await this.featureQueryEngine.executeQuery(a);const b=a.objectIdFieldName;a.features=a.features.filter(d=>{d=this.getDisplayId(d.attributes[b]);return f.applySome(d,e=>this.attributeStore.isVisible(e))});return a};c.queryFeatureCount=function(a){return this.featureQueryEngine.executeQueryForCount(a)};c.queryLatestObservations=function(a){return this.featureQueryEngine.executeQueryForLatestObservations(a)};c.queryObjectIds=function(a){return this.featureQueryEngine.executeQueryForIds(a)};
c.queryStatistics=async function(){return this.featureStore.storeStatistics};c.getObjectId=function(a){return this.featureStore.lookupObjectId(a,this._storage)};c.getDisplayId=function(a){if(f.isSome(this.aggregateStore)){const b=this.aggregateStore.getDisplayId(a);return f.isNone(b)?(a=this.featureStore.lookupDisplayId(a),this.aggregateStore.getDisplayIdForReferenceId(a)):b}return this.featureStore.lookupDisplayId(a)};c.getFeatures=function(a){const b=[],d=[];for(const e of a)a=f.isSome(this.aggregateStore)?
this.getAggregate(e):null,f.isSome(a)?f.isSome(a.attributes.referenceId)?(a=this.getFeature(a.attributes.referenceId),f.isSome(a)&&b.push(a)):d.push(a):(a=this.getFeature(e),f.isSome(a)&&b.push(a));return{features:b,aggregates:d}};c.getFeature=function(a){a=this.featureStore.lookupFeatureByDisplayId(a,this._storage);if(f.isNone(a))return null;var b=a.readHydratedGeometry();b=A.convertToGeometry(b,a.geometryType,a.hasZ,a.hasM);return{attributes:a.readAttributes(),geometry:b}};c.getAggregate=function(a){return f.isNone(this.aggregateStore)?
null:this.aggregateStore.getAggregate(a)};c.getAggregates=function(){return f.isNone(this.aggregateStore)?[]:this.aggregateStore.getAggregates()};c.setHighlight=async function(a){const b=f.filterNones(a.map(d=>this.getDisplayId(d)));return this.attributeStore.setHighlight(a,b)};c._lookupObjectIdByGlobalId=function(a){const b=this.service.globalIdField;if(f.isNone(b))throw Error("Expected globalIdField to be defined");let d=null;this.featureStore.forEach(e=>{a===e.readAttribute(b)&&(d=e.getObjectId())});
if(f.isNone(d))throw Error(`Expected to find a feature with globalId ${a}`);return d};c._repushCurrentLevelTiles=async function(){var a=this.tileStore.tiles.filter(b=>b.level===this._level);a.map(async b=>this._patchTile({type:"append",id:b.key.id,clear:!0,addOrUpdate:null,end:!1}));a=a.map(async b=>this._patchTile({type:"append",id:b.key.id,addOrUpdate:I.FeatureSetReaderJSON.fromOptimizedFeatures([],this.service),remove:[],end:!0,isRepush:!0,status:x.UpdateToken.empty()}));await Promise.all(a)};
c._maybeForceCleanup=function(){5E3<performance.now()-this._lastCleanup&&this._markAndSweep()};c._patchTile=function(a,b){a=this._updateQueue.push(a,b).catch(d=>{});return this.updatingHandles.addPromise(a)};c._onTileMessage=async function(a,b){l.throwIfAborted(b);if(k("esri-2d-update-debug")){var d=f.applySome(a.addOrUpdate,g=>g.hasFeatures);console.debug(a.id,`FeatureController:onTileMessage: [clear:${a.clear}, end:${a.end}, features: ${d}]`)}if(d=this.tileStore.get(a.id)){if(a.clear)return this.processor.onTileClear(d);
var e=a.status;this._cleanupNeeded=!0;var r=[];for(const g of a.remove??[]){const u=this.featureStore.lookupDisplayId(g);u&&r.push(u)}a.remove=r;try{if(f.isNone(a.addOrUpdate))this.processor.onTileMessage(d,{...a,addOrUpdate:null},f.isSome(this.aggregateStore),b).catch(l.throwIfNotAbortError);else{a.addOrUpdate.setArcadeSpatialReference(this.spatialReference);this.featureStore.hasInstance(a.addOrUpdate.instance)&&e.targets.feature||(e.targets.feature=!0,this.featureStore.onTileData(d,a));e.storage.data&&
e.storage.filters||(e.storage.data=!0,e.storage.filters=!0,this.attributeStore.onTileData(d,a),"stream"===this._source.type||this._didEdit?(await this.attributeStore.sendUpdates(),l.throwIfAborted(b)):this.attributeStore.sendUpdates());if(f.isSome(this.aggregateStore)&&!e.targets.aggregate){e.targets.aggregate=!0;const g=y(this._source)&&this._source.loading,u=!y(this._source)||g||a.end;this.aggregateStore.onTileData(d,a,this._storage,this.attributeStore,u);if(!u)return;e.mesh||(this.attributeStore.onTileData(d,
a),await this.attributeStore.sendUpdates())}if(!e.mesh){e.mesh=!0;const g=f.isSome(this.aggregateStore)&&"cluster"===this.aggregateStore.type;await this.processor.onTileMessage(d,a,g,b);l.throwIfAborted(b)}this._maybeForceCleanup()}}catch(g){l.throwIfNotAbortError(g)}}};c._mark=function(a,b,d){const e=this._storage.getInstanceId(a);a&&(b.add((4294901760&e)>>>16),d.set(a))};c._markAndSweep=function(){this._lastCleanup=performance.now();if(!("feature"===this._source.type&&"snapshot"===this._source.mode||
"stream"!==this._source.type&&!this._cleanupNeeded)){this._cleanupNeeded=!1;var a=this._storage.getBitset(this._markedIdsBufId),b=new Set;a.clear();for(const e of this.tileStore.tiles)for(const r of this._source.readers(e.id)){const g=r.getCursor();for(;g.next();){var d=g.getDisplayId();d||(d=g.getObjectId(),d=this.featureStore.lookupDisplayId(d));this._mark(d,b,a)}}"symbol"===this.processor.type&&this.processor.forEachBufferId(e=>{this._mark(e,b,a)});this._updateQueue.forEach(e=>{for(const r of e.remove??
[])e=this.featureStore.lookupDisplayId(r),this._mark(e,b,a)});f.isSome(this.aggregateStore)&&(this.aggregateStore.sweepFeatures(a,this.featureStore),"sweepAggregates"in this.aggregateStore&&this.aggregateStore.sweepAggregates(this._storage,this.attributeStore,this._level));this.featureStore.sweepFeatures(a,this._storage,this.attributeStore);this.featureStore.sweepFeatureSets(b)}};v._createClass(t,[{key:"fieldsIndex",get:function(){return new B(this.service.fields)}},{key:"spatialReference",get:function(){return this.tileStore.tileScheme.spatialReference}},
{key:"updating",get:function(){return this.isUpdating()}}]);return t}(h.HandleOwner);m.__decorate([p.property({constructOnly:!0})],h.prototype,"tileStore",void 0);m.__decorate([p.property()],h.prototype,"config",void 0);m.__decorate([p.property({readOnly:!0})],h.prototype,"fieldsIndex",null);m.__decorate([p.property()],h.prototype,"processor",void 0);m.__decorate([p.property({constructOnly:!0})],h.prototype,"remoteClient",void 0);m.__decorate([p.property({constructOnly:!0})],h.prototype,"service",
void 0);m.__decorate([p.property()],h.prototype,"spatialReference",null);m.__decorate([p.property()],h.prototype,"updating",null);return h=m.__decorate([z.subclass("esri.views.2d.layers.features.controllers.FeatureController2D")],h)});