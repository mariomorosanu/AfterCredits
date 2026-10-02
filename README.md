# AfterCredits
A web app for logging watched movies, keeping a watchlist and building a personal all-time ranking through head-to-head comparisons ("which did you like more?"). Made for movie lovers who want one place for "what I saw" and "what I want to see".

## Data model
| Field    | Type         | Notes                                              |
| -------- | ------------ | -------------------------------------------------- |
| title    | text         | required, max 100 chars                            |
| watched  | boolean      | toggled from the list, default false               |
| place    | fixed values | cinema, streaming, home                            |
| genre    | relation     | Sci-Fi, Drama, Thriller, Comedy, Horror            |
| user     | relation     | the owner of the item (from week 11)               |
| position | number       | rank in the personal top, optional (planned later) |

Sample data used across all stages:
1. Dune: Part Two, to watch, cinema
2. Whiplash, watched, streaming
3. Parasite, to watch, home

## How to run
Open `index.html` in a browser. No build step, no server.

## AI usage
| Tool   | Used for                                       |
| ------ | ---------------------------------------------- |
| Claude | choosing the project theme and README, stage 1 |

Details per stage: see the ai-log/ folder.

## Status
- [x] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript