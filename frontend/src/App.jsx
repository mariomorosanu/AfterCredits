import { useEffect, useState } from "react";
import MovieList from "./components/MovieList.jsx";
import { fetchMovies } from "./api.js";

function initialTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState(initialTheme);

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

  function handleToggleWatched(id) {
    setMovies((prev) =>
      prev.map((m) => (m.id === id ? { ...m, watched: !m.watched } : m))
    );
  }

  function handleDelete(id) {
    setMovies((prev) => prev.filter((m) => m.id !== id));
  }

  function handleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
  }

  const toWatch = movies.filter((m) => !m.watched).length;

  return (
    <>
      <header className="app-header">
        <button
          className="theme-toggle"
          onClick={handleTheme}
          aria-pressed={theme === "dark"}
        >
          {theme === "dark" ? "Light mode" : "Dark mode"}
        </button>
        <h1>AfterCredits</h1>
        <p>Log, rate and rank the movies you've watched.</p>
        <p className="app-count">
          {movies.length} movies, {toWatch} still to watch
        </p>
      </header>
      <main className="container">
        <section className="panel">
          <h2>My movies</h2>
          {loading && <p className="info">Loading movies...</p>}
          {error && (
            <p className="error">
              Could not load the data: {error}. Is <code>npm run api</code>{" "}
              running?
            </p>
          )}
          {!loading && !error && (
            <MovieList
              movies={movies}
              onToggle={handleToggleWatched}
              onDelete={handleDelete}
            />
          )}
        </section>
      </main>
    </>
  );
}