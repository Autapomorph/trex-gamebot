const ERROR_TYPES = require('./types');

// Base reply error
const replyError = async (ctx, tKey, resource, extra = {}) => {
  return ctx.replyWithHTML(ctx.i18n.t(tKey, resource), extra);
};

// Reply error to specified message
const replyErrorToMessage = async (
  ctx,
  tKey,
  resource,
  messageId = ctx.message?.message_id,
  extra = {},
) => {
  return replyError(ctx, tKey, resource, {
    reply_to_message_id: messageId,
    allow_sending_without_reply: true,
    ...extra,
  });
};

// Reply error with telegram error description
const replyErrorTelegram = async (ctx, error, extra) => {
  return replyError(ctx, ERROR_TYPES.APP.REPLY, { error: error.description }, extra);
};

// Reply unknown error
const replyErrorUnknown = async (ctx, extra) => {
  return replyError(ctx, ERROR_TYPES.APP.UNKNOWN, null, extra);
};

module.exports = {
  replyError,
  replyErrorToMessage,
  replyErrorTelegram,
  replyErrorUnknown,
};
