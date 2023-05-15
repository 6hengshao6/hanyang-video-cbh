// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports"],function(c){c.collectRing=function(a){const b=[];for(;a.nextPoint();)b.push([a.x,a.y]);return b};c.collectRings=function(a){const b=[];for(a.reset();a.nextPath();){const d=[];for(;a.nextPoint();)d.push([a.x,a.y]);b.push(d)}return b};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});