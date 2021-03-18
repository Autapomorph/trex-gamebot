const { Markup } = require('telegraf');

module.exports = Markup.inlineKeyboard([
  Markup.gameButton('🎮 Play Dino!'),
  Markup.switchToChatButton('↩️ Share with friends', 'play'),
]);
