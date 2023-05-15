"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[7963,5777],{93314:(e,t,s)=>{s.d(t,{Z:()=>f});var i,r=s(29768),n=s(12047),l=s(71252),o=s(35197),a=s(34250),h=(s(91306),s(48578),s(97714)),c=s(17533),u=s(2906);s(21972),s(60474),s(66396),s(76506),s(86656),s(92143),s(31450),s(71552),s(40642),s(91055),s(6540),s(19657),s(6906),s(50406),s(60991);let p=i=class extends n.wq{static get allTime(){return d}static get empty(){return g}constructor(e){super(e),this.end=null,this.start=null}readEnd(e,t){return null!=t.end?new Date(t.end):null}writeEnd(e,t){t.end=e?e.getTime():null}get isAllTime(){return this.equals(i.allTime)}get isEmpty(){return this.equals(i.empty)}readStart(e,t){return null!=t.start?new Date(t.start):null}writeStart(e,t){t.start=e?e.getTime():null}clone(){return new i({end:this.end,start:this.start})}equals(e){if(!e)return!1;const t=(0,l.i)(this.start)?this.start.getTime():this.start,s=(0,l.i)(this.end)?this.end.getTime():this.end,i=(0,l.i)(e.start)?e.start.getTime():e.start,r=(0,l.i)(e.end)?e.end.getTime():e.end;return t===i&&s===r}expandTo(e){if(this.isEmpty||this.isAllTime)return this.clone();const t=(0,l.g)(this.start,(t=>(0,o.t)(t,e))),s=(0,l.g)(this.end,(t=>{const s=(0,o.t)(t,e);return t.getTime()===s.getTime()?s:(0,o.o)(s,1,e)}));return new i({start:t,end:s})}intersection(e){if(!e)return this.clone();if(this.isEmpty||e.isEmpty)return i.empty;if(this.isAllTime)return e.clone();if(e.isAllTime)return this.clone();const t=(0,l.m)(this.start,-1/0,(e=>e.getTime())),s=(0,l.m)(this.end,1/0,(e=>e.getTime())),r=(0,l.m)(e.start,-1/0,(e=>e.getTime())),n=(0,l.m)(e.end,1/0,(e=>e.getTime()));let o,a;if(r>=t&&r<=s?o=r:t>=r&&t<=n&&(o=t),s>=r&&s<=n?a=s:n>=t&&n<=s&&(a=n),null!=o&&null!=a&&!isNaN(o)&&!isNaN(a)){const e=new i;return e.start=o===-1/0?null:new Date(o),e.end=a===1/0?null:new Date(a),e}return i.empty}offset(e,t){if(this.isEmpty||this.isAllTime)return this.clone();const s=new i,{start:r,end:n}=this;return(0,l.i)(r)&&(s.start=(0,o.o)(r,e,t)),(0,l.i)(n)&&(s.end=(0,o.o)(n,e,t)),s}union(e){if(!e||e.isEmpty)return this.clone();if(this.isEmpty)return e.clone();if(this.isAllTime||e.isAllTime)return d.clone();const t=(0,l.i)(this.start)&&(0,l.i)(e.start)?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,s=(0,l.i)(this.end)&&(0,l.i)(e.end)?new Date(Math.max(this.end.getTime(),e.end.getTime())):null;return new i({start:t,end:s})}};(0,r._)([(0,a.Cb)({type:Date,json:{write:{allowNull:!0}}})],p.prototype,"end",void 0),(0,r._)([(0,h.r)("end")],p.prototype,"readEnd",null),(0,r._)([(0,u.w)("end")],p.prototype,"writeEnd",null),(0,r._)([(0,a.Cb)({readOnly:!0,json:{read:!1}})],p.prototype,"isAllTime",null),(0,r._)([(0,a.Cb)({readOnly:!0,json:{read:!1}})],p.prototype,"isEmpty",null),(0,r._)([(0,a.Cb)({type:Date,json:{write:{allowNull:!0}}})],p.prototype,"start",void 0),(0,r._)([(0,h.r)("start")],p.prototype,"readStart",null),(0,r._)([(0,u.w)("start")],p.prototype,"writeStart",null),p=i=(0,r._)([(0,c.j)("esri.TimeExtent")],p);const d=new p,g=new p({start:void 0,end:void 0}),f=p},6687:(e,t,s)=>{s.d(t,{T:()=>i});class i{constructor(e,t,s,i,r=undefined){this.id=e,this.level=t,this.row=s,this.col=i,this.extent=r}}},5777:(e,t,s)=>{s.d(t,{c:()=>i});var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==s.g?s.g:"undefined"!=typeof self?self:{}},32966:(e,t,s)=>{s.d(t,{c:()=>r});var i=s(60991);async function r(e,t){try{return await createImageBitmap(e)}catch(e){throw new i.Z("request:server",`Unable to load ${t}`,{url:t,error:e})}}},3530:(e,t,s)=>{function i(e){return(t,s)=>{t[s]=e}}s.d(t,{s:()=>i})},35197:(e,t,s)=>{s.d(t,{c:()=>o,o:()=>n,t:()=>l}),s(48578);const i={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:26784e5,years:31536e6,decades:31536e7,centuries:31536e8},r={milliseconds:{getter:"getMilliseconds",setter:"setMilliseconds",multiplier:1},seconds:{getter:"getSeconds",setter:"setSeconds",multiplier:1},minutes:{getter:"getMinutes",setter:"setMinutes",multiplier:1},hours:{getter:"getHours",setter:"setHours",multiplier:1},days:{getter:"getDate",setter:"setDate",multiplier:1},weeks:{getter:"getDate",setter:"setDate",multiplier:7},months:{getter:"getMonth",setter:"setMonth",multiplier:1},years:{getter:"getFullYear",setter:"setFullYear",multiplier:1},decades:{getter:"getFullYear",setter:"setFullYear",multiplier:10},centuries:{getter:"getFullYear",setter:"setFullYear",multiplier:100}};function n(e,t,s){const i=new Date(e.getTime());if(t&&s){const e=r[s],{getter:n,setter:l,multiplier:o}=e;if("months"===s){const e=function(e,t){const s=new Date(e,t+1,1);return s.setDate(0),s.getDate()}(i.getFullYear(),i.getMonth()+t);i.getDate()>e&&i.setDate(e)}i[l](i[n]()+t*o)}return i}function l(e,t){switch(t){case"milliseconds":return new Date(e.getTime());case"seconds":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds());case"minutes":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes());case"hours":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours());case"days":return new Date(e.getFullYear(),e.getMonth(),e.getDate());case"weeks":return new Date(e.getFullYear(),e.getMonth(),e.getDate()-e.getDay());case"months":return new Date(e.getFullYear(),e.getMonth(),1);case"years":return new Date(e.getFullYear(),0,1);case"decades":return new Date(e.getFullYear()-e.getFullYear()%10,0,1);case"centuries":return new Date(e.getFullYear()-e.getFullYear()%100,0,1);default:return new Date}}function o(e,t,s){return 0===e?0:e*i[t]/i[s]}},15324:(e,t,s)=>{s.d(t,{Z:()=>Z});var i,r,n,l=s(29768),o=s(91055),a=s(75067),h=s(76506),c=s(71252),u=s(6906),p=s(91306),d=s(6540),g=s(34250),f=s(3530),m=s(17533),b=s(89914);s(21972),s(60474),s(66396),s(86656),s(48578),s(92143),s(31450),s(71552),s(40642),s(19657),s(50406),s(60991),(n=i||(i={}))[n.ADD=1]="ADD",n[n.REMOVE=2]="REMOVE",n[n.MOVE=4]="MOVE";const _=new o.O(class{constructor(){this.target=null,this.cancellable=!1,this.defaultPrevented=!1,this.item=void 0,this.type=void 0}preventDefault(){this.cancellable&&(this.defaultPrevented=!0)}reset(e){this.defaultPrevented=!1,this.item=e}},void 0,(e=>{e.item=null,e.target=null,e.defaultPrevented=!1,e.cancellable=!1})),y=()=>{};function v(e){return e?e instanceof x?e.toArray():e.length?Array.prototype.slice.apply(e):[]:[]}function w(e){if(e&&e.length)return e[0]}function M(e,t,s,i){const r=Math.min(e.length-s,t.length-i);let n=0;for(;n<r&&e[s+n]===t[i+n];)n++;return n}function C(e,t,s,i){t&&t.forEach(((t,r,n)=>{e.push(t),C(e,s.call(i,t,r,n),s,i)}))}const E=new Set,D=new Set,T=new Set,O=new Map;let A=0,x=r=class extends a.Z.EventedAccessor{static isCollection(e){return null!=e&&e instanceof r}constructor(e){super(e),this._chgListeners=[],this._notifications=null,this._timer=null,this._observable=new b.S,this.length=0,this._items=[],Object.defineProperty(this,"uid",{value:A++})}normalizeCtorArgs(e){return e?Array.isArray(e)||e instanceof r?{items:e}:e:{}}destroy(){this._removeAllRaw()}*[Symbol.iterator](){yield*this.items}get items(){return(0,d.t)(this._observable),this._items}set items(e){this._emitBeforeChanges(i.ADD)||(this._splice(0,this.length,v(e)),this._emitAfterChanges(i.ADD))}hasEventListener(e){return"change"===e?this._chgListeners.length>0:this._emitter.hasEventListener(e)}on(e,t){if("change"===e){const e=this._chgListeners,s={removed:!1,callback:t};return e.push(s),this._notifications&&this._notifications.push({listeners:e.slice(),items:this._items.slice(),changes:[]}),{remove(){this.remove=y,s.removed=!0,e.splice(e.indexOf(s),1)}}}return this._emitter.on(e,t)}once(e,t){const s=this.on(e,t);return{remove(){s.remove()}}}add(e,t){if((0,d.t)(this._observable),this._emitBeforeChanges(i.ADD))return this;const s=this.getNextIndex(t??null);return this._splice(s,0,[e]),this._emitAfterChanges(i.ADD),this}addMany(e,t=this._items.length){if((0,d.t)(this._observable),!e||!e.length)return this;if(this._emitBeforeChanges(i.ADD))return this;const s=this.getNextIndex(t);return this._splice(s,0,v(e)),this._emitAfterChanges(i.ADD),this}at(e){if((0,d.t)(this._observable),(e=Math.trunc(e)||0)<0&&(e+=this.length),!(e<0||e>=this.length))return this._items[e]}removeAll(){if((0,d.t)(this._observable),!this.length||this._emitBeforeChanges(i.REMOVE))return[];const e=this._removeAllRaw();return this._emitAfterChanges(i.REMOVE),e}_removeAllRaw(){return 0===this.length?[]:this._splice(0,this.length)||[]}clone(){return(0,d.t)(this._observable),this._createNewInstance({items:this._items.map(h.d9)})}concat(...e){(0,d.t)(this._observable);const t=e.map(v);return this._createNewInstance({items:this._items.concat(...t)})}drain(e,t){if((0,d.t)(this._observable),!this.length||this._emitBeforeChanges(i.REMOVE))return;const s=(0,c.b)(this._splice(0,this.length)),r=s.length;for(let i=0;i<r;i++)e.call(t,s[i],i,s);this._emitAfterChanges(i.REMOVE)}every(e,t){return(0,d.t)(this._observable),this._items.every(e,t)}filter(e,t){let s;return(0,d.t)(this._observable),s=2===arguments.length?this._items.filter(e,t):this._items.filter(e),this._createNewInstance({items:s})}find(e,t){return(0,d.t)(this._observable),this._items.find(e,t)}findIndex(e,t){return(0,d.t)(this._observable),this._items.findIndex(e,t)}flatten(e,t){(0,d.t)(this._observable);const s=[];return C(s,this,e,t),new r(s)}forEach(e,t){return(0,d.t)(this._observable),this._items.forEach(e,t)}getItemAt(e){return(0,d.t)(this._observable),this._items[e]}getNextIndex(e){(0,d.t)(this._observable);const t=this.length;return(e=e??t)<0?e=0:e>t&&(e=t),e}includes(e,t=0){return(0,d.t)(this._observable),this._items.includes(e,t)}indexOf(e,t=0){return(0,d.t)(this._observable),this._items.indexOf(e,t)}join(e=","){return(0,d.t)(this._observable),this._items.join(e)}lastIndexOf(e,t=this.length-1){return(0,d.t)(this._observable),this._items.lastIndexOf(e,t)}map(e,t){(0,d.t)(this._observable);const s=this._items.map(e,t);return new r({items:s})}reorder(e,t=this.length-1){(0,d.t)(this._observable);const s=this.indexOf(e);if(-1!==s){if(t<0?t=0:t>=this.length&&(t=this.length-1),s!==t){if(this._emitBeforeChanges(i.MOVE))return e;this._splice(s,1),this._splice(t,0,[e]),this._emitAfterChanges(i.MOVE)}return e}}pop(){if((0,d.t)(this._observable),!this.length||this._emitBeforeChanges(i.REMOVE))return;const e=w(this._splice(this.length-1,1));return this._emitAfterChanges(i.REMOVE),e}push(...e){return(0,d.t)(this._observable),this._emitBeforeChanges(i.ADD)||(this._splice(this.length,0,e),this._emitAfterChanges(i.ADD)),this.length}reduce(e,t){(0,d.t)(this._observable);const s=this._items;return 2===arguments.length?s.reduce(e,t):s.reduce(e)}reduceRight(e,t){(0,d.t)(this._observable);const s=this._items;return 2===arguments.length?s.reduceRight(e,t):s.reduceRight(e)}remove(e){return(0,d.t)(this._observable),this.removeAt(this.indexOf(e))}removeAt(e){if((0,d.t)(this._observable),e<0||e>=this.length||this._emitBeforeChanges(i.REMOVE))return;const t=w(this._splice(e,1));return this._emitAfterChanges(i.REMOVE),t}removeMany(e){if((0,d.t)(this._observable),!e||!e.length||this._emitBeforeChanges(i.REMOVE))return[];const t=e instanceof r?e.toArray():e,s=this._items,n=[],l=t.length;for(let e=0;e<l;e++){const i=t[e],r=s.indexOf(i);if(r>-1){const i=1+M(t,s,e+1,r+1),l=this._splice(r,i);l&&l.length>0&&n.push.apply(n,l),e+=i-1}}return this._emitAfterChanges(i.REMOVE),n}reverse(){if((0,d.t)(this._observable),this._emitBeforeChanges(i.MOVE))return this;const e=this._splice(0,this.length);return e&&(e.reverse(),this._splice(0,0,e)),this._emitAfterChanges(i.MOVE),this}shift(){if((0,d.t)(this._observable),!this.length||this._emitBeforeChanges(i.REMOVE))return;const e=w(this._splice(0,1));return this._emitAfterChanges(i.REMOVE),e}slice(e=0,t=this.length){return(0,d.t)(this._observable),this._createNewInstance({items:this._items.slice(e,t)})}some(e,t){return(0,d.t)(this._observable),this._items.some(e,t)}sort(e){if((0,d.t)(this._observable),!this.length||this._emitBeforeChanges(i.MOVE))return this;const t=(0,c.b)(this._splice(0,this.length));return arguments.length?t.sort(e):t.sort(),this._splice(0,0,t),this._emitAfterChanges(i.MOVE),this}splice(e,t,...s){(0,d.t)(this._observable);const r=(t?i.REMOVE:0)|(s.length?i.ADD:0);if(this._emitBeforeChanges(r))return[];const n=this._splice(e,t,s)||[];return this._emitAfterChanges(r),n}toArray(){return(0,d.t)(this._observable),this._items.slice()}toJSON(){return(0,d.t)(this._observable),this.toArray()}toLocaleString(){return(0,d.t)(this._observable),this._items.toLocaleString()}toString(){return(0,d.t)(this._observable),this._items.toString()}unshift(...e){return(0,d.t)(this._observable),!e.length||this._emitBeforeChanges(i.ADD)||(this._splice(0,0,e),this._emitAfterChanges(i.ADD)),this.length}_createNewInstance(e){return new this.constructor(e)}_splice(e,t,s){const i=this._items,r=this.itemType;let n,l;if(!this._notifications&&this.hasEventListener("change")&&(this._notifications=[{listeners:this._chgListeners.slice(),items:this._items.slice(),changes:[]}],this._timer&&this._timer.remove(),this._timer=(0,u.Os)((()=>this._dispatchChange()))),t){if(l=i.splice(e,t),this.hasEventListener("before-remove")){const t=_.acquire();t.target=this,t.cancellable=!0;for(let s=0,r=l.length;s<r;s++)n=l[s],t.reset(n),this.emit("before-remove",t),t.defaultPrevented&&(l.splice(s,1),i.splice(e,0,n),e+=1,s-=1,r-=1);_.release(t)}if(this.length=this._items.length,this.hasEventListener("after-remove")){const e=_.acquire();e.target=this,e.cancellable=!1;const t=l.length;for(let s=0;s<t;s++)e.reset(l[s]),this.emit("after-remove",e);_.release(e)}}if(s&&s.length){if(r){const e=[];for(const t of s){const s=r.ensureType(t);null==s&&null!=t||e.push(s)}s=e}const t=this.hasEventListener("before-add"),n=this.hasEventListener("after-add"),l=e===this.length;if(t||n){const r=_.acquire();r.target=this,r.cancellable=!0;const o=_.acquire();o.target=this,o.cancellable=!1;for(const a of s)t?(r.reset(a),this.emit("before-add",r),r.defaultPrevented||(l?i.push(a):i.splice(e++,0,a),this._set("length",i.length),n&&(o.reset(a),this.emit("after-add",o)))):(l?i.push(a):i.splice(e++,0,a),this._set("length",i.length),o.reset(a),this.emit("after-add",o));_.release(o),_.release(r)}else{if(l)for(const e of s)i.push(e);else i.splice(e,0,...s);this._set("length",i.length)}}return(s&&s.length||l&&l.length)&&this._notifyChangeEvent(s,l),l}_emitBeforeChanges(e){let t=!1;if(this.hasEventListener("before-changes")){const s=_.acquire();s.target=this,s.cancellable=!0,s.type=e,this.emit("before-changes",s),t=s.defaultPrevented,_.release(s)}return t}_emitAfterChanges(e){if(this.hasEventListener("after-changes")){const t=_.acquire();t.target=this,t.cancellable=!1,t.type=e,this.emit("after-changes",t),_.release(t)}this._observable.notify()}_notifyChangeEvent(e,t){this.hasEventListener("change")&&this._notifications&&this._notifications[this._notifications.length-1].changes.push({added:e,removed:t})}_dispatchChange(){if(this._timer&&(this._timer.remove(),this._timer=null),!this._notifications)return;const e=this._notifications;this._notifications=null;for(const t of e){const e=t.changes;E.clear(),D.clear(),T.clear();for(const{added:t,removed:s}of e){if(t)if(0===T.size&&0===D.size)for(const e of t)E.add(e);else for(const e of t)D.has(e)?(T.add(e),D.delete(e)):T.has(e)||E.add(e);if(s)if(0===T.size&&0===E.size)for(const e of s)D.add(e);else for(const e of s)E.has(e)?E.delete(e):(T.delete(e),D.add(e))}const s=o.A.acquire();E.forEach((e=>{s.push(e)}));const i=o.A.acquire();D.forEach((e=>{i.push(e)}));const r=this._items,n=t.items,l=o.A.acquire();if(T.forEach((e=>{n.indexOf(e)!==r.indexOf(e)&&l.push(e)})),t.listeners&&(s.length||i.length||l.length)){const e={target:this,added:s,removed:i,moved:l},r=t.listeners.length;for(let s=0;s<r;s++){const i=t.listeners[s];i.removed||i.callback.call(this,e)}}o.A.release(s),o.A.release(i),o.A.release(l)}E.clear(),D.clear(),T.clear()}};x.ofType=e=>{if(!e)return r;if(O.has(e))return O.get(e);let t=null;if("function"==typeof e)t=e.prototype.declaredClass;else if(e.base)t=e.base.prototype.declaredClass;else for(const s in e.typeMap){const i=e.typeMap[s].prototype.declaredClass;t?t+=` | ${i}`:t=i}let s=class extends r{};return(0,l._)([(0,f.s)({Type:e,ensureType:"function"==typeof e?(0,p.e)(e):(0,p.a)(e)})],s.prototype,"itemType",void 0),s=(0,l._)([(0,m.j)(`esri.core.Collection<${t}>`)],s),O.set(e,s),s},(0,l._)([(0,g.Cb)()],x.prototype,"length",void 0),(0,l._)([(0,g.Cb)()],x.prototype,"items",null),x=r=(0,l._)([(0,m.j)("esri.core.Collection")],x);const Z=x},37963:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Z});var i,r=s(29768),n=(s(74569),s(82058)),l=s(60991),o=s(57251),a=s(71252),h=s(54179),c=s(34250),u=(s(91306),s(48578),s(17533)),p=s(60947),d=s(21801),g=s(92482),f=s(41617),m=s(80462),b=s(68219),_=s(6416),y=s(32966),v=s(43352),w=s(6687),M=(s(31450),s(71552),s(76506),s(88762),s(32101),s(92143),s(40642),s(50406),s(60474),s(66396),s(86656),s(6540),s(73796),s(12047),s(21972),s(91055),s(19657),s(6906),s(97714),s(53785),s(89623),s(2906),s(91597)),C=(s(86787),s(35132),s(82426),s(72836),s(29794),s(7200),s(84069),s(44567),s(98380),s(92896),s(22781),s(32422),s(75067),s(3296),s(81184),s(33101),s(92200),s(65949),s(54174),s(22465),s(65775),s(5777),s(15324),s(89914),s(92817));const E=new w.T("0/0/0",0,0,0,void 0);let D=i=class extends((0,m.h)((0,_.M)((0,b.Q)(f.Z)))){constructor(){super(...arguments),this.tileInfo=v.Z.create({spatialReference:p.Z.WebMercator,size:256}),this.type="base-tile",this.fullExtent=new d.Z(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,p.Z.WebMercator),this.spatialReference=p.Z.WebMercator}getTileBounds(e,t,s,i){const r=i||(0,g.c)();return E.level=e,E.row=t,E.col=s,E.extent=r,this.tileInfo.updateTileInfo(E),E.extent=void 0,r}fetchTile(e,t,s,i={}){const{signal:r}=i,l=this.getTileUrl(e,t,s),o={responseType:"image",signal:r,query:{...this.refreshParameters}};return(0,n.default)(l??"",o).then((e=>e.data))}async fetchImageBitmapTile(e,t,s,r={}){const{signal:o}=r;if(this.fetchTile!==i.prototype.fetchTile){const i=await this.fetchTile(e,t,s,r);try{return createImageBitmap(i)}catch(i){throw new l.Z("request:server",`Unable to load tile ${e}/${t}/${s}`,{error:i,level:e,row:t,col:s})}}const a=this.getTileUrl(e,t,s)??"",h={responseType:"blob",signal:o,query:{...this.refreshParameters}},{data:c}=await(0,n.default)(a,h);return(0,y.c)(c,a)}getTileUrl(){throw new l.Z("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}};(0,r._)([(0,c.Cb)({type:v.Z})],D.prototype,"tileInfo",void 0),(0,r._)([(0,c.Cb)({type:["show","hide"]})],D.prototype,"listMode",void 0),(0,r._)([(0,c.Cb)({readOnly:!0,value:"base-tile"})],D.prototype,"type",void 0),(0,r._)([(0,c.Cb)({nonNullable:!0})],D.prototype,"fullExtent",void 0),(0,r._)([(0,c.Cb)()],D.prototype,"spatialReference",void 0),D=i=(0,r._)([(0,u.j)("esri.layers.BaseTileLayer")],D);const T=D;var O=s(89440);s(43022),s(93314),s(35197),s(38742),s(1557),s(47842),s(14249),s(60217),s(17298),s(85557),s(34394);const A=new o.J({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"});let x=class extends((0,m.h)((0,O.O)((0,h.M)(T)))){constructor(e){super(e),this.type="bing-maps",this.tileInfo=new v.Z({size:[256,256],dpi:96,origin:new M.Z({x:-20037508.342787,y:20037508.342787,spatialReference:p.Z.WebMercator}),spatialReference:p.Z.WebMercator,lods:[new C.Z({level:1,resolution:78271.5169639999,scale:295828763.795777}),new C.Z({level:2,resolution:39135.7584820001,scale:147914381.897889}),new C.Z({level:3,resolution:19567.8792409999,scale:73957190.948944}),new C.Z({level:4,resolution:9783.93962049996,scale:36978595.474472}),new C.Z({level:5,resolution:4891.96981024998,scale:18489297.737236}),new C.Z({level:6,resolution:2445.98490512499,scale:9244648.868618}),new C.Z({level:7,resolution:1222.99245256249,scale:4622324.434309}),new C.Z({level:8,resolution:611.49622628138,scale:2311162.217155}),new C.Z({level:9,resolution:305.748113140558,scale:1155581.108577}),new C.Z({level:10,resolution:152.874056570411,scale:577790.554289}),new C.Z({level:11,resolution:76.4370282850732,scale:288895.277144}),new C.Z({level:12,resolution:38.2185141425366,scale:144447.638572}),new C.Z({level:13,resolution:19.1092570712683,scale:72223.819286}),new C.Z({level:14,resolution:9.55462853563415,scale:36111.909643}),new C.Z({level:15,resolution:4.77731426794937,scale:18055.954822}),new C.Z({level:16,resolution:2.38865713397468,scale:9027.977411}),new C.Z({level:17,resolution:1.19432856685505,scale:4513.988705}),new C.Z({level:18,resolution:.597164283559817,scale:2256.994353}),new C.Z({level:19,resolution:.298582141647617,scale:1128.497176}),new C.Z({level:20,resolution:.1492910708238085,scale:564.248588})]}),this.key=null,this.style="road",this.culture="en-US",this.region=null,this.portalUrl=null,this.hasAttributionData=!0}get bingMetadata(){return this._get("bingMetadata")}set bingMetadata(e){this._set("bingMetadata",e)}get copyright(){return(0,a.i)(this.bingMetadata)?this.bingMetadata.copyright:null}get operationalLayerType(){return A.toJSON(this.style)}get bingLogo(){return(0,a.i)(this.bingMetadata)?this.bingMetadata.brandLogoUri:null}load(e){return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then((()=>this._getMetadata()))):this.addResolvingPromise(Promise.reject(new l.Z("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}getTileUrl(e,t,s){if(!this.loaded||(0,a.a)(this.bingMetadata))return null;const i=this.bingMetadata.resourceSets[0].resources[0],r=i.imageUrlSubdomains[t%i.imageUrlSubdomains.length],n=this._getQuadKey(e,t,s);return i.imageUrl.replace("{subdomain}",r).replace("{quadkey}",n)}async fetchAttributionData(){return this.load().then((()=>(0,a.a)(this.bingMetadata)?null:{contributors:this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((e=>({attribution:e.attribution,coverageAreas:e.coverageAreas.map((e=>({zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]})))})))}))}_getMetadata(){const e={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return(0,n.default)(`https://dev.virtualearth.net/REST/v1/Imagery/Metadata/${e}`,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then((e=>{const t=e.data;if(200!==t.statusCode)throw new l.Z("bingmapslayer:getmetadata",t.statusDescription);if(this.bingMetadata=t,0===this.bingMetadata.resourceSets.length)throw new l.Z("bingmapslayer:getmetadata","no bing resourcesets");if(0===this.bingMetadata.resourceSets[0].resources.length)throw new l.Z("bingmapslayer:getmetadata","no bing resources")})).catch((e=>{throw new l.Z("bingmapslayer:getmetadata",e.message)}))}_getPortalBingKey(){return(0,n.default)(this.portalUrl??"",{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then((e=>{if(!e.data.bingKey)throw new l.Z("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");this.key=e.data.bingKey})).catch((e=>{throw new l.Z("bingmapslayer:getportalbingkey",e.message)}))}_getQuadKey(e,t,s){let i="";for(let r=e;r>0;r--){let e=0;const n=1<<r-1;0!=(s&n)&&(e+=1),0!=(t&n)&&(e+=2),i+=e.toString()}return i}};(0,r._)([(0,c.Cb)({json:{read:!1,write:!1},value:null})],x.prototype,"bingMetadata",null),(0,r._)([(0,c.Cb)({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],x.prototype,"type",void 0),(0,r._)([(0,c.Cb)({type:v.Z})],x.prototype,"tileInfo",void 0),(0,r._)([(0,c.Cb)({type:String,readOnly:!0,json:{read:!1,write:!1}})],x.prototype,"copyright",null),(0,r._)([(0,c.Cb)({type:String,json:{write:!1,read:!1}})],x.prototype,"key",void 0),(0,r._)([(0,c.Cb)({type:A.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:A.read}}})],x.prototype,"style",void 0),(0,r._)([(0,c.Cb)({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],x.prototype,"operationalLayerType",null),(0,r._)([(0,c.Cb)({type:String,json:{write:!1,read:!1}})],x.prototype,"culture",void 0),(0,r._)([(0,c.Cb)({type:String,json:{write:!1,read:!1}})],x.prototype,"region",void 0),(0,r._)([(0,c.Cb)({type:String,json:{write:!0,read:!0}})],x.prototype,"portalUrl",void 0),(0,r._)([(0,c.Cb)({type:Boolean,json:{write:!1,read:!1}})],x.prototype,"hasAttributionData",void 0),(0,r._)([(0,c.Cb)({type:String,readOnly:!0})],x.prototype,"bingLogo",null),x=(0,r._)([(0,u.j)("esri.layers.BingMapsLayer")],x);const Z=x},68219:(e,t,s)=>{s.d(t,{Q:()=>b});var i=s(29768),r=s(92143),n=s(50406),l=s(34250),o=(s(91306),s(48578),s(17533)),a=s(15324),h=(s(60991),s(19657));s(31450),s(71552),s(76506),s(40642),s(60474),s(66396),s(86656),s(6540),s(91055),s(75067),s(21972),s(6906),s(89914);const c=new a.Z,u=new WeakMap;function p(e){return null!=e&&"object"==typeof e&&"refreshInterval"in e&&"refresh"in e}function d(e,t){return Number.isFinite(e)&&Number.isFinite(t)?t<=0?e:d(t,e%t):0}let g=0,f=0;function m(){const e=Date.now();for(const t of c)t.refreshInterval&&e-(u.get(t)??0)+5>=6e4*t.refreshInterval&&(u.set(t,e),t.refresh(e))}(0,h.a)((()=>{const e=Date.now();let t=0;for(const s of c)t=d(Math.round(6e4*s.refreshInterval),t),s.refreshInterval?u.get(s)||u.set(s,e):u.delete(s);if(t!==f){if(f=t,clearInterval(g),0===f)return void(g=0);g=setInterval(m,f)}}));const b=e=>{let t=class extends e{constructor(...e){super(...e),this.refreshInterval=0,this.refreshTimestamp=0,this._debounceHasDataChanged=(0,n.Ds)((()=>this.hasDataChanged())),this.when().then((()=>{p(this)&&c.push(this)}),(()=>{}))}destroy(){p(this)&&c.includes(this)&&c.remove(this)}get refreshParameters(){return{_ts:this.refreshTimestamp||null}}refresh(e=Date.now()){(0,n.R8)(this._debounceHasDataChanged()).then((t=>{t&&this._set("refreshTimestamp",e),this.emit("refresh",{dataChanged:t})}),(e=>{r.L.getLogger(this.declaredClass).error(e),this.emit("refresh",{dataChanged:!1,error:e})}))}async hasDataChanged(){return!0}};return(0,i._)([(0,l.Cb)({type:Number,cast:e=>e>=.1?e:e<=0?0:.1,json:{write:!0}})],t.prototype,"refreshInterval",void 0),(0,i._)([(0,l.Cb)({readOnly:!0})],t.prototype,"refreshTimestamp",void 0),(0,i._)([(0,l.Cb)()],t.prototype,"refreshParameters",null),t=(0,i._)([(0,o.j)("esri.layers.mixins.RefreshableLayer")],t),t}},92817:(e,t,s)=>{s.d(t,{Z:()=>c});var i,r=s(29768),n=s(12047),l=s(34250),o=s(91306),a=(s(48578),s(17533));s(21972),s(60474),s(66396),s(76506),s(86656),s(92143),s(31450),s(71552),s(40642),s(91055),s(6540),s(19657),s(6906),s(50406),s(60991);let h=i=class extends n.wq{constructor(e){super(e),this.cols=null,this.level=0,this.levelValue=null,this.origin=null,this.resolution=0,this.rows=null,this.scale=0}clone(){return new i({cols:this.cols,level:this.level,levelValue:this.levelValue,resolution:this.resolution,rows:this.rows,scale:this.scale})}};(0,r._)([(0,l.Cb)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],h.prototype,"cols",void 0),(0,r._)([(0,l.Cb)({type:o.I,json:{write:!0}})],h.prototype,"level",void 0),(0,r._)([(0,l.Cb)({type:String,json:{write:!0}})],h.prototype,"levelValue",void 0),(0,r._)([(0,l.Cb)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],h.prototype,"origin",void 0),(0,r._)([(0,l.Cb)({type:Number,json:{write:!0}})],h.prototype,"resolution",void 0),(0,r._)([(0,l.Cb)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],h.prototype,"rows",void 0),(0,r._)([(0,l.Cb)({type:Number,json:{write:!0}})],h.prototype,"scale",void 0),h=i=(0,r._)([(0,a.j)("esri.layers.support.LOD")],h);const c=h},43352:(e,t,s)=>{s.d(t,{Z:()=>E});var i,r=s(29768),n=s(57251),l=s(12047),o=s(71252),a=s(53785),h=s(34250),c=s(91306),u=(s(48578),s(97714)),p=s(17533),d=s(2906),g=s(91597),f=s(60947),m=s(92482),b=s(35132),_=s(92817),y=s(6687);s(71552),s(76506),s(21972),s(60474),s(66396),s(86656),s(92143),s(31450),s(40642),s(91055),s(6540),s(19657),s(6906),s(50406),s(60991),s(89623),s(86787),s(73796),s(82426),s(72836),s(29794),s(7200),s(21801);const v=new n.J({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"});let w=i=class extends l.wq{static create(e={}){const{resolutionFactor:t=1,scales:s,size:r=256,spatialReference:n=f.Z.WebMercator,numLODs:l=24}=e;if(!(0,a.n)(n)){const e=[];if(s)for(let t=0;t<s.length;t++){const i=s[t];e.push(new _.Z({level:t,scale:i,resolution:i}))}else{let t=5e-4;for(let s=l-1;s>=0;s--)e.unshift(new _.Z({level:s,scale:t,resolution:t})),t*=2}return new i({dpi:96,lods:e,origin:new g.Z(0,0,n),size:[r,r],spatialReference:n})}const o=(0,a.h)(n),h=e.origin?new g.Z({x:e.origin.x,y:e.origin.y,spatialReference:n}):new g.Z(o?{x:o.origin[0],y:o.origin[1],spatialReference:n}:{x:0,y:0,spatialReference:n}),c=1/(39.37*(0,a.g)(n)*96),u=[];if(s)for(let e=0;e<s.length;e++){const t=s[e],i=t*c;u.push(new _.Z({level:e,scale:t,resolution:i}))}else{let e=(0,a.c)(n)?512/r*591657527.5917094:256/r*591657527.591555;const s=Math.ceil(l/t);u.push(new _.Z({level:0,scale:e,resolution:e*c}));for(let i=1;i<s;i++){const s=e/2**t,r=s*c;u.push(new _.Z({level:i,scale:s,resolution:r})),e=s}}return new i({dpi:96,lods:u,origin:h,size:[r,r],spatialReference:n})}constructor(e){super(e),this.dpi=96,this.format=null,this.origin=null,this.minScale=0,this.maxScale=0,this.size=null,this.spatialReference=null}get isWrappable(){const{spatialReference:e,origin:t}=this;if(e&&t){const s=(0,a.h)(e);return e.isWrappable&&!!s&&Math.abs(s.origin[0]-t.x)<=s.dx}return!1}readOrigin(e,t){return g.Z.fromJSON({spatialReference:t.spatialReference,...e})}set lods(e){let t=0,s=0;const i=[],r=this._levelToLOD={};e&&(t=-1/0,s=1/0,e.forEach((e=>{i.push(e.scale),t=e.scale>t?e.scale:t,s=e.scale<s?e.scale:s,r[e.level]=e}))),this._set("scales",i),this._set("minScale",t),this._set("maxScale",s),this._set("lods",e),this._initializeUpsampleLevels()}readSize(e,t){return[t.cols,t.rows]}writeSize(e,t){t.cols=e[0],t.rows=e[1]}zoomToScale(e){const t=this.scales;if(e<=0)return t[0];if(e>=t.length-1)return t[t.length-1];const s=Math.floor(e),i=s+1;return t[s]/(t[s]/t[i])**(e-s)}scaleToZoom(e){const t=this.scales,s=t.length-1;let i=0;for(;i<s;i++){const s=t[i],r=t[i+1];if(s<=e)return i;if(r===e)return i+1;if(s>e&&r<e)return i+Math.log(s/e)/Math.log(s/r)}return i}snapScale(e,t=.95){const s=this.scaleToZoom(e);return s%Math.floor(s)>=t?this.zoomToScale(Math.ceil(s)):this.zoomToScale(Math.floor(s))}tileAt(e,t,s,i){const r=this.lodAt(e);if(!r)return null;let n,l;if("number"==typeof t)n=t,l=s;else if((0,a.f)(t.spatialReference,this.spatialReference))n=t.x,l=t.y,i=s;else{const e=(0,b.iV)(t,this.spatialReference);if((0,o.a)(e))return null;n=e.x,l=e.y,i=s}const h=r.resolution*this.size[0],c=r.resolution*this.size[1];return i||(i=new y.T(null,0,0,0,(0,m.c)())),i.level=e,i.row=Math.floor((this.origin.y-l)/c+.001),i.col=Math.floor((n-this.origin.x)/h+.001),this.updateTileInfo(i),i}updateTileInfo(e,t=i.ExtrapolateOptions.NONE){let s=this.lodAt(e.level);if(!s&&t===i.ExtrapolateOptions.POWER_OF_TWO){const t=this.lods[this.lods.length-1];t.level<e.level&&(s=t)}if(!s)return;const r=e.level-s.level,n=s.resolution*this.size[0]/2**r,l=s.resolution*this.size[1]/2**r;e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=(0,m.c)()),e.extent[0]=this.origin.x+e.col*n,e.extent[1]=this.origin.y-(e.row+1)*l,e.extent[2]=e.extent[0]+n,e.extent[3]=e.extent[1]+l}upsampleTile(e){const t=this._upsampleLevels[e.level];return!(!t||-1===t.parentLevel||(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),0))}getTileBounds(e,t){const s=this.lodAt(t.level);if(null==s)return null;const{resolution:i}=s,r=i*this.size[0],n=i*this.size[1];return e[0]=this.origin.x+t.col*r,e[1]=this.origin.y-(t.row+1)*n,e[2]=e[0]+r,e[3]=e[1]+n,e}lodAt(e){return this._levelToLOD?.[e]??null}clone(){return i.fromJSON(this.write({}))}getOrCreateCompatible(e,t){if(256===this.size[0]&&256===this.size[1])return 256===e?this:null;const s=[],r=this.lods.length;for(let e=0;e<r;e++){const i=this.lods[e],r=i.resolution*t;s.push(new _.Z({level:i.level,scale:i.scale,resolution:r}))}return new i({size:[e,e],dpi:this.dpi,format:this.format,compressionQuality:this.compressionQuality,origin:this.origin,spatialReference:this.spatialReference,lods:s})}_initializeUpsampleLevels(){const e=this.lods;this._upsampleLevels=[];let t=null;for(let s=0;s<e.length;s++){const i=e[s];this._upsampleLevels[i.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/i.resolution:0},t=i}}};var M,C;(0,r._)([(0,h.Cb)({type:Number,json:{write:!0}})],w.prototype,"compressionQuality",void 0),(0,r._)([(0,h.Cb)({type:Number,json:{write:!0}})],w.prototype,"dpi",void 0),(0,r._)([(0,h.Cb)({type:String,json:{read:v.read,write:v.write,origins:{"web-scene":{read:!1,write:!1}}}})],w.prototype,"format",void 0),(0,r._)([(0,h.Cb)({readOnly:!0})],w.prototype,"isWrappable",null),(0,r._)([(0,h.Cb)({type:g.Z,json:{write:!0}})],w.prototype,"origin",void 0),(0,r._)([(0,u.r)("origin")],w.prototype,"readOrigin",null),(0,r._)([(0,h.Cb)({type:[_.Z],value:null,json:{write:!0}})],w.prototype,"lods",null),(0,r._)([(0,h.Cb)({readOnly:!0})],w.prototype,"minScale",void 0),(0,r._)([(0,h.Cb)({readOnly:!0})],w.prototype,"maxScale",void 0),(0,r._)([(0,h.Cb)({readOnly:!0})],w.prototype,"scales",void 0),(0,r._)([(0,h.Cb)({cast:e=>Array.isArray(e)?e:"number"==typeof e?[e,e]:[256,256]})],w.prototype,"size",void 0),(0,r._)([(0,u.r)("size",["rows","cols"])],w.prototype,"readSize",null),(0,r._)([(0,d.w)("size",{cols:{type:c.I},rows:{type:c.I}})],w.prototype,"writeSize",null),(0,r._)([(0,h.Cb)({type:f.Z,json:{write:!0}})],w.prototype,"spatialReference",void 0),w=i=(0,r._)([(0,p.j)("esri.layers.support.TileInfo")],w),(C=(M=w||(w={})).ExtrapolateOptions||(M.ExtrapolateOptions={}))[C.NONE=0]="NONE",C[C.POWER_OF_TWO=1]="POWER_OF_TWO";const E=w}}]);