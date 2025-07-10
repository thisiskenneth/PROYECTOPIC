const express = require("express");
const router = express.Router();
const controller = require("../controllers/participacionController");

router.get("/", controller.getAllParticipaciones);
router.get("/:id_pelicula/:id_actor", controller.getParticipacion);
router.post("/", controller.createParticipacion);
router.put("/:id_pelicula/:id_actor", controller.updateParticipacion);
router.delete("/:id_pelicula/:id_actor", controller.deleteParticipacion);

module.exports = router;
