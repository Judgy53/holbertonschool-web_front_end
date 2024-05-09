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