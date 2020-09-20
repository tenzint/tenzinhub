const weather = require('weather-js');

exports.AllWeatherData = (req, res) => {
  let location = req.body.location || 'Toronto, ON';
  if (location == '')
    location = 'Toronto, ON';
    console.log('location = ', location);
  let degree = req.body.degree || 'C';
  weather.find({
    search: location,
    degreeType: degree
  }, function(err, result) {
    if(err) {
      console.log(err);
      res.status(400).send({ message: err });
      return;
    }    
    res.status(200).send(result);
    return;
  });
}