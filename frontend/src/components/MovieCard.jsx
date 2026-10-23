const PLACE_LABELS = { cinema: "Cinema", streaming: "Streaming", home: "Home" };

export default function MovieCard({ movie }) {
  return (
    <li className={movie.watched ? "item-card done" : "item-card"}>
      <div>
        <h3>{movie.title}</h3>
        <span className={`badge badge-${movie.place}`}>
          {PLACE_LABELS[movie.place]}
        </span>
      </div>
      <span className="status">{movie.watched ? "Watched" : "To watch"}</span>
    </li>
  );
}