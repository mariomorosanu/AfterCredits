# Stage 6: AI log

## Tools
- Claude (claude.ai)

## Conversations
-understanding Stage 6, json-server, api.js, loading data with useEffect, the loading and error states, README

## Key requests
### 1. Understanding what Stage 6 asks for
- Asked: an explanation of the stage guide, adapted to my movie app.
- Got: the steps for json-server, db.json, api.js, the environment variable, useEffect and the three states.
- Changed or rejected: used my own names (movies, /movies, fetchMovies), English messages, two extra movies in db.json, and the --danger color from stage 5 for the error message.

### 2. Loading data from the API
- Asked: the full code for api.js, App.jsx and the CSS.
- Got: fetchMovies with a res.ok check, an effect with a cleanup flag (ignore), and loading, error and list shown in App.jsx.
- Changed or rejected: I stopped the API to see the error message, started it with --delay 4000 to see the loading message, and checked the two requests in the Network tab.

## What I learned / what did not work
I learned that fetch does not throw on 404 or 500, so I check res.ok. useEffect with an empty array runs once after the first render, and the ignore flag stops the state from changing after the component is gone. Every load has three states: loading, success and error.