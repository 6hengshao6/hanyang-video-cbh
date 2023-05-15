// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/screenUtils ../../color ../../definitions ../../GeometryUtils ../../number ../../materialKey/MaterialKey ./util ./WGLBaseFillTemplate ./WGLMeshTemplate".split(" "),function(A,w,B,d,C,q,D,x,E,F){return function(G){function m(a,b,f,e,r,n,t,h,k,p,c,l,u,y,z,v){var g=H.call(this);g._effects=y;a=D.FillMaterialKey.load(a);b&&(a.sdf=b.sdf,a.pattern=!0,a.textureBinding=b.textureBinding);g.fillColor=f;g.tl=e;g.br=r;g.aux21=q.i1616to32(n,
t);g.aux22=q.i1616to32(h,k);g.aux3=q.i8888to32(p,c,l,0);g._bitset=u;g._minMaxZoom=q.i1616to32(Math.round(z*d.MIN_MAX_ZOOM_PRECISION_FACTOR),Math.round(v*d.MIN_MAX_ZOOM_PRECISION_FACTOR));g._materialKey=a.data;return g}A._inherits(m,G);var H=A._createSuper(m);m.fromCIMFill=function(a,b,f){var e=a.color;e=e&&B.premultiplyAlphaRGBA(e)||0;const r=a.materialKey,[n,t]=x.getMinMaxZoom(a.scaleInfo,f);f=(a.colorLocked?d.BITSET_GENERIC_LOCK_COLOR:0)|(a.applyRandomOffset?d.BITSET_FILL_RANDOM_PATTERN_OFFSET:
0)|(a.sampleAlphaOnly?d.BITSET_GENERIC_CONSIDER_ALPHA_ONLY:0)|(a.hasUnresolvedReplacementColor?d.BITSET_FILL_HAS_UNRESOLVED_REPLACEMENT_COLOR:0);if(!b)return new m(r,null,e,0,0,0,0,0,0,0,0,0,f,a.effects,n,t);const {rect:h,width:k,height:p}=b;var c=a.scaleX||1,l=h.x+d.SPRITE_PADDING;const u=h.y+d.SPRITE_PADDING;var y=l+k;const z=u+p;var v=w.pt2px(a.height);c*=v;"CIMHatchFill"===a.cim.type&&(c*=k/p);v=Math.round(v);0>=v&&(v=z-u);c=Math.round(c);0>=c&&(c=y-l);const g=w.pt2px(a.offsetX||0),I=w.pt2px(-a.offsetY||
0);l=q.i1616to32(l,u);y=q.i1616to32(y,z);return new m(r,b,e,l,y,c,v,g,I,128,128,C.degToByte(a.angle),f,a.effects,n,t)};m.fromSimpleFill=function(a,b,f=!1){var {color:e}=a;e=e&&"esriSFSNull"!==a.style&&B.premultiplyAlphaRGBAArray(e)||0;f=f?d.BITSET_GENERIC_LOCK_COLOR:0;const r=a.materialKey;if(b){const {rect:h,width:k,height:p,pixelRatio:c}=b;var n=h.x+d.SPRITE_PADDING;const l=h.y+d.SPRITE_PADDING;var t=n+k;const u=l+p;n=q.i1616to32(n,l);t=q.i1616to32(t,u);b=new m(r,b,e,n,t,k/c,p/c,0,0,128,128,0,f,
null,x.DEFAULT_MIN_ZOOM,x.DEFAULT_MAX_ZOOM)}else b=new m(r,null,e,0,0,0,0,0,0,0,0,0,f,null,x.DEFAULT_MIN_ZOOM,x.DEFAULT_MAX_ZOOM);b._maybeAddLineTemplate(a);return b};m.fromPictureFill=function(a,b,f=!1){const e=d.PICTURE_FILL_COLOR,{rect:r,width:n,height:t}=b;var h=r.x+d.SPRITE_PADDING,k=r.y+d.SPRITE_PADDING,p=h+n,c=k+t;h=q.i1616to32(h,k);p=q.i1616to32(p,c);c=Math.round(w.pt2px(a.width));k=Math.round(w.pt2px(a.height));const l=w.pt2px(a.xoffset),u=w.pt2px(-a.yoffset);b=new m(a.materialKey,b,e,h,
p,c,k,l,u,128*a.xscale,128*a.yscale,0,f?d.BITSET_GENERIC_LOCK_COLOR:0,null,x.DEFAULT_MIN_ZOOM,x.DEFAULT_MAX_ZOOM);b._maybeAddLineTemplate(a);return b};return A._createClass(m)}(E(F))});