// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../ArcadePortal ../Attachment ../Dictionary ../executionError ../../chunks/languageUtils ../featureset/support/shared ./convertdirection ./hash ../../geometry/Extent ../../geometry/Multipoint ../../geometry/Point ../../geometry/Polygon ../../geometry/Polyline ../../geometry/SpatialReference ../../core/urlUtils".split(" "),function(u,t,x,q,l,e,v,y,z,A,B,C,D,E,F,G){function w(f,g){if(!f||!g)return f===g;if(f.x===g.x&&f.y===g.y){if(f.hasZ){if(f.z!==g.z)return!1}else if(g.hasZ)return!1;
if(f.hasM){if(f.m!==g.m)return!1}else if(g.hasM)return!1;return!0}return!1}function n(f,g,c){if(null===f)g.updateUint8Array([0,139]);else if(e.isArray(f)){g.updateUint8Array([61]);if(c.map.has(f))f=c.map.get(f),g.updateIntArray([f^61237541]);else{c.map.set(f,c.currentLength++);for(var d of f)n(d,g,c);c.map.delete(f);c.currentLength--}g.updateUint8Array([199])}else if(e.isImmutableArray(f)){g.updateUint8Array([61]);if(c.map.has(f))f=c.map.get(f),g.updateIntArray([f^61237541]);else{c.map.set(f,c.currentLength++);
for(var b of f.toArray())n(b,g,c);c.map.delete(f);c.currentLength--}g.updateUint8Array([199])}else if(e.isDate(f))g.updateIntArray([f.toNumber()]),g.updateUint8Array([241]);else if(e.isString(f))g.updateIntArray([f.length]),g.updateWithString(f),g.updateUint8Array([41]);else if(e.isBoolean(f))g.updateUint8Array([!0===f?1:0,113]);else if(e.isNumber(f))g.updateFloatArray([f]),g.updateUint8Array([173]);else{if(f instanceof x)throw new l.ArcadeExecutionError(c.context,l.ExecutionErrorCodes.UnsupportedHashType,
c.node);if(f instanceof t)throw new l.ArcadeExecutionError(c.context,l.ExecutionErrorCodes.UnsupportedHashType,c.node);if(f instanceof q){g.updateUint8Array([223]);if(c.map.has(f))f=c.map.get(f),g.updateIntArray([f^61237541]);else{c.map.set(f,c.currentLength++);for(var h of f.keys())g.updateIntArray([h.length]),g.updateWithString(h),g.updateUint8Array([251]),d=f.field(h),n(d,g,c),g.updateUint8Array([239]);c.map.delete(f);c.currentLength--}g.updateUint8Array([73])}else{if(e.isFeature(f))throw new l.ArcadeExecutionError(c.context,
l.ExecutionErrorCodes.UnsupportedHashType,c.node);if(f instanceof C)g.updateIntArray([3833836621]),g.updateIntArray([0]),g.updateFloatArray([f.x]),g.updateIntArray([1]),g.updateFloatArray([f.y]),f.hasZ&&(g.updateIntArray([2]),g.updateFloatArray([f.z])),f.hasM&&(g.updateIntArray([3]),g.updateFloatArray([f.m])),g.updateIntArray([3765347959]),n(f.spatialReference.wkid,g,c);else if(f instanceof D){g.updateIntArray([1266616829]);for(h=0;h<f.rings.length;h++){b=f.rings[h];d=[];var a=null;let k=null;for(let m=
0;m<b.length;m++){const p=f.getPoint(h,m);if(0===m)a=p;else if(w(k,p))continue;k=p;m===b.length-1&&w(a,p)||d.push(p)}g.updateIntArray([1397116793,d.length]);for(b=0;b<d.length;b++)a=d[b],g.updateIntArray([3962308117,b]),n(a,g,c),g.updateIntArray([2716288009]);g.updateIntArray([2278822459])}g.updateIntArray([3878477243]);n(f.spatialReference.wkid,g,c)}else if(f instanceof E){g.updateIntArray([4106883559]);for(h=0;h<f.paths.length;h++){d=f.paths[h];g.updateIntArray([1397116793,d.length]);for(b=0;b<
d.length;b++)g.updateIntArray([3962308117,b]),n(f.getPoint(h,b),g,c),g.updateIntArray([2716288009]);g.updateIntArray([2278822459])}g.updateIntArray([2568784753]);n(f.spatialReference.wkid,g,c)}else if(f instanceof B){g.updateIntArray([588535921,f.points.length]);for(h=0;h<f.points.length;h++)d=f.getPoint(h),g.updateIntArray([h]),n(d,g,c);g.updateIntArray([1700171621]);n(f.spatialReference.wkid,g,c)}else if(f instanceof A)g.updateIntArray([3483648373]),g.updateIntArray([0]),g.updateFloatArray([f.xmax]),
g.updateIntArray([1]),g.updateFloatArray([f.xmin]),g.updateIntArray([2]),g.updateFloatArray([f.ymax]),g.updateIntArray([3]),g.updateFloatArray([f.ymin]),f.hasZ&&(g.updateIntArray([4]),g.updateFloatArray([f.zmax]),g.updateIntArray([5]),g.updateFloatArray([f.zmin])),f.hasM&&(g.updateIntArray([6]),g.updateFloatArray([f.mmax]),g.updateIntArray([7]),g.updateFloatArray([f.mmin])),g.updateIntArray([3622027469]),n(f.spatialReference.wkid,g,c);else if(f instanceof F)g.updateIntArray([14]),void 0!==f.wkid&&
null!==f.wkid&&g.updateIntArray([f.wkid]),f.wkt&&g.updateWithString(f.wkt);else{if(e.isFunctionParameter(f))throw new l.ArcadeExecutionError(c.context,l.ExecutionErrorCodes.UnsupportedHashType,c.node);if(e.isFeatureSet(f))throw new l.ArcadeExecutionError(c.context,l.ExecutionErrorCodes.UnsupportedHashType,c.node);e.isFeatureSetCollection(f);throw new l.ArcadeExecutionError(c.context,l.ExecutionErrorCodes.UnsupportedHashType,c.node);}}}}u.registerFunctions=function(f,g){f.portal=function(c,d){return g(c,
d,(b,h,a)=>{e.pcCheck(a,1,1,c,d);return new t(e.toString(a[0]))})};f.typeof=function(c,d){return g(c,d,(b,h,a)=>{e.pcCheck(a,1,1,c,d);b=e.getType(a[0]);if("Unrecognised Type"===b)throw new l.ArcadeExecutionError(c,l.ExecutionErrorCodes.UnrecognisedType,d);return b})};f.trim=function(c,d){return g(c,d,(b,h,a)=>{e.pcCheck(a,1,1,c,d);return e.toString(a[0]).trim()})};f.tohex=function(c,d){return g(c,d,(b,h,a)=>{e.pcCheck(a,1,1,c,d);b=e.toNumber(a[0]);return isNaN(b)?b:b.toString(16)})};f.upper=function(c,
d){return g(c,d,(b,h,a)=>{e.pcCheck(a,1,1,c,d);return e.toString(a[0]).toUpperCase()})};f.proper=function(c,d){return g(c,d,(b,h,a)=>{e.pcCheck(a,1,2,c,d);b=1;2===a.length&&"firstword"===e.toString(a[1]).toLowerCase()&&(b=2);h=/\s/;a=e.toString(a[0]);let k="",m=!0;for(let p=0;p<a.length;p++){let r=a[p];h.test(r)?1===b&&(m=!0):r.toUpperCase()!==r.toLowerCase()&&(m?(r=r.toUpperCase(),m=!1):r=r.toLowerCase());k+=r}return k})};f.lower=function(c,d){return g(c,d,(b,h,a)=>{e.pcCheck(a,1,1,c,d);return e.toString(a[0]).toLowerCase()})};
f.guid=function(c,d){return g(c,d,(b,h,a)=>{e.pcCheck(a,0,1,c,d);if(0<a.length)switch(e.toString(a[0]).toLowerCase()){case "digits":return e.generateUUID().replace("-","").replace("-","").replace("-","").replace("-","");case "digits-hyphen":return e.generateUUID();case "digits-hyphen-parentheses":return"("+e.generateUUID()+")"}return"{"+e.generateUUID()+"}"})};f.standardizeguid=function(c,d){return g(c,d,(b,h,a)=>{e.pcCheck(a,2,2,c,d);b=e.toString(a[0]);if(""===b||null===b)return"";b=/^(\{|\()?(?<partA>[0-9a-z]{8})(\-?)(?<partB>[0-9a-z]{4})(\-?)(?<partC>[0-9a-z]{4})(\-?)(?<partD>[0-9a-z]{4})(\-?)(?<partE>[0-9a-z]{12})(\}|\))?$/gim.exec(b);
if(!b)return"";b=b.groups;b=b.partA+"-"+b.partB+"-"+b.partC+"-"+b.partD+"-"+b.partE;switch(e.toString(a[1]).toLowerCase()){case "digits":return b.replace("-","").replace("-","").replace("-","").replace("-","");case "digits-hyphen":return b;case "digits-hyphen-parentheses":return"("+b+")"}return"{"+b+"}"})};f.console=function(c,d){return g(c,d,(b,h,a)=>{0!==a.length&&(1===a.length?c.console(e.toString(a[0])):c.console(e.toString(a)));return e.voidOperation})};f.mid=function(c,d){return g(c,d,(b,h,
a)=>{e.pcCheck(a,2,3,c,d);b=e.toNumber(a[1]);if(isNaN(b))return"";0>b&&(b=0);if(2===a.length)return e.toString(a[0]).substr(b);h=e.toNumber(a[2]);if(isNaN(h))return"";0>h&&(h=0);return e.toString(a[0]).substr(b,h)})};f.find=function(c,d){return g(c,d,(b,h,a)=>{e.pcCheck(a,2,3,c,d);b=0;if(2<a.length){b=e.toNumber(e.defaultUndefined(a[2],0));if(isNaN(b))return-1;0>b&&(b=0)}return e.toString(a[1]).indexOf(e.toString(a[0]),b)})};f.left=function(c,d){return g(c,d,(b,h,a)=>{e.pcCheck(a,2,2,c,d);b=e.toNumber(a[1]);
if(isNaN(b))return"";0>b&&(b=0);return e.toString(a[0]).substr(0,b)})};f.right=function(c,d){return g(c,d,(b,h,a)=>{e.pcCheck(a,2,2,c,d);b=e.toNumber(a[1]);if(isNaN(b))return"";0>b&&(b=0);return e.toString(a[0]).substr(-1*b,b)})};f.split=function(c,d){return g(c,d,(b,h,a)=>{e.pcCheck(a,2,4,c,d);b=e.toNumber(e.defaultUndefined(a[2],-1));h=e.toBoolean(e.defaultUndefined(a[3],!1));-1===b||null===b||!0===h?a=e.toString(a[0]).split(e.toString(a[1])):(isNaN(b)&&(b=-1),-1>b&&(b=-1),a=e.toString(a[0]).split(e.toString(a[1]),
b));if(!1===h)return a;h=[];for(let k=0;k<a.length&&!(-1!==b&&h.length>=b);k++)""!==a[k]&&void 0!==a[k]&&h.push(a[k]);return h})};f.text=function(c,d){return g(c,d,(b,h,a)=>{e.pcCheck(a,1,2,c,d);return e.toStringExplicit(a[0],a[1])})};f.concatenate=function(c,d){return g(c,d,(b,h,a)=>{b=[];if(1>a.length)return"";if(e.isArray(a[0])){h=e.defaultUndefined(a[2],"");for(var k=0;k<a[0].length;k++)b[k]=e.toStringExplicit(a[0][k],h);return 1<a.length?b.join(a[1]):b.join("")}if(e.isImmutableArray(a[0])){h=
e.defaultUndefined(a[2],"");for(k=0;k<a[0].length();k++)b[k]=e.toStringExplicit(a[0].get(k),h);return 1<a.length?b.join(a[1]):b.join("")}for(h=0;h<a.length;h++)b[h]=e.toStringExplicit(a[h]);return b.join("")})};f.reverse=function(c,d){return g(c,d,(b,h,a)=>{e.pcCheck(a,1,1,c,d);if(e.isArray(a[0]))return b=a[0].slice(0),b.reverse(),b;if(e.isImmutableArray(a[0]))return b=a[0].toArray().slice(0),b.reverse(),b;throw new l.ArcadeExecutionError(c,l.ExecutionErrorCodes.InvalidParameter,d);})};f.replace=
function(c,d){return g(c,d,(b,h,a)=>{e.pcCheck(a,3,4,c,d);b=e.toString(a[0]);h=e.toString(a[1]);const k=e.toString(a[2]);return(4===a.length?e.toBoolean(a[3]):1)?e.multiReplace(b,h,k):b.replace(h,k)})};f.schema=function(c,d){return g(c,d,(b,h,a)=>{if(e.isFeature(a[0]))return(b=e.featureSchema(a[0]))?q.convertObjectToArcadeDictionary(b,e.defaultTimeZone(c)):null;throw new l.ArcadeExecutionError(c,l.ExecutionErrorCodes.InvalidParameter,d);})};f.subtypes=function(c,d){return g(c,d,(b,h,a)=>{e.pcCheck(a,
1,1,c,d);if(e.isFeature(a[0]))return(b=e.featureSubtypes(a[0]))?q.convertObjectToArcadeDictionary(b,e.defaultTimeZone(c)):null;throw new l.ArcadeExecutionError(c,l.ExecutionErrorCodes.InvalidParameter,d);})};f.subtypecode=function(c,d){return g(c,d,(b,h,a)=>{e.pcCheck(a,1,1,c,d);if(e.isFeature(a[0])){b=e.featureSubtypes(a[0]);if(!b)return null;if(b.subtypeField&&a[0].hasField(b.subtypeField)){a=a[0].field(b.subtypeField);for(const k of b.subtypes)if(k.code===a)return k.code}return null}throw new l.ArcadeExecutionError(c,
l.ExecutionErrorCodes.InvalidParameter,d);})};f.subtypename=function(c,d){return g(c,d,(b,h,a)=>{e.pcCheck(a,1,1,c,d);if(e.isFeature(a[0])){b=e.featureSubtypes(a[0]);if(!b)return"";if(b.subtypeField&&a[0].hasField(b.subtypeField)){a=a[0].field(b.subtypeField);for(const k of b.subtypes)if(k.code===a)return k.name}return""}throw new l.ArcadeExecutionError(c,l.ExecutionErrorCodes.InvalidParameter,d);})};f.gdbversion=function(c,d){return g(c,d,(b,h,a)=>{e.pcCheck(a,1,1,c,d);if(e.isFeature(a[0]))return a[0].gdbVersion();
throw new l.ArcadeExecutionError(c,l.ExecutionErrorCodes.InvalidParameter,d);})};f.domain=function(c,d){return g(c,d,(b,h,a)=>{e.pcCheck(a,2,3,c,d);if(e.isFeature(a[0]))return(b=e.featureFullDomain(a[0],e.toString(a[1]),void 0===a[2]?void 0:e.toNumber(a[2])))&&b.domain?"coded-value"===b.domain.type||"codedValue"===b.domain.type?q.convertObjectToArcadeDictionary({type:"codedValue",name:b.domain.name,dataType:v.layerFieldEsriConstants[b.field.type],codedValues:b.domain.codedValues.map(k=>({name:k.name,
code:k.code}))},e.defaultTimeZone(c)):q.convertObjectToArcadeDictionary({type:"range",name:b.domain.name,dataType:v.layerFieldEsriConstants[b.field.type],min:b.domain.min,max:b.domain.max},e.defaultTimeZone(c)):null;throw new l.ArcadeExecutionError(c,l.ExecutionErrorCodes.InvalidParameter,d);})};f.domainname=function(c,d){return g(c,d,(b,h,a)=>{e.pcCheck(a,2,4,c,d);if(e.isFeature(a[0]))return e.featureDomainValueLookup(a[0],e.toString(a[1]),a[2],void 0===a[3]?void 0:e.toNumber(a[3]));throw new l.ArcadeExecutionError(c,
l.ExecutionErrorCodes.InvalidParameter,d);})};f.domaincode=function(c,d){return g(c,d,(b,h,a)=>{e.pcCheck(a,2,4,c,d);if(e.isFeature(a[0]))return e.featureDomainCodeLookup(a[0],e.toString(a[1]),a[2],void 0===a[3]?void 0:e.toNumber(a[3]));throw new l.ArcadeExecutionError(c,l.ExecutionErrorCodes.InvalidParameter,d);})};f.urlencode=function(c,d){return g(c,d,(b,h,a)=>{e.pcCheck(a,1,1,c,d);if(null===a[0])return"";if(a[0]instanceof q){b="";for(const k of a[0].keys())h=a[0].field(k),""!==b&&(b+="\x26"),
b=null===h?b+(encodeURIComponent(k)+"\x3d"):b+(encodeURIComponent(k)+"\x3d"+encodeURIComponent(h));return b}return encodeURIComponent(e.toString(a[0]))})};f.hash=function(c,d){return g(c,d,(b,h,a)=>{e.pcCheck(a,1,1,c,d);b=new z.XXH(0);n(a[0],b,{context:c,node:d,map:new Map,currentLength:0});return b.digest()})};f.convertdirection=function(c,d){return g(c,d,(b,h,a)=>{e.pcCheck(a,3,3,c,d);return y.convertDirection(a[0],a[1],a[2])})};f.fromjson=function(c,d){return g(c,d,(b,h,a)=>{e.pcCheck(a,1,1,c,
d);if(!1===e.isString(a[0]))throw new l.ArcadeExecutionError(c,l.ExecutionErrorCodes.InvalidParameter,d);return q.convertJsonToArcade(JSON.parse(e.toString(a[0])),e.defaultTimeZone(c))})};f.expects=function(c,d){return g(c,d,(b,h,a)=>{if(1>a.length)throw new l.ArcadeExecutionError(c,l.ExecutionErrorCodes.WrongNumberOfParameters,d);return e.voidOperation})};f.tocharcode=function(c,d){return g(c,d,(b,h,a)=>{e.pcCheck(a,1,2,c,d);b=e.toNumber(e.defaultUndefined(a[1],0));h=e.toString(a[0]);if(0===h.length&&
1===a.length)return null;if(h.length<=b||0>b)throw new l.ArcadeExecutionError(c,l.ExecutionErrorCodes.OutOfBounds,d);return h.charCodeAt(b)})};f.tocodepoint=function(c,d){return g(c,d,(b,h,a)=>{e.pcCheck(a,1,2,c,d);b=e.toNumber(e.defaultUndefined(a[1],0));h=e.toString(a[0]);if(0===h.length&&1===a.length)return null;if(h.length<=b||0>b)throw new l.ArcadeExecutionError(c,l.ExecutionErrorCodes.OutOfBounds,d);return h.codePointAt(b)})};f.fromcharcode=function(c,d){return g(c,d,(b,h,a)=>{if(1>a.length)throw new l.ArcadeExecutionError(c,
l.ExecutionErrorCodes.WrongNumberOfParameters,d);b=a.map(k=>Math.trunc(e.toNumber(k))).filter(k=>0<=k&&65535>=k);return 0===b.length?null:String.fromCharCode.apply(null,b)})};f.fromcodepoint=function(c,d){return g(c,d,(b,h,a)=>{if(1>a.length)throw new l.ArcadeExecutionError(c,l.ExecutionErrorCodes.WrongNumberOfParameters,d);let k;try{k=a.map(m=>Math.trunc(e.toNumber(m))).filter(m=>1114111>=m&&m>>>0===m)}catch(m){return null}return 0===k.length?null:String.fromCodePoint.apply(null,k)})};f.getuser=
function(c,d){return g(c,d,(b,h,a)=>{e.pcCheck(a,0,2,c,d);b=e.defaultUndefined(a[1],"");b=!0===b||!1===b?"":e.toString(b);if(null!==b&&""!==b)return null;if(0===a.length||a[0]instanceof t){h=null;c.services&&c.services.portal&&(h=c.services.portal);if(0<a.length&&(a=a[0].field("url"),a=a?G.hasSamePortal(a,h?.restUrl||""):!1,!a)||!h)return null;if(""===b&&(a="loaded"===h.loadStatus&&h.user&&h.user.sourceJSON?h.user.sourceJSON:null,a)){a=JSON.parse(JSON.stringify(a));for(const k of["lastLogin","created",
"modified"])void 0!==a[k]&&null!==a[k]&&(a[k]=new Date(a[k]));return q.convertObjectToArcadeDictionary(a,e.defaultTimeZone(c))}return null}throw new l.ArcadeExecutionError(c,l.ExecutionErrorCodes.InvalidParameter,d);})}};Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})});