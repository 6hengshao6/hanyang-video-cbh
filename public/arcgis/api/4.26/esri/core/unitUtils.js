// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ./has ./jsonMap ./maybe ../geometry/ellipsoidUtils ../geometry/support/Ellipsoid ../geometry/support/spatialReferenceUtils ../geometry/support/WKIDUnitConversion".split(" "),function(c,q,k,f,M,r,t,m){function n(a){a=N[a];if(!a)throw Error("unknown type");return a}function y(a){return l[a].baseUnit}function u(a,b=null){b=b||n(a);return l[b].baseUnit===a}function g(a,b,d){if(b===d)return a;const e=n(b);if(e!==n(d))throw Error("incompatible units");a=u(b,e)?a:a*l[e].units[b].inBaseUnits;
return u(d,e)?a:a/l[e].units[d].inBaseUnits}function z(a,b){a=g(a,b,"meters");return 3E3>Math.abs(a)?"meters":"kilometers"}function A(a,b){a=g(a,b,"meters");return 1E5>Math.abs(a)?"meters":"kilometers"}function B(a,b){a=g(a,b,"feet");return 1E3>Math.abs(a)?"feet":"miles"}function C(a,b){a=g(a,b,"feet");return 1E5>Math.abs(a)?"feet":"miles"}function D(a,b){a=g(a,b,"square-meters");return 3E6>Math.abs(a)?"square-meters":"square-kilometers"}function E(a,b){a=g(a,b,"square-feet");return 1E6>Math.abs(a)?
"square-feet":"square-miles"}function F(a){return G.fromJSON(a.toLowerCase())||null}function H(a){const b=v(a),d=M.getReferenceEllipsoid(a).metersPerDegree;return b>=d?"meters":p(a)}function v(a,b=r.earth.metersPerDegree){return f.unwrapOr(I(a,!0),b)}function I(a,b=!1){const d=f.isSome(a)?a.wkid:null;a=f.isSome(a)?a.wkt:null;let e=null;if(d){if(t.isWKIDFromMars(d))return r.mars.metersPerDegree;if(t.isWKIDFromMoon(d))return r.moon.metersPerDegree;e=h.values[h[d]];!e&&b&&O.has(d)&&(e=P)}else a&&(w(a)?
e=J(K.exec(a),e):/^GEOCCS/i.test(a)&&(e=J(L.exec(a),e)));return e}function J(a,b){return a&&a[1]?parseFloat(a[1].split(",")[1]):b}function p(a){var b=f.isSome(a)?a.wkid:null,d=f.isSome(a)?a.wkt:null;a=null;if(b)a=h.units[h[b]];else if(d&&(b=w(d)?K:/^GEOCCS/i.test(d)?L:null)&&(b=b.exec(d))&&b[1]&&(b=b[1],a=(a=/[\\"\\']{1}([^\\"\\']+)/.exec(b))&&a[1],!a||!h.units.includes(a))){b=parseFloat(b.split(",")[1]);a=null;d=h.values;for(let e=0;e<d.length;++e)if(1E-7>Math.abs(b-d[e])){a=h.units[e];break}}return f.isSome(a)?
F(a):null}function w(a){return/^PROJCS/i.test(a)}const P=r.earth.radius*Math.PI/200,K=/UNIT\[([^\]]+)\]\]$/i,h=m,L=/UNIT\[([^\]]+)\]/i,O=new Set([4261,4305,4807,4810,4811,4812,4816,4819,4821,4901,4902,37225,104139,104140]),G=k.strict()({meter:"meters",foot:"feet",foot_us:"us-feet",foot_clarke:"clarke-feet",yard_clarke:"clarke-yards",link_clarke:"clarke-links",yard_sears:"sears-yards",foot_sears:"sears-feet",chain_sears:"sears-chains",chain_benoit_1895_b:"benoit-1895-b-chains",yard_indian:"indian-yards",
yard_indian_1937:"indian-1937-yards",foot_gold_coast:"gold-coast-feet",chain_sears_1922_truncated:"sears-1922-truncated-chains","50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"});q={millimeters:{inBaseUnits:.001},centimeters:{inBaseUnits:.01},decimeters:{inBaseUnits:.1},meters:{inBaseUnits:1},kilometers:{inBaseUnits:1E3},inches:{inBaseUnits:.0254},feet:{inBaseUnits:.3048},yards:{inBaseUnits:.9144},miles:{inBaseUnits:1609.344},"nautical-miles":{inBaseUnits:1852},"us-feet":{inBaseUnits:1200/
3937}};m={"square-millimeters":{inBaseUnits:1E-6},"square-centimeters":{inBaseUnits:1E-4},"square-decimeters":{inBaseUnits:.1*.1},"square-meters":{inBaseUnits:1},"square-kilometers":{inBaseUnits:1E6},"square-inches":{inBaseUnits:6.4516E-4},"square-feet":{inBaseUnits:.09290304},"square-yards":{inBaseUnits:.83612736},"square-miles":{inBaseUnits:2589988.110336},"square-us-feet":{inBaseUnits:(a=>a*a)(1200/3937)},acres:{inBaseUnits:4046.8564224},ares:{inBaseUnits:100},hectares:{inBaseUnits:1E4}};const l=
{length:{baseUnit:"meters",units:q},area:{baseUnit:"square-meters",units:m},volume:{baseUnit:"liters",units:{liters:{inBaseUnits:1},"cubic-millimeters":{inBaseUnits:1E3*1E-9},"cubic-centimeters":{inBaseUnits:.001},"cubic-decimeters":{inBaseUnits:1},"cubic-meters":{inBaseUnits:1E3},"cubic-kilometers":{inBaseUnits:1E12},"cubic-inches":{inBaseUnits:.016387064},"cubic-feet":{inBaseUnits:.09290304*304.8},"cubic-yards":{inBaseUnits:764.554857984},"cubic-miles":{inBaseUnits:4.16818182544058E12}}},angle:{baseUnit:"radians",
units:{radians:{inBaseUnits:1},degrees:{inBaseUnits:Math.PI/180}}}},N=(()=>{const a={};for(const b in l)for(const d in l[b].units)a[d]=b;return a})(),x="metric imperial inches feet yards miles nautical-miles us-feet meters kilometers".split(" "),Q=new Map([["meters","square-meters"],["feet","square-feet"],["us-feet","square-us-feet"]]);q=k.strict()({esriAcres:"acres",esriAres:"ares",esriHectares:"hectares",esriSquareCentimeters:"square-centimeters",esriSquareDecimeters:"square-decimeters",esriSquareFeet:"square-feet",
esriSquareInches:"square-inches",esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareMiles:"square-miles",esriSquareMillimeters:"square-millimeters",esriSquareUsFeet:"square-us-feet",esriSquareYards:"square-yards"});m=k.strict()({esriCentimeters:"centimeters",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriYards:"yards"});
k=k.strict()({esriDUDecimalDegrees:"degrees",esriDURadians:"radians"});c.angleUnitsJSONMap=k;c.areaUnitFromSpatialReference=function(a){a=p(a);return f.isNone(a)?null:Q.get(a)};c.areaUnitsJSONMap=q;c.baseUnitForUnit=function(a){return y(n(a))};c.baseUnitForUnitType=y;c.convertUnit=g;c.getDefaultUnitSystem=function(a){a=p(a);if(f.isNone(a))return null;switch(a){case "feet":case "us-feet":case "clarke-feet":case "clarke-yards":case "clarke-links":case "sears-yards":case "sears-feet":case "sears-chains":case "benoit-1895-b-chains":case "indian-yards":case "indian-1937-yards":case "gold-coast-feet":case "sears-1922-truncated-chains":return"imperial";
case "50-kilometers":case "150-kilometers":case "meters":return"metric"}return null};c.getMetersPerUnit=I;c.getMetersPerUnitForSR=v;c.getMetersPerVerticalUnitForSR=function(a){if(f.isSome(a)&&!t.isEarth(a))return 1;a=v(a);return 1E5<a?1:a};c.getUnitString=p;c.getVerticalUnitStringForSR=H;c.inchesPerMeter=39.37;c.isBaseUnit=u;c.isMeasurementSystem=function(a){return"imperial"===a||"metric"===a};c.isProjectedWKT=w;c.lengthToDegrees=function(a,b,d){return g(a,b,"meters")/(d*Math.PI/180)};c.lengthUnitFromSpatialReference=
function(a){a=p(a);return f.isNone(a)||!x.includes(a)?null:a};c.lengthUnitsJSONMap=m;c.measurementAreaUnits="metric imperial square-inches square-feet square-yards square-miles square-us-feet square-meters square-kilometers acres ares hectares".split(" ");c.measurementLengthUnits=x;c.preferredAreaUnit=function(a,b,d){switch(d){case "metric":return D(a,b);case "imperial":return E(a,b);default:return d}};c.preferredImperialAreaUnit=E;c.preferredImperialLengthUnit=B;c.preferredImperialVerticalLengthUnit=
C;c.preferredLengthUnit=function(a,b,d){switch(d){case "metric":return z(a,b);case "imperial":return B(a,b);default:return d}};c.preferredMetricAreaUnit=D;c.preferredMetricLengthUnit=z;c.preferredMetricVerticalLengthUnit=A;c.preferredVerticalLengthUnit=function(a,b,d){switch(d){case "metric":return A(a,b);case "imperial":return C(a,b);default:return d}};c.unitFromRESTJSON=F;c.unitToRESTJSON=function(a){return G.toJSON(a)||null};c.unitType=n;c.verticalLengthUnitFromSpatialReference=function(a){a=H(a);
return f.isNone(a)||!x.includes(a)?null:a};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});