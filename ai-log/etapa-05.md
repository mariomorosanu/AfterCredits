# Stage 5: AI log

## Tools
- Claude (claude.ai)

## Conversations
-understanding Stage 5, state and events, the delete and checkbox logic, the light/dark theme button, README

## Key requests

### 1. State, events and the theme button
- Asked: the full code for App.jsx, MovieCard.jsx, MovieList.jsx and the CSS changes.
- Got: movies kept in useState, immutable updates with map and filter, a controlled checkbox, a delete button with aria-label, and a theme toggle based on a data-theme attribute.
- Changed or rejected: I tested the two common mistakes (checked without onChange, onClick calling the function at render) and saw the React errors in the console. I also tested the theme button with the system set to light and to dark.

## What I learned / what did not work
I learned that React state is never changed directly, I build a new list with map or filter and pass it to setMovies. I also learned that the counter is a derived value, so it follows the list without extra code. The theme works by changing a data-theme attribute on the html element, and the CSS variables do the rest.