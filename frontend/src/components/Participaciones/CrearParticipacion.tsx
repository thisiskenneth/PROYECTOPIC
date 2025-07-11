import { useEffect, useState } from "react";
import {
  Paper,
  Stack,
  Typography,
  Button,
  MenuItem,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getPeliculas } from "../../services/peliculaService";
import { getActores } from "../../services/actorService";
import { createParticipacion } from "../../services/participacionService";
import type { Pelicula } from "../../interfaces/Pelicula";
import type { Actor } from "../../interfaces/Actor";

export const CrearParticipacion = () => {
  const [peliculas, setPeliculas] = useState<Pelicula[]>([]);
  const [actores, setActores] = useState<Actor[]>([]);
  const [id_pelicula, setIdPelicula] = useState<number | "">("");
  const [id_actor, setIdActor] = useState<number | "">("");
  const [rol, setRol] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    setPeliculas(await getPeliculas());
    setActores(await getActores());
  };

  const validar = () => {
    if (id_pelicula === "" || id_actor === "" || rol.trim() === "") {
      setError("Todos los campos son obligatorios.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validar()) return;

    try {
      await createParticipacion({
        id_pelicula: Number(id_pelicula),
        id_actor: Number(id_actor),
        rol,
      });
      navigate("/participaciones");
    } catch {
      setError("Error al crear la participación.");
    }
  };

  return (
    <Paper
      elevation={4}
      sx={{
        p: 4,
        maxWidth: 600,
        mx: "auto",
        mt: 4,
        borderRadius: 3,
        backgroundColor: "#fdfdfd",
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#006400" }}
      >
        🎬 Registrar Participación
      </Typography>

      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            select
            label="Película"
            value={id_pelicula}
            onChange={(e) => setIdPelicula(Number(e.target.value))}
            required
            fullWidth
          >
            {peliculas.map((p) => (
              <MenuItem key={p.id_pelicula} value={p.id_pelicula}>
                {p.titulo}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Actor"
            value={id_actor}
            onChange={(e) => setIdActor(Number(e.target.value))}
            required
            fullWidth
          >
            {actores.map((a) => (
              <MenuItem key={a.id_actor} value={a.id_actor}>
                {a.nombre}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Rol Interpretado"
            value={rol}
            onChange={(e) => setRol(e.target.value)}
            required
            fullWidth
          />

          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}

          <Stack direction="row" spacing={2}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#006400",
                "&:hover": { backgroundColor: "#004d00" },
              }}
            >
              Guardar
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => navigate("/participaciones")}
            >
              Cancelar
            </Button>
          </Stack>
        </Stack>
      </form>
    </Paper>
  );
};
