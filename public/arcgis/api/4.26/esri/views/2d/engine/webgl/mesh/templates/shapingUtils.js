// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/screenUtils ../../../../../../chunks/mat2d ../../../../../../chunks/mat2df32 ../../../../../../chunks/vec2 ../../../../../../chunks/vec2f32 ../../alignmentUtils ../../number ../../Rect ../../collisions/BoundingBox".split(" "),function(E,H,M,w,y,z,K,N,u,O,C){function D(g,h){g.forEach(a=>z.transformMat2d(a,a,h));return{upperLeft:u.i1616to32(8*g[0][0],8*g[0][1]),upperRight:u.i1616to32(8*g[1][0],8*g[1][1]),lowerLeft:u.i1616to32(8*
g[2][0],8*g[2][1]),lowerRight:u.i1616to32(8*g[3][0],8*g[3][1])}}const P=Math.PI/180;let I=function(){function g(a,c,b,d){this._rotationT=y.create();this.minZoom=this._yBounds=this._xBounds=0;this.maxZoom=255;this._bounds=null;const f=b.rect,e=new Float32Array(8);a*=d;c*=d;const m=b.code?f.width*d:b.metrics.width,k=b.code?f.height*d:b.metrics.height;this.width=m;this.height=k;e[0]=a;e[1]=c;e[2]=a+m;e[3]=c;e[4]=a;e[5]=c+k;e[6]=a+m;e[7]=c+k;this._data=e;this._setTextureCoords(f);this._scale=d;this._mosaic=
b;this.x=a;this.y=c;this.maxOffset=Math.max(a+m,c+k)}var h=g.prototype;h.setTransform=function(a){this._transform=a;this._offsets=null};h._setOffsets=function(a){this._offsets||(this._offsets={upperLeft:0,upperRight:0,lowerLeft:0,lowerRight:0});const c=this._offsets,b=new Float32Array(8),d=w.multiply(y.create(),this._rotationT,this._transform);y.transformMany(b,a,d);c.upperLeft=u.i1616to32(8*b[0],8*b[1]);c.upperRight=u.i1616to32(8*b[2],8*b[3]);c.lowerLeft=u.i1616to32(8*b[4],8*b[5]);c.lowerRight=u.i1616to32(8*
b[6],8*b[7])};h._setTextureCoords=function({x:a,y:c,width:b,height:d}){this._texcoords={upperLeft:u.i1616to32(a,c),upperRight:u.i1616to32(a+b,c),lowerLeft:u.i1616to32(a,c+d),lowerRight:u.i1616to32(a+b,c+d)}};H._createClass(g,[{key:"mosaic",get:function(){return this._mosaic}},{key:"angle",get:function(){return this._angle},set:function(a){this._angle=a;w.fromRotation(this._rotationT,-a);this._setOffsets(this._data)}},{key:"xTopLeft",get:function(){return this._data[0]}},{key:"yTopLeft",get:function(){return this._data[1]}},
{key:"xBottomRight",get:function(){return this._data[6]}},{key:"yBottomRight",get:function(){return this._data[7]}},{key:"texcoords",get:function(){return this._texcoords}},{key:"textureBinding",get:function(){return this._mosaic.textureBinding}},{key:"offsets",get:function(){this._offsets||this._setOffsets(this._data);return this._offsets}},{key:"char",get:function(){return String.fromCharCode(this._mosaic.code)}},{key:"code",get:function(){return this._mosaic.code}},{key:"bounds",get:function(){if(!this._bounds){const {height:f,
width:e}=this._mosaic.metrics;var a=e*this._scale,c=Math.abs(f)*this._scale,b=new Float32Array(8);b[0]=this.x;b[1]=this.y;b[2]=this.x+a;b[3]=this.y;b[4]=this.x;b[5]=this.y+c;b[6]=this.x+a;b[7]=this.y+c;a=w.multiply(y.create(),this._rotationT,this._transform);y.transformMany(b,b,a);c=a=Infinity;let m=0;var d=0;for(let k=0;4>k;k++){const l=b[2*k],r=b[2*k+1];a=Math.min(a,l);c=Math.min(c,r);m=Math.max(m,l);d=Math.max(d,r)}b=m-a;d-=c;this._bounds=new C(a+b/2,c+d/2,b,d)}return this._bounds}}]);return g}(),
L=function(){function g(a,c,b){this._rotation=0;this._decorate(a,c,b);this.glyphs=a;this.bounds=this._createBounds(a);this.isMultiline=1<c.length;this._hasRotation=0!==b.angle;this._transform=this._createGlyphTransform(this.bounds,b);if((this._borderLineSize=b.borderLineSize)||b.hasBackground)[this.bounds,this.background]=this.shapeBackground(this._transform);for(const d of a)d.setTransform(this._transform)}var h=g.prototype;h.setRotation=function(a){if(0!==a||0!==this._rotation){this._rotation=a;
var c=this._transform;a=w.fromRotation(y.create(),a);w.multiply(c,a,c);for(const b of this.glyphs)b.setTransform(this._transform)}};h._decorate=function(a,c,b){if(b.decoration&&"none"!==b.decoration&&a.length){var d=b.scale;b="underline"===b.decoration?30:20;var f=a[0].textureBinding;for(const l of c){const r=l.startX*d,t=l.startY*d;c=a;var e=c.push;var m=(l.width+l.glyphWidthEnd)*d;var k=f;m={code:0,page:0,sdf:!0,rect:new O(0,0,11,8),textureBinding:k,metrics:{advance:0,height:4,width:m,left:0,top:0}};
e.call(c,new I(r,t+b*d,m,1))}}};h.shapeBackground=function(a){const c=(1.5+M.pt2px(this._borderLineSize||0))/2;var b=this._borderLineSize?c:0;const {xmin:d,ymin:f,xmax:e,ymax:m,x:k,y:l,width:r,height:t}=this.bounds,q=[d-8,f-8],v=[e+8,f-8],n=[d-8,m+8],p=[e+8,m+8],A=D([[q[0]-c,q[1]-c],[v[0]+c,v[1]-c],[q[0]+b,q[1]+b],[v[0]-b,v[1]+b]],a),F=D([[n[0]+b,n[1]-b],[p[0]-b,p[1]-b],[n[0]-c,n[1]+c],[p[0]+c,p[1]+c]],a),J=D([[q[0]-c,q[1]-c],[q[0]+b,q[1]+b],[n[0]-c,n[1]+c],[n[0]+b,n[1]-b]],a);b=D([[v[0]-b,v[1]+b],
[v[0]+c,v[1]-c],[p[0]-b,p[1]-b],[p[0]+c,p[1]+c]],a);a={main:D([q,v,n,p],a),top:A,bot:F,left:J,right:b};return[new C(k,l,r+2*c,t+2*c),a]};h._createBounds=function(a){let c=Infinity,b=Infinity,d=0;var f=0;for(const e of a)c=Math.min(c,e.xTopLeft),b=Math.min(b,e.yTopLeft),d=Math.max(d,e.xBottomRight),f=Math.max(f,e.yBottomRight);a=d-c;f-=b;return new C(c+a/2,b+f/2,a,f)};h._createGlyphTransform=function(a,c){const b=P*c.angle,d=y.create(),f=K.create();w.translate(d,d,z.set(f,c.xOffset,-c.yOffset));c.isCIM?
w.rotate(d,d,b):(w.translate(d,d,z.set(f,a.x,a.y)),w.rotate(d,d,b),w.translate(d,d,z.set(f,-a.x,-a.y)));return d};H._createClass(g,[{key:"boundsT",get:function(){var a=this.bounds;const c=z.set(K.create(),a.x,a.y);z.transformMat2d(c,c,this._transform);return this._hasRotation?(a=Math.max(a.width,a.height),new C(c[0],c[1],a,a)):new C(c[0],c[1],a.width,a.height)}}]);return g}(),G=H._createClass(function(g,h,a,c,b,d){this.startY=this.startX=this.glyphWidthEnd=0;this.start=Math.max(0,Math.min(h,a));this.end=
Math.max(0,Math.max(h,a));this.end<g.length&&(this.glyphWidthEnd=g[this.end].metrics.width);this.width=c;this.yMin=b;this.yMax=d});E.ShapedGlyph=I;E.ShapingInfo=L;E.shapeGlyphs=function(g,h,a){const c=a.scale,b=[],d=[];var f=1/a.scale*a.maxLineWidth;var e=h?g.length-1:0,m=h?-1:g.length;h=h?-1:1;var k=e,l=0,r=0;let t=k,q=t,v=0,n=Infinity,p=0;for(;k!==m;){const {code:B,metrics:x}=g[k];var A=Math.abs(x.top);10!==B&&32!==B&&(n=Math.min(n,A),p=Math.max(p,A+x.height));10===B?(k!==e&&(d.push(new G(g,t,k-
h,l,n,p)),n=Infinity,p=0),l=0,t=k+h,q=k+h,r=0):32===B?(q=k+h,r=0,v=x.advance,l+=x.advance):(l>f&&(q!==t?(A=q-2*h,l-=v,d.push(new G(g,t,A,l-r,n,p)),n=Infinity,p=0,t=q,l=r):(d.push(new G(g,t,k-h,l,n,p)),n=Infinity,p=0,q=t=k,l=0)),l+=x.advance,r+=x.advance);k+=h}f=new G(g,t,k-h,l,n,p);0<=f.start&&f.end<g.length&&d.push(f);for(f=0;f<d.length;f++);e=d[0].yMin;f=d[d.length-1].yMax+a.lineHeight*(d.length-1)+("underline"===a.decoration?4:0)-e;const {vAlign:F,hAlign:J}=a;m=F===N.VAlign.Baseline?1:0;f=(1-m)*
-e+f/2*(m?0:F-1)+-26*(m?1:0);for(e=0;e<d.length;e++){const {start:B,end:x,width:Q}=d[e];m=Q/2*(J+1)*-1-3;h=e*a.lineHeight+f-3;d[e].startX=m;d[e].startY=h;for(k=B;k<=x;k++)l=g[k],10!==l.code&&(r=new I(m+l.metrics.left,h-l.metrics.top,l,c),m+=l.metrics.advance,b.push(r))}return new L(b,d,a)};Object.defineProperty(E,Symbol.toStringTag,{value:"Module"})});