var xml2js = require('xml2js');

exports.getTtcRoutes = (req, res) => {
  const got = require('got');

  got('http://webservices.nextbus.com/service/publicXMLFeed?command=routeList&a=ttc')
    .then(response => {

      console.log(response.body);

      xml2js.parseStringPromise(response.body /*, options */).then(function (result) {
        console.dir(result);
        console.log('Done');

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
exports.postTtcSpecific = (req, res) => {
}
