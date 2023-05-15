// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["../../chunks/_rollupPluginBabelHelpers","../../core/promiseUtils"],function(h,f){return function(){function g(b,c=0,d=b.lods.length-1){this.tileInfo=b;this.minLOD=c;this.maxLOD=d}var e=g.prototype;e.getAvailability=function(b,c,d){const a=this.tileInfo?.lodAt(b);return!a||b<this.minLOD||b>this.maxLOD?"unavailable":a.cols&&a.rows?d>=a.cols[0]&&d<=a.cols[1]&&c>=a.rows[0]&&c<=a.rows[1]?"available":"unavailable":"available"};e.fetchAvailability=async function(b,c,d,a){await f.waitTick(a);return this.getAvailability(b,
c,d)};e.fetchAvailabilityUpsample=async function(b,c,d,a,k){await f.waitTick(k);a.level=b;a.row=c;a.col=d;b=this.tileInfo;for(b.updateTileInfo(a);;)if(c=this.getAvailability(a.level,a.row,a.col),"unavailable"===c){if(!b.upsampleTile(a))return"unavailable"}else return c};return h._createClass(g)}()});