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

import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

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
        minHeight: "calc(10vh - 64px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        backgroundColor: "#f0f0f0",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 900 }}>
        <Paper elevation={4} sx={{ p: 4, borderRadius: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#006400" }}
          >
            Participaciones en Películas
          </Typography>

          <Button
            startIcon={<AddCircleIcon />}
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
            sx={{
              borderRadius: 3,
              backgroundColor: "#fff",
              maxWidth: "100%",
              overflowX: "auto",
            }}
            elevation={2}
          >
            <Table>
              <TableHead sx={{ backgroundColor: "#e0f2f1" }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Película</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Actor</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Rol</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {participaciones.map((p) => (
                  <TableRow key={`${p.id_pelicula}-${p.id_actor}`} hover>
                    <TableCell>{p.nombre_pelicula}</TableCell>
                    <TableCell>{p.nombre_actor}</TableCell>
                    <TableCell>{p.rol}</TableCell>
                    <TableCell>
                      <Stack direction="row" spacing={1} flexWrap="wrap">
                        <Button
                          variant="outlined"
                          color="primary"
                          startIcon={<EditIcon />}
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
                          startIcon={<DeleteIcon />}
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
                      <Typography variant="body1" color="text.secondary">
                        No hay participaciones registradas.
                      </Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Box>
  );
};
