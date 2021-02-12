// contain most of the logic for fetching data from each API standpoint
const request = require('request');

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const fetchMyIP = callback => {
  // use request to fetch IP address from JSON API
  request('https://api.ipify.org/?format=json', (error, response, body) => {
    if (error) {
      const error = 'An error occurred!. You might want to check the URL or web server.';
      return callback(error, null);
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      return callback(Error(msg), null);

    } else {
      let ip = JSON.parse(body).ip;
      return callback(null, ip);
    }
  });
};

// Retrive latitude and longitude with Geo IP
const fetchCoordsByIP = (ip, callback) => {
  request('https://freegeoip.app/json/', (error, response, body) => {
    let coords = {};
    coords.latitude = JSON.parse(body).latitude;
    coords.longitude = JSON.parse(body).longitude;
    console.log(coords);
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP };