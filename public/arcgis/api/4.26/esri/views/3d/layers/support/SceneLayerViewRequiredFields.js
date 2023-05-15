// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/AsyncUpdate ../../../../core/HandleOwner ../../../../core/Logger ../../../../core/maybe ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../../../../layers/support/fieldUtils".split(" "),function(a,k,e,q,r,t,h,f,x,y,z,u,l){async function m(n){const c=
new Set;try{return await n(c),Array.from(c).sort()}catch(p){return t.getLogger("esri.views.3d.layers.support.SceneLayerViewRequiredFields").error(p),null}}a.SceneLayerViewRequiredFields=function(n){function c(b){return p.call(this,b)}k._inherits(c,n);var p=k._createSuper(c);c.prototype.initialize=function(){this.handles.add([this.autoUpdateAsync("rendererFields",async()=>{const {fieldsIndex:b,renderer:d}=this.layer;return d?m(g=>d.collectRequiredFields(g,b)):null}),this.autoUpdateAsync("labelingFields",
async()=>{const {layer:b}=this;return b.labelsVisible?m(d=>l.collectLabelingFields(d,b)):null}),this.autoUpdateAsync("viewFilterFields",()=>{const {layer:b,filter:d}=this.layerView;return m(g=>l.collectFilterFields(g,b,d))})])};k._createClass(c,[{key:"layer",get:function(){return this.layerView.layer}},{key:"requiredFields",get:function(){const {layerView:{layer:{fieldsIndex:b},definitionExpressionFields:d},rendererFields:g,labelingFields:v,viewFilterFields:w}=this;return l.fixFields(b,[...h.unwrapOr(d,
[]),...h.unwrapOr(g,[]),...h.unwrapOr(v,[]),...h.unwrapOr(w,[])])}}]);return c}(q.AsyncUpdateMixin(r.HandleOwner));e.__decorate([f.property()],a.SceneLayerViewRequiredFields.prototype,"layerView",void 0);e.__decorate([f.property()],a.SceneLayerViewRequiredFields.prototype,"layer",null);e.__decorate([f.property()],a.SceneLayerViewRequiredFields.prototype,"requiredFields",null);e.__decorate([f.property()],a.SceneLayerViewRequiredFields.prototype,"rendererFields",void 0);e.__decorate([f.property()],
a.SceneLayerViewRequiredFields.prototype,"labelingFields",void 0);e.__decorate([f.property()],a.SceneLayerViewRequiredFields.prototype,"viewFilterFields",void 0);a.SceneLayerViewRequiredFields=e.__decorate([u.subclass("esri.views.3d.layers.support.SceneLayerViewRequiredFields")],a.SceneLayerViewRequiredFields);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});