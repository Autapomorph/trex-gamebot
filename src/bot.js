const Telegraf = require('telegraf');
const { compose } = require('telegraf/composer');
const jwt = require('jsonwebtoken');

const { logUpdate, rateLimit } = require('./middlewares');
const commandsList = require('./config/commands');
const commands = require('./utils/bot/commands');
const errorBoundary = require('./utils/bot/errorBoundary');

const { BOT_TOKEN, JWT_SECRET, GAME_URL } = process.env;

// init bot
const bot = new Telegraf(BOT_TOKEN, {
  telegram: {
    webhookReply: false,
  },
});

// register bot commands
commands.register(commandsList);

// register middlewares
bot.use(compose([logUpdate, rateLimit]));

// handle /start command
bot.start(async ctx => ctx.replyWithGame('dino'));

// handle /play command
bot.command('play', async ctx => ctx.replyWithGame('dino'));

// handle inline query
bot.on('inline_query', async ctx => {
  return ctx.answerInlineQuery([
    {
      type: 'game',
      id: 'dino',
      game_short_name: 'dino',
    },
  ]);
});

// handle game query
bot.gameQuery(async ctx => {
  const { from, message = { chat: {} }, inline_message_id: inlineMessageId } = ctx.callbackQuery;
  const userId = from.id;
  const chatId = message.chat.id;
  const messageId = message.message_id;

  const token = jwt.sign(
    {
      userId,
      chatId,
      messageId,
      inlineMessageId,
    },
    JWT_SECRET,
    {
      noTimestamp: true,
    },
  );

  return ctx.answerGameQuery(`${GAME_URL}?token=${token}`);
});

// register error handler
bot.catch(errorBoundary);

module.exports = bot;
