/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import{Clonable as r}from"../core/Clonable.js";import{L as o}from"./Logger.js";import{a as t}from"./maybe.js";import"./ensureType.js";import"./typedArrayUtil.js";import"../core/Error.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";import{projectOrLoad as a}from"../geometry/projection.js";let p=class extends r{projectOrWarn(e,r){if(t(e))return e;const{geometry:s,pending:p}=a(e,r);return p?null:p||s?s:(o.getLogger(this.declaredClass).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:e,sourceSpatialReference:e.spatialReference,targetSpatialReference:r}),null)}};p=e([s("esri.layers.support.GeoreferenceBase")],p);const c=p;export{c as G};
