const DATA = require('./data.json');
const services = require('./services.js');

const TARGET = 90;

services.getMatchingNumbers(DATA, TARGET)
  .then(data => console.log(data))
  .catch(e => console.error(e));
