// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/has"],function(n,q){const p=new Set("+-*/()".split(""));n.calculateCustomBandIndex=function(k,c,b){b=b.replace(/ /g,"");b.startsWith("-")&&(b="0"+b);b.startsWith("+")&&(b=b.slice(1,b.length));b=b.split("");var f=[],d=[],a="";for(let g=0;g<b.length;g++){const h=b[g];p.has(h)?(""!==a&&d.push(parseFloat(a)),f.push(h),a=""):"b"===h.toLowerCase()?(g++,a=h.concat(b[g]),d.push(c[parseInt(a[1],10)-1]),a=""):(a=a.concat(h),g===b.length-1&&d.push(parseFloat(a)))}let {ops:l,
nums:m}={ops:f,nums:d};if(0===l.length){k=1===m.length?m[0]:c[0];if(k instanceof Float32Array)return[k];var e=new Float32Array(c[0].length);"number"===typeof k?e.fill(k):e.set(k);return[e]}for(;0<l.length;){e=l;if(1===e.length)e={opIndex:0,numIndex:0};else{f=b=0;for(c=0;c<e.length;c++)if("("===e[c])b=c;else if(")"===e[c]){f=c;break}d=0===f?e:e.slice(b+1,f);c=-1;for(a=0;a<d.length;a++)if("*"===d[a]||"/"===d[a]){c=a;break}if(!(-1<c))for(a=0;a<d.length;a++)if("+"===d[a]||"-"===d[a]){c=a;break}0<f&&(c+=
b+1);b=0;for(f=0;f<c;f++)"("===e[f]&&b++;e={opIndex:c,numIndex:c-b}}const {numIndex:g,opIndex:h}=e;f=void 0;e=k;a=l[h];c=m[g];b=m[g+1];if("number"===typeof c&&"number"===typeof b)e=c+b;else{"number"===typeof c?(f=b.length,d=c,c=new Float32Array(f),c.fill(d)):(f=c.length,b.constructor===Number&&(d=b,b=new Float32Array(f),b.fill(d)));d=new Float32Array(f);switch(a){case "+":for(a=0;a<f;a++)if(null==e||e[a])d[a]=c[a]+b[a];break;case "-":for(a=0;a<f;a++)if(null==e||e[a])d[a]=c[a]-b[a];break;case "*":for(a=
0;a<f;a++)if(null==e||e[a])d[a]=c[a]*b[a];break;case "/":for(a=0;a<f;a++)(null==e||e[a])&&b[a]&&(d[a]=c[a]/b[a]);break;case "(":case ")":throw Error("encountered error with custom band index equation");}e=d}if(1===l.length)break;else{c=l;c.splice(h,1);f=b=0;do{f=b=0;for(d=0;d<c.length;d++)if("("===c[d])b=d;else if(")"===c[d]){f=d;break}f===b+1&&c.splice(b,2)}while(f===b+1);l=c;m.splice(g,2,e)}}return[e]};Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});