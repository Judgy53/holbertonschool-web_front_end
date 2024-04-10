# sass_scss
Project where we learn how to use Sass

## 0. Always debugging!
Write a Sass file that prints `Hello world` in the debug output.

Usage:
```shell
$ sass 0-debug_log.scss | head -n 0
0-debug_log.scss:2 DEBUG: Hello world
```
File: `0-debug_log.scss`

## 1. Color variable
Write a Sass file that assigns the text color #3D3D3D to the HTML tags body and p.
- You must use a Sass variable

Usage: 
```shell
$ sass 1-color_variable.scss | tail -n +2
body {
  color: #3D3D3D; }

p {
  color: #3D3D3D; }
```

File: `1-color_variable.scss`

## 2. Colors
Write a Sass file that assigns:
- The text color #3D3D3D to the HTML tags body and p
- The background color #6D6D6D to the HTML tags body and h2
- You must use 2 Sass variables

Usage:
```shell
$ sass 2-color_variables.scss | tail -n +2
body {
  color: #3D3D3D;
  background-color: #6D6D6D; }

p {
  color: #3D3D3D; }

h2 {
  background-color: #6D6D6D; }
```
File: `2-color_variables.scss`

## 3. Nested tag
Write a Sass file that assigns:
- No margin or padding in body tags
- Margin 10px to all of the p tags inside body tags
- You must use nested declarations

Usage:
```shell
$ sass 3-nested_tag.scss | tail -n +2
body {
  margin: 0px;
  padding: 0px; }
  body p {
    margin: 10px; }
```

File: `3-nested_tag.scss`

## 4. Nested class
Write a Sass file that assigns:
- Text color #3D3D3D to elements inside body tags
- Text color #FF0000 to any elements of class .red inside body tags
- You must use nested declarations

Usage:
```shell
$ sass 4-nested_class.scss | tail -n +2
body {
  color: #3D3D3D; }
  body .red {
    color: #FF0000; }
$
```
File: `4-nested_class.scss`

## 5. Nested child
Write a Sass file that assigns:
- Text color #3D3D3D to elements inside body tags
- Text color #FF0000 to any elements of class .red that are the first children of the body
- You must use nested declarations

Usage:
```shell
$ sass 5-nested_child.scss | tail -n +2
body {
  color: #3D3D3D; }
  body > .red {
    color: #FF0000; }
``` 

File: `5-nested_child.scss`

## 6. Nested hover
Write a Sass file that assigns:
- Text color #FF0000 to button tags
- When the user hovers over button tags, text color should change to #00FF00
- You must use nested declarations

Usage:
```shell
$ sass 6-nested_hover.scss | tail -n +2
button {
  color: #FF0000; }
  button:hover {
    color: #00FF00; }
```
File: `6-nested_hover.scss`

## 7. Nested and nested again
Write a Sass file that assigns:
- Font size 14px to all body tags
- Font size 16px to all h1 tags inside body tags
- Font size 12px to h1 tags of class .smaller inside body tags
- You must use nested declarations

```shell
$ sass 7-nested_deeper.scss | tail -n +2
body {
  font-size: 14px; }
  body h1 {
    font-size: 16px; }
    body h1.smaller {
      font-size: 12px; }
```
File: `7-nested_deeper.scss`

## 8. Margin mixin
Write a Sass file that assigns:
- Margin left and right at 10px to body tags
- Margin left and right at 15px to div tags
- You must use a mixin

```shell
$ sass 8-mixin_margins.scss | tail -n +2
body {
  margin-left: 10px;
  margin-right: 10px; }

div {
  margin-left: 15px;
  margin-right: 15px; }
```
File: `8-mixin_margins.scss`

