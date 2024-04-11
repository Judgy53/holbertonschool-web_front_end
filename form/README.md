# form
Project where we learn how html forms works and how to properly style them

`00-article.html` and `00-styles.css` are starter files that will get improved thoughout the tasks.

## 0. basic comment structure 
In your `01-article.html` file
- Sibling to the `<div class="post">`, create a new `<section>` with the class `post-comments`
- Inside the `section` create an `header`
    - In the `<header>` create a heading level 2 with class `section-title` and text: `Leave a comment`
    - under the level 2 heading create a paragraph with text: `All fields are required.`
- Create a `form` siblings to the header
    - Action: `#`
    - Method: `post`

In your `01-styles.css` file

After the Tag list styles, create a new comment
```css
/*** FORM ***/
/* Comment section
    ============================= */
```
- Target `post-comments` class
    - Property: `width`, Value: `80%`
    - Property: `margin`, Value: `10rem 0 0 auto`
    - Property: `padding-left`, Value: `7rem`
- Target the `section-title` class inside the `post-comments` class
    - Property: `font-variant`, Value: `small-caps`
- Add a new comment section
```css
/* Basic form
    ============================= */
```
- Target all `form`
    - Property: `display`, Value: `flex`
    - Property: `flex-direction`, Value: `column`
    - Property: `padding`, Value: `1rem 0`
    - Property: `margin`, Value: `0`

File: `01-article.html`, `01-styles.css`

