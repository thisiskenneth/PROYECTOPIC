const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const peliculaRoutes = require("./routes/peliculaRoutes");
const actorRoutes = require("./routes/actorRoutes");
const participacionRoutes = require("./routes/participacionRoutes");

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("combined"));
app.use("/api/peliculas", peliculaRoutes);
app.use("/api/actores", actorRoutes);
app.use("/api/participaciones", participacionRoutes);


module.exports = app;