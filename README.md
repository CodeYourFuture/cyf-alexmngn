# Car manager

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

This exam is for you to realise your current level of programming today and to understand what you are capable of. 
Please do not cheat and do not chat with your colleagues.

You have a time limit of 1 hour to complete this exam.

Avoid using Google/StackOverFlow to find solutions. 
I recommend you to only use the Javascript documentation from MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide

### Goals

The goals are to make sure all methods work and the unit tests are all passing.

- Read carefully all the code, all comments and the unit tests to understand what the code is supposed to do
- Most methods from `cars.js` are missing, you need to write the missing methods in the `cars.js` file
- The method `deleteByColour` in `cars.js` is not working properly, make sure to debug the method to make it work and pass the unit test
- One unit test needs to be done: the unit test for `getByName` is missing. Write the missing unit test for this method. Do not modify the other unit tests.
- Add comments where you feel necessary to explain your code.
- If there is something you don't know how to do, add comments and try to explain why you don't know how to do it.

### Install
Fork and clone this repository to your computer and install the packages with `npm`:

```
git clone https://github.com/CodeYourFuture/js-exam-1
cd js-exam-1
npm install
```

### Run the unit tests
You can run the following command to run the unit tests:

```
npm test
```

### Submit your solution
Create a pull request with your solution.
