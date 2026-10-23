import MovieList from "./components/MovieList.jsx";

const movies = [
  { id: 1, title: "Dune: Part Two", watched: false, place: "cinema" },
  { id: 2, title: "Whiplash", watched: true, place: "streaming" },
  { id: 3, title: "Parasite", watched: false, place: "home" },
];

export default function App() {
  const toWatch = movies.filter((m) => !m.watched).length;

  return (
    <>
      <header className="app-header">
        <h1>AfterCredits</h1>
        <p>Log, rate and rank the movies you've watched.</p>
        <p className="app-count">
          {movies.length} movies, {toWatch} still to watch
        </p>
      </header>
      <main className="container">
        <section className="panel">
          <h2>My movies</h2>
          <MovieList movies={movies} />
        </section>
      </main>
    </>
  );
}