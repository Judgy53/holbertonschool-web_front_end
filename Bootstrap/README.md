# Bootstrap
Project where we learn the basics of the CSS framework Bootstrap.

Topics Covered: 
- Usage of Containers
- Usage of the Grid system
- Usage of Components
- Usage of Utilities

Tasks:
- [0. Reboot styling](#0-reboot-styling)
- [1. Blocks](#1-blocks)
- [2. Table of chemical elements](#2-table-of-chemical-elements)


## 0. Reboot styling
Given files:
<details>
<summary>0-index.html</summary>

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
        <title>Holberton - Web Stack - Bootstrap</title>
        <meta name="description" content="Bootstrap is a free and open-source CSS framework">

        <style>
            .my-container {
                background-color: #FF0000;
            }
        </style>
    </head>
    <body>

        <div class="my-container">
            <h1>Hello</h1>
            <h2>Holberton</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat eleifend nulla, quis imperdiet lacus. Donec tempor lorem enim, sit amet tempus purus euismod sit amet. Nam laoreet quis purus a consequat. Quisque interdum bibendum varius. Praesent lobortis eros sit amet tortor varius elementum. Fusce eget varius ex. Cras id lectus consectetur, bibendum dolor in, hendrerit lacus. Praesent rutrum, odio id tincidunt fringilla, dolor eros condimentum lacus, blandit molestie massa velit hendrerit risus. Nam ex nunc, ultrices id nisi consectetur, mattis imperdiet purus. Sed tempus ullamcorper nisi, vitae pulvinar nunc varius eu. Maecenas ut volutpat lectus.</p>
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Phasellus quis dolor sed ligula porttitor fringilla.</li>
                <li>
                    <ul>
                        <li>Integer vulputate arcu quis luctus condimentum.</li>
                        <li>Integer commodo turpis non ligula viverra, ut sagittis elit ornare.</li>
                    </ul>
                </li>
                <li>Etiam porttitor justo in diam elementum, nec mollis tellus viverra.</li>
                <li>Vivamus non ligula quis dui auctor sagittis.</li>
            </ul>
        </div>

    </body>
</html>
```
</details>

---

Add Bootstrap to `0-index.html` to reset the CSS styling.

Expected Result:
![Expected result for Task 0](previews/0.jpg)

## 1. Blocks
Given files:
<details>
<summary>1-index.html</summary>

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
        <title>Holberton - Web Stack - Bootstrap</title>
        <meta name="description" content="Bootstrap is a free and open-source CSS framework">

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    </head>
    <body>
        <div>
            <div>Primary</div>
            <div>Success</div>
            <div>Danger</div>
            <div>Warning</div>
        </div>

        <hr />

        <div>
            <div>Primary</div>
            <div>Success</div>
            <div>Danger</div>
            <div>Warning</div>
        </div>

        <hr />

        <div>
            <div>Primary</div>
            <div>Success</div>
            <div>Danger</div>
        </div>

        <hr />

        <div>
            <div>Primary</div>
            <div>Success</div>
            <div>Danger</div>
            <div>Warning</div>
        </div>

        <hr/>

        <div>
            <div>Primary</div>
            <div>Success</div>
        </div>

        <hr/>

        <div>
            <div>Primary</div>
            <div>Success</div>
            <div>Danger</div>
        </div>
    </body>
</html>
```
</details>

---

- Defining any CSS styling is not allowed.
- Changing the HTML structure is not allowed - only adding classes is allowed
- For all cells of all rows:
    - Padding at .5rem
    - Background color of the name of the cell
    - Text centered and white

- First line:
    - Each cell has the same width
    - Screen >= 992px: display like 4 columns in one line
    - Screen < 992px: display like 4 lines in one column

- Second line:
    - Each cell has the same width
    - Screen >= 576px: display like 4 columns in one line
    - Screen < 576px: display like 4 lines in one column

- Third line:
    - The last cell is taking 50% of the width screen
    - The middle cell has 2 times the size of the first cell
    - Screen >= 992px: display like 3 columns in one line
    - Screen < 992px: display like 3 lines in one column

- Fourth line:
    - Different order (from left to right) based on the size
    - Screen >= 1200px: Primary -> Success -> Danger -> Warning
    - Screen between 992px and 1200px: Warning -> Primary -> Success -> Danger
    - Screen between 768px and 992px: Danger -> Warning -> Primary -> Success
    - Screen <= 768px: Success -> Danger -> Warning -> Primary

- Fifth line:
    - Each cell has the same width (~16% of the screen)
    - Screen >= 768px: display like 2 columns on each side of the screen in one line
    - Screen < 768px: display like 2 lines in one column

- Last line:
    - Each cell has the same width (~16% of the screen)
    - Screen >= 768px: display like 3 columns in one line with the space between the first and middle cell 2 times bigger than the space between the middle cell and the last cell
    - Screen < 768px: display like 3 lines in one column

Expected Result:
![Expected result for Task 1](previews/1.gif)

## 2. Table of chemical elements

Given files:
<details>
<summary>2-index.html</summary>

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
        <title>Holberton - Web Stack - Bootstrap</title>
        <meta name="description" content="Bootstrap is a free and open-source CSS framework">

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    </head>
    <body>
        <header>
            <ul>
                <li>
                    <a href="/">
                        <img src="https://via.placeholder.com/150x50" />
                    </a>
                </li>
                <li>
                    <a href="#">Chemical elements</a>
                </li>
                <li>
                    <a href="#">Profile</a>
                </li>
            </ul>
        </header>

        <main>
            <section>
                <div role="alert">
                    <h4>List of chemical elements</h4>
                    <p>This is a list of the 5 first chemical elements which have been identified as of 2019.</p>
                    <hr>
                    <p>A popular visualization of all 118 elements is <a href="https://en.wikipedia.org/wiki/Periodic_table">the periodic table of the elements</a>.</p>
                </div>
            </section>

            <section>
                <h1>Chemical elements <span>only 5</span></h1>

                <div>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Atomic number</th>
                                <th scope="col">Symbol</th>
                                <th scope="col">Element</th>
                                <th scope="col">Origin of name</th>
                                <th scope="col">Group</th>
                                <th scope="col">Period</th>
                                <th scope="col">Atomic weight</th>
                                <th scope="col">Density</th>
                                <th scope="col">Melting point</th>
                                <th scope="col">Boiling point</th>
                                <th scope="col">Specific heat capacity</th>
                                <th scope="col">Electro­negativity</th>
                                <th scope="col">Abundance in Earth's crust</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>H</td>
                                <td>Hydrogen</td>
                                <td>Greek elements <i>hydro-</i> and <i>-gen</i>, meaning 'water-forming'</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1.008</td>
                                <td>0.00008988</td>
                                <td>14.01</td>
                                <td>20.28</td>
                                <td>14.304</td>
                                <td>2.20</td>
                                <td>1400</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>He</td>
                                <td>Helium</td>
                                <td>Greek <i>hḗlios</i>, 'sun'</td>
                                <td>18</td>
                                <td>1</td>
                                <td>4.002602</td>
                                <td>0.0001785</td>
                                <td>—</td>
                                <td>4.22</td>
                                <td>5.193</td>
                                <td>–</td>
                                <td>0.008</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Li</td>
                                <td>Lithium</td>
                                <td>Greek <i>líthos</i>, 'stone'</td>
                                <td>1</td>
                                <td>2</td>
                                <td>6.94</td>
                                <td>0.534</td>
                                <td>453.69</td>
                                <td>1560</td>
                                <td>3.582</td>
                                <td>0.98</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Be</td>
                                <td>Beryllium</td>
                                <td>Beryl, a mineral (ultimately from the name of Belur in southern India)</td>
                                <td>2</td>
                                <td>2</td>
                                <td>9.0121831</td>
                                <td>1.85</td>
                                <td>1560</td>
                                <td>2742</td>
                                <td>1.825</td>
                                <td>1.57</td>
                                <td>2.8</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>B</td>
                                <td>Boron</td>
                                <td>Borax, a mineral (from Arabic <i>bawraq</i>)</td>
                                <td>13</td>
                                <td>2</td>
                                <td>10.81</td>
                                <td>2.34</td>
                                <td>2349</span></td>
                                <td>4200</td>
                                <td>1.026</td>
                                <td>2.04</td>
                                <td>10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    </body>
</html>
```
</details>

---

- Defining any CSS styling is not allowed.
- Changing the HTML structure is not allowed - only adding classes is allowed
- Header:
    - With border bottom
    - Padding `.5rem` and margin bottom `1rem`
    - Background color “light”
    - Horizontal listing, no margin bottom:
        - First item aligned on the left with a border rounded image
        - 2 other items aligned on the right with 2 links (aligned vertically in the middle) with a layout of a button of style “secondary”
        - The link “Chemical elements” is active
- The `main` block has full width, spanning the entire width of the viewport (container-fluid)
- The first `section`:
    - The div inside is an alert style of “info”:
        - `h4` has an alert heading style
        - The last paragraph (containing the link) should not have any margin bottom
- The second `section`:
    - `h1` has a margin bottom at `1.5rem` and margin top at `3rem`
    - Inside the `h1`, “only 5” has a badge layout of type “info”
    - The `div` is able to make the `table` responsive with a break at `992px`
    - The `table` has “dark” style and hover on rows


Expected Result:
![Expected result on desktop](previews/2-desktop.png)
![Expected result responsive](previews/2-responsive.gif)