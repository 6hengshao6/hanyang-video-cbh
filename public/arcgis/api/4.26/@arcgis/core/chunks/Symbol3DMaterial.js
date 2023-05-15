/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as o}from"./tslib.es6.js";import{JSONSupport as r}from"../core/JSONSupport.js";import{i as s}from"./maybe.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./typedArrayUtil.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import{c as p}from"./materialUtils.js";var c;let l=c=class extends r{constructor(o){super(o),this.color=null}clone(){const o={color:s(this.color)?this.color.clone():null};return new c(o)}};o([t(p)],l.prototype,"color",void 0),l=c=o([e("esri.symbols.support.Symbol3DMaterial")],l);export{l as S};
