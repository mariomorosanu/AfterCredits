export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options.headers },
  });
  if (!res.ok) {
    throw new Error(`Server error: ${res.status}`);
  }
  return res.status === 204 ? null : res.json();
}

export function fetchMovies() {
  return request("/movies");
}

export function fetchMovie(id) {
  return request(`/movies/${id}`);
}

export function createMovie(movie) {
  return request("/movies", { method: "POST", body: JSON.stringify(movie) });
}

export function updateMovie(id, changes) {
  return request(`/movies/${id}`, {
    method: "PATCH",
    body: JSON.stringify(changes),
  });
}

export function deleteMovie(id) {
  return request(`/movies/${id}`, { method: "DELETE" });
}