const routes = {
  "/": {
    url: "views/home/index.html", 
    titulo: "Bienvenidos!",
  },
  "/inicio": { 
    url: "views/home/index.html", 
    titulo: "Bienvenidos!",
    cache: null,
    estado: {},
  },
  "/mapa": {
    url: "views/mapa.html",
    titulo: "Nuestros productos",
    estado: {},
  },
  "/contact": {
    url: "views/contacto.html",
    titulo: "Estamos para usted",
    estado: {},
  },
  "/upload": {
    url: "views/upload/index.html",
    titulo: "A subir archivos",
  },
  error404: {
    url: "404.html",
    titulo: "Error 404"
  }
};