const ttcController = require("../controllers/ttc.controller");

module.exports = function(app) {
  app.get("/api/ttc/routes", ttcController.getTtcRoutes);
  app.post("/api/ttc/nvas", ttcController.postTtcSpecific);
}