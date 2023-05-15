// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../geometry ../../../../../core/Evented ../../../../../core/has ../../../../../core/Logger ../../../../../core/maybe ../../../../../core/accessorSupport/diffUtils ../../../../../geohash/GeohashTree ../../../../../geohash/geohashUtils ../../../../../geometry/support/aaBoundingBox ../../../../../geometry/support/Ellipsoid ../../../../../geometry/support/spatialReferenceUtils ../../../../../layers/graphics/featureConversionUtils ../../../../../layers/graphics/OptimizedFeature ../../../../../layers/graphics/OptimizedGeometry ../../../../../layers/graphics/data/projectionSupport ../../../engine/webgl/DisplayId ../FeatureStore2D ../Store2D ./FeatureSetReaderJSON ../../../../../geometry/SpatialReference ../../../../../geometry/Polygon ../../../../../geometry/Extent".split(" "),
function(x,n,y,C,z,D,k,p,E,q,F,A,G,r,H,I,t,J,K,L,B,u,M,N){const v=D.getLogger("esri.view.2d.layers.features.support.BinStore"),O=F.create();y=function(f){function l(a,b,c,e){var d=P.call(this,a,c);d.type="bin";d.events=new C;d.objectIdField="aggregateId";d.featureAdapter=K.featureAdapter;d._geohashLevel=5;d._geohashBuf=[];d._serviceInfo=e;d.geometryInfo=a.geometryInfo;d._spatialReference=b;d._projectionSupportCheck=t.checkProjectionSupport(b,u.WGS84);d._bitsets.geohash=c.getBitset(c.createBitset());
d._bitsets.inserted=c.getBitset(c.createBitset());return d}n._inherits(l,f);var P=n._createSuper(l);f=l.prototype;f.destroy=function(){this._tree&&this._tree.destroy()};f.updateSchema=async function(a,b){const c=this._schema;try{await n._get(n._getPrototypeOf(l.prototype),"updateSchema",this).call(this,a,b),await this._projectionSupportCheck}catch(d){}this._fields=this._schema.params.fields;const e=p.diff(c,b);if(!b||k.isNone(e)&&!a.source&&!a.storage.filters)c&&(a.mesh=!0);else{if(p.hasDiff(e,"params.fields")||
p.hasDiff(e,"params")||!this._tree||a.source)this._tree&&this._tree.destroy(),this._tree=new E.GeohashTree(this._statisticFields,this._serviceInfo),this._tree.onRelease=d=>d.displayId&&this._storage.releaseDisplayId(d.displayId),this._geohashLevel=this._schema.params.fixedBinLevel,this._rebuildTree(),z("esri-2d-update-debug")&&v.info("Aggregate mesh needs update due to tree changing");z("esri-2d-update-debug")&&v.info("Aggregate mesh needs update due to tree changing");a.targets[b.name]=!0;a.mesh=
!1}};f.clear=function(){this._rebuildTree()};f.sweepFeatures=function(a,b){this._bitsets.inserted.forEachSet(c=>{a.has(c)||(c=b.lookupByDisplayIdUnsafe(c),this._remove(c))})};f.sweepAggregates=function(a,b,c){};f.onTileData=function(a,b,c,e,d=!0){if(!this._schema||k.isNone(b.addOrUpdate))return b;this.events.emit("changed");var g=this._getTransforms(a,this._spatialReference);const h=b.addOrUpdate.getCursor();for(;h.next();)this._update(h,e);if(b.status.mesh||!d)return b;e=[];this._getBinsForTile(e,
a,g,c);b.addOrUpdate=B.FeatureSetReaderJSON.fromOptimizedFeatures(e,{...this._serviceInfo,geometryType:"esriGeometryPolygon"});b.addOrUpdate.attachStorage(c);b.end=!0;b.isRepush||(b.clear=!0);for(g=b.addOrUpdate.getCursor();g.next();)e=g.getDisplayId(),this._bitsets.computed.unset(e),this.setComputedAttributes(c,g,e,a.scale);return b};f.forEachBin=function(a){this._tree.forEach(a)};f.forEach=function(a){this._tree.forEach(b=>{b.depth===this._geohashLevel&&(b=this._toFeatureJSON(b),b=B.FeatureSetReaderJSON.fromFeatures([b],
{objectIdField:this.objectIdField,globalIdField:null,geometryType:this.geometryInfo.geometryType,fields:this.fields}).getCursor(),b.next(),a(b))})};f.forEachInBounds=function(a,b){};f.forEachBounds=function(a,b){const {hasM:c,hasZ:e}=this.geometryInfo;for(const d of a)a=r.getBoundsOptimizedGeometry(O,d.readGeometry(),e,c),k.isNone(a)||b(a)};f.onTileUpdate=function(a){};f.getAggregate=function(a){const b=J.createDisplayId(a,!0);a=this._tree.findIf(c=>c.displayId===b);return k.applySome(a,c=>this._toFeatureJSON(c))};
f.getAggregates=function(){return this._tree.findAllIf(a=>a.depth===this._geohashLevel).map(this._toFeatureJSON.bind(this))};f.getDisplayId=function(a){const b=this._tree.findIf(c=>c.id===a);return k.applySome(b,c=>c.displayId)};f.getFeatureDisplayIdsForAggregate=function(a){const b=this._tree.findIf(c=>c.id===a);return k.mapOr(b,[],c=>Array.from(c.displayIds))};f.getDisplayIdForReferenceId=function(a){const b=this._tree.findIf(c=>1===c.displayIds.size&&c.displayIds.has(a));return k.applySome(b,c=>
c.displayId)};f._toFeatureJSON=function(a){const b=this._spatialReference;return{displayId:a.displayId,attributes:a.getAttributes(),geometry:r.convertToGeometry(a.getGeometry(b),"esriGeometryPolygon",!1,!1),centroid:null}};f._rebuildTree=function(){this._bitsets.computed.clear();this._bitsets.inserted.clear();this._tree&&this._tree.clear()};f._remove=function(a){const b=a.getDisplayId(),c=a.getXHydrated(),e=a.getYHydrated(),d=this._geohashBuf[2*b],g=this._geohashBuf[2*b+1];this._bitsets.inserted.has(b)&&
(this._bitsets.inserted.unset(b),this._tree.removeCursor(a,c,e,d,g,this._geohashLevel))};f._update=function(a,b){const c=a.getDisplayId(),e=this._bitsets.inserted;b=b.isVisible(c);var d=e.has(c);b!==d&&(b?(b=a.getXHydrated(),d=a.getYHydrated(),this._setGeohash(c,b,d)&&(this._tree.insertCursor(a,c,b,d,this._geohashBuf[2*c],this._geohashBuf[2*c+1],this._geohashLevel),e.set(c))):this._remove(a))};f._setGeohash=function(a,b,c){if(this._bitsets.geohash.has(a))return!0;const e=this._geohashBuf;if(this._spatialReference.isWebMercator)b=
b/A.earth.radius*57.29577951308232,q.setGeohashBuf(e,a,57.29577951308232*(Math.PI/2-2*Math.atan(Math.exp(-c/A.earth.radius))),b-360*Math.floor((b+180)/360),12);else{c=t.project({x:b,y:c},this._spatialReference,u.WGS84);if(!c)return!1;q.setGeohashBuf(e,a,c.y,c.x,12)}this._bitsets.geohash.set(a);return!0};f._getBinsForTile=function(a,b,c,e){try{var d=this._getGeohashBounds(b);const g=this._tree.getBins(d);for(const h of g){h.displayId||(h.displayId=e.createDisplayId(!0));d=null;const m=h.getGeometry(this._spatialReference,
c.tile);m||(d=h.getGeometryCentroid(this._spatialReference,c.tile));const w=new H.OptimizedFeature(m,h.getAttributes(),d);w.objectId=h.id;w.displayId=h.displayId;a.push(w)}}catch(g){v.error("Unable to get bins for tile",b.key.id)}};f._getGeohash=function(a,b,c){const e={geohashX:0,geohashY:0};q.setGeohashXY(e,b,a,c);return e};f._getGeohashBounds=function(a){const b=this._getGeohashLevel(a.key.level),c=[a.extent.xmin,a.extent.ymin,a.extent.xmax,a.extent.ymax];var e=M.fromExtent(N.fromBounds(c,this._spatialReference));
a=t.project(e,this._spatialReference,u.WGS84,{densificationStep:64*a.resolution});a=r.convertFromPolygon(new I,a,!1,!1);var d=a.coords.filter((h,m)=>!(m%2)),g=a.coords.filter((h,m)=>m%2);a=Math.min(...d);e=Math.min(...g);d=Math.max(...d);g=Math.max(...g);a=this._getGeohash(a,e,b);e=this._getGeohash(d,g,b);return{bounds:c,geohashBounds:{xLL:a.geohashX,yLL:a.geohashY,xTR:e.geohashX,yTR:e.geohashY},level:b}};f._getGeohashLevel=function(a){return this._schema.params.fixedBinLevel};f._getTransforms=function(a,
b){const c={originPosition:"upperLeft",scale:[a.resolution,a.resolution],translate:[a.bounds[0],a.bounds[3]]};b=G.getInfo(b);if(!b)return{tile:c,left:null,right:null};const [e,d]=b.valid;return{tile:c,left:{...c,translate:[d,a.bounds[3]]},right:{...c,translate:[e-d+a.bounds[0],a.bounds[3]]}}};n._createClass(l,[{key:"featureSpatialReference",get:function(){return this._spatialReference}},{key:"fields",get:function(){return this._fields}}]);return l}(L.Store2D);x.BinStore=y;Object.defineProperty(x,
Symbol.toStringTag,{value:"Module"})});