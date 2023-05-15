// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/arrayUtils ../../../core/Evented ../../../core/maybe ../../../geometry/Polygon ../../../geometry/Polyline ../coordinateHelper ./unnormalizationHelper".split(" "),function(t,r,C,y,A,D,E,F,B){let v=function(){function l(e){this.component=e;this.rightEdge=this.leftEdge=null;this.type="vertex";this.index=null}r._createClass(l,[{key:"pos",get:function(){return this._pos},set:function(e){this._pos=e;this.component.unnormalizeVertexPositions()}}]);
return l}(),w=r._createClass(function(l,e,h){this.component=l;this.leftVertex=e;this.rightVertex=h;this.type="edge";e.rightEdge=this;h.leftEdge=this}),x=function(){function l(h,a){this._spatialReference=h;this._viewingMode=a;this.vertices=[];this.edges=[];this.index=null}var e=l.prototype;e.unnormalizeVertexPositions=function(){1>=this.vertices.length||B.unnormalize(this.vertices,B.getUnnormalizationInfo(this._spatialReference,this._viewingMode))};e.updateVertexIndex=function(h,a){if(0!==this.vertices.length){var c=
this.vertices[0],b=null;do b=h,b.index=a++,h=b.rightEdge?b.rightEdge.rightVertex:null;while(null!=h&&h!==c);b.leftEdge&&b!==this.vertices[this.vertices.length-1]&&this.swapVertices(this.vertices.indexOf(b),this.vertices.length-1)}};e.getFirstVertex=function(){return 0===this.vertices.length?null:this.vertices[0]};e.getLastVertex=function(){return 0===this.vertices.length?null:this.vertices[this.vertices.length-1]};e.isClosed=function(){return 2<this.vertices.length&&null!==this.vertices[0].leftEdge};
e.swapVertices=function(h,a){const c=this.vertices[h];this.vertices[h]=this.vertices[a];this.vertices[a]=c};e.iterateVertices=function(h){if(0!==this.vertices.length){var a=this.vertices[0],c=a;do h(c,c.index),c=A.isSome(c.rightEdge)?c.rightEdge.rightVertex:null;while(c!==a&&null!=c)}};return r._createClass(l)}();y=function(l){function e(a,c){var b=h.call(this);b.type=a;b.coordinateHelper=c;b._geometry=null;b._dirty=!0;b.components=[];return b}r._inherits(e,l);var h=r._createSuper(e);l=e.prototype;
l.notifyChanges=function(a){this._dirty=!0;this.emit("change",a)};l._toPoint=function(){return 0===this.components.length||0===this.components[0].vertices.length?null:this.coordinateHelper.vectorToPoint(this.components[0].vertices[0].pos)};l._toPolyline=function(){const a=[],c=this.coordinateHelper.vectorToArray;for(const b of this.components){if(1>b.vertices.length)continue;const n=[];let k=b.vertices.find(f=>null==f.leftEdge);const g=k;do n.push(c(k.pos)),k=k.rightEdge?k.rightEdge.rightVertex:null;
while(k&&k!==g);a.push(n)}return new E({paths:a,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})};l._toPolygon=function(){const a=[],c=this.coordinateHelper.vectorToArray;for(const b of this.components){if(1>b.vertices.length)continue;const n=[],k=b.vertices[0];let g=k;const f=g;do n.push(c(g.pos)),g=A.isSome(g.rightEdge)?g.rightEdge.rightVertex:null;while(g&&g!==f);b.isClosed()&&n.push(c(k.pos));a.push(n)}return new D({rings:a,spatialReference:this.spatialReference,
hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})};e.fromGeometry=function(a,c){var b=a.spatialReference;const n=F.createCoordinateHelper(a.hasZ,a.hasM,b),k=new e(a.type,n);switch(a.type){case "polygon":a=a.rings;for(var g=0;g<a.length;++g){var f=a[g],d=new x(b,c);d.index=g;var p=2<f.length&&C.equals(f[0],f[f.length-1]),m=p?f.length-1:f.length;for(var q=0;q<m;++q){var u=n.arrayToVector(f[q]);const z=new v(d);d.vertices.push(z);z.pos=u;z.index=q}f=d.vertices.length-1;for(m=0;m<
f;++m)q=new w(d,d.vertices[m],d.vertices[m+1]),d.edges.push(q);p&&(p=new w(d,d.vertices[d.vertices.length-1],d.vertices[0]),d.edges.push(p));k.components.push(d)}break;case "polyline":a=a.paths;for(g=0;g<a.length;++g){p=a[g];d=new x(b,c);d.index=g;f=p.length;for(m=0;m<f;++m)q=n.arrayToVector(p[m]),u=new v(d),d.vertices.push(u),u.pos=q,u.index=m;p=d.vertices.length-1;for(f=0;f<p;++f)m=new w(d,d.vertices[f],d.vertices[f+1]),d.edges.push(m);k.components.push(d)}break;case "point":c=new x(b,c),c.index=
0,b=new v(c),b.index=0,b.pos=n.pointToVector(a),c.vertices.push(b),k.components.push(c)}return k};r._createClass(e,[{key:"geometry",get:function(){if(this._dirty){switch(this.type){case "point":this._geometry=this._toPoint();break;case "polyline":this._geometry=this._toPolyline();break;case "polygon":this._geometry=this._toPolygon()}this._dirty=!1}return this._geometry}},{key:"spatialReference",get:function(){return this.coordinateHelper.spatialReference}}]);return e}(y);t.Component=x;t.Edge=w;t.EditGeometry=
y;t.Vertex=v;Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})});