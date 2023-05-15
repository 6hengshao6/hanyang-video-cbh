// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/maybe ../../../../../../core/screenUtils ../../../../../../geometry/GeometryCursor ../../../../../../layers/graphics/featureConversionUtils ../../../../../../symbols/cim/CIMCursor ../../../../../../symbols/cim/placements/CIMMarkerPlacementHelper ../../definitions ../../enums ../../number ../../materialKey/MaterialKey ./shapingUtils".split(" "),function(y,p,E,z,A,F,G,H,I,l,B,J){const m=l.i1616to32(4,4),r=l.i1616to32(4,
2),n=l.i1616to32(4,6),C=[r,r,n,n],D=[r,n,r,n],K=[n,n,m,m],L=[m,m,n,n],M=[n,m,n,m],N=[m,n,m,n];return O=>function(k){function t(...a){a=P.call(this,...a);a._isCIM=!1;a._vertexBoundsScale=1;a.geometryType=I.WGLGeometryType.TEXT;a._aux=l.i8888to32(0,0,a._referenceSize,a._bitset);return a}y._inherits(t,k);var P=y._createSuper(t);k=t.prototype;k.bindTextInfo=function(a,c){this._shapingInfo=a&&a.length?p.applySome(a,f=>J.shapeGlyphs(f,c,{scale:this._scale,angle:this._angle,xOffset:this._xOffset,yOffset:this._yOffset,
hAlign:this._xAlignD,vAlign:this._yAlignD,maxLineWidth:Math.max(32,Math.min(this._lineWidth,512)),lineHeight:H.MAGIC_LABEL_LINE_HEIGHT*Math.max(.25,Math.min(this._lineHeight,4)),decoration:this._decoration,isCIM:this._isCIM,hasBackground:!!this._backgroundColor,borderLineSize:this._borderLineSize})):null};k._write=function(a,c,f,e){const b=c.getDisplayId();this._writeGeometry(a,c,b,f,e)};k._writeGeometry=function(a,c,f,e,b){const d=this._shapingInfo;if(!p.isNone(d)){if(p.isSome(this._textPlacement))return this._writePlacedText(a,
f,d,e,c,b);c=b?A.deltaDecodeGeometry(A.convertFromGeometry(b),2):"esriGeometryPolygon"===c.geometryType?c.readCentroid():c.readGeometryForDisplay();if(!p.isNone(c)){if(c.isPoint){const [g,h]=c.coords;return!a.hasAggregates&&a.hasPixelBufferEnabled&&(0>g||512<=g||0>h||512<=h)?void 0:this._writeGlyphs(a,f,{x:g,y:h},d)}c.forEachVertex((g,h)=>this._writeGlyphs(a,f,{x:g,y:h},d))}}};k._writePlacedText=function(a,c,f,e,b,d){var g=p.unwrap(this._textPlacement);d&&F.deltaDecodeGeometry(d);b=d?z.getJSONCursor(d):
z.getOptimizedCursor(b.readGeometryForDisplay(),b.geometryType??null,!0);if(e=G.CIMMarkerPlacementHelper.getPlacement(b,g,E.pt2px(1),a.tileKey,e.geometryEngine))for(d=e.next();null!=d;)g=-d.getAngle(),f.setRotation(g),b=d.tx,d=-d.ty,0>b||512<=b||0>d||512<=d||(this._writeGlyphs(a,c,{x:b,y:d},f),f.setRotation(-g)),d=e.next()};k._writeGlyphs=function(a,c,f,e){const b=B.MaterialKeyBase.load(this._materialKey),d=l.i1616to32(Math.round(8*f.x),Math.round(8*f.y)),g=this._vertexBoundsScale,{bounds:h,background:q,
glyphs:u}=e;0<u.length&&(this._borderLineColor||this._backgroundColor)&&(b.textureBinding=u[0].textureBinding,a.recordStart(c,b.data,this.geometryType,!0),this._writeBackgroundGeometry(a,c,f,h,q),a.recordEnd());const v=2*Math.max(h.width,h.height);for(const w of e.glyphs)b.textureBinding=w.textureBinding,a.recordStart(c,b.data,this.geometryType,!0),a.vertexBounds(f.x+h.x+this._xOffset,f.y+h.y-this._yOffset,v*g,v*g),this._writeVertices(a,c,d,w),a.recordEnd()};k._writeGlyph=function(a,c,f,e,b){var d=
B.MaterialKeyBase.load(this._materialKey);const g=l.i1616to32(Math.round(8*f),Math.round(8*e));d.textureBinding=b.textureBinding;a.recordStart(c,d.data,this.geometryType,!0);d=b.bounds;const h=this._vertexBoundsScale;a.vertexBounds(f+d.x*h,e+d.y*h,d.width*h,d.height*h);this._writeVertices(a,c,g,b);a.recordEnd()};k._writeVertices=function(a,c,f,e){const b=a.vertexCount();this._writeVertexCommon(a,c,f,e);a.vertexWrite(e.offsets.upperLeft);a.vertexWrite(e.texcoords.upperLeft);a.vertexEnd();this._writeVertexCommon(a,
c,f,e);a.vertexWrite(e.offsets.upperRight);a.vertexWrite(e.texcoords.upperRight);a.vertexEnd();this._writeVertexCommon(a,c,f,e);a.vertexWrite(e.offsets.lowerLeft);a.vertexWrite(e.texcoords.lowerLeft);a.vertexEnd();this._writeVertexCommon(a,c,f,e);a.vertexWrite(e.offsets.lowerRight);a.vertexWrite(e.texcoords.lowerRight);a.vertexEnd();a.indexWrite(b+0);a.indexWrite(b+1);a.indexWrite(b+2);a.indexWrite(b+1);a.indexWrite(b+3);a.indexWrite(b+2)};k._writeVertexCommon=function(a,c,f,e){e=this._color;const b=
this._haloColor,d=l.i8888to32(0,0,this._referenceSize,this._bitset),g=l.i8888to32(0,0,this._size,this._haloSize);a.vertexWrite(f);a.vertexWrite(c);a.vertexWrite(e);a.vertexWrite(b);a.vertexWrite(g);a.vertexWrite(d);a.vertexWrite(this._minMaxZoom)};k._writeBackgroundVertex=function(a,c,f,e,b,d){const g=l.i8888to32(0,1,this._referenceSize,this._bitset),h=l.i8888to32(0,0,this._size,this._haloSize),q=l.i8888to32(0,0,0,0);a.vertexWrite(f);a.vertexWrite(c);a.vertexWrite(e);a.vertexWrite(q);a.vertexWrite(h);
a.vertexWrite(g);a.vertexWrite(this._minMaxZoom);a.vertexWrite(b);a.vertexWrite(d);a.vertexEnd()};k._writeBackgroundQuad=function(a,c,f,e,b,d){const g=a.vertexCount();this._writeBackgroundVertex(a,c,f,e,b.upperLeft,d[0]);this._writeBackgroundVertex(a,c,f,e,b.upperRight,d[1]);this._writeBackgroundVertex(a,c,f,e,b.lowerLeft,d[2]);this._writeBackgroundVertex(a,c,f,e,b.lowerRight,d[3]);a.indexWrite(g+0);a.indexWrite(g+1);a.indexWrite(g+2);a.indexWrite(g+1);a.indexWrite(g+3);a.indexWrite(g+2)};k._writeBackgroundGeometry=
function(a,c,f,e,b){const d=l.i1616to32(Math.round(8*f.x),Math.round(8*f.y)),{x:g,y:h,width:q,height:u}=e;e=2*Math.max(q,u);a.vertexBounds(f.x+g+this._xOffset,f.y+h-this._yOffset,e*this._vertexBoundsScale,e*this._vertexBoundsScale);this._backgroundColor&&this._writeBackgroundQuad(a,c,d,this._backgroundColor,b.main,[m,m,m,m]);if(this._borderLineColor||this._backgroundColor){const [v,w,Q,R,x]=this._borderLineColor&&this._borderLineSize&&0<this._borderLineSize?[C,C,D,D,this._borderLineColor]:[K,L,M,
N,this._backgroundColor];this._writeBackgroundQuad(a,c,d,x,b.top,v);this._writeBackgroundQuad(a,c,d,x,b.bot,w);this._writeBackgroundQuad(a,c,d,x,b.left,Q);this._writeBackgroundQuad(a,c,d,x,b.right,R)}};return y._createClass(t)}(O)});