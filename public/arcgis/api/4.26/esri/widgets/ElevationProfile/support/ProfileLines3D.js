// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../Color ../../../core/Accessor ../../../core/Handles ../../../core/maybe ../../../core/reactiveUtils ../../../core/throttle ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ../../../chunks/vec4f64 ../../../geometry/Polyline ../../../views/3d/interactive/visualElements/OutlineVisualElement ./constants".split(" "),
function(h,n,p,u,v,w,l,r,x,t,F,G,H,y,z,A,B,C){h.ProfileLines3D=function(d){function m(a){a=D.call(this,a);a._chartData=null;a._visualElements=[];a._handles=new w;return a}n._inherits(m,d);var D=n._createSuper(m);d=m.prototype;d.initialize=function(){const a=x.throttle(c=>{this._update(c)},100);this._handles.add([r.watch(()=>({spatialReference:this.view.spatialReference,chartData:this._chartData}),a,r.syncAndInitial),a])};d.destroy=function(){this._handles.destroy();this._destroyVisualElements()};
d.remove=function(){this._destroyVisualElements()};d.update=function(a){this._chartData=a};d._update=function(a){var {chartData:c}=a;if(l.isNone(c))return this.remove();if(c.refined){var f=this._visualElements;c=c.lines.filter(k=>k.viewVisualizationEnabled);for(var g=c.length;f.length>g;)f.pop().destroy();for(var b=C.getConfig().profileLinesStyle3D;f.length<g;){var e=new B.OutlineVisualElement({view:this.view,elevationInfo:{mode:"absolute-height",offset:0},innerWidth:b.width-b.outlineSize,width:b.width,
falloff:b.falloff,color:b.outlineColor,renderOccluded:b.renderOccluded});f.push(e)}a=a.spatialReference;for(b=0;b<g;++b){e=f[b];const k=c[g-1-b];e.geometry=this._createLineGeometry(k,a);e.innerColor=z.fromArray(u.toUnitRGBA(k.color))}}};d._createLineGeometry=function(a,c){a=l.unwrapOr(a.samples,[]);const f=a.length-1,g=[];let b=[];for(let e=0;e<=f;e++){const {x:k,y:E,z:q}=a[e];l.isSome(q)&&b.push([k,E,q]);(e===f||l.isNone(q))&&b.length&&(g.push(b),b=[])}return new A({paths:g,hasZ:!0,spatialReference:c})};
d._destroyVisualElements=function(){this._visualElements.forEach(a=>a.destroy());this._visualElements.length=0};return n._createClass(m)}(v);p.__decorate([t.property()],h.ProfileLines3D.prototype,"view",void 0);p.__decorate([t.property()],h.ProfileLines3D.prototype,"_chartData",void 0);h.ProfileLines3D=p.__decorate([y.subclass("esri.widgets.ElevationProfile.support.ProfileLines3D")],h.ProfileLines3D);Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});