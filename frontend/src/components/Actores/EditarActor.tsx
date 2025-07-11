import { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { getActorById, updateActor } from "../../services/actorService";

export const EditarActor = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");
  const [edad, setEdad] = useState<number | "">("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (id) {
      getActorById(Number(id)).then((data) => {
        setNombre(data.nombre);
        setNacionalidad(data.nacionalidad);
        setEdad(data.edad);
      });
    }
  }, [id]);

  const validar = () => {
    if (!nombre || !nacionalidad || edad === "" || edad <= 0) {
      setError("Todos los campos son obligatorios y válidos.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validar()) return;

    try {
      await updateActor(Number(id), {
        nombre,
        nacionalidad,
        edad: Number(edad),
      });
      navigate("/actores");
    } catch {
      setError("Error al actualizar el actor.");
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
        🎭 Editar Actor
      </Typography>

      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Nacionalidad"
            value={nacionalidad}
            onChange={(e) => setNacionalidad(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Edad"
            type="number"
            value={edad}
            onChange={(e) => setEdad(Number(e.target.value))}
            required
            inputProps={{ min: 1 }}
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
              Actualizar
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => navigate("/actores")}
            >
              Cancelar
            </Button>
          </Stack>
        </Stack>
      </form>
    </Paper>
  );
};
