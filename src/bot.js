const { Telegraf, Composer } = require('telegraf');

const { logUpdate, rateLimit } = require('./middlewares');
const controllers = require('./controllers');
const commandsList = require('./config/commands');
const commands = require('./utils/bot/commands');
const errorBoundary = require('./utils/errors/errorBoundary');

const { BOT_TOKEN } = process.env;

// init bot
const bot = new Telegraf(BOT_TOKEN, {
  telegram: {
    webhookReply: false,
  },
});

// register bot commands
commands.register(bot.telegram)(commandsList);

// register middlewares
bot.use(Composer.compose([logUpdate, rateLimit]));

// handle commands
bot.command(['start', 'play', 'game'], controllers.game.reply);

// handle inline query
bot.on('inline_query', controllers.game.inline);

// handle game query
bot.gameQuery(controllers.game.query);

// register error handler
bot.catch(errorBoundary);

module.exports = bot;
