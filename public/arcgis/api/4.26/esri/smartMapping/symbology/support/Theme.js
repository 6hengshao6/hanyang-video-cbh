// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["../../../chunks/_rollupPluginBabelHelpers","../../../core/lang","../../../core/maybe","../../support/utils"],function(n,p,k,g){return function(){function l(a){const {name:d,label:c,description:b,schemes:e}=a;this.name=d;this.label=c;this.description=b;this.schemes=e;a=a.basemapGroups||g.defaultBasemapGroups;let f=[];if(a)for(const h in a)f=f.concat(a[h]);this.supportedBasemaps=f;this.basemapGroups=a}var m=l.prototype;m.isBasemapSupported=function(a){return(a=g.getBasemapId(a,this.supportedBasemaps))&&
this.supportedBasemaps.includes(a)?!0:!1};m.getRawSchemes=function(a){var d=a.basemap,c=a.basemapTheme,b=null;let e=null;d&&(b=g.getBasemapId(d,this.supportedBasemaps,!1))&&(d=g.getBasemapGroup(b),k.isSome(d)&&(e=d));!b&&c&&(b="dark"===c?"dark-gray":"gray",e=c);b||e||(b="gray",e="light");const {basemapId:f,basemapTheme:h}={basemapId:b,basemapTheme:e};c=h;f&&(b=g.getBasemapGroup(f,this.basemapGroups),k.isSome(b)&&(c=b));a=a.geometryType;"multipoint"===a?a="point":"mesh"===a&&(a="polygon");return{schemesInfo:p.clone((this.schemes[a]||
this.schemes["default"])[c]),basemapId:f,basemapTheme:h}};return n._createClass(l)}()});