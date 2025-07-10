import { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import {
  getParticipaciones,
  updateParticipacion,
} from "../../services/participacionService";
import type { Participacion } from "../../interfaces/Participacion";

export const EditarParticipacion = () => {
  const { id_pelicula, id_actor } = useParams();
  const navigate = useNavigate();

  const [rol, setRol] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (id_pelicula && id_actor) {
      getParticipaciones().then((data: Participacion[]) => {
        const actual = data.find(
          (p) =>
            p.id_pelicula === Number(id_pelicula) &&
            p.id_actor === Number(id_actor)
        );
        if (actual) setRol(actual.rol);
      });
    }
  }, [id_pelicula, id_actor]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rol.trim()) {
      setError("El rol es obligatorio.");
      return;
    }

    try {
      await updateParticipacion(Number(id_pelicula), Number(id_actor), { rol });
      navigate("/participaciones");
    } catch {
      setError("Error al actualizar la participación.");
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
        ✏️ Editar Participación
      </Typography>

      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Rol del Actor"
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
              Actualizar
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
