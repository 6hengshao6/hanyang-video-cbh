// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","./TerrainConst","./TileAgent"],function(d,b,f,c){c=function(g){function a(){var e=h.apply(this,arguments);e._scaleRangeEnabled=!1;return e}b._inherits(a,g);var h=b._createSuper(a);b._createClass(a,[{key:"_desiredMinLevelDelta",get:function(){return f.getElevationDesiredResolutionLevel(this.tile.level)-(this.tile.elevationLevel-this.tile.level)}},{key:"_progressiveLevelModulo",get:function(){return 0}}]);return a}(c.TileAgent);d.ElevationTileAgent=
c;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});