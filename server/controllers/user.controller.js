const db = require("../models");
const User = db.users;

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.email) {
    res.status(400).send({ message: "Email can not be empty!" });
    return;
  }
  if (!req.body.password) {
    res.status(400).send({ message: "password can not be empty!" });
    return;
  }

  // Create a User
  const user = new User({
    email: req.body.email,
    password: req.body.password
  });

  // Save User in the database
  user
    .save(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};
