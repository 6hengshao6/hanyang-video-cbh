// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/mathUtils","../../../core/maybe","../../../geometry/ellipsoidUtils","../../../geometry/Point"],function(f,e,h,q,k){function l(b,a,c){if(h.isNone(a.longitude)||h.isNone(a.latitude)||h.isNone(c.longitude)||h.isNone(c.latitude))throw Error("Invalid points: no lon/lat");return n(b,a.longitude,a.latitude,c.longitude,c.latitude)}function n(b,a,c,d,g){c=e.deg2rad(c);g=e.deg2rad(g);a=e.deg2rad(a);const m=e.deg2rad(d);d=Math.sin((c-g)/2);a=Math.sin((a-m)/2);c=2*e.asinClamped(Math.sqrt(d*
d+Math.cos(c)*Math.cos(g)*a*a));return Math.round(c*b*1E4)/1E4}function p(b,a){b/=15;a||(b=Math.round(b));return b}f.getGreatCircleDistance=n;f.getGreatCircleDistanceFromPoints=l;f.getGreatCircleSpanAt=function(b,a,c){const d=a.spatialReference,g=q.getReferenceEllipsoid(d),m=new k(a.x,b.y,d),r=new k(c.x,b.y,d);a=new k(b.x,a.y,d);b=new k(b.x,c.y,d);return{lon:l(g.radius,m,r),lat:l(g.radius,a,b)}};f.getLonDeltaForDistance=function(b,a,c){a/=c;b=e.deg2rad(b);a=Math.sin(a/2);b=Math.cos(b);b=2*e.asinClamped(Math.sqrt(a*
a/(b*b)));return e.rad2deg(b)};f.longitudeToTimezone=p;f.positionToTimezoneInfo=function(b,a){b=b?.[0];if(null==b)return null;a||(a={hours:0,minutes:0,seconds:0});a.hours=p(b,!0);b=a.hours%1;a.hours-=b;a.minutes=60*b;b=a.minutes%1;a.minutes-=b;a.seconds=Math.round(60*b);return a};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});