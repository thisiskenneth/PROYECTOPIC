import { Box, Typography, Paper, Stack } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";

export const AcercaDe = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 4,
        px: 2,
        minHeight: "calc(10vh - 64px)",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 5,
          maxWidth: 800,
          width: "100%",
          bgcolor: "#fafafa",
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "#006400", fontWeight: "bold" }}
        >
          Acerca del Desarrollador
        </Typography>

        <Typography variant="body1" paragraph sx={{ color: "#333" }}>
          Este proyecto ha sido desarrollado como parte del segundo parcial de
          la asignatura{" "}
          <strong>Programación Integrativa de Componentes Web</strong> en la
          Universidad de las Fuerzas Armadas – ESPE.
        </Typography>

        <Stack spacing={2} sx={{ mt: 2 }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <AccountCircleIcon sx={{ color: "#006400" }} />
            <Typography>
              <strong>Nombre:</strong> Kenneth Cortez, Michael Villacrés,
              Sebastián Quinga
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <SchoolIcon sx={{ color: "#006400" }} />
            <Typography>
              <strong>Carrera:</strong> Tecnologías de la Información
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <EmailIcon sx={{ color: "#006400" }} />
            <Typography>
              <strong>Correo institucional:</strong> kacortez@espe.edu.ec, sdquinga2@espe.edu.ec, mavillacres2@espe.edu.ec
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <DescriptionIcon sx={{ color: "#006400" }} />
            <Typography>
              <strong>Descripción:</strong> Sistema de gestión de películas,
              actores y sus participaciones, utilizando React, Node.js y
              PostgreSQL.
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
};
