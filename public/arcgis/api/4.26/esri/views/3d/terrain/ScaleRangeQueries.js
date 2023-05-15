// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/ObjectPool ../../../core/PooledArray ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ../../../chunks/vec4 ../../../chunks/vec4f64".split(" "),function(f,k,l,n,p,m,q,x,y,z,r,t,u){let v=k._createClass(function(){this.extent=u.create();this.maxLevel=
this.minLevel=0;this.callback=null});f.ScaleRangeQueries=function(e){function g(){var a=w.apply(this,arguments);a._queries=new m({initialSize:10});a._queriesInvPtr=0;a._queryQueue=new m({initialSize:30});a._queryPool=new p(v);return a}k._inherits(g,e);var w=k._createSuper(g);e=g.prototype;e.queryVisibleLevelRange=function(a,c,d,h){const b=this._queryPool.acquire();t.copy(b.extent,a);b.minLevel=null==c?-Number.MAX_VALUE:c;b.maxLevel=null==d?Number.MAX_VALUE:d;b.callback=h;this._queryQueue.push(b);
this.notifyChange("updating")};e.prepare=function(){for(;this._queries.length<this._queries.data.length&&0<this._queryQueue.length;){const a=this._queryQueue.pop();this._queries.push(a)}this._queriesInvPtr=this._queries.length};e.process=function(){for(let a=0;a<this._queries.length;a++){const c=this._queries.data[a];this._queryPool.release(c);c.callback(a>=this._queriesInvPtr);c.callback=null}this._queries.clear();this.notifyChange("updating")};e.queriesForTile=function(a){const c=a.level;let d=
0;for(;d<this._queriesInvPtr;){const h=this._queries.data[d],b=h.extent;c>=h.minLevel&&c<=h.maxLevel&&b[0]<=a.extent[2]&&b[2]>=a.extent[0]&&b[1]<=a.extent[3]&&b[3]>=a.extent[1]?(this._queries.swapElements(d,this._queriesInvPtr-1),this._queriesInvPtr--):d++}};k._createClass(g,[{key:"updating",get:function(){return 0!==this._queryQueue.length}}]);return g}(n);l.__decorate([q.property()],f.ScaleRangeQueries.prototype,"updating",null);f.ScaleRangeQueries=l.__decorate([r.subclass("esri.views.3d.terrain.ScaleRangeQueries")],
f.ScaleRangeQueries);Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});