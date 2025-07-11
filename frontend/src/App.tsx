import { Routes, Route, Navigate } from "react-router-dom";
import { Toolbar } from "@mui/material"; // ⬅️ IMPORTANTE

import { Navbar } from "./components/Navbar";
import { Inicio } from "./pages/Inicio";
import { Peliculas } from "./pages/Peliculas";
import { Actores } from "./pages/Actores";
import { Participaciones } from "./pages/Participaciones";
import { AcercaDe } from "./pages/AcercaDe";

export const App = () => {
  return (
    <>
      <Navbar />
      <Toolbar />{" "}
      {/* ⬅️ Este elemento crea espacio igual a la altura del AppBar */}
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" />} />
        <Route path="/inicio/*" element={<Inicio />} />
        <Route path="/peliculas/*" element={<Peliculas />} />
        <Route path="/actores/*" element={<Actores />} />
        <Route path="/participaciones/*" element={<Participaciones />} />
        <Route path="/acerca-de" element={<AcercaDe />} />
        <Route path="*" element={<Navigate to="/inicio" />} />
      </Routes>
    </>
  );
};
