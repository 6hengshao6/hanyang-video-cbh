// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../Graphic","./GeometryHandler"],function(h,n,p,q){const r=[227,27,21,.6],t=[21,244,21,.6],l=[{color:[255,0,0,.6],haloOpacity:.9,fillOpacity:.2,hex:"#ff0000"},{color:[255,0,255,.6],haloOpacity:.9,fillOpacity:.2,hex:"#ff00ff"},{color:[217,188,255,.6],haloOpacity:.9,fillOpacity:.2,hex:"#D9BCFF"},{color:[0,255,0,.6],haloOpacity:.9,fillOpacity:.2,hex:"#00ff00"},{color:[255,255,0,.6],haloOpacity:.9,fillOpacity:.2,hex:"#ffff00"},{color:[0,
0,255,.6],haloOpacity:.9,fillOpacity:.2,hex:"#0000ff"}];let u=function(){function m(){this._geometryHandler=new q.GeometryHandler}var k=m.prototype;k.getFlagGraphic=function(a,b,g,c){b="starting-point"===b?t:r;if("polygon"===a.type){const d=a;d.centroid&&(a=d.centroid)}return c?this.makeGraphic(a,b,g?.attributes,null,c):this.makeGraphic(a,b,g?.attributes)};k.getHighlightColor=function(a){return l[a]};k.makeGraphic=function(a,b,g,c,d){let e,f=a;switch(a.type){case "multipoint":e={type:"simple-marker",
color:b,size:12,outline:{color:b,width:0}};c&&(f=a);break;case "point":e=d?d:{type:"simple-marker",color:b,size:12,outline:{color:b,width:0}};c&&(f=a);break;case "polyline":e={type:"simple-line",color:b,width:12};c&&(f=a);break;case "polygon":e={type:"simple-fill",color:b,outline:{color:b,width:12}},c&&(f=a)}return new p({geometry:f,symbol:e,attributes:g??null})};return n._createClass(m)}();h.GraphicHandler=u;h.HIGHLIGHT_COLOR=l;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});