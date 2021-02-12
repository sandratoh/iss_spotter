// require and run main fetch function
const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = passTimes => {
  for (let pass of passTimes) {
    
    let datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    
    const dateTimeOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour12:false,
      timeZone: 'Canada/Pacific',
      timeZoneName: 'long'
    };
    
    let pstDateTime = datetime.toLocaleString('en-CA', dateTimeOptions);
    
    let duration = pass.duration;
    
    console.log(`Next pass at ${pstDateTime} GMT-0700 for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(printPassTimes(passTimes));
});