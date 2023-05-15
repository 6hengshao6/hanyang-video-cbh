/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import"./typedArrayUtil.js";import{a as s}from"./maybe.js";import o from"../symbols/SimpleFillSymbol.js";import r from"../symbols/SimpleLineSymbol.js";import m from"../symbols/SimpleMarkerSymbol.js";import a from"../symbols/TextSymbol.js";import{d as e,a as t,b as l,c as i,e as n,f,g as p}from"./defaultsJSON.js";const S=m.fromJSON(e),y=r.fromJSON(t),c=o.fromJSON(l),u=a.fromJSON(i);function b(o){if(s(o))return null;switch(o.type){case"mesh":return null;case"point":case"multipoint":return S;case"polyline":return y;case"polygon":case"extent":return c}return null}const J=m.fromJSON(n),N=r.fromJSON(f),O=o.fromJSON(p);export{c as a,y as b,S as c,u as d,N as e,O as f,b as g,J as h};
