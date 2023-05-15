// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../Basemap ../Viewpoint ../core/asyncUtils ../core/Collection ../core/collectionUtils ../core/JSONSupport ../core/Logger ../core/maybe ../core/promiseUtils ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/cast ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass ../core/accessorSupport/ensureType ../chunks/vec3 ../chunks/vec3f64 ../layers/Layer ../layers/mixins/OperationalLayer ../support/basemapUtils ../views/3d/support/mathUtils ../views/3d/support/viewpointUtils ../views/support/Scheduler ../webdoc/support/SlideThumbnail ./SunLighting ./VirtualLighting ./support/Description ./support/SlideEnvironment ./support/SlideGround ./support/SlideVisibleLayer ./support/Title".split(" "),
function(x,g,P,Q,R,E,S,e,T,n,y,U,l,r,ja,ka,V,z,F,A,W,X,G,Y,Z,aa,q,ba,ca,v,H,I,J,t){function K(c){if("building-scene"===c.type||"map-image"===c.type)return c.allSublayers.toArray()}function L(c){if(c=K(c))return c.filter(k=>k.visible).map(k=>k.id)}function da(c,k){c=k-c;43200<c&&(c-=86400);-43200>c&&(c+=86400);return c}let ea=0;const B=E.ofType(J.SlideVisibleLayer);e=function(c){function k(a){a=fa.call(this,a);a.id=Date.now().toString(16)+"-slide-"+ea++;a.title=new t;a.description=new v;a.thumbnail=
new q.SlideThumbnail;a.viewpoint=null;a.basemap=null;a.ground=null;a.environment=new H.SlideEnvironment;a.visibleLayers=new B;return a}x._inherits(k,c);var fa=x._createSuper(k);c=k.prototype;c.destroy=function(){this.visibleLayers.removeAll();this.basemap?.destroy();this.basemap=null;this.thumbnail=n.destroyMaybe(this.thumbnail);this.thumbnail=this.title=this.description=null};c.castTitle=function(a){return"string"===typeof a?new t({text:a}):z.ensureType(t,a)};c.castDescription=function(a){return"string"===
typeof a?new v({text:a}):z.ensureType(v,a)};c.castThumbnail=function(a){return"string"===typeof a?new q.SlideThumbnail({url:a}):z.ensureType(q.SlideThumbnail,a)};c.castBasemap=function(a){return G.ensureType(a)};c.castVisibleLayers=function(a){return a&&"function"===typeof a.map?a.map(b=>{if("string"===typeof b)return{id:b};if(b instanceof W){const d=L(b);return{id:b.id,sublayerIds:d}}if(b.id)return{id:b.id,sublayerIds:"sublayerIds"in b?b.sublayerIds:void 0};T.getLogger(this.declaredClass).warn('Invalid visible layer, expected { id }, Layer or "id"');
return b}):null};c.clone=function(){return new this.constructor({id:this.id,title:this.title.clone(),thumbnail:this.thumbnail.clone(),description:this.description&&this.description.clone()||null,viewpoint:this.viewpoint&&this.viewpoint.clone()||null,basemap:this.basemap&&this.basemap.clone()||null,ground:this.ground&&this.ground.clone()||null,visibleLayers:this.visibleLayers.clone(),environment:this.environment&&this.environment.clone()||null})};c._updateVisibleLayersFrom=function(a){const b=[];return y.eachAlways(this._getLayers(a.map).map(d=>
a.whenLayerView(d).then(h=>{if(h.visible){const f=L(d);b.push(new J.SlideVisibleLayer({id:h.layer.id,sublayerIds:f}))}})).toArray()).then(()=>{this.visibleLayers.removeAll();this.visibleLayers.addMany(b)})};c.updateFrom=function(a,b){const d={format:"png",quality:80,width:120,height:75,disableDecorations:!0,...(b&&b.screenshot)};return a.when(()=>{this.viewpoint=a.viewpoint.clone();this.environment.lighting="virtual"===a.environment.lighting.type?ca.prototype.clone.apply(a.environment.lighting):ba.prototype.clone.apply(a.environment.lighting);
this.environment.weather=a.environment.weather.clone();this.basemap=a.map.basemap&&a.map.basemap.clone()||null;this.ground=a.map.ground?I.fromGround(a.map.ground):null;return this._updateVisibleLayersFrom(a)}).then(()=>a.takeScreenshot(d)).then(h=>{this.thumbnail=new q.SlideThumbnail({url:h.dataUrl});return this})};c.applyTo=async function(a,b){n.isSome(this._applyToController)&&this._applyToController.abort();let d=new AbortController;this._applyToController=d;const h=y.onAbortOrThrow(b,()=>d?.abort()),
f=a.resourceController.scheduler.registerTask(aa.TaskPriority.SLIDE);let w=!1;const m={animate:!0,...b,signal:this._applyToController.signal};b=await R.result(a.addUpdatingPromise((async()=>{await Promise.all([f.schedule(()=>w=this._setViewpointOfInterest(a,m)),f.schedule(()=>this._applyBasemap(a,m),m.signal)]);await Promise.all([f.schedule(()=>this._applyLayerVisibility(a),m.signal),f.schedule(()=>this._applyGround(a),m.signal),f.schedule(()=>this._applyViewpoint(a,m),m.signal)]);await f.schedule(()=>
a.environment.weather=this.environment.weather.clone())})()));w&&(a.contentCamera=null);f.remove();this._applyToController===d&&(this._applyToController=null);d=null;h?.remove();if(!1===b.ok)throw b.error;return this};c._applyBasemap=async function(a,b){if(this.basemap){try{await this.basemap.load(b)}catch(d){if(y.isAbortError(d))throw d;}a.map.basemap=G.clonePreservingTiledLayers(this.basemap,a.map.basemap)}};c._applyGround=function(a){this.ground&&(a.map.ground=this.ground.cloneAndApplyTo(a.map.ground))};
c._getLayers=function(a){const b=new E;this._collectLayers(a,b);this._collectLayers(a.ground,b);return b};c._collectLayers=function(a,b){a.layers.forEach(d=>{X.isOperationalLayer(d)&&(b.add(d),"layers"in d&&this._collectLayers(d,b))})};c._applyLayerVisibility=function(a){this.visibleLayers&&this._getLayers(a.map).forEach(b=>{var d=this.visibleLayers.find(f=>f.id===b.id);b.visible=null!=d;const h=d&&d.sublayerIds;d=K(b);h&&d&&d.forEach(f=>f.visible=h.includes(f.id))})};c._setViewpointOfInterest=function(a,
b){if(a.state.fixedContentCamera||!this.viewpoint||b?.ignoreViewpoint||!b?.useDestinationCamera)return!1;b=Z.toCamera(a,this.viewpoint);a.contentCamera=b;return n.isSome(b)};c._applyViewpoint=async function(a,b){this._applyCachedCameraTrackingEnabled(a);if(this.viewpoint&&!b.ignoreViewpoint){n.isSome(this.viewpoint.camera)&&(this.viewpoint.camera.fov=a.camera.fov);if(b.animate&&this.get("environment.lighting.date"))return this._animateToLighting(a,b);b.animate&&(a.environment.applyLighting(this.environment.lighting.clone()),
await a.goTo(this.viewpoint,b));a.viewpoint=this.viewpoint}a.environment.applyLighting(this.environment.lighting.clone())};c._animateToLighting=async function(a,b){let d=null;"virtual"!==a.environment.lighting.type&&"virtual"!==this.environment.lighting.type&&("global"===a.viewingMode&&(d=this._animateLightingWithCamera(a,a.environment.lighting,this.environment.lighting)),a.environment.cachedCameraTrackingEnabled=a.environment.lighting.cameraTrackingEnabled,a.environment.lighting.cameraTrackingEnabled=
!1);a.environment.lighting.directShadowsEnabled=this.environment.lighting.directShadowsEnabled;"virtual"===this.environment.lighting.type||"virtual"===a.environment.lighting.type?(a.environment.applyLighting(this.environment.lighting.clone()),"virtual"!==a.environment.lighting.type&&(a.environment.cachedCameraTrackingEnabled=a.environment.lighting.cameraTrackingEnabled,a.environment.lighting.cameraTrackingEnabled=!1)):null!=this.environment.lighting.displayUTCOffset&&(a.environment.lighting.displayUTCOffset=
this.environment.lighting.displayUTCOffset);return a.goTo(this.viewpoint,b).then(()=>{this._applyCachedCameraTrackingEnabled(a);a.environment.applyLighting(this.environment.lighting.clone())}).catch(h=>{n.isNone(a.animation)&&this._applyCachedCameraTrackingEnabled(a);throw h;}).finally(()=>{n.removeMaybe(d)})};c._applyCachedCameraTrackingEnabled=function(a){n.isSome(a.environment.cachedCameraTrackingEnabled)&&(a.environment.lighting.cameraTrackingEnabled=a.environment.cachedCameraTrackingEnabled,
a.environment.cachedCameraTrackingEnabled=null)};c._getTime=function(a){const b=a.getTime();a=3600*a.getUTCHours()+60*a.getUTCMinutes()+a.getUTCSeconds();return[b,a]};c._setTime=function(a,b,d){a.setTime(b);a.setUTCHours(d/3600);a.setUTCMinutes(d%3600/60);a.setUTCSeconds(d%3600%60);return a};c._animateLightingWithCamera=function(a,b,d){const [h,f]=this._getTime(new Date(b.date.toString())),[w,m]=this._getTime(d.date),ha=da(f,m),C=a.renderCoordsHelper,M=A.create();C.toRenderCoords(a.camera.position,
M);const N=A.create(),D=A.create();n.isSome(this.viewpoint.camera)&&C.toRenderCoords(this.viewpoint.camera.position,N);const ia=new Date;return U.when(()=>a.camera,p=>{C.toRenderCoords(p.position,D);var u=F.squaredDistance(M,D);const O=F.squaredDistance(N,D);p=0;0!==u+O&&(p=u/(u+O));u=h+(w-h)*p;p=Y.moduloPositive(f+ha*p,86400);b.date=this._setTime(ia,u,p)})};k.createFrom=function(a,b){return(new this).updateFrom(a,b)};x._createClass(k,[{key:"visibleLayers",set:function(a){this._set("visibleLayers",
S.referenceSetter(a,this._get("visibleLayers"),B))}}]);return k}(e.JSONSupport);g.__decorate([l.property({type:String,json:{write:{isRequired:!0}}})],e.prototype,"id",void 0);g.__decorate([l.property({type:t,json:{default:()=>new t({text:""}),write:{isRequired:!0}}})],e.prototype,"title",void 0);g.__decorate([r.cast("title")],e.prototype,"castTitle",null);g.__decorate([l.property({type:v,json:{write:{overridePolicy(c){return{enabled:!(!c||!c.text)}}}}})],e.prototype,"description",void 0);g.__decorate([r.cast("description")],
e.prototype,"castDescription",null);g.__decorate([l.property({type:q.SlideThumbnail,json:{default:()=>new q.SlideThumbnail({url:""}),write:{isRequired:!0}}})],e.prototype,"thumbnail",void 0);g.__decorate([r.cast("thumbnail")],e.prototype,"castThumbnail",null);g.__decorate([l.property({type:Q,nonNullable:!0,json:{write:{isRequired:!0}}})],e.prototype,"viewpoint",void 0);g.__decorate([l.property({type:P,json:{read:{source:"baseMap"},write:{target:"baseMap"}}})],e.prototype,"basemap",void 0);g.__decorate([r.cast("basemap")],
e.prototype,"castBasemap",null);g.__decorate([l.property({type:I,json:{write:!0}})],e.prototype,"ground",void 0);g.__decorate([l.property({type:B,json:{write:{isRequired:!0}}})],e.prototype,"visibleLayers",null);g.__decorate([r.cast("visibleLayers")],e.prototype,"castVisibleLayers",null);g.__decorate([l.property({type:H.SlideEnvironment,json:{write:!0}})],e.prototype,"environment",void 0);return e=g.__decorate([V.subclass("esri.webscene.Slide")],e)});