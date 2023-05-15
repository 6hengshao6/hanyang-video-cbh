// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/Error ../../../../../core/Logger ../../../../../core/maybe ../../../../../core/promiseUtils ./BaseFeatureSource".split(" "),function(u,p,v,w,x,h,q){q=function(m){function n(b){return y.call(this,b)}p._inherits(n,m);var y=p._createSuper(n);m=n.prototype;m._fetchDataTile=async function(b){const e=this._subscriptions.get(b.key.id);let f=!1,r=0,c=0;const l=(g,a)=>{c--;h.throwIfAborted(e);const k=b.id,d=g.reader;g=g.query;
d.exceededTransferLimit?(a={id:k,addOrUpdate:d,end:f&&0===c,type:"append"},e.add({message:a,query:g}),this._onMessage(a)):(f=!0,a={id:k,addOrUpdate:d,end:0===c,type:"append"},e.add({message:a,query:g}),this._onMessage(a))};let t=0,z=0;for(;!f&&20>z++;){let g;for(let a=0;a<t+1;a++){const k=r++;c++;g=this._fetchDataTilePage(b,k,e).then(d=>d&&l(d,k)).catch(d=>{f=!0;h.isAbortError(d)||(w.getLogger("esri.views.2d.layers.features.sources.PagedFeatureSource").error(new v("mapview-query-error","Encountered error when fetching tile",
{tile:b,error:d})),this._onMessage({id:b.id,addOrUpdate:null,end:f,type:"append"}))})}await g;h.throwIfAborted(e);t=Math.min(t+2,6)}};m._fetchDataTilePage=async function(b,e,f){h.throwIfAborted(f);const r=this._queryInfo;var c={start:this.pageSize*e,num:this.pageSize,returnExceededLimitFeatures:!0,quantizationParameters:b.getQuantizationParameters()};x.isSome(this.maxRecordCountFactor)&&(c.maxRecordCountFactor=this.maxRecordCountFactor);c=this.createTileQuery(b,c);try{const l=await this.enqueueQuery({tile:b,
query:c,signal:f.signal,depth:e});h.throwIfAborted(f);return l?r!==this._queryInfo?this._fetchDataTilePage(b,e,f):{reader:l,query:c}:null}catch(l){return h.throwIfNotAbortError(l),null}};return p._createClass(n)}(q.BaseFeatureSource);u.PagedFeatureSource=q;Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})});