const movies = [
  { id: 1, title: "Dune: Part Two", watched: false, place: "cinema" },
  { id: 2, title: "Whiplash", watched: true, place: "streaming" },
  { id: 3, title: "Parasite", watched: false, place: "home" },
];

const PLACES = ["cinema", "streaming", "home"];

function listTitles(list) {
  return list.map((m) => m.title);
}

function countToWatch(list) {
  return list.filter((m) => !m.watched).length;
}

function searchByTitle(list, text) {
  const query = text.toLowerCase();
  return list.filter((m) => m.title.toLowerCase().includes(query));
}

function nextId(list) {
  return list.reduce((max, m) => Math.max(max, m.id), 0) + 1;
}

function addMovie(list, title, place = "cinema") {
  const cleanTitle = title.trim();
  if (cleanTitle === "") {
    console.log("The title cannot be empty.");
    return list;
  }
  if (!PLACES.includes(place)) {
    console.log("Invalid place: " + place);
    return list;
  }
  const newMovie = { id: nextId(list), title: cleanTitle, watched: false, place: place };
  return [...list, newMovie];
}

function toggleWatched(list, id) {
  return list.map((m) => (m.id === id ? { ...m, watched: !m.watched } : m));
}

function deleteMovie(list, id) {
  return list.filter((m) => m.id !== id);
}

console.log("--- Reading ---");
console.log("Titles:", listTitles(movies).join(", "));
console.log("To watch:", countToWatch(movies));
console.log("Search 'dune':", listTitles(searchByTitle(movies, "dune")).join(", "));

console.log("--- Adding ---");
let list = addMovie(movies, "Interstellar", "cinema");
console.log("New list:", list.length, "movies");
console.log("Original still has:", movies.length, "movies");

console.log("--- Toggle and delete ---");
list = toggleWatched(list, 1);
console.log("After marking id 1 as watched, to watch:", countToWatch(list));
list = deleteMovie(list, 3);
console.log("After deleting id 3:", listTitles(list).join(", "));

console.log("--- Validation ---");
addMovie(list, "   ");
addMovie(list, "Something", "imax");

