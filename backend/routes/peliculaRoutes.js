const express = require("express");
const router = express.Router();
const controller = require("../controllers/peliculaController");

router.get("/", controller.getAllPeliculas);
router.get("/:id", controller.getPeliculaById);
router.post("/", controller.createPelicula);
router.put("/:id", controller.updatePelicula);
router.delete("/:id", controller.deletePelicula);

module.exports = router;
