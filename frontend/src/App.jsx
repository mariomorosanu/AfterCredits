import { useState } from "react";
import MovieList from "./components/MovieList.jsx";

const INITIAL_MOVIES = [
  { id: 1, title: "Dune: Part Two", watched: false, place: "cinema" },
  { id: 2, title: "Whiplash", watched: true, place: "streaming" },
  { id: 3, title: "Parasite", watched: false, place: "home" },
];

function initialTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function App() {
  const [movies, setMovies] = useState(INITIAL_MOVIES);
  const [theme, setTheme] = useState(initialTheme);

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
          <MovieList
            movies={movies}
            onToggle={handleToggleWatched}
            onDelete={handleDelete}
          />
        </section>
      </main>
    </>
  );
}