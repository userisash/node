const axios = require('axios');

axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(res => {
    console.log(res.data.url);
    console.log(res.data.explanation);
  })
  .catch(error => {
    console.log(error);
  });