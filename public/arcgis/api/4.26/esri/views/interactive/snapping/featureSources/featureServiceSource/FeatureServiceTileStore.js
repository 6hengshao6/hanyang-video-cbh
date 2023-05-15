// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/Accessor ../../../../../core/byteSizeEstimations ../../../../../core/maybe ../../../../../core/accessorSupport/decorators/property ../../../../../core/accessorSupport/ensureType ../../../../../core/arrayUtils ../../../../../core/has ../../../../../core/accessorSupport/decorators/subclass ../../../../../geometry/support/aaBoundingRect ../../../../../layers/graphics/featureConversionUtils ../../../../../layers/graphics/data/BoundsStore ../../../../../layers/support/TileInfo ../../../../../layers/support/TileKey ../../../../../rest/query/operations/query ./FeatureServiceTileCache".split(" "),
function(p,r,u,C,v,h,w,M,N,O,D,t,E,F,y,G,H,I){function J(d){return d.reduce((f,l)=>{var a=l.geometry;if(h.isNone(a))a=0;else{var b=v.estimateFixedArraySize(a.lengths,4);a=32+v.estimateFixedArraySize(a.coords,8)+b}l=32+a+v.estimateAttributesObjectSize(l.attributes);return f+l},0)}p.FeatureServiceTileStore=function(d){function f(a){a=l.call(this,a);a.tileInfo=null;a.extent=null;a.maximumByteSize=10*v.ByteSizeUnit.MEGABYTES;a._tileBounds=new F.BoundsStore;a._tiles=new I.FeatureServiceTileCache;a._refCounts=
new Map;a._tileFeatureCounts=new Map;a._tmpBoundingRect=t.create();return a}r._inherits(f,d);var l=r._createSuper(f);d=f.prototype;d.add=function(a,b){const c=[];for(const e of b)this._referenceFeature(e.objectId)===q.ADDED&&c.push(e);this._addTileStorage(a,new Set(b.map(e=>e.objectId)),J(b));this.featureStore.addMany(c);this._tiles.applyByteSizeLimit(this.maximumByteSize,e=>this._removeTileStorage(e))};d.destroy=function(){this.clear();this._tileFeatureCounts.clear()};d.clear=function(){this.featureStore.clear();
this._tileBounds.clear();this._tiles.clear();this._refCounts.clear()};d.refresh=function(){this.clear();this._tileFeatureCounts.clear()};d.processEdits=function(a,b,c){this._processEditsDelete(a.deletedFeatures.concat(a.updatedFeatures));return this._processEditsRefetch(a.addedFeatures.concat(a.updatedFeatures),b,c)};d._addTileStorage=function(a,b,c){const e=a.id;this._tiles.set(e,new K(a,b,c));this._tileBounds.set(e,a.extent);this._tileFeatureCounts.set(e,b.size)};d._remove=function({id:a}){(a=this._tiles.get(a))&&
this._removeTileStorage(a)};d._removeTileStorage=function(a){const b=[];for(const c of a.objectIds)this._unreferenceFeature(c)===q.REMOVED&&b.push(c);this.featureStore.removeManyById(b);a=a.data.id;this._tiles.delete(a);this._tileBounds.delete(a)};d._processEditsDelete=function(a){this.featureStore.removeManyById(a);for(const [,b]of this._tiles){for(const c of a)b.objectIds.delete(c);this._tileFeatureCounts.set(b.data.id,b.objectIds.size)}for(const b of a)this._refCounts.delete(b)};d._processEditsRefetch=
async function(a,b,c){a=(await b(a,c)).features;const {hasZ:e,hasM:g}=this.featureStore;for(const k of a)a=E.getBoundsOptimizedGeometry(this._tmpBoundingRect,k.geometry,e,g),h.isNone(a)||this._tileBounds.forEachInBounds(a,n=>{n=this._tiles.get(n);this.featureStore.add(k);const m=k.objectId;n.objectIds.has(m)||(n.objectIds.add(m),this._referenceFeature(m),this._tileFeatureCounts.set(n.data.id,n.objectIds.size))})};d.process=function(a,b=()=>!0){if(h.isNone(this.tileInfo)||!a.extent||h.isSome(this.extent)&&
!t.intersects(t.fromExtent(this.extent,this._tmpBoundingRect),a.extent)||this._tiles.has(a.id))return new z(a);const c=this._createTileTree(a,this.tileInfo);this._simplify(c,b,null,0,1);return this._collectMissingTiles(a,c,this.tileInfo)};d.getFeatureCount=function(a){return this._tileFeatureCounts.get(a.id)??0};d.fetchCount=async function(a,b,c,e){const g=this._tileFeatureCounts.get(a.id);if(null!=g)return g;b=await H.executeQueryForCount(b,c,e);this._tileFeatureCounts.set(a.id,b.data.count);return b.data.count};
d._createTileTree=function(a,b){const c=new A(a.level,a.row,a.col);b.updateTileInfo(c,y.ExtrapolateOptions.POWER_OF_TWO);this._tileBounds.forEachInBounds(a.extent,e=>{(e=this._tiles.get(e)?.data)&&this._tilesAreRelated(a,e)&&this._populateChildren(c,e,b,this._tileFeatureCounts.get(e.id)||0)});return c};d._tilesAreRelated=function(a,b){if(!a||!b)return!1;if(a.level===b.level)return a.row===b.row&&a.col===b.col;const c=a.level<b.level,e=c?a:b;a=c?b:a;b=1<<a.level-e.level;return Math.floor(a.row/b)===
e.row&&Math.floor(a.col/b)===e.col};d._populateChildren=function(a,b,c,e){var g=b.level-a.level-1;if(0>g)a.isLeaf=!0;else{var k=b.row>>g,n=b.col>>g;g=(k-(a.row<<1)<<1)+(n-(a.col<<1));var m=a.children[g];h.isSome(m)?this._populateChildren(m,b,c,e):(k=new A(a.level+1,k,n),c.updateTileInfo(k,y.ExtrapolateOptions.POWER_OF_TWO),a.children[g]=k,this._populateChildren(k,b,c,e))}};d._simplify=function(a,b,c,e,g){const k=g*g;if(a.isLeaf)return b(this.getFeatureCount(a),g)?0:(this._remove(a),h.isSome(c)&&(c.children[e]=
null),k);g/=2;const n=g*g;let m=0;for(let x=0;x<a.children.length;x++){const B=a.children[x];m+=h.isSome(B)?this._simplify(B,b,a,x,g):n}0===m?this._mergeChildren(a):.18751>1-m/k&&(this._purge(a),h.isSome(c)&&(c.children[e]=null),m=k);return m};d._mergeChildren=function(a){const b=new Set;let c=0;this._forEachLeaf(a,e=>{const g=this._tiles.get(e.id);if(g){c+=g.byteSize;for(const k of g.objectIds)b.has(k)||(b.add(k),this._referenceFeature(k));this._remove(e)}});this._addTileStorage(a,b,c);a.isLeaf=
!0;a.children[0]=a.children[1]=a.children[2]=a.children[3]=null;this._tileFeatureCounts.set(a.id,b.size)};d._forEachLeaf=function(a,b){for(const c of a.children)h.isNone(c)||(c.isLeaf?b(c):this._forEachLeaf(c,b))};d._purge=function(a){if(!h.isNone(a))if(a.isLeaf)this._remove(a);else for(let b=0;b<a.children.length;b++)this._purge(a.children[b]),a.children[b]=null};d._collectMissingTiles=function(a,b,c){a=new L(c,a,this.extent);this._collectMissingTilesRecurse(b,a,1);return a.info};d._collectMissingTilesRecurse=
function(a,b,c){if(!a.isLeaf)if(a.hasChildren){c/=2;for(let e=0;e<a.children.length;e++){const g=a.children[e];h.isNone(g)?b.addMissing(a.level+1,(a.row<<1)+((e&2)>>1),(a.col<<1)+(e&1),c):this._collectMissingTilesRecurse(g,b,c)}}else b.addMissing(a.level,a.row,a.col,c)};d._referenceFeature=function(a){const b=(this._refCounts.get(a)||0)+1;this._refCounts.set(a,b);return 1===b?q.ADDED:q.UNCHANGED};d._unreferenceFeature=function(a){const b=(this._refCounts.get(a)||0)-1;if(0===b)return this._refCounts.delete(a),
q.REMOVED;0<b&&this._refCounts.set(a,b);return q.UNCHANGED};r._createClass(f,[{key:"debugInfo",get:function(){return Array.from(this._tiles.values()).map(({data:a})=>({data:a,featureCount:this._tileFeatureCounts.get(a.id)||0}))}},{key:"test",get:function(){return{tiles:Array.from(this._tiles.values()).map(a=>`${a.data.id}:[${Array.from(a.objectIds)}]`),featureReferences:Array.from(this._refCounts.keys()).map(a=>`${a}:${this._refCounts.get(a)}`)}}}]);return f}(C);u.__decorate([w.property({constructOnly:!0})],
p.FeatureServiceTileStore.prototype,"featureStore",void 0);u.__decorate([w.property()],p.FeatureServiceTileStore.prototype,"tileInfo",void 0);u.__decorate([w.property()],p.FeatureServiceTileStore.prototype,"extent",void 0);u.__decorate([w.property()],p.FeatureServiceTileStore.prototype,"maximumByteSize",void 0);p.FeatureServiceTileStore=u.__decorate([D.subclass("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],p.FeatureServiceTileStore);let K=r._createClass(function(d,
f,l){this.data=d;this.objectIds=f;this.byteSize=l}),A=function(){function d(f,l,a){this.level=f;this.row=l;this.col=a;this.isLeaf=!1;this.extent=null;this.children=[null,null,null,null]}r._createClass(d,[{key:"hasChildren",get:function(){return!this.isLeaf&&(h.isSome(this.children[0])||h.isSome(this.children[1])||h.isSome(this.children[2])||h.isSome(this.children[3]))}}]);return d}(),z=function(){function d(f,l=[]){this.missingTiles=l;this.coveredArea=this.fullArea=0;this.coveredArea=this.fullArea=
t.area(f.extent)}d.prototype.prepend=function(f){this.missingTiles=f.missingTiles.concat(this.missingTiles);this.coveredArea+=f.coveredArea;this.fullArea+=f.fullArea};return r._createClass(d)}(),L=function(){function d(f,l,a){this._tileInfo=f;this._extent=null;this.info=new z(l);h.isSome(a)&&(this._extent=t.fromExtent(a))}d.prototype.addMissing=function(f,l,a,b){f=new G.TileKey(null,f,l,a);this._tileInfo.updateTileInfo(f,y.ExtrapolateOptions.POWER_OF_TWO);h.isNone(f.extent)||h.isSome(this._extent)&&
!t.intersects(this._extent,f.extent)||(this.info.missingTiles.push({data:f,resolution:b}),this.info.coveredArea-=t.area(f.extent))};return r._createClass(d)}();var q;(function(d){d[d.ADDED=0]="ADDED";d[d.REMOVED=1]="REMOVED";d[d.UNCHANGED=2]="UNCHANGED"})(q||(q={}));p.ProcessResult=z;Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});