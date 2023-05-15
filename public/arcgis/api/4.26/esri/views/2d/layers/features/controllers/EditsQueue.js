// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/Accessor ../../../../../core/promiseUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/accessorSupport/ensureType ../../../../../core/arrayUtils ../../../../../core/has ../../../../../core/accessorSupport/decorators/subclass".split(" "),function(d,m,n,v,q,r,B,C,D,w){d.EditsQueue=function(e){function k(a){a=x.call(this,a);a._queue=[];a._onGoingRequest=null;
a._abortController=new AbortController;return a}m._inherits(k,e);var x=m._createSuper(k);e=k.prototype;e.destroy=function(){this.clear()};e.clear=function(){if(this.destroyed)throw Error("instance is already destroyed");let a=this._queue.pop();for(;a;)a.resolver.reject(q.createAbortError()),a=this._queue.pop();this._queue.length=0;this._abortController.abort();this._abortController=new AbortController};e.push=async function(a){if(this.destroyed)throw Error("instance is already destroyed");const f=
q.createResolver();this._queue.push({event:a,resolver:f});this.notifyChange("updating");Promise.resolve().then(()=>{this._processNext()});return f.promise};e._processNext=async function(){if(!this._onGoingRequest){for(var a=[],f=new Set,g=new Set,h=new Set,p=this._queue.shift();p;){const {event:{addedFeatures:c,deletedFeatures:y,updatedFeatures:z},resolver:A}=p;a.push(A);for(const {objectId:b,error:l}of c)l||null==b||(f.add(b),g.add(b),h.delete(b));for(const {objectId:b,error:l}of z)l||null==b||(g.add(b),
h.delete(b));for(const {objectId:b,error:l}of y)l||null==b||(f.has(b)?f.delete(b):h.add(b),g.delete(b));p=this._queue.shift()}if(g.size||h.size){var t=[],u=[];g.size&&g.forEach(c=>{t.push(c)});h.size&&h.forEach(c=>{u.push(c)});this._onGoingRequest=Promise.resolve().then(()=>this.processEdits(t,u,{signal:this._abortController.signal})).catch(()=>{});this.notifyChange("updating");await this._onGoingRequest;this._onGoingRequest=null;this.notifyChange("updating");a.forEach(c=>c());0<this._queue.length&&
this._processNext()}else this.notifyChange("updating"),a.forEach(c=>c())}};m._createClass(k,[{key:"updating",get:function(){return!this.destroyed&&(0<this._queue.length||null!=this._onGoingRequest)}}]);return k}(v);n.__decorate([r.property({constructOnly:!0})],d.EditsQueue.prototype,"processEdits",void 0);n.__decorate([r.property({readOnly:!0})],d.EditsQueue.prototype,"updating",null);d.EditsQueue=n.__decorate([w.subclass("esri.views.2d.layers.features.controllers.EditsQueue")],d.EditsQueue);Object.defineProperty(d,
Symbol.toStringTag,{value:"Module"})});