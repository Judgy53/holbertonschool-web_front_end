# flexbox

Project where we learn how to use flexbox in css

Most tasks were done using a starter html `_starter.html` and a starter css `_starter.css` files


## 0. Add display flex
Use the starter HTML and CSS files from this task to task 10. Copy the contents of the starter files into the files that you need to produce and make the necessary changes according to the task description.

When using `display: flex;` on a container, all direct children become `flex-items` (and no more inline or block elements).

With display flex, margins are not collapsing as they would with block items. Also remember that flexbox is 1-dimensional system (vs CSS Grid which is a 2 dimensional system)

In the `/* Grid` section within your CSS
- Add a selector for the row class
    - Property: `display`, Value: `flex`

=> Now, all children from the row class are flex items
- Entirely remove the row::after declaration
- Remove the float: left inside [class*='col-']

=> All elements should appear same than before using the float

File: `0-index.html`, `0-styles.css`

