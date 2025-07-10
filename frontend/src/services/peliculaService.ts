import type { Pelicula } from "../interfaces/Pelicula";

const API_URL = "http://localhost:3000/api/peliculas";

export const getPeliculas = async (): Promise<Pelicula[]> => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const getPeliculaById = async (id: number): Promise<Pelicula> => {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
};

export const createPelicula = async (
  pelicula: Omit<Pelicula, "id_pelicula">
): Promise<Pelicula> => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pelicula),
  });
  return await res.json();
};

export const updatePelicula = async (
  id: number,
  pelicula: Omit<Pelicula, "id_pelicula">
): Promise<Pelicula> => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pelicula),
  });
  return await res.json();
};

export const deletePelicula = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Error al eliminar la película");
  }
};

