import { useState } from "react";

const PLACES = [
  { value: "cinema", label: "Cinema" },
  { value: "streaming", label: "Streaming" },
  { value: "home", label: "Home" },
];
const TITLE_MAX = 100;

export default function MovieForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("cinema");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function validate() {
    const t = title.trim();
    if (t === "") return "The title is required.";
    if (t.length > TITLE_MAX) {
      return `The title can have at most ${TITLE_MAX} characters.`;
    }
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const message = validate();
    if (message) {
      setError(message);
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      await onAdd({ title: title.trim(), place, watched: false });
      setTitle("");
      setPlace("cinema");
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      className="item-form"
      onSubmit={handleSubmit}
      noValidate
      data-testid="form"
    >
      <label>
        Movie title
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="E.g. Dune: Part Two"
          maxLength={TITLE_MAX}
          aria-invalid={Boolean(error)}
          data-testid="form-title"
        />
      </label>
      <label>
        Where
        <select
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          data-testid="form-place"
        >
          {PLACES.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </select>
      </label>
      {error && (
        <p className="error" data-testid="form-error">
          {error}
        </p>
      )}
      <button type="submit" disabled={submitting} data-testid="form-submit">
        {submitting ? "Saving..." : "Add movie"}
      </button>
    </form>
  );
}