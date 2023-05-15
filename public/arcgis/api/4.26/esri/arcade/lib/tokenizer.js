// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","./error-handler","./scanner","./types"],function(e,h,k,l,c){let m=function(){function f(b,a){this.errorHandler=new k.ErrorHandler;this.errorHandler.tolerant=a?"boolean"===typeof a.tolerant&&a.tolerant:!1;this.scanner=new l.Scanner(b,this.errorHandler);this.trackComments=a?"boolean"===typeof a.comment&&a.comment:!1;this.buffer=[]}var g=f.prototype;g.errors=function(){return this.errorHandler.errors};g.getNextToken=function(){if(0===this.buffer.length){var b=
this.scanner.scanComments();this.trackComments&&b&&b.forEach(a=>{const d=this.scanner.source.slice(a.start,a.end);this.buffer.push({type:a.multiLine?c.Syntax.BlockComment:c.Syntax.LineComment,value:d,range:a.range,loc:a.loc})});if(!this.scanner.eof()){b={line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart};const a=this.scanner.lex(),d={line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart};b={type:c.TokenNames[a.type],value:this.scanner.source.slice(a.start,
a.end),range:[a.start,a.end],loc:{start:b,end:d}};this.buffer.push(b)}}return this.buffer.shift()};return h._createClass(f)}();e.Tokenizer=m;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});