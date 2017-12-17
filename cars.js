
var fetch = require('node-fetch');
var mockServer = require('./mockServer');

/**
 * Car manager
 * This allows to add, fetch, sort, get and delete cars from a store
 */

var createCarFactory = function numberOfCars() {
  // This variable will contain the list of cars you add/sort/delete
  
  var store = [];
  var data = store.push(
     {"name": "Mustang","brand": "Ford","colour": "red" },
    { "name": "Aventador","brand": "Lamborghini","colour": "orange" },
    { "name": "Giulietta", "brand": "Alfa Romeo","colour": "silver" },
    {"name": "Cherokee", "brand": "Jeep", "colour": "blue"}); 

console.log(data);
  } // In this method  i wanted to use the array. push but instead i have copied and paste the data and use the array.push
    // i wanted to fix it but didnt have to much time.



    /**
    * Add cars to the `store`
    * Takes an array of cars as parameters
    * Each car object must have 3 properties:
    * - name: Car's name
    * - brand: Car's brand
    * - colour: Car's colour
    * If one of those properties is missing in one of the car within the array, the car shouldn't be added.
    * @param {array} carsArray
    *
    * The function returns the following:
    * @returns {number} Total number of cars stored
    */
    add: function (carsArray) {
      // @TODO

    carArrays.forEach(function(item){
      if (item.name && item.brand && item.colour){
        store.push(item);
      }
    })
    return store.lengh;
    },


    /**
     * Fetch more cars from the server and add them to the `store` 
     * End-point URL is available using the following variable: mockServer.url
     */
    fetchAndAdd : function (callback) {
      // @TODO
      
    fetch(mockServer.url).then(function(responsecallback) {
     
     console.log(responsecallback);
     // return store.length();
    
    })

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
      // @TODO
    },

    /**
    * Sort the cars in `store` by brand in alphabetical order
    */
    sortByBrand: function () {
      // @TODO
    },

    /**
    * Delete all cars in `store` that has the `colour` prop matching with a car's colour
    * @TODO: This method is not properly working, you must fix it.
    * @param {string} colour
    * @returns {boolean} true if at least one car if found and deleted, false if no car has been found with the matching colour
    */
    deleteByColour: function (colour) {
      var hasBeenDeleted = false;
      store.filter(function(item) {
        if (item.colour === colour) {
          hasBeenDeleted = true;
          return false;
        }
        return true;
      });
      return hasBeenDeleted;
    },
  };
};

module.exports = createCarFactory;
