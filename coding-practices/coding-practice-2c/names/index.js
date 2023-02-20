const peopleNames = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");
const getPeopleInCity = (peopleNames) => {
  return getFirstNames(peopleNames);
};
console.log(getPeopleInCity(peopleNames));
module.exports = getPeopleInCity;
