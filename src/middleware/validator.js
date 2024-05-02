'use strict';

module.exports = (req, res, next) => {
  console.log(`I am the middleware, I am required for your app to work, ${new Date()}`);
  next();
};