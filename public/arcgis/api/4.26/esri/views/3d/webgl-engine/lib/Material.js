// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../chunks/vec3f64 ../core/shaderModules/interfaces ./AnimationTimer ./ContentObject ./ContentObjectType ./DefaultVertexAttributeLocations ../materials/internal/MaterialUtil".split(" "),function(g,f,r,n,k,l,m,t,u,p){m=function(a){function d(b,e){var c=h.call(this);c.type=t.ContentObjectType.Material;c.supportsEdges=!1;c._visible=!0;c._renderPriority=0;c._insertOrder=0;c._vertexAttributeLocations=u.Default3D;
c._pp0=n.fromValues(0,0,1);c._pp1=n.fromValues(0,0,0);c._parameters=p.copyParameters(b,e);c.validateParameters(c._parameters);return c}f._inherits(d,a);var h=f._createSuper(d);a=d.prototype;a.dispose=function(){};a.update=function(b){return!1};a.setParameters=function(b,e=!0){p.updateParameters(this._parameters,b)&&(this.validateParameters(this._parameters),e&&this.parametersChanged())};a.validateParameters=function(b){};a.shouldRender=function(b){return this.isVisible()&&this.isVisibleForOutput(b.output)&&
0!==(this.renderOccluded&b.renderOccludedMask)};a.isVisibleForOutput=function(b){return!0};a.isVisible=function(){return this._visible};a.parametersChanged=function(){r.isSome(this.repository)&&this.repository.materialChanged(this)};a.intersectDraped=function(b,e,c,q,v,w){this._pp0[0]=this._pp1[0]=q[0];this._pp0[1]=this._pp1[1]=q[1];return this.intersect(b,e,c,this._pp0,this._pp1,v)};f._createClass(d,[{key:"parameters",get:function(){return this._parameters}},{key:"visible",get:function(){return this._visible},
set:function(b){b!==this._visible&&(this._visible=b,this.parametersChanged())}},{key:"renderOccluded",get:function(){return this.parameters.renderOccluded}},{key:"renderPriority",get:function(){return this._renderPriority},set:function(b){b!==this._renderPriority&&(this._renderPriority=b,this.parametersChanged())}},{key:"insertOrder",get:function(){return this._insertOrder},set:function(b){b!==this._insertOrder&&(this._insertOrder=b,this.parametersChanged())}},{key:"vertexAttributeLocations",get:function(){return this._vertexAttributeLocations}}]);
return d}(m.ContentObject);l=function(a){function d(b,e,c){e=h.call(this,e,c);e.camera=b;return e}f._inherits(d,a);var h=f._createSuper(d);return f._createClass(d)}(l.Parameters);g.RenderOccludedFlag=void 0;(function(a){a[a.Occlude=1]="Occlude";a[a.Transparent=2]="Transparent";a[a.OccludeAndTransparent=4]="OccludeAndTransparent";a[a.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil";a[a.Opaque=16]="Opaque"})(g.RenderOccludedFlag||(g.RenderOccludedFlag={}));k=function(a){function d(){var b=
h.apply(this,arguments);b.renderOccluded=g.RenderOccludedFlag.Occlude;return b}f._inherits(d,a);var h=f._createSuper(d);return f._createClass(d)}(k.NoParameters);g.Material=m;g.MaterialParameters=k;g.UpdateParameters=l;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});