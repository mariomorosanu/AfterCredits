import { Link } from "react-router-dom";
import { PLACE_LABELS } from "../constants.js";
import styles from "./MovieCard.module.css";

export default function MovieCard({ movie, onToggle, onDelete }) {
  return (
    <li
      className={movie.watched ? `${styles.card} ${styles.done}` : styles.card}
      data-place={movie.place}
      data-testid="item"
      data-id={movie.id}
    >
      <div className={styles.main}>
        <input
          type="checkbox"
          checked={movie.watched}
          onChange={() => onToggle(movie.id)}
          aria-label={`Mark ${movie.title} as watched`}
          data-testid="item-toggle"
        />
        <div>
          <h3 className={styles.title}>
            <Link to={`/movies/${movie.id}`} data-testid="item-link">
              {movie.title}
            </Link>
          </h3>
          <span className={`badge badge-${movie.place}`}>
            {PLACE_LABELS[movie.place]}
          </span>
        </div>
      </div>
      <button
        className="btn-danger"
        onClick={() => onDelete(movie.id)}
        aria-label={`Delete ${movie.title}`}
        data-testid="item-delete"
      >
        Delete
      </button>
    </li>
  );
}