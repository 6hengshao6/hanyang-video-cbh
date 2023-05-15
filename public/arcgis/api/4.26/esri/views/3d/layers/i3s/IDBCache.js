// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/byteSizeEstimations ../../../../core/Error ../../../../core/maybe ../../../../core/promiseUtils".split(" "),function(m,r,t,u,p,q){function l(f){return new Promise((g,a)=>{f.oncomplete=()=>g();f.onerror=()=>a(f.error);f.onabort=()=>a(f.error)})}function h(f){return new Promise((g,a)=>{"done"===f.readyState?null!=f.error?a(f.error):g(f.result):(f.onsuccess=()=>g(f.result),f.onerror=()=>a(f.error))})}let v=function(){function f(a,
d,b=14){this._version=b;this._quotaReductionPromise=this._db=null;this._miss=this._hit=this._gcCounter=0;this._destroyed=!1;this.gcFrequency=50;this.maxByteSize=t.ByteSizeUnit.GIGABYTES;this.quotaReductionFactor=.2;this._dbName=a;this._storeName=d}var g=f.prototype;g.init=function(){return Promise.resolve().then(()=>{const a=indexedDB.open(this._dbName,this._version);a.onupgradeneeded=d=>{var b=a.result;const c=a.transaction,e=b.objectStoreNames.contains(this._storeName)?c.objectStore(this._storeName):
b.createObjectStore(this._storeName);b=b.objectStoreNames.contains("last_access")?c.objectStore("last_access"):b.createObjectStore("last_access");b.indexNames.contains("date")||b.createIndex("date","date",{unique:!1});b.indexNames.contains("byteSize")||b.createIndex("byteSize","byteSize",{unique:!1});d.oldVersion<this._version&&(e.clear(),b.clear())};return h(a)}).then(a=>{this._destroyed?a.close():this._db=a})};g.destroy=function(){this._db&&(this._db.close(),this._db=null);this._destroyed=!0};g.getHitRate=
function(){return this._hit/(this._hit+this._miss)};g.put=function(a,d){return null==this._db?Promise.reject(new u("indexedb:not-initialized","IndexedDB Cache is not initialized")):(null!=this._quotaReductionPromise?this._quotaReductionPromise:Promise.resolve()).then(()=>this._put(a,d)).catch(b=>{if(b&&"QuotaExceededError"===b.name)return null==this._quotaReductionPromise&&(this._quotaReductionPromise=this._getCacheSize().then(c=>this._removeLeastRecentlyAccessed(d.byteSize+Math.ceil(c*this.quotaReductionFactor))),
this._quotaReductionPromise.then(()=>this._quotaReductionPromise=null,()=>this._quotaReductionPromise=null)),this._quotaReductionPromise.then(()=>this._put(a,d));throw b;}).then(()=>{this._gcCounter--;0>this._gcCounter&&null!=this._db&&(this._gcCounter=this.gcFrequency,this._getCacheSize().then(b=>this._removeLeastRecentlyAccessed(b-this.maxByteSize)))})};g.get=function(a,d){const b=this._db;if(null==b)return Promise.resolve(void 0);let c=null;return Promise.resolve().then(()=>{const e=b.transaction(this._storeName,
"readonly");c=q.onAbort(d,()=>{e.abort()});const n=e.objectStore(this._storeName).get(a);return h(n)}).then(e=>{null==e?++this._miss:this._db&&(++this._hit,this._db.transaction("last_access","readwrite").objectStore("last_access").put({date:Date.now(),byteSize:e.byteSize},a));p.isSome(c)&&c.remove();return e}).catch(()=>{++this._miss;q.throwIfAborted(d);p.isSome(c)&&c.remove()})};g.remove=function(a){const d=this._db;return null==d?Promise.resolve():Promise.resolve().then(async()=>{const b=d.transaction([this._storeName,
"last_access"],"readwrite");var c=b.objectStore(this._storeName),e=b.objectStore("last_access");c=c.delete(a);e=e.delete(a);await Promise.all([h(c),h(e),l(b)])})};g._put=function(a,d){var b=this._db;if(null==b)return Promise.resolve();b=b.transaction([this._storeName,"last_access"],"readwrite");var c=b.objectStore(this._storeName);const e=b.objectStore("last_access");c=c.put(d,a);a=e.put({date:Date.now(),byteSize:d.byteSize},a);return Promise.all([h(c),h(a),l(b)])};g._removeLeastRecentlyAccessed=
function(a){if(0>=a||!this._db)return Promise.resolve();const d=this._db.transaction([this._storeName,"last_access"],"readwrite"),b=d.objectStore(this._storeName),c=d.objectStore("last_access");let e=0;const n=c.index("date").openCursor(null,"next");n.onsuccess=()=>{const k=n.result;null!=k&&(null!=k.value.byteSize&&(e+=k.value.byteSize),b.delete(k.primaryKey),c.delete(k.primaryKey),e<a&&k.continue())};return l(d)};g._getCacheSize=function(){var a=this._db;if(null==a)return Promise.resolve(0);a=a.transaction("last_access");
let d=0;const b=a.objectStore("last_access").index("byteSize").openKeyCursor();b.onsuccess=()=>{const c=b.result;if(c){var e=c.key;null!=e&&(d+=e);c.continue()}};return l(a).then(()=>d)};r._createClass(f,[{key:"initialized",get:function(){return null!=this._db}}]);return f}();m.IDBCache=v;m.whenRequest=h;m.whenTransaction=l;Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});