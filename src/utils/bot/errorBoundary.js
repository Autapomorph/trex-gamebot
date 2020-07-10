const logger = require('../logger');

module.exports = async (error, ctx) => {
  const { from: user = {}, match, update, updateType, updateSubTypes } = ctx;

  logger.error(error, {
    description: 'Bot caught an unexpected exception:',
    user: {
      id: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      username: user.username,
      languageCode: user.language_code,
      isBot: user.is_bot,
    },
    tags: {
      unexpected: true,
    },
    match,
    update,
    updateType,
    updateSubTypes,
  });

  // Error sent from Telegram
  if (error.description) {
    // Forbidden: bot was blocked by the user
    if (/forbidden.*bot.*blocked.*user/i.test(error.description)) {
      return;
    }

    // Too Many Requests: retry after *
    if (/too.*many.*requests/i.test(error.description)) {
      return;
    }

    return ctx.replyWithHTML(
      `<b>Telegram returned an error!</b>\n<code>${error.description}</code>`,
    );
  }

  return ctx.reply('Unknown error');
};
