// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Evented ../../core/Handles ../../core/maybe ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass".split(" "),function(l,e,b,n,d,m,g,v,w,x,p){const h=Symbol("anchorHandles");b=function(q){function f(k){var a=r.call(this,k);a[t]=new n;a.location=null;a.screenLocationEnabled=!1;a.view=
null;a[h].add([m.when(()=>d.applySome(a.screenLocationEnabled?a.view:null,c=>[c.size,"3d"===c.type?c.camera:c.viewpoint]),()=>a.notifyChange("screenLocation")),m.watch(()=>a.screenLocation,(c,u)=>{d.isSome(c)&&d.isSome(u)&&a.emit("view-change")})]);return a}l._inherits(f,q);var r=l._createSuper(f);f.prototype.destroy=function(){this.view=null;this[h]=d.destroyMaybe(this[h])};l._createClass(f,[{key:"screenLocation",get:function(){const {location:k,view:a,screenLocationEnabled:c}=this;return c&&d.isSome(k)&&
d.isSome(a)&&a.ready?a.toScreen?.(k):null}}]);return f}(b.EventedAccessor);var t=h;e.__decorate([g.property()],b.prototype,"location",void 0);e.__decorate([g.property()],b.prototype,"screenLocation",null);e.__decorate([g.property()],b.prototype,"screenLocationEnabled",void 0);e.__decorate([g.property()],b.prototype,"view",void 0);return b=e.__decorate([p.subclass("esri.widgets.support.AnchorElementViewModel")],b)});