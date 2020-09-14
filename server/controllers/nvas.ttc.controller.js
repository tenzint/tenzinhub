exports.nvasTtc = (req, res) => {
  const
    https = require("https"),
    packageId = "8217e43a-bba2-4e6c-82f5-bf6d1a52545d";

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
          return reject(error);
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