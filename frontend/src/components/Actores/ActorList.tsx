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
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom color="primary" fontWeight="bold">
        🎭 Lista de Actores
      </Typography>

      <Button
        variant="contained"
        color="success"
        onClick={() => navigate("/actores/crear")}
        sx={{ mb: 3 }}
      >
        ➕ Agregar Actor
      </Button>

      <Paper elevation={3}>
        <TableContainer>
          <Table>
            <TableHead sx={{ backgroundColor: "#eeeeee" }}>
              <TableRow>
                <TableCell>
                  <strong>ID</strong>
                </TableCell>
                <TableCell>
                  <strong>Nombre</strong>
                </TableCell>
                <TableCell>
                  <strong>Nacionalidad</strong>
                </TableCell>
                <TableCell>
                  <strong>Edad</strong>
                </TableCell>
                <TableCell>
                  <strong>Acciones</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {actores.map((actor) => (
                <TableRow key={actor.id_actor} hover>
                  <TableCell>{actor.id_actor}</TableCell>
                  <TableCell>{actor.nombre}</TableCell>
                  <TableCell>{actor.nacionalidad}</TableCell>
                  <TableCell>{actor.edad}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() =>
                          navigate(`/actores/editar/${actor.id_actor}`)
                        }
                      >
                        Editar
                      </Button>
                      <Button
                        variant="outlined"
                        color="error"
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
                  <TableCell colSpan={5} align="center">
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
