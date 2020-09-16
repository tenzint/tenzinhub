const ttcController = require("../controllers/ttc.controller");

module.exports = function(app) {
  app.get("/api/ttc/routes/all", ttcController.getTtcAllRoutes);
  app.post("/api/ttc/routes/specific", ttcController.postTtcSpecificRoute);
}