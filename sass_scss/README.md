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

## 9. Extended
Write a Sass file that assigns:
- Font size 12px to all tags of class .info
- Text color #00FF00 to all tags of class .success and extend style of the class .info
- Text color #FF0000 to all tags of class .warning and extend style of the class .info

```shell
$ sass 9-extend_list.scss | tail -n +2
.info, .success, .warning {
  font-size: 12px; }

.success {
  color: #00FF00; }

.warning {
  color: #FF0000; }
``` 
File: `9-extend_list.scss`

## 10. Import colors
Write a Sass file that assigns:
- Text color $red from 10-colors.scss to the class .red
- Text color $green from 10-colors.scss to the class .green
- Text color $blue from 10-colors.scss to the class .blue
- You must use @import

Usage:
```shell
$ cat 10-colors.scss
/* All my colors */
$red: #FF0000;
$green: #00FF00;
$blue: #0000FF;
$ sass 10-import_colors.scss | tail -n +3
.red {
  color: #FF0000; }

.green {
  color: #00FF00; }

.blue {
  color: #0000FF; }
``` 
File: `10-import_colors.scss`, `10-colors.scss`

## 11. For each 
Write a Sass file that creates a class for each name in the list $list-names and assigns the background image based on the name (example below):
- You must use @import
- You must use @each statement

```shell
$ cat 11-photos.scss 
/* All names */
$list-names: julien john sam damian;
$ sass 11-loop_photos.scss | tail -n +3
.photo-julien {
  background: image-url("photos/julien.jpg") no-repeat; }

.photo-john {
  background: image-url("photos/john.jpg") no-repeat; }

.photo-sam {
  background: image-url("photos/sam.jpg") no-repeat; }

.photo-damian {
  background: image-url("photos/damian.jpg") no-repeat; }
```

File: `11-loop_photos.scss`, `11-photos.scss`

