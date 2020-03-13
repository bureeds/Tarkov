var mapCustoms = document.getElementById('customs');
var mapWoods = document.getElementById('woods');
var mapShoreline = document.getElementById('shoreline');
var mapFactory = document.getElementById('factory');
var mapReserve = document.getElementById('reserve');
var mapLab = document.getElementById('lab');
var mapInterchange = document.getElementById('interchange');

function zoom(){
    map.style = "width: 125%;";
}
function zoomOut(){
    map.style = "width: 100%;";
}

function showMapCustoms(){
    currentvalue = document.getElementById('onoffCustoms').value;
    if(currentvalue == "Off"){
      document.getElementById("onoffCustoms").value="On";
      mapCustoms.style = "display: ;";
      mapWoods.style = "display: none;";
      mapShoreline.style = "display: none;";
      mapFactory.style = "display: none;";
      mapReserve.style = "display: none;";
      mapLab.style = "display: none;";
      mapInterchange.style = "display: none;";
    }else{
      document.getElementById("onoffCustoms").value="Off";
      mapCustoms.style = "display: none;";
    }
}
function showMapWoods(){
  currentvalue = document.getElementById('onoffWoods').value;
  if(currentvalue == "Off"){
    document.getElementById("onoffWoods").value="On";
    mapWoods.style = "display: ;";
    mapCustoms.style = "display: none;";
    mapShoreline.style = "display: none;";
    mapFactory.style = "display: none;";
    mapReserve.style = "display: none;";
    mapLab.style = "display: none;";
    mapInterchange.style = "display: none;";
  }else{
    document.getElementById("onoffWoods").value="Off";
    mapWoods.style = "display: none;";
  }
}
function showMapShoreline(){
  currentvalue = document.getElementById('onoffShoreline').value;
  if(currentvalue == "Off"){
    document.getElementById("onoffShoreline").value="On";
    mapShoreline.style= "display: ;"
    mapWoods.style = "display: none;";
    mapCustoms.style = "display: none;";
    mapFactory.style = "display: none;";
    mapReserve.style = "display: none;";
    mapLab.style = "display: none;";
    mapInterchange.style = "display: none;";
  }else{
    document.getElementById("onoffShoreline").value="Off";
    mapShoreline.style = "display: none;";
  }
}
function showMapFactory(){
  currentvalue = document.getElementById('onoffFactory').value;
  if(currentvalue == "Off"){
    document.getElementById("onoffFactory").value="On";
    mapCustoms.style = "display: none;";
    mapWoods.style = "display: none;";
    mapShoreline.style = "display: none;";
    mapFactory.style = "display: ;";
    mapReserve.style = "display: none;";
    mapLab.style = "display: none;";
    mapInterchange.style = "display: none;";
  }else{
    document.getElementById("onoffFactory").value="Off";
    mapFactory.style = "display: none;";
  }
}
function showMapReserve(){
  currentvalue = document.getElementById('onoffReserve').value;
  if(currentvalue == "Off"){
    document.getElementById("onoffReserve").value="On";
    mapCustoms.style = "display: none;";
    mapWoods.style = "display: none;";
    mapShoreline.style = "display: none;";
    mapFactory.style = "display: none;";
    mapReserve.style = "display: ;";
    mapLab.style = "display: none;";
    mapInterchange.style = "display: none;";
  }else{
    document.getElementById("onoffReserve").value="Off";
    mapReserve.style = "display: none;";
  }
}