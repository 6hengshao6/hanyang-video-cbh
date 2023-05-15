/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import e from"../core/Evented.js";import{h as t}from"./typedArrayUtil.js";import{r as s}from"./rbush.js";import{A as i}from"./ArrayPool.js";import o from"../geometry/Extent.js";import{c as n}from"./aaBoundingRect.js";import{Q as r}from"../rest/support/Query.js";import{T as h}from"./TileKey2.js";import{a as l}from"./TileInfoView.js";class d{constructor(e,t){this.key=new h(0,0,0,0),this.bounds=n(),this.objectIds=new Set,this.key.set(t);const s=e.getLODInfoAt(this.key);this.tileInfoView=e,this.tileInfoView.getTileBounds(this.bounds,this.key,!0),this.resolution=s.resolution,this.scale=s.scale,this.level=s.level}get id(){return this.key.id}get extent(){return o.fromBounds(this.bounds,this.tileInfoView.tileInfo.spatialReference)}get transform(){return{originPosition:"upperLeft",scale:[this.resolution,this.resolution],translate:[this.bounds[0],this.bounds[3]]}}createChildTiles(){const e=this.key.getChildKeys(),t=i.acquire();for(let s=0;s<e.length;s++)t[s]=new d(this.tileInfoView,e[s]);return t}getQuantizationParameters(){return r.fromJSON({mode:"view",originPosition:"upperLeft",tolerance:this.resolution,extent:{xmin:this.bounds[0],ymin:this.bounds[1],xmax:this.bounds[2],ymax:this.bounds[3],spatialReference:this.tileInfoView.tileInfo.spatialReference}})}}const a={added:[],removed:[]},m=new Set,u=new h(0,0,0,0);class c extends e{constructor(e){super(),this._tiles=new Map,this._index=s(9,t("esri-csp-restrictions")?e=>({minX:e.bounds[0],minY:e.bounds[1],maxX:e.bounds[2],maxY:e.bounds[3]}):[".bounds[0]",".bounds[1]",".bounds[2]",".bounds[3]"]),this.tiles=[],this.tileScheme=e}destroy(){this.clear()}clear(){this.tiles.length=0,this._tiles.clear(),this._index.clear()}has(e){return this._tiles.has(e)}get(e){return this._tiles.get(e)}boundsIntersections(e){return this._index.search({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]})}updateTiles(e){const t={added:[],removed:[]};for(const s of e.added)if(!this.has(s)){const e=new d(this.tileScheme,s);this._tiles.set(s,e),this._index.insert(e),t.added.push(e)}for(const s of e.removed)if(this.has(s)){const e=this.get(s);this._tiles.delete(s),this._index.remove(e),t.removed.push(e)}this.tiles.length=0,this._tiles.forEach((e=>this.tiles.push(e))),(t.added.length||t.removed.length)&&this.emit("update",t)}setViewState(e){const t=this.tileScheme.getTileCoverage(e,0);if(!t)return;const{spans:s,lodInfo:i}=t,{level:o}=i;if(s.length>0)for(const{row:e,colFrom:t,colTo:n}of s)for(let s=t;s<=n;s++){const t=u.set(o,e,i.normalizeCol(s),i.getWorldForColumn(s)).id;if(m.add(t),!this.has(t)){const e=new d(this.tileScheme,t);this._tiles.set(t,e),this._index.insert(e),this.tiles.push(e),a.added.push(e)}}for(let e=this.tiles.length-1;e>=0;e--){const t=this.tiles[e];m.has(t.id)||(this._tiles.delete(t.id),this.tiles.splice(e,1),this._index.remove(t),a.removed.push(t))}(a.added.length||a.removed.length)&&this.emit("update",a),l.pool.release(t),m.clear(),a.added.length=0,a.removed.length=0}}export{c as T};
