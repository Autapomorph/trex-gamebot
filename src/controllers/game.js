const jwt = require('jsonwebtoken');

const gameConfig = require('../config/game');
const gameInlineKeyboard = require('../keyboards/gameInline');

const { JWT_SECRET, GAME_URL } = process.env;

const reply = async ctx => {
  return ctx.replyWithGame(gameConfig.name, gameInlineKeyboard);
};

const inline = async ctx => {
  return ctx.answerInlineQuery([
    {
      type: 'game',
      id: gameConfig.name,
      game_short_name: gameConfig.name,
      ...gameInlineKeyboard,
    },
  ]);
};

const query = async ctx => {
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
};

module.exports = {
  reply,
  inline,
  query,
};
