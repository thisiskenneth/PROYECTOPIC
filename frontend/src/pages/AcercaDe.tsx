import { Box, Typography, Paper, Stack } from "@mui/material";

export const AcercaDe = () => {
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
          variant="h4"
          gutterBottom
          sx={{ color: "#006400", fontWeight: "bold" }}
        >
          Acerca del Desarrollador
        </Typography>

        <Typography variant="body1" paragraph>
          Este proyecto ha sido desarrollado como parte del segundo parcial de
          la asignatura{" "}
          <strong>Programación Integrativa de Componentes Web</strong> en la
          Universidad de las Fuerzas Armadas – ESPE.
        </Typography>

        <Stack spacing={1}>
          <Typography>
            <strong>👨‍💻 Nombre:</strong> Kenneth Cortez, Michael Villacrés,
            Sebastián Quinga
          </Typography>
          <Typography>
            <strong>🎓 Carrera:</strong> Tecnologías de la Información
          </Typography>
          <Typography>
            <strong>📧 Correo institucional:</strong> kenneth.cortez@espe.edu.ec
          </Typography>
          <Typography>
            <strong>📝 Descripción:</strong> Sistema de gestión de películas,
            actores y sus participaciones utilizando React, Node.js y
            PostgreSQL.
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
};
