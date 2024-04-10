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

