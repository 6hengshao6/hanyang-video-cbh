/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{i as t,u as n,l as e,a as s}from"./maybe.js";import i from"../layers/support/PixelBlock.js";import{g as a}from"./pixelRangeUtils.js";import{a as o}from"./stretchRendererUtils.js";const r=1,l=[.299,.587,.114];function f(t,n=256){n=Math.min(n,256);const{size:e,counts:s}=t,i=new Uint8Array(e),a=s.reduce(((t,e)=>t+e/n),0);let o=0,r=0,l=0,f=a;for(let t=0;t<e;t++)if(l+=s[t],!(t<e-1&&l+s[t+1]<f)){for(;o<n-1&&f<l;)o++,f+=a;for(let n=r;n<=t;n++)i[n]=o;r=t+1}for(let t=r;t<e;t++)i[t]=n-1;return i}function u(t){const{minCutOff:n,maxCutOff:e,gamma:s,pixelType:i,rounding:a}=t,o=t.outMin||0,r=t.outMax||255;if(!["u8","u16","s8","s16"].includes(i))return null;const l=n.length;let f,u,m=0;"s8"===i?m=-127:"s16"===i&&(m=-32767);let c=256;["u16","s16"].includes(i)&&(c=65536);const h=[],g=[],p=r-o;for(f=0;f<l;f++)g[f]=e[f]-n[f],h[f]=0===g[f]?0:p/g[f];let d;const M=[];let y,b,C;if(s&&s.length>=l){const t=x(l,s);for(f=0;f<l;f++){for(C=[],u=0;u<c;u++)if(0!==g[f])if(y=u+m,d=(y-n[f])/g[f],b=1,s[f]>1&&(b-=(1/p)**(d*t[f])),y<e[f]&&y>n[f]){const t=b*p*d**(1/s[f])+o;C[u]="floor"===a?Math.floor(t):"round"===a?Math.round(t):t}else y>=e[f]?C[u]=r:C[u]=o;else C[u]=o;M[f]=C}}else for(f=0;f<l;f++){for(C=[],u=0;u<c;u++)if(y=u+m,y<=n[f])C[u]=o;else if(y>=e[f])C[u]=r;else{const t=(y-n[f])*h[f]+o;C[u]="floor"===a?Math.floor(t):"round"===a?Math.round(t):t}M[f]=C}if(null!=t.contrastOffset){const n=function(t,n){const e=Math.min(Math.max(t,-100),100),s=Math.min(Math.max(n??0,-100),100);let i=0,a=0;const o=new Uint8Array(256);for(i=0;i<256;i++)e>0&&e<100?a=(200*i-25500+510*s)/(2*(100-e))+128:e<=0&&e>-100?a=(200*i-25500+510*s)*(100+e)/2e4+128:100===e?(a=200*i-25500+256*(100-e)+510*s,a=a>0?255:0):-100===e&&(a=128),o[i]=a>255?255:a<0?0:a;return o}(t.contrastOffset,t.brightnessOffset);for(f=0;f<l;f++)for(C=M[f],u=0;u<c;u++)C[u]=n[C[u]]}return{lut:M,offset:m}}function m(t,n,e){const s=[];for(let i=0;i<n.length;i++){let a=0,o=0,r=0;"min"in n[i]?({min:a,max:o,avg:r}=n[i]):[a,o,r]=n[i];let f=r??0;"u8"!==t&&(f=255*(f-a)/(o-a)),e&&(f*=l[i]),s.push(c(f))}return s}function c(t){if(t<=0||t>=255)return r;let n=0;150!==t&&(n=t<=150?45*Math.cos(.01047*t):17*Math.sin(.021*t));const e=t+n,s=Math.log(t/255),i=Math.log(e/255);if(0===i)return r;const a=s/i;return isNaN(a)?r:Math.min(9.9,Math.max(.01,a))}function h(t){if(s(t)||!t.pixels?.length)return null;const{pixels:n,mask:e,pixelType:i}=t,a=t.width*t.height,o=n.length;let r,l,f,u,m;const c=[],h=[];let g,p,x,d,M,y,b,C,O,v;const k=256;for(u=0;u<o;u++){if(g=new Uint32Array(k),x=n[u],"u8"===i)if(r=-.5,l=255.5,e)for(m=0;m<a;m++)e[m]&&g[x[m]]++;else for(m=0;m<a;m++)g[x[m]]++;else{let n=!1;t.statistics||(t.updateStatistics(),n=!0);const s=t.statistics;if(r=s[u].minValue,l=s[u].maxValue,f=(l-r)/k,0===f){!s||t.validPixelCount||n||t.updateStatistics();const e=(t.validPixelCount||t.width*t.height)/k;for(let t=0;t<k;t++)g[t]=Math.round(e*(t+1))-Math.round(e*t)}else{for(p=new Uint32Array(257),m=0;m<a;m++)e&&!e[m]||p[Math.floor((x[m]-r)/f)]++;for(m=0;m<255;m++)g[m]=p[m];g[255]=p[255]+p[256]}}for(c.push({min:r,max:l,size:k,counts:g}),d=0,M=0,C=0,m=0;m<k;m++)d+=g[m],M+=m*g[m];for(O=M/d,m=0;m<k;m++)C+=g[m]*(m-O)**2;v=Math.sqrt(C/(d-1)),f=(l-r)/k,y=(O+.5)*f+r,b=v*f,h.push({min:r,max:l,avg:y,stddev:b})}return{statistics:h,histograms:c}}function g(t){const n=[];for(let e=0;e<t.length;e++){const{min:s,max:i,size:a,counts:o}=t[e];let r=0,l=0;for(let t=0;t<a;t++)r+=o[t],l+=t*o[t];const f=l/r;let u=0;for(let t=0;t<a;t++)u+=o[t]*(t-f)**2;const m=(i-s)/a,c=(f+.5)*m+s,h=Math.sqrt(u/(r-1))*m;n.push({min:s,max:i,avg:c,stddev:h})}return n}function p(s,i){const{pixelBlock:r,bandIds:l,returnHistogramLut:u,rasterInfo:m}=i;let c=null,g=null,p=s.stretchType;if("number"==typeof p&&(p=o[p]),s.dra)if("minMax"===p&&t(r)&&r.statistics)c=r.statistics.map((t=>[t.minValue,t.maxValue,0,0]));else{const n=h(r);c=t(n)?n.statistics:null,g=t(n)?n.histograms:null}else c=s.statistics?.length>0?s.statistics:n(m.statistics),g=s.histograms||n(m.histograms);"percentClip"!==p&&"histogramEqualization"!==p||g?.length||(p="minMax");const x=c?.length||g?.length||m.bandCount,d=[],M=[];let y,b,C,O,v,k,w,z,A;c&&!Array.isArray(c[0])&&(c=c.map((t=>[t.min,t.max,t.avg,t.stddev])));const[U,P]=a(m.pixelType);if(!c?.length){for(c=[],z=0;z<x;z++)c.push([U,P,1,1]);"standardDeviation"===p&&(p="minMax")}switch(p){case"none":for(z=0;z<x;z++)d[z]=U,M[z]=P;break;case"minMax":for(z=0;z<x;z++)d[z]=c[z][0],M[z]=c[z][1];break;case"standardDeviation":for(z=0;z<x;z++)d[z]=c[z][2]-s.numberOfStandardDeviations*c[z][3],M[z]=c[z][2]+s.numberOfStandardDeviations*c[z][3],d[z]<c[z][0]&&(d[z]=c[z][0]),M[z]>c[z][1]&&(M[z]=c[z][1]);break;case"histogramEqualization":for(e(g),z=0;z<x;z++)d[z]=g[z].min,M[z]=g[z].max;break;case"percentClip":for(e(g),z=0;z<g.length;z++){for(y=g[z],v=new Uint32Array(y.size),O=[...y.counts],O.length>=20&&(O[0]=O[1]=O[2]=O[O.length-1]=O[O.length-2]=0),C=0,b=(y.max-y.min)/y.size,w=-.5===y.min&&1===b?.5:0,A=0;A<y.size;A++)C+=O[A],v[A]=C;for(k=(s.minPercent||0)*C/100,d[z]=y.min+w,A=0;A<y.size;A++)if(v[A]>k){d[z]=y.min+b*(A+w);break}for(k=(1-(s.maxPercent||0)/100)*C,M[z]=y.max+w,A=y.size-2;A>=0;A--)if(v[A]<k){M[z]=y.min+b*(A+2-w);break}if(M[z]<d[z]){const t=d[z];d[z]=M[z],M[z]=t}}break;default:for(z=0;z<x;z++)d[z]=c[z][0],M[z]=c[z][1]}let T,q,S;return"histogramEqualization"===p?(e(g),q=g[0].size||256,T=0,u&&(S=g.map((t=>f(t))))):(q=s.max||255,T=s.min||0),function(t,n){if(null==n||0===n.length)return t;const e=Math.max.apply(null,n),{minCutOff:s,maxCutOff:i,outMin:a,outMax:o,histogramLut:r}=t;return s.length===n.length||s.length<=e?t:{minCutOff:n.map((t=>s[t])),maxCutOff:n.map((t=>i[t])),histogramLut:r?n.map((t=>r[t])):null,outMin:a,outMax:o}}({minCutOff:d,maxCutOff:M,outMax:q,outMin:T,histogramLut:S},l)}function x(t,n){const e=new Float32Array(t);for(let s=0;s<t;s++)n[s]>1?n[s]>2?e[s]=6.5+(n[s]-2)**2.5:e[s]=6.5+100*(2-n[s])**4:e[s]=1;return e}function d(t,n){if(s(t)||!t.pixels?.length)return t;const{mask:e,width:a,height:o,pixels:r}=t,{minCutOff:l,maxCutOff:f,gamma:u}=n,m=n.outMin||0,c=n.outMax||255,h=a*o,g=n.outputPixelType||"u8",p=t.pixels.map((()=>i.createEmptyBand(g,h))),d=p.length;let M,y,b,C,O;const v=c-m,k=[],w=[];for(M=0;M<d;M++)w[M]=f[M]-l[M],k[M]=0===w[M]?0:v/w[M];const z=g.startsWith("u")||g.startsWith("s"),A=u&&u.length>=d,U=!!n.isRenderer;if(A){const t=x(d,u);for(y=0;y<h;y++)if(null==e||e[y])for(M=0;M<d;M++)if(0!==w[M])if(b=r[M][y],O=(b-l[M])/w[M],C=1,u[M]>1&&(C-=(1/v)**(O*t[M])),b<f[M]&&b>l[M]){const t=C*v*O**(1/u[M])+m;p[M][y]=U?Math.floor(t):z?Math.round(t):t}else b>=f[M]?p[M][y]=c:p[M][y]=m;else p[M][y]=m}else for(y=0;y<h;y++)if(null==e||e[y])for(M=0;M<d;M++)if(b=r[M][y],b<f[M]&&b>l[M]){const t=(b-l[M])*k[M]+m;p[M][y]=U?Math.floor(t):z?Math.round(t):t}else b>=f[M]?p[M][y]=c:p[M][y]=m;const P=new i({width:a,height:o,mask:e,pixels:p,pixelType:g});return P.updateStatistics(),P}export{m as a,f as b,u as c,g as d,h as e,x as f,p as g,d as s};