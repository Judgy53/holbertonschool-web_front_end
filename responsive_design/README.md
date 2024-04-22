# responsive_design
Project where we learn about `Mobile-first design` and how to make a website responsive.

`00-index.html` and `00-styles.css` are starter files and were created prior to this project.

## 0. Fix the hero banner
Because we did some changes with the article.html page in the previous project, our hero banner background is no more visible. Let’s fix it!

In your `01-styles.css` file
- Inside the `hero-homepage` class selector, update some values:
    - Property: `background-position`, Value: `65% 8rem`
    - Property: `background-size`, Value: `90rem auto`
- Inside the selector that targets `section-inner` class inside `section-hero` class
    - Update the `min-height` to `35vh`

File: `01-styles.css, 01-index.html`