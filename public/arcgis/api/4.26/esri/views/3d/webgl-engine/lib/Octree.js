// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../core/ObjectPool ../../../../core/PooledArray ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/support/frustum ../../../../geometry/support/ray ../../../../chunks/sphere ./Util".split(" "),function(U,N,ca,F,y,p,I,V,l,W){function J(f,e,a){a[0]=f[0]+e;a[1]=f[1]+e;a[2]=f[2]+e}function X(f,e,a,b){if(1===e)f=a(f[0]),l.copy(f,b);else{u[0]=Infinity;u[1]=Infinity;u[2]=Infinity;v[0]=-Infinity;v[1]=
-Infinity;v[2]=-Infinity;for(let h=0;h<e;h++){var c=a(f[h]);if(G(c[3])){var d=u,g=c;d[0]=Math.min(d[0],g[0]-g[3]);d[1]=Math.min(d[1],g[1]-g[3]);d[2]=Math.min(d[2],g[2]-g[3]);d=v;d[0]=Math.max(d[0],c[0]+c[3]);d[1]=Math.max(d[1],c[1]+c[3]);d[2]=Math.max(d[2],c[2]+c[3])}}y.lerp(b,u,v,.5);b[3]=Math.max(v[0]-u[0],v[1]-u[1],v[2]-u[2])/2}}function da(f,e,a){if(!D.length)for(var b=0;8>b;++b)D.push({index:0,distance:0});for(b=0;8>b;++b){const c=Y[b];D.data[b].index=b;D.data[b].distance=B(f,e,c)}D.sort((c,
d)=>c.distance-d.distance);for(f=0;8>f;++f)a[f]=D.data[f].index}function O(f,e){let a=Infinity,b;for(let c=0;8>c;++c){const d=B(f,e,Z[c]);d<a&&(a=d,b=Z[c])}return b}function B(f,e,a){return e*(f[0]*a[0]+f[1]*a[1]+f[2]*a[2])}function G(f){return!isNaN(f)&&-Infinity!==f&&Infinity!==f&&0<f}let T=function(){function f(a,b){this.objectToBoundingSphere=a;this._maximumObjectsPerNode=10;this._maximumDepth=20;this._degenerateObjects=new Set;this._root=new m;this._objectCount=0;b&&(void 0!==b.maximumObjectsPerNode&&
(this._maximumObjectsPerNode=b.maximumObjectsPerNode),void 0!==b.maximumDepth&&(this._maximumDepth=b.maximumDepth))}var e=f.prototype;e.destroy=function(){this._degenerateObjects.clear();m.clearPool();P[0]=null;E.prune();D.prune()};e.add=function(a,b=a.length){this._objectCount+=b;this._grow(a,b);const c=m.acquire();for(let d=0;d<b;d++){const g=a[d];this._isDegenerate(g)?this._degenerateObjects.add(g):(c.init(this._root),this._add(g,c))}m.release(c)};e.remove=function(a,b=null){this._objectCount-=
a.length;const c=m.acquire();for(const d of a)a=N.isSome(b)?b:l.copy(this.objectToBoundingSphere(d),ea),G(a[3])?(c.init(this._root),this._remove(d,a,c)):this._degenerateObjects.delete(d);m.release(c);this._shrink()};e.update=function(a,b){if(G(b[3])||!this._isDegenerate(a))P[0]=a,a=P,this.remove(a,b),this.add(a)};e.forEachAlongRay=function(a,b,c){const d=V.wrap(a,b);this._forEachNode(this._root,g=>{if(!this._intersectsNode(d,g))return!1;g=g.node;g.terminals.forAll(h=>{this._intersectsObject(d,h)&&
c(h)});null!==g.residents&&g.residents.forAll(h=>{this._intersectsObject(d,h)&&c(h)});return!0})};e.forEachAlongRayWithVerticalOffset=function(a,b,c,d){const g=V.wrap(a,b);this._forEachNode(this._root,h=>{if(!this._intersectsNodeWithOffset(g,h,d))return!1;h=h.node;h.terminals.forAll(n=>{this._intersectsObjectWithOffset(g,n,d)&&c(n)});null!==h.residents&&h.residents.forAll(n=>{this._intersectsObjectWithOffset(g,n,d)&&c(n)});return!0})};e.forEach=function(a){this._forEachNode(this._root,b=>{b=b.node;
b.terminals.forAll(a);null!==b.residents&&b.residents.forAll(a);return!0});this._degenerateObjects.forEach(a)};e.forEachDegenerateObject=function(a){this._degenerateObjects.forEach(a)};e.findClosest=function(a,b,c,d=()=>!0,g=Infinity){let h=Infinity,n=Infinity,k=null;const r=O(a,b),z=t=>{--g;if(d(t)){var w=this.objectToBoundingSphere(t);if(I.intersectsSphere(c,w)){var K=B(a,b,l.getCenter(w)),H=K-w[3];w=K+w[3];H<h&&(h=H,n=w,k=t)}}};this._forEachNodeDepthOrdered(this._root,t=>{if(0>=g||!I.intersectsSphere(c,
t.bounds))return!1;y.scale(x,r,t.halfSize);y.add(x,x,t.bounds);if(B(a,b,x)>n)return!1;t=t.node;t.terminals.forAll(w=>z(w));null!==t.residents&&t.residents.forAll(w=>z(w));return!0},a,b);return k};e.forEachInDepthRange=function(a,b,c,d,g,h,n){let k=-Infinity,r=Infinity;const z={setRange:q=>{c===f.DepthOrder.FRONT_TO_BACK?(k=Math.max(k,q.near),r=Math.min(r,q.far)):(k=Math.max(k,-q.far),r=Math.min(r,-q.near))}};z.setRange(d);const t=B(b,c,a),w=O(b,c),K=O(b,-c),H=q=>{if(n(q)){var C=this.objectToBoundingSphere(q),
L=l.getCenter(C);L=B(b,c,L)-t;var fa=L+C[3];L-C[3]>r||fa<k||!I.intersectsSphere(h,C)||g(q,z)}};this._forEachNodeDepthOrdered(this._root,q=>{if(!I.intersectsSphere(h,q.bounds))return!1;y.scale(x,w,q.halfSize);y.add(x,x,q.bounds);if(B(b,c,x)-t>r)return!1;y.scale(x,K,q.halfSize);y.add(x,x,q.bounds);if(B(b,c,x)-t<k)return!1;q=q.node;q.terminals.forAll(C=>H(C));null!==q.residents&&q.residents.forAll(C=>H(C));return!0},b,c)};e.forEachNode=function(a){this._forEachNode(this._root,b=>a(b.node,b.bounds,b.halfSize,
b.depth))};e.forEachNeighbor=function(a,b){const c=l.getRadius(b),d=l.getCenter(b),g=k=>{const r=this.objectToBoundingSphere(k);var z=l.getRadius(r);z=c+z;return 0>=y.squaredDistance(l.getCenter(r),d)-z*z?a(k):!0};let h=!0;const n=k=>{h&&(h=g(k))};this._forEachNode(this._root,k=>{var r=l.getRadius(k.bounds);r=c+r;if(0<y.squaredDistance(l.getCenter(k.bounds),d)-r*r)return!1;k=k.node;k.terminals.forAll(n);h&&null!==k.residents&&k.residents.forAll(n);return h});h&&this.forEachDegenerateObject(n)};e._intersectsNode=
function(a,b){J(b.bounds,2*-b.halfSize,u);J(b.bounds,2*b.halfSize,v);return W.rayBoxTest(a.origin,a.direction,u,v)};e._intersectsNodeWithOffset=function(a,b,c){J(b.bounds,2*-b.halfSize,u);J(b.bounds,2*b.halfSize,v);c.applyToMinMax(u,v);return W.rayBoxTest(a.origin,a.direction,u,v)};e._intersectsObject=function(a,b){b=this.objectToBoundingSphere(b);return 0<b[3]?l.intersectsRay(b,a):!0};e._intersectsObjectWithOffset=function(a,b,c){b=this.objectToBoundingSphere(b);return 0<b[3]?l.intersectsRay(c.applyToBoundingSphere(b),
a):!0};e._forEachNode=function(a,b){a=m.acquire().init(a);const c=[a];for(;0!==c.length;){a=c.pop();if(b(a)&&!a.isLeaf())for(let d=0;d<a.node.children.length;d++)a.node.children[d]&&c.push(m.acquire().init(a).advance(d));m.release(a)}};e._forEachNodeDepthOrdered=function(a,b,c,d=f.DepthOrder.FRONT_TO_BACK){a=m.acquire().init(a);const g=[a];for(da(c,d,aa);0!==g.length;){a=g.pop();if(b(a)&&!a.isLeaf())for(c=7;0<=c;--c)d=aa[c],a.node.children[d]&&g.push(m.acquire().init(a).advance(d));m.release(a)}};
e._remove=function(a,b,c){E.clear();b=c.advanceTo(b,(d,g)=>{E.push(d.node);E.push(g)})?c.node.terminals:c.node.residents;b.removeUnordered(a);if(0===b.length)for(a=E.length-2;0<=a&&this._purge(E.data[a],E.data[a+1]);a-=2);};e._nodeIsEmpty=function(a){if(0!==a.terminals.length)return!1;if(null!==a.residents)return 0===a.residents.length;for(let b=0;b<a.children.length;b++)if(a.children[b])return!1;return!0};e._purge=function(a,b){0<=b&&(a.children[b]=null);return this._nodeIsEmpty(a)?(null===a.residents&&
(a.residents=new F({shrink:!0})),!0):!1};e._add=function(a,b){b.advanceTo(this.objectToBoundingSphere(a))?b.node.terminals.push(a):(b.node.residents.push(a),b.node.residents.length>this._maximumObjectsPerNode&&b.depth<this._maximumDepth&&this._split(b))};e._split=function(a){const b=a.node.residents;a.node.residents=null;for(let c=0;c<b.length;c++){const d=m.acquire().init(a);this._add(b.getItemAt(c),d);m.release(d)}};e._grow=function(a,b){0!==b&&(X(a,b,c=>this.objectToBoundingSphere(c),A),G(A[3])&&
!this._fitsInsideTree(A)&&(this._nodeIsEmpty(this._root.node)?(l.copy(A,this._root.bounds),this._root.halfSize=1.25*this._root.bounds[3],this._root.updateBoundsRadiusFromHalfSize()):(a=this._rootBoundsForRootAsSubNode(A),this._placingRootViolatesMaxDepth(a)?this._rebuildTree(A,a):this._growRootAsSubNode(a),m.release(a))))};e._rebuildTree=function(a,b){y.copy(Q,b.bounds);Q[3]=b.halfSize;X([a,Q],2,c=>c,R);a=m.acquire().init(this._root);this._root.initFrom(null,R,R[3]);this._root.increaseHalfSize(1.25);
this._forEachNode(a,c=>{this.add(c.node.terminals.data,c.node.terminals.length);null!==c.node.residents&&this.add(c.node.residents.data,c.node.residents.length);return!0});m.release(a)};e._placingRootViolatesMaxDepth=function(a){const b=Math.log(a.halfSize/this._root.halfSize)*Math.LOG2E;let c=0;this._forEachNode(this._root,d=>{c=Math.max(c,d.depth);return c+b<=this._maximumDepth});return c+b>this._maximumDepth};e._rootBoundsForRootAsSubNode=function(a){var b=a[3],c=-Infinity;const d=this._root.bounds,
g=this._root.halfSize;for(var h=0;3>h;h++){var n=Math.max(0,Math.ceil((d[h]-g-(a[h]-b))/(2*g)));const k=Math.max(0,Math.ceil((a[h]+b-(d[h]+g))/(2*g)))+1;c=Math.max(c,2**Math.ceil(Math.log(n+k)*Math.LOG2E));M[h].min=n;M[h].max=k}for(a=0;3>a;a++)b=M[a].min,h=M[a].max,n=(c-(b+h))/2,b+=Math.ceil(n),h+=Math.floor(n),S[a]=d[a]-g-b*g*2+(h+b)*g;c*=g;S[3]=c*ba;return m.acquire().initFrom(null,S,c,0)};e._growRootAsSubNode=function(a){const b=this._root.node;y.copy(A,this._root.bounds);A[3]=this._root.halfSize;
this._root.init(a);a.advanceTo(A,null,!0);a.node.children=b.children;a.node.residents=b.residents;a.node.terminals=b.terminals};e._shrink=function(){for(;;){const a=this._findShrinkIndex();if(-1===a)break;this._root.advance(a);this._root.depth=0}};e._findShrinkIndex=function(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return-1;let a=null;const b=this._root.node.children;let c=0,d=0;for(;d<b.length&&null==a;)c=d++,a=b[c];for(;d<b.length;)if(b[d++])return-1;return c};e._isDegenerate=
function(a){a=this.objectToBoundingSphere(a)[3];return!G(a)};e._fitsInsideTree=function(a){const b=this._root.bounds,c=this._root.halfSize;return a[3]<=c&&a[0]>=b[0]-c&&a[0]<=b[0]+c&&a[1]>=b[1]-c&&a[1]<=b[1]+c&&a[2]>=b[2]-c&&a[2]<=b[2]+c};e.toJSON=function(){const {maximumDepth:a,maximumObjectsPerNode:b,_objectCount:c}=this,d=this._nodeToJSON(this._root.node);return{maximumDepth:a,maximumObjectsPerNode:b,objectCount:c,root:{bounds:this._root.bounds,halfSize:this._root.halfSize,depth:this._root.depth,
node:d}}};e._nodeToJSON=function(a){const b=a.children.map(d=>d?this._nodeToJSON(d):null),c=a.residents?.map(d=>this.objectToBoundingSphere(d));a=a.terminals?.map(d=>this.objectToBoundingSphere(d));return{children:b,residents:c,terminals:a}};f.fromJSON=function(a){const b=new f(c=>c,{maximumDepth:a.maximumDepth,maximumObjectsPerNode:a.maximumObjectsPerNode});b._objectCount=a.objectCount;b._root.initFrom(a.root.node,a.root.bounds,a.root.halfSize,a.root.depth);return b};U._createClass(f,[{key:"bounds",
get:function(){return this._root.bounds}},{key:"halfSize",get:function(){return this._root.halfSize}},{key:"root",get:function(){return this._root.node}},{key:"maximumObjectsPerNode",get:function(){return this._maximumObjectsPerNode}},{key:"maximumDepth",get:function(){return this._maximumDepth}},{key:"objectCount",get:function(){return this._objectCount}}]);return f}(),m=function(){function f(){this.bounds=l.create();this.halfSize=0;this.initFrom(null,null,0,0)}var e=f.prototype;e.init=function(a){return this.initFrom(a.node,
a.bounds,a.halfSize,a.depth)};e.initFrom=function(a,b,c,d=this.depth){this.node=N.isSome(a)?a:f.createEmptyNode();N.isSome(b)&&l.copy(b,this.bounds);this.halfSize=c;this.depth=d;return this};e.increaseHalfSize=function(a){this.halfSize*=a;this.updateBoundsRadiusFromHalfSize()};e.updateBoundsRadiusFromHalfSize=function(){this.bounds[3]=this.halfSize*ba};e.advance=function(a){let b=this.node.children[a];b||(b=f.createEmptyNode(),this.node.children[a]=b);this.node=b;this.halfSize/=2;this.depth++;a=Y[a];
this.bounds[0]+=a[0]*this.halfSize;this.bounds[1]+=a[1]*this.halfSize;this.bounds[2]+=a[2]*this.halfSize;this.updateBoundsRadiusFromHalfSize();return this};e.advanceTo=function(a,b,c=!1){for(;;){if(this.isTerminalFor(a))return b&&b(this,-1),!0;if(this.isLeaf()){if(!c)return b&&b(this,-1),!1;this.node.residents=null}const d=this._childIndex(a);b&&b(this,d);this.advance(d)}};e.isLeaf=function(){return null!=this.node.residents};e.isTerminalFor=function(a){return a[3]>this.halfSize/2};e._childIndex=
function(a){const b=this.bounds;return(b[0]<a[0]?1:0)+(b[1]<a[1]?2:0)+(b[2]<a[2]?4:0)};f.createEmptyNode=function(){return{children:[null,null,null,null,null,null,null,null],terminals:new F({shrink:!0}),residents:new F({shrink:!0})}};f.acquire=function(){return f._pool.acquire()};f.release=function(a){f._pool.release(a)};f.clearPool=function(){f._pool.prune()};return U._createClass(f)}();m._pool=new ca(m);(function(f){f=f.DepthOrder||(f.DepthOrder={});f[f.FRONT_TO_BACK=1]="FRONT_TO_BACK";f[f.BACK_TO_FRONT=
-1]="BACK_TO_FRONT"})(T||(T={}));const Y=[p.fromValues(-1,-1,-1),p.fromValues(1,-1,-1),p.fromValues(-1,1,-1),p.fromValues(1,1,-1),p.fromValues(-1,-1,1),p.fromValues(1,-1,1),p.fromValues(-1,1,1),p.fromValues(1,1,1)],Z=[p.fromValues(-1,-1,-1),p.fromValues(-1,-1,1),p.fromValues(-1,1,-1),p.fromValues(-1,1,1),p.fromValues(1,-1,-1),p.fromValues(1,-1,1),p.fromValues(1,1,-1),p.fromValues(1,1,1)],ba=Math.sqrt(3),P=[null],S=l.create(),x=p.create(),u=p.create(),v=p.create(),E=new F,ea=l.create(),A=l.create(),
Q=l.create(),R=l.create(),M=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],D=new F,aa=[0,0,0,0,0,0,0,0];return T});