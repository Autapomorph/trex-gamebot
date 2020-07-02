const rateLimit = require('telegraf-ratelimit');

const limitConfig = {
  window: 300,
  limit: 1,
  onLimitExceeded: ctx =>
    ctx.replyWithHTML("You're sending too many requests! Stop doing it and take a rest)"),
};

module.exports = rateLimit(limitConfig);
