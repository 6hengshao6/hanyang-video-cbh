// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/maybe"],function(c,d){c.getDrawHelpMessage=function(b,a){switch(b){case "point":case "multipoint":return"point";case "polyline":return 2>(d.isSome(a)&&"polyline"===a.type&&a.paths.length?a.paths[0].length:0)?"polylineZeroVertices":"polylineOneVertex";case "polygon":return b=d.isSome(a)&&"polygon"===a.type&&a.rings.length?a.rings[0].length:0,3>b?"polylineZeroVertices":4>b?"polygonOneVertex":"polygonTwoVertices"}};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});