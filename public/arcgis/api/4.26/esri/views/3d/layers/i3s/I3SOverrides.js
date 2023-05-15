// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../request ../../../../core/Accessor ../../../../core/arrayUtils ../../../../core/asyncUtils ../../../../core/byteSizeEstimations ../../../../core/Logger ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../../../../intl/number ../../../../layers/support/featureQueryAll ../../../../support/featureFlags ../FeatureLayerView3D".split(" "),
function(l,w,n,E,F,A,y,B,G,d,H,C,p,O,P,I,J,z,x,K){l.I3SOverrides=function(e){function q(a){a=u.call(this,a);a._warnMaximumChangedObjectsExceeded=!1;a._interactiveEditingSessions=null;a._maximumNumberOfEditOVerrides=5E4;a._original3DOFLDefinitionExpression=null;a._associatedLayerView=null;a._changedObjectIds=new Set;a._pendingFetchChangedObjectIds=null;a._pendingFetchAbortController=new AbortController;return a}w._inherits(q,e);var u=w._createSuper(q);e=q.prototype;e.initialize=function(){this._memCache=
this.memoryController.newCache(`${this.layer.uid}-attribute-overrides`);this._pendingFetchChangedObjectIds=this._fetchChangedObjectIds(this._pendingFetchAbortController?.signal);this._pendingFetchChangedObjectIds.then(()=>{this._pendingFetchChangedObjectIds=this._pendingFetchAbortController=null});this.is3DOFL&&x.direct3DObjectFeatureLayerDisplayEnabled()&&d.isSome(this._associatedLayer)&&this._associatedLayer.load().then(a=>{this.destroyed||(this._original3DOFLDefinitionExpression=a.definitionExpression,
this.addHandles(C.watch(()=>this._definitionExpression,b=>a.definitionExpression=b,C.initial)),this._associatedLayerView=new K({layer:this._associatedLayer,view:this.view}))})};e.destroy=function(){this.is3DOFL&&x.direct3DObjectFeatureLayerDisplayEnabled()&&d.isSome(this._associatedLayerView)&&d.isSome(this._associatedLayer)&&(this._associatedLayer.definitionExpression=d.unwrap(this._original3DOFLDefinitionExpression));this._set("layer",null);this._memCache=d.destroyMaybe(this._memCache);this._pendingFetchAbortController=
d.abortMaybe(this._pendingFetchAbortController);this._pendingFetchChangedObjectIds=null};e.createInteractiveEditSession=function(a){this._changedObjectIds.add(a);this.notifyChange("_changedObjectIds");d.isNone(this._interactiveEditingSessions)&&(this._interactiveEditingSessions=[]);const b=this._interactiveEditingSessions,c=new L(a,{rollback:()=>{A.remove(b,c);0===b.length&&(this._interactiveEditingSessions=null)},commit:f=>{for(const [h,k]of f)this.updateAttributeValue(a,h,k)}});b.unshift(c);return c};
e.apply=async function(a,b,c){if(!d.isNone(b)){var {loadedAttributes:f,attributeData:h}=b;if(!d.isNone(f)&&0!==f.length&&!d.isNone(h)&&(this._pendingFetchChangedObjectIds&&await H.whenOrAbort(this._pendingFetchChangedObjectIds,c),0!==this._changedObjectIds.size)){b={loadedAttributes:f,attributeData:h};var k=this._getOverridesFromCache(a,b,this._changedObjectIds),{objectIds:g,fieldNames:t}=k;0!==g.length&&0!==t.length&&(c=await this._queryOverridesFromAssociatedLayer(g,t,c),d.isNone(c)||this._processOverridesFromAssociatedLayer(a,
c,t,b))}}};e.updateGeometry=function(a){this._changedObjectIds.add(a);this.notifyChange("_changedObjectIds")};e.updateAttributeValue=function(a,b,c){this._changedObjectIds.add(a);this._cacheAttributeValue(a,b,c);this.notifyChange("_changedObjectIds")};e._cacheAttributeValue=function(a,b,c){this._memCache.put(this._getAttributeCacheKey(a,b),c,this._memCacheAttributeValueSize(c))};e._getOverridesFromCache=function(a,{loadedAttributes:b,attributeData:c},f){const h=new Set,k=[];for(var g of b)k[g.index]=
c[g.name];c=new Set;for(g=0;g<a.length;g++){const t=a[g];if(f.has(t))for(const m of b){const r=this._fromCache(t,m.index);void 0!==r?k[m.index][g]=r:(h.add(t),c.add(m.name))}}return{objectIds:Array.from(h),fieldNames:Array.from(c)}};e._fromCache=function(a,b){const c=this._fromInteractiveEditingSession(a,b);if(void 0!==c)return c;a=this._getAttributeCacheKey(a,b);return this._memCache.get(a)};e._fromInteractiveEditingSession=function(a,b){if(!d.isNone(this._interactiveEditingSessions))for(const c of this._interactiveEditingSessions){if(c.objectId!==
a)continue;const f=c.get(b);if(void 0!==f)return f}};e._getAttributeCacheKey=function(a,b){return`${a}-${b}`};e._queryOverridesFromAssociatedLayer=async function(a,b,c){if(0===a.length||0===b.length)return null;a=a.sort((k,g)=>k-g);this._warnMaximumChangedObjectsExceeded&&(this._warnMaximumChangedObjectsExceeded=!1,this._logMaximumObjectsExceededWarning());const f=this.layer.associatedLayer;if(d.isNone(f))return null;const h=f.createQuery();h.where="1\x3d1";h.returnGeometry=!1;h.outFields=[f.objectIdField,
...b];h.cacheHint=!0;h.objectIds=a;b=z.getMaximumQuerySize(f);a=a.length>b?A.splitIntoChunks(a,b).map(k=>{const g=h.clone();g.objectIds=k;return y.resultOrAbort(z.queryAllJSON(f,g,{signal:c}))}):[y.resultOrAbort(z.queryAllJSON(f,h,{signal:c}))];return(await Promise.all(a)).reduce((k,g)=>k.concat(g.ok?g.value.features:[]),[])};e._logMaximumObjectsExceededWarning=function(){let a=`The number of edited objects that are not yet cached in the scene service exceeds the maximum limit. Attribute changes will only be available for the first ${J.formatNumber(this._maximumNumberOfEditOVerrides)} objects. Please consider re-caching the scene service`;
const b=this.layer.portalItem;a=b&&b.loaded?a+` (${b.portal.url}/home/item.html?id=${b.id}#settings)`:a+` (${this.layer.parsedUrl.path})`;G.getLogger("esri.views.3d.layers.i3s.I3SOverrides").warn("#queryOverrides()",this.layer.title,`${a}.`)};e._processOverridesFromAssociatedLayer=function(a,b,c,{loadedAttributes:f,attributeData:h}){var k=this.layer.associatedLayer;if(!d.isNone(k)){k=k.objectIdField;var g=c.map(m=>h[m]),t=new Map(f.map(m=>[m.name,m.index]));f=c.map(m=>t.get(m));a=new Map(Array.from(a,
(m,r)=>[m,r]));for(const m of b){b=m.attributes[k];for(let r=0;r<c.length;r++){const M=f[r],N=a.get(b),D=m.attributes[c[r]];g[r][N]=D;this._cacheAttributeValue(b,M,D)}}}};e._memCacheAttributeValueSize=function(a){return"string"===typeof a?B.estimateStringByteSize(a):B.estimateNumberByteSize()};e._fetchChangedObjectIds=async function(a){var b=this.layer;await b.load({signal:a});this._changedObjectIds.clear();if(!d.isNone(b.associatedLayer)&&b.associatedLayer.capabilities?.operations?.supportsChangeTracking){var c=
this._getFetchChangedObjectIdsServerGen();if(!d.isNone(c)){var f=b.associatedLayer.layerId,h=d.isSome(b.associatedLayer.infoFor3D);a=await y.result(E(`${b.associatedLayer.url}/extractChanges`,{method:"post",query:{f:"json",returnIdsOnly:!0,layers:`[${f}]`,returnUpdates:!0,returnDeletes:h,returnInserts:h,layerServerGens:JSON.stringify([{id:f,serverGen:c}])},timeout:1E4,signal:a}));if(a.ok&&a.value.data?.edits&&1===a.value.data.edits.length)for(c=a.value.data.edits[0],a=d.get(c,"objectIds","adds"),
b=d.get(c,"objectIds","updates"),f=d.get(c,"objectIds","deletes"),c=[],d.isSome(a)&&(c=c.concat(a)),d.isSome(b)&&(c=c.concat(b)),d.isSome(f)&&(c=c.concat(f)),a=Math.min(this._maximumNumberOfEditOVerrides,c.length),a<c.length&&(this._warnMaximumChangedObjectsExceeded=!0),b=c.sort((k,g)=>k-g),c=0;c<a;c++)this._changedObjectIds.add(b[c]);this.notifyChange("_changedObjectIds")}}};e._getFetchChangedObjectIdsServerGen=function(){var a=this.layer;if(d.isSome(a.serviceUpdateTimeStamp)&&d.isSome(a.serviceUpdateTimeStamp.lastUpdate))return a.serviceUpdateTimeStamp.lastUpdate;
a=a.associatedLayer;return d.isSome(a)&&d.isSome(a.serverGens)&&d.isSome(a.serverGens.minServerGen)?a.serverGens.minServerGen:null};w._createClass(q,[{key:"is3DOFL",get:function(){return x.sceneLayerEditingEnabled()&&d.isSome(this._associatedLayer)&&d.isSome(this._associatedLayer.infoFor3D)}},{key:"geometryChangedObjectIds",get:function(){return this.is3DOFL?[...this._changedObjectIds]:[]}},{key:"_associatedLayer",get:function(){return null==this.layer?null:this.layer.associatedLayer}},{key:"_definitionExpression",
get:function(){const a=this.geometryChangedObjectIds;return 0===a.length?"1 \x3d 0":`OBJECTID IN (${a.join(",")})`}},{key:"updating",get:function(){return this.is3DOFL&&x.direct3DObjectFeatureLayerDisplayEnabled()?!d.isSome(this._associatedLayerView)||d.isSome(this._associatedLayerView)&&this._associatedLayerView.updating:!1}},{key:"isEmpty",get:function(){return null==this._pendingFetchChangedObjectIds&&0===this._changedObjectIds.size}},{key:"test",get:function(){const a=this;return{changedObjectIds:Array.from(this._changedObjectIds),
pendingFetchChangedObjectIds:this._pendingFetchChangedObjectIds,get maximumNumberOfEditOVerrides(){return a._maximumNumberOfEditOVerrides},set maximumNumberOfEditOVerrides(b){a._maximumNumberOfEditOVerrides=b}}}}]);return q}(F);n.__decorate([p.property({constructOnly:!0})],l.I3SOverrides.prototype,"view",void 0);n.__decorate([p.property({constructOnly:!0})],l.I3SOverrides.prototype,"layer",void 0);n.__decorate([p.property({readOnly:!0})],l.I3SOverrides.prototype,"is3DOFL",null);n.__decorate([p.property({readOnly:!0})],
l.I3SOverrides.prototype,"geometryChangedObjectIds",null);n.__decorate([p.property()],l.I3SOverrides.prototype,"_associatedLayer",null);n.__decorate([p.property()],l.I3SOverrides.prototype,"_associatedLayerView",void 0);n.__decorate([p.property({constructOnly:!0})],l.I3SOverrides.prototype,"memoryController",void 0);n.__decorate([p.property()],l.I3SOverrides.prototype,"_changedObjectIds",void 0);n.__decorate([p.property()],l.I3SOverrides.prototype,"_pendingFetchChangedObjectIds",void 0);n.__decorate([p.property()],
l.I3SOverrides.prototype,"_definitionExpression",null);n.__decorate([p.property()],l.I3SOverrides.prototype,"updating",null);n.__decorate([p.property()],l.I3SOverrides.prototype,"isEmpty",null);l.I3SOverrides=n.__decorate([I.subclass("esri.views.3d.layers.i3s.I3SOverrides")],l.I3SOverrides);let L=function(){function e(u,a){this.objectId=u;this._options=a;this._updates=new Map;this._state=v.ACTIVE}var q=e.prototype;q.get=function(u){return this._updates.get(u)};q.set=function(u,a){this._isActive&&
this._updates.set(u,a)};q.rollback=function(){this._isActive&&(this._state=v.ROLLED_BACK,this._options.rollback())};q.commit=function(){this._isActive&&(this._state=v.COMMITTED,this._options.commit(this._updates),this._updates.clear())};w._createClass(e,[{key:"_isActive",get:function(){return this._state===v.ACTIVE}}]);return e}();var v;(function(e){e[e.ACTIVE=0]="ACTIVE";e[e.COMMITTED=1]="COMMITTED";e[e.ROLLED_BACK=2]="ROLLED_BACK"})(v||(v={}));Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});