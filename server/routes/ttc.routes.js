const ttcRoutesController = require("../controllers/routes.ttc.controller");
const ttcPredictionsController = require("../controllers/predictions.ttc.controller");

module.exports = function(app) {
  app.get("/api/ttc/routes/all", ttcRoutesController.getTtcAllRoutes);
  app.get("/api/ttc/routes/specific", ttcRoutesController.postTtcSpecificRoute);

  // TTC predictions
  app.post("/api/ttc/predictions", ttcPredictionsController.postTtcPredictions);


}