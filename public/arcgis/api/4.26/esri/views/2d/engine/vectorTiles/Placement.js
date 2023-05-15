// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../geometry/support/TileClipper ./GeometryUtils ./TextShaping ./decluttering/config ./style/StyleDefinition".split(" "),function(Q,Y,l,t,T,ka,u){let na=Y._createClass(function(I,G,a=0,d=-1,b=.5){this.x=I;this.y=G;this.angle=a;this.segment=d;this.minzoom=b}),aa=Y._createClass(function(I,G,a,d,b,c=.5,f=t.C_INFINITY){this.anchor=I;this.labelAngle=G;this.glyphAngle=a;this.page=d;this.alternateVerticalGlyph=b;this.minzoom=c;this.maxzoom=
f}),ha=Y._createClass(function(I,G,a,d,b,c,f,g,m,w,e,r){this.tl=I;this.tr=G;this.bl=a;this.br=d;this.mosaicRect=b;this.labelAngle=c;this.minAngle=f;this.maxAngle=g;this.anchor=m;this.minzoom=w;this.maxzoom=e;this.page=r}),ia=Y._createClass(function(I){this.shapes=I}),pa=function(){function I(){}var G=I.prototype;G.getIconPlacement=function(a,d,b){const c=new l.Point(a.x,a.y),f=b.rotationAlignment===u.RotationAlignment.MAP,g=b.keepUpright;let m=b.rotate*t.C_DEG_TO_RAD;f&&(m+=a.angle);a=new ia([]);
b.allowOverlap&&b.ignorePlacement||!ka.DECLUTTER_TILES||(a.iconColliders=[]);this._addIconPlacement(a,c,d,b,m);f&&g&&this._addIconPlacement(a,c,d,b,m+t.C_PI);return a};G._addIconPlacement=function(a,d,b,c,f){var g=b.pixelRatio;const m=b.width/g,w=b.height/g;var e=c.offset;let r=e[0];e=e[1];switch(c.anchor){case u.SymbolAnchor.CENTER:r-=m/2;e-=w/2;break;case u.SymbolAnchor.LEFT:e-=w/2;break;case u.SymbolAnchor.RIGHT:r-=m;e-=w/2;break;case u.SymbolAnchor.TOP:r-=m/2;break;case u.SymbolAnchor.BOTTOM:r-=
m/2;e-=w;break;case u.SymbolAnchor.BOTTOM_LEFT:e-=w;break;case u.SymbolAnchor.TOP_RIGHT:r-=m;break;case u.SymbolAnchor.BOTTOM_RIGHT:r-=m,e-=w}b=b.rect;var D=2/g,q=r-D,h=e-D,n=q+b.width/g,v=h+b.height/g;g=new l.Point(q,h);D=new l.Point(n,v);q=new l.Point(q,v);h=new l.Point(n,h);0!==f&&(n=Math.cos(f),v=Math.sin(f),g.rotate(n,v),D.rotate(n,v),q.rotate(n,v),h.rotate(n,v));b=new ha(g,h,q,D,b,f,0,256,d,.5,t.C_INFINITY,0);a.shapes.push(b);c.allowOverlap&&c.ignorePlacement||!ka.DECLUTTER_TILES||(b=c.size,
g=c.padding,a.iconColliders.push({xTile:d.x,yTile:d.y,dxPixels:r*b-g,dyPixels:e*b-g,hard:!c.optional,partIndex:0,width:m*b+2*g,height:w*b+2*g,angle:f,minLod:.5,maxLod:t.C_INFINITY}))};G.getTextPlacement=function(a,d,b,c){var f=new l.Point(a.x,a.y);const g=c.rotate*t.C_DEG_TO_RAD;var m=c.rotationAlignment===u.RotationAlignment.MAP;const w=c.keepUpright,e=c.padding;let r=.5;const D=m?a.angle:0,q=0<=a.segment&&m,h=c.allowOverlap&&c.ignorePlacement?null:[],n=[],v=!q;var k=Number.POSITIVE_INFINITY;let z=
Number.NEGATIVE_INFINITY,N=k,O=z;const oa=q?w:m&&w,E=c.size/T.SDF_GLYPH_SIZE;let U=!1;for(var x of d)if(x.vertical){U=!0;break}let y=0;x=0;if(!q&&U){var p=T.TextShaping.getTextBox(d,c.lineHeight*T.SDF_GLYPH_SIZE);switch(c.anchor){case u.SymbolAnchor.LEFT:y=p.height/2;x=-p.width/2;break;case u.SymbolAnchor.RIGHT:y=-p.height/2;x=p.width/2;break;case u.SymbolAnchor.TOP:y=p.height/2;x=p.width/2;break;case u.SymbolAnchor.BOTTOM:y=-p.height/2;x=-p.width/2;break;case u.SymbolAnchor.TOP_LEFT:y=p.height;break;
case u.SymbolAnchor.BOTTOM_LEFT:x=-p.width;break;case u.SymbolAnchor.TOP_RIGHT:x=p.width;break;case u.SymbolAnchor.BOTTOM_RIGHT:y=-p.height}}y+=c.offset[0]*T.SDF_GLYPH_SIZE;x+=c.offset[1]*T.SDF_GLYPH_SIZE;for(const J of d){var A=J.glyphMosaicItem;if(!A||A.rect.isEmpty)continue;d=A.rect;p=A.metrics;var C=A.page;if(h&&v){if(void 0!==Z&&Z!==J.y){var P=void 0,R=void 0;if(U){var Z=-O+y;P=k+x;R=O-N;k=z-k}else Z=k+y,P=N+x,R=z-k,k=O-N;h.push({xTile:a.x,yTile:a.y,dxPixels:Z*E-e,dyPixels:P*E-e,hard:!c.optional,
partIndex:1,width:R*E+2*e,height:k*E+2*e,angle:g,minLod:.5,maxLod:t.C_INFINITY});k=Number.POSITIVE_INFINITY;z=Number.NEGATIVE_INFINITY;N=k;O=z}Z=J.y}var H=[];if(q){if(A=(J.x+p.left-4+.5*A.metrics.width)*E*8,r=this._placeGlyph(a,r,A,b,a.segment,1,J.vertical,C,H),w&&(r=this._placeGlyph(a,r,A,b,a.segment,-1,J.vertical,C,H)),2<=r)break}else H.push(new aa(f,D,D,C,!1)),m&&w&&H.push(new aa(f,D+t.C_PI,D+t.C_PI,C,!1));C=J.x+p.left;A=J.y-T.SDF_GLYPH_BASELINE-p.top;P=C+p.width;R=A+p.height;let B,K,ba,ca;!q&&
U?J.vertical?(B=new l.Point(-((A+R)/2+p.width/2)-4+y,(C+P)/2-p.height/2-4+x),K=new l.Point(B.x+d.width,B.y+d.height),ba=new l.Point(B.x,K.y),ca=new l.Point(K.x,B.y)):(B=new l.Point(-A+4+y,C-4+x),K=new l.Point(B.x-d.height,B.y+d.width),ba=new l.Point(K.x,B.y),ca=new l.Point(B.x,K.y)):(B=new l.Point(C-4+y,A-4+x),K=new l.Point(B.x+d.width,B.y+d.height),ba=new l.Point(B.x,K.y),ca=new l.Point(K.x,B.y));let S,da,la,ma;for(const F of H){let V,W,X;F.alternateVerticalGlyph?(S||(S=new l.Point((C+P)/2+y-p.height/
2-4,(A+R)/2+x+p.width/2+4),da=new l.Point(S.x+d.height,S.y-d.width),la=new l.Point(da.x,S.y),ma=new l.Point(S.x,da.y)),H=S,V=la,W=ma,X=da):(H=B,V=ba,W=ca,X=K);const ea=A,ja=R,fa=F.glyphAngle+g;if(0!==fa){var L=Math.cos(fa),M=Math.sin(fa);H=H.clone();V=V?.clone();W=W?.clone();X=X?.clone();H.rotate(L,M);X?.rotate(L,M);V?.rotate(L,M);W?.rotate(L,M)}L=0;M=256;q&&U?J.vertical?F.alternateVerticalGlyph?(L=32,M=96):(L=224,M=32):(L=224,M=96):(L=192,M=64);n.push(new ha(H,W,V,X,d,F.labelAngle,L,M,F.anchor,F.minzoom,
F.maxzoom,F.page));!h||oa&&!this._legible(F.labelAngle)||(v?(C<k&&(k=C),ea<N&&(N=ea),P>z&&(z=P),ja>O&&(O=ja)):2>F.minzoom&&h.push({xTile:a.x,yTile:a.y,dxPixels:(C+y)*E-e,dyPixels:(ea+y)*E-e,hard:!c.optional,partIndex:1,width:(P-C)*E+2*e,height:(ja-ea)*E+2*e,angle:fa,minLod:F.minzoom,maxLod:F.maxzoom}))}}if(2<=r)return null;h&&v&&(U?(b=-O+y,f=k+x,m=O-N,k=z-k):(b=k+y,f=N+x,m=z-k,k=O-N),h.push({xTile:a.x,yTile:a.y,dxPixels:b*E-e,dyPixels:f*E-e,hard:!c.optional,partIndex:1,width:m*E+2*e,height:k*E+2*
e,angle:g,minLod:.5,maxLod:t.C_INFINITY}));a=new ia(n);h&&0<h.length&&(a.textColliders=h);return a};G._legible=function(a){a=t.radToByte(a);return 65>a||193<=a};G._placeGlyph=function(a,d,b,c,f,g,m,w,e){const r=0>g?t.positiveMod(a.angle+t.C_PI,t.C_2PI):a.angle;let D=0;0>b&&(g*=-1,b*=-1,D=t.C_PI);0<g&&++f;a=new l.Point(a.x,a.y);let q=c[f];var h=t.C_INFINITY;if(c.length<=f)return h;for(;;){var n=q.x-a.x,v=q.y-a.y;const k=Math.sqrt(n*n+v*v),z=Math.max(b/k,d);n=t.positiveMod(Math.atan2(v/k,n/k)+D,t.C_2PI);
e.push(new aa(a,r,n,w,!1,z,h));m&&e.push(new aa(a,r,n,w,!0,z,h));if(z<=d)return z;a=q.clone();do{f+=g;if(c.length<=f||0>f)return z;q=c[f]}while(a.isEqual(q));h=q.x-a.x;n=q.y-a.y;v=Math.sqrt(h*h+n*n);h*=k/v;n*=k/v;a.x-=h;a.y-=n;h=z}};return Y._createClass(I)}();Q.Anchor=na;Q.PlacedSymbol=ha;Q.Placement=ia;Q.PlacementEngine=pa;Q.TILE_COORD_SIZE=4096;Q.TILE_PIXEL_RATIO=8;Q.TILE_PIXEL_SIZE=512;Object.defineProperty(Q,Symbol.toStringTag,{value:"Module"})});