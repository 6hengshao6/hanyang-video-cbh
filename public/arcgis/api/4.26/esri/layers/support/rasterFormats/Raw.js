// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["../../../chunks/_rollupPluginBabelHelpers"],function(v){const p=n=>{let a=1;switch(n){case Uint8Array:case Int8Array:a=1;break;case Uint16Array:case Int16Array:a=2;break;case Uint32Array:case Int32Array:case Float32Array:a=4;break;case Float64Array:a=8}return a};return function(){function n(){}n.decode=function(a,b){var f=b.pixelType;const q=[],c=b.width*b.height;var h=Math.floor(a.byteLength/(b.width*b.height*p(b.pixelType)));const {bandIds:k,format:u}=b;b=k&&k.length||Math.floor(a.byteLength/
(b.width*b.height*p(b.pixelType)));var g=a.byteLength-a.byteLength%(c*p(f)),d=new f(a,0,c*h);let e,l,r,m,t=null;if("bip"===u)for(e=0;e<b;e++){r=new f(c);m=k?k[e]:e;for(l=0;l<c;l++)r[l]=d[l*h+m];q.push(r)}else if("bsq"===u)for(e=0;e<b;e++)m=k?k[e]:e,q.push(d.subarray(m*c,(m+1)*c));if(g<a.byteLength-1)if(a=a.slice(g),8*a.byteLength<c)t=null;else{a=new Uint8Array(a,0,Math.ceil(c/8));f=new Uint8Array(c);for(g=d=g=b=h=0;g<a.length-1;g++)for(b=a[g],d=7;0<=d;d--)f[h++]=b>>d&1;for(d=7;h<c-1;)b=a[a.length-
1],f[h++]=b>>d&1,d--;t=f}return{pixels:q,mask:t}};return v._createClass(n)}()});