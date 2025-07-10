import { Routes, Route, Navigate } from "react-router-dom";
import { CrearActor } from "../components/Actores/CrearActor";
import {ActorList} from "../components/Actores/ActorList";
import { EditarActor } from "../components/Actores/EditarActor";

export const Actores = () => {
  return (
    <main className="p-6">
      <Routes>
        <Route path="/crear" element={<CrearActor />} />
        <Route path="/editar/:id" element={<EditarActor />} />
        <Route path="/" element={<ActorList />} />
        <Route path="*" element={<Navigate to="/actores" />} />
      </Routes>
    </main>
  );
};
