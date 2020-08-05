const gameConfig = require('../config/game');
const gameInlineKeyboard = require('../keyboards/gameInline');

module.exports = async ctx => {
  return ctx.answerInlineQuery([
    {
      type: 'game',
      id: gameConfig.name,
      game_short_name: gameConfig.name,
      ...gameInlineKeyboard,
    },
  ]);
};
