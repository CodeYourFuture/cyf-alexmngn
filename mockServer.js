var nock = require('nock');

var data = [
  {
    "name": "Mustang",
    "brand": "Ford",
    "colour": "red"
  },
  {
    "name": "Aventador",
    "brand": "Lamborghini",
    "colour": "orange"
  },
  {
    "name": "Giulietta",
    "brand": "Alfa Romeo",
    "colour": "silver"
  },
  {
    "name": "Cherokee",
    "brand": "Jeep",
    "colour": "blue"
  }
];

var domain = 'http://mymockserver.com';
var endPoint = '/data.json';
var url = domain + endPoint;

nock(domain)
  .get(endPoint)
  .reply(200, data);

module.exports = { url, data };