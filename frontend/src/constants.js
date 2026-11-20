export const PLACES = [
  { value: "cinema", label: "Cinema" },
  { value: "streaming", label: "Streaming" },
  { value: "home", label: "Home" },
];

export const PLACE_LABELS = Object.fromEntries(
  PLACES.map((p) => [p.value, p.label])
);