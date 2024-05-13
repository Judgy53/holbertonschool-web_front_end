# JQuery_advanced
Project where we learn how to load and use JQuery.

Topics covered:
- How to load jQuery from a CDN in a page
- The different ways to create DOM elements with jQuery
- How to modify elements
- How to add new elements to a page with different positions
- How to add a click handler on an element
- How to send GET, POST, DELETE or any type of AJAX query with jQuery
- How to create a pagination

Tasks:
- [0. Setup your dev environment](#0-setup-your-dev-environment)
- [1. Creating a DOM element](#1-creating-a-dom-element)
- [2. Creating multiple DOM elements at once](#2-creating-multiple-dom-elements-at-once)

## 0. Setup your dev environment
**Modify the starter file:**
- Load the latest version of jQuery using their `code.jquery.com` CDN
- Use the Slim & minified version of jQuery
- When the page is being loaded, verify that jQuery is loaded correctly
- If jQuery is ready to be used, log to the console `jQuery has been loaded correctly`
- If jQuery has not been loaded properly, log to the console `jQuery has not been loaded correctly`

**Requirements**
- Make sure your code is in a `script` of type `application/javascript`

---

<details>
<summary>Starter file</summary>

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">

    <head>

        <meta charset="utf-8" />
        <title>Task 0</title>

    </head>

    <body>

    </body>

</html>
```
</details>

---

File: `0-index.html`

## 1. Creating a DOM element

**Reuse the template you created previously.**
- Remove the code that verifies jQuery loaded and logs messages to the console
- Create a function named `createTextElement`:
    - Within the function, create a `p` HTML element
    - The paragraph should display `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in diam risus. Nunc sit amet euismod ipsum. Aenean tempus ex sed est volutpat, sed sodales velit tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin auctor sollicitudin eleifend. Vivamus porta enim vitae mauris commodo, vitae tempor tellus elementum. Quisque sed pellentesque nulla, at eleifend nisi. Phasellus eget tincidunt ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    - Add the paragraph to the `body` of the page
- Call the `createTextElement` function

**Requirements:**
- You must use jQuery only to generate the HTML tag and attach it to the page
- Use the keyword `append` to attach the element to the page

---

- File: `1-index.html`

## 2. Creating multiple DOM elements at once
**Reuse the template you created previously.**
- Remove the function `createTextElement`
- Create a function named `createFamilyTree`:
    - It should create a table element
        - The head of the table should display `Firstname` and `Lastname` in two cells
        - The body of the table should three rows
        - The first row should contain two cells with `Guillaume` and `Salva`
        - The second row should contain two cells with `Paulette` and `Salva`
        - The third row should contain two cells with `Antoine` and `Salva`
    - Use the keyword `append` only once to attach all the elements of the table to the page
- Call the `createFamilyTree` function

**Requirements:**
- You must use jQuery only to generate the HTML tag and attach it to the page
- The entire table code should be contained in one string

**The table created by your script should look like this**
![Expected result](previews/2.png)

---

- File: `2-index.html`