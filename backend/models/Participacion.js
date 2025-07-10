const pool = require("../config/db");

class Participacion {
  static async getAll() {
    const result = await pool.query(`
          SELECT 
            pp.id_pelicula,
            pp.id_actor,
            p.titulo AS nombre_pelicula,
            a.nombre AS nombre_actor,
            pp.rol
          FROM participaciones_pelicula pp
          JOIN peliculas p ON pp.id_pelicula = p.id_pelicula
          JOIN actores a ON pp.id_actor = a.id_actor
          ORDER BY p.titulo, a.nombre
        `);
    return result.rows;
  }

  static async getByIds(id_pelicula, id_actor) {
    const result = await pool.query(
      "SELECT * FROM participaciones_pelicula WHERE id_pelicula = $1 AND id_actor = $2",
      [id_pelicula, id_actor]
    );
    return result.rows[0];
  }

  static async create({ id_pelicula, id_actor, rol }) {
    const result = await pool.query(
      "INSERT INTO participaciones_pelicula (id_pelicula, id_actor, rol) VALUES ($1, $2, $3) RETURNING *",
      [id_pelicula, id_actor, rol]
    );
    return result.rows[0];
  }

  static async update(id_pelicula, id_actor, { rol }) {
    const result = await pool.query(
      "UPDATE participaciones_pelicula SET rol = $1 WHERE id_pelicula = $2 AND id_actor = $3 RETURNING *",
      [rol, id_pelicula, id_actor]
    );
    return result.rows[0];
  }

  static async delete(id_pelicula, id_actor) {
    await pool.query(
      "DELETE FROM participaciones_pelicula WHERE id_pelicula = $1 AND id_actor = $2",
      [id_pelicula, id_actor]
    );
  }
}

module.exports = Participacion;
