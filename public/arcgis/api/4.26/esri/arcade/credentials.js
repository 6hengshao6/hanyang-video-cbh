// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["../chunks/_rollupPluginBabelHelpers"],function(e){return function(){function b(){this._password=this._username="";this._token=null}b.fromUserName=function(a,c){const d=new b;d._username=a;d._password=c;d._token=null;return d};b.fromArcadeDictionary=function(a){const c=new b;a.hasField("username")&&(c._username=a.field("username"));a.hasField("password")&&(c._password=a.field("password"));a.hasField("token")&&(c._token=a.field("token"));return c};b.fromToken=function(a){const c=new b;c._token=
a;return c};b.prototype.getToken=async function(){return null===this._token?"No Token Provided":this._token};e._createClass(b,[{key:"username",get:function(){return this._username}},{key:"password",get:function(){return this._password}}]);return b}()});