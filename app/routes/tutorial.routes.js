module.exports = app => {
    const tutorials = require("../controllers/tutorial.controllers");
  
    const router = require("express").Router();
  
    // Crear un nuevo tutorial
    router.post("/", tutorials.create);
  
    // Obtener todos los tutoriales
    router.get("/", tutorials.findAll);
  
    // Obtener todos los tutoriales publicados
    router.get("/published", tutorials.findAllPublished);
  
    // Obtener tutorial por id
    router.get("/:id", tutorials.findOne);
  
    // Update de un tutorial por id
    router.put("/:id", tutorials.update);
  
    // Borrar tutorial por id
    router.delete("/:id", tutorials.delete);
  
    // Borrar todos los tutoriales
    router.delete("/", tutorials.deleteAll);
  
    app.use('/api/tutorials', router);
  };