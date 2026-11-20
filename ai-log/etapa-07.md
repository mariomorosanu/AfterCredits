# Stage 7: AI log

## Tools
- Claude (claude.ai)

## Conversations
- understanding Stage 7, controlled form, validation, POST/PATCH/DELETE, data-testid and tw.json, README

## Key requests
### 1. Form, validation and saving on the server
- Asked: the full code for the form, App.jsx and the CSS.
- Got: a controlled form with validation, createMovie/updateMovie/deleteMovie, and the list updated with the object returned by the server.
- Changed or rejected: I tested the empty title (no request in Network), add, toggle and delete with a refresh, the stopped API (text kept in the field) and --delay 3000 (disabled button).

## What I learned / what did not work
I learned that a controlled form keeps the value in state, that e.preventDefault() stops the page from reloading, and that the list must be updated only after the server confirms. The text stays in the field when saving fails because the fields are cleared only after await succeeds.