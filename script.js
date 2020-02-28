var map = document.getElementById('customs');

function zoom(){
    map.style = "width: 125%;";
}
function zoomOut(){
    map.style = "width: 100%;";
}

function showMap(){
    currentvalue = document.getElementById('onoff').value;
    if(currentvalue == "Off"){
      document.getElementById("onoff").value="On";
      map.style = "display: ;";
    }else{
      document.getElementById("onoff").value="Off";
      map.style = "display: none;";
    }
}