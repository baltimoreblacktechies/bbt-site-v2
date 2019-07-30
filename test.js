// install axios if we don't have it installed
// search through api docs to find event info endpoint
// write the code to make the call
// run it
// SHIP IT!

const axios = require('axios');

// Make a request for a user with a given ID
axios
  .get(
    'https://api.meetup.com/Baltimore-Black-Techies-Meetup?&sign=true&photo-host=public'
  )
  .then(function(response) {
    // handle success
    console.log(response);
  })
  .catch(function(error) {
    // handle error
    console.log(error);
  })
  .finally(function() {
    // always executed
  });
