# Cookies_local_storage
Project where we learn how to create cookies and manipulate the browser's local storage.

Topics Covered:
- Understand how to create cookies using Javascript
- Learn how to set specific settings for the cookie
- Learn how to read cookies with Javascript
- How to use js-cookie for easy cookie manipulation
- How to use the browser web storage
- The differences between local storage and session storage

Tasks:
- [0. Create basic cookie](#0-create-basic-cookie)
- [1. Create cookie with expiration date and specific path](#1-create-cookie-with-expiration-date-and-specific-path)
- [2. Read cookie](#2-read-cookie)

## 0. Create basic cookie
**Install your development environment:**

- Install`webpack-dev-server` by running `npm install webpack-dev-server --save-dev` (if you have some errors of missing dependencies, install these packages: `npm i -D webpack` and `npm i -D webpack-cli`)
- Create an empty file `src/index.js`
- Run your server with `node_modules/.bin/webpack-dev-server`

**In a file `0-index.html`, create a basic html template:**

- Add two text inputs, with the id `firstname` and `email`
- Add one button with the text “Log me in” that will call the function `setCookies`
- Add one button with the text “Show the cookies” that will call the function `showCookies`
- Create a function `setCookies`:
    - It should set the cookie `firstname` with the value in the `firstname` input
    - It should set the cookie `email` with the value in the `email` input
- Create a function `showCookies`:
    - It should create a DOM element `p`
    - It should set the inner html with `Cookies:` and the value of the cookie
    - It should append the paragraph at the bottom of the page

**Requirements:**

- Try to make your page to look as close to the image below as possible

![Expected output](previews/0.png "Expected output")

- Access your code with `http://localhost:8080/0-index.html`
- Use vanilla javascript to complete the task

- File: `package.json, src/index.js, 0-index.html`

## 1. Create cookie with expiration date and specific path
**In a file `1-index.html`:**
- Reuse the code of the previous task
- Modify the way you are setting cookies to expire in 10 days

**Requirements:**
- Access your code with `http://localhost:8080/1-index.html`
- Use vanilla javascript to complete the task
- File: `1-index.html`

## 2. Read cookie
**In a file `2-index.html`:**
- Reuse the code of the previous task.
- Create a function `getCookie`:
    - It accepts `name` as argument
    - It should return the value of the cookie with the `name` passed in argument
    - If the cookie does not exist, it should return an empty string
- Modify the function `showCookies`:
    - It should display the paragraph `Email: EMAIL - Firstname: FIRSTNAME`

**Requirements:**
- Access your code with `http://localhost:8080/2-index.html`
- Use vanilla javascript to complete the task
- File: `2-index.html`