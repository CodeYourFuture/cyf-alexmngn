# JS Exam 1

This exam will allow us - and also yourself - to evaludate your current knowledge about javascript programming. No pressure, you won't get a rate for this exam. Your code will be evaluated, reviewed and you will receive a feedback from a mentor about where you've done right and where you should improve.
So please do not cheat and do not slack/chat with your colleagues.

I would recommend you to avoid the use of Google or StackOverFlow to find solutions and suggest you to only use the Javascript documentation from MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide

You have a time limit of **1 hour** to complete this exam.

## Car manager

The `cars.js` file is a factory function which allows to add, fetch, sort, get and delete cars from a store.

This is how to use it:

```
var createCarFactory = require('./cars');
var carFactory = createCarFactory();
carFactory.add(/* params */);
carFactory.getAll();
carFactory.deleteByColour(/* params */);
// etc...
```

## Goals

The goals are to make sure all methods are working. When a method has been properly implemented, the unit test associated to the method will pass. 

- Read carefully all the code, all comments as well as the unit tests to understand what the code is supposed to do
- Most methods from `cars.js` are missing, you need to write the missing methods in the `cars.js` file
- The method `deleteByColour` in `cars.js` is partially implemented and not working properly, make sure to debug the method to make it work and pass the unit test
- One unit test needs to be done: the unit test for the method `getByName` is missing. This method is working properly, but you need to write the missing unit test for this method. Do not modify the other unit tests.
- Add comments where you feel necessary to explain your code.
- If there is something you don't know how to do, add comments and try to explain why you don't know how to do it.

**Bonus:** if you're done before the end of the granted time, you can try to modify your code to use the ES6 syntax. Learn more about it here: https://babeljs.io/learn-es2015/

## Install
Fork and clone this repository to your computer and install the packages with `npm`:

```
git clone https://github.com/[YOUR_NAME]/js-exam-1
cd js-exam-1
npm install
```

## Run the unit tests
You can run the following command to run the unit tests:

```
npm test
```

## Submit your solution

Don't forget to commit your code often. Once it's ready, create a pull request with your solution. 

Commits done after the time is up won't be considered.
