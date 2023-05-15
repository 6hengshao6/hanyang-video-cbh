/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{JSONSupport as e}from"../core/JSONSupport.js";import{clone as r}from"../core/lang.js";import{W as i,a as s,P as o,i as n,b as a,c as l,d as c,g as p,e as u,f as m}from"../chunks/unitUtils.js";import{I as d}from"../chunks/ensureType.js";import{property as h}from"../core/accessorSupport/decorators/property.js";import{subclass as k}from"../core/accessorSupport/decorators/subclass.js";import{w as y}from"../chunks/writer.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/typedArrayUtil.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/jsonMap.js";import"../chunks/Ellipsoid.js";var w;let g=w=class extends e{static fromJSON(t){if(!t)return null;if(t.wkid){if(102100===t.wkid)return w.WebMercator;if(4326===t.wkid)return w.WGS84}const e=new w;return e.read(t),e}constructor(t){super(t),this.latestWkid=null,this.wkid=null,this.wkt=null,this.vcsWkid=null,this.latestVcsWkid=null,this.imageCoordinateSystem=null}normalizeCtorArgs(t){return t&&"object"==typeof t?t:{["string"==typeof t?"wkt":"wkid"]:t}}get isWGS84(){return n(this)}get isWebMercator(){return a(this)}get isGeographic(){return l(this)}get isWrappable(){return c(this)}get metersPerUnit(){return p(this)}get unit(){return u(this)||(this.isGeographic?"degrees":null)}writeWkt(t,e){this.wkid||(e.wkt=t)}clone(){if(this===w.WGS84)return w.WGS84;if(this===w.WebMercator)return w.WebMercator;const t=new w;return null!=this.wkid?(t.wkid=this.wkid,null!=this.latestWkid&&(t.latestWkid=this.latestWkid),null!=this.vcsWkid&&(t.vcsWkid=this.vcsWkid),null!=this.latestVcsWkid&&(t.latestVcsWkid=this.latestVcsWkid)):null!=this.wkt&&(t.wkt=this.wkt),this.imageCoordinateSystem&&(t.imageCoordinateSystem=r(this.imageCoordinateSystem)),t}equals(t){if(null==t)return!1;if(this.imageCoordinateSystem||t.imageCoordinateSystem){if(null==this.imageCoordinateSystem||null==t.imageCoordinateSystem)return!1;const{id:e,referenceServiceName:r}=t.imageCoordinateSystem,{geodataXform:i}=t.imageCoordinateSystem,s=this.imageCoordinateSystem;return null==e||i?JSON.stringify(s)===JSON.stringify(t.imageCoordinateSystem):r?s.id===e&&s.referenceServiceName===r:s.id===e}return m(this,t)}toJSON(t){return this.write(void 0,t)}};g.GCS_NAD_1927=null,g.WGS84=null,g.WebMercator=null,g.PlateCarree=null,t([h({readOnly:!0})],g.prototype,"isWGS84",null),t([h({readOnly:!0})],g.prototype,"isWebMercator",null),t([h({readOnly:!0})],g.prototype,"isGeographic",null),t([h({readOnly:!0})],g.prototype,"isWrappable",null),t([h({type:d,json:{write:!0}})],g.prototype,"latestWkid",void 0),t([h({readOnly:!0})],g.prototype,"metersPerUnit",null),t([h({readOnly:!0})],g.prototype,"unit",null),t([h({type:d,json:{write:!0,origins:{"web-scene":{write:{overridePolicy(){return{isRequired:null==this.wkt}}}}}}})],g.prototype,"wkid",void 0),t([h({type:String,json:{origins:{"web-scene":{write:{overridePolicy(){return{isRequired:null==this.wkid}}}}}}})],g.prototype,"wkt",void 0),t([y("wkt"),y("web-scene","wkt")],g.prototype,"writeWkt",null),t([h({type:d,json:{write:!0}})],g.prototype,"vcsWkid",void 0),t([h({type:d,json:{write:!0}})],g.prototype,"latestVcsWkid",void 0),t([h()],g.prototype,"imageCoordinateSystem",void 0),g=w=t([k("esri.geometry.SpatialReference")],g),g.prototype.toJSON.isDefaultToJSON=!0,g.GCS_NAD_1927=new g({wkid:4267,wkt:'GEOGCS["GCS_North_American_1927",DATUM["D_North_American_1927",SPHEROID["Clarke_1866",6378206.4,294.9786982]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]]'}),g.WGS84=new g(i),g.WebMercator=new g(s),g.PlateCarree=new g(o),Object.freeze&&(Object.freeze(g.GCS_NAD_1927),Object.freeze(g.WGS84),Object.freeze(g.WebMercator));const j=g;export{j as default};