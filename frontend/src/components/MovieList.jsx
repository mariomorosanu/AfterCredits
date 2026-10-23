import MovieCard from "./MovieCard.jsx";

export default function MovieList({ movies }) {
  if (movies.length === 0) {
    return <p className="empty">The movie list is empty.</p>;
  }

  return (
    <ul className="item-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}