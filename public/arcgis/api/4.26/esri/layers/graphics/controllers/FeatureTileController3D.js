// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/asyncUtils ../../../core/Collection ../../../core/has ../../../core/Error ../../../core/Handles ../../../core/lang ../../../core/Logger ../../../core/maybe ../../../core/Promise ../../../core/promiseUtils ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../core/support/WatchUpdatingTracking ../../support/arcgisLayerUrl ../../support/layerUtils ../../../portal/support/geometryServiceUtils ../../../rest/support/StatisticDefinition ../../../views/3d/layers/support/FeatureTileFetcher3D ../../../views/3d/layers/support/FeatureTileFetcher3DDebugger ../../../views/3d/support/debugFlags".split(" "),
function(c,v,g,D,z,A,Q,E,F,B,w,d,G,r,p,h,R,H,I,J,K,L,M,N,O,P){function C(e,q){if(!q)return!1;for(const x of q)if(!e.has(x))return!0;return!1}c.FeatureTileController3D=function(e){function q(a){a=x.call(this,a);a.type="feature-tile-3d";a._watchUpdatingTracking=new I.WatchUpdatingTracking;a.serviceDataExtent=null;a.serviceDataCount=c.FeatureTileController3DConstants.NO_SERVICE_DATA_COUNT;a.vertexLimitExceeded=!1;a.displayFeatureLimit=null;a._suspended=!1;a._tileFetcher=null;a._handles=new F;a._fetchDataInfoPromise=
null;a._fetchDataInfoAbortController=null;a._lifeCycleAbortController=new AbortController;return a}v._inherits(q,e);var x=v._createSuper(q);e=q.prototype;e._approximateExtentSizeAtScale=function(a,b){const f=this.layerView.view,n=b.levels[0];return(n.tileSize[0]/(n.scale/a)+n.tileSize[1]/(n.scale/a))/2*Math.ceil((f.width/b.pixelSize+f.height/b.pixelSize)/2)};e.initialize=function(){this._watchUpdatingTracking.add(()=>this.vertexLimitInfo,()=>this._watchUpdatingTracking.addPromise(this._updateVertexLimitExceeded(null,
this._lifeCycleAbortController.signal)));this._watchUpdatingTracking.add(()=>this.mode,()=>this._modeChanged(),p.initial);this.addResolvingPromise(Promise.resolve().then(()=>this._verifyCapabilities()).then(()=>this._watchUpdatingTracking.addPromise(this._fetchServiceDataInfo())).then(()=>this._initializeTileFetcher()))};e._verifyCapabilities=function(){const a=this.layerView.layer;if("ogc-feature"!==a.type&&!K.getEffectiveLayerCapabilities(a)?.operations.supportsQuery)throw new E("graphicscontroller:query-capability-required",
"Service requires query capabilities to be used as a feature layer",{layer:a});};e.destroy=function(){this._cancelFetchServiceDataInfo();this._tileFetcher=d.destroyMaybe(this._tileFetcher);this._handles=d.destroyMaybe(this._handles);this._tilesHandle=d.removeMaybe(this._tilesHandle);this._lifeCycleAbortController=d.abortMaybe(this._lifeCycleAbortController);this._watchUpdatingTracking.destroy();this._set("watchUpdatingTracking",null)};e.suspend=function(){this._suspended||(this._suspended=!0,d.isSome(this._tileFetcher)&&
this._tileFetcher.suspend())};e.resume=function(){this._suspended&&(this._suspended=!1,d.isSome(this._tileFetcher)&&this._tileFetcher.resume())};e.restart=function(){const a=()=>{d.isSome(this._tileFetcher)&&this._tileFetcher.restart()};this._watchUpdatingTracking.addPromise(this._fetchServiceDataInfo().then(a,a))};e.refetch=function(){const a=()=>{d.isSome(this._tileFetcher)&&this._tileFetcher.refetch()};this._watchUpdatingTracking.addPromise(this._fetchServiceDataInfo().then(a,a))};e._initializeTileFetcher=
function(){const a=this.layerView.view;if(a){var b=p.whenOnce(()=>a.featureTiles?.tilingScheme,this._lifeCycleAbortController.signal);this._watchUpdatingTracking.addPromise(b);b.then(()=>{const {layerView:f,tileDescriptors:n}=this,m=f.layer,k=new N.FeatureTileFetcher3D({context:this.context,filterExtent:this.extent,tileDescriptors:n,features:this.graphics});this._tileFetcher=k;this._suspended?this._tileFetcher.suspend():this._tileFetcher.resume();const t=this.layerView.view.resourceController;t&&
this._handles.add(p.watch(()=>t.memoryController.memoryFactor,l=>k.memoryFactor=l,p.syncAndInitial));const u="polygon"===this.context.geometryType?"polygonLodFactor":"polyline"===this.context.geometryType?"polylineLodFactor":null;u&&this._handles.add(p.watch(()=>this.layerView.view?.qualitySettings?.graphics3D?.[u],l=>k.lodFactor=l||1,p.initial));"ogc-feature"!==m.type&&this._watchUpdatingTracking.add(()=>m.createQueryVersion,()=>this._dataFilterChanged());this._watchUpdatingTracking.add(()=>f.availableFields,
(l,y)=>this._availableFieldsChanged(y,l));this._watchUpdatingTracking.add(()=>f.requiredFields,(l,y)=>this._requiredFieldsChanged(y,l));this._handles.add([m.on("apply-edits",l=>this._applyEdits(l)),p.watch(()=>this.extent,l=>k.filterExtent=l,p.sync),p.watch(()=>this.tileDescriptors,l=>k.tileDescriptors=l,p.sync),p.watch(()=>this.maximumNumberOfFeatures,l=>{k.maximumNumberOfFeatures=l;k.useTileCount=this.serviceDataCount>l},p.syncAndInitial),p.watch(()=>this.serviceDataCount,l=>k.useTileCount=l>this.maximumNumberOfFeatures,
p.syncAndInitial),p.watch(()=>P.FEATURE_TILE_FETCH_SHOW_TILES,l=>{l&&k&&!k.debugger?(k.debugger=new O.FeatureTileFetcher3DDebugger(k,a.featureTiles.tilingScheme.toTileInfo(),a),k.debugger.update()):!l&&this._tileFetcher&&k.debugger&&(k.debugger.destroy(),k.debugger=null)},p.syncAndInitial)]);this._supportsExceedsLimitQuery||this._watchUpdatingTracking.add(()=>this.maxTotalSnapshotVertices,()=>this._watchUpdatingTracking.addPromise(this._updateVertexLimitExceeded(null,this._lifeCycleAbortController.signal)))}).catch(()=>
{})}};e._modeChanged=function(){switch(this.mode){case "tiles":this._tilesHandle||(this._tilesHandle=this.layerView.view.featureTiles.addClient());break;default:w.getLogger(this.declaredClass).warn("Unhandled feature layer mode "+this.mode);case "snapshot":d.isSome(this._tilesHandle)&&(this._tilesHandle.remove(),this._tilesHandle=null)}};e._dataFilterChanged=function(){this._set("maxTotalSnapshotVertices",0);this.notifyChange("maxTotalSnapshotVertices");this.refetch()};e._applyEdits=function(a){d.isNone(this._tileFetcher)||
this._tileFetcher.applyEdits(a).then(b=>{if(b){if(!this._lifeCycleAbortController)throw r.createAbortError();(b.deletedFeatures.length||b.updatedFeatures.length||b.addedFeatures.length)&&this._watchUpdatingTracking.addPromise(this._updateServiceDataExtent(this._lifeCycleAbortController.signal))}}).catch(b=>{if(!r.isAbortError(b))throw b;})};e._availableFieldsChanged=function(a,b){d.isSome(this._tileFetcher)&&C(this._tileFetcher.availableFields,b)&&this.refetch()};e._requiredFieldsChanged=function(a,
b){d.isSome(this._tileFetcher)&&C(this._tileFetcher.availableFields,b)&&this.restart()};e._createVertexLimitExceededQuery=function(a){const b=this.layerView.layer,f=b.createQuery();f.outStatistics=[new M({statisticType:"exceedslimit",maxVertexCount:a,outStatisticFieldName:"exceedslimit",maxPointCount:1E8,maxRecordCount:1E8})];b.capabilities?.query.supportsCacheHint&&(f.cacheHint=!0);return f};e._createDataInfoQuery=function(){const a=this.layerView.layer,b=a.createQuery();b.outSpatialReference=this.layerView.view.spatialReference;
a.capabilities?.query.supportsCacheHint&&(b.cacheHint=!0);return b};e._fullExtentIsAccurate=function(){const a=this.layerView.layer;if(a.definitionExpression)return!1;switch(a.type){case "feature":case "oriented-imagery":return J.isHostedAgolService(a.url);case "csv":case "geojson":case "ogc-feature":case "wfs":return!0}};e._updateServiceDataExtent=async function(a){try{await this._tryUpdateServiceDataExtent(a)}catch(b){r.isAbortError(b)||this._set("serviceDataExtent",B.clone(this.layerView.fullExtentInLocalViewSpatialReference))}};
e._tryUpdateServiceDataExtent=async function(a){var b=this.layerView;const f=b.layer,n=f.capabilities?.query.supportsExtent??!1,m=B.clone(b.fullExtentInLocalViewSpatialReference),k=f.fullExtent,t=this._fullExtentIsAccurate(),u=this.serviceDataCount;n&&u<=c.FeatureTileController3DConstants.MAX_FEATURE_COUNT_FOR_EXTENT&&(!m||!t)&&"queryExtent"in f?(b=this._createDataInfoQuery(),a=await f.queryExtent(b,{timeout:c.FeatureTileController3DConstants.QUERY_EXTENT_TIMEOUT,signal:a}),this._set("serviceDataExtent",
a.extent)):m?this._set("serviceDataExtent",m):d.isSome(k)?(a=await L.projectGeometry(k,b.view.spatialReference,"portalItem"in f?f.portalItem:null,a),this._set("serviceDataExtent",a)):this._set("serviceDataExtent",null)};e._updateServiceDataCount=async function(a){const b=this.layerView.layer;if("queryFeatureCount"in b)if(a=await z.result(b.queryFeatureCount(this._createDataInfoQuery(),{timeout:c.FeatureTileController3DConstants.QUERY_STATISTICS_TIMEOUT,signal:a})),!0===a.ok)this._set("serviceDataCount",
a.value);else{if(r.isAbortError(a.error))throw a.error;this._set("serviceDataCount",c.FeatureTileController3DConstants.NO_SERVICE_DATA_COUNT)}else this._set("serviceDataCount",c.FeatureTileController3DConstants.NO_SERVICE_DATA_COUNT)};e._updateVertexLimitExceeded=async function(a,b){var f=this.vertexLimitInfo;if(d.isNone(f))this._set("vertexLimitExceeded",!1);else{var n=1<this._minimumNumberOfVerticesForGeometry;if(0>=f.primitivesPerFeature||n){var {primitivesPerFeature:m,primitivesPerCoordinate:k,
maximumTotalNumberOfPrimitives:t}=f;0!==m&&d.isSome(a)&&await a;f=this.serviceDataCount;var u=f!==c.FeatureTileController3DConstants.NO_SERVICE_DATA_COUNT;a=u?Math.ceil((t-f*m)/(k||1)):Math.ceil(t/(k||1));n&&(a=Math.min(a,5E6));if(u&&this._minimumNumberOfVerticesForGeometry*f>a)this._set("vertexLimitExceeded",!0);else if(this._supportsExceedsLimitQuery)if(b=await z.result(this.layerView.layer.queryFeatures(this._createVertexLimitExceededQuery(a),{timeout:c.FeatureTileController3DConstants.QUERY_STATISTICS_TIMEOUT,
signal:b})),!1===b.ok){if(r.isAbortError(b.error))throw b.error;this._set("vertexLimitExceeded",!1)}else(b=b.value.features[0])&&b.attributes?this._set("vertexLimitExceeded",!!b.attributes.exceedslimit):this._set("vertexLimitExceeded",!1);else this._set("vertexLimitExceeded",this.maxTotalSnapshotVertices>a)}else this._set("vertexLimitExceeded",!1)}};e._fetchServiceDataInfo=async function(){this._cancelFetchServiceDataInfo();let a=new AbortController;const b=a.signal;var f=this._updateServiceDataCount(b);
f=r.eachAlways([f,this._updateVertexLimitExceeded(f,b)]);const n=f.then(()=>this._updateServiceDataExtent(b)).catch(m=>{r.isAbortError(m)||w.getLogger(this.declaredClass).error("#fetchServiceDataInfo()",m)}).then(()=>{n===this._fetchDataInfoPromise&&(this._fetchDataInfoAbortController=this._fetchDataInfoPromise=null);a=null});a&&(this._fetchDataInfoPromise=n);this._fetchDataInfoAbortController=a;return f.then(()=>{},()=>{})};e._cancelFetchServiceDataInfo=function(){const a=this._fetchDataInfoAbortController;
a&&(this._fetchDataInfoPromise=this._fetchDataInfoAbortController=null,a.abort())};v._createClass(q,[{key:"extent",set:function(a){if(d.isSome(a)&&!a.spatialReference.equals(this.layerView.view.spatialReference))w.getLogger(this.declaredClass).error("#extent\x3d","extent needs to be in the same spatial reference as the view");else{var b=this._get("extent");b===a||d.isSome(b)&&a&&b.equals(a)||(a=d.isSome(a)?a.clone():null,this._set("extent",a))}}},{key:"updating",get:function(){return!!(d.isSome(this._tileFetcher)&&
this._tileFetcher.updating||null!=this._fetchDataInfoPromise||"tiles"===this.mode&&this.layerView.view.featureTiles&&this.layerView.view.featureTiles.updating||this._watchUpdatingTracking&&this._watchUpdatingTracking.updating)}},{key:"updatingTotal",get:function(){return this.updating&&d.isSome(this._tileFetcher)?this._tileFetcher.updatingTotal:0}},{key:"updatingRemaining",get:function(){return this.updating&&d.isSome(this._tileFetcher)?this._tileFetcher.updatingRemaining:0}},{key:"expectedFeatureDiff",
get:function(){return this.updating&&d.isSome(this._tileFetcher)?this._tileFetcher.expectedFeatureDiff:0}},{key:"memoryForUnusedFeatures",get:function(){return d.isSome(this._tileFetcher)?this._tileFetcher.memoryForUnusedFeatures:0}},{key:"maximumNumberOfFeaturesExceeded",get:function(){return!(!d.isSome(this._tileFetcher)||!this._tileFetcher.maximumNumberOfFeaturesExceeded)}},{key:"maximumNumberOfFeatures",get:function(){return d.isSome(this.displayFeatureLimit)?this.displayFeatureLimit.maximumNumberOfFeatures:
0},set:function(a){a!==this.maximumNumberOfFeatures&&this._overrideIfSome("maximumNumberOfFeatures",a)}},{key:"hasMaximumNumberOfFeaturesOverride",get:function(){return this._isOverridden("maximumNumberOfFeatures")}},{key:"mode",get:function(){var a=this.layerView.layer;if("feature"===a.type&&d.isSome(a.infoFor3D))return"snapshot";if(!1===this.layerView.view.qualitySettings?.graphics3D?.snapshotAvailable||this.serviceDataCount===c.FeatureTileController3DConstants.NO_SERVICE_DATA_COUNT||this.vertexLimitExceeded)return"tiles";
var b=this.layerView.view;b=(b=b&&b.featureTiles)&&b.tilingScheme;return a&&a.minScale&&this.serviceDataExtent&&b&&(a=this._approximateExtentSizeAtScale(a.minScale,b),(this.serviceDataExtent.width/a+this.serviceDataExtent.height/a)/2>c.FeatureTileController3DConstants.MAX_SNAPSHOT_MIN_SCALE_FACTOR)?"tiles":!this.maximumNumberOfFeatures||this.serviceDataCount<=this.maximumNumberOfFeatures?"snapshot":"tiles"}},{key:"maxTotalSnapshotVertices",get:function(){const a=this._get("maxTotalSnapshotVertices")||
0,b="snapshot"===this.mode&&d.isSome(this._tileFetcher)&&this._tileFetcher.totalVertices||0;return Math.max(a,b)}},{key:"tileDescriptors",get:function(){return"snapshot"===this.mode?new A([{id:"dummy-tile-full-extent",lij:[0,0,0]}]):this.layerView.view.featureTiles?this.layerView.view.featureTiles.tiles:new A}},{key:"test",get:function(){return{fetchDataInfoPromise:this._fetchDataInfoPromise,tileFetcher:this._tileFetcher}}},{key:"vertexLimitInfo",get:function(){if(d.isNone(this.displayFeatureLimit)||
d.isNone(this.displayFeatureLimit.averageSymbolComplexity))return null;const {averageSymbolComplexity:a,maximumTotalNumberOfPrimitives:b}=this.displayFeatureLimit,{primitivesPerCoordinate:f,primitivesPerFeature:n}=a,m=this._get("vertexLimitInfo");return d.isNone(m)||m.maximumTotalNumberOfPrimitives!==b||m.primitivesPerCoordinate!==f||m.primitivesPerFeature!==n?{primitivesPerCoordinate:f,primitivesPerFeature:n,maximumTotalNumberOfPrimitives:b}:m}},{key:"_supportsExceedsLimitQuery",get:function(){const a=
this.layerView.layer;return null!=a.capabilities&&a.capabilities.operations&&a.capabilities.operations.supportsExceedsLimitStatistics}},{key:"_minimumNumberOfVerticesForGeometry",get:function(){switch(this.layerView.layer.geometryType){case "point":return 1;case "multipoint":return 1;case "polygon":return 4;case "polyline":return 2;case "multipatch":case "mesh":return 3;case null:return 0;default:return 0}}},{key:"debug",get:function(){return{storedFeatures:d.isSome(this._tileFetcher)?this._tileFetcher.storedFeatures:
0,totalFeatures:d.isSome(this._tileFetcher)?this._tileFetcher.totalFeatures:0,totalVertices:d.isSome(this._tileFetcher)?this._tileFetcher.totalVertices:0,missingTiles:d.isSome(this._tileFetcher)?this._tileFetcher.missingTiles:0}}}]);return q}(G.EsriPromiseMixin(D));g.__decorate([h.property({readOnly:!0})],c.FeatureTileController3D.prototype,"type",void 0);g.__decorate([h.property({constructOnly:!0})],c.FeatureTileController3D.prototype,"graphics",void 0);g.__decorate([h.property({constructOnly:!0})],
c.FeatureTileController3D.prototype,"layerView",void 0);g.__decorate([h.property({constructOnly:!0})],c.FeatureTileController3D.prototype,"context",void 0);g.__decorate([h.property()],c.FeatureTileController3D.prototype,"extent",null);g.__decorate([h.property()],c.FeatureTileController3D.prototype,"updating",null);g.__decorate([h.property({readOnly:!0})],c.FeatureTileController3D.prototype,"_watchUpdatingTracking",void 0);g.__decorate([h.property()],c.FeatureTileController3D.prototype,"updatingTotal",
null);g.__decorate([h.property()],c.FeatureTileController3D.prototype,"updatingRemaining",null);g.__decorate([h.property()],c.FeatureTileController3D.prototype,"expectedFeatureDiff",null);g.__decorate([h.property()],c.FeatureTileController3D.prototype,"memoryForUnusedFeatures",null);g.__decorate([h.property()],c.FeatureTileController3D.prototype,"maximumNumberOfFeaturesExceeded",null);g.__decorate([h.property({readOnly:!0})],c.FeatureTileController3D.prototype,"serviceDataExtent",void 0);g.__decorate([h.property({readOnly:!0})],
c.FeatureTileController3D.prototype,"serviceDataCount",void 0);g.__decorate([h.property({readOnly:!0})],c.FeatureTileController3D.prototype,"vertexLimitExceeded",void 0);g.__decorate([h.property()],c.FeatureTileController3D.prototype,"displayFeatureLimit",void 0);g.__decorate([h.property({type:Number})],c.FeatureTileController3D.prototype,"maximumNumberOfFeatures",null);g.__decorate([h.property({readOnly:!0})],c.FeatureTileController3D.prototype,"mode",null);g.__decorate([h.property({readOnly:!0})],
c.FeatureTileController3D.prototype,"maxTotalSnapshotVertices",null);g.__decorate([h.property({readOnly:!0,dependsOn:["mode"]})],c.FeatureTileController3D.prototype,"tileDescriptors",null);g.__decorate([h.property()],c.FeatureTileController3D.prototype,"_tileFetcher",void 0);g.__decorate([h.property()],c.FeatureTileController3D.prototype,"_fetchDataInfoPromise",void 0);g.__decorate([h.property({readOnly:!0})],c.FeatureTileController3D.prototype,"vertexLimitInfo",null);c.FeatureTileController3D=g.__decorate([H.subclass("esri.layers.graphics.controllers.FeatureTileController3D")],
c.FeatureTileController3D);c.FeatureTileController3DConstants=void 0;(function(e){e.NO_SERVICE_DATA_COUNT=Infinity;e.MAX_SNAPSHOT_MIN_SCALE_FACTOR=5;e.reset=function(){e.MAX_FEATURE_COUNT_FOR_EXTENT=1E4;e.QUERY_STATISTICS_TIMEOUT=12E3;e.QUERY_EXTENT_TIMEOUT=1E4}})(c.FeatureTileController3DConstants||(c.FeatureTileController3DConstants={}));c.FeatureTileController3DConstants.reset();Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});