import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography, Stack } from "@mui/material";
import MovieCreationIcon from "@mui/icons-material/MovieCreation"; // Ícono de encabezado

interface MenuItem {
  label: string;
  path: string;
}

const menuItems: MenuItem[] = [
  { label: "Inicio", path: "/inicio" },
  { label: "Películas", path: "/peliculas" },
  { label: "Actores", path: "/actores" },
  { label: "Participaciones", path: "/participaciones" },
  { label: "Acerca de", path: "/acerca-de" },
];

export const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#006400",
        color: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        zIndex: 1300,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          flexWrap: "wrap",
          px: 3,
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <MovieCreationIcon />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Sistema de Cine
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2} flexWrap="wrap">
          {menuItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              sx={{
                color: "#fff",
                textTransform: "none",
                fontWeight: "medium",
                "&:hover": {
                  color: "#A5D6A7",
                  textDecoration: "underline",
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
