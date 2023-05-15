// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/maybe ../../../../../../core/screenUtils ../../color ../../definitions ../../GeometryUtils ../../number ../../materialKey/MaterialKey ./util ./WGLBaseFillTemplate ./WGLDynamicMeshTemplate ../../util/Result".split(" "),function(v,A,p,y,k,z,q,B,l,C,D,E){return function(F){function r(a,c,t){var b=G.call(this,a);b._minMaxZoom=q.i1616to32(Math.round(c*k.MIN_MAX_ZOOM_PRECISION_FACTOR),Math.round(t*k.MIN_MAX_ZOOM_PRECISION_FACTOR));
l.isFunction(a.color)?b._dynamicPropertyMap.set("fillColor",(d,f,g)=>(d=a.color(d,f,g))&&y.premultiplyAlphaRGBA(d)||0):(c=a.color,b.fillColor=c&&y.premultiplyAlphaRGBA(c)||0);const h="CIMMarkerPlacementInsidePolygon"===a.cim.placement?.type&&a.cim.placement.shiftOddRows?2:1,e=a.height;l.isFunction(e)?b._dynamicPropertyMap.set("_height",(d,f,g)=>e(d,f,g)*h):b._height=(e||0)*h;const m=a.offsetX;l.isFunction(m)?b._dynamicPropertyMap.set("_offsetX",(d,f,g)=>p.pt2px(m(d,f,g))):b._offsetX=p.pt2px(m||0);
const n=a.offsetY;l.isFunction(n)?b._dynamicPropertyMap.set("_offsetY",(d,f,g)=>p.pt2px(-n(d,f,g))):b._offsetY=p.pt2px(-n||0);c=a.scaleX;l.isFunction(c)?b._dynamicPropertyMap.set("_scaleX",c):b._scaleX=c||1;const u=a.angle;l.isFunction(u)?b._dynamicPropertyMap.set("_angle",(d,f,g)=>z.degToByte(u(d,f,g))):b._angle=z.degToByte(u)||0;A.isSome(a.effects)&&(c=a.effects,l.isFunction(c)?b._dynamicPropertyMap.set("_effects",c):b._effects=c);b._cimFillLayer=a;b._bitset=(a.colorLocked?k.BITSET_GENERIC_LOCK_COLOR:
0)|(a.applyRandomOffset?k.BITSET_FILL_RANDOM_PATTERN_OFFSET:0)|(a.sampleAlphaOnly?k.BITSET_GENERIC_CONSIDER_ALPHA_ONLY:0)|(a.hasUnresolvedReplacementColor?k.BITSET_FILL_HAS_UNRESOLVED_REPLACEMENT_COLOR:0);b._fillMaterialKey=a.materialKey;return b}v._inherits(r,F);var G=v._createSuper(r);r.fromCIMFill=function(a,c){const [t,b]=l.getMinMaxZoom(a.scaleInfo,c);return new r(a,t,b)};r.prototype.bindFeature=function(a,c,t){const b=a.readLegacyFeature();this._dynamicPropertyMap.forEach((m,n)=>{this[n]=m(b,
c,t)});a=B.FillMaterialKey.load(this._fillMaterialKey);var h=this._materialCache,e=this._cimFillLayer.materialHash;e=e(b,c,t);e=h.get(e);h=null;e&&E.ok(e.spriteMosaicItem)&&(h=e.spriteMosaicItem);if(h){const {rect:m,width:n,height:u}=h;e=m.x+k.SPRITE_PADDING;const d=m.y+k.SPRITE_PADDING,f=e+n,g=d+u;let w=Math.round(p.pt2px(this._height));0>=w&&(w=g-d);let x=Math.round(p.pt2px(this._height/u*n||0));0>=x&&(x=f-e);const H=this._scaleX;this.tl=q.i1616to32(e,d);this.br=q.i1616to32(f,g);this.aux21=q.i1616to32(x,
w);this.aux22=q.i1616to32(this._offsetX,this._offsetY);this.aux3=q.i8888to32(128*H,128,this._angle,0);a.sdf=h.sdf;a.pattern=!0;a.textureBinding=h.textureBinding}else this.aux3=this.aux22=this.aux21=this.br=this.tl=0,a.sdf=!1,a.pattern=!1,a.textureBinding=0;this._materialKey=a.data};return v._createClass(r)}(C(D))});