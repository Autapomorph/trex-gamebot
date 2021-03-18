const { TelegramError } = require('telegraf');

/**
 * Validate Telegram error description by regex
 * @param {RegExp | RegExp[]} errorDescriptionRegex - Regex or array of regex to test error against
 * @param {TelegramError} error - Error to be tested
 * @return {boolean} Whether or not (one of) regex pattern exists in error description
 */
const validateTelegramErrorType = (errorDescriptionRegex, error) => {
  if (!errorDescriptionRegex) return false;
  if (!(error instanceof TelegramError)) return false;

  if (Array.isArray(errorDescriptionRegex)) {
    return errorDescriptionRegex.some(re => re.test(error.description));
  }

  return errorDescriptionRegex.test(error.description);
};

module.exports = validateTelegramErrorType;
