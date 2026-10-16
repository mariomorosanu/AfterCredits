# Stage 3: AI log

## Tools
- Claude (claude.ai)

## Conversations
- understanding Stage 3, setting up Vite and React, writing App.jsx

## Key requests

### 1. The React app
- Asked: the full code for main.jsx, App.jsx and the CSS change.
- Got: App.jsx with the movies array, the toWatch value computed from the data and the raw JSON list, plus the one-column rule in App.css.
- Changed or rejected: I checked the page in the browser, changed watched on one movie and saw the counter update, and ran npm run build without errors.

## What I learned / what did not work
I learned that npm install builds node_modules from package.json, so that folder is not published on Git. I also learned that the header counter is computed from the data, so it changes when I edit the array. In JSX, class becomes className and values go between curly braces.