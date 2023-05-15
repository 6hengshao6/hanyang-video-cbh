// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ./Collection ./maybe ./has ./Error ./Logger ./accessorSupport/watch ./accessorSupport/trackingUtils ./accessorSupport/decorators/property ./accessorSupport/decorators/subclass".split(" "),function(k,f,n,l,e,u,v,w,p,m,q){e=function(d){function g(a){a=r.call(this,a);a.getCollections=null;return a}k._inherits(g,d);var r=k._createSuper(g);d=g.prototype;d.initialize=function(){this.own(p.autorun(()=>this._refresh()))};d.destroy=function(){this.getCollections=
null};d._refresh=function(){const a=l.isSome(this.getCollections)?this.getCollections():null;if(l.isNone(a))this.removeAll();else{var b=0;for(const h of a)l.isSome(h)&&(b=this._processCollection(b,h));this.splice(b,this.length)}};d._createNewInstance=function(a){return new n(a)};d._processCollection=function(a,b){if(!b)return a;const h=this.itemFilterFunction??(c=>!!c);for(const c of b)if(c&&(h(c)&&(b=this.indexOf(c,a),0<=b?b!==a&&this.reorder(c,a):this.add(c,a),++a),this.getChildrenFunction))if(b=
this.getChildrenFunction(c),Array.isArray(b))for(const t of b)a=this._processCollection(a,t);else a=this._processCollection(a,b);return a};return k._createClass(g)}(n);f.__decorate([m.property()],e.prototype,"getCollections",void 0);f.__decorate([m.property()],e.prototype,"getChildrenFunction",void 0);f.__decorate([m.property()],e.prototype,"itemFilterFunction",void 0);return e=f.__decorate([q.subclass("esri.core.CollectionFlattener")],e)});