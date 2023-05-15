// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../request ../../../../core/arrayUtils ../../../../core/Error ../../../../core/has ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/typedArrayUtil ../../../../chunks/mat3 ../../../../chunks/mat3f64 ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/quat ../../../../chunks/quatf32 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/ellipsoidUtils ../../../../geometry/projection ../../../../geometry/SpatialReference ../../../../geometry/spatialReferenceEllipsoidUtils ../../../../geometry/support/aaBoundingRect ../../../../geometry/support/spatialReferenceUtils ../../../../rest/support/Query ./I3SBinaryReader ./I3SProjectionUtil ../support/edgeUtils ../support/symbolColorUtils ../../support/orientedBoundingBox ../../webgl-engine/lib/Attribute".split(" "),
function(h,ma,na,Q,w,oa,r,pa,R,qa,ra,sa,S,E,ta,q,L,ua,x,T,D,A,U,va,wa,xa,V,M,F,ya){function N(a){return a?parseInt(a.substring(a.lastIndexOf("/")+1,a.length),10):void 0}function W(a,b){var c=b[0],d=b[1];b=b[3];const e=a[0]-c;c-=a[2];const f=a[1]-d;a=d-a[3];d=Math.max(e,c,0);const g=Math.max(f,a,0);d=d*d+g*g;return d>b*b?h.MbsIntersectResult.OUTSIDE:0<d?h.MbsIntersectResult.INTERSECTS_CENTER_OUTSIDE:-Math.max(e,c,f,a)>b?h.MbsIntersectResult.INSIDE:h.MbsIntersectResult.INTERSECTS_CENTER_INSIDE}function X(a,
b,c){const d=[],e=c&&c.missingFields;c=c&&c.originalFields;for(const f of a){a=f.toLowerCase();let g=!1;for(const m of b)if(a===m.name.toLowerCase()){d.push(m.name);g=!0;c&&c.push(f);break}!g&&e&&e.push(f)}return d}function za(a,b,c){const d=new Map,e=[];c=c();for(const m of a){var f=m.attributes[b];for(var g=0;g<c.length;g++){a=c[g];const t=a.featureIds.indexOf(f);if(0<=t){f=d.get(a.node);f||(f={node:a.node,indices:[],graphics:[]},e.push(f),d.set(a.node,f));f.indices.push(t);for(f.graphics.push(m);0<
g;g--)c[g]=c[g-1];c[0]=a;break}}}return e}async function Aa(a,b,c,d){b.sort((g,m)=>g.attributes[c]-m.attributes[c]);var e=b.map(g=>g.attributes[c]);const f=[];d=X(d,a.fields,{originalFields:f});a=await Y(a,e,d);for(e=0;e<b.length;e++){const g=b[e],m=a[e],t={};if(g.attributes)for(const n in g.attributes)t[n]=g.attributes[n];for(let n=0;n<f.length;n++)t[f[n]]=m[d[n]];g.attributes=t}return b}function Y(a,b,c){var d=a.capabilities.query.maxRecordCount;if(null!=d&&b.length>d)return d=Q.splitIntoChunks(b,
d),Promise.all(d.map(e=>Y(a,e,c))).then(e=>e.flat());d=new va({objectIds:b,outFields:c,orderByFields:[a.objectIdField]});return a.queryFeatures(d).then(e=>{if(e&&e.features&&e.features.length===b.length)return e.features.map(f=>f.attributes);throw new w("scenelayer:feature-not-in-associated-layer","Feature not found in associated feature layer");})}function Z(a,b,c,d,e){const f=[];for(const g of b)g&&e.includes(g.name)&&f.push({url:`${a}/nodes/${c}/attributes/${g.key}/0`,storageInfo:g});return pa.eachAlways(f.map(g=>
na(g.url,{responseType:"array-buffer"}).then(m=>wa.readBinaryAttribute(g.storageInfo,m.data)))).then(g=>{const m=[];for(const t of d){const n={};for(let u=0;u<g.length;u++){const C=g[u].value;null!=C&&(n[f[u].storageInfo.name]=aa(C,t))}m.push(n)}return m})}function aa(a,b){if(!a)return null;b=a[b];return R.isInt16Array(a)?-32768===b?null:b:R.isInt32Array(a)?b===Ba?null:b:b!==b?null:b}function ba(a){var b=a.store,c=b.indexCRS||b.geographicCRS;if(b=void 0===c?b.indexWKT:void 0)if(a.spatialReference){if(b!==
a.spatialReference.wkt)throw new w("layerview:store-spatial-reference-wkt-index-incompatible","The indeWKT of the scene layer store does not match the WKT of the layer spatial reference",{});}else throw new w("layerview:no-store-spatial-reference-wkt-index-and-no-layer-spatial-reference","Found indeWKT in the scene layer store but no layer spatial reference",{});c=c?new T(N(c)):a.spatialReference;return c.equals(a.spatialReference)?a.spatialReference:c}function ca(a){var b=a.store,c=b.vertexCRS||
b.projectedCRS;if(b=void 0===c?b.vertexWKT:void 0)if(a.spatialReference){if(b!==a.spatialReference.wkt)throw new w("layerview:store-spatial-reference-wkt-vertex-incompatible","The vertexWKT of the scene layer store does not match the WKT of the layer spatial reference",{});}else throw new w("layerview:no-store-spatial-reference-wkt-vertex-and-no-layer-spatial-reference","Found vertexWKT in the scene layer store but no layer spatial reference",{});c=c?new T(N(c)):a.spatialReference;return c.equals(a.spatialReference)?
a.spatialReference:c}function H(a,b,c){if(!x.canProjectWithoutEngine(a,b))throw new w("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});if("local"===c&&!da(a,b))throw new w("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});}function da(a,b){return a.equals(b)||a.isWGS84&&b.isWebMercator||a.isWebMercator&&b.isWGS84}
function ea(a,b,c){const d=ba(a);a=ca(a);H(d,b,c);H(a,b,c)}function fa(a,b,c,d,e=0){if(d===D.getSphericalPCPF(d))if(b.isGeographic){var f=ua.getReferenceEllipsoid(b);d=1+Math.max(0,e)/(f.radius+a.center[2]);q.set(c.center,a.center[0],a.center[1],a.center[2]+e);x.projectBuffer(c.center,b,0,c.center,D.getSphericalPCPF(b),0,1);E.copy(c.quaternion,a.quaternion);E.conjugate(B,a.quaternion);q.set(k,0,0,1);q.transformQuat(k,k,B);q.set(k,a.halfSize[0]*Math.abs(k[0]),a.halfSize[1]*Math.abs(k[1]),a.halfSize[2]*
Math.abs(k[2]));q.scale(k,k,f.inverseFlattening);q.add(c.halfSize,a.halfSize,k);q.scale(c.halfSize,c.halfSize,d)}else{F.corners(a,O);q.set(c.center,a.center[0],a.center[1],a.center[2]+e);x.computeTranslationToOriginAndRotation(b,c.center,v,D.getSphericalPCPF(b));q.set(c.center,v[12],v[13],v[14]);d=2*Math.sqrt(1+v[0]+v[5]+v[10]);B[0]=(v[6]-v[9])/d;B[1]=(v[8]-v[2])/d;B[2]=(v[1]-v[4])/d;B[3]=.25*d;E.multiply(c.quaternion,B,a.quaternion);E.conjugate(B,c.quaternion);let g=d=a=0;for(f of O)f[2]+=e,x.projectBuffer(f,
b,0,f,D.getSphericalPCPF(b),0,1),q.sub(k,f,c.center),q.transformQuat(k,k,B),a=Math.max(a,Math.abs(k[0])),d=Math.max(d,Math.abs(k[1])),g=Math.max(g,Math.abs(k[2]));q.set(c.halfSize,a,d,g)}else b.isWGS84&&(d.isWebMercator||U.isPlateCarree(d))?(q.copy(y,a.center),y[2]+=e,e=D.getSphericalPCPF(d),x.projectBuffer(y,b,0,y,e,0,1),ha(e,a,y,d,c)):b.isWebMercator&&U.isPlateCarree(d)?(q.copy(y,a.center),y[2]+=e,ha(b,a,y,d,c)):a===c?(c.center[2]+=e,x.projectBuffer(c.center,b,0,c.center,d,0,1)):(q.set(c.center,
a.center[0],a.center[1],a.center[2]+e),x.projectBuffer(c.center,b,0,c.center,d,0,1),E.copy(c.quaternion,a.quaternion),q.copy(c.halfSize,a.halfSize))}function ha(a,b,c,d,e){const f=qa.fromQuat(Ca,b.quaternion);for(let m=0;8>m;++m){for(var g=0;3>g;++g)ia[g]=b.halfSize[g]*(0!==(m&1<<g)?-1:1);for(g=0;3>g;++g){let t=c[g];for(let n=0;3>n;++n)t+=ia[n]*f[3*n+g];I[3*m+g]=t}}x.projectBuffer(I,a,0,I,d,0,8);F.compute(Da,e)}const G=A.create();h.MbsIntersectResult=void 0;(function(a){a[a.OUTSIDE=0]="OUTSIDE";a[a.INTERSECTS_CENTER_OUTSIDE=
1]="INTERSECTS_CENTER_OUTSIDE";a[a.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE";a[a.INSIDE=3]="INSIDE"})(h.MbsIntersectResult||(h.MbsIntersectResult={}));const Ba=-(2**31),Ea=V.createSolidEdgeMaterial({color:[0,0,0,0],opacity:0});let ja=ma._createClass(function(){this.material=this.edgeMaterial=null;this.castShadows=!0});const I=Array(24),Da=new ya.Attribute(I,3,!0),ia=L.create(),y=L.create(),Ca=ra.create(),v=S.create(),B=ta.create(),O=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,
0,0],[0,0,0]],P=A.create(),J=A.create(),ka=F.create(),k=L.create(),la={data:Array(72),size:3,exclusive:!0,stride:3},K=S.create();h.SymbolInfo=ja;h.addWraparound=function(a,b){return(a|0)+(b|0)|0};h.checkPointCloudLayerCompatibleWithView=function(a,b){H(a.spatialReference,b.spatialReference,b.viewingMode)};h.checkPointCloudLayerValid=function(a){var b;(b=null==a.store||null==a.store.defaultGeometrySchema)||(a=a.store.defaultGeometrySchema,b=!!(null==a.geometryType||"points"!==a.geometryType||null!=
a.topology&&"PerAttributeArray"!==a.topology||null!=a.encoding&&""!==a.encoding&&"lepcc-xyz"!==a.encoding||null==a.vertexAttributes||null==a.vertexAttributes.position));if(b)throw new w("pointcloud:unsupported-geometry-schema","The geometry schema of this point cloud scene layer is not supported.",{});};h.checkRecyclable=function(a,b,c){if(a.serviceUpdateTimeStamp?.lastUpdate!==b.serviceUpdateTimeStamp?.lastUpdate||!c.isEmpty||r.applySome(a.associatedLayer,d=>d.url)!==r.applySome(b.associatedLayer,
d=>d.url))throw new w("layerview:recycle-failed");};h.checkSceneLayerCompatibleWithView=function(a,b){ea(a,b.spatialReference,b.viewingMode)};h.checkSceneLayerValid=function(a){var b;(b=null==a.store||null==a.store.defaultGeometrySchema)||(b=a.store.defaultGeometrySchema,b=!!(null!=b.geometryType&&"triangles"!==b.geometryType||null!=b.topology&&"PerAttributeArray"!==b.topology||null==b.vertexAttributes||null==b.vertexAttributes.position));if(b)throw new w("scenelayer:unsupported-geometry-schema",
"The geometry schema of this scene layer is not supported.",{url:a.parsedUrl.path});};h.checkSpatialReference=H;h.checkSpatialReferences=ea;h.computeVisibilityObb=function(a,b,c,d,e,f){if(!f||0===f.length||r.isNone(b)||!a.mbs)return null;const g=xa.computeGlobalTransformation(a.mbs,e,c,b);sa.invert(K,g);let m=null;const t=()=>{if(!m)if(m=O,A.empty(J),r.isSome(a.serviceObb)){fa(a.serviceObb,c,ka,b,e);F.corners(ka,m);for(var l of m)q.transformMat4(l,l,K),A.expandPointInPlace(J,l)}else{var p=a.mbs;if(p)for(l=
p[3],x.projectVectorToVector(p,c,k,b),q.transformMat4(k,k,K),k[2]+=e,p=0;8>p;++p){const z=m[p];q.copy(z,[k[0]+(p&1?l:-l),k[1]+(p&2?l:-l),k[2]+(p&4?l:-l)]);A.expandPointInPlace(J,z)}}};let n=Infinity,u=-Infinity;const C=l=>{if("replace"===l.type&&(l=l.geometry,l?.hasZ)){A.empty(P);var p=l.spatialReference||d;l=l.rings.reduce((z,Fa)=>Fa.reduce((Ga,Ha)=>{x.projectVectorToVector(Ha,p,k,b);q.transformMat4(k,k,K);A.expandPointInPlace(P,k);return Math.min(k[2],Ga)},z),Infinity);t();A.intersects(J,P)&&(n=
Math.min(n,l),u=Math.max(u,l))}};f.forEach(l=>C(l));if(Infinity===n)return null;f=(l,p,z)=>{q.transformMat4(k,z,g);l[p]=k[0];l[p+1]=k[1];l[p+2]=k[2];p+=24;z[2]=n;q.transformMat4(k,z,g);l[p]=k[0];l[p+1]=k[1];l[p+2]=k[2];p+=24;z[2]=u;q.transformMat4(k,z,g);l[p]=k[0];l[p+1]=k[1];l[p+2]=k[2]};for(let l=0;8>l;++l)f(la.data,3*l,m[l]);return F.compute(la)};h.containsDraco=function(a){if(oa("disable-feature:i3s-draco")||!a)return!1;for(const b of a)for(const c of b.geometryBuffers)if("draco"===c.compressedAttributes?.encoding)return!0;
return!1};h.extractWkid=N;h.filterInPlace=function(a,b,c){let d=0,e=0;for(let f=0;f<b.length&&d<a.length;f++)a[d]===b[f]&&(c(f)&&(a[e]=a[d],e++),d++);a.length=e};h.findFieldsCaseInsensitive=X;h.findIntersectingNodes=function(a,b,c,d){c.traverse(b,e=>{const f=e.mbs;if((null!=f&&W(a,f))===h.MbsIntersectResult.OUTSIDE)return!1;d(e);return!0})};h.getCacheKeySuffix=function(a,b){return r.isNone(b)?"@null":b===D.getSphericalPCPF(b)?"@ECEF":a.equals(b)?"":null!=b.wkid?"@"+b.wkid:null};h.getCachedAttributeValue=
aa;h.getClipRect=function(a,b){if(0===b.rotationScale[1]&&0===b.rotationScale[2]&&0===b.rotationScale[3]&&0===b.rotationScale[5]&&0===b.rotationScale[6]&&0===b.rotationScale[7])return G[0]=(a[0]-b.position[0])/b.rotationScale[0],G[1]=(a[1]-b.position[1])/b.rotationScale[4],G[2]=(a[2]-b.position[0])/b.rotationScale[0],G[3]=(a[3]-b.position[1])/b.rotationScale[4],G};h.getIndexCrs=ba;h.getSymbolInfo=function(a){const b=new ja;var c=!1;let d=!1;for(const f of a.symbolLayers.items)if("fill"===f.type&&
f.enabled){var e=f.material;a=f.edges;r.isSome(e)&&!c&&(c=e.color,e=M.parseColorMixMode(e.colorMixMode),r.isSome(c)?b.material={color:[c.r/255,c.g/255,c.b/255],alpha:c.a,colorMixMode:e}:b.material={color:[1,1,1],alpha:1,colorMixMode:M.ColorMixModeEnum.Multiply},b.castShadows=f.castShadows,c=!0);r.isSome(a)&&!d&&(b.edgeMaterial=V.createMaterialFromEdges(a,{}),d=!0)}b.material||(b.material={color:[1,1,1],alpha:1,colorMixMode:M.ColorMixModeEnum.Multiply});return b};h.getVertexCrs=ca;h.intersectBoundingRectWithMbs=
W;h.invalidateMbs=function(a){r.isSome(a)&&(a[3]=-1)};h.invalidateObb=function(a){r.isSome(a)&&(a.halfSize[0]=-1)};h.isSupportedLocalModeProjection=da;h.isValidMbs=function(a){return 0<=a[3]};h.isValidObb=function(a){return r.isSome(a)&&0<=a.halfSize[0]};h.objectIdFilter=function(a,b,c){let d=0,e=0;for(;d<c.length;)0<=Q.binaryIndexOf(a,c[d])===b&&(c[e]=c[d],e++),d++;c.length=e};h.queryAttributesFromCachedAttributesId=Z;h.rendererNeedsTextures=function(a){if(null==a||"simple"!==a.type&&"class-breaks"!==
a.type&&"unique-value"!==a.type||("unique-value"===a.type||"class-breaks"===a.type)&&null==a.defaultSymbol)return!0;a=a.getSymbols();if(0===a.length)return!0;for(const b of a){if("mesh-3d"!==b.type||0===b.symbolLayers.length)return!0;for(const c of b.symbolLayers.items)if("fill"!==c.type||r.isNone(c.material)||r.isNone(c.material.color)||"replace"!==c.material.colorMixMode)return!0}return!1};h.transformObb=fa;h.transparentEdgeMaterial=Ea;h.whenGraphicAttributes=async function(a,b,c,d,e){if(0===b.length)return[];
const f=a.attributeStorageInfo;if(r.isSome(a.associatedLayer))try{return await Aa(a.associatedLayer,b,c,d)}catch(g){if(a.associatedLayer.loaded)throw g;}if(f){b=za(b,c,e);if(r.isNone(b))throw new w("scenelayer:features-not-loaded","Tried to query attributes for unloaded features");const g=a.parsedUrl.path;return(await Promise.all(b.map(m=>Z(g,f,m.node.resources.attributes,m.indices,d).then(t=>{for(let n=0;n<m.graphics.length;n++){const u=m.graphics[n],C=t[n];if(u.attributes)for(const l in u.attributes)l in
C||(C[l]=u.attributes[l]);u.attributes=C}return m.graphics})))).flat()}throw new w("scenelayer:no-attribute-source","This scene layer does not have a source for attributes available");};Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});