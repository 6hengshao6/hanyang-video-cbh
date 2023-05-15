// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("require exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../config ../../kernel ../../request ../../core/asyncUtils ../../core/Error ../../core/Logger ../../core/maybe ../../core/promiseUtils ../../core/urlUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../support/layerUtils ../../portal/Portal ../../portal/PortalItem ../../portal/PortalUser ../../portal/support/portalItemUtils".split(" "),
function(B,v,l,h,C,t,D,E,F,G,q,k,r,p,N,O,P,H,I,J,K,w,u,L,x){var y=null,z=null;v.PortalLayer=e=>{e=function(d){function m(){var a=M.apply(this,arguments);a.resourceReferences={portalItem:null,paths:[]};a.userHasEditingPrivileges=!0;a.userHasFullEditingPrivileges=!1;a.userHasUpdateItemPrivileges=!1;return a}l._inherits(m,d);var M=l._createSuper(m);d=m.prototype;d.destroy=function(){this.portalItem=q.destroyMaybe(this.portalItem);this.resourceReferences.portalItem=null;this.resourceReferences.paths.length=
0};d.readPortalItem=function(a,b,c){if(b.itemId)return new u({id:b.itemId,portal:c&&c.portal})};d.writePortalItem=function(a,b){a&&a.id&&(b.itemId=a.id)};d.loadFromPortal=async function(a,b){if(this.portalItem&&this.portalItem.id)try{const c=await new Promise((f,g)=>B(["../../portal/support/layersLoader"],f,g));k.throwIfAborted(b);return await c.load({instance:this,supportedTypes:a.supportedTypes,validateItem:a.validateItem,supportsData:a.supportsData,layerModuleTypeMap:a.layerModuleTypeMap},b)}catch(c){throw k.isAbortError(c)||
G.getLogger(this.declaredClass).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${c}`),c;}};d.finishLoadEditablePortalLayer=async function(a){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(a).catch(b=>{k.throwIfAbortError(b);return!0}))};d._setUserPrivileges=async function(a,b){if(!C.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(b);if(this.url)try{const {features:{edit:c,fullEdit:f},content:{updateItem:g}}=
await this._fetchUserPrivileges(a,b);this._set("userHasEditingPrivileges",c);this._set("userHasFullEditingPrivileges",f);this._set("userHasUpdateItemPrivileges",g)}catch(c){k.throwIfAbortError(c)}};d._fetchUserPrivileges=async function(a,b){let c=this.portalItem;if(!a||!c||!c.loaded||c.sourceUrl)return this._fetchFallbackUserPrivileges(b);const f=a===c.id;if(f&&c.portal.user)return x.getUserPrivileges(c);let g;if(f)g=c.portal.url;else try{g=await K.getOwningPortalUrl(this.url,b)}catch(n){k.throwIfAbortError(n)}if(!g||
!r.hasSameCanonicalPortal(g,c.portal.url))return this._fetchFallbackUserPrivileges(b);let A;try{const n=q.isSome(b)?b.signal:null;A=await t.id?.getCredential(`${g}/sharing`,{prompt:!1,signal:n})}catch(n){k.throwIfAbortError(n)}if(!A)return{features:{edit:!0,fullEdit:!1},content:{updateItem:!1}};try{if(f?await c.reload():(c=new u({id:a,portal:{url:g}}),await c.load(b)),c.portal.user)return x.getUserPrivileges(c)}catch(n){k.throwIfAbortError(n)}return{features:{edit:!0,fullEdit:!1},content:{updateItem:!1}}};
d._fetchFallbackUserPrivileges=async function(a){let b=!0;try{b=await this._fetchUserHasEditingPrivileges(a)}catch(c){k.throwIfAbortError(c)}return{features:{edit:b,fullEdit:!1},content:{updateItem:!1}}};d._fetchUserHasEditingPrivileges=async function(a){const b=this.url?t.id?.findCredential(this.url):null;if(!b)return!0;a=y===b?z:await this._fetchEditingUser(a);y=b;z=a;return q.isNone(a)||null==a.privileges||a.privileges.includes("features:user:edit")};d._fetchEditingUser=async function(a){var b=
this.portalItem?.portal?.user;if(b)return b;b=t.id.findServerInfo(this.url??"");if(!b?.owningSystemUrl)return null;b=`${b.owningSystemUrl}/sharing/rest`;const c=w.getDefault();if(c&&c.loaded&&r.normalize(c.restUrl)===r.normalize(b))return c.user;b=`${b}/community/self`;a=q.isSome(a)?a.signal:null;a=await E.result(D(b,{authMode:"no-prompt",query:{f:"json"},signal:a}));return a.ok?L.fromJSON(a.value.data):null};d.read=function(a,b){b&&(b.layer=this);l._get(l._getPrototypeOf(m.prototype),"read",this).call(this,
a,b)};d.write=function(a,b){const c=b&&b.portal,f=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||w.getDefault());return c&&f&&!r.hasSamePortal(f.restUrl,c.restUrl)?(b.messages&&b.messages.push(new F("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):l._get(l._getPrototypeOf(m.prototype),
"write",this).call(this,a,{...b,layer:this})};l._createClass(m,[{key:"portalItem",set:function(a){a!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",a))}}]);return m}(e);h.__decorate([p.property({type:u})],e.prototype,"portalItem",null);h.__decorate([H.reader("web-document","portalItem",["itemId"])],e.prototype,"readPortalItem",null);h.__decorate([J.writer("web-document","portalItem",{itemId:{type:String}})],e.prototype,"writePortalItem",null);h.__decorate([p.property({clonable:!1})],
e.prototype,"resourceReferences",void 0);h.__decorate([p.property({type:Boolean,readOnly:!0})],e.prototype,"userHasEditingPrivileges",void 0);h.__decorate([p.property({type:Boolean,readOnly:!0})],e.prototype,"userHasFullEditingPrivileges",void 0);h.__decorate([p.property({type:Boolean,readOnly:!0})],e.prototype,"userHasUpdateItemPrivileges",void 0);return e=h.__decorate([I.subclass("esri.layers.mixins.PortalLayer")],e)};Object.defineProperty(v,Symbol.toStringTag,{value:"Module"})});