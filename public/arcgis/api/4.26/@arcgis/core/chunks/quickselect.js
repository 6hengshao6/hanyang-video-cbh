/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var t,r,o={},n={get exports(){return o},set exports(t){o=t}};t=n,void 0!==(r=function(){function t(o,n,a,f,e){for(;f>a;){if(f-a>600){var h=f-a+1,i=n-a+1,u=Math.log(h),s=.5*Math.exp(2*u/3),M=.5*Math.sqrt(u*s*(h-s)/h)*(i-h/2<0?-1:1);t(o,n,Math.max(a,Math.floor(n-i*s/h+M)),Math.min(f,Math.floor(n+(h-i)*s/h+M)),e)}var c=o[n],x=a,p=f;for(r(o,a,n),e(o[f],c)>0&&r(o,a,f);x<p;){for(r(o,x,p),x++,p--;e(o[x],c)<0;)x++;for(;e(o[p],c)>0;)p--}0===e(o[a],c)?r(o,a,p):r(o,++p,f),p<=n&&(a=p+1),n<=p&&(f=p-1)}}function r(t,r,o){var n=t[r];t[r]=t[o],t[o]=n}function o(t,r){return t<r?-1:t>r?1:0}return function(r,n,a,f,e){t(r,n,a||0,f||r.length-1,e||o)}}())&&(t.exports=r);const a=o;export{a as q};
