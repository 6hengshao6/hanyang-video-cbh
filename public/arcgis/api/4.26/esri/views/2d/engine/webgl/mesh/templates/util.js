// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){function e(a,c){return Math.sqrt(a*a+c*c)}b.DEFAULT_MAX_ZOOM=100;b.DEFAULT_MIN_ZOOM=0;b.dist=function(a,c){return e(a[0]-c[0],a[1]-c[1])};b.getLimitCosine=function(a=2){return 1/Math.max(a,1)};b.getMinMaxZoom=function(a,c){const d=!!a?.minScale&&c.scaleToZoom(a.minScale)||0;a=!!a?.maxScale&&c.scaleToZoom(a.maxScale)||100;return[d,a]};b.isExtent=function(a){return void 0!==a.xmin&&void 0!==a.ymin&&void 0!==a.xmax&&void 0!==a.ymax};b.isFunction=function(a){return"function"===
typeof a};b.isMultipoint=function(a){return void 0!==a.points};b.isPoint=function(a){return void 0!==a.x&&void 0!==a.y};b.isPolygon=function(a){return void 0!==a.rings};b.isPolyline=function(a){return void 0!==a.paths};b.len=e;b.normalize=function(a){const c=e(a[0],a[1]);a[0]/=c;a[1]/=c};b.sub=function(a,c,d){a[0]=c[0]-d[0];a[1]=c[1]-d[1];return a};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});