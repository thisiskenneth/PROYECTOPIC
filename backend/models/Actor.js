const pool = require("../config/db");

class Actor {
  static async getAll() {
    const result = await pool.query("SELECT * FROM actores ORDER BY id_actor");
    return result.rows;
  }

  static async getById(id) {
    const result = await pool.query(
      "SELECT * FROM actores WHERE id_actor = $1",
      [id]
    );
    return result.rows[0];
  }

  static async create({ nombre, nacionalidad, edad }) {
    const result = await pool.query(
      "INSERT INTO actores (nombre, nacionalidad, edad) VALUES ($1, $2, $3) RETURNING *",
      [nombre, nacionalidad, edad]
    );
    return result.rows[0];
  }

  static async update(id, { nombre, nacionalidad, edad }) {
    const result = await pool.query(
      "UPDATE actores SET nombre = $1, nacionalidad = $2, edad = $3 WHERE id_actor = $4 RETURNING *",
      [nombre, nacionalidad, edad, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    await pool.query("DELETE FROM actores WHERE id_actor = $1", [id]);
  }
}

module.exports = Actor;
