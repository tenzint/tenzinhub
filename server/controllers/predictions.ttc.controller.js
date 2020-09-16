/*
 * https://ckan0.cf.opendata.inter.prod-toronto.ca/dataset/8217e43a-bba2-4e6c-82f5-bf6d1a52545d/resource/ec9a4a76-a963-4cfb-85d9-044b5a87af77/download/xml-feed-documentation.pdf
 */

var xml2js = require('xml2js');
const got = require('got');

// Get a list of all Bus/Streetcar routes. eg. 76, Royal York Road bus...
exports.postTtcPredictions = (req, res) => {
  let stopId = req.body.stopId;
  if (!stopId) {
    stopId = '0001';
    console.log('Client did not set the stop Id of TTC bus - defaulting to 0001');
  }
  let routeString;
  if (!req.body.routeTag) {
    routeString = '';
    console.log('Client did not set the route tag of TTC bus - sending predictions of all vehicles');
  } else {
    routeString = `&routeTag=${req.body.routeTag}`;
  }
  let predictionsUrl = `http://webservices.nextbus.com/service/publicXMLFeed?command=predictions&a=ttc&stopId=${stopId}${routeString}`;
  console.log(predictionsUrl);
  got(predictionsUrl)
    .then(response => {
      xml2js.parseStringPromise(response.body /*, options */)
        .then(function (result) {
          return res.send({ message: result });
        })
        .catch(function (err) {
          // Failed
          return res.status(400).send({ error: err });
        });

    })
    .catch(error => {
      console.log(error.response.body);
      //=> 'Internal server error ...'
      return res.status(400).send({ error: error });
    });
}