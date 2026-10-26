import MovieCard from "./MovieCard.jsx";

export default function MovieList({ movies, onToggle, onDelete }) {
  if (movies.length === 0) {
    return <p className="empty">The movie list is empty.</p>;
  }

  return (
    <ul className="item-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}