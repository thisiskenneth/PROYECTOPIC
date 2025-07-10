const express = require("express");
const router = express.Router();
const controller = require("../controllers/actorController");

router.get("/", controller.getAllActores);
router.get("/:id", controller.getActorById);
router.post("/", controller.createActor);
router.put("/:id", controller.updateActor);
router.delete("/:id", controller.deleteActor);

module.exports = router;
