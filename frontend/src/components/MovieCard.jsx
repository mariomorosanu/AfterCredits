const PLACE_LABELS = { cinema: "Cinema", streaming: "Streaming", home: "Home" };

export default function MovieCard({ movie, onToggle, onDelete }) {
  return (
    <li className={movie.watched ? "item-card done" : "item-card"}>
      <label className="item-main">
        <input
          type="checkbox"
          checked={movie.watched}
          onChange={() => onToggle(movie.id)}
        />
        <div>
          <h3>{movie.title}</h3>
          <span className={`badge badge-${movie.place}`}>
            {PLACE_LABELS[movie.place]}
          </span>
        </div>
      </label>
      <button
        className="btn-danger"
        onClick={() => onDelete(movie.id)}
        aria-label={`Delete ${movie.title}`}
      >
        Delete
      </button>
    </li>
  );
}