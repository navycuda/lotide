// Global Functions


// Local Functions
const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

// Execution & Test Data
const starships = [ `USS Enterprise`, `USS Reliant`, `USS Excelsior`, `USS Yamato`, `USS Lexington`, `USS Intrepid` ];

const results1 = map(starships, uss => uss[0]);

console.log(results1);