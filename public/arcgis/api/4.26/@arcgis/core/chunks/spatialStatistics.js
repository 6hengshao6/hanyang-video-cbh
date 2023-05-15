/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{g as n,a as t}from"../geometry/Polygon.js";function e(t,e=!1){let o=[];if(e){for(const n of t)if(n.geometry){const t=n.geometry;o.push.apply(o,t.points)}}else o=t.map((n=>n.geometry));const l=[],s=[];let i=1/0,c=-1/0,r=0,a=0,f=0,u=0;for(const t of o){if(!t)continue;e?(l[0]=t[0],l[1]=t[1]):(l[0]=t.x,l[1]=t.y);let g=1/0,m=-1/0;for(const r of o){if(r===t)continue;if(!r)continue;e?(s[0]=r[0],s[1]=r[1]):(s[0]=r.x,s[1]=r.y);const o=n(l,s);o>0&&(o<g&&(g=o),o<i&&(i=o),o>m&&(m=o),o>c&&(c=o))}g!==1/0&&(++f,r+=g),m!==-1/0&&(++u,a+=m)}return{minDistance:i!==1/0?i:null,maxDistance:c!==-1/0?c:null,avgMinDistance:f?r/f:null,avgMaxDistance:u?a/u:null}}function o(n){const{features:o}=n;let l=null;switch(n.geometryType){case"point":l=e(o);break;case"multipoint":l=e(o,!0);break;case"polyline":l=function(n){let e=0,o=0,l=1/0,s=-1/0;for(const i of n){const n=i.geometry;if(n){let i=0;for(const e of n.paths){const n=t(e);n>0&&(i+=n)}i>0&&(++e,o+=i,i<l&&(l=i),i>s&&(s=i))}}return{minLength:l!==1/0?l:null,maxLength:s!==-1/0?s:null,avgLength:e?o/e:null}}(o);break;case"polygon":l=function(n){let t=0,e=0,o=1/0,l=-1/0;for(const s of n){const n=s.geometry;if(n){const s=n.extent;if(s){const n=Math.sqrt(s.width*s.height);n>0&&(++t,e+=n,n<o&&(o=n),n>l&&(l=n))}}}return{minSize:o!==1/0?o:null,maxSize:l!==-1/0?l:null,avgSize:t?e/t:null}}(o)}return Promise.resolve(l)}export{o as s};
