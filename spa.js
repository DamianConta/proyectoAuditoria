const contenido = document.getElementById("contenido");
const nav = document.querySelector("nav");

// Refresh o carga inicial
window.addEventListener('load', reconstruirPagina);

// <- (back) -> (forward)
window.addEventListener("popstate", reconstruirPagina);

nav.addEventListener("click", e => {
  if(e.target.tagName == "NAV"){
    return;
  }
  e.preventDefault();
  let miRuta = e.target.getAttribute("href");

  // ["new-tab", "/"]
  history.pushState(routes[miRuta], null, miRuta);
  // ["new-tab", "/", "/home"]

  //console.log(miRuta);
  cargarContenido(miRuta);
});

function cargarContenido(ruta){
  // ajax
  contenido.innerHTML = "Cargando...";

  if(ruta in routes == false){
    ruta = "error404";
  }

  if("cache" in routes[ruta] && routes[ruta].cache){
    contenido.innerHTML = routes[ruta].cache;
    document.title = routes[ruta].titulo;
    return;
  }

  const ajax = new XMLHttpRequest(); // genera un objeto Ajax
  ajax.open("get", routes[ruta].url);
  ajax.send(); // enviar el request (se delega al navegador)
  ajax.addEventListener("load", e => {
    contenido.innerHTML = ajax.response;

    recrearScripts();

    routes[ruta].cache = ajax.response; 
    document.title = routes[ruta].titulo;
    // document.title equivale document.querySelector("title").textContent
  });
}

function reconstruirPagina(e) {
  //console.log(e.state);
  let miRuta = location.pathname;
  cargarContenido(miRuta);
}

function recrearScripts(){
  const scripts = contenido.querySelectorAll("script");
  const fuentes = [];
  scripts.forEach(s => {
    fuentes.push( s.getAttribute("src") );
    s.remove();
  });
  const frag = document.createDocumentFragment();
  fuentes.forEach(f => {
    let scriptNuevo = document.createElement("script");
    scriptNuevo.setAttribute("src", f);
    frag.appendChild(scriptNuevo);
  });
  contenido.appendChild(frag);
}