require('dotenv').config();

const bot = require('./bot');
const WEBHOOK_OPTIONS = require('./config/webhook');
const logger = require('./utils/logger');
const { isProd } = require('./utils');

const { WEBHOOK_DOMAIN } = process.env;

if (!isProd) {
  logger.debug('Logging initialized at debug level');
}

if (WEBHOOK_DOMAIN) {
  launchWebhookMode(bot);
} else {
  launchPollingMode(bot);
}

async function launchWebhookMode(botInstance) {
  await botInstance.launch({
    webhook: WEBHOOK_OPTIONS,
  });

  const webhookStatus = await botInstance.telegram.getWebhookInfo();
  logger.info('Bot started in webhook mode');
  logger.debug('Webhook status:\n%O', webhookStatus);
}

async function launchPollingMode(botInstance) {
  await botInstance.launch();
  logger.info('Bot started in polling mode');
}
