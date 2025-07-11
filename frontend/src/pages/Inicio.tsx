import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import PersonIcon from "@mui/icons-material/Person";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import InfoIcon from "@mui/icons-material/Info";

export const Inicio = () => {
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
          variant="h3"
          gutterBottom
          sx={{ color: "#006400", fontWeight: "bold" }}
        >
          Bienvenido al Sistema de Cine
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, color: "#333" }}>
          Esta plataforma permite gestionar películas, actores y sus
          participaciones en distintas producciones. Utiliza el menú de
          navegación superior para explorar las funcionalidades disponibles:
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <List>
          <ListItem>
            <ListItemIcon>
              <MovieIcon sx={{ color: "#006400" }} />
            </ListItemIcon>
            <ListItemText
              primary="Películas"
              secondary="Añadir, editar o eliminar películas registradas."
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <PersonIcon sx={{ color: "#006400" }} />
            </ListItemIcon>
            <ListItemText
              primary="Actores"
              secondary="Gestionar la información de los actores."
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <Diversity3Icon sx={{ color: "#006400" }} />
            </ListItemIcon>
            <ListItemText
              primary="Participaciones"
              secondary="Relacionar actores con películas y definir sus roles."
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <InfoIcon sx={{ color: "#006400" }} />
            </ListItemIcon>
            <ListItemText
              primary="Acerca de"
              secondary="Información general sobre el sistema y el desarrollador."
            />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
};
