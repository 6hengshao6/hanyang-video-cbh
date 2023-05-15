// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/Evented ../../../../../core/has ../../../../../chunks/rbush ./Tile ../../../tiling/TileCoverage ../../../tiling/TileKey".split(" "),function(m,q,r,t,p,u,v){const g={added:[],removed:[]},n=new Set,w=new v(0,0,0,0);return function(e){function h(a){var c=x.call(this);c._tiles=new Map;c._index=t.rbush(9,r("esri-csp-restrictions")?b=>({minX:b.bounds[0],minY:b.bounds[1],maxX:b.bounds[2],maxY:b.bounds[3]}):[".bounds[0]",".bounds[1]",
".bounds[2]",".bounds[3]"]);c.tiles=[];c.tileScheme=a;return c}m._inherits(h,e);var x=m._createSuper(h);e=h.prototype;e.destroy=function(){this.clear()};e.clear=function(){this.tiles.length=0;this._tiles.clear();this._index.clear()};e.has=function(a){return this._tiles.has(a)};e.get=function(a){return this._tiles.get(a)};e.boundsIntersections=function(a){return this._index.search({minX:a[0],minY:a[1],maxX:a[2],maxY:a[3]})};e.updateTiles=function(a){const c={added:[],removed:[]};for(const b of a.added)if(!this.has(b)){const d=
new p.Tile(this.tileScheme,b);this._tiles.set(b,d);this._index.insert(d);c.added.push(d)}for(const b of a.removed)this.has(b)&&(a=this.get(b),this._tiles.delete(b),this._index.remove(a),c.removed.push(a));this.tiles.length=0;this._tiles.forEach(b=>this.tiles.push(b));(c.added.length||c.removed.length)&&this.emit("update",c)};e.setViewState=function(a){if(a=this.tileScheme.getTileCoverage(a,0)){var {spans:c,lodInfo:b}=a,{level:d}=b;if(0<c.length)for(const {row:y,colFrom:z,colTo:A}of c)for(var f=z;f<=
A;f++){const k=w.set(d,y,b.normalizeCol(f),b.getWorldForColumn(f)).id;n.add(k);if(!this.has(k)){const l=new p.Tile(this.tileScheme,k);this._tiles.set(k,l);this._index.insert(l);this.tiles.push(l);g.added.push(l)}}for(d=this.tiles.length-1;0<=d;d--)f=this.tiles[d],n.has(f.id)||(this._tiles.delete(f.id),this.tiles.splice(d,1),this._index.remove(f),g.removed.push(f));(g.added.length||g.removed.length)&&this.emit("update",g);u.pool.release(a);n.clear();g.added.length=0;g.removed.length=0}};return m._createClass(h)}(q)});