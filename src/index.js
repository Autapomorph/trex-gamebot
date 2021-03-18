require('dotenv').config();

const bot = require('./bot');
const WEBHOOK_OPTIONS = require('./config/webhook');
const logger = require('./utils/logger');
const { isProd } = require('./utils');

const { NODE_ENV, WEBHOOK_DOMAIN } = process.env;

logger.info(`Application is running in ${NODE_ENV} mode`);

if (!isProd) {
  logger.info('Logging initialized at debug level');
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

async function shutdown(signal) {
  logger.info(`Shutting down${signal ? ` (${signal})` : ''}`);
  bot.stop(signal);
  process.exit(0);
}

process.on('SIGHUP', shutdown);
process.on('SIGINT', shutdown);
process.on('SIGQUIT', shutdown);
process.on('SIGTERM', shutdown);
