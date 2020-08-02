const gameInlineKeyboard = require('../keyboards/gameInline');

module.exports = async ctx => {
  return ctx.replyWithGame('dino', gameInlineKeyboard);
};
