// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/maybe ../../../core/RandomLCG ../CIMPlacements ../enums".split(" "),function(z,A,D,E,F,y){let B=function(){function m(){}m.local=function(){null===m.instance&&(m.instance=new m);return m.instance};m.prototype.execute=function(v,d,a,c,e){return new G(v,d,a,c,e)};return A._createClass(m)}();B.instance=null;let G=function(){function m(d,a,c,e,b){this._currentY=this._currentX=this._yMax=this._yMin=this._xMax=this._xMin=0;this._accelerationMap=
null;this._testInsidePolygon=!1;this._verticalSubdivision=!0;this._stepX=Math.abs(a.stepX??16)*c;this._stepY=Math.abs(a.stepY??16)*c;if(0!==this._stepX&&0!==this._stepY){this._gridType=a.gridType??y.PlacementGridType.Fixed;if(this._gridType===y.PlacementGridType.Random)this._randomLCG=new E(1*(a.seed??13)),this._randomness=(a.randomness??100)/100,this._gridAngle=0,this._shiftOddRows=!1,this._cosAngle=1,this._offsetY=this._offsetX=this._sinAngle=0,this._buildRandomValues();else{this._randomness=0;
this._gridAngle=a.gridAngle??0;this._shiftOddRows=a.shiftOddRows??!1;this._offsetX=(a.offsetX??0)*c;this._offsetY=(a.offsetY??0)*c;this._cosAngle=Math.cos(this._gridAngle/180*Math.PI);this._sinAngle=-Math.sin(this._gridAngle/180*Math.PI);if(this._stepX)if(0>this._offsetX)for(;this._offsetX<-.5*this._stepX;)this._offsetX+=this._stepX;else for(;this._offsetX>=.5*this._stepX;)this._offsetX-=this._stepX;if(this._stepY)if(0>this._offsetY)for(;this._offsetY<-.5*this._stepY;)this._offsetY+=this._stepY;else for(;this._offsetY>=
.5*this._stepY;)this._offsetY-=this._stepY}this._graphicOriginY=this._graphicOriginX=0;if(null!=e){const [,k,f]=e.split("/");a=parseFloat(k);this._graphicOriginX=512*-parseFloat(f);this._graphicOriginY=512*a;this._testInsidePolygon=!0}this._internalPlacement=new F.Placement;this._calculateMinMax(d);this._geometryCursor=d}}var v=m.prototype;v.next=function(){return this._geometryCursor?this._nextInside():null};v._buildRandomValues=function(){if(!m._randValues){m._randValues=[];for(let d=0;24>d;d++)for(let a=
0;24>a;a++)m._randValues.push(this._randomLCG.getFloat()),m._randValues.push(this._randomLCG.getFloat())}};v._calculateMinMax=function(d){this._yMax=this._yMin=this._xMax=this._xMin=0;let a,c,e,b,k,f,g,t;a=c=g=k=Number.MAX_VALUE;e=b=t=f=-Number.MAX_VALUE;var q=1!==this._cosAngle;for(d.reset();d.nextPath();)for(;d.nextPoint();){var p=d.x;var l=d.y;var h=p-this._graphicOriginX-this._offsetX;var r=l-this._graphicOriginY-this._offsetY;if(q){var n=this._cosAngle*h-this._sinAngle*r;h=this._sinAngle*h+this._cosAngle*
r}else n=h,h=r;a=Math.min(a,n);e=Math.max(e,n);c=Math.min(c,h);b=Math.max(b,h);k=Math.min(k,l);f=Math.max(f,l);g=Math.min(g,p);t=Math.max(t,p)}k=k!==Number.MAX_VALUE?k:-512-this._stepY;f=f!==-Number.MAX_VALUE?f:this._stepY;g=g!==Number.MAX_VALUE?g:-this._stepX;t=t!==-Number.MAX_VALUE?t:512+this._stepX;this._polygonMin=(this._verticalSubdivision=f-k>=t-g)?k:g;if(this._testInsidePolygon){n=0-this._graphicOriginX-this._offsetX-this._stepX;l=512-this._graphicOriginX-this._offsetX+this._stepX;p=-512-this._graphicOriginY-
this._offsetY-this._stepY;h=0-this._graphicOriginY-this._offsetY+this._stepY;if(q){q=[[n,p],[n,h],[l,p],[l,h]];n=p=Number.MAX_VALUE;l=h=-Number.MAX_VALUE;for(const u of q)q=this._cosAngle*u[0]-this._sinAngle*u[1],r=this._sinAngle*u[0]+this._cosAngle*u[1],n=Math.min(n,q),l=Math.max(l,q),p=Math.min(p,r),h=Math.max(h,r)}a=a!==Number.MAX_VALUE?Math.max(a,n):n;c=c!==Number.MAX_VALUE?Math.max(c,p):p;e=e!==-Number.MAX_VALUE?Math.min(e,l):l;b=b!==-Number.MAX_VALUE?Math.min(b,h):h}this._xMin=Math.round(a/
this._stepX);this._xMax=Math.round(e/this._stepX);this._yMin=Math.round(c/this._stepY);this._yMax=Math.round(b/this._stepY);this._currentX=this._xMax+1;this._currentY=this._yMin-1;this._buildAccelerationMap(d,g,t,k,f)};v._buildAccelerationMap=function(d,a,c,e,b){d.reset();const k=new Map,f=this._verticalSubdivision;c=f?b-e:c-a;b=Math.ceil(c/10);if(!(1>=b)){c=Math.floor(c/b);b++;this._delta=c;var g,t;if(f){b=-512-this._stepY;var q=this._stepY;var p=e}else b=-this._stepX,q=512+this._stepX,p=a;for(;d.nextPath();)if(!(2>
d.numPoints)&&d.nextPoint()){var l=d.x;for(g=d.y;d.nextPoint();l=a,g=e){a=d.x;e=d.y;if(f){if(g===e||g<b&&e<b||g>q&&e>q)continue;var h=Math.min(g,e);var r=Math.max(g,e)}else{if(l===a||l<b&&a<b||l>q&&a>q)continue;h=Math.min(l,a);r=Math.max(l,a)}for(;h<r;){var n=t=Math.floor((h-p)/c),u=l,w=g,H=a,I=e,C=k;let x=C.get(n);x||(x=[],C.set(n,x));x.push([[u,w],[H,I]]);h+=c}h=Math.floor((r-p)/c);h>t&&(r=a,n=e,u=k,w=u.get(h),w||(w=[],u.set(h,w)),w.push([[l,g],[r,n]]))}}this._accelerationMap=k}};v._nextInside=
function(){for(;;){if(this._currentX>this._xMax){this._currentY++;if(this._currentY>this._yMax)return null;this._currentX=this._xMin;this._shiftOddRows&&this._currentY%2&&this._currentX--}var d=this._currentX*this._stepX+this._offsetX;this._shiftOddRows&&this._currentY%2&&(d+=.5*this._stepX);const a=this._currentY*this._stepY+this._offsetY;this._currentX++;let c;if(this._gridType===y.PlacementGridType.Random){const e=(this._currentX%24+24)%24,b=(this._currentY%24+24)%24;c=this._graphicOriginX+d+this._stepX*
this._randomness*(.5-m._randValues[24*b+e])*2/3;d=this._graphicOriginY+a+this._stepY*this._randomness*(.5-m._randValues[24*b+e+1])*2/3}else c=this._graphicOriginX+this._cosAngle*d+this._sinAngle*a,d=this._graphicOriginY-this._sinAngle*d+this._cosAngle*a;if(!this._testInsidePolygon||this._isInsidePolygon(c,d,this._geometryCursor))return this._internalPlacement.setTranslate(c,d),this._internalPlacement}};v._isInsidePolygon=function(d,a,c){if(D.isNone(this._accelerationMap)){var e=0,b;let g;for(c.reset();c.nextPath();)if(c.nextPoint()){var k=
c.x;for(b=c.y;c.nextPoint();k=f,b=g){var f=c.x;g=c.y;b>a!==g>a&&(0<(f-k)*(a-b)-(g-b)*(d-k)?e++:e--)}}return 0!==e}c=this._verticalSubdivision;b=this._accelerationMap.get(Math.floor(((c?a:d)-this._polygonMin)/this._delta));if(!b)return!1;k=0;for(e of b){b=e[0];f=e[1];if(c){if(b[1]>a===f[1]>a)continue;b=(f[0]-b[0])*(a-b[1])-(f[1]-b[1])*(d-b[0])}else{if(b[0]>d===f[0]>d)continue;b=(f[1]-b[1])*(d-b[0])-(f[0]-b[0])*(a-b[1])}0<b?k++:k--}return 0!==k};return A._createClass(m)}();z.PlacementInsidePolygon=
B;Object.defineProperty(z,Symbol.toStringTag,{value:"Module"})});