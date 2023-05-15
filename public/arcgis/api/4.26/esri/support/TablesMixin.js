// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/Collection ../core/collectionUtils ../core/Logger ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass".split(" "),function(l,h,m,n,p,q,r,u,v,w,t){function k(d,e,f){if(d)for(let b=0,c=d.length;b<c;b++){var g=d.getItemAt(b);if(g[e]===f||"group"===g?.type&&(g=k(g.tables,e,f)))return g}}l.TablesMixin=d=>{d=function(e){function f(...b){var c=
g.call(this,...b);c.tables=new n;c.addHandles([c.tables.on("after-add",a=>{a=a.item;a.parent&&a.parent!==h._assertThisInitialized(c)&&"tables"in a.parent&&a.parent.tables.remove(a);a.parent=h._assertThisInitialized(c);"feature"!==a.type&&q.getLogger(c.declaredClass).error(`Layer 'title:${a.title}, id:${a.id}' of type '${a.type}' is not supported as a table and will therefore be ignored.`)}),c.tables.on("after-remove",a=>{a.item.parent=null})]);return c}h._inherits(f,e);var g=h._createSuper(f);e=f.prototype;
e.destroy=function(){const b=this.tables.removeAll();for(const c of b)c.destroy();this.tables.destroy()};e.findTableById=function(b){return k(this.tables,"id",b)};e.findTableByUid=function(b){return k(this.tables,"uid",b)};h._createClass(f,[{key:"tables",set:function(b){this._set("tables",p.referenceSetter(b,this._get("tables")))}}]);return f}(d);m.__decorate([r.property()],d.prototype,"tables",null);return d=m.__decorate([t.subclass("esri.support.TablesMixin")],d)};Object.defineProperty(l,Symbol.toStringTag,
{value:"Module"})});