import { Routes, Route, Navigate } from "react-router-dom";
import { CrearPelicula } from "../components/Peliculas/CrearPelicula";
import {PeliculaList} from "../components/Peliculas/PeliculaList";
import { EditarPelicula } from "../components/Peliculas/EditarPelicula";

export const Peliculas = () => {
  return (
    <main className="p-6">
      <Routes>
        <Route path="/crear" element={<CrearPelicula />} />
        <Route path="/editar/:id" element={<EditarPelicula />} />
        <Route path="/" element={<PeliculaList />} />
        <Route path="*" element={<Navigate to="/peliculas" />} />
      </Routes>
    </main>
  );
};