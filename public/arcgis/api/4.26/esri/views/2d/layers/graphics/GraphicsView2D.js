// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/BidiText ../../../../core/HandleOwner ../../../../core/has ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/accessorSupport/decorators/subclass ../../../../geometry/SpatialReference ../../../../geometry/support/aaBoundingRect ../../../../geometry/support/coordsUtils ../../../../geometry/support/jsonUtils ../../../../geometry/support/normalizeUtilsSync ../../../../geometry/support/spatialReferenceUtils ../../../../layers/graphics/data/projectionSupport ../../../../symbols/cim/CIMSymbolHelper ../../../../symbols/support/defaults ../../engine/webgl/definitions ../../engine/webgl/enums ../../engine/webgl/GraphicTile ../../engine/webgl/TileData ../../engine/webgl/WGLDisplayObject ../../engine/webgl/mesh/MeshData ../../engine/webgl/mesh/factories/WGLMeshFactory ../../engine/webgl/mesh/templates/WGLTemplateStore ../../engine/webgl/util/Matcher ../features/schemaUtils ../features/support/AttributeStore ../features/support/ComputedAttributeStorage ../features/support/GraphicsReader ./GraphicStore ./graphicsUtils ../support/cimSymbolUtils ../../../layers/GraphicsView ../../../webgl/capabilities ../features/createSymbolSchema".split(" "),
function(A,x,t,K,L,M,v,l,N,y,la,ma,O,P,C,Q,q,R,H,I,S,D,T,U,V,J,W,X,Y,Z,aa,E,ba,ca,da,ea,n,fa,ha,ia,ja){function F(f,z,B){let a=B.get(f);a||(a={tile:z,addedOrModified:[],removed:[]},B.set(f,a));return a}const ka=M("esri-2d-graphic-debug");t=function(f){function z(a){a=B.call(this,a);a._storage=new ca.ComputedAttributeStorage;a._displayIds=new Map;a._controller=new AbortController;a._tiles=new Map;a._graphicStoreUpdate=!1;a._graphicsSet=new Set;a._matcher=Promise.resolve(null);a._tileUpdateSet=new Set;
a._tilesToUpdate=new Map;a._graphicIdToAbortController=new Map;a._attached=!1;a._updatingGraphicsTimer=null;a._hashToExpandedSymbol=new Map;a._hashToExpandedSymbolPromise=new Map;a._hashToCIMSymbolPromise=new Map;a._hashToCIM=new Map;a._processing=!1;a._needsProcessing=!1;a._pendingUpdate={added:new Set,updated:new Set,removed:new Set};a.lastUpdateId=-1;a.updateRequested=!1;a.defaultPointSymbolEnabled=!0;a.graphicUpdateHandler=a.graphicUpdateHandler.bind(A._assertThisInitialized(a));return a}A._inherits(z,
f);var B=A._createSuper(z);f=z.prototype;f.destroy=function(){this._updatingGraphicsTimer&&(clearTimeout(this._updatingGraphicsTimer),this._updatingGraphicsTimer=null,this.notifyChange("updating"));this._controller.abort();this.container.destroy();this._set("graphics",null);this._graphicStore.clear();this._attributeStore=null;this._hashToExpandedSymbol.clear();this.renderer=this.view=null;this._hashToCIM.clear();this._hashToCIMSymbolPromise.clear();this._hashToExpandedSymbolPromise.clear()};f._createMatcher=
function(a,b,c){if(a){const d=E.createSymbolSchemaOptions(a);a=E.createMatcherSchema({indexCount:0,fields:{}},"feature",a,d);this._matcher=aa.createMatcher(a,b,null,c)}};f._createDisplayId=function(a){let b=this._displayIds.get(a);b||(b=this._storage.createDisplayId(),this._displayIds.set(a,b));return b};f.initialize=function(){this._attributeStore=new ba({type:"local",initialize:b=>Promise.resolve(this.container.attributeView.initialize(b)),update:b=>this.container.attributeView.requestUpdate(b),
render:()=>this.container.requestRender()},ia.getWebGLCapabilities("2d"));this.container.hasHighlight=()=>this._attributeStore.hasHighlight;const a=new Z.WGLTemplateStore(this.container.getMaterialItems.bind(this.container),this.view.featuresTilingScheme.tileInfo);this._graphicStore=new ea(this.view.featuresTilingScheme,this.view.state.scale,this.uid,this.graphics,b=>{this._createDisplayId(b.uid);this._setFilterState(b.uid,b.visible)},b=>{const c=this._displayIds.get(b.uid);this._displayIds.delete(b.uid);
this._storage.releaseDisplayId(c)},this._hashToCIM);this._meshFactory=new Y.WGLMeshFactory(null,this.uid,a);this._templateStore=a;this.handles.add([N.watch(()=>this.renderer,b=>{this._createMatcher(b,a,this.container.stage.resourceManager);for(const c of this.graphics)this._pendingUpdate.updated.add(c);this.requestUpdate()}),this.view.graphicsTileStore.on("update",this._onTileUpdate.bind(this)),this.container.on("attach",()=>{ka&&this.container.enableRenderingBounds(()=>this._graphicStore.getAllBounds());
0<this.graphics.items.length&&this._graphicsChangeHandler({target:this.graphics,added:this.graphics.items,removed:[],moved:[]});this.handles.add(this.graphics.on("change",c=>this._graphicsChangeHandler(c)),"graphics");const b=this.container.stage.resourceManager;this._createMatcher(this.renderer,a,b);this._graphicStore.setResourceManager(b);this._attached=!0;this.notifyChange("updating")})]);this._onTileUpdate({added:this.view.graphicsTileStore.tiles,removed:[]})};f.hitTest=function(a){if(!this.view||
!this.view.position)return[];const {resolution:b,rotation:c}=this.view.state;return this._graphicStore.hitTest(a.x,a.y,2,b,c)};f.update=function(a){l.throwIfAborted(this._controller.signal);({resolution:a}=a.state);this._graphicStore.updateLevel(a);this._graphicStoreUpdate=!0;this.updateRequested=!1;0<this._pendingUpdate.updated.size&&(this._processing?this._needsProcessing=!0:this._updateGraphics())};f.viewChange=function(){this.requestUpdate()};f.requestUpdate=function(){this.updateRequested||(this.updateRequested=
!0,this.requestUpdateCallback())};f.processUpdate=function(a){this.updateRequested&&(this.updateRequested=!1,this.update(a))};f.graphicUpdateHandler=function(a){const {graphic:b,property:c}=a;switch(c){case "attributes":case "geometry":case "symbol":this._pendingUpdate.updated.add(b);this.requestUpdate();break;case "visible":this._setFilterState(b.uid,b.visible),this._attributeStore.sendUpdates()}};f.setHighlight=function(a){const b=a.map(c=>this._displayIds.get(c)).filter(v.isSome);this._attributeStore.setHighlight(a,
b)};f._getIntersectingTiles=function(a){a=this._graphicStore.getBounds(a);if(!a||0===C.width(a)||0===C.height(a))return[];const b=n.intersectingInternationalDateline(a,this.view.spatialReference);return v.isSome(b)?[...(new Set([...this.view.graphicsTileStore.boundsIntersections(b[0]),...this.view.graphicsTileStore.boundsIntersections(b[1])]))]:this.view.graphicsTileStore.boundsIntersections(a)};f._updateTile=async function(a){l.throwIfAborted(this._controller.signal);const b=a.tile;var c=this._getGraphicsData(this._templateStore,
b,a.addedOrModified);c=await this._processGraphics(b,c);l.throwIfAborted(this._controller.signal);this._patchTile(b.key,{type:"update",addOrUpdate:c,remove:a.removed,end:!0,clear:!1,sort:!1});return c};f._patchTile=function(a,b){if(a=this._tiles.get(a))this.container.onTileData(a,b),this.container.requestRender()};f._graphicsChangeHandler=function(a){const b=this._pendingUpdate;for(const c of a.added)b.added.add(c);for(const c of a.moved)b.updated.add(c);for(const c of a.removed)this._pendingUpdate.added.has(c)?
b.added.delete(c):b.removed.add(c);this._processing?this._needsProcessing=!0:this._updateGraphics()};f._getGraphicsToUpdate=function(){const a={added:[],removed:[],updated:[]};if(!this.graphics)return a;const b=this._pendingUpdate;for(const c of this.graphics.items)b.added.has(c)?a.added.push(c):b.updated.has(c)&&a.updated.push(c);for(const c of b.removed)this._graphicStore.has(c)&&a.removed.push(c);b.added.clear();b.removed.clear();b.updated.clear();return a};f._updateGraphics=async function(){this._processing=
!0;const {added:a,removed:b,updated:c}=this._getGraphicsToUpdate(),d=this._tilesToUpdate;try{if(!this._graphicStoreUpdate){var {resolution:e}=this.view.state;this._graphicStore.updateLevel(e)}e=[];const u=Array(a.length+b.length);for(let h=0;h<c.length;h++){var g=c[h];const r=this._getIntersectingTiles(g);for(const w of r){var k=w.id;F(k,w,d).removed.push(this._displayIds.get(g.uid))}e.push(this._updateGraphic(g,null));u[h]=g}var p=c.length;for(g=0;g<a.length;g++){const h=a[g];u[p+g]=h;this._graphicsSet.add(h);
e.push(this._addGraphic(h))}for(const h of b){this._abortProcessingGraphic(h.uid);const r=this._getIntersectingTiles(h);for(const w of r)k=w.id,F(k,w,d).removed.push(this._displayIds.get(h.uid));this._graphicsSet.delete(h);this._graphicStore.remove(h)}this._flipUpdatingGraphics();await Promise.all(e);let m;for(p=0;p<u.length;p++){m=u[p];const h=this._getIntersectingTiles(m);for(const r of h)k=r.id,F(k,r,d).addedOrModified.push(m)}this._graphicStore.updateZ();k=[];for(const [,h]of d)k.push(this._updateTile(h));
await Promise.all(k)}catch(u){l.isAbortError(u)}for(const u of b)try{const m=await this._getSymbolForGraphic(u,null);if(m){const h=m.hash();this._hashToExpandedSymbol.delete(h)}}catch(m){l.isAbortError(m)}d.clear();this.notifyChange("updating");this._processing=!1;this._needsProcessing&&(this._needsProcessing=!1,this._updateGraphics())};f._getArcadeInfo=function(a){const b=(a.attributes?Object.keys(a.attributes):[]).map(c=>({name:c,alias:c,type:"string"===typeof a.attributes[c]?"esriFieldTypeString":
"esriFieldTypeDouble"}));return v.isNone(a.geometry)?null:{geometryType:q.getJsonType(a.geometry),spatialReference:P.fromJSON(a.geometry.spatialReference),fields:b}};f._getSymbolForGraphic=function(a,b){l.throwIfAborted(this._controller.signal);return v.isSome(a.symbol)?Promise.resolve(a.symbol):v.isSome(this.renderer)?this.renderer.getSymbolAsync(a,{scale:this.view.scale,signal:v.isSome(b)?b.signal:null}):Promise.resolve(this._getNullSymbol(a))};f._getCIMSymbol=function(a,b,c){var d=this._hashToCIM.get(b);
if(d)return Promise.resolve(d);a=S.symbolToCIM(a);if(v.isSome(a)){if("CIMSymbolReference"===a.type)return d=a,this._hashToCIM.set(b,d),Promise.resolve(d);if(d=this._hashToCIMSymbolPromise.get(b))return d;d=a.fetchCIMSymbol(c).then(e=>{this._hashToCIM.set(b,e.data);this._hashToCIMSymbolPromise.delete(b);return e}).catch(e=>{this._hashToCIMSymbolPromise.delete(b);l.throwIfAbortError(e);return null});this._hashToCIMSymbolPromise.set(b,d);return d}return Promise.resolve(null)};f._expandCIMSymbol=function(a,
b,c,d){var e=this._hashToExpandedSymbol.get(c);if(e)return Promise.resolve(e);if(e=this._hashToExpandedSymbolPromise.get(c))return e;e=this.container.stage;b=this._getArcadeInfo(b);const g=E.createSymbolSchemaOptions(null);a=ja.createSymbolSchema(a,g);e=fa.expandSymbol(a,b,e.resourceManager,d);this._hashToExpandedSymbolPromise.set(c,e);e.then(k=>{this._hashToExpandedSymbol.set(c,k);this._hashToExpandedSymbolPromise.delete(c);return k});return e};f._getSymbolResources=async function(a,b){l.throwIfAborted(this._controller.signal);
return this.container.stage?this._getSymbolForGraphic(a,b).then(c=>{if(!c)return null;const d=c.hash();return this._getCIMSymbol(c,d,b).then(e=>v.isNone(e)?null:this._expandCIMSymbol(e,a,d,b).then(g=>{const k=g.layers.filter(p=>"text"===p.type&&"string"===typeof p.text);if(k&&0<k.length){const p=Array(k.length);for(let m=0;m<k.length;m++){const h=k[m],r=[],[w]=K.bidiText(h.text);h.text=w;for(let G=0;G<w.length;G++)r.push(w.charCodeAt(G));p[m]={symbol:h,id:m,glyphIds:r}}const u=new Map;return this.container.getMaterialItems(p).then(m=>
{v.assertIsSome(m);for(let h=0;h<k.length;h++){const r=k[h];u.set(r.cim,{text:r.text,mosaicItem:m[h].mosaicItem})}return{symbol:g,textInfo:u,hash:d}})}return{symbol:g,hash:d}}))}).catch(c=>{l.throwIfAbortError(c);return null}):null};f._projectAndNormalizeGeometry=async function(a,b){l.throwIfAborted(this._controller.signal);if(v.isNone(a.geometry)||"mesh"===a.geometry.type)return null;var c=a.geometry;q.isPolygon(c)?c.rings=c.rings:q.isPolyline(c)?c.paths=c.paths:q.isExtent(c)&&(a=await this._getSymbolForGraphic(a,
b),l.throwIfAborted(this._controller.signal),c=a&&(n.isMarkerSymbol(a.type)||n.isTextSymbol(a.type))?c.center:n.polygonFromExtent(c));await I.checkProjectionSupport(c.spatialReference,this.view.spatialReference);a=R.normalizeCentralMeridianForDisplay(c);(c=I.project(a,c.spatialReference,this.view.spatialReference))&&Q.closeRingsAndFixWinding(c);return c};f._onTileUpdate=function(a){const b=H.getInfo(this.view.spatialReference);if(a.added&&0<a.added.length)for(const c of a.added)this._addNewTile(c,
b);if(a.removed&&0<a.removed.length)for(const c of a.removed)this._removeTile(c.key)};f._addGraphic=async function(a){this._abortProcessingGraphic(a.uid);l.throwIfAborted(this._controller.signal);var b=new AbortController;this._graphicIdToAbortController.set(a.uid,b);b={signal:b.signal};try{await this._addOrUpdateGraphic(a,b),l.throwIfAborted(this._controller.signal),this._graphicIdToAbortController.delete(a.uid)}catch(c){if(this._graphicIdToAbortController.delete(a.uid),!l.isAbortError(c))throw c;
}};f._updateGraphic=function(a,b){l.throwIfAborted(this._controller.signal);const c=this._projectAndNormalizeGeometry(a,b);b=this._getSymbolResources(a,b);return Promise.all([c,b]).then(([d,e])=>{l.throwIfAborted(this._controller.signal);this._graphicStore.addOrModify(a,e,d)})};f._addOrUpdateGraphic=function(a,b){l.throwIfAborted(this._controller.signal);const c=this._projectAndNormalizeGeometry(a,b);b=this._getSymbolResources(a,b);return Promise.all([c,b]).then(([d,e])=>{l.throwIfAborted(this._controller.signal);
this._graphicsSet.has(a)&&this._graphicStore.addOrModify(a,e,d)})};f._addTile=function(a){var b=this.view.featuresTilingScheme.getTileBounds(C.create(),a);const c=this.view.featuresTilingScheme.getTileResolution(a.level);b=new V.GraphicTile(a,c,b[0],b[3]);this._tiles.set(a,b);this.container.addChild(b);return b};f._addNewTile=async function(a,b){const c=this._addTile(a.key),d=this._graphicStore.queryTileData(this._templateStore,a);if(0!==d.length){if(b){b=Math.round((b.valid[1]-b.valid[0])/a.resolution);
for(var e of d)e.geometry&&(q.isPoint(e.geometry)||q.isMultipoint(e.geometry))&&this._wrapPoints(e,b)}e=a.key;this._tileUpdateSet.add(a.key);this.notifyChange("updating");try{const g={type:"update",clear:!1,addOrUpdate:await this._processGraphics(a,d),remove:[],end:!0,sort:!1};c.patch(g);this._tileUpdateSet.delete(e);this.notifyChange("updating")}catch(g){if(this._tileUpdateSet.delete(e),this.notifyChange("updating"),!l.isAbortError(g))throw g;}}};f._removeTile=function(a){if(this._tiles.has(a)){var b=
this._tiles.get(a);this.container.removeChild(b);b.destroy();this._tiles.delete(a)}};f._setFilterState=function(a,b){const c=this._displayIds.get(a);a=this._attributeStore.getHighlightFlag(a);this._attributeStore.setData(c,0,0,a|(b?T.FILTER_FLAG_0:0))};f._getGraphicsData=function(a,b,c){const d=H.getInfo(this.view.spatialReference);a=this._graphicStore.getGraphicsData(a,b,c);if(d){b=Math.round((d.valid[1]-d.valid[0])/b.resolution);for(const e of a)e.geometry&&(q.isPoint(e.geometry)||q.isMultipoint(e.geometry))&&
this._wrapPoints(e,b)}return a};f._wrapPoints=function(a,b){const c=a.geometry;q.isMultipoint(c)?this._wrapMultipoint(c,b):this._wrapPoint(a,b)};f._wrapMultipoint=function(a,b){var c=a.points;const d=[];let e=0,g=0;for(const [k,p]of c)d.push([k+e,p]),e=0,b===n.TILE_SIZE?(c=5*n.PIXEL_BUFFER,k+g<c?(d.push([b,0]),e=-b):k+g>n.TILE_SIZE-c&&(d.push([-b,0]),e=b)):k+g<-n.PIXEL_BUFFER?(d.push([b,0]),e=-b):k+g>n.TILE_SIZE+n.PIXEL_BUFFER&&(d.push([-b,0]),e=b),g+=k;a.points=d};f._wrapPoint=function(a,b){const c=
a.geometry;if(b===n.TILE_SIZE){const d=5*n.PIXEL_BUFFER;c.x<d?a.geometry={points:[[c.x,c.y],[b,0]]}:c.x>n.TILE_SIZE-d&&(a.geometry={points:[[c.x,c.y],[-b,0]]})}else c.x<-n.PIXEL_BUFFER?a.geometry={points:[[c.x,c.y],[b,0]]}:c.x>n.TILE_SIZE+n.PIXEL_BUFFER&&(a.geometry={points:[[c.x,c.y],[-b,0]]})};f._processGraphics=function(a,b,c){if(!b||!b.length||!this._meshFactory)return Promise.resolve(null);const d=da.GraphicsReader.from(b,this.uid,a.transform),e=this._meshFactory;return this._matcher.then(g=>
e.analyzeGraphics(d,this.container.stage.resourceManager,g,null,null,c).then(()=>{this._attributeStore.sendUpdates();return this._processAnalyzedGraphics(a,d)}))};f._processAnalyzedGraphics=function(a,b){const c=this._meshFactory;var d=b.getSize();b=b.getCursor();const e=new X.MeshData(a.key.id,{features:d,records:d,metrics:0},U.WGLSymbologyType.DEFAULT,!1,!1);for(d=[];b.next();){const g=b.readGraphic();g.insertAfter=-1===g.insertAfter?-1:this._displayIds.get(g.insertAfter);g.displayId=this._displayIds.get(g.attributes[this.uid]);
const k=new W(g.displayId);k.insertAfter=g.insertAfter;d.push(k);c.writeGraphic(e,b,a.level,this.container.stage.resourceManager)}a=e.serialize(a.tileInfoView.tileInfo.isWrappable);return 1!==a.length?new J.TileData:J.TileData.fromVertexData(a[0].message,d)};f._abortProcessingGraphic=function(a){this._graphicIdToAbortController.get(a)?.abort()};f._getNullSymbol=function(a){a=a.geometry;return q.isPolyline(a)?D.errorPolylineSymbol2D:q.isPolygon(a)||q.isExtent(a)?D.errorPolygonSymbol2D:this.defaultPointSymbolEnabled?
D.errorPointSymbol2D:null};f._flipUpdatingGraphics=function(){this._updatingGraphicsTimer&&clearTimeout(this._updatingGraphicsTimer);this._updatingGraphicsTimer=setTimeout(()=>{this._updatingGraphicsTimer=null;this.notifyChange("updating")},160);this.notifyChange("updating")};A._createClass(z,[{key:"updating",get:function(){return!this._attached||null!==this._updatingGraphicsTimer||0<this._pendingUpdate.added.size||0<this._pendingUpdate.removed.size||0<this._pendingUpdate.updated.size||0<this._tileUpdateSet.size||
0<this._tilesToUpdate.size||this._attributeStore?.updatingHandles.updating}}]);return z}(ha.GraphicsView(L.HandleOwnerMixin(t)));x.__decorate([y.property({constructOnly:!0})],t.prototype,"requestUpdateCallback",void 0);x.__decorate([y.property()],t.prototype,"container",void 0);x.__decorate([y.property({constructOnly:!0})],t.prototype,"graphics",void 0);x.__decorate([y.property()],t.prototype,"updating",null);x.__decorate([y.property()],t.prototype,"view",void 0);x.__decorate([y.property()],t.prototype,
"updateRequested",void 0);x.__decorate([y.property()],t.prototype,"defaultPointSymbolEnabled",void 0);return t=x.__decorate([O.subclass("esri.views.2d.layers.support.GraphicsView2D")],t)});