/*
 * https://ckan0.cf.opendata.inter.prod-toronto.ca/dataset/8217e43a-bba2-4e6c-82f5-bf6d1a52545d/resource/ec9a4a76-a963-4cfb-85d9-044b5a87af77/download/xml-feed-documentation.pdf
 */

 var xml2js = require('xml2js');
const got = require('got');

// Get a list of all Bus/Streetcar routes. eg. 76, Royal York Road bus...
exports.getTtcAllRoutes = (req, res) => {
  got('http://webservices.nextbus.com/service/publicXMLFeed?command=routeList&a=ttc')
    .then(response => {
      xml2js.parseStringPromise(response.body /*, options */)
        .then(function (result) {
          return res.send({ message: result.body.route });
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

// Get the detailed route of a specific bus/streetcar given its ID number
// Param: req.body.routeTag
exports.postTtcSpecificRoute = (req, res) => {
  let routeTag = req.body.routeTag;
  if (!routeTag) {
    routeTag = '501';
    console.log('Client did not set the route tag of TTC bus - defaulting to 501');
  }
  got(`http://webservices.nextbus.com/service/publicXMLFeed?command=routeConfig&a=ttc&r=${routeTag}`)
    .then(response => {
      xml2js.parseStringPromise(response.body /*, options */)
        .then(function (result) {
          // console logging the unparsed XML data takes dozens of seconds to just print. Too long!
          return res.send({ message: result.body.route[0] });
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
