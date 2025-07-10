import { Box, Typography, Paper, Stack } from "@mui/material";

export const Inicio = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 4,
        px: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: 800,
          width: "100%",
          bgcolor: "#fff",
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{ color: "#006400", fontWeight: "bold" }}
        >
          Bienvenido al Sistema de Cine 🎬
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          Esta plataforma te permite gestionar películas, actores y sus
          participaciones en distintas producciones. Utiliza el menú de
          navegación superior para acceder a las diferentes secciones del
          sistema:
        </Typography>

        <Stack spacing={2}>
          <Typography>
            📽️ <strong>Películas:</strong> Añadir, editar o eliminar películas.
          </Typography>
          <Typography>
            🧑‍🎤 <strong>Actores:</strong> Gestionar información de los actores.
          </Typography>
          <Typography>
            🤝 <strong>Participaciones:</strong> Relacionar actores con
            películas y definir sus roles.
          </Typography>
          <Typography>
            ℹ️ <strong>Acerca de:</strong> Información del desarrollador.
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
};
