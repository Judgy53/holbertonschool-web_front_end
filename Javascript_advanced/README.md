# Javascript_advanced
Project where we learn advanced Javascript syntax and techniques.

Topics covered :
- What is lexical scoping in JavaScript
- What is closure in JavaScript
- How to use closure
- How to chain different closures
- How to simulate private methods with Closure
- The execution stack order with JavaScript
- How to use binding
- How to use callbacks
  
Tasks:
- [0. Lexical scoping and welcome message](#0-lexical-scoping-and-welcome-message)
- [1. Closure Scope Chain](#1-closure-scope-chain)
- [2. Closure](#2-closure)
- [3. Closure and loops](#3-closure-and-loops)
- [4. Complex Closure](#4-complex-closure)
- [5. Changing DOM with closure](#5-changing-dom-with-closure)
- [6. Private methods with closure](#6-private-methods-with-closure)
- [7. Stack order and setTimeout](#7-stack-order-and-settimeout)


## 0. Lexical scoping and welcome message
Create a function named `welcome`:
- It takes two arguments: `firstName` (string) and `lastName` (string)
- It contains a variable named `fullName`, that will contains the `firstName` followed by a space and then the `lastName`
- Within the `welcome` function, write a function named `displayFullName`:
    - It should display an alert with the message `Welcome` + the variable `fullName` + and exclamation mark.
- Call the function `displayFullName` at the end of the function `welcome`

**How to test**
- Copy paste your code in the “Console” of your web browser.
- Run `welcome('Holberton', 'School');` should prompt an alert with this content: `Welcome Holberton School!`
- `alert(fullName)`, should return a reference error `fullName is not defined`

---

File: `0-welcome.js`

## 1. Closure Scope Chain 
- Create a variable named `globalVariable` with value `Welcome`
- Create a function `outer` that:
    - alerts the content of the variable `globalVariable`
    - creates a variable named `course` with value `Holberton`
    - creates a function `inner` that:
        - alerts the content of the variable `globalVariable` and `course` (concatenated)
        - creates a variable named `exclamation` with value `!`
        - creates a function `inception` that alerts the content of the variable `globalVariable`, `course`, and `exclamation` (concatenated)
        - calls the function `inception`
    - calls the function `inner`
- Call the function `outer`

**Compose the code:**
- Write the function `inception` within `inner`
- Write the function `inner` within `outer`
- Call the function `outer` in the main code (outside any function)
- Call the function `inner` within `outer`
- Call the function `inception` within `inner`

**Test:**
- Running the script should display three popups one by one with the text `Welcome`, `Welcome Holberton`, and `Welcome Holberton!`

---

File: `1-nested_functions.js`

## 2. Closure 
Write a function named `welcomeMessage`:
- It accepts one argument `fullName` (string)
- It should be a closure for an alert displaying `Welcome <fullName>`

After this function definition, create three variables:
- `guillaume` contains a call `welcomeMessage` with `Guillaume` as argument
- `alex` contains a call `welcomeMessage` with `Alex` as argument
- `fred` contains a call `welcomeMessage` with `Fred` as argument

**Test:**
- Copy paste your code in the “Console” of your web browser.
- Executing the following in the console:
```js
guillaume();
alex();
fred();
```
Should display three alerts with the following content:
- Welcome Guillaume
- Welcome Alex
- Welcome Fred

---

File: `2-function_me.js`

## 3. Closure and loops
Write a function named `createClassRoom`:
- It takes into argument `numbersOfStudents` (number)
- Inside, it contains a function `studentSeat`, that takes into argument `seat` (number) and returns a function that returns the `seat` number
- After the definition of `studentSeat`, create and populate a variable `students` (array)
    - Using a loop from 0 to `numbersOfStudents`, pass the number of iteration + 1 to `studentSeat` and add its return value to the `students` array
- Returns the `students` array

Create a closure `classRoom`, calling `createClassRoom` with 10 students

**Test:**
- Copy paste your code in the “Console” of your web browser.
- Executing the following code:
```js
console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());
```
- Should return: 
```js
1
4
10
```

---

File: `3-classrooms.js`

## 4. Complex Closure
Create a function `divideBy`:
- It takes into argument `firstNumber` (number)
- It returns a function that takes into argument `secondNumber` (number)
    - It returns the second number divided by the first number

Create a function `addBy`:
- It takes into argument `firstNumber` (number)
- It returns a function that takes into argument `secondNumber` (number)
    - It returns the sum of the two numbers

Create four closures:
- `addBy100`, that uses the function `addBy` with the number 100
- `addBy1000`, that uses the function `addBy` with the number 1000
- `divideBy10`, that uses the function `divideBy` with the number 10
- `divideBy100`, that uses the function `divideBy` with the number 100

**Test:**
- Copy paste your code in the “Console” of your web browser.
- Executing the following code:
```js
console.log(addBy100(20));
console.log(divideBy10(20));
console.log(divideBy100(200));
console.log(addBy1000(20));
```
- Should display in the console:
```js
120
2
2
1020
```

---

File: `4-math.js`

## 5. Changing DOM with closure
Create a function named `changeMode`:
- It accepts 5 arguments `size` (number), `weight` (string), `transform` (string), `background` (string), `color` (string)
- Using closure, it changes the style of the entire page and set the `font-size`, `font-weight`, `text-transform`, `background-color`, and `color`

Write a function named `main`:
- Set a variable named `spooky` that passes the arguments `9`, `bold`, `uppercase`, `pink`, `green` to `changeMode`
- Set a variable named `darkMode` that passes the arguments `12`, `bold`, `capitalize`, `black`, `white` to `changeMode`
- Set a variable named `screamMode` that passes the arguments `12`, `normal`, `lowercase`, `white`, `black` to `changeMode`
- Add a paragraph to the body of the page with the text `Welcome Holberton!`
- Add a button to the body with the text `Spooky`
- Add a button to the body with the text `Dark mode`
- Add a button to the body with the text `Scream mode`
- When clicking on each button, the page CSS should change to the different themes you created previously

Call the `main` function

**Requirements:**
- Use vanilla JavaScript to add the elements to the DOM and change the style of the page
- JQuery not allowed!
<details>
<summary>Expected result after clicking the `Spooky` button</summary>

![Example result after clicking the spooky button](previews/5-spooky.png)
</details>
<details>
<summary>Expected result after clicking the `Dark mode` button</summary>

![Example result after clicking the dark mode button](previews/5-dark.png)
</details>
<details>
<summary>Expected result after clicking the `Scream mode` button</summary>

![Example result after clicking the scream mode button](previews/5-scream.png)
</details>

---

File: `5-mode.js`

## 6. Private methods with closure
Write a module named `studentHogwarts`:
- It contains two variables `privateScore` set to 0, and `name` set to `null`
- It contains one private method `changeScoreBy`, it takes `points` in argument and add it to `privateScore`
- The module gives access to four public methods (return an object):
    - `setName`, it takes into argument `newName`, and set the private variable `name`
    - `rewardStudent`, it calls the method `changeScoreBy` with 1
    - `penalizeStudent`, it calls the method `changeScoreBy` with -1
    - `getScore`, it returns `name: score` (ex: `Harry: 14`)

Create one variable named `harry`, that is an instance of `studentHogwarts`:
- Set the name of the object to `Harry`
- Reward the student four times
- Log to the console the name and score

Create one variable named `draco`, that is an instance of `studentHogwarts`:
- Sets the name of the object to `Draco`
- Reward the student one time
- Penalize the student three times
- Log to the console the name and score

**Test:**
- Executing the code should display in the console
```js
Harry: 4
Draco: -2
```

---

File: `6-hogwarts.js`

## 7. Stack order and setTimeout
- Log to the console `Start of the execution queue`
- Log to the console `Final code block to be executed` using `setTimeout` (with delay of 0)
- Using a loop that iterates 100 times, each iteration logs to the console the iteration number
- Log to the console `End of the loop printing`

**Test:**
- Your code should log to the console the following:
```js
Start of the execution queue
1
2
...
100
End of the loop printing
Final code block to be executed
```

---

File: `7-timeout.js`