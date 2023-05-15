// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
require({cache:{"esri/libs/i3s/enums":function(){define(["exports"],function(e){e.IndexType=void 0;(function(v){v[v.None=0]="None";v[v.Int16=1]="Int16";v[v.Int32=2]="Int32"})(e.IndexType||(e.IndexType={}));e.ModificationType=void 0;(function(v){v[v.Replace=0]="Replace";v[v.Outside=1]="Outside";v[v.Inside=2]="Inside";v[v.Finished=3]="Finished"})(e.ModificationType||(e.ModificationType={}));Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})})},"esri/libs/i3s/I3SModule":function(){define(["require",
"exports","../../assets"],function(e,v,D){function E(C){return D.getAssetUrl(`esri/libs/i3s/${C}`)}let x;v.get=function(){x||(x=(new Promise(C=>(new Promise((p,l)=>e(["../../chunks/i3s"],p,l))).then(p=>p.i3s).then(({default:p})=>{const l=p({locateFile:E,onRuntimeInitialized:()=>C(l)});delete l.then}))).catch(C=>{throw C;}));return x};Object.defineProperty(v,Symbol.toStringTag,{value:"Module"})})},"esri/views/3d/layers/i3s/I3SNode":function(){define(["exports","../../../../chunks/_rollupPluginBabelHelpers",
"../../../../chunks/sphere"],function(e,v,D){let E=v._createClass(function(l,N){this.id=l;this.mbs=N;this.renderMbs=D.fromValues(0,0,0,-1);this.elevationRange=null}),x=v._createClass(function(){this.min=Infinity;this.max=-Infinity;this.valid=!1});e.NodeFilterImpact=void 0;(function(l){l[l.Unmodified=0]="Unmodified";l[l.Culled=1]="Culled";l[l.NotChecked=2]="NotChecked"})(e.NodeFilterImpact||(e.NodeFilterImpact={}));e.NodeIMModificationImpact=void 0;(function(l){l[l.Unmodified=0]="Unmodified";l[l.PotentiallyModified=
1]="PotentiallyModified";l[l.Culled=2]="Culled";l[l.Unknown=3]="Unknown";l[l.NotChecked=4]="NotChecked"})(e.NodeIMModificationImpact||(e.NodeIMModificationImpact={}));let C=function(l){function N(H,B,y,M,t,F,I,U,V,W){H=Q.call(this,H,y);H.index=B;H.childCount=M;H.level=t;H.resources=F;H.version=I;H.lodMetric=U;H.maxError=V;H.numFeatures=W;H.failed=!1;H.cacheState=e.CacheState.Unknown;H.vertexCount=0;H.memory=0;H.childrenLoaded=0;H.hasModifications=!1;H.imModificationImpact=e.NodeIMModificationImpact.NotChecked;
return H}v._inherits(N,l);var Q=v._createSuper(N);return v._createClass(N)}(E);e.CacheState=void 0;(function(l){l[l.Unknown=0]="Unknown";l[l.Uncached=1]="Uncached";l[l.Cached=2]="Cached"})(e.CacheState||(e.CacheState={}));e.LodMetric=void 0;(function(l){l[l.None=0]="None";l[l.MaxScreenThreshold=1]="MaxScreenThreshold";l[l.ScreenSpaceRelative=2]="ScreenSpaceRelative";l[l.RemovedFeatureDiameter=3]="RemovedFeatureDiameter";l[l.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"})(e.LodMetric||
(e.LodMetric={}));e.NodeState=void 0;(function(l){l[l.Hole=0]="Hole";l[l.Leaf=1]="Leaf"})(e.NodeState||(e.NodeState={}));let p=v._createClass(function(l,N,Q,H){this.nodeHasLOD=l;this.isChosen=N;this.lodLevel=Q;this.version=H});e.ElevationRange=x;e.Node=C;e.NodeBase=E;e.NodeTraversalState=p;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})})},"esri/chunks/sphere":function(){define("exports ../core/has ../core/Logger ../core/mathUtils ../core/maybe ./mat4 ./vec3 ./vec3f64 ./vec4 ./vec4f64 ../geometry/support/Axis ../geometry/support/ray ../geometry/support/vector ../geometry/support/vectorStacks".split(" "),
function(e,v,D,E,x,C,p,l,N,Q,H,B,y,M){function t(){return Q.create()}function F(q,w=t()){return N.copy(w,q)}function I(q,w){return Q.fromValues(q[0],q[1],q[2],w)}function U(q){return q}function V(q){q[0]=q[1]=q[2]=q[3]=0}function W(q,w){q[0]=q[1]=q[2]=0;q[3]=w;return q}function da(q){return q[3]}function sa(q){return q}function fa(q,w,J,aa){return Q.fromValues(q,w,J,aa)}function xa(q,w,J){q!==J&&p.copy(J,q);J[3]=q[3]+w;return J}function ya(q,w,J){D.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported");
return q===J?J:F(q,J)}function va(q,w,J){if(x.isNone(w))return!1;const {origin:aa,direction:ba}=w;var ca=Ea;ca[0]=aa[0]-q[0];ca[1]=aa[1]-q[1];ca[2]=aa[2]-q[2];w=ba[0]*ba[0]+ba[1]*ba[1]+ba[2]*ba[2];if(0===w)return!1;const za=2*(ba[0]*ca[0]+ba[1]*ca[1]+ba[2]*ca[2]);q=za*za-4*w*(ca[0]*ca[0]+ca[1]*ca[1]+ca[2]*ca[2]-q[3]*q[3]);if(0>q)return!1;ca=Math.sqrt(q);q=(-za-ca)/(2*w);w=(-za+ca)/(2*w);if(0>q||w<q&&0<w)q=w;if(0>q)return!1;J&&(J[0]=aa[0]+ba[0]*q,J[1]=aa[1]+ba[1]*q,J[2]=aa[2]+ba[2]*q);return!0}function ta(q,
w){return va(q,w,null)}function ua(q,w,J){if(va(q,w,J))return J;q=O(q,w,M.sv3d.get());p.add(J,w.origin,p.scale(M.sv3d.get(),w.direction,p.distance(w.origin,q)/p.length(w.direction)));return J}function O(q,w,J){const aa=M.sv3d.get(),ba=M.sm4d.get();p.cross(aa,w.origin,w.direction);const ca=q[3];p.cross(J,aa,w.origin);p.scale(J,J,1/p.length(J)*ca);q=wa(q,w.origin);w=y.angle(w.origin,J);C.fromRotation(ba,w+q,aa);p.transformMat4(J,J,ba);return J}function Y(q,w,J){if(va(q,w,J))return J;B.closestPoint(w,
q,J);return ea(q,J,J)}function ea(q,w,J){w=p.subtract(M.sv3d.get(),w,q);w=p.scale(M.sv3d.get(),w,q[3]/p.length(w));return p.add(J,w,q)}function ha(q,w){w=p.subtract(M.sv3d.get(),w,q);w=p.squaredLength(w);return Math.sqrt(Math.abs(w-q[3]*q[3]))}function wa(q,w){w=p.subtract(M.sv3d.get(),w,q);w=p.length(w);q=q[3];return E.acosClamped(q/(q+Math.abs(q-w)))}function ja(q,w,J,aa){q=p.subtract(Aa,w,q);switch(J){case H.Axis.X:return J=E.cartesianToSpherical(q,Aa)[2],p.set(aa,-Math.sin(J),Math.cos(J),0);case H.Axis.Y:return q=
E.cartesianToSpherical(q,Aa),J=q[1],q=q[2],w=Math.sin(J),p.set(aa,-w*Math.cos(q),-w*Math.sin(q),Math.cos(J));case H.Axis.Z:return p.normalize(aa,q)}}function ka(q,w){w=p.subtract(Ba,w,q);return p.length(w)-q[3]}function Ca(q,w,J,aa){const ba=ka(q,w);q=ja(q,w,H.Axis.Z,Ba);J=p.scale(Ba,q,J-ba);return p.add(aa,w,J)}function Da(q,w){w=p.squaredDistance(q,w);q=q[3];return w<=q*q}const Ea=l.create(),Aa=l.create(),Ba=l.create();v=t();l=Object.freeze(Object.defineProperty({__proto__:null,altitudeAt:ka,angleToSilhouette:wa,
axisAt:ja,clear:V,closestPoint:Y,closestPointOnSilhouette:O,containsPoint:Da,copy:F,create:t,distanceToSilhouette:ha,elevate:xa,fromCenterAndRadius:I,fromRadius:W,fromValues:fa,getCenter:sa,getRadius:da,intersectRay:va,intersectRayClosestSilhouette:ua,intersectsRay:ta,projectPoint:ea,setAltitudeAt:Ca,setExtent:ya,tmpSphere:v,wrap:U},Symbol.toStringTag,{value:"Module"}));e.altitudeAt=ka;e.angleToSilhouette=wa;e.axisAt=ja;e.clear=V;e.closestPoint=Y;e.closestPointOnSilhouette=O;e.containsPoint=Da;e.copy=
F;e.create=t;e.distanceToSilhouette=ha;e.elevate=xa;e.fromCenterAndRadius=I;e.fromRadius=W;e.fromValues=fa;e.getCenter=sa;e.getRadius=da;e.intersectRay=va;e.intersectRayClosestSilhouette=ua;e.intersectsRay=ta;e.projectPoint=ea;e.setAltitudeAt=Ca;e.setExtent=ya;e.sphere=l;e.tmpSphere=v;e.wrap=U})},"esri/chunks/mat4":function(){define(["exports","./vec3f64","./common"],function(e,v,D){function E(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];a[4]=b[4];a[5]=b[5];a[6]=b[6];a[7]=b[7];a[8]=b[8];a[9]=b[9];
a[10]=b[10];a[11]=b[11];a[12]=b[12];a[13]=b[13];a[14]=b[14];a[15]=b[15];return a}function x(a,b,c,d,f,g,k,m,h,n,r,u,A,z,K,G,L){a[0]=b;a[1]=c;a[2]=d;a[3]=f;a[4]=g;a[5]=k;a[6]=m;a[7]=h;a[8]=n;a[9]=r;a[10]=u;a[11]=A;a[12]=z;a[13]=K;a[14]=G;a[15]=L;return a}function C(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a}function p(a,b){if(a===b){const c=b[1],d=b[2],f=b[3],g=b[6],k=b[7],m=b[11];a[1]=b[4];a[2]=b[8];a[3]=b[12];
a[4]=c;a[6]=b[9];a[7]=b[13];a[8]=d;a[9]=g;a[11]=b[14];a[12]=f;a[13]=k;a[14]=m}else a[0]=b[0],a[1]=b[4],a[2]=b[8],a[3]=b[12],a[4]=b[1],a[5]=b[5],a[6]=b[9],a[7]=b[13],a[8]=b[2],a[9]=b[6],a[10]=b[10],a[11]=b[14],a[12]=b[3],a[13]=b[7],a[14]=b[11],a[15]=b[15];return a}function l(a,b){N(a,b)||C(a);return a}function N(a,b){const c=b[0],d=b[1],f=b[2],g=b[3],k=b[4],m=b[5],h=b[6],n=b[7],r=b[8],u=b[9],A=b[10],z=b[11],K=b[12],G=b[13],L=b[14];b=b[15];const X=c*m-d*k,P=c*h-f*k,R=c*n-g*k,S=d*h-f*m,T=d*n-g*m,la=
f*n-g*h,ma=r*G-u*K,na=r*L-A*K,oa=r*b-z*K,pa=u*L-A*G,qa=u*b-z*G,ra=A*b-z*L;let Z=X*ra-P*qa+R*pa+S*oa-T*na+la*ma;if(!Z)return null;Z=1/Z;a[0]=(m*ra-h*qa+n*pa)*Z;a[1]=(f*qa-d*ra-g*pa)*Z;a[2]=(G*la-L*T+b*S)*Z;a[3]=(A*T-u*la-z*S)*Z;a[4]=(h*oa-k*ra-n*na)*Z;a[5]=(c*ra-f*oa+g*na)*Z;a[6]=(L*R-K*la-b*P)*Z;a[7]=(r*la-A*R+z*P)*Z;a[8]=(k*qa-m*oa+n*ma)*Z;a[9]=(d*oa-c*qa-g*ma)*Z;a[10]=(K*T-G*R+b*X)*Z;a[11]=(u*R-r*T-z*X)*Z;a[12]=(m*na-k*pa-h*ma)*Z;a[13]=(c*pa-d*na+f*ma)*Z;a[14]=(G*P-K*S-L*X)*Z;a[15]=(r*S-u*P+A*X)*
Z;return a}function Q(a,b){const c=b[0],d=b[1],f=b[2],g=b[3],k=b[4],m=b[5],h=b[6],n=b[7],r=b[8],u=b[9],A=b[10],z=b[11],K=b[12],G=b[13],L=b[14];b=b[15];a[0]=m*(A*b-z*L)-u*(h*b-n*L)+G*(h*z-n*A);a[1]=-(d*(A*b-z*L)-u*(f*b-g*L)+G*(f*z-g*A));a[2]=d*(h*b-n*L)-m*(f*b-g*L)+G*(f*n-g*h);a[3]=-(d*(h*z-n*A)-m*(f*z-g*A)+u*(f*n-g*h));a[4]=-(k*(A*b-z*L)-r*(h*b-n*L)+K*(h*z-n*A));a[5]=c*(A*b-z*L)-r*(f*b-g*L)+K*(f*z-g*A);a[6]=-(c*(h*b-n*L)-k*(f*b-g*L)+K*(f*n-g*h));a[7]=c*(h*z-n*A)-k*(f*z-g*A)+r*(f*n-g*h);a[8]=k*(u*
b-z*G)-r*(m*b-n*G)+K*(m*z-n*u);a[9]=-(c*(u*b-z*G)-r*(d*b-g*G)+K*(d*z-g*u));a[10]=c*(m*b-n*G)-k*(d*b-g*G)+K*(d*n-g*m);a[11]=-(c*(m*z-n*u)-k*(d*z-g*u)+r*(d*n-g*m));a[12]=-(k*(u*L-A*G)-r*(m*L-h*G)+K*(m*A-h*u));a[13]=c*(u*L-A*G)-r*(d*L-f*G)+K*(d*A-f*u);a[14]=-(c*(m*L-h*G)-k*(d*L-f*G)+K*(d*h-f*m));a[15]=c*(m*A-h*u)-k*(d*A-f*u)+r*(d*h-f*m);return a}function H(a){const b=a[0],c=a[1],d=a[2],f=a[3],g=a[4],k=a[5],m=a[6],h=a[7],n=a[8],r=a[9],u=a[10],A=a[11],z=a[12],K=a[13],G=a[14];a=a[15];return(b*k-c*g)*(u*
a-A*G)-(b*m-d*g)*(r*a-A*K)+(b*h-f*g)*(r*G-u*K)+(c*m-d*k)*(n*a-A*z)-(c*h-f*k)*(n*G-u*z)+(d*h-f*m)*(n*K-r*z)}function B(a,b,c){const d=b[0],f=b[1],g=b[2],k=b[3],m=b[4],h=b[5],n=b[6],r=b[7],u=b[8],A=b[9],z=b[10],K=b[11],G=b[12],L=b[13],X=b[14];b=b[15];let P=c[0],R=c[1],S=c[2],T=c[3];a[0]=P*d+R*m+S*u+T*G;a[1]=P*f+R*h+S*A+T*L;a[2]=P*g+R*n+S*z+T*X;a[3]=P*k+R*r+S*K+T*b;P=c[4];R=c[5];S=c[6];T=c[7];a[4]=P*d+R*m+S*u+T*G;a[5]=P*f+R*h+S*A+T*L;a[6]=P*g+R*n+S*z+T*X;a[7]=P*k+R*r+S*K+T*b;P=c[8];R=c[9];S=c[10];T=
c[11];a[8]=P*d+R*m+S*u+T*G;a[9]=P*f+R*h+S*A+T*L;a[10]=P*g+R*n+S*z+T*X;a[11]=P*k+R*r+S*K+T*b;P=c[12];R=c[13];S=c[14];T=c[15];a[12]=P*d+R*m+S*u+T*G;a[13]=P*f+R*h+S*A+T*L;a[14]=P*g+R*n+S*z+T*X;a[15]=P*k+R*r+S*K+T*b;return a}function y(a,b,c){const d=c[0],f=c[1];c=c[2];if(b===a)a[12]=b[0]*d+b[4]*f+b[8]*c+b[12],a[13]=b[1]*d+b[5]*f+b[9]*c+b[13],a[14]=b[2]*d+b[6]*f+b[10]*c+b[14],a[15]=b[3]*d+b[7]*f+b[11]*c+b[15];else{const g=b[0],k=b[1],m=b[2],h=b[3],n=b[4],r=b[5],u=b[6],A=b[7],z=b[8],K=b[9],G=b[10],L=b[11];
a[0]=g;a[1]=k;a[2]=m;a[3]=h;a[4]=n;a[5]=r;a[6]=u;a[7]=A;a[8]=z;a[9]=K;a[10]=G;a[11]=L;a[12]=g*d+n*f+z*c+b[12];a[13]=k*d+r*f+K*c+b[13];a[14]=m*d+u*f+G*c+b[14];a[15]=h*d+A*f+L*c+b[15]}return a}function M(a,b,c){const d=c[0],f=c[1];c=c[2];a[0]=b[0]*d;a[1]=b[1]*d;a[2]=b[2]*d;a[3]=b[3]*d;a[4]=b[4]*f;a[5]=b[5]*f;a[6]=b[6]*f;a[7]=b[7]*f;a[8]=b[8]*c;a[9]=b[9]*c;a[10]=b[10]*c;a[11]=b[11]*c;a[12]=b[12];a[13]=b[13];a[14]=b[14];a[15]=b[15];return a}function t(a,b,c,d){let f=d[0],g=d[1];d=d[2];let k=Math.sqrt(f*
f+g*g+d*d);var m=void 0,h=void 0;let n=void 0,r=void 0,u=void 0,A=void 0,z=void 0,K=void 0,G=void 0,L=void 0,X=void 0,P=void 0,R=void 0,S=void 0,T=void 0,la=void 0,ma=void 0,na=void 0,oa=void 0,pa=void 0,qa=void 0,ra=void 0;h=m=void 0;if(k<D.getEpsilon())return null;k=1/k;f*=k;g*=k;d*=k;m=Math.sin(c);h=Math.cos(c);n=1-h;r=b[0];u=b[1];A=b[2];z=b[3];K=b[4];G=b[5];L=b[6];X=b[7];P=b[8];R=b[9];S=b[10];T=b[11];la=f*f*n+h;ma=g*f*n+d*m;na=d*f*n-g*m;oa=f*g*n-d*m;pa=g*g*n+h;qa=d*g*n+f*m;ra=f*d*n+g*m;m=g*d*
n-f*m;h=d*d*n+h;a[0]=r*la+K*ma+P*na;a[1]=u*la+G*ma+R*na;a[2]=A*la+L*ma+S*na;a[3]=z*la+X*ma+T*na;a[4]=r*oa+K*pa+P*qa;a[5]=u*oa+G*pa+R*qa;a[6]=A*oa+L*pa+S*qa;a[7]=z*oa+X*pa+T*qa;a[8]=r*ra+K*m+P*h;a[9]=u*ra+G*m+R*h;a[10]=A*ra+L*m+S*h;a[11]=z*ra+X*m+T*h;b!==a&&(a[12]=b[12],a[13]=b[13],a[14]=b[14],a[15]=b[15]);return a}function F(a,b,c){const d=Math.sin(c);c=Math.cos(c);const f=b[4],g=b[5],k=b[6],m=b[7],h=b[8],n=b[9],r=b[10],u=b[11];b!==a&&(a[0]=b[0],a[1]=b[1],a[2]=b[2],a[3]=b[3],a[12]=b[12],a[13]=b[13],
a[14]=b[14],a[15]=b[15]);a[4]=f*c+h*d;a[5]=g*c+n*d;a[6]=k*c+r*d;a[7]=m*c+u*d;a[8]=h*c-f*d;a[9]=n*c-g*d;a[10]=r*c-k*d;a[11]=u*c-m*d;return a}function I(a,b,c){const d=Math.sin(c);c=Math.cos(c);const f=b[0],g=b[1],k=b[2],m=b[3],h=b[8],n=b[9],r=b[10],u=b[11];b!==a&&(a[4]=b[4],a[5]=b[5],a[6]=b[6],a[7]=b[7],a[12]=b[12],a[13]=b[13],a[14]=b[14],a[15]=b[15]);a[0]=f*c-h*d;a[1]=g*c-n*d;a[2]=k*c-r*d;a[3]=m*c-u*d;a[8]=f*d+h*c;a[9]=g*d+n*c;a[10]=k*d+r*c;a[11]=m*d+u*c;return a}function U(a,b,c){const d=Math.sin(c);
c=Math.cos(c);const f=b[0],g=b[1],k=b[2],m=b[3],h=b[4],n=b[5],r=b[6],u=b[7];b!==a&&(a[8]=b[8],a[9]=b[9],a[10]=b[10],a[11]=b[11],a[12]=b[12],a[13]=b[13],a[14]=b[14],a[15]=b[15]);a[0]=f*c+h*d;a[1]=g*c+n*d;a[2]=k*c+r*d;a[3]=m*c+u*d;a[4]=h*c-f*d;a[5]=n*c-g*d;a[6]=r*c-k*d;a[7]=u*c-m*d;return a}function V(a,b){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=b[0];a[13]=b[1];a[14]=b[2];a[15]=1;return a}function W(a,b){a[0]=b[0];a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=
b[1];a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=b[2];a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a}function da(a,b,c){if(0===b)return C(a);let d=c[0],f=c[1];c=c[2];let g=Math.sqrt(d*d+f*f+c*c),k=void 0,m=void 0,h=void 0;if(g<D.getEpsilon())return null;g=1/g;d*=g;f*=g;c*=g;k=Math.sin(b);m=Math.cos(b);h=1-m;a[0]=d*d*h+m;a[1]=f*d*h+c*k;a[2]=c*d*h-f*k;a[3]=0;a[4]=d*f*h-c*k;a[5]=f*f*h+m;a[6]=c*f*h+d*k;a[7]=0;a[8]=d*c*h+f*k;a[9]=f*c*h-d*k;a[10]=c*c*h+m;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a}function sa(a,
b){const c=Math.sin(b);b=Math.cos(b);a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=b;a[6]=c;a[7]=0;a[8]=0;a[9]=-c;a[10]=b;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a}function fa(a,b){const c=Math.sin(b);b=Math.cos(b);a[0]=b;a[1]=0;a[2]=-c;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=c;a[9]=0;a[10]=b;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a}function xa(a,b){const c=Math.sin(b);b=Math.cos(b);a[0]=b;a[1]=c;a[2]=0;a[3]=0;a[4]=-c;a[5]=b;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=
0;a[15]=1;return a}function ya(a,b,c){var d=b[0],f=b[1],g=b[2],k=b[3],m=d+d,h=f+f;const n=g+g;b=d*m;const r=d*h;d*=n;const u=f*h;f*=n;g*=n;m*=k;h*=k;k*=n;a[0]=1-(u+g);a[1]=r+k;a[2]=d-h;a[3]=0;a[4]=r-k;a[5]=1-(b+g);a[6]=f+m;a[7]=0;a[8]=d+h;a[9]=f-m;a[10]=1-(b+u);a[11]=0;a[12]=c[0];a[13]=c[1];a[14]=c[2];a[15]=1;return a}function va(a,b){const c=Ia,d=-b[0],f=-b[1],g=-b[2],k=b[3],m=b[4],h=b[5],n=b[6],r=b[7],u=d*d+f*f+g*g+k*k;0<u?(c[0]=2*(m*k+r*d+h*g-n*f)/u,c[1]=2*(h*k+r*f+n*d-m*g)/u,c[2]=2*(n*k+r*g+m*
f-h*d)/u):(c[0]=2*(m*k+r*d+h*g-n*f),c[1]=2*(h*k+r*f+n*d-m*g),c[2]=2*(n*k+r*g+m*f-h*d));ya(a,b,c);return a}function ta(a,b){a[0]=b[12];a[1]=b[13];a[2]=b[14];return a}function ua(a,b){const c=b[0],d=b[1],f=b[2],g=b[4],k=b[5],m=b[6],h=b[8],n=b[9];b=b[10];a[0]=Math.sqrt(c*c+d*d+f*f);a[1]=Math.sqrt(g*g+k*k+m*m);a[2]=Math.sqrt(h*h+n*n+b*b);return a}function O(a,b){const c=b[0]+b[5]+b[10];let d=0;0<c?(d=2*Math.sqrt(c+1),a[3]=.25*d,a[0]=(b[6]-b[9])/d,a[1]=(b[8]-b[2])/d,a[2]=(b[1]-b[4])/d):b[0]>b[5]&&b[0]>
b[10]?(d=2*Math.sqrt(1+b[0]-b[5]-b[10]),a[3]=(b[6]-b[9])/d,a[0]=.25*d,a[1]=(b[1]+b[4])/d,a[2]=(b[8]+b[2])/d):b[5]>b[10]?(d=2*Math.sqrt(1+b[5]-b[0]-b[10]),a[3]=(b[8]-b[2])/d,a[0]=(b[1]+b[4])/d,a[1]=.25*d,a[2]=(b[6]+b[9])/d):(d=2*Math.sqrt(1+b[10]-b[0]-b[5]),a[3]=(b[1]-b[4])/d,a[0]=(b[8]+b[2])/d,a[1]=(b[6]+b[9])/d,a[2]=.25*d);return a}function Y(a,b,c,d){var f=b[0],g=b[1],k=b[2],m=b[3],h=f+f,n=g+g,r=k+k;b=f*h;const u=f*n;f*=r;const A=g*n;g*=r;k*=r;h*=m;n*=m;m*=r;r=d[0];const z=d[1];d=d[2];a[0]=(1-(A+
k))*r;a[1]=(u+m)*r;a[2]=(f-n)*r;a[3]=0;a[4]=(u-m)*z;a[5]=(1-(b+k))*z;a[6]=(g+h)*z;a[7]=0;a[8]=(f+n)*d;a[9]=(g-h)*d;a[10]=(1-(b+A))*d;a[11]=0;a[12]=c[0];a[13]=c[1];a[14]=c[2];a[15]=1;return a}function ea(a,b,c,d,f){var g=b[0],k=b[1],m=b[2],h=b[3],n=g+g,r=k+k,u=m+m;b=g*n;var A=g*r,z=g*u;g=k*r;k*=u;var K=m*u;m=h*n;r*=h;const G=h*u;var L=d[0],X=d[1];u=d[2];d=f[0];h=f[1];f=f[2];n=(1-(g+K))*L;const P=(A+G)*L;L*=z-r;A=(A-G)*X;K=(1-(b+K))*X;X*=k+m;z=(z+r)*u;k=(k-m)*u;b=(1-(b+g))*u;a[0]=n;a[1]=P;a[2]=L;a[3]=
0;a[4]=A;a[5]=K;a[6]=X;a[7]=0;a[8]=z;a[9]=k;a[10]=b;a[11]=0;a[12]=c[0]+d-(n*d+A*h+z*f);a[13]=c[1]+h-(P*d+K*h+k*f);a[14]=c[2]+f-(L*d+X*h+b*f);a[15]=1;return a}function ha(a,b){var c=b[0],d=b[1],f=b[2];b=b[3];var g=c+c,k=d+d;const m=f+f;c*=g;const h=d*g;d*=k;const n=f*g,r=f*k;f*=m;g*=b;k*=b;b*=m;a[0]=1-d-f;a[1]=h+b;a[2]=n-k;a[3]=0;a[4]=h-b;a[5]=1-c-f;a[6]=r+g;a[7]=0;a[8]=n+k;a[9]=r-g;a[10]=1-c-d;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a}function wa(a,b,c,d,f,g,k){const m=1/(c-b),h=1/(f-d),n=
1/(g-k);a[0]=2*g*m;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=2*g*h;a[6]=0;a[7]=0;a[8]=(c+b)*m;a[9]=(f+d)*h;a[10]=(k+g)*n;a[11]=-1;a[12]=0;a[13]=0;a[14]=k*g*2*n;a[15]=0;return a}function ja(a,b,c,d,f){b=1/Math.tan(b/2);let g=void 0;a[0]=b/c;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=b;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[11]=-1;a[12]=0;a[13]=0;a[15]=0;null!=f&&Infinity!==f?(g=1/(d-f),a[10]=(f+d)*g,a[14]=2*f*d*g):(a[10]=-1,a[14]=-2*d);return a}function ka(a,b,c,d){const f=Math.tan(b.upDegrees*Math.PI/180),g=Math.tan(b.downDegrees*
Math.PI/180),k=Math.tan(b.leftDegrees*Math.PI/180);b=Math.tan(b.rightDegrees*Math.PI/180);const m=2/(k+b),h=2/(f+g);a[0]=m;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=h;a[6]=0;a[7]=0;a[8]=-((k-b)*m*.5);a[9]=(f-g)*h*.5;a[10]=d/(c-d);a[11]=-1;a[12]=0;a[13]=0;a[14]=d*c/(c-d);a[15]=0;return a}function Ca(a,b,c,d,f,g,k){const m=1/(b-c),h=1/(d-f),n=1/(g-k);a[0]=-2*m;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=-2*h;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=2*n;a[11]=0;a[12]=(b+c)*m;a[13]=(f+d)*h;a[14]=(k+g)*n;a[15]=1;return a}function Da(a,
b,c,d){var f=void 0;let g=void 0;var k=void 0,m=void 0;let h=void 0,n=void 0;var r=void 0,u=void 0;let A=void 0,z=void 0;const K=b[0],G=b[1];b=b[2];k=d[0];m=d[1];d=d[2];r=c[0];u=c[1];c=c[2];f=D.getEpsilon();if(Math.abs(K-r)<f&&Math.abs(G-u)<f&&Math.abs(b-c)<f)return C(a);r=K-r;u=G-u;A=b-c;z=1/Math.sqrt(r*r+u*u+A*A);r*=z;u*=z;A*=z;f=m*A-d*u;g=d*r-k*A;k=k*u-m*r;(z=Math.sqrt(f*f+g*g+k*k))?(z=1/z,f*=z,g*=z,k*=z):k=g=f=0;m=u*k-A*g;h=A*f-r*k;n=r*g-u*f;(z=Math.sqrt(m*m+h*h+n*n))?(z=1/z,m*=z,h*=z,n*=z):n=
h=m=0;a[0]=f;a[1]=m;a[2]=r;a[3]=0;a[4]=g;a[5]=h;a[6]=u;a[7]=0;a[8]=k;a[9]=n;a[10]=A;a[11]=0;a[12]=-(f*K+g*G+k*b);a[13]=-(m*K+h*G+n*b);a[14]=-(r*K+u*G+A*b);a[15]=1;return a}function Ea(a,b,c,d){const f=b[0],g=b[1];b=b[2];var k=d[0];const m=d[1];var h=d[2];d=f-c[0];let n=g-c[1];c=b-c[2];let r=d*d+n*n+c*c;0<r&&(r=1/Math.sqrt(r),d*=r,n*=r,c*=r);let u=m*c-h*n;h=h*d-k*c;k=k*n-m*d;r=u*u+h*h+k*k;0<r&&(r=1/Math.sqrt(r),u*=r,h*=r,k*=r);a[0]=u;a[1]=h;a[2]=k;a[3]=0;a[4]=n*k-c*h;a[5]=c*u-d*k;a[6]=d*h-n*u;a[7]=
0;a[8]=d;a[9]=n;a[10]=c;a[11]=0;a[12]=f;a[13]=g;a[14]=b;a[15]=1;return a}function Aa(a){return"mat4("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+", "+a[9]+", "+a[10]+", "+a[11]+", "+a[12]+", "+a[13]+", "+a[14]+", "+a[15]+")"}function Ba(a){return Math.sqrt(a[0]**2+a[1]**2+a[2]**2+a[3]**2+a[4]**2+a[5]**2+a[6]**2+a[7]**2+a[8]**2+a[9]**2+a[10]**2+a[11]**2+a[12]**2+a[13]**2+a[14]**2+a[15]**2)}function q(a,b,c){a[0]=b[0]+c[0];a[1]=b[1]+c[1];a[2]=b[2]+c[2];a[3]=
b[3]+c[3];a[4]=b[4]+c[4];a[5]=b[5]+c[5];a[6]=b[6]+c[6];a[7]=b[7]+c[7];a[8]=b[8]+c[8];a[9]=b[9]+c[9];a[10]=b[10]+c[10];a[11]=b[11]+c[11];a[12]=b[12]+c[12];a[13]=b[13]+c[13];a[14]=b[14]+c[14];a[15]=b[15]+c[15];return a}function w(a,b,c){a[0]=b[0]-c[0];a[1]=b[1]-c[1];a[2]=b[2]-c[2];a[3]=b[3]-c[3];a[4]=b[4]-c[4];a[5]=b[5]-c[5];a[6]=b[6]-c[6];a[7]=b[7]-c[7];a[8]=b[8]-c[8];a[9]=b[9]-c[9];a[10]=b[10]-c[10];a[11]=b[11]-c[11];a[12]=b[12]-c[12];a[13]=b[13]-c[13];a[14]=b[14]-c[14];a[15]=b[15]-c[15];return a}
function J(a,b,c){a[0]=b[0]*c;a[1]=b[1]*c;a[2]=b[2]*c;a[3]=b[3]*c;a[4]=b[4]*c;a[5]=b[5]*c;a[6]=b[6]*c;a[7]=b[7]*c;a[8]=b[8]*c;a[9]=b[9]*c;a[10]=b[10]*c;a[11]=b[11]*c;a[12]=b[12]*c;a[13]=b[13]*c;a[14]=b[14]*c;a[15]=b[15]*c;return a}function aa(a,b,c,d){a[0]=b[0]+c[0]*d;a[1]=b[1]+c[1]*d;a[2]=b[2]+c[2]*d;a[3]=b[3]+c[3]*d;a[4]=b[4]+c[4]*d;a[5]=b[5]+c[5]*d;a[6]=b[6]+c[6]*d;a[7]=b[7]+c[7]*d;a[8]=b[8]+c[8]*d;a[9]=b[9]+c[9]*d;a[10]=b[10]+c[10]*d;a[11]=b[11]+c[11]*d;a[12]=b[12]+c[12]*d;a[13]=b[13]+c[13]*d;
a[14]=b[14]+c[14]*d;a[15]=b[15]+c[15]*d;return a}function ba(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]&&a[3]===b[3]&&a[4]===b[4]&&a[5]===b[5]&&a[6]===b[6]&&a[7]===b[7]&&a[8]===b[8]&&a[9]===b[9]&&a[10]===b[10]&&a[11]===b[11]&&a[12]===b[12]&&a[13]===b[13]&&a[14]===b[14]&&a[15]===b[15]}function ca(a,b){if(a===b)return!0;const c=a[0],d=a[1],f=a[2],g=a[3],k=a[4],m=a[5],h=a[6],n=a[7],r=a[8],u=a[9],A=a[10],z=a[11],K=a[12],G=a[13],L=a[14];a=a[15];const X=b[0],P=b[1],R=b[2],S=b[3],T=b[4],la=b[5],ma=
b[6],na=b[7],oa=b[8],pa=b[9],qa=b[10],ra=b[11],Z=b[12],Fa=b[13],Ga=b[14];b=b[15];const ia=D.getEpsilon();return Math.abs(c-X)<=ia*Math.max(1,Math.abs(c),Math.abs(X))&&Math.abs(d-P)<=ia*Math.max(1,Math.abs(d),Math.abs(P))&&Math.abs(f-R)<=ia*Math.max(1,Math.abs(f),Math.abs(R))&&Math.abs(g-S)<=ia*Math.max(1,Math.abs(g),Math.abs(S))&&Math.abs(k-T)<=ia*Math.max(1,Math.abs(k),Math.abs(T))&&Math.abs(m-la)<=ia*Math.max(1,Math.abs(m),Math.abs(la))&&Math.abs(h-ma)<=ia*Math.max(1,Math.abs(h),Math.abs(ma))&&
Math.abs(n-na)<=ia*Math.max(1,Math.abs(n),Math.abs(na))&&Math.abs(r-oa)<=ia*Math.max(1,Math.abs(r),Math.abs(oa))&&Math.abs(u-pa)<=ia*Math.max(1,Math.abs(u),Math.abs(pa))&&Math.abs(A-qa)<=ia*Math.max(1,Math.abs(A),Math.abs(qa))&&Math.abs(z-ra)<=ia*Math.max(1,Math.abs(z),Math.abs(ra))&&Math.abs(K-Z)<=ia*Math.max(1,Math.abs(K),Math.abs(Z))&&Math.abs(G-Fa)<=ia*Math.max(1,Math.abs(G),Math.abs(Fa))&&Math.abs(L-Ga)<=ia*Math.max(1,Math.abs(L),Math.abs(Ga))&&Math.abs(a-b)<=ia*Math.max(1,Math.abs(a),Math.abs(b))}
function za(a){const b=D.getEpsilon(),c=a[0],d=a[1],f=a[2],g=a[4],k=a[5],m=a[6],h=a[8],n=a[9];a=a[10];return Math.abs(1-(c*c+g*g+h*h))<=b&&Math.abs(1-(d*d+k*k+n*n))<=b&&Math.abs(1-(f*f+m*m+a*a))<=b}function Ha(a){return 1===a[0]&&0===a[1]&&0===a[2]&&0===a[4]&&1===a[5]&&0===a[6]&&0===a[8]&&0===a[9]&&1===a[10]}const Ia=v.create();v=Object.freeze(Object.defineProperty({__proto__:null,add:q,adjoint:Q,copy:E,determinant:H,equals:ca,exactEquals:ba,frob:Ba,fromQuat:ha,fromQuat2:va,fromRotation:da,fromRotationTranslation:ya,
fromRotationTranslationScale:Y,fromRotationTranslationScaleOrigin:ea,fromScaling:W,fromTranslation:V,fromXRotation:sa,fromYRotation:fa,fromZRotation:xa,frustum:wa,getRotation:O,getScaling:ua,getTranslation:ta,hasIdentityRotation:Ha,identity:C,invert:N,invertOrIdentity:l,isOrthoNormal:za,lookAt:Da,mul:B,multiply:B,multiplyScalar:J,multiplyScalarAndAdd:aa,ortho:Ca,perspective:ja,perspectiveFromFieldOfView:ka,rotate:t,rotateX:F,rotateY:I,rotateZ:U,scale:M,set:x,str:Aa,sub:w,subtract:w,targetTo:Ea,translate:y,
transpose:p},Symbol.toStringTag,{value:"Module"}));e.add=q;e.adjoint=Q;e.copy=E;e.determinant=H;e.equals=ca;e.exactEquals=ba;e.frob=Ba;e.fromQuat=ha;e.fromQuat2=va;e.fromRotation=da;e.fromRotationTranslation=ya;e.fromRotationTranslationScale=Y;e.fromRotationTranslationScaleOrigin=ea;e.fromScaling=W;e.fromTranslation=V;e.fromXRotation=sa;e.fromYRotation=fa;e.fromZRotation=xa;e.frustum=wa;e.getRotation=O;e.getScaling=ua;e.getTranslation=ta;e.hasIdentityRotation=Ha;e.identity=C;e.invert=N;e.invertOrIdentity=
l;e.isOrthoNormal=za;e.lookAt=Da;e.mat4=v;e.mul=B;e.multiply=B;e.multiplyScalar=J;e.multiplyScalarAndAdd=aa;e.ortho=Ca;e.perspective=ja;e.perspectiveFromFieldOfView=ka;e.rotate=t;e.rotateX=F;e.rotateY=I;e.rotateZ=U;e.scale=M;e.set=x;e.str=Aa;e.sub=w;e.subtract=w;e.targetTo=Ea;e.translate=y;e.transpose=p})},"esri/chunks/vec4f64":function(){define(["exports"],function(e){function v(){return[0,0,0,0]}function D(W){return[W[0],W[1],W[2],W[3]]}function E(W,da,sa,fa){return[W,da,sa,fa]}function x(W){const da=
v(),sa=Math.min(4,W.length);for(let fa=0;fa<sa;++fa)da[fa]=W[fa];return da}function C(W,da){return new Float64Array(W,da,4)}function p(){return v()}function l(){return[1,1,1,1]}function N(){return[1,0,0,0]}function Q(){return[0,1,0,0]}function H(){return[0,0,1,0]}function B(){return[0,0,0,1]}const y=v(),M=l(),t=N(),F=Q(),I=H(),U=B(),V=Object.freeze(Object.defineProperty({__proto__:null,ONES:M,UNIT_W:U,UNIT_X:t,UNIT_Y:F,UNIT_Z:I,ZEROS:y,clone:D,create:v,createView:C,fromArray:x,fromValues:E,ones:l,
unitW:B,unitX:N,unitY:Q,unitZ:H,zeros:p},Symbol.toStringTag,{value:"Module"}));e.ONES=M;e.UNIT_W=U;e.UNIT_X=t;e.UNIT_Y=F;e.UNIT_Z=I;e.ZEROS=y;e.clone=D;e.create=v;e.createView=C;e.fromArray=x;e.fromValues=E;e.ones=l;e.unitW=B;e.unitX=N;e.unitY=Q;e.unitZ=H;e.vec4f64=V;e.zeros=p})},"esri/geometry/support/Axis":function(){define(["exports"],function(e){e.Axis=void 0;var v=e.Axis||(e.Axis={});v[v.X=0]="X";v[v.Y=1]="Y";v[v.Z=2]="Z";Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})})},"esri/geometry/support/ray":function(){define("exports ../../core/arrayUtils ../../core/ObjectStack ../../chunks/vec3 ../../chunks/vec3f64 ./vectorStacks".split(" "),
function(e,v,D,E,x,C){function p(B){return B?l(x.clone(B.origin),x.clone(B.direction)):l(x.create(),x.create())}function l(B,y){return{origin:B,direction:y}}function N(B,y,M=p()){E.copy(M.origin,B);E.copy(M.direction,y);return M}function Q(B,y){B=E.cross(C.sv3d.get(),E.normalize(C.sv3d.get(),B.direction),E.subtract(C.sv3d.get(),y,B.origin));return E.dot(B,B)}const H=new D.ObjectStack(()=>p());e.closestPoint=function(B,y,M){y=E.dot(B.direction,E.subtract(M,y,B.origin));E.add(M,B.origin,E.scale(M,B.direction,
y));return M};e.copy=function(B,y=p()){return N(B.origin,B.direction,y)};e.create=p;e.distance=function(B,y){return Math.sqrt(Q(B,y))};e.distance2=Q;e.equals=function(B,y){return v.equals(B.origin,y.origin)&&v.equals(B.direction,y.direction)};e.fromPoints=function(B,y,M=p()){E.copy(M.origin,B);E.subtract(M.direction,y,B);return M};e.fromValues=N;e.wrap=function(B,y){const M=H.get();M.origin=B;M.direction=y;return M};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})})},"esri/core/ObjectStack":function(){define(["exports",
"../chunks/_rollupPluginBabelHelpers","./nextTick"],function(e,v,D){let E=function(){function x(p){this._allocator=p;this._items=[];this._itemsPtr=0;this._grow()}var C=x.prototype;C.get=function(){0===this._itemsPtr&&D.nextTick(()=>this._reset());this._itemsPtr===this._items.length&&this._grow();return this._items[this._itemsPtr++]};C._reset=function(){this._items.length=Math.min(Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3072),this._items.length);this._itemsPtr=0};C._grow=function(){for(let p=
0;p<Math.max(8,Math.min(this._items.length,1024));p++)this._items.push(this._allocator())};return v._createClass(x)}();e.ObjectStack=E;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})})},"esri/geometry/support/vectorStacks":function(){define(["exports","../../core/VectorStack"],function(e,v){const D=v.VectorStack.createVec2f64(),E=v.VectorStack.createVec3f64(),x=v.VectorStack.createVec4f64(),C=v.VectorStack.createMat3f64(),p=v.VectorStack.createMat4f64();v=v.VectorStack.createQuatf64();
e.sm3d=C;e.sm4d=p;e.sq4d=v;e.sv2d=D;e.sv3d=E;e.sv4d=x;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})})},"esri/core/VectorStack":function(){define("exports ../chunks/_rollupPluginBabelHelpers ./byteSizeEstimations ./nextTick ../chunks/mat3f64 ../chunks/mat4f64 ../chunks/quatf64 ../chunks/vec2f64 ../chunks/vec3f64 ../chunks/vec4f64".split(" "),function(e,v,D,E,x,C,p,l,N,Q){let H=function(){function y(t,F,I){this._itemByteSize=t;this._itemCreate=F;this._buffers=[];this._items=[];this._itemsPtr=
0;this._itemsPerBuffer=Math.ceil(I/this._itemByteSize)}var M=y.prototype;M.get=function(){0===this._itemsPtr&&E.nextTick(()=>this._reset());const t=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=t;){const F=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize);for(let I=0;I<this._itemsPerBuffer;++I)this._items.push(this._itemCreate(F,I*this._itemByteSize));this._buffers.push(F)}return this._items[this._itemsPtr++]};M._reset=function(){const t=2*(Math.floor(this._itemsPtr/
this._itemsPerBuffer)+1);for(;this._buffers.length>t;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0};y.createVec2f64=function(t=B){return new y(16,l.createView,t)};y.createVec3f64=function(t=B){return new y(24,N.createView,t)};y.createVec4f64=function(t=B){return new y(32,Q.createView,t)};y.createMat3f64=function(t=B){return new y(72,x.createView,t)};y.createMat4f64=function(t=B){return new y(128,C.createView,t)};y.createQuatf64=function(t=B){return new y(32,
p.createView,t)};v._createClass(y,[{key:"test",get:function(){return{size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}}]);return y}();const B=4*D.ByteSizeUnit.KILOBYTES;e.VectorStack=H;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})})},"esri/core/byteSizeEstimations":function(){define(["exports"],function(e){function v(x){return 32+x.length}function D(x){if(!x)return 0;if(Array.isArray(x)){var C=x.length;if(0===C||"number"===typeof x[0])x=32+8*C;else{var p=32;for(let l=
0;l<C;l++)p+=E(x[l]);x=p}return x}p=32;for(C in x)x.hasOwnProperty(C)&&(p+=E(x[C]));return p}function E(x){switch(typeof x){case "object":return D(x);case "string":return v(x);case "number":return 16;case "boolean":return 4;default:return 8}}e.ByteSizeUnit=void 0;(function(x){x[x.KILOBYTES=1024]="KILOBYTES";x[x.MEGABYTES=1048576]="MEGABYTES";x[x.GIGABYTES=1073741824]="GIGABYTES"})(e.ByteSizeUnit||(e.ByteSizeUnit={}));e.estimateAttributesObjectSize=function(x){if(!x)return 0;let C=32;for(const p in x)if(x.hasOwnProperty(p)){const l=
x[p];switch(typeof l){case "string":C+=v(l);break;case "number":C+=16;break;case "boolean":C+=4}}return C};e.estimateFixedArraySize=function(x,C){return 32+x.length*C};e.estimateNestedObjectSize=D;e.estimateNumberByteSize=function(x){return 16};e.estimateStringByteSize=v;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})})},"esri/chunks/mat3f64":function(){define(["exports"],function(e){function v(){return[1,0,0,0,1,0,0,0,1]}function D(p){return[p[0],p[1],p[2],p[3],p[4],p[5],p[6],p[7],p[8]]}
function E(p,l,N,Q,H,B,y,M,t){return[p,l,N,Q,H,B,y,M,t]}function x(p,l){return new Float64Array(p,l,9)}const C=Object.freeze(Object.defineProperty({__proto__:null,clone:D,create:v,createView:x,fromValues:E},Symbol.toStringTag,{value:"Module"}));e.clone=D;e.create=v;e.createView=x;e.fromValues=E;e.mat3f64=C})},"esri/chunks/mat4f64":function(){define(["exports"],function(e){function v(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function D(l){return[l[0],l[1],l[2],l[3],l[4],l[5],l[6],l[7],l[8],l[9],l[10],
l[11],l[12],l[13],l[14],l[15]]}function E(l,N,Q,H,B,y,M,t,F,I,U,V,W,da,sa,fa){return[l,N,Q,H,B,y,M,t,F,I,U,V,W,da,sa,fa]}function x(l,N){return new Float64Array(l,N,16)}const C=v(),p=Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:C,clone:D,create:v,createView:x,fromValues:E},Symbol.toStringTag,{value:"Module"}));e.IDENTITY=C;e.clone=D;e.create=v;e.createView=x;e.fromValues=E;e.mat4f64=p})},"esri/chunks/quatf64":function(){define(["exports"],function(e){function v(){return[0,0,0,1]}function D(l){return[l[0],
l[1],l[2],l[3]]}function E(l,N,Q,H){return[l,N,Q,H]}function x(l,N){return new Float64Array(l,N,4)}const C=v(),p=Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:C,clone:D,create:v,createView:x,fromValues:E},Symbol.toStringTag,{value:"Module"}));e.IDENTITY=C;e.clone=D;e.create=v;e.createView=x;e.fromValues=E;e.quatf64=p})},"esri/chunks/vec2f64":function(){define(["exports"],function(e){function v(){return[0,0]}function D(F){return[F[0],F[1]]}function E(F,I){return[F,I]}function x(F){const I=
[0,0],U=Math.min(2,F.length);for(let V=0;V<U;++V)I[V]=F[V];return I}function C(F,I){return new Float64Array(F,I,2)}function p(){return[0,0]}function l(){return[1,1]}function N(){return[1,0]}function Q(){return[0,1]}const H=[0,0],B=[1,1],y=[1,0],M=[0,1],t=Object.freeze(Object.defineProperty({__proto__:null,ONES:B,UNIT_X:y,UNIT_Y:M,ZEROS:H,clone:D,create:v,createView:C,fromArray:x,fromValues:E,ones:l,unitX:N,unitY:Q,zeros:p},Symbol.toStringTag,{value:"Module"}));e.ONES=B;e.UNIT_X=y;e.UNIT_Y=M;e.ZEROS=
H;e.clone=D;e.create=v;e.createView=C;e.fromArray=x;e.fromValues=E;e.ones=l;e.unitX=N;e.unitY=Q;e.vec2f64=t;e.zeros=p})},"esri/geometry/support/vector":function(){define(["exports","../../core/mathUtils","../../chunks/vec3","../../chunks/vec3f64"],function(e,v,D,E){const x=E.create(),C=E.create();e.angle=function(p,l){p=D.dot(p,l)/(D.length(p)*D.length(l));return-v.acosClamped(p)};e.angleAroundAxis=function(p,l,N){D.normalize(x,p);D.normalize(C,l);p=D.dot(x,C);p=v.acosClamped(p);l=D.cross(x,x,C);
return 0>D.dot(l,N)?2*Math.PI-p:p};e.projectPoint=function(p,l,N){l=D.dot(p,l)/D.dot(p,p);return D.scale(N,p,l)};e.projectPointSignedLength=function(p,l){return D.dot(p,l)/D.length(p)};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})})},"*noref":1}});
define(["exports","../../../core/maybe","../../../libs/i3s/enums","../../../libs/i3s/I3SModule","./i3s/I3SNode"],function(e,v,D,E,x){function C(t){const F=t.modifications,I=y._malloc(8*F.length),U=new Float64Array(y.HEAPU8.buffer,I,F.length);for(let V=0;V<F.length;++V)U[V]=F[V];y.setModifications(t.context,I,F.length,t.isGeodetic);y._free(I)}function p(t,F){if(!y)return null;const {context:I,localOrigin:U,globalTrafo:V,mbs:W,obb:da,elevationOffset:sa,geometryBuffer:fa,geometryDescriptor:xa,indexToVertexProjector:ya,
vertexToRenderProjector:va}=t;var ta=y._malloc(fa.byteLength),ua=y._malloc(33*Float64Array.BYTES_PER_ELEMENT),O=new Uint8Array(y.HEAPU8.buffer,ta,fa.byteLength);O.set(new Uint8Array(fa));var Y=new Float64Array(y.HEAPU8.buffer,ua,33);Q(Y,U);var ea=Y.byteOffset+3*Y.BYTES_PER_ELEMENT,ha=new Float64Array(Y.buffer,ea);Q(ha,V);ea+=16*Y.BYTES_PER_ELEMENT;ha=new Float64Array(Y.buffer,ea);Q(ha,W);ea+=4*Y.BYTES_PER_ELEMENT;v.isSome(da)&&(ha=new Float64Array(Y.buffer,ea),Q(ha,da.center),ea+=3*Y.BYTES_PER_ELEMENT,
ha=new Float64Array(Y.buffer,ea),Q(ha,da.halfSize),ea+=3*Y.BYTES_PER_ELEMENT,ha=new Float64Array(Y.buffer,ea),Q(ha,da.quaternion));Y={isDraco:!1,isLegacy:!1,color:t.layouts.some(ja=>ja.some(ka=>"color"===ka.name)),normal:t.needNormals&&t.layouts.some(ja=>ja.some(ka=>"normalCompressed"===ka.name)),uv0:t.layouts.some(ja=>ja.some(ka=>"uv0"===ka.name)),uvRegion:t.layouts.some(ja=>ja.some(ka=>"uvRegion"===ka.name)),featureIndex:xa.featureIndex};O=y.process(I,!!t.obb,ta,O.byteLength,xa,Y,ua,sa,ya,va,t.normalReferenceFrame);
y._free(ua);y._free(ta);if(0<O.error.length)throw Error(`i3s.wasm: ${O.error}`);if(O.discarded)return null;ta=0<O.componentOffsets.length?O.componentOffsets.slice():null;ua=0<O.featureIds.length?O.featureIds.slice():null;Y=O.interleavedVertedData.slice().buffer;ea=O.indicesType===D.IndexType.Int16?(new Uint16Array(O.indices.buffer,O.indices.byteOffset,O.indices.byteLength/2)).slice():(new Uint32Array(O.indices.buffer,O.indices.byteOffset,O.indices.byteLength/4)).slice();ha=O.positions.slice();const wa=
O.positionIndicesType===D.IndexType.Int16?(new Uint16Array(O.positionIndices.buffer,O.positionIndices.byteOffset,O.positionIndices.byteLength/2)).slice():(new Uint32Array(O.positionIndices.buffer,O.positionIndices.byteOffset,O.positionIndices.byteLength/4)).slice();t={layout:t.layouts[0],interleavedVertexData:Y,indices:ea,hasColors:O.hasColors,hasModifications:O.hasModifications,positionData:{data:ha,indices:wa}};ua&&F.push(ua.buffer);ta&&F.push(ta.buffer);F.push(Y);F.push(ea.buffer);F.push(ha.buffer);
F.push(wa.buffer);return{componentOffsets:ta,featureIds:ua,transformedGeometry:t,obb:O.obb}}function l(t){const {context:F,buffer:I}=t;t=y._malloc(I.byteLength);const U=I.byteLength/Float64Array.BYTES_PER_ELEMENT,V=new Float64Array(y.HEAPU8.buffer,t,U),W=new Float64Array(I);V.set(W);y.filterOBBs(F,t,U);W.set(V);y._free(t)}function N(t){y&&(y.destroy(t),y=null)}function Q(t,F){for(let I=0;I<F.length;++I)t[I]=F[I]}function H(){if(y)return Promise.resolve();B||(B=E.get().then(t=>{y=t;B=null}));return B}
let B,y;const M={transform:p,destroy:N};e.destroyContext=function(t){N(t)};e.dracoDecompressPointCloudData=async function(t){await H();const F=[t.geometryBuffer];var {geometryBuffer:I}=t,U=I.byteLength;t=y._malloc(U);U=new Uint8Array(y.HEAPU8.buffer,t,U);U.set(new Uint8Array(I));I=y.dracoDecompressPointCloudData(t,U.byteLength);y._free(t);if(0<I.error.length)throw Error(`i3s.wasm: ${I.error}`);t=0<I.featureIds?.length?I.featureIds.slice():null;I=I.positions.slice();t&&F.push(t.buffer);F.push(I.buffer);
return{result:{positions:I,featureIds:t},transferList:F}};e.filterObbsForModifications=async function(t){await H();l(t);t={buffer:t.buffer};return{result:t,transferList:[t.buffer]}};e.filterObbsForModificationsSync=l;e.initialize=H;e.interpretObbModificationResults=function(t){return 0===t?x.NodeIMModificationImpact.Unmodified:1===t?x.NodeIMModificationImpact.PotentiallyModified:2===t?x.NodeIMModificationImpact.Culled:x.NodeIMModificationImpact.Unknown};e.process=async function(t){await H();const F=
[t.geometryBuffer];return{result:p(t,F),transferList:F}};e.setLegacySchema=async function(t){await H();y.setLegacySchema(t.context,t.jsonSchema)};e.setModifications=async function(t){await H();C(t)};e.setModificationsSync=C;e.test=M;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});