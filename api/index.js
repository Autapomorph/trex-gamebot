require('dotenv').config();

const bot = require('../src/bot');
const WEBHOOK_OPTIONS = require('../src/config/webhook');

const webhookCallback = bot.webhookCallback(WEBHOOK_OPTIONS.hookPath);

module.exports = (req, res) => {
  return webhookCallback(req, res);
};
