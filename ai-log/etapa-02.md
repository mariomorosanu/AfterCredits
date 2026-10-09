# Stage 2: AI log

## Tools
- Claude (claude.ai)

## Conversations
-understanding Stage 2, writing the JavaScript functions, testing them in the console, updating the README

## Key requests
### 1. Understanding what Stage 2 asks for
- Asked: an explanation of the stage guide and a breakdown into steps.
- Got: a summary of the main ideas (array of objects with ids, map/filter/find/reduce, immutable functions, validation) and a step-by-step plan adapted to my movie app.
- Changed or rejected: kept the plan, but renamed everything to English (movies.js, listTitles, countToWatch, toggleWatched, PLACES) instead of the Romanian names in the guide.

### 2. The functions and the console tests
- Asked: the exact code for each step and how to check it in the browser console.
- Got: movies.js with the data, the six functions (list, count, search, add with validation, toggle, delete), a nextId function based on reduce, and console tests grouped by section, plus the expected output.
- Changed or rejected: left out the genre field for now, since the guide only needs it from Stage 10. I checked the console output myself and it matched the expected lines.

## What I learned / what did not work
I learned that map, filter and reduce return a new array instead of changing the old one, so the original list stays the same after adding a movie. I also learned that the new id should be the highest id plus one, not the list length.
