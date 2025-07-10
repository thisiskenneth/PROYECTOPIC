const Pelicula = require("../models/Pelicula");

exports.getAllPeliculas = async (req, res) => {
  const data = await Pelicula.getAll();
  res.json(data);
};

exports.getPeliculaById = async (req, res) => {
  const pelicula = await Pelicula.getById(req.params.id);
  if (!pelicula)
    return res.status(404).json({ error: "Película no encontrada" });
  res.json(pelicula);
};

exports.createPelicula = async (req, res) => {
  const data = await Pelicula.create(req.body);
  res.json(data);
};

exports.updatePelicula = async (req, res) => {
  const data = await Pelicula.update(req.params.id, req.body);
  res.json(data);
};

exports.deletePelicula = async (req, res) => {
  try {
    const { id } = req.params;
    await Pelicula.delete(id);
    res.json({ message: "Película eliminada correctamente" });
  } catch (error) {
    if (error.code === "23503") {
      // Código de error PostgreSQL: violación de clave foránea
      return res
        .status(400)
        .json({
          error:
            "No se puede eliminar la película porque está relacionada con una participación.",
        });
    }
    res.status(500).json({ error: "Error al eliminar la película." });
  }
};
  
