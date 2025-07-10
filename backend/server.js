const app = require("./app"); // Importar la aplicación de Express
const pool = require("./config/db"); // Importar la configuración de la base de datos

const PORT = process.env.PORT || 3000; // Puerto del servidor, por defecto 3000

pool.connect((err) => {
  // Corregido: función de callback
  if (err) {
    console.log("Error al conectar la base de datos");
  } else {
    console.log("Conexión a la base de datos exitosa");
  }

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});
