import type { Participacion } from "../interfaces/Participacion";

const API_URL = "http://localhost:3000/api/participaciones";

export const getParticipaciones = async (): Promise<Participacion[]> => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const createParticipacion = async (
  participacion: Participacion
): Promise<Participacion> => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(participacion),
  });
  return await res.json();
};

export const updateParticipacion = async (
  id_pelicula: number,
  id_actor: number,
  participacion: Omit<Participacion, "id_pelicula" | "id_actor">
): Promise<Participacion> => {
  const res = await fetch(`${API_URL}/${id_pelicula}/${id_actor}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(participacion),
  });
  return await res.json();
};

export const deleteParticipacion = async (
  id_pelicula: number,
  id_actor: number
): Promise<void> => {
  await fetch(`${API_URL}/${id_pelicula}/${id_actor}`, { method: "DELETE" });
};
