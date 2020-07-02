const { Telegram } = require('telegraf');

const { BOT_TOKEN } = process.env;

// init telegram
const telegram = new Telegram(BOT_TOKEN, {
  webhookReply: false,
});

module.exports = telegram;
