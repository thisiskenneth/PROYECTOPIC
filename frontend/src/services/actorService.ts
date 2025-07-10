import type { Actor } from "../interfaces/Actor";

const API_URL = "http://localhost:3000/api/actores";

export const getActores = async (): Promise<Actor[]> => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const getActorById = async (id: number): Promise<Actor> => {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
};

export const createActor = async (
  actor: Omit<Actor, "id_actor">
): Promise<Actor> => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(actor),
  });
  return await res.json();
};

export const updateActor = async (
  id: number,
  actor: Omit<Actor, "id_actor">
): Promise<Actor> => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(actor),
  });
  return await res.json();
};

export const deleteActor = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Error al eliminar el actor");
  }
};
