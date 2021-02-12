// require and run main fetch function
// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
// const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

// Temporary test codes to check fetMyIP function

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });


// Temporary test  codes to check fetchCoordsByIP

// fetchCoordsByIP('99.199.74.242', (error, coords) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned coordinates:', coords);
// });

// Temporary test codes to check fetchISSFlyOverTimes

// fetchISSFlyOverTimes({ latitude: 49.1297, longitude: -123.1658 }, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned flyover times:', passTimes);
// });

const printPassTimes = passTimes => {
  for (let pass of passTimes) {
    // let time = new Date(pass.risetime).toLocaleTimeString('us-en', { hour12: false});
    let duration = pass.duration;
    let datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    let pstDateTime = datetime.toLocaleString('en-CA', { hour12: false, timeZone: 'Canada/Pacific'});
    console.log(`Next pass at ${pstDateTime} for ${duration} seconds!`);
  }
};

// printPassTimes([{ duration: 575, risetime: 1613148799 },
//   { duration: 654, risetime: 1613154541 },
//   { duration: 653, risetime: 1613160357 },
//   { duration: 657, risetime: 1613166177 },
//   { duration: 628, risetime: 1613171989 }]);


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(printPassTimes(passTimes));
});

// let time = new Date(1613148799).toLocaleTimeString('us-en', { hour12: false});
// console.log(time);

// const time = (riseTime) => {
//   return new Date(riseTime).toLocaleTimeString('us-en', { hour12: false});
// };

// console.log(time(1613148799));

// const date = (dateTime) => {
//   return new Date(dateTime).toLocaleDateString(undefined);
// };

// console.log(date(1613148799));