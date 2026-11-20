import { useEffect, useState } from "react";
import MovieList from "../components/MovieList.jsx";
import MovieForm from "../components/MovieForm.jsx";
import {
  createMovie,
  deleteMovie,
  fetchMovies,
  updateMovie,
} from "../api.js";
import styles from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const data = await fetchMovies();
        if (!ignore) setMovies(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    load();
    return () => {
      ignore = true;
    };
  }, []);

  async function handleAdd(movie) {
    const created = await createMovie(movie);
    setMovies((prev) => [...prev, created]);
  }

  async function handleToggleWatched(id) {
    const movie = movies.find((m) => m.id === id);
    try {
      const updated = await updateMovie(id, { watched: !movie.watched });
      setMovies((prev) => prev.map((m) => (m.id === id ? updated : m)));
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteMovie(id);
      setMovies((prev) => prev.filter((m) => m.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  const toWatch = movies.filter((m) => !m.watched).length;

  return (
    <div className={styles.grid}>
      <section className="panel">
        <h2>Add movie</h2>
        <MovieForm onAdd={handleAdd} />
      </section>

      <section className="panel">
        <h2>My movies</h2>
        <p className={styles.summary}>
          {movies.length} movies, {toWatch} still to watch
        </p>
        {loading && (
          <p className="info" data-testid="loading">
            Loading movies...
          </p>
        )}
        {error && (
          <p className="error" data-testid="error">
            {error}
          </p>
        )}
        {!loading && (
          <MovieList
            movies={movies}
            onToggle={handleToggleWatched}
            onDelete={handleDelete}
          />
        )}
      </section>
    </div>
  );
}