// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/maybe"],function(c,d){function f(b,e=2){return d.isNone(b)?b:{pattern:b.slice(),pixelRatio:e}}function g(b){return d.isSome(b)?f(h[b],8):null}const a={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},h={dash:a.dash,"dash-dot":[...a.dash,...a.dot],dot:a.dot,"long-dash":a["long-dash"],"long-dash-dot":[...a["long-dash"],...a.dot],"long-dash-dot-dot":[...a["long-dash"],...a.dot,...a.dot],none:null,"short-dash":a["short-dash"],"short-dash-dot":[...a["short-dash"],
...a["short-dot"]],"short-dash-dot-dot":[...a["short-dash"],...a["short-dot"],...a["short-dot"]],"short-dot":a["short-dot"],solid:null};c.createStipplePattern=f;c.createStipplePatternSimple=function(b,e=2){return{pattern:[b,b],pixelRatio:e}};c.getStipplePatternForLinePattern=function(b){return d.isSome(b)&&"style"===b.type?g(b.style):null};c.getStipplePatternForPatternStyle=g;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});