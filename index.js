// require and run main fetch function
const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

// Temporary test codes to check fetMyIP function

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });


// Temporary test  codes to check fetchCoordsByIP

// fetchCoordsByIP('99.199.74.242', (error, data) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned coordinates:', data);
// });

// Temporary test codes to check fetchISSFlyOverTimes

fetchISSFlyOverTimes({ latitude: 49.1297, longitude: -123.1658 }, (error, data) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('It worked! Returned fly over times:', data);
});