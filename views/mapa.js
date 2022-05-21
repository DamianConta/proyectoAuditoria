const script = document.getElementById("openLayers");

const ajaxJs =new  XMLHttpRequest();
ajaxJs.open("get","/views/OpenLayers.js");
ajaxJs.send();
ajaxJs.addEventListener("load",e => {
    console.log(ajaxJs.response)
    script.outerText = ajaxJs.response;
    map = new OpenLayers.Map("demoMap");
    map.addLayer(new OpenLayers.Layer.OSM());
    map.zoomToMaxExtent();
})


