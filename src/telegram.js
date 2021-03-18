const { Telegram } = require('telegraf');

const telegram = new Telegram(process.env.BOT_TOKEN, {
  webhookReply: false,
});

module.exports = telegram;
