import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { getPeliculas, deletePelicula } from "../../services/peliculaService";
import type { Pelicula } from "../../interfaces/Pelicula";
import { useNavigate } from "react-router-dom";

export const PeliculaList = () => {
  const [peliculas, setPeliculas] = useState<Pelicula[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    cargarPeliculas();
  }, []);

  const cargarPeliculas = async () => {
    const data = await getPeliculas();
    setPeliculas(data);
  };

  const eliminar = async (id: number) => {
    if (!confirm("¿Estás seguro de eliminar esta película?")) return;
    try {
      await deletePelicula(id);
      await cargarPeliculas();
    } catch (error: any) {
      alert(
        error.message ||
          "No se puede eliminar. La película está asociada a participaciones."
      );
    }
  };

  return (
    <Box sx={{ mt: 4, px: 2 }}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 4 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#006400" }}
        >
          🎬 Lista de Películas
        </Typography>

        <Button
          variant="contained"
          sx={{
            mb: 2,
            backgroundColor: "#006400",
            "&:hover": { backgroundColor: "#004d00" },
          }}
          onClick={() => navigate("/peliculas/crear")}
        >
          ➕ Agregar Película
        </Button>

        <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#e0f2f1" }}>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Título</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Año</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Género</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {peliculas.map((p) => (
                <TableRow key={p.id_pelicula}>
                  <TableCell>{p.id_pelicula}</TableCell>
                  <TableCell>{p.titulo}</TableCell>
                  <TableCell>{p.anio}</TableCell>
                  <TableCell>{p.genero}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <Button
                        variant="outlined"
                        color="success"
                        onClick={() =>
                          navigate(`/peliculas/editar/${p.id_pelicula}`)
                        }
                      >
                        Editar
                      </Button>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => eliminar(p.id_pelicula)}
                      >
                        Eliminar
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
              {peliculas.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No hay películas registradas.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};
