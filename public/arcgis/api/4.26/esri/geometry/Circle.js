// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/unitUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass ./ellipsoidUtils ./Point ./Polygon ./support/geodesicUtils ./support/webMercatorUtils ./support/WKIDUnitConversion".split(" "),function(k,l,u,n,g,B,C,w,x,y,q,z,v,p){var r;g=r=function(h){function m(...a){a=A.call(this,...a);a.center=null;a.geodesic=!1;a.numberOfPoints=
60;a.radius=1E3;a.radiusUnit="meters";return a}k._inherits(m,h);var A=k._createSuper(m);h=m.prototype;h.normalizeCtorArgs=function(a,b){if(!a||!a.center){if(a&&a.rings)return k._get(k._getPrototypeOf(m.prototype),"normalizeCtorArgs",this).call(this,a,b);a={center:a}}return{...k._get(k._getPrototypeOf(m.prototype),"normalizeCtorArgs",this).call(this),...a,...b}};h.initialize=function(){var a=this.center;const b=this.numberOfPoints;this.hasZ=a?.hasZ??!1;if(0===this.rings.length&&a){var f=u.convertUnit(this.radius,
this.radiusUnit,"meters"),c=a.spatialReference,e="geographic";if(c.isWebMercator)e="webMercator";else if(null!=(c.wkid&&p[c.wkid])||c.wkt&&0===c.wkt.indexOf("PROJCS"))e="projected";if(this.geodesic){let d;switch(e){case "webMercator":d=v.webMercatorToGeographic(a);break;case "projected":console.error("Creating a geodesic circle requires the center to be specified in web mercator or geographic coordinate system");break;case "geographic":d=a}a=this._createGeodesicCircle(d,f,b);"webMercator"===e&&(a=
v.geographicToWebMercator(a))}else{let d;"webMercator"===e||"projected"===e?d=f/this._convert2Meters(1,a.spatialReference):"geographic"===e&&(d=u.lengthToDegrees(f,"meters",x.getReferenceEllipsoid(a.spatialReference).radius));a=this._createPlanarCircle(a,d,b)}this.spatialReference=a.spatialReference;this.addRing(a.rings[0])}};h.clone=function(){const {center:a,numberOfPoints:b,radius:f,radiusUnit:c,geodesic:e}=this;return new r({center:a?.clone(),numberOfPoints:b,radius:f,radiusUnit:c,geodesic:e})};
h._createGeodesicCircle=function(a,b,f){let c=0;const e=[];for(;360>c;){const d=[0,0];z.directGeodeticSolver(d,[a.x,a.y],c,b);this.hasZ&&d.push(a.z);e.push(d);c+=360/f}e.push(e[0]);return new q(e)};h._createPlanarCircle=function(a,b,f){const c=[],e=2*Math.PI/f;for(let t=0;t<f;++t){var d=e*t;d=[a.x+Math.cos(-d)*b,a.y+Math.sin(-d)*b];this.hasZ&&d.push(a.z);c.push(d)}c.push(c[0]);return new q({spatialReference:a.spatialReference,rings:[c]})};h._convert2Meters=function(a,b){if(b.wkid&&null!=p[b.wkid])b=
p.values[p[b.wkid]];else{b=b.wkt;const f=b.lastIndexOf(",")+1,c=b.lastIndexOf("]]");b=parseFloat(b.substring(f,c))}return a*b};return k._createClass(m)}(q);l.__decorate([n.property({type:y})],g.prototype,"center",void 0);l.__decorate([n.property()],g.prototype,"geodesic",void 0);l.__decorate([n.property()],g.prototype,"numberOfPoints",void 0);l.__decorate([n.property()],g.prototype,"radius",void 0);l.__decorate([n.property()],g.prototype,"radiusUnit",void 0);return g=r=l.__decorate([w.subclass("esri.geometry.Circle")],
g)});