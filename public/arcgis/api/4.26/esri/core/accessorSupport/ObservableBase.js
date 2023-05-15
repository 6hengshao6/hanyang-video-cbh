// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","./tracking/ObservationHandle"],function(g,l,m){let q=function(){function h(){this._observers=null;this.destroyed=!1}var e=h.prototype;e.observe=function(a){if(this.destroyed||a.destroyed)return n;null==this._observers&&(this._observers=[]);const b=this._observers;let c=!1,d=!1;const p=b.length;for(let f=0;f<p;++f){const k=b[f];if(k.destroyed)d=!0;else if(k===a){c=!0;break}}c||(b.push(a),d&&this._removeDestroyedObservers());return new m.ObservationHandle(b,
a)};e._removeDestroyedObservers=function(){const a=this._observers;if(a&&0!==a.length){var b=a.length,c=0;for(let d=0;d<b;++d){for(;d+c<b;)if(a[d+c].destroyed)++c;else break;if(0<c)if(d+c<b)a[d]=a[d+c];else break}a.length=b-c}};e.destroy=function(){if(!this.destroyed){this.destroyed=!0;var a=this._observers;if(null!=a){for(const b of a)b.onCommitted();this._observers=null}}};return l._createClass(h)}();const n={remove:()=>{}};g.ObservableBase=q;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});