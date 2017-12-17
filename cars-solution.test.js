var createCarFactory = require('./cars-solution');
var mockServer = require('./mockServer');

describe('Cars', function () {
  var carFactory;

  beforeEach(function () {
    // Create a new instance of CarFactory for every test run
    carFactory = createCarFactory();
  })

  it('Can add cars to a store, returns the total number of cars in the store', function () {
    // Manually add cars
    var listOfCars = [
      { name: 'Mustang', brand: 'Ford', colour: 'red' },
      { name: 'Cherokee', brand: 'Jeep', colour: 'blue' },
    ];
    var numberOfCars = carFactory.add(listOfCars);
    expect(numberOfCars).toEqual(listOfCars.length);

    // Adding more cars
    var moreCars = [
      { name: 'Camaro', brand: 'Porsche', colour: 'green' },
    ];
    numberOfCars = carFactory.add(moreCars);
    expect(numberOfCars).toEqual(listOfCars.length + moreCars.length);
  });

  it('Should not add cars that doesn\'t have all required fields (name, brand, colour)', function () {
    // Adding cars with missing fields
    var listOfCars = [
      { name: 'Camaro' },
      { brand: 'Ford' },
      { colour: 'yellow' },
    ];
    var numberOfCars = carFactory.add(listOfCars);

    // There shouldn't be any cars in the store because the cars added have missing fields.
    expect(numberOfCars).toEqual(0);
  });

  it('Can fetch cars from internet and add them to the cars store ', function () {
    expect.assertions(1);
    // Fetching data from the server and add them to the store
    return carFactory.fetchAndAdd(function (numberOfCars) {

      // The number of cars in the store must be equal to the number of cars retrieved from the server.
      expect(numberOfCars).toEqual(mockServer.data.length);
    });
  });

  it('Can get all stored cars', function () {
    // List of cars we add to the store
    var listOfCars = [
      { name: 'Mustang', brand: 'Ford', colour: 'red' },
      { name: 'Cherokee', brand: 'Jeep', colour: 'blue' },
      { name: 'Camaro', brand: 'Porsche', colour: 'green' },
    ];
    carFactory.add(listOfCars);
    var allCars = carFactory.getAll();

    // We should get the same list of cars as what we've added
    expect(allCars).toEqual(listOfCars);
  });

  it('Can get a car by its name', function () {
    expect.assertions(2);

    // Write the unit test to make sure you can retrieve a specific car by its name
    var listOfCars = [
      { name: 'Mustang', brand: 'Ford', colour: 'red' },
      { name: 'Cherokee', brand: 'Jeep', colour: 'blue' },
      { name: 'Camaro', brand: 'Porsche', colour: 'green' },
    ];
    carFactory.add(listOfCars);

    var foundCar = carFactory.getByName('Mustang');
    expect(foundCar).toEqual(listOfCars[0]);

    foundCar = carFactory.getByName('Polo');
    expect(foundCar).toEqual(undefined);
  })

  it('Can sort the store by brand', function () {
    // List of cars unsorted that we will be adding to the store
    var listOfCars = [
      { name: 'Cherokee', brand: 'Jeep', colour: 'blue' },
      { name: 'Camaro', brand: 'Porsche', colour: 'green' },
      { name: 'Mustang', brand: 'Ford', colour: 'red' },
    ];
    carFactory.add(listOfCars);

    // Sort the store
    carFactory.sortByBrand();

    // List of cars sorted by brand that we should get after sorting the store
    var expectedSortedCars = [
      { name: 'Mustang', brand: 'Ford', colour: 'red' },
      { name: 'Cherokee', brand: 'Jeep', colour: 'blue' },
      { name: 'Camaro', brand: 'Porsche', colour: 'green' },
    ];
    
    var sortedCars = carFactory.getAll();
    expect(sortedCars).toEqual(expectedSortedCars);
  });

  it('Can delete cars by colour from the store', function () {
    // List of cars, unsorted that we will be adding to the store
    var listOfCars = [
      { name: 'Mustang', brand: 'Ford', colour: 'red' },
      { name: 'Cherokee', brand: 'Jeep', colour: 'red' },
      { name: 'Camaro', brand: 'Porsche', colour: 'green' },
    ];
    carFactory.add(listOfCars);

    // Returns true as there are 2 cars with the colour red
    // The number of cars should have 2 less than the list of cars.
    var carDeleted1 = carFactory.deleteByColour('red');
    var allCarsAfterDelete1 = carFactory.getAll();
    expect(carDeleted1).toBeTruthy();
    expect(allCarsAfterDelete1.length).toEqual(listOfCars.length - 2);

    // Returns false as there is no car with the colour yellow
    // The number of cars should remain the same
    var carDeleted2 = carFactory.deleteByColour('yellow');
    var allCarsAfterDelete2 = carFactory.getAll();
    expect(carDeleted2).toBeFalsy();
    expect(allCarsAfterDelete1.length).toEqual(allCarsAfterDelete2.length);
  });
});
