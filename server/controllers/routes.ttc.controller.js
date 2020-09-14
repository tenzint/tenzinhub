exports.routesTtc = (req, res) => {
  const
    https = require("https"),
    packageId = "7795b45e-e65a-4465-81fc-c36b9dfff169";

  // promise to retrieve the package
  const getPackage = new Promise((resolve, reject) => {
    https.get(`https://ckan0.cf.opendata.inter.prod-toronto.ca/api/3/action/package_show?id=${packageId}`, (response) => {
      let dataChunks = [];
      response
        .on("data", (chunk) => {
          dataChunks.push(chunk)
        })
        .on("end", () => {
          let data = Buffer.concat(dataChunks)
          return resolve(JSON.parse(data.toString())["result"])
        })
        .on("error", (error) => {
          return reject(error)
        })
    });
  });

  getPackage.then(pkg => {
    // this is the metadata of the package
    console.log(pkg);
    res.send({ message: pkg });
    return;
  }).catch(error => {
    console.error(error);
    res.status(500).send({ message: error });
    return;
  })
}