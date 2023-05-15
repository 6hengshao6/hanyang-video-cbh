"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3799,5777],{93314:(e,t,s)=>{s.d(t,{Z:()=>m});var r,i=s(29768),l=s(12047),n=s(71252),o=s(35197),a=s(34250),h=(s(91306),s(48578),s(97714)),u=s(17533),c=s(2906);s(21972),s(60474),s(66396),s(76506),s(86656),s(92143),s(31450),s(71552),s(40642),s(91055),s(6540),s(19657),s(6906),s(50406),s(60991);let p=r=class extends l.wq{static get allTime(){return d}static get empty(){return f}constructor(e){super(e),this.end=null,this.start=null}readEnd(e,t){return null!=t.end?new Date(t.end):null}writeEnd(e,t){t.end=e?e.getTime():null}get isAllTime(){return this.equals(r.allTime)}get isEmpty(){return this.equals(r.empty)}readStart(e,t){return null!=t.start?new Date(t.start):null}writeStart(e,t){t.start=e?e.getTime():null}clone(){return new r({end:this.end,start:this.start})}equals(e){if(!e)return!1;const t=(0,n.i)(this.start)?this.start.getTime():this.start,s=(0,n.i)(this.end)?this.end.getTime():this.end,r=(0,n.i)(e.start)?e.start.getTime():e.start,i=(0,n.i)(e.end)?e.end.getTime():e.end;return t===r&&s===i}expandTo(e){if(this.isEmpty||this.isAllTime)return this.clone();const t=(0,n.g)(this.start,(t=>(0,o.t)(t,e))),s=(0,n.g)(this.end,(t=>{const s=(0,o.t)(t,e);return t.getTime()===s.getTime()?s:(0,o.o)(s,1,e)}));return new r({start:t,end:s})}intersection(e){if(!e)return this.clone();if(this.isEmpty||e.isEmpty)return r.empty;if(this.isAllTime)return e.clone();if(e.isAllTime)return this.clone();const t=(0,n.m)(this.start,-1/0,(e=>e.getTime())),s=(0,n.m)(this.end,1/0,(e=>e.getTime())),i=(0,n.m)(e.start,-1/0,(e=>e.getTime())),l=(0,n.m)(e.end,1/0,(e=>e.getTime()));let o,a;if(i>=t&&i<=s?o=i:t>=i&&t<=l&&(o=t),s>=i&&s<=l?a=s:l>=t&&l<=s&&(a=l),null!=o&&null!=a&&!isNaN(o)&&!isNaN(a)){const e=new r;return e.start=o===-1/0?null:new Date(o),e.end=a===1/0?null:new Date(a),e}return r.empty}offset(e,t){if(this.isEmpty||this.isAllTime)return this.clone();const s=new r,{start:i,end:l}=this;return(0,n.i)(i)&&(s.start=(0,o.o)(i,e,t)),(0,n.i)(l)&&(s.end=(0,o.o)(l,e,t)),s}union(e){if(!e||e.isEmpty)return this.clone();if(this.isEmpty)return e.clone();if(this.isAllTime||e.isAllTime)return d.clone();const t=(0,n.i)(this.start)&&(0,n.i)(e.start)?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,s=(0,n.i)(this.end)&&(0,n.i)(e.end)?new Date(Math.max(this.end.getTime(),e.end.getTime())):null;return new r({start:t,end:s})}};(0,i._)([(0,a.Cb)({type:Date,json:{write:{allowNull:!0}}})],p.prototype,"end",void 0),(0,i._)([(0,h.r)("end")],p.prototype,"readEnd",null),(0,i._)([(0,c.w)("end")],p.prototype,"writeEnd",null),(0,i._)([(0,a.Cb)({readOnly:!0,json:{read:!1}})],p.prototype,"isAllTime",null),(0,i._)([(0,a.Cb)({readOnly:!0,json:{read:!1}})],p.prototype,"isEmpty",null),(0,i._)([(0,a.Cb)({type:Date,json:{write:{allowNull:!0}}})],p.prototype,"start",void 0),(0,i._)([(0,h.r)("start")],p.prototype,"readStart",null),(0,i._)([(0,c.w)("start")],p.prototype,"writeStart",null),p=r=(0,i._)([(0,u.j)("esri.TimeExtent")],p);const d=new p,f=new p({start:void 0,end:void 0}),m=p},6687:(e,t,s)=>{s.d(t,{T:()=>r});class r{constructor(e,t,s,r,i=undefined){this.id=e,this.level=t,this.row=s,this.col=r,this.extent=i}}},5777:(e,t,s)=>{s.d(t,{c:()=>r});var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==s.g?s.g:"undefined"!=typeof self?self:{}},32966:(e,t,s)=>{s.d(t,{c:()=>i});var r=s(60991);async function i(e,t){try{return await createImageBitmap(e)}catch(e){throw new r.Z("request:server",`Unable to load ${t}`,{url:t,error:e})}}},3530:(e,t,s)=>{function r(e){return(t,s)=>{t[s]=e}}s.d(t,{s:()=>r})},35197:(e,t,s)=>{s.d(t,{c:()=>o,o:()=>l,t:()=>n}),s(48578);const r={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:26784e5,years:31536e6,decades:31536e7,centuries:31536e8},i={milliseconds:{getter:"getMilliseconds",setter:"setMilliseconds",multiplier:1},seconds:{getter:"getSeconds",setter:"setSeconds",multiplier:1},minutes:{getter:"getMinutes",setter:"setMinutes",multiplier:1},hours:{getter:"getHours",setter:"setHours",multiplier:1},days:{getter:"getDate",setter:"setDate",multiplier:1},weeks:{getter:"getDate",setter:"setDate",multiplier:7},months:{getter:"getMonth",setter:"setMonth",multiplier:1},years:{getter:"getFullYear",setter:"setFullYear",multiplier:1},decades:{getter:"getFullYear",setter:"setFullYear",multiplier:10},centuries:{getter:"getFullYear",setter:"setFullYear",multiplier:100}};function l(e,t,s){const r=new Date(e.getTime());if(t&&s){const e=i[s],{getter:l,setter:n,multiplier:o}=e;if("months"===s){const e=function(e,t){const s=new Date(e,t+1,1);return s.setDate(0),s.getDate()}(r.getFullYear(),r.getMonth()+t);r.getDate()>e&&r.setDate(e)}r[n](r[l]()+t*o)}return r}function n(e,t){switch(t){case"milliseconds":return new Date(e.getTime());case"seconds":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds());case"minutes":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes());case"hours":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours());case"days":return new Date(e.getFullYear(),e.getMonth(),e.getDate());case"weeks":return new Date(e.getFullYear(),e.getMonth(),e.getDate()-e.getDay());case"months":return new Date(e.getFullYear(),e.getMonth(),1);case"years":return new Date(e.getFullYear(),0,1);case"decades":return new Date(e.getFullYear()-e.getFullYear()%10,0,1);case"centuries":return new Date(e.getFullYear()-e.getFullYear()%100,0,1);default:return new Date}}function o(e,t,s){return 0===e?0:e*r[t]/r[s]}},15324:(e,t,s)=>{s.d(t,{Z:()=>R});var r,i,l,n=s(29768),o=s(91055),a=s(75067),h=s(76506),u=s(71252),c=s(6906),p=s(91306),d=s(6540),f=s(34250),m=s(3530),g=s(17533),v=s(89914);s(21972),s(60474),s(66396),s(86656),s(48578),s(92143),s(31450),s(71552),s(40642),s(19657),s(50406),s(60991),(l=r||(r={}))[l.ADD=1]="ADD",l[l.REMOVE=2]="REMOVE",l[l.MOVE=4]="MOVE";const _=new o.O(class{constructor(){this.target=null,this.cancellable=!1,this.defaultPrevented=!1,this.item=void 0,this.type=void 0}preventDefault(){this.cancellable&&(this.defaultPrevented=!0)}reset(e){this.defaultPrevented=!1,this.item=e}},void 0,(e=>{e.item=null,e.target=null,e.defaultPrevented=!1,e.cancellable=!1})),y=()=>{};function b(e){return e?e instanceof x?e.toArray():e.length?Array.prototype.slice.apply(e):[]:[]}function w(e){if(e&&e.length)return e[0]}function C(e,t,s,r){const i=Math.min(e.length-s,t.length-r);let l=0;for(;l<i&&e[s+l]===t[r+l];)l++;return l}function E(e,t,s,r){t&&t.forEach(((t,i,l)=>{e.push(t),E(e,s.call(r,t,i,l),s,r)}))}const T=new Set,D=new Set,I=new Set,M=new Map;let O=0,x=i=class extends a.Z.EventedAccessor{static isCollection(e){return null!=e&&e instanceof i}constructor(e){super(e),this._chgListeners=[],this._notifications=null,this._timer=null,this._observable=new v.S,this.length=0,this._items=[],Object.defineProperty(this,"uid",{value:O++})}normalizeCtorArgs(e){return e?Array.isArray(e)||e instanceof i?{items:e}:e:{}}destroy(){this._removeAllRaw()}*[Symbol.iterator](){yield*this.items}get items(){return(0,d.t)(this._observable),this._items}set items(e){this._emitBeforeChanges(r.ADD)||(this._splice(0,this.length,b(e)),this._emitAfterChanges(r.ADD))}hasEventListener(e){return"change"===e?this._chgListeners.length>0:this._emitter.hasEventListener(e)}on(e,t){if("change"===e){const e=this._chgListeners,s={removed:!1,callback:t};return e.push(s),this._notifications&&this._notifications.push({listeners:e.slice(),items:this._items.slice(),changes:[]}),{remove(){this.remove=y,s.removed=!0,e.splice(e.indexOf(s),1)}}}return this._emitter.on(e,t)}once(e,t){const s=this.on(e,t);return{remove(){s.remove()}}}add(e,t){if((0,d.t)(this._observable),this._emitBeforeChanges(r.ADD))return this;const s=this.getNextIndex(t??null);return this._splice(s,0,[e]),this._emitAfterChanges(r.ADD),this}addMany(e,t=this._items.length){if((0,d.t)(this._observable),!e||!e.length)return this;if(this._emitBeforeChanges(r.ADD))return this;const s=this.getNextIndex(t);return this._splice(s,0,b(e)),this._emitAfterChanges(r.ADD),this}at(e){if((0,d.t)(this._observable),(e=Math.trunc(e)||0)<0&&(e+=this.length),!(e<0||e>=this.length))return this._items[e]}removeAll(){if((0,d.t)(this._observable),!this.length||this._emitBeforeChanges(r.REMOVE))return[];const e=this._removeAllRaw();return this._emitAfterChanges(r.REMOVE),e}_removeAllRaw(){return 0===this.length?[]:this._splice(0,this.length)||[]}clone(){return(0,d.t)(this._observable),this._createNewInstance({items:this._items.map(h.d9)})}concat(...e){(0,d.t)(this._observable);const t=e.map(b);return this._createNewInstance({items:this._items.concat(...t)})}drain(e,t){if((0,d.t)(this._observable),!this.length||this._emitBeforeChanges(r.REMOVE))return;const s=(0,u.b)(this._splice(0,this.length)),i=s.length;for(let r=0;r<i;r++)e.call(t,s[r],r,s);this._emitAfterChanges(r.REMOVE)}every(e,t){return(0,d.t)(this._observable),this._items.every(e,t)}filter(e,t){let s;return(0,d.t)(this._observable),s=2===arguments.length?this._items.filter(e,t):this._items.filter(e),this._createNewInstance({items:s})}find(e,t){return(0,d.t)(this._observable),this._items.find(e,t)}findIndex(e,t){return(0,d.t)(this._observable),this._items.findIndex(e,t)}flatten(e,t){(0,d.t)(this._observable);const s=[];return E(s,this,e,t),new i(s)}forEach(e,t){return(0,d.t)(this._observable),this._items.forEach(e,t)}getItemAt(e){return(0,d.t)(this._observable),this._items[e]}getNextIndex(e){(0,d.t)(this._observable);const t=this.length;return(e=e??t)<0?e=0:e>t&&(e=t),e}includes(e,t=0){return(0,d.t)(this._observable),this._items.includes(e,t)}indexOf(e,t=0){return(0,d.t)(this._observable),this._items.indexOf(e,t)}join(e=","){return(0,d.t)(this._observable),this._items.join(e)}lastIndexOf(e,t=this.length-1){return(0,d.t)(this._observable),this._items.lastIndexOf(e,t)}map(e,t){(0,d.t)(this._observable);const s=this._items.map(e,t);return new i({items:s})}reorder(e,t=this.length-1){(0,d.t)(this._observable);const s=this.indexOf(e);if(-1!==s){if(t<0?t=0:t>=this.length&&(t=this.length-1),s!==t){if(this._emitBeforeChanges(r.MOVE))return e;this._splice(s,1),this._splice(t,0,[e]),this._emitAfterChanges(r.MOVE)}return e}}pop(){if((0,d.t)(this._observable),!this.length||this._emitBeforeChanges(r.REMOVE))return;const e=w(this._splice(this.length-1,1));return this._emitAfterChanges(r.REMOVE),e}push(...e){return(0,d.t)(this._observable),this._emitBeforeChanges(r.ADD)||(this._splice(this.length,0,e),this._emitAfterChanges(r.ADD)),this.length}reduce(e,t){(0,d.t)(this._observable);const s=this._items;return 2===arguments.length?s.reduce(e,t):s.reduce(e)}reduceRight(e,t){(0,d.t)(this._observable);const s=this._items;return 2===arguments.length?s.reduceRight(e,t):s.reduceRight(e)}remove(e){return(0,d.t)(this._observable),this.removeAt(this.indexOf(e))}removeAt(e){if((0,d.t)(this._observable),e<0||e>=this.length||this._emitBeforeChanges(r.REMOVE))return;const t=w(this._splice(e,1));return this._emitAfterChanges(r.REMOVE),t}removeMany(e){if((0,d.t)(this._observable),!e||!e.length||this._emitBeforeChanges(r.REMOVE))return[];const t=e instanceof i?e.toArray():e,s=this._items,l=[],n=t.length;for(let e=0;e<n;e++){const r=t[e],i=s.indexOf(r);if(i>-1){const r=1+C(t,s,e+1,i+1),n=this._splice(i,r);n&&n.length>0&&l.push.apply(l,n),e+=r-1}}return this._emitAfterChanges(r.REMOVE),l}reverse(){if((0,d.t)(this._observable),this._emitBeforeChanges(r.MOVE))return this;const e=this._splice(0,this.length);return e&&(e.reverse(),this._splice(0,0,e)),this._emitAfterChanges(r.MOVE),this}shift(){if((0,d.t)(this._observable),!this.length||this._emitBeforeChanges(r.REMOVE))return;const e=w(this._splice(0,1));return this._emitAfterChanges(r.REMOVE),e}slice(e=0,t=this.length){return(0,d.t)(this._observable),this._createNewInstance({items:this._items.slice(e,t)})}some(e,t){return(0,d.t)(this._observable),this._items.some(e,t)}sort(e){if((0,d.t)(this._observable),!this.length||this._emitBeforeChanges(r.MOVE))return this;const t=(0,u.b)(this._splice(0,this.length));return arguments.length?t.sort(e):t.sort(),this._splice(0,0,t),this._emitAfterChanges(r.MOVE),this}splice(e,t,...s){(0,d.t)(this._observable);const i=(t?r.REMOVE:0)|(s.length?r.ADD:0);if(this._emitBeforeChanges(i))return[];const l=this._splice(e,t,s)||[];return this._emitAfterChanges(i),l}toArray(){return(0,d.t)(this._observable),this._items.slice()}toJSON(){return(0,d.t)(this._observable),this.toArray()}toLocaleString(){return(0,d.t)(this._observable),this._items.toLocaleString()}toString(){return(0,d.t)(this._observable),this._items.toString()}unshift(...e){return(0,d.t)(this._observable),!e.length||this._emitBeforeChanges(r.ADD)||(this._splice(0,0,e),this._emitAfterChanges(r.ADD)),this.length}_createNewInstance(e){return new this.constructor(e)}_splice(e,t,s){const r=this._items,i=this.itemType;let l,n;if(!this._notifications&&this.hasEventListener("change")&&(this._notifications=[{listeners:this._chgListeners.slice(),items:this._items.slice(),changes:[]}],this._timer&&this._timer.remove(),this._timer=(0,c.Os)((()=>this._dispatchChange()))),t){if(n=r.splice(e,t),this.hasEventListener("before-remove")){const t=_.acquire();t.target=this,t.cancellable=!0;for(let s=0,i=n.length;s<i;s++)l=n[s],t.reset(l),this.emit("before-remove",t),t.defaultPrevented&&(n.splice(s,1),r.splice(e,0,l),e+=1,s-=1,i-=1);_.release(t)}if(this.length=this._items.length,this.hasEventListener("after-remove")){const e=_.acquire();e.target=this,e.cancellable=!1;const t=n.length;for(let s=0;s<t;s++)e.reset(n[s]),this.emit("after-remove",e);_.release(e)}}if(s&&s.length){if(i){const e=[];for(const t of s){const s=i.ensureType(t);null==s&&null!=t||e.push(s)}s=e}const t=this.hasEventListener("before-add"),l=this.hasEventListener("after-add"),n=e===this.length;if(t||l){const i=_.acquire();i.target=this,i.cancellable=!0;const o=_.acquire();o.target=this,o.cancellable=!1;for(const a of s)t?(i.reset(a),this.emit("before-add",i),i.defaultPrevented||(n?r.push(a):r.splice(e++,0,a),this._set("length",r.length),l&&(o.reset(a),this.emit("after-add",o)))):(n?r.push(a):r.splice(e++,0,a),this._set("length",r.length),o.reset(a),this.emit("after-add",o));_.release(o),_.release(i)}else{if(n)for(const e of s)r.push(e);else r.splice(e,0,...s);this._set("length",r.length)}}return(s&&s.length||n&&n.length)&&this._notifyChangeEvent(s,n),n}_emitBeforeChanges(e){let t=!1;if(this.hasEventListener("before-changes")){const s=_.acquire();s.target=this,s.cancellable=!0,s.type=e,this.emit("before-changes",s),t=s.defaultPrevented,_.release(s)}return t}_emitAfterChanges(e){if(this.hasEventListener("after-changes")){const t=_.acquire();t.target=this,t.cancellable=!1,t.type=e,this.emit("after-changes",t),_.release(t)}this._observable.notify()}_notifyChangeEvent(e,t){this.hasEventListener("change")&&this._notifications&&this._notifications[this._notifications.length-1].changes.push({added:e,removed:t})}_dispatchChange(){if(this._timer&&(this._timer.remove(),this._timer=null),!this._notifications)return;const e=this._notifications;this._notifications=null;for(const t of e){const e=t.changes;T.clear(),D.clear(),I.clear();for(const{added:t,removed:s}of e){if(t)if(0===I.size&&0===D.size)for(const e of t)T.add(e);else for(const e of t)D.has(e)?(I.add(e),D.delete(e)):I.has(e)||T.add(e);if(s)if(0===I.size&&0===T.size)for(const e of s)D.add(e);else for(const e of s)T.has(e)?T.delete(e):(I.delete(e),D.add(e))}const s=o.A.acquire();T.forEach((e=>{s.push(e)}));const r=o.A.acquire();D.forEach((e=>{r.push(e)}));const i=this._items,l=t.items,n=o.A.acquire();if(I.forEach((e=>{l.indexOf(e)!==i.indexOf(e)&&n.push(e)})),t.listeners&&(s.length||r.length||n.length)){const e={target:this,added:s,removed:r,moved:n},i=t.listeners.length;for(let s=0;s<i;s++){const r=t.listeners[s];r.removed||r.callback.call(this,e)}}o.A.release(s),o.A.release(r),o.A.release(n)}T.clear(),D.clear(),I.clear()}};x.ofType=e=>{if(!e)return i;if(M.has(e))return M.get(e);let t=null;if("function"==typeof e)t=e.prototype.declaredClass;else if(e.base)t=e.base.prototype.declaredClass;else for(const s in e.typeMap){const r=e.typeMap[s].prototype.declaredClass;t?t+=` | ${r}`:t=r}let s=class extends i{};return(0,n._)([(0,m.s)({Type:e,ensureType:"function"==typeof e?(0,p.e)(e):(0,p.a)(e)})],s.prototype,"itemType",void 0),s=(0,n._)([(0,g.j)(`esri.core.Collection<${t}>`)],s),M.set(e,s),s},(0,n._)([(0,f.Cb)()],x.prototype,"length",void 0),(0,n._)([(0,f.Cb)()],x.prototype,"items",null),x=i=(0,n._)([(0,g.j)("esri.core.Collection")],x);const R=x},3799:(e,t,s)=>{s.r(t),s.d(t,{W:()=>O,a:()=>Z,default:()=>A});var r,i=s(29768),l=(s(74569),s(82058)),n=s(60991),o=s(54179),a=s(40642),h=s(32101),u=s(34250),c=(s(91306),s(48578),s(97714)),p=s(17533),d=s(2906),f=s(41617),m=s(80462),g=s(89440),v=s(39241),_=s(68219),y=s(6416),b=s(32966),w=s(92817),C=s(43352),E=s(12047),T=s(76506),D=s(21801),I=s(60947),M=s(91597);s(73796),s(21972),s(60474),s(66396),s(86656),s(92143),s(31450),s(71552),s(91055),s(6540),s(19657),s(6906),s(50406),s(53785),s(57251),s(89623),s(84069),s(35132),s(86787),s(44567),s(98380),s(92482),s(82426),s(72836),s(29794),s(7200),s(92896),s(22781),s(32422),s(88762),s(75067),s(3296),s(81184),s(33101),s(92200),s(65949),s(54174),s(22465),s(65775),s(5777),s(43022),s(93314),s(35197),s(38742),s(1557),s(47842),s(14249),s(60217),s(17298),s(85557),s(34394),s(41864),s(51899),s(49900),s(3482),s(67477),s(78533),s(74653),s(91091),s(58943),s(56420),s(73173),s(74742),s(28239),s(60111),s(1623),s(89914),s(12381),s(92624),s(92847),s(15324);let O=r=class extends E.wq{constructor(e){super(e)}clone(){return new r({customLayerParameters:(0,T.d9)(this.customLayerParameters),customParameters:(0,T.d9)(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};var x;(0,i._)([(0,u.Cb)({json:{type:Object,write:!0}})],O.prototype,"customLayerParameters",void 0),(0,i._)([(0,u.Cb)({json:{type:Object,write:!0}})],O.prototype,"customParameters",void 0),(0,i._)([(0,u.Cb)({type:String,json:{write:!0}})],O.prototype,"layerIdentifier",void 0),(0,i._)([(0,u.Cb)({type:String,json:{write:!0}})],O.prototype,"tileMatrixSet",void 0),(0,i._)([(0,u.Cb)({type:String,json:{write:!0}})],O.prototype,"url",void 0),O=r=(0,i._)([(0,p.j)("esri.layer.support.WMTSLayerInfo")],O);let R=x=class extends((0,m.h)((0,_.Q)((0,y.M)((0,g.O)((0,v.I)((0,o.M)(f.Z))))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new D.Z(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,I.Z.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=I.Z.WebMercator,this.subDomains=null,this.tileInfo=new C.Z({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new M.Z({x:-20037508.342787,y:20037508.342787,spatialReference:I.Z.WebMercator}),spatialReference:I.Z.WebMercator,lods:[new w.Z({level:0,scale:591657527.591555,resolution:156543.033928}),new w.Z({level:1,scale:295828763.795777,resolution:78271.5169639999}),new w.Z({level:2,scale:147914381.897889,resolution:39135.7584820001}),new w.Z({level:3,scale:73957190.948944,resolution:19567.8792409999}),new w.Z({level:4,scale:36978595.474472,resolution:9783.93962049996}),new w.Z({level:5,scale:18489297.737236,resolution:4891.96981024998}),new w.Z({level:6,scale:9244648.868618,resolution:2445.98490512499}),new w.Z({level:7,scale:4622324.434309,resolution:1222.99245256249}),new w.Z({level:8,scale:2311162.217155,resolution:611.49622628138}),new w.Z({level:9,scale:1155581.108577,resolution:305.748113140558}),new w.Z({level:10,scale:577790.554289,resolution:152.874056570411}),new w.Z({level:11,scale:288895.277144,resolution:76.4370282850732}),new w.Z({level:12,scale:144447.638572,resolution:38.2185141425366}),new w.Z({level:13,scale:72223.819286,resolution:19.1092570712683}),new w.Z({level:14,scale:36111.909643,resolution:9.55462853563415}),new w.Z({level:15,scale:18055.954822,resolution:4.77731426794937}),new w.Z({level:16,scale:9027.977411,resolution:2.38865713397468}),new w.Z({level:17,scale:4513.988705,resolution:1.19432856685505}),new w.Z({level:18,scale:2256.994353,resolution:.597164283559817}),new w.Z({level:19,scale:1128.497176,resolution:.298582141647617}),new w.Z({level:20,scale:564.248588,resolution:.14929107082380833}),new w.Z({level:21,scale:282.124294,resolution:.07464553541190416}),new w.Z({level:22,scale:141.062147,resolution:.03732276770595208}),new w.Z({level:23,scale:70.5310735,resolution:.01866138385297604})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return"string"==typeof e?{urlTemplate:e,...t}:e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const t=new h.R9(this.urlTemplate);!(this.subDomains&&this.subDomains.length>0)&&t.authority?.includes("{subDomain}")&&(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new n.Z("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${e}`)}));return this.addResolvingPromise(t),Promise.resolve(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&I.Z.fromJSON(t.fullExtent.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:s}=this,r=new h.R9(t),i=r.scheme?r.scheme+"://":"//",l=i+r.authority+"/",n=r.authority;if(n?.includes("{subDomain}")){if(s&&s.length>0&&n.split(".").length>1)for(const t of s)e.push(i+n.replace(/\{subDomain\}/gi,t)+"/")}else e.push(l);return e.map((e=>("/"!==e.charAt(e.length-1)&&(e+="/"),e)))}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new h.R9(e),s=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(s.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){e&&(0,h.oC)(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=(0,h.Fv)(e)),t.templateUrl=e}fetchTile(e,t,s,r={}){const{signal:i}=r,n=this.getTileUrl(e,t,s),o={responseType:"image",signal:i,query:{...this.refreshParameters}};return(0,l.default)(n,o).then((e=>e.data))}async fetchImageBitmapTile(e,t,s,r={}){const{signal:i}=r;if(this.fetchTile!==x.prototype.fetchTile){const i=await this.fetchTile(e,t,s,r);try{return createImageBitmap(i)}catch(r){throw new n.Z("request:server",`Unable to load tile ${e}/${t}/${s}`,{error:r,level:e,row:t,col:s})}}const o=this.getTileUrl(e,t,s),a={responseType:"blob",signal:i,query:{...this.refreshParameters}},{data:h}=await(0,l.default)(o,a);return(0,b.c)(h,o)}getTileUrl(e,t,s){const{levelValues:r,tileServers:i,urlPath:l}=this;if(!r||!i||!l)return"";const n=r[e];return i[t%i.length]+(0,a.r)(l,{level:n,z:n,col:s,x:s,row:t,y:t})}};(0,i._)([(0,u.Cb)({type:String,value:"",json:{write:!0}})],R.prototype,"copyright",void 0),(0,i._)([(0,u.Cb)({type:D.Z,json:{write:!0},nonNullable:!0})],R.prototype,"fullExtent",void 0),(0,i._)([(0,u.Cb)({readOnly:!0,json:{read:!1,write:!1}})],R.prototype,"legendEnabled",void 0),(0,i._)([(0,u.Cb)({type:["show","hide"]})],R.prototype,"listMode",void 0),(0,i._)([(0,u.Cb)({json:{read:!0,write:!0}})],R.prototype,"blendMode",void 0),(0,i._)([(0,u.Cb)()],R.prototype,"levelValues",null),(0,i._)([(0,u.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],R.prototype,"isReference",void 0),(0,i._)([(0,u.Cb)({type:["WebTiledLayer"],value:"WebTiledLayer"})],R.prototype,"operationalLayerType",void 0),(0,i._)([(0,u.Cb)({readOnly:!0,json:{read:!1,write:!1}})],R.prototype,"popupEnabled",void 0),(0,i._)([(0,u.Cb)({type:I.Z})],R.prototype,"spatialReference",void 0),(0,i._)([(0,c.r)("spatialReference",["spatialReference","fullExtent.spatialReference"])],R.prototype,"readSpatialReference",null),(0,i._)([(0,u.Cb)({type:[String],json:{write:!0}})],R.prototype,"subDomains",void 0),(0,i._)([(0,u.Cb)({type:C.Z,json:{write:!0}})],R.prototype,"tileInfo",void 0),(0,i._)([(0,u.Cb)({readOnly:!0})],R.prototype,"tileServers",null),(0,i._)([(0,u.Cb)({json:{read:!1}})],R.prototype,"type",void 0),(0,i._)([(0,u.Cb)()],R.prototype,"urlPath",null),(0,i._)([(0,u.Cb)({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],R.prototype,"urlTemplate",void 0),(0,i._)([(0,c.r)("urlTemplate",["urlTemplate","templateUrl"])],R.prototype,"readUrlTemplate",null),(0,i._)([(0,d.w)("urlTemplate",{templateUrl:{type:String}})],R.prototype,"writeUrlTemplate",null),(0,i._)([(0,u.Cb)({type:O,json:{write:!0}})],R.prototype,"wmtsInfo",void 0),R=x=(0,i._)([(0,p.j)("esri.layers.WebTileLayer")],R);const A=R,Z=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}))},39241:(e,t,s)=>{s.d(t,{I:()=>C});var r=s(29768),i=s(31450),l=s(88762),n=s(82058),o=s(41864),a=s(60991),h=s(92143),u=s(71252),c=s(50406),p=s(32101),d=s(34250),f=(s(91306),s(48578),s(97714)),m=s(17533),g=s(2906),v=s(51899),_=s(49900),y=s(56420),b=s(74653),w=s(60111);s(71552),s(76506),s(40642),s(21972),s(60474),s(66396),s(86656),s(91055),s(6540),s(19657),s(6906),s(12047),s(81184),s(33101),s(21801),s(73796),s(60947),s(53785),s(57251),s(89623),s(91597),s(86787),s(35132),s(3482),s(67477),s(78533),s(91091),s(58943),s(73173),s(74742),s(28239),s(1623),s(82426),s(72836),s(29794),s(7200),s(89914),s(65775),s(84069),s(12381),s(44567),s(98380),s(92482),s(92896),s(92624),s(92847);const C=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=(0,u.d)(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,s){if(t.itemId)return new y.default({id:t.itemId,portal:s&&s.portal})}writePortalItem(e,t){e&&e.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem&&this.portalItem.id)try{const r=await s.e(8642).then(s.bind(s,8642));return(0,c.k_)(t),await r.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData,layerModuleTypeMap:e.layerModuleTypeMap},t)}catch(e){throw(0,c.D_)(e)||h.L.getLogger(this.declaredClass).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,c.r9)(e),!0))))}async _setUserPrivileges(e,t){if(!i.Z.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(t);if(this.url)try{const{features:{edit:s,fullEdit:r},content:{updateItem:i}}=await this._fetchUserPrivileges(e,t);this._set("userHasEditingPrivileges",s),this._set("userHasFullEditingPrivileges",r),this._set("userHasUpdateItemPrivileges",i)}catch(e){(0,c.r9)(e)}}async _fetchUserPrivileges(e,t){let s=this.portalItem;if(!e||!s||!s.loaded||s.sourceUrl)return this._fetchFallbackUserPrivileges(t);const r=e===s.id;if(r&&s.portal.user)return(0,w.g)(s);let i,n;if(r)i=s.portal.url;else try{i=await(0,v.g)(this.url,t)}catch(e){(0,c.r9)(e)}if(!i||!(0,p.Zo)(i,s.portal.url))return this._fetchFallbackUserPrivileges(t);try{const e=(0,u.i)(t)?t.signal:null;n=await(l.id?.getCredential(`${i}/sharing`,{prompt:!1,signal:e}))}catch(e){(0,c.r9)(e)}if(!n)return{features:{edit:!0,fullEdit:!1},content:{updateItem:!1}};try{if(r?await s.reload():(s=new y.default({id:e,portal:{url:i}}),await s.load(t)),s.portal.user)return(0,w.g)(s)}catch(e){(0,c.r9)(e)}return{features:{edit:!0,fullEdit:!1},content:{updateItem:!1}}}async _fetchFallbackUserPrivileges(e){let t=!0;try{t=await this._fetchUserHasEditingPrivileges(e)}catch(e){(0,c.r9)(e)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(e){const t=this.url?l.id?.findCredential(this.url):null;if(!t)return!0;const s=E.credential===t?E.user:await this._fetchEditingUser(e);return E.credential=t,E.user=s,(0,u.a)(s)||null==s.privileges||s.privileges.includes("features:user:edit")}async _fetchEditingUser(e){const t=this.portalItem?.portal?.user;if(t)return t;const s=l.id.findServerInfo(this.url??"");if(!s?.owningSystemUrl)return null;const r=`${s.owningSystemUrl}/sharing/rest`,i=_.Z.getDefault();if(i&&i.loaded&&(0,p.Fv)(i.restUrl)===(0,p.Fv)(r))return i.user;const a=`${r}/community/self`,h=(0,u.i)(e)?e.signal:null,c=await(0,o.r)((0,n.default)(a,{authMode:"no-prompt",query:{f:"json"},signal:h}));return c.ok?b.default.fromJSON(c.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const s=t&&t.portal,r=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||_.Z.getDefault());return s&&r&&!(0,p.tm)(r.restUrl,s.restUrl)?(t.messages&&t.messages.push(new a.Z("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,r._)([(0,d.Cb)({type:y.default})],t.prototype,"portalItem",null),(0,r._)([(0,f.r)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,r._)([(0,g.w)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,r._)([(0,d.Cb)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,r._)([(0,d.Cb)({type:Boolean,readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),(0,r._)([(0,d.Cb)({type:Boolean,readOnly:!0})],t.prototype,"userHasFullEditingPrivileges",void 0),(0,r._)([(0,d.Cb)({type:Boolean,readOnly:!0})],t.prototype,"userHasUpdateItemPrivileges",void 0),t=(0,r._)([(0,m.j)("esri.layers.mixins.PortalLayer")],t),t},E={credential:null,user:null}},68219:(e,t,s)=>{s.d(t,{Q:()=>v});var r=s(29768),i=s(92143),l=s(50406),n=s(34250),o=(s(91306),s(48578),s(17533)),a=s(15324),h=(s(60991),s(19657));s(31450),s(71552),s(76506),s(40642),s(60474),s(66396),s(86656),s(6540),s(91055),s(75067),s(21972),s(6906),s(89914);const u=new a.Z,c=new WeakMap;function p(e){return null!=e&&"object"==typeof e&&"refreshInterval"in e&&"refresh"in e}function d(e,t){return Number.isFinite(e)&&Number.isFinite(t)?t<=0?e:d(t,e%t):0}let f=0,m=0;function g(){const e=Date.now();for(const t of u)t.refreshInterval&&e-(c.get(t)??0)+5>=6e4*t.refreshInterval&&(c.set(t,e),t.refresh(e))}(0,h.a)((()=>{const e=Date.now();let t=0;for(const s of u)t=d(Math.round(6e4*s.refreshInterval),t),s.refreshInterval?c.get(s)||c.set(s,e):c.delete(s);if(t!==m){if(m=t,clearInterval(f),0===m)return void(f=0);f=setInterval(g,m)}}));const v=e=>{let t=class extends e{constructor(...e){super(...e),this.refreshInterval=0,this.refreshTimestamp=0,this._debounceHasDataChanged=(0,l.Ds)((()=>this.hasDataChanged())),this.when().then((()=>{p(this)&&u.push(this)}),(()=>{}))}destroy(){p(this)&&u.includes(this)&&u.remove(this)}get refreshParameters(){return{_ts:this.refreshTimestamp||null}}refresh(e=Date.now()){(0,l.R8)(this._debounceHasDataChanged()).then((t=>{t&&this._set("refreshTimestamp",e),this.emit("refresh",{dataChanged:t})}),(e=>{i.L.getLogger(this.declaredClass).error(e),this.emit("refresh",{dataChanged:!1,error:e})}))}async hasDataChanged(){return!0}};return(0,r._)([(0,n.Cb)({type:Number,cast:e=>e>=.1?e:e<=0?0:.1,json:{write:!0}})],t.prototype,"refreshInterval",void 0),(0,r._)([(0,n.Cb)({readOnly:!0})],t.prototype,"refreshTimestamp",void 0),(0,r._)([(0,n.Cb)()],t.prototype,"refreshParameters",null),t=(0,r._)([(0,o.j)("esri.layers.mixins.RefreshableLayer")],t),t}},92817:(e,t,s)=>{s.d(t,{Z:()=>u});var r,i=s(29768),l=s(12047),n=s(34250),o=s(91306),a=(s(48578),s(17533));s(21972),s(60474),s(66396),s(76506),s(86656),s(92143),s(31450),s(71552),s(40642),s(91055),s(6540),s(19657),s(6906),s(50406),s(60991);let h=r=class extends l.wq{constructor(e){super(e),this.cols=null,this.level=0,this.levelValue=null,this.origin=null,this.resolution=0,this.rows=null,this.scale=0}clone(){return new r({cols:this.cols,level:this.level,levelValue:this.levelValue,resolution:this.resolution,rows:this.rows,scale:this.scale})}};(0,i._)([(0,n.Cb)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],h.prototype,"cols",void 0),(0,i._)([(0,n.Cb)({type:o.I,json:{write:!0}})],h.prototype,"level",void 0),(0,i._)([(0,n.Cb)({type:String,json:{write:!0}})],h.prototype,"levelValue",void 0),(0,i._)([(0,n.Cb)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],h.prototype,"origin",void 0),(0,i._)([(0,n.Cb)({type:Number,json:{write:!0}})],h.prototype,"resolution",void 0),(0,i._)([(0,n.Cb)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],h.prototype,"rows",void 0),(0,i._)([(0,n.Cb)({type:Number,json:{write:!0}})],h.prototype,"scale",void 0),h=r=(0,i._)([(0,a.j)("esri.layers.support.LOD")],h);const u=h},43352:(e,t,s)=>{s.d(t,{Z:()=>T});var r,i=s(29768),l=s(57251),n=s(12047),o=s(71252),a=s(53785),h=s(34250),u=s(91306),c=(s(48578),s(97714)),p=s(17533),d=s(2906),f=s(91597),m=s(60947),g=s(92482),v=s(35132),_=s(92817),y=s(6687);s(71552),s(76506),s(21972),s(60474),s(66396),s(86656),s(92143),s(31450),s(40642),s(91055),s(6540),s(19657),s(6906),s(50406),s(60991),s(89623),s(86787),s(73796),s(82426),s(72836),s(29794),s(7200),s(21801);const b=new l.J({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"});let w=r=class extends n.wq{static create(e={}){const{resolutionFactor:t=1,scales:s,size:i=256,spatialReference:l=m.Z.WebMercator,numLODs:n=24}=e;if(!(0,a.n)(l)){const e=[];if(s)for(let t=0;t<s.length;t++){const r=s[t];e.push(new _.Z({level:t,scale:r,resolution:r}))}else{let t=5e-4;for(let s=n-1;s>=0;s--)e.unshift(new _.Z({level:s,scale:t,resolution:t})),t*=2}return new r({dpi:96,lods:e,origin:new f.Z(0,0,l),size:[i,i],spatialReference:l})}const o=(0,a.h)(l),h=e.origin?new f.Z({x:e.origin.x,y:e.origin.y,spatialReference:l}):new f.Z(o?{x:o.origin[0],y:o.origin[1],spatialReference:l}:{x:0,y:0,spatialReference:l}),u=1/(39.37*(0,a.g)(l)*96),c=[];if(s)for(let e=0;e<s.length;e++){const t=s[e],r=t*u;c.push(new _.Z({level:e,scale:t,resolution:r}))}else{let e=(0,a.c)(l)?512/i*591657527.5917094:256/i*591657527.591555;const s=Math.ceil(n/t);c.push(new _.Z({level:0,scale:e,resolution:e*u}));for(let r=1;r<s;r++){const s=e/2**t,i=s*u;c.push(new _.Z({level:r,scale:s,resolution:i})),e=s}}return new r({dpi:96,lods:c,origin:h,size:[i,i],spatialReference:l})}constructor(e){super(e),this.dpi=96,this.format=null,this.origin=null,this.minScale=0,this.maxScale=0,this.size=null,this.spatialReference=null}get isWrappable(){const{spatialReference:e,origin:t}=this;if(e&&t){const s=(0,a.h)(e);return e.isWrappable&&!!s&&Math.abs(s.origin[0]-t.x)<=s.dx}return!1}readOrigin(e,t){return f.Z.fromJSON({spatialReference:t.spatialReference,...e})}set lods(e){let t=0,s=0;const r=[],i=this._levelToLOD={};e&&(t=-1/0,s=1/0,e.forEach((e=>{r.push(e.scale),t=e.scale>t?e.scale:t,s=e.scale<s?e.scale:s,i[e.level]=e}))),this._set("scales",r),this._set("minScale",t),this._set("maxScale",s),this._set("lods",e),this._initializeUpsampleLevels()}readSize(e,t){return[t.cols,t.rows]}writeSize(e,t){t.cols=e[0],t.rows=e[1]}zoomToScale(e){const t=this.scales;if(e<=0)return t[0];if(e>=t.length-1)return t[t.length-1];const s=Math.floor(e),r=s+1;return t[s]/(t[s]/t[r])**(e-s)}scaleToZoom(e){const t=this.scales,s=t.length-1;let r=0;for(;r<s;r++){const s=t[r],i=t[r+1];if(s<=e)return r;if(i===e)return r+1;if(s>e&&i<e)return r+Math.log(s/e)/Math.log(s/i)}return r}snapScale(e,t=.95){const s=this.scaleToZoom(e);return s%Math.floor(s)>=t?this.zoomToScale(Math.ceil(s)):this.zoomToScale(Math.floor(s))}tileAt(e,t,s,r){const i=this.lodAt(e);if(!i)return null;let l,n;if("number"==typeof t)l=t,n=s;else if((0,a.f)(t.spatialReference,this.spatialReference))l=t.x,n=t.y,r=s;else{const e=(0,v.iV)(t,this.spatialReference);if((0,o.a)(e))return null;l=e.x,n=e.y,r=s}const h=i.resolution*this.size[0],u=i.resolution*this.size[1];return r||(r=new y.T(null,0,0,0,(0,g.c)())),r.level=e,r.row=Math.floor((this.origin.y-n)/u+.001),r.col=Math.floor((l-this.origin.x)/h+.001),this.updateTileInfo(r),r}updateTileInfo(e,t=r.ExtrapolateOptions.NONE){let s=this.lodAt(e.level);if(!s&&t===r.ExtrapolateOptions.POWER_OF_TWO){const t=this.lods[this.lods.length-1];t.level<e.level&&(s=t)}if(!s)return;const i=e.level-s.level,l=s.resolution*this.size[0]/2**i,n=s.resolution*this.size[1]/2**i;e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=(0,g.c)()),e.extent[0]=this.origin.x+e.col*l,e.extent[1]=this.origin.y-(e.row+1)*n,e.extent[2]=e.extent[0]+l,e.extent[3]=e.extent[1]+n}upsampleTile(e){const t=this._upsampleLevels[e.level];return!(!t||-1===t.parentLevel||(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),0))}getTileBounds(e,t){const s=this.lodAt(t.level);if(null==s)return null;const{resolution:r}=s,i=r*this.size[0],l=r*this.size[1];return e[0]=this.origin.x+t.col*i,e[1]=this.origin.y-(t.row+1)*l,e[2]=e[0]+i,e[3]=e[1]+l,e}lodAt(e){return this._levelToLOD?.[e]??null}clone(){return r.fromJSON(this.write({}))}getOrCreateCompatible(e,t){if(256===this.size[0]&&256===this.size[1])return 256===e?this:null;const s=[],i=this.lods.length;for(let e=0;e<i;e++){const r=this.lods[e],i=r.resolution*t;s.push(new _.Z({level:r.level,scale:r.scale,resolution:i}))}return new r({size:[e,e],dpi:this.dpi,format:this.format,compressionQuality:this.compressionQuality,origin:this.origin,spatialReference:this.spatialReference,lods:s})}_initializeUpsampleLevels(){const e=this.lods;this._upsampleLevels=[];let t=null;for(let s=0;s<e.length;s++){const r=e[s];this._upsampleLevels[r.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/r.resolution:0},t=r}}};var C,E;(0,i._)([(0,h.Cb)({type:Number,json:{write:!0}})],w.prototype,"compressionQuality",void 0),(0,i._)([(0,h.Cb)({type:Number,json:{write:!0}})],w.prototype,"dpi",void 0),(0,i._)([(0,h.Cb)({type:String,json:{read:b.read,write:b.write,origins:{"web-scene":{read:!1,write:!1}}}})],w.prototype,"format",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],w.prototype,"isWrappable",null),(0,i._)([(0,h.Cb)({type:f.Z,json:{write:!0}})],w.prototype,"origin",void 0),(0,i._)([(0,c.r)("origin")],w.prototype,"readOrigin",null),(0,i._)([(0,h.Cb)({type:[_.Z],value:null,json:{write:!0}})],w.prototype,"lods",null),(0,i._)([(0,h.Cb)({readOnly:!0})],w.prototype,"minScale",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],w.prototype,"maxScale",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],w.prototype,"scales",void 0),(0,i._)([(0,h.Cb)({cast:e=>Array.isArray(e)?e:"number"==typeof e?[e,e]:[256,256]})],w.prototype,"size",void 0),(0,i._)([(0,c.r)("size",["rows","cols"])],w.prototype,"readSize",null),(0,i._)([(0,d.w)("size",{cols:{type:u.I},rows:{type:u.I}})],w.prototype,"writeSize",null),(0,i._)([(0,h.Cb)({type:m.Z,json:{write:!0}})],w.prototype,"spatialReference",void 0),w=r=(0,i._)([(0,p.j)("esri.layers.support.TileInfo")],w),(E=(C=w||(w={})).ExtrapolateOptions||(C.ExtrapolateOptions={}))[E.NONE=0]="NONE",E[E.POWER_OF_TWO=1]="POWER_OF_TWO";const T=w}}]);