// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ./ArrayPool ./Evented ./lang ./maybe ./ObjectPool ./ObservableChangesType ./scheduling ./accessorSupport/ensureType ./accessorSupport/tracking ./accessorSupport/decorators/property ./accessorSupport/decorators/shared ./accessorSupport/decorators/subclass ./accessorSupport/tracking/SimpleObservable".split(" "),function(w,C,A,M,N,G,O,g,P,H,f,I,Q,J,R){function D(c){return c?c instanceof B?c.toArray():c.length?Array.prototype.slice.apply(c):
[]:[]}function E(c){if(c&&c.length)return c[0]}function K(c,r,m,u){r&&r.forEach((a,b,d)=>{c.push(a);K(c,m.call(u,a,b,d),m,u)})}var v;let S=function(){function c(){this.target=null;this.defaultPrevented=this.cancellable=!1;this.type=this.item=void 0}var r=c.prototype;r.preventDefault=function(){this.cancellable&&(this.defaultPrevented=!0)};r.reset=function(m){this.defaultPrevented=!1;this.item=m};return w._createClass(c)}();const t=new O(S,void 0,c=>{c.item=null;c.target=null;c.defaultPrevented=!1;
c.cancellable=!1}),T=()=>{},x=new Set,y=new Set,z=new Set,F=new Map;let U=0,B=v=function(c,r){function m(a){a=u.call(this,a);a._chgListeners=[];a._notifications=null;a._timer=null;a._observable=new R.SimpleObservable;a.length=0;a._items=[];Object.defineProperty(w._assertThisInitialized(a),"uid",{value:U++});return a}w._inherits(m,c);var u=w._createSuper(m);m.isCollection=function(a){return null!=a&&a instanceof v};c=m.prototype;c.normalizeCtorArgs=function(a){return a?Array.isArray(a)||a instanceof
v?{items:a}:a:{}};c.destroy=function(){this._removeAllRaw()};c[r]=function*(){yield*this.items};c.hasEventListener=function(a){return"change"===a?0<this._chgListeners.length:this._emitter.hasEventListener(a)};c.on=function(a,b){if("change"===a){const d=this._chgListeners,h={removed:!1,callback:b};d.push(h);this._notifications&&this._notifications.push({listeners:d.slice(),items:this._items.slice(),changes:[]});return{remove(){this.remove=T;h.removed=!0;d.splice(d.indexOf(h),1)}}}return this._emitter.on(a,
b)};c.once=function(a,b){const d=this.on(a,b);return{remove(){d.remove()}}};c.add=function(a,b){f.trackAccess(this._observable);if(this._emitBeforeChanges(g.ObservableChangesType.ADD))return this;b=this.getNextIndex(b??null);this._splice(b,0,[a]);this._emitAfterChanges(g.ObservableChangesType.ADD);return this};c.addMany=function(a,b=this._items.length){f.trackAccess(this._observable);if(!a||!a.length||this._emitBeforeChanges(g.ObservableChangesType.ADD))return this;b=this.getNextIndex(b);this._splice(b,
0,D(a));this._emitAfterChanges(g.ObservableChangesType.ADD);return this};c.at=function(a){f.trackAccess(this._observable);a=Math.trunc(a)||0;0>a&&(a+=this.length);if(!(0>a||a>=this.length))return this._items[a]};c.removeAll=function(){f.trackAccess(this._observable);if(!this.length||this._emitBeforeChanges(g.ObservableChangesType.REMOVE))return[];const a=this._removeAllRaw();this._emitAfterChanges(g.ObservableChangesType.REMOVE);return a};c._removeAllRaw=function(){return 0===this.length?[]:this._splice(0,
this.length)||[]};c.clone=function(){f.trackAccess(this._observable);return this._createNewInstance({items:this._items.map(N.clone)})};c.concat=function(...a){f.trackAccess(this._observable);a=a.map(D);return this._createNewInstance({items:this._items.concat(...a)})};c.drain=function(a,b){f.trackAccess(this._observable);if(this.length&&!this._emitBeforeChanges(g.ObservableChangesType.REMOVE)){var d=G.assumeNonNull(this._splice(0,this.length)),h=d.length;for(let n=0;n<h;n++)a.call(b,d[n],n,d);this._emitAfterChanges(g.ObservableChangesType.REMOVE)}};
c.every=function(a,b){f.trackAccess(this._observable);return this._items.every(a,b)};c.filter=function(a,b){f.trackAccess(this._observable);let d;d=2===arguments.length?this._items.filter(a,b):this._items.filter(a);return this._createNewInstance({items:d})};c.find=function(a,b){f.trackAccess(this._observable);return this._items.find(a,b)};c.findIndex=function(a,b){f.trackAccess(this._observable);return this._items.findIndex(a,b)};c.flatten=function(a,b){f.trackAccess(this._observable);const d=[];
K(d,this,a,b);return new v(d)};c.forEach=function(a,b){f.trackAccess(this._observable);return this._items.forEach(a,b)};c.getItemAt=function(a){f.trackAccess(this._observable);return this._items[a]};c.getNextIndex=function(a){f.trackAccess(this._observable);const b=this.length;a=null==a?b:a;0>a?a=0:a>b&&(a=b);return a};c.includes=function(a,b=0){f.trackAccess(this._observable);return this._items.includes(a,b)};c.indexOf=function(a,b=0){f.trackAccess(this._observable);return this._items.indexOf(a,
b)};c.join=function(a=","){f.trackAccess(this._observable);return this._items.join(a)};c.lastIndexOf=function(a,b=this.length-1){f.trackAccess(this._observable);return this._items.lastIndexOf(a,b)};c.map=function(a,b){f.trackAccess(this._observable);a=this._items.map(a,b);return new v({items:a})};c.reorder=function(a,b=this.length-1){f.trackAccess(this._observable);const d=this.indexOf(a);if(-1!==d){0>b?b=0:b>=this.length&&(b=this.length-1);if(d!==b){if(this._emitBeforeChanges(g.ObservableChangesType.MOVE))return a;
this._splice(d,1);this._splice(b,0,[a]);this._emitAfterChanges(g.ObservableChangesType.MOVE)}return a}};c.pop=function(){f.trackAccess(this._observable);if(this.length&&!this._emitBeforeChanges(g.ObservableChangesType.REMOVE)){var a=E(this._splice(this.length-1,1));this._emitAfterChanges(g.ObservableChangesType.REMOVE);return a}};c.push=function(...a){f.trackAccess(this._observable);if(this._emitBeforeChanges(g.ObservableChangesType.ADD))return this.length;this._splice(this.length,0,a);this._emitAfterChanges(g.ObservableChangesType.ADD);
return this.length};c.reduce=function(a,b){f.trackAccess(this._observable);const d=this._items;return 2===arguments.length?d.reduce(a,b):d.reduce(a)};c.reduceRight=function(a,b){f.trackAccess(this._observable);const d=this._items;return 2===arguments.length?d.reduceRight(a,b):d.reduceRight(a)};c.remove=function(a){f.trackAccess(this._observable);return this.removeAt(this.indexOf(a))};c.removeAt=function(a){f.trackAccess(this._observable);if(!(0>a||a>=this.length||this._emitBeforeChanges(g.ObservableChangesType.REMOVE)))return a=
E(this._splice(a,1)),this._emitAfterChanges(g.ObservableChangesType.REMOVE),a};c.removeMany=function(a){f.trackAccess(this._observable);if(!a||!a.length||this._emitBeforeChanges(g.ObservableChangesType.REMOVE))return[];a=a instanceof v?a.toArray():a;const b=this._items,d=[],h=a.length;for(let k=0;k<h;k++){var n=b.indexOf(a[k]);if(-1<n){var p=k+1,l=n+1;const q=Math.min(a.length-p,b.length-l);let e=0;for(;e<q&&a[p+e]===b[l+e];)e++;p=1+e;(n=this._splice(n,p))&&0<n.length&&d.push.apply(d,n);k+=p-1}}this._emitAfterChanges(g.ObservableChangesType.REMOVE);
return d};c.reverse=function(){f.trackAccess(this._observable);if(this._emitBeforeChanges(g.ObservableChangesType.MOVE))return this;const a=this._splice(0,this.length);a&&(a.reverse(),this._splice(0,0,a));this._emitAfterChanges(g.ObservableChangesType.MOVE);return this};c.shift=function(){f.trackAccess(this._observable);if(this.length&&!this._emitBeforeChanges(g.ObservableChangesType.REMOVE)){var a=E(this._splice(0,1));this._emitAfterChanges(g.ObservableChangesType.REMOVE);return a}};c.slice=function(a=
0,b=this.length){f.trackAccess(this._observable);return this._createNewInstance({items:this._items.slice(a,b)})};c.some=function(a,b){f.trackAccess(this._observable);return this._items.some(a,b)};c.sort=function(a){f.trackAccess(this._observable);if(!this.length||this._emitBeforeChanges(g.ObservableChangesType.MOVE))return this;const b=G.assumeNonNull(this._splice(0,this.length));arguments.length?b.sort(a):b.sort();this._splice(0,0,b);this._emitAfterChanges(g.ObservableChangesType.MOVE);return this};
c.splice=function(a,b,...d){f.trackAccess(this._observable);const h=(b?g.ObservableChangesType.REMOVE:0)|(d.length?g.ObservableChangesType.ADD:0);if(this._emitBeforeChanges(h))return[];a=this._splice(a,b,d)||[];this._emitAfterChanges(h);return a};c.toArray=function(){f.trackAccess(this._observable);return this._items.slice()};c.toJSON=function(){f.trackAccess(this._observable);return this.toArray()};c.toLocaleString=function(){f.trackAccess(this._observable);return this._items.toLocaleString()};c.toString=
function(){f.trackAccess(this._observable);return this._items.toString()};c.unshift=function(...a){f.trackAccess(this._observable);if(!a.length||this._emitBeforeChanges(g.ObservableChangesType.ADD))return this.length;this._splice(0,0,a);this._emitAfterChanges(g.ObservableChangesType.ADD);return this.length};c._createNewInstance=function(a){return new this.constructor(a)};c._splice=function(a,b,d){const h=this._items;var n=this.itemType;let p=void 0;!this._notifications&&this.hasEventListener("change")&&
(this._notifications=[{listeners:this._chgListeners.slice(),items:this._items.slice(),changes:[]}],this._timer&&this._timer.remove(),this._timer=P.schedule(()=>this._dispatchChange()));if(b){p=h.splice(a,b);if(this.hasEventListener("before-remove")){var l=t.acquire();l.target=this;l.cancellable=!0;for(let e=0,L=p.length;e<L;e++)b=p[e],l.reset(b),this.emit("before-remove",l),l.defaultPrevented&&(p.splice(e,1),h.splice(a,0,b),a+=1,--e,--L);t.release(l)}this.length=this._items.length;if(this.hasEventListener("after-remove")){b=
t.acquire();b.target=this;b.cancellable=!1;l=p.length;for(let e=0;e<l;e++)b.reset(p[e]),this.emit("after-remove",b);t.release(b)}}if(d&&d.length){if(n){b=[];for(var k of d)d=n.ensureType(k),null==d&&null!=k||b.push(d);d=b}n=this.hasEventListener("before-add");k=this.hasEventListener("after-add");b=a===this.length;if(n||k){var q=t.acquire();q.target=this;q.cancellable=!0;l=t.acquire();l.target=this;l.cancellable=!1;for(const e of d)n?(q.reset(e),this.emit("before-add",q),q.defaultPrevented||(b?h.push(e):
h.splice(a++,0,e),this._set("length",h.length),k&&(l.reset(e),this.emit("after-add",l)))):(b?h.push(e):h.splice(a++,0,e),this._set("length",h.length),l.reset(e),this.emit("after-add",l));t.release(l);t.release(q)}else{if(b)for(q of d)h.push(q);else h.splice(a,0,...d);this._set("length",h.length)}}(d&&d.length||p&&p.length)&&this._notifyChangeEvent(d,p);return p};c._emitBeforeChanges=function(a){let b=!1;if(this.hasEventListener("before-changes")){const d=t.acquire();d.target=this;d.cancellable=!0;
d.type=a;this.emit("before-changes",d);b=d.defaultPrevented;t.release(d)}return b};c._emitAfterChanges=function(a){if(this.hasEventListener("after-changes")){const b=t.acquire();b.target=this;b.cancellable=!1;b.type=a;this.emit("after-changes",b);t.release(b)}this._observable.notify()};c._notifyChangeEvent=function(a,b){this.hasEventListener("change")&&this._notifications&&this._notifications[this._notifications.length-1].changes.push({added:a,removed:b})};c._dispatchChange=function(){this._timer&&
(this._timer.remove(),this._timer=null);if(this._notifications){var a=this._notifications;this._notifications=null;for(const b of a){a=b.changes;x.clear();y.clear();z.clear();for(const {added:k,removed:q}of a){if(k)if(0===z.size&&0===y.size)for(const e of k)x.add(e);else for(const e of k)y.has(e)?(z.add(e),y.delete(e)):z.has(e)||x.add(e);if(q)if(0===z.size&&0===x.size)for(const e of q)y.add(e);else for(const e of q)x.has(e)?x.delete(e):(z.delete(e),y.add(e))}const d=A.acquire();x.forEach(k=>{d.push(k)});
const h=A.acquire();y.forEach(k=>{h.push(k)});const n=this._items,p=b.items,l=A.acquire();z.forEach(k=>{p.indexOf(k)!==n.indexOf(k)&&l.push(k)});if(b.listeners&&(d.length||h.length||l.length)){a={target:this,added:d,removed:h,moved:l};const k=b.listeners.length;for(let q=0;q<k;q++){const e=b.listeners[q];e.removed||e.callback.call(this,a)}}A.release(d);A.release(h);A.release(l)}x.clear();y.clear();z.clear()}};w._createClass(m,[{key:"items",get:function(){f.trackAccess(this._observable);return this._items},
set:function(a){this._emitBeforeChanges(g.ObservableChangesType.ADD)||(this._splice(0,this.length,D(a)),this._emitAfterChanges(g.ObservableChangesType.ADD))}}]);return m}(M.EventedAccessor,Symbol.iterator);B.ofType=c=>{if(!c)return v;if(F.has(c))return F.get(c);let r=null;if("function"===typeof c)r=c.prototype.declaredClass;else if(c.base)r=c.base.prototype.declaredClass;else for(var m in c.typeMap){const u=c.typeMap[m].prototype.declaredClass;r=r?r+` | ${u}`:u}m=function(u){function a(){return b.apply(this,
arguments)}w._inherits(a,u);var b=w._createSuper(a);return w._createClass(a)}(v);C.__decorate([Q.shared({Type:c,ensureType:"function"===typeof c?H.ensureType(c):H.ensureOneOfType(c)})],m.prototype,"itemType",void 0);m=C.__decorate([J.subclass(`esri.core.Collection<${r}>`)],m);F.set(c,m);return m};C.__decorate([I.property()],B.prototype,"length",void 0);C.__decorate([I.property()],B.prototype,"items",null);return B=v=C.__decorate([J.subclass("esri.core.Collection")],B)});