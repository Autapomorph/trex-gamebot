const ERROR_TYPES = require('./types');

// Base answer error
const answerError = async (ctx, tKey, resource, showAlert = false, extra = {}) => {
  return ctx.answerCbQuery(ctx.i18n.t(tKey, resource), showAlert, extra);
};

// Answer error with telegram error description
const answerErrorTelegram = async (ctx, error, showAlert = true, extra) => {
  return answerError(ctx, ERROR_TYPES.APP.ANSWER, { error: error.description }, showAlert, extra);
};

// Answer unknown error
const answerErrorUnknown = async (ctx, showAlert = true, extra) => {
  return answerError(ctx, ERROR_TYPES.APP.UNKNOWN, null, showAlert, extra);
};

module.exports = {
  answerError,
  answerErrorTelegram,
  answerErrorUnknown,
};
