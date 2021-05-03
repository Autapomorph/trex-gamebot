// Reply error with telegram error description
const replyErrorTelegram = async (ctx, error, extra) => {
  let errorString = '<b>Telegram returned an error!</b>';
  errorString += `\n<code>${error.description}</code>`;
  return ctx.replyWithHTML(errorString, extra);
};

// Reply unknown error
const replyErrorUnknown = async (ctx, extra) => {
  return ctx.replyWithHTML('Unknown error', extra);
};

module.exports = {
  replyErrorTelegram,
  replyErrorUnknown,
};
