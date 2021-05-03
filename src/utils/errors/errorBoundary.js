const { TelegramError } = require('telegraf');

const { replyErrorTelegram, replyErrorUnknown } = require('./reply');
const ERROR_TYPES = require('./types');
const ERROR_SETS = require('./sets');
const validateError = require('./validateErrorType');
const logger = require('../logger');

module.exports = async (error, ctx) => {
  // Do not log or reply if blocked by user
  if (validateError(ERROR_TYPES.BLOCKED_BY_USER, error)) {
    return;
  }

  const user = ctx.from?.user ?? {};
  const { match, update, updateType } = ctx;

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
  });

  if (error instanceof TelegramError) {
    if (validateError(ERROR_SETS.DO_NOT_REPLY, error)) {
      return;
    }

    return replyErrorTelegram(ctx, error).catch(logger.error);
  }

  return replyErrorUnknown(ctx).catch(logger.error);
};
