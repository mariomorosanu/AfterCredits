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
| Claude | choosing the project theme and README, stage 1, JavaScript functions and console tests stage 2 |

Details per stage: see the ai-log/ folder.

## Stage 2: data logic
Plain JavaScript, no DOM. `movies.js` holds the array and the functions
that read and change it. Results are printed in the browser console (F12)..

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [ ] Stage 3: Vite and React project

## Stage 1 verification table
| ID    | Requirement                                          | Where (permalink)                    | How to check          |
| ----- | ---------------------------------------------------- | ------------------------------------ | --------------------- |
| S1-R1 | README: description, fields, sample data, how to run | [README.md](https://github.com/mariomorosanu/AfterCredits/blob/339d9b75e3826f944fb1acfd4775788104daf5f4/README.md?plain=1#L1-L31)               | read                  |
| S1-R2 | AI usage section                                     | [README.md](https://github.com/mariomorosanu/AfterCredits/blob/339d9b75e3826f944fb1acfd4775788104daf5f4/README.md?plain=1#L22-L27)               | read                  |
| S1-R3 | AI log for stage 1                                   | [ai-log/etapa-01.md](https://github.com/mariomorosanu/AfterCredits/blob/339d9b75e3826f944fb1acfd4775788104daf5f4/ai-log/etapa-01.md?plain=1#L1-L21)      | read                  |
| S1-R4 | header, form (text + select), 3 cards with own data  | [index.html#L..-L..](https://github.com/mariomorosanu/AfterCredits/blob/339d9b75e3826f944fb1acfd4775788104daf5f4/index.html#L10-L61)      | open the page         |
| S1-R5 | finished card looks different                        | [style.css#L..-L..](https://github.com/mariomorosanu/AfterCredits/blob/339d9b75e3826f944fb1acfd4775788104daf5f4/style.css#L242-L256)       | look at the card      |
| S1-R6 | 2 columns on desktop, 1 under 700px                  | [style.css#L..-L..](https://github.com/mariomorosanu/AfterCredits/blob/339d9b75e3826f944fb1acfd4775788104daf5f4/style.css#L87-L95 , https://github.com/mariomorosanu/AfterCredits/blob/339d9b75e3826f944fb1acfd4775788104daf5f4/style.css#L280-L288)       | resize < 700px        |
| S1-R7 | visible focus, readable dark theme                   | [style.css#L..-L..](https://github.com/mariomorosanu/AfterCredits/blob/339d9b75e3826f944fb1acfd4775788104daf5f4/style.css#L274-L277 , https://github.com/mariomorosanu/AfterCredits/blob/339d9b75e3826f944fb1acfd4775788104daf5f4/style.css#L30-L45)       | Tab; dark mode        |
| S1-R8 | commit "Stage 1" pushed                              | [commit](https://github.com/mariomorosanu/AfterCredits/commit/339d9b75e3826f944fb1acfd4775788104daf5f4)                  | commit history        |


## Stage 2 verification table
| ID    | Requirement                                           | Where (permalink)                                              | How to check          |
| ----- | ----------------------------------------------------- | -------------------------------------------------------------- | --------------------- |
| S2-R1 | JS file linked, logs on page load                     | [index.html#L64](https://github.com/mariomorosanu/AfterCredits/blob/647e0cedc87360ce5748e9efe217649487ad7f33/index.html#L65)                                    | open page, F12        |
| S2-R2 | 3+ items with id, name, state, tag                    | [movies.js#L1-L7](https://github.com/mariomorosanu/AfterCredits/blob/647e0cedc87360ce5748e9efe217649487ad7f33/movies.js#L1-L7)                                   | read                  |
| S2-R3 | list, count, search, add, toggle, delete              | [movies.js#L9-L62](https://github.com/mariomorosanu/AfterCredits/blob/647e0cedc87360ce5748e9efe217649487ad7f33/movies.js#L9-L62)  | console output        |
| S2-R4 | add rejects empty name and invalid tag                | [movies.js#L26-L38](https://github.com/mariomorosanu/AfterCredits/blob/647e0cedc87360ce5748e9efe217649487ad7f33/movies.js#L26-L38), [movies.js#L64-L66](https://github.com/mariomorosanu/AfterCredits/blob/647e0cedc87360ce5748e9efe217649487ad7f33/movies.js#L64-L66) | last 2 console lines  |
| S2-R5 | original array unchanged after add                    | [movies.js#L56](https://github.com/mariomorosanu/AfterCredits/blob/647e0cedc87360ce5748e9efe217649487ad7f33/movies.js#L56)                                     | console line          |
| S2-R6 | README Stage 2 section + AI log                       | [README.md](https://github.com/mariomorosanu/AfterCredits/blob/647e0cedc87360ce5748e9efe217649487ad7f33/README.md?plain=1#L29-L36), [ai-log/etapa-02.md](https://github.com/mariomorosanu/AfterCredits/blob/647e0cedc87360ce5748e9efe217649487ad7f33/ai-log/etapa-02.md?plain=1#L1-L21)        | read                  |
| S2-R7 | commit "Stage 2" pushed                               | [Stage 2 commit](https://github.com/mariomorosanu/AfterCredits/commit/647e0cedc87360ce5748e9efe217649487ad7f33)                                    | commit history        |