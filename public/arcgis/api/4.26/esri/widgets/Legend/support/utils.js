// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("require exports ../../../symbols ../../../intl/date ../../../renderers/support/numberUtils ../../../symbols/SimpleLineSymbol".split(" "),function(k,d,p,g,l,m){async function h(a){if(!("visualVariables"in a&&a.visualVariables))return null;a=a.visualVariables.find(e=>"color"===e.type);if(!a)return null;var b=null,c=null;if(a.stops){if(1===a.stops.length)return a.stops[0].color;b=a.stops[0].value;c=a.stops[a.stops.length-1].value}b=null!=b&&null!=c?b+(c-b)/2:0;({getColor:c}=await new Promise((e,
f)=>k(["../../../renderers/visualVariables/support/visualVariableUtils"],e,f)));return c(a,b)??null}const n=g.convertDateFormatToIntlOptions("short-date");d.RGB_IMG_SOURCE=["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwcdIkqhiWn5fHwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu6JrzFUAAAAASUVORK5CYII\x3d","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwaeIkqhiWl5/HwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu6sKxboAAAAASUVORK5CYII\x3d",
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwadJEqhiWl5fPwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu75+IUcAAAAASUVORK5CYII\x3d"];d.SPECIAL_CHARS_GREATER_THAN="\x3e";d.SPECIAL_CHARS_LESS_THAN="\x3c";d.createStopLabel=function(a,b,c,e){let f="";0===b?f="\x3c ":b===c&&(f="\x3e ");b=null;b=e?g.formatDate(a,n):l.format(a);return f+b};d.getMedianColor=h;d.getSymbolForFlowRenderer=async function(a,b){const c=a.trailCap,e=a.trailWidth||
1;a=b||await h(a)||a.color;return new m({cap:c,color:a,width:e})};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});