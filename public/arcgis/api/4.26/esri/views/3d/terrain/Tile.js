// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/mathUtils ../../../core/maybe ../../../core/ObjectPool ../../../chunks/vec2 ../../../chunks/vec2f64 ../../../chunks/vec3 ../../../chunks/vec3f64 ../../../chunks/common ../../../geometry/ellipsoidUtils ../../../geometry/support/aaBoundingRect ../../../chunks/sphere ../../../layers/support/layerUtils ../../2d/engine/vectorTiles/VectorTile ../support/StreamDataLoader ./ElevationBounds ./ElevationTileAgent ./interfaces ./LayerClass ./MapTileAgent ./RasterTile ./TerrainConst ./terrainUtils ./TileAgent ./TilePerLayerInfo ./TileTexture ./TileUpdate ./tileUtils ../../webgl/Util".split(" "),
function(r,Y,Z,v,O,D,aa,m,z,ba,ca,E,da,P,F,ea,Q,R,l,q,S,fa,G,h,w,H,ha,n,I,T){function B(g){g.dispose();g instanceof R.ElevationTileAgent?J.release(g):g instanceof S.MapTileAgent&&K.release(g)}function U(g,e,a){return v.isNone(g)||v.isNone(e)||e===g?!1:g.level>=e.level?V(g,e,a):V(e,g,h.oppositeCorner(a))}function V(g,e,a){h.internalAssert(g.level>=e.level);var b=h.isWestCorner(a),c=h.isNorthCorner(a),d=g.extent;a=e.extent;var f=[b?d[0]:d[2],c?d[3]:d[1]];const k=[b?a[2]:a[0],c?a[1]:a[3]];b=1E-5*(d[2]-
d[0]);c=h.almostEquals(f[0],k[0],b)||g.surface.isGlobal&&h.almostEquals(f[0],-k[0],b);f=h.almostEquals(f[1],k[1],b);if(c&&f)return!0;if(g.level===e.level||!c&&!f)return h.internalAssert(!1),!1;c?(g=d[1],d=d[3],a=a[1]-b<=g&&g<=d&&d<=a[3]+b):(g=d[0],d=d[2],a=a[0]-b<=g&&g<=d&&d<=a[2]+b);h.internalAssert(a);return a}let ja=function(){function g(){this.lij=[0,0,0];this._children=[null,null,null,null];this._pendingUpdates=0;this.renderData=null;this._dirty=!0;this._previouslyRendered=!1;this.extent=E.create();
this._elevationBounds=aa.create();this.layerInfo=[[],[]];this.extentInRadians=E.create();this.centerAtSeaLevel=z.create();this._center=[z.create(),da.create(),z.create()];this.up=z.unitZ();this._intersectsClippingArea=this._isWithinClippingArea=!0;this._maxTesselation=0;this._usedMemory=null;this.extentMidY=this.extentMidX=this._curvatureHeight=this._edgeLen2=this._edgeLen=this.renderOrder=this.screenDepth=this._mapDataRefCount=this._mapTileMemoryInternal=0;this.distanceToPOI=-1;this._lastPOI=z.create()}
g.prune=function(){K.prune(0);J.prune(0);H.TilePerLayerInfo.prune()};var e=g.prototype;e.computeVisibility=function(){this._dirty=!1;var a=this.parent?.frustumVisibility??l.TileFrustumVisibility.INTERSECTS;this._frustumVisibility=a===l.TileFrustumVisibility.INSIDE?l.TileFrustumVisibility.INSIDE:a===l.TileFrustumVisibility.OUTSIDE?l.TileFrustumVisibility.OUTSIDE:this._calculateFrustumVisibilityStatus(this.surface.frustum);a=this._frustumVisibility!==l.TileFrustumVisibility.OUTSIDE&&this._intersectsClippingArea;
a!==this._visible&&(this._visible=a,this._surface.emit("tiles-visibility-changed"),this._surface.renderer.setDirty(),this.updateAgentSuspension())};e.init=function(a,b,c){this.lij[0]=a[0];this.lij[1]=a[1];this.lij[2]=a[2];this.ellipsoid=ca.getReferenceEllipsoid(c.tilingScheme.spatialReference);c.tilingScheme.getExtent(a[0],a[1],a[2],this.extent);c.tilingScheme.convertExtentToRadians(this.extent,this.extentInRadians);this.extentMidX=.5*(this.extent[0]+this.extent[2]);this.extentMidY=.5*(this.extent[1]+
this.extent[3]);this._intersectsClippingArea=this._isWithinClippingArea=!0;this._clippingArea=null;this._mapDataRefCount=0;c.upsampleMapCache.pop(this.key);this._edgeLen2=this._edgeLen=0;this._center[r.CenterPosition.MIDDLE][3]=0;this.elevationLevel=a?a[0]:0;b&&b.elevationBounds?D.copy(this._elevationBounds,b.elevationBounds):D.set(this._elevationBounds,0,0);this._pendingUpdates=0;this.renderData=null;this.screenDepth=0;this._previouslyRendered=this._visible=!1;this._parent=b;this.unsetChildren();
this._surface=c;this.updateVisibility();for(const d of q.LayerClasses){a=c.numLayers(d);b=this.layerInfo[d];for(const f of b)f.release();b.length=a;for(let f=0;f<a;f++)b[f]=H.TilePerLayerInfo.acquire(this._surface.upsampleInfoPool),d===q.LayerClass.ELEVATION&&this.findElevationBoundsForLayer(f,-1)}this.computeElevationBounds();this._maxTesselation=Math.min(c.tilingScheme.pixelSize,G.MAX_PATCH_TESSELATION)};e.release=function(){h.weakAssert(!this.renderData,"tile.renderData was not unloaded");this._surface.upsampleMapCache.pop(this.key);
for(var a of q.LayerClasses){for(const b of this.layerInfo[a])b.release();this.layerInfo[a].length=0}this._parent=null;for(a=0;4>a;++a)this._children[a]=null;this._surface=null;this.setMemoryDirty()};e.refMapData=function(){++this._mapDataRefCount;this._isCached||this._surface.upsampleMapCache.pop(this.key)};e.unrefMapData=function(){--this._mapDataRefCount;if(this._isCached){this.setMemoryDirty();const a=this._cachedMemory;0<a&&this._surface.upsampleMapCache.put(this.key,this,a)}};e.setMemoryDirty=
function(){this._usedMemory=null};e._ensureUsedMemory=function(){if(v.isSome(this._usedMemory))return this._usedMemory;let a=this._mapTileMemoryInternal=this._usedMemory=0;for(var {data:b}of this.layerInfo[q.LayerClass.MAP])b instanceof F.VectorTile?a+=this._getTerrainDataMemory(b):this._mapTileMemoryInternal+=this._getTerrainDataMemory(b);b=this._cpuImageMemorySize;for(const c of this.layerInfo[q.LayerClass.ELEVATION])this._usedMemory+=c.data?b:0;this.renderData&&(this._usedMemory+=this.renderData.estimatedGeometryMemoryUsage,
this._mapTileMemoryInternal+=T.getGpuMemoryUsage(this.renderData.textureDescriptor));this._isCached&&this._surface.upsampleMapCache.updateSize(this.key,this,this._mapTileMemoryInternal+a);return this._usedMemory};e.getUsedMemoryForLayer=function(a,b){b=this.layerInfo[a][b];return b?.data?a===q.LayerClass.MAP?this._isCached?0:this._getTerrainDataMemory(b.data):a===q.LayerClass.ELEVATION?this._cpuImageMemorySize:0:0};e._getTerrainDataMemory=function(a){return a instanceof ha?T.getGpuMemoryUsage(a.texture):
a instanceof HTMLImageElement||a instanceof ea.ImageWithType?this._cpuImageMemorySize:a instanceof F.VectorTile||a instanceof fa.RasterTile?a.memoryUsage:0};e.updateScreenDepth=function(a){var b=this._center[r.CenterPosition.MIDDLE];const c=b[0],d=b[1];b=b[2];const f=a[2]*c+a[6]*d+a[10]*b+a[14];this.screenDepth=0>f?0:f/(a[3]*c+a[7]*d+a[11]*b+a[15])};e.shouldSplit=function(a,b,c){if(!this.visible||v.isSome(a.frustum)&&(!this._intersectsClippingArea||this._calculateFrustumVisibilityStatus(a.frustum)===
l.TileFrustumVisibility.OUTSIDE))return n.TileUpdate.NONE;const d=this.level;m.subtract(C,this._center[r.CenterPosition.MIDDLE],b);var f=m.squaredLength(C),k=C;let x=r.CenterPosition.MIDDLE;m.subtract(L,this._center[r.CenterPosition.TOP],b);var t=m.squaredLength(L);t<f&&(f=t,k=L,x=r.CenterPosition.TOP);m.subtract(M,this._center[r.CenterPosition.BOTTOM],b);t=m.squaredLength(M);t<f&&(f=t,k=M,x=r.CenterPosition.BOTTOM);if(this._edgeLen2>f&&d<a.maxLod)return n.TileUpdate.SPLIT;const p=v.isSome(c)?c-d:
Infinity;f=Math.sqrt(f);const y=this._edgeLen/(a.fovX*f*2),A=()=>{if(d<a.maxLod)return this.elevationLevel=d,n.TileUpdate.NONE;const W=d+Math.ceil(-Math.log2(a.relativeWidthLimit/y));return W!==this.elevationLevel?(this.elevationLevel=W,n.TileUpdate.ELEVATION):n.TileUpdate.NONE};if(.5>=p)return A();const N=m.dot(this.up,C);t=this._elevationBounds[1]-this._elevationBounds[0];const X=t/this.edgeLen;if(a.aboveGround&&0<N&&.001>X&&0<N/f-Math.sin(this._curvatureHeight/(this.edgeLen*Math.SQRT1_2)*Math.PI)-
X)return n.TileUpdate.NONE;c=v.isSome(c)?3-Math.min(p,2):1;if(y*c<a.relativeWidthLimit||d>=a.maxLod)return A();if(7>d)return n.TileUpdate.SPLIT;m.scale(u,this.up,N);m.subtract(u,u,k);k=m.squaredLength(u);if(k<=this.radius*this.radius)return n.TileUpdate.SPLIT;m.scale(u,u,this.radius/Math.sqrt(k));m.add(u,u,this._center[x]);m.subtract(u,b,u);return Math.min(1,(Math.abs(m.dot(u,this.up))+.5*t+this._curvatureHeight)/m.length(u))*(this._edgeLen/(a.fovY*f*2))*c<.1/a.angledSplitBias*a.relativeHeightLimit?
n.TileUpdate.NONE:n.TileUpdate.SPLIT};e.setChildren=function(a,b,c,d){h.weakAssert(!!(a&&b&&c&&d),"Null child passed");this._children[0]=a;this._children[1]=b;this._children[2]=c;this._children[3]=d};e.unsetChildren=function(){this._children[0]=null;this._children[1]=null;this._children[2]=null;this._children[3]=null};e.load=function(){this.refMapData();for(const a of q.LayerClasses)this._createOrUpdateAgents(0,a);this.surface.renderer.loadTile(this)};e.unload=function(a){a.unloadTile(this);for(const b of q.LayerClasses){a=
this.layerInfo[b];for(const c of a)c.loadingAgent&&c.loadingAgent!==w.TILE_AGENT_DONE&&(B(c.loadingAgent),c.loadingAgent=null),c.pendingUpdates=0}this.resetPendingUpdate(n.TileUpdate.GEOMETRY);this.resetPendingUpdate(n.TileUpdate.TEXTURE_NOFADING);this.resetPendingUpdate(n.TileUpdate.TEXTURE_FADING);this.unrefMapData()};e.unloadMapData=function(){const a=this.layerInfo[q.LayerClass.MAP];for(const b of a)b.loadingAgent&&b.loadingAgent!==w.TILE_AGENT_DONE&&(B(b.loadingAgent),b.loadingAgent=null),b.pendingUpdates=
0;this.renderData&&this.renderData.releaseTexture();this.setMemoryDirty()};e.updateClippingStatus=function(a){if(E.equals(a,this._clippingArea))return!1;var b=this._intersectsClippingArea;const c=this._isWithinClippingArea;v.isSome(a)?(this._intersectsClippingArea=this.intersectsExtent(a),this._isWithinClippingArea=this._isWithinExtent(a)):this._isWithinClippingArea=this._intersectsClippingArea=!0;this._clippingArea=a;this.updateVisibility();a=c&&this._isWithinClippingArea;b=!c&&!b&&!this._isWithinClippingArea&&
!this._intersectsClippingArea;!this.renderData||a||b||this.setPendingUpdate(n.TileUpdate.GEOMETRY);return!0};e.updateVisibility=function(){this._dirty=!0;this._surface.setTileTreeDirty()};e.getLayerInfo=function(a,b){return this.layerInfo[b][a]};e.hasLayerData=function(a,b){a=this.layerInfo[b][a];return!(!a||!a.data||a.dataInvalidated)};e._isSuspended=function(a){return this.hasPendingUpdate(n.TileUpdate.SPLIT)?!0:a===q.LayerClass.ELEVATION?!1:!this.loadable};e.hasPendingUpdate=function(a){return(this._pendingUpdates&
a)===a};e.setPendingUpdate=function(a){this._pendingUpdates|=a;a===n.TileUpdate.SPLIT||a===n.TileUpdate.MERGE?this._surface.setTileTreeDirty():this._surface.requestUpdate()};e.resetPendingUpdate=function(a){return this.hasPendingUpdate(a)?(this._pendingUpdates&=~a,!0):!1};e.requestLayerData=function(a,b,c){const d=this.layerInfo[b][a];if(d.waitingAgents.has(c))return console.warn("agent already requested this piece of map data (tile %s, agent tile %s, layer: %d/%d)",this.lij.toString(),c.tile.lij.toString(),
b,a),!0;d.waitingAgents.push(c);if(d.data&&!d.dataInvalidated)return console.warn("agent requested existing data (tile %s, agent tile %s, layer: %d/%d)",this.lij.toString(),c.tile.lij.toString(),b,a),c.dataArrived(this),!0;if(d.requestPromise)return!0;v.abortMaybe(d.requestAbort);d.requestAbort=new AbortController;const f=this._surface.requestTileData(this,a,b,d.requestAbort);if(!f)return d.requestAbort=null,!1;a=()=>{d.requestPromise===f&&(d.requestPromise=null,d.requestAbort=null)};d.requestPromise=
f;f.then(a,a);return!0};e.hasLij=function(a){return this.lij[0]===a[0]&&this.lij[1]===a[1]&&this.lij[2]===a[2]};e.findByLij=function(a){if(this.hasLij(a))return this;const b=this._children;return b[0]?b[0].findByLij(a)||b[1].findByLij(a)||b[2].findByLij(a)||b[3].findByLij(a):null};e.distanceToSquared=function(a){return m.squaredLength(m.subtract(u,this._center[r.CenterPosition.MIDDLE],a))};e.containsPoint=function(a){const b=this.extent;return a[0]>=b[0]&&a[1]>=b[1]&&a[0]<=b[2]&&a[1]<=b[3]};e.containsPointXY=
function(a,b){const c=this.extent;return a>=c[0]&&b>=c[1]&&a<=c[2]&&b<=c[3]};e.unrequestLayerData=function(a,b,c){a=this.layerInfo[b][a];b=a.waitingAgents;c=null!=b.removeUnordered(c);h.weakAssert(c,"agent has not requested this piece of map data");1>b.length&&(a.abortRequest(),this.setMemoryDirty())};e.dataArrived=function(a,b,c){a=this.layerInfo[b][a];a.data=c;a.dataInvalidated=!1;a.waitingAgents.forAll(d=>d.dataArrived(this));a.waitingAgents.clear();this.setMemoryDirty()};e.dataMissing=function(a,
b,c){c.notInTilemap||console.error(`Tile ${this.lij.toString()} layer ${b}/${a} error ${c}`);a=this.layerInfo[b][a];a.dataMissing=!0;a.waitingAgents.forAll(d=>d.dataMissing());a.waitingAgents.clear();this.setMemoryDirty()};e.updateRenderData=function(a,b){switch(a){case q.LayerClass.MAP:return this._updateTexture(b);case q.LayerClass.ELEVATION:return this._updateGeometry()}};e._updateTexture=function(a){this.renderData&&(this.resetPendingUpdate(a===l.TextureUpdate.FADING?n.TileUpdate.TEXTURE_NOFADING:
n.TileUpdate.TEXTURE_FADING),this.setPendingUpdate(a===l.TextureUpdate.FADING?n.TileUpdate.TEXTURE_FADING:n.TileUpdate.TEXTURE_NOFADING))};e._updateGeometry=function(){this.setPendingUpdate(n.TileUpdate.GEOMETRY);for(const a of this.layerInfo[q.LayerClass.ELEVATION])a.pendingUpdates|=n.TileUpdate.GEOMETRY};e.invalidateLayerData=function(a,b){this.layerInfo[b][a].invalidateSourceData();this.restartAgents(b)};e.computeElevationBounds=function(){const a=this._elevationBounds,b=a[0],c=a[1];D.set(a,Infinity,
-Infinity);const d=this.layerInfo[q.LayerClass.ELEVATION];let f=!0;for(const k of d)v.isSome(k.elevationBounds)&&(a[0]=Math.min(a[0],k.elevationBounds.min),a[1]=Math.max(a[1],k.elevationBounds.max),k.elevationBounds.hasNoDataValues||(f=!1));f&&(a[0]=Math.min(a[0],0),a[1]=Math.max(a[1],0));if(b!==a[0]||c!==a[1])this.updateRadiusAndCenter(),this._surface.setTileTreeDirty()};e._updateCenter=function(){const a=this._elevationBounds,b=this._center;m.scale(u,this.up,.5*(a[0]+a[1]));m.add(b[r.CenterPosition.MIDDLE],
this.centerAtSeaLevel,u);m.scale(u,this.up,a[0]);m.add(b[r.CenterPosition.TOP],this.centerAtSeaLevel,u);m.scale(u,this.up,a[1]);m.add(b[r.CenterPosition.BOTTOM],this.centerAtSeaLevel,u)};e.findElevationBoundsForLayer=function(a,b){const c=this.layerInfo[q.LayerClass.ELEVATION][a],d=G.getElevationDesiredResolutionLevel(this.level),f=Math.max(this.elevationLevel-d,0);var k=c.elevationBounds;if(!(v.isSome(k)&&k.level>=b&&k.level<=f)&&(b=this._surface.layerViewByIndex(a,q.LayerClass.ELEVATION),b=h.getLayerWithExtentRange(b),
I.fallsWithinLayer(this,b,!1))){b=ia;k=!1;var x=c.data;if(x&&x.level<=f)a=c.data,b.min=a.samplerData.data.minValue,b.max=a.samplerData.data.maxValue,b.hasNoDataValues=a.samplerData.data.hasNoDataValues,b.level=this.level,k=!0;else{x=0;let t,p;for(let y=this._parent;y&&(!p||x<d)&&!(x=this.elevationLevel-y.level,t=p||t,p=y.layerInfo[q.LayerClass.ELEVATION][a].data,!p&&t&&y.level<=f);y=y.parent);if(p=p||t)p.computeMinMaxValue(this.lij[0],this.lij[1],this.lij[2],b),Infinity!==b.min&&(b.level=p.level,
k=!0)}k&&(v.isNone(c.elevationBounds)&&(c.elevationBounds=new Q.ElevationBounds),c.elevationBounds.copyFrom(b))}};e.modifyLayers=function(a,b,c){c=this.layerInfo[c];for(var d of c)d.loadingAgent&&d.loadingAgent!==w.TILE_AGENT_DONE&&(B(d.loadingAgent),d.loadingAgent=null),d.waitingAgents.clear();for(d=0;d<c.length;++d)void 0===a[d]&&c[d].release();a=Array(...c);d=b.length;c.length=d;for(let f=0;f<d;f++){const k=b[f];c[f]=-1<k?a[k]:H.TilePerLayerInfo.acquire(this._surface.upsampleInfoPool)}this.setMemoryDirty()};
e.restartAgents=function(a){this.renderData&&(this._createOrUpdateAgents(0,a),this.updateRenderData(a,l.TextureUpdate.FADING))};e.updateAgents=function(a){if(this.renderData){const b=this.layerInfo[a];for(const c of b)c.loadingAgent===w.TILE_AGENT_DONE&&(c.loadingAgent=null);this._createOrUpdateAgents(0,a)}};e.updateAgentSuspension=function(){for(const a of q.LayerClasses){const b=this._isSuspended(a);for(const c of this.layerInfo[a])c.loadingAgent&&c.loadingAgent!==w.TILE_AGENT_DONE&&(c.loadingAgent.setSuspension(b),
c.loadingAgent===w.TILE_AGENT_DONE&&this.updateRenderData(a,l.TextureUpdate.FADING))}};e.removeLayerAgent=function(a,b){a=this.layerInfo[b][a];a.loadingAgent&&a.loadingAgent!==w.TILE_AGENT_DONE&&a.loadingAgent.dispose();a.loadingAgent=null};e.agentDone=function(a,b){const c=this.layerInfo[b][a];c.loadingAgent=w.TILE_AGENT_DONE;!c.data&&v.isNone(c.upsampleInfo)&&this._createOrUpdateAgents(a+1,b)};e._hasBlendableAncestor=function(a){return"normal"!==a.blendMode||P.isGroupLayer(a.parent)&&this._hasBlendableAncestor(a.parent)};
e._hasBlendModes=function(a,b,c){for(;a<b;++a){const d=this._surface.layerViewByIndex(a,c);if(h.isBlendableLayerView(d)&&"normal"!==d?.layer?.blendMode||P.isGroupLayer(d?.layer?.parent)&&this._hasBlendableAncestor(d?.layer?.parent))return!0}return!1};e._createOrUpdateAgents=function(a,b){const c=this.layerInfo[b];if(0!==c.length){var d=this._isSuspended(b);for(let t=a;t<c.length;++t){const p=c[t];var f=!1;const y=this._surface.layerViewByIndex(t,b);var k=h.getLayerWithExtentRange(y);if(p.loadingAgent)I.fallsWithinLayer(this,
k,!1)?(p.loadingAgent!==w.TILE_AGENT_DONE&&p.loadingAgent.setSuspension(d),p.loadingAgent!==w.TILE_AGENT_DONE&&(f=p.loadingAgent.update())):p.dispose();else if(I.fallsWithinLayer(this,k,!1)){f=t;k=b;var x=d;const A=k===q.LayerClass.ELEVATION?J.acquire():K.acquire();A.init(this,f,k,x);p.loadingAgent=A;(f=p.loadingAgent.startLoading())?p.loadingAgent===w.TILE_AGENT_DONE&&this.setPendingUpdate(n.TileUpdate.GEOMETRY):(B(p.loadingAgent),p.loadingAgent=w.TILE_AGENT_DONE)}p.loadingAgent===w.TILE_AGENT_DONE&&
this.updateRenderData(b,l.TextureUpdate.FADING);if(!this._hasBlendModes(a,c.length,b)&&f&&y.isOpaque)break}}};e._isWithinExtent=function(a){const b=this.extent;return b[0]>=a[0]&&a[2]>=b[2]&&b[1]>=a[1]&&a[3]>=b[3]};e.intersectsExtent=function(a){const b=this.extent;return b[2]>=a[0]&&a[2]>=b[0]&&b[3]>=a[1]&&a[3]>=b[1]};e.getElevationVerticesPerSide=function(a){var b=this.elevationLevel-this.level;a=Math.max(this.level-a,G.getElevationDesiredResolutionLevel(this.level)-b);a=Z.clamp((this.maxTesselation>>
a)+1,2,this.maxTesselation+1);b=this.getDefaultVerticesPerSide();return Math.max(a,b)};e._findLIJ=function(a,b){if(!a)return null;var c=this.surface.rootTiles;if(v.isSome(c))for(var d of c){c=d.level;var f=a[0];c>f?c=!1:(c=f-c,f=Math.floor(a[2]/2**c),c=Math.floor(a[1]/2**c)===d.lij[1]&&f===d.lij[2]);if(c){for(c=a[0]-d.level-1;0<=c&&!d.isLeaf&&!b(d);)d=d.children[2*(a[1]>>c&1)+(a[2]>>c&1)],c--;return b(d)?d:null}}return null};e.findNeighborTile=function(a,b){const c=this.lij;return(a=this.getNeighborLIJ(c,
a))?c[0]===a[0]&&c[1]===a[1]&&c[2]===a[2]?b(this)?this:null:this._findLIJ(a,b):null};e.findCorner=function(a,b){a=a===l.NeighborIndex.NORTH_EAST?1:a===l.NeighborIndex.NORTH_WEST?0:a===l.NeighborIndex.SOUTH_WEST?2:3;let c=this;for(;c.children[0]&&(!b||!b(c));)c=c.children[a];return c};e.findNeighborCornerTileExact=function(a,b){return this.findNeighborTile(a,c=>b(c)||c.level===this.level)?.findCorner(h.oppositeCorner(a),b)||null};e.forAllSubtreeOnSide=function(a,b){const c=a===l.NeighborIndex.NORTH?
[0,1]:a===l.NeighborIndex.NORTH_EAST?[1]:a===l.NeighborIndex.EAST?[1,3]:a===l.NeighborIndex.SOUTH_EAST?[3]:a===l.NeighborIndex.SOUTH?[2,3]:a===l.NeighborIndex.SOUTH_WEST?[2]:a===l.NeighborIndex.WEST?[0,2]:[0],d=f=>{const k=f.children;!b(f)&&k[0]&&c.forEach(x=>d(k[x]))};d(this)};e.forallNeighbors=function(a){h.neighborCornerIndices.forEach(b=>this.findNeighborCornerTileExact(b,a));h.neighborEdgeIndices.forEach(b=>this.findNeighborTile(b,c=>c.level===this.level||a(c))?.forAllSubtreeOnSide(h.oppositeEdge(b),
a))};e.getNeighborEdgeStartVertexIndex=function(a,b){if(!b)return 0;var c=this.level-b.level;h.internalAssert(!h.ENABLE_TERRAIN_INTERNAL_CHECKS||0<=c);if(0===c)return 0;c=2**c;var d=(a=1===(a&1))?0:1;b=b.lij[d+1]*c;d=this.lij[d+1];const f=d-b;a=a?c-1-f:f;h.ENABLE_TERRAIN_INTERNAL_CHECKS&&(h.internalAssert(b<=d&&d<b+c),h.internalAssert(0<=a&&a<c));return a};e.forEachLoadedNeighbor=function(a){const b=this.level,c=d=>d.level===b||d.isLoaded;h.neighborEdgeIndices.forEach(d=>{const f=this.findNeighborTile(d,
c);null!=f&&f!==this&&f.forAllSubtreeOnSide(h.oppositeEdge(d),k=>k.isLoaded?(a(k,d),!0):!1)});h.neighborCornerIndices.forEach(d=>{const f=this.findNeighborTile(d,c)?.findCorner(h.oppositeCorner(d),k=>k.isLoaded);h.internalAssert(!f||U(this,f,d));f?.isLoaded&&a(f,d)})};e.getNeighborLIJ=function(a,b){const c=h.isNorth(b)?-1:h.isSouth(b)?1:0;b=h.isWest(b)?-1:h.isEast(b)?1:0;a=[a[0],a[1]+c,a[2]+b];return 0>a[1]?null:this.surface.isGlobal?this.wrapLIJ(a):0>a[2]?null:a};e.wrapLIJ=function(a){return!a||
0>a[1]||a[1]>=2**a[0]?null:this.surface.wrapEastWest(a)};e.checkGeometryWaterproofness=function(){h.ENABLE_WATERPROOFNESS_TESTS&&(h.internalAssert(this.isLoaded),this.renderData?.checkGeometryWaterproofness())};e.shouldHaveNeighbor=function(a){const b=this.extent,c=this.surface.rootTilesExtent,d=.25*(b[2]-b[0]);if(h.isNorth(a)&&b[3]+d>=c[3]||h.isSouth(a)&&b[1]-d<=c[1])return!1;const f=this.surface.isGlobal;return!f&&h.isWest(a)&&b[0]-d<=c[0]||!f&&h.isEast(a)&&b[2]+d>=c[2]?!1:!0};e.updateDistanceToPOI=
function(a){var b=this._lastPOI;if(!(0<=this.distanceToPOI&&b[0]===a[0]&&b[1]===a[1]&&b[2]===a[2])){m.copy(this._lastPOI,a);var c=this._center[r.CenterPosition.MIDDLE];b=a[0]-c[0];var d=a[1]-c[1];a=a[2]-c[2];this.distanceToPOI=b*b+d*d+a*a}};Y._createClass(g,[{key:"_isCached",get:function(){return!this.shouldLoad&&0>=this._mapDataRefCount}},{key:"maxTesselation",get:function(){return this._maxTesselation}},{key:"isWithinClippingArea",get:function(){return this._isWithinClippingArea}},{key:"intersectsClippingArea",
get:function(){return this._intersectsClippingArea}},{key:"clippingArea",get:function(){return this._clippingArea}},{key:"parent",get:function(){return this._parent}},{key:"children",get:function(){return this._children}},{key:"surface",get:function(){return this._surface}},{key:"elevationBounds",get:function(){return this._elevationBounds}},{key:"level",get:function(){return this.lij[0]}},{key:"key",get:function(){return`${this.lij[0]}/${this.lij[1]}/${this.lij[2]}`}},{key:"edgeLen",get:function(){return this._edgeLen}},
{key:"radius",get:function(){return this._center[r.CenterPosition.MIDDLE][3]}},{key:"visible",get:function(){this._dirty&&this.computeVisibility();return this._visible}},{key:"frustumVisibility",get:function(){this._dirty&&this.computeVisibility();return this._frustumVisibility}},{key:"loadable",get:function(){return this.visible||this._surface.view.state.fixedContentCamera}},{key:"rendered",get:function(){const a=!!this.renderData;a!==this._previouslyRendered&&(this._surface.emit("tiles-visibility-changed"),
this._previouslyRendered=a,this._surface.renderer.setDirty());return a}},{key:"shouldLoad",get:function(){return this.isLeaf}},{key:"usedMemory",get:function(){return this._ensureUsedMemory()+(this._isCached?0:this._mapTileMemoryInternal)}},{key:"_cachedMemory",get:function(){return this._isCached?this._mapTileMemory:0}},{key:"_mapTileMemory",get:function(){this._ensureUsedMemory();return this.layerInfo[q.LayerClass.MAP].reduce((a,b)=>a+(b instanceof F.VectorTile?b.memoryUsage:0),this._mapTileMemoryInternal)}},
{key:"_cpuImageMemorySize",get:function(){const a=this._surface.tilingScheme.pixelSize;return a*a*4}},{key:"isLoaded",get:function(){return this.renderData?.hasGeometry??!1}},{key:"updating",get:function(){if(this.hasPendingUpdates)return!0;for(const a of q.LayerClasses){const b=this.layerInfo[a];for(const c of b)if(c.loadingAgent&&c.loadingAgent!==w.TILE_AGENT_DONE&&c.loadingAgent.updating)return!0}return!1}},{key:"hasPendingUpdates",get:function(){return 0!==this._pendingUpdates}},{key:"isLeaf",
get:function(){return null==this._children[0]}},{key:"test",get:function(){return{cachedMemory:this._cachedMemory}}},{key:"westNeighborWestExtent",get:function(){return this.extent[0]*(this.isWestEnd?-1:1)}},{key:"eastNeighborEastExtent",get:function(){return this.extent[2]*(this.isEastEnd?-1:1)}},{key:"isEastEnd",get:function(){return this.lij[2]===this.surface.lijEastEnd(this.level)-1}},{key:"isWestEnd",get:function(){return 0===this.lij[2]}},{key:"isNorthEnd",get:function(){return 0===this.lij[1]}},
{key:"isSouthEnd",get:function(){return this.extent[1]+ba.getEpsilon()>=this.surface.extent[1]}}]);return g}();const K=new O(S.MapTileAgent),J=new O(R.ElevationTileAgent),ia=new Q.ElevationBounds;r.CenterPosition=void 0;(function(g){g[g.TOP=0]="TOP";g[g.MIDDLE=1]="MIDDLE";g[g.BOTTOM=2]="BOTTOM"})(r.CenterPosition||(r.CenterPosition={}));const C=z.create(),L=z.create(),M=z.create(),u=z.create();r.Tile=ja;r.isCornerNeighbor=U;r.isEdgeNeighbor=function(g,e,a){if(v.isNone(g)||v.isNone(e))return!1;if(0===
g.level&&0===e.level&&(g.isEastEnd&&e.isWestEnd&&a===l.NeighborIndex.EAST||g.isWestEnd&&e.isEastEnd&&a===l.NeighborIndex.WEST))return!0;const b=Math.max(1E-6*(g.extent[2]-g.extent[0]),1);switch(a){case l.NeighborIndex.NORTH:return h.almostEquals(g.extent[3],e.extent[1],b);case l.NeighborIndex.SOUTH:return h.almostEquals(g.extent[1],e.extent[3],b);case l.NeighborIndex.EAST:return h.almostEquals(g.extent[2],e.extent[0],b)||h.almostEquals(g.extent[2],-e.extent[0],b);case l.NeighborIndex.WEST:return h.almostEquals(g.extent[0],
e.extent[2],b)||h.almostEquals(g.extent[0],-e.extent[2],b)}};Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});