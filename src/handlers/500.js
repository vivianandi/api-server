'use strict';

function handle500(err, req, res, next) {
  const error = err.message ? err.message : err;
  const errorObj = {
    status: 500,
    message: error,
  };
  res.status(500).json(errorObj);
}

module.exports = handle500;