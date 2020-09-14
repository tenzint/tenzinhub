const { RateLimiterMongo } = require('rate-limiter-flexible');
const mongoose = require('mongoose');
const dbConfig = require('../config/db.config');

const mongoOpts = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const mongoConn = mongoose.createConnection(dbConfig.rate_limiter_url, mongoOpts);

const rateLimiter = new RateLimiterMongo({
  storeClient: mongoConn,
  keyPrefix: 'middleware',
  points: 10, // 10 requests
  duration: 1, // per 1 second by IP
});

const rateLimiterMiddleware = (req, res, next) => {
  rateLimiter.consume(req.ip)
    .then(() => {
      next();
    })
    .catch(() => {
      res.status(429).send('Too Many Requests');
    });
};

module.exports = rateLimiterMiddleware;