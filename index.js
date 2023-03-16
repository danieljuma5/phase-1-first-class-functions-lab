// returnFirstTwoDrivers() 
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

//Return the first two elements of an array non-destructively
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0,2);
}


//Return an array of last two drivers non destructively
function returnLastTwoDrivers(drivers) {
  return drivers.slice(2);
}

//selecting drivers function
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


//Fare multiplier function
function createFareMultiplier(int) {
  return function multiplier() {
    return int * int;
}
}
//fare doubler function
const fareDoubler = function doubler(int) {
  return 2 * int;
}
//fare tripler
const fareTripler = function tripler(int) {
  return 3 * int;
}

//array selector function
function selectDifferentDrivers(drivers, fn) {
  return fn(drivers);
}
const firstTwoDrivers = selectDifferentDrivers(driver, returnFirstTwoDrivers);
const lastTwodrivers =  selectDifferentDrivers(drivers, returnLastTwoDrivers);