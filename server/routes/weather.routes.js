const controller = require("../controllers/weather.controller");

module.exports = function(app) {
  app.post("/api/weather/full", controller.AllWeatherData);
}