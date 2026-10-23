# Stage 4: AI log

## Tools
- Claude (claude.ai)

## Conversations
-understanding Stage 4, adapting the guide to my movie app, writing the MovieCard and MovieList components, App.jsx.

## Key requests
### 1. The components and the tests
- Asked: the code for the two components and how to test the special cases.
- Got: MovieCard.jsx and MovieList.jsx, with props, map, key and the empty list message.
- Changed or rejected: I removed key to see the React warning, set the array to [] to see the empty message, and changed one watched flag to see the card change.

## What I learned / what did not work
I learned that props pass data from App to MovieList and then to MovieCard, and that a child only reads them. I also learned that key must be the id, not the position, and that the empty list is handled with an early return.