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
  createPelicula,
  getPeliculaById,
  updatePelicula,
} from "../../services/peliculaService";

export const CrearPelicula = () => {
  const { id } = useParams();
  const [titulo, setTitulo] = useState("");
  const [anio, setAnio] = useState<number | "">("");
  const [genero, setGenero] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getPeliculaById(Number(id)).then((data) => {
        setTitulo(data.titulo);
        setAnio(data.anio);
        setGenero(data.genero);
      });
    }
  }, [id]);

  const validar = () => {
    if (!titulo || !genero || anio === "" || anio <= 0) {
      setError("Todos los campos son obligatorios y válidos.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validar()) return;

    try {
      const payload = { titulo, anio: Number(anio), genero };

      if (id) {
        await updatePelicula(Number(id), payload);
      } else {
        await createPelicula(payload);
      }

      navigate("/peliculas");
    } catch {
      setError("Error al guardar la película.");
    }
  };

  return (
    <Box sx={{ mt: 4, px: 2 }}>
      <Paper
        elevation={4}
        sx={{
          p: 4,
          maxWidth: 600,
          mx: "auto",
          borderRadius: 4,
          backgroundColor: "#f9f9f9",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#006400" }}
        >
          🎬 {id ? "Editar Película" : "Crear Nueva Película"}
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              label="Título"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
              fullWidth
            />
            <TextField
              label="Año"
              type="number"
              value={anio}
              onChange={(e) => setAnio(Number(e.target.value))}
              required
              inputProps={{ min: 1 }}
              fullWidth
            />
            <TextField
              label="Género"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
              required
              fullWidth
            />

            {error && (
              <Typography color="error" variant="body2">
                {error}
              </Typography>
            )}

            <Stack direction="row" spacing={2} justifyContent="flex-end">
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
                onClick={() => navigate("/peliculas")}
              >
                Cancelar
              </Button>
            </Stack>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};
