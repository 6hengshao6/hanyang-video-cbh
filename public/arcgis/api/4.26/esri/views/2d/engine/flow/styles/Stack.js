// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers"],function(g,h){let l=function(){function c(a){this._styles=a}var e=c.prototype;e.isCompatible=function(a){if(!(a instanceof c)||this._styles.length!==a._styles.length)return!1;const b=this._styles.length;for(let d=0;d<b;d++)if(!this._styles[d].isCompatible(a._styles[d]))return!1;return!0};e.load=async function(a,b){const d=await Promise.all(this._styles.map(f=>f.load(a,b)));return new k(d)};e.render=function(a,b,d){for(let f=0;f<
this._styles.length;f++)this._styles[f].render(a,b,d.resources[f])};h._createClass(c,[{key:"animated",get:function(){return this._styles.reduce((a,b)=>a||b.animated,!1)}}]);return c}(),k=function(){function c(a){this.resources=a}var e=c.prototype;e.attach=function(a){for(const b of this.resources)b.attach(a)};e.detach=function(){for(const a of this.resources)a.detach()};h._createClass(c,[{key:"ready",get:function(){return this.resources.reduce((a,b)=>a&&b.ready,!0)}}]);return c}();g.Stack=l;g.StackResources=
k;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});