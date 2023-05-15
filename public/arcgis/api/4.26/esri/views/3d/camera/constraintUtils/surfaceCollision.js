// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/vec3","../../../../chunks/vec3f64","../intersectionUtils"],function(c,e,h,m){c.Mode=void 0;(function(a){a[a.EYE=0]="EYE";a[a.EYE_AND_CENTER=1]="EYE_AND_CENTER";a[a.EYE_AND_CENTER_SCALE=2]="EYE_AND_CENTER_SCALE"})(c.Mode||(c.Mode={}));const f=h.create(),n=h.create();c.applySurfaceCollisionConstraint=function(a,b,k=c.Mode.EYE){var d=a.state.constraints;if(!d.collision.enabled)return!1;var g=m.surfaceElevationBelowRenderLocation(a,b.eye);const l=a.renderCoordsHelper.getAltitude(b.eye);
d=g+d.collision.elevationMargin;if(l>=d)return!1;g=e.length(b.eye);e.subtract(f,b.center,b.eye);b.eye=a.renderCoordsHelper.setAltitude(n,d,b.eye);k===c.Mode.EYE_AND_CENTER?b.center=e.add(f,b.eye,f):k===c.Mode.EYE_AND_CENTER_SCALE&&(b.center=e.scale(f,b.center,(g-l+d)/g));return!0};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});