import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Stack,
} from "@mui/material";

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
        backgroundColor: "#006400", // verde oscuro
        color: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        zIndex: 1300, // sobre otros elementos
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          flexWrap: "wrap",
          px: 3,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          🎬 Sistema de Cine
        </Typography>

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
                  color: "#A5D6A7", // verde claro
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
