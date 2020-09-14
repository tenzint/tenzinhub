const weather = require('weather-js');

exports.AllWeatherData = (req, res) => {
  let location = 'Toronto, ON';
  weather.find({
    search: location,
    degreeType: 'C'
  }, function(err, result) {
    if(err) console.log(err);
    let fullWeatherData = JSON.stringify(result, null, 2);
    console.log(fullWeatherData);
    
    res.status(200).send(result);
  })
}