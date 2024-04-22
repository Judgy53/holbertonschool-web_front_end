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

## 1. Make the container flexible
Using the previous file as the base, in your `02-styles.css` file update the `.container` selector by changing `width` to `max-width`

If you resize your browser, you should see that the content is resizing.

File: `02-styles.css, 02-index.html`

## 2. Fix layout issues
In a normal situation, you should start with “mobile first” in mind and write your CSS first for the mobile. But because we already have a desktop version, we will exceptionally add some media-queries for mobile and tablet.
- For extra large devices (no media queries)
- For desktop / large devices (`max-width: 992px`)
- For tablet / medium styles (`max-width: 767px`)
- For mobile styles (`max-width: 480px`)

**We will put media queries at the end of each section to facilitate the reading but for performance reasons, the best practice is to unifiy all similar breakpoints at the end of the CSS file.**

In your `02-1-styles.css` file:
- inside the `/* Helpers` section target all images inside the main section
    - Property: `width`, Value: `100%`
    - Property: `height`, Value: `auto`
- inside the `/* Section Latest news` section, add a new media query (`max-width: 767px`)
    - Target the `row` inside `section-latest-news`
        - Property: `flex-direction`, Value: `column`
- inside the `/* Grid` section, at the end, add a new media query (`max-width: 767px`)
    - First, redefine the variable `section-padding` and give that value: `5rem 1.5rem`. And redefine the variable `section-body-padding` with `2rem 0 0`
    - Target the `ul.row` and the `row` class
        - Property: `flex-direction`, Value: `column`
        - Property: `margin`, Value: `0`
    - Target all the classes that started with `col-`
        - Property: `margin`, Value: `0 0 3rem 0`
    - Target the `col-1-3` and `col-1-2` classes
        - Property: `width`, Value: `100%`

The `navbar` is not allowing the website to fit the window. We will temporarily hide it and create a mobile navbar later.
- inside the `/* Navbar` section, at the end, add a new media query (`max-width: 767px`)
    - Target the `navbar-menu` class
        - Property: `display`, Value: `none`
        - 
File: `02-1-styles.css, 02-1-index.html`