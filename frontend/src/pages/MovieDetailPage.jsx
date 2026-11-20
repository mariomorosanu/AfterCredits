import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMovie } from "../api.js";
import { PLACE_LABELS } from "../constants.js";
import styles from "./MovieDetailPage.module.css";

export default function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    fetchMovie(id)
      .then((data) => {
        if (!ignore) {
          setMovie(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [id]);

  if (loading) {
    return (
      <p className="info" data-testid="loading">
        Loading movie...
      </p>
    );
  }

  if (error) {
    return (
      <section className="panel">
        <p className="error" data-testid="error">
          The movie could not be loaded: {error}
        </p>
        <Link to="/">Back to the list</Link>
      </section>
    );
  }

  return (
    <section className={`panel ${styles.detail}`} data-testid="detail">
      <Link to="/" className={styles.back}>
        Back to the list
      </Link>
      <h2
        className={movie.watched ? styles.done : undefined}
        data-testid="detail-title"
      >
        {movie.title}
      </h2>
      <dl className={styles.fields}>
        <dt>Genre</dt>
        <dd>{movie.genre ?? "Not set"}</dd>
        <dt>Year</dt>
        <dd>{movie.year ?? "Not set"}</dd>
        <dt>Where</dt>
        <dd>
          <span className={`badge badge-${movie.place}`}>
            {PLACE_LABELS[movie.place]}
          </span>
        </dd>
        <dt>Status</dt>
        <dd>{movie.watched ? "Watched" : "To watch"}</dd>
        <dt>ID</dt>
        <dd>{movie.id}</dd>
      </dl>
    </section>
  );
}