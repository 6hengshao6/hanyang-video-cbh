// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["../../../../chunks/_rollupPluginBabelHelpers"],function(f){return function(){function c(){this._byGeometryType=null}var b=c.prototype;b.reset=function(){this._byGeometryType=null};b.verticesFor=function(a){return this._byGeometryType?this._byGeometryType[a].vertices:0};b.indicesFor=function(a){return this._byGeometryType?this._byGeometryType[a].indices:0};b.needMore=function(a,d,e){if(d||e)this._byGeometryType||(this._byGeometryType=[{vertices:0,indices:0},{vertices:0,indices:0},{vertices:0,
indices:0},{vertices:0,indices:0},{vertices:0,indices:0}]),a=this._byGeometryType[a],a.vertices+=d,a.indices+=e};f._createClass(c,[{key:"satisfied",get:function(){return!this._byGeometryType}}]);return c}()});