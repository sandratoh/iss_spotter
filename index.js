// require and run main fetch function
const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = passTimes => {
  for (let pass of passTimes) {
    
    // let time = new Date(pass.risetime).toLocaleTimeString('us-en', { hour12: false});
    let datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', timeZone: 'Canada/Pacific' };
    const pstDate = datetime.toLocaleDateString('en-CA', dateOptions);
    
    const timeOptions = { hour12:false, timeZone: 'Canada/Pacific' };
    const pstTime = datetime.toLocaleTimeString('en-CA', timeOptions);
    
    // let pstDateTime = datetime.toLocaleString('en-CA', options);
    
    let duration = pass.duration;
    
    console.log(`Next pass at ${pstDate} ${pstTime} GMT-0700 (Pacific Daylight Time) for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(printPassTimes(passTimes));
});