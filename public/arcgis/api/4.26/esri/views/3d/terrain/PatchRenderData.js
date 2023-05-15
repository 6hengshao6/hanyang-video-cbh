// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/arrayUtils ../../../core/mathUtils ../../../core/maybe ../../../chunks/vec3 ../../../chunks/vec3f64 ../../../geometry/support/aaBoundingBox ../../../geometry/support/aaBoundingRect ../../../geometry/support/Ellipsoid ../support/buffer/glUtil ./GeometryState ./interfaces ./LayerClass ./PatchGeometry ./terrainUtils ./TextureFader ./Tile ./TileOverlayData ./tileUtils ../webgl-engine/lib/VertexArrayObject ../webgl-engine/shaders/TerrainTechnique ../../webgl/BufferObject".split(" "),
function(S,ha,ia,X,v,t,x,ja,ka,Y,la,ma,T,V,Z,b,W,na,oa,pa,qa,ra,aa){function L(P,p){return p?.isLoaded||p===P?p:null}let sa=function(){function P(){this.geometryInfo=new Z.PatchGeometry;this.geometryState=this.intersectionData=null;this._textureRef=new W.TextureFader(()=>this.tile.surface.textureFadeDuration);this.overlay=new oa;this._geometryStateChangedSinceLastUpdate=!0;this._wireframeChanged=this._clippingAreaChanged=this._samplerDataChanged=this._numVerticesPerSideChanged=this._hasGeometry=!1;
this._dirtyCorners=this._dirtyEdges=this._dirtyEdgeResolutions=15}var p=P.prototype;p.init=function(a){this.clear();this._tile=a;a=this.geometryInfo;a.indices=null;a.vertexAttributes=null;ja.empty(a.boundingBox);a.indexCount=0;a.numVerticesPerSide=0;this.intersectionData=null;this.geometryState=new ma.GeometryState;this.localOrigin=null;this.overlay.clear()};p.clear=function(){this.releaseGeometry();this.releaseTexture();this._textureRef.clear();this.geometryState=this.intersectionData=this._tile=
null};p.updateGeometryIfNeeded=function(a){if(!this._vao||this._geometryStateChangedSinceLastUpdate||this._wireframeChanged||this._clippingAreaChanged||this._samplerDataChanged||this._numVerticesPerSideChanged||this._dirtyCorners||this._dirtyEdgeResolutions||this._dirtyEdges)this._updateGeometry(a),this._geometryStateChangedSinceLastUpdate=!1;if(b.ENABLE_TERRAIN_INTERNAL_CHECKS&&this.tile.intersectsClippingArea)for(a=0;4>a;++a)b.internalAssert(this.geometryInfo.outerEdges[a].count===this.geometryState.neighborData.edgeResolutions[a]+
1)};p._calculateEdgeResolution=function(a,d){const f=this.tile,l=this.geometryState.numVerticesPerSide-1;if(!f.surface.isGlobal){var k=f.surface.extent;if(v.isSome(k)&&(0===a&&f.extent[3]>k[3]||1===a&&f.extent[2]>k[2]||2===a&&f.extent[1]<k[1]||3===a&&f.extent[0]<k[0]))return l}const e=f.level;k=b.neighborEdgeIndices[a];if(!d)return b.internalAssert(v.isNone(f.surface?.rootTiles)||f.surface.updatingRootTiles||!f.shouldHaveNeighbor(k)),l;if(d.isLoaded)return k=d.renderData.geometryState,d=e-d.level,
b.internalAssert(0<=d),0===d?Math.max(k.numVerticesPerSide-1,l):Math.max(1,k.neighborData.edgeResolutions[(a+2)%4]/2**d);b.internalAssert(!d.isLeaf);let m=l;d.forAllSubtreeOnSide(b.oppositeEdge(k),c=>{if(c===f)return!0;if(c.isLoaded)return m=Math.max(m,2**(c.level-e)),!0;b.internalAssert(!c.isLeaf);return!1});return m};p.updateNeighborData=function(){const a=this.tile;if(a.intersectsClippingArea){var d=a.renderData.geometryState.neighborData,f=q=>(q.isLoaded||q.level===a.level)&&q?.intersectsClippingArea,
l=d.edgePeerNeighbors,k=d.edgePeerNeighborSamplerVersions;for(var e=0;4>e;++e){var m=a.findNeighborTile(b.neighborEdgeIndices[e],f),c=L(a,m),g=c?.renderData?.geometryState.samplerDataVersion??-1,h=L(a,l[e]);c=c!==h;h=k[e]!==g;l[e]=m;if(c||h)k[e]=g,this._markEdgeDirty(e);g=d.edgeResolutions[e];m=this._calculateEdgeResolution(e,m);b.internalAssert(X.isPowerOfTwo(m));b.internalAssert(1<=m);d.edgeResolutions[e]=m;g!==m&&this._markEdgeResolutionDirty(e)}k=d.cornerPeerNeighbors;for(e=0;4>e;++e){c=a.findNeighborTile(b.neighborCornerIndices[e],
f);k[e]=c;m=L(a,l[e]);g=L(a,l[(e+1)%4]);c=L(a,c);A[e]=c;A[(e+1)%4]=g;A[(e+2)%4]=a;A[(e+3)%4]=m;b.internalAssert(A.some(r=>r?.isLoaded||r===a));const q=A.reduce((r,u)=>Math.min(r,u?.level??Infinity),Infinity);A.forEach((r,u)=>{r&&r?.level>q&&(A[u]=null)});b.internalAssert(A.some(r=>r?.isLoaded||r===a));m=d.cornerNeighborData[e].cornerTiles;g=d.cornerNeighborData[e].cornerTileSamplerVersions;for(c=0;4>c;++c){h=A[c];const r=h?.renderData.geometryState.samplerDataVersion??-1,u=m[c]!==h,n=!u&&g[c]!==r;
if(u||n)m[c]=h,g[c]=r,this._markCornerDirty(e)}b.internalAssert(m.some(r=>r?.isLoaded||r===a))}b.ENABLE_TERRAIN_INTERNAL_CHECKS&&b.internalAssert(this.geometryState.neighborData.edgeResolutions.every(q=>0<q));for(d=0;4>d;++d)A[d]=null}};p._updateGeometry=function(a){if(this.tile.intersectsClippingArea){b.ENABLE_TERRAIN_INTERNAL_CHECKS&&b.internalAssert(!this.tile.intersectsClippingArea||this.geometryState.neighborData.edgeResolutions.every(e=>0<e));this.intersectionData=null;var d=this.tile,f=this.geometryInfo.vertexAttributes;
f=!this._vao||!f||this._wireframeChanged||this._numVerticesPerSideChanged||this._samplerDataChanged||this._clippingAreaChanged||this._dirtyEdgeResolutions;var l=!f&&(0!==this._dirtyEdges||0!==this._dirtyEdgeResolutions),k=!l&&0!==this._dirtyCorners;f?(this.releaseGeometry(),this._createGeometry(a)):l||k?d.updateEdgeElevations():k?d.updateCornerElevations():console.warn("Update for no reason?");this._samplerDataChanged=this._numVerticesPerSideChanged=!1;this._dirtyCorners=this._dirtyEdges=this._dirtyEdgeResolutions=
0;this._wireframeChanged=this._clippingAreaChanged=!1}};p.releaseGeometry=function(){this._hasGeometry=!1;this.intersectionData=null;if(!this._vao)return!1;this._vao.dispose();this._vao=null;Z.releaseGeometry(this.geometryInfo);return!0};p.ensureTexture=function(a,d){v.isSome(this._texture)&&this._texture.descriptor.width!==a&&this.releaseTexture();v.isNone(this._texture)&&(this._texture=d(),this.tile.setMemoryDirty());return this._texture};p.releaseTexture=function(){v.isSome(this._texture)&&(this._texture.release(),
this._texture=null,this.tile.setMemoryDirty())};p._markCornerDirty=function(a){this._dirtyCorners|=1<<a};p._markEdgeDirty=function(a){this._dirtyEdges|=1<<a};p._markEdgeResolutionDirty=function(a){a=1<<a;this._dirtyEdgeResolutions|=a;this._dirtyEdges|=a};p._markAllEdgesAndCornersDirty=function(){this._dirtyEdgeResolutions=this._dirtyEdges=this._dirtyCorners=15};p.updateGeometryState=function(){var a=this._getElevationInfo();const d=this.tile;var f=a.samplerData?d.getElevationVerticesPerSide(a.maxTileLevel):
d.getDefaultVerticesPerSide();const l=Math.max(f,5);let k=d.clippingArea;if(!d.intersectsClippingArea||d.isWithinClippingArea)k=null;f=this.geometryState;let e=!1;f.numVerticesPerSide!==l&&(this._numVerticesPerSideChanged=!0,f.numVerticesPerSide=l,f.samplerDataVersion++,e=!0);a.changed&&(this._samplerDataChanged=!0,f.samplerData=a.samplerData,f.samplerDataVersion++,e=!0);ia.equals(f.clippingArea,k)||(this._clippingAreaChanged=!0,f.clippingArea=k,e=!0);a=d.surface.wireframe;f.wireframe!==a&&(this._wireframeChanged=
!0,f.wireframe=a,e=!0);this._geometryStateChangedSinceLastUpdate||(this._geometryStateChangedSinceLastUpdate=e);e&&this._markAllEdgesAndCornersDirty();this._hasGeometry=!0;return this._geometryStateChangedSinceLastUpdate};p._createGeometry=function(a){this.tile.createGeometry();const d=this.geometryInfo.vertexAttributes,f=this.geometryInfo.indices,l=a.gl;this._vao=new qa.VertexArrayObject(a,ra.terrainVertexAttributeLocations,{geometry:la.glLayout(d.layout)},{geometry:aa.BufferObject.createVertex(a,
l.STATIC_DRAW,d.buffer)},aa.BufferObject.createIndex(a,l.STATIC_DRAW,f));this._hasGeometry=!0};p.setTextureReference=function(a,d=W.ActivationTime.Immediate){v.isSome(a)&&a.texture!==this._texture&&this.releaseTexture();this._textureRef.push(a,d)};p._getElevationInfo=function(){var a=this.geometryState.samplerData;const d=this.tile.layerInfo[V.LayerClass.ELEVATION],f=d.length,l=Array(f);let k=0;var e=0;let m=!1;for(let h=0;h<f;h++){var c=d[h];if(v.isSome(c.upsampleInfo)){c=c.upsampleInfo.tile;var g=
c.layerInfo[V.LayerClass.ELEVATION][h].data;g=g&&g.samplerData;a&&a[k]===g||(m=!0);l[k++]=g;e=Math.max(e,c.lij[0])}else c.data&&(g=this.tile.surface.layerViewByIndex(h,V.LayerClass.ELEVATION),pa.fallsWithinLayer(this.tile,g.layer,!1)&&(e=c.data,a&&a[k]===e.samplerData||(m=!0),l[k++]=e.samplerData,e=this.tile.level))}v.isSome(a)&&a.length!==k&&(m=!0);if(a=0<k)l.length=k;return{changed:m,samplerData:a?l:null,maxTileLevel:e}};p.checkGeometryWaterproofness=function(){if(b.ENABLE_TERRAIN_INTERNAL_CHECKS){var a=
this.tile;b.internalAssert(a?.isLoaded);if(a.isLoaded&&a.intersectsClippingArea){var d=a.renderData;if(0!==a.level){var f=a.surface.extent;if(!v.isSome(f)||a.intersectsExtent(f)){var l=b.neighborEdgeIndices.map((c,g)=>v.isSome(f)?0>(2>g?-1:1)*(a.extent[3-g]-f[3-g]):!1),k=a.level;b.internalAssert(0===this._dirtyCorners);b.internalAssert(0===this._dirtyEdges);b.internalAssert(0===this._dirtyEdgeResolutions);b.internalAssert(!this._numVerticesPerSideChanged);b.internalAssert(!this._samplerDataChanged);
b.internalAssert(!this._clippingAreaChanged);b.internalAssert(!this._wireframeChanged);var e=b.neighborCornerIndices.map(c=>a.findNeighborCornerTileExact(c,g=>!g.intersectsClippingArea||g.isLoaded||g.level===a.level)??null).map(c=>c?.intersectsClippingArea?c:null),m=this.geometryState.neighborData;for(let c=0;4>c;++c){const g=m.cornerPeerNeighbors[c],h=e[c];b.internalAssert(h===g,`Tile[${a.lij}].corner[${c}] out of date: cur=[${g?.lij}] exp=[${h?.lij}]`)}b.neighborEdgeIndices.forEach((c,g)=>{if(!l[g]){var h=
a.findNeighborTile(c,M=>(M.level===k||M?.isLoaded)&&M?.intersectsClippingArea);if(h){b.internalAssert(h.isLoaded||h.level===a.level);b.internalAssert(h===this.geometryState.neighborData.edgePeerNeighbors[g]);var q=k-h.level;if(h.isLoaded){var r=h.renderData;b.internalAssert(na.isEdgeNeighbor(a,h,c));b.internalAssert(0<=q);var u=2**q;if(0>q)b.internalAssert(!1);else{var n=d.geometryInfo,y=n.outerEdges[g],z=n.numVerticesPerSide-1,w=r.geometryInfo;if(w){n=this.geometryState.neighborData.edgePeerNeighbors[g];
if(n?.isLoaded){var G=n.renderData;b.internalAssert(n===n);b.internalAssert(d.geometryState.neighborData.edgePeerNeighborSamplerVersions[g]===G.geometryState.samplerDataVersion);b.internalAssert(this.geometryState.neighborData.edgePeerNeighborSamplerVersions[g]===G.geometryState.samplerDataVersion)}var Q=(g+2)%4,D=w.outerEdges[Q];n=y.count-1;G=D.count-1;b.internalAssert(n*u===G,`Tile[${a.lij}]:e${g},res=${n} edgeRes mismatch with`+` Neighbor[${h.lij}]:e${Q},res=${G} (expected:${n*u})`);n=a.extent;
G=c===T.NeighborIndex.NORTH||c===T.NeighborIndex.SOUTH;var E=D.count-1,H=E/2**q,F=y.count-1;if(1>H)b.internalAssert(1===F);else{b.internalAssert(H===F);b.internalAssert(X.isPowerOfTwo(H));w=w.numVerticesPerSide-1;b.internalAssert(0<q||H===Math.max(w,z));q=a.getNeighborEdgeStartVertexIndex(g,h);b.internalAssert(0<=q&&q<u);u=q*H;b.internalAssert(0<=u&&u<=E-H);var I=0,J=u;y.getVertexPos(B,0);y.getVertexPos(C,y.count-1);u=t.distance(B,C);u=Math.max(1,1E-4*u);for(q=0;q<=H;++q){y.getVertexPos(B,I);D.getVertexPos(C,
J);w=q/H;z=G?n[0]+w*(n[2]-n[0]):c===T.NeighborIndex.WEST?n[0]:n[2];const M=G?c===T.NeighborIndex.SOUTH?n[1]:n[3]:n[1]+w*(n[3]-n[1]),U=a.surface.extent;if(v.isNone(U)||ka.containsXY(U,z,M)){w=t.dist(B,C);E=t.len(B)-Y.earth.radius;F=t.len(C)-Y.earth.radius;const ba=w<u;ba||(console.warn("Tile edge vertex position mismatch: between"+` [${a.lij}].edge${g}[${I}/${y.count}] and`+` [${h.lij}].edge${Q}[${J}/${D.count}]`),v.isSome(U)&&console.warn("  surface extent\x3d ",U," x,y\x3d",z,",",M),z=x.create(),
t.subtract(z,d.localOrigin,r.localOrigin),0<t.len(z)&&console.warn(`   localOrigins: ${d.localOrigin} vs ${r.localOrigin}`+` d=${t.len(z)} [${z}]`),(()=>{const R=x.clone(B),ca=x.clone(C);a.updateEdgeElevations();h.updateEdgeElevations();y.getVertexPos(B,I);D.getVertexPos(C,J);const K=x.create();t.sub(K,B,R);0<t.len(K)&&console.warn(`  XXX Tile[${a.lij}] edge out of date: ${R} vs ${B} d=${t.len(K)} [${K}]`);t.sub(K,C,ca);0<t.len(K)&&console.warn(`  XXX Neighbor[${h.lij}] edge out of date: ${ca} vs ${C} d=${t.len(K)} [${K}]`)})(),
b.internalAssert(ba,"Mismatch in tile"+` [${a.lij}].edge[${g}][${I}/${y.count}] vs neighbor`+` [${h.lij}].edge[${Q}][${J}/${D.count}]`+` ${b.v32s(B)} vs ${b.v32s(C)}  dist=${w} h(t|n|d)=${E}|${F}|${F-E}`));y.getNormal(N,I);D.getNormal(O,J);t.normalize(da,N);t.normalize(ea,O);const fa=t.dot(da,ea);z=.01>1-fa||a===h;if(!z){const R=x.create();t.sub(R,N,O);w=()=>`Mismatch in tile edge normal ${b.lij2s(a.lij)} (${I}/${y.count-1}) edge ${g} vs neighbor ${b.lij2s(h.lij)}  (${J}/${D.count-1}) nedge ${Q} :`+
`${b.v32s(N)} vs ${b.v32s(O)}  dot = ${fa} : ${b.v32s(R)}`;console.warn("Mismatch in tile edge normal: ",w());a.updateEdgeElevations();h.updateEdgeElevations();E=x.create();F=x.create();y.getNormal(E,I);D.getNormal(F,J);t.equals(N,E)||console.warn("Missing update in tile normal: ",b.v32s(N)," \x3d\x3e ",b.v32s(E));t.equals(O,F)||console.warn("Missing update in neighbor normal: ",b.v32s(O)," \x3d\x3e ",b.v32s(F));b.internalAssert(z,w())}}I+=1;J+=1}}}else b.internalAssert(!1)}}else b.internalAssert(!h.isLeaf),
b.internalAssert(0===q)}else c=!a.surface.updatingRootTiles&&v.isSome(a.surface.rootTiles)&&0<a.surface.rootTiles.length&&a.shouldHaveNeighbor(c),b.internalAssert(!c)}})}}}}};ha._createClass(P,[{key:"tile",get:function(){return this._tile}},{key:"hasGeometry",get:function(){return this._hasGeometry}},{key:"vao",get:function(){return this._vao}},{key:"textureReference",get:function(){return this._textureRef.current}},{key:"nextTextureReference",get:function(){return this._textureRef.next}},{key:"textureFadeFactor",
get:function(){return this._textureRef.fadeFactor}},{key:"textureIsFading",get:function(){return this._textureRef.isFading}},{key:"estimatedGeometryMemoryUsage",get:function(){const a=v.mapOr(this.intersectionData,0,d=>d.estimatedMemoryUsage);return(this.geometryInfo.indices?.byteLength??0)+(this.geometryInfo.vertexAttributes?.byteLength??0)+a}},{key:"textureDescriptor",get:function(){return v.isSome(this._texture)?this._texture.descriptor:null}},{key:"test",get:function(){return{hasTexture:null!=
this._texture}}}]);return P}();const B=x.create(),C=x.create(),N=x.create(),O=x.create(),da=x.create(),ea=x.create(),A=[null,null,null,null];Object.defineProperty(S,"ActivationTime",{enumerable:!0,get:()=>W.ActivationTime});S.PatchRenderData=sa;S.neighborTileIfLoadedOrSelf=L;Object.defineProperty(S,Symbol.toStringTag,{value:"Module"})});