/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{u as e}from"./maybe.js";import{makeAbsolute as r,makeRelative as t,isAbsolute as o,normalize as s,isDataProtocol as l,changeDomain as n,hasSameOrigin as a,splitPathExtension as u,getAppUrl as i}from"../core/urlUtils.js";function c(e,o){const s=o&&o.url&&o.url.path;if(e&&s&&(e=r(e,s,{preserveProtocolRelative:!0}),o.portalItem&&o.readResourcePaths)){const r=t(e,o.portalItem.itemUrl);null!=r&&v.test(r)&&o.readResourcePaths.push(o.portalItem.resourceFromPath(r).path)}return I(e,o&&o.portal)}function m(e,n,a=R.YES){if(null==e)return e;!o(e)&&n&&n.blockedRelativeUrls&&n.blockedRelativeUrls.push(e);let u=r(e);if(n){const r=n.verifyItemRelativeUrls&&n.verifyItemRelativeUrls.rootPath||n.url&&n.url.path;if(r){const o=I(r,n.portal),s=I(u,n.portal);u=t(s,o,o),null!=u&&u!==s&&u!==e&&n.verifyItemRelativeUrls&&n.verifyItemRelativeUrls.writtenUrls.push(u)}}return u=y(u,n?.portal),o(u)&&(u=s(u)),n?.resources&&n?.portalItem&&!o(u)&&!l(u)&&a===R.YES&&n.resources.toKeep.push({resource:n.portalItem.resourceFromPath(u),compress:!1}),u}function p(e,r,t){return c(e,t)}function f(e,r,t,o){const s=m(e,o);void 0!==s&&(r[t]=s)}const h=/\/items\/([^\/]+)\/resources\/(.*)/,v=/^\.\/resources\//;function U(e){const r=e?.match(h)??null;return r?.[1]??null}function d(r){const t=r?.match(h)??null;if(null==t)return null;const o=t[2],s=o.lastIndexOf("/");if(-1===s){const{path:r,extension:t}=u(o);return{prefix:null,filename:r,extension:e(t)}}const{path:l,extension:n}=u(o.slice(s+1));return{prefix:o.slice(0,s),filename:l,extension:e(n)}}function y(e,r){return r&&!r.isPortal&&r.urlKey&&r.customBaseUrl?n(e,`${r.urlKey}.${r.customBaseUrl}`,r.portalHostname):e}function I(e,r){if(!r||r.isPortal||!r.urlKey||!r.customBaseUrl)return e;const t=`${r.urlKey}.${r.customBaseUrl}`,o=i();return a(o,`${o.scheme}://${t}`)?n(e,r.portalHostname,t):n(e,t,r.portalHostname)}var R;!function(e){e[e.YES=0]="YES",e[e.NO=1]="NO"}(R||(R={}));const x=Object.freeze(Object.defineProperty({__proto__:null,get MarkKeep(){return R},ensureMainOnlineDomain:y,fromJSON:c,itemIdFromResourceUrl:U,prefixAndFilenameFromResourceUrl:d,read:p,toJSON:m,write:f},Symbol.toStringTag,{value:"Module"}));export{R as M,x as a,y as e,c as f,U as i,d as p,p as r,m as t,f as w};