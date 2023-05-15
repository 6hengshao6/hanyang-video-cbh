/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as o}from"./tslib.es6.js";import r from"../core/Accessor.js";import{a as e,u as t,i as s}from"./maybe.js";import{property as n}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./typedArrayUtil.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import i from"../geometry/Polygon.js";import{projectOrLoad as m}from"../geometry/projection.js";import{h as l}from"./aaBoundingRect.js";import{n as a}from"./normalizeUtilsSync.js";let c=class extends r{constructor(o){super(o)}get bounds(){const o=this.coords;return e(o)||e(o.extent)?null:l(o.extent)}get coords(){const o=t(this.element.georeference)?.coords;return m(o,this.spatialReference).geometry}get normalizedCoords(){return i.fromJSON(a(this.coords))}get normalizedBounds(){const o=s(this.normalizedCoords)?this.normalizedCoords.extent:null;return s(o)?l(o):null}};o([n()],c.prototype,"spatialReference",void 0),o([n()],c.prototype,"element",void 0),o([n()],c.prototype,"bounds",null),o([n()],c.prototype,"coords",null),o([n()],c.prototype,"normalizedCoords",null),o([n()],c.prototype,"normalizedBounds",null),c=o([p("esri.layers.support.MediaElementView")],c);export{c as M};
