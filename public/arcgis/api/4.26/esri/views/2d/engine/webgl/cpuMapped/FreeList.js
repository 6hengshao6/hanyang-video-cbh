// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe"],function(l,m,k){let h=function(){function g(a){this.next=null;if(Array.isArray(a)){this.data=a[0];var b=this;for(let c=1;c<a.length;c++)b.next=new g([a[c]]),b=b.next}else this.data=a}var f=g.prototype;f.values=function*(){let a=this;for(;a;)yield a.data,a=a.next};f.forEach=function(a){let b=this;for(;b;)a(b.data),b=b.next};f.find=function(a){return a(this.data)?this:this.next?.find(a)};f.max=function(a,
b=this){b=a(this.data)>a(b.data)?this:b;return this.next?this.next.max(a,b):b};f.remove=function(a,b=null){return this===a?b?(b.next=this.next,b):this.next:this.next?.remove(a,this)??null};m._createClass(g,[{key:"last",get:function(){return this.next?this.next.last:this}}]);return g}(),n=function(){function g(a){this._head=null;k.isNone(a)||(this._head=new h(a))}var f=g.prototype;f.maxAvailableSpace=function(){if(k.isNone(this._head))return 0;const a=this._head.max(b=>b.end-b.start);return a.data.end-
a.data.start};f.firstFit=function(a){if(k.isNone(this._head))return null;var b=null;let c=this._head;for(;c;){const d=c.data.end-c.data.start;if(d===a)return b?b.next=c.next:this._head=c.next,c.data.start;if(d>a)return b=c.data.start,c.data.start+=a,b;b=c;c=c.next}return null};f.free=function(a,b){const c=a+b;if(k.isNone(this._head))this._head=new h({start:a,end:c});else if(c<=this._head.data.start)if(c===this._head.data.start)this._head.data.start-=b;else{var d=new h({start:a,end:c});d.next=this._head;
this._head=d}else{d=this._head;for(var e=d.next;e;){if(e.data.start>=c){if(d.data.end===a){d.data.end+=b;d.data.end===e.data.start&&(d.data.end+=e.data.end-e.data.start,d.next=e.next);return}if(e.data.start===c){e.data.start-=b;return}a=new h({start:a,end:c});a.next=d.next;d.next=a;return}d=e;e=e.next}a===d.data.end?d.data.end+=b:(a=new h({start:a,end:c}),d.next=a)}};m._createClass(g,[{key:"head",get:function(){return this._head}}]);return g}();l.FreeList=n;l.List=h;Object.defineProperty(l,Symbol.toStringTag,
{value:"Module"})});