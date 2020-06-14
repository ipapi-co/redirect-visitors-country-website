
var defaultCountry = 'US';
var defaultSite    = 'https://google.com';
var otherSite      = 'https://google.co.uk'

fetch('https://ipapi.co/country/')
  .then(response => {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error('HTTP Error ' + response.status);
    }
  })
  .then(country => {
    if (country == defaultCountry) {
        console.log('Already on default site');
    } else {
        console.log('Redirecting to country specific website');
        window.location = otherSite;
    }
  })
  .catch(function(error) {
    /* Error scenarios
     - Network connectivity error
     - Script blocked by browser extension ( try to disable blockers etc. )
     - 429 error ( too many requests, sign-up for a higher limit plan at http://ipapi.co/pricing )
    */
    console.log(error);
  });

