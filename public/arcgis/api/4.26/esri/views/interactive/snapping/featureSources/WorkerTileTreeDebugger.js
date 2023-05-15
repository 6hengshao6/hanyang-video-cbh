// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Handles ../../../../core/handleUtils ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../../../../geometry/Polygon ../../../../geometry/support/aaBoundingRect ../../../support/TileTreeDebugger".split(" "),function(d,f,h,n,p,q,z,A,B,r,t,u,v){d.WorkerTileTreeDebugger=
function(c){function e(b){b=w.call(this,b);b._handles=new n;return b}f._inherits(e,c);var w=f._createSuper(e);c=e.prototype;c.initialize=function(){const b=setInterval(()=>this._fetchDebugInfo(),2E3);this._handles.add(p.makeHandle(()=>clearInterval(b)))};c.destroy=function(){this._handles.destroy()};c.getTiles=function(){if(!this._debugInfo)return[];const b=new Map,k=new Map;this._debugInfo.storedTiles.forEach(a=>{b.set(a.data.id,a.featureCount)});this._debugInfo.pendingTiles.forEach(a=>{b.set(a.data.id,
a.featureCount);k.set(a.data.id,a.state)});const g=new Map;this._debugInfo.storedTiles.forEach(a=>{g.set(a.data.id,a.data)});this._debugInfo.pendingTiles.forEach(a=>{g.set(a.data.id,a.data)});return Array.from(g.values()).map(a=>{var x=[a.level,a.row,a.col],y=t.fromExtent(u.toExtent(a.extent,this.view.spatialReference));{a=a.id;const l=k.get(a),m=b.get(a)??"?";a=l?`${l}:${m}\n${a}`:`store:${m}\n${a}`}return{lij:x,geometry:y,label:a}})};c._fetchDebugInfo=function(){this.handle.getDebugInfo(null).then(b=>
{this._debugInfo=b;this.update()})};return f._createClass(e)}(v.TileTreeDebugger);h.__decorate([q.property({constructOnly:!0})],d.WorkerTileTreeDebugger.prototype,"handle",void 0);d.WorkerTileTreeDebugger=h.__decorate([r.subclass("esri.views.interactive.snapping.featureSources.WorkerTileTreeDebugger")],d.WorkerTileTreeDebugger);Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});