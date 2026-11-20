import MovieCard from "./MovieCard.jsx";
import styles from "./MovieList.module.css";

export default function MovieList({ movies, onToggle, onDelete }) {
  if (movies.length === 0) {
    return (
      <p className="empty" data-testid="empty">
        The movie list is empty.
      </p>
    );
  }

  return (
    <ul className={styles.list}>
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