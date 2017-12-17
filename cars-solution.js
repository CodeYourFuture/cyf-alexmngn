var fetch = require('node-fetch');
var mockServer = require('./mockServer');

/**
 * Car manager
 * This allows to add, fetch, sort, get and delete cars from a store
 */

var createCarFactory = function () {

  // This variable will contain the list of cars you add/sort/delete
  var store = [];

  return {

    /**
    * Add cars to the `store`
    * Takes an array of cars as parameters
    * Each car object must have 3 properties:
    * - name: Car's name
    * - brand: Car's brand
    * - colour: Car's colour
    * If one of those properties is missing, the car shouldn't be added.
    * @param {array} carsArray
    *
    * The function returns the following:
    * @returns {number} Total number of cars stored
    */
    add: function (carsArray) {
      carsArray.forEach(function (car) {
        if (car.name && car.brand && car.colour) {
          store.push(car);
        }
      });
      return store.length;
    },

    /**
     * Fetch more cars from the server and add them to the `store` 
     * End-point URL is available using the following variable: mockServer.url
     */
    fetchAndAdd: function (callback) {
      var add = this.add;
      return fetch(mockServer.url)
        .then(function (response) {
          return response.json();
        })
        .then(function (responseJSON) {
          return add(responseJSON);
        })
        .then(callback);
    },

    /**
    * Get a car in `store` matching the name. Returns the first car found.
    * @param name Name of the car
    * @returns {object} Found car or `undefined` if there is no car found.
    */
    getByName: function (name) {
      return store.find(function (item) {
        return item.name === name;
      });
    },

    /**
    * Get all cars from the store
    * @returns {array}
    */
    getAll: function () {
      return store;
    },

    /**
    * Sort the cars in `store` by brand in alphabetical order
    */
    sortByBrand: function () {
      store.sort(function (a, b) {
        if (a.brand > b.brand) {
          return 1;
        } else if (a.brand === b.brand) {
          return 0;
        } else {
          return -1;
        }
      });
    },

    /**
    * Delete all cars in `store` that has the `colour` prop matching with a car's colour
    * This method is not properly working, you must fix it.
    * @param {string} colour
    * @returns {boolean} true if at least one car if found and deleted, false if no car has been found with the matching colour
    */
    deleteByColour: function (colour) {
      var hasBeenDeleted = false;
      var newStore = store.filter(function(item) {
        if (item.colour === colour) {
          hasBeenDeleted = true;
          return false;
        }
        return true;
      });
      store = newStore;
      return hasBeenDeleted;
    },
  };
};

module.exports = createCarFactory;
