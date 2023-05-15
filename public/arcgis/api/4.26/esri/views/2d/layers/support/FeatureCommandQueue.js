// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../../../support/QueueProcessor".split(" "),function(l,m,f,r,z,A,B,x,y){function n(a){return a.some(b=>b.globalId)}function h(a){return a.filter(b=>!b.error).map(b=>b.objectId??b.globalId).filter(b=>
null!=b)}function t(a,b){a=new Set(a);for(const k of b.values())a.add(k);return a}function u(a,b){a=new Set(a);for(const k of b.values())a.delete(k);return a}f=function(a){function b(c){var d=k.call(this,c);d._hasGlobalIds=!1;d._notifyUpdating=()=>{d.notifyChange("updating")};return d}l._inherits(b,a);var k=l._createSuper(b);a=b.prototype;a.normalizeCtorArgs=function(c){this._queueProcessor=new y.QueueProcessor({concurrency:1,process:c.process});return{}};a.destroy=function(){this.clear()};a.clear=
function(){this._queueProcessor.clear()};a.push=function(c){const d=this._queueProcessor;var e=d.last();switch(c.type){case "update":case "refresh":if(e?.type===c.type)return;d.push(c).then(this._notifyUpdating,this._notifyUpdating);break;case "edit":(e="processed-edit"===e?.type?e:null)&&d.popLast();c=this._mergeEdits(e,c);for(const g of c)g&&d.push(g).then(this._notifyUpdating,this._notifyUpdating)}this.notifyChange("updating")};a._mergeEdits=function(c,d){const {addedFeatures:e,deletedFeatures:g,
updatedFeatures:p}=d.edits;if(this._hasGlobalIds=this._hasGlobalIds||n(e)||n(p)||n(g))return d=[...e,...p],[c,{type:"processed-edit",edits:{addOrModified:d,removed:g}}];d=new Set(h(c?.edits.addOrModified??[]));c=new Set(h(c?.edits.removed??[]));const v=new Set([...h(e),...h(p)]),w=new Set(h(g));d=Array.from(t(u(d,w),v)).map(q=>({objectId:q}));c=Array.from(t(u(c,v),w)).map(q=>({objectId:q}));return[{type:"processed-edit",edits:{addOrModified:d,removed:c}}]};l._createClass(b,[{key:"updating",get:function(){return 0<
this._queueProcessor.length}}]);return b}(f);m.__decorate([r.property({readOnly:!0})],f.prototype,"updating",null);m.__decorate([r.property()],f.prototype,"process",void 0);return f=m.__decorate([x.subclass("esri.views.2d.layers.support.FeatureCommandQueue")],f)});