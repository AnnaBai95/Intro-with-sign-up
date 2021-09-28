# Frontend Mentor - Intro component with sign up form solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview
This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./1.jpg)
![](./2.jpg)
![](./3.jpg)
![](./4.jpg)

### Links

- Solution URL: [Solution hosted on Github](https://github.com/AnnaBai95/Intro-with-sign-up)
- Live Site URL: [Solution hosted on vercel](https://intro-with-sign-up-five.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Bootstrap 5
- Jquery
- Mobile-first workflow


### What I learned

This was my first experience with removing placeholder text as well as using calc for positioning.


```css
background-position: calc(100% - 17px);
```
```js
$("#fmRegister").find("input.error").removeAttr('placeholder');
```

### Useful resources

- [jQuery Validation](https://jqueryvalidation.org/) - This helped me with form validation. 
- [Bootstrap 5](https://getbootstrap.com/) - This helped me with getting the correct syntax for positioning and layout.


## Author

- Frontend Mentor - [@AnnaBai95](https://www.frontendmentor.io/profile/AnnaBai95))
