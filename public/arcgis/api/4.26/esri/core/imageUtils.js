// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports"],function(f){function g(c,a,b){b||(d||(d=document.createElement("canvas"),d.width=1,d.height=1),b=d);return b.getContext("2d").createImageData(c,a)}let d=null,e=!0;f.createEmptyImageData=function(c,a,b){if(!c||!a)throw Error("Cannot construct image data without dimensions");if(e)try{return new ImageData(c,a)}catch(h){e=!1}return g(c,a,b)};f.wrapImageData=function(c,a,b,h){if(!a||!b)throw Error("Cannot construct image data without dimensions");if(e)try{return new ImageData(c,a,b)}catch(k){e=
!1}a=g(a,b,h);a.data.set(c,0);return a};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});