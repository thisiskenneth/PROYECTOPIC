import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Stack,
  Paper,
  TableContainer,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  getParticipaciones,
  deleteParticipacion,
} from "../../services/participacionService";
import type { Participacion } from "../../interfaces/Participacion";

export const ParticipacionList = () => {
  const [participaciones, setParticipaciones] = useState<Participacion[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    cargarParticipaciones();
  }, []);

  const cargarParticipaciones = async () => {
    const data = await getParticipaciones();
    setParticipaciones(data);
  };

  const eliminar = async (id_pelicula: number, id_actor: number) => {
    if (confirm("¿Eliminar esta participación?")) {
      await deleteParticipacion(id_pelicula, id_actor);
      cargarParticipaciones();
    }
  };

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 64px)", // ← espacio libre menos la altura del navbar
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        backgroundColor: "#1e1e1e", // opcional, fondo general
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 700 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#006400" }}
        >
          🤝 Participaciones en Películas
        </Typography>

        <Button
          variant="contained"
          onClick={() => navigate("/participaciones/crear")}
          sx={{
            mb: 3,
            backgroundColor: "#006400",
            "&:hover": { backgroundColor: "#004d00" },
          }}
        >
          Agregar Participación
        </Button>

        <TableContainer
          component={Paper}
          sx={{ borderRadius: 3, backgroundColor: "#fdfdfd" }}
          elevation={3}
        >
          <Table>
            <TableHead sx={{ backgroundColor: "#e0f2f1" }}>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>🎬 Película</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>🧑 Actor</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>🎭 Rol</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>⚙️ Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {participaciones.map((p) => (
                <TableRow key={`${p.id_pelicula}-${p.id_actor}`}>
                  <TableCell>{p.nombre_pelicula}</TableCell>
                  <TableCell>{p.nombre_actor}</TableCell>
                  <TableCell>{p.rol}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <Button
                        variant="outlined"
                        color="info"
                        onClick={() =>
                          navigate(
                            `/participaciones/editar/${p.id_pelicula}/${p.id_actor}`
                          )
                        }
                      >
                        Editar
                      </Button>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => eliminar(p.id_pelicula, p.id_actor)}
                      >
                        Eliminar
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
              {participaciones.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    No hay participaciones registradas.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
