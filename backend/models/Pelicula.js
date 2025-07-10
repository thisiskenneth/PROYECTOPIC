const pool = require("../config/db");

class Pelicula {
  static async getAll() {
    const result = await pool.query(
      "SELECT * FROM peliculas ORDER BY id_pelicula"
    );
    return result.rows;
  }

  static async getById(id) {
    const result = await pool.query(
      "SELECT * FROM peliculas WHERE id_pelicula = $1",
      [id]
    );
    return result.rows[0];
  }

  static async create({ titulo, anio, genero }) {
    const result = await pool.query(
      "INSERT INTO peliculas (titulo, anio, genero) VALUES ($1, $2, $3) RETURNING *",
      [titulo, anio, genero]
    );
    return result.rows[0];
  }

  static async update(id, { titulo, anio, genero }) {
    const result = await pool.query(
      "UPDATE peliculas SET titulo = $1, anio = $2, genero = $3 WHERE id_pelicula = $4 RETURNING *",
      [titulo, anio, genero, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    await pool.query("DELETE FROM peliculas WHERE id_pelicula = $1", [id]);
  }
}

module.exports = Pelicula;
