const Participacion = require("../models/Participacion");

exports.getAllParticipaciones = async (req, res) => {
  const data = await Participacion.getAll();
  res.json(data);
};

exports.getParticipacion = async (req, res) => {
  const { id_pelicula, id_actor } = req.params;
  const participacion = await Participacion.getByIds(id_pelicula, id_actor);
  if (!participacion) return res.status(404).json({ error: "No encontrada" });
  res.json(participacion);
};

exports.createParticipacion = async (req, res) => {
  const data = await Participacion.create(req.body);
  res.json(data);
};

exports.updateParticipacion = async (req, res) => {
  const { id_pelicula, id_actor } = req.params;
  const data = await Participacion.update(id_pelicula, id_actor, req.body);
  res.json(data);
};

exports.deleteParticipacion = async (req, res) => {
  const { id_pelicula, id_actor } = req.params;
  await Participacion.delete(id_pelicula, id_actor);
  res.json({ message: "Participación eliminada" });
};
