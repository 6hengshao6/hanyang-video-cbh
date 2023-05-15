// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Color ../../core/Clonable ../../core/Collection ../../core/collectionUtils ../../core/JSONSupport ../../core/mathUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ./VoxelColorStop ./VoxelOpacityStop ./VoxelRangeFilter".split(" "),function(z,t,D,q,v,E,F,r,w,K,L,M,G,A,B,H){var l;(function(n){n[n.Color=
1]="Color";n[n.Alpha=2]="Alpha";n[n.Both=3]="Both"})(l||(l={}));q=function(n){function x(a){a=I.call(this,a);a.interpolation=null;a.stretchRange=null;a.rangeFilter=null;a._colorMapSize=256;a.colorStops=new (v.ofType(A));a.opacityStops=new (v.ofType(B));return a}z._inherits(x,n);var I=z._createSuper(x);n=x.prototype;n.getPreviousNext=function(a,d,b){let c=a;for(;0<--c&&d[c].type!==b&&d[c].type!==l.Both;);const k=d.length;for(;++a<k&&d[a].type!==b&&d[a].type!==l.Both;);return[c,a]};n.getColorForContinuousDataValue=
function(a,d){const b=this.rasterizedTransferFunction;if(2>this.colorStops.length||!Array.isArray(this.stretchRange)||2>this.stretchRange.length||256>b.length)return null;let c=this.stretchRange[0],k=this.stretchRange[1];if(c>k){const g=c;c=k;k=g}a=r.clamp(a,c,k);a=b[Math.round((a-c)/(k-c)*(this._colorMapSize-1))].clone();d||(a.a=1);return a};z._createClass(x,[{key:"colorStops",set:function(a){this._set("colorStops",E.referenceSetter(a,this._get("colorStops"),v.ofType(A)))}},{key:"opacityStops",set:function(a){this._set("opacityStops",
E.referenceSetter(a,this._get("opacityStops"),v.ofType(B)))}},{key:"rasterizedTransferFunction",get:function(){const a=[];if(2>this.colorStops.length)return a;const d=[],b=[];for(var c of this.colorStops){if(!c.color)return a;b.push({color:{r:c.color.r,g:c.color.g,b:c.color.b,a:Math.round(255*(1-c.color.a))},position:c.position,type:l.Color})}if(0===this.opacityStops.length)for(var k of b)d.push({color:k.color,position:k.position});else{for(var g of this.opacityStops){c=r.clamp(g.position,0,1);k=
Math.round(255*r.clamp(1-g.opacity,0,1));let f=!1;for(var h of b)if(h.type===l.Color&&1E-5>Math.abs(h.position-c)){h.color.a=k;h.type=l.Both;f=!0;break}f||b.push({color:{r:0,g:0,b:0,a:k},position:g.position,type:l.Alpha})}b.sort((f,e)=>f.position<e.position?-1:1);g=b.length;for(h=0;h<g;++h){const f=b[h];if(f.type!==l.Both)if(f.type===l.Color){const [e,m]=this.getPreviousNext(h,b,l.Alpha);f.color.a=-1!==e&&m!==g?Math.round(r.lerp(b[e].color.a,b[m].color.a,(f.position-b[e].position)/(b[m].position-
b[e].position))):-1!==e?b[e].color.a:b[m].color.a}else{const [e,m]=this.getPreviousNext(h,b,l.Color);if(-1!==e&&m!==g){const p=(f.position-b[e].position)/(b[m].position-b[e].position),y=b[e].color,J=b[m].color;["r","g","b"].forEach(C=>{f.color[C]=Math.round(r.lerp(y[C],J[C],p))})}else-1!==e?["r","g","b"].forEach(p=>{f.color[p]=b[e][p]}):["r","g","b"].forEach(p=>{f.color[p]=b[m][p]})}}for(var u of b)d.push({color:u.color,position:u.position})}d[0].position=0;d[d.length-1].position=1;u=0;g=1;for(h=
0;h<this._colorMapSize;++h){for(c=h/this._colorMapSize;c>d[g].position;)u=g++;const f=(c-d[u].position)/(d[g].position-d[u].position),e=d[u].color,m=d[g].color,p=new D;["r","g","b"].forEach(y=>{p[y]=Math.round(r.lerp(e[y],m[y],f))});p.a=r.clamp(1-r.lerp(e.a,m.a,f)/255,0,1);a.push(p)}return a}}]);return x}(q.ClonableMixin(F.JSONSupport));t.__decorate([w.property({type:["linear","nearest"],json:{write:!0}})],q.prototype,"interpolation",void 0);t.__decorate([w.property({type:[Number],json:{write:{enabled:!0,
isRequired:!0}}})],q.prototype,"stretchRange",void 0);t.__decorate([w.property({type:v.ofType(A),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.colorStops&&0<this.colorStops.length}}}}})],q.prototype,"colorStops",null);t.__decorate([w.property({type:v.ofType(B),json:{read:{source:"alphaStops"},write:{enabled:!0,target:"alphaStops",overridePolicy(){return{enabled:!!this.opacityStops&&0<this.opacityStops.length}}}}})],q.prototype,"opacityStops",null);t.__decorate([w.property({type:H,
json:{write:!0}})],q.prototype,"rangeFilter",void 0);t.__decorate([w.property({type:[D],clonable:!1,json:{read:!1}})],q.prototype,"rasterizedTransferFunction",null);return q=t.__decorate([G.subclass("esri.layers.voxel.VoxelTransferFunctionStyle")],q)});