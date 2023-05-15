// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","./arcgisLayerUrl"],function(e,f){const c=[];c.push([10.91,()=>{const b=new Set([9709,9716,9741,9761,9766]);for(var a=9712;9713>=a;a++)b.add(a);for(a=9748;9749>=a;a++)b.add(a);for(a=20904;20932>=a;a++)b.add(a);for(a=21004;21032>=a;a++)b.add(a);for(a=21207;21264>=a;a++)b.add(a);for(a=21307;21364>=a;a++)b.add(a);for(a=102759;102760>=a;a++)b.add(a);for(a=102901;102955>=a;a++)b.add(a);return b}]);c.push([10.9,()=>{const b=new Set([9300,9354,9364,9367,9373,9377,9387,9456,9473,9498,9678,
9680,29874,103599,103872,104028]);for(var a=9356;9360>=a;a++)b.add(a);for(a=9404;9407>=a;a++)b.add(a);for(a=9476;9482>=a;a++)b.add(a);for(a=9487;9494>=a;a++)b.add(a);for(a=9697;9699>=a;a++)b.add(a);return b}]);c.push([10.81,()=>{const b=new Set([9265,9333,103598,103699]);for(var a=9248;9254>=a;a++)b.add(a);for(a=9271;9273>=a;a++)b.add(a);for(a=9284;9285>=a;a++)b.add(a);for(a=21453;21463>=a;a++)b.add(a);return b}]);c.push([10.8,()=>{const b=new Set([8088,8395,8428,8433,8531,8687,8692,8694,8699,8900,
9003,9006,9009,9012,9017,9191]);for(var a=8035;8036>=a;a++)b.add(a);for(a=8455;8456>=a;a++)b.add(a);for(a=8518;8529>=a;a++)b.add(a);for(a=8533;8536>=a;a++)b.add(a);for(a=8538;8540>=a;a++)b.add(a);for(a=8677;8679>=a;a++)b.add(a);for(a=8902;8903>=a;a++)b.add(a);for(a=8907;8910>=a;a++)b.add(a);for(a=8949;8951>=a;a++)b.add(a);for(a=8972;8987>=a;a++)b.add(a);for(a=9039;9040>=a;a++)b.add(a);for(a=9068;9069>=a;a++)b.add(a);for(a=9140;9141>=a;a++)b.add(a);for(a=9148;9150>=a;a++)b.add(a);for(a=9153;9159>=
a;a++)b.add(a);for(a=9205;9218>=a;a++)b.add(a);for(a=9221;9222>=a;a++)b.add(a);for(a=54098;54101>=a;a++)b.add(a);return b}]);c.push([10.71,()=>{const b=new Set([6316]);for(var a=8351;8353>=a;a++)b.add(a);for(a=9294;9297>=a;a++)b.add(a);for(a=22619;22621>=a;a++)b.add(a);for(a=103586;103594>=a;a++)b.add(a);return b}]);c.push([10.7,()=>{const b=new Set([8387,8391,8427,8545,8682,8685,8818,31370,104022,104024,104975]);for(var a=8065;8068>=a;a++)b.add(a);for(a=8082;8083>=a;a++)b.add(a);for(a=8379;8385>=
a;a++)b.add(a);for(a=8836;8840>=a;a++)b.add(a);for(a=8857;8860>=a;a++)b.add(a);for(a=53035;53037>=a;a++)b.add(a);for(a=54090;54091>=a;a++)b.add(a);for(a=102498;102499>=a;a++)b.add(a);return b}]);c.push([10.61,()=>new Set([102497])]);c.push([10.6,()=>{const b=new Set([7803,7805,7887,8086,8232,8237,8240,8246,8249,8252,8255,9019,9391]);for(var a=7755;7787>=a;a++)b.add(a);for(a=7791;7795>=a;a++)b.add(a);for(a=7799;7801>=a;a++)b.add(a);for(a=7825;7831>=a;a++)b.add(a);for(a=7877;7878>=a;a++)b.add(a);for(a=
7882;7883>=a;a++)b.add(a);for(a=7991;7992>=a;a++)b.add(a);for(a=8042;8043>=a;a++)b.add(a);for(a=8058;8059>=a;a++)b.add(a);for(a=8311;8348>=a;a++)b.add(a);for(a=9060;9067>=a;a++)b.add(a);for(a=102562;102568>=a;a++)b.add(a);for(a=102799;102900>=a;a++)b.add(a);return b}]);c.push([10.51,()=>{const b=new Set([7683,7881,7886,7899,8888,9E3]);for(var a=8013;8032>=a;a++)b.add(a);for(a=9053;9057>=a;a++)b.add(a);for(a=104017;104018>=a;a++)b.add(a);for(a=104971;104974>=a;a++)b.add(a);return b}]);c.push([10.5,
()=>{const b=new Set([6962,7035,7037,7039,7041,7084,7086,7133,7798,102399]);for(var a=4087;4088>=a;a++)b.add(a);for(a=5896;5899>=a;a++)b.add(a);for(a=7005;7007>=a;a++)b.add(a);for(a=7057;7070>=a;a++)b.add(a);for(a=7073;7082>=a;a++)b.add(a);for(a=7109;7128>=a;a++)b.add(a);for(a=7844;7859>=a;a++)b.add(a);return b}]);e.serviceSupportsSpatialReference=function(b,a){if(f.isHostedAgolService(b.url??""))return!0;({wkid:a}=a);for(const d of c){if((b.version??0)>=d[0])break;"function"===typeof d[1]&&(d[1]=
d[1]());if(d[1].has(a))return!1}return!0};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});