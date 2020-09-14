const nvasController = require("../controllers/nvas.ttc.controller");
const routesController = require("../controllers/routes.ttc.controller");

module.exports = function(app) {
  app.post("/api/ttc/nvas", nvasController.nvasTtc);
  app.post("/api/ttc/routes", routesController.routesTtc);
}