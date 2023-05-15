// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","./maybe","./unitUtils"],function(c,e,d){function f(a,b){return{type:d.unitType(b),value:a,unit:b}}function g(a,b){return{type:d.unitType(b),value:a,unit:b}}function h(a,b){return{type:d.unitType(b),value:a,unit:b}}function k(a,b,m="arithmetic"){return{type:d.unitType(b),value:a,unit:b,rotationType:m}}function l(a,b){return f(d.convertUnit(a.value,a.unit,b),b)}const n=g(0,"meters"),p=h(0,"square-meters"),q=k(0,"radians");c.createAngle=k;c.createArea=h;c.createLength=g;c.createQuantity=
f;c.createVolume=function(a,b){return{type:d.unitType(b),value:a,unit:b}};c.isBaseUnit=function(a){return d.isBaseUnit(a.unit)};c.max=function(a,b){return e.isNone(a)?b:e.isNone(b)?a:a.value>d.convertUnit(b.value,b.unit,a.unit)?a:b};c.min=function(a,b){return e.isNone(a)?b:e.isNone(b)?a:a.value<d.convertUnit(b.value,b.unit,a.unit)?a:b};c.scale=function(a,b){return e.isNone(a)?null:{...a,value:a.value*b}};c.toBaseUnit=function(a){return l(a,d.baseUnitForUnit(a.unit))};c.toUnit=l;c.zeroMeters=n;c.zeroRadians=
q;c.zeroSquareMeters=p;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});