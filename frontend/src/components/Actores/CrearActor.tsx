import { useState } from "react";
import { Paper, Typography, Stack, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { createActor } from "../../services/actorService";

export const CrearActor = () => {
  const [nombre, setNombre] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");
  const [edad, setEdad] = useState<number | "">("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

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
      await createActor({ nombre, nacionalidad, edad: Number(edad) });
      navigate("/actores");
    } catch {
      setError("Ocurrió un error al crear el actor.");
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        maxWidth: 600,
        mx: "auto",
        mt: 4,
        borderRadius: 3,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
        🎬 Registrar Nuevo Actor
      </Typography>

      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Nacionalidad"
            value={nacionalidad}
            onChange={(e) => setNacionalidad(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Edad"
            type="number"
            value={edad}
            onChange={(e) => setEdad(Number(e.target.value))}
            fullWidth
            inputProps={{ min: 1 }}
            required
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
                backgroundColor: "#00796b",
                "&:hover": { backgroundColor: "#004d40" },
              }}
            >
              Guardar
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
