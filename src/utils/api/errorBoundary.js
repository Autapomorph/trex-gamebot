const asyncHandler = require('express-async-handler');
const createError = require('http-errors');

const errorBoundary = fn => {
  return asyncHandler(async (...args) => {
    try {
      return await fn(...args);
    } catch (error) {
      // Failed request
      if (error.name === 'FetchError' && error.code === 'ETIMEDOUT') {
        throw createError.GatewayTimeout();
      }

      // Telegram error
      if (error.response && error.response.ok === false && error.response.description) {
        throw createError.BadRequest(error.response.description);
      }

      throw createError.InternalServerError();
    }
  });
};

module.exports = errorBoundary;
