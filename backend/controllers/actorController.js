const Actor = require("../models/Actor");

exports.getAllActores = async (req, res) => {
  const data = await Actor.getAll();
  res.json(data);
};

exports.getActorById = async (req, res) => {
  const actor = await Actor.getById(req.params.id);
  if (!actor) return res.status(404).json({ error: "Actor no encontrado" });
  res.json(actor);
};

exports.createActor = async (req, res) => {
  const data = await Actor.create(req.body);
  res.json(data);
};

exports.updateActor = async (req, res) => {
  const data = await Actor.update(req.params.id, req.body);
  res.json(data);
};

exports.deleteActor = async (req, res) => {
  try {
    const { id } = req.params;
    await Actor.delete(id);
    res.json({ message: "Actor eliminado correctamente" });
  } catch (error) {
    if (error.code === "23503") {
      return res.status(400).json({
        error:
          "No se puede eliminar el actor porque está relacionado con una participación.",
      });
    }
    res.status(500).json({ error: "Error al eliminar el actor." });
  }
};
  