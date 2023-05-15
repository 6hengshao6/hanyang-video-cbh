// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../core/maybe","../core/urlUtils"],function(f,p,e){function k(b,a){var d=a&&a.url&&a.url.path;b&&d&&(b=e.makeAbsolute(b,d,{preserveProtocolRelative:!0}),a.portalItem&&a.readResourcePaths&&(d=e.makeRelative(b,a.portalItem.itemUrl),null!=d&&w.test(d)&&a.readResourcePaths.push(a.portalItem.resourceFromPath(d).path)));return l(b,a&&a.portal)}function m(b,a,d=f.MarkKeep.YES){if(null==b)return b;!e.isAbsolute(b)&&a&&a.blockedRelativeUrls&&a.blockedRelativeUrls.push(b);let c=e.makeAbsolute(b);
if(a){var g=a.verifyItemRelativeUrls&&a.verifyItemRelativeUrls.rootPath||a.url&&a.url.path;if(g){g=l(g,a.portal);const h=l(c,a.portal);c=e.makeRelative(h,g,g);null!=c&&c!==h&&c!==b&&a.verifyItemRelativeUrls&&a.verifyItemRelativeUrls.writtenUrls.push(c)}}c=n(c,a?.portal);e.isAbsolute(c)&&(c=e.normalize(c));a?.resources&&a?.portalItem&&!e.isAbsolute(c)&&!e.isDataProtocol(c)&&d===f.MarkKeep.YES&&a.resources.toKeep.push({resource:a.portalItem.resourceFromPath(c),compress:!1});return c}function q(b,a,
d){return k(b,d)}function r(b,a,d,c){b=m(b,c);void 0!==b&&(a[d]=b)}function t(b){return(b?.match(u)??null)?.[1]??null}function v(b){b=b?.match(u)??null;if(null==b)return null;b=b[2];const a=b.lastIndexOf("/");if(-1===a){const {path:g,extension:h}=e.splitPathExtension(b);return{prefix:null,filename:g,extension:p.unwrap(h)}}const {path:d,extension:c}=e.splitPathExtension(b.slice(a+1));return{prefix:b.slice(0,a),filename:d,extension:p.unwrap(c)}}function n(b,a){return a&&!a.isPortal&&a.urlKey&&a.customBaseUrl?
e.changeDomain(b,`${a.urlKey}.${a.customBaseUrl}`,a.portalHostname):b}function l(b,a){if(!a||a.isPortal||!a.urlKey||!a.customBaseUrl)return b;const d=`${a.urlKey}.${a.customBaseUrl}`,c=e.getAppUrl();return e.hasSameOrigin(c,`${c.scheme}://${d}`)?e.changeDomain(b,a.portalHostname,d):e.changeDomain(b,d,a.portalHostname)}const u=/\/items\/([^\/]+)\/resources\/(.*)/,w=/^\.\/resources\//;f.MarkKeep=void 0;(function(b){b[b.YES=0]="YES";b[b.NO=1]="NO"})(f.MarkKeep||(f.MarkKeep={}));const x=Object.freeze(Object.defineProperty({__proto__:null,
get MarkKeep(){return f.MarkKeep},ensureMainOnlineDomain:n,fromJSON:k,itemIdFromResourceUrl:t,prefixAndFilenameFromResourceUrl:v,read:q,toJSON:m,write:r},Symbol.toStringTag,{value:"Module"}));f.ensureMainOnlineDomain=n;f.fromJSON=k;f.itemIdFromResourceUrl=t;f.persistableUrlUtils=x;f.prefixAndFilenameFromResourceUrl=v;f.read=q;f.toJSON=m;f.write=r});