/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import"../../geometry.js";import s from"../../core/Collection.js";import{r as t}from"../../chunks/collectionUtils.js";import r from"../../core/Evented.js";import{HandleOwnerMixin as o}from"../../core/HandleOwner.js";import i from"../../core/Loadable.js";import{L as n}from"../../chunks/Logger.js";import{i as m,u as a,a as c}from"../../chunks/maybe.js";import{EsriPromiseMixin as p}from"../../core/Promise.js";import{throwIfAborted as l}from"../../core/promiseUtils.js";import{watch as h}from"../../core/reactiveUtils.js";import{property as u}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as d}from"../../core/accessorSupport/decorators/subclass.js";import j,{c as f}from"../../geometry/Extent.js";import{initializeProjection as k,project as g}from"../../geometry/projection.js";import{h as y}from"../../chunks/aaBoundingRect.js";import{f as x}from"../../chunks/unitUtils.js";import{B as _}from"../../chunks/BoundsStore.js";import E from"./ImageElement.js";import R from"./MediaElementBase.js";import{M as U}from"../../chunks/MediaElementView.js";import w from"./VideoElement.js";import M from"../../geometry/SpatialReference.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../core/lang.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/Error.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/reader.js";import"../../chunks/jsonMap.js";import"../../chunks/Ellipsoid.js";import"../../chunks/writer.js";import"../../geometry/Multipoint.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/vec4.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/WatchUpdatingTracking.js";import"../../chunks/mat4.js";import"../../chunks/pe.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../chunks/PooledRBush.js";import"../../chunks/quickselect.js";import"../../chunks/uuid.js";import"../../chunks/resourceExtension.js";import"../../chunks/persistableUrlUtils.js";import"../../core/Identifiable.js";import"./ControlPointsGeoreference.js";import"../../chunks/perspectiveUtils.js";import"../../chunks/mat3.js";import"../../chunks/mat3f64.js";import"../../chunks/vec2.js";import"../../chunks/screenUtils.js";import"../../chunks/vec2f64.js";import"../../chunks/GeoreferenceBase.js";import"../../core/Clonable.js";import"./CornersGeoreference.js";import"./ExtentAndRotationGeoreference.js";import"../../chunks/normalizeUtilsSync.js";import"../../chunks/normalizeUtilsCommon.js";const b={key:"type",defaultKeyValue:"image",base:R,typeMap:{image:E,video:w}},S=s.ofType(b);let v=class extends(i.LoadableMixin(p(o(r.EventedAccessor)))){constructor(e){super(e),this._index=new _,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=e=>{for(const s of e.removed){const e=this._elementViewsMap.get(s);this._elementViewsMap.delete(s),this._index.delete(e),this.handles.remove(e),e.destroy(),this.notifyChange("fullExtent")}const{spatialReference:s}=this;for(const t of e.added){if(this._elementViewsMap.get(t))continue;const e=new U({spatialReference:s,element:t});this._elementViewsMap.set(t,e);const r=h((()=>e.coords),(()=>this._updateIndexForElement(e,!1)));this._updateIndexForElement(e,!0),this.handles.add(r,e)}this._elementsIndexes.clear(),this.elements.forEach(((e,s)=>this._elementsIndexes.set(e,s))),this.emit("refresh")},this.elements=new S}async load(e){if(l(e),!this.spatialReference){const e=this.elements.find((e=>m(e.georeference)&&m(e.georeference.coords)));this._set("spatialReference",e?a(a(e.georeference).coords).spatialReference:M.WGS84)}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.handles.add(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(e){this._set("elements",t(e,this._get("elements"),S))}get fullExtent(){if("not-loaded"===this.loadStatus)return null;const e=this._index.fullBounds;return c(e)?null:new j({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){"not-loaded"===this.loadStatus?this._set("spatialReference",e):n.getLogger(this.declaredClass).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}async queryElements(e,s){await this.load(),await k(e.spatialReference,this.spatialReference,null,s);const t=x(e.spatialReference,this.spatialReference)?e:g(e,this.spatialReference);if(!t)return[];const r=t.normalize(),o=[];for(const e of r)this._index.forEachInBounds(y(e),(({normalizedCoords:s,element:t})=>{m(s)&&f(e,s)&&o.push(t)}));return o.sort(((e,s)=>this._elementsIndexes.get(e)-this._elementsIndexes.get(s))),o}_updateIndexForElement(e,s){const t=e.normalizedBounds,r=this._index.has(e),o=m(t);this._index.delete(e),o&&this._index.set(e,t),this.notifyChange("fullExtent"),s||(r!==o?this.emit("refresh"):this.emit("change",{element:e.element}))}};e([u()],v.prototype,"elements",null),e([u({readOnly:!0})],v.prototype,"fullExtent",null),e([u()],v.prototype,"spatialReference",null),v=e([d("esri.layers.support.LocalMediaElementSource")],v);const C=v;export{C as default};
