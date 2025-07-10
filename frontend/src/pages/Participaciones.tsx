import { Routes, Route, Navigate } from "react-router-dom";
import { CrearParticipacion } from "../components/Participaciones/CrearParticipacion";
import {ParticipacionList} from "../components/Participaciones/ParticipacionList";
import { EditarParticipacion } from "../components/Participaciones/EditarParticipacion";

export const Participaciones = () => {
  return (
    <main className="p-6">
      <Routes>
        <Route path="/crear" element={<CrearParticipacion />} />
        <Route path="/editar/:id_pelicula/:id_actor" element={<EditarParticipacion />} />
        <Route path="/" element={<ParticipacionList />} />
        <Route path="*" element={<Navigate to="/participaciones" />} />
      </Routes>
    </main>
  );
};