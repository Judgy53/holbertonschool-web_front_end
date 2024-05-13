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
- [3. Chain DOM elements](#3-chain-dom-elements)
- [4. HTML function](#4-html-function)
- [5. Click attribute and remove function](#5-click-attribute-and-remove-function)

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

## 3. Chain DOM elements

**Reuse the template you created previously. Reuse also the function named `createFamilyTree`:**
- The table is containing the exact same values as the previous task
- This time, create each element one by one
- Use the keywords `append` for each element and `text` for the cells
- Do not create any intermediate variable
- Call the `createFamilyTree` function

**Tips:**
- You can append multiple elements at once, by separating the elements with a comma

**Requirements:**
- You must use jQuery only to generate the HTML tag and attach it to the page

**The table created by your script should look like this**
![Expected result](previews/2.png)

---

- File: `3-index.html`

## 4. HTML function

**Reuse the template you created in the previous task. Reuse also the function named `createFamilyTree`.**
- Create a new function `replaceFamilyTree`:
    - It should replace the childrens of the `tbody` elements with a new `tr`
    - The `tr` element should contain two cells with `Gerard` and `Bonissa` in each
- Make sure `createFamilyTree` and `replaceFamilyTree` are called

**Requirements:**
- You must use the keyword `html` to replace the content of the table

**The table created by your script should look like this**
![Expected Result](previews/4.png)

---

- File: `4-index.html`

## 5. Click attribute and remove function

**In a file `5-index.html`, reuse the template you created previously.**

- Remove the `createFamilyTree` and `replaceFamilyTree` functions
- Create a function `createFamilyTree`:
    - It should append to the `body` an empty table, with `thead` and two cells with text `Firstname` and `Lastname`, respectively
    - It should append an empty `tbody` element to the `table` after the `thead`
- Create a function `addNewMember`:
    - It accepts two arguments `firstName`(string) and `lastName`(string)
    - It appends to the body of the `table` a new row with three cells
    - The first cell displays the `firstName`, the second cell displays the `lastName`
    - The third cell displays `(x)`
    - On click on the third cell, it should remove the row
    - Add CSS to the third cell to have an `orange` background
- Calls the function `createFamilyTree`
- Using `addNewMember`, generate a fake table with:
    - the first row `Guillaume`, `Salva`
    - the second row `Arielle`, `Snizt`
    - the third row `Fanette`, `Snizt`
    - the fourth row `Gerard`, `Snizt`
    - the fifth row `Victor`, `Salva`

**Requirements:**
- You must use the keywords `click`, `css`, and `remove`

**The table created by your script should look like this:**
![Expected result](previews/5.png)

---

- File: `5-index.html`