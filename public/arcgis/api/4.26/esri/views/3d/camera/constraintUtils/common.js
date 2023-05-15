// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/vec3","./ConstraintTypes","./InteractionType","./TiltMode"],function(d,f,g,l,m){g={selection:g.ConstraintTypes.NONE,interactionType:l.InteractionType.NONE,interactionFactor:0,interactionStartCamera:null,interactionDirection:null,tiltMode:m.TiltMode.TUMBLE};d.adjustRangeForInteraction=function(e,b,h,c,k,a){0!==e&&(h?(a.min=Math.min(a.min,b),a.max=Math.max(a.max,b)):null!=c?(a.min-=Math.max(0,(b-a.min)*(1-c)),a.max+=Math.max(0,(b-a.max)*(1-c))):k&&(a.min-=Math.max(0,
b-a.min-k),a.max+=Math.max(0,b-a.max-k)))};d.defaultConstraintOptions=g;d.hasConstraintType=function(e,b){return 0!==(e&b)};d.interactionDirectionTowardsConstraintMinimization=function(e,b,h,c){b=b||e.viewForward;f.copy(c,b);f.scale(c,c,Math.sign(f.dot(b,h)));return c};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});