// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("require ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/Error ../core/JSONSupport ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass ./PortalFolder ./PortalGroup".split(" "),function(u,p,d,r,c,e,y,z,A,v,w,t){var q;c=q=function(g){function m(...a){a=x.call(this,...a);a.access=null;a.created=null;a.culture=null;a.description=null;a.email=null;a.fullName=null;a.modified=null;
a.orgId=null;a.portal=null;a.preferredView=null;a.privileges=null;a.region=null;a.role=null;a.roleId=null;a.sourceJSON=null;a.units=null;a.username=null;a.userType=null;return a}p._inherits(m,g);var x=p._createSuper(m);g=m.prototype;g.addItem=function(a){const b=a&&a.item;var f=a&&a.data;a=a&&a.folder;const h={method:"post"};b&&(h.query=b.createPostQuery(),null!=f&&("string"===typeof f?h.query.text=f:"object"===typeof f&&(h.query.text=JSON.stringify(f))));f=this.userContentUrl;a&&(f+="/"+("string"===
typeof a?a:a.id));return this.portal.request(f+"/addItem",h).then(k=>{b.id=k.id;b.portal=this.portal;return b.loaded?b.reload():b.load()})};g.deleteItem=function(a){let b=this.userContentUrl;a.ownerFolder&&(b+="/"+a.ownerFolder);return this.portal.request(b+`/items/${a.id}/delete`,{method:"post"}).then(()=>{a.id=null;a.portal=null})};g.deleteItems=function(a){const b=this.userContentUrl+"/deleteItems";var f=a.map(h=>h.id);return f.length?(f={method:"post",query:{items:f.join(",")}},this.portal.request(b,
f).then(()=>{a.forEach(h=>{h.id=null;h.portal=null})})):Promise.resolve(void 0)};g.fetchFolders=function(){return this.portal.request(this.userContentUrl??"",{query:{num:1}}).then(a=>a&&a.folders?a.folders.map(b=>{b=w.fromJSON(b);b.portal=this.portal;return b}):[])};g.fetchGroups=function(){return this.portal.request(this.url??"").then(a=>a&&a.groups?a.groups.map(b=>{b=t.fromJSON(b);b.portal=this.portal;return b}):[])};g.fetchItems=function(a){const b=a??{};let f=this.userContentUrl??"";b.folder&&
(f+="/"+b.folder.id);let h;return(new Promise((k,n)=>u(["./PortalItem"],l=>k(Object.freeze(Object.defineProperty({__proto__:null,default:l},Symbol.toStringTag,{value:"Module"}))),n))).then(({default:k})=>{h=k;return this.portal.request(f,{query:{folders:!1,num:b.num||10,start:b.start||1,sortField:b.sortField||"created",sortOrder:b.sortOrder||"asc"}})}).then(k=>{let n;return k&&k.items?(n=k.items.map(l=>{l=h.fromJSON(l);l.portal=this.portal;return l}),Promise.all(n.map(l=>l.load())).catch(l=>l).then(()=>
({items:n,nextStart:k.nextStart,total:k.total}))):{items:[],nextStart:-1,total:0}})};g.fetchTags=function(){return this.portal.request(this.url+"/tags").then(a=>a.tags)};g.getThumbnailUrl=function(a){let b=this.thumbnailUrl;b&&a&&(b+=`&w=${a}`);return b};g.queryFavorites=function(a){return this.favGroupId?(this._favGroup||(this._favGroup=new t({id:this.favGroupId,portal:this.portal})),this._favGroup.queryItems(a)):Promise.reject(new r("internal:unknown","Unknown internal error",{internalError:"Unknown favGroupId"}))};
g.toJSON=function(){throw new r("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented");};m.fromJSON=function(a){if(!a)return null;if(a.declaredClass)throw Error("JSON object is already hydrated");const b=new q;b.sourceJSON=a;b.read(a);return b};p._createClass(m,[{key:"thumbnailUrl",get:function(){const a=this.url,b=this.thumbnail;return a&&b?this.portal.normalizeUrl(`${a}/info/${b}?f=json`):null}},{key:"userContentUrl",get:function(){const a=this.get("portal.restUrl");return a?
`${a}/content/users/${this.username}`:null}},{key:"url",get:function(){const a=this.get("portal.restUrl");return a?`${a}/community/users/${this.username}`:null}}]);return m}(c.JSONSupport);d.__decorate([e.property()],c.prototype,"access",void 0);d.__decorate([e.property({type:Date})],c.prototype,"created",void 0);d.__decorate([e.property()],c.prototype,"culture",void 0);d.__decorate([e.property()],c.prototype,"description",void 0);d.__decorate([e.property()],c.prototype,"email",void 0);d.__decorate([e.property()],
c.prototype,"favGroupId",void 0);d.__decorate([e.property()],c.prototype,"fullName",void 0);d.__decorate([e.property({type:Date})],c.prototype,"modified",void 0);d.__decorate([e.property()],c.prototype,"orgId",void 0);d.__decorate([e.property()],c.prototype,"portal",void 0);d.__decorate([e.property()],c.prototype,"preferredView",void 0);d.__decorate([e.property()],c.prototype,"privileges",void 0);d.__decorate([e.property()],c.prototype,"region",void 0);d.__decorate([e.property()],c.prototype,"role",
void 0);d.__decorate([e.property()],c.prototype,"roleId",void 0);d.__decorate([e.property()],c.prototype,"sourceJSON",void 0);d.__decorate([e.property()],c.prototype,"thumbnail",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"thumbnailUrl",null);d.__decorate([e.property()],c.prototype,"units",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"userContentUrl",null);d.__decorate([e.property({readOnly:!0})],c.prototype,"url",null);d.__decorate([e.property()],c.prototype,"username",
void 0);d.__decorate([e.property()],c.prototype,"userType",void 0);return c=q=d.__decorate([v.subclass("esri.portal.PortalUser")],c)});