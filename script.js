function onLight(lightParam){
    offLight();
   // light = toString(lightParam);
    //alert(lightParam);
    document.getElementById(lightParam).style.backgroundColor = lightParam;
}
function offLight(){
   var light= document.getElementsByClassName('bulb');
   for(i=0;i<light.length;i++){
    light[i].style.backgroundColor="grey";
   }
}