// produceDrivingRange
// returns a function that will return false if the trip is greater than blockRange
// return true if the trip is less than the blockRange
// returns a function that we can use to calculate if the trip is too large for the driver
// I gotta remind myself how to make a inner function with multiple argumnets
// lets do an if else to test if it fits in the range
// return a string that tells you the value of how much in the range or out of the range it is
// How do I turn a string into an integer
function produceDrivingRange(blockRange) {
  return function blockRangeCalculator(firstBlock, secondBlock) {
    let blockDifference = parseInt(secondBlock) - parseInt(firstBlock);
    if ( blockDifference > blockRange ) {
      var rangeDifference = blockDifference - blockRange
      return `${rangeDifference} blocks out of range`
    } else {
      var rangeDifference = blockDifference - blockRange
      return `within range by ${blockDifference}`;
    }
  }
}


// Returns a function that then returns a tip
// the returned function calculates the tip of the total fare
function produceTipCalculator(tip) {
  return function tipCalculator(fare) {
    return fare * tip
  }
}

// returns a Driver class
// Has a reference to a driverId that is incremented each time a new driver is created
// The rest of the code doesn't have access to driverId
function createDriver(){
  let driverId = 0;
  // return the class that allows us to create a driver with a name attribute
  return class {
    constructor(name){
      this.name = name;
      // increment the driverId each tiem a driver is created 
      this.id = ++driverId;
    }
  }
}
