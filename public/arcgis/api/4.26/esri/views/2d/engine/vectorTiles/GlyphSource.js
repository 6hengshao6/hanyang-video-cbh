// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../request","../../../../core/pbf"],function(k,r,t){let l=function(){function e(a){this._metrics=[];this._bitmaps=[];if(a)for(;a.next();)switch(a.tag()){case 1:const b=a.getMessage();for(;b.next();)switch(b.tag()){case 3:const c=b.getMessage();let f,h,g,m,n,p,q;for(;c.next();)switch(c.tag()){case 1:f=c.getUInt32();break;case 2:h=c.getBytes();break;case 3:g=c.getUInt32();break;case 4:m=c.getUInt32();break;case 5:n=c.getSInt32();break;
case 6:p=c.getSInt32();break;case 7:q=c.getUInt32();break;default:c.skip()}c.release();f&&(this._metrics[f]={width:g,height:m,left:n,top:p,advance:q},this._bitmaps[f]=h);break;default:b.skip()}b.release();break;default:a.skip()}}var d=e.prototype;d.getMetrics=function(a){return this._metrics[a]};d.getBitmap=function(a){return this._bitmaps[a]};return k._createClass(e)}(),u=function(){function e(){this._ranges=[]}var d=e.prototype;d.getRange=function(a){return this._ranges[a]};d.addRange=function(a,
b){this._ranges[a]=b};return k._createClass(e)}();return function(){function e(a){this._glyphInfo={};this._baseURL=a}var d=e.prototype;d.getRange=function(a,b){const c=this._getFontStack(a);if(c.getRange(b))return Promise.resolve();const f=256*b,h=f+255;if(this._baseURL)return a=this._baseURL.replace("{fontstack}",a).replace("{range}",f+"-"+h),r(a,{responseType:"array-buffer"}).then(g=>{c.addRange(b,new l(new t(new Uint8Array(g.data),new DataView(g.data))))}).catch(()=>{c.addRange(b,new l)});c.addRange(b,
new l);return Promise.resolve()};d.getGlyph=function(a,b){if(a=this._getFontStack(a)){var c=Math.floor(b/256);if(!(256<c)&&(a=a.getRange(c)))return{metrics:a.getMetrics(b),bitmap:a.getBitmap(b)}}};d._getFontStack=function(a){let b=this._glyphInfo[a];b||(b=this._glyphInfo[a]=new u);return b};return k._createClass(e)}()});