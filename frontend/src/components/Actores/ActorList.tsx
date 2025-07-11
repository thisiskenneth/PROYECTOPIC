import { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Stack,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getActores, deleteActor } from "../../services/actorService";
import type { Actor } from "../../interfaces/Actor";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const ActorList = () => {
  const [actores, setActores] = useState<Actor[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    cargarActores();
  }, []);

  const cargarActores = async () => {
    const data = await getActores();
    setActores(data);
  };

  const eliminar = async (id: number) => {
    if (!confirm("¿Estás seguro de eliminar este actor?")) return;
    try {
      await deleteActor(id);
      await cargarActores();
    } catch (error: any) {
      alert(
        error.message ||
          "Error al eliminar el actor. Es posible que esté asociado a una participación."
      );
    }
  };

  return (
    <Box sx={{ mt: 4, px: 2 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 4 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#006400" }}
        >
          Lista de Actores
        </Typography>

        <Button
          startIcon={<AddCircleIcon />}
          variant="contained"
          color="success"
          sx={{ mb: 3 }}
          onClick={() => navigate("/actores/crear")}
        >
          Agregar Actor
        </Button>

        <TableContainer
          component={Paper}
          sx={{ borderRadius: 3, overflowX: "auto" }}
        >
          <Table>
            <TableHead sx={{ backgroundColor: "#e0f2f1" }}>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Nombre</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Nacionalidad</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Edad</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {actores.map((actor) => (
                <TableRow key={actor.id_actor} hover>
                  <TableCell>{actor.nombre}</TableCell>
                  <TableCell>{actor.nacionalidad}</TableCell>
                  <TableCell>{actor.edad}</TableCell>
                  <TableCell>
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ flexWrap: "wrap" }}
                    >
                      <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<EditIcon />}
                        onClick={() =>
                          navigate(`/actores/editar/${actor.id_actor}`)
                        }
                      >
                        Editar
                      </Button>
                      <Button
                        variant="outlined"
                        color="error"
                        startIcon={<DeleteIcon />}
                        onClick={() => eliminar(actor.id_actor)}
                      >
                        Eliminar
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
              {actores.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    <Typography variant="body1" color="text.secondary">
                      No hay actores registrados.
                    </Typography>
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
